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

**Events gallery:** drop photos into `public/images/events/` and update `EVENTS` in `src/data.ts`.

| Drop photos here | Shows in |
|------------------|----------|
| `public/images/events/prakriti-resource-center/` | **Prakriti Resource Center** gallery (4 photos) |
| `public/images/events/ime-group/` | **IME Group** gallery (4 photos) |
| `public/videos/hero.mp4` + set `HERO_MEDIA.videoActive = true` | Hero video (currently shows a photo) |
| `public/favicon.png` (180×180) · `public/logo.png` · `public/images/og-image.png` | Favicon / branding / share |

Missing files auto-show a tasteful placeholder with the target path as a caption — the site never breaks on missing media. Full table in `AGENTS.md` → "Adding media".

## Deployment

Push to `main`. The GitHub Actions workflow builds, type-checks, copies `CNAME`, and deploys to GitHub Pages → `natds.safalai.com.np`.

One-time setup on GitHub: **Settings → Pages → Source: GitHub Actions**, plus DNS CNAME record `natds` → `Ramtamang-2058.github.io`.

## Project layout

```
src/
├── components/
│   ├── layout/    Navbar · Footer · WhatsAppDock
│   ├── media/     MediaSlot (graceful asset fallback)
│   └── sections/  Hero · QuoteBar · ResearcherProgram · Events · ManagerAI · Services · Training · Approach · Contact
├── hooks/         useNavigation (single-page scroll nav)
├── types/         TS interfaces
├── pages/         HomePage
├── data.ts        ← ALL copy & content lives here
├── App.tsx · main.tsx · index.css
public/            static assets (images, videos, robots.txt, sitemap.xml)
index.html         SEO meta + JSON-LD
```

© 2026 Nepal AI & Tech Digital Solution