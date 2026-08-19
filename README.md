<div align="center">
    
<img width="1200" height="600" alt="banner_form_builder" src="https://github.com/user-attachments/assets/1801367a-47fb-486b-8355-4c92e449755b" />
    
</div>

<div align="center"><br>

[![Build Status](https://dev.azure.com/SurveyJS/V2%20Libraries/_apis/build/status%2Fcreator%2FCreator%20Main?repoName=surveyjs%2Fsurvey-creator&branchName=master)](https://dev.azure.com/SurveyJS/V2%20Libraries/_build/latest?definitionId=149&repoName=surveyjs%2Fsurvey-creator&branchName=master)
<a href="https://github.com/microsoft/playwright">
<img alt="Tested with Playwright" src="https://img.shields.io/badge/tested%20with-Playwright-2fa4cf.svg">
</a>
<a href="https://github.com/surveyjs/survey-creator/issues">
<img alt="Issues" title="Open Issues" src="https://img.shields.io/github/issues/surveyjs/survey-creator.svg">
</a>
<a href="https://github.com/surveyjs/survey-creator/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+">
<img alt="Closed issues" title="Closed Issues" src="https://img.shields.io/github/issues-closed/surveyjs/survey-creator.svg">
</a>
<a href="https://surveyjs.io/stay-updated/release-notes">
<img alt="GitHub Release" src="https://img.shields.io/github/v/release/surveyjs/survey-creator">
</a>

# SurveyJS Survey Creator: Embeddable JavaScript Form Builder

</div>

<div align="justify">

SurveyJS Survey Creator is an embeddable, drag-and-drop form builder for React, Angular, Vue, and plain JavaScript applications. It generates JSON form definitions and connects to your backend and database.

Embed the form builder in your application, connect it to any backend, and let users create dynamic forms, surveys, quizzes, and multi-step form wizards without hard-coding each form. Render completed form definitions with [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview). 

<br>
<p align="center">
    <a href="https://surveyjs.io/survey-creator/documentation/overview">Documentation</a>
    ·
    <a href="https://surveyjs.io/find-surveyjs-guides-for-my-stack">Setup Guides for My Stack</a>
    ·
    <a href="https://surveyjs.io/survey-creator/examples/free-nps-survey-template/reactjs">Survey Creator Demos</a>
    ·
    <a href="https://github.com/surveyjs/theme-adapter-demos">Theme Adapters</a>
    ·
    <a href="https://surveyjs.io/licensing">Licensing</a>
    ·
    <a href="https://github.com/surveyjs/survey-creator/issues/new">Report a Bug</a>
  </p>
<br>

## Self-Hosted Architecture

SurveyJS Creator is a UI component that you embed in your own web application. It is not a hosted form service and does not require a SurveyJS backend. You choose the server, database, authentication system, and deployment environment.

The visual editor generates a JSON definition for each form. Your application can:

1. Save the JSON definition to your database.
2. Load it back into Survey Creator for editing.
3. Render the form with SurveyJS Form Library.
4. Store submitted responses in your own backend.

<br>
</div>

<div align="center">
    
<img width="60%" alt="client-server-interaction (3)" src="https://github.com/user-attachments/assets/c6d5cf07-b55c-4c78-b7b5-3c547fb32677" />

</div>
<br>

This architecture is suitable for applications that require full control over form and response data and integration with existing systems.

## Installation

Choose the package for your framework:

### React

```bash
npm install survey-creator-react
```
[Get Started with Survey Creator for React](https://surveyjs.io/survey-creator/documentation/get-started-react)

### Angular

```bash
npm install survey-creator-angular
```
[Get Started with Survey Creator for Angular](https://surveyjs.io/survey-creator/documentation/get-started-angular)

### Vue.js

```bash
npm install survey-creator-vue
```
[Get Started with Survey Creator for Vue.js](https://surveyjs.io/survey-creator/documentation/get-started-vue)

### Plain JavaScript

```bash
npm install survey-creator-js
```
[Get Started with Survey Creator for Plain JavaScript](https://surveyjs.io/survey-creator/documentation/get-started-html-css-javascript)

## Key Features

### Embeddable Form Builder

- Embed the form builder in React, Angular, Vue, or plain JavaScript applications.
- Run the editor entirely in the browser.
- Connect it to any server, database, or authentication system.
- [Store form definitions and submitted data in your own backend](https://surveyjs.io/survey-creator/documentation/integration-with-backend).
- Add the editor to single-tenant or multi-tenant SaaS applications.

### Visual Form Editing

- Build forms with a drag-and-drop UI.
- Create multi-page forms and form wizards.
- Configure conditional visibility, branching, validation, and calculated values.
- Edit form themes through a visual Theme Editor.
- Preview forms before publication.

### JSON-Driven Forms

- Generate a JSON definition as users edit a form.
- Load existing JSON definitions back into the editor.
- Version, copy, and reuse form definitions.
- Render forms with SurveyJS Form Library.
- Use the same definition for web forms, PDFs, and analytics workflows.

### Customizable UI

- Use the [UI Preset Editor](https://surveyjs.io/survey-creator/documentation/ui-preset-editor) to customize the Toolbox, Property Grid, tabs, actions, languages, and other UI options, then export the configuration as a reusable JSON preset.
- [Add custom question types and reusable components](https://surveyjs.io/survey-creator/documentation/customize-question-types).
- Apply custom branding and themes, or use [theme adapters](https://github.com/surveyjs/theme-adapter-demos) to map Survey Creator design tokens to Bootstrap, Material UI, or shadcn/ui.
- Configure the UI for different roles, tenants, or subscription plans.
- Localize the editor and support right-to-left languages.

## Resources

- [Website](https://surveyjs.io/)
- [Documentation](https://surveyjs.io/survey-creator/documentation/overview)
- [Full-Featured Demo](https://surveyjs.io/create-free-survey)
- [Release Notes](https://surveyjs.io/stay-updated/release-notes)
- [Roadmap](https://surveyjs.io/stay-updated/roadmap)
- [What's New](https://surveyjs.io/stay-updated/major-updates/2025-2026)

## SurveyJS Product Family

- [Form Library](https://surveyjs.io/form-library/documentation/overview) - A free and open-source MIT-licensed JavaScript library that renders dynamic JSON-based forms in your web application, and collects responses.
- [Survey Creator](https://surveyjs.io/survey-creator/documentation/overview) - A self-hosted drag-and-drop form builder that automatically generates JSON definition (schemas) of your forms in real time. Try out a [free full-featured demo](https://surveyjs.io/create-free-survey) to evaluate its capabilities.
-  [Dashboard](https://surveyjs.io/dashboard/documentation/overview) - Simplifies survey data visualization and analysis with interactive and customizable charts and tables.
-  [PDF Generator](https://surveyjs.io/pdf-generator/documentation/overview) - A commercially licensed JavaScript library that renders SurveyJS surveys and forms as PDF files in a browser. With PDF Generator you can save an unlimited number of custom-built forms to PDF (both editable and read-only).
-  [AI Form Response Extractor](https://surveyjs.io/documentation/combine-paper-and-online-survey-form-data) - An MIT-licensed library that extracts responses from paper forms, PDFs, and images into a SurveyJS schema (`ai-form-response-extractor`).

## Licensing

You can install Survey Creator and evaluate its full functionality right away - no license is needed to prototype, test, or build a proof of concept. Production use requires a [commercial license](https://surveyjs.io/licensing) for each software developer who works with the SurveyJS APIs or implements the integration, and activating a license key removes the alert banner. [SurveyJS Form Library](https://github.com/surveyjs/survey-library), which renders the forms Survey Creator produces, is available under the MIT license and runs free of charge.
