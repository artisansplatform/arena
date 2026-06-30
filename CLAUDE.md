# Arena Website

Static marketing website for Arena, the Enterprise Practice Platform. Vanilla HTML/JS + Tailwind CSS v4 on Vite, deployed to Vercel.

## Global Writing Rules

**Never use em dashes anywhere in the codebase.** Always replace with commas, periods, colons, or parentheses.

**Additional writing guidelines:**

- Prefer simple, human-readable language over AI-style phrasing
- Avoid overly structured or repetitive sentence patterns
- Keep explanations concise and practical

## Commands

```bash
npm run dev              # Dev server at http://localhost:3000/ (Vite + Tailwind watch)
npm run build            # Production build (CSS + HTML to dist/)
npm test                 # Unit tests (build + vitest run)
npm run preview          # Preview production build locally
npm run format           # Format HTML files with Prettier
npm run prettier         # Format all files with Prettier
```

## Architecture

- **Tailwind CSS v4** via `@tailwindcss/cli` - source in `assets/style/input.css`, compiled to `assets/style/output.css` (git-ignored)
- **Vite** bundles all root `.html` files + `assets/script/main.js` into `dist/`
- **Self-hosted Poppins** woff2 subsets in `assets/fonts/poppins/` with `@font-face` blocks in `assets/style/input.css`. Never load from Google Fonts at runtime.
- **No inline scripts** - all JS goes through `assets/script/main.js` modules. Page behavior lives in `assets/script/modules/*.js` files.
- **Scroll animations** use the `.reveal` / `.reveal.visible` CSS pattern driven by an IntersectionObserver in `assets/script/modules/animations.js`. Stagger delays use `.rd-1` through `.rd-6` helper classes defined in `index.html`'s `<style>` block.
- **Vercel** deployment with `cleanUrls: true` so pages are served without `.html` extensions.

## Gotchas & Landmines

- **`output.css` is git-ignored** - always run `npm run dev` or `npm run build:css` before working on the site locally or the page will be unstyled.
- **CDN Tailwind must not be used** - the page uses `assets/style/output.css` (local build), not the CDN browser script. Never add `<script src="...@tailwindcss/browser...">` back.
- **Mobile breakpoint is `lg:` (1024px)** - controls desktop vs mobile layout.
- **`dist/` is git-ignored** - never commit build output.

## PR Checklist

- `npm run build` succeeds
- No console errors on affected pages
- Responsive at 393px, 768px, 1280px
- `.reveal` elements animate correctly on scroll
