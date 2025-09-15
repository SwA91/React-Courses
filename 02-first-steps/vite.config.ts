import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  // SWC: SPEEDY WEB COMPILER, reemplaza a Babel en velocidad
  plugins: [react()],
})
