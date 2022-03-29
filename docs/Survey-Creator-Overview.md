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
- [Remove properties from SurveyJS Elements or hide them](#remove-properties-from-surveyjs-elements-or-hide-them)
- [Add properties into SurveyJS Elements](#add-properties-into-surveyjs-elements)
- [Customize SurveyJS Elements Editor</h2>](#customize-surveyjs-elements-editorh2)
- [Modify new created objects (Questions, Panels, Pages, Columns and Items)](#modify-new-created-objects-questions-panels-pages-columns-and-items)
- [Accessing Surveys instance: designer and test surveys](#accessing-surveys-instance-designer-and-test-surveys)
- [Adorners ― change element properties on its designer surface](#adorners--change-element-properties-on-its-designer-surface)


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

## Remove properties from SurveyJS Elements or hide them

The most popular task is to remove or hide existing properties in the Survey Creator.

There is a difference between removing and hiding. If you remove a property, then SurveyJS will not be able to restore it from JSON and save it back to JSON. SurveyJS will not have any information about the removed property. So, to remove properties, make sure that you do not need these properties anymore.

Here is an example of removing the [title](https://surveyjs.io/Documentation/Library?id=Question#title) and [choicesByUrl](https://surveyjs.io/Documentation/Library?id=QuestionSelectBase#choicesByUrl) properties.
```javascript
//remove a property from the question class and as result from all questions
Survey.Serializer.removeProperty("question", "title");
//remove choicesByUrl from checkbox, dropdown and radiogroup questions
Survey.Serializer.removeProperty("selectbase", "choicesByUrl");
```

You can make these properties invisible in Survey Creator and still be able to load/save them in JSON by setting their [visible](https://surveyjs.io/Documentation/Library?id=Question#visible) property to false.
```javascript
//make a property, from the question class and as result from all questions, invisible
Survey.Serializer.findProperty("question", "title").visible = false;
//make choicesByUrl property from checkbox, dropdown and radiogroup questions invisible
Survey.Serializer.findProperty("selectbase", "choicesByUrl").visible = false;
```
This work perfect, if you need to hide a few properties. If the list of properties you want to make invisible is large, you can use SurveyCreator's [onShowingProperty](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#onShowingProperty) event.
```javascript
creator.onShowingProperty.add(function (sender, options) {
    //check options.obj.getType() if needed. if (options.obj.getType() == "survey")
    options.canShow = myBlackList.indexOf(options.property.name) < 0; //show if it is not in a blacklist
    //You may do opposite and use the white list
    //options.canShow = myWhiteList.indexOf(options.property.name) > -1; //show if it is in a white list
});
```

For more details, review the [Remove properties](https://surveyjs.io/Examples/Survey-Creator/?id=removeproperties) example.


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

<div id="elementseditor"></div>

## Customize SurveyJS Elements Editor</h2>

End-users may change SurveyJS elements properties by using Element Editor Modal Window. It is more user friendly and many our customers [hide the property grid](#show_survey_creator_options) on the right and left Element Editor as the only option for element modification.

<p align="center">

![Radio group question Editor](images/builder-question-editor.png)

_The radiogroup question Editor_

</p>

If you want to hide any property from the Survey Creator, then you may simply remove or hide the property as described in [this section](#removeproperties).

You will have to work with **SurveyCreator.SurveyQuestionEditorDefinition** object, if you want to remove, add or reorder tabs and add a property or change its tab or location.

The code bellow adds two new tabs into dropdown question Editor.
```javascript
var editorDefinition = SurveyCreator.SurveyQuestionEditorDefinition.definition["dropdown"];
// The tabs and properties may be empty for an element type.
// It means that uses the definition from the parent class.
// For example question is the base class for all questions.
if (!editorDefinition.tabs) editorDefinition.tabs = [];
if (!editorDefinition.properties) editorDefinition.properties = [];
// Add a new tab correctAnswer. Since the name the same as the property correctAnswer,
// the editor for property correctAnswer will be shown on the tab.
editorDefinition.tabs.push({ name: "correctAnswer", index: 12 });
//Add a new tab, that doesn't contains properties
editorDefinition.tabs.push({ name: "general_addition", title: "Additional Settings", index: 15 });
//Add three properties into this new tab.
//If tab is empty, then a property is shown in the first "general" tab.
editorDefinition.properties.push({ name: "otherErrorText", tab: "general_addition" });
editorDefinition.properties.push({ name: "indent", tab: "general_addition" });
editorDefinition.properties.push({ name: "width", tab: "general_addition" });
```

If you modify "question" definition, **SurveyCreator.SurveyQuestionEditorDefinition.definition["question"]**, then it will apply to all questions. For example, if you want to hide "enabledIf" tab for all questions, you would have to write the following code
```javascript
var editorDefinition = SurveyCreator.SurveyQuestionEditorDefinition.definition["question"];
//Create a new tabs array without enableIf tab
editorDefinition.tabs = editorDefinition.tabs.filter(function (tab) {
    return tab.name !== 'enableIf';
});
```

If you want to hide the same tab for dropdown question Editor only, then you have to add this tab with visible attribute equals to false. The reason you must to do it in this way, beacause the definition for every element type is merging with all its parent types.
```javascript
var editorDefinition = SurveyCreator.SurveyQuestionEditorDefinition.definition["dropdown"];
// The tabs and properties may be empty for an element type.
// It means that uses the definition from the parent class.
// For example question is the base class for all questions.
if (!editorDefinition.tabs) editorDefinition.tabs = [];
editorDefinition.tabs.push({ name: "enableIf", visible: false });
```

Bellow you will find definitions for base types. Changes to them would apply to all classes inherited from them.

|Base types|Applies to|
|---|---|
|question|To all questions|
|selectbase|For checkbox, dropdown and radiogroup|
|matrixdropdownbase|For matrixdynamic and matrixdropdown|
|matrixdropdowncolumn|To all column types for matrixdropdown and matrixdynamic questions|

To modify **survey** and **page** definition, please use these names in the definition hash object **SurveyCreator.SurveyQuestionEditorDefinition.definition["survey"]**.

Currently there are two types of "complex" Editor types. It is Editors for matrixdropdown and matrixdynamic questions columns and itemvalue Editor.

Here is the list of these complex Editor types

|Name|Applies to|
|---|---|
|matrixdropdowncolumn@default|Editor for default column|
|matrixdropdowncolumn@checkbox|Editor for checkbox column|
|matrixdropdowncolumn@radiogroup|Editor for radiogroup column|
|matrixdropdowncolumn@dropdown|Editor for dropdown column|
|matrixdropdowncolumn@text|Editor for text column|
|matrixdropdowncolumn@comment|Editor for comment column|
|matrixdropdowncolumn@boolean|Editor for boolean column|
|matrixdropdowncolumn@expression|Editor for expression column|
|itemvalues@choices|Editor for itemvalue object for choices properties in checkbox, dropdown and radiogroup questions|
|itemvalues@columns|Editor for itemvalue object for columns property in matrix question|
|itemvalues@rows|Editor for itemvalue object for rows properties in matrix and matrixdropdown questions|

You may modify these definitions jus in the same way.

The code bellow adds a new cell type into columns and define a new Editor definition type.
```javascript
//add file type into matrix columns (run-time)
Survey.matrixDropdownColumnTypes.file = { properties: ["showPreview", "imageHeight", "imageWidth"] };
//add file type into matrix columns (design-time/editor)
SurveyCreator.SurveyQuestionEditorDefinition.definition["matrixdropdowncolumn@file"] = {
    properties: ["showPreview", "imageHeight", "imageWidth"],
        tabs: [ { name: "visibleIf", index: 12 }, { name: "enableIf", index: 20 }]
};
```

Finally, you may show any html on the top or on the bottom of Modal Property Editor by using [onShowPropertyModalEditorDescription](https://surveyjs.io/Documentation/Survey-Creator/?id=surveyeditor#onShowPropertyModalEditorDescription) event.

<div id="modifynewobjects"></div>

## Modify new created objects (Questions, Panels, Pages, Columns and Items)

There are several events that allows you to modify new created objects, for example when end-user drop a question or panel from toolbox into designer surface or create a new page or add a new column or item value in choices or rows properties.

Here is the list of these events

|Event name|Fires on|
|---|---|
|[onQuestionAdded](https://surveyjs.io/Documentation/Survey-Creator/?id=surveyeditor#onQuestionAdded)|Fires on dropping a question from the Toolbox into designer surface|
|[onPanelAdded](https://surveyjs.io/Documentation/Survey-Creator/?id=surveyeditor#onPanelAdded)|Fires on dropping a panel (container) from the Toolbox into designer surface|
|[onPageAdded](https://surveyjs.io/Documentation/Survey-Creator/?id=surveyeditor#onPageAdded)|Fires on pressing "Add New Page" button or on selecting "Add New Page" item in the page selector|
|[onMatrixColumnAdded](https://surveyjs.io/Documentation/Survey-Creator/?id=surveyeditor#onMatrixColumnAdded)|Fires on clicking "Add New" button in the columns Property Editor of matrix dropdown or matrix dynamic questions|
|[onItemValueAdded](https://surveyjs.io/Documentation/Survey-Creator/?id=surveyeditor#onItemValueAdded)|Fires on clicking "Add New" button in the itemvalue Property Editor or on clicking a "+" button during inplace editing checkbox, dropdown and radigroup questions|

The code bellow generated a custom question name as "Question" + "Questiontype" + Counter, for example: QuestionCheckbox1, QuestionDropdown1, QuestionCheckbox2.
```javascript
var questionCounter = {};
//Set the name property different from the default value
creator.onQuestionAdded.add(function (sender, options) {
    var q = options.question;
    var t = q.getType();
    if(!questionCounter[t]) questionCounter[t] = 1;
    var counter = questionCounter[t];
    q.name = "Question" + t[0].toUpperCase() + t.substring(1) + counter;
    questionCounter[t] = counter + 1;
});
```

This code adds a new text question into new created page
```javascript
creator.onPageAdded.add(function (sender, options) {
    options.page.addNewQuestion("text", "Question_" + page.name);
});
```

<div id="accesssurveys"></div>

## Accessing Surveys instance: designer and test surveys

There are two surveys instance inside the Survey Creator. Designer survey that you may see on “Survey Designer” tab and test survey that you may test on “Test Survey” tab.

The designer survey looks and behavior different since it works in designer mode and we are rendering [adorners](#adorners) on its elements. You may get access to it at any time as **creator.survey**.

However, you should be careful and do not cache this instance, since Survey Creator may recreate it, for example after switching into “Survey Designer” tab from “JSON Editor” tab. You may handle the survey recreation by using [onDesignerSurveyCreated](https://surveyjs.io/Documentation/Survey-Creator/?id=surveyeditor#onDesignerSurveyCreated) event.

By accessing the designer survey instance, you may modify the survey as you need it. For example, the following code add a new page, make it current and add a panel with two questions in it.
```javascript
//add New Page and make it current;
creator.addPage();
//get survey instance
var survey = creator.survey;
//Add panel and questions as you would do with the regular survey instance
var panel = survey.currentPage.addNewPanel("address");
panel.title = "Please type your contact information:";
var email = panel.addNewQuestion("text", "email");
email.title = "E-mail:";
email.inputType = "email";
var phone = panel.addNewQuestion("text", "phone");
phone.title = "Phone:";
phone.inputType = "tel";
```

Unlike designer survey, test survey instance exists when end-user switches into “Test Survey” tab. You should handle onTestSurveyCreated event to get its instance and make all required modification.
```javascript
creator.onTestSurveyCreated.add(function(sender, options) {
  options.survey.title = "You are testing survey at: " + new Date().toLocaleTimeString();
});
```

<div id="adorners"></div>

## Adorners ― change element properties on its designer surface

Working on end-user usability issues, we have introduced adorners concepts in spring 2018. End-users were trying to modify SurveyJS elements (questions and panels) directly in designer surface and do not use Property Grid or Question/Panel Editors.

As result the UI has been changed greatly, and additionally, developers got more control under it. You may register your own adorner or remove an existing adorner or remove all of them.
```javascript
//Register a new adorner
SurveyCreator.registerAdorner("adornerName", adornerInstance);
//Remove two existing adorners
SurveyCreator.removeAdorners(["adornerName1", "adornerName2"]);
//The removeAdorners function without parameters, will remove all adorners
SurveyCreator.removeAdorners();
```
<p align="center">

![Survey Creator Adorners](images/builder-adorners.png)

_Dropdown question standard adorners_

</p>

  Here is the list of available adorners

|Name|Applies to|Description|
|---|---|---|
|choices-label|checkbox, radiogroup and dropdown questions|Add, edit and delete choices items|
|choices-draggable|checkbox, radiogroup and dropdown questions|Drag&drop choices items to change their order|
|title|all questions, panel and page|In-place editing question, panel or page title|
|question-actions|all questions|It has several actions as: showing Question Editor, delete question, copy question, make this question as required and others|
|panel-actions|panel|It has several actions as: showing Panel Editor, delete panel, copy panel and others|
|rating-item|rating question|It allows to add a new rating item, delete the existing and change rating item text|
|select-choices|dropdown question|a link that show/hide the choices, so a end-user is able to edit them|
|item-title|multiple text question|In-place editing a multiple text item title|
|label|boolean question|In-place editing of boolean question label|

There are a lot of actions in "question-actions" and "panel-actions" adorners. You may additionally control them by removing the functionality for all of them or for an element by using **onElementAllowOperations** event.

Here is the example of using it:
```javascript
creator.onElementAllowOperations.add(function (sender, options) {
    var obj = options.obj;
    if (!obj || !obj.page) return;
    //if it is panel
    if (obj.getType() == "panel") {
        //disable editing if panel has at least one question
        options.allowDelete = obj.questions.length == 0;
        //disable adding the panel into toolbox if there is no question in it
        options.allowAddToToolbox = obj.questions.length > 0;
        //disable copying the panel  if there is no question in it
        options.allowCopy = obj.questions.length > 0;
    }
    //It it is a text question
    if (obj.getType() == "text") {
        //disable changing type
        options.allowChangeType = false;
    }
    
    //Show/hide "Edit" button for showing modal Question/Panel Editor Window
    //options.allowEdit = false;
    
    //Enable/disable element drag&drop
    //options.allowDragging = false;
    
    //Enable/disable element changing isRequired property
    //options.allowChangeRequired = false

    //Enable/disable element changing titleLocation property to hidden/default
    //options.allowShowHideTitle = false
});
```
