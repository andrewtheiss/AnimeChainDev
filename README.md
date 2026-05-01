# AnimeChain Documentation & Faucet

Two static apps stitched together at deploy time:

| Path | App | Source | Build → |
|---|---|---|---|
| `/`, `/use-animechain/`, `/animecoin/`, `/developers/`, `/architecture/`, `/resources/*` | **MkDocs** (Python) | `docs/docs/*.md` | `docs/site/` |
| `/app/**` (faucet SPA) | **React Router / Vite** | `app/` | `docs/site/app/` |
| `faucet.animechain.dev` | PoW proxy backend | external repo | n/a |

Firebase serves `docs/site/` and rewrites `/app/**` → `/app/index.html` (`firebase.json`). The React app applies `basename: "/app/"` only on production builds (`react-router.config.ts`, `vite.config.ts`), so cross-app links like `<a href="/use-animechain/">` are plain anchors that hand off to MkDocs via a full browser navigation.

## Install

```bash
npm install
bash setup/setup.sh pip install mkdocs mkdocs-material mkdocstrings
# Windows: powershell -ExecutionPolicy Bypass -File setup/setup.ps1 pip install mkdocs mkdocs-material mkdocstrings
```

## Run locally

| Goal | Command | URL |
|---|---|---|
| Faucet only (fast iteration) | `npm run dev` | `localhost:5173` |
| Docs only | `npm run dev:docs` | `localhost:8000` |
| **Full integrated site** (use this when testing cross-app links like `/use-animechain/`) | `npm run build:all && npm run serve:docs` | `localhost:8000` |
| Closest to production | `npm run build:all && firebase emulators:start --only hosting` | `localhost:5000` |

`npm run dev` serves only the React app, so links to MkDocs paths (`/use-animechain/`, `/animecoin/`, etc.) will 404 there — that's expected; switch to integrated mode to test them.

Windows: `npm run serve:docs:win` for the docs server.

## Deploy

```bash
npm run build:all   # builds docs, then app, then flattens via scripts/setup-app.sh
firebase deploy --only hosting
```

---

## 🛠️ Development

| Mode | Command | URL | Use Case |
|------|---------|-----|----------|
| **React Only** | `npm run dev` | `localhost:5173` | Faucet development |
| **Docs Only** | `npm run dev:docs` | `localhost:8000` | Content writing |
| **Integrated** | `npm run build:all && npm run serve:docs` | `localhost:8000` | Full testing |

**Key Features:**
- Auto-detects dev vs production (no manual config)
- TypeScript + Hot reload for React
- Live reload for documentation
- Seamless docs ↔ faucet integration

## 🐛 Common Issues

| Problem | Solution |
|---------|----------|
| `/root.tsx` not found | `rm -rf node_modules/.vite .react-router && npm run dev` |
| MkDocs not found | `bash setup/setup.sh pip install mkdocs mkdocs-material` |
| App 404 in docs | `npm run build:all` (builds in correct order) |
| Assets not loading | Verify `docs/site/app/` contains `index.html` and `assets/` |

## 🚀 Deployment

```bash
npm run build:all  # Builds docs + app integration
# Deploy docs/site/ directory to any static host
```

**Hosts**: Netlify, GitHub Pages, Vercel, or any CDN

## 📁 Structure

```
app/                    # React faucet source
docs/docs/             # Documentation markdown
docs/site/             # Built site (deploy this)
├── app/               # Integrated faucet
└── index.html         # Documentation
```

## 🎨 Theme

Consistent AnimeChain purple theme:
- Primary: `#a855f7` 
- Accent: `#ff6b9d` (pink), `#4ecdc4` (cyan)
- Auto dark/light mode

---

**Links**: [DevZuki Community](https://t.co/4xlpVFIfDx) • [Docs](http://localhost:8000/) • [Faucet](http://localhost:8000/app/)

