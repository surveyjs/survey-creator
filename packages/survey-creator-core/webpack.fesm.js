"use strict";
const webpackCommonConfigCreator = require("./webpack.config");
const path = require("path");

const { merge } = require("webpack-merge");
const packageJson = require("./package.json");

function getConfig(options) {
  const buildPath = __dirname + "/build/fesm/";
  const config = {
    mode: "production",
    devtool: "source-map",
    entry: {
      [packageJson.name]: path.resolve(__dirname, "./src/entries/index.ts"),
    },
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
      "survey-core": "survey-core",
      "survey-core/themes": "survey-core/themes",
      "survey-creator-core/themes": "survey-creator-core/themes"
    }
  };

  return config;
}

module.exports = function (options) {
  options.tsConfigFile = "tsconfig.fesm.json";
  const config = webpackCommonConfigCreator(options);
  config.entry = {};
  config.output = {};
  config.externals = {};
  return merge(config, getConfig(options));
};