// import { defineConfig } from 'vite'
// tema de testing
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  // SWC: SPEEDY WEB COMPILER, reemplaza a Babel en velocidad
  plugins: [react()],
  test: {
    // usamos jsdom para el test
    environment: "jsdom",
    // variables de entornos
    globals: true,
  },
});
