import { defineConfig } from "vite";
import { resolve } from "path";

/**
 * Builds the docs-embedded React widgets (bridge, faucet, relay) as an
 * ES-module bundle that MkDocs loads via `extra_javascript`. Each widget
 * is a separate dynamic-import chunk, so a page only downloads the heavy
 * crypto stack (wagmi/viem/relay-kit) when its mount point is present.
 *
 * Run via `npm run build:widgets` before `npm run build:docs`.
 */
export default defineConfig({
  publicDir: false,
  build: {
    outDir: "docs/docs/assets/widgets",
    emptyOutDir: true,
    cssCodeSplit: false,
    sourcemap: false,
    target: "es2020",
    lib: {
      entry: resolve(__dirname, "widgets/index.ts"),
      formats: ["es"],
      fileName: () => "widgets.js",
    },
    rollupOptions: {
      output: {
        // Lib mode defaults this to true (inlines all dynamic imports into a
        // single bundle). We want real chunks so per-widget code only loads
        // when its mount point appears on the page.
        inlineDynamicImports: false,
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: (info) => {
          // Vite emits the lib's CSS as <name>.css; rename to widgets.css
          // so we can reference a stable path in mkdocs.yml.
          if (info.names?.some((n) => n.endsWith(".css"))) return "widgets.css";
          return "[name][extname]";
        },
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          // Group the heavy crypto stack into one cacheable chunk shared by
          // any widget that uses wallet/RPC code. Faucet uses ethers only;
          // relay uses wagmi/viem/react-query/relay-kit-ui.
          if (
            id.includes("/wagmi/") ||
            id.includes("/viem/") ||
            id.includes("/@reservoir0x/") ||
            id.includes("/@tanstack/react-query/") ||
            id.includes("/@walletconnect/") ||
            id.includes("/@reown/") ||
            id.includes("/@coinbase/") ||
            id.includes("/@base-org/") ||
            id.includes("/porto/") ||
            id.includes("/ox/")
          ) {
            return "wallet-stack";
          }
          if (id.includes("/ethers/")) return "ethers";
          if (id.includes("/react-dom/") || /\/react\//.test(id)) return "react";
        },
      },
      // Filter out third-party noise that is harmless for a client-side
      // bundle but drowns out warnings worth seeing:
      //   - "use client" RSC directives in wagmi/react-query/framer-motion
      //   - misplaced /*#__PURE__*/ annotations in `ox` (used by wallet libs)
      onwarn(warning, defaultHandler) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
        if (
          warning.code === "INVALID_ANNOTATION" &&
          warning.message?.includes("/*#__PURE__*/")
        ) {
          return;
        }
        defaultHandler(warning);
      },
    },
  },
  esbuild: {
    jsx: "automatic",
  },
  // React (and some libs like ethers) reference `process.env.NODE_ENV` at
  // module-init time to gate dev warnings. Vite's app build replaces these
  // automatically, but lib builds do not — without this define the bundle
  // throws `ReferenceError: process is not defined` before mounting.
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": "{}",
  },
});
