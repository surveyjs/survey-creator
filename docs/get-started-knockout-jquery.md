# Add Survey Creator / Form Builder to a Knockout or jQuery Application

This step-by-step tutorial will help you get started with the [Survey Creator](https://surveyjs.io/create-survey) component in a Knockout or jQuery application. To add Survey Creator to your application, follow the steps below:

- [Link Resources](#link-resources)
- [Configure Survey Creator](#configure-survey-creator)
- [Render Survey Creator](#render-survey-creator)
- [Save and Load Survey Model Definitions](#save-and-load-survey-model-definitions)

Survey Creator is powered by Knockout and does not have an individual implementation for jQuery. However, you can integrate the version for Knockout into your jQuery application by following the same instructions.

You can find the full code for this tutorial in the following GitHub repository: <a href="https://github.com/surveyjs/code-examples/tree/main/get-started-creator-knockout" target="_blank">Get Started with Survey Creator / Form Builder - Knockout</a>.

## Link Resources

Survey Creator for Knockout consists of two parts: `survey-creator-core` (platform-independent code) and `survey-creator-knockout` (view models). They include style sheets and scripts. Insert links to these resources within the `<head>` tag on your HTML page as shown below.

Survey Creator also requires SurveyJS resources. Link them _after_ the Knockout library, but _before_ the Survey Creator resources. Note that although SurveyJS supports [different UI themes](https://surveyjs.io/Documentation/Library?id=get-started-knockout#link-surveyjs-resources), Survey Creator can use only the Default V2 theme:

```html
<head>
    <!-- ... -->
    <script type="text/javascript" src="https://unpkg.com/knockout/build/output/knockout-latest.js"></script>

    <!-- SurveyJS resources -->
    <link  href="https://unpkg.com/survey-core/defaultV2.min.css" type="text/css" rel="stylesheet">
    <script src="https://unpkg.com/survey-core/survey.core.min.js"></script>
    <script src="https://unpkg.com/survey-knockout-ui/survey-knockout-ui.min.js"></script>
    
    <!-- Survey Creator resources -->
    <link  href="https://unpkg.com/survey-creator-core/survey-creator-core.min.css" type="text/css" rel="stylesheet">
    <script src="https://unpkg.com/survey-creator-core/survey-creator-core.min.js"></script>
    <script src="https://unpkg.com/survey-creator-knockout/survey-creator-knockout.min.js"></script>
    <!-- ... -->
</head>
```

## Configure Survey Creator

To configure the Survey Creator component, specify [its properties](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator) in a configuration object. In this tutorial, the object enables the following properties:

- [`showLogicTab`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#showLogicTab)        
Displays the Logic tab in the tab panel.

- [`isAutoSave`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#isAutoSave)        
Automatically saves the survey definition JSON on every change.

```js
const creatorOptions = {
    showLogicTab: true,
    isAutoSave: true
};
```

Pass the configuration object to the `SurveyCreator` constructor as shown in the code below to instantiate Survey Creator. Assign the produced instance to a constant that will be used later to render the component:

```js
const creator = new SurveyCreator.SurveyCreator(creatorOptions);
```

<details>
    <summary>View full code</summary>  

```html
<!DOCTYPE html>
<html>
<head>
    <title>Survey Creator for Knockout</title>
    <meta charset="utf-8">
    <script type="text/javascript" src="https://unpkg.com/knockout/build/output/knockout-latest.js"></script>

    <link  href="https://unpkg.com/survey-core/defaultV2.min.css" type="text/css" rel="stylesheet">
    <script src="https://unpkg.com/survey-core/survey.core.min.js"></script>
    <script src="https://unpkg.com/survey-knockout-ui/survey-knockout-ui.min.js"></script>
    
    <link  href="https://unpkg.com/survey-creator-core/survey-creator-core.min.css" type="text/css" rel="stylesheet">
    <script src="https://unpkg.com/survey-creator-core/survey-creator-core.min.js"></script>
    <script src="https://unpkg.com/survey-creator-knockout/survey-creator-knockout.min.js"></script>

    <script type="text/javascript" src="index.js"></script>
</head>
<body>

</body>
</html>
```

```js
const creatorOptions = {
    showLogicTab: true,
    isAutoSave: true
};

const creator = new SurveyCreator.SurveyCreator(creatorOptions);
```
</details> 

## Render Survey Creator

Survey Creator should be rendered in a page element. Add this element to your page:

```html
<body>
    <div id="surveyCreator" style="height: 100vh;"></div>
</body>
```

To render Survey Creator in the page element, call the `render(containerId)` method on the Survey Creator instance you created in the previous step:

```js
document.addEventListener("DOMContentLoaded", function() {
    creator.render("surveyCreator");
});
```

<details>
    <summary>View full code</summary>  

```html
<!DOCTYPE html>
<html>
<head>
    <title>Survey Creator for Knockout</title>
    <meta charset="utf-8">
    <script type="text/javascript" src="https://unpkg.com/knockout/build/output/knockout-latest.js"></script>

    <link  href="https://unpkg.com/survey-core/defaultV2.min.css" type="text/css" rel="stylesheet">
    <script src="https://unpkg.com/survey-core/survey.core.min.js"></script>
    <script src="https://unpkg.com/survey-knockout-ui/survey-knockout-ui.min.js"></script>
    
    <link  href="https://unpkg.com/survey-creator-core/survey-creator-core.min.css" type="text/css" rel="stylesheet">
    <script src="https://unpkg.com/survey-creator-core/survey-creator-core.min.js"></script>
    <script src="https://unpkg.com/survey-creator-knockout/survey-creator-knockout.min.js"></script>

    <script type="text/javascript" src="index.js"></script>
</head>
<body>
    <div id="surveyCreator" style="height: 100vh;"></div>
</body>
</html>
```

```js
const creatorOptions = {
    showLogicTab: true,
    isAutoSave: true
};

const creator = new SurveyCreator.SurveyCreator(creatorOptions);

document.addEventListener("DOMContentLoaded", function() {
    creator.render("surveyCreator");
});
```
</details>

## Save and Load Survey Model Definitions

Survey Creator is designed to produce survey model definitions as JSON objects. You can save these objects on your server and load them from it. To save a JSON object, implement the `saveSurveyFunc` function. It accepts two arguments:

- `saveNo`      
An incremental number of the current change. Because web services are asynchronous, you cannot guarantee that the change that came to the service last is the latest. For example, change #11 may precede change #10. In your web service code, compare `saveNo` of the coming change with `saveNo` of the saved change to decide whether to override the latter.

- `callback`        
A callback function that should be called after the current change is saved or rejected. Pass `saveNo` as the first argument. The second argument should be `true` if the change was successfully saved or `false` if the change was rejected.

The following code shows how to use the `saveSurveyFunc` function to save a survey model definition in a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">`localStorage`</a> or in your web service:


```js
creator.saveSurveyFunc = (saveNo, callback) => {
    // If you use localStorage:
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);

    // If you use a web service:
    saveSurveyJson(
        "https://your-web-service.com/",
        creator.JSON,
        saveNo,
        callback
    );
};

// If you use a web service:
function saveSurveyJson(url, json, saveNo, callback) {
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.addEventListener('load', () => {
        callback(saveNo, true);
    });
    request.addEventListener('error', () => {
        callback(saveNo, false);
    });
    request.send(JSON.stringify(json));
}
```

To load a survey model definition JSON into Survey Creator, assign the definition to Survey Creator's [`JSON`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#JSON) or [`text`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#text) property. Use `text` if the JSON object is converted to string; otherwise, use `JSON`. The following code takes a survey model definition from the `localStorage`. If the definition is not found (for example, when Survey Creator is launched for the first time), a default JSON is used:


```js
const defaultJson = {
    pages: [{
        name: "Name",
        elements: [{
            name: "FirstName",
            title: "Enter your first name:",
            type: "text"
        }, {
            name: "LastName",
            title: "Enter your last name:",
            type: "text"
        }]
    }]
};

creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
```

<details>
    <summary>View full code</summary>  

```html
<!DOCTYPE html>
<html>
<head>
    <title>Survey Creator for Knockout</title>
    <meta charset="utf-8">
    <script type="text/javascript" src="https://unpkg.com/knockout/build/output/knockout-latest.js"></script>

    <link  href="https://unpkg.com/survey-core/defaultV2.min.css" type="text/css" rel="stylesheet">
    <script src="https://unpkg.com/survey-core/survey.core.min.js"></script>
    <script src="https://unpkg.com/survey-knockout-ui/survey-knockout-ui.min.js"></script>
    
    <link  href="https://unpkg.com/survey-creator-core/survey-creator-core.min.css" type="text/css" rel="stylesheet">
    <script src="https://unpkg.com/survey-creator-core/survey-creator-core.min.js"></script>
    <script src="https://unpkg.com/survey-creator-knockout/survey-creator-knockout.min.js"></script>

    <script type="text/javascript" src="index.js"></script>
</head>
<body>
    <div id="surveyCreator" style="height: 100vh;"></div>
</body>
</html>
```

```js
const creatorOptions = {
    showLogicTab: true,
    isAutoSave: true
};

const defaultJson = {
    pages: [{
        name: "Name",
        elements: [{
            name: "FirstName",
            title: "Enter your first name:",
            type: "text"
        }, {
            name: "LastName",
            title: "Enter your last name:",
            type: "text"
        }]
    }]
};

const creator = new SurveyCreator.SurveyCreator(creatorOptions);
creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
creator.saveSurveyFunc = (saveNo, callback) => { 
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
    // saveSurveyJson(
    //     "https://your-web-service.com/",
    //     creator.JSON,
    //     saveNo,
    //     callback
    // );
};

document.addEventListener("DOMContentLoaded", function() {
    creator.render("surveyCreator");
});

// function saveSurveyJson(url, json, saveNo, callback) {
//     const request = new XMLHttpRequest();
//     request.open('POST', url);
//     request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//     request.addEventListener('load', () => {
//         callback(saveNo, true);
//     });
//     request.addEventListener('error', () => {
//         callback(saveNo, false);
//     });
//     request.send(JSON.stringify(json));
// }
```
</details>

<a href="https://github.com/surveyjs/code-examples/tree/main/get-started-creator-knockout" target="_blank">View full code on GitHub</a>

## Conclusion

You have learnt how to add Survey Creator to your Knockout application. For further information, refer the [Survey Creator / Form Builder Overview](https://surveyjs.io/Documentation/Survey-Creator?id=Survey-Creator-Overview) help topic.