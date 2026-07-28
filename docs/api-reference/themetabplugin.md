---
title: ThemeTabPlugin
product: Survey Creator
api-type: class
description: An object that enables you to modify, add, and remove UI themes and handle theme-related events.
source: https://surveyjs.io/survey-creator/documentation/api-reference/themetabplugin
---

# `ThemeTabPlugin`

An object that enables you to modify, add, and remove UI themes and handle theme-related events. To access this object, use the [`themeEditor`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#themeEditor) property on a Survey Creator instance:

```js
const creatorOptions = { ... };
const creator = new SurveyCreator.SurveyCreator(creatorOptions);
creator.themeEditor.settingName = "value";

// In modular applications:
import { SurveyCreatorModel } from "survey-creator-core";

const creatorOptions = { ... };
const creator = new SurveyCreatorModel(creatorOptions);
creator.themeEditor.settingName = "value";
```

[Theme Editor Documentation](https://surveyjs.io/survey-creator/documentation/theme-editor (linkStyle))

## Properties

### `advancedModeEnabled`

**Type**: `boolean`

A Boolean value that indicates or specifies whether the Appearance category displays advanced settings.

Default value: `false`

[View Demo](https://surveyjs.io/survey-creator/examples/change-form-theme/ (linkStyle))

Available since: v2.0.0

### `availableThemes`

**Type**: `string[]`

A list of UI themes from which users can select. You can sort this list if you want to reorder themes in Theme Editor.

**Related APIs:** [`addTheme`](#addTheme), [`removeTheme`](#removeTheme)

### `isModified`

**Type**: `boolean`

Indicates whether the selected theme has been modified.

**Related APIs:** [``creator.saveTheme()``](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveTheme), [``creator.saveThemeFunc``](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#saveThemeFunc)

### `saveThemeFunc`

**Type**: `any`

A function that is called each time users click the [Save button](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#showSaveButton) or [auto-save](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#autoSaveEnabled) is triggered to save a theme JSON object.

For more information, refer to the [Save and Load Custom Themes](https://surveyjs.io/survey-creator/documentation/theme-editor#save-and-load-custom-themes) help topic.

## Methods

### `addTheme()`

**Return value:** `string` &ndash; An identifier of the added theme, which is a concatenation of the [`themeName`](https://surveyjs.io/form-library/documentation/api-reference/itheme#themeName), [`colorPalette`](https://surveyjs.io/form-library/documentation/api-reference/itheme#colorPalette), and [`isPanelless`](https://surveyjs.io/form-library/documentation/api-reference/itheme#isPanelless) settings (for example, `"default-dark-panelless"`).

Adds a new UI theme to Theme Editor.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `theme` | `ITheme` | A [UI theme](https://surveyjs.io/form-library/documentation/api-reference/itheme) to add. |
| `setAsDefault` | `boolean` | For internal use. |

**Related APIs:** [`removeTheme`](#removeTheme), [`getCurrentTheme`](#getCurrentTheme)

### `getCurrentTheme()`

**Return value:** `ITheme` &ndash; A currently applied [theme JSON schema](https://surveyjs.io/form-library/documentation/api-reference/itheme).

Returns a JSON object that describes the currently applied UI theme.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `changesOnly` | `boolean` | Pass `true` to get a JSON object that contains only changed theme settings instead of a full theme JSON schema. |

**Related APIs:** [`availableThemes`](#availableThemes), [`addTheme`](#addTheme), [`removeTheme`](#removeTheme)

### `removeTheme()`

Removes a UI theme from Theme Editor.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `themeAccessor` | `string \| ITheme` | A [UI theme](https://surveyjs.io/form-library/documentation/api-reference/itheme) to delete or a theme identifier, which is a concatenation of the [`themeName`](https://surveyjs.io/form-library/documentation/api-reference/itheme#themeName), [`colorPalette`](https://surveyjs.io/form-library/documentation/api-reference/itheme#colorPalette), and [`isPanelless`](https://surveyjs.io/form-library/documentation/api-reference/itheme#isPanelless) settings (for example, `"default-dark-panelless"`). |
| `includeModifications` | `boolean` | Pass `true` to delete not only the specified UI theme, but also all other themes with the same `themeName` value (dark/light and panelless modifications). |

**Related APIs:** [`addTheme`](#addTheme), [`getCurrentTheme`](#getCurrentTheme)

## Events

### `onAllowModifyTheme`

An event that you can use to switch the current theme to read-only mode.

Parameters:

- `sender`: `ThemeTabPlugin`\
A `ThemeTabPlugin` instance that raised the event.
- `options.theme`: [`ITheme`](https://surveyjs.io/form-library/documentation/api-reference/itheme)\
The current theme.
- `options.allow`: `boolean`\
A Boolean property that you can set to `false` if you want to disallow theme modifications.

### `onThemePropertyChanged`

An event that is raised when the value of a property or CSS variable in a theme JSON schema has changed.

Parameters:

- `sender`: `ThemeTabPlugin`\
A `ThemeTabPlugin` instance that raised the event.
- `options.name`: `string`\
The name of the changed property or CSS variable.
- `options.value`: `any`\
A new value of the property or CSS variable.

### `onThemeSelected`

An event that is raised when users select a UI theme from a drop-down list, choose a dark or light color palette, and switch between regular and panelless theme modifications.

Parameters:

- `sender`: `ThemeTabPlugin`\
A `ThemeTabPlugin` instance that raised the event.
- `options.theme`: [`ITheme`](https://surveyjs.io/form-library/documentation/api-reference/itheme)\
A selected theme.

[View Demo](https://surveyjs.io/survey-creator/examples/save-custom-theme/ (linkStyle))

**Related APIs:** [`availableThemes`](#availableThemes), [`addTheme`](#addTheme), [`removeTheme`](#removeTheme)
