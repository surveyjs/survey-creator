"use strict";

const webpackCommonConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
var FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
var path = require("path");

const config = {
  output: {
    path: __dirname + "/build/themes"
  },
  entry: {
    "default-light": path.resolve(__dirname, "./src/themes/default-light.ts"),
    "default-dark": path.resolve(__dirname, "./src/themes/default-dark.ts"),
    "default-contrast": path.resolve(__dirname, "./src/themes/default-contrast.ts"),
    "index": path.resolve(__dirname, "./src/themes/index.ts"),
  },
  plugins: [new FixStyleOnlyEntriesPlugin()],
  externals: {
    "creator-core": {
      root: "SurveyCreatorCore",
      commonjs2: "creator-core",
      commonjs: "creator-core",
      amd: "creator-core"
    }
  }
};

module.exports = function (options) {
  options.platform = "";
  options.libraryName = "CreatorTheme";
  options.tsConfigFile = path.resolve(__dirname, "./tsconfig.themes.json");
  const mainConfig = webpackCommonConfig(options);
  mainConfig.entry = {};
  return merge(mainConfig, config);
};
