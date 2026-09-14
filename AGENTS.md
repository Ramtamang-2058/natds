# AGENTS.md

## What this is

**NATDS — Nepal AI & Tech Digital Solution.** A static, single-page React + Vite corporate site for AI-for-researchers programs and tech digital solutions. Editorial "field notes" theme — warm paper + deep forest green, gallery-forward with photography. English only. Deployed to GitHub Pages at `natds.safalai.com.np` (repo: `Ramtamang-2058/natds`).

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
| `components/sections/` | Hero, QuoteBar, ResearcherProgram, Events, ManagerAI, Services, Training, Approach, Contact |
| `components/layout/` | Navbar, Footer, WhatsAppDock |
| `components/media/` | `MediaSlot.tsx` (media with ken-burns + graceful placeholder) |
| `hooks/` | `useNavigation.ts` (smooth-scroll + active section) |
| `types/` | TypeScript interfaces |
| `data.ts` | **All content** — brand, links, products, events, services, programs, approach |
| `App.tsx`, `main.tsx`, `index.css` | Root wiring + design system |

**Routing:** none (single page). Nav links smooth-scroll to `#section-id` anchors via `useNavigation`.

**Section order (mirrors `HomePage.tsx`):** Hero → QuoteBar (`MANIFESTO` quote) → ResearcherProgram (`#research` 01) → Events (`#events` 02) → ManagerAI (`#managers`) → Services (`#services` 03) → Training (`#training` 04) → Approach → Contact (`#contact` 05). `NAV_LINKS` (research/events/services/training/contact) drives navbar, footer, and `useNavigation` active-section detection — keep ids in sync with rendered sections.

## Configuration

- **Tailwind CSS v4** — theme tokens via `@theme` in `src/index.css`, NOT a `tailwind.config.js`.
- **`@` path alias** → `src/` root (configured in `vite.config.ts` + `tsconfig.json`).
- **`DISABLE_HMR` env var** — set to `"true"` to disable Vite file watching (used in AI Studio to prevent flickering during agent edits).
- **`base: '/'`** — correct for GitHub Pages with a custom root domain. Don't change.
- **No runtime env vars needed** — see `.env.example`. Site is fully static.

## Design system ("Editorial Studio")

- **Fonts:** Inter (body), **Fraunces** (display/headings — serif, `font-weight: 400`, `letter-spacing: -0.01em`, italic em accents), **IBM Plex Mono** (labels/captions), loaded via `@import` in `index.css`.
- **Palette (from `@theme` in `index.css`):** paper `#FAF9F6` (`paper-2` `#F2EFE9` alt bands/card bg, `surface` `#FFFFFF` cards), ink `#1C1A17` (`ink-2` `#55504A`, `ink-3` `#8A837B`), hairline `line` `#E3DFD6`, accent deep forest `#20503C` (`accent-deep` `#16382A`, `accent-wash` `#D7E5DD`).
- **Tailwind color utilities:** tokens are `--color-*` → use as `bg-paper`, `bg-paper-2`, `bg-surface`, `text-ink`/`text-ink-2`/`text-ink-3`, `border-line`, `text-accent`/`bg-accent`/`bg-accent-deep`. **All-light rhythm** — no dark sections.
- **Deliberately NOT "vibe-coded":** no neon gradients, no glassmorphism (outside the nav blur), no terminal mocks, no particle/marquee effects. Just hairlines, serif numerals, whitespace and photography.
- **Motifs in `index.css`:** `.kicker` (green mono micro-label), `.caption` (mono micro-label), `hairline-t/b`, `btn-accent` (solid green pill), `btn-ghost` (outline pill), `.card` (paper-2, radius-12, hover lift), `card-surface` (white), `kenburns` (cinematic zoom), full-page film-grain via `body::after`, green `::selection`, `.nav-glass` (blurred paper navbar).
- **Section pattern:** `hairline-t` separator, `mx-auto max-w-6xl px-4 sm:px-6`, `py-24 lg:py-32`, 12-column grids, alternating `bg-paper` / `bg-paper-2`.
- **Motion library:** `motion` (v12, import from `motion/react`) — `whileInView` one-shot reveals (fade-up ~0.2–0.7s); `MotionConfig reducedMotion="user"` in `App.tsx`; `lucide-react` icons.

## Key gotchas

1. **WhatsApp is the single contact channel.** Number lives in `src/data.ts` → `BRAND.whatsappNumber` (`9779818488715`). Pre-built links in `WHATSAPP_LINKS`. Update the number in ONE place. The Contact form and all CTAs open `wa.me` links.
2. **No i18n.** Bilingual (Nepali) deliberately omitted — English only.
3. **MediaSlot fallback:** every photo/video slot renders a paper-toned placeholder with the expected path as a caption when the file is absent. Add files under `public/` and the placeholders disappear automatically. Do NOT hardcode fallback logic per section.
4. **Hero media:** the hero expects `/videos/hero.mp4` with poster `/images/events/researcher-training/poster.jpg`. Until then, the poster slot shows a placeholder.
5. **`scroll-padding-top: 4.5rem`** on `html` keeps anchored sections clear of the fixed navbar.
6. **ResearcherProgram/ManagerAI read `PRODUCTS[0]` / `PRODUCTS[1]`** (`data.ts`) at module load — reorder `PRODUCTS` and the sections swap content.

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

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds, type-checks, copies `CNAME` into `dist/`, and deploys to GitHub Pages → `natds.safalai.com.np` (domain via `CNAME` + Pages custom domain setting).

> GitHub Pages settings: **Source = GitHub Actions**. DNS: CNAME record `natds` → `Ramtamang-2058.github.io`.