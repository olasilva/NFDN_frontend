# NDFN

React + TypeScript + Vite + Tailwind v4 + React Router.

```bash
npm install
npm run dev
```

- `/` customer app (440px shell + bottom bar). Home is built from Figma.
- `/services/:slug[/materials|/projects]` shared template for all 8 categories.
- `/admin/*` desktop dashboard shell.
- `src/data/figmaNodes.ts` maps every screen to its Figma node id.
- Design tokens live in `src/index.css` (`@theme`).
- Image URLs in `src/data/contracts.ts` are Figma-hosted and expire after 7 days. Download them to `/public/img`.
