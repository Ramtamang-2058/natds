# NATDS — Nepal AI & Tech Digital Solution

**AI for Researchers. Built for Discovery.**

Static, single-page corporate site for NATDS (Nepal AI & Tech Digital Solution) — research-grade AI systems, the **Researcher Program** flagship, and digital transformation for Nepal's scholars, institutions and enterprises.

- **Live site:** https://natds.safalai.com.np
- **Stack:** React 19 · Vite 6 · Tailwind CSS v4 · TypeScript · motion · lucide-react
- **Deploy:** GitHub Actions → GitHub Pages (custom domain)
- **Contact:** WhatsApp-first — [+977 981-8488715](https://wa.me/9779818488715)

## Development

```bash
npm install
npm run dev       # local dev server on :5173
npm run lint      # tsc --noEmit type-check
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Adding images & videos

Drop files into `public/` and reference by absolute path (`/images/…`, `/videos/…`).
Until a file exists, the site shows generative CSS placeholder art automatically.

Planned media slots:

| File | Where it appears |
|------|------------------|
| `public/videos/hero.mp4` (+ `public/images/hero-poster.jpg`) | Hero visual panel |
| `public/images/og-image.png` | Social share image |
| `public/favicon.png` (180×180) | Favicon / app icon |
| `public/logo.png` | Branding |

See `AGENTS.md` → "Adding media" for the full table.

## Deployment

Push to `main`. The GitHub Actions workflow builds, type-checks, copies `CNAME`, and deploys to GitHub Pages → `natds.safalai.com.np`.

One-time setup on GitHub: **Settings → Pages → Source: GitHub Actions**, plus DNS CNAME record `natds` → `Ramtamang-2058.github.io`.

## Project layout

```
src/
├── components/
│   ├── layout/    Navbar · Footer · WhatsAppDock
│   ├── media/     MediaSlot (graceful asset fallback)
│   └── sections/  Hero · Marquee · ResearcherProgram · ManagerAI · Services · Training · WhyNATDS · Contact
├── hooks/         useNavigation (single-page scroll nav)
├── types/         TS interfaces
├── pages/         HomePage
├── data.ts        ← ALL copy & content lives here
├── App.tsx · main.tsx · index.css
public/            static assets (images, videos, robots.txt, sitemap.xml)
index.html         SEO meta + JSON-LD
```

© 2026 Nepal AI & Tech Digital Solution