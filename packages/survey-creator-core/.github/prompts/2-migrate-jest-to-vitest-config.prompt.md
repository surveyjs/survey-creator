---
description: "Phase 2 — Install Vitest, create vitest.config.ts (with projects for tests and tests-presets), port setup files. Jest stays in place; both runners work side-by-side."
name: "Jest→Vitest Phase 2: Config & Setup"
agent: "agent"
---

# Phase 2 — Config & Setup (Side-by-Side)

**Goal:** Vitest runs alongside Jest. Do not remove Jest yet.

## Prerequisites

Phase 1 audit must be complete and saved to `docs/jest-to-vitest-audit.md`. Read it first.

## Steps

### 1. Install dependencies

Add (do not remove anything yet):

- `vitest`
- `@vitest/coverage-v8`
- `jsdom` (if not already present)
- `@vitest/ui` (optional, dev convenience)

Use `npm install --save-dev` from the package directory.

### 2. Create `vitest.config.ts`

Create at the package root. Use `defineConfig` with `test.projects` to handle both suites in one config:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "core",
          include: ["tests/**/*.test.ts", "tests/**/*.test.tsx"],
          environment: "jsdom",
          setupFiles: [/* port from jest.config.js setupFilesAfterEach */],
          globals: true, // matches Jest's default globals
        },
      },
      {
        test: {
          name: "presets",
          include: ["tests-presets/**/*.test.ts"],
          environment: "jsdom",
          setupFiles: [/* port from jest.ui-preset-editor.config.js */],
          globals: true,
        },
      },
    ],
    reporters: ["default", "junit"],
    outputFile: { junit: "./junit.xml" },
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "cobertura"],
      reportsDirectory: "./coverage",
    },
  },
  resolve: {
    alias: [
      // Port every entry from Jest moduleNameMapper here.
      // CSS/SCSS stubs:
      { find: /\.(css|scss|sass|less)$/, replacement: new URL("./tests/stubs/style-stub.ts", import.meta.url).pathname },
      // SVG / image stubs as found in audit
    ],
  },
});
```

Fill in `setupFiles`, `alias`, and any `transformIgnorePatterns` equivalent (`server.deps.inline`) using the audit findings. **Do not invent entries** — only port what Phase 1 documented.

### 3. Port setup files

For each Jest `setupFiles` / `setupFilesAfterEach`:
- Replace `jest.*` references with `vi.*` (manual at this stage — codemod runs in Phase 3).
- If a setup file uses `beforeAll`/`afterAll` from `@jest/globals`, change the import to `vitest`.

If global polyfills exist (`requestAnimationFrame`, `ResizeObserver`, etc.), keep them as-is.

### 4. Update `tsconfig.test.json`

- Remove `"types": ["jest", "node"]` → replace with `"types": ["vitest/globals", "node"]` (only if `globals: true` in config).
- Keep `jest` in `types` for now if Jest is still installed and tests reference Jest types — both can coexist; the tsc check will error on actual conflicts.

### 5. Add npm scripts

In `package.json`, **add** (do not replace):

```json
{
  "scripts": {
    "test:vitest": "vitest run",
    "test:vitest:watch": "vitest",
    "test:vitest:coverage": "vitest run --coverage",
    "test:vitest:ui": "vitest --ui"
  }
}
```

### 6. Smoke test

Create a tiny `tests/__vitest-smoke__.test.ts`:

```ts
import { describe, it, expect } from "vitest";
describe("vitest smoke", () => {
  it("runs", () => { expect(1 + 1).toBe(2); });
});
```

Run `npm run test:vitest -- tests/__vitest-smoke__.test.ts`. It must pass before continuing. Delete the file after it passes.

## Acceptance Criteria

- `npm test` (Jest) still works unchanged.
- `npm run test:vitest` runs and the smoke test passes.
- `vitest.config.ts` exists with two projects.
- No source files in `src/` modified.
- Commit message: `chore(test): add vitest alongside jest (phase 2)`.

## Do NOT in this phase

- Do NOT run codemods on test files yet.
- Do NOT remove Jest, `ts-jest`, `@types/jest`, or any Jest config.
- Do NOT touch any CI / Azure DevOps `.yml` pipeline files (now or in any later phase). The team updates pipelines manually.
