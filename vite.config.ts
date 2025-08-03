import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command, mode }) => {
  // Only use base path in production builds for docs integration
  const isProduction = command === 'build' || mode === 'production';
  
  return {
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    // Configure for embedding in docs only during production builds
    base: isProduction ? "/app/" : "/",
    build: {
      // Don't clean the directory (preserve other docs files)
      emptyOutDir: false,
    },
  };
});
