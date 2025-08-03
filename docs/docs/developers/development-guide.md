# Development Guide

## 🏗️ Architecture

**Documentation (MkDocs)**: Markdown → Static HTML  
**Faucet (React)**: TypeScript → SPA embedded in docs

## 🚀 Workflows

| Purpose | Command | URL | Best For |
|---------|---------|-----|----------|
| **React Development** | `npm run dev` | `localhost:5173` | UI, wallet testing |
| **Documentation** | `npm run dev:docs` | `localhost:8000` | Content, theme |
| **Integration Testing** | `npm run build:all && npm run serve:docs` | `localhost:8000` | Full testing, demos |

## 🔧 Build System

**Auto-detects environment:**
- Development: No base paths (clean URLs)
- Production: `/app/` base paths (docs integration)

**Build order:** Docs → React → Integration (handled by `npm run build:all`)

## 📁 Key Files

```
app/components/        # React faucet components
docs/docs/            # Markdown documentation
docs/site/            # Built site (deploy this)
vite.config.ts        # React build config
docs/mkdocs.yml       # Documentation config
```

## 🎨 Theme

**Colors**: Purple (`#a855f7`), Pink (`#ff6b9d`), Cyan (`#4ecdc4`)  
**Customization**: `docs/docs/assets/stylesheets/extra.css` (docs), `app/app.css` (React)

## 🔄 Best Practices

**React**: TypeScript components, proper error handling, test wallet interactions  
**Docs**: Relative links, proper headings, user journey organization  
**Integration**: Test docs ↔ app navigation, verify all links work

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| `/root.tsx` not found | `rm -rf node_modules/.vite .react-router && npm run dev` |
| MkDocs not found | `bash setup/setup.sh pip install mkdocs mkdocs-material` |
| App 404 in docs | `npm run build:all` |
| Assets not loading | Verify `docs/site/app/index.html` exists |
| Live reload broken | Check file paths, restart dev server |

## 🚀 Deployment

```bash
npm run build:all              # Build everything
# Deploy docs/site/ to: Netlify, GitHub Pages, Vercel, etc.
```

**Verify**: Homepage loads, `/app/` works, all links functional, mobile responsive

---

**Resources**: [React Router](https://reactrouter.com/) • [Vite](https://vitejs.dev/) • [MkDocs](https://squidfunk.github.io/mkdocs-material/)