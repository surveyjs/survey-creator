import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createEsmConfig, createUmdConfig } from "./rollup.helpers.mjs";
import process from "process";
import pkg from "./package.json" assert { type: "json" };

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = resolve(__dirname, "build");

function getEntries() {
  return [
    { filename: "sc2020", path: resolve(__dirname, "./src/themes/sc2020.ts"), globalName: "SurveyCreatorTheme.SC2020", exports: "default" },
    { filename: "test", path: resolve(__dirname, "./src/themes/test.ts"), globalName: "SurveyCreatorTheme.Test", exports: "default" },
    { filename: "default-light", path: resolve(__dirname, "./src/themes/default-light-export.ts"), globalName: "SurveyCreatorTheme.DefaultLight", exports: "default" },
    { filename: "default-dark", path: resolve(__dirname, "./src/themes/default-dark.ts"), globalName: "SurveyCreatorTheme.DefaultDark", exports: "default" },
    { filename: "default-contrast", path: resolve(__dirname, "./src/themes/default-contrast.ts"), globalName: "SurveyCreatorTheme.DefaultContrast", exports: "default" },
    { filename: "index", path: resolve(__dirname, "./src/themes/index.ts"), globalName: "SurveyCreatorTheme", exports: "named" },
  ];
}

export default () => {
  return [
    createEsmConfig({
      input: { "themes/index": resolve(__dirname, "./src/themes/index.ts") },
      dir: resolve(buildPath, "fesm"),
      external: [],
      tsconfig: resolve(__dirname, "tsconfig.themes.json"),
      version: pkg.version
    }),
    ...getEntries().map(({ filename, path, globalName, exports }) => createUmdConfig({
      input: { [filename]: path },
      tsconfig: resolve(__dirname, "tsconfig.themes.json"),
      external: ["survey-creator-core"],
      dir: resolve(buildPath, "themes"),
      globalName: globalName,
      exports,
      globals: { "survey-creator-core": "SurveyCreatorCore" },
      emitMinified: process.env.emitMinified === "true",
      version: pkg.version,
    }))
  ];
};