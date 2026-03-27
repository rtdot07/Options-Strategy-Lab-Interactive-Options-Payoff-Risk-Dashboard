import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages often serves the site from a sub-path like:
  // https://<user>.github.io/<repo>/... .
  // Using relative base paths avoids "asset not found" runtime errors.
  base: './',
})
