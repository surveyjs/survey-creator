---
description: "Phase 5 — Remove Jest dependencies and configs, update docs. Run only after Phase 4 is fully green. CI/Azure DevOps yml is updated manually by the team — do not touch it."
name: "Jest→Vitest Phase 5: Finalize"
agent: "agent"
---

# Phase 5 — Finalize & Remove Jest

**Goal:** Repo runs Vitest as the default test runner. Jest is removed.

> **CI is out of scope.** Azure DevOps `.yml` pipelines are maintained separately and will be updated manually by the team. Do not edit any `.yml` / `.yaml` / pipeline file.

## Prerequisites

`npm run test:vitest` is fully green. Phase 4 acceptance criteria met.

## Steps

### 1. Flip npm scripts

In `package.json`:

- Replace `"test": "jest ..."` → `"test": "vitest run"`.
- Replace any `"test:presets"` / `"test:ui-preset-editor"` → `"vitest run --project presets"`.
- Remove `test:vitest*` scripts (now redundant).
- Update `coverage` script to `"vitest run --coverage"`.

### 2. Remove Jest from dependencies

Remove from `devDependencies`:
- `jest`
- `ts-jest`
- `babel-jest` (if present)
- `@types/jest`
- `jest-environment-jsdom` (replaced by `jsdom` directly)
- `jest-junit`
- Any other `jest-*` plugin

Run `npm install` to refresh the lockfile.

### 3. Delete Jest configs

- Delete [jest.config.js](../../jest.config.js)
- Delete [jest.ui-preset-editor.config.js](../../jest.ui-preset-editor.config.js)
- Delete `tsconfig.test.json`'s `jest` reference if still present
- Keep `junit.xml` / `junit.presets.xml` as output paths — Vitest writes there now

### 4. Note for the team (CI is updated separately)

Do **not** edit any pipeline files. After this PR merges, the team will manually update the Azure DevOps `.yml` pipelines to:

- Run `npm test` (now Vitest).
- Point the JUnit consumer at `junit.xml` (Vitest writes there per Phase 2 config).
- Adjust coverage thresholds if needed — V8 line coverage typically differs ~1–3% from Istanbul.

List the relevant facts in the PR description so the person updating the pipeline has them.

### 5. Update contributor docs

Search for references to "jest" in:
- [README.md](../../README.md)
- `CONTRIBUTING.md` if present
- Any `docs/` content

Replace with Vitest equivalents (commands, watch mode, debugging tips).

### 6. Final smoke

```powershell
npm ci
npm test
npm run test:coverage  # or whatever the coverage script is now
```

Both must pass cleanly on a fresh `npm ci`.

### 7. Tag the migration commit

Tag the merge commit so V3 forward-port can reference the exact state:

```powershell
git tag jest-to-vitest-master
git push origin jest-to-vitest-master
```

## Acceptance Criteria

- No `jest`, `ts-jest`, `@types/jest`, or `jest-*` packages in `package.json`.
- No `jest.config*.js` files.
- Local `npm ci && npm test` is green.
- README/contributor docs updated.
- Tag `jest-to-vitest-master` pushed.
- No `.yml` / `.yaml` / pipeline files modified by this migration.

## Communicate

Post a short message to the team:
- "master is on Vitest as of <commit>"
- "V3 forward-port follows in the next PR — do not start large test refactors on V3 until then"
- Link to `scripts/jest-to-vitest.mjs` for any contributor who needs to re-run it
