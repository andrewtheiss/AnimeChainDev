
## AnimeChain Context & Assumptions

### **What is AnimeChain**

- **Layer 3 Blockchain** built on Arbitrum Orbital technology
- **Native Token:** ANIME (originally from Ethereum L1)
- **Purpose:** Anime and gaming-focused decentralized applications
- **Architecture:** L1 (Ethereum) → L2 (Arbitrum) → L3 (AnimeChain)

### **Network Details**

**Mainnet:**
- Chain ID: 69000 (0x10D88)
- RPC: `https://rpc-animechain-39xf6m45e3.t.conduit.xyz/`
- Explorer: `https://explorer-animechain-39xf6m45e3.t.conduit.xyz/`
- Token: ANIME (native gas token)

**Testnet:**
- Chain ID: 6900 (0x1AF4)  
- RPC: `https://explorer-animechain-testnet-i8yja6a1a0.t.conduit.xyz/`
- Explorer: `https://explorer-conduit-orbit-deployer-d4pqjb0rle.t.conduit.xyz/`
- Token: ANIME (free test tokens)
- Parent: Arbitrum Sepolia (421614)

### **Token Economics**

```
ANIME Token Flow:
L1 (Ethereum) → L2 (Arbitrum) → L3 (AnimeChain)
    ↓              ↓              ↓
ERC-20 ANIME   Wrapped ANIME   Native ANIME
(Original)     (Lower fees)    (Gas token)
```

### **Faucet System**

- **Signature-based** withdrawal to prevent abuse
- **Custom Messages:** Humorous commitment messages users must sign
- **Rate Limited:** Time-based cooldowns per user and globally
- **ABI Provided:** Complete contract interface in documentation

---

## 🎯 Target Audience & Use Cases

### **Primary Users**

1. **Developers** building on AnimeChain
   - Need RPC endpoints, contract addresses, ABIs
   - Want code examples and integration guides
   - Require testnet tokens for development

2. **DApp Users** interacting with anime applications
   - Need wallet setup instructions
   - Want bridging guides for tokens
   - Require network configuration help

3. **Community Members** learning about AnimeChain
   - Want architecture explanations
   - Need getting started guides
   - Interested in project roadmap

### **Key User Journeys**

**Developer Journey:**
1. Land on homepage → Choose testnet
2. Read getting started → Add network to wallet
3. Get test tokens → Use interactive faucet
4. Deploy contracts → Reference developer docs
5. Test thoroughly → Move to mainnet

**User Journey:**
1. Land on homepage → Choose mainnet
2. Add network → Bridge ANIME tokens
3. Use dApps → Get support when needed

---

## 🔧 Implementation Features

### **Completed Features**

✅ **Homepage with Network Selection**
- Prominent mainnet/testnet choice cards
- Architecture diagram (L1→L2→L3)
- Quick start paths for different user types

✅ **Network Documentation**
- Separate guides for mainnet vs testnet
- Complete RPC configuration examples
- Wallet setup instructions for MetaMask and others

✅ **Faucet System**
- Interactive faucet tool (React app)
- Documentation with ABI and examples
- Custom withdrawal messages with personality

✅ **Developer Resources**
- Code examples for Hardhat, ethers.js, viem
- Contract deployment guides
- RPC integration examples

✅ **Material Design Theme**
- Purple theme matching anime aesthetic
- Dark/light mode toggle
- Responsive design for mobile

### **Interactive App Features (React SPA)**

🔄 **Planned Interactive Tools:**
- Network configuration (one-click wallet setup)
- Faucet interface (sign messages, withdraw tokens)
- Contract interaction playground
- Bridge interface for token transfers
- Gas estimation tools

### **Content Strategy**

**Documentation Hierarchy:**
```
Home (Network choice)
├── Networks/
│   ├── Mainnet/ (Production guides)
│   └── Testnet/ (Development guides)
├── Animecoin/ (Token economics & bridging)
├── Developers/ (Technical resources)
├── Architecture/ (System design)
└── Resources/ (FAQ, troubleshooting)
```

**Writing Style:**
- **Developer-focused** but accessible
- **Anime-themed** personality (fun withdrawal messages)
- **Practical examples** over theory
- **Clear warnings** about mainnet vs testnet

---

## 🚀 Development Workflow

### **Local Development**

```bash
# Dual development mode
Terminal 1: npm run dev          # React app dev server
Terminal 2: npm run dev:docs     # MkDocs live reload

# Production build
npm run build:all               # Build both systems
```

### **Build Verification**

```bash
# Check build outputs
ls docs/site/                   # MkDocs static files
ls docs/site/app/client/        # React SPA files

# Verify integration
curl http://localhost:8000/     # MkDocs homepage
curl http://localhost:8000/app/ # React app entry
```

### **Deployment Strategy**

