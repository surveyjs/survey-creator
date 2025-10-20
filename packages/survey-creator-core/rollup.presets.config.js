import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import bannerPlugin from "rollup-plugin-license";
import replace from "@rollup/plugin-replace";
import path from "path";

const VERSION = require("./package.json").version;
var banner = [
  "SurveyJS Creator v" + VERSION,
  "(c) 2015-" + new Date().getFullYear() + " Devsoft Baltic OÜ - http://surveyjs.io/", // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
  "Github: https://github.com/surveyjs/survey-creator",
  "License: https://surveyjs.io/Licenses#SurveyCreator",
].join("\n");
export default {
  input: path.resolve(__dirname, "./src/entries/presets.ts"),
  output: {
    file: "build/survey-creator-core-presets.mjs",
    format: "es",
    exports: "named",
    sourcemap: true
  },
  external: ["survey-core", "survey-creator-core"],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({ inlineSources: true, sourceMap: true, tsconfig: path.resolve(__dirname, "./tsconfig.presets.fesm.json"), compilerOptions: {
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
  ]
};