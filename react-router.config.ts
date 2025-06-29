import type { Config } from "@react-router/dev/config";

export default {
  // Enable SPA mode for embedding in docs
  ssr: false,
  // Build to a subdirectory that MkDocs can serve
  buildDirectory: "./docs/site/app",
  // Set the base path for the app
  basename: "/app",
} satisfies Config;
