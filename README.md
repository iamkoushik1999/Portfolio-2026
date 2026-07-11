# Koushik Dutta — Portfolio (Next.js)

Personal portfolio site for Koushik Dutta, built with the Next.js App Router. This is a from-scratch Next.js built on Next.js with (file-based routing, Server/Client Components, the Metadata API, and generated SEO assets).

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **UI:** React 19, plain JS/JSX (no TypeScript)
- **Styling:** CSS Modules per component + a shared CSS custom-property theme (`styles/vars.css`), no CSS framework
- **Fonts:** [`@fontsource/outfit`](https://fontsource.org/fonts/outfit) and [`@fontsource/roboto`](https://fontsource.org/fonts/roboto), self-hosted
- **Animation:** [AOS](https://michalsnik.github.io/aos/) for scroll-reveal effects
- **Theming:** light/dark mode via a `data-theme` attribute, persisted to `localStorage`, with a FOUC-prevention script and no hydration flicker

## Project structure

```
app/                  Route segment: layout, page, and generated SEO assets
  layout.jsx          Root document shell, metadata, viewport, fonts, theme-init script
  page.jsx            The single page — assembles all sections, adds Person JSON-LD
  robots.js            → /robots.txt
  sitemap.js            → /sitemap.xml
  manifest.js           → /manifest.webmanifest
  icon.jsx / apple-icon.jsx / icon-192, icon-512   → favicon & app icons (generated)
  opengraph-image.jsx   → social share card (also used as the Twitter card image)
components/           One folder per UI section (JSX + co-located CSS Module)
data/                 JSON content: projects, skills, work history, contact links
hooks/useTheme.js     Light/dark theme state, synced to the DOM + localStorage
lib/                  utils.js (asset URL helper), site.js (SEO constants), brand-icon.jsx
public/assets/        Images and icons served as static files
styles/vars.css       Shared design tokens (colors, spacing, type scale) for both themes
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint (next/core-web-vitals rules)
```

## Content

All page content is data-driven from `data/*.json` — edit these to update projects, skills, work history, or contact links without touching component code.

## SEO

Metadata (title, description, Open Graph, Twitter cards, canonical URL, robots directives), `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, and all icons (favicon, apple-touch-icon, PWA icons, OG image) are generated automatically via Next.js's file conventions — see `app/` and `lib/site.js`.

**Before deploying**, update `SITE_URL` in [`lib/site.js`](./lib/site.js) to your real production domain — it's currently a placeholder (`https://your-domain.com`) and feeds every canonical/OG/sitemap URL in the site.

## Deployment

This is a fully static site (`next build` prerenders every route), so it deploys anywhere Next.js is supported — zero-config on [Vercel](https://vercel.com/new), or `next build && next start` / a static export elsewhere.
