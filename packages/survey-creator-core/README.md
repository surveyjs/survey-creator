# survey-creator-core

[![SurveyJS Survey Creator](https://github.com/user-attachments/assets/1801367a-47fb-486b-8355-4c92e449755b)](https://surveyjs.io/create-free-survey)

[![Build Status](https://dev.azure.com/SurveyJS/V2%20Libraries/_apis/build/status%2Fcreator%2FCreator%20Main?repoName=surveyjs%2Fsurvey-creator&branchName=master)](https://dev.azure.com/SurveyJS/V2%20Libraries/_build/latest?definitionId=149&repoName=surveyjs%2Fsurvey-creator&branchName=master)
[![NPM Version](https://img.shields.io/npm/v/survey-creator-core.svg)](https://www.npmjs.com/package/survey-creator-core)
[![Tested with Playwright](https://img.shields.io/badge/tested%20with-Playwright-2fa4cf.svg)](https://playwright.dev)
[![Open Issues](https://img.shields.io/github/issues/surveyjs/survey-creator.svg)](https://github.com/surveyjs/survey-creator/issues)
[![Closed Issues](https://img.shields.io/github/issues-closed/surveyjs/survey-creator.svg)](https://github.com/surveyjs/survey-creator/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+)

`survey-creator-core` is the platform-independent model of [Survey Creator](https://surveyjs.io/survey-creator), the drag-and-drop form builder for [SurveyJS Form Library](https://surveyjs.io/form-library). It holds everything that does not depend on a rendering framework: the tab and plugin system, the design surface, the toolbox, the property grid, the logic, translation, and theme editors, undo-redo, localization, and the UI style sheets. **It does not render anything on its own** — pair it with one of the [platform-specific UI packages](#related-packages) below. Installing `survey-creator-core` alone is the most common reason the builder never appears on the page.

Survey Creator produces survey JSON schemas that [SurveyJS Form Library](https://surveyjs.io/form-library) renders in your application.

[Try Survey Creator / Form Builder](https://surveyjs.io/create-free-survey)

## Install

Install the UI package for your framework — `survey-creator-core` comes with it as a dependency:

```sh
npm install survey-creator-react   # React
npm install survey-creator-angular # Angular
npm install survey-creator-vue     # Vue 3
npm install survey-creator-js      # HTML/CSS/JavaScript
```

To add the model on its own (for example, in code shared between a UI layer and a Node.js service):

```sh
npm install survey-creator-core
```

## Usage

```js
import { SurveyCreatorModel } from "survey-creator-core";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";

const creatorOptions = {
  autoSaveEnabled: true,
  collapseOnDrag: true
};

const creator = new SurveyCreatorModel(creatorOptions);

creator.saveSurveyFunc = (saveNo, callback) => {
  // Save `creator.JSON` or `creator.text` to your database, then:
  callback(saveNo, true);
};
```

Pass the `creator` instance to the component from your UI package to render it — for example, `<SurveyCreatorComponent creator={creator} />` in React. See the Get Started tutorial for your framework in the table below.

`survey-creator-core/survey-creator-core.css` applies the Light UI theme; `survey-creator-core.min.css` is the minified build. The Dark, Contrast, and Survey Creator 2020 themes are imported from `survey-creator-core/themes` and applied with `creator.applyCreatorTheme(theme)` — refer to [Themes & Styles](https://surveyjs.io/survey-creator/documentation/survey-creator-interface-themes).

`survey-creator-core` also holds the model's own string table (`editorLocalization`), separate from `survey-core`'s. Per-locale strings are imported from `survey-creator-core/i18n`.

## Theme adapters

Themes are built on `--sjs-*` CSS custom properties (design tokens). A *theme adapter* maps an existing design system's variables onto those tokens, so a survey inherits the look of the host application instead of being restyled by hand. Survey Creator supports adapters: the form on the design surface and in the Preview tab is a real survey, so it picks up whichever adapter the page loads. Adapters ship with `survey-core` as plain CSS — import one after the base style sheets:

```js
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";
import "survey-core/themes/adapters/bootstrap-default.css";
```

Adapters are available for [Bootstrap](https://getbootstrap.com), [Material UI](https://mui.com) (`mui.css`), and [shadcn/ui](https://ui.shadcn.com) (`shadcn-default.css`, `shadcn-new-york.css`). Bootstrap additionally ships [Bootswatch](https://bootswatch.com) variants — `bootstrap-darkly.css`, `bootstrap-flatly.css`, and others. Because adapters read the host system's live variables, any Bootstrap or Bootswatch build re-skins the survey automatically. Matching icon sets are optional side-effect imports:

```js
import "survey-core/themes/adapters/icons/lucide"; // or ".../icons/mui"
```

Adapters are framework-independent and require no extra markup or configuration. They restyle the survey; the Survey Creator UI around it is styled by the creator UI themes described above. See [Theme Adapters](https://surveyjs.io/themes/theme-adapters).

## Related packages

| Framework | UI package | Get Started |
| --- | --- | --- |
| React | [`survey-creator-react`](https://www.npmjs.com/package/survey-creator-react) | [Tutorial](https://surveyjs.io/survey-creator/documentation/get-started-react) |
| Angular | [`survey-creator-angular`](https://www.npmjs.com/package/survey-creator-angular) | [Tutorial](https://surveyjs.io/survey-creator/documentation/get-started-angular) |
| Vue 3 | [`survey-creator-vue`](https://www.npmjs.com/package/survey-creator-vue) | [Tutorial](https://surveyjs.io/survey-creator/documentation/get-started-vue) |
| HTML/CSS/JavaScript | [`survey-creator-js`](https://www.npmjs.com/package/survey-creator-js) | [Tutorial](https://surveyjs.io/survey-creator/documentation/get-started-html-css-javascript) |

## Documentation

- [Website](https://surveyjs.io/)
- [Documentation](https://surveyjs.io/survey-creator/documentation/overview)
- [API Reference](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator)
- [Live Examples](https://surveyjs.io/survey-creator/examples/free-nps-survey-template/reactjs)
- [What's New](https://surveyjs.io/WhatsNew)

For AI coding agents: [https://surveyjs.io/llms.txt](https://surveyjs.io/llms.txt) indexes the documentation. Any documentation page is also available as raw Markdown — append `.md` to its URL, for example [https://surveyjs.io/survey-creator/documentation/get-started-react.md](https://surveyjs.io/survey-creator/documentation/get-started-react.md).

## SurveyJS ecosystem

| Product | Purpose | License |
| --- | --- | --- |
| [Form Library](https://surveyjs.io/form-library) | Render dynamic forms from JSON | MIT |
| [Survey Creator](https://surveyjs.io/survey-creator) | Drag-and-drop form builder UI (this package) | Commercial |
| [Dashboard](https://surveyjs.io/dashboard) | Visualize and analyze collected results | Commercial |
| [PDF Generator](https://surveyjs.io/pdf-generator) | Render forms and responses as PDF | Commercial |
| [AI Form Response Extractor](https://surveyjs.io/documentation/combine-paper-and-online-survey-form-data) | Extract responses from paper forms, PDFs, and images into a SurveyJS schema (`ai-form-response-extractor`) | MIT |

## Build from sources

This monorepo does **not** use npm workspaces — each package installs and builds independently, but a root install is still required for the shared tooling (linting, Playwright).

1. **Build `survey-library`**

    Survey Creator resolves `survey-core` and the framework renderers from the sibling [`survey-library`](https://github.com/surveyjs/survey-library) repository, so clone it into the same parent directory as `survey-creator` and build it first. Follow [Build from sources](https://github.com/surveyjs/survey-library/blob/master/packages/survey-core/README.md#build-from-sources) in the `survey-core` README.

2. **Clone the repo and install shared dependencies**

    ```sh
    git clone https://github.com/surveyjs/survey-creator.git
    cd survey-creator
    npm install
    ```

    > NOTE: Make sure that the folders with the cloned `survey-library` and `survey-creator` repositories are in the same directory.

3. **Install and build `survey-creator-core`**

    ```sh
    cd packages/survey-creator-core
    npm install
    npm run build:all
    ```

    Build output goes to the `build` directory. `npm run build` produces the JS bundle, the SCSS-compiled styles, and the UI presets; `npm run build:all` adds i18n and the API documentation. Use `npm run watch:dev` while developing.

    Every UI package resolves `survey-creator-core` from `../survey-creator-core/build`, so **survey-creator-core must be built before you build or test any UI package.**

4. **Run unit tests**

    Unit tests use [Vitest](https://vitest.dev/) in a jsdom environment and live in `packages/survey-creator-core/tests`. They are split into two Vitest projects: `core` and `presets`.

    ```sh
    npm run test                          # whole suite
    npm run test:watch                    # watch mode
    npm run test:core                     # only the "core" project
    npm run test:presets                  # only the "presets" project
    npx vitest run tests/creator-base-1.tests.ts   # a single file
    npx vitest run -t "toolbox"                    # tests whose name matches a substring
    ```

5. **Run end-to-end tests**

    E2E, visual-regression, and accessibility tests are Playwright suites shared by all UI packages and run from a UI package directory (after `survey-creator-core` is built). Do not start an HTTP server yourself — the Playwright config starts its own.

    ```sh
    cd packages/survey-creator-react
    npm install
    npm run e2e:ci                        # e2e
    npm run e2e:ci -- --grep "TestName"   # a single test
    npm run test:scr:ci                   # visual regression
    npm run test:a11y:ci                  # accessibility
    ```

6. **Build a UI package**

    - [Survey Creator for Angular](https://github.com/surveyjs/survey-creator/blob/master/packages/survey-creator-angular/README.md#build-from-sources)
    - [Survey Creator for React](https://github.com/surveyjs/survey-creator/blob/master/packages/survey-creator-react/README.md#build-from-sources)
    - [Survey Creator for Vue 3](https://github.com/surveyjs/survey-creator/blob/master/packages/survey-creator-vue/README.md#build-from-sources)
    - [Survey Creator for HTML/CSS/JavaScript](https://github.com/surveyjs/survey-creator/blob/master/packages/survey-creator-js/README.md#build-from-sources)

## Licensing

Survey Creator (Form Builder) is **not available for free commercial usage**. If you want to integrate it into your application, you must purchase a [commercial license](https://surveyjs.io/licensing). However, you can [use Survey Creator online](https://surveyjs.io/create-free-survey) to produce survey JSON schemas and run them with [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview) in your application free of charge.
