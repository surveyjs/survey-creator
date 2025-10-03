"use strict";

const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var DashedNamePlugin = require("../../webpack-dashed-name");
const packageJson = require("./package.json");
const fs = require("fs");

const year = new Date().getFullYear();
const banner = [
  "SurveyJS Creator Presets Angular v" + packageJson.version,
  "(c) 2015-" + year + " Devsoft Baltic OÜ - http://surveyjs.io/",
  "Github: https://github.com/surveyjs/survey-creator",
  "License: https://surveyjs.io/Licenses#SurveyCreator"
].join("\n");

module.exports = function (options) {
  const buildPath = __dirname + "/build/";
  const isProductionBuild = options.buildType === "prod";
  const emitDeclarations = !!options.emitDeclarations;
  const emitNonSourceFiles = !!options.emitNonSourceFiles;

  const compilerOptions = emitDeclarations ? {} : {
    declaration: false,
    declarationDir: null
  };

  const config = {
    mode: isProductionBuild ? "production" : "development",
    entry: {
      "survey-creator-angular-presets": path.resolve(__dirname, "./src/entries/presets.ts")
    },
    resolve: {
      extensions: [".ts", ".js", ".scss"],
      plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
      alias: {
        tslib: path.join(__dirname, "./src/entries/helpers.ts")
      }
    },
    optimization: {
      minimize: isProductionBuild
    },
    module: {
      rules: [
        {
          test: /\.(ts)$/,
          loader: "ts-loader",
          options: {
            configFile: options.tsConfigFile || "tsconfig.json",
            compilerOptions
          }
        },
        {
        test: /\.html$/,
        exclude: [/node_modules/, require.resolve("./src/app/app.component.html")],
        loader: "html-loader"
        },
        {
          test: /\.s(c|a)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: options.buildType !== "prod"
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: options.buildType !== "prod"
              }
            }
          ]
        },
        {
          test: /\.(svg|png)$/,
          use: {
            loader: "url-loader",
            options: {}
          }
        }
      ]
    },
    output: {
      path: buildPath,
      filename: options.libraryName || "survey-creator-angular-presets",
      library: {
        root: "SurveyCreatorAngularPresets",
        amd: "survey-creator-angular-presets",
        commonjs: "survey-creator-angular-presets",
      },
      libraryTarget: "umd",
      globalObject: "this",
      umdNamedDefine: true
    },
    externals: {
      "@angular/core": {
        root: "ng.core",
        commonjs2: "@angular/core",
        commonjs: "@angular/core",
        amd: "@angular/core"
      },
      "@angular/common": {
        root: "ng.common",
        commonjs2: "@angular/common",
        commonjs: "@angular/common",
        amd: "@angular/common"
      },
      "@angular/forms": {
        root: "ng.forms",
        commonjs2: "@angular/forms",
        commonjs: "@angular/forms", 
        amd: "@angular/forms"
      },
      "rxjs": {
        root: "Rx",
        commonjs2: "rxjs",
        commonjs: "rxjs",
        amd: "rxjs"
      },
      "survey-core": {
        root: "Survey",
        commonjs2: "survey-core",
        commonjs: "survey-core",
        amd: "survey-core"
      },
      "survey-angular-ui": {
        root: "SurveyAngular",
        commonjs2: "survey-angular-ui",
        commonjs: "survey-angular-ui",
        amd: "survey-angular-ui"
      },
      "survey-creator-core": {
        root: "SurveyCreatorCore",
        commonjs2: "survey-creator-core",
        commonjs: "survey-creator-core",
        amd: "survey-creator-core"
      },
      "survey-creator-core-presets": {
        root: "SurveyCreatorCorePresets",
        commonjs2: "survey-creator-core-presets",
        commonjs: "survey-creator-core-presets",
        amd: "survey-creator-core-presets"
      },
      "survey-creator-angular": {
        root: "SurveyCreatorAngular",
        commonjs2: "survey-creator-angular",
        commonjs: "survey-creator-angular",
        amd: "survey-creator-angular"
      }
    },
    plugins: [
      new DashedNamePlugin(),
      new webpack.DefinePlugin({
        "process.env.ENVIRONMENT": JSON.stringify(options.buildType),
        "process.env.VERSION": JSON.stringify(packageJson.version)
      }),
      new MiniCssExtractPlugin({
        filename: isProductionBuild ? "[name].min.css" : "[name].css"
      }),
      new webpack.BannerPlugin({
        banner: banner
      })
    ]
  };

  if (isProductionBuild) {
    config.plugins.push = config.plugins.concat([]);
  } else {
    config.devtool = "source-map";
    config.plugins = config.plugins.concat([
      new webpack.LoaderOptionsPlugin({ debug: true }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        inject: "body",
        template: "src/index.html"
      }),
    ]);
    config.devServer = {
      static: {
        directory: path.join(__dirname, "."),
      },
      compress: false,
      port: 8085
    };
  }

  return config;
};
