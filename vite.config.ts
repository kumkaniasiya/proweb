import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // Force all assets to be separate files
    rollupOptions: {
      output: {
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]'
      }
    }
  },
  server: {
    headers: {
      'Content-Type': 'text/javascript'
    }
  }
});