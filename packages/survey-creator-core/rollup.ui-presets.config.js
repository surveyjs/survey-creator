const defaultConfig = require("./rollup.config");
const path = require("path");
const input = { index: path.resolve(__dirname, "./src/ui-presets/index.ts") };
module.exports = () => {
  let options = {
    dir: path.resolve(__dirname, "./build/fesm/ui-presets"),
    tsconfig: path.resolve(__dirname, "./tsconfig.ui-presets.json")
  };
  const config = defaultConfig(options);
  config.input = input;
  return config;
};