# Add Survey Creator / Form Builder to an Angular Application

This step-by-step tutorial will help you get started with the [Survey Creator](https://surveyjs.io/create-survey) component in an Angular application. To add the component to your application, follow the steps below:

- [Install the `survey-creator-knockout` npm Package](#install-the-survey-creator-knockout-npm-package)
- [Configure Styles](#configure-styles)
- [Configure Survey Creator](#configure-survey-creator)
- [Render Survey Creator](#render-survey-creator)
- [Save and Load Survey Model Schemas](#save-and-load-survey-model-schemas)

You can find the full code for this tutorial in the following GitHub repository: <a href="https://github.com/surveyjs/code-examples/tree/main/get-started-creator/angular" target="_blank">Get Started with Survey Creator / Form Builder - Angular</a>.

If you are looking for a quick-start application that enables all Survey Creator features, refer to the following GitHub repository: <a href="https://github.com/surveyjs/surveyjs_angular_cli" target="_blank">Angular CLI + SurveyJS Quick Start Boilerplate</a>.

## Install the `survey-creator-knockout` npm Package

Survey Creator does not yet have a native implementation for Angular. However, you can integrate the version for Knockout into your Angular application. Run the following command to install the <a href="https://www.npmjs.com/package/survey-creator-knockout" target="_blank">survey-creator-knockout</a> package:

```cmd
npm install survey-creator-knockout --save
```

## Configure Styles

Open the `angular.json` file and reference Survey Creator and SurveyJS Library style sheets:

```js
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  // ...
  "projects": {
    "project-name": {
      "projectType": "application",
      // ...
      "architect": {
        "build": {
          // ...
          "options": {
            // ...
            "styles": [
              "src/styles.css",
              "node_modules/survey-core/defaultV2.min.css",
              "node_modules/survey-creator-core/survey-creator-core.min.css"
            ],
            // ...
          }
        }
      }
    }
  }
}
```

Note that although standalone surveys support [multiple predefined themes](https://surveyjs.io/Documentation/Library?id=get-started-angular#configure-styles), surveys within Survey Creator apply only one theme ("Default V2"). However, you can use the survey configuration (JSON object) produced by Survey Creator to build a standalone survey and apply any theme to it. You can also customize Survey Creator theme colors as shown in the following example:

[View Customize Theme Using CSS Variables example](https://surveyjs.io/Examples/Survey-Creator?id=editor-custom-theme-css-vars)

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
import { Component, OnInit } from '@angular/core';
import { SurveyCreator } from "survey-creator-knockout";

@Component({
  selector: 'survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.css']
})
export class SurveyCreatorComponent implements OnInit {
  ngOnInit() {
    const creator = new SurveyCreator(creatorOptions);
  }
}
```

<details>
  <summary>View full code</summary>

```js
import { Component, OnInit } from "@angular/core";
import { SurveyCreator } from "survey-creator-knockout";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

@Component({
  selector: 'survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.css']
})
export class SurveyCreatorComponent implements OnInit {
  ngOnInit() {
    const creator = new SurveyCreator(creatorOptions);
  }
}
```
</details>

## Render Survey Creator

Switch to the component template. Add a page element that will serve as the Survey Creator container:

```html
<div id="surveyCreator"></div>
```

```css
#surveyCreator {
    height: 100vh;
    width: 100vw;
}
```

To render Survey Creator in the page element, call the `render(containerId)` method on the Survey Creator instance you created in the previous step:

```js
// ...
@Component({
  // ...
})
export class SurveyCreatorComponent implements OnInit {
  ngOnInit() {
    // ...
    creator.render("surveyCreator");
  }
}
```

<details>
  <summary>View full code</summary>

```html
<div id="surveyCreator"></div>
```

```js
import { Component, OnInit } from "@angular/core";
import { SurveyCreator } from "survey-creator-knockout";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

@Component({
  selector: 'survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.css']
})
export class SurveyCreatorComponent implements OnInit {
  ngOnInit() {
    const creator = new SurveyCreator(creatorOptions);
    creator.render("surveyCreator");
  }
}
```

```css
#surveyCreator {
    height: 100vh;
    width: 100vw;
}
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
// ...
@Component({
  // ...
})
export class SurveyCreatorComponent implements OnInit {
  ngOnInit() {
    // ...
    creator.saveSurveyFunc = (saveNo: number, callback: Function) => { 
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

// ...
@Component({
  // ...
})
export class SurveyCreatorComponent implements OnInit {
  ngOnInit() {
    // ...
    creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
    // ...
  }
}
```

To view the application, run `ng serve` in a command line and open [http://localhost:4200/](http://localhost:4200/) in your browser.

<details>
  <summary>View full code</summary>

```html
<div id="surveyCreator"></div>
```

```js
import { Component, OnInit } from "@angular/core";
import { SurveyCreator } from "survey-creator-knockout";

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

@Component({
  selector: 'survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.css']
})
export class SurveyCreatorComponent implements OnInit {
  ngOnInit() {
    const creator = new SurveyCreator(creatorOptions);
    creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);

    creator.saveSurveyFunc = (saveNo: number, callback: Function) => { 
      window.localStorage.setItem("survey-json", creator.text);
      callback(saveNo, true);
      // saveSurveyJson(
      //     "https://your-web-service.com/",
      //     creator.JSON,
      //     saveNo,
      //     callback
      // );
    };
    creator.render("surveyCreator");
  }
}

// function saveSurveyJson(url: string | URL, json: object, saveNo: number, callback: Function) {
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

```css
#surveyCreator {
    height: 100vh;
    width: 100vw;
}
```
</details>

<a href="https://github.com/surveyjs/code-examples/tree/main/get-started-creator/angular" target="_blank">View full code on GitHub</a>

## Further Reading

- [Localization](https://surveyjs.io/Documentation/Survey-Creator?id=localization)
- [Property Grid Customization](https://surveyjs.io/Documentation/Survey-Creator?id=property-grid)
- [Toolbox Customization](https://surveyjs.io/Documentation/Survey-Creator?id=toolbox)
- [Survey Customization](https://surveyjs.io/Documentation/Survey-Creator?id=survey-customization)
- [Create a Custom Widget](https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget)