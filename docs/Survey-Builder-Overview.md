# Survey Builder(Editor) Overview

This paper will explain how to use, customize and get the maximum from SurveyJS Editor Library. 

If you want to use Survey Builder on your website with minimum customization, then we recommend you go to [Builder examples](https://surveyjs.io/Examples/Builder/), click on "Edit in Plunker" button and copy the code into your web page. To get more information about integration you may here [Add Survey Builder into your Web Page article](https://surveyjs.io/Documentation/Editor/?id=Add-Survey-Builder-into-your-Web-Page).

If you want to get the most from our Editor, then we hope that the following article helps you. You may read this document from the beginning to the end or just navigate to the topic you are interested in.

* [Supported Platforms and Examples](#platforms)
* [Show Survey Builder(Editor) on the page and set its options](#showeditor_options)
* [Load and Save Survey](#loadsavesurvey)
* [Localization and changing the default strings text](#localization)
* [Multiple languages support](#multiplelanguages)
* [Appearance: Bootstrap and Themes](#appearance)
* [Customize Toolbox](#toolbox)
* [Remove properties from SurveyJS Elements or hide them](#removeproperties)
* [Add properties into SurveyJS Elements](#addproperties)
* [Customize SurveyJS Elements Editor](#elementseditor)
* [Modify new created objects (Questions, Panels, Pages, Columns and Items)](#modifynewobjects)
* [Accessing Surveys instance: designer and test surveys](#accesssurveys)
* [Adorners - change element properties on it's designer surface](#adorners)


<div id="platforms"></div>

## Supported Platforms and Examples

Unlike SurveyJS Library, SurveyJS Editor uses only knockoutjs. The reason we have chosen this framework is simple. It has a tiny size, comparing with other popular modern frameworks, and it works perfectly with angular2+, reactjs and others.

We have created several Quick Start GitHub repositories for different client platforms, to give you an easy start.

| Client Libraries | GitHub Repository |
|---|---|
| [Angular2(3)](https://angular.io/) | [Angular 2 + SurveyJS QuickStart Boilerplate](https://github.com/surveyjs/surveyjs_angular_quickstart) |
| [Angular CLI](https://cli.angular.io/) | [Angular 5 Cli + SurveyJS QuickStart Boilerplate](https://github.com/surveyjs/surveyjs_angular_cli) |
| [Angular 4+](https://cli.angular.io/) | [Angular 4 and SurveyJS library/Editor example](https://github.com/surveyjs/angular4-surveyjs) |
| [React](https://facebook.github.io/react/) | [React + SurveyJS QuickStart Boilerplate](https://github.com/surveyjs/surveyjs_react_quickstart) |
| [Vue.js](https://vuejs.org/) | [SurveyJS + VueJS QuickStart Boilerplate](https://github.com/surveyjs/surveyjs_vue_quickstart) |

We have created a plugin for WordPress and we are working on plugins for other popular CMS. You may use our code to integrate our Library and Builder into these popular CMS.

| Product Name | GitHub Repository | Plugin Site |
|---|---|---|
| WordPress | [Sources for SurveyJS WordPress plugin](https://github.com/surveyjs/surveyjs-wordpress) | [WordPress plugin](https://wordpress.org/plugins/surveyjs/) |

Since, Survey Builder commonly requires integration with existing solutions, we have created several samples for different Server Frameworks.

| Server Frameworks | GitHub Repository | Example Site |
|---|---|---|
| PHP | [Sample PHP backend for SurveyJS library and Editor](https://github.com/surveyjs/surveyjs-php) | [Run demo](https://surveyjs-php.herokuapp.com/) |
|  Asp.Net Core | [Sample .NET Core backend for SurveyJS library and Editor](https://github.com/surveyjs/surveyjs-aspnet-mvc) | [Run demo](https://surveyjs-aspnet-mvc.azurewebsites.net/) |
| NodeJS | [Sample NodeJS backend for SurveyJS library and Editor](https://github.com/surveyjs/surveyjs-nodejs) | [Run demo](https://surveyjs-nodejs.herokuapp.com/) |

<div id="showeditor_options"></div>

## Show Survey Builder on the web page and set its options

The code for creating and rendering the Survey Builder widget with default options can be written literraly as one line:
```javascript
var editor = new SurveyEditor.SurveyEditor("editorDivElementID");
```
You may pass to the constructor the element ID or a link to the DOM element.
            
In many cases you may want to set some options:
```javascript
var editorOptions = {}; //Use default options
var editor = new SurveyEditor.SurveyEditor("editorDivElementID", editorOptions);
```

Finally, if you are going to set events, then it is better to create a widget, set events and then render it. In this case you may have the following code:
```javascript
var editorOptions = {}; //Use default options
var editor = new SurveyEditor.SurveyEditor(null, editorOptions);
//set events here
editor.render("editorDivElementID");
```

There are several options that you may set to change the Survey Builder (Editor) behavior.

| Option Name | Description |
|---|---|
|_options = {_||
|_generateValidJSON: false,_| The default value of this options is true. By default, the valid JSON is generated. You may want to use non-standard, but more readable format, [JSON5](https://json5.org/).|
|_showJSONEditorTab: false,_|Set this option to false to hide the JSON Tab.|
|_showTestSurveyTab: false,_|Set this option to false to hide the Survey Test Tab.|
|_showEmbededSurveyTab: true,_|Set this option to true to show the Survey Embedded Tab. This tab is hidden by default. It shows how to integrate the survey into another web page.|
|_showTranslationTab: true,_|Set this option to true to show the Translation Tab. This tab is hidden by default. It allows to edit all localizable strings for several languages on one page. It allows to import/export into from csv file.|
|_showPropertyGrid: false,_|Set this option to false to hide the property grid on the right. It is shown by default.|
|_questionTypes: ["text", "checkbox", "radiogroup", "dropdown"],_|Use this option to define question types you want to see on the Toolbox. Go to [Customize Toolbox(#toolbox) section to get more information.|
|_isAutoSave: true,_|Set this options to true and Builder (Editor) will call the "save callback" function on every change. By default, the "Save" button is shown. For more information, please go to [Load and Save Survey](#loadsavesurvey) section.|
|_isRTL: true,_|Set this options to true for Right-to-Left web sites.|
|_designerHeight: 1200px,|Set the designer heigth to the specific value.|
|_showPagesToolbox: false,_|If you are going to allow your users creating only one page surveys, then set this property to false. It will hide the pages toolbox.|
|_useTabsInElementEditor: false,_|If you want to tabs instead of accordion in the element popup editor, then set this property to true. It will change accordion to tab control.|
|_showState: false,_|Set it to true to show the state in the toolbar (saving/saved).|
|_};_||

<div id="loadsavesurvey"></div>

## Load and Save Survey

To load the Survey Definition into the Survey Builder you have to simply set it's text property. The next line load the Survey Definition from the local storage:
```javascript
//Load the survey definition from a local storage
editor.text = window.localStorage.getItem("YourStorageName") || "";
```
When Survey Builder needs to save the data it calls the **saveSurveyFunc** callback function. As soon as you assign a function to this callback, the "Save" button will appeare on the Builder Toolbox.
```javascript
editor.saveSurveyFunc = function(saveNo, callback) {
    //Save the survey definition into a local storage
    //window.localStorage.setItem("YourStorageName", editor.text);
    !!callback && callback(saveNo, true);
};
```

The first line in this callback function is obvious. The second one tells Survey Builder that the saving operation **#saveNo** was successfully execuated. Set the last parameter of the callback function to **false**, if an error during saving was happend.

The reason it is done as a callback function and we have a **saveNo** parameter (the numeric parameter that increase with every saving operation, starting from 1), because in a real world application, you will likely save the Survey definition into your Storage/Database. You will make an asyn call of your web service. It means that if two saving operations are happened almost at the same time, the last operation may be processed by your server code faster than the previous one. In this case you will have to ignore all saving operations that has the **saveNo** parameter less than you have already proccessed.

Here is the example of **saveSurveyFunc** callback implementation (with help of jQuery magic).
```javascript
editor.saveSurveyFunc = function (saveNo, callback) {
    $.ajax({
        url: "UrlToYourWebService",
        type: "POST",
        data: {
            surveyId: yourEditUniqueSurveyI,
            surveyText : editor.text
        },
        success: function (data) {
            callback(saveNo, data.isSuccess);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            callback(saveNo, false);
            alert(thrownError);
        }
    });
}
```

The modern editors, for example the Editor on this site, do not have a "Save" button. They are saving the changes automatically after every change with a small delay. Survey Builder has this functionality as well. You have to set **isAutoSave** property to true (default is false). 

Optionally, you may ask Survey Builder to show the current status on the Toolbar: Saving/Saved/Error. Set the property showState to true as well.
            
```javascript
editor.isAutoSave = true;
editor.showState = true;
```

<div id="localization"></div>

## Localization and changing the default strings text

The strings localization is supported by the community. Survey Builder (Editor) strings are localized on 7 languages so far. You may check the current localization progress on our [GitHub repo](https://github.com/surveyjs/editor/tree/master/src/localization). SurveyJS Library (Runner) itself, are localized on 24 languages.

To change the current "en" locale to another one, you will have to write one line of code:
```javascript
//Make french locale active
SurveyEditor.editorLocalization.currentLocale = "fr";```
        If you want to change a text of any Survey Editor element, then you may use the following code:
        ```javascriptvar curLocale = SurveyEditor.editorLocalization.currentLocale;
// get the current locale strings object
var curStrings = SurveyEditor.editorLocalization.getLocale("");
//change the text for visible property in Property Grid
curStrings.p.visible = "Is visible";
//change the text for visible property in Modal Editor
curStrings.pe.visible = "Is element visible?";
//change the text for visible property in Modal Editor
curStrings.ed.jsonEditor = "Edit As Text";
```

All localizable strings you may find in our [GitHub repo in english.ts file](https://github.com/surveyjs/editor/blob/master/src/localization/english.ts).

Here is the link on [localization example](https://surveyjs.io/Examples/Builder/?id=localization) on our site.

<div id="multiplelanguages"></div>

## Multiple languages support

You may build one survey for several languages. The default strings, like text for buttons “Next” and “Previous” are translated on many languages. All you need to do is to set the **survey.locale** property in run-time into needed locale, as “fr” or “es” or any other from over twenty languages that our users have localized and you are done.

However, except the default strings, there are strings that you must localize in the survey itself, like page or question title, dropdown or checkbox choices, text errors and so on. Users of SurveyJS Builder integrated into your app must localize them by themselves. It is not the easy task for a large survey. However, you may help them here.

First of all, you may limited the number of languages they may choose in the **survey.locale** property and in **Translation** tab. It can be done via this code 
```javascript
Survey.surveyLocalization.supportedLocales = ["en", "de", "es", "fr"];
```

And the most important, is to show the **Translation** tab. It would allow your Builder (Editor) users to see all localizable strings on one page and localize them into the needed languages. Please go to “Translation” tab in [multiple languages example](https://surveyjs.io/Examples/Builder/?id=multiplelanguages).

<div id="appearance"></div>

## Appearance: Bootstrap and Themes

Initially, we were using bootstrap functionality, to show modal windows. We have made SurveyJS Editor bootstrap free on April 2018. Since that you may use bootstrap, only if you need it, for example you have a site built on bootstrap. It stopped to be a requirement.

Right now, you have two options. You may use the bootstrap or use our themes. SurveyJS Editor is using bootstrap by default, all you need is to include the bootstrap css into your web page. If you want to set one of our theme, then you have to call the following function:
```javascript
SurveyEditor.StylesManager.applyTheme("orange");
```
The following themes are available:

|Theme name|Required library|
|---|---|
|default||
|bootstrap|Required bootstrap|
|orange||
|darkblue||
|darkrows||
|stone||
|winter||
|winterstone||
            
You may change any our theme. Please review [this demo](https://surveyjs.io/Examples/Builder?id=editor-custom-theme) to see how to do it.

<div id="toolbox"></div>
            
## Customize Toolbox

You may fully customize Toolbox as you want. You may add/remove any item on it (question/panel types), change items names and icons, the generated json and categories and so on.

<div id="toolbox-limit"></div>

### Limit the default question types

The most common task is to show only the part of the available question types on the Toolbox.

Here is the list of available default question types.

|Question Type|Description|
|---|---|
|boolean|A boolean question|
|checkbox|Checkbox question, for multiple choices|
|comment|Comment question, a multiline textbox|
|dropdown|Dropdown question, a select widget|
|expression|Expression question. It is a read-only question. It calculates value based on epxression property|
|file|File question. It uses for uploading file(s)|
|html|Html question. It renders its html property. Unlike other questions it doesn't have value and title.|
|matrix|Simple matrix question. It has one choice per row|
|matrixdropdown|Matrix dropdown question. You may use a dropdown, checkbox, radiogroup, text and comment and others questions as a cell editors|
|matrixdynamic|Matrix dymanic question. You may use a dropdown, checkbox, radiogroup, text and comment questions as a cell editors. An end-user may dynamically add/remove rows, unlike in matrix dropdown question|
|multipletext|Multiple text question. Several text inputs in one question can be placed in one or several columns|
|panel|Container element. It may contain questions and other panels.|
|paneldynamic|Panel dymanic question. You setup the template panel, but adding elements (any question or a panel) and assign a text to it's title, and this panel will be used as a template on creating dynamic panels. The number of panels is defined by panelCount property. An end-user may dynamically add/remove panels, unless you forbidden this.|
|radiogroup|Radiogroup question. A single choice question.|
|rating|Rating question|
|text|Input text question|

By default, all these question types are shown on the Toolbox. You may show only some of them by using the following code:
```javascript
var editorOptions = {
    questionTypes: ["text", "checkbox", "radiogroup", "dropdown"]
};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
```

<div id="toolbox-customwidgets"></div>

### Add custom widgets

To add a custom widget to your Toolbox, all you need to do is to include the third-party library scripts and our custom widget scripts on your web page. Survey Builder (Editor) will recognize custom widgets as new question types and add them into Toolbox. Please review [this example](https://surveyjs.io/Examples/Builder/?id=customwidgets).
                
<div id="toolbox-existing"></div>

### Add existing Elements from designer into Toolbox

By default, there is a “Add to Toolbox” button on an element (question/panel) in the designer. Your end-user may customize question/panel as he/she wants, add it into toolbox and then drop it on another page.

You may go even further and persist the current Toolbox state, so the user may use these custom toolbox items for building other surveys.

Let’s talk here about available options that you have.

By default, a user may add only 3 elements from the designer. If there are already 3 custom/copied elements on the Toolbox, then on adding a new one, the first added element will be removed. To change the number of copied elements your user may have, you must set this property to the value you need:
```javascript
editor.toolbox.copiedItemMaxCount = 10;
```
To disable the ability of adding an element from designer into toolbox you will have to use **onElementAllowOptions** event. Here is the example:

```javascript
editor.onElementAllowOptions.add(function(sender, options){
    options.allowAddToToolbox = false;
});
```
If you want to persist the copied items on the Toolbox for your end-user for another session or another survey, then you must use the copiedJsonText properties:

```javascript
var savedItems = editor.toolbox.copiedJsonText; //save into localstorage or your database
//....
//Restored savedItems from localstorage or your database.
editor.toolbox.copiedJsonText = savedItems;
```

<div id="toolbox-categories"></div>

### Toolbox categories

By default there is one category in the Toolbox (General) and its title is not shown. You may change the category of the default question types by calling **changeCategory** function:
```javascript
editor.toolbox.changeCategory("panel", "Panels");
editor.toolbox.changeCategory("paneldynamic", "Panels");
```
The better way is to use changeCategories function. It will rebuild toolbox presentation model just one time:
```javascript
editor.toolbox.changeCategories([
    { name: "panel", category: "Panels" }, 
    { name: "paneldynamic", category: "Panels" }, 
    { name: "matrix", category: "Matrix" }
]);
```
You may change the name of the default (General) category as any other localizable string. Please make sure to run this code before creating the Editor.
```javascript
SurveyEditor.defaultStrings.ed.toolboxGeneralCategory = "Common";
```
Please go to the [Survey Toolbox categories example](https://surveyjs.io/Examples/Builder/?id=toolboxcategories) to see how it works.

<div id="toolbox-property"></div>

### Full control via editor.toolbox property

Edtor **toolbox** property contains the information about items are shown Toolbox and functions and properties to allow adding/deleting/changing items.

Here are properties of the item object:

|Property Name|Description|
|---|---|
|name| The required attribute. The unique item id. By default it is a question type|
|iconName|The optional attribute. The icon name. The default value is 'icon-default'. It is 'icon-' + [question_type] for a standard Survey question|
|json|The required attribute. A new element on designer is created based on this json. The json should has at least the 'type' string property. You may change it to set other question properties by default.|
|title|The toolbox item title. For default questions, titles are defined in localization files. Here is the example of changing title for **comment** question: _SurveyEditor.defaultStrings.qt.comment = "Multiple line input";_ Please go to <a href="#localization">Localization section</a> to get more information.|
|isCopied|true if the item is created by clicking on 'Add to Toolbox' question menu item.|
|category|The category to which this item is belong to. It is empty (default value) then category is “General”. Please read topic Toolbox Categories in this section for more information.|
                
Here is the list of functions and properties for **editor.toolbox** object:

---
**jsonText**

The string property. Allows to get and set all toolbox items as a string.

---
**copiedJsonText**

The string property. Allows to get and set copied questions as a string. End-user may add a queston into toolbox by clicking on 'Add to Toolbox' question menu item.

---
**items**

Returns the list of current toolbox items. Toolbox item properties are described above.

---
**copiedItems**

Returns the list of current copied toolbox items. End-user may add a queston into toolbox by clicking on 'Add to Toolbox' question menu item

---
**addItem(item)**

Add a new item into toolobx. If the item with the same name already exists, then replace it. The current code will add a new item into Toolbox 
```javascript
//Add all countries question into toolbox
editor.toolbox.addItem({
    name: "countries",
    isCopied: true,
    iconName: "icon-default",
    title: "All countries",
    json: {
        "type": "dropdown",
        optionsCaption: "Select a country...",
        choicesByUrl: {
            url: "https://restcountries.eu/rest/v2/all"
        }
    }
});
```
---
**addItems(items[, clearAll])**

Add the list of toolbox items into toolbox. If an optional parameter clearAll is set to true, all previous items will be removed.

---
**addCopiedItem(question)**

Add a question into Toolbox as a copied item.

---
**getItemByName(name)**

Returns toolbox item by its name. Returns null if there is no toolbox item with this name. The following code change the default json for radiogroup
```javascript
editor.toolbox.getItemByName("radiogroup").json = {
    "type": "radiogroup",
    choices: ["Blue", "Red"]
};
```
---
**clearItems()**

Remove all items from the toolbox.

---
**clearCopiedItems()**

Remove all copied items from the toolbox.

---
**replaceItem(item)**

Find an existing item by item.name and replace its properties. Return false if the item with the same name doesn't exist.

---
**removeItem(name)**

Find an existing item by name parameter and remove it. Here is the example of removing complex matrix questions
```javascript
editor.toolbox.removeItem("matrixdropdown");
editor.toolbox.removeItem("matrixdynamic");
```
---
**activeCategory**

Set and get and active category. This property doesn't work if allowExpandMultipleCategories is true. Its default value is empty. You should have at least one category in your items that is not empty or 'General'.

---
**allowExpandMultipleCategories**

Set it to true, to allow end-user to expand more than one category. There will no active category in this case

---
**changeCategory(name, newCategory)**

Change the category of the toolbox item

---
**changeCategories(changedItems)**

Change categories for several toolbox items. changedItems parameter is an array of objects {name: "your toolbox item name", category: "new category name"}. Here is the example
```javascript
editor.toolbox.changeCategories([{ name: "panel", category: "Panels" }, { name: "paneldynamic", category: "Panels" }, { name: "matrix", category: "Matrix" }]);
```
---

Please review and play with the [Survey Toolbox customization](https://surveyjs.io/Examples/Builder/?id=toolboxcustomization) example.


<div id="removeproperties"></div>

## Remove properties from SurveyJS Elements or hide them

The most popular task is to remove or hide existing properties from the Survey Builder Editor.

There is a difference between removing and hiding. If you remove the property, then SurveyJS will not be able to restore it from JSON and save it back to JSON. SurveyJS will not have any information about it. You may still do it, if you know that you do not need this property.

Here is the example of removing the description and choicesUrl properties
```javascript
//remove a property from the question class and as result from all questions
Survey.JsonObject.metaData.removeProperty("question", "description");
//remove choicesByUrl from checkbox, dropdown and radiogroup questions
Survey.JsonObject.metaData.removeProperty("selectbase", "choicesUrl");
```

You may make these properties invisible in Survey Builder (Editor) and still be able to load/save them in JSON by setting their visible property to false
```javascript
//make a property, from the question class and as result from all questions, invisible
Survey.JsonObject.metaData.findProperty("question", "description").visible = false;
//make choicesByUrl property from checkbox, dropdown and radiogroup questions invisible
Survey.JsonObject.metaData.findProperty("selectbase", "choicesUrl").visible = false;
```
This work perfect, if you need to hide several properties. If the list of properties you want to make invisible is large, you may use survey **onCanShowProperty** event.
```javascript
editor.onCanShowProperty.add(function (sender, options) {
    //check options.obj.getType() if needed. if (options.obj.getType() == "survey")
    options.canShow = myBlackList.indexOf(options.property.name) < 0; //show if it is not in a blacklist
    //You may do opposite and use the white list
    //options.canShow = myWhiteList.indexOf(options.property.name) > -1; //show if it is in a white list
});
```

You may review the [Remove properties](https://surveyjs.io/Examples/Builder/?id=removeproperties) example.


<div id="addproperties"></div>
## Add properties into SurveyJS Elements

You may add a new property into all question types, panel, page and survey. If you add a property into base type, like “question” then it will be available in all its successors. “questionbase” is base class for all questions and “question” is base class for all questions that has a value property. “html” question is derived from “questionbase” and not “question” type.

Additionally, you may customize checkbox, radiogroup and dropdown choices property, matrix rows and columns properties and matrix dropdown rows property. They are all the same type: an array of “itemvalue” objects.

Finally, “dropdowncolumn” object is used in columns properties of “matrixdropdown” and “matrixdynamic”. The are both derived from “matrixdropdownbase” type.</p>
Let’s review several examples

```javascript
//add a property to the base question class and as result to all questions
//It has name: "tag", type "number" and the default value is 0
Survey.JsonObject.metaData.addProperty("question", { name: "tag:number", default: 0 });
//Survey.JsonObject.metaData.addProperty("question", { name: "tag", type: "number" default: 0 }); //you may set the type using this decrlaration as well
//The following code adds a description property to the survey. The property type is html.
//It means that html property editor is used to set its value in the Survey Editor
Survey.JsonObject.metaData.addProperty("survey", "description:html");
//Add a colour string property into page. The user will be able to select only predefined values from the dropdown
//The default property type is "string", we may not set it. The default value is not set and it is undefined by default.
Survey.JsonObject.metaData.addProperty("survey", {name: "color", choices: ["blue", "red", "green"] });
```

Here is the available attributes and callback functions in the property definition

---
**name**

The property name. It is the only required property

---
**type**

The property type. The list of avaiable property types you may in the next table.

---
**default**

It is an optional attribute. The library do not serialize the default value into JSON. By default, the empty text is default for string value, 0 is for numeric and false for boolean. You may change it by using this attribute.
```javascript
{ name: "mode", default: "edit"}
{ name: "showTitle:boolean", default: true }
```
---
**choices**

It is an optional attribute. It makes sense for string and numeric property types only. If the choices attribute is set, the property editor for the property becomes dropdown. You may assign the array of values to this attribute or a function that will return the array of strings or numbers.
```javascript
{ name: "showProgressBar", default: "off", choices: ["off", "top", "bottom"] }
//returns the supported languages in the surveyjs library.
{ name: "locale", choices: function() { return Survey.surveyLocalization.getLocales(); } }
```
---
**isRequired**

An optional Boolean property. The default value is false. Set it to true, if you want to require from a user to set this property in the Survey Builder (Editor). You may use “!” mark before property name as an alternative declaration. For example: “!name” or “!type”.

---
**isSerializable**

An optional Boolean property. If you do not want to serialize this property into JSON then set its value to false. It is true by default.

---
**visible**

An optional Boolean property. By default, it is true. Set it to false, if you want to hide this property from the Survey Builder (Editor)

---
**readOnly**

An optional Boolean property. By default, it is false. Set it to true, if you want to make this property disabled in the Survey Builder (Editor) inputs. 

The following code makes the choices and matrix rows/columns value property read-only.
```javascript
Survey.JsonObject.metaData.findProperty('itemvalue', "value").readOnly = true;
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
```javascript
{ name: "myValue", onSetValue: function (obj, value, jsonConverter) {obj.myValue = value; /* Perform some actions */ }}
```
---

Avaliable property types. Every property type has a correspondet Property Editor.

|Name|Description|
|---|---|
|string|It is the default value type. Property editor is a text input. "myProperty" and "myProperty:string" - give the same result.|
|boolean|Boolean type. Property editor is a checkbox.|
|number|Numeric type. Property editor is a text input|
|text||String type. Property editor is text input with an optional modal window for entering large text|
|html|string type. Property editor is text input with an optional modal window for entering large text. In the future modal window becomes a very simple html editor.|
|itemvalues|Array of ItemValue object. ItemValue object has two properties {value: any, text: string}. Dropdown, checkbox and radiogroup questions has choices property with itemvalues type.|
|matrixdropdowncolumns|Columns for matrixdropdown and matrixdynamic questions|
|textitems|items property of multiple text question has this type|
|triggers|Survey triggers property has this type|
|validators|Question validators property has this type|

You may review the [Add properties](https://surveyjs.io/Examples/Builder/?id=addproperties) example.

<div id="elementseditor"></div>

## Customize SurveyJS Elements Editor</h2>

End-users may change SurveyJS elements properties by using Element Editor Modal Window. It is more user friendly and many our customers [hide the property grid](#showeditor_options) on the right and left Element Editor as the only option for element modification.

<p align="center">

![Radio group question Editor](https://github.com/surveyjs/editor/blob/master/docs/images/builder-question-editor.png)

_The radiogroup question Editor_

</p>

If you want to hide any property from the Editor, then you may simply remove or hide the property as described in [this section](#removeproperties).

You will have to work with **SurveyEditor.SurveyQuestionEditorDefinition** object, if you want to remove, add or reorder tabs and add a property or change its tab or location.

The code bellow adds two new tabs into dropdown question Editor.
```javascript
var editorDefinition = SurveyEditor.SurveyQuestionEditorDefinition.definition["dropdown"];
// The tabs and properties may be empty for an element type. It means that uses the definition from the parent class.
// For example question is the base class for all questions.
if (!editorDefinition.tabs) editorDefinition.tabs = [];
if (!editorDefinition.properties) editorDefinition.properties = [];
//Add a new tab correctAnswer. Since the name the same as the property correctAnswer, the editor for property correctAnswer will be shown on the tab.
editorDefinition.tabs.push({ name: "correctAnswer", index: 12 });
//Add a new tab, that doesn't contains properties
editorDefinition.tabs.push({ name: "general_addition", title: "Additional Settings", index: 15 });
//Add three properties into this new tab. If tab is empty, then a property is shown in the first "general" tab.
editorDefinition.properties.push({ name: "otherErrorText", tab: "general_addition" });
editorDefinition.properties.push({ name: "indent", tab: "general_addition" });
editorDefinition.properties.push({ name: "width", tab: "general_addition" });
```

If you modify "question" definition, **SurveyEditor.SurveyQuestionEditorDefinition.definition["question"]**, then it will apply to all questions. For example, if you want to hide "enabledIf" tab for all questions, you would have to write the following code
```javascript
var editorDefinition = SurveyEditor.SurveyQuestionEditorDefinition.definition["question"];
//Create a new tabs array without enableIf tab
editorDefinition.tabs = editorDefinition.tabs.filter(function (tab) {
    return tab.name !== 'enableIf';
});
```

If you want to hide the the same tab for dropdown question Editor only, then you have to add this tab with visible attribute equals to false. The reason you must to do it in this way, beacause the definition for every element type is merging with all its parent types.
```javascript
var editorDefinition = SurveyEditor.SurveyQuestionEditorDefinition.definition["dropdown"];
// The tabs and properties may be empty for an element type. It means that uses the definition from the parent class.
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

To modify **survey** and **page** definition, please use these names in the definition hash object **SurveyEditor.SurveyQuestionEditorDefinition.definition["survey"]**.

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
SurveyEditor.SurveyQuestionEditorDefinition.definition["matrixdropdowncolumn@file"] = {
    properties: ["showPreview", "imageHeight", "imageWidth"],
        tabs: [ { name: "visibleIf", index: 12 }, { name: "enableIf", index: 20 }]
};
```

Finally, you may show any html on the top or on the bottom of Modal Property Editor by using [onShowPropertyModalEditorDescription](https://surveyjs.io/Documentation/Builder/?id=surveyeditor#onShowPropertyModalEditorDescription) event.

<div id="modifynewobjects"></div>

## Modify new created objects (Questions, Panels, Pages, Columns and Items)

There are several events that allows you to modify new created objects, for example when end-user drop a question or panel from toolbox into designer surface or create a new page or add a new column or item value in choices or rows properties.

Here is the list of these events

|Event name|Fires on|
|---|---|
|[onQuestionAdded](https://surveyjs.io/Documentation/Builder/?id=surveyeditor#onQuestionAdded)|Fires on dropping a question from the Toolbox into designer surface|
|[onPanelAdded](https://surveyjs.io/Documentation/Builder/?id=surveyeditor#onPanelAdded)|Fires on dropping a panel (container) from the Toolbox into designer surface|
|[onPageAdded](https://surveyjs.io/Documentation/Builder/?id=surveyeditor#onPageAdded)|Fires on pressing "Add New Page" button or on selecting "Add New Page" item in the page selector|
|[onMatrixColumnAdded](https://surveyjs.io/Documentation/Builder/?id=surveyeditor#onMatrixColumnAdded)|Fires on clicking "Add New" button in the columns Property Editor of matrix dropdown or matrix dynamic questions|
|[onItemValueAdded](https://surveyjs.io/Documentation/Builder/?id=surveyeditor#onItemValueAdded)|Fires on clicking "Add New" button in the itemvalue Property Editor or on clicking a "+" button during inplace editing checkbox, dropdown and radigroup questions|

The code bellow generated a custom question name as "Question" + "Questiontype" + Counter, for example: QuestionCheckbox1, QuestionDropdown1, QuestionCheckbox2.
```javascript
var questionCounter = {};
//Set the name property different from the default value
editor.onQuestionAdded.add(function (sender, options) {
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
editor.onPageAdded.add(function (sender, options) {
    options.page.addNewQuestion("text", "Question_" + page.name);
});
```

<div id="accesssurveys"></div>

## Accessing Surveys instance: designer and test surveys

There are two surveys instance inside the Builder (Editor). Designer survey that you may see on “Survey Designer” tab and test survey that you may test on “Test Survey” tab.

The designer survey looks and behavior different since it works in designer mode and we are rendering [adorners](#adorners) on its elements. You may get access to it at any time as **editor.survey**.

However, you should be careful and do not cache this instance, since Builder (Editor) may recreate it, for example after switching into “Survey Designer” tab from “JSON Editor” tab. You may handle the survey recreation by using [onDesignerSurveyCreated](https://surveyjs.io/Documentation/Builder/?id=surveyeditor#onDesignerSurveyCreated) event.

By accessing the designer survey instance, you may modify the survey as you need it. For example, the following code add a new page, make it current and add a panel with two questions in it.
```javascript
//add New Page and make it current;
editor.addPage();
//get survey instance
var survey = editor.survey;
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
editor.onTestSurveyCreated.add(function(editor, options) {
  options.survey.title = "You are testing survey at: " + new Date().toLocaleTimeString();
});
```

<div id="adorners"></div>

## Adorners - change element properties on it's designer surface

Working on end-user usability issues, we have introduced adorners concepts in spring 2018. End-users were trying to modify SurveyJS elements (questions and panels) directly in designer surface and do not use Property Grid or Question/Panel Editors.

As result the UI has been changed greatly, and additionally, developers got more control under it. You may register your own adorner or remove an existing adorner or remove all of them.
```javascript
//Register a new adorner
SurveyEditor.registerAdorner("adornerName", adornerInstance);
//Remove two existing adorners
SurveyEditor.removeAdorners(["adornerName1", "adornerName2"]);
//The removeAdorners function without parameters, will remove all adorners
SurveyEditor.removeAdorners();
```
<p align="center">

![SurveyJS Builder Adorners](https://github.com/surveyjs/editor/blob/master/docs/images/builder-adorners.png)

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
|item-title|multiple text question|In-place editing a mutliple text item title|
|label|boolean question|In-place editing of boolean question label|

There are a lot of actions in "question-actions" and "panel-actions" adorners. You may additionally control them by removing the functionality for all of them or for an element by using **onElementAllowOperations** event.

Here is the example of using it:
```javascript
editor.onElementAllowOperations.add(function (editor, options) {
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
    //options.allowEdit
    //Enable/disable element drag&drop
    //options.allowDragging
});
```