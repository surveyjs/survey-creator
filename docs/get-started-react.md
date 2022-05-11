# Add Survey Creator / Form Builder to a React Application

This step-by-step tutorial will help you get started with the [Survey Creator](https://surveyjs.io/create-survey) component in a React application. To add the component to your application, follow the steps below:

- [Install the `survey-creator-react` npm Package](#install-the-survey-creator-react-npm-package)
- [Configure Styles](#configure-styles)
- [Configure Survey Creator](#configure-survey-creator)
- [Render Survey Creator](#render-survey-creator)
- [Save and Load Survey Model Definitions](#save-and-load-survey-model-definitions)

You can find the full code for this tutorial in the following GitHub repository: <a href="https://github.com/surveyjs/code-examples/tree/main/get-started-creator/react" target="_blank">Get Started with Survey Creator / Form Builder - React</a>.

If you are looking for a quick-start application that enables all Survey Creator features, refer to the following GitHub repository: <a href="https://github.com/surveyjs/surveyjs_react_quickstart" target="_blank">React + SurveyJS Quick Start Boilerplate</a>.

## Install the `survey-creator-react` npm Package

Survey Creator for React is distributed as a <a href="https://www.npmjs.com/package/survey-creator-react" target="_blank">survey-creator-react</a> npm package. Run the following command to install it:

```cmd
npm install survey-creator-react --save
```

## Configure Styles

Import Survey Creator and SurveyJS Library style sheets as shown below. Note that although SurveyJS Library supports [different UI themes](https://surveyjs.io/Documentation/Library?id=get-started-react#configure-styles), Survey Creator can use only the Default V2 theme:

```js
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
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
import { SurveyCreator } from "survey-creator-react";

// ...

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
}
```

<details>
  <summary>View full code</summary>

```js
import { SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
  return (

  )
}
```
</details>

## Render Survey Creator

To render a survey, import the `SurveyCreatorComponent`, add it to the template, and pass the instance you created in the previous step to the component's `creator` attribute:

```js
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";

// ...

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);

  return (
    <SurveyCreatorComponent creator={creator} />
  )
}
```

<details>
  <summary>View full code</summary>

```js
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
  return (
    <SurveyCreatorComponent creator={creator} />
  )
}
```
</details>

## Save and Load Survey Model Definitions

Survey Creator produces survey model definitions as JSON objects. You can persist these objects on your server: save updates and restore previously saved definitions. To save a JSON object, implement the `saveSurveyFunc` function. It accepts two arguments:

- `saveNo`      
An incremental number of the current change. Since web services are asynchronous, you cannot guarantee that the service receives the changes in the same order as the client sends them. For example, change #11 may arrive to the server faster than change #10. In your web service code, update the storage only if you receive changes with a higher `saveNo`.

- `callback`        
A callback function. Call it and pass `saveNo` as the first argument. Set the second argument to `true` or `false` based on whether the server applied or rejected the change.

The following code shows how to use the `saveSurveyFunc` function to save a survey model definition in a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">`localStorage`</a> or in your web service:


```js
export function SurveyCreatorWidget() {
  // ...
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
  // ...
}

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

To load a survey model definition JSON into Survey Creator, assign the definition to Survey Creator's [`JSON`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#JSON) or [`text`](https://surveyjs.io/Documentation/Survey-Creator?id=surveycreator#text) property. Use `text` if the JSON object is converted to a string; otherwise, use `JSON`. The following code takes a survey model definition from the `localStorage`. If the definition is not found (for example, when Survey Creator is launched for the first time), a default JSON is used:


```js
// ...
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

export function SurveyCreatorWidget() {
  // ...
  creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
  // ...
}
```

<details>
  <summary>View full code</summary>

```js
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

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

export function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);
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
  return (
    <SurveyCreatorComponent creator={creator} />
  )
}

// function saveSurveyJson(url, json, saveNo, callback) {
//   const request = new XMLHttpRequest();
//   request.open('POST', url);
//   request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//   request.addEventListener('load', () => {
//       callback(saveNo, true);
//   });
//   request.addEventListener('error', () => {
//       callback(saveNo, false);
//   });
//   request.send(JSON.stringify(json));
// }
```
</details>

<a href="https://github.com/surveyjs/code-examples/tree/main/get-started-creator/react" target="_blank">View full code on GitHub</a>

## Further Reading

- [Localization](https://surveyjs.io/Documentation/Survey-Creator?id=localization)
- [Property Grid Customization](https://surveyjs.io/Documentation/Survey-Creator?id=property-grid)
- [Toolbox Customization](https://surveyjs.io/Documentation/Survey-Creator?id=toolbox)
- [Survey Customization](https://surveyjs.io/Documentation/Survey-Creator?id=survey-customization)
- [Create a Custom Widget](https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget)
