import { defineConfig } from 'vite';

// GITHUB
const finalFolder = '../docs';

// STANDARD
// const finalFolder = '../dist';

export default defineConfig({
  base: '',
  root: 'src',
  build: {
    outDir: finalFolder,
    emptyOutDir: true
  }
});
