# 🎌 AnimeChain Documentation & Faucet

Documentation site with integrated React faucet for AnimeChain L3 blockchain.

**Components:**
- **📚 Documentation** (MkDocs) - Complete AnimeChain guides
- **🎌 Faucet App** (React) - Interactive testnet token faucet

## 🚀 Quick Start

```bash
# Install dependencies
npm install
bash setup/setup.sh pip install mkdocs mkdocs-material mkdocstrings

# Windows users: use PowerShell
# powershell -ExecutionPolicy Bypass -File setup/setup.ps1 pip install mkdocs mkdocs-material mkdocstrings

# Choose your workflow:
npm run dev              # React app only (localhost:5173)
npm run dev:docs         # Documentation only (localhost:8000)
npm run build:all        # Build integrated site
npm run serve:docs       # Serve integrated site (localhost:8000)
```
Windows: run `npm run serve:docs:win` to serve docs on localhost:8000.

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

**Links**: [Discord](https://discord.gg/animechain) • [Docs](http://localhost:8000/) • [Faucet](http://localhost:8000/app/)

