# AGENTS.md

## What this is

**NATDS — Nepal AI & Tech Digital Solution.** A static, single-page React + Vite corporate site for AI-for-researchers programs and tech digital solutions. **Editorial "field notes" theme** — warm paper + ink + terracotta, gallery-forward with photography. English only. Deployed to GitHub Pages at `natds.safalai.com.np` (repo: `Ramtamang-2058/natds`).

Primary offering: **Researcher Program** (flagship). Secondary: **Manager AI** (coming soon). Contact is **WhatsApp-first** — direct number `+977 981-8488715`. A prominent **Events gallery** shows recent work (Prakriti Resource Center, Researcher Training) where real photos drop in.

## Commands (run from repo root)

```bash
npm run dev      # Vite dev server (port 5173)
npm run build    # Vite build → dist/
npm run preview  # Serve the production build locally
npm run lint     # tsc --noEmit (type-check only, no ESLint)
npm run clean    # rm -rf dist
```

**There are no tests, no formatter, and no ESLint.** `lint` is the TypeScript compiler in check mode.

## Repo structure

- `index.html` → **source of truth** (SPA shell + all SEO meta + JSON-LD). Edit here, not in `dist/`.
- `dist/` → build output (never edit, never commit)
- `public/` → static assets served at root (favicon, logo, og-image, robots, sitemap)
- `public/images/events/` → **recent-event photos** (see "Adding media" below)
- `public/videos/` → hero video (`hero.mp4`)
- `CNAME` → custom domain `natds.safalai.com.np` (copied into `dist` by CI)
- `.github/workflows/deploy.yml` → CI/CD (build → Pages → domain)
- `src/` → all source code

### Source layout (`src/`)

| Directory | Purpose |
|-----------|---------|
| `pages/` | `HomePage.tsx` (only page; single-page site, no router) |
| `components/sections/` | Hero, ResearcherProgram, Events, ManagerAI, Services, Training, Approach, Contact |
| `components/layout/` | Navbar, Footer, WhatsAppDock |
| `components/media/` | `MediaSlot.tsx` (media with ken-burns + graceful placeholder) |
| `hooks/` | `useNavigation.ts` (smooth-scroll + active section) |
| `types/` | TypeScript interfaces |
| `data.ts` | **All content** — brand, links, products, events, services, programs, approach |
| `App.tsx`, `main.tsx`, `index.css` | Root wiring + design system |

**Routing:** none (single page). Nav links smooth-scroll to `#section-id` anchors via `useNavigation`.

## Configuration

- **Tailwind CSS v4** — theme tokens via `@theme` in `src/index.css`, NOT a `tailwind.config.js`.
- **`@` path alias** → `src/` root (configured in `vite.config.ts` + `tsconfig.json`).
- **`DISABLE_HMR` env var** — set to `"true"` to disable Vite file watching (used in AI Studio to prevent flickering during agent edits).
- **`base: '/'`** — correct for GitHub Pages with a custom root domain. Don't change.
- **No runtime env vars needed** — see `.env.example`. Site is fully static.

## Design system ("Editorial Field Notes")

- **Fonts:** Inter (body), **Newsreader** (display/headings — serif, italic accents), JetBrains Mono (labels)
- **Palette:** warm paper `#F4F0E8` (+ `#EDE8DC`, `#FAF8F3`), ink `#171511`, terracotta accent `#C05A24`, deep night `#171511`
- **Deliberately NOT "vibe-coded":** no neon gradients, no glassmorphism, no terminal mocks, no particle/marquee effects. Just hairlines, serif numerals, whitespace and photography.
- **Motifs in `index.css`:** `eyebrow`, `section-index`, `hairline-t/b`, `btn-clay`, `btn-ghost`, `caption`, `kenburns` (cinematic zoom), `film-grain`, `fade-up`, `.nav-ink`/`.nav-night`
- **Motion library:** `motion` (v12), `lucide-react` icons
- **Light/dark rhythm:** paper sections (Hero, Research, Events, Services, Training, Approach) alternate with two dark night sections (ManagerAI, Contact) + night Footer

## Key gotchas

1. **WhatsApp is the single contact channel.** Number lives in `src/data.ts` → `BRAND.whatsappNumber` (`9779818488715`). Pre-built links in `WHATSAPP_LINKS`. Update the number in ONE place.
2. **No i18n.** Bilingual (Nepali) deliberately omitted — English only.
3. **MediaSlot fallback:** every photo/video slot renders a paper-toned placeholder with the expected path as a caption when the file is absent. Add files under `public/` and the placeholders disappear automatically.
4. **Hero media:** the hero expects `/videos/hero.mp4` with poster `/images/events/researcher-training/poster.jpg`. Until then, the poster slot shows a placeholder.
5. **`scroll-padding-top`** on `html` keeps anchored sections clear of the fixed navbar.

## Adding new content/data

1. Add/update the interface in `src/types/index.ts`
2. Add the data in `src/data.ts` (all copy lives here — edit copy in this one file)
3. Build the section in `src/components/sections/`
4. Wire it into `src/pages/HomePage.tsx` (and `NAV_LINKS` in `data.ts` if it deserves a nav entry)

## Adding media — events gallery (drop photos here)

Drop photos into `public/images/events/<event>/` and update `imagePaths` in `EVENTS` (`src/data.ts`). Missing files auto-show placeholders — the site never breaks on missing images.

| Folder | Event | Default paths referenced |
|--------|-------|--------------------------|
| `public/images/events/prakriti-resource-center/` | **Prakriti Resource Center** | `1.jpg`, `2.jpg`, `3.jpg` |
| `public/images/events/researcher-training/` | **Researcher Training** | `1.jpg`, `2.jpg`, `3.jpg` + `poster.jpg` (hero poster) |
| `public/videos/hero.mp4` | Hero background video | — |

**Add a new event:** copy an `EVENTS` block in `src/data.ts`, create the folder under `public/images/events/`, add it to the grid in `src/components/sections/Events.tsx` if you want a different layout.

Other planned assets:

| Asset | Where it appears | Reference |
|-------|------------------|-----------|
| Open Graph share image | Social sharing | `public/images/og-image.png` (exists as placeholder) |
| Logo | Branding | `public/logo.png` (exists as placeholder) |
| Favicon | Browser | `public/favicon.svg` (working) + `favicon.png` (placeholder) |

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages → `natds.safalai.com.np` (domain via `CNAME` + Pages custom domain setting).

> GitHub Pages settings: **Source = GitHub Actions**. DNS: CNAME record `natds` → `Ramtamang-2058.github.io`.