// The Tests widget's React tests, on React 18.
//
// The main package runs its tests on the React it develops against, which is 17, and that is left
// untouched: this is a second Jest project with its own roots and its own React, and neither can see
// the other's.
//
// Why 18 rather than 17. Two of the things this bundle is built on are only honest there.
// `useModel.ts` is hooks, so it cannot pretend to serve the main bundle's published 16.5 floor; and
// `strictMode.test.tsx` pins the teardown-and-remount that React 18's StrictMode performs, which React
// 17's StrictMode does not do at all - it double-invokes render, not effects, so under 17 that test
// would pass without exercising the thing it exists to catch. So `survey-creator-react/tester`
// declares React >= 18.1 as its own peer range, and the tests of it run there.
//
// The two installs live side by side under aliases (react18 / react18-dom in devDependencies), and the
// mapping below is what makes `import "react"` inside src/tester and tests-tester resolve to 18. Any
// module either of them pulls in - survey-react-ui included - resolves through the same entries, which
// is the point: one React in one process, or two copies of it would each hold half the hooks.
module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: false,
  roots: ["tests-tester"],
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", {
      diagnostics: false,
      tsconfig: "tsconfig.test.json"
    }]
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/tests/empty-module.js",
    "\\.(jpg|png)$": "<rootDir>/tests/empty-module.js",
    "^react-dom/client$": "<rootDir>/node_modules/react18-dom/client",
    "^react-dom/test-utils$": "<rootDir>/node_modules/react18-dom/test-utils",
    "^react-dom$": "<rootDir>/node_modules/react18-dom",
    "^react/jsx-runtime$": "<rootDir>/node_modules/react18/jsx-runtime",
    "^react/jsx-dev-runtime$": "<rootDir>/node_modules/react18/jsx-dev-runtime",
    "^react$": "<rootDir>/node_modules/react18",
    "^survey-core/tester$": "<rootDir>/node_modules/survey-core/tester.js",
    "^survey-core(.*)$": "<rootDir>/node_modules/survey-core$1",
    "^survey-creator-core/tester$": "<rootDir>/node_modules/survey-creator-core/tester.js",
    "^survey-creator-core$": "<rootDir>/node_modules/survey-creator-core",
    "^survey-react-ui$": "<rootDir>/node_modules/survey-react-ui",
    "^tslib$": "<rootDir>/node_modules/tslib",
  },
  testRegex: "/tests-tester/.*\\.(test|spec)\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["jest-canvas-mock"],
};
