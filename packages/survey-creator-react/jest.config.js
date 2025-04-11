module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  roots: ["tests"],
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", {
      diagnostics: false,
      tsconfig: "tsconfig.test.json"
    }]
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/tests/empty-module.js",
    "\\.(jpg|png)$": "<rootDir>/tests/empty-module.js",
    "^react(.*)$": "<rootDir>/node_modules/react$1",
    "^survey-core(.*)$": "<rootDir>/node_modules/survey-core$1",
    "survey-creator-core": "<rootDir>/node_modules/survey-creator-core",
    "survey-react-ui": "<rootDir>/node_modules/survey-react-ui",
    "tslib": "<rootDir>/node_modules/tslib",
  },
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/jest.config.js", "jest-canvas-mock"], //see https://github.com/hustcc/jest-canvas-mock/issues/2
};
