import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { ConfigEnv, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import generatePackageJson from "rollup-plugin-generate-package-json";
const json = require("./publish/package.json");
const packageJson = require("./package.json");
json.version = packageJson.version;
// json.dependencies["survey-core"] = json.version;

const libraryName = "survey-creator-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],

    build: {
      // Output compiled files to /dist.
      sourcemap: mode == "development",
      outDir: "./build",
      lib: {
        // Set the entry point (file that contains our components exported).
        entry: resolve(__dirname, "src/index.ts"),
        // Name of the library.
        name: "SurveyCreatorVue",
        // We are building for CJS and ESM, use a function to rename automatically files.
        // Example: my-component-library.esm.js
        fileName: (format) => `${libraryName}.${format}.js`,
      },
      rollupOptions: {
        // Vue is provided by the parent project, don't compile Vue source-code inside our library.
        external: [
          "vue",
          "survey-core",
          "survey-creator-core",
          "survey-vue3-ui",
        ],

        plugins: [
          generatePackageJson({
            inputFolder: "publish",
            outputFolder: "./build",
            baseContents: json,
          }),
        ],
        output: {
          globals: {
            vue: "Vue",
            "survey-core": "Survey",
            "survey-creator-core": "SurveyCreatorCore",
            "survey-vue3-ui": "SurveyVue",
          },
        },
      },
    },
    resolve: {
      preserveSymlinks: true,
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "survey-core": fileURLToPath(
          new URL("./node_modules/survey-core", import.meta.url)
        ),
      },
    },
  };
});
