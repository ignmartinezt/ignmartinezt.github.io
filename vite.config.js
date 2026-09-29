import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // los assets se buscan desde la ruta actual (necesario en GitHub Pages)
  build: {
    outDir: 'docs', // GitHub Pages publica desde /docs
  },
})
