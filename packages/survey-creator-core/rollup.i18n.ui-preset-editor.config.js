const defaultConfig = require("./rollup.config");
const path = require("path");
const fs = require("fs");
const input = {};

function patchEntries() {
  fs.readdirSync(path.resolve(__dirname, "./src/ui-preset-editor/localization")).forEach(file => {
    var extension = path.extname(file);
    if (extension.toLowerCase() === ".ts") {
      input[`ui-preset-editor/i18n/${path.basename(file, extension)}`] = (path.resolve(__dirname, "./src/ui-preset-editor/localization") + "/" + file);
    }
  });
  input["ui-preset-editor/i18n/index"] = path.resolve(__dirname, "./src/ui-preset-editor/i18n.ts");
}

module.exports = () => {
  let options = {
    tsconfig: path.resolve(__dirname, "./tsconfig.i18n.ui-preset-editor.json")
  };
  const config = defaultConfig(options);
  patchEntries();
  config.input = input;
  config.external = ["survey-creator-core"];
  return config;
};