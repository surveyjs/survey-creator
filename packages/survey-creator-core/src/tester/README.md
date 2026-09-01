# survey-creator-core/tester — the Tests widget

The visual UI for `survey-core/tester`: a runner that runs a suite's tests and shows the model being
driven, a recorder that writes a new test by having the survey filled in, and an editor for the suite
JSON. `survey-core/tester` is the engine; this directory is its UI, and the two names mirror each other
on purpose.

Near-miss to keep out of your head while reading this: `src/components/tabs/test-plugin.ts` in this
package is the **Preview** tab (legacy name "test") and has nothing to do with any of it.

The prompts that build the widget are `promts/creator-tester-00-overview.md` and its numbered
siblings; what the port and the contract made awkward is recorded in `promts/creator-tester-notes.md`.

## Layering — the rules, and they are enforced

```
src/tester/core, src/tester/recorder    layer 0   pure functions. May import: survey-core,
                                                  survey-core/tester, jsonc-parser, each other.
src/tester/model                        layer 1   survey-core models composed; Base subclasses.
                                                  May import layer 0 and the same externals.
survey-creator-react/src/tester         layer 2   markup. The only layer that may name React.
```

1. **Nothing under `src/tester/` imports from `src/` outside `src/tester/`.** No `creator-base`, no
   `editorLocalization`, no `utils/`, no `svgbundle`. The widget ships as a bundle of its own and
   depends on no creator code at all — stricter than the preset editor, which imports
   `survey-creator-core`. If something in the main source looks reusable, it is copied in, or the need
   is written into `promts/creator-tester-notes.md`.
2. **Nothing under `src/` outside `src/tester/` imports from `src/tester/`.** The main creator bundle
   must not grow by a byte. The Creator plugin tab, when it comes, will import the *built*
   `survey-creator-core/tester` the way `presets-plugin.ts` imports `survey-creator-core`, and it will
   be an adapter that owns nothing.
3. **Layer 1 may not name a framework and may not name a component**, beyond handing out the two
   `svt-*-row` strings on `Action.component`.
4. **One model per component** — everything a view renders is readable off the one model it subscribes
   to, because `BaseAngular` subscribes to exactly one.

Both directions of rule 1 and 2 are ESLint overrides in this package's `.eslintrc.js`, and rule 2 is
additionally asserted over the whole import graph of `src/entries/index.ts` by
`tests-tester/fences.test.ts`, so it survives a reorganised lint config.

Two details of those overrides are worth knowing before you trip over them:

* Rule 2 blocks only the *relative* spellings that reach these sources, plus anything below the public
  entry. The bare `survey-creator-core/tester` is deliberately allowed, because that is precisely what
  the plugin tab is meant to import; `survey-creator-core/tester/model/…` is not, because it reaches
  past the published surface.
* Rule 1 is depth-aware. A file `depth` directories below `src/tester` escapes the widget with
  `depth + 1` steps of `../`, so each depth has its own override: from `core/x.ts`, `../recorder/y` is
  a legal sibling layer and `../../creator-base` is not, and one directory deeper the same two
  spellings gain a `../` each. A single prefix for every depth would forbid the legal half.

`jsonc-parser` — the formatting-preserving suite editing the recorder is built on — is a
`devDependency` of this package and is bundled into the tester bundle. It is not a peer dependency and
not external in rollup, so consumers install nothing new, and it must never be imported outside
`src/tester/`.

## Naming

The root model is `SurveyTesterModel`; every other exported runtime class is prefixed `Tester`
(`TesterRunnerModel`, `TesterRecorderModel`, …) and exported interfaces `ITester`. CSS classes and
registered component names are prefixed `svt-`, the way the preset editor owns `sps-`. Layer 0 is the
exception and deliberately so: it exports functions and interfaces that keep the names they had in the
prototype, because that is what makes the port diffable.

## Tests

`tests-tester/` is a vitest project of its own (`npm run test:tester`), mirroring this directory:
`tests-tester/core`, `.../recorder`, `.../model`, plus `tests-tester/samples` — the prototype's sample
suites, kept as fixtures. The samples are **not** under `src/` and are not shipped.

## Where things came from

The widget is a port of `C:\survey.js\Examples\surveyjs-tester-runner`, and the port keeps file names,
splits, exports and comments so that prototype and port can be diffed. Layer 0, ported in prompt 01:

| Prototype | Here |
|---|---|
| `src/tester/runSuite.ts` | `core/runSuite.ts` |
| `src/tester/liveRun.ts` | `core/liveRun.ts` — the reconciled live-run state a run paints from |
| `src/tester/segmentRun.ts` | `core/segmentRun.ts` — run-to-step slicing and index shifting |
| `src/tester/consoleLog.ts` | `core/consoleLog.ts` |
| `src/tester/stepInfo.ts` | `core/stepInfo.ts` |
| `src/tester/validate.ts` | `core/validate.ts` — suite text to issues and editor offsets; the first `jsonc-parser` use |
| `src/tester/targets.ts` | `core/targets.ts` |
| `src/tester/createSurvey.ts` | `core/createSurvey.ts` — the documented two-step model creation |
| `src/tester/delay.ts` | `core/delay.ts` — `PauseGate` and friends |
| `src/tester/elementIds.ts` | `core/elementIds.ts` — the prefix registry |
| `src/tester/hostOptions.ts` | `core/hostOptions.ts` — the basis of `ITesterOptions` in prompt 03 |
| `src/util/json.ts` | `core/json.ts` — minus `readFile()` and, until prompt 02, `download()` |
| `src/samples/*.ts` | `tests-tester/samples/*` — fixtures only |
| `src/tester/*.test.ts`, `src/samples/*.test.ts` | `tests-tester/core/*`, `tests-tester/samples/*` |

Still to arrive: `recorder/` (prompt 04), `model/` (prompts 02, 04, 05), `localization/` (prompt 03),
`theme/` and `index.ts` (prompt 06).
