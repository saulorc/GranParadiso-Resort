// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração para deploy no GitHub Pages
export default defineConfig({
  // ⚠️ Use exatamente o nome do seu repositório aqui:
  base: '/GranParadiso-Resort/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true, // limpa dist a cada build
  },
})
