---
description: "Phase 6 — Forward-port the Jest→Vitest migration from master to V3 by re-running the committed codemod and copying configs. Do NOT re-do the migration manually."
name: "Jest→Vitest Phase 6: Forward-Port to V3"
agent: "agent"
---

# Phase 6 — Forward-Port to V3

**Goal:** Apply the same migration to the `V3` branch using the **same codemod and configs** that landed on `master`. This must be done within days of Phase 5 to keep cherry-picks of bug fixes clean.

## Prerequisites

- Phase 5 merged to `master`. Tag `jest-to-vitest-master` exists.
- `V3` branch is in a known-green state (full Jest test suite passes on V3 before you start).
- No in-flight PRs against `V3` that touch test infrastructure.

## Strategy

**Do NOT cherry-pick the master migration commits.** The test files differ between branches; cherry-picks will conflict on most files. Instead, **re-apply the migration from scratch on V3** using the committed scripts and configs. The codemod is deterministic; running it on V3's test files produces the V3-equivalent migrated output.

## Steps

### 1. Branch from V3

```powershell
git checkout V3
git pull
git checkout -b chore/jest-to-vitest-v3
```

### 2. Copy the migration artifacts from master

Copy these files from `master` (tag `jest-to-vitest-master`) to the V3 branch as-is:

- `packages/survey-creator-core/vitest.config.ts`
- `packages/survey-creator-core/scripts/jest-to-vitest.mjs`
- `packages/survey-creator-core/scripts/jest-to-vitest-report.txt` (will be regenerated)
- Any setup files added during Phase 2 (port them carefully — V3 may have its own setup)
- The `package.json` script changes (Vitest scripts; do NOT yet remove Jest)
- `tsconfig.test.json` changes

```powershell
git checkout jest-to-vitest-master -- packages/survey-creator-core/vitest.config.ts
git checkout jest-to-vitest-master -- packages/survey-creator-core/scripts/jest-to-vitest.mjs
# ... etc
```

### 3. Install Vitest deps on V3

```powershell
cd packages/survey-creator-core
npm install --save-dev vitest @vitest/coverage-v8 jsdom
```

### 4. Run the codemod

```powershell
node scripts/jest-to-vitest.mjs tests tests-presets
```

This produces the same kinds of changes that landed on master, but applied to V3's test files.

### 5. Run Vitest

```powershell
npm run test:vitest
```

Expected outcomes:

- **Most tests pass** — the codemod and config did the same job they did on master.
- **Some tests fail** — these are V3-specific failures. They fall into two groups:
  - **Same categories as Phase 4 on master** — apply the same fixes.
  - **V3-only categories** — likely from V3 features that don't exist on master. Triage as in Phase 4: fix patterns, update the codemod if reusable, document what's V3-specific.

### 6. If the codemod needs updates for V3

If you find a transform that V3 needs but the master codemod doesn't handle:

1. **Update the codemod on master first.** Open a small PR against `master` to add the transform.
2. Once merged, re-pull the codemod into the V3 branch.
3. Re-run.

This keeps the codemod a single source of truth. **Never let master's codemod and V3's codemod diverge.**

### 7. Triage to green

Same process as Phase 4. Group failures by root cause, fix categories not files.

### 8. Finalize on V3

Same as Phase 5:
- Flip `package.json` `test` script
- Remove Jest dependencies
- Delete Jest config files
- Tag the merge: `jest-to-vitest-v3`
- Do **not** touch any Azure DevOps `.yml` pipeline. The team updates pipelines manually for V3 separately.

### 9. Post-merge discipline

From now on, both branches use Vitest. Test infra changes apply to **both** branches in the same week:

- `vitest.config.ts` changes → backport
- Setup file changes → backport
- New shared mock utilities → backport

If a change is V3-only (e.g., new V3 feature), document why in the commit message.

## Acceptance Criteria

- Local `npm ci && npm test` green on the V3 branch.
- `vitest.config.ts` byte-identical to master's, except for documented V3-specific differences.
- No `.yml` / `.yaml` / pipeline files modified.
- `scripts/jest-to-vitest.mjs` byte-identical to master's.
- Tag `jest-to-vitest-v3` pushed.
- A test bug-fix cherry-pick from V3 to master (or vice versa) succeeds without conflicts on a sample file.

## Validation: Cherry-Pick Smoke Test

Pick any small bug fix made to a test file on master after Phase 5 and cherry-pick it to V3 (or vice versa). It should apply cleanly. If it doesn't, the migrations diverged — investigate before declaring success.
