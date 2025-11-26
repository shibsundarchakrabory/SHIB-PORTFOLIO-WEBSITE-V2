import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/SHIB-PORTFOLIO-WEBSITE-V2/',
  plugins: [react()],
})