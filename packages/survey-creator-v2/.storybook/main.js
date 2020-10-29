const path = require("path");

var TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [`../stories/*.stories.*`],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-events",
    "@storybook/addon-jest",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-viewport",
    "storybook-addon-designs",
    // "@storybook/addon-storyshots",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules = [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "ts-loader",
          options: {
            // configFile: path.resolve(__dirname, "../tsconfig.json"),
          }
        },
      ],
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                require.resolve('@babel/preset-env'),
                {
                  // https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
                  useBuiltIns: 'entry',
                  corejs: {
                    version: '3.6',
                    proposals: true
                  },
                  targets: 'defaults',
                  // debug: true,
                }
              ],
            ]
          }
        }
      ],
    }, {
      test: /\.(sa|sc|c)ss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    }, {
      test: /\.html?$/,
      use: ["html-loader"],
    }];

    config.resolve.extensions.push(".ts", ".js", ".tsx", ".css", ".scss");
    config.resolve.plugins.push(new TsconfigPathsPlugin(/*{ configFile: path.resolve(__dirname, "../tsconfig.json"), logLevel: "info", extensions: [ ".ts", ".tsx", ".js", ".jsx" ] }*/));

    // console.log(JSON.stringify(config, null, 4));

    // Return the altered config
    return config;
  },
};
