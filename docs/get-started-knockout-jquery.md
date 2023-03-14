---
title: JS Form Builder Library for Knockout and jQuery | Getting Started Guide
description: A step-by-step guide to get started with Survey Creator component in a Knockout or jQuery application.
---
# Add Survey Creator / Form Builder to a Knockout or jQuery Application

This step-by-step tutorial will help you get started with the [Survey Creator](https://surveyjs.io/create-survey) component in a Knockout or jQuery application. To add Survey Creator to your application, follow the steps below:

- [Link Resources](#link-resources)
- [Configure Survey Creator](#configure-survey-creator)
- [Render Survey Creator](#render-survey-creator)
- [Save and Load Survey Model Schemas](#save-and-load-survey-model-schemas)

Survey Creator is powered by Knockout and does not have an individual implementation for jQuery. However, you can integrate the version for Knockout into your jQuery application by following the same instructions.

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/knockout (linkStyle))

## Link Resources

Survey Creator for Knockout consists of two parts: `survey-creator-core` (platform-independent code) and `survey-creator-knockout` (view models). Each part includes style sheets and scripts. Insert links to these resources within the `<head>` tag on your HTML page as shown below.

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

### Configure Styles

Note that although standalone surveys support [multiple predefined themes](https://surveyjs.io/Documentation/Library?id=get-started-angular#configure-styles), surveys within Survey Creator apply only one theme ("Default V2"). However, you can use the survey configuration (JSON object) produced by Survey Creator to build a standalone survey and apply any theme to it. You can also customize Survey Creator theme colors as shown in the following example:

[View Demo](https://surveyjs.io/survey-creator/examples/edit-user-interface-theme-with-custom-css/knockout (linkStyle))

## Configure Survey Creator

To configure the Survey Creator component, specify [its properties](https://surveyjs.io/Documentation/Survey-Creator?id=ICreatorOptions) in a configuration object. In this tutorial, the object enables the following properties:

- [`showLogicTab`](https://surveyjs.io/Documentation/Survey-Creator?id=ICreatorOptions#showLogicTab)        
Displays the Logic tab in the tab panel.

- [`isAutoSave`](https://surveyjs.io/Documentation/Survey-Creator?id=ICreatorOptions#isAutoSave)        
Automatically saves the survey JSON schema on every change.

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
    <summary>View Full Code</summary>  

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

Switch to the component template. Add a page element that will serve as the Survey Creator container:

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
    <summary>View Full Code</summary>  

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

## Save and Load Survey Model Schemas

Survey Creator produces survey model schemas as JSON objects. You can persist these objects on your server: save updates and restore previously saved schemas. To save a JSON object, implement the `saveSurveyFunc` function. It accepts two arguments:

- `saveNo`      
An incremental number of the current change. Since web services are asynchronous, you cannot guarantee that the service receives the changes in the same order as the client sends them. For example, change #11 may arrive to the server faster than change #10. In your web service code, update the storage only if you receive changes with a higher `saveNo`.

- `callback`        
A callback function. Call it and pass `saveNo` as the first argument. Set the second argument to `true` or `false` based on whether the server applied or rejected the change.

The following code shows how to use the `saveSurveyFunc` function to save a survey model schema in a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">`localStorage`</a> or in your web service:


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

To load a survey model schema JSON into Survey Creator, assign the schema to Survey Creator's [`JSON`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#JSON) or [`text`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#text) property. Use `text` if the JSON object is converted to a string; otherwise, use `JSON`. The following code takes a survey model schema from the `localStorage`. If the schema is not found (for example, when Survey Creator is launched for the first time), a default JSON is used:


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
    <summary>View Full Code</summary>  

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

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/knockout (linkStyle))

## Further Reading

- [Localization](https://surveyjs.io/Documentation/Survey-Creator?id=localization)
- [Property Grid Customization](https://surveyjs.io/Documentation/Survey-Creator?id=property-grid)
- [Toolbox Customization](https://surveyjs.io/Documentation/Survey-Creator?id=toolbox)
- [Survey Customization](https://surveyjs.io/Documentation/Survey-Creator?id=survey-customization)
- [Create a Custom Widget](https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget)