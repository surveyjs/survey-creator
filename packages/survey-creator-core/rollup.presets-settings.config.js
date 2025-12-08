const defaultConfig = require("./rollup.config");
const path = require("path");
const input = { index: path.resolve(__dirname, "./src/presets-settings/index.ts") };
module.exports = () => {
  let options = {
    dir: path.resolve(__dirname, "./build/fesm/presets-settings"),
    tsconfig: path.resolve(__dirname, "./tsconfig.presets-settings.json")
  };
  const config = defaultConfig(options);
  config.input = input;
  return config;
};