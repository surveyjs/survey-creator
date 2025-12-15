"use strict";
const webpackCommonConfigCreator = require("./webpack.config");
const path = require("path");
const fs = require("fs");
const { merge } = require("webpack-merge");

const config = {
  entry: {
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
  fs.readdirSync(path.resolve(__dirname, "./src/ui-preset-editor/localization")).forEach(file => {
    var extension = path.extname(file);
    if (extension.toLowerCase() === ".ts") {
      config.entry[`ui-preset-editor/i18n/${path.basename(file, extension)}`] = (path.resolve(__dirname, "./src/ui-preset-editor/localization") + "/" + file);
    }
  });
  config.entry["ui-preset-editor/i18n/index"] = path.resolve(__dirname, "./src/ui-preset-editor/i18n.ts");
}

module.exports = function (options) {
  options.platform = "i18n";
  options.libraryName = "SurveyCreatorUIPresetsEditorLocales";
  options.tsConfigFile = "tsconfig.i18n.ui-preset-editor.json";
  patchEntries();
  const mainConfig = webpackCommonConfigCreator(options);
  mainConfig.entry = {};
  return merge(mainConfig, config);
};