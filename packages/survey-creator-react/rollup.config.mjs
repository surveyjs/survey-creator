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
  description: "React component that renders SurveyJS Survey Creator: a white-label drag-and-drop form builder producing JSON schemas with validation, conditional logic, localization, and theming.",
  author: "DevSoft Baltic OU <info@devsoftbaltic.com>",
  homepage: "https://surveyjs.io/",
  license: "SEE LICENSE IN LICENSE",
  licenseUrl: "https://surveyjs.io/licensing",
  keywords: [
    "react",
    "react-component",
    "react-form-builder",
    "react-schema-form",
    "survey",
    "form",
    "surveyjs",
    "survey-creator",
    "survey-builder",
    "form-builder",
    "form-library",
    "drag-and-drop-form-builder",
    "no-code-form-builder",
    "dynamic-form-builder",
    "form-designer",
    "survey-designer",
    "form-editor",
    "wysiwyg",
    "low-code",
    "no-code",
    "form-validation",
    "conditional-logic",
    "questionnaire",
    "quiz",
    "poll",
    "data-collection",
    "localization",
    "theming",
    "bootstrap",
    "bootswatch",
    "mui",
    "material-ui",
    "shadcn",
    "shadcn-ui"
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
      "import": "./fesm/ui-preset-editor.mjs",
      "require": "./ui-preset-editor.js"
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
      noEmitOnError: !options.watch,
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
      ],
      noEmitOnError: !options.watch,
    })
  ];
};