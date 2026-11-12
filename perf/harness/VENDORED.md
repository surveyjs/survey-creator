# Files copied from survey-library

These files are copied from survey-library `perf/` (C02), not imported from a sibling checkout: the runner must not
change with the target, and a library bisect checks out commits that have no `perf/` folder. The rest of `perf/` is
the creator's own: `harness/scenario.ts`, `harness/ids.ts` and `harness/funnels.ts` are written for the creator and
modelled on the library's.

`node perf/harness/sync.ts --check [--from <survey-library checkout>]` (default `../survey-library`) prints, for each
file below, whether a verbatim copy is still identical and the hunks of an adapted one. It exits 0 either way. The list
in `sync.ts` (`VENDORED`) and this table must name the same files; `perf:test` checks that.

| file | source | verbatim / adapted | what changed |
|---|---|---|---|
| `harness/stats.ts` | `perf/harness/stats.ts@5f2307e29` | verbatim | |
| `harness/sample.ts` | `perf/harness/sample.ts@5f2307e29` | verbatim | |
| `harness/counters.ts` | `perf/harness/counters.ts@5f2307e29` | verbatim | `installFunnels(module, list)` already takes the module and the list; the creator's funnels are in `harness/funnels.ts` |
| `harness/node/machine.ts` | `perf/harness/node/machine.ts@5f2307e29` | verbatim | |
| `harness/node/git.ts` | `perf/harness/node/git.ts@5f2307e29` | verbatim | |
| `harness/node/fixture-hash.ts` | `perf/harness/node/fixture-hash.ts@5f2307e29` | verbatim | |
| `harness/node/deps.ts` | `perf/harness/node/deps.ts@5f2307e29` | adapted | `jsdom`, `react` and `react-dom` added to `reportedPackages` |
| `harness/node/result.ts` | `perf/harness/node/result.ts@5f2307e29` | adapted | `Suite` is `core` / `react`; `product: "creator"`; `build.creatorCore` and `build.libraryUi`; `info.versionMismatch` (00 § Result file) |
| `harness/node/env.ts` | `perf/harness/node/env.ts@5f2307e29` | adapted | `PERF_LIB_UI_DIR`, `PERF_CREATOR_CORE_DIR`, `PERF_LIB_COMMIT` added; `PERF_EXTRA_JSON` removed, as the creator has no extra fixtures |
| `harness/node/build.ts` | `perf/harness/node/build.ts@5f2307e29` | adapted | the four target directories, their variables and defaults (00 § Runner and target); `followLink`: the junction realpath, with an error naming a dangling link and its target; the creator `src` folders and build hints; `resolveCoreDir` kept as `resolveTargetDir("core")` |
| `fixtures/random.ts` | `perf/fixtures/random.ts@5f2307e29` | verbatim | the seeded PRNG |
