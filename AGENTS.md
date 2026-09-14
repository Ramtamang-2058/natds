# AGENTS.md

## What this is

**NATDS — Nepal AI & Tech Digital Solution.** A static, single-page React + Vite corporate website for AI-for-researchers programs and tech digital solutions. Dark "Research Observatory" theme (ink navy + violet/cyan aurora). English only. Deployed to GitHub Pages at `natds.safalai.com.np` (repo: `Ramtamang-2058/natds`).

Primary offering: **Researcher Program** (NATDS Research OS). Secondary: **Manager AI** (coming soon). Contact is **WhatsApp-first** — direct number `+977 981-8488715`.

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
- `public/` → static assets served at root:
  - `favicon.svg` (working), place `favicon.png` (180×180) + `logo.png` + `images/og-image.png`
  - `images/` → **place all new images here**
  - `videos/` → **place all new videos here**
  - `robots.txt`, `sitemap.xml`
- `CNAME` → custom domain `natds.safalai.com.np` (copied into `dist` by CI)
- `.github/workflows/deploy.yml` → CI/CD (build → Pages → domain)
- `src/` → all source code

### Source layout (`src/`)

| Directory | Purpose |
|-----------|---------|
| `pages/` | `HomePage.tsx` (only page; single-page site, no router) |
| `components/sections/` | Hero, Marquee, ResearcherProgram, ManagerAI, Services, Training, WhyNATDS, Contact |
| `components/layout/` | Navbar, Footer, WhatsAppDock |
| `components/media/` | `MediaSlot.tsx` (graceful media fallback) |
| `hooks/` | `useNavigation.ts` (smooth-scroll + active section) |
| `types/` | TypeScript interfaces |
| `data.ts` | **All content** — brand constants, links, products, services, programs, etc. |
| `App.tsx`, `main.tsx`, `index.css` | Root wiring + design system |

**Routing:** none (single page). Nav links smooth-scroll to `#section-id` anchors via `useNavigation`.

## Configuration

- **Tailwind CSS v4** — theme tokens via `@theme` in `src/index.css`, NOT a `tailwind.config.js`.
- **`@` path alias** → `src/` root (configured in `vite.config.ts` + `tsconfig.json`).
- **`DISABLE_HMR` env var** — set to `"true"` to disable Vite file watching (used in AI Studio to prevent flickering during agent edits).
- **`base: '/'`** — correct for GitHub Pages with a custom root domain. Don't change.
- **No runtime env vars needed** — see `.env.example`. Site is fully static.

## Design system ("Research Observatory")

- **Fonts:** Inter (body), Space Grotesk (display/headings), JetBrains Mono (labels/code)
- **Palette:** ink navy (`#07080C`–`#2A2F45`), aurora violet `#8B7CFF`, pulse cyan `#39E6C4`, paper `#F7F7F5`
- **Dark sections:** `.dark-section` (grain + ink). **Light sections:** `.lumen-section` with `.card-lumen`
- **Motifs in `index.css`:** `eyebrow`, `text-aurora-gradient`, `glass-card`, `grid-constellation`, `aurora-blob`, `ghost-word`, `hstream`, `hdot`, `marquee`, `orbit-badge`, `dashed-ring`, `pulse-dot`, `float-bob`, `fade-in-up`, `section-index`
- **Motion library:** `motion` (v12), `lucide-react` icons

## Key gotchas

1. **WhatsApp is the single contact channel.** Number lives in `src/data.ts` → `BRAND.whatsappNumber` (`9779818488715`). Pre-built links in `WHATSAPP_LINKS`. Update the number in ONE place.
2. **No i18n.** Bilingual (Nepali) deliberately omitted — English only.
3. **`MediaSlot` fallback:** sections render generative CSS art when image/video files are absent. Add files under `public/` and pass paths like `/images/...`; the art disappears automatically. Do NOT hardcode fallback logic per section.
4. **Mobile section padding** is forced via `index.css` media query (like SAFAL) — don't fight it.
5. **`scroll-padding-top: 5rem`** on `html` keeps anchored sections clear of the fixed navbar.

## Adding new content/data

1. Add/update the interface in `src/types/index.ts`
2. Add the data in `src/data.ts` (all copy lives here — edit copy in this one file)
3. Build the section in `src/components/sections/`
4. Wire it into `src/pages/HomePage.tsx` (and `NAV_LINKS` in `data.ts` if it deserves a nav entry)

## Adding media (dropdown for you)

Drop files into `public/` and reference the absolute path (`/images/x.jpg`, `/videos/y.mp4`).

Planned slots (already wired in code):

| Asset | Where it appears | Reference |
|-------|------------------|-----------|
| Hero background video | Hero right panel | `/videos/hero.mp4` (poster `/images/hero-poster.jpg`) |
| Research OS / lab imagery | ResearcherProgram (optional) | `/images/research-os.*` |
| Manager AI artwork | ManagerAI (optional) | `/images/manager-ai.*` |
| Open Graph share image | Social sharing | `public/images/og-image.png` |
| Logo / favicon | Branding | `public/logo.png`, `public/favicon.png` |
| Team/office photos | Contact / About (future) | `/images/team-*.jpg` |

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages → `natds.safalai.com.np` (domain via `CNAME` + Pages custom domain setting).

> GitHub Pages settings: **Source = GitHub Actions**. DNS: CNAME record `natds` → `Ramtamang-2058.github.io`.