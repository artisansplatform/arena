# Arena Website

Static marketing website for **Arena**, the Enterprise Practice Platform.

Built with vanilla HTML and JavaScript, styled with Tailwind CSS v4, bundled by Vite, and deployed to Vercel.

## Tech Stack

- **Vite** bundles every root `.html` file plus `assets/script/main.js` into `dist/`
- **Tailwind CSS v4** (`@tailwindcss/cli`) compiles `assets/style/input.css` to `assets/style/output.css`
- **Handlebars partials** (`partials/header.html`, `partials/footer.html`) shared across pages
- **Self-hosted Poppins** woff2 subsets in `assets/fonts/` (never loaded from Google Fonts)
- **Vitest** for unit tests
- **Vercel** for deployment (`cleanUrls: true`, so pages serve without `.html`)

## Getting Started

```bash
npm install       # Install dependencies
npm run dev       # Dev server at http://localhost:3000/ (Vite + Tailwind watch)
```

## Scripts

| Command            | Description                                |
| ------------------ | ------------------------------------------ |
| `npm run dev`      | Dev server with Vite + Tailwind watch      |
| `npm run build`    | Production build (CSS + HTML) into `dist/` |
| `npm run preview`  | Preview the production build locally       |
| `npm test`         | Build, then run unit tests with Vitest     |
| `npm run format`   | Format HTML files with Prettier            |
| `npm run prettier` | Format all files with Prettier             |

## Project Structure

```
.
├── index.html            # Home page
├── contact-us.html       # Contact page
├── partials/             # Shared Handlebars partials (header, footer)
├── assets/
│   ├── script/           # main.js and page modules
│   ├── style/            # Tailwind input.css / output.css
│   ├── fonts/            # Self-hosted Poppins woff2
│   └── image/            # SVG and PNG assets
├── vite.config.js
├── vercel.json
└── dist/                 # Build output (git-ignored)
```

## Notes

- `output.css` and `dist/` are git-ignored. Run `npm run dev` or `npm run build` before viewing the site locally, or pages render unstyled.
- Do not use the CDN Tailwind script. The site relies on the local `assets/style/output.css` build.
- Mobile vs desktop layout switches at the `lg:` breakpoint (1024px).
- Never use em dashes in the codebase.
