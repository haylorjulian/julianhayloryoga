# Julian Haylor — Yoga

A minimal, editorial-style portfolio website for a yoga practice rooted in the Sivananda tradition.

## Running Locally

**Prerequisites:** Node.js 18+ and npm

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

## Building for Production

```bash
npm run build      # compiles the site into dist/
npm run preview    # serves the built dist/ locally to verify it before pushing
```

Output is written to the `dist/` directory. **Never edit or commit `dist/`** — it is
git-ignored and rebuilt on every deploy.

## Deploying (Cloudflare Pages)

The live site is hosted on **Cloudflare Pages**, connected to this GitHub repo.
Deployment is automatic:

1. Commit your changes locally.
2. Push to the `master` branch on GitHub:
   ```bash
   git push origin master
   ```
3. Cloudflare Pages detects the push, runs the build, and publishes within ~30–60s.

That's the whole flow — there is no manual upload step.

### Required Cloudflare build settings

These must match exactly, or the deploy will publish the wrong files. Check them in
the Cloudflare dashboard under **Workers & Pages → (this project) → Settings → Build**:

| Setting                  | Value           |
|--------------------------|-----------------|
| Framework preset         | **Vite**        |
| Build command            | `npm run build` |
| Build output directory   | `dist`          |
| Root directory           | *(leave blank)* |
| `NODE_VERSION` (env var) | `20`            |

> **SPA routing:** `public/_redirects` contains `/* /index.html 200`. This is required
> so deep links like `/egodeath` resolve instead of 404ing. Cloudflare serves the real
> hashed assets in `/assets/*` first, so this rule only affects page routes — leave it in place.

### Troubleshooting: "the live site loads but all styling is broken"

This means Cloudflare is serving the **un-built repo root** instead of the compiled
`dist/` output — the root `index.html` points at `/src/main.jsx` (the dev entry), which
has no compiled CSS, so the page renders unstyled or blank.

Fix it by confirming the two settings above — most often the **Build output directory**
is blank or wrong and must be set to `dist`. To confirm the diagnosis: open the live
site, open DevTools → **Network**, and reload. If you see a request for `/src/main.jsx`
or a 404 on `/assets/*.css`, the wrong directory is being served. `npm run preview`
locally always serves the correct build, so if it looks right there, the problem is the
Cloudflare config, not the code.

## Project Structure

```
src/
  components/      — React components (one per section)
  constants/       — Editable site content (text, links, labels)
  styles/          — CSS files (one per component + global)
  App.jsx          — Root component
  main.jsx         — Entry point
public/
  images/          — Static images (certifications, etc.)
```

## Editing Content

All site copy lives in `src/constants/siteContent.js`. Open that file to change text, headings, social links, or any visible content without touching component code.
