# Survey Creator for Vue 3 — Drag-and-Drop Form Builder

[![SurveyJS Survey Creator](https://github.com/user-attachments/assets/1801367a-47fb-486b-8355-4c92e449755b)](https://surveyjs.io/create-free-survey)

[![Build Status](https://dev.azure.com/SurveyJS/V2%20Libraries/_apis/build/status%2Fcreator%2FCreator%20Main?repoName=surveyjs%2Fsurvey-creator&branchName=master)](https://dev.azure.com/SurveyJS/V2%20Libraries/_build/latest?definitionId=149&repoName=surveyjs%2Fsurvey-creator&branchName=master)
[![NPM Version](https://img.shields.io/npm/v/survey-creator-vue.svg)](https://www.npmjs.com/package/survey-creator-vue)
[![Tested with Playwright](https://img.shields.io/badge/tested%20with-Playwright-2fa4cf.svg)](https://playwright.dev)
[![Open Issues](https://img.shields.io/github/issues/surveyjs/survey-creator.svg)](https://github.com/surveyjs/survey-creator/issues)
[![Closed Issues](https://img.shields.io/github/issues-closed/surveyjs/survey-creator.svg)](https://github.com/surveyjs/survey-creator/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+)

`survey-creator-vue` renders [Survey Creator](https://surveyjs.io/survey-creator) — the drag-and-drop form builder for [SurveyJS Form Library](https://surveyjs.io/form-library) — in Vue 3 applications. It is the Vue view layer over [`survey-creator-core`](https://www.npmjs.com/package/survey-creator-core), the platform-independent model that holds the design surface, toolbox, property grid, and the logic, translation, and theme editors. Installing `survey-creator-vue` brings `survey-creator-core` with it — you configure a builder instance with `survey-creator-core` and pass it to this package's `SurveyCreatorComponent` through its `model` prop: `<SurveyCreatorComponent :model="creator" />`.

Users design forms visually; the builder produces a survey JSON schema that [`survey-vue3-ui`](https://www.npmjs.com/package/survey-vue3-ui) renders as a working form.

[Try Survey Creator / Form Builder](https://surveyjs.io/create-free-survey)

## Install

```sh
npm install survey-creator-vue --save
```

> This package targets **Vue 3**. There is no Vue 2 build of Survey Creator; Vue 2 applications can embed the framework-free [`survey-creator-js`](https://www.npmjs.com/package/survey-creator-js) package instead.

## License key

Survey Creator displays an alert banner until you activate a [purchased commercial license](https://surveyjs.io/licensing). Activate your key with `setLicenseKey` from `survey-core`:

```ts
import { setLicenseKey } from 'survey-core';

setLicenseKey('your-license-key-goes-here');
```

Call it once in `main.ts`, before `createApp(App).mount('#app')`. Your key and step-by-step setup instructions are on the [How to Remove the Alert Banner](https://surveyjs.io/remove-alert-banner) page in your SurveyJS account.

## Usage

```vue
<script setup lang="ts">
import type { ICreatorOptions } from 'survey-creator-core';
import { SurveyCreatorModel } from 'survey-creator-core';
import { SurveyCreatorComponent } from 'survey-creator-vue';
import 'survey-core/survey-core.css';
import 'survey-creator-core/survey-creator-core.css';

const creatorOptions: ICreatorOptions = {
  autoSaveEnabled: true,
  collapseOnDrag: true
};

const creator = new SurveyCreatorModel(creatorOptions);
creator.saveSurveyFunc = (saveNo: number, callback: (num: number, status: boolean) => void) => {
  // Save `creator.JSON` or `creator.text` to your database, then:
  callback(saveNo, true);
};
</script>

<template>
  <SurveyCreatorComponent :model="creator" />
</template>
```

The code above registers `SurveyCreatorComponent` locally. To register it globally, install `surveyPlugin` and `surveyCreatorPlugin` in `main.ts` instead, *in the exact order shown below*:

```js
// main.ts
import { createApp } from 'vue';
import { surveyPlugin } from 'survey-vue3-ui';
import { surveyCreatorPlugin } from 'survey-creator-vue';
import App from './App.vue';

createApp(App)
  .use(surveyPlugin)
  .use(surveyCreatorPlugin)
  .mount('#app');
```

Give the component's container an explicit height — for example, `height: 100vh` — because Survey Creator fills the space it is given.

## Themes

`survey-creator-core/survey-creator-core.css` applies the Light UI theme. The Dark, Contrast, and Survey Creator 2020 themes are imported from `survey-creator-core/themes` and applied with `creator.applyCreatorTheme(theme)`:

```js
import { DefaultDark } from 'survey-creator-core/themes';

creator.applyCreatorTheme(DefaultDark);
```

The UI theme styles the builder itself. The look of the forms it produces is edited in the built-in Theme tab and stored in the survey theme JSON. See [Themes & Styles](https://surveyjs.io/survey-creator/documentation/survey-creator-interface-themes) and [Theme Editor](https://surveyjs.io/survey-creator/documentation/theme-editor).

## Theme adapters

A *theme adapter* maps an existing design system's CSS variables onto SurveyJS design tokens, so a survey inherits the look of the host application. Survey Creator supports adapters: the form on the design surface and in the Preview tab is a real survey, so it picks up whichever adapter the page loads. Adapters ship with `survey-core` as plain CSS — import one after the base style sheets:

```js
import 'survey-core/survey-core.css';
import 'survey-creator-core/survey-creator-core.css';
import 'survey-core/themes/adapters/shadcn-default.css';
```

Adapters are available for [Bootstrap](https://getbootstrap.com) (plus Bootswatch variants), [Material UI](https://mui.com), and [shadcn/ui](https://ui.shadcn.com), with matching icon sets (`survey-core/themes/adapters/icons/lucide`, `.../icons/mui`). See [Theme Adapters](https://surveyjs.io/themes/theme-adapters).

## Related packages

| Package | Purpose |
| --- | --- |
| [`survey-creator-core`](https://www.npmjs.com/package/survey-creator-core) | Platform-independent Survey Creator model (installed automatically) |
| [`survey-creator-react`](https://www.npmjs.com/package/survey-creator-react) | React renderer |
| [`survey-creator-angular`](https://www.npmjs.com/package/survey-creator-angular) | Angular renderer |
| [`survey-creator-js`](https://www.npmjs.com/package/survey-creator-js) | HTML/CSS/JavaScript renderer |
| [`survey-vue3-ui`](https://www.npmjs.com/package/survey-vue3-ui) | Renders the forms that Survey Creator produces |

## Documentation

- [Website](https://surveyjs.io/)
- [Documentation](https://surveyjs.io/survey-creator/documentation/overview)
- [Get Started with Vue 3](https://surveyjs.io/survey-creator/documentation/get-started-vue)
- [API Reference](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator)
- [Live Examples](https://surveyjs.io/survey-creator/examples/free-nps-survey-template/vue3js)
- [What's New](https://surveyjs.io/stay-updated/major-updates/2025-2026)

For AI coding agents: [https://surveyjs.io/llms.txt](https://surveyjs.io/llms.txt) indexes the documentation. Any documentation page is also available as raw Markdown — append `.md` to its URL, for example [https://surveyjs.io/survey-creator/documentation/get-started-vue.md](https://surveyjs.io/survey-creator/documentation/get-started-vue.md).

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

    This package resolves `survey-core`, `survey-vue3-ui`, and `survey-creator-core` from sibling `build` folders, so those must be built before this library can be built or tested. Refer to the following instructions:

    - [Build from sources](https://github.com/surveyjs/survey-library/blob/master/packages/survey-core/README.md#build-from-sources) in the `survey-core` README — build `survey-core`, then `survey-vue3-ui`.
    - [Build from sources](https://github.com/surveyjs/survey-creator/blob/master/packages/survey-creator-core/README.md#build-from-sources) in the `survey-creator-core` README.

    > NOTE: Make sure that the folders with the cloned `survey-library` and `survey-creator` repositories are in the same directory.

2. **Install dependencies and build this library**

    ```sh
    cd packages/survey-creator-vue
    npm install
    npm run build
    ```

    The library is bundled with [Vite](https://vite.dev/); build output goes to the `build` directory. Use `npm run watch:dev` while developing.

3. **Run a test application**

    ```sh
    cd example
    npm install
    cd ..
    npm run serve:example:dev
    ```

4. **Run end-to-end tests**

    This package has no unit tests of its own — the model logic is covered by the [`survey-creator-core`](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core) suite.

    E2E, visual-regression, and accessibility tests are Playwright suites. Vue serves a production build of the example app, so build it first. Do not start an HTTP server yourself — the Playwright config runs `serve:example:prod` itself.

    ```sh
    npm run build:example:prod            # produces example/dist
    npm run e2e:ci                        # e2e
    npm run e2e:ci -- --grep "TestName"   # a single test
    npm run test:scr:ci                   # visual regression
    npm run test:a11y:ci                  # accessibility
    ```

## Licensing

You can install Survey Creator and evaluate its full functionality right away — no license is needed to prototype, test, or build a proof of concept. Production use requires a [commercial license](https://surveyjs.io/licensing) for each developer who works with the SurveyJS APIs or implements the integration, and activating a [license key](#license-key) removes the alert banner. The forms Survey Creator produces are rendered by [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview), which is MIT-licensed and runs free of charge.
