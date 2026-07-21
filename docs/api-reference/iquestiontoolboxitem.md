---
title: IQuestionToolboxItem
product: Survey Creator
api-type: interface
description: A toolbox item configuration.
source: https://surveyjs.io/survey-creator/documentation/api-reference/iquestiontoolboxitem
---

# `IQuestionToolboxItem`

A toolbox item configuration.

`IQuestionToolboxItem` objects are used in such Toolbox API methods as [`addItem(item, index)`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#addItem), [`replaceItem(item)`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#replaceItem), [`addSubitem(subitem, index)`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolboxitem#addSubitem), and others.

[Toolbox Customization](https://surveyjs.io/survey-creator/documentation/toolbox-customization (linkStyle))

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
