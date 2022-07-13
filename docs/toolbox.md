# Toolbox Customization

The Toolbox contains available question and panel types. Users can click questions and panels or drag and drop them onto the design surface to add them to the survey. This help topic describes how you can customize the Toolbox.

<img src="./images/survey-creator-toolbox-full.png" alt="Survey Creator - Toolbox in full mode" width="50%">

- [Full and Compact Modes](#full-and-compact-modes)
- [Limit Available Question and Panel Types](#limit-available-question-and-panel-types)
- [Group Toolbox Items by Categories](#group-toolbox-items-by-categories)
- [Customize Predefined Toolbox Items](#customize-predefined-toolbox-items)
- [Add a Custom Toolbox Item](#add-a-custom-toolbox-item)

## Full and Compact Modes

The Toolbox supports full mode (illustrated above) and compact mode. In compact mode, element names are hidden. To see an individual element name, a user should move the mouse pointer over the element icon.

<img src="./images/survey-creator-toolbox-compact.png" alt="Survey Creator - Toolbox in compact mode" width="50%">

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

## Limit Available Question and Panel Types

All available question and panel types are listed in the [`getType()`](https://surveyjs.io/Documentation/Library?id=Question#getType) method description. If you need to show only a part of these types, specify them in the Survey Creator's [`questionTypes`](https://surveyjs.io/Documentation/Survey-Creator?id=ICreatorOptions#questionTypes) array:

```js
const creatorOptions = {
    questionTypes: ["text", "checkbox", "radiogroup", "dropdown"]
};

const creator = new SurveyCreator.SurveyCreator(creatorOptions);

// In modular applications
import { SurveyCreator } from "survey-creator-knockout";
// or
import { SurveyCreator } from "survey-creator-react";
const creator = new SurveyCreator(creatorOptions);
```

[View Toolbox Customization example](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcustomization)

## Group Toolbox Items by Categories

> NOTE: The compact Toolbox does not display categories.

To group Toolbox items, call the [`changeCategories()`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#changeCategories) method. It accepts an array of objects with the following fields:

- `name`        
The name of the item that should be grouped. Refer to the [`getType()`](https://surveyjs.io/Documentation/Library?id=Question#getType) method description for a list of accepted values.

- `category`      
A category for this item.

The following code places the [Panel](https://surveyjs.io/Documentation/Library?id=panelmodel) and [Panel Dynamic](https://surveyjs.io/Documentation/Library?id=questionpaneldynamicmodel) types into the Panels category and the [Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel), [Matrix Dropdown](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel), and [Matrix Dynamic](https://surveyjs.io/Documentation/Library?id=questionmatrixdynamicmodel) types into the Matrixes category:

```js
creator.toolbox.changeCategories([
    { name: "panel", category: "Panels" }, 
    { name: "paneldynamic", category: "Panels" }, 
    { name: "matrix", category: "Matrixes" },
    { name: "matrixdropdown", category: "Matrixes" },
    { name: "matrixdynamic", category: "Matrixes" }
]);
```

[View Toolbox Categories example](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcategories)

Ungrouped items fall into the General category. You can use [localization capabilities](#localize-survey-creator-ui) to change its caption. If your application does not employ modules, use the following code:

```html
<script src="https://unpkg.com/survey-creator-core/survey-creator-core.i18n.min.js"></script>
```

```js
const translations = SurveyCreator.localization.getLocale("");
translations.ed.toolboxGeneralCategory = "Common";
```

In modular applications, use the code below:

```js
import "survey-creator-core/survey-creator-core.i18n";
import { localization } from "survey-creator-core";
const translations = localization.getLocale("");
translations.ed.toolboxGeneralCategory = "Common";
```

The following properties control the behavior of categories:

- [`allowExpandMultipleCategories`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#allowExpandMultipleCategories)     
Allows more than one category to be in an expanded state. If this property is `false`, when a user expands a category, other categories collapse.

- [`keepAllCategoriesExpanded`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#keepAllCategoriesExpanded)       
Expands all categories. Users cannot collapse them.

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

[View Toolbox Customization example](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcustomization)

## Add a Custom Toolbox Item

If you want to extend the predefined Toolbox item collection, call the `addItem(itemConfiguration, [index])` method to add a custom item. This method accepts the following arguments:

- `itemConfiguration`       
A [Toolbox item configuration object](https://surveyjs.io/Documentation/Survey-Creator?id=iquestiontoolboxitem). The [`name`](https://surveyjs.io/Documentation/Survey-Creator?id=iquestiontoolboxitem#name), [`iconName`](https://surveyjs.io/Documentation/Survey-Creator?id=iquestiontoolboxitem#iconName), and [`json`](https://surveyjs.io/Documentation/Survey-Creator?id=iquestiontoolboxitem#json) properties are required. When you configure an object for the `json` property, refer to the API help section of your question type for a list of available properties. For example, if you configure a Dropdown question, refer to the [Dropdown API](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel) help section.

- `index`       
The target index of the item. Use `0` to add the item at the first position, `1` to add it at the second position, and so on. Do not specify `index` if you want to display the item at the end.

The following code adds a custom item that allows users to select a country from a drop-down menu. Since the `index` argument is `0`, the Toolbox displays the item at the beginning.

```js
creator.toolbox.addItem({
  name: "countries",
  iconName: "icon-dropdown",
  title: "Countries",
  json: {
    type: "dropdown",
    optionsCaption: "Select a country...",
    choicesByUrl: {
        url: "https://surveyjs.io/api/CountriesExample"
    }
  }
}, 0);
```

[View Toolbox Customization example](https://surveyjs.io/Examples/Survey-Creator?id=toolboxcustomization)

<!--

WE HAVEN'T COME UP WITH A VERSION FOR REACT YET

    ### Integrate Third-Party Components as Question Editors

    Survey Creator supports integration with the following third-party components out of the box:

    %LIST%

    To enable the integration with one of these components, reference or import the [surveyjs-widgets](https://github.com/surveyjs/custom-widgets) library next to the third-party component sources:

    ```html
    <script src="https://unpkg.com/surveyjs-widgets/surveyjs-widgets.min.js"></script>
    ```

    ```js
    import "survey-creator-core/survey-creator-core.i18n";
    ```

    If you did not find the desired component in the list above, refer to the following help topic for instructions on how to integrate any third-party component into Survey Creator: [Create Custom Widget](https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget).
-->

<!--  

NEW SURVEY CREATOR DOESN'T HAVE THE ADD TO TOOLBOX ADORNER YET 

    ### Save User-Defined Elements in the Toolbox

    By default, there is a “Add to Toolbox” button on an element (question/panel) in the designer. Your end-user may customize question/panel as he/she wants, add it into toolbox and then drop it on another page.

    You may go even further and persist the current Toolbox state, so the user may use these custom toolbox items for building other surveys.

    Let’s talk here about available options that you have.

    By default, a user may add only 3 elements from the designer. If there are already 3 custom/copied elements on the Toolbox, then on adding a new one, the first added element will be removed. To change the number of copied elements your user may have, you must set this property to the value you need:
    ```js
    creator.toolbox.copiedItemMaxCount = 10;
    ```
    To disable the ability of adding an element from designer into toolbox you will have to use **onElementAllowOperations** event. Here is the example:

    ```js
    creator.onElementAllowOperations.add(function(sender, options){
        options.allowAddToToolbox = false;
    });
    ```
    If you want to persist the copied items on the Toolbox for your end-user for another session or another survey, then you must use the copiedJsonText properties:

    ```js
    var savedItems = creator.toolbox.copiedJsonText; //save into localstorage or your database
    //....
    //Restored savedItems from localstorage or your database.
    creator.toolbox.copiedJsonText = savedItems;
    ```
-->