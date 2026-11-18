# Performance tests

Performance tests of Survey Creator: the creator model in Node with jsdom (`core`), and Survey Creator for React 19
production in headless Chromium (`react`). They only measure: no markup checks, no screenshots. Every night the perf
server (the private `surveyjs/surveyjs-performance-monitor` repository) builds survey-creator `master` against the same
night's survey-library build, runs these suites, compares them with the previous nights and bisects a new regression
across both repos. It uses this folder only through the runner contract in [CONTRACT.md](CONTRACT.md).

## Layout

| path | what |
|---|---|
| `fixtures/` | `huge` (reads `e2e/questions_4114.ts`), and the generated, seeded `typical` and `locales` |
| `harness/` | sample loop, stats, counters (copied from survey-library, `harness/VENDORED.md`); the creator's `scenario.ts`, `ids.ts` (every id and its suites) and `funnels.ts`; `harness/node/`: build checks, environment, machine key, dependency fingerprint, the result file |
| `scenarios/` | the operations measured, one factory file per group, shared by core and react; `options.ts` (the one creator options object); `revs.json` (each id's `rev` and hash) |
| `core/` | the core suite: one fresh `node --expose-gc` process per scenario, a jsdom window (`dom.ts`), a resolve hook for `survey-core` (`hooks.ts`) |
| `browser/` | the react suite: the Playwright spec, its config, the page and its harness; pages served from the builds by `context.route` |
| `react19/` | the pinned React 19 of the react suite, installed by the suite into its `node_modules` |
| `manifest.ts`, `CONTRACT.md` | the runner contract: the builds, the suites, their ids and commands, and the result file a caller reads |
| `results/` | local output, git-ignored |

## Running locally

Build the chain first, as `CLAUDE.md` says (a sibling `survey-library` checkout next to this one):

```bash
# survey-library
cd packages/survey-core && npm run build && npm run build:i18n && npm run build:icons && npm run build:linter && npm run build:themes
cd packages/survey-react-ui && npm run build
# survey-creator
cd packages/survey-creator-core && npm run build
cd packages/survey-creator-react && npm run build
```

(`perf/manifest.ts` lists the minimum: survey-core without i18n; creator-core `build:main` and `build:collaboration`.)
The suites refuse a creator build older than its `src` (creator-core: or than the survey-core `linter` and `themes` it
copies in, so rebuild it after survey-core). Then:

```bash
cd packages/survey-creator-core && npm run perf        # core suite  -> perf/results/core-latest.json
cd packages/survey-creator-react && npm run perf:ci    # react suite -> perf/results/react-latest.json
cd packages/survey-creator-react && npm run perf       # the same in Playwright's UI
cd packages/survey-creator-core && npm run perf:test   # the perf code's own unit tests
```

* `PERF_ONLY=<id>,<id>` runs some scenarios; `perf/harness/ids.ts` lists them, and `node perf/manifest.ts` prints them
  per suite.
* `PERF_CORE_DIR`, `PERF_LIB_UI_DIR`, `PERF_CREATOR_CORE_DIR` and `PERF_UI_DIR` point a suite at other builds of
  survey-core, survey-react-ui, survey-creator-core and survey-creator-react (default: the builds the e2e tests use,
  through the `node_modules` junctions, and this checkout's two creator builds). The tests always come from this
  checkout. `PERF_LIB_COMMIT` and `PERF_TARGET_COMMIT` name the builds' commits in the result file.
* `PERF_RESULTS_DIR=<dir>` writes the result file elsewhere.
* A judged run or a whole night locally come from the perf server's command line, pointed at this checkout (its README).

By default a scenario keeps up to 12 samples (core) or 7 (react), and at least 5; `maxMs` (3 s core, 5 s react)
decides how many. Each sample is setup → gc → the timed run → check → teardown, with a settle (until no deferred work is
left) after the setup and after the run, both untimed. Then one counter run.

**On a laptop**, a process can run 2–4× slower from some point on (a power mode of the machine, not of the code).
Compare only runs pinned to the same cores, and look at several runs per side. On Windows, pin to the P-cores:
`start /b /wait /affinity F cmd /c "npm run perf"` (Chromium and the scenario processes inherit the mask).

### Against npm builds

```bash
mkdir npm-3.2.4 && cd npm-3.2.4
npm pack survey-core@3.2.4 survey-react-ui@3.2.4 survey-creator-core@3.2.4 survey-creator-react@3.2.4
# extract each <name>-3.2.4.tgz into a folder of its name (the tarball's package/ folder), then:
PERF_CORE_DIR=$PWD/survey-core PERF_LIB_UI_DIR=$PWD/survey-react-ui \
PERF_CREATOR_CORE_DIR=$PWD/survey-creator-core PERF_UI_DIR=$PWD/survey-creator-react npm run perf:ci
```

An npm build is only checked to exist. Its `commit` is `null`, and its `mtime` is npm's fixed 1985 stamp. A scenario
that needs an API the build lacks is skipped through its `requires` (listed in `skipped`). Two versions of survey-core
and the creator are recorded in `info.versionMismatch` and are not a failure (`CONTRACT.md`).

### Local diagnostics

* `node perf/core/noop-check.ts [ids]` and `PERF_NOOP_CHECK=1 npm run perf:ci`: for each scenario, its check must fail
  without the run and pass after it.
* `PERF_RESET=<restore|creator|page>:<id>,<id>` runs react ids with another reset (what a sample starts from).
* `node perf/fixtures/toolbox-check.ts`: `typical`'s question types against the build's default toolbox.

The perf server sets none of these.

## The copied harness

The product-neutral harness is copied from survey-library `perf/`, not imported, so the runner does not change with the
library target (C02). `harness/VENDORED.md` lists each copied file with its source commit and whether it is verbatim or
adapted. `node perf/harness/sync.ts --check [--from <survey-library>]` diffs the copies against the sibling checkout:
it prints `identical` or `DIFFERS` for each verbatim file and the hunks of each adapted one, and its last line counts
the identical verbatim files. It exits 0 either way: the sibling may be on any branch, so it is a script, not a test.

## Adding a scenario

1. **The id**, in `harness/ids.ts`: `<fixture>/<group>/<op>[@<target>]`, with the suites that run it. The same operation
   has the same id in core and react.
2. **A factory** in the group's file under `scenarios/` (`load.ts`, `select.ts`, `edit.ts`, `tabs.ts`, `output.ts`, or
   `browser.ts` for react-only ones), returned by its `<group>Scenarios()`:
   * `id`, `rev: 1`, `fixture`, `kind` (`load` or `action`), and `uses`: every helper of `scenarios/` it calls,
     `createCreator` (`options.ts`) among them;
   * `setup` (untimed, makes the creator: `startCreator` / `loadCreator`), `run` (the timed part: one UI action),
     `check` (throws when the action did not happen, so a no-op fails), `teardown`;
   * `requires` for an API an older build lacks; `repeat`, `counterOnly`, `browser.reset` where needed.
3. **The rev:** `node perf/scenarios/revs.ts --write` adds it to `revs.json`. Later, a change of what a scenario measures
   (its functions, its sample fields, a helper in `uses`, the page helpers for react ids) needs a `rev` bump, then
   `--write`: a new rev starts a new series on the server. `node perf/scenarios/revs.ts` checks it; `perf:test` runs it.
4. Check it: `node perf/core/noop-check.ts <id>` and `PERF_NOOP_CHECK=1 PERF_ONLY=<id> npm run perf:ci`, then a run.

The server reads the new id from `node perf/manifest.ts`; nothing changes there.
