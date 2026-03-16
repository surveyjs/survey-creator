import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createEsmConfig, createUmdConfig } from "../../rollup.helpers.mjs";
import process from "process";
import pkg from "./package.json" with { type: "json" };

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = resolve(__dirname, "build");

export default () => {
  return [
    createUmdConfig({
      input: { "ui-preset-editor/index": resolve(__dirname, "./src/entries/presets.ts") },
      dir: resolve(buildPath),
      tsconfig: resolve(__dirname, "./tsconfig.presets.json"),
      external: [
        "react",
        "react-dom",
        "survey-core",
        "survey-creator-core",
        "survey-react-ui"
      ],
      globals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "survey-core": "Survey",
        "survey-creator-core": "SurveyCreatorCore",
        "survey-react-ui": "SurveyReact"
      },
      globalName: "SurveyCreatorUIPresetEditorReact",
      emitMinified: process.env.emitMinified === "true",
      version: pkg.version,
    }),
    createEsmConfig({
      input: { "index": resolve(__dirname, "./src/entries/presets.ts") },
      dir: resolve(buildPath, "fesm/ui-preset-editor"),
      tsconfig: resolve(__dirname, "./tsconfig.presets.json"),
      external: [
        "react",
        "react-dom",
        "survey-core",
        "survey-creator-core",
        "survey-react-ui"
      ],
      version: pkg.version,
    }),
  ];
};