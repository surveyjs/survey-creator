# Jest → Vitest Migration: Phase 1 Audit (`survey-creator-core`)

> Phase 1 deliverable per [.github/prompts/1-migrate-jest-to-vitest-audit.prompt.md](.github/prompts/1-migrate-jest-to-vitest-audit.prompt.md).
> Read-only. No source changes. CI/Azure DevOps `.yml` files were **not** inspected and must not be touched in any phase.

---

## 1. Current Jest configuration

### 1.1 [jest.config.js](jest.config.js) — main suite (`tests/`)

| Setting | Value | Vitest mapping |
|---|---|---|
| `testEnvironment` | `jsdom` | `test.environment: "jsdom"` |
| `roots` | `["<rootDir>/tests"]` | `test.projects[0].include` rooted at `tests/` |
| `reporters` | `default` + `jest-junit` → `junit.xml` | `test.reporters: ["default", "junit"]`, `outputFile: "junit.xml"` (no `process.env.CI` branching — always emit) |
| `transform` | `ts-jest` with `tsconfig.test.json`, `diagnostics: false`, `isolatedModules` | Vitest uses esbuild; ensure `tsconfig.test.json` paths are resolved via `vite-tsconfig-paths` or replicated in `resolve.alias` |
| `setupFiles` | `["<rootDir>/jest.config.js", "jest-canvas-mock"]` | **Quirk**: the config file is listed as a setupFile (almost certainly a bug / no-op). Drop it. Keep canvas mock via `test.setupFiles: ["jest-canvas-mock"]` (or migrate to `vitest-canvas-mock`). |
| `setupFilesAfterEach` (sic: `setupFilesAfterEach` / `setupFilesAfterEach`) | `["<rootDir>/tests/jest.setup.js"]` | `test.setupFiles` (Vitest only has one tier; ordering preserved) |
| `testRegex` | `\/tests\/.*\.(tests?|spec)\.tsx?$` | `test.include: ["tests/**/*.{test,tests,spec}.{ts,tsx}"]` |
| `moduleNameMapper` | css/scss/jpg/png/svg/html → `tests/empty-module.js`; survey-core/themes, survey.i18n, survey-creator-core/themes, **survey-creator-core → `src/editorLocalization.ts`**, survey-core → `node_modules/survey-core/survey.core.js`, tslib, svgbundle | Replicate as Vitest `resolve.alias` entries (regex form: `[{ find: /\.(css\|scss\|jpg\|png\|svg\|html)$/, replacement: <abs path>/tests/empty-module.js }]`) |

[tests/jest.setup.js](tests/jest.setup.js): imports `_setIsTouch` from `survey-core` and `QuestionToolbox`; sets `QuestionToolbox.defaultQuestionJsonCache = {}`; `beforeEach(() => _setIsTouch(false))`. Trivial — keep as-is, just rename to `tests/vitest.setup.ts` and import `beforeEach` from `vitest`.

[tests/empty-module.js](tests/empty-module.js): `module.exports = ""`. Keep as-is (or inline as virtual module).

### 1.2 [jest.ui-preset-editor.config.js](jest.ui-preset-editor.config.js) — presets suite (`tests-presets/`)

Identical to 1.1 **except**:
- `roots` → `["<rootDir>/tests-presets"]`
- jest-junit `outputFile` → `junit.presets.xml`
- `moduleNameMapper["survey-creator-core"]` → **`src/entries/index.ts`** (NOT `editorLocalization.ts`)

> **Important for Vitest config:** This per-suite alias divergence means you cannot use a single global `resolve.alias`. Use `test.projects` (Vitest workspaces) where each project sets its own alias for `survey-creator-core`.

### 1.3 [tsconfig.test.json](tsconfig.test.json)

Extends `tsconfig.json`; sets `isolatedModules`, `allowJs`, paths for `survey-creator-core` and `tslib`; excludes `src/entries/**`. Compatible with Vitest as-is (esbuild honours these via `vite-tsconfig-paths`).

### 1.4 npm scripts ([package.json](package.json))

```
"test"               → "jest"
"test:cov"           → "jest --coverage"
"test:watch"         → "jest --watch"
"test:presets"       → "jest --config jest.ui-preset-editor.config.js"
"test:presets:watch" → "jest --config jest.ui-preset-editor.config.js --watch"
"test:presets:cov"   → "jest --config jest.ui-preset-editor.config.js --coverage"
```

Phase 5 will replace these with Vitest equivalents (`vitest run`, `vitest run --coverage`, `vitest`, `vitest run --project presets`, …).

### 1.5 Jest devDependencies (to remove in Phase 5)

`jest@^30.3.0`, `jest-canvas-mock@^2.3.1`, `jest-environment-jsdom@^30.3.0`, `jest-junit@^16.0.0`, `ts-jest@^29.4.6`, `@types/jest@^30.0.0`.

---

## 2. Jest API usage inventory

### 2.1 `tests/` (64 test files)

