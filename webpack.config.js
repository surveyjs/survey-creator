"use strict";

var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var dts = require("dts-bundle");
var rimraf = require("rimraf");
var GenerateJsonPlugin = require("generate-json-webpack-plugin");
var packageJson = require("./package.json");
var fs = require("fs");
var replace = require("replace-in-file");
var svgStoreUtils = require(path.resolve(
  __dirname,
  "./node_modules/webpack-svgstore-plugin/src/helpers/utils.js"
));

var banner = [
  "SurveyJS Creator v" + packageJson.version,
  "(c) Devsoft Baltic O� - http://surveyjs.io/",
  "Github: https://github.com/surveyjs/survey-creator",
  "License: https://surveyjs.io/Licenses#BuildSurvey"
].join("\n");

var dts_banner = [
  "Type definitions for SurveyJS Creator JavaScript library v" +
    packageJson.version,
  "(c) Devsoft Baltic O� - http://surveyjs.io/",
  "Github: https://github.com/surveyjs/survey-creator",
  "License: https://surveyjs.io/Licenses#BuildSurvey",
  ""
].join("\n");

var packagePlatformJson = {
  name: "surveyjs-editor",
  version: packageJson.version,
  description:
    "Use SurveyJS Creator to create or edit JSON for SurveyJS Library.",
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
  license: "https://surveyjs.io/Licenses#BuildSurvey",
  files: [
    "surveyeditor.css",
    "surveyeditor.min.css",
    "surveyeditor.js",
    "surveyeditor.d.ts",
    "surveyeditor.min.js"
  ],
  main: "surveyeditor.js",
  repository: {
    type: "git",
    url: "https://github.com/surveyjs/survey-creator.git"
  },
  engines: {
    node: ">=0.10.0"
  },
  typings: "surveyeditor.d.ts",
  peerDependencies: {
    bootstrap: "^3.3.6",
    jquery: "^3.1.1",
    "ace-builds": "^1.2.2"
  },
  dependencies: {
    "survey-knockout": "^" + packageJson.version,
    knockout: "^3.5.0"
  },
  devDependencies: {}
};

var buildPlatformJson = {
  name: "survey-creator",
  version: packageJson.version,
  description:
    "Use SurveyJS Creator to create or edit JSON for SurveyJS Library.",
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
  license: "https://surveyjs.io/Licenses#BuildSurvey",
  files: [
    "survey-creator.css",
    "survey-creator.min.css",
    "survey-creator.js",
    "survey-creator.d.ts",
    "survey-creator.min.js"
  ],
  main: "survey-creator.js",
  repository: {
    type: "git",
    url: "https://github.com/surveyjs/survey-creator.git"
  },
  engines: {
    node: ">=0.10.0"
  },
  typings: "survey-creator.d.ts",
  peerDependencies: {
    bootstrap: "^3.3.6",
    jquery: "^3.1.1",
    "ace-builds": "^1.2.2"
  },
  dependencies: {
    "survey-knockout": "^" + packageJson.version,
    knockout: "^3.5.0"
  },
  devDependencies: {}
};

