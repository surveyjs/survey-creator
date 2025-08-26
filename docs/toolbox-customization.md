---
title: Customize Survey Creator Toolbox | Open-Source JavaScript Form Libraries 
description: Learn to switch between full and compact modes, limit available question and panel types, group items by categories, customize predefined Toolbox items, and even add custom elements.
---

# Toolbox Customization

The Toolbox contains available question and panel types. Users can click questions and panels or drag and drop them onto the design surface to add them to the survey. This help topic describes how you can customize the Toolbox.

<img src="./images/survey-creator-toolbox-full.png" alt="Survey Creator - Toolbox in full mode" width="1544" height="772">

- [Full and Compact Modes](#full-and-compact-modes)
- [Limit Available Question and Panel Types](#limit-available-question-and-panel-types)
- [Group Toolbox Items by Categories](#group-toolbox-items-by-categories)
- [Customize Predefined Toolbox Items](#customize-predefined-toolbox-items)
- [Manage Toolbox Subitems](#manage-toolbox-subitems)
- [Add a Custom Toolbox Item](#add-a-custom-toolbox-item)

## Full and Compact Modes

The Toolbox supports full mode (illustrated above) and compact mode. In compact mode, element names are hidden. To see an individual element name, a user should move the mouse pointer over the element icon.

<img src="./images/survey-creator-toolbox-compact.png" alt="Survey Creator - Toolbox in compact mode" width="1544" height="776">

The Toolbox switches between the modes automatically based on available width. Specify the [`forceCompact`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#forceCompact) property if you want the Toolbox to always use a specific mode:

```js
// Compact mode
creator.toolbox.forceCompact = true;
// Full mode
creator.toolbox.forceCompact = false;
```

You can also use the [`isCompact`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#isCompact) property to find out whether the Toolbox is currently in compact mode:

```js
console.log(creator.toolbox.isCompact);
```

[View Demo](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcustomization (linkStyle))

## Limit Available Question and Panel Types

All available question and panel types are listed in the [`getType()`](https://surveyjs.io/Documentation/Library?id=Question#getType) method description. If you need to show only a part of these types, specify them in the Survey Creator's [`questionTypes`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#questionTypes) array:

```js
const creatorOptions = {
    questionTypes: ["text", "checkbox", "radiogroup", "dropdown"]
};

const creator = new SurveyCreator.SurveyCreator(creatorOptions);

// In React:
import { SurveyCreator } from "survey-creator-react";
const creator = new SurveyCreator(creatorOptions);
// In other modular applications:
import { SurveyCreatorModel } from "survey-creator-core";
const creator = new SurveyCreatorModel(creatorOptions);
```

[View Demo](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcustomization (linkStyle))

## Group Toolbox Items by Categories

> The compact Toolbox does not display categories.

To organize toolbox items into categories, use the [`defineCategories(categories, displayMisc)`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#defineCategories) method. This method accepts an array of objects as the `categories` parameter. Each object defines a single category and lists items included into it. Unlisted items can be collected in the Misc category if you pass `true` as the `displayMisc` parameter. Optionally, you can override display titles for individual items.

```js
creator.toolbox.defineCategories([
  {
    category: "Choice-Based Questions",
    items: [
      "dropdown",
      "checkbox",
      "radiogroup",
      "tagbox",
      "imagepicker"
    ]
  },
  {
    category: "Text Input Questions",
    items: [
      "text",
      // Override the display title
      { name: "comment", title: "Multi-Line Input" },
      "multipletext"
    ]
  },
  {
    category: "Read-Only Elements",
    items: [
      "image",
      "html",
      // Override the display title
      { name: "expression", title: "Expression" }
    ]
  },
  {
    category: "Matrices",
    items: [
      "matrix",
      "matrixdropdown",
      "matrixdynamic"
    ]
  },
  {
    category: "Panels",
    items: [
      "panel",
      "paneldynamic"
    ]
  }
], true)
```

You can also use [localization capabilities](https://surveyjs.io/survey-creator/documentation/survey-localization-translate-surveys-to-different-languages#override-individual-translations) to change the caption of the Misc category. For example, the code below rename the Misc category to "Other Questions". Note that the code that changes the caption should go before the code that instantiates Survey Creator.

```js
import "survey-creator-core/survey-creator-core.i18n";
import { getLocaleStrings } from "survey-creator-core";

// Rename the Misc category
const translations = getLocaleStrings("en");
translations.toolboxCategories["misc"] = "Other Questions";

// ...
// Instantiate Survey Creator here
//
```

[View Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-categories/ (linkStyle))

To change the category of one or several toolbox items without redefining the entire toolbox structure, use the [`changeCategory(itemName, categoryName)`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#changeCategory) or [`changeCategories(items)`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#changeCategories) method. The following code places the Dynamic Panel and Dynamic Matrix toolbox items into a new "Dynamic Elements" category:

```js
creator.toolbox.changeCategories([
  { name: "paneldynamic", category: "Dynamic Elements" },
  { name: "matrixdynamic", category: "Dynamic Elements" }
]);
```

### Display Category Titles

Toolbox categories do not show their titles by default. Instead, the categories are separated one from another by a delimiter. If you want to display category titles, enable Toolbox's [`showCategoryTitles`](https://surveyjs.io/survey-creator/documentation/api-reference/questiontoolbox#showCategoryTitles) property.

```js
creator.toolbox.showCategoryTitles = true;
```

[View Demo](https://surveyjs.io/survey-creator/examples/survey-toolbox-categories/ (linkStyle))

### Reorder Categories

Created categories are stored in the [`categories`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#categories) array of the Toolbox. You can access and modify this array if you want to reorder categories. For example, the following codes swaps the "Text Input Questions" and "Choice Questions" categories:

```js
import { SurveyCreatorModel } from "survey-creator-core";

function swapItems(arr, index1, index2) {
  const item1 = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = item1;
}

const creator = new SurveyCreatorModel();

const categories = creator.toolbox.categories;
const choiceCatIndex = categories.findIndex(c => c.name === "choice");
const textCatIndex = categories.findIndex(c => c.name === "text");
swapItems(categories, choiceCatIndex, textCatIndex);
```

### Control Category Behavior

The Toolbox also has the following properties to control the behavior of categories:

- [`allowExpandMultipleCategories`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#allowExpandMultipleCategories): `boolean`     
Allows more than one category to be in an expanded state. If this property is `false`, when a user expands a category, other categories collapse. Default value: `false`.

- [`keepAllCategoriesExpanded`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#keepAllCategoriesExpanded): `boolean`       
Expands all categories. Users cannot collapse them. This property applies only if the Toolbox [displays category titles](#display-category-titles). Default value: `false`.

```js
creator.toolbox.allowExpandMultipleCategories = true;
creator.toolbox.keepAllCategoriesExpanded = false;
```

## Customize Predefined Toolbox Items

To customize a predefined Toolbox item, pass its [type](https://surveyjs.io/Documentation/Library?id=Question#getType) as an argument to the [`getItemByName(itemName)`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#getItemByName) method. This method returns the item's configuration object. Change the [properties of this object](https://surveyjs.io/Documentation/Survey-Creator?id=iquestiontoolboxitem) to customize the Toolbox item. For example, the following code uses the [`json`](https://surveyjs.io/Documentation/Survey-Creator?id=iquestiontoolboxitem#json) property to override predefined [choices](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel#choices) for a [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel) question:

```js
creator.toolbox
  .getItemByName("dropdown")
  .json
  .choices = [
    { text: "Option 1", value: 1 },
    { text: "Option 2", value: 2 },
    { text: "Option 3", value: 3 }
  ];
```

[View Demo](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcustomization (linkStyle))

## Manage Toolbox Subitems

Toolbox items can have nested items, or "subitems". They appear when users hover over a toolbox item. Subitems help you create more specific configurations of a broader survey element type and group them. For example, the Single-Line Input toolbox item includes a number of subitems that create [Single-Line Input](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model) questions with different [`inputType`](https://surveyjs.io/form-library/documentation/api-reference/text-entry-question-model#inputType) property values.

<img src="./images/toolbox-subitems.png" alt="Survey Creator: Toolbox subitems" width="1544" height="808">

### Create Subitems

To create a custom subitem, pass its [configuration object](/survey-creator/documentation/api-reference/iquestiontoolboxitem) to the [`addSubitem(subitem, index)`](/survey-creator/documentation/api-reference/questiontoolboxitem#addSubitem) method. Call this method on a toolbox item instance to which you want to add the subitem. For instance, the following code adds a "Limited to 280 characters" subitem to the Long Text toolbox item:

```js
import { SurveyCreatorModel } from "survey-creator-core";
const creatorOptions = { ... };
const creator = new SurveyCreatorModel(creatorOptions);

const longTextItem = creator.toolbox.getItemByName("comment");
longTextItem.addSubitem({
    name: "limitedLongText",
    title: "Limited to 280 characters",
    json: {
        type: "comment",
        maxLength: 280
    }
});
```

[View Demo](/survey-creator/examples/manage-toolbox-subitems/ (linkStyle))

### Customize Subitems

To customize a subitem, access it by calling the [`getSubitem(name)`](/survey-creator/documentation/api-reference/questiontoolboxitem#getSubitem) method on a parent toolbox item instance. After that, you can change the subitem properties listed in the [`QuestionToolboxItem`](/survey-creator/documentation/api-reference/questiontoolboxitem) API Reference section. For example, the following code shows how to add an input mask to the Phone Number subitem that belongs to the Single-Line Input toolbox item:

```js
const singleTextInputItem = creator.toolbox.getItemByName("text");
const telSubitem = singleTextInputItem.getSubitem("tel");
telSubitem.json["maskType"] = "pattern";
telSubitem.json["maskSettings"] = { "pattern": "+1(999)999-99-99" };
```

### Remove Subitems

To remove a specific subitem, call the [`removeSubitem(subitem)`](/survey-creator/documentation/api-reference/questiontoolboxitem#removeSubitem) method on a toolbox item instance. You can also remove all subitems of a toolbox item by calling the [`clearSubitems()`](/survey-creator/documentation/api-reference/questiontoolboxitem#clearSubitems) method:

```js
// Remove the Labels subitem of the Rating Scale toolbox item
const ratingScaleItem = creator.toolbox.getItemByName("rating");
ratingScaleItem.removeSubitem("labels");

// Remove all subitems of the Single-Line Input toolbox item
const singleLineInputItem = creator.toolbox.getItemByName("text");
singleLineInputItem.clearSubitems();
```

> Toolbox subitems act like shortcuts for creating certain question configurations. Removing a subitem doesn't remove the associated properties from the Property Grid. If you need to prevent users from editing them, [hide those properties explicitly](/survey-creator/documentation/property-grid-customization#hide-properties-from-the-property-grid).

You can completely deactivate the subitems feature by disabling the Toolbox's [`showSubitems`](/survey-creator/documentation/api-reference/questiontoolbox#showSubitems) property:

```js
creator.toolbox.showSubitems = false;
```

## Add a Custom Toolbox Item

Since the Toolbox is meant to contain question and panel types, to add a new element, you need to create a custom question or panel type. Refer to the following help topics for detailed instructions:

- [Create Specialized Question Types](https://surveyjs.io/form-library/documentation/customize-question-types/create-specialized-question-types)
- [Create Composite Question Types](https://surveyjs.io/form-library/documentation/customize-question-types/create-composite-question-types)
- [Integrate Third-Party Angular Components](https://surveyjs.io/form-library/documentation/customize-question-types/third-party-component-integration-angular)
- [Integrate Third-Party React Components](https://surveyjs.io/form-library/documentation/customize-question-types/third-party-component-integration-react)
- [Integrate Third-Party Vue 3 Components](/form-library/documentation/customize-question-types/third-party-component-integration-vue)
