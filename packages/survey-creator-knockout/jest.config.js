module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: false,
      tsconfig: "tsconfig.test.json",
    },
  },
  collectCoverage: true,
  roots: ["tests"],
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
    "^.+\\.html?$": "<rootDir>/tests/template-loader.js",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/tests/empty-module.js",
    "\\.(jpg|png)$": "<rootDir>/tests/empty-module.js",
    "survey-core": "<rootDir>/node_modules/survey-core",
    "survey-creator-core": "<rootDir>/node_modules/survey-creator-core",
    "survey-knockout-ui": "<rootDir>/node_modules/survey-knockout-ui",
    "tslib": "<rootDir>/node_modules/tslib",
  },
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/jest.config.js", "jest-canvas-mock"], //see https://github.com/hustcc/jest-canvas-mock/issues/2
};
