import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    /**
     * The framer-motion feature bundle (domMax) is loaded asynchronously via
     * `LazyMotion features`. Kick off its download as soon as the HTML is
     * parsed — in parallel with the main chunk — so above-fold animation
     * hydration waits on network, not on React mounting.
     */
    {
      name: "preload-motion-features",
      enforce: "post",
      generateBundle(_options, bundle) {
        const html = Object.values(bundle).find(
          (chunk) => chunk.type === "asset" && chunk.fileName === "index.html"
        );
        const featureChunk = Object.values(bundle).find(
          (chunk) =>
            chunk.type === "chunk" &&
            (chunk.facadeModuleId?.endsWith("motion-features.ts") ||
              chunk.name === "motion-features")
        );
        if (!html || !featureChunk) return;
        const source = typeof html.source === "string" ? html.source : "";
        html.source = source.replace(
          "<head>",
          `<head>\n    <link rel="modulepreload" href="/${featureChunk.fileName}">`
        );
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
