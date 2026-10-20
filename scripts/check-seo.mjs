import assert from 'node:assert/strict';
import {readFile, access} from 'node:fs/promises';

// Validate the deployed artifact, including static links that cannot be checked
// by TypeScript. Run after npm run build.
const origin = 'https://natds.safalai.com.np';
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.equal(urls.length, new Set(urls).size, 'Duplicate sitemap URLs');
assert.equal(urls.length, 11, 'Expected homepage, four articles, five training pages and the verify page');
const titles = new Set();

for (const url of urls) {
  assert.ok(url.startsWith(`${origin}/`), `Unexpected origin: ${url}`);
  const pathname = new URL(url).pathname;
  const file = `dist${pathname}${pathname.endsWith('/') ? 'index.html' : ''}`;
  const html = await readFile(file, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert.ok(title && !titles.has(title), `Missing or duplicate title: ${url}`);
  titles.add(title);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `Expected one visible H1: ${url}`);
  assert.ok(html.includes(`<link rel="canonical" href="${url}"`), `Canonical mismatch: ${url}`);
  assert.match(html, /<meta name="description" content="[^"]+"/, `Missing description: ${url}`);
  assert.doesNotMatch(html, /<meta[^>]+content="[^"]*noindex/, `Unexpected noindex: ${url}`);
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    JSON.parse(match[1]);
  }
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)[^\"]*"/g)) {
    const target = match[1];
    if (target.startsWith('//')) continue;
    await access(`dist${target}${target.endsWith('/') ? 'index.html' : ''}`).catch(() => {
      throw new Error(`Missing local link or asset ${target} in ${url}`);
    });
  }
  if (pathname.startsWith('/training/')) {
    assert.doesNotMatch(html, /<script[^>]+type="module"/, 'Static training pages must not mount the homepage');
    assert.match(html, /https:\/\/wa\.me\/9779818488715\?text=/, 'Missing WhatsApp enquiry');
    assert.match(html, /\/assets\/[^" ]+\.css/, 'Missing built stylesheet');
  }
}
const home = await readFile('dist/index.html', 'utf8');
assert.doesNotMatch(home, /<div id="root"><\/div>/, 'Homepage was not prerendered');
for (const url of urls.filter((item) => item.includes('/training/'))) {
  assert.ok(home.includes(`href="${new URL(url).pathname}"`), `Training page not linked from homepage: ${url}`);
}
console.log(`SEO checks passed for ${urls.length} pages: HTML, metadata, JSON-LD, links, assets and sitemap.`);
