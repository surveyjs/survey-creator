# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This is the visual **survey designer / form builder** built on top of [survey-library](../survey-library) (`survey-core` + its UI renderers). It is a sibling repo: clone it next to `survey-library` under the same parent folder, because dependencies are wired by relative path (see below).

## Repository layout

This is a monorepo (npm workspaces are *not* used — each package installs and builds independently). The packages under `packages/` are:

- **survey-creator-core** — the platform-independent creator model. All business logic lives here: the tab/plugin system, the property grid, the toolbox, drag & drop of survey elements, the logic/translation/theme editors, undo-redo, localization, creator theming, and SCSS styles. The UI packages are thin rendering layers on top of it (same relationship survey-core has with its UI renderers).
- **survey-creator-react** — React 17 renderer (`.tsx`, built with Rollup). Unit tests run on **Jest**.
- **survey-creator-vue** — Vue 3 renderer (`.vue`, built with Vite). Unit tests run on **Vitest**.
- **survey-creator-angular** — Angular renderer (built with `ng build`). Unit tests run on **Karma** (`ng test`).
- **survey-creator-js** — framework-free / Knockout HTML-CSS-JS renderer (built with Rollup, typings `survey-js-ui.d.ts`). Unit tests run on **Jest**.

### Dependency wiring (read this before building)

Every package resolves its survey-library and creator-core dependencies through **Junction symlinks in `node_modules` that point at sibling `build/` folders** (declared as relative-path versions in each `package.json`):

- `survey-creator-core` → `survey-core` (`../../../survey-library/packages/survey-core/build`).
- `survey-creator-react` → `survey-core`, **`survey-react-ui`**, `survey-creator-core`.
- `survey-creator-vue` → `survey-core`, **`survey-vue3-ui`**, `survey-creator-core`.
- `survey-creator-angular` → `survey-core`, **`survey-angular-ui`**, `survey-creator-core`.
- `survey-creator-js` → `survey-core`, **`survey-js-ui`**, `survey-creator-core`.

**Build order.** Because these are symlinks to `build/` output, an upstream package generally needs to be built before a downstream one can build, run, or test:

```
survey-library/survey-core
  → survey-library/survey-<framework>-ui  (react / vue3 / angular / js)
    → survey-creator-core
      → survey-creator-<framework>
```

If you change survey-core or a renderer in the survey-library repo, rebuild it there first; if you change `survey-creator-core`, rebuild it before testing a UI package.

## Build

```bash
# survey-creator-core (run from packages/survey-creator-core) — build this before building/testing any UI package
npm run build          # main JS bundle + non-source files
npm run build:all      # build + i18n (build:i18n) + themes (build:themes)

# UI packages (run from the package dir)
npm run build          # react / js (rollup) · vue (vite build) · angular (ng build)
```

`npm run dev` from the repo root spins up survey-library's dev server plus rollup watchers for creator-core and the React/Knockout renderers, served on `http://localhost:7777`.

Styles are authored in SCSS under `packages/survey-creator-core/src/` (`ctr-*.scss`, `lbr-*.scss`, `creator-theme/`, plus per-component `.scss` next to each component) and compiled into the creator-core build.

## Lint

```bash
npm run lint           # eslint, --max-warnings=0 (root or any package)
npm run lint:fix
```

ESLint is enforced with zero warnings (the repo uses `eslint-plugin-surveyjs`). `lint-staged` runs `eslint --fix` on commit, commit messages must follow Conventional Commits, and the husky `pre-push` hook runs `npm run lint`.

## Tests

### Unit tests — survey-creator-core (Vitest + jsdom)
Run from `packages/survey-creator-core`. This is where the bulk of the logic tests live.

```bash
npm run test                      # all unit tests (vitest run)
npm run test:watch
npm run test:core                 # only the "core" vitest project
npx vitest run tests/<file>.ts    # single file
npx vitest run -t "test name"     # single test by name substring
```

**Suggested default: run a single test (or single file) while iterating** — the full creator-core suite is large and slow to wait on. A practical loop is to narrow with `npx vitest run -t "test name"` or `npx vitest run tests/<file>.ts`, get that target green, then run the whole `npm run test` once to check for regressions. Skip the narrowing when it doesn't help (e.g. a broad change touching many files).

### Unit tests — UI packages
The unit-test runner differs per framework — don't assume Vitest everywhere:

```bash
# react / js  (Jest)
npm run test
npm run test:update               # update Jest snapshots (-u)
# vue  (Vitest)
npm run test
# angular  (Karma)
npm run test                      # cross-env NODE_OPTIONS=--openssl-legacy-provider ng test
```

