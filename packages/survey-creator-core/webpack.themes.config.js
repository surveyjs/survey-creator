"use strict";

const webpackCommonConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
var path = require("path");

const config = {
  output: {
    path: __dirname + "/build/themes"
  },
  entry: {
    "sc2020": path.resolve(__dirname, "./src/themes/sc2020.ts"),
    "test": path.resolve(__dirname, "./src/themes/test.ts"),
    "default-light": path.resolve(__dirname, "./src/themes/default-light-export.ts"),
    "default-dark": path.resolve(__dirname, "./src/themes/default-dark.ts"),
    "default-contrast": path.resolve(__dirname, "./src/themes/default-contrast.ts"),
    "index": path.resolve(__dirname, "./src/themes/index.ts"),
  },
  externals: {
    "survey-creator-core": {
      root: "SurveyCreatorCore",
      commonjs2: "survey-creator-core",
      commonjs: "survey-creator-core",
      amd: "survey-creator-core"
    },
  },
};
const umdNames = {
  "sc2020": "SC2020",
};
function patchEntries(config) {
  Object.keys(config.entry).forEach(key => {
    if (key == "index") return;
    const importEntry = config.entry[key];
    const umdName = umdNames[key] ?? key.replace(/([_-]\w|^\w)/g, k => (k[1] ?? k[0]).toUpperCase());
    config.entry[key] = {
      import: importEntry,
      library: {
        type: "umd",
        export: "default",
        umdNamedDefine: true,
        name: {
          root: ["SurveyCreatorTheme", umdName],
          amd: "[dashedname]",
          commonjs: "[dashedname]",
        },
      }
    };
  });
}
module.exports = function (options) {
  options.platform = "";
  options.libraryName = "SurveyCreatorTheme";
  options.tsConfigFile = path.resolve(__dirname, "./tsconfig.themes.json");
  const mainConfig = webpackCommonConfig(options);
  mainConfig.entry = {};
  patchEntries(config);
  return merge(mainConfig, config);
};
