import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import copy from "rollup-plugin-copy";

export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],

    build: {
      emptyOutDir: false,
      sourcemap: mode == "development",
      outDir: "./build/ui-preset-editor",
      lib: {
        // Set the entry point for presets
        entry: resolve(__dirname, "src/ui-preset-editor/index.ts"),
        // Name of the library.
        name: "SurveyCreatorUIPresetEditorVue",
        // Generate preset files
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        // External dependencies
        external: [
          "vue",
          "survey-core",
          "survey-creator-core",
          "survey-vue3-ui",
          "survey-creator-vue",
        ],

        plugins: [
          copy({
            hook: "writeBundle",
            targets: [{ src: "./README.md", dest: "./build" }],
          }),
        ],
        output: {
          globals: {
            vue: "Vue",
            "survey-core": "Survey",
            "survey-creator-core": "SurveyCreatorCore",
            "survey-vue3-ui": "SurveyVue3",
          },
        },
      },
    },
    resolve: {
      dedupe: ["survey-core", "vue"],
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  };
});