### E2E / VRT / a11y (Playwright)
The **root `playwright.config.ts`** defines four projects shared by all UI packages: `e2e` (`./e2e`), `scr` (`./screenshotTests`), `scr_legacy` (`./screenshotLegacyTests`), `a11y` (`./accessibilityTests`). There is also a `functionalTests/` tree (TestCafe-era functional specs grouped by area: `designer`, `preview`, `property-grid`, `theme`, `json`, `embed`). Each UI package's own `playwright.config.ts` re-exports the root config and sets its `webServer.command` to `npm run serve`. Run from the package dir:

```bash
npm run e2e:ci -- --project e2e            # e2e
npm run e2e:ci -- --project scr            # visual regression
npm run e2e:ci -- --project a11y           # axe-based a11y
npm run e2e:ci -- --project e2e --grep "TestName"   # single test
# drop the :ci suffix (npm run e2e) to open Playwright's interactive UI
```

Prerequisites for Playwright runs:
- Build the upstream chain first (survey-core → the matching `survey-<framework>-ui` → `survey-creator-core`), then build the package under test.
- Let Playwright start its own server via the package's `webServer` config — don't pre-start one, or you'll get "port already in use".
- Run one package's tests at a time to keep output manageable.

## Architecture

### The creator model: `SurveyCreatorModel`
`packages/survey-creator-core/src/creator-base.ts` defines `SurveyCreatorModel` (exported also as the legacy alias `CreatorBase`). It extends survey-core's `Base`, so it participates in the same serialization/reactivity system as the survey model. It owns the edited `SurveyModel` (`creator.survey`), the active tab, the selected element, the toolbox, the property grid, undo-redo, and the full event API (`creator-events-api.ts`). A UI creator component (e.g. `SurveyCreatorComponent` / `SurveyCreator.tsx`) is a paper-thin view over this model — new behavior almost always belongs in `survey-creator-core`.

### Tabs are plugins (`ICreatorPlugin`)
The creator UI is a set of tabs, each implemented as a plugin. `ICreatorPlugin` is defined in `creator-settings.ts`; plugins register themselves on the model via `creator.addPlugin(name, plugin)` / `addPluginTab(...)` and are retrieved with `creator.getPlugin(name)`. The active tab is `creator.activeTab`. The built-in tab plugins live in `packages/survey-creator-core/src/components/tabs/`:

- **designer** (`designer-plugin.ts`) — the drag-and-drop WYSIWYG surface.
- **test** / preview (`test-plugin.ts`) — runs the survey.
- **editor / JSON** (`json-editor-plugin.ts`, with `json-editor-ace.ts` and `json-editor-textarea.ts` backends).
- **logic** (`logic-plugin.ts`) — visibility/enable/trigger rules editor.
- **translation** (`translation-plugin.ts`) — multi-locale string editor.
- **theme** (`theme-plugin.ts`) — visual theme builder.

The tab strip itself is `tabbed-menu.ts`.

### Property grid
`packages/survey-creator-core/src/property-grid/` renders the right-hand property panel. Crucially, **the property grid is itself a SurveyJS survey** generated from the selected object's serialization metadata (`Serializer` from survey-core) — editing a property updates the model through the same metadata layer. Custom editors for specific property types (conditions/expressions, value tables, masks, REST settings, bindings, matrices, header settings, theme settings) are registered via `PropertyGridEditorCollection.register(...)` in the corresponding files (`condition.ts`, `values.ts`, `maskSettings.ts`, `restfull.ts`, `bindings.ts`, `matrices.ts`, …). To expose a new question property in the designer you usually only register it in survey-core's `Serializer`; the grid picks it up automatically, and you add a dedicated editor here only for non-trivial types.

### Toolbox
`toolbox.ts` (`QuestionToolbox`, `QuestionToolboxItem`, `QuestionToolboxCategory`) is the palette of draggable question types. Items are derived from the question types registered in survey-core's factories and can be customized/extended per creator instance.

### Localization
`editorLocalization.ts` exposes the `editorLocalization` singleton (`EditorLocalization` class) and `defaultStrings`/`enStrings`; per-locale strings live in `src/localization/`. This is the creator's own string table, separate from survey-core's `surveyStrings`.

### Public API surface
`packages/survey-creator-core/src/entries/index.ts` is the public export surface (set `process.env.VERSION` into `Version`). Like survey-core, factories and registrations are populated by import side effects, so the entry file determines what gets bundled and registered.

## Coding conventions

- **Do not generate API doccomments** (`/** ... */`) for either new or existing API members.
- If an API requires clarification for maintainers, add a regular JavaScript comment (`//` or `/* ... */`) in the implementation instead of a doccomment.
