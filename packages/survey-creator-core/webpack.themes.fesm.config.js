"use strict";
const webpackCommonConfigCreator = require("./webpack.themes.config");
const { merge } = require("webpack-merge");

function getConfig(options) {
  const buildPath = __dirname + "/build/fesm/";
  const config = {
    devtool: "source-map",
    output: {
      filename: "[name]" + ".js",
      path: buildPath,
      library: {
        type: "module"
      }
    },
    experiments: {
      outputModule: true,
    },
    optimization: {
      minimize: false
    },
  };

  return config;
}

module.exports = function (options) {
  const config = webpackCommonConfigCreator(options);
  config.output = {};
  config.externals = {};
  return merge(config, getConfig(options));
};