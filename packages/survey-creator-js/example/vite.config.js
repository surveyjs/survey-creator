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
      include: [/node_modules/],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
})

