import type { Config } from "@react-router/dev/config";

// Check if we're building for production (docs integration)
const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('build');

export default {
  // Enable SPA mode for embedding in docs
  ssr: false,
  // Specify the app directory explicitly
  appDirectory: "./app",
  // Build to a subdirectory that MkDocs can serve
  buildDirectory: "./docs/site/app",
  // Only use basename for production builds (docs integration)
  ...(isProduction && { basename: "/app/" }),
} satisfies Config;
