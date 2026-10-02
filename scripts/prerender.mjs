import {mkdir, readFile, writeFile} from 'node:fs/promises';
import {createServer} from 'vite';

// Use Vite's existing TS/TSX loader; no production server or extra dependencies.
const server = await createServer({server: {middlewareMode: true, watch: null}, appType: 'custom'});
const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]));
const json = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

try {
  const {BRAND, TRAINING_PAGES, renderHome, renderTraining} = await server.ssrLoadModule('/src/entry-static.tsx');
  const shell = await readFile('dist/index.html', 'utf8');
  const placeholder = '<div id="root"></div>';
  if (!shell.includes(placeholder)) throw new Error('Missing homepage prerender placeholder');
  await writeFile('dist/index.html', shell.replace(placeholder, () => `<div id="root">${renderHome()}</div>`));

  // Training pages are ordinary HTML documents. Reuse the built CSS and fonts,
  // but remove homepage metadata and scripts so they never mount the SPA.
  const sharedHead = shell.match(/<head>([\s\S]*?)<\/head>/)[1]
    .replace(/<script\b[\s\S]*?<\/script>/g, '')
    .replace(/<title>[\s\S]*?<\/title>/g, '')
    .replace(/<meta\b[^>]*(?:name|property)="(?:description|keywords|robots|og:[^"]+|twitter:[^"]+)"[^>]*>/g, '')
    .replace(/<link\b[^>]*rel="(?:canonical|modulepreload)"[^>]*>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '');

  for (const page of TRAINING_PAGES) {
    const url = `${BRAND.url}/training/${page.slug}/`;
    const title = `${page.title} | NATDS`;
    const structured = {
      '@context': 'https://schema.org',
      '@graph': [
        {'@type': 'WebPage', '@id': url, url, name: page.title, description: page.description, inLanguage: 'en',
          isPartOf: {'@id': `${BRAND.url}/#website`}, about: {'@id': `${url}#training`}},
        {'@type': page.programId ? 'Course' : 'Service', '@id': `${url}#training`, name: page.title,
          description: page.description, url, provider: {'@type': 'Organization', '@id': `${BRAND.url}/#organization`, name: BRAND.name, url: `${BRAND.url}/`}},
        {'@type': 'BreadcrumbList', itemListElement: [
          {'@type': 'ListItem', position: 1, name: BRAND.name, item: `${BRAND.url}/`},
          {'@type': 'ListItem', position: 2, name: page.title, item: url},
        ]},
      ],
    };
    const head = `${sharedHead}
      <title>${escape(title)}</title>
      <meta name="description" content="${escape(page.description)}" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href="${url}" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="NATDS" />
      <meta property="og:title" content="${escape(title)}" />
      <meta property="og:description" content="${escape(page.description)}" />
      <meta property="og:url" content="${url}" />
      <meta property="og:image" content="${BRAND.url}/images/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${escape(title)}" />
      <meta name="twitter:description" content="${escape(page.description)}" />
      <meta name="twitter:image" content="${BRAND.url}/images/og-image.png" />
      <script type="application/ld+json">${json(structured)}</script>`;
    const directory = `dist/training/${page.slug}`;
    await mkdir(directory, {recursive: true});
    await writeFile(`${directory}/index.html`, `<!doctype html><html lang="en"><head>${head}</head><body>${renderTraining(page.slug)}</body></html>`);
  }

  const sitemap = await readFile('public/sitemap.xml', 'utf8');
  const entries = TRAINING_PAGES.map((page) => `  <url><loc>${BRAND.url}/training/${page.slug}/</loc></url>`).join('\n');
  await writeFile('dist/sitemap.xml', sitemap.replace('</urlset>', `${entries}\n</urlset>`));
  console.log(`Prerendered homepage and ${TRAINING_PAGES.length} training pages.`);
} finally {
  await server.close();
}
