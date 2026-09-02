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

Two names in layer 1 are still the prototype's on purpose, and prompt 03 settles both when it writes the
host contract: `SetupModel` (`model/setupSurvey.ts`) and the `RunnerEnvironment` / `TestsPanelExtras` /
`TestRowActions` interfaces of `model/runnerHost.ts`. They describe what the *host* hands the widget, and
renaming them here and again there would be two renames of one thing.

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
| `src/model/runnerApi.ts` | `model/runnerApi.ts` — `StartParams`, `StepRunParams`, `StepCursor`, `RunnerApi` |
| `src/model/runnerHost.ts` | `model/runnerHost.ts` — `RunnerEnvironment` and the row verbs; folded into `ITesterHost` in prompt 03 |
| `src/model/arrays.ts` | `model/arrays.ts` |
| `src/model/setupSurvey.ts` | `model/setupSurvey.ts` — the host-options survey |
| `src/model/decorators.test.ts` | `tests-tester/model/decorators.test.ts` |
| `src/model/runnerModel.test.ts` | `tests-tester/model/runnerModel.test.ts` |
| `scripts/check-layers.mjs` | `tests-tester/checkLayers.ts` — a test helper here, because this package runs its fences from vitest |

`src/model/checkListModel.ts` is the recorder's check menu and arrives with prompt 05; `src/store/useRunner.ts`
is React's ownership shim and is not ported at all — prompt 07 writes its equivalent where React lives.

Still to arrive: `recorder/` (prompt 04), the widget root and the recorder models in `model/`
(prompts 03, 04, 05), `localization/` (prompt 03), `theme/` and `index.ts` (prompt 06).
