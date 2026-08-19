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
  description: "Embeddable SurveyJS drag-and-drop form builder for JSON-based forms in plain JavaScript applications (without frontend frameworks). Create dynamic surveys, polls, quizzes, and other forms, configure conditional logic and validation, and customize the editor UI.",
  author: "DevSoft Baltic OU <info@devsoftbaltic.com>",
  homepage: "https://surveyjs.io/",
  license: "SEE LICENSE IN LICENSE",
  licenseUrl: "https://surveyjs.io/licensing",
  keywords: [
    "vanilla",
    "vanilla-js",
    "jquery",
    "preact",
    "js-form-builder",
    "js-form-editor",
    "survey",
    "form",
    "surveyjs",
    "survey-creator",
    "survey-builder",
    "survey-editor",
    "form-builder",
    "form-editor",
    "json-form-builder",
    "json-form-editor",
    "json-forms",
    "drag-and-drop-form-builder",
    "visual-form-builder",
    "no-code-form-builder",
    "dynamic-form-builder",
    "conditional-logic",
    "embeddable",
    "questionnaire",
    "data-collection",
    "bootstrap",
    "bootswatch",
    "mui",
    "material-ui",
    "shadcn",
    "shadcn-ui",
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
      "import": "./fesm/ui-preset-editor.mjs",
      "require": "./ui-preset-editor.js"
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
  fs.copyFileSync("./LICENSE", resolve(buildPath, "LICENSE"));
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
      noEmitOnError: !options.watch,
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
      ],
      aliases: {
        "react": "survey-js-ui",
        "react-dom": "survey-js-ui",
        "survey-react-ui": "survey-js-ui",
      },
      noEmitOnError: !options.watch,
    })
  ];
};
