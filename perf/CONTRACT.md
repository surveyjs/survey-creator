# The runner contract (Survey Creator)

How a caller builds a Survey Creator target, runs the performance suites of a survey-creator checkout and reads their
results. The nightly perf server (the private `surveyjs/surveyjs-performance-monitor` repository) is such a caller; it
judges the results, keeps their history and bisects regressions. This repository only measures. It follows
survey-library's `perf/CONTRACT.md` (contract 2) except where this file says otherwise.

## The contract version

Contract version: **1**, the creator's own numbering (`contractVersion` in `perf/manifest.ts`; `product` tells it apart
from survey-library's). A change that a caller has to follow raises it:

* a renamed or new required variable;
* a new required build step, or a build command that changes;
* another way to run a suite, or another layout;
* a result file field that changes meaning.

A change of the result file's shape raises `resultSchema` and the result file's `schema` with it. New scenarios,
fixtures, phases or counters raise neither: a caller reads the ids from the manifest. A caller refuses a product or a
version it does not know.

## The manifest

`node perf/manifest.ts`, run from the checkout root with a Node that runs TypeScript directly (22.18 or newer), prints
JSON. It needs no build and no installed package. `perf/manifest.test.ts` checks that the output matches this example
(`"..."` stands for any value):

```json
{
  "product": "creator",
  "contract": 1,
  "resultSchema": 2,
  "library": {
    "repo": "survey-library",
    "layout": "sibling",
    "builds": [
      { "env": "PERF_CORE_DIR", "package": "survey-core", "cwd": "packages/survey-core",
        "commands": ["npm run build", "npm run build:icons", "npm run build:linter", "npm run build:themes"],
        "dir": "packages/survey-core/build" },
      { "env": "PERF_LIB_UI_DIR", "package": "survey-react-ui", "cwd": "packages/survey-react-ui",
        "commands": ["npm run build"], "dir": "packages/survey-react-ui/build", "suites": ["react"] }
    ]
  },
  "install": ["npm install"],
  "builds": [
    { "env": "PERF_CREATOR_CORE_DIR", "cwd": "packages/survey-creator-core", "install": ["npm install"],
      "commands": ["npm run build:main", "npm run build:collaboration"],
      "dir": "packages/survey-creator-core/build", "src": ["packages/survey-creator-core/src"],
      "bundles": ["survey-core/linter", "survey-core/themes"] },
    { "env": "PERF_UI_DIR", "cwd": "packages/survey-creator-react", "install": ["npm install"], "commands": ["npm run build"],
      "dir": "packages/survey-creator-react/build", "src": ["packages/survey-creator-react/src"], "suites": ["react"] }
  ],
  "suites": {
    "core": { "ids": ["..."], "cwd": "packages/survey-creator-core", "script": "perf/core/run.ts", "args": [] },
    "react": { "ids": ["..."], "cwd": "packages/survey-creator-react", "script": "node_modules/@playwright/test/cli.js",
      "args": ["test", "-c", "playwright.perf.config.ts"] }
  },
  "machine": { "key": "...", "os": "...", "cpu": "...", "cores": "...", "availableParallelism": "...", "node": "...",
    "chromium": null, "extra": "..." }
}
```

* `library.builds`: the survey-library builds of the target. `cwd` and `dir` are relative to the library checkout;
  `commands` are what the creator needs from that package, run in order in `cwd`:
  * creator-core bundles `survey-core/themes` and `survey-core/linter` (its build fails without them), and the react
    page loads `themes/index.min.js`;
  * survey-react-ui's build imports `survey-core/icons`;
  * survey-library's own perf builds have all of these except **`build:themes`**.
* `install`: run in the creator checkout root after the library builds (`npm install`; `npm ci` does not work, the lock
  files are git-ignored).
* `builds`: the creator builds of the target, in this order. Every path is relative to the creator checkout. For each,
  run `install`, then `commands`, in order in `cwd`; they write `dir`. creator-react's install links
  `node_modules/survey-creator-core` to creator-core's `dir`, which is why each package is installed right before its
  build. creator-react's build type-checks the types it imports from `survey-creator-core/collaboration`, so it needs
  `build:collaboration`.
