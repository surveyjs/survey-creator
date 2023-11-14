import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => { 
  return {
    plugins: [
      vue(),
    ],
    server: {
      watch: {
        ignored: ["survey-creator-vue", "survey-vue3-ui"].map((m) => `!**/node_modules/${m}/**`)
      }
    },
    build: {
      commonjsOptions: { exclude: ["survey-core", "survey-creator-core"] },
    },
    optimizeDeps: {
      exclude: ["survey-creator-vue", "survey-vue3-ui"],
      include: ["survey-creator-core", "survey-core", "survey-creator-core/survey-creator-core.i18n", "survey-core/survey.i18n"]
    },
    resolve: {
      preserveSymlinks: command == "serve" ? false : true,
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        "survey-core": fileURLToPath(new URL('./node_modules/survey-core', import.meta.url)),
        "survey-creator-core": fileURLToPath(new URL('./node_modules/survey-creator-core', import.meta.url)),
      }
    }
}
})