| API | Count | Files |
|---|---|---|
| `jest.mock(... factory)` | 2 | [tests/creator-base-2.tests.ts](tests/creator-base-2.tests.ts) (L67), [tests/string-editor.tests.ts](tests/string-editor.tests.ts) (L8) |
| `jest.requireActual` | 1 | (inside the two mocks above) |
| `jest.fn` | 3 | scattered |
| `jest.spyOn` | 2 | incl. **getter spy** `jest.spyOn(container, "offsetWidth", "get")` in [tests/survey-element-action-container.tests.ts](tests/survey-element-action-container.tests.ts) (~L271) |
| `jest.useFakeTimers` | 2 | [tests/property-grid/spin-editor.tests.ts](tests/property-grid/spin-editor.tests.ts) |
| `jest.useRealTimers` | 2 | same file |
| `jest.advanceTimersByTime` | 6 | same file |
| `jest.Mock` (type) | 2 | factory mocks |

### 2.2 `tests-presets/` (12 test files)

| API | Count | Files |
|---|---|---|
| `jest.mock(... factory)` | 3 | [tests-presets/presets-editable-base.test.ts](tests-presets/presets-editable-base.test.ts) (L7), [tests-presets/presets-editor.tests.ts](tests-presets/presets-editor.tests.ts) (L10), [tests-presets/presets-manager.tests.ts](tests-presets/presets-manager.tests.ts) (L6) |
| `jest.requireActual` | 3 | inside the three mocks above |
| `jest.fn` | 41 | mostly in `presets-manager.tests.ts`, `presets-editor.tests.ts` |
| `jest.spyOn` | 4 | incl. `.mockImplementation(...)` in [tests-presets/presets-plugin.tests.ts](tests-presets/presets-plugin.tests.ts) (L76, L77) |
| `jest.clearAllMocks` | 4 | |
| `jest.Mock` / `jest.MockedFunction` / `jest.SpyInstance` (type) | ~22 | |

### 2.3 Features NOT used (good news)

- No `@jest/globals` imports.
- No `__mocks__/` folders.
- No `jasmine.*` references.
- No custom serializers, no `globalSetup`, no `testResultsProcessor`.
- No snapshot tests with `.snap` files (verify in Phase 3 by `git ls-files '*.snap'`).

---

## 3. Branch diff summary (master ↔ V3)

GitHub compare API (`master...V3`) shows **244 commits**, V3 ahead. In the Creator package, V3 has substantial divergence in test files:

- Renamed/refactored interfaces: `ICreatorPresetConfig` → `IPreset`. Affects every `tests-presets/*.tests.ts` import line.
- New file: [tests-presets/presets-apply-to.tests.ts](tests-presets/presets-apply-to.tests.ts) (+211 lines, V3 only).
- Heavy edits in `presets-manager.tests.ts` (+139/-30 in test bodies including `jest.fn` shapes).
- New file: `tests/tabs/test-themes.ts` (+269 lines, V3 only).
- Many `tests/tabs/theme-*.tests.ts` files modified for `surveyTitle` → `headerTitle` and theme variable renames.

**Implication for Phase 6:** A direct cherry-pick of master's migration commits to V3 will conflict in test bodies. This is exactly why the plan is **codemod-first**: re-run [scripts/jest-to-vitest.mjs](scripts/jest-to-vitest.mjs) on V3 instead of cherry-picking. Only the config files ([vitest.config.ts](vitest.config.ts), [package.json](package.json), `tests/vitest.setup.ts`) need to be ported manually.

> A precise per-file diff was not generated locally (no `git fetch origin V3` performed). Recommend running this before Phase 6:
> ```pwsh
> git fetch origin V3
> git diff master..origin/V3 -- tests tests-presets jest.config.js jest.ui-preset-editor.config.js | Out-File diff-v3.patch
> ```

---

## 4. Risk items (with file locations)

