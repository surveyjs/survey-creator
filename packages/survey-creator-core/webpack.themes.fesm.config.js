"use strict";
const webpackCommonConfigCreator = require("./webpack.themes.config");
const { merge } = require("webpack-merge");
const path = require("path");

function getConfig(options) {
  const buildPath = __dirname + "/build/fesm/";
  const config = {
    devtool: "source-map",
    output: {
      filename: "[name]" + ".js",
      path: buildPath,
      library: {
        type: "modern-module"
      }
    },
    entry: {
      "themes/index": path.resolve(__dirname, "./src/themes/index.ts"),
    },
    experiments: {
      outputModule: true,
    },
    optimization: {
      minimize: false
    },
    externalsType: "module"
  };

  return config;
}

module.exports = function (options) {
  const config = webpackCommonConfigCreator(options);
  config.output = {};
  config.externals = {};
  config.entry = {};
  return merge(config, getConfig(options));
};