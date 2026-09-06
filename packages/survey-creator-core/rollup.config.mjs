import fg from "fast-glob";
import fs from "fs";
import { resolve, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

import svgLoader from "svg-inline-loader";

import process from "process";
import pkg from "./package.json" with { type: "json" };
import { createEsmConfig, createUmdConfig } from "../../rollup.helpers.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = resolve(__dirname, "build");

const buildPlatformJson = {
  name: pkg.name,
  version: pkg.version,
  description: "Framework-independent core of SurveyJS Survey Creator, an embeddable drag-and-drop form builder. Holds the editor model, design surface, toolbox, property grid, and logic/theme editors. Pair it with survey-creator-react, -angular, -vue, or -js to render.",
  author: "DevSoft Baltic OU <info@devsoftbaltic.com>",
  homepage: "https://surveyjs.io/",
  license: "SEE LICENSE IN LICENSE",
  licenseUrl: "https://surveyjs.io/licensing",
  keywords: [
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
    "./images/*": "./images/*",
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
    "./collaboration": {
      "types": "./collaboration/index.d.ts",
      "import": "./fesm/collaboration.mjs",
      "require": "./collaboration.js"
    },
    "./ui-preset-editor": {
      "types": "./ui-preset-editor/index.d.ts",
      "import": "./fesm/ui-preset-editor.mjs",
      "require": "./ui-preset-editor.js"
    },
    "./ui-preset-editor/i18n": {
      "import": "./fesm/ui-preset-editor/i18n/index.mjs",
      "require": "./ui-preset-editor/i18n/index.js"
    },
    "./ui-preset-editor/i18n/*": {
      "import": "./fesm/ui-preset-editor/i18n/*.mjs",
      "require": "./ui-preset-editor/i18n/*.js"
    },
    // The Tests widget. Its stylesheet is build/tester.css and is reached through the "./*.css" entry
    // above, the way collaboration.css is.
    "./tester": {
      "types": "./tester/index.d.ts",
      "import": "./fesm/tester.mjs",
      "require": "./tester.js"
    },
  },
  devDependencies: {},
};

// The stylesheets reference these as url(images/...) instead of inlining them, so the
// files have to sit next to the emitted CSS. Copied unconditionally: a dev build needs
// them just as much as a release one. Only the raster images are copied from src/images,
// the svg icons there go through svg-inline-loader instead. No fonts are copied: the
// @font-face rules and the woff2 files they point at come from survey-core, whose
// stylesheet always accompanies the creator's own.
function copyStyleAssets() {
  fs.mkdirSync(resolve(buildPath, "images"), { recursive: true });
  for (const name of fs.readdirSync(resolve(__dirname, "src/images"))) {
    if (!name.endsWith(".png")) continue;
    fs.copyFileSync(resolve(__dirname, "src/images", name), resolve(buildPath, "images", name));
  }
}
copyStyleAssets();

if (process.env.emitNonSourceFiles === "true") {
  fs.mkdirSync(buildPath, { recursive: true });
  fs.copyFileSync("./README.md", resolve(buildPath, "README.md"));
  fs.copyFileSync("./LICENSE", resolve(buildPath, "LICENSE"));
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
      emitCss: resolve(buildPath, "survey-creator-core.css"),
      // survey-creator-core.fontless.css was the same stylesheet minus the @font-face
      // rules. The creator declares none any more - they come from survey-core - so the
      // two files are identical and the name is kept as an alias for consumers that
      // already reference it.
      onCloseBundle: () => {
        const suffixes = process.env.emitMinified === "true" ? [".css", ".min.css"] : [".css"];
        for (const suffix of suffixes) {
          const emitted = resolve(buildPath, `survey-creator-core${suffix}`);
          if (fs.existsSync(emitted)) {
            fs.copyFileSync(emitted, resolve(buildPath, `survey-creator-core.fontless${suffix}`));
          }
        }
      },
      noEmitOnError: !options.watch
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
      emitCss: false,
      useEsbuild: true,
      noEmitOnError: !options.watch
    })
  ];
};
