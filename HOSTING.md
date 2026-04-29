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

GitHub account: **haylorjulian**
Recommended repo name: **julianhayloryoga**
Visibility: **public**

Two ways to create the repo and push:

**Option A — GitHub CLI (easiest)**

```bash
# from inside the project folder
gh auth login                    # one-time, follow prompts
gh repo create haylorjulian/julianhayloryoga --public --source=. --remote=origin
git push -u origin master
```

**Option B — Web UI**

1. Go to <https://github.com/new>.
2. Owner: `haylorjulian`. Repository name: `julianhayloryoga`. Visibility: **Public**.
3. **Do not** initialise with a README, .gitignore, or licence (the
   project already has its own).
4. Click **Create repository**.
5. Back in your terminal:

   ```bash
   git remote add origin https://github.com/haylorjulian/julianhayloryoga.git
   git branch -M master         # confirm the branch name
   git push -u origin master
   ```

### 2. Cloudflare account

Already configured under **haylorjulian@gmail.com** — just sign in at
<https://dash.cloudflare.com/>.

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

### 4. (Later) Add a custom domain

You do not have a domain yet — that is fine. The site will be live
immediately at `https://julianhayloryoga.pages.dev` once Pages finishes
its first build. You can add a custom domain at any point in the future
without rebuilding the site.

When you are ready, see **Domain recommendations** below for naming and
TLD ideas, then:

1. Buy the domain — registering it at **Cloudflare Registrar**
   (<https://dash.cloudflare.com/?to=/:account/registrar>) is the
   simplest path because DNS, SSL, and the Pages link-up are all in one
   account. Cloudflare sells domains at cost (no markup).
2. In your Pages project → **Custom domains → Set up a custom domain**.
3. Enter the domain. If it is registered with Cloudflare, it is one
   click. If it is registered elsewhere, Cloudflare provides the CNAME
   record you add at the registrar.
4. SSL is provisioned automatically within a few minutes.

#### Domain recommendations

A few names worth checking, in rough order of how I would rank them
for a yoga teacher's portfolio site:

| Name | TLD options | Notes |
|---|---|---|
| `julianhaylor.com` | `.com`, `.co.uk` | Cleanest; works whether you stay in yoga or branch out later. Treat the site as your personal portfolio. |
| `julianhayloryoga.com` | `.com`, `.co.uk` | Most descriptive; SEO-friendly for "Julian Haylor yoga". |
| `julianhaylor.yoga` | `.yoga` | Memorable, on-theme, almost certainly available. ~£25/yr — pricier than `.com`. |
| `haylor.yoga` | `.yoga` | Short and punchy. |
| `practicewithjulian.com` | `.com`, `.co.uk` | Frames the site around the practice rather than the person. Stronger CTA feel. |

Quick rules of thumb:

- **`.com`** is most familiar and easiest to remember when said aloud
  (which matters for word-of-mouth referrals). Aim for this if available.
- **`.co.uk`** is fine as a fallback or for a UK-only audience.
- **`.yoga`** is on-theme and almost always available, but more expensive
  (~£20–£30/year vs ~£8–£12 for `.com`/`.co.uk`).
- Avoid hyphens, numbers, and unusual TLDs (`.online`, `.life`, `.io`)
  for a wellness brand — they read less trustworthy.

To check availability: <https://www.cloudflare.com/products/registrar/>
or any registrar of your choice.

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
| Cloudflare Registrar (for buying a domain later) | <https://dash.cloudflare.com/?to=/:account/registrar> |
| GitHub repo | <https://github.com/haylorjulian/julianhayloryoga> *(after first push)* |
| Live site (auto-assigned) | `https://julianhayloryoga.pages.dev` *(after first deploy)* |
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

## Project setup (already decided)

| | |
|---|---|
| GitHub username | `haylorjulian` |
| GitHub repo | `julianhayloryoga` (public) |
| Cloudflare account | `haylorjulian@gmail.com` |
| Custom domain | not yet — see "Domain recommendations" above |
| Initial live URL | `https://julianhayloryoga.pages.dev` |

Once the repo is pushed and Pages is connected (steps 1 + 3 above), the
site is live. Custom domain can be added at any time without re-deploying.
