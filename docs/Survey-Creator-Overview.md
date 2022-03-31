# Survey Creator / Form Builder Overview

If you want to use Survey Creator on your website with minimum customization, then we recommend you go to [Survey Creator examples](https://surveyjs.io/Examples/Survey-Creator/), click on "Edit in Plunker" button and copy the code into your web page. To get more information about integration, refer to a [Get Started](https://surveyjs.io/Documentation/Survey-Creator?id=get-started) help topic for your framework.

Please visit our [what's new page](https://surveyjs.io/WhatsNew) to see what we have added recently or what is coming soon.

If you want to get the most from our Survey Creator, then we hope that the following article helps you. You may read this document from the beginning to the end or just navigate to the topic you are interested in.

- [Supported Platforms and Examples](#supported-platforms-and-examples)
- [Localization](#localization)
  - [Localize Survey Creator UI](#localize-survey-creator-ui)
  - [Localize Survey Contents](#localize-survey-contents)
- [Customize the Toolbox](#customize-the-toolbox)
  - [Full and Compact Modes](#full-and-compact-modes)
  - [Limit Available Question and Panel Types](#limit-available-question-and-panel-types)
  - [Group Toolbox Items by Categories](#group-toolbox-items-by-categories)
  - [Customize Predefined Toolbox Items](#customize-predefined-toolbox-items)
  - [Add a Custom Toolbox Item](#add-a-custom-toolbox-item)
- [Hide Properties from the Property Grid](#hide-properties-from-the-property-grid)
- [Add properties into SurveyJS Elements](#add-properties-into-surveyjs-elements)
- [Customize Survey Elements on Creation](#customize-survey-elements-on-creation)
- [Adorners](#adorners)
- [Access Survey Instances Within Survey Creator](#access-survey-instances-within-survey-creator)
  - [Design Mode Survey Instance](#design-mode-survey-instance)
  - [Preview Mode Survey Instance](#preview-mode-survey-instance)


<div id="platforms"></div>

## Supported Platforms and Examples

Survey Creator supports Knockout and React natively and allows you to integrate the Knockout version into Angular, jQuery, and Vue applications. Refer to the following articles to get started with Survey Creator in your frontend framework:

- [Angular](https://surveyjs.io/Documentation/Survey-Creator?id=get-started-angular)
- [Vue](https://surveyjs.io/Documentation/Survey-Creator?id=get-started-vue)
- [React](https://surveyjs.io/Documentation/Survey-Creator?id=get-started-react)
- [Knockout / jQuery](https://surveyjs.io/Documentation/Survey-Creator?id=get-started-knockout-jquery)

We also created several Quick Start GitHub repositories for different frontend frameworks to give you an easy start:

| Frontend Framework | GitHub Repository |
|---|---|
| Angular | [Angular CLI + SurveyJS Quick Start Boilerplate](https://github.com/surveyjs/surveyjs_angular_cli) |
| React | [React + SurveyJS Quick Start Boilerplate](https://github.com/surveyjs/surveyjs_react_quickstart) |
| Vue | [SurveyJS + VueJS Quick Start Boilerplate](https://github.com/surveyjs/surveyjs_vue_quickstart) |

In many use cases, Survey Creator communicates with a remote storage. Use the following GitHub repositories integrate Survey Creator with your backend framework:

| Backend Framework | GitHub Repository | Demo Site |
|---|---|---|
| PHP | [Sample PHP backend for SurveyJS library and Survey Creator](https://github.com/surveyjs/surveyjs-php) | [Run demo](https://surveyjs-php.herokuapp.com/) |
|  ASP.NET Core | [Sample .NET Core backend for SurveyJS library and Survey Creator](https://github.com/surveyjs/surveyjs-aspnet-mvc) | [Run demo](https://surveyjs-aspnet-mvc.azurewebsites.net/) |
| NodeJS | [Sample NodeJS backend for SurveyJS library and Survey Creator](https://github.com/surveyjs/surveyjs-nodejs) | [Run demo](https://surveyjs-nodejs.herokuapp.com/) |

We also created a plugin for WordPress. You can use it as is or modify it to integrate SurveyJS Library and Survey Creator into another CMS:

| Product Name | GitHub Repository | Plugin Site |
|---|---|---|
| WordPress | [Sources for SurveyJS WordPress plugin](https://github.com/surveyjs/surveyjs-wordpress) | [WordPress plugin](https://wordpress.org/plugins/surveyjs/) |

## Localization

### Localize Survey Creator UI

Survey Creator UI is translated to multiple languages. We ship translation strings as [dictionary files](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core/src/localization). Localization engine that works with these files is implemented in a separate script/module. Reference this script in the `<head>` tag of your page or import this module in the component that renders Survey Creator:

```html
<script src="https://unpkg.com/survey-creator-core/survey-creator-core.i18n.min.js"></script>
```

```js
import "survey-creator-core/survey-creator-core.i18n";
```

The default language for UI elements is English. To change it, set the `currentLocale` property. For example, the following code translates Survey Creator UI to French:

```js
SurveyCreator.localization.currentLocale = "fr";

// In modular applications:
import { localization } from "survey-creator-core";
localization.currentLocale = "fr";
```

You can modify individual translation strings. Call the `getLocale(locale)` method to get an object with locale translations. Refer to any [dictionary file](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core/src/localization) for information about the structure of this object. To modify a translation string, change the corresponding object property:

```js
// Get current locale translations
const translations = SurveyCreator.localization.getLocale("");
// In modular applications
const translations = localization.getLocale("");

// Change text for the `visible` property in Property Grid
translations.p.visible = "Is visible";
// Change text for the `visible` property in Modal Editor
translations.pe.visible = "Is element visible?";
// Change text for the `visible` property in JSON Editor
translations.ed.jsonEditor = "Edit As Text";
```

[View Localization example](https://surveyjs.io/Examples/Survey-Creator/?id=localization)

Translation dictionaries are supported by the community and may be incomplete. Feel free to add missing translations to existing dictionaries or create new dictionaries for other languages. You can use English as a base dictionary: copy the file, replace English translations in it, and submit a pull request with the resulting file to the [survey-creator](https://github.com/surveyjs/survey-creator) repository.

### Localize Survey Contents

If you want your users to create multi-language surveys, add the following script to the `<head>` tag of your page or import the following module in the component that renders Survey Creator:

```html
<script src="https://unpkg.com/survey-core/survey.i18n.min.js"></script>
```

```js
import "survey-core/survey.i18n";
```

This script/module allows Survey Creator users to select a default language different from English:

<img src="./images/survey-creator-default-language-dropdown.png" alt="Survey Creator - Default Language dropdown" width="50%">

If you want to restrict the list of available languages, specify the `supportedLocales` array:

```js
Survey.surveyLocalization.supportedLocales = ["en", "de", "es", "fr"];

// In modular applications
import { surveyLocalization } from 'survey-core';
surveyLocalization.supportedLocales = ["en", "de", "es", "fr"];
```

Predefined survey texts are translated to the selected language automatically. SurveyJS Library takes translation strings from [community-supported dictionaries](https://github.com/surveyjs/survey-library/tree/master/src/localization). Custom texts (questions, choices, page titles, error messages) should be translated by Survey Creator users in the Translation tab. To display it, enable the [`showTranslationTab`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#showTranslationTab) property as shown below. Note that users can specify translation strings only for the languages that you list in the `supportedLocales` array.

```js
const creatorOptions = {
  showTranslationTab: true
};

const creator = new SurveyCreator.SurveyCreator(creatorOptions);

// In modular applications
import { SurveyCreator } from "survey-creator-knockout";
// or
import { SurveyCreator } from "survey-creator-react";
const creator = new SurveyCreator(creatorOptions);
```

[View Multiple Languages example](https://surveyjs.io/Examples/Survey-Creator/?id=multiplelanguages)

<div id="toolbox"></div>

## Customize the Toolbox

### Full and Compact Modes

Toolbox contains available question and panel types. Users can click questions and panels or drag and drop them onto the design surface to add them to the survey.

<img src="./images/survey-creator-toolbox-full.png" alt="Survey Creator - Toolbox in full mode" width="50%">

Toolbox supports full mode (illustrated above) and compact mode. In compact mode, element names are hidden. To see an individual element name, a user should move the mouse pointer over the element icon.

<img src="./images/survey-creator-toolbox-compact.png" alt="Survey Creator - Toolbox in compact mode" width="50%">

Toolbox switches between the modes automatically based on available width. Specify the [`forceCompact`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#forceCompact) property if you want the toolbox to always use a specific mode:

```js
// Compact mode
creator.toolbox.forceCompact = true;
// Full mode
creator.toolbox.forceCompact = false;
```

You can also use the [`isCompact`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#isCompact) property to find out whether the toolbox is currently in compact mode:

```js
console.log(creator.toolbox.isCompact);
```

<div id="toolbox-limit"></div>

### Limit Available Question and Panel Types

All available question and panel types are listed in the [`getType()`](https://surveyjs.io/Documentation/Library?id=Question#getType) method description. If you need to show only a part of these types, specify them in the Survey Creator's [`questionTypes`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#questionTypes) array:

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

<div id="toolbox-categories"></div>

### Group Toolbox Items by Categories

> NOTE: Compact toolbox does not display categories.

To group toolbox items, call the [`changeCategories()`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#changeCategories) method. It accepts an array of objects with the following fields:

- `name`        
The name of the item that should be grouped. Refer to the [`getType()`](https://surveyjs.io/Documentation/Library?id=Question#getType) method description for a list of accepted values.

- `category`      
A category for this item.

The following code places the [Panel](https://surveyjs.io/Documentation/Library?id=panelmodel) and [Panel Dynamic](https://surveyjs.io/Documentation/Library?id=questionpaneldynamicmodel) types into the Panels category and the [Matrix](https://surveyjs.io/Documentation/Library?id=questionmatrixmodel), [Matrix Dropdown](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel), and [Matrix Dynamic](https://surveyjs.io/Documentation/Library?id=questionmatrixdynamicmodel) types into the Matrices category:

```js
creator.toolbox.changeCategories([
    { name: "panel", category: "Panels" }, 
    { name: "paneldynamic", category: "Panels" }, 
    { name: "matrix", category: "Matrices" },
    { name: "matrixdropdown", category: "Matrices" },
    { name: "matrixdynamic", category: "Matrices" }
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
Allows more than one category to be in expanded state. If this property is `false`, when a user expands a category, other categories collapse.

- [`keepAllCategoriesExpanded`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#keepAllCategoriesExpanded)       
Expands all categories. Users cannot collapse them.

```js
creator.toolbox.allowExpandMultipleCategories = true;
creator.toolbox.keepAllCategoriesExpanded = false;
```

### Customize Predefined Toolbox Items

To customize a predefined toolbox item, pass its [type](https://surveyjs.io/Documentation/Library?id=Question#getType) as an argument to the [`getItemByName(itemName)`](https://surveyjs.io/Documentation/Survey-Creator?id=questiontoolbox#getItemByName) method. This method returns the item's configuration object. Change the [properties of this object](https://surveyjs.io/Documentation/Survey-Creator?id=iquestiontoolboxitem) to customize the toolbox item. For example, the following code uses the [`json`](https://surveyjs.io/Documentation/Survey-Creator?id=iquestiontoolboxitem#json) property to override predefined [choices](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel#choices) for a [Dropdown](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel) question:

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

### Add a Custom Toolbox Item

If you want to extend the predefined toolbox item collection, call the `addItem(itemConfiguration, [index])` method to add a custom item. This method accepts the following arguments:

- `itemConfiguration`       
A [toolbox item configuration object](https://surveyjs.io/Documentation/Survey-Creator?id=iquestiontoolboxitem). The [`name`](https://surveyjs.io/Documentation/Survey-Creator?id=iquestiontoolboxitem#name), [`iconName`](https://surveyjs.io/Documentation/Survey-Creator?id=iquestiontoolboxitem#iconName), and [`json`](https://surveyjs.io/Documentation/Survey-Creator?id=iquestiontoolboxitem#json) properties are required. When you configure an object for the `json` property, refer to the API help section of your question type for a list of available properties. For example, if you configure a Dropdown question, refer to the [Dropdown API](https://surveyjs.io/Documentation/Library?id=questiondropdownmodel) help section.

- `index`       
The target index of the item. Use `0` to add the item at the first position, `1` to add it at the second position, and so on. Do not specify `index` if you want to display the item at the end.

The following code adds a custom item that allows users to select a country from a drop-down menu. Since the `index` argument is `0`, the toolbox displays the item at the beginning.

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

    <div id="toolbox-customwidgets"></div>

    ### Integrate 3rd-Party Components as Question Editors

    Survey Creator supports integration with the following 3rd-party components out of the box:

    %LIST%

    To enable the integration with one of these components, reference or import the [surveyjs-widgets](https://github.com/surveyjs/custom-widgets) library next to the 3rd-party component sources:

    ```html
    <script src="https://unpkg.com/surveyjs-widgets/surveyjs-widgets.min.js"></script>
    ```

    ```js
    import "survey-creator-core/survey-creator-core.i18n";
    ```

    If you did not find a desired component in the list above, refer to the following help topic for instructions on how to integrate any 3rd-party component into Survey Creator: [Create Custom Widget](https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget).
-->

<!--  

NEW SURVEY CREATOR DOESN'T HAVE THE ADD TO TOOLBOX ADORNER YET 

    <div id="toolbox-existing"></div>

    ### Save User-Defined Elements in the Toolbox

    By default, there is a “Add to Toolbox” button on an element (question/panel) in the designer. Your end-user may customize question/panel as he/she wants, add it into toolbox and then drop it on another page.

    You may go even further and persist the current Toolbox state, so the user may use these custom toolbox items for building other surveys.

    Let’s talk here about available options that you have.

    By default, a user may add only 3 elements from the designer. If there are already 3 custom/copied elements on the Toolbox, then on adding a new one, the first added element will be removed. To change the number of copied elements your user may have, you must set this property to the value you need:
    ```javascript
    creator.toolbox.copiedItemMaxCount = 10;
    ```
    To disable the ability of adding an element from designer into toolbox you will have to use **onElementAllowOperations** event. Here is the example:

    ```javascript
    creator.onElementAllowOperations.add(function(sender, options){
        options.allowAddToToolbox = false;
    });
    ```
    If you want to persist the copied items on the Toolbox for your end-user for another session or another survey, then you must use the copiedJsonText properties:

    ```javascript
    var savedItems = creator.toolbox.copiedJsonText; //save into localstorage or your database
    //....
    //Restored savedItems from localstorage or your database.
    creator.toolbox.copiedJsonText = savedItems;
    ```
-->

<div id="removeproperties"></div>

## Hide Properties from the Property Grid

If you do not want users to change a survey property, you can hide it from the Property Grid. Survey Creator allows you to hide an individual property or multiple properties at once.

To hide a single survey property, call the `getProperty(questionType, propertyName)` method on the `Survey.Serializer` object as follows:

```js
// Hide the `title` property for Boolean questions
Survey.Serializer.getProperty("boolean", "title").visible = false;

// In modular applications:
import { Serializer } from "survey-core";
Serializer.getProperty("boolean", "title").visible = false;
```

If you want to hide multiple properties, handle the Survey Creator's [`onShowingProperty`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#onShowingProperty) event. Its second parameter exposes the `canShow` Boolean property. Disable it for the properties you want to hide. The following example illustrates two cases: hide black-listed properties and keep only white-listed properties. This code hides the properties for [Panel](https://surveyjs.io/Documentation/Library?id=panelmodel) questions.

```js
const blackList = [ "visible", "isRequired" ];
// const whiteList = [ "title", "name" ];

creator.onShowingProperty.add(function (_, options) {
  if (options.obj.getType() == "panel") {
    // Hide properties found in `blackList`
    options.canShow = blackList.indexOf(options.property.name) < 0;

    // Hide all properties except those found in `whiteList`
    // options.canShow = whiteList.indexOf(options.property.name) > -1;
  }
});
```

<div id="addproperties"></div>

## Add properties into SurveyJS Elements

You may add a new property into all question types, panel, page and survey. If you add a property into base type, like “question” then it will be available in all its successors. “questionbase” is base class for all questions and “question” is base class for all questions that has a value property. “html” question is derived from “questionbase” and not “question” type.

Additionally, you may customize checkbox, radiogroup and dropdown choices property, matrix rows and columns properties and matrix dropdown rows property. They are all the same type: an array of “itemvalue” objects.

Finally, “dropdowncolumn” object is used in columns properties of “matrixdropdown” and “matrixdynamic”. The are both derived from “matrixdropdownbase” type.</p>
Let’s review several examples

```javascript
//add a property to the base question class and as result to all questions
//It has name: "tag", type "number" and the default value is 0
//Add it as the last property into "general" (first) category
Survey.Serializer.addProperty("question", 
  { name: "tag:number", default: 0, category: "general" }
);
//Survey.Serializer.addProperty("question", { name: "tag", type: "number" default: 0, category: "general" });
//you may set the type using this decrlaration as well
//The following code adds a description property to the survey. The property type is html.
//It means that html property editor is used to set its value in the Survey Creator
//We will add it into general category as the third property, visibleIndex is 2 (first is 0)
Survey.Serializer.addProperty("survey", 
  { name: "description:html", category: "general", visibleIndex: 2}
);
//Add a colour string property into page.
//The user will be able to select only predefined values from the dropdown
//The default property type is "string", we may not set it.
//The default value is not set and it is undefined by default.
//We are adding it into new created "Appearance" category and make this category the second, categoryIndex is 1
Survey.Serializer.addProperty("survey", 
  { name: "color", choices: ["blue", "red", "green"], 
    category: "Appearance", categoryIndex: 1}
);
```

Here is the available attributes and callback functions in the property definition

---
**name**

The property name. It is the only required property.

---
**type**

The property type. The list of available property types you may in the next.

---
**default**

It is an optional attribute. The library do not serialize the default value into JSON. By default, the empty text is default for string value, 0 is for numeric and false for boolean. You may change it by using this attribute.
```javascript
{ name: "mode", default: "edit"}
{ name: "showTitle:boolean", default: true }
```
---
**displayName**

Property Editor uses this property for displaying it as a caption. By default property editor tries to find the string for the caption in localization strings. If it could not find it, then it uses _displayName_ property and finally use the property _name_.

```javascript
//Add new property into question.
Survey.Serializer.addProperty("survey", {
    name: "tag", displayName: "Custom Data",  category: "data"
});
```
---
**choices**

It is an optional attribute. It makes sense for string and numeric property types only. If the choices attribute is set, the property editor for the property becomes dropdown. You may assign the array of values to this attribute or a function that will return the array of strings or numbers.

```javascript
{ name: "showProgressBar", default: "off", choices: ["off", "top", "bottom"] }
//returns the supported languages in the surveyjs library.
{ name: "locale", choices: function() { return Survey.surveyLocalization.getLocales(); } }
```

From v1.0.94, you can get the choices from the web. Here is the example of adding the "country" getting its values from web service.

```javascript
//It uses rest full service and choicesCallback function to tell property editor that choices are loaded from the web
Survey.Serializer.addProperty("survey",
  { name: "country", category: "general", 
    choices: function(obj, choicesCallback) {
      //We are going to use choicesCallback here
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://surveyjs.io/api/CountriesExample");
      xhr.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
      );
      //on load event set results into array of ItemValue and tell the Survey Creator that choices are loaded.
      xhr.onload = function() {
        if (xhr.status === 200) {
            var serverRes = JSON.parse(xhr.response);
            var res = [];
            //We will use ItemValue array here, since we want to have value different from display text
            //If your value equals to display text, then you may simply return the array of strings.
            res.push({ value: null });
            for (var i = 0; i < serverRes.length; i++) {
            var item = serverRes[i];
            res.push({ value: item.alpha2Code, text: item.name });
            }
            //return the result into Survey Creator property editor
            choicesCallback(res);
        }
      };
    xhr.send();
  }
});
```
---
**isRequired**

An optional Boolean property. The default value is false. Set it to true, if you want to require from a user to set this property in the Survey Creator. You may use “!” mark before property name as an alternative declaration. For example: “!name” or “!type”.

---
**isSerializable**

An optional Boolean property. If you do not want to serialize this property into JSON then set its value to false. It is true by default.

---
**isLocalizable**

An optional Boolean property. If you do not want to make this property localizable, this property can be translated on several languages and available in "translation" tab then set its value to true. It is false by default. The property type should be "string" (default type) or "text" (multiple lines).

```javascript
//It is visible if inputFormat property equals to "date*" values
Survey.Serializer.addProperty("question", 
  { name: "popupDescription:text", isLocalizable: true, category: "general", visibleIndex: 3 });
```

---
**visible**

An optional Boolean property. By default, it is true. Set it to false, if you want to hide this property from the Survey Creator

---
**visibleIf**

Available since v1.0.94. It is a function that has an obj parameter, the editing object. It should return the boolean value: true to show the property and false to hide the property. If the property depends on another property value, then use **dependsOn**. On changing any property from the **dependsOn** array, the visibleIf function will be called to check, if it returns other value then before. Here is the example:

```javascript
//This property depends on date format property of text question
//It is visible if inputFormat property equals to "date*" values
Survey.Serializer.addProperty("text", {
  name: "dateFormat",
  category: "general",
  visibleIndex: 7,
  dependsOn: ["inputType"],
  visibleIf: function(obj) {
    return (
      obj.inputType == "date" ||
      obj.inputType == "datetime" ||
      obj.inputType == "datetime-local"
    );
  }
});
```

---
**visibleIndex**

Available since v1.5.4. An optional numeric property. By default, it is -1. Set it to 0 or bigger number to change the property order inside the category in Element Editor.

```javascript
//Add description property into survey object and show it in general category as third property editor.
Survey.Serializer.addProperty("survey", {
    name: "description:html", category: "general", visibleIndex: 2
});
```

---
**readOnly**

An optional Boolean property. By default, it is false. Set it to true, if you want to make this property disabled in the Survey Creator inputs. 

The following code makes the choices and matrix rows/columns value property read-only.
```javascript
Survey.Serializer.findProperty('itemvalue', "value").readOnly = true;
```
---
**category**

Available since v1.5.4. An optional string property. By default, it is empty. Set category for a new created property, otherwise it will be located in "other" category by default, the last category in the list. If this category doesn't exist then a new category will be created. You can control new category order by using **categoryIndex** property. Please note, you can't put it before "general" category that has **categoryIndex** equals ``-1``. 

The following code creates new property and new category "Entity" and make this category next to "general".
```javascript
Survey.Serializer.addProperty("question", {
  name: "targetEntity", category: "Entity", categoryIndex: 1
  choices: ["", "Account", "Development"]
});
```

Available categories:

| Category name | Apply to | visibleIndex |
|---|---|---|
| general | question, panel, page, survey | -1 |
| logic | question, panel, page, survey | 100 |
| layout | question, panel, page | 200 |
| data | question | 300 |
| validation | question, panel, page | 400 |
| navigation | survey | 100 |
| question | survey | 200 |
| logic | survey | 300 |
| data | survey | 400 |
| validation | survey | 500 |
| showOnCompleted | survey | 600 |
| timer | survey | 700 |
| columns | matrixdropdownbase (matrixdropdown, matrixdynamic) | 10 |
| rows | matrixdropdownbase (matrixdropdown, matrixdynamic) | 11 |
| choices | matrixdropdownbase (matrixdropdown, matrixdynamic) | 12 |
| columns | matrix | 10 |
| rows | matrix | 11 |
| cells | matrix | 12 |
| items | multipletext | 10 |
| rateValues | rating | 10 |
| choices | selectbase (dropdown, checkbox, radiogroup) | 10 |
| choicesByUrl | selectbase (dropdown, checkbox, radiogroup) | 11 |

---
**maxLength**

An optional numeric property. It works for string and text properties. It limits the string length that user can enter in the property editor.

The following code limits the size of the question name, that user may enter, to 20.
```javascript
Survey.Serializer.findProperty('question', "name").maxLength = 20;
```

---
**maxValue** and **minValue**

An optional numeric properties. They work for number properties. They limit the number value that user can enter in the property editor.

The following code add a custom property into question and limits the value of this property between 0 and 100.
```javascript
Survey.Serializer.addProperty("question", {
      name: "cost:number",
      category: "general",
      default: 5,
      minValue: 0,
      maxValue: 100
    });
```

---
**dependsOn**

Available since v1.0.94. An optional array of strings. It contains properties names. You may use it together with visibleIf and choices attributes, where choices is a function and not a static array. If any property from this list is changed, then property editor calls visibleIf and choices functions to check if they return other values.

The following code creates two new properties. The choices of the second property fully depends on property value of the first property.
We will create a new "Entity" category and place two properties into it.
```javascript
Survey.Serializer.addProperty("question", {
  name: "targetEntity",
  choices: ["", "Account", "Development"],
  category: "Entity",
  categoryIndex: 1
});
//This property depends from targetEntity property.
//If targetEntity property is empty then choices for targetField are empty as well.
Survey.Serializer.addProperty("question", {
  name: "targetField",
  dependsOn: "targetEntity",
  category: "Entity",
  choices: function(obj) {
    var choices = [];
    var entity = !!obj ? obj.targetEntity : null;
    //If targetEntity is empty then return the empty array
    if (!entity) return choices;
    //The correct way to set the nullable value
    choices.push({ value: null });
    choices.push(entity + " 1");
    choices.push(entity + " 2");
    choices.push(entity + " 3");
    return choices;
  }
});
```
This example is more complicated, since the second property retrieves its choices from a web service. And again, the second property choices depends on property value of the first proeprty. We will create a new "Region" category and place two properties into it.
```javascript
Survey.Serializer.addProperty("survey", {
  name: "region",
  category: "Region",
  categoryIndex: 1,
  choices: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
});
//This property country depends on the selected region.
//It allows to select all countries if region is empty or if it is not empty, only countries from this region
//It uses rest full service and choicesCallback function to tell property editor that loading choices from the web service is completed
Survey.Serializer.addProperty("survey", {
  name: "country",
  category: "Region",
  dependsOn: "region",
  choices: function(obj, choicesCallback) {
    //We are going to use choicesCallback here
    var xhr = new XMLHttpRequest();
    //if region is empty then get all countries, otherwise get coutries by region.
    var url =
      !!obj && !!obj.region
        ? "https://surveyjs.io/api/CountriesExample?region=" + obj.region
        : "https://surveyjs.io/api/CountriesExample";
    xhr.open("GET", url);
    xhr.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    //on load event set results into array of ItemValue and tell the Survey Creator that choices are loaded.
    xhr.onload = function() {
      if (xhr.status === 200) {
        var serverRes = JSON.parse(xhr.response);
        var res = [];
        //We will use ItemValue array here, since we want to have value different from display text
        res.push({ value: null });
        for (var i = 0; i < serverRes.length; i++) {
          var item = serverRes[i];
          res.push({ value: item.alpha2Code, text: item.name });
        }
        //return the result into Survey Creator property editor
        choicesCallback(res);
      }
    };
    xhr.send();
  }
});
```


---
**onGetValue**

It is an optional attribute. You may assign a function to return a value different from the property value.
```javascript
// get title property returns a title with question number and so on "5) My super title.",
//but we want to serialize only a "pure" question title "My super title".
{ name: "title:text", onGetValue: function (obj: any) { return obj.titleValue; } }
// the function always returns null. It means that the library will never serialize the property in JSON.
{ name: "calcProperty", onGetValue: function (obj: any) { return null; } }
```
---
**onSetValue**

It is an optional attribute. You may assign a function to set a different object property and/or perform some actions.
If you set the the property value directly: "obj.myValue = value" then it will call onSetValue again. You have to use obj.setPropertyValue function.
```javascript
{ 
    name: "myValue", 
    onSetValue: function (obj, value, jsonConverter) {
        //Optionally do some checks, modify value if needed.
        //Set value directly
        obj.setPropertyValue("myValue", value);
        //Perform some actions, for example change other properties of the object
    }
}
```
---

Available property types. Every property type has a correspondet Property Editor.

|Name|Description|
|---|---|
|string|It is the default value type. Property editor is a text input. "myProperty" and "myProperty:string" ― give the same result.|
|boolean|Boolean type. Property editor is a checkbox.|
|condition|It shows property editor that helps to build a boolean expression for properties like **visibleIf** and **enabledIf**|
|expression|It shows property editor that helps to build the expression|
|number|Numeric type. Property editor is a text input|
|text|String type. Property editor is text input with an optional modal window for entering large text|
|html|string type. Property editor is text input with an optional modal window for entering large text. In the future modal window becomes a very simple html editor.|
|itemvalues|Array of ItemValue object. ItemValue object has two properties {value: any, text: string}. Dropdown, checkbox and radiogroup questions has choices property with itemvalues type.|
|value|any type. Property Editor for defaultValue and correctValue properties. It shows a survey with the only one current question.|
|matrixdropdowncolumns|Columns for matrixdropdown and matrixdynamic questions|
|textitems|items property of multiple text question has this type|
|triggers|Survey triggers property has this type|
|validators|Question validators property has this type|

You may review the [Add properties](https://surveyjs.io/Examples/Survey-Creator/?id=addproperties) example.

<div id="modifynewobjects"></div>

## Customize Survey Elements on Creation

Survey Creator raises events when users add new elements to a survey. You can handle these events to customize the elements.

| Event name | Raised when |
| ---------- | ----------- |
| [onQuestionAdded](https://surveyjs.io/Documentation/Survey-Creator/?id=surveycreator#onQuestionAdded) | Raised when users add a question to the survey. |
| [onPanelAdded](https://surveyjs.io/Documentation/Survey-Creator/?id=surveycreator#onPanelAdded) | Raised when users add a panel to the survey. |
| [onPageAdded](https://surveyjs.io/Documentation/Survey-Creator/?id=surveycreator#onPageAdded) | Raised when users add a page to the survey. |
| [onMatrixColumnAdded](https://surveyjs.io/Documentation/Survey-Creator/?id=surveycreator#onMatrixColumnAdded) | Raised when users add a column to the [Matrix Dropdown](https://surveyjs.io/Documentation/Library?id=questionmatrixdropdownmodel) or [Matrix Dynamic](https://surveyjs.io/Documentation/Library?id=questionmatrixdynamicmodel) question. |
| [onItemValueAdded](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#onItemValueAdded) | Raised when users add a new item value (column, row, choice) |

The code below shows how you can handle the `onQuestionAdded` event to customize the default question name:

```js
let questionNumbers = {};
creator.onQuestionAdded.add(function (_, options) {
  const question = options.question;
  const type = question.getType();
  if (!questionNumbers[type]) {
    questionNumbers[type] = 1;
  }
  const number = questionNumbers[type];
  // Set `name` in the following format: DropdownQuestion1, CheckboxQuestion6, etc.
  question.name = type[0].toUpperCase() + type.substring(1) + "Question" + number;
  questionNumbers[type] = number + 1;
});
```

<div id="adorners"></div>

## Adorners

Adorners are UI elements that allow Survey Creator users to manipulate survey elements. Adorners are added to survey elements on the design surface. Displayed adorners depend on the survey element type. The following image highlights adorners on a Dropdown question:

<img src="./images/surver-creator-dropdown-adorners.png" alt="Survey Creator - Adorners" width="50%">

You can control the visibility of adorners using the `onElementAllowOperations` event. As the second parameter, the event handler accepts an object that exposes the following Boolean properties:

| Property | Description |
|--------- | ----------- |
| `allowAddToToolbox` | Shows or hides the adorner that saves the current question configuration in the toolbox |
| `allowChangeRequired` | Shows or hides the adorner that makes the question required |
| `allowChangeType` | Shows or hides the adorner that changes the question type |
| `allowCopy` | Shows or hides the adorner that duplicates the question |
| `allowDelete` | Shows or hides the adorner that deletes the question |
| `allowDragging` | Shows or hides the adorner that allows users to drag and drop questions |
| `allowEdit` | Shows or hides the adorners that allow users to edit question properties on the design surface. If you disable this property, users can edit question properties only in Property Grid. |

The following code shows how to hide the adorner that changes the question type for Dropdown questions:

```js
creator.onElementAllowOperations.add(function (_, options) {
  if (options.obj?.getType() === "dropdown") {
    options.allowChangeType = false;
  }
});
```
<!--
DEPENDS ON THE FOLLOWING ISSUE: https://github.com/surveyjs/survey-creator/issues/2843

You may register your own adorner or remove an existing adorner or remove all of them.

```javascript
//Register a new adorner
SurveyCreator.registerAdorner("adornerName", adornerInstance);
//Remove two existing adorners
SurveyCreator.removeAdorners(["adornerName1", "adornerName2"]);
//The removeAdorners function without parameters, will remove all adorners
SurveyCreator.removeAdorners();
```
-->

<div id="accesssurveys"></div>

## Access Survey Instances Within Survey Creator

Survey Creator contains different survey instances for design and preview modes. In design mode, survey elements have [adorners](#adorners). In preview mode, the survey is displayed as respondents will see it.

### Design Mode Survey Instance

To access the design mode survey instance, use the Survey Creator's [survey](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#survey) property. You can do that at any point in your application. Use the [Survey API](https://surveyjs.io/Documentation/Library?id=surveymodel) to manipulate the survey instance. For example, the following code changes the survey [`title`](https://surveyjs.io/Documentation/Library?id=surveymodel#title):

```js
creator.survey.title = "My Survey";
```

Survey Creator may create a new design mode survey instance during the design process, for example, when the user switches from the JSON Editor tab back to Designer. To handle the survey recreation, use the [onDesignerSurveyCreated](https://surveyjs.io/Documentation/Survey-Creator/?id=surveyeditor#onDesignerSurveyCreated) event.

```js
creator.onDesignerSurveyCreated.add(function (_, options) {
  // Recreated survey instance is stored in the `options.survey` property
  console.log(options.survey);
})
```

### Preview Mode Survey Instance

The preview mode survey instance is recreated each time a user opens the Preview tab. To access this instance, handle the [onTestSurveyCreated](https://surveyjs.io/Documentation/Survey-Creator?id=surveyeditor#onTestSurveyCreated) event:

```js
creator.onTestSurveyCreated.add(function (_, options) {
  options.survey.title = "You started previewing the survey at: " + new Date().toLocaleTimeString();
});
```