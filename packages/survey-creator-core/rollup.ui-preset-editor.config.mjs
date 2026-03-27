import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createEsmConfig, createUmdConfig } from "../../rollup.helpers.mjs";
import process from "process";
import pkg from "./package.json" with { type: "json" };

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = resolve(__dirname, "build");

export default () => {
  return [
    createEsmConfig({
      input: { "ui-preset-editor": resolve(__dirname, "./src/ui-preset-editor/index.ts") },
      dir: resolve(buildPath, "fesm"),
      external: ["survey-core", "survey-creator-core"],
      tsconfig: resolve(__dirname, "tsconfig.ui-preset-editor.json"),
      version: pkg.version
    }),
    createUmdConfig({
      input: { "ui-preset-editor": resolve(__dirname, "./src/ui-preset-editor/index.ts") },
      tsconfig: resolve(__dirname, "tsconfig.ui-preset-editor.json"),
      external: ["survey-core", "survey-creator-core"],
      dir: resolve(buildPath),
      declarationDir: resolve(buildPath),
      globals: { "survey-core": "Survey", "survey-creator-core": "SurveyCreatorCore" },
      globalName: "SurveyCreatorUIPresetEditorCore",
      emitCss: true,
      emitMinified: process.env.emitMinified === "true",
      version: pkg.version,
    })
  ];
};