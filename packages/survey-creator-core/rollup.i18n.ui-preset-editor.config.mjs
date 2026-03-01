import { resolve, extname, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { readdirSync } from "fs";
import { createEsmConfig, createUmdConfig } from "./rollup.helpers.mjs";
import process from "process";
import pkg from "./package.json" assert { type: "json" };

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = resolve(__dirname, "build");

function getEntries() {

  const inputs = {};

  readdirSync(resolve(__dirname, "./src/ui-preset-editor/localization")).forEach(file => {
    var extension = extname(file);
    if (extension.toLowerCase() === ".ts") {
      inputs[`ui-preset-editor/i18n/${basename(file, extension)}`] = resolve(__dirname, `./src/ui-preset-editor/localization/${file}`);
    }
  });

  inputs["ui-preset-editor/i18n/index"] = resolve(__dirname, "./src/ui-preset-editor/i18n.ts");

  return inputs;
}

export default () => {

  const inputs = getEntries();

  const config = [
    createEsmConfig({
      input: inputs,
      dir: resolve(buildPath, "fesm"),
      external: ["survey-creator-core"],
      tsconfig: resolve(__dirname, "tsconfig.i18n.json"),
      version: pkg.version,
      useEsbuild: true
    }),
    ...Object.entries(inputs).map(([name, path]) => createUmdConfig({
      input: { [name]: path },
      tsconfig: resolve(__dirname, "tsconfig.i18n.json"),
      external: ["survey-creator-core"],
      dir: resolve(buildPath),
      emitMinified: process.env.emitMinified === "true",
      globalName: name,
      globals: { "survey-creator-core": "SurveyCreatorCore" },
      version: pkg.version,
      useEsbuild: true
    }))
  ];

  return config;
};