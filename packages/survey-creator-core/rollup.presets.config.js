import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace";
import license from "rollup-plugin-license";
import path from "path";

const pkg = require("./package.json");

export default {
  input: "build/survey-creator-core-presets.js",
  output: {
    file: "build/survey-creator-core-presets.esm.js",
    format: "es",
    sourcemap: true
  },
  external: ["survey-core", "survey-creator-core"],
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        "process.env.NODE_ENV": JSON.stringify("production")
      }
    }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.presets.fesm.json",
      sourceMap: true,
      declaration: false
    }),
    license({
      banner: {
        content: {
          file: path.join(__dirname, "LICENSE"),
          encoding: "utf-8"
        }
      }
    })
  ]
};