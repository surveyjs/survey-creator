# SurveyJS Survey Creator for HTML/CSS/JavaScript — Drag-and-Drop Form Builder

[![SurveyJS Survey Creator](https://github.com/user-attachments/assets/1801367a-47fb-486b-8355-4c92e449755b)](https://surveyjs.io/create-free-survey)

[![Build Status](https://dev.azure.com/SurveyJS/V2%20Libraries/_apis/build/status%2Fcreator%2FCreator%20Main?repoName=surveyjs%2Fsurvey-creator&branchName=master)](https://dev.azure.com/SurveyJS/V2%20Libraries/_build/latest?definitionId=149&repoName=surveyjs%2Fsurvey-creator&branchName=master)
[![NPM Version](https://img.shields.io/npm/v/survey-creator-js.svg)](https://www.npmjs.com/package/survey-creator-js)
[![Tested with Playwright](https://img.shields.io/badge/tested%20with-Playwright-2fa4cf.svg)](https://playwright.dev)
[![Open Issues](https://img.shields.io/github/issues/surveyjs/survey-creator.svg)](https://github.com/surveyjs/survey-creator/issues)
[![Closed Issues](https://img.shields.io/github/issues-closed/surveyjs/survey-creator.svg)](https://github.com/surveyjs/survey-creator/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+)

`survey-creator-js` renders [Survey Creator](https://surveyjs.io/survey-creator) — the drag-and-drop form builder for [SurveyJS Form Library](https://surveyjs.io/form-library) — in plain HTML/CSS/JavaScript applications, with no frontend framework required. It is the framework-free view layer over [`survey-creator-core`](https://www.npmjs.com/package/survey-creator-core), the platform-independent model that holds the design surface, toolbox, property grid, and the logic, translation, and theme editors. Rendering is powered internally by [Preact](https://preactjs.com/). You configure a builder instance and mount it into any DOM element with `creator.render(document.getElementById("surveyCreator"))`. jQuery applications are supported through the `SurveyCreator()` plugin this package registers.

> Use this package when your framework has no dedicated Survey Creator renderer — Vue 2, older Angular versions, and frameworks not yet officially supported, such as [Svelte](https://svelte.dev). `creator.render(container)` mounts the builder into any DOM element, so it can be driven from any component model. For React, Angular v12+, and Vue 3, prefer the [dedicated renderers](#related-packages).

Users design forms visually; the builder produces a survey JSON schema that [`survey-js-ui`](https://www.npmjs.com/package/survey-js-ui) renders as a working form.

[Try Survey Creator / Form Builder](https://surveyjs.io/create-free-survey)

## Install

```sh
npm install survey-creator-js --save
```

Or load it from a CDN, together with `survey-creator-core`, the Form Library resources, and the style sheets:

```html
<!-- SurveyJS Form Library resources -->
<link href="https://unpkg.com/survey-core/survey-core.min.css" type="text/css" rel="stylesheet">
<script src="https://unpkg.com/survey-core/survey.core.min.js"></script>
<script src="https://unpkg.com/survey-js-ui/survey-js-ui.min.js"></script>

<!-- Survey Creator resources -->
<link href="https://unpkg.com/survey-creator-core/survey-creator-core.min.css" type="text/css" rel="stylesheet">
<script src="https://unpkg.com/survey-creator-core/survey-creator-core.min.js"></script>
<script src="https://unpkg.com/survey-creator-js/survey-creator-js.min.js"></script>
```

## License key

Survey Creator displays an alert banner until you activate a [purchased commercial license](https://surveyjs.io/licensing). Activate your key with `setLicenseKey` from `survey-core`:

```js
import { setLicenseKey } from "survey-core";

setLicenseKey("your-license-key-goes-here");
```

Call it before `creator.render(container)`. With the CDN script tags above, use the `Survey` global instead: `Survey.setLicenseKey("your-license-key-goes-here")`. Your key and step-by-step setup instructions are on the [How to Remove the Alert Banner](https://surveyjs.io/remove-alert-banner) page in your SurveyJS account.

## Usage

With a bundler — `survey-creator-js` exports a `SurveyCreator` class that adds a `render` method to the model:

```js
import { SurveyCreator } from "survey-creator-js";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";

const creatorOptions = {
  autoSaveEnabled: true,
  collapseOnDrag: true
};

const creator = new SurveyCreator(creatorOptions);
creator.saveSurveyFunc = (saveNo, callback) => {
  // Save `creator.JSON` or `creator.text` to your database, then:
  callback(saveNo, true);
};

creator.render(document.getElementById("surveyCreator"));
```

The container must have an explicit height, because Survey Creator fills the space it is given:

```html
<div id="surveyCreator" style="height: 100vh;"></div>
```

With the CDN script tags above, the library is exposed as the `SurveyCreator` global:

```js
const creator = new SurveyCreator.SurveyCreator(creatorOptions);
document.addEventListener("DOMContentLoaded", function () {
  creator.render(document.getElementById("surveyCreator"));
});
```

If your application uses jQuery, render the builder with the `SurveyCreator()` plugin:

```js
$("#surveyCreator").SurveyCreator({ model: creator });
```

## Themes

`survey-creator-core/survey-creator-core.css` applies the Light UI theme. The Dark, Contrast, and Survey Creator 2020 themes are imported from `survey-creator-core/themes` and applied with `creator.applyCreatorTheme(theme)`:

```js
import { DefaultDark } from "survey-creator-core/themes";

creator.applyCreatorTheme(DefaultDark);
```

The UI theme styles the builder itself. The look of the forms it produces is edited in the built-in Theme tab and stored in the survey theme JSON. See [Themes & Styles](https://surveyjs.io/survey-creator/documentation/survey-creator-interface-themes) and [Theme Editor](https://surveyjs.io/survey-creator/documentation/theme-editor).

## Theme adapters

A *theme adapter* maps an existing design system's CSS variables onto SurveyJS design tokens, so a survey inherits the look of the host application. Survey Creator supports adapters: the form on the design surface and in the Preview tab is a real survey, so it picks up whichever adapter the page loads. Adapters ship with `survey-core` as plain CSS — load one after the base style sheets:

```html
<link href="https://unpkg.com/survey-core/survey-core.min.css" type="text/css" rel="stylesheet">
<link href="https://unpkg.com/survey-creator-core/survey-creator-core.min.css" type="text/css" rel="stylesheet">
<link href="https://unpkg.com/survey-core/themes/adapters/bootstrap-default.css" type="text/css" rel="stylesheet">
```

Adapters are available for [Bootstrap](https://getbootstrap.com) (plus Bootswatch variants), [Material UI](https://mui.com), and [shadcn/ui](https://ui.shadcn.com), with matching icon sets (`survey-core/themes/adapters/icons/lucide`, `.../icons/mui`). See [Theme Adapters](https://surveyjs.io/themes/theme-adapters).

## Key features

### HTML/CSS/JavaScript Integration

- Framework-free rendering package for SurveyJS Creator, powered internally by Preact
- Framework-independent editor model through `survey-creator-core`
- Mounts into any DOM element with `creator.render(container)`; jQuery plugin included
- TypeScript support
- Client-side form editing without a required SurveyJS backend

### Visual Form Editing

- Drag-and-drop form builder UI
- Multi-page forms and form wizards
- Conditional visibility, branching, validation, and calculated values
- Dedicated Logic and JSON Editor interfaces
- Form preview before publication

### Customizable Editor UI

- Configure the Toolbox, Property Grid, tabs, actions, and editor behavior
- [Create reusable configurations with the UI Preset Editor](https://surveyjs.io/survey-creator/documentation/ui-preset-editor)
- [Add custom question types and reusable components](https://surveyjs.io/survey-creator/documentation/customize-question-types)
- Configure different editor experiences for roles, tenants, or subscription plans

### Appearance Customization

- Built-in themes and custom branding
- Shared design token system based on CSS variables
- [Theme Adapters for Bootstrap, Material UI, and shadcn/ui](https://surveyjs.io/themes/theme-adapters)
- Localization and right-to-left language support

## Related packages

| Package | Purpose |
| --- | --- |
| [`survey-creator-core`](https://www.npmjs.com/package/survey-creator-core) | Platform-independent Survey Creator model (peer dependency) |
| [`survey-creator-react`](https://www.npmjs.com/package/survey-creator-react) | React renderer |
| [`survey-creator-angular`](https://www.npmjs.com/package/survey-creator-angular) | Angular renderer |
| [`survey-creator-vue`](https://www.npmjs.com/package/survey-creator-vue) | Vue 3 renderer |
| [`survey-js-ui`](https://www.npmjs.com/package/survey-js-ui) | Renders the forms that Survey Creator produces |

## Documentation

- [Website](https://surveyjs.io/)
- [Documentation](https://surveyjs.io/survey-creator/documentation/overview)
- [Get Started with HTML/CSS/JavaScript](https://surveyjs.io/survey-creator/documentation/get-started-html-css-javascript)
- [API Reference](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator)
- [Live Examples](https://surveyjs.io/survey-creator/examples/free-nps-survey-template/vanillajs)
- [What's New](https://surveyjs.io/stay-updated/major-updates/2025-2026)

For AI coding agents: [https://surveyjs.io/llms.txt](https://surveyjs.io/llms.txt) indexes the documentation. Any documentation page is also available as raw Markdown — append `.md` to its URL, for example [https://surveyjs.io/survey-creator/documentation/get-started-html-css-javascript.md](https://surveyjs.io/survey-creator/documentation/get-started-html-css-javascript.md).

## SurveyJS ecosystem

| Product | Purpose | License |
| --- | --- | --- |
| [Form Library](https://surveyjs.io/form-library) | Render dynamic forms from JSON | MIT |
| [Survey Creator](https://surveyjs.io/survey-creator) | Drag-and-drop form builder UI (this package) | Commercial |
| [Dashboard](https://surveyjs.io/dashboard) | Visualize and analyze collected results | Commercial |
| [PDF Generator](https://surveyjs.io/pdf-generator) | Render forms and responses as PDF | Commercial |
| [AI Form Response Extractor](https://surveyjs.io/documentation/combine-paper-and-online-survey-form-data) | Extract responses from paper forms, PDFs, and images into a SurveyJS schema (`ai-form-response-extractor`) | MIT |

## Build from sources

This monorepo does **not** use npm workspaces: each package installs independently, but a root install is still required for the shared tooling (linting, Playwright).

1. **Build `survey-library` and `survey-creator-core` first**

    This package resolves `survey-core`, `survey-js-ui`, and `survey-creator-core` from sibling `build` folders, so those must be built before this library can be built or tested. Refer to the following instructions:

    - [Build from sources](https://github.com/surveyjs/survey-library/blob/master/packages/survey-core/README.md#build-from-sources) in the `survey-core` README — build `survey-core`, then `survey-js-ui`.
    - [Build from sources](https://github.com/surveyjs/survey-creator/blob/master/packages/survey-creator-core/README.md#build-from-sources) in the `survey-creator-core` README.

    > NOTE: Make sure that the folders with the cloned `survey-library` and `survey-creator` repositories are in the same directory.

2. **Install dependencies and build this library**

    ```sh
    cd packages/survey-creator-js
    npm install
    npm run build
    ```

    Build output goes to the `build` directory. Use `npm run watch:dev` while developing.

3. **Run a test application**

    ```sh
    npm run start
    ```

    This serves the package directory at http://localhost:8080/.

4. **Run end-to-end tests**

    This package has no unit tests of its own — the model logic is covered by the [`survey-creator-core`](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core) suite.

    E2E, visual-regression, and accessibility tests are Playwright suites. Do not start an HTTP server yourself — the Playwright config starts its own.

    ```sh
    npm run e2e:ci                        # e2e
    npm run e2e:ci -- --grep "TestName"   # a single test
    npm run test:scr:ci                   # visual regression
    npm run test:a11y:ci                  # accessibility
    ```

## Licensing

You can install Survey Creator and evaluate its full functionality right away — no license is needed to prototype, test, or build a proof of concept. Production use requires a [commercial license](https://surveyjs.io/licensing) for each developer who works with the SurveyJS APIs or implements the integration, and activating a [license key](#license-key) removes the alert banner. The forms Survey Creator produces are rendered by [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview), which is MIT-licensed and runs free of charge.
