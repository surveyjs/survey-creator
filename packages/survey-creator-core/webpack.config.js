"use strict";

const webpack = require("webpack");
const fs = require("fs");
const path = require("path");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var DashedNamePlugin = require("../../webpack-dashed-name");
const mergeFiles = require("merge-files");
const packageJson = require("./package.json");

const today = new Date();
const year = today.getFullYear();

var banner = [
  "SurveyJS Creator v" + packageJson.version,
  "(c) 2015-" + year + " Devsoft Baltic OÜ - http://surveyjs.io/",
  "Github: https://github.com/surveyjs/survey-creator",
  "License: https://surveyjs.io/licensing",
].join("\n");

var buildPlatformJson = {
  name: packageJson.name,
  version: packageJson.version,
  description: "A framework-independent core package of the SurveyJS Survey Creator component. With Survey Creator, you can visually design complex, interactive JSON forms and surveys in a drag-and-drop interface.",
  homepage: "https://surveyjs.io/",
  license: "SEE LICENSE IN LICENSE",
  licenseUrl: "https://surveyjs.io/licensing",
  keywords: [
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
  module: "fesm/" + packageJson.name + ".mjs",
  repository: {
    type: "git",
    url: "https://github.com/surveyjs/survey-creator.git",
  },
  engines: {
    node: ">=0.10.0",
  },
  typings: "./typings/entries/index.d.ts",
  peerDependencies: {
    "ace-builds": "^1.4.12",
    "survey-core": packageJson.version
  },
  peerDependenciesMeta: {
    "ace-builds": {
      "optional": true
    },
  },
  "exports": {
    ".": {
      "types": "./typings/entries/index.d.ts",
      "import": "./fesm/survey-creator-core.mjs",
      "require": "./survey-creator-core.js"
    },
    "./*.css": "./*.css",
    "./survey-creator-core.i18n": {
      "import": "./fesm/survey-creator-core.i18n.mjs",
      "require": "./survey-creator-core.i18n.js"
    },
    "./i18n": {
      "import": "./fesm/i18n/index.mjs",
      "require": "./i18n/index.js"
    },
    "./i18n/*": {
      "import": "./fesm/i18n/*.mjs",
      "require": "./i18n/*.js"
    },
    "./themes": {
      "types": "./themes/index.d.ts",
      "import": "./fesm/themes/index.mjs",
      "require": "./themes/index.js"
    },
    "./themes/index": {
      "types": "./themes/index.d.ts",
      "import": "./fesm/themes/index.mjs",
      "require": "./themes/index.js"
    },
    "./themes/*": {
      "types": "./themes/*.d.ts",
      "default": "./themes/*.js",
    },
    "./presets": {
      "types": "./presets-typings/typings/entries/index.d.ts",
      "import": "./fesm/survey-creator-core-presets.mjs",
      "require": "./survey-creator-core-presets.js"
    },
    "./presets/*": {
      "types": "./presets-typings/typings/*.d.ts",
      "import": "./fesm/survey-creator-core-presets/*.mjs",
      "require": "./survey-creator-core-presets/*.js"
    },
  },
  devDependencies: {},
};

function getPercentageHandler(emitNonSourceFiles, emitStyles, buildPath, isProductionBuild) {
  function createStylesBundleWithFonts() {
    const getdir = (filename) => {
      return buildPath + filename;
    };

    if (isProductionBuild) {
      let outputPath = getdir("survey-creator-core.min.css");
      let inputPathList = [
        getdir("fonts.fontless.min.css"),
        getdir("survey-creator-core.fontless.min.css")
      ];
      return mergeFiles(inputPathList, outputPath);
    } else {
      let outputPath = getdir("survey-creator-core.css");
      let inputPathList = [
        getdir("fonts.fontless.css"),
        getdir("survey-creator-core.fontless.css")
      ];
      return mergeFiles(inputPathList, outputPath);
    }

  }
  return function handler(percentage, msg) {
    if (0 == percentage) {
      console.log("Build started... good luck!");
    } else if (1 == percentage) {
      if (emitNonSourceFiles) {
        fs.createReadStream("./README.md").pipe(
          fs.createWriteStream(buildPath + "README.md")
        );
        fs.writeFileSync(
          buildPath + "package.json",
          JSON.stringify(buildPlatformJson, null, 2),
          "utf8"
        );
      }
      if (emitStyles) {
        return createStylesBundleWithFonts();
      }
    }
  };
}

module.exports = function (options) {
  const emitDeclarations = !!options.emitDeclarations;
  const emitNonSourceFiles = !!options.emitNonSourceFiles;
  const emitStyles = !!options.emitStyles;
  const buildPath = __dirname + "/build/";
  const isProductionBuild = options.buildType === "prod";

  const compilerOptions = emitDeclarations ? {} : {
    declaration: false,
    declarationDir: null
  };

  var config = {
    mode: isProductionBuild ? "production" : "development",
    entry: {
      [packageJson.name]: path.resolve(__dirname, "./src/entries/index.ts"),
      "fonts": path.resolve(__dirname, "./src/entries/fonts.scss")
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".scss"],
      //plugins: [new TsconfigPathsPlugin(/*{ configFile: "./tsconfig.json" }*/)],
      alias: {
        "iconsV1": path.resolve(__dirname, "./src/icons/iconsV1"),
        "iconsV2": path.resolve(__dirname, "./src/icons/iconsV2"),
        tslib: path.join(__dirname, "./src/entries/helpers.ts"),
      },
    },
    optimization: {
      minimize: isProductionBuild,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
          options: {
            configFile: options.tsConfigFile || "tsconfig.json",
            compilerOptions
          }
        },
        {
          test: /\.s(c|a)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "",
                emit: emitStyles
              }
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: options.buildType !== "prod",
              },
            },
            {
              loader: "sass-loader",
              options: {
                api: "modern",
                sourceMap: options.buildType !== "prod",
              },
            },
          ],
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
        {
          test: /\.svg$/,
          loader: "svg-inline-loader",
        },
        {
          test: /\.(png|jpg)$/,
          type: "asset/inline" // https://webpack.js.org/guides/asset-modules/
        }
      ],
    },
    output: {
      path: buildPath,
      filename: "[name]" + (isProductionBuild ? ".min" : "") + ".js",
      library: {
        root: options.libraryName || "SurveyCreatorCore",
        amd: "[dashedname]",
        commonjs: "[dashedname]",
      },
      libraryTarget: "umd",
      globalObject: "this",
      umdNamedDefine: true
    },
    externals: {
      "survey-core": {
        root: "Survey",
        commonjs2: "survey-core",
        commonjs: "survey-core",
        amd: "survey-core",
      }
    },
    plugins: [
      new webpack.ProgressPlugin(getPercentageHandler(emitNonSourceFiles, emitStyles, buildPath, isProductionBuild)),
      new DashedNamePlugin(),
      new webpack.DefinePlugin({
        "process.env.ENVIRONMENT": JSON.stringify(options.buildType),
        "process.env.VERSION": JSON.stringify(packageJson.version),
      }),
      new RemoveEmptyScriptsPlugin(),
      new MiniCssExtractPlugin({
        filename: isProductionBuild ? "[name].fontless.min.css" : "[name].fontless.css",
      }),
      new webpack.WatchIgnorePlugin({ paths: [/svgbundle\.html/] }),
      new webpack.BannerPlugin({
        banner: banner,
      }),
    ],
  };
  if (isProductionBuild) {
    config.plugins.push = config.plugins.concat([]);
  } else {
    config.devtool = "source-map";
    config.plugins = config.plugins.concat([
      new webpack.LoaderOptionsPlugin({ debug: true }),
    ]);
  }

  return config;
};
