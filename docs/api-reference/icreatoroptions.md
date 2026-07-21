---
title: ICreatorOptions
product: Survey Creator
api-type: interface
description: Survey Creator configuration.
source: https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions
---

# `ICreatorOptions`

Survey Creator configuration. Pass it as an argument to the `SurveyCreator`/`SurveyCreatorModel` constructor:

```js
const creatorOptions = { ... };
const creator = new SurveyCreator.SurveyCreator(creatorOptions);

// In modular applications:
import { SurveyCreatorModel } from "survey-creator-core";

const creatorOptions = { ... };
const creator = new SurveyCreatorModel(creatorOptions);
```

## Properties

### `addNewQuestionLast`

**Type**: `boolean`

Specifies where to add new questions when users click the "Add Question" button.

Accepted values:

- `true` (default) - New questions are added to the end of a survey page.
- `false` - New questions are added after the currently selected question on the design surface.

### `allowDragPages`

**Type**: `boolean`

Specifies whether users can drag and drop pages on the design surface.

Default value: `true` if [`pageEditMode`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#pageEditMode) is `"standard"`; `false` otherwise.

Available since: v2.0.0

**Related APIs:** [`collapseOnDrag`](#collapseOnDrag)

### `allowModifyPages`

**Type**: `boolean`

Specifies whether users can add, edit, and delete survey pages.

Default value: `true`

### `allowZoom`

**Type**: `boolean`

Specifies whether the "Zoom In", "Zoom Out", and "Zoom to 100%" buttons are available.

Default value: `true`

[View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))

Available since: v2.0.0

### `autoSaveEnabled`

**Type**: `boolean`

Specifies whether to call the [`saveSurveyFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveSurveyFunc) and [`saveThemeFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc) functions each time survey or theme settings are changed.

Default value: `false`

Available since: v2.0.0

### `clearTranslationsOnSourceTextChange`

**Type**: `boolean`

Specifies whether to clear translations to other languages when a source language translation is changed.

Default value: `false`

[View Demo](https://surveyjs.io/survey-creator/examples/ai-translation/ (linkStyle))

Available since: v2.0.2

**Related APIs:** [`showTranslationTab`](#showTranslationTab)

### `collapseOnDrag`

**Type**: `boolean`

Specifies whether to collapse pages on the design surface when users start dragging a survey element.

Default value: `false`

Available since: v2.0.0

### `collapsePages`

**Type**: `boolean`

Specifies whether survey pages appear collapsed on the design surface by default.

Default value: `false`

[View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))

This property specifies the expand/collapse state of all survey pages at once. To adjust the state of individual pages, handle the [`onElementGetExpandCollapseState`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onElementGetExpandCollapseState) event.

**Related APIs:** [`expandCollapseButtonVisibility`](#expandCollapseButtonVisibility)

### `collapsePanels`

**Type**: `boolean`

Specifies whether panels appear collapsed on the design surface by default.

Default value: `false`

[View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))

This property specifies the expand/collapse state of all panels at once. To adjust the state of individual panels, handle the [`onElementGetExpandCollapseState`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onElementGetExpandCollapseState) event.

**Related APIs:** [`expandCollapseButtonVisibility`](#expandCollapseButtonVisibility)

### `collapseQuestions`

**Type**: `boolean`

Specifies whether survey questions appear collapsed on the design surface by default.

Default value: `false`

[View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))

This property specifies the expand/collapse state of all survey questions at once. To adjust the state of individual questions, handle the [`onElementGetExpandCollapseState`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onElementGetExpandCollapseState) event.

**Related APIs:** [`expandCollapseButtonVisibility`](#expandCollapseButtonVisibility)

### `defaultAddQuestionType`

**Type**: `string`

Specifies the [question type](https://surveyjs.io/form-library/documentation/api-reference/question#getType) to use by default when users click the "Add Question" button on the design surface.

Default value: `"text"`

Available since: v2.4.1

### `expandCollapseButtonVisibility`

**Type**: `"never" | "onhover" | "always"`

Specifies the visibility of the buttons that expand and collapse survey elements on the design surface.

Accepted values:

- `"onhover"` (default) - Displays an expand/collapse button when a survey element is hovered over or selected.
- `"always"` - Displays the expand/collapse buttons permanently.
- `"never"` - Hides the expand/collapse buttons.

[View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))

**Related APIs:** [`SurveyCreatorModel.onElementGetExpandCollapseState`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onElementGetExpandCollapseState), [`collapseOnDrag`](#collapseOnDrag)

### `expressionsValidateFunctions`

**Type**: `boolean`

Specifies whether to validate that functions referenced in expressions exist.

This check is performed only if [`expressionsValidateSyntax`](#expressionsValidateSyntax) is `true`.

Default value: `true`

Available since: v2.5.6

### `expressionsValidateSemantics`

**Type**: `boolean`

Specifies whether to validate expressions that are syntactically valid but have no meaningful effect because they always evaluate to the same value.

This check is performed only if [`expressionsValidateSyntax`](#expressionsValidateSyntax) is `true`.

Default value: `true`

Available since: v2.5.7

### `expressionsValidateSyntax`

**Type**: `boolean`

Specifies whether to validate the expression syntax (for example, unmatched parentheses, missing operands, or invalid operators).

Default value: `true`

Available since: v2.5.6

### `expressionsValidateVariables`

**Type**: `boolean`

Specifies whether to validate that variables and question, panel, or page names referenced in expressions exist.

This check is performed only if [`expressionsValidateSyntax`](#expressionsValidateSyntax) is `true`.

Default value: `false`

Available since: v2.5.6

### `forbiddenNestedElements`

**Type**: `{ panel: string[]; paneldynamic: string[]; }`

Specifies which element types are forbidden from being nested inside [Panels](https://surveyjs.io/form-library/documentation/api-reference/panel-model) and [Dynamic Panels](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model).

This property is an object with the following structure:

- `panel`: An array of element types that cannot be nested within a regular panel.
- `paneldynamic`: An array of element types that cannot be nested within a dynamic panel.

In the following example, dynamic panels are disallowed inside regular panels, and both regular and dynamic panels are disallowed inside a dynamic panel:

```js
import { SurveyCreatorModel } from "survey-creator-core";
const creatorOptions = {
  // ...
  forbiddenNestedElements: {
    panel: [ "paneldynamic" ],
    paneldynamic: [ "panel", "paneldynamic" ]
  }
};
const creator = new SurveyCreatorModel(creatorOptions);
```

[View Demo](https://surveyjs.io/survey-creator/examples/limit-number-of-survey-elements/ (linkStyle))

Available since: v2.2.0

**Related APIs:** [`maxPanelNestingLevel`](#maxPanelNestingLevel)

### `generateValidJSON`

**Type**: `boolean`

Specifies whether the Survey Creator generates the survey definition as a valid JSON object or JavaScript object.

Default value: `true`

Refer to the following MDN topic for information on differences between JSON and JavaScript objects: [JavaScript and JSON Differences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#javascript_and_json_differences)

### `isRTL`

**Type**: `boolean`

Specifies whether to enable support for right-to-left languages.

Default value: `false`

### `logicAllowTextEditExpressions`

**Type**: `boolean`

Specifies whether users can edit expressions in the Logic tab as plain text.

If you set this property to `false`, users can only use UI elements to edit logical expressions.

Default value: `true`

Available since: v2.0.0

**Related APIs:** [`showLogicTab`](#showLogicTab)

### `logicMaxItemsInCondition`

**Type**: `number`

Limits the number of items in a logical condition.

Default value: -1 (unlimited)

Available since: v2.0.0

### `maxChoiceContentNestingLevel`

**Type**: `number`

Specifies how deeply choice options in Radio Button Group and Checkboxes questions can contain nested survey content such as questions or panels.

- 0 - Disables content nesting for choice options (default).
- 1 - Allows first-level choice options to contain survey elements.
- 2 - Allows first- and second-level choice options to contain survey elements, and so on.

Default value: 0

[View Demo](https://surveyjs.io/survey-creator/examples/nest-sub-questions-within-choice-options/ (linkStyle))

Available since: v2.3.11

### `maxChoices`

**Type**: `number`

Limits the number of choices that users can add to [Checkboxes](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel), [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel), and [Radio Button Group](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel) questions.

Default value: 0 (unlimited, taken from `settings.propertyGrid.maxChoices`)

Available since: v2.0.0

### `maxColumns`

**Type**: `number`

Limits the number of columns that users can add to [Single-Select Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel), [Multi-Select Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel), and [Dynamic Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixdynamicmodel) questions.

Default value: 0 (unlimited, taken from `settings.propertyGrid.maxColumns`)

Available since: v2.0.0

### `maxPanelNestingLevel`

**Type**: `number`

Specifies the maximum depth allowed for nested [Panels](https://surveyjs.io/form-library/documentation/api-reference/panel-model) and [Dynamic Panels](https://surveyjs.io/form-library/documentation/api-reference/dynamic-panel-model) in the survey.

This property behaves as follows:

- A value of -1 applies no restriction on nesting depth.
- A value of 0 means that Panels and Dynamic Panels cannot contain other panels&mdash;only questions are allowed.
- Positive integers specify the maximum nesting level.

Default value: -1 (unlimited)

[View Demo](https://surveyjs.io/survey-creator/examples/limit-number-of-survey-elements/ (linkStyle))

If you don't want users to nest certain element types within panels, specify the [`forbiddenNestedElements`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#forbiddenNestedElements) property.

Available since: v2.2.0

### `maxRateValues`

**Type**: `number`

Limits the number of rate values that users can add to [Rating Scale](https://surveyjs.io/Documentation/Library?id=questionratingmodel) questions.

Default value: 0 (unlimited, taken from `settings.propertyGrid.maxRateValues`)

Available since: v2.0.0

### `maxRows`

**Type**: `number`

Limits the number of rows that users can add to [Single-Select Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel) and [Multi-Select Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel) questions.

Default value: 0 (unlimited, taken from `settings.propertyGrid.maxRows`)

Available since: v2.0.0

### `maxVisibleChoices`

**Type**: `number`

Limits the number of visible choices. Users can click "Show more" to view hidden choices.

Set this property to -1 if you do not want to hide any choices.

Default value: 10

### `minChoices`

**Type**: `number`

Limits the minimum number of choices in [Checkboxes](https://surveyjs.io/Documentation/Library?id=questioncheckboxmodel), [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel), and [Radio Button Group](https://surveyjs.io/Documentation/Library?id=questionradiogroupmodel) questions. Set this property if users should not delete choices below the specified limit.

Default value: 0 (unlimited, taken from `settings.propertyGrid.minChoices`)

Available since: v2.0.0

### `pageEditMode`

**Type**: `"standard" | "single" | "bypage"`

Specifies how Survey Creator users edit survey pages.

Accepted values:

- `"standard"` (default)\
Questions and panels are divided between pages. Users can scroll the design surface to reach a required page.

- `"single"`\
All questions and panels belong to a single page. Users cannot add or remove pages.

- `"bypage"`\
Questions and panels are divided between pages. Users can use the page navigator to switch to a required page.

[View Page-By-Page Mode Demo](https://surveyjs.io/survey-creator/examples/page-level-editing/ (linkStyle))

### `previewAllowHiddenElements`

**Type**: `boolean`

Specifies whether the Preview tab displays a checkbox that allows users to show or hide invisible survey elements.

Default value: `true`

Available since: v2.0.0

### `previewAllowSelectLanguage`

**Type**: `string | boolean`

Specifies whether the Preview tab displays the language selector.

Accepted values:

- `"auto"` (default)\
Display the language selector only if the survey is translated into more than one language.

- `true`\
Always display the language selector regardless of how many languages are used in the survey.

- `false`\
Never display the language selector.

- `"all"`\
Always display the language selector with [all supported languages](https://github.com/surveyjs/survey-creator/tree/90de47d2c9da49b06a7f97414026d70f7acf05c6/packages/survey-creator-core/src/localization).

[Localization & Globalization](https://surveyjs.io/Documentation/Survey-Creator?id=localization)

Available since: v2.0.0

### `previewAllowSelectPage`

**Type**: `boolean`

Specifies whether to show the page selector at the bottom of the Preview tab.

Default value: `true`

Available since: v2.0.0

### `previewAllowSimulateDevices`

**Type**: `boolean`

Specifies whether the Preview tab displays the Device button that allows users to preview the survey on different device types.

Default value: `true`

Available since: v2.0.0

### `previewDevice`

**Type**: `string`

Specifies a default device for survey preview in the Preview tab.

Accepted values:

- `"desktop"` (default)
- `"iPhoneSE"`
- `"iPhone15"`
- `"iPhone15Plus"`
- `"iPad"`
- `"iPadMini"`
- `"androidPhone"`
- `"androidTablet"`
- `"microsoftSurface"`

### `previewOrientation`

**Type**: `"landscape" | "portrait"`

Specifies the orientation of the selected device in the Preview tab.

Accepted values:
- `"landscape"` (default)
- `"portrait"`

### `propertyGridNavigationMode`

**Type**: `"buttons" | "accordion"`

Specifies how users navigate categories in the Property Grid.

Accepted values:

- `"accordion"`\
The Property Grid displays a stacked list of categories that users can expand or collapse to reveal nested properties.

- `"buttons"` (default)\
The Property Grid displays the properties of a currently selected category. Users can switch between categories using buttons on the right side of the Property Grid.

[Accordion Mode Demo](https://surveyjs.io/survey-creator/examples/property-grid-accordion-view/ (linkStyle))

[Buttons Mode Demo](https://surveyjs.io/survey-creator/examples/free-nps-survey-template/ (linkStyle))

### `questionTypes`

**Type**: `string[]`

Limits question and panel types available in the Toolbox and Add Question menu.

Refer to the [Limit Available Question and Panel Types](https://surveyjs.io/Documentation/Survey-Creator?id=toolbox#limit-available-question-and-panel-types) help topic for more information.

[View Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-customization/ (linkStyle))

### `readOnly`

**Type**: `boolean`

Enables the read-only mode. If you set this property to `true`, users cannot change the initial survey configuration.

Default value: `false`

### `showCreatorThemeSettings`

**Type**: `boolean`

Specifies whether users can modify the [Survey Creator theme](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#creatorTheme). Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#propertyGridNavigationMode) is `"buttons"`.

Default value: `true`

### `showDesignerTab`

**Type**: `boolean`

Specifies whether to display the [Designer](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#designer-tab) tab.

Default value: `true`

### `showErrorOnFailedSave`

**Type**: `boolean`

Specifies whether to show an error message if a survey is not saved in the database.

Default value: `true`

### `showHeaderInEmptySurvey`

**Type**: `boolean`

Specifies whether the design surface displays the survey title and description when the survey does not contain any elements.

Default value: `false`

### `showJSONEditorTab`

**Type**: `boolean`

Specifies whether to display the [JSON Editor](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#json-editor-tab) tab.

Default value: `true`

### `showLogicTab`

**Type**: `boolean`

Specifies whether to display the [Logic](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#logic-tab) tab.

Default value: `true`

### `showPreviewTab`

**Type**: `boolean`

Specifies whether to display the [Preview](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#preview-tab) tab.

Default value: `true`

### `showSurveyHeader`

**Type**: `boolean`

Specifies whether users can see and edit the survey header and related survey properties.

Default value: `true`

Available since: v2.0.0

### `showThemeTab`

**Type**: `boolean`

Specifies whether to display the [Themes](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#themes-tab) tab.

Default value: `false`

[Theme Editor](https://surveyjs.io/survey-creator/documentation/theme-editor (linkStyle))

### `showTranslationTab`

**Type**: `boolean`

Specifies whether to display the [Translation](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#translation-tab) tab.

Default value: `false`

[View Demo](https://surveyjs.io/survey-creator/examples/create-multilingual-forms/ (linkStyle))

**Related APIs:** [`clearTranslationsOnSourceTextChange`](#clearTranslationsOnSourceTextChange)

### `useElementTitles`

**Type**: `boolean`

Specifies whether Survey Creator UI elements display survey, page, and question titles instead of their names.

Default value: `false`

[View Demo](https://surveyjs.io/survey-creator/examples/dynamically-modify-newly-added-questions/ (linkStyle))

Available since: v2.0.0

### `useEnglishLanguageNames`

**Type**: `boolean`

Specifies whether to display language names in English rather than in their native form.

Default value: `false` (language names are displayed in their native form)

Available since: v2.5.19

### `validateJsonPropertyValues`

**Type**: `boolean`

Specifies whether to validate property values against their definitions.

Default value: `true`

> Disabling property validation may be useful if you add custom properties that accept complex or hierarchical objects. However, this also allows invalid values to be assigned in the JSON Editor tab. Use with caution.

Available since: v2.5.2
