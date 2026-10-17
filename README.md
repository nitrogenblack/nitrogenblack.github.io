# Nitrogen Black — marketing site

Static HTML, CSS, and JavaScript. No build step.

## View locally

From this directory, start any static file server:

```bash
python3 -m http.server 5173
```

Open **http://localhost:5173**. On localhost, the Login link points at the internal portal URL; in production it uses `config.js`.

Edit [`config.js`](config.js) to change the production portal URL.

## GitHub Pages

1. Push to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` or `master`. The workflow publishes `index.html`, assets, and scripts with no Node build.

Relative asset paths work on both `https://user.github.io/` and `https://user.github.io/repo/` project sites.
