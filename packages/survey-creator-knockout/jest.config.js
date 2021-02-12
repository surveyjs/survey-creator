module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: false,
      tsconfig: "tsconfig.test.json",
    },
  },
  roots: ["tests"],
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
    "^.+\\.html?$": "<rootDir>/tests/template-loader.js",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/tests/empty-module.js",
    "\\.(jpg|png)$": "<rootDir>/tests/empty-module.js",
    "survey-knockout":
      "<rootDir>/node_modules/survey-knockout",
  },
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/jest.config.js", "jest-canvas-mock"], //see https://github.com/hustcc/jest-canvas-mock/issues/2
};
