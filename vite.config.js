import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// base './' lets the build work on any host, including GitHub Pages subpaths
export default defineConfig({ plugins: [react(), tailwindcss()], base: './' })
