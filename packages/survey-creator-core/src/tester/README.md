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

Prompt 03 settled the two names prompt 02 had deliberately left as the prototype's, because they were
about the host contract and renaming them twice would have been one rename too many. `SetupModel` is
`TesterSettingsModel` (`model/settingsModel.ts`), and the interfaces of the deleted `model/runnerHost.ts`
moved into `model/runnerApi.ts` as `ITesterPanelTest`, `ITesterRowActions`, `ITesterNewTestParams`,
`ITesterNewTestSupport`, `ITesterPanelExtras` and `ITesterRunnerEnvironment`.

`model/runnerApi.ts`'s older members — `StartParams`, `StepRunParams`, `StepCursor`, `RunnerApi` — keep
the prototype's names. They describe what a *run* is asked for and reports back rather than anything a
host implements, prompt 02 ported them unchanged on purpose, and nothing since has asked them to move.

## The host contract — the widget owns no documents

`ITesterHost` (`model/testerHost.ts`) is the whole of what a host implements:

```ts
interface ITesterHost {
  getSurveyJson(): any;                 // the definition. Read-only to the widget, always.
  getTestsText(): string;               // the suite document, as TEXT — the source of truth
  setTestsText(text: string): void;     // every widget edit, immediately; no Apply, no staging
  options?: ITesterOptions;             // host defaults for run/recorder options, a locale, a mode
}
```

Standalone usage is `new SurveyTesterModel(host)` plus one framework component rendering it. The Creator
plugin tab, when it comes, implements this over `creator.text` and adds a tab — nothing else.

* The host calls `updateFromHost()` when either document changed outside the widget. The widget calls it
  on itself after its own `setTestsText`, so there is one reconciliation path and not two: re-validate,
  reconcile the runner's rows, refresh the JSON screen, close a session whose test disappeared, clamp the
  recorder's cursor, and stop a run whose survey definition changed underneath it.
* UI state that should survive a reload is one serializable object — `getState()` / `setState(state)` —
  and persisting it is the host's business. The widget never touches `localStorage`.
* The host's `options` are **defaults**. What a person changes afterwards goes into the widget state and
  is never written back, so a host that later ships different defaults is not overruled by a state object
  that had repeated the old ones.

## The three screens, and the machine between them

`SurveyTesterModel.screen` is `"runner" | "json" | "recorder"`, and the transitions are methods on the
root model. Three rules travel with them:

* **The JSON screen is never blocked.** It is the bench the document is repaired on; the other screens'
  blocked banners carry a "Fix it in the JSON" action that leads to it.
* **Entering the recorder never fails because something was running.** It stops the run, waits for the
  runner's `phase` to reach `"done"` — the widget's observable proxy for "the tester has unwound and
  every model it built is released" — and the Edit verb that was pressed reads "Stopping…" meanwhile.
  `transition` is `"none" | "stopping" | "opening"` so a view can render the in-between without owning it.
* **One live model, one owner.** Starting a run while a session is open flushes and closes the session
  first, with a notice saying that nothing was lost because what was recorded is already in the document.

A test is addressed **by name** everywhere; an index is only ever a position in the document being
edited. The vanished-test fallback is the **recorder's** rule alone: the JSON screen reads
`activeTestName` once, on entry, to reveal the test's start, and then lets go — so renaming or deleting
the very test you arrived from never closes the editor it is being typed in.

## Localization

`localization/english.ts` holds every person-readable string the widget says, and `localization/index.ts`
exposes `testerLocalization` — current locale, `getString(path)`, an english fallback, a `locales`
registry — shaped like `editorLocalization` so that a translated bundle is mechanical, and sharing not one
line with it because rule 1 forbids the import. `testerText(path, ...values)` is the accessor every call
site uses.

A leaf of the table may be a **function**, which is the one difference from `editorLocalization`: almost
every string here has a number or a name in it, and a table of fragments the caller glues together is a
table no translator can use. The sentence lives in the table whole.

After the sweep of prompt 03, a hard-coded UI string anywhere under `src/tester/` is a bug, and
`tests-tester/model/localization.test.ts` says so: it walks the table against the accessor calls in the
source in both directions, and it is also why `english.ts` is the only file under `src/tester/` whose
string literals carry non-ASCII — the console transcript's typography and the status marks live there
now, which is what removed the per-line lint escapes the port had carried for them.

## The class-name mapping — the one renaming pass

The prototype emitted its own markup under names of its own (`trow`, `steplist`, `tests__*`) and dressed
the reused `survey-core` chrome models under `svtr-*`. Prompt 02 renamed all of it into the `svt-`
namespace **once**, at the moment the model layer arrived, so that the SCSS of prompt 06 and the React
of prompt 07 are written against final names and no later prompt invents another rename.

