const typescript = require("@rollup/plugin-typescript");
const nodeResolve = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
const alias = require("@rollup/plugin-alias");
const bannerPlugin = require("rollup-plugin-license");
const path = require("path");
const VERSION = require("./package.json").version;

const banner = [
  "SurveyJS Creator UI v" + VERSION,
  "(c) 2015-" + new Date().getFullYear() + " Devsoft Baltic OÜ - http://surveyjs.io/", // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
  "Github: https://github.com/surveyjs/survey-creator",
  "License: https://surveyjs.io/Licenses#SurveyCreator"
].join("\n");

const input = { "survey-creator-js": path.resolve(__dirname, "./entries/index.ts") };
module.exports = (options) => {
  options = options ?? {};
  if (!options.tsconfig) {
    options.tsconfig = path.resolve(__dirname, "./tsconfig.fesm.json");
  }
  if (!options.dir) {
    options.dir = path.resolve(__dirname, "./build/fesm");
  }
  return {
    input,
    context: "this",

    plugins: [
      alias({
        entries: {
          "survey-react-ui": "survey-js-ui",
          "react": "survey-js-ui",
          "react-dom/test-utils": "survey-js-ui",
          "react-dom": "survey-js-ui",
          "react/jsx-runtime": "survey-js-ui"
        }
      }),
      nodeResolve(),
      typescript({
        filterRoot: false,
        inlineSources: true,
        sourceMap: true, tsconfig: options.tsconfig,
        compilerOptions: {
          declaration: false,
          declarationDir: null
        }
      }),
      replace({
        preventAssignment: false,
        values: {
          "process.env.RELEASE_DATE": JSON.stringify(new Date().toISOString().slice(0, 10)),
          "process.env.VERSION": JSON.stringify(VERSION),
        }
      }),
      bannerPlugin({
        banner: {
          content: banner,
          commentStyle: "ignored",
        }
      })
    ],
    external: [
      "survey-core",
      "survey-creator-core",
      "survey-js-ui"
    ],
    output: [
      {
        dir: options.dir,
        entryFileNames: "[name].mjs",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
  };
};