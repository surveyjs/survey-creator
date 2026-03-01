import fg from "fast-glob";
import fs from "fs";
import { resolve, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

import svgLoader from "svg-inline-loader";

import process from "process";
import pkg from "./package.json" assert { type: "json" };
import { createEsmConfig, createUmdConfig, createCssConfig } from "./rollup.helpers.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = resolve(__dirname, "build");

const buildPlatformJson = {
  name: pkg.name,
  version: pkg.version,
  description: "A framework-independent core package of the SurveyJS Survey Creator component. With Survey Creator, you can visually design complex, interactive JSON forms and surveys in a drag-and-drop interface.",
  homepage: "https://surveyjs.io/",
  license: "SEE LICENSE IN LICENSE",
  licenseUrl: "https://surveyjs.io/licensing",
  keywords: [
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
  module: "fesm/" + pkg.name + ".mjs",
  repository: {
    type: "git",
    url: "https://github.com/surveyjs/survey-creator.git",
  },
  engines: {
    node: ">=0.10.0",
  },
  typings: "./typings/entries/index.d.ts",
  peerDependencies: {
    "ace-builds": "^1.4.12",
    "survey-core": pkg.version
  },
  peerDependenciesMeta: {
    "ace-builds": {
      "optional": true
    },
  },
  "exports": {
    ".": {
      "types": "./typings/entries/index.d.ts",
      "import": "./fesm/survey-creator-core.mjs",
      "require": "./survey-creator-core.js"
    },
    "./*.css": "./*.css",
    "./survey-creator-core.i18n": {
      "import": "./fesm/survey-creator-core.i18n.mjs",
      "require": "./survey-creator-core.i18n.js"
    },
    "./i18n": {
      "import": "./fesm/i18n/index.mjs",
      "require": "./i18n/index.js"
    },
    "./i18n/*": {
      "import": "./fesm/i18n/*.mjs",
      "require": "./i18n/*.js"
    },
    "./themes": {
      "types": "./themes/index.d.ts",
      "import": "./fesm/themes/index.mjs",
      "require": "./themes/index.js"
    },
    "./themes/index": {
      "types": "./themes/index.d.ts",
      "import": "./fesm/themes/index.mjs",
      "require": "./themes/index.js"
    },
    "./themes/*": {
      "types": "./themes/*.d.ts",
      "default": "./themes/*.js",
    },
    "./ui-presets": {
      "types": "./ui-presets/index.d.ts",
      "import": "./fesm/ui-presets/index.mjs",
      "require": "./ui-presets/index.js"
    },
    "./ui-presets/index": {
      "types": "./ui-presets/index.d.ts",
      "import": "./fesm/ui-presets/index.mjs",
      "require": "./ui-presets/index.js"
    },
    "./ui-presets/*": {
      "types": "./ui-presets/*.d.ts",
      "default": "./ui-presets/*.js",
    },
    "./ui-preset-editor": {
      "types": "./ui-preset-editor/index.d.ts",
      "import": "./fesm/ui-preset-editor/index.mjs",
      "require": "./ui-preset-editor/index.js"
    },
    "./ui-preset-editor/i18n": {
      "import": "./fesm/ui-preset-editor/i18n/index.mjs",
      "require": "./ui-preset-editor/i18n/index.js"
    },
    "./ui-preset-editor/i18n/*": {
      "import": "./fesm/ui-preset-editor/i18n/*.mjs",
      "require": "./ui-preset-editor/i18n/*.js"
    },
  },
  devDependencies: {},
};

if (process.env.emitNonSourceFiles === "true") {
  fs.copyFileSync("./README.md", resolve(buildPath, "README.md"));
  fs.writeFileSync(
    resolve(buildPath, "package.json"),
    JSON.stringify(buildPlatformJson, null, 2),
    "utf8"
  );
}

async function createVirtualModule(path) {
  const result = {};
  for (const svgIconPath of await fg.glob(path)) {
    result[basename(svgIconPath).replace(/\.svg$/, "").toLocaleLowerCase()] = svgLoader.getExtractedSVG(fs.readFileSync(svgIconPath).toString());
  }
  return `export default ${JSON.stringify(result, undefined, "\t")}`;
}

const imagesV1 = await createVirtualModule(fg.convertPathToPattern(resolve(__dirname, "./src/images-v1")) + "/*.svg");
const imagesV2 = await createVirtualModule(fg.convertPathToPattern(resolve(__dirname, "./src/images-v2")) + "/*.svg");

export default async (options) => {

  return [
    createUmdConfig({
      version: pkg.version,
      input: {
        "survey-creator-core": resolve("./src/entries/index.ts")
      },
      dir: buildPath,
      tsconfig: resolve(__dirname, "./tsconfig.json"),
      external: ["survey-core"],
      declarationDir: resolve(buildPath, "./typings"),
      emitMinified: process.env.emitMinified === "true",
      globalName: "SurveyCreatorCore",
      globals: { "survey-core": "Survey" },
      virtualModules: {
        "iconsV1": imagesV1,
        "iconsV2": imagesV2
      },
      emitCss: resolve(buildPath, "survey-creator-core.fontless.css")
    }),
    createCssConfig({
      input: {
        "fonts.fontless": resolve(__dirname, "./src/entries/fonts.scss")
      },
      dir: buildPath,
      emitMinified: process.env.emitMinified === "true",
      version: pkg.version,
      onCloseBundle: async() => {
        for (const path of [resolve(buildPath, "survey-creator-core.css"), resolve(buildPath, "survey-creator-core.min.css")]) {
          if (fs.existsSync(path)) {
            fs.unlinkSync(path);
          }
        }
        for (const name of ["fonts.fontless", "survey-creator-core.fontless"]) {
          fs.appendFileSync(
            resolve(buildPath, "survey-creator-core.css"),
            fs.readFileSync(resolve(buildPath, `${name}.css`))
          );
          if (process.env.emitMinified === "true") {
            fs.appendFileSync(
              resolve(buildPath, "survey-creator-core.min.css"),
              fs.readFileSync(resolve(buildPath, `${name}.min.css`))
            );
          }
        }
      }
    }),
    createEsmConfig({
      version: pkg.version,
      input: { "survey-creator-core": resolve("./src/entries/index.ts") },
      dir: resolve(buildPath, "fesm"),
      tsconfig: resolve(__dirname, "./tsconfig.json"),
      external: ["survey-core"],
      virtualModules: {
        "iconsV1": imagesV1,
        "iconsV2": imagesV2
      },
      emitCss: false
    })
  ];
};