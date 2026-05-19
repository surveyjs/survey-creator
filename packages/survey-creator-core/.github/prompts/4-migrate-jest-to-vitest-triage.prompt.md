---
description: "Phase 4 — Triage failing Vitest tests by category (mock hoisting, fake timers, jsdom, CSS/asset imports). Fix patterns, not individual tests."
name: "Jest→Vitest Phase 4: Triage"
agent: "agent"
---

# Phase 4 — Triage Failing Tests

**Goal:** Get `npm run test:vitest` to a clean green run. Fix **categories** of failures, not one-off tests.

## Prerequisites

Phase 3 codemod committed. `scripts/jest-to-vitest-report.txt` exists.

## Process

1. Run the full suite and capture output:
   ```powershell
   npm run test:vitest 2>&1 | Tee-Object -FilePath vitest-failures.log
   ```
2. **Group failures by root cause**, not by file. Most failures fall into 5–8 categories.
3. Fix one category at a time. After each category, re-run the suite and re-categorize remaining failures.
4. **If a fix is a code change in test files, it must be applied via the codemod.** Update `scripts/jest-to-vitest.mjs` and re-run it. Hand edits are only acceptable in:
   - `vitest.config.ts`
   - Setup files
   - The codemod script itself
   - Source files under `src/` (if a genuine bug is found)

## Known Failure Categories

### A. `vi.mock` hoisting / outer-scope references

Symptom: `ReferenceError: Cannot access 'X' before initialization` or mock factory sees `undefined`.

Fix pattern: wrap outer references in `vi.hoisted`:

```ts
const mocks = vi.hoisted(() => ({ myThing: vi.fn() }));
vi.mock("../path", () => ({ myThing: mocks.myThing }));
```

Update the codemod to detect `vi.mock(path, () => { ... uses outer var ... })` and emit the `vi.hoisted` wrapper, OR add a lint that flags it.

### B. Fake timer behavior differences

Symptom: tests using `setTimeout`/`requestAnimationFrame`/`queueMicrotask` behave differently.

Vitest's `vi.useFakeTimers()` mocks more than Jest by default. To match Jest exactly:

```ts
vi.useFakeTimers({
  toFake: ["setTimeout", "clearTimeout", "setInterval", "clearInterval", "Date"],
});
```

Decide once for the whole suite — put it in a setup file, not in each test.

### C. CSS / SCSS / SVG / asset imports

Symptom: `Failed to parse source for import analysis` on `.css`/`.scss`/`.svg`.

Fix in `vitest.config.ts`:

```ts
resolve: {
  alias: [
    { find: /\.(css|scss|sass|less)$/, replacement: "<rootDir>/tests/stubs/style-stub.ts" },
    { find: /\.svg$/, replacement: "<rootDir>/tests/stubs/svg-stub.ts" },
  ],
},
```

Create stub files that export an empty object or a string.

### D. ESM dependencies not transformed

Symptom: `SyntaxError: Cannot use import statement outside a module` from `node_modules`.

Fix in `vitest.config.ts`:

```ts
test: {
  server: { deps: { inline: ["survey-core", "survey-knockout-ui", /* ... */] } },
},
```

Mirror Jest's `transformIgnorePatterns` exclusions.

### E. jsdom polyfills missing

Symptom: `ResizeObserver is not defined`, `IntersectionObserver is not defined`, `matchMedia is not a function`.

Fix in setup file (port from existing Jest setup if present, or add new):

```ts
globalThis.ResizeObserver = class { observe(){} unobserve(){} disconnect(){} };
globalThis.matchMedia ??= () => ({ matches: false, addListener(){}, removeListener(){} });
```

### F. `requireActual` / `importActual` async

Symptom: `vi.importActual` returns a Promise.

Fix: rewrite usage to `await`:

```ts
const actual = await vi.importActual<typeof import("../path")>("../path");
```

These were flagged by the codemod report. Fix all of them in one pass.

### G. `expect.extend` / custom matchers

Symptom: custom matcher TypeScript types missing.

Fix: in setup file, add:

```ts
import "vitest";
declare module "vitest" {
  interface Assertion<T> { myMatcher(): T; }
}
```

### H. Snapshot path differences

Symptom: snapshots created in unexpected location.

Vitest stores snapshots in `__snapshots__/` next to the test by default — same as Jest. If existing snapshots are elsewhere, configure `resolveSnapshotPath` in `vitest.config.ts`.

### I. `jest.setTimeout` semantics

Symptom: timeouts firing at wrong time.

`jest.setTimeout(N)` set the test timeout; `vi.setConfig({ testTimeout: N })` works at file scope but is awkward. Prefer setting `testTimeout` in `vitest.config.ts` globally, or use the `{ timeout: N }` option on `it`/`describe`:

```ts
it("slow test", { timeout: 30000 }, async () => { ... });
```

## Reporting

After each pass, write a short status update:

- Total tests / passing / failing
- Categories addressed in this pass
- Categories remaining
- Any flaky tests (failing intermittently — flag for separate investigation)

## Acceptance Criteria

- `npm run test:vitest` exits 0.
- No `// TODO(vitest-migration)` comments remain in test files.
- All categories in the codemod report resolved.
- Codemod script updated for any reusable transforms.
- Commit messages: `fix(test): vitest triage — <category>` per category.

## Do NOT in this phase

- Do NOT remove Jest yet.
- Do NOT touch any CI / Azure DevOps `.yml` pipeline files. The team updates pipelines manually.
- Do NOT skip flaky tests with `it.skip` to "make it green" — investigate and either fix or document.