The mapping is complete for the runner: everything the models hand out, and everything the prototype's
`src/views/runner.css` styles. The recorder's own sheet arrives with prompt 05 and follows the same two
rules — every class is `svt-` prefixed, and BEM shape and tone modifiers (`--passed`, `--failed`,
`--running`, `--idle`) are kept exactly.

Library classes are **not** in this table and are never restyled: `sv-list__item`, `sv-action-bar__item`,
`sv-popup__content` and the rest keep their names, and a reused component that looks wrong gets its `css`
property set instead (that is what `model/runnerCss.ts` is).

### Handed out by the models — `model/runnerCss.ts`, `statusTone.ts`, `testRowModel.ts`, `stepRowModel.ts`, `consoleModel.ts`, `checkView.ts`, `runnerModel.ts`

| Prototype | Here |
|---|---|
| `svtr-bar`, `svtr-bar__item`, `svtr-bar__item--space`, `svtr-bar__item--hidden`, `svtr-bar__item-content`, `svtr-bar__button`, `svtr-bar__button--icon`, `svtr-bar__button--active`, `svtr-bar__button--open`, `svtr-bar__icon`, `svtr-bar__title` | the same with `svt-bar…` |
| `svtr-list`, `svtr-list__items`, `svtr-list__items--filtering`, `svtr-list__item`, `svtr-list__body`, `svtr-list__item--selected`/`--group`/`--group-selected`/`--with-icon`/`--disabled`/`--focused`/`--hovered`/`--label`/`--wrap`/`--custom`, `svtr-list__item-icon`, `svtr-list__item-marker`, `svtr-list__separator`, `svtr-list__loading`, `svtr-list__filter`, `svtr-list__filter-box`, `svtr-list__filter-icon`, `svtr-list__filter-input`, `svtr-list__filter-clear`, `svtr-list__empty`, `svtr-list__empty-text` | the same with `svt-list…` |
| `svtr-menu`, `svtr-menu__items`, `svtr-menu__item`, `svtr-menu__body`, `svtr-menu__item--selected`/`--focused`/`--hovered`, `svtr-menu__empty`, `svtr-menu__empty-text` | the same with `svt-menu…` |
| `checks__box`, `checks__list`, `checks__list--filtering`, `checks__loading`, `checks__filter`, `checks__filterbox`, `checks__filtericon`, `checks__search`, `checks__clear`, `checks__empty`, `checks__emptytext` | the same with `svt-checks__…` |
| `checkrow`, `checkrow__hit`, `checkrow--selected`/`--group`/`--group-selected`/`--with-icon`/`--off`/`--focused`/`--hovered`/`--label`/`--wrap`/`--custom`, `checkrow__icon`, `checkrow__marker`, `checkrow__separator` | `svt-check-row`, `svt-check-row__hit`, `svt-check-row--…`, `svt-check-row__…` |
| `trow` | `svt-test-row` |
| `trow--failed`, `trow--disabled` | `svt-test-row--failed`, `svt-test-row--disabled` |
| `trow-item`, `trow-item--<tone>`, `trow-item--disabled` | `svt-test-row-item`, `svt-test-row-item--<tone>`, `svt-test-row-item--disabled` |
| `trow__verb`, `trow__delete` | `svt-test-row__verb`, `svt-test-row__delete` |
| `step`, `step--<tone>`, `step--next`, `step--end` | `svt-step`, `svt-step--<tone>`, `svt-step--next`, `svt-step--end` |
| `tests__action`, `tests__action--run`, `tests__action--mode` | `svt-tests__action`, `svt-tests__action--run`, `svt-tests__action--mode` |
| `tests__link` | `svt-tests__link` |
| `console__verb` | `svt-console__verb` |
| `runbutton__mode`, `runbutton__popup` | `svt-run-button__mode`, `svt-run-button__popup` |
| `button`, `button--primary` | `svt-button`, `svt-button--primary` |
| `link`, `link--strong` | `svt-link`, `svt-link--strong` |
| `diff`, `diff--error`, `diff--warning` | `svt-diff`, `svt-diff--error`, `svt-diff--warning` |

`tests-tester/model/css-naming.test.ts` walks a built `TesterRunnerModel` and asserts that every class
string it or its rows hand out carries the `svt-` prefix and none carries a prototype one — the rename
is complete, not partial, and it stays that way.

### Drawn by the views — `src/views/runner.css` in the prototype, the SCSS of prompt 06 here

