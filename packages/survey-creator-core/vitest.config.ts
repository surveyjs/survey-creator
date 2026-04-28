import { defineConfig } from "vitest/config";
import { resolve } from "path";

const root = __dirname;

// Stub plugin: intercepts imports of css/scss/asset/html files (relative or
// otherwise) and returns an empty module. Replaces Jest's moduleNameMapper
// entries that pointed at tests/empty-module.js. Vite's resolve.alias with
// regex does not match relative specifiers, so we use a resolver plugin.
const STUB_RE = /\.(css|scss|sass|less|jpg|jpeg|png|gif|svg|html?)$/i;
const stubAssets = {
  name: "survey-creator-core:stub-assets",
  enforce: "pre" as const,
  resolveId(id: string) {
    if (STUB_RE.test(id.split("?")[0])) return "\0empty-stub-module";
    return null;
  },
  load(id: string) {
    if (id === "\0empty-stub-module") return "export default \"\";";
    return null;
  },
};

// Aliases ported 1:1 from jest.config.js / jest.ui-preset-editor.config.js
// moduleNameMapper. Order is significant: more specific entries (e.g.
// "survey-core/themes") MUST come before less specific ones ("survey-core").
const sharedAliases = [
  // survey-core sub-paths (must come before bare "survey-core")
  { find: /^survey-core\/themes$/, replacement: resolve(root, "node_modules/survey-core/themes/index.js") },
  { find: /^survey\.i18n$/, replacement: resolve(root, "node_modules/survey-core/survey.i18n.js") },
  // survey-creator-core sub-paths (must come before bare "survey-creator-core")
  { find: /^survey-creator-core\/themes$/, replacement: resolve(root, "src/themes/index.ts") },
  // bare survey-core
  { find: /^survey-core$/, replacement: resolve(root, "node_modules/survey-core/survey.core.js") },
  { find: /^tslib$/, replacement: resolve(root, "node_modules/tslib") },
  { find: /^svgbundle$/, replacement: resolve(root, "tests/empty-module.js") },
];

// Per-suite alias for survey-creator-core differs between the two suites:
// - tests/        -> src/editorLocalization.ts
// - tests-presets -> src/entries/index.ts
const coreSuiteAliases = [
  ...sharedAliases,
  { find: /^survey-creator-core$/, replacement: resolve(root, "src/editorLocalization.ts") },
];

const presetsSuiteAliases = [
  ...sharedAliases,
  { find: /^survey-creator-core$/, replacement: resolve(root, "src/entries/index.ts") },
];

export default defineConfig({
  plugins: [stubAssets],
  test: {
    reporters: ["default", ["junit", { suiteName: "survey-creator-core" }]],
    outputFile: { junit: "./junit.xml" },
    coverage: {
      provider: "v8",
      reporter: ["json", "lcov", "text", "html", "text-summary", "cobertura"],
      reportsDirectory: "./coverage",
    },
    projects: [
      {
        plugins: [stubAssets],
        resolve: { alias: coreSuiteAliases },
        test: {
          name: "core",
          include: ["tests/**/*.{test,tests,spec}.{ts,tsx}"],
          environment: "jsdom",
          globals: true,
          setupFiles: ["./tests/vitest-jest-globals-shim.ts", "jest-canvas-mock", "./tests/vitest.setup.ts"],
        },
      },
      {
        plugins: [stubAssets],
        resolve: { alias: presetsSuiteAliases },
        test: {
          name: "presets",
          include: ["tests-presets/**/*.{test,tests,spec}.{ts,tsx}"],
          environment: "jsdom",
          globals: true,
          setupFiles: ["./tests/vitest-jest-globals-shim.ts", "jest-canvas-mock", "./tests/vitest.setup.ts"],
        },
      },
    ],
  },
});
