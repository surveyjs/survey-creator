# Survey Creator / Form Builder Overview

If you want to use Survey Creator on your website with minimum customization, then we recommend you go to [Survey Creator examples](https://surveyjs.io/Examples/Survey-Creator/), click on "Edit in Plunker" button and copy the code into your web page. To get more information about integration you may here [Add Survey Creator / Form Builder into your Web Page article](https://surveyjs.io/Documentation/Survey-Creator/?id=Add-Survey-Builder-into-your-Web-Page).

Please visit our [what's new page](https://surveyjs.io/WhatsNew) to see what we have added recently or what is coming soon.

If you want to get the most from our Survey Creator, then we hope that the following article helps you. You may read this document from the beginning to the end or just navigate to the topic you are interested in.

* [Supported Platforms and Examples](#platforms)
* [Show Survey Creator on the page and set its options](#show_survey_creator_options)
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
* [Adorners ― change element properties on its designer surface](#adorners)


<div id="platforms"></div>

## Supported Platforms and Examples

Unlike SurveyJS Library, Survey Creator uses only knockoutjs. The reason we have chosen this framework is simple. It has a tiny size, comparing with other popular modern frameworks, and it works perfectly with Angular, reactjs and others.

We have created several Quick Start GitHub repositories for different client platforms, to give you an easy start.

| Client Libraries | GitHub Repository |
|---|---|
| [Angular CLI](https://cli.angular.io/) | [Angular 5 Cli + SurveyJS QuickStart Boilerplate](https://github.com/surveyjs/surveyjs_angular_cli) |
| [React](https://facebook.github.io/react/) | [React + SurveyJS QuickStart Boilerplate](https://github.com/surveyjs/surveyjs_react_quickstart) |
| [Vue.js](https://vuejs.org/) | [SurveyJS + VueJS QuickStart Boilerplate](https://github.com/surveyjs/surveyjs_vue_quickstart) |

We have created a plugin for WordPress and we are working on plugins for other popular CMS. You may use our code to integrate our Library and Survey Creator into these popular CMS.

| Product Name | GitHub Repository | Plugin Site |
|---|---|---|
| WordPress | [Sources for SurveyJS WordPress plugin](https://github.com/surveyjs/surveyjs-wordpress) | [WordPress plugin](https://wordpress.org/plugins/surveyjs/) |

Since, Survey Creator commonly requires integration with existing solutions, we have created several samples for different Server Frameworks.

| Server Frameworks | GitHub Repository | Example Site |
|---|---|---|
| PHP | [Sample PHP backend for SurveyJS library and Survey Creator](https://github.com/surveyjs/surveyjs-php) | [Run demo](https://surveyjs-php.herokuapp.com/) |
|  Asp.Net Core | [Sample .NET Core backend for SurveyJS library and Survey Creator](https://github.com/surveyjs/surveyjs-aspnet-mvc) | [Run demo](https://surveyjs-aspnet-mvc.azurewebsites.net/) |
| NodeJS | [Sample NodeJS backend for SurveyJS library and Survey Creator](https://github.com/surveyjs/surveyjs-nodejs) | [Run demo](https://surveyjs-nodejs.herokuapp.com/) |

<div id="show_survey_creator_options"></div>

## Show Survey Creator / Form Builder on the web page and set its options

The code for creating and rendering the Survey Creator widget with default options can be written literraly as one line:
```javascript
var creator = new SurveyCreator.SurveyCreator("surveyCreatorDivElementID");
```
You may pass to the constructor the element ID or a link to the DOM element.
            
In many cases you may want to set some options:
```javascript
var options = {}; //Use default options
var creator = new SurveyCreator.SurveyCreator("surveyCreatorDivElementID", options);
```

Finally, if you are going to set events, then it is better to create a widget, set events and then render it. In this case you may have the following code:
```javascript
var options = {}; //Use default options
var creator = new SurveyCreator.SurveyCreator(null, options);
//set events here
creator.render("surveyCreatorDivElementID");
```

There are several options that you may set to change the Survey Creator behavior.

| Option Name | Description |
|---|---|
|_options = {_||
|_generateValidJSON: false,_| The default value of this options is true. By default, the valid JSON is generated. You may want to use non-standard, but more readable format, [JSON5](https://json5.org/).|
|_showJSONEditorTab: false,_|Set this option to false to hide the JSON Tab.|
|_showTestSurveyTab: false,_|Set this option to false to hide the Survey Test Tab.|
|_showEmbeddedSurveyTab: true,_|Set this option to true to show the Survey Embedded Tab. This tab is hidden by default. It shows how to integrate the survey into another web page.|
|_showTranslationTab: true,_|Set this option to true to show the Translation Tab. This tab is hidden by default. It allows to edit all localizable strings for several languages on one page. It allows to import/export into from csv file.|
|_showLogicTab: true,_|Set this option to true to show the Logic Tab. This tab is hidden by default. It allows to view and edit the survey logic (expressions) in one place.|
|_showElementEditorAsPropertyGrid: true_|Set this property to false to show property grid in old style, without categories, and allow to show Element Editor as modal window.|
|_showPropertyGrid: false,_|Set this option to false to hide the property grid on the right. It is shown by default.|
|_questionTypes: ["text", "checkbox", "radiogroup", "dropdown"],_|Use this option to define question types you want to see on the Toolbox. Go to [Customize Toolbox](#toolbox) section to get more information.|
|_isAutoSave: true,_|Set this options to true and Survey Creator will call the "save callback" function on every change. By default, the "Save" button is shown. For more information, please go to [Load and Save Survey](#loadsavesurvey) section.|
|_isRTL: true,_|Set this options to true for Right-to-Left web sites.|
|_designerHeight: '1200px',_|Set the designer heigth to the specific value.|
|_showPagesToolbox: false,_|If you are going to allow your users creating only one page surveys, then set this property to false. It will hide the pages toolbox.|
|_useTabsInElementEditor: true,_|If you want to tabs instead of accordion in the element popup editor, then set this property to true. It will change accordion to tab control.|
|_showPagesInTestSurveyTab: false,_|Set this property to false to hide the page selector in the "Test Survey" tab.|
|_showPagesInTestSurveyTab: false,_|Set this property to false to hide the page selector in the "Test Survey" tab.|
|_showDefaultLanguageInTestSurveyTab: "auto",_|Before v1.1.3 the default value was _true_. The language selector was visible by default and allows to select all available languages. You could set this property to _false_ to hide it. Since v1.1.3 the behavior has been changed. The default value is _"auto"_ and the selector is visible when there are more than one language in at least one localizable string in the survey. If you set it to _true_ or _"all"_ it will be shown always. Setting it to _"all"_ will display all available languages (30+) in the selector, while _"auto"_ and _true_ only languages that are used in the current survey. Set it to _false_ to hide the language selector.|
|_showInvisibleElementsInTestSurveyTab: false_|Set this property to false to hide the checkbox, that allow to show invsible elements: questions/panels/pages in the "Test Survey" tab.|
|_showTitlesInExpressions: false_|Set this property to true if you want to show titles instead of names in expression editor.|
|_hideExpressionHeaderInLogicTab: true_|Set this property to true to hide the expression header text and expand/collapse button in editing item in logic tab.|
|_allowControlSurveyTitleVisibility: false_|Set this property to false if you want to hide the expand/collapse button for showing survey logo/title.|
|_showSurveyTitle: "never"_|Set this property to "never" to hide survey title and logo from designer and to "always" to show it all the time and to "ifentered" to show when the logo or title is not empty.|
|_};_||

<div id="loadsavesurvey"></div>

## Load and Save Survey

To load the Survey Definition into the Survey Creator you have to simply set its text property. The next line load the Survey Definition from the local storage:
```javascript
//Load the survey definition from a local storage
creator.text = window.localStorage.getItem("YourStorageName") || "";
```
When Survey Creator needs to save the data it calls the **saveSurveyFunc** callback function. As soon as you assign a function to this callback, the "Save" button will appeare on the Survey Creator Toolbox.
```javascript
creator.saveSurveyFunc = function(saveNo, callback) {
    //Save the survey definition into a local storage
    //window.localStorage.setItem("YourStorageName", creator.text);
    !!callback && callback(saveNo, true);
};
```

The first line in this callback function is obvious. The second one tells Survey Creator that the saving operation **#saveNo** was successfully execuated. Set the last parameter of the callback function to **false**, if an error during saving was happened.

The reason it is done as a callback function and we have a **saveNo** parameter (the numeric parameter that increase with every saving operation, starting from 1), because in a real world application, you will likely save the Survey definition into your Storage/Database. You will make an asyn call of your web service. It means that if two saving operations are happened almost at the same time, the last operation may be processed by your server code faster than the previous one. In this case you will have to ignore all saving operations that has the **saveNo** parameter less than you have already processed.

Here is the example of **saveSurveyFunc** callback implementation (with help of jQuery magic).
```javascript
creator.saveSurveyFunc = function (saveNo, callback) {
    $.ajax({
        url: "UrlToYourWebService",
        type: "POST",
        data: {
            surveyId: yourEditUniqueSurveyId,
            surveyText : creator.text
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

The modern online editors do not have a "Save" button. They are saving the changes automatically after every change with a small delay. Survey Creator has this functionality as well. You have to set **isAutoSave** property to true (default is false). 

```javascript
creator.isAutoSave = true;
```

<div id="localization"></div>

## Localization and changing the default strings text

The strings localization is supported by the community. Survey Creator strings are localized on 7 languages so far. You may check the current localization progress on our [GitHub repo](https://github.com/surveyjs/survey-creator/tree/master/src/localization). SurveyJS Library (Runner) itself, are localized on 24 languages.

To change the current "en" locale to another one, you will have to write one line of code:
```javascript
//Make french locale active
SurveyCreator.editorLocalization.currentLocale = "fr";
```
If you want to change a text of any Survey Creator element, then you may use the following code:
```javascript
var curLocale = SurveyCreator.editorLocalization.currentLocale;
// get the current locale strings object
var curStrings = SurveyCreator.editorLocalization.getLocale("");
//change the text for visible property in Property Grid
curStrings.p.visible = "Is visible";
//change the text for visible property in Modal Editor
curStrings.pe.visible = "Is element visible?";
//change the text for visible property in Modal Editor
curStrings.ed.jsonEditor = "Edit As Text";
```

All localizable strings you may find in our [GitHub repo in english.ts file](https://github.com/surveyjs/survey-creator/blob/master/src/localization/english.ts).

Here is the link on [localization example](https://surveyjs.io/Examples/Survey-Creator/?id=localization) on our site.

<div id="multiplelanguages"></div>

## Multiple languages support

You may build one survey for several languages. The default strings, like text for buttons “Next” and “Previous” are translated on many languages. All you need to do is to set the **survey.locale** property in run-time into needed locale, as “fr” or “es” or any other from over twenty languages that our users have localized and you are done.

However, except the default strings, there are strings that you must localize in the survey itself, like page or question title, dropdown or checkbox choices, text errors and so on. Users of SurveyJS Creator integrated into your app must localize them by themselves. It is not the easy task for a large survey. However, you may help them here.

First of all, you may limited the number of languages they may choose in the **survey.locale** property and in **Translation** tab. It can be done via this code 
```javascript
Survey.surveyLocalization.supportedLocales = ["en", "de", "es", "fr"];
```

And the most important, is to show the **Translation** tab. It would allow your Survey Creator users to see all localizable strings on one page and localize them into the needed languages. Please go to “Translation” tab in [multiple languages example](https://surveyjs.io/Examples/Survey-Creator/?id=multiplelanguages).

<div id="appearance"></div>

## Appearance: Bootstrap and Themes

Initially, we were using bootstrap functionality, to show modal windows. We have made Survey Creator "bootstrap free" on April 2018. Since that you may use bootstrap, only if you need it, for example you have a site built on bootstrap. It stopped to be a requirement.

Right now, you have two options. You may use the bootstrap or use our themes. Survey Creator is using bootstrap by default, all you need is to include the bootstrap css into your web page. If you want to set one of our theme, then you have to call the following function:
```javascript
SurveyCreator.StylesManager.applyTheme("orange");
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
            
You may change any our theme. Please review [this demo](https://surveyjs.io/Examples/Survey-Creator?id=editor-custom-theme) to see how to do it.

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
|paneldynamic|Panel dymanic question. You setup the template panel, but adding elements (any question or a panel) and assign a text to its title, and this panel will be used as a template on creating dynamic panels. The number of panels is defined by panelCount property. An end-user may dynamically add/remove panels, unless you forbidden this.|
|radiogroup|Radiogroup question. A single choice question.|
|rating|Rating question|
|text|Input text question|

By default, all these question types are shown on the Toolbox. You may show only some of them by using the following code:
```javascript
var options = {
    questionTypes: ["text", "checkbox", "radiogroup", "dropdown"]
};
var creator = new SurveyCreator.SurveyCreator("surveyCreatorDivId", options);
```

<div id="toolbox-customwidgets"></div>

### Add custom widgets

To add a custom widget to your Toolbox, all you need to do is to include the third-party library scripts and our custom widget scripts on your web page. Survey Creator will recognize custom widgets as new question types and add them into Toolbox. Please review [this example](https://surveyjs.io/Examples/Survey-Creator/?id=customwidgets).
                
<div id="toolbox-existing"></div>

### Add existing Elements from designer into Toolbox

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

<div id="toolbox-categories"></div>

### Toolbox categories

By default there is one category in the Toolbox (General) and its title is not shown. You may change the category of the default question types by calling **changeCategory** function:
```javascript
creator.toolbox.changeCategory("panel", "Panels");
creator.toolbox.changeCategory("paneldynamic", "Panels");
```
The better way is to use changeCategories function. It will rebuild toolbox presentation model just one time:
```javascript
creator.toolbox.changeCategories([
    { name: "panel", category: "Panels" }, 
    { name: "paneldynamic", category: "Panels" }, 
    { name: "matrix", category: "Matrix" }
]);
```
You may change the name of the default (General) category as any other localizable string. Please make sure to run this code before creating the Survey Creator.
```javascript
SurveyCreator.defaultStrings.ed.toolboxGeneralCategory = "Common";
```

To allow expand more than one category, set the property **allowExpandMultipleCategories** to true.
If you want to keep all your categories always expanded, then set the following property **keepAllCategoriesExpanded** property to true.
```javascript
creator.toolbox.allowExpandMultipleCategories = true;
creator.toolbox.keepAllCategoriesExpanded = true;` 
```

Please go to the [Survey Toolbox categories example](https://surveyjs.io/Examples/Survey-Creator/?id=toolboxcategories) to see how it works.

<div id="toolbox-property"></div>

### Full control via creator.toolbox property

Edtor **toolbox** property contains the information about items are shown Toolbox and functions and properties to allow adding/deleting/changing items.

Here are properties of the item object:

|Property Name|Description|
|---|---|
|name| The required attribute. The unique item id. By default it is a question type|
|iconName|The optional attribute. The icon name. The default value is 'icon-default'. It is 'icon-' + [question_type] for a standard Survey question|
|json|The required attribute. A new element on designer is created based on this json. The json should has at least the 'type' string property. You may change it to set other question properties by default.|
|title|The toolbox item title. For default questions, titles are defined in localization files. Here is the example of changing title for **comment** question: _SurveyCreator.defaultStrings.qt.comment = "Multiple line input";_ Please go to <a href="#localization">Localization section</a> to get more information.|
|isCopied|true if the item is created by clicking on 'Add to Toolbox' question menu item.|
|category|The category to which this item is belong to. It is empty (default value) then category is “General”. Please read topic Toolbox Categories in this section for more information.|
                
Here is the list of functions and properties for **creator.toolbox** object:

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
creator.toolbox.addItem({
    name: "countries",
    isCopied: true,
    iconName: "icon-default",
    title: "All countries",
    json: {
        "type": "dropdown",
        optionsCaption: "Select a country...",
        choicesByUrl: {
            url: "https://surveyjs.io/api/CountriesExample"
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
creator.toolbox.getItemByName("radiogroup").json = {
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
creator.toolbox.removeItem("matrixdropdown");
creator.toolbox.removeItem("matrixdynamic");
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
creator.toolbox.changeCategories([
    { name: "panel", category: "Panels" }, 
    { name: "paneldynamic", category: "Panels" }, 
    { name: "matrix", category: "Matrix" }
]);
```
---

Please review and play with the [Survey Toolbox customization](https://surveyjs.io/Examples/Survey-Creator/?id=toolboxcustomization) example.


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
