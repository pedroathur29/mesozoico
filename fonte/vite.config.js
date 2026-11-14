import { defineConfig } from 'vite';

// base './' deixa o build funcionar em qualquer subpasta (GitHub Pages: /nome-do-repo/).
export default defineConfig({
  base: './',
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        // three fica num chunk à parte: a página e o loading aparecem antes do 3D terminar de baixar.
        manualChunks(id) { if (id.includes('node_modules/three/')) return 'three'; },
      },
    },
  },
});
