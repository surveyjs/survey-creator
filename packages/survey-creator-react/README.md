<div align="center">
  
# SurveyJS Survey Creator for React — Drag-and-Drop Form Builder

<img width="1200" height="600" alt="readme_overview_creator" src="https://github.com/user-attachments/assets/e4f2eafc-aadf-4331-8ae0-842b875d91c2" /><br>

[![Build Status](https://dev.azure.com/SurveyJS/V2%20Libraries/_apis/build/status%2Fcreator%2FCreator%20Main?repoName=surveyjs%2Fsurvey-creator&branchName=master)](https://dev.azure.com/SurveyJS/V2%20Libraries/_build/latest?definitionId=149&repoName=surveyjs%2Fsurvey-creator&branchName=master)
[![NPM Version](https://img.shields.io/npm/v/survey-creator-react.svg)](https://www.npmjs.com/package/survey-creator-react)
[![Tested with Playwright](https://img.shields.io/badge/tested%20with-Playwright-2fa4cf.svg)](https://playwright.dev)
[![Open Issues](https://img.shields.io/github/issues/surveyjs/survey-creator.svg)](https://github.com/surveyjs/survey-creator/issues)
[![Closed Issues](https://img.shields.io/github/issues-closed/surveyjs/survey-creator.svg)](https://github.com/surveyjs/survey-creator/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+)

</div>
<div align="justify">

Survey Creator for React is an embeddable drag-and-drop form builder for creating and editing dynamic, JSON-based forms and surveys in React applications.

The `survey-creator-react` package provides the React rendering layer for SurveyJS Creator. It works with the framework-independent [`survey-creator-core`](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core) package, which manages the form builder model, editor state, form-editing logic, Toolbox, Property Grid, tabs, actions, and other core behavior. `survey-creator-core` is a peer dependency: npm 7 and later install it automatically; with pnpm or Yarn 1, add it explicitly. You configure a builder instance with `survey-creator-core` and hand it to this package's `SurveyCreatorComponent` through its `creator` prop: `<SurveyCreatorComponent creator={creator} />`.

Use Survey Creator to build multi-page forms, surveys, quizzes, assessments, and other data-entry tools, configure conditional logic and validation, and customize the form builder UI. Survey Creator generates SurveyJS JSON form definitions that you can [save in your own backend](https://surveyjs.io/survey-creator/documentation/integration-with-backend) and render with [SurveyJS React Form Library](https://github.com/surveyjs/survey-library/tree/master/packages/survey-react-ui).

</div>

[Try Survey Creator for React](https://surveyjs.io/create-free-survey)

## Install

```sh
npm install survey-creator-react --save
```

## License key

Survey Creator displays an alert banner until you activate a [purchased commercial license](https://surveyjs.io/licensing). Activate your key with `setLicenseKey` from `survey-core`:

```tsx
import { setLicenseKey } from "survey-core";

setLicenseKey("your-license-key-goes-here");
```

Call it once before the component renders — at module scope in the file that renders `SurveyCreatorComponent`, or in your application's entry file. Your key and step-by-step setup instructions are on the [How to Remove the Alert Banner](https://surveyjs.io/remove-alert-banner) page in your SurveyJS account.

## Usage

```tsx
'use client'
import { useState } from "react";
import { ICreatorOptions } from "survey-creator-core";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";

const defaultCreatorOptions: ICreatorOptions = {
  autoSaveEnabled: true,
  collapseOnDrag: true
};

export default function SurveyCreatorWidget(props: { options?: ICreatorOptions }) {
  let [creator, setCreator] = useState<SurveyCreator>();

  if (!creator) {
    creator = new SurveyCreator(props.options || defaultCreatorOptions);
    creator.saveSurveyFunc = (saveNo, callback) => {
      // Save `creator.JSON` or `creator.text` to your database, then:
      callback(saveNo, true);
    };
    setCreator(creator);
  }

  return <SurveyCreatorComponent creator={creator} />;
}
```

Survey Creator is interactive: it relies on state, event handlers, and drag-and-drop. Under [Next.js](https://nextjs.org) or another framework with React Server Components, mark the component that renders it as client code with the ['use client'](https://react.dev/reference/react/use-client) directive.

Give the component's container an explicit height — for example, `height: 100vh` — because Survey Creator fills the space it is given.

## Themes

`survey-creator-core/survey-creator-core.css` applies the Light UI theme. The Dark, Contrast, and Survey Creator 2020 themes are imported from `survey-creator-core/themes` and applied with `creator.applyCreatorTheme(theme)`:

```js
import { DefaultDark } from "survey-creator-core/themes";

creator.applyCreatorTheme(DefaultDark);
```

The UI theme styles the builder itself. The look of the forms it produces is edited in the built-in Theme tab and stored in the survey theme JSON. See [Themes & Styles](https://surveyjs.io/survey-creator/documentation/survey-creator-interface-themes) and [Theme Editor](https://surveyjs.io/survey-creator/documentation/theme-editor).

## Theme adapters

A theme adapter maps an existing design system's CSS variables onto SurveyJS design tokens, so a survey inherits the look of the host application. Survey Creator supports adapters: the form on the design surface and in the Preview tab is a real survey, so it picks up whichever adapter the page loads. Adapters ship with `survey-core` as plain CSS — import one after the base style sheets:

```js
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";
import "survey-core/themes/adapters/shadcn-default.css";
```

Adapters are available for [Bootstrap](https://getbootstrap.com) (plus Bootswatch variants), [Material UI](https://mui.com), and [shadcn/ui](https://ui.shadcn.com), with matching icon sets (`survey-core/themes/adapters/icons/lucide`, `.../icons/mui`). See [Theme Adapters](https://surveyjs.io/themes/theme-adapters).

## Key features

### React Integration

- React rendering package for SurveyJS Creator
- Framework-independent editor model through `survey-creator-core`
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
| [`survey-creator-angular`](https://www.npmjs.com/package/survey-creator-angular) | Angular renderer |
| [`survey-creator-vue`](https://www.npmjs.com/package/survey-creator-vue) | Vue 3 renderer |
| [`survey-creator-js`](https://www.npmjs.com/package/survey-creator-js) | HTML/CSS/JavaScript renderer |
| [`survey-react-ui`](https://www.npmjs.com/package/survey-react-ui) | Renders the forms that Survey Creator produces |

## Documentation

- [Website](https://surveyjs.io/)
- [Documentation](https://surveyjs.io/survey-creator/documentation/overview)
- [Get Started with React](https://surveyjs.io/survey-creator/documentation/get-started-react)
- [API Reference](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator)
- [Survey Creator Demos for React](https://surveyjs.io/survey-creator/examples/free-nps-survey-template/reactjs)
- [What's New](https://surveyjs.io/stay-updated/major-updates/2025-2026)

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

This monorepo does **not** use npm workspaces: each package installs independently, but a root install is still required for the shared tooling (linting, Playwright).

1. **Build `survey-library` and `survey-creator-core` first**

    This package resolves `survey-core`, `survey-react-ui`, and `survey-creator-core` from sibling `build` folders, so those must be built before this library can be built or tested. Refer to the following instructions:

    - [Build from sources](https://github.com/surveyjs/survey-library/blob/master/packages/survey-core/README.md#build-from-sources) in the `survey-core` README — build `survey-core`, then `survey-react-ui`.
    - [Build from sources](https://github.com/surveyjs/survey-creator/blob/master/packages/survey-creator-core/README.md#build-from-sources) in the `survey-creator-core` README.
    <br>

    > NOTE: Make sure that the folders with the cloned `survey-library` and `survey-creator` repositories are in the same directory.

2. **Install dependencies and build this library**

    ```sh
    cd packages/survey-creator-react
    npm install
    npm run build
    ```

    Build output goes to the `build` directory. Use `npm run watch:dev` while developing.

3. **Run a test application**

    ```sh
    npm run start
    ```

    This serves the package directory at http://localhost:8080/.

4. **Run unit tests**

    Unit tests use [Jest](https://jestjs.io/) and live in `tests`.

    ```sh
    npm run test                        # whole suite
    npm run test:dev                    # watch mode
    npm run test:update                 # update snapshots
    ```

5. **Run end-to-end tests**

    E2E, visual-regression, and accessibility tests are Playwright suites. Do not start an HTTP server yourself — the Playwright config starts its own.

    ```sh
    npm run e2e:ci                        # e2e
    npm run e2e:ci -- --grep "TestName"   # a single test
    npm run test:scr:ci                   # visual regression
    npm run test:a11y:ci                  # accessibility
    ```

## Licensing

You can install Survey Creator and evaluate its full functionality right away — no license is needed to prototype, test, or build a proof of concept. Production use requires a [commercial license](https://surveyjs.io/licensing) for each developer who works with the SurveyJS APIs or implements the integration, and activating a [license key](#license-key) removes the alert banner. The forms Survey Creator produces are rendered by [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview), which is MIT-licensed and runs free of charge.
