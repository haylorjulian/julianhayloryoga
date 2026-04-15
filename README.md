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
npm run build
```

Output is written to the `dist/` directory. Serve it with any static file host.

## Hosting

This is a static site — no server-side logic is required. Recommended hosts:

- **Vercel** — `vercel deploy`
- **Netlify** — drag-and-drop the `dist` folder, or connect to Git
- **GitHub Pages** — push the `dist` folder to a `gh-pages` branch

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
