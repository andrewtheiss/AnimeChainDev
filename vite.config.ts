import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  // Configure for embedding in docs
  base: "/app/",
  build: {
    // Don't clean the directory (preserve other docs files)
    emptyOutDir: false,
  },
});
