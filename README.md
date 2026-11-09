# esims.dev

Personal portfolio for Eric Sims — a React + TypeScript site built with Vite and published to GitHub Pages at [esims.dev](https://esims.dev).

## Editing the content

Everything you'd normally want to change lives in one file: [`src/data/profile.ts`](src/data/profile.ts).

- `headline`, `lede`, `availability` — the hero
- `about`, `facts` — the about section and its quick-facts panel
- `projects` — the selected work list (name, summary, description, tags, live URL, year)
- `stack` — the tools groups
- `contact` — the closing call to action
- `email`, `links` — where people reach you

**Your email is currently set to `hello@esims.dev`.** Change it there if you'd rather use another address.

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # typecheck + production build into dist/
npm run preview   # serve the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs dependencies, builds the app and deploys `dist/` to GitHub Pages.

Pages must be set to build from GitHub Actions:

1. Repository **Settings → Pages**
2. **Build and deployment → Source: GitHub Actions**

The workflow asks GitHub to enable Pages automatically on its first run (`actions/configure-pages` with `enablement: true`), but if the deploy step fails with a Pages error, check that setting.

The custom domain is preserved by `public/CNAME` (`esims.dev`). Keep the `A`/`CNAME` DNS records for GitHub Pages in place, and keep **Enforce HTTPS** enabled in the Pages settings.

## Structure

```
index.html                 HTML shell, meta tags, fonts
public/CNAME               custom domain for Pages
public/favicon.svg
src/main.tsx               React entry point
src/App.tsx                page composition
src/data/profile.ts        all copy and content
src/components/            Nav, Hero, Work, About, Stack, Contact, Footer
src/hooks/useReveal.ts     scroll-reveal, respects reduced motion
src/index.css              design tokens + layout + responsive rules
```
