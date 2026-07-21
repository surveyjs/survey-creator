---
title: QuestionToolboxItem
product: Survey Creator
api-type: class
description: A toolbox item instance.
source: https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolboxitem
---

# `QuestionToolboxItem`

A toolbox item instance.

An object of this class is returned by the `QuestionToolbox`'s [`getItemByName(name)`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#getItemByName) method.

## Properties

### `category`

**Type**: `string`

A category to which this toolbox item belongs.

Out-of-the-box categories include `"general"`, `"choice"`, `"text"`, `"containers"`, `"matrix"`, and `"misc"`.

Default value: `"general"`

### `enabled`

**Type**: `boolean`

Specifies whether users can interact with the toolbox item.

Default value: `true`

### `iconName`

**Type**: `string`

An icon name.

[UI Icons](https://surveyjs.io/form-library/documentation/icons (linkStyle))

### `json`

**Type**: `any`

A JSON object used to create a new question or panel when users click this toolbox item. It must contain the `type` property.

[View Toolbox Customization Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-customization/ (linkStyle))

### `name`

**Type**: `string`

A toolbox item identifier.

> Toolbox item names must be unique.

### `title`

**Type**: `string`

A user-friendly toolbox item title.

### `tooltip`

**Type**: `string`

A toolbox item tooltip.

If `tooltip` is undefined, the [`title`](#title) property value is used instead.

## Methods

### `addSubitem()`

Adds a subitem to this toolbox item.

[Manage Toolbox Subitems](https://surveyjs.io/survey-creator/documentation/toolbox-customization#manage-toolbox-subitems (linkStyle))

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `subitem` | `IQuestionToolboxItem` | An [`IQuestionToolboxItem`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem) object that represents a subitem configuration. |
| `index` | `number` | *(Optional)* A zero-based index at which to insert the subitem. If you do not specify this parameter, the subitem is added to the end. |

**Related APIs:** [`removeSubitem`](#removeSubitem), [`clearSubitems`](#clearSubitems)

### `clearSubitems()`

Removes all subitems from this toolbox item.

[Manage Toolbox Subitems](https://surveyjs.io/survey-creator/documentation/toolbox-customization#manage-toolbox-subitems (linkStyle))

**Related APIs:** [`removeSubitem`](#removeSubitem), [`addSubitem`](#addSubitem)

### `getSubitem()`

**Return value:** `QuestionToolboxItem` &ndash; A [`QuestionToolboxItem`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolboxitem) object that represents the subitem instance.

Finds a subitem with a specified name in the collection of subitems belonging to this toolbox item.

[Manage Toolbox Subitems](https://surveyjs.io/survey-creator/documentation/toolbox-customization#manage-toolbox-subitems (linkStyle))

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | `string` | A subitem [`name`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem#name). |

### `removeSubitem()`

Removes a specific subitem from this toolbox item.

[Manage Toolbox Subitems](https://surveyjs.io/survey-creator/documentation/toolbox-customization#manage-toolbox-subitems (linkStyle))

**Parameters:**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `subitem` | `string \| IQuestionToolboxItem` | A subitem [`name`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem#name) or an [`IQuestionToolboxItem`](https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem) object that represents a subitem configuration. |

**Related APIs:** [`clearSubitems`](#clearSubitems), [`addSubitem`](#addSubitem)
