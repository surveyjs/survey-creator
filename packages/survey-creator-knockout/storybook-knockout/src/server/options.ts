// tslint:disable-next-line: no-var-requires
const packageJson = require("../../package.json");

export default {
  packageJson,
  framework: "knockout",
  frameworkPresets: [require.resolve("./framework-preset-knockout.js")],
};
