import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures paths resolve correctly on Render
  build: {
    outDir: "dist", // Explicit output directory
    emptyOutDir: true, // Clears old files on build
    sourcemap: false, // Disable for production (smaller files)
    minify: "terser", // Reduces bundle size
    chunkSizeWarningLimit: 1000, // Avoids warnings for large chunks
  },
  optimizeDeps: {
    exclude: ["lucide-react"], // Keep your existing exclusion
  },
  server: {
    port: 3000, // Default for local dev (optional)
  },
});
