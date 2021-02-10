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
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/tests/empty-module.js",
    "\\.(jpg|png)$": "<rootDir>/tests/empty-module.js",
    "@survey/creator/(.*)": "<rootDir>/../survey-creator-v2-core/src/$1",
    "survey-knockout":
      "<rootDir>/../survey-creator-v2-knockout/node_modules/survey-knockout",
  },
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/jest.config.js", "jest-canvas-mock"], //see https://github.com/hustcc/jest-canvas-mock/issues/2
};
