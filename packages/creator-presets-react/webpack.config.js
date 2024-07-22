"use strict";

const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const packageJson = require("./package.json");
const fs = require("fs");

const year = new Date().getFullYear();
const banner = [
  "SurveyJS Creator Presets React v" + packageJson.version,
  "(c) 2015-" + year + " Devsoft Baltic OÜ - http://surveyjs.io/",
  "Github: https://github.com/surveyjs/survey-creator",
  "License: https://surveyjs.io/Licenses#SurveyCreator"
].join("\n");

const buildPlatformJson = {
  name: packageJson.name,
  version: packageJson.version,
  description:
    "Use SurveyJS Creator Presets to create or edit JSON for Creator settings.",
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
  typings: "./typings/entries/index.d.ts",
  peerDependencies: {
    "ace-builds": "^1.4.12",
    "react": "^16.5.0 || ^17.0.1 || ^18.1.0",
    "react-dom": "^16.5.0 || ^17.0.1 || ^18.1.0",
    "survey-core": packageJson.version,
    "survey-react-ui": packageJson.version,
    "survey-creator-core": packageJson.version
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
      [packageJson.name]: path.resolve(__dirname, "./src/entries/index.ts")
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".scss"],
      plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
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
      library: options.libraryName || "SurveyCreatorPresets",
      libraryTarget: "umd",
      globalObject: "this",
      umdNamedDefine: true
    },
    externals: {
      react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      },
      "react-dom": {
        root: "ReactDOM",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom"
      },
      "survey-core": {
        root: "Survey",
        commonjs2: "survey-core",
        commonjs: "survey-core",
        amd: "survey-core"
      },
      "survey-react-ui": {
        root: "SurveyReact",
        commonjs2: "survey-react-ui",
        commonjs: "survey-react-ui",
        amd: "survey-react-ui"
      },
      "survey-creator-core": {
        root: "SurveyCreatorCore",
        commonjs2: "survey-creator-core",
        commonjs: "survey-creator-core",
        amd: "survey-creator-core"
      },
      "creator-presets-core": {
        root: "SurveyCreatorPresetsCore",
        commonjs2: "creator-presets-core",
        commonjs: "creator-presets-core",
        amd: "creator-presets-core"
      },
      "survey-creator-react": {
        root: "SurveyCreator",
        commonjs2: "survey-creator-react",
        commonjs: "survey-creator-react",
        amd: "survey-creator-react"
      }
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
    ]);
    config.devServer = {
      contentBase: __dirname,
      //host: "0.0.0.0",
      compress: false,

      port: 8082
    };
  }

  return config;
};
