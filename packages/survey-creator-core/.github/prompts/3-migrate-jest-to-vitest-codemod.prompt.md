---
description: "Phase 3 — Build a re-runnable codemod that converts Jest API usage to Vitest across tests/ and tests-presets/. Commit the script for V3 reuse."
name: "Jest→Vitest Phase 3: Codemod"
agent: "agent"
---

# Phase 3 — Codemod

**Goal:** Mechanically convert all `jest.*` API usage to `vi.*` and add Vitest imports. The codemod must be **committed and re-runnable** so Phase 6 (V3 forward-port) is a single command.

## Prerequisites

Phases 1 and 2 complete. `npm run test:vitest` runs (even if many tests fail).

## Build the Codemod Script

Create `scripts/jest-to-vitest.mjs` at the package root. Use plain Node + regex (jscodeshift is overkill here — Jest's API surface is small and consistent). The script must:

1. Accept one or more directory arguments: `node scripts/jest-to-vitest.mjs tests tests-presets`
2. Walk all `*.ts` / `*.tsx` files (skip `node_modules`, `build`, `coverage`).
3. For each file, apply these transforms in order:

### Transforms

| From | To | Notes |
|------|-----|------|
| `from "@jest/globals"` | `from "vitest"` | Update imports |
| `jest.fn` | `vi.fn` | |
| `jest.spyOn` | `vi.spyOn` | |
| `jest.mock(` | `vi.mock(` | |
| `jest.unmock(` | `vi.unmock(` | |
| `jest.doMock(` | `vi.doMock(` | |
| `jest.requireActual(` | `vi.importActual(` | **Note:** `vi.importActual` is async → flag for manual review |
| `jest.requireMock(` | `vi.importMock(` | Async → flag |
| `jest.clearAllMocks()` | `vi.clearAllMocks()` | |
| `jest.resetAllMocks()` | `vi.resetAllMocks()` | |
| `jest.restoreAllMocks()` | `vi.restoreAllMocks()` | |
| `jest.useFakeTimers()` | `vi.useFakeTimers()` | If called with `"modern"`/`"legacy"` argument → strip arg + flag |
| `jest.useRealTimers()` | `vi.useRealTimers()` | |
| `jest.advanceTimersByTime(` | `vi.advanceTimersByTime(` | |
| `jest.runAllTimers()` | `vi.runAllTimers()` | |
| `jest.runOnlyPendingTimers()` | `vi.runOnlyPendingTimers()` | |
| `jest.setTimeout(` | `vi.setConfig({ testTimeout: ... })` | **Flag** — semantics differ; manual review |
| `jest.isolateModules(` | `vi.isolateModules(` | Async in Vitest → flag |
| `jest.resetModules()` | `vi.resetModules()` | |

### Add Vitest imports

If a file uses any of `describe`, `it`, `test`, `expect`, `beforeEach`, `beforeAll`, `afterEach`, `afterAll`, `vi` and **does not already import them from `vitest`**, prepend:

```ts
import { describe, it, expect, beforeEach, beforeAll, afterEach, afterAll, vi } from "vitest";
```

Only include the symbols actually used in the file (parse usage with simple regex).

If `vitest.config.ts` has `globals: true`, the imports are optional — but adding them improves IDE support and is harmless. Keep them.

### Flag for manual review

Append a comment `// TODO(vitest-migration): review` above any line containing:
- `vi.mock(` with a second-argument factory (hoisting + outer-scope reference risk)
- `vi.importActual` / `vi.importMock` (async)
- `vi.useFakeTimers` originally with mode arg
- `vi.setConfig({ testTimeout`
- `vi.isolateModules` (async)

Also write a summary file `scripts/jest-to-vitest-report.txt` listing every flagged location (path:line) for triage in Phase 4.

### Idempotency

Running the script twice must be a no-op. Detect already-converted files (e.g., presence of `from "vitest"` import + no `jest.` references) and skip.

## Run the Codemod

```powershell
node scripts/jest-to-vitest.mjs tests tests-presets
```

## Verify

- `git diff --stat` should touch only files under `tests/` and `tests-presets/`.
- No `jest.` references should remain (`grep -r "jest\." tests tests-presets` returns only matches inside string literals or comments).
- Vitest imports added where needed.
- `scripts/jest-to-vitest-report.txt` lists items for Phase 4.

## Run Both Test Suites

```powershell
npm test                # Jest — expect failures now (jest.* removed)
npm run test:vitest     # Vitest — expect many passes, some failures
```

This is normal. Jest is now broken; that's fine — Phase 5 removes it. The important number is **how many Vitest tests pass**.

## Acceptance Criteria

- `scripts/jest-to-vitest.mjs` committed.
- `scripts/jest-to-vitest-report.txt` committed.
- All `jest.*` API calls replaced with `vi.*`.
- Vitest imports added.
- Commit message: `refactor(test): apply jest→vitest codemod (phase 3)`.

## Critical: Do NOT Hand-Edit Test Files

Every transform must come from the codemod script. Hand edits make Phase 6 (V3) impossible to automate. If you find a case the codemod missed, **add it to the codemod and re-run**, don't fix the file directly.
