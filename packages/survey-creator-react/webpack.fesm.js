"use strict";
const webpackCommonConfigCreator = require("./webpack.config");
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
    externalsType: "module",
    externals: {
      "react": "react",
      "react-dom": "react-dom",
      "survey-creator-core": "survey-creator-core",
      "survey-core": "survey-core",
      "survey-react-ui": "survey-react-ui"
    }
  };

  return config;
}

module.exports = function (options) {
  options.tsConfigFile = "tsconfig.fesm.json";
  const config = webpackCommonConfigCreator(options);
  config.output = {};
  config.externals = {};
  return merge(config, getConfig(options));
};