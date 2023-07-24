"use strict";

const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DtsGeneratorPlugin = require("../../webpack-plugins/webpack-dts-generator");
const packageJson = require("./package.json");
const fs = require("fs");
const replace = require("replace-in-file");

const year = new Date().getFullYear();
const banner = [
  "SurveyJS Creator v" + packageJson.version,
  "(c) 2015-" + year + " Devsoft Baltic OÜ - http://surveyjs.io/",
  "Github: https://github.com/surveyjs/survey-creator",
  "License: https://surveyjs.io/Licenses#SurveyCreator"
].join("\n");

const buildPlatformJson = {
  name: packageJson.name,
  version: packageJson.version,
  description:
    "Use SurveyJS Creator to create or edit JSON for SurveyJS Form Library.",
  keywords: [
    "Survey",
    "Survey Creator",
    "Form Builder",
    "Survey Maker",
    "SurveyJS",
    "JavaScript",
    "TypeScript"
  ],
  homepage: "https://surveyjs.io/Overview/Survey-Creator",
  license: "https://surveyjs.io/Licenses#SurveyCreator",
  files: [
    "**/*"
  ],
  main: packageJson.name + ".js",
  repository: {
    type: "git",
    url: "https://github.com/surveyjs/survey-creator.git"
  },
  engines: {
    node: ">=0.10.0"
  },
  typings: packageJson.name + ".d.ts",
  peerDependencies: {
    "ace-builds": "^1.4.12"
  },
  peerDependenciesMeta: {
    "ace-builds": {
      "optional": true
    }
  },
  dependencies: {
    "survey-core": packageJson.version,
    "survey-knockout-ui": packageJson.version,
    "survey-creator-core": packageJson.version,
    knockout: "^3.5.0"
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
      [packageJson.name]: path.resolve(__dirname, "./src/entries/index.ts")
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".scss"],
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
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
        },
        {
          test: /\.css$/,
          loader: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: options.buildType !== "prod"
              }
            }
          ]
        },
        {
          test: /\.s(c|a)ss$/,
          loader: [
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
          test: /\.html$/,
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
      library: options.libraryName || "SurveyCreator",
      libraryTarget: "umd",
      globalObject: "this",
      umdNamedDefine: true
    },
    externals: {
      knockout: {
        root: "ko",
        commonjs2: "knockout",
        commonjs: "knockout",
        amd: "knockout"
      },
      "survey-core": {
        root: "Survey",
        commonjs2: "survey-core",
        commonjs: "survey-core",
        amd: "survey-core"
      },
      "survey-knockout-ui": {
        root: "SurveyKnockout",
        commonjs2: "survey-knockout-ui",
        commonjs: "survey-knockout-ui",
        amd: "survey-knockout-ui"
      },
      "survey-creator-core": {
        root: "SurveyCreatorCore",
        commonjs2: "survey-creator-core",
        commonjs: "survey-creator-core",
        amd: "survey-creator-core"
      },
    },
    plugins: [
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
      new DtsGeneratorPlugin({
        webpack: webpack,
        filePath: "build/survey-creator-knockout.d.ts",
        moduleName: "survey-creator-knockout"
      })
    ]);
    config.devServer = {
      contentBase: __dirname,
      compress: false,
      port: 8081
    };
  }

  return config;
};
