import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import copy from "rollup-plugin-copy";
import generatePackageJson from "rollup-plugin-generate-package-json";

const packageJson = require("./package.json");

const libraryName = "survey-creator-vue-presets";

export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],

    build: {
      emptyOutDir: false,
      sourcemap: mode == "development",
      outDir: "./build",
      lib: {
        // Set the entry point for presets
        entry: resolve(__dirname, "src/presets/index.ts"),
        // Name of the library.
        name: "SurveyCreatorVuePresets",
        // Generate preset files
        fileName: (format) => {
          if (format === "es") return `${libraryName}.es.js`;
          if (format === "cjs") return `${libraryName}.cjs.js`;
          return `${libraryName}.js`;
        },
      },
      rollupOptions: {
        // External dependencies
        external: [
          "vue",
          "survey-core",
          "survey-creator-core",
          "survey-creator-core-presets",
          "survey-vue3-ui",
          "survey-creator-vue",
        ],

        plugins: [
          copy({
            hook: "writeBundle",
            targets: [{ src: "./README.md", dest: "./build" }],
          }),
          generatePackageJson({
            inputFolder: "publish",
            outputFolder: "./build",
            baseContents: {
              name: libraryName,
              version: packageJson.version,
              main: `${libraryName}.cjs.js`,
              module: `${libraryName}.es.js`,
              esm: `${libraryName}.es.js`,
              type: "module",
              types: "./types/presets/index.d.ts",
              peerDependencies: {
                vue: "^3.0.0",
                "survey-core": "^1.0.0",
                "survey-creator-core": "^1.0.0",
                "survey-creator-core-presets": "^1.0.0",
                "survey-vue3-ui": "^1.0.0",
                "survey-creator-vue": "^1.0.0"
              }
            },
          }),
        ],
        output: {
          globals: {
            vue: "Vue",
            "survey-core": "Survey",
            "survey-creator-core": "SurveyCreatorCore",
            "survey-creator-core-presets": "SurveyCreatorCorePresets",
            "survey-vue3-ui": "SurveyVue3",
            "survey-creator-vue": "SurveyCreatorVue",
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
