var webpack = require("webpack");
var webpackConfigCreator = require("./webpack.config");
var webpackConfig = webpackConfigCreator({ buildType: "dev" });
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var path = require('path');

webpackConfig.module.rules.unshift({
  test: /entry\.html$/,
  use: [{
    loader: path.resolve(__dirname, 'tests/mock-loader.js')
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
      mode: "development",
      module: webpackConfig.module,
      resolve: webpackConfig.resolve,
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css"
        }),
        new webpack.SourceMapDevToolPlugin({
          filename: null, // if no value is provided the sourcemap is inlined
          test: /\.(ts|js)($|\?)/i // process .js and .ts files only
        })
      ],
      devtool: 'source-map'
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
