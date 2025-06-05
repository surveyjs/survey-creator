const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = (env) => {
  const isProd = env.buildType === "prod";
  const emitDeclarations = !!env.emitDeclarations;
  const compilerOptions = emitDeclarations ? {} : {
    declaration: false,
    declarationDir: null
  };
  return {
    mode: isProd ? "production" : "development",
    devtool: isProd ? "source-map" : "eval-source-map",
    entry: {
      "survey-creator-core-presets": path.resolve(__dirname, "./src/entries/presets.ts"),
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: isProd ? "[name].min.js" : "[name].js",
      library: {
        root: "SurveyCreatorCorePresets",
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
                configFile: path.resolve(__dirname, "./tsconfig.presets.json"),
                compilerOptions
              }
            }
          ],
          exclude: /node_modules/
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
      })
    ]
  };
};