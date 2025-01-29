module.exports = {
  testEnvironment: "jsdom",
  reporters: [
    "default",
    ["jest-junit", {
      "suiteNameTemplate": "{filepath}",
      "outputDirectory": ".",
      "outputName": "junit.xml"
    }]
  ],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "html", "text-summary", "cobertura"],
  roots: ["tests"],
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", {
      diagnostics: false,
      tsconfig: "tsconfig.test.json"
    }]
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/tests/empty-module.js",
    "\\.(jpg|png|svg)$": "<rootDir>/tests/empty-module.js",
    "\\.html?$": "<rootDir>/tests/empty-module.js",
    "survey-core/themes": "<rootDir>/node_modules/survey-core/themes/index.js",
    "survey.i18n": "<rootDir>/node_modules/survey-core/survey.i18n.js",
    "survey-creator-core/themes": "<rootDir>/src/themes/index.ts",
    "survey-creator-core": "<rootDir>/src/editorLocalization.ts",
    "survey-core": "<rootDir>/node_modules/survey-core/survey.core.js",
    "tslib": "<rootDir>/node_modules/tslib",
    "svgbundle": "<rootDir>/tests/empty-module.js",
  },
  testRegex: "\/tests\/.*\.(tests?|spec)\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/jest.config.js", "jest-canvas-mock"], //see https://github.com/hustcc/jest-canvas-mock/issues/2
};
