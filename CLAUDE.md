# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Production build (includes image optimization + JS obfuscation)
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

This is a **React 19 + Vite** static website for SMK & SMP Atlantis Plus school.

**Entry point:** `src/main.jsx` → `src/App.jsx`

**Routing:** All routes are defined in `src/App.jsx` using `react-router-dom`. The `AppWrapper` component wraps all pages with `<Navbar>`, `<Footer>`, and a floating `<WhatsAppButton>`. Every route change auto-scrolls to the top.

**Pages** (`src/pages/`): Each page is a standalone `.jsx` file with a corresponding CSS file in `src/styles/`. Pages are named by feature — e.g. `GaleriSMK.jsx`, `GaleriSMP.jsx`, `KurikulumSMP.jsx`. Many pages are duplicated for SMP and SMK variants.

**Components** (`src/components/`): Only 5 shared components — `Navbar`, `Footer`, `WhatsAppButton`, `Loading`, `LoadingOverlay`. Each has its own CSS co-located in `src/components/`.

**Static assets:** All images live in `public/` and are referenced as root-relative paths (e.g. `/FasilitasSMK1.jpg`). Placeholder images use `/noimages.jpg`.

**Styling:** Each page/component has its own CSS file — no shared design system or CSS variables. `src/index.css` and `src/App.css` handle global resets.

## Build pipeline

`npm run build` runs two post-processing steps automatically:

1. **`vite-plugin-image-optimizer`** — compresses all images in `dist/` using `sharp` (JPG/PNG/WebP/AVIF, quality 80) and `svgo` (SVG). Both `sharp` and `svgo` must be installed as devDependencies. PNG quality must be an integer (0–100), not an array.

2. **`rollup-plugin-obfuscator`** — obfuscates all output JS and strips `console.log` calls. Runs last (`enforce: 'post'`).

## WhatsApp button

The floating WhatsApp button (`src/components/WhatsAppButton.jsx`) normalizes phone numbers automatically (strips non-digits, converts leading `0` to `62`). The phone number is set in `src/App.jsx` at the `<WhatsAppButton phone="...">` prop — update it there, not just in the component default.

## Image loading convention

- Use `loading="eager"` on images visible above the fold (first section of each page).
- Use `loading="lazy"` on all other images, especially in gallery pages which can contain 50+ images.
