import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createEsmConfig, createUmdConfig } from "../../rollup.helpers.mjs";
import process from "process";
import pkg from "./package.json" with { type: "json" };
import { Declaration } from "postcss";

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = resolve(__dirname, "build");

export default () => {
  return [
    createUmdConfig({
      input: { "ui-preset-editor": resolve(__dirname, "./entries/presets.ts") },
      dir: resolve(buildPath),
      declarationDir: resolve(buildPath, "typings"),
      tsconfig: resolve(__dirname, "./tsconfig.presets.json"),
      external: [
        "react",
        "react-dom",
        "survey-core",
        "survey-js-ui",
        "survey-react-ui",
        "survey-creator-core",
        "survey-creator-core-presets",
        "survey-creator-js",
      ],
      globals: {
        "react": "SurveyUI",
        "react-dom": "SurveyUI",
        "survey-core": "Survey",
        "survey-js-ui": "SurveyUI",
        "survey-react-ui": "SurveyUI",
        "survey-creator-core": "SurveyCreatorCore",
        "survey-creator-core-presets": "SurveyCreatorUIPresetEditorCore",
        "survey-creator-js": "SurveyCreator",
      },
      globalName: "SurveyCreatorUIPresetEditorJS",
      emitMinified: process.env.emitMinified === "true",
      version: pkg.version,
    }),
    createEsmConfig({
      input: { "ui-preset-editor": resolve(__dirname, "./entries/presets.ts") },
      dir: resolve(buildPath, "fesm"),
      tsconfig: resolve(__dirname, "./tsconfig.presets.json"),
      external: [
        "react",
        "react-dom",
        "survey-core",
        "survey-creator-core",
        "survey-react-ui"
      ],
      paths: {
        "react": "survey-js-ui",
        "react-dom": "survey-js-ui",
        "survey-react-ui": "survey-js-ui",
      },
      version: pkg.version,
    }),
  ];
};