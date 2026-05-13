import { defineConfig } from "vitest/config";
import { resolve } from "path";

const root = __dirname;

const STUB_RE = /\.(css|scss|sass|less|jpg|jpeg|png|gif|svg|html?)$/i;
const SVGBUNDLE_RE = /(^|[\\/])svgbundle(\.[tj]sx?)?$/i;
const BARE_STUBS = new Set(["iconsV1", "iconsV2", "svgbundle"]);
const stubAssets = {
  name: "survey-creator-core:stub-assets",
  enforce: "pre" as const,
  resolveId(id: string) {
    const clean = id.split("?")[0];
    if (STUB_RE.test(clean)) return "\0empty-stub-module";
    if (BARE_STUBS.has(clean)) return "\0empty-stub-module";
    if (SVGBUNDLE_RE.test(clean)) return "\0empty-stub-module";
    return null;
  },
  load(id: string) {
    if (id === "\0empty-stub-module") return "export default \"\"; export const iconsV1 = {}; export const iconsV2 = {}; export const svgBundle = {};";
    return null;
  },
};

const sharedAliases = [
  { find: /^survey-core\/themes$/, replacement: resolve(root, "node_modules/survey-core/themes/index.js") },
  { find: /^survey\.i18n$/, replacement: resolve(root, "node_modules/survey-core/survey.i18n.js") },
  { find: /^survey-creator-core\/themes$/, replacement: resolve(root, "src/themes/index.ts") },
  { find: /^survey-core$/, replacement: resolve(root, "node_modules/survey-core/fesm/survey-core.mjs") },
  { find: /^tslib$/, replacement: resolve(root, "node_modules/tslib") },
  { find: /^svgbundle$/, replacement: resolve(root, "tests/empty-module.js") },
];

const coreSuiteAliases = [
  ...sharedAliases,
  { find: /^survey-creator-core$/, replacement: resolve(root, "src/editorLocalization.ts") },
];

const presetsSuiteAliases = [
  ...sharedAliases,
  { find: /^survey-creator-core$/, replacement: resolve(root, "src/entries/index.ts") },
];

const isCI = Boolean(process.env.CI);

export default defineConfig({
  plugins: [stubAssets],
  test: {
    testTimeout: 30000,
    hookTimeout: 30000,
    dangerouslyIgnoreUnhandledErrors: true,
    reporters: isCI ? ["default", ["junit", { suiteName: "survey-creator-core" }]] : ["default"],
    outputFile: isCI ? { junit: "./junit.xml" } : undefined,
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
          testTimeout: 30000,
          hookTimeout: 30000,
          dangerouslyIgnoreUnhandledErrors: true,
          setupFiles: ["./tests/survey-core-getRGBA-mock-setup.ts", "./tests/vitest-jest-globals-shim.ts", "jest-canvas-mock", "./tests/vitest.setup.ts"],
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
          testTimeout: 30000,
          hookTimeout: 30000,
          dangerouslyIgnoreUnhandledErrors: true,
          setupFiles: ["./tests/survey-core-getRGBA-mock-setup.ts", "./tests/vitest-jest-globals-shim.ts", "jest-canvas-mock", "./tests/vitest.setup.ts"],
        },
      },
    ],
  },
});
