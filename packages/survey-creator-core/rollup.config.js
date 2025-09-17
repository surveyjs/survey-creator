const typescript = require("@rollup/plugin-typescript");
const nodeResolve = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
const commonjs = require("@rollup/plugin-commonjs");
const bannerPlugin = require("rollup-plugin-license");

const path = require("path");
const svgLoader = require("svg-inline-loader");
const fg = require("fast-glob");
const readFile = require("fs").readFileSync;
const VERSION = require("./package.json").version;
const input = { "survey-creator-core": path.resolve(__dirname, "./src/entries/index.ts") };

var banner = [
  "SurveyJS Creator v" + VERSION,
  "(c) 2015-" + new Date().getFullYear() + " Devsoft Baltic OÜ - http://surveyjs.io/", // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
  "Github: https://github.com/surveyjs/survey-creator",
  "License: https://surveyjs.io/Licenses#SurveyCreator",
].join("\n");

module.exports = (options) => {
  options = options ?? {};
  if (!options.tsconfig) {
    options.tsconfig = path.resolve(__dirname, "./tsconfig.fesm.json");
  }
  if (!options.dir) {
    options.dir = path.resolve(__dirname, "./build/fesm");
  }
  const iconsMap = {
    "iconsV1": fg.convertPathToPattern(path.resolve(__dirname, "./src/images-v1")) + "/*.svg",
    "iconsV2": fg.convertPathToPattern(path.resolve(__dirname, "./src/images-v2")) + "/*.svg"
  };
  return {
    input,
    context: "this",
    external: ["survey-core"],
    plugins: [
      {
        name: "icons",
        resolveId: (id) => {
          if (Object.keys(iconsMap).includes(id)) {
            return id;
          }
        },
        load: async (id) => {
          if (Object.keys(iconsMap).includes(id)) {
            const icons = {};
            for (const iconPath of await fg.glob(iconsMap[id])) {
              icons[path.basename(iconPath).replace(/\.svg$/, "").toLocaleLowerCase()] = svgLoader.getExtractedSVG(readFile(iconPath).toString());
            }
            return `export default ${JSON.stringify(icons, undefined, "\t")}`;
          }
        }
      },
      {
        name: "remove-scss-imports",
        load: (id) => {
          if (id.match(/\.scss$/)) return "";
        }
      },
      //force take correct .js file for papaparse dependency
      nodeResolve({ browser: true }),
      commonjs(),
      typescript({ inlineSources: true, sourceMap: true, tsconfig: options.tsconfig, compilerOptions: {
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
        entryFileNames: "[name].mjs",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
  };
};