import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Add `base: '/afesmx25.io/'` so built asset URLs include the repo name
export default defineConfig({
  base: '/afesmx25.io/',
  plugins: [react()],
})