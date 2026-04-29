# Hosting & Deployment

This document explains how `julianhayloryoga` is hosted, how to deploy
new changes, and how to manage the site over time. The recommended setup
is **Cloudflare Pages** — free, fast, and integrates directly with GitHub
so a `git push` is all that is needed to publish.

---

## TL;DR

1. `git commit` your changes locally.
2. `git push origin master` to GitHub.
3. Cloudflare Pages auto-builds and deploys within ~30 seconds.
4. The live site updates at your custom domain (or the
   `*.pages.dev` URL Cloudflare provides).

That is the entire workflow once setup is complete.

---

## Why Cloudflare Pages

| Feature | Cloudflare Pages |
|---|---|
| Cost (this site's traffic) | **£0 / month** — free tier covers up to 500 builds/month, unlimited bandwidth, unlimited requests |
| SSL / HTTPS | Free, automatic |
| Custom domain | Free, with one-click DNS if your domain is on Cloudflare |
| Build minutes | Effectively unlimited for static sites |
| Global CDN | Yes — 300+ edge locations |
| Rollback to previous deploy | Yes — one click in the dashboard |
| Preview URLs per branch | Yes — every branch & PR gets its own URL |

Realistic monthly cost for this site: **£0**.

If a custom domain is bought, that is typically £8–£15/year depending on
the TLD (`.com`, `.co.uk`, `.yoga`, etc.).

---

## One-time setup

### 1. Push the repo to GitHub

If the project is not already on GitHub:

```bash
# from inside the project folder
gh auth login                    # one-time, follow prompts
gh repo create julianhayloryoga --private --source=. --remote=origin
git push -u origin master
```

(If you do not use the GitHub CLI, create an empty repo on github.com,
then run `git remote add origin <url>` and `git push -u origin master`.)

### 2. Create a Cloudflare account

Sign up at <https://dash.cloudflare.com/sign-up>. The free plan is fine.

### 3. Connect the repo to Cloudflare Pages

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Authorise Cloudflare to access your GitHub account.
3. Pick the `julianhayloryoga` repository.
4. Use these build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | **Vite** |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(leave blank)* |
   | Node version | `20` *(set as env var `NODE_VERSION` if needed)* |

5. Click **Save and Deploy**. The first build takes ~1 minute.
6. Once green, the site is live at
   `https://julianhayloryoga.pages.dev` (Cloudflare picks the subdomain
   from the project name).

### 4. (Optional) Add a custom domain

If you have a domain (e.g. `julianhayloryoga.com`):

1. In the Pages project → **Custom domains → Set up a custom domain**.
2. Enter the domain. Cloudflare will guide DNS setup.
3. If the domain is registered with Cloudflare, it is one click. If
   it is registered elsewhere, Cloudflare provides the CNAME record to
   add at your registrar.
4. SSL is provisioned automatically within minutes.

---

## Day-to-day: making changes

### From your IDE

1. Open the project folder.
2. Edit any file (most copy lives in `src/constants/siteContent.js`).
3. Test locally:

   ```bash
   npm run dev
   ```

   Open the URL Vite prints (usually `http://localhost:5173`).

4. Commit & push:

   ```bash
   git add .
   git commit -m "Update About Me copy"
   git push
   ```

5. Cloudflare Pages picks up the push automatically. Check the
   **Deployments** tab in the Pages dashboard to watch the build. It
   typically takes 30–60 seconds. Once green, the live site is updated.

### From the Cloudflare dashboard (without code changes)

You can trigger a fresh deploy without changing code (for example to
re-pull the latest assets):

1. Go to **Pages → julianhayloryoga → Deployments**.
2. Click **Retry deployment** on the latest entry, or use
   **Create deployment → Deploy from a branch** and pick `master`.

### Rolling back

If a deploy breaks something:

1. Pages → **Deployments** tab.
2. Find the last good deployment (each one keeps its preview URL).
3. Click **⋯ → Rollback to this deployment**.

The live site reverts instantly. No git changes required.

---

## Useful links

| What | URL |
|---|---|
| Cloudflare dashboard | <https://dash.cloudflare.com/> |
| Pages project (replace once created) | `https://dash.cloudflare.com/<account-id>/pages/view/julianhayloryoga` |
| Live preview URL | `https://julianhayloryoga.pages.dev` |
| GitHub repo (replace once created) | `https://github.com/<your-username>/julianhayloryoga` |
| Cloudflare Pages docs | <https://developers.cloudflare.com/pages/> |
| Vite build docs | <https://vite.dev/guide/build.html> |

---

## Local commands cheat-sheet

```bash
npm install         # install dependencies (only needed once or after pulling)
npm run dev         # start the local dev server with hot reload
npm run build       # produce a production build in /dist
npm run preview     # preview the production build locally
```

---

## Alternatives (for reference)

If you ever want to switch host, the project will work unchanged on:

- **Netlify** — same workflow, free tier, slightly fewer build minutes.
- **Vercel** — same workflow, free tier; has soft commercial-use limits
  on the hobby plan, so Cloudflare is preferred.
- **GitHub Pages** — totally free but requires extra config for SPAs and
  no preview URLs per branch.

In every case the build command stays `npm run build` and the output
directory stays `dist`.

---

## What I (Claude) need from you to complete setup

Before the live site is reachable, please confirm in chat:

1. **GitHub** — do you have a GitHub account? If yes, what username?
   If no, would you like to use GitLab/Bitbucket instead, or would you
   like a step-by-step on creating a GitHub account?
2. **Repository visibility** — should the GitHub repo be **public** or
   **private**? (Private is fine; Cloudflare can read both.)
3. **Custom domain** — do you already own a domain you want to use
   (e.g. `julianhayloryoga.com`)? If not, do you want a recommendation?
4. **Cloudflare account** — do you already have one, or would you like
   instructions to sign up?

Once those are answered I can walk through the actual deployment.
