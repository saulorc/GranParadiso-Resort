// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from "path";
import { componentTagger } from "lovable-tagger";


// ajuste o base para o nome do repositório GitHub Pages
export default defineConfig({
  base: '/GranParadiso-Resort/',
  plugins: [react()],
  server: {
    host: "::",
    port: 8080,
})



  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
