const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = (env) => {
  const isProd = env.buildType === "prod";
  const emitDeclarations = !!env.emitDeclarations;
  const emitStyles = !!env.emitStyles;
  const compilerOptions = emitDeclarations ? {} : {
    declaration: false,
    declarationDir: null
  };
  return {
    mode: isProd ? "production" : "development",
    devtool: isProd ? "source-map" : "eval-source-map",
    entry: {
      "index": path.resolve(__dirname, "./src/ui-preset-editor/index.ts"),
    },
    output: {
      path: path.resolve(__dirname, "build/ui-preset-editor"),
      filename: "[name]" + (isProd ? ".min.js" : ".js"),
      library: {
        root: "SurveyCreatorUIPresetEditorCore",
        amd: "[dashedname]",
        commonjs: "[dashedname]",
      },
      libraryTarget: "umd",
      globalObject: "this",
      umdNamedDefine: true
    },
    resolve: {
      extensions: [".ts", ".js", ".json", ".css", ".scss"]
    },
    externals: {
      "survey-core": {
        root: "Survey",
        commonjs2: "survey-core",
        commonjs: "survey-core",
        amd: "survey-core"
      },
      "survey-creator-core": {
        root: "SurveyCreatorCore",
        commonjs2: "survey-creator-core",
        commonjs: "survey-creator-core",
        amd: "survey-creator-core"
      }
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                configFile: path.resolve(__dirname, "./tsconfig.ui-preset-editor.json"),
                compilerOptions
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.s(c|a)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: env.buildType !== "prod",
              },
            },
            {
              loader: "sass-loader",
              options: {
                api: "modern",
                sourceMap: env.buildType !== "prod",
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ["svg-inline-loader"]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.VERSION": JSON.stringify(require("./package.json").version),
        "process.env.NODE_ENV": JSON.stringify(isProd ? "production" : "development")
      }),
      new RemoveEmptyScriptsPlugin(),
      new MiniCssExtractPlugin({
        filename: isProd ? "index.min.css" : "index.css"
      })
    ]
  };
};