# joao-paulo-santos.github.io

Personal website, project portfolio, and blog of João Paulo Santos.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
Builds to static HTML/CSS/JS and is deployed to GitHub Pages via a GitHub
Actions workflow.

## Requirements

- Node.js >= 22.12
- npm >= 9.6.5

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
```

## Scripts

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm run dev`     | Start the dev server at `localhost:4321`        |
| `npm run build`   | Build the static site to `./dist/`              |
| `npm run preview` | Preview the production build locally            |
| `npm run check`   | Type-check `.astro` and TypeScript files        |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. No manual build-artifact commits.

Repository setting (one-time): **Settings → Pages → Source** must be set to
**GitHub Actions** (not "Deploy from a branch").

## Project structure

```
src/
  components/   UI components (added in later phases)
  content/      Markdown collections: blog/, projects/, updates/
  layouts/      BaseLayout.astro (HTML shell)
  pages/        File-based routes
  styles/       global.css — Tailwind import + theme CSS variables
  consts.ts     Site title, description, socials
public/         Static assets served as-is (profile pic, icons, favicon)
astro.config.mjs
```

## Theming

All visual tokens are CSS custom properties in `src/styles/global.css`
(`--color-bg`, `--color-text`, `--font-body`, etc.). Components reference these
variables so a new theme is one CSS block. The default light/dark palettes
follow `prefers-color-scheme`; an interactive toggle and a reserved retro
(8-bit) theme will be added in later phases.
