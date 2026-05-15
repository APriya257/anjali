# anjali

Portfolio site for Anjali — Business Intelligence / Data Engineer.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Mermaid for architecture diagrams
- Static export → GitHub Pages

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
NODE_ENV=production npm run build
npx serve out
```

The build outputs to `out/`. GitHub Pages serves from this directory via the
workflow in `.github/workflows/deploy.yml` on every push to `main`.

## Editing content

Almost everything lives in `lib/data.ts` — profile, skills, experience,
projects (each with a Mermaid architecture diagram), certs, writing, and
dashboard mock metadata. Edit that one file, push, and the site updates.

## Layout

- `app/page.tsx` — section composition
- `app/components/` — one file per section
- `app/components/ui/` — primitives (SectionHeading, TechBadge, MermaidDiagram, AnimatedSQL)
- `lib/data.ts` — single source of truth for content
- `public/resume.pdf` — placeholder resume; swap with the real one

## Deploy

Push to `main`. GitHub Pages picks it up via the workflow. Site lives at
`https://apriya257.github.io/anjali/`.
