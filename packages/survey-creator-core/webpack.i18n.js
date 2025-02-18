"use strict";
const webpackCommonConfigCreator = require("./webpack.config");
const path = require("path");
const fs = require("fs");
const { merge } = require("webpack-merge");

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

function patchEntries() {
  fs.readdirSync(path.resolve(__dirname, "./src/localization")).forEach(file => {
    var extension = path.extname(file);
    if (extension.toLowerCase() === ".ts") {
      config.entry[`i18n/${path.basename(file, extension)}`] = (path.resolve(__dirname, "./src/localization") + "/" + file);
    }
  });
  config.entry["i18n/index"] = path.resolve(__dirname, "./src/entries/i18n.ts");
}

module.exports = function (options) {
  options.platform = "i18n";
  options.libraryName = "SurveyCreatorLocales";
  options.tsConfigFile = "tsconfig.i18n.json";
  patchEntries();
  const mainConfig = webpackCommonConfigCreator(options);
  mainConfig.entry = {};
  return merge(mainConfig, config);
};