| Prototype | Here |
|---|---|
| `runner`, `runner__body`, `runner__left`, `runner__left--flush`, `runner__right` | `svt-runner`, `svt-runner__…` |
| `tests`, `tests__head`, `tests__title`, `tests__actions`, `tests__links`, `tests__delay`, `tests__list`, `tests__empty`, `tests__note`, `tests__summary`, `tests__suite-issues`, `tests__foot` | `svt-tests`, `svt-tests__…` |
| `trow__head`, `trow__body`, `trow__toggle`, `trow__name`, `trow__namebar`, `trow__namefield`, `trow__refused`, `trow__run`, `trow__state`, `trow__time`, `trow__note`, `trow__hint`, `trow__check`, `trow__verbs` | `svt-test-row__head`, `svt-test-row__…` |
| `tdot`, `tdot--passed`, `tdot--failed`, `tdot--running` | `svt-dot`, `svt-dot--passed`, `svt-dot--failed`, `svt-dot--running` |
| `dot`, `dot--passed`/`--failed`/`--error`/`--skipped`/`--canceled`/`--running` | `svt-status-dot`, `svt-status-dot--…` |
| `status`, `status--passed`/`--failed`/`--error`/`--running`/`--canceled` | `svt-status`, `svt-status--…` |
| `steplist`, `steplist__head`, `steplist__where`, `steplist__empty`, `steplist__note`, `steplist__legend` | `svt-step-list`, `svt-step-list__…` |
| `steps` | `svt-steps` |
| `step__num`, `step__mark`, `step__text`, `step__line`, `step__aside`, `step__run`, `step__json` | `svt-step__num`, `svt-step__…` |
| `console`, `console__head`, `console__rows`, `console__foot`, `console__empty`, `console__toggle` | `svt-console`, `svt-console__…` |
| `row`, `row__time`, `row__body`, `row__text`, `row__detail`, `row__host`, `row--indent1`, `row--indent2`, `row--pass`, `row--fail`, `row--error`, `row--warn`, `row--muted` | `svt-console-row`, `svt-console-row__…`, `svt-console-row--…` |
| `surveypane`, `surveypane--empty`, `surveypane__badge` | `svt-survey-pane`, `svt-survey-pane--empty`, `svt-survey-pane__badge` |
| `spectator`, `target-highlight`, `target-focus` | `svt-spectator`, `svt-target-highlight`, `svt-target-focus` |
| `newtest`, `newtest__row`, `newtest__hint`, `newtest__refused` | `svt-new-test`, `svt-new-test__…` |
| `assert`, `assert__row`, `assert__line` | `svt-assert`, `svt-assert__…` |
| `why`, `why__label`, `why__line`, `why__note` | `svt-why`, `svt-why__…` |
| `alert`, `alert--error`, `alert--warning`, `alert--info` | `svt-alert`, `svt-alert--…` |
| `badge`, `badge--ok`, `badge--warning`, `badge--error` | `svt-badge`, `svt-badge--…` |
| `field`, `field--check`, `input`, `input--small` | `svt-field`, `svt-field--check`, `svt-input`, `svt-input--small` |
| `code`, `code--tiny`, `mono` | `svt-code`, `svt-code--tiny`, `svt-mono` |
| `link--danger`, `link--tiny` | `svt-link--danger`, `svt-link--tiny` |

