const typescript = require("@rollup/plugin-typescript");
const nodeResolve = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
const bannerPlugin = require("rollup-plugin-license");
const path = require("path");
const commonjs = require("@rollup/plugin-commonjs");
const VERSION = require("./package.json").version;
const input = { "survey-creator-core": path.resolve(__dirname, "./src/entries/index.ts") };

var banner = [
  "SurveyJS Creator v" + VERSION,
  "(c) 2015-" + new Date().getFullYear() + " Devsoft Baltic OÜ - http://surveyjs.io/",
  "Github: https://github.com/surveyjs/survey-creator",
  "License: https://surveyjs.io/Licenses#SurveyCreator",
].join("\n");

module.exports = (options) => {
  options = options ?? {};
  if(!options.tsconfig) {
    options.tsconfig = path.resolve(__dirname, "./tsconfig.fesm.json");
  }
  if(!options.dir) {
    options.dir = path.resolve(__dirname, "./build/fesm");
  }
  return {
    input,
    context: "this",
    external: ["survey-core"],
    plugins: [
      //force take correct .js file for papaparse dependency
      nodeResolve({ browser: true }),
      commonjs(),
      typescript({ tsconfig: options.tsconfig, compilerOptions: {
        declaration: false,
        declarationDir: null
      } }),
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
    output: [
      {
        dir: options.dir,
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
  };
};