module.exports = function(options) {
  var packagePath = "./package/";
  var buildPath = "./build/";
  var extractCSS = new ExtractTextPlugin({
    filename:
      packagePath +
      (options.buildType === "prod"
        ? "surveyeditor.min.css"
        : "surveyeditor.css")
  });

  function createSVGBundle() {
    var options = {
      fileName: path.resolve(__dirname, "./src/svgbundle.html"),
      template: path.resolve(__dirname, "./svgbundle.pug"),
      svgoOptions: {
        plugins: [{ removeTitle: true }]
      },
      prefix: "icon-"
    };

    svgStoreUtils.filesMap(path.join("./src/images/**/*.svg"), files => {
      const fileContent = svgStoreUtils.createSprite(
        svgStoreUtils.parseFiles(files, options),
        options.template
      );

      fs.writeFileSync(options.fileName, fileContent);
    });
  }

  var percentage_handler = function handler(percentage, msg) {
    if (0 == percentage) {
      console.log("Build started... good luck!");
      createSVGBundle();
    } else if (1 == percentage) {
      if (options.buildType === "prod") {
        dts.bundle({
          name: "../../surveyeditor",
          main: packagePath + "typings/entries/index.d.ts",
          outputAsModuleFolder: true,
          headerText: dts_banner
        });

        replace.sync(
          {
            files: packagePath + "surveyeditor.d.ts",
            from: /export let\s+\w+:\s+\w+;/,
            to: ""
          },
          (error, changes) => {
            if (error) {
              return console.error("Error occurred:", error);
            }
            console.log("check me :     " + packagePath + "surveyeditor.d.ts");
            console.log("Modified files:", changes.join(", "));
          }
        );

        rimraf.sync(packagePath + "typings");
        fs.createReadStream("./README.md").pipe(
          fs.createWriteStream(packagePath + "README.md")
        );
      }

      if (options.libraryName === "SurveyCreator") {
        if (!fs.existsSync(buildPath)) {
          fs.mkdirSync(buildPath);
        }
        function copyToBuild(oldFile, newFile) {
          fs.createReadStream(packagePath + oldFile).pipe(
            fs.createWriteStream(buildPath + newFile)
          );
        }

        if (options.buildType === "prod") {
          copyToBuild("surveyeditor.min.js", "survey-creator.min.js");
          copyToBuild("surveyeditor.min.css", "survey-creator.min.css");
          copyToBuild("surveyeditor.d.ts", "survey-creator.d.ts");
          fs.createReadStream("./README.md").pipe(
            fs.createWriteStream(buildPath + "README.md")
          );
          fs.writeFileSync(
            buildPath + "package.json",
            JSON.stringify(buildPlatformJson, null, 2),
            "utf8"
          );
        } else {
          copyToBuild("surveyeditor.js", "survey-creator.js");
          copyToBuild("surveyeditor.css", "survey-creator.css");
        }
      }
    }
  };

  var config = {
    entry: {
      surveyeditor: path.resolve(__dirname, "./src/entries/index.ts")
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".scss"],
      alias: {
        tslib: path.join(__dirname, "./src/entries/helpers.ts")
      }
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: "ts-loader",
          options: {
            compilerOptions: {
              declaration: options.buildType === "prod",
              outDir: packagePath + "typings/"
            }
          }
        },
        {
          test: /\.scss$/,
          loader: extractCSS.extract({
            fallbackLoader: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  minimize: options.buildType === "prod"
                }
              },
              {
                loader: "sass-loader"
              }
            ]
          })
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
      filename:
        packagePath +
        "[name]" +
        (options.buildType === "prod" ? ".min" : "") +
        ".js",
      library: options.libraryName || "SurveyEditor",
      libraryTarget: "umd",
      umdNamedDefine: true
    },
    externals: {
      knockout: {
        root: "ko",
        commonjs2: "knockout",
        commonjs: "knockout",
        amd: "knockout"
      },
      "survey-knockout": {
        root: "Survey",
        commonjs2: "survey-knockout",
        commonjs: "survey-knockout",
        amd: "survey-knockout"
      }
    },
    plugins: [
      new webpack.WatchIgnorePlugin([/svgbundle\.html/]),
      new webpack.ProgressPlugin(percentage_handler),
      new webpack.DefinePlugin({
        "process.env.ENVIRONMENT": JSON.stringify(options.buildType),
        "process.env.VERSION": JSON.stringify(packageJson.version)
      }),
      new webpack.BannerPlugin({
        banner: banner
      }),
      extractCSS
    ],
    devtool: "inline-source-map"
  };

  if (options.buildType === "prod") {
    config.devtool = false;
    config.plugins = config.plugins.concat([
      new webpack.optimize.UglifyJsPlugin(),
      new GenerateJsonPlugin(
        packagePath + "package.json",
        packagePlatformJson,
        undefined,
        2
      )
    ]);
  }

  if (options.buildType === "dev") {
    config.plugins = config.plugins.concat([
      new webpack.LoaderOptionsPlugin({ debug: true })
    ]);
  }

  return config;
};
