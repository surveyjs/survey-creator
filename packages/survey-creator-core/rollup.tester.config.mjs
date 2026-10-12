import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createEsmConfig, createUmdConfig } from "../../rollup.helpers.mjs";
import process from "process";
import pkg from "./package.json" with { type: "json" };

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = resolve(__dirname, "build");

// The Tests widget, bundled apart from everything else in this package.
//
// It is shaped like rollup.ui-preset-editor.config.mjs with one deliberate difference, and the
// difference is the whole point: `survey-creator-core` is NOT an external here, because it is not a
// dependency. The preset editor imports the creator and must share its class identities; this widget
// imports no creator code at all (promts/creator-tester-00-overview.md section 3), so naming it
// external would only paper over the mistake of importing it. tests-tester/bundle.test.ts reads the
// built file and says so out loud.
//
// `survey-core/tester` IS external, next to `survey-core` itself. It is the engine this widget is the
// UI for, it ships in the survey-core package as its own UMD (global `SurveyTester`, requiring
// `survey-core`), and inlining it would give a host two SurveyTestCommandFactory registries and two
// copies of the runner - a correctness bug before it is a size one.
const external = ["survey-core", "survey-core/tester"];
const globals = { "survey-core": "Survey", "survey-core/tester": "SurveyTester" };

// jsonc-parser is bundled: it is small, dependency-free and MIT, and bundling it is what lets the
// widget promise that a hand-formatted, commented suite survives being recorded into without a
// consumer installing anything new (overview section 3). Its own header comment is a rule of dashes
// rather than a "!" or an @license, so terser drops it from the minified output - the notice therefore
// rides in this bundle's banner, which is emitted as an ignored comment and survives both outputs.
const notices = [
  "This bundle includes jsonc-parser (https://github.com/microsoft/node-jsonc-parser)",
  "Copyright (c) Microsoft Corporation. All rights reserved.",
  "Licensed under the MIT License.",
];

export default () => {
  return [
    createEsmConfig({
      input: { "tester": resolve(__dirname, "./src/tester/index.ts") },
      dir: resolve(buildPath, "fesm"),
      external: external,
      tsconfig: resolve(__dirname, "tsconfig.tester.json"),
      version: pkg.version,
      notices: notices,
      useEsbuild: true
    }),
    createUmdConfig({
      input: { "tester": resolve(__dirname, "./src/tester/index.ts") },
      tsconfig: resolve(__dirname, "tsconfig.tester.json"),
      external: external,
      dir: resolve(buildPath),
      declarationDir: resolve(buildPath, "tester"),
      globals: globals,
      globalName: "SurveyCreatorTester",
      // The theme of src/tester/theme comes out beside the bundle as build/tester.css, the way
      // collaboration.css comes out beside collaboration.js. It is the whole of the widget's styling:
      // prompt 07 adds none.
      emitCss: true,
      emitMinified: process.env.emitMinified === "true",
      version: pkg.version,
      notices: notices,
    })
  ];
};
