import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import process from "process";
import pkg from "./package.json" with { type: "json" };
import { createEsmConfig, createUmdConfig } from "../../rollup.helpers.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildPath = resolve(__dirname, "build");

// The React rendering of the Tests widget, bundled apart from the creator.
//
// It is rollup.config.mjs cloned, with two deliberate differences and no others.
//
// The externals grow by the two subpath entries this bundle draws: `survey-core/tester` is the engine
// and `survey-creator-core/tester` is the widget's model layer, and both ship as their own UMD under
// their own global (survey-core's rollup.tester.config.mjs and survey-creator-core's). Rollup matches
// an `external` string array exactly, so a subpath left out of it is resolved and inlined - which for
// either of these would give a host two copies of a registry and a model layer, and that is a
// correctness bug before it is a size one (promts/creator-tester-notes.md entry 28 is the same trap
// one package up).
//
// The globals are read off those two configs rather than invented: `SurveyTester` is what survey-core
// registers its tester entry under, and `SurveyCreatorTester` is what survey-creator-core registers
// the widget under.
//
// Which settles this bundle's own UMD name, and prompt 07 section 1 asked for the wrong one. A UMD
// whose globalName equals one of its dependency globals emits
// `factory(global.SurveyCreatorTester = {}, ..., global.SurveyCreatorTester)`: the assignment runs
// first, so the module hands itself its own empty exports object in place of the model layer and
// every model in it is undefined at load. So the rendering is `SurveyCreatorTesterReact`, which is
// also the shape the rest of the family already has - `Survey`/`SurveyReact`,
// `SurveyCreatorCore`/`SurveyCreator`. See promts/creator-tester-notes.md.
//
// The css is NOT emitted here. The whole of the widget's styling is survey-creator-core/tester.css,
// emitted beside the model bundle; this package adds none.
const external = [
  "react",
  "react-dom",
  "survey-core",
  "survey-core/tester",
  "survey-react-ui",
  "survey-creator-core",
  "survey-creator-core/tester",
];

const globals = {
  "react": "React",
  "react-dom": "ReactDOM",
  "survey-core": "Survey",
  "survey-core/tester": "SurveyTester",
  "survey-react-ui": "SurveyReact",
  "survey-creator-core": "SurveyCreatorCore",
  "survey-creator-core/tester": "SurveyCreatorTester",
};

export default async (options) => {
  return [
    createUmdConfig({
      input: { "tester": resolve(__dirname, "./src/entries/tester.ts") },
      dir: buildPath,
      tsconfig: resolve(__dirname, "./tsconfig.tester.json"),
      declarationDir: resolve(buildPath, "./typings"),
      external: external,
      globals: globals,
      globalName: "SurveyCreatorTesterReact",
      emitMinified: process.env.emitMinified === "true",
      version: pkg.version,
      noEmitOnError: !options.watch,
    }),
    createEsmConfig({
      version: pkg.version,
      input: { "tester": resolve(__dirname, "./src/entries/tester.ts") },
      dir: resolve(buildPath, "fesm"),
      tsconfig: resolve(__dirname, "./tsconfig.tester.json"),
      external: external,
      useEsbuild: true,
      noEmitOnError: !options.watch,
    })
  ];
};
