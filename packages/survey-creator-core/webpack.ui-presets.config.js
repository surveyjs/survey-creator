"use strict";

const webpackCommonConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
var path = require("path");

const config = {
  output: {
    path: __dirname + "/build/ui-presets"
  },
  entry: {
    "basic": path.resolve(__dirname, "./src/ui-presets/basic.ts"),
    "advanced": path.resolve(__dirname, "./src/ui-presets/advanced.ts"),
    "expert": path.resolve(__dirname, "./src/ui-presets/expert.ts"),
    "index": path.resolve(__dirname, "./src/ui-presets/index.ts"),
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
function patchEntries(config) {
  Object.keys(config.entry).forEach(key => {
    if (key == "index") return;
    const importEntry = config.entry[key];
    const umdName = key.replace(/([_-]\w|^\w)/g, k => (k[1] ?? k[0]).toUpperCase());
    config.entry[key] = {
      import: importEntry,
      library: {
        type: "umd",
        export: "default",
        umdNamedDefine: true,
        name: {
          root: ["SurveyCreatorUIPreset", umdName],
          amd: "[dashedname]",
          commonjs: "[dashedname]",
        },
      }
    };
  });
}
module.exports = function (options) {
  options.platform = "";
  options.libraryName = "SurveyCreatorUIPreset";
  options.tsConfigFile = path.resolve(__dirname, "./tsconfig.ui-presets.json");
  const mainConfig = webpackCommonConfig(options);
  mainConfig.entry = {};
  patchEntries(config);
  return merge(mainConfig, config);
};
