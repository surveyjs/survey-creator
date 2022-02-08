"use strict";

const webpackCommonConfigCreator = require("./webpack.config");
var path = require("path");
const { merge } = require("webpack-merge");
var packageJson = require("./package.json");

const config = {
  entry: {
    "survey-creator-core.i18n": path.resolve(__dirname, "./src/entries/i18n.ts"),
  },
  externals: {
    "survey-creator-core": {
      root: "SurveyCreatorCore",
      commonjs2: "survey-creator-core",
      commonjs: "survey-creator-core",
      amd: "survey-creator-core"
    }
  }
};

module.exports = function (options) {
  options.platform = "i18n";
  options.libraryName = "SurveyCreatorLocales";

  const mainConfig = webpackCommonConfigCreator(options);
  delete mainConfig.entry[packageJson.name];
  mainConfig.plugins.shift();
 
  return merge(mainConfig, config);
};
