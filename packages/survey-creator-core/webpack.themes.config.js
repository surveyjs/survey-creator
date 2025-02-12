"use strict";

const webpackCommonConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
var FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
var path = require("path");

const config = {
  output: {
    path: __dirname + "/build"
  },
  entry: {
    "themes/sc2020": path.resolve(__dirname, "./src/themes/sc2020.ts"),
    "themes/default-dark": path.resolve(__dirname, "./src/themes/default-dark.ts"),
    "themes/default-contrast": path.resolve(__dirname, "./src/themes/default-contrast.ts"),
    "themes/index": path.resolve(__dirname, "./src/themes/index.ts"),
  },
  plugins: [new FixStyleOnlyEntriesPlugin()],
};

module.exports = function (options) {
  options.platform = "";
  options.libraryName = "SurveyCreatorTheme";
  options.tsConfigFile = path.resolve(__dirname, "./tsconfig.themes.json");
  const mainConfig = webpackCommonConfig(options);
  mainConfig.entry = {};
  return merge(mainConfig, config);
};