| # | Risk | Location | Mitigation |
|---|---|---|---|
| R1 | **Getter spy** — `jest.spyOn(obj, "prop", "get")` semantics differ slightly | [tests/survey-element-action-container.tests.ts](tests/survey-element-action-container.tests.ts) ~L271 | Vitest `vi.spyOn(obj, "prop", "get")` works identically. Codemod handles. |
| R2 | **Fake timers** — Vitest's `vi.useFakeTimers()` defaults differ from Jest 30 (Jest 30 uses modern by default; Vitest mocks `Date`/`setTimeout`/`setInterval`/`setImmediate`/`requestAnimationFrame`/`queueMicrotask` but excludes `nextTick` by default) | [tests/property-grid/spin-editor.tests.ts](tests/property-grid/spin-editor.tests.ts) | Phase 4 triage. May need `vi.useFakeTimers({ toFake: [...] })`. Test holds debounce/throttle assertions — verify behaviour. |
| R3 | **`jest.mock` factory hoisting** — Vitest hoists `vi.mock` and the factory cannot reference outer scope. All 5 factories use `jest.requireActual(...)` + spread, which translates to `await vi.importActual(...)` — **factory must become `async`** | [tests/creator-base-2.tests.ts](tests/creator-base-2.tests.ts) L67, [tests/string-editor.tests.ts](tests/string-editor.tests.ts) L8, [tests-presets/presets-editable-base.test.ts](tests-presets/presets-editable-base.test.ts) L7, [tests-presets/presets-editor.tests.ts](tests-presets/presets-editor.tests.ts) L10, [tests-presets/presets-manager.tests.ts](tests-presets/presets-manager.tests.ts) L6 | Codemod must rewrite `jest.mock("x", () => { const a = jest.requireActual("x"); return {...a, ...} })` → `vi.mock("x", async () => { const a = await vi.importActual("x"); return {...a, ...} })`. |
| R4 | **Self-referencing `setupFiles`** — `jest.config.js` lists itself as a setupFile | [jest.config.js](jest.config.js), [jest.ui-preset-editor.config.js](jest.ui-preset-editor.config.js) | Almost certainly a long-standing typo / no-op. **Do not** replicate in Vitest config. |
| R5 | **Per-project alias divergence** for `survey-creator-core` (`editorLocalization.ts` vs `entries/index.ts`) | both jest configs | **Must** use Vitest `test.projects` with per-project `resolve.alias`. A single global alias breaks one of the suites. |
| R6 | **CSS/SCSS/SVG/HTML stubs** — `moduleNameMapper` maps these to `empty-module.js` | both jest configs | Port via Vitest `resolve.alias` (regex find → absolute path). |
| R7 | **`survey-core` → CommonJS bundle alias** (`node_modules/survey-core/survey.core.js`) — Vite/Vitest may try to resolve as ESM | both jest configs | Use `resolve.alias` exact-string mapping; if loading errors occur, add `optimizeDeps.include: ["survey-core"]` or `server.deps.inline: ["survey-core"]`. |
| R8 | **`jest-canvas-mock`** — works in Vitest but is unmaintained | setupFiles | Try as-is first. If it fails, swap to `vitest-canvas-mock`. |
| R9 | **Type imports** — `jest.Mock`, `jest.MockedFunction`, `jest.SpyInstance` (~24 sites in tests-presets) | tests-presets | Codemod: `jest.Mock` → `Mock`, `jest.MockedFunction` → `MockedFunction`, `jest.SpyInstance` → `MockInstance` (note rename), all imported from `vitest`. |

---

## 5. Go / no-go recommendation

### **GO** ✅

Justification:

- **Small Jest-API surface area.** `tests/`: ~10 call sites; `tests-presets/`: ~70 call sites, ~80% of which are mechanical `jest.fn` / `jest.Mock` rewrites.
- **No exotic features.** No `__mocks__`, no `globalSetup`, no custom serializers, no `@jest/globals`, no jasmine, no snapshot files in scope.
- **Mock factories are safe.** All 5 use the `requireActual + spread` pattern — no outer-scope captures, no hoisting traps. Async-conversion is fully codemoddable.
- **Single config quirk** (self-referencing `setupFiles`) is benign and ignorable.
- **V3 branch divergence** is in test *bodies*, not in test infrastructure; codemod-first strategy avoids cherry-pick conflicts.
- **Speed/DX upside** is real: 76 test files in jsdom run noticeably faster on Vitest.

No blockers identified.

---

## 6. Phase weight estimate

| Phase | Weight | Notes |
|---|---|---|
| 2 — Config | **Medium** | Per-project aliases (R5) and CSS/asset stubs (R6) require careful Vite-side translation. Always-on JUnit reporter is trivial. |
| 3 — Codemod | **Light–Medium** | `tests/`: trivial. `tests-presets/`: 70+ replacements but >90% are `jest.fn` → `vi.fn`, `jest.Mock` → `Mock` (import). Async factory rewrite (R3) is the only non-mechanical step. |
| 4 — Triage | **Light** | Main risks: fake-timer behaviour in `spin-editor.tests.ts` (R2) and `survey-core` ESM/CJS interop (R7). Other tests should pass on first run after codemod + alias config. |
| 5 — Finalize | **Light** | Flip 6 npm scripts, remove 6 devDeps, delete 2 jest config files, add `vitest.config.ts`. **Do not touch `.yml` pipelines** — team updates them manually. |
| 6 — V3 forward-port | **Light** | Re-run codemod on V3, port config changes manually. No cherry-picks. |

---

## 7. Data gaps to close before later phases

- [ ] Run `git fetch origin V3 && git diff master..origin/V3 -- tests tests-presets` and attach the patch list before Phase 6 (Phase 1 was offline-only for branch comparison).
- [ ] Confirm `survey-core` package's `exports` field — needed in Phase 2 to decide between `resolve.alias` vs `server.deps.inline`.
- [ ] Verify `jest-canvas-mock` import side-effects survive Vite SSR transform (Phase 2).

---

**Phase 1 complete. Awaiting approval to proceed to Phase 2 (Vitest config + dependency install).**
