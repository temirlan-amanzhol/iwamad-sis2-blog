import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Site is served from https://temirlan-amanzhol.github.io/iwamad-sis2-blog/
  base: '/iwamad-sis2-blog/',
  build: {
    // GitHub Pages publishes the /docs folder of the main branch
    outDir: 'docs',
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