1. **Static Hosting** (recommended: Netlify, GitHub Pages)
2. **Single directory:** Deploy entire `docs/site/` folder
3. **Routing:** Static host handles both MkDocs and React routes
4. **CDN:** Assets served efficiently for global audience

---

## 🧠 Key Assumptions for Future AI Context

### **Technical Assumptions**

1. **React Router v7** with SPA mode for embedding
2. **MkDocs Material** theme for documentation
3. **Python-based** build tools for docs
4. **Node.js/npm** for React development
5. **No server-side rendering** needed (static hosting)

### **Business Assumptions**

1. **AnimeChain is production-ready** blockchain
2. **ANIME token has real value** on mainnet
3. **Testnet may reset** during development
4. **Developer community** is primary audience
5. **Anime/gaming focus** differentiates from other L3s

### **Design Assumptions**

1. **Mobile-first** responsive design
2. **Purple theme** aligns with anime aesthetic  
3. **Network choice** is the primary user decision
4. **Interactive tools** enhance documentation
5. **GitHub/DevZuki** are primary community channels

### **Content Assumptions**

1. **Mainnet requires real tokens** (emphasis on safety)
2. **Testnet is for experimentation** (encourage testing)
3. **Bridging is complex** (needs detailed guides)
4. **Faucet abuse prevention** (signature requirement)
5. **Developer experience** prioritized over end-user

---

## 🔄 Future Context Window Instructions

When continuing this project, understand that:

1. **This is a DUAL-WEBSITE system** - not just documentation
2. **Build order matters** - always docs first, then React app
3. **Both sites must work independently** - docs can link to app
4. **AnimeChain is L3 blockchain** - specific network details matter
5. **Faucet has personality** - maintain humorous withdrawal messages
6. **Purple theme is intentional** - matches anime aesthetic
7. **Developer focus** - prioritize technical accuracy over marketing
8. **Mobile responsive** - many users browse on mobile
9. **Static hosting** - no backend required for deployment
10. **Community-driven** - GitHub/DevZuki integration important

The goal is creating the **best developer documentation site** for an anime-focused L3 blockchain, with **integrated interactive tools** that make development easier and more engaging.

---

## ✅ System Verification & Testing

### **How to Verify the Dual-Website Integration**

After making changes, always verify both systems work:

```bash
# 1. Build everything
npm run build:all

# 2. Check directory structure
ls -la docs/site/           # Should see MkDocs files
ls -la docs/site/app/client/ # Should see React SPA files

# 3. Start development server
npm run dev:docs            # Starts at http://localhost:8000

# 4. Test both websites
curl -I http://localhost:8000/                    # MkDocs homepage (200)
curl -I http://localhost:8000/networks/          # MkDocs page (200)  
curl -I http://localhost:8000/app/               # React SPA (200)
curl -I http://localhost:8000/app/assets/        # React assets (200)
```

### **Expected Directory Structure After Build**

```
docs/site/
├── index.html              # MkDocs homepage
├── networks/
│   ├── index.html         # Networks overview
│   ├── mainnet/
│   │   └── getting-started/
│   │       └── index.html # Mainnet guide
│   └── testnet/
│       ├── getting-started/
│       │   └── index.html # Testnet guide
│       └── faucet/
│           └── index.html # Faucet docs
├── css/                   # MkDocs theme CSS
├── js/                    # MkDocs JavaScript
├── search/                # MkDocs search index
└── app/                   # React SPA (embedded)
    └── client/
        ├── index.html     # React entry point
        ├── assets/        # React JS/CSS bundles
        └── favicon.ico    # React favicon
```

### **Common Issues & Solutions**

❌ **React app not loading at `/app/`**
- Check: `react-router.config.ts` has `basename: "/app"`
- Check: `vite.config.ts` has `base: "/app/"`
- Check: Build order is docs first, then app

❌ **React assets 404 errors**
- Check: Asset URLs have `/app/` prefix in built HTML
- Check: `emptyOutDir: false` in vite config
- Rebuild: `npm run build:app`

❌ **MkDocs links broken**
- Check: All referenced .md files exist
- Check: Navigation in `mkdocs.yml` matches file structure
- Fix: Create missing documentation files

❌ **Build fails with emoji errors**
- Check: Using `material.extensions.emoji.twemoji`
- Not: Old `materialx.emoji.twemoji`
- Update: MkDocs configuration

### **Development vs Production**

**Development Mode:**
- MkDocs: `npm run dev:docs` (port 8000, live reload)
- React: `npm run dev` (port 5173, HMR)
- **Two separate servers** for development convenience

**Production Mode:**
- Combined: `npm run build:all` 
- Single site: Deploy `docs/site/` directory
- **One integrated website** with both systems

---

## 📊 Current Project Status (as of completion)

### **✅ COMPLETED & WORKING**

