module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: false,
      tsConfig: "tsconfig.test.json",
    },
  },
  roots: ["tests"],
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
    "^.+\\.html?$": "<rootDir>/tests/template-loader.js",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/tests/empty-module.js",
    "@survey/creator/(.*)": "<rootDir>/../survey-creator/src/$1"
  },
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/jest.config.js", "jest-canvas-mock"], //see https://github.com/hustcc/jest-canvas-mock/issues/2
};
