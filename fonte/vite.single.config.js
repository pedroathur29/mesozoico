import { defineConfig } from 'vite';

// Build de ARQUIVO ÚNICO (tudo inline), usado só para compartilhar uma página de visualização.
// O site normal continua usando vite.config.js (npm run build).
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist-single',
    target: 'es2020',
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 5000,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
