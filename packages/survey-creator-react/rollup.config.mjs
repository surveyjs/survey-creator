import fs from "fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import process from "process";
import pkg from "./package.json" with { type: "json" };
import { createEsmConfig, createUmdConfig } from "../../rollup.helpers.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = resolve(__dirname, "build");

const buildPlatformJson = {
  name: pkg.name,
  version: pkg.version,
  description: "A white-label drag-and-drop form builder for React that lets you design complex, interactive forms and surveys without writing code. It generates JSON schemas used by the SurveyJS Form Library to render dynamic forms in your React app.",
  author: "DevSoft Baltic OU <info@devsoftbaltic.com>",
  homepage: "https://surveyjs.io/",
  license: "SEE LICENSE IN LICENSE",
  licenseUrl: "https://surveyjs.io/licensing",
  keywords: [
    "react",
    "survey",
    "form",
    "surveyjs",
    "survey-library",
    "react-component",
    "form-builder",
    "dynamic-form-builder",
    "drag-and-drop-form-builder",
    "form-library",
    "form-management",
    "questionnaire",
    "data-collection",
    "ui-component",
    "json",
    "json-schema",
    "react-schema-form",
    "survey-creator",
    "survey-builder",
    "client-side",
    "frontend",
    "javascript",
    "typescript"
  ],
  files: [
    "**/*"
  ],
  module: "fesm/survey-creator-react.mjs",
  main: pkg.name + ".js",
  repository: {
    type: "git",
    url: "https://github.com/surveyjs/survey-creator.git"
  },
  engines: {
    node: ">=0.10.0"
  },
  typings: "./typings/entries/index.d.ts",
  exports: {
    ".": {
      "types": "./typings/entries/index.d.ts",
      "import": "./fesm/survey-creator-react.mjs",
      "require": "./survey-creator-react.js"
    },
    "./ui-preset-editor": {
      "types": "./typings/entries/presets.d.ts",
      "import": "./fesm/ui-preset-editor/index.mjs",
      "require": "./ui-preset-editor/index.js"
    }
  },
  peerDependencies: {
    "ace-builds": "^1.4.12",
    "react": "^16.5.0 || ^17.0.1 || ^18.1.0 || ^19.0.0",
    "react-dom": "^16.5.0 || ^17.0.1 || ^18.1.0 || ^19.0.0",
    "survey-core": pkg.version,
    "survey-react-ui": pkg.version,
    "survey-creator-core": pkg.version
  },
  peerDependenciesMeta: {
    "ace-builds": {
      "optional": true
    },
  },
  devDependencies: {}
};

if (process.env.emitNonSourceFiles === "true") {
  fs.mkdirSync(buildPath, { recursive: true });
  fs.copyFileSync("./README.md", resolve(buildPath, "README.md"));
  fs.writeFileSync(
    resolve(buildPath, "package.json"),
    JSON.stringify(buildPlatformJson, null, 2),
    "utf8"
  );
}

export default async (options) => {

  return [
    createUmdConfig({
      input: { "survey-creator-react": resolve("./src/entries/index.ts") },
      dir: buildPath,
      tsconfig: resolve(__dirname, "./tsconfig.json"),
      declarationDir: resolve(buildPath, "./typings"),
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
        "survey-react-ui": "SurveyReact",
      },
      globalName: "SurveyCreator",
      emitMinified: process.env.emitMinified === "true",
      version: pkg.version,
    }),
    createEsmConfig({
      version: pkg.version,
      input: { "survey-creator-react": resolve("./src/entries/index.ts") },
      dir: resolve(buildPath, "fesm"),
      tsconfig: resolve(__dirname, "./tsconfig.json"),
      external: [
        "react",
        "react-dom",
        "survey-core",
        "survey-creator-core",
        "survey-react-ui"
      ]
    })
  ];
};