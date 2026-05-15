# anjali

Personal portfolio site for Anjali — Business Intelligence / Data Engineer.

Built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **Mermaid** for architecture diagrams. Statically exported and deployed to **GitHub Pages**.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build a static export

```bash
npm run build       # writes ./out
npx serve out       # preview the static build
```

## Editing content

All editable content lives in [`lib/data.ts`](./lib/data.ts) — name, tagline, socials, skills, experience, projects, case study, dashboards, certifications, writing, and nav sections. Change a value there and every section that references it updates.

Replace [`public/resume.pdf`](./public/resume.pdf) with the real resume when ready.

## Deploy to GitHub Pages

1. Push to `main`.
2. In repo Settings → Pages, set **Source = GitHub Actions**.
3. The workflow at `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
4. Site will be live at `https://<username>.github.io/anjali/`.

The `basePath` is set to `/anjali` in production via `next.config.mjs`, so all asset URLs work under the repo subpath.

## Project structure

```
app/
  layout.tsx, page.tsx, globals.css
  components/      # one file per section + ui/ primitives
lib/data.ts        # single source of truth for all content
public/            # static assets (resume, .nojekyll)
.github/workflows/ # GH Pages deploy
```
