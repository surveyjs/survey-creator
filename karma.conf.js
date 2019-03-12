var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackConfigCreator = require("./webpack.config");
var webpackConfig = webpackConfigCreator({ buildType: "dev" });
var path = require('path');

webpackConfig.module.rules.push({
  test: /entry\.html$/,
  use: [{
    loader: path.resolve(__dirname, 'mock-loader.js')
  }]
});

process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["qunit"],
    files: ["tests/entries/*.ts"],
    exclude: [],
    mime: {
      "text/x-typescript": ["ts", "tsx"]
    },
    junitReporter: {
      outputDir: "tmp/testresults/",
      outputFile: "test-results.xml"
    },
    preprocessors: {
      "**/*.ts": ["webpack", "sourcemap"]
    },
    browserNoActivityTimeout: 100000,
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      plugins: [
        new webpack.SourceMapDevToolPlugin({
          filename: null, // if no value is provided the sourcemap is inlined
          test: /\.(ts|js)($|\?)/i // process .js and .ts files only
        }),
        new ExtractTextPlugin({
          filename: "./package/surveyeditor.css"
        })
      ]
    },
    reporters: ["progress", "dots", "junit"],
    browsers: ["ChromeHeadless"],
    colors: true,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  });
};
