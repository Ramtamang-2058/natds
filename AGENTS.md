# AGENTS.md

## What this is

**NATDS — Nepal AI & Tech Digital Solution.** A static, single-page React + Vite corporate site. NATDS trains teams and builds AI automations for Nepali organisations across sectors — **hydropower & energy, banking & finance, NGOs & development, research & academia, trade & supply**. "Headwater" theme: snow-white ground, river-indigo ink, one rhododendron-crimson accent, a single variable typeface (Archivo) used across its width axis. English only. Deployed to GitHub Pages at `natds.safalai.com.np` (repo: `Ramtamang-2058/natds`).

Signature element: the **Sectors switcher** (`#sectors`) — an accessible tab list on a dark band; each sector shows its own use cases, typical engagement and track record. The hero's sector index opens it pre-selected. Programs (AI for Managers, Researcher Program, Professionals, Students) live in one `#programs` section. Contact is **WhatsApp-first** — direct number `+977 981-8488715`. **Work** (`#work`) shows real engagement photos (IME Group, Prakriti Resource Center).

## Commands (run from repo root)

```bash
npm run dev      # Vite dev server (port 5173)
npm run build    # Vite build → dist/
npm run preview  # Serve the production build locally
npm run lint     # tsc --noEmit (type-check only, no ESLint)
npm run check:seo # Validate generated HTML, metadata, sitemap and links after build
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
| `components/sections/` | Hero, Sectors, Services, Programs, Work, Approach, FieldNotes, Contact |
| `components/layout/` | Navbar, Footer, WhatsAppDock |
| `components/media/` | `MediaSlot.tsx` (media with ken-burns + graceful placeholder) |
| `hooks/` | `useNavigation.ts` (smooth-scroll + active section) |
| `types/` | TypeScript interfaces |
| `data.ts` | **All content** — brand, `waLink()`, clients, sectors, services, programs, events, field notes, approach |
| `App.tsx`, `main.tsx`, `index.css` | Root wiring + design system |

**Routing:** none (single page). Nav links smooth-scroll to `#section-id` anchors via `useNavigation`.

**Static training pages:** `TRAINING_PAGES` and `TRAINING_COPY` in `src/data.ts` feed `src/pages/TrainingPage.tsx`. `npm run build` runs `scripts/prerender.mjs` after Vite: it prerenders the homepage, emits `/training/<slug>/index.html` and adds training URLs to the built sitemap. These are static documents, with no client router or runtime server. Use `npm run preview` after building to review training URLs; the development server only serves the homepage. Do not edit generated pages in `dist/`. The homepage hydrates its prerendered HTML. Keep components safe to render without browser globals outside effects/event handlers. Update the expected page count in `scripts/check-seo.mjs` when adding pages.

**Section order (mirrors `HomePage.tsx`):** Hero (`#top`, sector index + "worked with" strip) → Sectors (`#sectors`) → Services (`#services`) → Programs (`#programs`) → Work (`#work`) → Approach → FieldNotes (`#notes`) → Contact (`#contact`). `NAV_LINKS` drives navbar, footer, and `useNavigation` active-section detection — keep ids in sync with rendered sections. Selected sector state lives in `HomePage.tsx`.

## Configuration

- **Tailwind CSS v4** — theme tokens via `@theme` in `src/index.css`, NOT a `tailwind.config.js`.
- **`@` path alias** → `src/` root (configured in `vite.config.ts` + `tsconfig.json`).
- **`DISABLE_HMR` env var** — set to `"true"` to disable Vite file watching (used in AI Studio to prevent flickering during agent edits).
- **`base: '/'`** — correct for GitHub Pages with a custom root domain. Don't change.
- **No runtime env vars needed** — see `.env.example`. Site is fully static.

## Design system ("Headwater")

