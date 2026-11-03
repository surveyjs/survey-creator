// The Tests widget's React tests.
//
// A second Jest project with its own roots: `tests-tester/` covers the React surface of the Tests
// widget (src/tester), and the main project's `tests/` never sees it. Both run on the one React this
// package develops against - the 17 in devDependencies - so `import "react"` inside src/tester and
// tests-tester resolves to the same install that survey-react-ui is resolved against below. That is
// the point of the explicit mapping: one React in one process, or two copies of it would each hold
// half the hooks.
//
// The tests mount through ReactDOM.render and take `act` from react-dom/test-utils, which is the API
// 17 has. `strictMode.test.tsx` mounts under StrictMode and pins that the widget survives it: on 17
// that is a double-invoked render (and useState/useMemo initialisers), not the effect teardown-and-
// remount that later Reacts add, so what it asserts is what 17 actually does.
module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: false,
  roots: ["tests-tester"],
  transform: {
    "^.+\.(t|j)sx?$": ["ts-jest", {
      diagnostics: false,
      tsconfig: "tsconfig.test.json"
    }]
  },
  moduleNameMapper: {
    "\.(css|scss)$": "<rootDir>/tests/empty-module.js",
    "\.(jpg|png)$": "<rootDir>/tests/empty-module.js",
    "^react(/.*)?$": "<rootDir>/node_modules/react$1",
    "^react-dom(/.*)?$": "<rootDir>/node_modules/react-dom$1",
    "^survey-core/tester$": "<rootDir>/node_modules/survey-core/tester.js",
    "^survey-core(.*)$": "<rootDir>/node_modules/survey-core$1",
    "^survey-creator-core/tester$": "<rootDir>/node_modules/survey-creator-core/tester.js",
    "^survey-creator-core$": "<rootDir>/node_modules/survey-creator-core",
    "^survey-react-ui$": "<rootDir>/node_modules/survey-react-ui",
    "^tslib$": "<rootDir>/node_modules/tslib",
  },
  testRegex: "/tests-tester/.*\.(test|spec)\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["jest-canvas-mock"],
};
