---
title: QuestionToolbox
product: Survey Creator
api-type: class
description: An object that enables you to modify Survey Creator's Toolbox.
source: https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox
---

# `QuestionToolbox`

An object that enables you to modify Survey Creator's Toolbox. To access this object, use the [`toolbox`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#toolbox) property on a Survey Creator instance:

```js
const creatorOptions = { ... };
const creator = new SurveyCreator.SurveyCreator(creatorOptions);
creator.toolbox.settingName = "value";

// In modular applications:
import { SurveyCreatorModel } from "survey-creator-core";

const creatorOptions = { ... };
const creator = new SurveyCreatorModel(creatorOptions);
creator.toolbox.settingName = "value";
```

[Toolbox Customization](https://surveyjs.io/survey-creator/documentation/toolbox-customization (linkStyle))

## Properties

### `activeCategory`

**Type**: `string`

Gets or sets the currently expanded category. Applies only if [`allowExpandMultipleCategories`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#allowExpandMultipleCategories) and [`keepAllCategoriesExpanded`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#keepAllCategoriesExpanded) are `false` and [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) is `true`.

Default value: `""`

**Related APIs:** [`expandCategory`](#expandCategory), [`collapseCategory`](#collapseCategory)

### `allowExpandMultipleCategories`

**Type**: `boolean`

Specifies whether more than one category can be in the expanded state at a time. Applies only if [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) is `true`.

If this property is `false`, the currently expanded category collapses when a user expands another category.

Default value: `false`

[View Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-categories/ (linkStyle))

**Related APIs:** [`keepAllCategoriesExpanded`](#keepAllCategoriesExpanded)

### `categories`

**Type**: `QuestionToolboxCategory[]`

Contains toolbox categories and allows you to modify them.

[View Demo](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcategories (linkStyle))

**Related APIs:** [`defineCategories`](#defineCategories), [`showCategoryTitles`](#showCategoryTitles)

### `forceCompact`

**Type**: `boolean`

Specifies whether the Toolbox should be in compact or full mode.

Possible values:

- `true` - Toolbox is always in compact mode.
- `false` - Toolbox is always in full mode.
- `undefined` (default) - Toolbox switches between the full and compact modes automatically based on available width.

[View Toolbox Customization Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-customization/ (linkStyle))

**Related APIs:** [`isCompact`](#isCompact)

### `isCompact`

**Type**: `boolean`

Indicates whether the Toolbox is currently in [compact mode](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#forceCompact).

### `items`

**Type**: `QuestionToolboxItem[]`

An array of toolbox items.

**Related APIs:** [`getItemByName`](#getItemByName), [`addItem`](#addItem), [`removeItem`](#removeItem)

### `keepAllCategoriesExpanded`

**Type**: `boolean`

Specifies whether to expand all categories without the capability to collapse any of them. Applies only if [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) is `true`.

[View Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-categories/ (linkStyle))

**Related APIs:** [`allowExpandMultipleCategories`](#allowExpandMultipleCategories)

### `overflowBehavior`

**Type**: `"hideInMenu" | "scroll"`

Specifies how the Toolbox behaves when it contains more items than can fit on the screen.

Possible values:

- `"scroll"` (default) - Enables scrolling to help users reach the items that do not fit on the screen.
- `"hideInMenu"` - Hides the overflow items in a three-dot menu.

### `searchEnabled`

**Type**: `boolean`

Specifies whether to display a search field that allows users to find question and panel types within the Toolbox.

Default value: `true`

### `showCategoryTitles`

**Type**: `boolean`

Specifies whether to display category titles in the Toolbox.

Default value: `false`

[View Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-categories/ (linkStyle))

> If this property is disabled, the Toolbox hides the titles but continues to display horizontal lines that divide categories. To remove these lines as well, call the [`removeCategories()`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#removeCategories) method.

**Related APIs:** [`allowExpandMultipleCategories`](#allowExpandMultipleCategories), [`keepAllCategoriesExpanded`](#keepAllCategoriesExpanded)

### `showSubitems`

**Type**: `boolean`

Specifies whether toolbox items support subitems.

Default value: `true`

[Manage Toolbox Subitems](https://surveyjs.io/survey-creator/documentation/toolbox-customization#manage-toolbox-subitems (linkStyle))

## Methods

### `addItem()`

Adds a new item to the Toolbox.

[View Demo](https://surveyjs.io/survey-creator/examples/page-break-and-page-merge/ (linkStyle))

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `item` | `IQuestionToolboxItem` | A [toolbox item configuration](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem). |
| `index` | `number` | *(Optional)* A zero-based index at which to insert the item. If you do not specify this parameter, the item is added to the end. |

**Related APIs:** [`removeItem`](#removeItem), [`replaceItem`](#replaceItem), [`items`](#items)

### `changeCategories()`

Changes the categories of multiple toolbox items.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `items` | `any[]` | An array of objects with the following structure: `{ name: "toolboxItemName", category: "newCategoryName" }`. |

**Related APIs:** [`defineCategories`](#defineCategories)

### `changeCategory()`

Changes the category of a toolbox item.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `itemName` | `string` | A toolbox item's [`name`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem#name). |
| `categoryName` | `string` | A new category name. Out-of-the-box category names include `"general"`, `"choice"`, `"text"`, `"containers"`, `"matrix"`, and `"misc"`. |

**Related APIs:** [`defineCategories`](#defineCategories)

### `clearItems()`

Removes all items from the Toolbox.

**Related APIs:** [`removeItem`](#removeItem), [`addItem`](#addItem), [`items`](#items)

### `collapseAllCategories()`

Collapses all categories. Applies only if [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) and [`allowExpandMultipleCategories`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#allowExpandMultipleCategories) are `true`.

**Related APIs:** [`expandAllCategories`](#expandAllCategories)

### `collapseCategory()`

Collapses a category with a specified name. Applies only if [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) and [`allowExpandMultipleCategories`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#allowExpandMultipleCategories) are `true`.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `categoryName` | `string` | A category name. Out-of-the-box category names include `"general"`, `"choice"`, `"text"`, `"containers"`, `"matrix"`, and `"misc"`. |

**Related APIs:** [`expandCategory`](#expandCategory)

### `createDefaultItems()`

Adds default items to the Toolbox. If the Toolbox contains any items before you call this method, they will be removed.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `supportedQuestions` | `string[]` | Specifies which question and panel types to include in the Toolbox. |
| `useDefaultCategories` | `boolean` | Pass `true` if you want to create default categories. |

### `defineCategories()`

Defines toolbox categories from scratch.

This method accepts an array of objects as the `categories` parameter. Each object defines a single category and lists items included into it. Unlisted items can be collected in the Misc category if you pass `true` as the `displayMisc` parameter. Optionally, you can override display titles for individual items.

The following code defines two toolbox categories: Dropdowns and Text Input. Items that do not fall into either category are collected in Misc. The `"comment"` item has a custom display title.

```
creator.toolbox.defineCategories([{
  category: "Dropdowns",
  items: [
    "dropdown",
    "tagbox"
  ]
}, {
  category: "Text Input",
  items: [
    "text",
    // Override the display title
    { name: "comment", title: "Multi-Line Input" }
  ]
}], true);
```

[View Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-categories/ (linkStyle))

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `categories` | `IToolboxCategoryDefinition[]` | An array of new categories. |
| `displayMisc` | `boolean` | Pass `true` if you want to collect unlisted toolbox items in the Misc category. Default value: `false`. |

### `expandAllCategories()`

Expands all categories. Applies only if [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) and [`allowExpandMultipleCategories`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#allowExpandMultipleCategories) are `true`.

**Related APIs:** [`collapseAllCategories`](#collapseAllCategories)

### `expandCategory()`

Expands a category with a specified name. Applies only if [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) is `true`.

If [`allowExpandMultipleCategories`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#allowExpandMultipleCategories) is `false`, all other categories become collapsed.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `categoryName` | `string` | A category name. Out-of-the-box category names include `"general"`, `"choice"`, `"text"`, `"containers"`, `"matrix"`, and `"misc"`. |

**Related APIs:** [`collapseCategory`](#collapseCategory)

### `getItemByName()`

**Return value:** `QuestionToolboxItem` &ndash; A toolbox item or `null` if a toolbox item with the specified name isn't found.

Returns a [toolbox item](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolboxitem) with a specified name.

[View Toolbox Customization Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-customization/ (linkStyle))

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | `string` | A toolbox item's [`name`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem#name). |

### `removeCategories()`

Removes all categories from the Toolbox.

[View Toolbox Customization Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-customization/ (linkStyle))

### `removeItem()`

**Return value:** `boolean` &ndash; `true` if the item is successfully deleted or `false` otherwise.

Removes a [toolbox item](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem) with a specified name.

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | `string` | A toolbox item's [`name`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem#name). |

**Related APIs:** [`clearItems`](#clearItems), [`addItem`](#addItem), [`items`](#items)

### `replaceItem()`

**Return value:** `boolean`

Adds a new toolbox item and deletes an existing item with the same name (if there is any).

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `item` | `IQuestionToolboxItem` | A [toolbox item configuration](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem). |

**Related APIs:** [`addItem`](#addItem)
