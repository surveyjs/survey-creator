---
description: "Orchestrator: Jest → Vitest migration plan for survey-creator-core (master/V2 and V3 branches). Run the phase prompts in order."
name: "Migrate Jest → Vitest (Orchestrator)"
argument-hint: "Optionally: branch name (master | V3) and phase number to start from"
agent: "agent"
---

# Jest → Vitest Migration — Orchestrator

You are coordinating a multi-phase migration of `packages/survey-creator-core` from Jest to Vitest. The repo has two long-lived branches: `master` (V2) and `V3`. The migration must be applied to **both** branches using the **same codemod and the same `vitest.config.ts`** to keep cherry-picks of bug fixes clean.

## Ground Rules

1. **Migrate `master` first, then forward-port to `V3` using the same scripts/configs.** Do not edit V3 by hand — re-run the codemod.
2. **Codemod-first.** Every transform must be scriptable and committed (`scripts/jest-to-vitest.mjs`) so it can be re-run on `V3`.
3. **Single `vitest.config.ts`** with `test.projects` for `tests/` and `tests-presets/` — replaces both `jest.config.js` and `jest.ui-preset-editor.config.js`.
4. **Atomic landing.** Don't merge a half-migrated state. Jest may stay in the repo as a safety net for one release.
5. **No "fix only on master"** for test infra after migration — backport immediately.
6. **Do NOT touch CI.** Azure DevOps `.yml` pipelines are maintained separately and will be updated manually by the team. Never edit any `.yml`, `.yaml`, or pipeline file as part of this migration.

## Phases (run as separate prompts)

| # | Phase | Prompt |
|---|-------|--------|
| 1 | Audit current Jest setup + API usage | [`/1-migrate-jest-to-vitest-audit`](./1-migrate-jest-to-vitest-audit.prompt.md) |
| 2 | Create `vitest.config.ts`, setup files, install deps | [`/2-migrate-jest-to-vitest-config`](./2-migrate-jest-to-vitest-config.prompt.md) |
| 3 | Build + run codemod across `tests/` and `tests-presets/` | [`/3-migrate-jest-to-vitest-codemod`](./3-migrate-jest-to-vitest-codemod.prompt.md) |
| 4 | Triage failing tests by category | [`/4-migrate-jest-to-vitest-triage`](./4-migrate-jest-to-vitest-triage.prompt.md) |
| 5 | Finalize, remove Jest (CI updated manually by team) | [`/5-migrate-jest-to-vitest-finalize`](./5-migrate-jest-to-vitest-finalize.prompt.md) |
| 6 | Forward-port the migration to `V3` | [`/6-migrate-jest-to-vitest-forwardport`](./6-migrate-jest-to-vitest-forwardport.prompt.md) |

## Your Task

1. Confirm the current branch and which phase to start from.
2. If no phase is specified, start at Phase 1 (Audit).
3. Run one phase at a time. Report results, then ask before proceeding to the next phase.
4. Never run Phase 6 until Phases 1–5 are merged (or at least green) on `master`.
