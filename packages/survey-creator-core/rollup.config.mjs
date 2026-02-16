import fg from "fast-glob";
import fs from "fs";
import { resolve, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import bannerPlugin from "rollup-plugin-license";
import svgLoader from "svg-inline-loader";

import process from "process";
import pkg from "./package.json" assert { type: "json" };
import { createEsmConfig, createUmdConfig, createCssConfig, minifyCSS } from "./rollup.helpers.mjs";
import { plugin } from "postcss";

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = resolve(__dirname, "build");

const input = { "survey-creator-core": resolve(__dirname, "./src/entries/index.ts") };

const banner = [
  "SurveyJS Creator v" + pkg.version,
  "(c) 2015-" + new Date().getFullYear() + " Devsoft Baltic OÜ - http://surveyjs.io/", // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
  "Github: https://github.com/surveyjs/survey-creator",
  "License: https://surveyjs.io/Licenses#SurveyCreator",
].join("\n");

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

export default async (options) => {

  // options = options ?? {};

  // if (!options.tsconfig) {
  //   options.tsconfig = resolve(__dirname, "./tsconfig.fesm.json");
  // }

  // if (!options.dir) {
  //   options.dir = resolve(__dirname, "./build/fesm");
  // }

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
        "iconsV1": await createVirtualModule(fg.convertPathToPattern(resolve(__dirname, "./src/images-v1")) + "/*.svg"),
        "iconsV2": await createVirtualModule(fg.convertPathToPattern(resolve(__dirname, "./src/images-v2")) + "/*.svg")
      },
      emitCss: "survey-creator-core.fontless.css"
    }),
    createCssConfig({
      input: {
        "fonts.fontless": resolve(__dirname, "./src/entries/fonts.scss")
      },
      dir: buildPath,
      emitMinified: process.env.emitMinified === "true",
      version: pkg.version,
      onCloseBundle: async() => {
        if (fs.existsSync(resolve(buildPath, "survey-creator-core.css"))) {
          fs.unlinkSync(resolve(buildPath, "survey-creator-core.css"));
        }
        if (fs.existsSync(resolve(buildPath, "survey-creator-core.min.css"))) {
          fs.unlinkSync(resolve(buildPath, "survey-creator-core.min.css"));
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
    // {
    //   input,
    //   context: "this",
    //   external: ["survey-core"],
    //   plugins: [
    //     {
    //       name: "icons",
    //       resolveId: (id) => {
    //         if (Object.keys(iconsMap).includes(id)) {
    //           return id;
    //         }
    //       },
    //       load: async (id) => {
    //         if (Object.keys(iconsMap).includes(id)) {
    //           const icons = {};
    //           for (const iconPath of await fg.glob(iconsMap[id])) {
    //             icons[basename(iconPath).replace(/\.svg$/, "").toLocaleLowerCase()] = svgLoader.getExtractedSVG(readFile(iconPath).toString());
    //           }
    //           return `export default ${JSON.stringify(icons, undefined, "\t")}`;
    //         }
    //       }
    //     },
    //     {
    //       name: "remove-scss-imports",
    //       load: (id) => {
    //         if (id.match(/\.scss$/)) return "";
    //       }
    //     },
    //     //force take correct .js file for papaparse dependency
    //     nodeResolve({ browser: true }),
    //     commonjs(),
    //     typescript({
    //       inlineSources: true,
    //       sourceMap: true,
    //       tsconfig: options.tsconfig,
    //       compilerOptions: {
    //         declaration: false,
    //         declarationDir: null
    //       }
    //     }),
    //     replace({
    //       preventAssignment: false,
    //       values: {
    //         "process.env.RELEASE_DATE": JSON.stringify(new Date().toISOString().slice(0, 10)),
    //         "process.env.VERSION": JSON.stringify(pkg.version),
    //       }
    //     }),
    //     bannerPlugin({
    //       banner: {
    //         content: banner,
    //         commentStyle: "ignored",
    //       }
    //     })
    //   ],
    //   output: [
    //     {
    //       dir: options.dir,
    //       entryFileNames: "[name].mjs",
    //       format: "esm",
    //       exports: "named",
    //       sourcemap: true,
    //     },
    //   ],
    // }
  ];
};