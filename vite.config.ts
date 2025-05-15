import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'rewrite-script-path',
      transformIndexHtml(html) {
        return process.env.NODE_ENV === 'production'
          ? html.replace(
              '<script type="module" src="/src/main.tsx"></script>',
              '<script type="module" src="/assets/index.js"></script>'
            )
          : html;
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      output: {
        entryFileNames: 'assets/[name].js'
      }
    }
  }
});