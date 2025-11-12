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
  "SurveyJS Creator UI v" + packageJson.version,
  "(c) 2015-" + year + " Devsoft Baltic OÜ - http://surveyjs.io/",
  "Github: https://github.com/surveyjs/survey-creator",
  "License: https://surveyjs.io/licensing"
].join("\n");

const buildPlatformJson = {
  name: packageJson.name,
  version: packageJson.version,
  description: "A white-label drag-and-drop form builder for HTML, CSS, and JavaScript apps. It generates JSON schemas for rendering dynamic forms with SurveyJS Form Library. Design complex, interactive forms and surveys without writing code.",
  author: "DevSoft Baltic OU <info@devsoftbaltic.com>",
  homepage: "https://surveyjs.io/",
  license: "SEE LICENSE IN LICENSE",
  licenseUrl: "https://surveyjs.io/licensing",
  keywords: [
    "vanilla",
    "vanilla-js",
    "survey",
    "form",
    "surveyjs",
    "survey-library",
    "form-builder",
    "dynamic-form-builder",
    "drag-and-drop-form-builder",
    "form-library",
    "form-management",
    "questionnaire",
    "data-collection",
    "ui-component",
    "json",
    "json-schema",
    "schema-form",
    "survey-creator",
    "survey-builder",
    "client-side",
    "frontend",
    "javascript",
    "typescript"
  ],
  files: [
    "**/*"
  ],
  main: packageJson.name + ".js",
  module: "fesm/survey-creator-js.mjs",
  repository: {
    type: "git",
    url: "https://github.com/surveyjs/survey-creator.git"
  },
  engines: {
    node: ">=0.10.0"
  },
  typings: "./typings/survey-creator-js/entries/index.d.ts",
  peerDependencies: {
    "ace-builds": "^1.4.12",
    "survey-core": packageJson.version,
    "survey-js-ui": packageJson.version,
    "survey-creator-core": packageJson.version,
    "@types/react-dom": "*",
    "@types/react": "*",
  },
  exports: {
    ".": {
      "types": "./typings/survey-creator-js/entries/index.d.ts",
      "import": "./fesm/survey-creator-js.mjs",
      "require": "./survey-creator-js.js"
    }
  },
  peerDependenciesMeta: {
    "ace-builds": {
      "optional": true
    },
  },
  devDependencies: {}
};

module.exports = function (options) {
  const buildPath = __dirname + "/build/";
  const isProductionBuild = options.buildType === "prod";

  const percentage_handler = function handler(percentage, msg) {
    if (0 == percentage) {
      console.log("Build started... good luck!");
    } else if (1 == percentage) {
      if (isProductionBuild) {
        fs.createReadStream("./README.md").pipe(
          fs.createWriteStream(buildPath + "README.md")
        );
      }

      if (isProductionBuild) {
        fs.writeFileSync(
          buildPath + "package.json",
          JSON.stringify(buildPlatformJson, null, 2),
          "utf8"
        );
      }
    }
  };

  const config = {
    mode: isProductionBuild ? "production" : "development",
    entry: {
      [packageJson.name]: path.resolve(__dirname, "./entries/index.ts")
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".scss"],
    },
    optimization: {
      minimize: isProductionBuild
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
          options: {
            transpileOnly: isProductionBuild
          }
        },
        {
          test: /\.s(c|a)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                // sourceMap: options.buildType !== "prod"
              }
            },
            {
              loader: "sass-loader",
              options: {
                // sourceMap: options.buildType !== "prod"
              }
            }
          ]
        },
        {
          test: /\.html$/,
          exclude: [/node_modules/, require.resolve("./index.html")],
          loader: "html-loader"
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
      filename: "[name]" + (isProductionBuild ? ".min" : "") + ".js",
      library: {
        root: options.libraryName || "SurveyCreator",
        amd: "[dashedname]",
        commonjs: "[dashedname]",
      },
      libraryTarget: "umd",
      globalObject: "this",
      umdNamedDefine: true
    },
    externals: [
      {
        "survey-core": {
          root: "Survey",
          commonjs2: "survey-core",
          commonjs: "survey-core",
          amd: "survey-core"
        },
        "survey-js-ui":
        {
          root: "SurveyUI",
          commonjs2: "survey-js-ui",
          commonjs: "survey-js-ui",
          amd: "survey-js-ui"
        },
        "survey-react-ui":
        {
          root: "SurveyUI",
          commonjs2: "survey-js-ui",
          commonjs: "survey-js-ui",
          amd: "survey-js-ui"
        },
        "react":
        {
          root: "SurveyUI",
          commonjs2: "survey-js-ui",
          commonjs: "survey-js-ui",
          amd: "survey-js-ui"
        },
        "react-dom":
        {
          root: "SurveyUI",
          commonjs2: "survey-js-ui",
          commonjs: "survey-js-ui",
          amd: "survey-js-ui"
        },
        "survey-creator-core": {
          root: "SurveyCreatorCore",
          commonjs2: "survey-creator-core",
          commonjs: "survey-creator-core",
          amd: "survey-creator-core"
        }
      }
    ],
    plugins: [
      new DashedNamePlugin(),
      new webpack.ProgressPlugin(percentage_handler),
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
        template: "index.html"
      }),
    ]);
    config.devServer = {
      static: {
        directory: path.join(__dirname, "."),
      },
      //host: "0.0.0.0",
      compress: false,
      port: 8083
    };
  }

  return config;
};