* **A build's inputs** are its `src` folders, the `version` in `cwd`'s `package.json` (the build prints it, and
  survey-core's version check compares it), and, for `bundles`, the parts of the library target the build copies in.
  creator-core's build keeps only the bare `survey-core` external: `survey-core/linter` (the JSON and logic tabs) and
  `survey-core/themes` are inside it. So a caller can reuse a build only when its `src`, its version and, with
  `bundles`, the library target's survey-core build are all the same. Pointing `PERF_CORE_DIR` at another survey-core
  does not change the copies inside a creator-core build.
* `suites[*]`: `ids` are the scenario ids of the suite (`<fixture>/<group>/<op>[@<target>]`, `perf/harness/ids.ts`).
  `cwd` and `script` are relative to the runner's checkout root: run `node <root>/<script> <args...>` in `<root>/<cwd>`.
* `builds[*].suites`, `library.builds[*].suites`: only these suites load the build; without `suites`, every suite does.
* `machine`: the machine block of this process with `PERF_MACHINE_EXTRA` and no Chromium. Its `key` groups result
  files: results with different keys are never compared.

## The sibling layout

`library.layout: "sibling"`: a creator checkout is installed with a survey-library checkout next to it,
`<parent>/survey-creator` and `<parent>/survey-library` (a folder or a link to one). The creator packages name the
library builds by relative path (`../../../survey-library/packages/<package>/build` in their `package.json`), and
`npm install` links them into `node_modules`. So:

1. Build the library target (`library.builds`).
2. Install the creator target next to it (`install` in its root), then run `builds` in order, each with its own
   `install` first.
3. The runner needs the same layout for its own installs: the root (esbuild, `@playwright/test`) and
   `packages/survey-creator-core` (jsdom). Its other creator packages need no install when all four target variables
   are set.

## The target

The **runner** is the survey-creator checkout the tests come from: fixtures, harness, scenarios, configs, the perf page
and `node_modules`. A **target** is four builds; old refs have no `perf/` folder, and only their builds are used.

| variable | build | default | checked |
|---|---|---|---|
| `PERF_CORE_DIR` | survey-core | realpath of `packages/survey-creator-core/node_modules/survey-core` | exists |
| `PERF_LIB_UI_DIR` | survey-react-ui (react) | realpath of `packages/survey-creator-react/node_modules/survey-react-ui` | exists |
| `PERF_CREATOR_CORE_DIR` | survey-creator-core | `packages/survey-creator-core/build` | against its `src` when it is the runner's, else exists |
| `PERF_UI_DIR` | survey-creator-react (react) | `packages/survey-creator-react/build` | against its `src` when it is the runner's, else exists |

* A dangling junction is an error that names the link and its target.
* A build folder is a `build` folder of either repo, or an npm package folder (`node_modules/survey-core`, ...).
* A suite fails a scenario whose build files changed after the suite started.

Commits, all optional:

| variable | meaning |
|---|---|
| `PERF_TARGET_COMMIT` | the creator target's commit: `build.creatorCore.commit`, `build.ui.commit`. Without it, the runner's commit for the runner's own builds, else `null` |
| `PERF_LIB_COMMIT` | the library target's commit: `build.core.commit`, `build.libraryUi.commit`. Without it, the HEAD of the library checkout the build sits in, if HEAD has not moved since the build and the package's sources are clean, else `null` |

## Running a suite

Prerequisites: the sibling layout above, Node 22.18 or newer, and for the react suite Chromium for the installed
Playwright. The react suite installs its pinned React 19 into `perf/react19/node_modules` by itself (network access
once), so that folder must be writable.

Input, all optional, as environment variables: the target and commit variables above, and as in survey-library:

| variable | meaning |
|---|---|
| `PERF_RESULT_FILE` | where to write the result file |
| `PERF_RESULTS_DIR` | the folder for result files when `PERF_RESULT_FILE` is unset (default `perf/results`) |
| `PERF_ONLY` | comma-separated ids; ids of another suite are listed as `notInSuite`, unknown ids are an error |
| `PERF_KIND` | `local` (default), `nightly`, `on-demand`, `record`, `bisect`, `rerun`; recorded in the file |
| `PERF_LABEL`, `PERF_REF`, `PERF_PREVIOUS_COMMIT` | recorded in the file |
| `PERF_MACHINE_EXTRA` | appended to the machine key |

`PERF_RESET` and `PERF_NOOP_CHECK` are local diagnostics (`README.md`); a caller sets neither.

A suite has no time limit. Each scenario has a hang guard that fails it alone: 5 minutes per core scenario process
(`scenarioTimeoutMs`) and per browser test (the Playwright `timeout`).

Output: one result file, `<suite>-latest.json`, or `<suite>-<kind>-<timestamp>.json` with `PERF_ONLY`. The suite
rewrites it as it goes; a suite killed outright leaves it `incomplete` (`reason: "killed"`, with the ids not run). On
SIGTERM it writes what it has with `reason: "timeout"` and exits with 143. Otherwise the exit code is 0, or 1 when a
scenario failed (listed in `failed`). A scenario the target cannot run (`requires`) is in `skipped`, which is not a
failure.

## The result file (`schema: 2`)

survey-library's schema 2 (`ResultFile` and `ResultEntry` in `perf/harness/node/result.ts`), with additions a schema-2
reader can ignore:

* `product: "creator"`;
* `suite`: `core` or `react`;
* `build.core`: survey-core; `build.ui`: survey-creator-react (react, with `framework.react`);
* `build.creatorCore`: survey-creator-core; `build.libraryUi`: survey-react-ui (react). Each is a `BuildPart`
  (`dir`, `version`, `commit`, `mtime`);
* `build.deps`: the library's list plus `jsdom` (core) and `react` / `react-dom` (react, from `perf/react19`);
* `results[].info.versionMismatch`: `{ core, creator }`, the two versions of a SurveyJS version message (below).

What a caller judges, as in survey-library: `median` per id, and the `counters` (`value`, `kind`). The creator's
counters:

* `conditionRuns`, `expressionRuns` (`work`), on the survey-core of the target;
* `surveysCreated` (`work`): every survey the creator made in the counter run, in total and as
  `surveysCreated.<reason>` per creator area (`property-grid`, `designer`, `preview`, `logic-items`,
  `theme-tab:property-grid`, ...; a reason may contain `:`). It is `null` on a build without
  `SurveyCreatorModel.createSurvey`;
* `domNodes` (`dom`, react): the elements under `document.body` after the counter run, popups included.

`phases` (the medians of each part of a sample, informational):

* `*/load/paint`: `model` (`creator.JSON =`), `paint` (to the end of the update), `content` (until no page placeholder
  or row skeleton is in view); the sample is their sum;
* `huge/select/element@q3978` (react): `select`, `scroll`;
* `huge/designer/object-selector`: `open`, `search`.

Everything else in `info` (`frameMs`, `longTaskMs`, `settleMs`, `heapGrowthKB`, `wallMs`, ...) is informational. A
`counterOnly` entry (`huge/tabs/roundtrip`, `huge/output/dispose`) has a median that is not judged.

## The version-mismatch rule

survey-core's `checkLibraryVersion` calls `console.error` ("survey-core has version 'A' and survey-creator-core has
version 'B'. SurveyJS libraries should have the same versions ...") when the versions differ. A target that mixes repos
(a two-repo bisect step) meets it around every weekly release. That message is recorded in `info.versionMismatch` and
does not fail the scenario. survey-react-ui and survey-creator-react print the same message with their own name (react);
any of them is absorbed, and `creator` holds the other package's version of the last one. With the library builds from
one library commit and the creator builds from one creator commit, as a caller makes them, that is the creator's version. Any other `console.warn` or `console.error` (core), and any console warning or error, page
error or failed request (react), still fails it. A target build that lacks an API a scenario needs fails that scenario
(or, through `requires`, skips it); that is an API reason, not the mismatch.
