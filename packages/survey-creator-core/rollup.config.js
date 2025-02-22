const typescript = require("@rollup/plugin-typescript");
const nodeResolve = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
const commonjs = require("@rollup/plugin-commonjs");
const bannerPlugin = require("rollup-plugin-license");

const path = require("path");
const glob = require("fast-glob").glob;
const readFile = require("fs").readFileSync;
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
      {
        name: "svgbundle",
        load: async (id) => {
          if (id === path.resolve(__dirname, "./src/svgbundle.ts")) {
            const iconsMap = {};
            const iconsPathMap = {
              "iconsV1": path.resolve(__dirname, "./src/images-v1/*.svg"),
              "iconsV2": path.resolve(__dirname, "./src/images-v2/*.svg")
            };
            for(const iconsKey in iconsPathMap) {
              const icons = {};
              for (const iconPath of await glob(iconsPathMap[iconsKey])) {
                const [fname] = iconPath.split("/").slice(-1);
                icons[fname.replace(/\.svg$/, "").toLocaleLowerCase()] = readFile(iconPath).toString();
              }
              iconsMap[iconsKey] = JSON.stringify(icons, undefined, "\t");
            }
            return Object.keys(iconsMap).map(key => {
              return `export const ${key} = ${iconsMap[key]}`;
            }).join("\n");
          }
        }
      },
      {
        name: "remove-scss-imports",
        load: (id) => {
          if(id.match(/\.scss$/)) return "";
        }
      },
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