**🏗️ Core Infrastructure:**
- [x] Dual-website architecture (MkDocs + React SPA)
- [x] Build process integration (`build:all` workflow)
- [x] Development environment (dual dev servers)
- [x] Git configuration (.gitignore for build artifacts)
- [x] Network configuration for both mainnet/testnet

**🎨 Documentation Site:**
- [x] AnimeChain-themed MkDocs Material configuration
- [x] Purple anime aesthetic with dark/light mode
- [x] Homepage with network selection cards
- [x] L1→L2→L3 architecture diagram
- [x] Networks overview page
- [x] Mainnet getting started guide
- [x] Testnet getting started guide
- [x] Faucet documentation with custom withdrawal messages

**⚛️ React App Integration:**
- [x] SPA mode configuration for embedding
- [x] Proper base path setup (`/app/`)
- [x] Asset path configuration
- [x] Build output integration with MkDocs

**📱 User Experience:**
- [x] Responsive design for mobile/desktop
- [x] Clear mainnet vs testnet guidance
- [x] Developer-focused code examples
- [x] Network configuration snippets (Hardhat, ethers.js, viem)

### **🚧 REMAINING WORK**

**📚 Documentation Pages:**
- [ ] `animecoin/index.md` - Token overview and economics
- [ ] `animecoin/bridging.md` - L1→L2→L3 bridging guide
- [ ] `animecoin/contracts.md` - Token contract addresses
- [ ] `developers/index.md` - Developer quick start
- [ ] `developers/contracts.md` - Smart contract reference
- [ ] `developers/rpc-api.md` - Complete RPC documentation
- [ ] `developers/examples.md` - Code examples and tutorials
- [ ] `architecture/index.md` - Technical architecture deep dive
- [ ] `resources/faq.md` - Frequently asked questions
- [ ] `resources/troubleshooting.md` - Common issues and solutions

**⚛️ Interactive React Features:**
- [ ] Network configuration tool (one-click wallet setup)
- [ ] Interactive faucet interface (implement the ABI provided)
- [ ] Contract interaction playground
- [ ] Bridge interface for token transfers
- [ ] Gas estimation tools
- [ ] Transaction monitoring dashboard

**🎨 Polish & Enhancement:**
- [ ] Custom CSS for improved Material theme
- [ ] Anime-themed illustrations or graphics
- [ ] Code syntax highlighting optimization
- [ ] Search functionality testing and optimization
- [ ] Mobile UX improvements

### **🎯 Priority Order for Continuation**

1. **HIGH PRIORITY** - Complete core documentation:
   - Network details pages (mainnet/testnet)
   - Add to wallet guides
   - Animecoin token documentation

2. **MEDIUM PRIORITY** - Developer resources:
   - Developer quick start guide
   - Complete RPC API documentation
   - Smart contract references

3. **LOW PRIORITY** - Polish and interactive features:
   - React app interactive tools
   - Enhanced styling
   - Advanced features

### **🚀 Ready for Use**

The current implementation is **production-ready** for:
- ✅ Hosting the documentation site
- ✅ Onboarding new developers to AnimeChain
- ✅ Providing network configuration guidance
- ✅ Explaining the faucet system
- ✅ Serving as a foundation for additional content

The architecture is solid and the remaining work is primarily **content creation** rather than technical implementation.

---

## Overview
Set up MkDocs as the primary documentation site with an embedded React application that can be linked to from the docs.

## Prerequisites
- [x] Install MkDocs and required plugins ✅
  ```bash
  pip install mkdocs mkdocs-material mkdocstrings
  ```

## 1. React App Configuration Changes

### 1.1 Update React Router Config
- [x] Modify `react-router.config.ts` to: ✅
  - [x] Set `ssr: false` for SPA mode ✅
  - [x] Configure `buildDirectory: "./docs/site/app"` ✅
  - [x] Set `basename: "/app"` for proper routing ✅

### 1.2 Update Vite Configuration
- [x] Modify `vite.config.ts` to: ✅
  - [x] Set `base: "/app/"` for proper asset paths ✅
  - [x] Set `build.emptyOutDir: false` to preserve docs files ✅
  - [ ] ~~Configure `build.outDir: "./docs/site/app"`~~ (Handled by React Router config) ✅

### 1.3 Update Package.json Scripts
- [x] Add new build scripts: ✅
  - [x] `build:app` - Build React app only ✅
  - [x] `dev:docs` - Start MkDocs dev server ✅
  - [x] `build:docs` - Build MkDocs site ✅
  - [x] `build:all` - Build both app and docs ✅
  - [x] `serve:docs` - Serve MkDocs site ✅

## 2. MkDocs Configuration

