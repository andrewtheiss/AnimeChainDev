import { defineConfig } from "vite";
import { resolve } from "path";

/**
 * Builds the docs-embedded React widgets (bridge today, faucet/etc. later)
 * as a single self-contained IIFE bundle that MkDocs can load via
 * `extra_javascript`. Output lives inside the docs source tree so MkDocs
 * copies it to the published site verbatim.
 *
 * Run via `npm run build:widgets` before `npm run build:docs`.
 */
export default defineConfig({
  // The repo's `public/` dir holds assets for the React app at /app/.
  // We don't want those copied into the docs widget bundle, so disable.
  publicDir: false,
  build: {
    outDir: "docs/docs/assets/widgets",
    emptyOutDir: true,
    cssCodeSplit: false,
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, "widgets/index.ts"),
      name: "AnimechainWidgets",
      formats: ["iife"],
      fileName: () => "widgets.js",
    },
    rollupOptions: {
      output: {
        assetFileNames: (info) => {
          // Vite emits the lib's CSS as <name>.css; rename to widgets.css
          // so we can reference a stable path in mkdocs.yml.
          if (info.names?.some((n) => n.endsWith(".css"))) return "widgets.css";
          return "[name][extname]";
        },
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
