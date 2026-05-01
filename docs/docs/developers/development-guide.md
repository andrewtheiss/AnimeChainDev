# Development Guide

How this site is built and how to work on it locally.

## 🏗️ Architecture

The whole site is one MkDocs build. Interactive parts (the bridge picker on `/animecoin/bridging-easy/` and the faucet on `/faucet/`) are React components compiled into a single JS/CSS bundle that MkDocs loads via `extra_javascript`.

```
docs/docs/                Markdown source for the docs site
docs/mkdocs.yml           Site config (nav, theme, extras)
widgets/                  React components mounted into docs pages
  bridge/                   bridge picker widget
  faucet/                   faucet widget (PoW + EIP-712 signing)
  index.ts                  registers widgets, mounts them on pages
  mount.ts                  Material-aware mounter (handles instant nav)
vite.config.ts            Builds widgets → docs/docs/assets/widgets/
firebase.json             Firebase Hosting (publishes docs/site/)
```

A page becomes interactive by dropping a mount div into the markdown:

```html
<div data-widget="bridge"></div>
<div data-widget="faucet"></div>
```

The bundle finds `[data-widget]` elements on every page navigation (Material's `document$` observable) and mounts the matching React component.

## 🚀 Workflows

| Purpose | Command | URL |
|---|---|---|
| Edit docs (live reload) | `npm run dev:docs` | `localhost:8000` |
| Rebuild widgets after changing `widgets/` | `npm run build:widgets` | — |
| Full integrated build | `npm run build:all` | (see deploy below) |
| Local Firebase preview | `firebase emulators:start --only hosting` | `localhost:5000` |

The MkDocs dev server (`npm run dev:docs`) hot-reloads markdown and CSS but **doesn't rebuild widgets** — re-run `npm run build:widgets` after editing anything under `widgets/` and the dev server will pick up the new bundle on the next request.

## 🔧 Build pipeline

`npm run build:all` runs:

1. **`build:widgets`** — Vite compiles `widgets/index.ts` and its imports into `docs/docs/assets/widgets/widgets.js` + `widgets.css` (single IIFE bundle, prod-mode React).
2. **`build:docs`** — MkDocs reads `docs/docs/`, copies the widget bundle along with everything else into `docs/site/`.

Output: `docs/site/` is the deployable artifact.

## 🎨 Theme

- Colors: defined in `docs/docs/assets/stylesheets/extra.css` (Material customizations).
- Widget styling: per-widget CSS in `widgets/<name>/*.css`, imported from the widget's entry. All widget CSS is bundled into `widgets.css`.
- Light/dark: Material toggles `data-md-color-scheme="default"|"slate"` on `<html>`. Widget styles hook those selectors.

## 🐛 Troubleshooting

| Issue | Solution |
|---|---|
| Widget renders as empty `<div>` | Check browser console — likely a runtime error in `widgets.js`. Hard-reload (Cmd+Shift+R) to bypass Material's instant-nav cache. |
| `process is not defined` in widgets | The Vite `define` for `process.env.NODE_ENV` is missing or stale. Re-run `npm run build:widgets`. |
| MkDocs not found | `bash setup/setup.sh pip install mkdocs mkdocs-material` |
| Bridge widget not picking up code change | `widgets/` only rebuilds on `build:widgets`, not on `dev:docs`. Re-run `build:widgets`. |
| `firebase deploy` 404s on a route | Confirm `docs/site/<route>/index.html` exists; rebuild with `build:all`. |

## 🚀 Deployment

```bash
npm run build:all
firebase deploy --only hosting
```

Or for a preview channel:

```bash
firebase hosting:channel:deploy <name> --expires 7d
```

---

**Resources**: [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) • [Vite library mode](https://vitejs.dev/guide/build.html#library-mode) • [Firebase Hosting](https://firebase.google.com/docs/hosting)
