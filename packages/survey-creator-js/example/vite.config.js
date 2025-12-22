import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills({
      // Whether to polyfill `global` variable
      globals: {
        global: true,
      },
      // Whether to polyfill Node.js builtin modules
      protocolImports: true,
    }),
  ],
  define: {
    global: 'globalThis',
  },
  resolve: {
    dedupe: ["survey-creator-core", "survey-core", "survey-js-ui"],
  },
  build: {
    commonjsOptions: {
      include: [/survey-creator-core\/build\/themes\/test/, /node_modules/],
    },
  },
  optimizeDeps: {
    include: ["survey-creator-core/themes/test"],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
})

