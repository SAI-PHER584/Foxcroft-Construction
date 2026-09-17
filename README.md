# Foxcroft Construction — homepage concept

A redesign concept for the landing page at foxcroft-construction.co.uk.
Not affiliated with, or endorsed by, Foxcroft Construction.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

For an accurate look at images and layout, use a production build. Next's dev
image optimiser can stall on large source photos.

```bash
npm run build && npm run start
```

## Before you deploy: set the site URL

Next resolves every metadata URL against `metadataBase`, so the share card
that LinkedIn fetches is only correct if this build knows its own origin.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example npm run build
```

Two things to know:

- **It has to be set at build time, not run time.** The page is statically
  prerendered, so `metadata` is evaluated during `next build`. Setting the
  variable only for `next start` silently leaves the localhost fallback in
  the tags.
- On Vercel you can skip it. `src/lib/site.ts` falls back to
  `VERCEL_PROJECT_PRODUCTION_URL`, then `VERCEL_URL`, both of which Vercel
  exposes at build.

If the deployment sits behind Vercel's deployment protection, LinkedIn cannot
fetch the image and will show a bare card. The preview has to be public for
the share to render.

## Stack

- Next.js 16 App Router, React 19, all sections are Server Components
- Client components only where they own state: the header menu, the contact
  form, and the `Reveal` scroll wrapper
- Tailwind v4, design tokens in `src/app/globals.css` under `@theme`
- Archivo (variable, width axis) for display and body, IBM Plex Mono for
  technical micro-labels, via `next/font`
- Phosphor icons, imported from `/ssr` in Server Components

## Where things live

| Path | What |
|---|---|
| `src/lib/content.ts` | Every piece of copy and every fact, in one file |
| `SOURCES.md` | Where each factual claim came from, and what is missing |
| `src/app/globals.css` | Colour, type, easing and duration tokens |
| `src/components/Logo.tsx` | Foxcroft's mark, redrawn as vector |
| `public/work/` | Foxcroft's own project photographs |
| `public/hero/` | The hero loop, cut from their own site footage, and its poster |
| `public/og/` | The 1200x630 share card |
| `src/lib/site.ts` | Resolves the origin that metadata URLs are built from |

## Notes

- No stock imagery. Most of the photography was matched back to a named
  original in Foxcroft's live galleries, but **three images could not be
  traced to the live site at all**, and they are the only finished-building
  shots on the page. `SOURCES.md` names them and says what to ask the client.
- The logo is Foxcroft's own mark redrawn as SVG. The palette is built from its
  green. See `SOURCES.md`.
- The contact form validates and shows its success state, but has no mail
  transport behind it. Wire up a route handler before this goes anywhere real.
- Scroll reveals are gated behind a `data-js` attribute set by an inline script,
  so the page renders fully visible if scripting fails.
- Read `SOURCES.md` before showing this to the client. It lists the questions
  worth asking them, including the two conflicting founding-date figures on the
  current site.