- **Type:** one family, **Archivo** variable (loaded via `<link>` in `index.html`), used across its width axis: `.display` (wdth 118, heavy — hero/contact headlines), `.display-md` (section headings), `.display-sm` (card/list titles), body at wdth 100, `.label` (semi-condensed, sentence case — never all caps), `.num` (expanded tabular numerals). No mono, no serif.
- **Palette (`@theme` in `index.css`):** `snow` `#F4F5F2` (base), `mist` `#E7EBE8` (alt bands), `surface` `#FFFFFF`; `ink` `#0E1A2B`, `ink-2` `#45505F`, `ink-3` `#7A8391`; `line` `#D3D9D6`, `line-dark` `#26354A`; accent `crimson` `#C0192C` (`crimson-deep` `#9A1122`) — use sparingly (primary CTA, active markers); on dark bands `night` `#0E1A2B`, `night-2` `#15243A`, text `glacier` `#A9C9CF`.
- **Rhythm:** light bands (`bg-snow` / `bg-mist`) with two dark `bg-night` bands (Sectors, Contact) and a light footer that carries the full-colour logo.
- **Shape:** squared — buttons 3px radius (`.btn` + `btn-primary` / `btn-ink` / `btn-outline`), media 4px. `.link` draws an underline. Hairlines via `border-line`.
- **Motion:** one CSS load sequence in the hero (`.rise`, `.fade-in`, `.wipe` with `--d` delay — CSS so content never depends on JS timing). Otherwise motion only answers user action (sector switch, nav underline, mobile menu) via `motion/react`. No scroll-reveal fades. `prefers-reduced-motion` disables all of it.
- **Numbering** only where the content is a real sequence (syllabus sessions, project steps).
- **Section pattern:** `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`, `py-20 lg:py-28`, 12-column grids.
- **Field-note articles** (`public/field-notes/*.html`) carry their own inline CSS using the same tokens — update them if the palette changes.

## Key gotchas

1. **WhatsApp is the single contact channel.** Number lives in `src/data.ts` → `BRAND.whatsappNumber` (`9779818488715`). Pre-built links in `WHATSAPP_LINKS`. Update the number in ONE place. The Contact form and all CTAs open `wa.me` links.
2. **Sector claims must be real.** `SECTORS[].proof` and `CLIENTS` list only real engagements — don't invent client names.
3. **No i18n.** Bilingual (Nepali) deliberately omitted — English only.
4. **MediaSlot fallback:** every photo/video slot renders a paper-toned placeholder with the expected path as a caption when the file is absent. Add files under `public/` and the placeholders disappear automatically. Do NOT hardcode fallback logic per section.
5. **Hero media:** hero shows the photo at `HERO_MEDIA.poster` (a real event photo) until `/videos/hero.mp4` exists. To switch to video, drop the file in `public/videos/` and set `HERO_MEDIA.videoActive = true` in `src/data.ts`.
6. **`scroll-padding-top: 4.5rem`** on `html` keeps anchored sections clear of the fixed navbar.
7. **Programs:** `TRAINING_PROGRAMS` entries with `featured: true` render as large syllabus cards; each has its own `waText` for the WhatsApp CTA.

## Adding new content/data

1. Add/update the interface in `src/types/index.ts`
2. Add the data in `src/data.ts` (all copy lives here — edit copy in this one file)
3. Build the section in `src/components/sections/`
4. Wire it into `src/pages/HomePage.tsx` (and `NAV_LINKS` in `data.ts` if it deserves a nav entry)

## Adding media — events gallery (drop photos here)

Drop photos into `public/images/events/<event>/` and update `imagePaths` in `EVENTS` (first path is the wide lead photo) (`src/data.ts`). Missing files auto-show placeholders — the site never breaks on missing images.

| Folder | Event | Photos |
|--------|-------|--------|
| `public/images/events/prakriti-resource-center/` | **Prakriti Resource Center** | `training-front-right.jpeg`, `teaching-trainer-and-trainee.jpeg`, `trainees-reading-board.jpeg`, `trainee-asking-question.jpeg` |
| `public/images/events/ime-group/` | **IME Group** | `group-image.png`, `session.jpg`, `certification.jpg`, `training-back-view.png` |
| `public/videos/hero.mp4` | Hero background video | — (hero currently shows `HERO_MEDIA.poster` image until a video exists) |

Hero poster (image shown until a video drops in): `/images/events/prakriti-resource-center/trainer-back-right.jpeg`. Set `HERO_MEDIA.videoActive = true` in `src/data.ts` once a real `hero.mp4` exists.

**Add a new event:** copy an `EVENTS` block in `src/data.ts`, create the folder under `public/images/events/`, adjust `src/components/sections/Work.tsx` if you want a different layout.

Other planned assets:

| Asset | Where it appears | Reference |
|-------|------------------|-----------|
| Open Graph share image | Social sharing | `public/images/og-image.png` (exists as placeholder) |
| Logo | Navbar (emblem + NATDS wordmark via `Wordmark.tsx`), footer (full logo), JSON-LD | Source: `brand/logo-source.png` (transparent, 1254px, not deployed). Derived: `public/brand/emblem.webp` (circle only), `public/brand/logo-full.webp` (emblem + text), `public/logo.png` (512px) |
| Favicon | Browser | `public/favicon.png` (180px emblem) |

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds, type-checks, copies `CNAME` into `dist/`, and deploys to GitHub Pages → `natds.safalai.com.np` (domain via `CNAME` + Pages custom domain setting).

> GitHub Pages settings: **Source = GitHub Actions**. DNS: CNAME record `natds` → `Ramtamang-2058.github.io`.