Three of those rows are more than a prefix, and each is a collision the prefix alone would have created:
`tdot` and `dot` are two different dots (a row's tone dot and the shared status dot), so they become
`svt-dot` and `svt-status-dot`; `row` is the console's transcript line and is far too generic to hold a
whole namespace's `svt-row`, so it becomes `svt-console-row`.

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

Layer 1 — the runner half — ported in prompt 02, renamed as the table above says and not otherwise
touched:

| Prototype | Here |
|---|---|
| `src/model/runnerModel.ts` | `model/runnerModel.ts` — `TesterRunnerModel`: the run, the batching, the list, the three toolbars |
| `src/model/testRowModel.ts` | `model/testRowModel.ts` — `TesterTestRowModel` |
| `src/model/stepRowModel.ts` | `model/stepRowModel.ts` — `TesterStepRowModel` |
| `src/model/consoleModel.ts` | `model/consoleModel.ts` — `TesterConsoleModel` |
| `src/model/checkView.ts` | `model/checkView.ts` — why a check did not hold, as data a view loops over |
| `src/model/statusTone.ts` | `model/statusTone.ts` |
| `src/model/runnerCss.ts` | `model/runnerCss.ts` — the `css` maps the reused chrome models are dressed with |
| `src/model/runnerApi.ts` | `model/runnerApi.ts` — `StartParams`, `StepRunParams`, `StepCursor`, `RunnerApi`, and (since prompt 03) the row verbs of the deleted `runnerHost.ts` |
| `src/model/runnerHost.ts` | gone; its interfaces are in `model/runnerApi.ts` under `ITester…` names |
| `src/model/arrays.ts` | `model/arrays.ts` |
| `src/model/setupSurvey.ts` | `model/setupSurvey.ts` — the host-options survey definition |
| `src/model/decorators.test.ts` | `tests-tester/model/decorators.test.ts` |
| `src/model/runnerModel.test.ts` | `tests-tester/model/runnerModel.test.ts` |
| `scripts/check-layers.mjs` | `tests-tester/checkLayers.ts` — a test helper here, because this package runs its fences from vitest |

`src/model/checkListModel.ts` is the recorder's check menu and arrives with prompt 05; `src/store/useRunner.ts`
is React's ownership shim and is not ported at all — prompt 07 writes its equivalent where React lives.

The widget shell, ported in prompt 03. Its sources are the prototype's `components/test/TestTab.tsx`,
`components/test/JsonScreen.tsx`, the half of `App.tsx` the Test tab needed, and `SetupTab`:

| Prototype | Here |
|---|---|
| `src/components/test/TestTab.tsx` + the Test-tab half of `src/App.tsx` | `model/testerModel.ts` — `SurveyTesterModel`: the documents, the screens, the transitions, the state |
| — (new) | `model/testerHost.ts` — `ITesterHost`, `ITesterOptions`, `ITesterState` |
| `src/components/test/JsonScreen.tsx` + `src/components/TestsJsonEditor.tsx` | `model/jsonModel.ts` — `TesterJsonModel` |
| `src/views/react/SetupTab.tsx` + `SetupModel` | `model/settingsModel.ts` — `TesterSettingsModel`, the setup survey in a popup |
| — (new) | `localization/english.ts`, `localization/index.ts` |
| `src/store/usePersistentState.ts` | **not ported**: the host owns persistence, and `getState`/`setState` is what replaces it |

The recorder's engine, ported in prompt 04. Layer 0 came over as it was; the hook became a model.

| Prototype | Here |
|---|---|
| `src/tester/recorder/capture.ts` | `recorder/capture.ts` — the two-signal attribution: the gesture window, `ValueChangedEvent.reason`, coalescing, `flush()` |
| `src/tester/recorder/caseEdit.ts` | `recorder/caseEdit.ts` — every document edit, as `modify` + `applyEdits` at `tests[i]…` |
| `src/tester/recorder/checks.ts` | `recorder/checks.ts` — what an adorner offers, and a provisional expectation of each |
| `src/tester/recorder/elementRegistry.ts` | `recorder/elementRegistry.ts` — element to rendered node, fed by the model's `onAfterRender*` events |
| `src/tester/recorder/silentRun.ts` | `recorder/silentRun.ts` — the zero-delay headless prefix run; blocking-issue extraction |
| `src/tester/recorder/stepText.ts` | `recorder/stepText.ts` — step summaries for grids and menus |
| `src/tester/recorder/targetName.ts` | `recorder/targetName.ts` — a thin adapter over `SurveyTestTargets.nameOf` |
| `src/tester/recorder/options.ts` | `recorder/options.ts` — `RecorderOptions`, `autoStepName` |
| `src/store/useRecorder.ts` | `model/recorderModel.ts` — `TesterRecorderModel`: the session as a `Base` model |
| `src/tester/recorder/capture.test.ts`, `recorder.test.ts` | `tests-tester/recorder/*` |
| the behaviour half of `src/components/recorder/recorderTab.test.tsx` | `tests-tester/model/recorderModel.test.ts` |

Three things changed in that port and are worth knowing:

* `IgnoredReason` is spelled in codes (`noGesture`, `notAddressable`, `paused` — the prototype's "not
  recording") rather than in sentences, because every person-readable word belongs to the string table.
  What the strip prints is `recorder.reason.<code>`.
* `capture.ts`'s listener set is put on a node by `TesterRecorderModel.attachTo(pane)` / `detach()`.
  That is the **only** DOM seam of the model layer; a session that was never attached still records
  every model-driven step, which is what the model tests drive.
* `core/json.ts` reads the suite with `jsonc-parser` now. A widget whose only reader was `JSON.parse`
  reported a commented document as broken, so the "a hand-formatted, commented suite survives being
  recorded into" promise could never be kept however careful the edits were.

Still to arrive: the recorder's presentation models — the steps survey, the check menu, the adorner
data, the session bar (prompt 05) — and `theme/` and `index.ts` (prompt 06).
