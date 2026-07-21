---
title: SurveyCreatorModel
product: Survey Creator
api-type: class
description: A class with properties, methods, and events that allow you to configure Survey Creator and manage its elements.
source: https://surveyjs.io/survey-creator/documentation/api-reference/surveycreatormodel
---

# `SurveyCreatorModel`

A class with properties, methods, and events that allow you to configure Survey Creator and manage its elements.

[View Demo](https://surveyjs.io/survey-creator/examples/free-nps-survey-template/ (linkStyle))

## Properties

### `activeTab`

**Type**: `string`

Gets or sets the currently displayed tab.

Accepted values:

- [`"designer"`](#showDesignerTab)
- [`"preview"`](#showPreviewTab)
- [`"theme"`](#showThemeTab)
- [`"json"`](#showJSONEditorTab)
- [`"logic"`](#showLogicTab)
- [`"translation"`](#showLogicTab)

**Related APIs:** [`switchTab`](#switchTab)

### `addNewQuestionLast`

**Type**: `boolean`

Specifies where to add new questions when users click the "Add Question" button.

Accepted values:

- `true` (default) - New questions are added to the end of a survey page.
- `false` - New questions are added after the currently selected question on the design surface.

**Related APIs:** [`rememberLastQuestionType`](#rememberLastQuestionType)

### `allowDragPages`

**Type**: `boolean`

Specifies whether users can drag and drop pages on the design surface.

Default value: `true` if [`pageEditMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#pageEditMode) is `"standard"`; `false` otherwise.

Available since: v2.0.0

**Related APIs:** [`collapseOnDrag`](#collapseOnDrag)

### `allowModifyPages`

**Type**: `boolean`

Specifies whether users can add, edit, and delete survey pages.

Default value: `true`

**Related APIs:** [`pageEditMode`](#pageEditMode)

### `allowZoom`

**Type**: `boolean`

Specifies whether the "Zoom In", "Zoom Out", and "Zoom to 100%" buttons are available.

Default value: `true`

[View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))

### `autoSaveDelay`

**Type**: `number`

A delay between changing survey settings and saving the survey JSON schema, measured in milliseconds. Applies only when the [`autoSaveEnabled`](#autoSaveEnabled) property is `true`.

Default value: 500 (inherited from `settings.autoSave.delay`)

If a user changes the settings once again during the delay, only the latest version will be saved.

### `autoSaveEnabled`

**Type**: `boolean`

Specifies whether to automatically save a survey or theme JSON schema each time survey or theme settings are changed.

Default value: `false`

If you enable this property, Survey Creator calls the [`saveSurveyFunc`](#saveSurveyFunc) or [`saveThemeFunc`](#saveThemeFunc) function to save the survey or theme JSON schema. The schemas are saved with a 500-millisecond delay after users change settings. You can specify the [`autoSaveDelay`](#autoSaveDelay) property to increase or decrease the delay.

[View Demo](https://surveyjs.io/survey-creator/examples/set-how-survey-configuration-changes-are-saved/ (linkStyle))

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

### `creatorTheme`

**Type**: `ICreatorTheme`

A theme for the Survey Creator UI.

[View Demo](https://surveyjs.io/survey-creator/examples/dynamic-ui-customization/ (linkStyle))

**Related APIs:** [`applyCreatorTheme`](#applyCreatorTheme), [`showCreatorThemeSettings`](#showCreatorThemeSettings)

### `expandCollapseButtonVisibility`

**Type**: `"never" | "onhover" | "always"`

Specifies the visibility of the buttons that expand and collapse survey elements on the design surface.

Accepted values:

- `"onhover"` (default) - Displays an expand/collapse button when a survey element is hovered over or selected.
- `"always"` - Displays the expand/collapse buttons permanently.
- `"never"` - Hides the expand/collapse buttons.

[View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))

**Related APIs:** [`onElementGetExpandCollapseState`](#onElementGetExpandCollapseState), [`collapseOnDrag`](#collapseOnDrag)

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
const creatorOptions = { ... };
const creator = new SurveyCreatorModel(creatorOptions);

creator.forbiddenNestedElements = {
  panel: [ "paneldynamic" ],
  paneldynamic: [ "panel", "paneldynamic" ]
};
```

[View Demo](https://surveyjs.io/survey-creator/examples/limit-number-of-survey-elements/ (linkStyle))

Available since: v2.2.0

**Related APIs:** [`maxPanelNestingLevel`](#maxPanelNestingLevel)

### `inplaceEditChoiceValues`

**Type**: `boolean`

Allows users to edit choice values instead of choice texts on the design surface.

Default value: `false` (users edit choice texts)

If you enable this property, users cannot edit choice texts because the Property Grid hides the Text column for choices, rate values, columns and rows in [Single-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model), and rows in [Multi-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list) questions.

**Related APIs:** [`useElementTitles`](#useElementTitles), [`onAllowInplaceEdit`](#onAllowInplaceEdit)

### `isProcessingUndoRedo`

**Type**: `boolean`

Returns `true` if an undo or redo operation is in progress.

**Related APIs:** [`undo`](#undo), [`redo`](#redo)

### `isRTL`

**Type**: `boolean`

Specifies whether to enable support for right-to-left languages.

Default value: `false`

### `JSON`

**Type**: `any`

A survey JSON schema.

This property allows you to get or set the JSON schema of a survey being configured. Alternatively, you can use the [`text`](#text) property.

### `locale`

**Type**: `string`

Specifies the locale of the Survey Creator UI.

Default value: `""` (inherited from `editorLocalization.currentLocale`)

[Localization & Globalization](https://surveyjs.io/survey-creator/documentation/survey-localization-translate-surveys-to-different-languages (linkStyle))

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

- 0 - Disables content nesting for choice options.
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

If you don't want users to nest certain element types within panels, specify the [`forbiddenNestedElements`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#forbiddenNestedElements) property.

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

**Related APIs:** [`allowModifyPages`](#allowModifyPages)

### `previewAllowHiddenElements`

**Type**: `boolean`

Specifies whether the Preview tab displays a toggle that allows users to show or hide invisible survey elements.

Default value: `true`

Available since: v2.0.0

### `previewAllowSelectLanguage`

**Type**: `string | boolean`

Specifies whether the Preview tab displays a language selector.

Accepted values:

- `"auto"` (default)\
Display the language selector only if the survey is translated into more than one language.

- `true`\
Always display the language selector regardless of how many languages the survey uses.

- `false`\
Never display the language selector.

- `"all"`\
Always display the language selector with [all supported languages](https://github.com/surveyjs/survey-creator/tree/90de47d2c9da49b06a7f97414026d70f7acf05c6/packages/survey-creator-core/src/localization).

[Localization & Globalization](https://surveyjs.io/survey-creator/documentation/survey-localization-translate-surveys-to-different-languages (linkStyle))

Available since: v2.0.0

### `previewAllowSelectPage`

**Type**: `boolean`

Specifies whether to show a page selector at the bottom of the Preview tab.

Default value: `true`

Available since: v2.0.0

### `previewAllowSimulateDevices`

**Type**: `boolean`

Specifies whether the Preview tab displays a Device button that allows users to preview the survey on different device types.

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

### `previewShowResults`

**Type**: `boolean`

Specifies whether to display a table with survey results after completing a survey in the Preview tab.

Default value: `true`

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

### `readOnly`

**Type**: `boolean`

Enables the read-only mode. If you set this property to `true`, users cannot change the initial survey configuration.

Default value: `false`

### `rememberLastQuestionType`

**Type**: `boolean`

Specifies whether the "Add Question" button remembers the type of the most recently added question and uses it for subsequent questions.

Default value: `true`

Available since: v2.2.0

**Related APIs:** [`addNewQuestionLast`](#addNewQuestionLast)

### `removeSidebar`

**Type**: `boolean`

Specifies whether to remove the sidebar that contains the Property Grid from the Survey Creator UI.

Default value: `false` (the sidebar is available)

> Unlike [`showSidebar`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSidebar), which controls the sidebar's visibility, this property disables the sidebar feature entirely.

### `saveSurveyFunc`

**Type**: `any`

A function that is called each time users click the [Save button](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSaveButton) or [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#autoSaveEnabled) is triggered to save a survey JSON schema.

For more information, refer to the Save and Load Survey Model Schemas help topic for your framework: [Angular](https://surveyjs.io/survey-creator/documentation/get-started-angular#save-and-load-survey-model-schemas) | [Vue](https://surveyjs.io/survey-creator/documentation/get-started-vue#save-and-load-survey-model-schemas) | [React](https://surveyjs.io/survey-creator/documentation/get-started-react#save-and-load-survey-model-schemas) | [HTML/CSS/JavaScript](https://surveyjs.io/survey-creator/documentation/get-started-html-css-javascript#save-and-load-survey-model-schemas).

[View Demo](https://surveyjs.io/survey-creator/examples/set-how-survey-configuration-changes-are-saved/ (linkStyle))

**Related APIs:** [`saveThemeFunc`](#saveThemeFunc)

### `saveThemeFunc`

**Type**: `any`

A function that is called each time users click the [Save button](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSaveButton) or [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#autoSaveEnabled) is triggered to save a theme JSON object.

For more information, refer to the [Save and Load Custom Themes](https://surveyjs.io/survey-creator/documentation/theme-editor#save-and-load-custom-themes) help topic.

[View Demo](https://surveyjs.io/survey-creator/examples/change-form-theme/ (linkStyle))

**Related APIs:** [`showThemeTab`](#showThemeTab), [`themeEditor`](#themeEditor), [`saveSurveyFunc`](#saveSurveyFunc)

### `selectedElement`

**Type**: `Base`

Gets or sets the selected survey element: a question, panel, page, or the survey itself.

**Related APIs:** [`onElementSelecting`](#onElementSelecting), [`onElementSelected`](#onElementSelected)

### `showCreatorThemeSettings`

**Type**: `boolean`

Specifies whether users can modify the [Survey Creator theme](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#creatorTheme). Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"buttons"`.

Default value: `true`

[View Demo](https://surveyjs.io/survey-creator/examples/dynamic-ui-customization/ (linkStyle))

### `showDesignerTab`

**Type**: `boolean`

Specifies whether to display the [Designer](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#designer-tab) tab.

Default value: `true`

**Related APIs:** [`activeTab`](#activeTab), [`onSurveyInstanceCreated`](#onSurveyInstanceCreated)

### `showErrorOnFailedSave`

**Type**: `boolean`

Specifies whether to show an error message if a survey is not saved in a database.

Default value: `true`

### `showJSONEditorTab`

**Type**: `boolean`

Specifies whether to display the [JSON Editor](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#json-editor-tab) tab.

Default value: `true`

**Related APIs:** [`activeTab`](#activeTab)

### `showLogicTab`

**Type**: `boolean`

Specifies whether to display the [Logic](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#logic-tab) tab.

Default value: `true`

**Related APIs:** [`activeTab`](#activeTab)

### `showPreviewTab`

**Type**: `boolean`

Specifies whether to display the [Preview](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#preview-tab) tab.

Default value: `true`

**Related APIs:** [`activeTab`](#activeTab), [`onSurveyInstanceCreated`](#onSurveyInstanceCreated)

### `showSaveButton`

**Type**: `boolean`

Specifies whether to display a button that saves the survey or theme (executes the [`saveSurveyFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveSurveyFunc) or [`saveThemeFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc) function).

Default value: `false`

**Related APIs:** [`autoSaveEnabled`](#autoSaveEnabled), [`syncSaveButtons`](#syncSaveButtons)

### `showSidebar`

**Type**: `boolean`

Opens or closes the sidebar that displays the Property Grid.

Default value: `true`

[View Demo](https://surveyjs.io/survey-creator/examples/customize-property-editors/ (linkStyle))

**Related APIs:** [`sidebarLocation`](#sidebarLocation), [`removeSidebar`](#removeSidebar)

### `showSurveyHeader`

**Type**: `boolean`

Specifies whether users can see and edit the survey header and related survey properties.

Default value: `true`

Available since: v2.0.0

**Related APIs:** [`onBeforeShowInplaceDescriptionEditor`](#onBeforeShowInplaceDescriptionEditor)

### `showThemeTab`

**Type**: `boolean`

Specifies whether to display the [Themes](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#themes-tab) tab.

Default value: `false`

Use the [`themeEditor`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#themeEditor) object to manage UI themes available in the Themes tab.

[View Demo](https://surveyjs.io/survey-creator/examples/change-form-theme/ (linkStyle))

**Related APIs:** [`activeTab`](#activeTab), [`saveThemeFunc`](#saveThemeFunc)

### `showToolbox`

**Type**: `boolean`

Specifies whether to show the Toolbox.

Default value: `true`

[Toolbox Customization](https://surveyjs.io/survey-creator/documentation/toolbox-customization (linkStyle))

**Related APIs:** [`toolbox`](#toolbox), [`toolboxLocation`](#toolboxLocation)

### `showTranslationTab`

**Type**: `boolean`

Specifies whether to display the [Translation](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#translation-tab) tab.

Default value: `false`

[View Demo](https://surveyjs.io/survey-creator/examples/create-multilingual-forms/ (linkStyle))

**Related APIs:** [`activeTab`](#activeTab), [`clearTranslationsOnSourceTextChange`](#clearTranslationsOnSourceTextChange)

### `sidebarLocation`

**Type**: `"left" | "right"`

Specifies the position of the sidebar that displays the Property Grid. Applies only when [`showSidebar`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSidebar) is `true`.

Accepted values:

- `"right"` (default) - Displays the sidebar on the right side of the design surface.
- `"left"` - Displays the sidebar on the left side of the design surface.

**Related APIs:** [`toolboxLocation`](#toolboxLocation), [`removeSidebar`](#removeSidebar)

### `state`

**Type**: `string`

Indicates the state of Survey Creator.

Accepted values:

- `""` - Survey Creator doesn't have unsaved changes.
- `"modified"` - Survey Creator has unsaved changes.
- `"saving"` - Changes are being saved.
- `"saved"` - Changes are successfully saved.

**Related APIs:** [`onModified`](#onModified)

### `survey`

**Type**: `SurveyModel`

A [survey](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model) being configured in the Designer tab.

**Related APIs:** [`onSurveyInstanceCreated`](#onSurveyInstanceCreated)

### `syncSaveButtons`

**Type**: `boolean`

Specifies whether to synchronize [Save buttons](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSaveButton) in the Designer and Themes tabs.

Default value: `false`

When this property is disabled, the Save button in the Designer tab saves only the survey JSON schema, while the Save button in the Themes tab saves only the theme JSON schema. If you enable this property, both buttons will save both JSON schemas.

**Related APIs:** [`saveSurveyFunc`](#saveSurveyFunc), [`saveThemeFunc`](#saveThemeFunc), [`save`](#save)

### `text`

**Type**: `string`

A survey JSON schema as a string.

This property allows you to get or set the JSON schema of a survey being configured. Alternatively, you can use the [`JSON`](#JSON) property.

### `theme`

**Type**: `ITheme`

Gets or sets a [theme](https://surveyjs.io/form-library/documentation/api-reference/itheme) for the survey being configured.

[Theme Editor](https://surveyjs.io/survey-creator/documentation/theme-editor (linkStyle))

**Related APIs:** [`showThemeTab`](#showThemeTab), [`themeEditor`](#themeEditor), [`saveThemeFunc`](#saveThemeFunc)

### `themeEditor`

**Type**: `ThemeTabPlugin`

An object that enables you to manage UI themes. Refer to the following API section for information on available properties, methods, and events: [`ThemeTabPlugin`](https://surveyjs.io/survey-creator/documentation/api-reference/themetabplugin).

[View Demo](https://surveyjs.io/survey-creator/examples/save-custom-theme/ (linkStyle))

**Related APIs:** [`showThemeTab`](#showThemeTab), [`saveThemeFunc`](#saveThemeFunc)

### `toolbox`

**Type**: `QuestionToolbox`

Provides access to the [Toolbox API](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox).

[Toolbox Customization](https://surveyjs.io/survey-creator/documentation/toolbox-customization (linkStyle))

**Related APIs:** [`showToolbox`](#showToolbox), [`toolboxLocation`](#toolboxLocation)

### `toolboxLocation`

**Type**: `"left" | "right" | "sidebar"`

Specifies the Toolbox location.

Accepted values:

- `"left"` (default) - Displays the Toolbox on the left side of the design surface.
- `"right"` - Displays the Toolbox on the right side of the design surface.
- `"sidebar"` - Displays the Toolbox as an overlay on top of the Property Grid. Use the [`sidebarLocation`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#sidebarLocation) property to specify the Property Grid position.

[Toolbox Customization](https://surveyjs.io/survey-creator/documentation/toolbox-customization (linkStyle))

**Related APIs:** [`showToolbox`](#showToolbox), [`toolbox`](#toolbox)

### `useElementTitles`

**Type**: `boolean`

Specifies whether Survey Creator UI elements display survey, page, and question titles instead of their names.

Default value: `false`

[View Demo](https://surveyjs.io/survey-creator/examples/dynamically-modify-newly-added-questions/ (linkStyle))

Available since: v2.0.0

**Related APIs:** [`onElementGetDisplayName`](#onElementGetDisplayName)

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

## Methods

### `activatePropertyGridCategory()`

Activates a specified category in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"buttons"`.

[View Demo](https://surveyjs.io/survey-creator/examples/add-properties-to-property-grid/ (linkStyle))

Available since: v2.0.0

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | `string` | A [category name](https://surveyjs.io/form-library/documentation/customize-question-types/add-custom-properties-to-a-form#category). |

### `addCollectionItemsJson()`

Adds new items to the [`pages`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#pages), [`triggers`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#triggers), [`calculatedValues`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#calculatedValues), and [`completedHtmlOnCondition`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#completedHtmlOnCondition) arrays in the existing survey JSON schema.

Use this method to merge the collection properties of two survey JSON schemas:

```js
import { SurveyCreatorModel } from "survey-creator-core";
const creatorOptions = { ... };
const creator = new SurveyCreatorModel(creatorOptions);

const surveyJson1 = { ... };
const surveyJson2 = { ... };

creator.JSON = surveyJson1;
creator.addCollectionItemsJson(surveyJson2);
// `creator.JSON` contains the merged survey JSON schema
```

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `json` | `any` | A JSON object that contains the `pages`, `triggers`, `calculatedValues`, and/or `completedHtmlOnCondition` array(s). |
| `insertPageIndex` | `number` | A zero-based index at which to insert new pages. |

### `addTab()`

Adds a custom tab to Survey Creator.

This method accepts an `ITabOptions` object with the following properties:

- `name`: `string`\
A unique tab ID.

- `plugin`: `ICreatorPlugin`\
An object that allows you to handle user interactions with the tab.

- `title`: `string`\
*(Optional)* A tab caption. If `title` is undefined, the `name` property value is displayed instead. To localize the caption, add its translations to the `ed` object within [localization dictionaries](https://github.com/surveyjs/survey-creator/tree/90de47d2c9da49b06a7f97414026d70f7acf05c6/packages/survey-creator-core/src/localization) and pass `ed.propertyName` as the `title` property.

- `iconName`: `string`\
*(Optional)* An [icon name](https://surveyjs.io/form-library/documentation/icons). Icons are used when the tab bar doesn't have enough width to display tab titles.

- `componentName`: `string`\
*(Optional)* The name of the component that renders tab markup. Default value: `"svc-tab-" + name`.

- `index`: `number`\
*(Optional)* A zero-based index that specifies the tab's position relative to other tabs.

[View Demo](https://surveyjs.io/survey-creator/examples/modify-tab-bar/ (linkStyle))

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `tabOptions` | `ITabOptions` | An object that configures the custom tab. |

### `applyCreatorTheme()`

Applies a specified UI theme to Survey Creator.

[View Demo](https://surveyjs.io/survey-creator/examples/dynamic-ui-customization/ (linkStyle))

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `theme` | `ICreatorTheme` | An `ICreatorTheme` object with theme settings. |

**Related APIs:** [`creatorTheme`](#creatorTheme), [`showCreatorThemeSettings`](#showCreatorThemeSettings)

### `applyTheme()`

Applies a [theme](https://surveyjs.io/form-library/documentation/api-reference/itheme) to the survey being configured.

[Theme Editor](https://surveyjs.io/survey-creator/documentation/theme-editor (linkStyle))

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `surveyTheme` | `ITheme` | An [`ITheme`](https://surveyjs.io/form-library/documentation/api-reference/itheme) object with theme settings. |

**Related APIs:** [`theme`](#theme), [`themeEditor`](#themeEditor), [`saveThemeFunc`](#saveThemeFunc)

### `chooseFiles()`

Opens a dialog window for users to select files.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `input` | `HTMLInputElement` | A [file input HTML element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement). |
| `callback` | `(files: File[]) => void` | A callback function that you can use to process selected files. Accepts an array of JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/API/File" target="_blank">File</a> objects. |
| `context` | `{ element: Base; item?: any; elementType?: string; propertyName?: string; }` |  |

**Related APIs:** [`onOpenFileChooser`](#onOpenFileChooser), [`onUploadFile`](#onUploadFile)

### `closeCreatorThemeSettings()`

Closes [Survey Creator theme](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#creatorTheme) settings in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"buttons"`.

Available since: v2.0.0

**Related APIs:** [`openCreatorThemeSettings`](#openCreatorThemeSettings), [`showCreatorThemeSettings`](#showCreatorThemeSettings)

### `collapseAll()`

Collapses all survey elements in the design surface.

**Related APIs:** [`expandAll`](#expandAll), [`collapseElement`](#collapseElement)

### `collapseAllPropertyGridCategories()`

Collapses all categories in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"accordion"`.

**Related APIs:** [`expandAllPropertyGridCategories`](#expandAllPropertyGridCategories)

### `collapseElement()`

Collapses an individual survey element on the design surface.

Available since: v2.0.0

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `element` | `SurveyElement<any>` | A survey element to collapse. |

**Related APIs:** [`expandElement`](#expandElement), [`collapseAll`](#collapseAll)

### `collapsePropertyGridCategory()`

Collapses a specified category in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"accordion"`.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | `string` | A [category name](https://surveyjs.io/form-library/documentation/customize-question-types/add-custom-properties-to-a-form#category). |

**Related APIs:** [`expandPropertyGridCategory`](#expandPropertyGridCategory)

### `copyPage()`

**Return value:** `PageModel` &ndash; The [instance of a new page](https://surveyjs.io/form-library/documentation/api-reference/page-model).

Creates a copy of a specified page and inserts the copy next to this page.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `page` | `PageModel` | A [page](https://surveyjs.io/form-library/documentation/api-reference/page-model) to copy. |

**Related APIs:** [`onPageAdding`](#onPageAdding), [`onPageAdded`](#onPageAdded)

### `copyQuestion()`

**Return value:** `IElement` &ndash; The instance of a new question.

Creates a copy of a specified question, inserts the copy next to this question, and (optionally) selects it on the design surface.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `question` | `Base` | A question to copy. |
| `selectCopy` | `boolean` | *(Optional)* Pass `true` if you want to select the copy on the design surface. Default value: `false`. |

### `deleteElement()`

Deletes a survey element: a question, panel, or page.

If you want to delete the focused element, pass the [`selectedElement`](#selectedElement) property value to this method.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `element` | `Base` | A survey element to delete. |

**Related APIs:** [`onElementDeleting`](#onElementDeleting)

### `deleteLocaleStrings()`

Deletes all custom translation strings for a specified locale from Survey Creator and from the generated survey JSON schema.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `locale` | `string` | A locale code (for example, "en"). |

**Related APIs:** [`locale`](#locale)

### `expandAll()`

Expands all survey elements on the design surface.

**Related APIs:** [`collapseAll`](#collapseAll), [`expandElement`](#expandElement)

### `expandAllPropertyGridCategories()`

Expands all categories in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"accordion"`.

**Related APIs:** [`collapseAllPropertyGridCategories`](#collapseAllPropertyGridCategories)

### `expandElement()`

Expands an individual survey element on the design surface.

Available since: v2.0.0

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `element` | `SurveyElement<any>` | A survey element to expand. |

**Related APIs:** [`collapseElement`](#collapseElement), [`expandAll`](#expandAll)

### `expandPropertyGridCategory()`

Expands a specified category in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"accordion"`.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | `string` | A [category name](https://surveyjs.io/form-library/documentation/customize-question-types/add-custom-properties-to-a-form#category). |

**Related APIs:** [`collapsePropertyGridCategory`](#collapsePropertyGridCategory), [`activatePropertyGridCategory`](#activatePropertyGridCategory)

### `notify()`

Displays a toast notification with a specified message.

If you want to implement custom toast notification from scratch, handle the [`onNotify`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onNotify) event.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `message` | `string` | A message to display. |
| `type` | `"info" \| "error"` | A notification type: `"info"` (default) or `"error"`. |

### `openCreatorThemeSettings()`

Opens [Survey Creator theme](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#creatorTheme) settings in Property Grid. Applies only if [`propertyGridNavigationMode`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#propertyGridNavigationMode) is `"buttons"`.

[View Demo](https://surveyjs.io/survey-creator/examples/dynamic-ui-customization/ (linkStyle))

Available since: v2.0.0

**Related APIs:** [`closeCreatorThemeSettings`](#closeCreatorThemeSettings), [`showCreatorThemeSettings`](#showCreatorThemeSettings)

### `redo()`

Repeats the last undone action if possible.

**Related APIs:** [`undo`](#undo), [`onBeforeRedo`](#onBeforeRedo)

### `refreshDesigner()`

Refreshes the Designer tab.

`refreshDesigner()` is useful if the Designer tab UI depends on an external variable. Call this method each time this variable changes to update the UI.

### `save()`

Calls the [`saveSurveyFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveSurveyFunc) and [`saveThemeFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc) functions to save the survey and theme JSON schemas.

**Related APIs:** [`saveSurvey`](#saveSurvey), [`saveTheme`](#saveTheme)

### `saveSurvey()`

Calls the [`saveSurveyFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveSurveyFunc) function to save the survey JSON schema.

**Related APIs:** [`saveTheme`](#saveTheme), [`save`](#save)

### `saveTheme()`

Calls the [`saveThemeFunc`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc) function to save the theme JSON schema.

**Related APIs:** [`saveSurvey`](#saveSurvey), [`save`](#save)

### `startMachineTranslationTo()`

Starts the translation of survey strings from the default language to one or more specified languages using a machine translation service, such as Google Translate or Microsoft Translator.

This method only launches the operation by raising the [`onMachineTranslate`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onMachineTranslate) event. Handle this event to perform the actual translation.

[View Demo](https://surveyjs.io/survey-creator/examples/ai-translation/ (linkStyle))

Available since: v2.0.2

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `locales` | `string[]` | An array of locale codes that correspond to target languages, for example, `[ "de", "fr" ]`. |

### `switchTab()`

**Return value:** `boolean` &ndash; `false` if the active tab cannot be switched, `true` otherwise.

Switches the [active tab](#activeTab). Returns `false` if the tab cannot be switched.

Available since: v2.0.0

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `tabName` | `string` | A tab that you want to make active: `"designer"`, `"preview"`, `"theme"`, `"json"`, `"logic"`, or `"translation"`. |

### `undo()`

Cancels the last change if possible.

**Related APIs:** [`redo`](#redo), [`onBeforeUndo`](#onBeforeUndo)

### `uploadFiles()`

Uploads files to a server.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `files` | `File[]` | An array of JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/API/File" target="_blank">File</a> objects that represent files to upload. |
| `question` | `Question` | A [question instance](https://surveyjs.io/form-library/documentation/api-reference/question) for which files are uploaded. |
| `callback` | `(status: string, data: any) => any` | A callback function that indicates the upload status&mdash;"success" or "error"&mdash;as the first argument. If a file is uploaded successfully, the second argument contains the file's URL. |
| `context` | `{ element: Base; item?: any; elementType?: string; propertyName?: string; }` |  |

**Related APIs:** [`onUploadFile`](#onUploadFile)

### `validateSelectedElement()`

**Return value:** `boolean` &ndash; `true` if all property values of the focused element are valid or if no element is focused, `false` otherwise.

Validates the property values of the [focused element](#selectedElement).

**Related APIs:** [`onElementSelecting`](#onElementSelecting), [`onElementSelected`](#onElementSelected)

## Events

### `onActiveTabChanged`

An event that is raised after the [active tab](#activeTab) is switched.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.tabName`: `string`  
A tab that has become active: `"designer"`, `"preview"`, `"theme"`, `"json"`, `"logic"`, or `"translation"`.

**Related APIs:** [`switchTab`](#switchTab)

### `onActiveTabChanging`

An event that is raised before the [active tab](#activeTab) is switched. Use this event to allow or cancel the switch.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.tabName`: `string`  
A tab that is going to become active: `"designer"`, `"preview"`, `"theme"`, `"json"`, `"logic"`, or `"translation"`.
- `options.allow`: `boolean`  
Specifies whether the active tab can be switched. Set this property to `false` if you want to cancel the switch.

**Related APIs:** [`switchTab`](#switchTab)

### `onAfterPropertyChanged`

An event that is raised after a survey element property has changed.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.propertyName`: `string`  
The name of the modified property.
- `options.value`: `any`  
A new property value.
- `options.element`: `Base`  
A survey element (question, panel, page, or the survey itself) whose property has changed.

Available since: v2.0.0

**Related APIs:** [`onPropertyDisplayCustomError`](#onPropertyDisplayCustomError), [`onBeforePropertyChanged`](#onBeforePropertyChanged)

### `onAllowAddElement`

An event that is raised to determine whether an element can be added to the survey.

Use this event to conditionally prevent adding elements of specific types or converting existing elements to those types (for example, when a predefined limit has been reached). The event is re-evaluated whenever the survey changes.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.name`: `string`  
The name of the toolbox item used to create the element. Usually matches the element's [type](https://surveyjs.io/form-library/documentation/api-reference/question#getType).
- `options.toolboxItem`: `QuestionToolboxItem`  
The [toolbox item instance](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolboxitem) that corresponds to the element.
- `options.json`: `any`  
The element's JSON definition.
- `options.allow`: `boolean`  
A Boolean property that you can set to `false` to prevent adding or converting to this element type.

[View Demo](https://surveyjs.io/survey-creator/examples/limit-number-of-survey-elements/ (linkStyle))

Available since: v2.3.8

### `onAllowInplaceEdit`

An event that is raised to determine whether in-place editing is allowed for an element on the design surface. Use this event to enable or disable in-place editing for specific elements.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element (question, panel, page, or the survey itself) whose property is being edited.
- `options.item`: `ItemValue`  
A choice item being edited. Defined only when in-place editing targets a choice option.
- `options.propertyName`: `string`  
The name of the property being edited.
- `options.allow`: `boolean`  
A Boolean property that you can set to `false` if you want to disable in-place editing.

Available since: v2.3.7

**Related APIs:** [`onBeforeShowInplaceDescriptionEditor`](#onBeforeShowInplaceDescriptionEditor), [`inplaceEditChoiceValues`](#inplaceEditChoiceValues)

### `onBeforePropertyChanged`

An event that is raised each time a user modifies a survey element property. Use this event to validate or correct a property value while the user changes it.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.propertyName`: `string`  
The name of a property being modified.
- `options.newValue`: `any`  
A new property value. Modify this parameter if you want to override the property value.
- `options.element`: `Base`  
A survey element (question, panel, page, or the survey itself) whose property is being edited.
- `options.oldValue`: `any`  
An old property value.

Available since: v2.0.0

**Related APIs:** [`onPropertyDisplayCustomError`](#onPropertyDisplayCustomError), [`onAfterPropertyChanged`](#onAfterPropertyChanged)

### `onBeforeRedo`

An event that is raised before an redo operation.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.allow`: `boolean`  
A Boolean value that you can set to `false` if you want to prevent the redo operation.

**Related APIs:** [`redo`](#redo), [`undo`](#undo), [`onBeforeUndo`](#onBeforeUndo)

### `onBeforeShowInplaceDescriptionEditor`

An event that is raised before Survey Creator displays an in-place description editor on the design surface. Handle this event to show or hide the description editor for the survey, individual questions, panels (including panels within a Dynamic Panel), and pages.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Question | SurveyModel | PageModel | PanelModel`  
A survey element (survey, question, panel, or page) whose in-place description editor is about to be displayed on the design surface.
- `options.show`: `boolean`  
A Boolean property that specifies whether the in-place description editor is displayed. Set this property to `false` to hide the editor for the current `options.element` or to `true` to display it.

Available since: v2.5.33

**Related APIs:** [`onAllowInplaceEdit`](#onAllowInplaceEdit), [`inplaceEditChoiceValues`](#inplaceEditChoiceValues), [`showSurveyHeader`](#showSurveyHeader)

### `onBeforeUndo`

An event that is raised before an undo operation.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.allow`: `boolean`  
A Boolean value that you can set to `false` if you want to prevent the undo operation.

**Related APIs:** [`undo`](#undo), [`redo`](#redo), [`onBeforeRedo`](#onBeforeRedo)

### `onCollectionItemAllowOperations`

An event that is raised when Survey Creator obtains permitted operations for a collection item (a choice option in Choices, a column or row in Columns, etc.). Use this event to prevent users from adding, deleting, or editing a particular collection item.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element (survey, page, panel, question) that contains the collection to which the target item belongs.
- `options.property`: `JsonObjectProperty`  
A property that contains the collection to which the target item belongs.
- `options.propertyName`: `string`  
The property's name: `columns`, `rows`, `choices`, `rateValues`, etc.
- `options.collection`: `Base[]`  
An array of collection items to which the target item belongs ([`columns`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#columns) or [`rows`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#rows) in matrix questions, [`choices`](https://surveyjs.io/form-library/documentation/api-reference/questionselectbase#choices) in select-based questions, etc.).
- `options.item`: `Base`  
A target collection item.
- `options.allowAdd`: `boolean`  
A Boolean property that you can set to `false` if you want to prevent the target item from being added to the collection.
- `options.allowDelete`: `boolean`  
A Boolean property that you can set to `false` if you want to prevent the target item from being deleted.
- `options.allowEdit`: `boolean`  
A Boolean property that you can set to `false` if you want to prevent the target item from being edited.

**Related APIs:** [`onElementAllowOperations`](#onElementAllowOperations)

### `onCollectionItemDeleting`

An event that is raised before an item is removed from a collection (for example, a choice option in Choices, a column or row in Columns, etc.). Use this event to intercept and optionally cancel the deletion.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element (survey, page, panel, question) that contains the collection to which the target item belongs.
- `options.property`: `JsonObjectProperty`  
A property that contains the collection to which the target item belongs.
- `options.propertyName`: `string`  
The property's name: `columns`, `rows`, `choices`, `rateValues`, etc.
- `options.collection`: `Base[]`  
An array of collection items to which the target item belongs ([`columns`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#columns) or [`rows`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#rows) in matrix questions, [`choices`](https://surveyjs.io/form-library/documentation/api-reference/questionselectbase#choices) in select-based questions, etc.).
- `options.item`: `Base`  
A target collection item.
- `options.allow`: `boolean`  
A Boolean property that you can set to `false` if you want to prevent the target item from being deleted.

### `onConditionGetQuestionList`

An event that is raised when a condition editor renders a list of questions and variables available for selection. Use this event to modify this list.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element (question, panel, page, or the survey itself) for which the condition editor is displayed.
- `options.propertyName`: `string`  
The name of a property being configured: `enableIf`, `requiredIf`, `visibleIf`, etc.
- `options.editor`: `any`  
A condition editor instance.
- `options.list`: `any[]`  
A list of questions available for selection.
- `options.variables`: `string[]`  
A list of [calculated values](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#calculated-values) and [variables](https://surveyjs.io/form-library/documentation/design-survey/conditional-logic#variables) available for selection.
- `options.sortOrder`: `string`  
The sort order of questions within both list: `"asc"` (default) or `"none"`. Set this property to `"none"` to disable sorting.

Available since: v2.0.0

### `onConfigureTablePropertyEditor`

An event that is raised when a table property editor is created in the Property Grid. Use this event to configure the table property editor.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element (survey, page, panel, question) for which the table property editor is created.
- `options.propertyName`: `string`  
The name of the property with which the editor is associated: [`"columns"`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#columns), [`"rows"`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#rows), [`"choices"`](https://surveyjs.io/form-library/documentation/api-reference/questionselectbase#choices), etc.
- `options.allowAddRemoveItems`: `boolean`  
A Boolean property that you can set to `false` if you want to disallow users to add and delete table rows.
- `options.allowRemoveAllItems`: `boolean`  
A Boolean property that you can set to `false` if you want to disallow users to delete all table rows.
- `options.allowBatchEdit`: `boolean`  
A Boolean property that you can set to `false` if you want to disallow users to edit table content as text in a pop-up window.

**Related APIs:** [`onPropertyEditorCreated`](#onPropertyEditorCreated)

### `onCreateCustomMessagePanel`

An event that allows you to create a custom message panel.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.question`: `Question`  
A question for which the event is raised.
- `options.messageText`: `string`  
A notification message that you want to display. Assign a custom string value to this parameter.
- `options.actionText`: `string`  
A caption text for the action link. Assign a custom string value to this parameter.
- `options.onClick`: `() => void`  
A function that is called when users click the action link. Assign a custom function to this parameter.

A message panel is displayed within a question box on the design surface. It contains a text message and an optional action link. The following image illustrates a built-in message panel that appears when a question sources its choice options from another question or from a web service:

<img src="https://surveyjs.io/stay-updated/release-notes/articles/v1.9.126/creator-message-panel.png" alt="Survey Creator: A message panel" width="75%">

To create a custom message panel, handle the `onCreateCustomMessagePanel` event. This event is raised for questions whose `isMessagePanelVisible` property set to `true`. The following code shows how to enable this property based on a condition. This code implements a custom data source selector for select-based questions (Dropdown, Checkboxes, Radio Button Group). When a survey author selects any data source other than "Custom", the `isMessagePanelVisible` property becomes enabled, indicating that the `onCreateCustomMessagePanel` event must be raised. A function that handles this event specifies custom message and action link texts and `onClick` event handler:

```js
import { Serializer } from "survey-core";
import { SurveyCreatorModel } from "survey-creator-core";

Serializer.addProperty("selectbase", {
  name: "choicesDataSource",
  displayName: "Data source",
  category: "choices",
  choices: [
    { text: "Country", value: "country" },
    { text: "Region", value: "region" },
    { text: "City", value: "city" },
    { text: "Custom", value: "custom" }
  ],
  onSetValue: function (obj: any, value: any) {
    // Set the custom property value
    obj.setPropertyValue("choicesDataSource", value);
    // Display the message panel based on a condition
    obj.setPropertyValue("isMessagePanelVisible", value !== "custom");
  }
});

const creator = new SurveyCreatorModel();

creator.onCreateCustomMessagePanel.add((_, options) => {
  options.messageText = "Choices for this question are loaded from a predefined data source. ";
  options.actionText = "Go to settings";
  // Focus the "Data source" editor within the Property Grid
  options.onClick = () => {
    creator.selectElement(options.question, "choicesDataSource");
  };
});
```

### `onCreatorThemePropertyChanged`

An event that is raised when users change a property in a [Survey Creator theme](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#creatorTheme).

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.name`: `string`  
A property name.
- `options.value`: `any`  
A new property value.

Available since: v2.0.0

### `onCreatorThemeSelected`

An event that is raised when users select a [Survey Creator theme](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#creatorTheme) from the drop-down list of UI themes.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.theme`: `ICreatorTheme`  
A selected Survey Creator theme.

Available since: v2.0.0

### `onDragClear`

An event that is raised when users cancel dragging a survey element.

Available since: v2.0.0

**Related APIs:** [`onDragStart`](#onDragStart), [`onDragEnd`](#onDragEnd), [`onDragDropAllow`](#onDragDropAllow)

### `onDragDropAllow`

An event that is raised when users drag and drop survey elements within the design surface. Use this event to control drag and drop operations.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.draggedElement`: `IElement`  
A survey element being dragged.
- `options.fromElement`: `IPanel`  
A survey element from which `draggedElement` is being dragged. This parameter is `null` if `draggedElement` is being dragged from the [Toolbox](https://surveyjs.io/survey-creator/documentation/toolbox).
- `options.toElement`: `IElement`  
A survey element to which `draggedElement` is being dragged.
- `options.insertBefore`: `IElement`  
A survey element before which `draggedElement` will be placed. This parameter is `null` if the parent container (page or panel) has no elements or if `draggedElement` will be placed below all other elements within the container.
- `options.insertAfter`: `IElement`  
A survey element after which `draggedElement` will be placed. This parameter is `null` if the parent container (page or panel) has no elements or if `draggedElement` will be placed above all other elements within the container.
- `options.parent`: `ISurveyElement`  
A parent container (page or panel) within which `draggedElement` will be placed.
- `options.survey`: `SurveyModel`  
A survey within which the drag and drop operation occured.
- `options.allowDropNextToAnother`: `boolean`  
A Boolean property that you can set to `false` if you want to disallow placing `draggedElement` on the same line with any other survey element.
- `options.allow`: `boolean`  
A Boolean property that you can set to `false` if you want to cancel the drag and drop operation.

[View Demo](https://surveyjs.io/survey-creator/examples/page-break-and-page-merge/ (linkStyle))

**Related APIs:** [`onDragStart`](#onDragStart), [`onDragEnd`](#onDragEnd)

### `onDragEnd`

An event that is raised when users finish dragging a survey element within the design surface.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.draggedElement`: `IElement`  
A survey element being dragged.
- `options.fromElement`: `IElement`  
A survey element from which `draggedElement` is being dragged. This parameter is `null` if `draggedElement` is being dragged from the [Toolbox](https://surveyjs.io/survey-creator/documentation/toolbox).
- `options.toElement`: `IElement`  
A survey element to which `draggedElement` is being dragged.

**Related APIs:** [`onDragStart`](#onDragStart), [`onDragDropAllow`](#onDragDropAllow)

### `onDragStart`

An event that is raised when users start to drag a survey element within the design surface.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.draggedElement`: `IElement`  
A survey element being dragged.
- `options.fromElement`: `IElement`  
A survey element from which `draggedElement` is being dragged. This parameter is `null` if `draggedElement` is being dragged from the [Toolbox](https://surveyjs.io/survey-creator/documentation/toolbox).
- `options.toElement`: `IElement`  
A survey element to which `draggedElement` is being dragged.

**Related APIs:** [`onDragEnd`](#onDragEnd), [`onDragDropAllow`](#onDragDropAllow)

### `onElementAllowOperations`

An event that is raised when Survey Creator obtains permitted operations for a survey element. Use this event to disable user interactions with a question, panel, or page on the design surface.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element (question or panel) for which you can disable user interactions.
- `options.allowChangeRequired`: `boolean`  
Allows users to mark the survey element as required.
- `options.allowChangeType`: `boolean`  
Allows users to change the survey element type.
- `options.allowChangeInputType`: `boolean`  
Allows users to change the [`inputType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#inputType) property of Single-Line Input questions.
- `options.allowCopy`: `boolean`  
Allows users to duplicate the survey element.
- `options.allowDelete`: `boolean`  
Allows users to delete the survey element.
- `options.allowDrag`: `boolean`  
Allows users to drag and drop the survey element.
- `options.allowEdit`: `boolean`  
Allows users to edit survey element properties on the design surface. If you disable this property, users can edit the properties only in the Property Grid.
- `options.allowExpandCollapse`: `boolean`  
Allows users to collapse and expand the survey element on the design surface.
- `options.allowShowSettings`: `boolean`  
Controls the visibility of the Settings button that allows users to open the Property Grid for survey element configuration. Set this property to `true` or `false` to display or hide the Settings button at all times. The default value `undefined` displays the Settings button only when Survey Creator has small width.

To disable a user interaction, set the correponding `allow...` property to `false`.

[Specify Adorner Visibility](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#specify-adorner-availability (linkStyle))

**Related APIs:** [`onCollectionItemAllowOperations`](#onCollectionItemAllowOperations)

### `onElementDeleting`

An event that is raised before a survey element (a question, panel, or page) is deleted.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element to be deleted.
- `options.elementType`: `string`  
The element type: `"question"`, `"panel"`, or `"page"`.
- `options.allow`: `boolean`  
A Boolean property that you can set to `false` if you want to cancel element deletion.

**Related APIs:** [`deleteElement`](#deleteElement)

### `onElementGetActions`

An event that is raised when Survey Creator obtains [adorners](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#specify-adorner-availability) for a survey element. Use this event to hide and modify predefined adorners or add a custom adorner.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element (question, panel, or page) whose adorners you can customize.
- `options.actions`: `IAction[]`  
An array of adorner actions. You can add, modify, or remove actions from this array. Refer to the [`IAction`](https://surveyjs.io/form-library/documentation/api-reference/iaction) interface description for information about the properties of an action object.

[View Demo](https://surveyjs.io/survey-creator/examples/create-custom-adorners/ (linkStyle))

Available since: v2.0.0

**Related APIs:** [`onElementAllowOperations`](#onElementAllowOperations), [`onPageGetFooterActions`](#onPageGetFooterActions)

### `onElementGetDisplayName`

An event that is raised when Survey Creator obtains a survey element name to display it in the UI.

Handle this event to replace survey element names in the UI with custom display texts. If you only want to replace the names with survey element titles, enable the [`useElementTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#useElementTitles) property instead of handling this event.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element (survey, page, question, or panel) whose name has been requested.
- `options.area`: `string`  
A Survey Creator UI element that requests the display name. Contains one of the following values:
  - `"page-selector"` - Page selector on the design surface.
  - `"condition-editor"` - Condition pop-up window or drop-down menus that allow users to select questions in the Logic tab.
  - `"logic-tab:question-filter"` - Question filter in the Logic tab.
  - `"logic-tab:question-selector"` - Question selector on editing actions in the Logic tab.
  - `"preview-tab:page-list"` - Page list in the Preview tab.
  - `"preview-tab:selected-page"` - Selected page name in the Preview tab.
  - `"property-grid:property-editor"` - Property editors in the Property Grid.
  - `"property-grid-header:element-list"` - Survey element list in the header of the Property Grid.
  - `"property-grid-header:selected-element"` - Selected survey element in the header of the Property Grid.
  - `"translation-tab"` - Translation tab.
- `options.displayName`: `string`  
A survey element's display text. Modify this property to set a custom display text for the survey element.

Available since: v2.0.0

### `onElementGetExpandCollapseState`

An event that is raised when Survey Creator obtains the expand/collapse state of a survey element on the design surface. Handle this event to set a required state.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Question | PageModel | PanelModel`  
A survey element (question, panel, or page) whose expand/collapse state you can switch.
- `options.collapsed`: `boolean`  
Indicates whether the element is currently collapsed or expanded. Set this parameter to `true` if you want to collapse the element or `false` to expand it.
- `options.reason`: `"loading" | "collapse-all" | "expand-all" | "drag-start" | "drag-end"`  
A value that indicates what caused the event to raise: the loading of a survey JSON schema, a click on the Expand All or Collapse All button, or the beginning or end of a drag and drop operation.

[View Demo](https://surveyjs.io/survey-creator/examples/expand-and-collapse-survey-elements/ (linkStyle))

**Related APIs:** [`ICreatorOptions.collapseQuestions`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#collapseQuestions), [`ICreatorOptions.collapsePanels`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#collapsePanels), [`ICreatorOptions.collapsePages`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#collapsePages), [`expandCollapseButtonVisibility`](#expandCollapseButtonVisibility), [`collapseAll`](#collapseAll), [`expandAll`](#expandAll)

### `onElementSelected`

An event that is raised after a survey element (a question, panel, page, or the survey itself) is selected.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
The [selected element](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#selectedElement).

Available since: v2.0.0

**Related APIs:** [`onElementSelecting`](#onElementSelecting)

### `onElementSelecting`

An event that is raised before a survey element (question, panel, page, or the survey itself) is selected. Use this event if you want to select a different survey element.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
An element that is going to be selected.

Available since: v2.0.0

**Related APIs:** [`onElementSelected`](#onElementSelected), [`selectedElement`](#selectedElement)

### `onFastEntryFinished`

An event that is raised when users finish editing collection items (choices, rows, columns) in a pop-up window.

Survey authors can specify collection items using a table UI in Property Grid (see the [`onItemValueAdded`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onItemValueAdded) event) or a multi-line text editor in a pop-up window. Each line in the editor specifies the value and display text of one collection item in the following format: `value|text`. Use the `onFastEntryFinished` event to process the entered text lines as required.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.lines`: `string[]`  
An array of entered text lines.
- `options.items`: `ItemValue[]`  
An array of collection items that were created based on the entered text lines. Overwrite an item's `value` or `text` property if you want to change the value or display text of this item.

### `onGetConditionOperator`

An event that is raised when Survey Creator populates a condition editor with operators. Use this event to hide individual condition operators.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.questionName`: `string`  
The name of a question for which conditions are displayed.
- `options.operator`: `string`  
A condition operator for which the event is raised: `"empty"`, `"notempty"`, `"equal"`, `"notequal"`, `"contains"`, `"notcontains"`, `"anyof"`, `"noneof"`, `"allof"`, `"greater"`, `"less"`, `"greaterorequal"`, or `"lessorequal"`.
- `options.show`: `boolean`  
A Boolean property that you can set to `false` if you want to hide the condition operator.

### `onItemValueAdded`

An event that is raised when users add a new collection item (a choice option to Choices, a column or row to Columns, etc.). Use this event to modify this item.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element (survey, page, panel, question) that contains the collection to which the target item belongs.
- `options.propertyName`: `string`  
The property's name: `columns`, `rows`, `choices`, `rateValues`, etc.
- `options.newItem`: `ItemValue`  
A new collection item. Overwrite its `value` or `text` property if you want to change the item's value or display text.
- `options.itemValues`: `ItemValue[]`  
An array of collection items to which the target item belongs ([`columns`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#columns) or [`rows`](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model#rows) in matrix questions, [`choices`](https://surveyjs.io/form-library/documentation/api-reference/questionselectbase#choices) in select-based questions, etc.).

> This event is not raised when users add a new column to a [Multi-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list) or [Dynamic Matrix](https://surveyjs.io/form-library/documentation/api-reference/dynamic-matrix-table-question-model). For these cases, handle the [`onMatrixColumnAdded`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onMatrixColumnAdded) event instead.

**Related APIs:** [`onFastEntryFinished`](#onFastEntryFinished), [`onCollectionItemAllowOperations`](#onCollectionItemAllowOperations)

### `onLogicRuleGetDisplayText`

An event that is raised when the Logic tab constructs a user-friendly display text for a logic rule. Use this event to modify this display text.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.expression`: `string`  
A logical expression associated with the logic rule.
- `options.expressionText`: `string`  
The same expression in a user-friendly format.
- `options.logicItem`: `SurveyLogicItem`  
An object that describes the logic rule. Contains an array of actions and other properties.
- `options.text`: `string`  
A user-friendly display text for the logic rule. Modify this parameter if you want to override the display text.

Available since: v2.0.0

### `onMachineTranslate`

An event that allows you to integrate a machine translation service, such as Google Translate or Microsoft Translator, into Survey Creator.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.fromLocale`: `string`  
A locale from which you want to translate strings. Contains a locale code (`"en"`, `"de"`, etc.).
- `options.toLocale`: `string`  
A locale to which you want to translate strings. Contains a locale code (`"en"`, `"de"`, etc.).
- `options.strings`: `string[]`  
Strings to translate.
- `options.callback`: `(strings: string[]) => void`  
A callback function that accepts translated strings. If the translation failed, pass an empty array or call this function without arguments.

Within the event handler, you need to pass translation strings and locale information to the translation service API. The service should return an array of translated strings that you need to pass to the `options.callback` function. The following code shows how to integrate the Microsoft Translator service into Survey Creator:

```js
import { SurveyCreatorModel } from "survey-creator-core";
const creatorOptions = { ... };
const creator = new SurveyCreatorModel(creatorOptions);

const apiKey = "<your-microsoft-translator-api-key>";
const resourceRegion = "<your-azure-region>";
const endpoint = "https://api.cognitive.microsofttranslator.com/";
creator.onMachineTranslate.add((_, options) => {
  // Prepare strings for Microsoft Translator as an array of objects: [{ Text: "text to translate" }]
  const data = [];
  options.strings.forEach(str => { data.push({ Text: str }); });
  // Include required locales in the URL
  const params = "api-version=3.0&from=" + options.fromLocale + "&to=" + options.toLocale;
  const url = endpoint + "/translate?" + params;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": apiKey,
      "Ocp-Apim-Subscription-Region": resourceRegion,
      "X-ClientTraceId": crypto.randomUUID()
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then(data => {
      // Convert data received from Microsoft Translator to a flat array
      const translatedStrings = [];
      for (let i = 0; i < data.length; i++) {
        translatedStrings.push(data[i].translations[0].text);
      }
      // Pass translated strings to Survey Creator
      options.callback(translatedStrings);

    }).catch(error => {
      // If translation was unsuccessful:
      options.callback();
      alert("Could not translate strings to the " + options.toLocale + " locale");
    });
});
```

[Multilingual Form Demo](https://surveyjs.io/survey-creator/examples/create-multilingual-forms/ (linkStyle))

[AI-Powered Translation Demo](https://surveyjs.io/survey-creator/examples/ai-translation/ (linkStyle))

> Survey Creator does not include a machine translation service out of the box. Our component only provides a UI for calling the service API.

**Related APIs:** [`startMachineTranslationTo`](#startMachineTranslationTo)

### `onMatrixColumnAdded`

An event that is raised when users add a new column to a [Multi-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-with-dropdown-list) or [Dynamic Matrix](https://surveyjs.io/form-library/documentation/api-reference/dynamic-matrix-table-question-model). Use this event to modify this column.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.matrix`: `Question`  
A Multi-Select or Dynamic Matrix to which a new column is being added.
- `options.newColumn`: `MatrixDropdownColumn`  
A new matrix column. Edit its properties if you want to modify this column.
- `options.columns`: `MatrixDropdownColumn[]`  
An array of matrix columns.

> This event is not raised when users add a new column to a [Single-Select Matrix](https://surveyjs.io/form-library/documentation/api-reference/matrix-table-question-model). For this case, handle the [`onItemValueAdded`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onItemValueAdded) event instead.

**Related APIs:** [`onCollectionItemAllowOperations`](#onCollectionItemAllowOperations)

### `onModified`

An event that is raised when users modify survey or theme settings.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.type`: `string`  
A value that indicates the modification: `"ADDED_FROM_TOOLBOX"`, `"ADDED_FROM_PAGEBUTTON"`, `"PAGE_ADDED"`, `"QUESTION_CONVERTED"`, `"ELEMENT_COPIED"`, `"PROPERTY_CHANGED"`, `"ELEMENT_REORDERED"`, `"OBJECT_DELETED"`, `"JSON_EDITOR"`

Depending on the `options.type` value, the `options` object contains parameters listed below:

`options.type`: `"ADDED_FROM_TOOLBOX"` | `"ADDED_FROM_PAGEBUTTON"` | `"ELEMENT_COPIED"`
- `options.question` - An added or copied survey element.

`options.type`: `"PAGE_ADDED"`
- `options.newValue` - An added page.

`options.type`: `"QUESTION_CONVERTED"`
- `options.className` - The name of a class to which a question has been converted.
- `options.oldValue` - An object of a previous class.
- `options.newValue` - An object of a class specified by `options.className`.

`options.type`: `"PROPERTY_CHANGED"`
- `options.name` - The name of the changed property.
- `options.target` - An object that contains the changed property.
- `options.oldValue` - A previous value of the changed property.
- `options.newValue` - A new value of the changed property.

`options.type`: `"ELEMENT_REORDERED"`
- `options.arrayName` - The name of the changed array.
- `options.parent` - An object that contains the changed array.
- `options.element` - A reordered element.
- `options.indexFrom` - A previous index.
- `options.indexTo` - A current index.

`options.type`: `"OBJECT_DELETED"`
- `options.target` - A deleted object.

**Related APIs:** [`state`](#state)

### `onNotify`

An event that is raised when Survey Creator [displays a toast notification](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#notify). Use this event to implement custom toast notification.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.message`: `string`  
A message to display.
- `options.type`: `string`  
A notification type: `"info"` or `"error"`.

**Related APIs:** [`notify`](#notify)

### `onOpenFileChooser`

An event that is raised when Survey Creator opens a dialog window for users to select files.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.input`: `HTMLInputElement`  
A file input HTML element.
- `options.element`: `Base | ITheme`  
A survey element (question, panel, page, or survey) or a theme JSON schema for which this event is raised.
- `options.elementType`: `String`  
The type of the element passed as the `options.element` parameter.\
Possible values: `"theme"`, `"header"`, or any value returned from the [`getType()`](https://surveyjs.io/form-library/documentation/api-reference/question#getType) method.
- `options.propertyName`: `String`  
The name of the survey element property or theme property for which files are being selected.
- `options.item`: `ItemValue`  
A choice item for which the event is raised. This parameter has a value only when the dialog window is opened to select images for an [Image Picker](https://surveyjs.io/form-library/documentation/api-reference/image-picker-question-model) question.
- `options.callback`: `(files: File[]) => void`  
A callback function to which you should pass selected files.

**Related APIs:** [`onUploadFile`](#onUploadFile), [`uploadFiles`](#uploadFiles)

### `onPageAdded`

An event that is raised when a new page is added to the survey. Use this event to customize the page.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.page`: `PageModel`  
The page users added.

[Customize Survey Elements on Creation](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#customize-survey-elements-on-creation (linkStyle))

### `onPageAdding`

An event that is raised before a new page is added to the survey. Handle this event if you do not want to add the page.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.page`: `PageModel`  
A page to be added.
- `options.allow`: `boolean`  
Set this property to `false` if you do not want to add the page.

### `onPageGetFooterActions`

An event that is raised when Survey Creator renders action buttons under each page on the design surface. Use this event to add, remove, or modify the buttons.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.actions`: `IAction[]`  
An array of actions. You can add, modify, or remove actions from this array. Refer to the [`IAction`](https://surveyjs.io/form-library/documentation/api-reference/iaction) interface description for information about the properties of an action object.
- `options.page`: `PageModel`  
A page for which the event is raised.
- `options.addNewQuestion`: `(type: string) => void`  
Adds a new question of a specified [`type`](https://surveyjs.io/form-library/documentation/api-reference/question#getType) to the page.

Available since: v2.0.0

**Related APIs:** [`onElementGetActions`](#onElementGetActions)

### `onPanelAdded`

An event that is raised when users add a [Panel](https://surveyjs.io/form-library/documentation/api-reference/panel-model) element to the survey. Use this event to customize the panel.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.panel`: `PanelModel`  
The panel users added.
- `options.page`: `PageModel`  
A page to which the panel was added.
- `options.reason`: `string`  
A value that indicates how the panel was added: from the [Toolbox](https://surveyjs.io/survey-creator/documentation/toolbox-customization) (`"DROPPED_FROM_TOOLBOX"` when added via drag-and-drop or `"ADDED_FROM_TOOLBOX"` when added via click), using the Add Question button (`"ADDED_FROM_PAGEBUTTON"`), or by duplicating an existing question (`"ELEMENT_COPIED"`), or by converting from another element type (`"ELEMENT_CONVERTED"`).

[Customize Survey Elements on Creation](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#customize-survey-elements-on-creation (linkStyle))

### `onPropertyDisplayCustomError`

An event that is raised when Survey Creator validates a modified value of a survey element property. Use this event to display a custom error message when the value is incorrect.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element (survey, page, panel, question) whose property is being validated.
- `options.propertyName`: `string`  
The name of a property being validated.
- `options.value`: `any`  
The property value.
- `options.error`: `string`  
An error message you want to display. If `options.value` is valid, this parameter contains an empty string.

Available since: v2.0.0

**Related APIs:** [`onBeforePropertyChanged`](#onBeforePropertyChanged), [`onAfterPropertyChanged`](#onAfterPropertyChanged)

### `onPropertyEditorCreated`

An event that is raised when a property editor is created in the Property Grid. Use this event to modify the property editor or add event handlers to it.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.editor`: `Question`  
A property editor. It is an object of the [`Question`](https://surveyjs.io/form-library/documentation/question) type because the Property Grid is [built upon a regular survey](https://surveyjs.io/survey-creator/documentation/property-grid-customization#add-custom-properties-to-the-property-grid).
- `options.property`: `JsonObjectProperty`  
A property that corresponds to the created property editor.
- `options.element`: `Base`  
A survey element being edited in the Property Grid.

**Related APIs:** [`onConfigureTablePropertyEditor`](#onConfigureTablePropertyEditor), [`onSurveyInstanceCreated`](#onSurveyInstanceCreated)

### `onPropertyEditorUpdateTitleActions`

An event that is raised when title actions are added to a property editor. Title actions are most often used to reveal property hints. Handle this event you want to add, remove, or modify the title actions.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element being edited in the Property Grid.
- `options.editor`: `Question`  
A property editor that contains the title actions. It is an object of the [`Question`](https://surveyjs.io/form-library/documentation/question) type because the Property Grid is [built upon a regular survey](https://surveyjs.io/survey-creator/documentation/property-grid-customization#add-custom-properties-to-the-property-grid).
- `options.property`: `JsonObjectProperty`  
A property that corresponds to the property editor.
- `options.titleActions`: `IAction[]`  
A list of title actions. Refer to the [`IAction`](https://surveyjs.io/form-library/documentation/api-reference/iaction) interface description for information about the properties of an action object.

[View Demo](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onPropertyEditorUpdateTitleActions (linkStyle))

### `onPropertyGetReadOnly`

An event that is raised when Survey Creator sets the read-only status for a survey element property. Use this event to change the read-only status for individual properties.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.property`: `JsonObjectProperty`  
A property whose read-only status you can change.
- `options.parentProperty`: `JsonObjectProperty`  
A property that nests `options.property` (`choices` for an item value, `columns` for a matrix column, `rows` for a matrix row etc.). `options.parentProperty` has a value only for nested properties.
- `options.readOnly`: `boolean`  
A Boolean value that specifies the property's read-only status.
- `options.element`: `Base`  
A survey element (question, panel, page, or the survey itself) for which you can change the read-only status.
- `options.parentElement`: `Base`  
A survey element that contains `options.parentProperty`. `options.parentElement` has a value only for nested properties.

Available since: v2.0.0

### `onPropertyGridShowPopup`

An event that is raised before Survey Creator displays a pop-up window called from the Property Grid. This window allows users to edit choices, conditions, etc. Use this event to customize the pop-up window, for example, add custom action buttons.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
The instance of a survey element (question or panel) that users are configuring in the Property Grid.
- `options.property`: `JsonObjectProperty`  
A property being edited.
- `options.editor`: `Question`  
A property editor. It is an object of the [`Question`](https://surveyjs.io/form-library/documentation/question) type because the Property Grid is [built upon a regular survey](https://surveyjs.io/survey-creator/documentation/property-grid-customization#add-custom-properties-to-the-property-grid).
- `options.popupEditor`: `any`  
An editor inside the pop-up window.
- `options.popupModel`: `PopupBaseViewModel`  
A pop-up window model. Use `options.popupModel.footerToolbar` to access the actions at the bottom of the window.

Available since: v2.0.0

### `onPropertyShowing`

An event that is raised when Survey Creator adds properties to a survey element selected on the design surface. Handle this event if you want to cancel the addition of certain properties and thus [hide them from the Property Grid](https://surveyjs.io/survey-creator/documentation/property-grid-customization#hide-properties-from-the-property-grid).


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.property`: `JsonObjectProperty`  
A property being added.
- `options.parentProperty`: `JsonObjectProperty`  
A property that nests `options.property` (`choices` for an item value, `columns` for a matrix column, `rows` for a matrix row etc.). `options.parentProperty` has a value only for nested properties.
- `options.show`: `boolean`  
A Boolean property that you can set to `false` if you do not want to add the property.
- `options.element`: `Base`  
A survey element that contains `options.property`: page, panel, question, the survey itself, item value (choice option), matrix column, etc.
- `options.parentElement`: `Base`  
A survey element that contains `options.parentProperty`. `options.parentElement` has a value only for nested properties.

[View Demo](https://surveyjs.io/survey-creator/examples/remove-properties-from-property-grid/ (linkStyle))

Available since: v2.0.0

### `onQuestionAdded`

An event that is raised when users add a question to the survey. Use this event to customize the question.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.question`: `Question`  
The question users added.
- `options.page`: `PageModel`  
A page to which the question was added.
- `options.reason`: `string`  
A value that indicates how the question was added: from the [Toolbox](https://surveyjs.io/survey-creator/documentation/toolbox-customization) (`"DROPPED_FROM_TOOLBOX"` when added via drag-and-drop or `"ADDED_FROM_TOOLBOX"` when added via click), using the Add Question button (`"ADDED_FROM_PAGEBUTTON"`), by duplicating an existing question (`"ELEMENT_COPIED"`), or by converting from another question type (`"ELEMENT_CONVERTED"`).

[Customize Survey Elements on Creation](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#customize-survey-elements-on-creation (linkStyle))

### `onQuestionConverting`

An event that is raised when a [question's type is being changed](https://surveyjs.io/survey-creator/documentation/end-user-guide/user-interface#how-to-change-the-question-type).

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.sourceQuestion`: `Question`  
A question of the previous type.
- `options.targetType`: `string`  
A target [type](https://surveyjs.io/form-library/documentation/api-reference/question#getType).
- `options.json`: `any`  
A JSON object produced by the previous question. You can modify this object to decide which properties should be copied to a new question. Set this parameter to `undefined` if you want to create the new question with a default JSON object.

### `onSurveyInstanceCreated`

An event that is raised when Survey Creator [instantiates a survey to display a UI element](https://surveyjs.io/survey-creator/documentation/property-grid-customization#add-custom-properties-to-the-property-grid). Handle this event to customize the UI element by modifying the survey.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.area`: `string`  
A Survey Creator UI element for which a survey is instantiated. Contains one of the following values:
  - `"designer-tab"` - A preview survey in the Designer tab. [View Demo](https://surveyjs.io/survey-creator/examples/customize-form-builder-ui/)
  - `"preview-tab"` - A preview survey in the Preview tab. [View Demo](https://surveyjs.io/survey-creator/examples/customize-form-builder-ui/)
  - `"property-grid"` - A survey that represents the Property Grid. [View Demo](https://surveyjs.io/survey-creator/examples/hide-category-from-property-grid/)
  - `"default-value-popup-editor"` - A survey that allows you to specify the default or correct value (for quizzes) in a pop-up window.
  - `"logic-rule:condition-editor"` - A survey that allows you to configure conditions in a logic rule.
  - `"logic-rule:action-editor"` - A survey that allows you to configure actions in a logic rule.
  - `"logic-tab:condition-list"` - A survey that displays the list of logic rules in the Logic tab.
  - `"theme-tab"` - A preview survey in the Themes tab.
  - `"theme-tab:property-grid"` - A survey that represents the Property Grid in the Themes tab.
  - `"translation-tab:language-list"` - A survey that displays the language list in the Translations tab.
  - `"translation-tab:table"` - A survey that displays the translation table in the Translations tab.
  - `"translation-tab:table-header"` - A survey that displays the header of the translation table in the Translations tab.
  - `"translation-tab:table-popup-editor"` - A survey that displays a translation table for an individual language in a pop-up window.
  - `"table-values-popup-editor"` - A survey that allows you to edit values of a table (Choices, Rows, Columns, etc.) in a pop-up window.
  - `"matrix-cell-values-popup-editor"` - A survey that allows you to [specify cell texts of a Single-Select Matrix](https://surveyjs.io/form-library/examples/scoring-rubric-example/) in a pop-up window.
  - `"matrix-cell-question-popup-editor"` - A survey that allows you to configure a question within a cell of a [Multi-Select](https://surveyjs.io/form-library/examples/multi-select-matrix-question/) or [Dynamic Matrix](https://surveyjs.io/form-library/examples/dynamic-matrix-add-new-rows/) in a pop-up window.
- `options.survey`: `SurveyModel`  
A survey that represents the Survey Creator UI element to be displayed. Use the [`SurveyModel`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model) API to modify the survey.
- `options.element`: `Base`  
A survey element being edited in the Property Grid. Present only if the `options.area` parameter equals `"property-grid"`.

[Design Mode Survey Instance](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#design-mode-survey-instance (linkStyle))

[Preview Mode Survey Instance](https://surveyjs.io/survey-creator/documentation/customize-survey-creation-process#preview-mode-survey-instance (linkStyle))

> If you want this event raised at startup, assign a survey JSON schema to the [`JSON`](#JSON) property *after* you add a handler to the event. If the JSON schema should be empty, specify the `JSON` property with an empty object.

**Related APIs:** [`onSurveyInstanceSetupHandlers`](#onSurveyInstanceSetupHandlers)

### `onSurveyInstanceSetupHandlers`

An event that lets you attach event handlers to a [survey instance used for displaying a Survey Creator UI element](https://surveyjs.io/survey-creator/documentation/property-grid-customization#add-custom-properties-to-the-property-grid).


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.area`: `string`  
A Survey Creator UI element for which a survey is instantiated. Contains one of the following values:
  - `"designer-tab"` - A preview survey in the Designer tab. [View Demo](https://surveyjs.io/survey-creator/examples/customize-form-builder-ui/)
  - `"preview-tab"` - A preview survey in the Preview tab. [View Demo](https://surveyjs.io/survey-creator/examples/customize-form-builder-ui/)
  - `"property-grid"` - A survey that represents the Property Grid. [View Demo](https://surveyjs.io/survey-creator/examples/hide-category-from-property-grid/)
  - `"default-value-popup-editor"` - A survey that allows you to specify the default or correct value (for quizzes) in a pop-up window.
  - `"logic-rule:condition-editor"` - A survey that allows you to configure conditions in a logic rule.
  - `"logic-rule:action-editor"` - A survey that allows you to configure actions in a logic rule.
  - `"logic-tab:condition-list"` - A survey that displays the list of logic rules in the Logic tab.
  - `"theme-tab"` - A preview survey in the Themes tab.
  - `"theme-tab:property-grid"` - A survey that represents the Property Grid in the Themes tab.
  - `"translation-tab:language-list"` - A survey that displays the language list in the Translations tab.
  - `"translation-tab:table"` - A survey that displays the translation table in the Translations tab.
  - `"translation-tab:table-header"` - A survey that displays the header of the translation table in the Translations tab.
  - `"translation-tab:table-popup-editor"` - A survey that displays a translation table for an individual language in a pop-up window.
  - `"table-values-popup-editor"` - A survey that allows you to edit values of a table (Choices, Rows, Columns, etc.) in a pop-up window.
  - `"matrix-cell-values-popup-editor"` - A survey that allows you to [specify cell texts of a Single-Select Matrix](https://surveyjs.io/form-library/examples/scoring-rubric-example/) in a pop-up window.
  - `"matrix-cell-question-popup-editor"` - A survey that allows you to configure a question within a cell of a [Multi-Select](https://surveyjs.io/form-library/examples/multi-select-matrix-question/) or [Dynamic Matrix](https://surveyjs.io/form-library/examples/dynamic-matrix-add-new-rows/) in a pop-up window.
- `options.survey`: `SurveyModel`  
A survey that represents the Survey Creator UI element to be displayed. Use the [`SurveyModel`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model) API to modify the survey.
- `options.element`: `Base`  
A survey element being edited in the Property Grid. Present only if the `options.area` parameter equals `"property-grid"`.

> This event is raised *before* the survey instance is initialized with a survey JSON schema. Therefore, you cannot access individual questions, panels, and pages within the event handler. If you need to customize those survey elements, handle the [`onSurveyInstanceCreated`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onSurveyInstanceCreated) event instead.

Available since: v2.0.4

### `onTranslationExportItem`

An event that is raised before a translated string is exported to a CSV file. Use this event to modify the string to be exported.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element (survey, page, panel, question) whose string translations are being exported to CSV.
- `options.locale`: `string`  
The current locale code (`"en"`, `"de"`, etc.). Contains an empty string if the default locale is used.
- `options.name`: `string`  
A full name of the translated string. It is composed of names of all parent elements, for example: `"mySurvey.page1.question2.title"`.
- `options.locString`: `LocalizableString`  
A `LocalizableString` instance. Call the `options.locString.getLocaleText(locale)` method if you need to get a text string for a specific locale.
- `options.text`: `string`  
A text string to be exported. The string is taken from the current locale. You can modify this property to export a different string.

**Related APIs:** [`onTranslationImportItem`](#onTranslationImportItem)

### `onTranslationImported`

An event that is raised after all translated strings are imported from a CSV file.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.

**Related APIs:** [`onTranslationImportItem`](#onTranslationImportItem), [`onTranslationExportItem`](#onTranslationExportItem)

### `onTranslationImportItem`

An event that is raised before a translated string is imported from a CSV file. Use this event to modify the string to be imported or cancel the import.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.locale`: `string`  
The current locale code (`"en"`, `"de"`, etc.). Contains an empty string if the default locale is used.
- `options.name`: `string`  
A full name of the translated string. It is composed of names of all parent elements, for example: `"mySurvey.page1.question2.title"`.
- `options.text`: `string`  
A text string to be imported. You can modify this property to import a different string or set this property to `undefined` to cancel the import.

**Related APIs:** [`onTranslationExportItem`](#onTranslationExportItem), [`onTranslationImported`](#onTranslationImported)

### `onTranslationItemChanging`

An event that is raised before a string translation is changed. Use this event to override a new translation value.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element instance (survey, page, panel, question) whose string translation is being changed.
- `options.locale`: `string`  
The current locale code (`"en"`, `"de"`, etc.). Contains an empty string if the default locale is used.
- `options.locString`: `LocalizableString`  
An object that you can use to manipulate a localization string. Call the `options.locString.getLocaleText(locale)` method if you need to get a text string for a specific locale.
- `options.newText`: `string`  
A new value for the string translation.

Refer to the following help topics for more information on localization:

- [Localization & Globalization in SurveyJS Form Library](https://surveyjs.io/form-library/documentation/survey-localization)
- [Localization & Globalization in Survey Creator](https://surveyjs.io/survey-creator/documentation/localization)

### `onTranslationStringVisibility`

An event that is raised when the Translation tab displays a property for translation. Use this event to control the property visibility.

Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base`  
A survey element (survey, page, panel, question) whose string translations are edited in the Translation tab.
- `options.propertyName`: `string`  
The name of a property being translated.
- `options.visible`: `boolean`  
A Boolean value that specifies the property visibility. Set it to `false` to hide the property.

### `onUploadFile`

An event that is raised when a user selects a file to upload. Use this event to upload the file to your server.


Parameters:

 - `sender`: `SurveyCreatorModel`  
A Survey Creator instance that raised the event.
- `options.element`: `Base | ITheme`  
A survey element (question, panel, page, or survey) or a theme JSON schema for which this event is raised.
- `options.elementType`: `String`  
The type of the element passed as the `options.element` parameter.\
Possible values: `"theme"`, `"header"`, or any value returned from the [`getType()`](https://surveyjs.io/form-library/documentation/api-reference/question#getType) method.
- `options.propertyName`: `String`  
The name of the survey element property or theme property for which files are being uploaded.
- `options.files`: `File[]`  
Files to upload.
- `options.callback`: `(status: string, fileUrl?: string) => void`  
A callback function that you should call when a file is uploaded successfully or when file upload fails. Pass `"success"` or `"error"` as the `status` argument. If the file upload is successful, pass the file's URL as the `fileUrl` argument.

[View Demo](https://surveyjs.io/survey-creator/examples/file-upload/ (linkStyle))

**Related APIs:** [`uploadFiles`](#uploadFiles)
