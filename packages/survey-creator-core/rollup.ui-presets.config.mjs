import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createEsmConfig, createUmdConfig } from "./rollup.helpers.mjs";
import process from "process";
import pkg from "./package.json" assert { type: "json" };

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = resolve(__dirname, "build");

export default () => {
  return [
    createEsmConfig({
      input: { "index": resolve(__dirname, "./src/ui-presets/index.ts") },
      dir: resolve(buildPath, "fesm/ui-presets"),
      external: [],
      tsconfig: resolve(__dirname, "tsconfig.ui-presets.json"),
      version: pkg.version
    }),
    ...[
      { filename: "basic", path: resolve(__dirname, "./src/ui-presets/basic.ts"), globalName: "SurveyCreatorUIPreset.Basic" },
      { filename: "advanced", path: resolve(__dirname, "./src/ui-presets/advanced.ts"), globalName: "SurveyCreatorUIPreset.Advanced" },
      { filename: "expert", path: resolve(__dirname, "./src/ui-presets/expert.ts"), globalName: "SurveyCreatorUIPreset.Expert" },
      { filename: "index", path: resolve(__dirname, "./src/ui-presets/index.ts"), globalName: "SurveyCreatorUIPreset" },
    ].map(({ filename, path, globalName }) => createUmdConfig({
      input: { [filename]: path },
      tsconfig: resolve(__dirname, "tsconfig.ui-presets.json"),
      external: ["survey-creator-core"],
      dir: resolve(buildPath, "ui-presets"),
      globalName: globalName,
      globals: { "survey-creator-core": "SurveyCreatorCore" },
      emitMinified: process.env.emitMinified === "true",
      version: pkg.version,
    }))
  ];
};