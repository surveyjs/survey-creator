"use strict";
const webpackCommonConfigCreator = require("./webpack.config");
const path = require("path");
const fs = require("fs");

const { merge } = require("webpack-merge");
const packageJson = require("./package.json");

function getConfig(options) {
  const buildPath = __dirname + "/build/fesm/";
  const isProductionBuild = options.buildType === "prod";

  const config = {
    entry: {
      [packageJson.name]: path.resolve(__dirname, "./src/entries/index.ts"),
    },
    output: {
      filename: "[name]" + (isProductionBuild ? ".min" : "") + ".mjs",
      path: buildPath,
      module: true,
      umdNamedDefine: true
    },
    experiments: {
      outputModule: true,
    },
  };

  return config;
}

module.exports = function (options) {
  options.tsConfigFile = "tsconfig.fesm.json";
  const mainConfig = webpackCommonConfigCreator(options);
  mainConfig.entry = {};
  mainConfig.output = {};
  mainConfig.plugins.shift();
  // mainConfig.plugins.splice(3, 1);
  mainConfig.externals = {}; // TODO - leave survey-core external
  return merge(mainConfig, getConfig(options));
};