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
  description: "A white-label drag-and-drop form builder for HTML, CSS, and JavaScript apps. It generates JSON schemas for rendering dynamic forms with SurveyJS Form Library. Design complex, interactive forms and surveys without writing code.",
  author: "DevSoft Baltic OU <info@devsoftbaltic.com>",
  homepage: "https://surveyjs.io/",
  license: "SEE LICENSE IN LICENSE",
  licenseUrl: "https://surveyjs.io/licensing",
  keywords: [
    "vanilla",
    "vanilla-js",
    "survey",
    "form",
    "surveyjs",
    "survey-library",
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
    "schema-form",
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
  main: pkg.name + ".js",
  module: "fesm/survey-creator-js.mjs",
  repository: {
    type: "git",
    url: "https://github.com/surveyjs/survey-creator.git"
  },
  engines: {
    node: ">=0.10.0"
  },
  typings: "./typings/survey-creator-js/entries/index.d.ts",
  peerDependencies: {
    "ace-builds": "^1.4.12",
    "survey-core": pkg.version,
    "survey-js-ui": pkg.version,
    "survey-creator-core": pkg.version,
    "@types/react-dom": "*",
    "@types/react": "*",
  },
  exports: {
    ".": {
      "types": "./typings/survey-creator-js/entries/index.d.ts",
      "import": "./fesm/survey-creator-js.mjs",
      "require": "./survey-creator-js.js"
    },
    "./ui-preset-editor": {
      "types": "./typings/survey-creator-js/entries/presets.d.ts",
      "import": "./fesm/ui-preset-editor/index.mjs",
      "require": "./ui-preset-editor/index.js"
    }
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
  fs.copyFileSync("./index.html", resolve(buildPath, "index.html"));
  fs.writeFileSync(
    resolve(buildPath, "package.json"),
    JSON.stringify(buildPlatformJson, null, 2),
    "utf8"
  );
}

export default async (options) => {

  return [
    createUmdConfig({
      input: { "survey-creator-js": resolve("./entries/index.ts") },
      dir: buildPath,
      tsconfig: resolve(__dirname, "./tsconfig.json"),
      declarationDir: resolve(buildPath, "./typings"),
      external: [
        "survey-core",
        "survey-creator-core",
        "survey-js-ui",
        "survey-react-ui",
        "react",
        "react-dom",
      ],
      globals: {
        "survey-core": "Survey",
        "survey-creator-core": "SurveyCreatorCore",
        "survey-js-ui": "SurveyUI",
        "survey-react-ui": "SurveyUI",
        "react": "SurveyUI",
        "react-dom": "SurveyUI",
      },
      globalName: "SurveyCreator",
      emitMinified: process.env.emitMinified === "true",
      version: pkg.version,
    }),
    createEsmConfig({
      version: pkg.version,
      input: { "survey-creator-js": resolve("./entries/index.ts") },
      dir: resolve(buildPath, "fesm"),
      tsconfig: resolve(__dirname, "./tsconfig.json"),
      external: [
        "survey-core",
        "survey-creator-core",
        "survey-js-ui",
        "survey-react-ui",
        "react",
        "react-dom",
      ]
    })
  ];
};