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

## Notes

- All photography is Foxcroft's own, pulled from their live galleries. No stock.
- The logo is Foxcroft's own mark redrawn as SVG. The palette is built from its
  green. See `SOURCES.md`.
- The contact form validates and shows its success state, but has no mail
  transport behind it. Wire up a route handler before this goes anywhere real.
- Scroll reveals are gated behind a `data-js` attribute set by an inline script,
  so the page renders fully visible if scripting fails.
- Read `SOURCES.md` before showing this to the client. It lists the questions
  worth asking them, including the two conflicting founding-date figures on the
  current site.
