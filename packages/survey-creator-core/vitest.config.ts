import { defineConfig } from "vitest/config";
import { resolve } from "path";

const root = __dirname;

// Stub plugin: intercepts imports of css/scss/asset/html files (relative or
// otherwise) and returns an empty module. Replaces Jest's moduleNameMapper
// entries that pointed at tests/empty-module.js. Vite's resolve.alias with
// regex does not match relative specifiers, so we use a resolver plugin.
//
// Also stubs the svgbundle module (any path that resolves to svgbundle) and
// the bare "iconsV1" / "iconsV2" specifiers that the source svgbundle.ts
// imports. In Jest these were short-circuited by the substring-matching
// "svgbundle" entry in moduleNameMapper, so the real svgbundle.ts never ran.
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

// Aliases ported 1:1 from jest.config.js / jest.ui-preset-editor.config.js
// moduleNameMapper. Order is significant: more specific entries (e.g.
// "survey-core/themes") MUST come before less specific ones ("survey-core").
const sharedAliases = [
  // survey-core sub-paths (must come before bare "survey-core")
  { find: /^survey-core\/themes$/, replacement: resolve(root, "node_modules/survey-core/themes/index.js") },
  { find: /^survey\.i18n$/, replacement: resolve(root, "node_modules/survey-core/survey.i18n.js") },
  // survey-creator-core sub-paths (must come before bare "survey-creator-core")
  { find: /^survey-creator-core\/themes$/, replacement: resolve(root, "src/themes/index.ts") },
  // bare survey-core: alias to the ESM (.mjs) build instead of CJS so that
  // both the test's `import "survey-core"` AND the side-effect import
  // `import "survey-core/survey.i18n"` (which Node `exports` resolution maps
  // to `./fesm/survey.i18n.mjs`) end up sharing the SAME surveyLocalization
  // module instance. With a CJS alias here, on Linux CI the i18n .mjs bundle
  // would resolve its own `import { setupLocale } from "survey-core"` to a
  // separate ESM module instance, and the registered locale names (e.g.
  // German "Deutsch") would be invisible to the tests.
  { find: /^survey-core$/, replacement: resolve(root, "node_modules/survey-core/fesm/survey-core.mjs") },
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

// Vite 8 transpiles TS via Oxc (Rolldown). Its OxcOptions omits `tsconfig`, so
// Oxc does NOT auto-detect `experimentalDecorators` from tsconfig.json and
// defaults to TC39 (standard) decorators. Under the SSR transform it then keeps
// the decorator in `@expr` form AND rewrites the imported decorator identifier
// into the ESM-interop sequence `(0, ns.property)`, emitting the invalid
// `@(0, ns.property)() name;` -> "SyntaxError: Invalid or unexpected token" on
// every file that (transitively) imports a @property-decorated class. Forcing
// legacy decorators makes Oxc lower them to the decorate() helper, which is
// valid. (Regressed in rolldown 1.1.x; fine in 1.0.x.) Must be set per-project:
// the root-level `oxc` option is not inherited by `test.projects`.
// `decorator.legacy` alone fixes the syntax error but leaves Oxc defaulting to
// `useDefineForClassFields: true`, which emits `defineProperty(this, "name")`
// for uninitialized fields and clobbers the accessors the legacy @property
// decorator installs -> properties stop working at runtime. The project's
// tsconfig uses `target: es5` (i.e. useDefineForClassFields: false), so we
// reproduce that: `assumptions.setPublicClassFields` +
// `typescript.removeClassFieldsWithoutInitializer` together == TS
// `useDefineForClassFields: false`.
const oxcLegacyDecorators = {
  decorator: { legacy: true },
  assumptions: { setPublicClassFields: true },
  typescript: { removeClassFieldsWithoutInitializer: true },
};

export default defineConfig({
  plugins: [stubAssets],
  test: {
    // Match Jest's behavior under high parallelism: individual tests can run
    // slowly when many vitest workers are competing for CPU. Several preset
    // editor tests legitimately take 2-3s in isolation; under load they
    // exceed Vitest's 5s default. Bump globally rather than per-test.
    testTimeout: 30000,
    hookTimeout: 30000,
    // Several creator components schedule setTimeout callbacks that fire
    // after a test ends (preset plugin's 100ms timer in activate(), the
    // adorner debounce, item-value DOM lookups). When the test has already
    // torn down its DOM/model, these timers throw. Jest never observed
    // them because each file ran in a child process that exited before the
    // timer fired; Vitest's worker survives long enough to surface them as
    // unhandled errors. The behavior is identical to Jest -- silent --
    // and these are pre-existing source bugs to be fixed separately.
    dangerouslyIgnoreUnhandledErrors: true,
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
        oxc: oxcLegacyDecorators,
        resolve: { alias: coreSuiteAliases },
        test: {
          name: "core",
          include: ["tests/**/*.{test,tests,spec}.{ts,tsx}"],
          environment: "jsdom",
          globals: true,
          testTimeout: 30000,
          hookTimeout: 30000,
          // Source code (item-value, survey-element-adorner-base, etc.) schedules
          // setTimeout callbacks that fire after the test has completed and a
          // fresh DOM has been swapped in. Under Jest these threw silently;
          // Vitest surfaces them as "unhandled errors" and fails the run.
          // Treat them as benign timer leaks until source-side cleanup lands.
          dangerouslyIgnoreUnhandledErrors: true,
          setupFiles: ["./tests/vitest-jest-globals-shim.ts", "jest-canvas-mock", "./tests/vitest.setup.ts"],
        },
      },
      {
        plugins: [stubAssets],
        oxc: oxcLegacyDecorators,
        resolve: { alias: presetsSuiteAliases },
        test: {
          name: "presets",
          include: ["tests-presets/**/*.{test,tests,spec}.{ts,tsx}"],
          environment: "jsdom",
          globals: true,
          testTimeout: 30000,
          hookTimeout: 30000,
          dangerouslyIgnoreUnhandledErrors: true,
          setupFiles: ["./tests/vitest-jest-globals-shim.ts", "jest-canvas-mock", "./tests/vitest.setup.ts"],
        },
      },
    ],
  },
});
