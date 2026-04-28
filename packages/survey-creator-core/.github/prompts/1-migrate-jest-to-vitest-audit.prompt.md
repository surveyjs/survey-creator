---
description: "Phase 1 — Audit current Jest setup in survey-creator-core to produce a concrete migration plan before any code changes."
name: "Jest→Vitest Phase 1: Audit"
agent: "agent"
---

# Phase 1 — Audit

**No code changes in this phase.** Produce a report only.

## Read and Summarize

Read these files and summarize every non-default option in use:

- [jest.config.js](../../jest.config.js)
- [jest.ui-preset-editor.config.js](../../jest.ui-preset-editor.config.js)
- [tsconfig.test.json](../../tsconfig.test.json)
- [package.json](../../package.json) — extract every `test*` script and every Jest-related dependency (`jest`, `ts-jest`, `babel-jest`, `@types/jest`, `jest-environment-jsdom`, `jest-junit`, custom reporters, custom serializers).

For each Jest config, list:
- `testEnvironment`, `setupFiles`, `setupFilesAfterEach`, `globalSetup`, `globalTeardown`
- `moduleNameMapper` entries (especially CSS/SCSS/asset stubs and package aliases)
- `transform` / `transformIgnorePatterns`
- `testMatch` / `testPathIgnorePatterns` / `roots`
- Custom reporters (`jest-junit`, etc.) and their output paths
- `snapshotSerializers`
- `coverage*` options and thresholds
- `testTimeout`, `maxWorkers`, `globals`

## Inventory Jest API Usage

Run grep across [tests/](../../tests/) and [tests-presets/](../../tests-presets/) for each of the following and report **counts per API**:

- `jest.fn`, `jest.mock`, `jest.unmock`, `jest.doMock`, `jest.requireActual`, `jest.requireMock`
- `jest.spyOn`, `jest.clearAllMocks`, `jest.resetAllMocks`, `jest.restoreAllMocks`
- `jest.useFakeTimers`, `jest.useRealTimers`, `jest.advanceTimersByTime`, `jest.runAllTimers`, `jest.runOnlyPendingTimers`
- `jest.setTimeout`
- `jest.isolateModules`, `jest.resetModules`
- `@jest/globals` imports
- `jasmine.*` references (legacy)

For `jest.mock(...)` calls, report how many use a **factory function** (these need `vi.hoisted()` review) vs. simple module-name-only mocks.

## Diff Between Branches

Compare the test directories between `master` and `V3` using the GitHub URLs (or local checkout if available):

- `packages/survey-creator-core/tests/`
- `packages/survey-creator-core/tests-presets/`

Report:
- File counts per branch
- Files unique to each branch
- Approximate line-count delta

This tells us how big the V3 forward-port will be (Phase 6).

## Risk Items to Flag

Explicitly list any of these found in the codebase (each is a known failure point in Vitest):

- `jest.mock(path, factory)` where factory references outer-scope variables (needs `vi.hoisted()`)
- Manual `__mocks__/` folders
- `jest.useFakeTimers("modern" | "legacy")` with mode arguments
- Tests relying on `process.nextTick` / microtask flushing under fake timers
- `requestAnimationFrame` / `cancelAnimationFrame` polyfills in setup
- CSS / SCSS / SVG / image imports inside source code reachable from tests
- Custom `snapshotSerializers`
- `globalSetup` / `globalTeardown` files
- Any direct `require("jest-...")` in test code

## Deliverable

Output a single Markdown report with sections:

1. **Current Jest configuration summary** (per config file)
2. **Jest API usage table** (API → count)
3. **Branch diff summary** (master vs V3)
4. **Risk items** (with file paths and line counts)
5. **Go / no-go recommendation** with justification
6. **Estimated phases breakdown** (which phases will be heavy vs light)

Save the report to `docs/jest-to-vitest-audit.md` (create the folder if needed). Do not modify any other file.