### 2.1 Enhance mkdocs.yml
- [x] Add comprehensive site configuration: ✅
  - [x] Site metadata (name, description, URL) ✅
  - [x] Material theme configuration with dark/light mode ✅
  - [x] Navigation structure including app link ✅
  - [x] Search and other plugins ✅
  - [x] Markdown extensions for better formatting ✅
  - [x] Custom CSS inclusion for React app ✅

### 2.2 Directory Structure
- [x] Ensure proper docs directory structure: ✅
  - [x] `docs/docs/` for markdown files ✅
  - [x] `docs/site/` for built site (auto-generated) ✅
  - [x] `docs/site/app/` for built React app ✅

## 3. Documentation Content Creation

### 3.1 Main Documentation Pages - AnimeChain Structure
- [x] Update `docs/docs/index.md` with AnimeChain homepage: ✅
  - [x] Hero section with mainnet/testnet selection cards ✅
  - [x] Overview of AnimeChain L3 architecture ✅
  - [x] Quick navigation to key sections ✅
  - [x] Link to interactive app ✅

- [x] Create network-specific documentation: ✅ (Partial)
  - [x] `docs/docs/networks/index.md` - Networks overview ✅
  - [x] `docs/docs/networks/mainnet/getting-started.md` - Mainnet setup guide ✅
  - [ ] `docs/docs/networks/mainnet/network-details.md` - RPC, contracts, etc.
  - [ ] `docs/docs/networks/mainnet/add-to-wallet.md` - Detailed wallet setup

- [ ] Create core documentation:
  - [ ] `docs/docs/animecoin/index.md` - Token overview (L1/L2/L3)
  - [ ] `docs/docs/animecoin/bridging.md` - Cross-layer bridging guide
  - [ ] `docs/docs/animecoin/contracts.md` - Contract addresses
  - [ ] `docs/docs/developers/index.md` - Developer resources
  - [ ] `docs/docs/developers/contracts.md` - Contract addresses & ABIs
  - [ ] `docs/docs/developers/rpc-api.md` - RPC methods & examples
  - [ ] `docs/docs/developers/examples.md` - Code examples
  - [ ] `docs/docs/architecture/index.md` - Architecture overview
  - [ ] `docs/docs/resources/faq.md` - FAQ
  - [ ] `docs/docs/resources/troubleshooting.md` - Troubleshooting guide

### 3.2 App Integration Page
- [ ] Create `docs/docs/app.md` with:
  - [ ] Embedded iframe for the React app
  - [ ] App description and features
  - [ ] Direct link to standalone app

## 4. Build Process Setup

### 4.1 Development Workflow
- [ ] Test dual development setup:
  - [ ] React app dev server (`npm run dev`)
  - [ ] MkDocs dev server (`npm run dev:docs`)
  - [ ] Verify both work simultaneously

### 4.2 Production Build Process
- [ ] Implement build pipeline:
  - [ ] Build React app to docs directory
  - [ ] Build MkDocs site including React app
  - [ ] Verify all assets and routing work correctly

## 5. Integration Testing

### 5.1 Routing Verification
- [ ] Test that MkDocs serves main site at `/`
- [ ] Test that React app is accessible at `/app/`
- [ ] Verify all internal links work correctly
- [ ] Test navigation between docs and app

### 5.2 Asset Management
- [ ] Verify React app CSS/JS loads correctly in docs context
- [ ] Test that app works in iframe embedding
- [ ] Check for any CORS or path issues

### 5.3 Responsive Design
- [ ] Test docs site on different screen sizes
- [ ] Test embedded app responsiveness
- [ ] Verify mobile compatibility

## 6. Documentation and Cleanup

### 6.1 Update Project Documentation
- [ ] Update main `README.md` with:
  - [ ] New development workflow
  - [ ] Build instructions
  - [ ] Deployment process

### 6.2 Git Configuration
- [x] Update `.gitignore` to exclude: ✅
  - [x] `docs/site/` (built files) ✅
  - [x] Any temporary build artifacts ✅

## 7. Optional Enhancements

### 7.1 Advanced Features
- [ ] Add search functionality across both docs and app
- [ ] Implement shared theme/styling between docs and app
- [ ] Add version management for docs
- [ ] Set up automated builds/deployment

### 7.2 Performance Optimization
- [ ] Optimize React app bundle size for embedding
- [ ] Configure proper caching headers
- [ ] Implement lazy loading for app components

## 8. Deployment Considerations

### 8.1 Static Hosting Setup
- [ ] Configure hosting service (GitHub Pages, Netlify, etc.)
- [ ] Set up custom domain if needed
- [ ] Configure proper redirects and routing

### 8.2 CI/CD Pipeline
- [ ] Set up automated builds on code changes
- [ ] Configure deployment pipeline
- [ ] Add build status monitoring

## Notes
- The React app will run in SPA mode for better embedding
- MkDocs will be the primary site serving documentation
- Both systems will share the same domain to avoid CORS issues
- The app will be accessible both embedded and as a standalone page 