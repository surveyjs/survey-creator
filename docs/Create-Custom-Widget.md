# Create Custom Widget: Add into SurveyJS your own question

- [When do you need a custom widget?](#needs)
- [Create simple custom widget](#simplewidget)
  - [Add functionality into existing question)](#addfunctionality)
  - [Add a new property into existing question](#addnewproperty)

<div id="needs"></div>

## When do you need a custom widget?

There are two main scenarios when you want to create a new Custom Widget. You want to modify, extend the behavior of the existing question(s), or you want to create a new question, typically using an existing third-party JavaScript widget/library.

If you want to change the standard question UI, then it is better to modify [CSS classes](https://surveyjs.io/Examples/Library?id=survey-cssclasses) or use SurveyJS events, like [survey.onAfterRenderQuestion](https://surveyjs.io/Examples/Library?id=survey-afterrender).

We have several [built-in custom widgets](https://surveyjs.io/Examples/Library?id=custom-widget-select2-tagbox), that we have created for you. Please note, we can’t fix bugs or extends their functionality in third-party libraries we are using. If there is a bug or you need a new functionality from a third-party library, that we use in our custom widget, then please contact authors of these libraries.


<div id="simplewidget"></div>

## Create simple custom widget

<div id="addfunctionality"></div>

### Add functionality into existing question.

Let us create a very simple custom widget that will add additional functionality into Comment Question, html text area. We want to search for a text in the text area and in case we found the text, focus the text area and select the text we found. We will add text input and “Search” button. If a user clicks the Search button the second time, it will work as “Search Next”.

```javascript
var searchStringWidget = {
    //the widget name. It should be unique and written in lowcase.
    name: "searchstring",
    //SurveyJS library calls this function for every question to check, if it should use this widget instead of default rendering/behavior
    isFit: function (question) {
        //We are going to apply this widget for comment question (textarea)
        return question.getType() == "comment";
    },
    //We do not want to change the default rendering.
    //We will change the default rendering, but do not override it completely
    isDefaultRender: true,
    //The main function, rendering and two-way binding
    //question is the question we apply our widget and el is HTML textarea in our case
    afterRender: function (question, el) {
        //Create a div with an input text and a button inside
        var mainDiv = document.createElement("div");
        var searchEl = document.createElement("input");
        searchEl.style.width = "calc(100% - 120px)";
        var btnEl = document.createElement("button");
        btnEl.innerText = "Search";
        btnEl.style.width = "120px";
        var searchIndex = 0;
        //Start from the start on changing the search text
        searchEl.onchange = function () {
            searchIndex = 0;
        };
        //Do the search on button click
        btnEl.onclick = function () {
            var searchText = searchEl.value;
            var text = el.value;
            //Do nothing if search text or textarea is empty
            if (!searchText || !text) return;
            var index = text.indexOf(searchText, searchIndex + 1);
            //If nothing found, but started not from beginning then start from the beginning
            if (index < 0 && searchIndex > -1) {
            index = text.indexOf(searchText, 0);
            }
            searchIndex = index;
            //If found the text then focus the textarea and select the search text.
            if (index > -1) {
            el.focus();
            el.setSelectionRange(index, index + searchText.length);
            }
        };
        mainDiv.appendChild(searchEl);
        mainDiv.appendChild(btnEl);
        //Append the div with search input and button before textarea
        el.parentElement.insertBefore(mainDiv, el);
    },
};

//Register our widget in singleton custom widget collection
Survey.CustomWidgetCollection.Instance.addCustomWidget(searchStringWidget);
```

As you can see in the code, we are setting just two properties and two functions.

The first property is _name_. This custom widget does not create a new item in the SurveyJS Toolbox. This property should be unique and in lowercase.

The second property is _isDefaultRender_. It is an optional property, you have to set it to _true_, if you want the default question input rendering. We do not want to render html “textarea” element by ourselves and we don’t want to setup question value binding, so we set this property to “true”.

The first function is _isFit()_. It has a question as a parameter, and it should return true if we want to use this question. We are returning true for comment questions. The code is obvious.

The second and main function is _afterRender()_. It has two parameters: a question and its input DOM element. In our case the input DOM element is text area. You can see there are some code inside this function. We are dynamically adding input text and search button under the text area and writing the code on button click that does the actual search.

<div id="addnewproperty"></div>

### Add a new property in existing question.

In the previous example we added the search functionality into Comment question. It applies to all comment question. Now, let us add a boolean property “hasSearch” that will turn this functionality on and off.

```javascript
//Add new classes and properties inside this function.
//SurveyJS calls it right after adding a new widget into custom widget collection.
init() {
  //Add a boolean property hasSearch into comment question.
  //Use switch property editor for it, you can have a simple boolean by changing ":switch" to ":boolean"
  //Add it to general category
  Survey.Serializer.addProperty("comment", {
    name: "hasSearch:switch",
    //default: true, //uncomment this line to make this property true by default.
    category: "general",
  });
},
//Add a check for hasSearch property in the beginning.
afterRender: function (question, el) {
    //property hasSearch is false. SurveyJS Cretor user doesn't want search functionality for this question.
    if (!question.hasSearch) return;
    ...
}
```
You have to use _init()_ function for adding new classes and properties. Additionally you have to modify _afterRender()_ function and do nothing if hasSearch property is not true.

The following code works perfect in general. The only problem, if change this property in run-time or in designer, the end-user will not see changes in UI. To make the better users experience in SurveyJS Creator, we must render our DOM elements all the time but hide/show them on changing the property. 

We must change _afterRender()_ function only. Remove the check on hasSearch property in the beginning and add the following code at the end:
```javascript
//Show hide search panel on changing hasSearch property
afterRender: function (question, el) {
    //if (!question.hasSearch) return; remove this line
    ...
    //Hide the search panel/div if hasSearch is not true
    mainDiv.style.display = !question.hasSearch ? "none" : "";
    //On every change hasSearch property call the anonym function
    question.registerFunctionOnPropertyValueChanged("hasSearch",
        function () {
            mainDiv.style.display = !question.hasSearch ? "none" : "";
    });
}
```

Here is the full widget script

```javascript
var searchStringWidget = {
  name: "searchstring",
  isFit: function (question) {
    return question.getType() == "comment";
  },
  init() {
    Survey.Serializer.addProperty("comment", {
      name: "hasSearch:switch",
      category: "general",
    });
  },
  isDefaultRender: true,
  afterRender: function (question, el) {
    var mainDiv = document.createElement("div");
    var searchEl = document.createElement("input");
    searchEl.style.width = "calc(100% - 120px)";
    var btnEl = document.createElement("button");
    btnEl.innerText = "Search";
    btnEl.style.width = "120px";
    var searchIndex = 0;
    searchEl.onchange = function () {
      searchIndex = 0;
    };
    btnEl.onclick = function () {
      var searchText = searchEl.value;
      var text = el.value;
      if (!searchText || !text) return;
      var index = text.indexOf(searchText, searchIndex + 1);
      if (index < 0 && searchIndex > -1) {
        index = text.indexOf(searchText, 0);
      }
      searchIndex = index;
      if (index > -1) {
        el.focus();
        el.setSelectionRange(index, index + searchText.length);
      }
    };
    mainDiv.appendChild(searchEl);
    mainDiv.appendChild(btnEl);
    el.parentElement.insertBefore(mainDiv, el);

    mainDiv.style.display = !question.hasSearch ? "none" : "";
    question.registerFunctionOnPropertyValueChanged(
      "hasSearch",
      function () {
        mainDiv.style.display = !question.hasSearch ? "none" : "";
      }
    );
  },
};

Survey.CustomWidgetCollection.Instance.addCustomWidget(
  searchStringWidget
);

```
<p align="center">

![Order Items property](https://github.com/surveyjs/survey-creator/blob/master/docs/images/custom-widget-search.png?raw=true)

_Search String Widget_
</p>

