import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configure base to your repo name so built assets load correctly on GitHub Pages.
// Build output is set to 'docs' so you can serve the site from "main branch /docs folder" in GitHub Pages settings.
export default defineConfig({
  base: '/afesmx25.io/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    // optional: keep sourcemap false for smaller build artifacts
    sourcemap: false,
  },
})