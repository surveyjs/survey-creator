---
title: JS Form Builder Library for Angular | Getting Started Guide
description: A step-by-step guide to get started with Survey Creator component in an Angular application.
---
# Add Survey Creator / Form Builder to an Angular Application

This step-by-step tutorial will help you get started with the [Survey Creator](https://surveyjs.io/create-survey) component in an Angular application. To add the component to your application, follow the steps below:

- [Install the `survey-creator-angular` npm Package](#install-the-survey-creator-angular-npm-package)
- [Configure Styles](#configure-styles)
- [Configure Survey Creator](#configure-survey-creator)
- [Render Survey Creator](#render-survey-creator)
- [Save and Load Survey Model Schemas](#save-and-load-survey-model-schemas)

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/angular (linkStyle))

If you are looking for a quick-start application that enables all Survey Creator features, refer to the following GitHub repository: <a href="https://github.com/surveyjs/surveyjs_angular_cli" target="_blank">Angular CLI + SurveyJS Quick Start Boilerplate</a>.

## Install the `survey-creator-angular` npm Package

Survey Creator for Angular consists of two npm packages: [`survey-creator-core`](https://www.npmjs.com/package/survey-creator-core) (platform-independent code) and [`survey-creator-angular`](https://www.npmjs.com/package/survey-creator-angular) (rendering code). Run the following command to install `survey-creator-angular`. The `survey-creator-core` package will be installed automatically as a dependency.

```cmd
npm install survey-creator-angular --save
```

> SurveyJS for Angular requires Angular v12.0.0 or newer and depends on the `@angular/cdk` package. If your project does not include it yet, run the following command:
>
> ```cmd
> npm install @angular/cdk@^12.0.0 --save
> ```
>
> Earlier Angular versions are supported by the [`survey-creator`](https://www.npmjs.com/package/survey-creator) package. It depends on Knockout and is now obsolete. However, you can use it in your Angular v8&ndash;v11 projects. Refer to the following examples on GitHub for more information:
> 
> - [Add SurveyJS Form Library to an Angular v8&ndash;v11 Application](https://github.com/surveyjs/code-examples/tree/main/legacy-angular/form-library)
> - [Add Survey Creator to an Angular v8&ndash;v11 Application](https://github.com/surveyjs/code-examples/tree/main/legacy-angular/survey-creator).

## Configure Styles

Open the `angular.json` file and reference Survey Creator and SurveyJS Form Library style sheets:

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

[View Demo](https://surveyjs.io/survey-creator/examples/edit-user-interface-theme-with-custom-css/angular (linkStyle))

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

Pass the configuration object to the `SurveyCreatorModel` constructor as shown in the code below to instantiate Survey Creator. Assign the produced instance to a component property that will be used later to render Survey Creator:

```js
import { Component, OnInit } from '@angular/core';
import { SurveyCreatorModel } from "survey-creator-core";

@Component({
  selector: 'survey-creator-component',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.css']
})
export class SurveyCreatorComponent implements OnInit {
  surveyCreatorModel: SurveyCreatorModel;
  ngOnInit() {
    const creator = new SurveyCreatorModel(creatorOptions);
    this.surveyCreatorModel = creator;
  }
}
```

<details>
  <summary>View Full Code</summary>

```js
import { Component, OnInit } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

@Component({
  selector: 'survey-creator-component',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.css']
})
export class SurveyCreatorComponent implements OnInit {
  surveyCreatorModel: SurveyCreatorModel;
  ngOnInit() {
    const creator = new SurveyCreatorModel(creatorOptions);
    this.surveyCreatorModel = creator;
  }
}
```
</details>

## Render Survey Creator

Before you render the survey, you need to import the module that integrates Survey Creator with Angular. Open your NgModule class (usually resides in the `app.module.ts` file), import the `SurveyCreatorModule` from `survey-creator-angular`, and list it in the `imports` array.

```js
// app.module.ts
// ...
import { SurveyCreatorModule } from 'survey-creator-angular';

@NgModule({
  declarations: [ ... ],
  imports: [
    ...,
    SurveyCreatorModule
  ],
  providers: [ ... ],
  bootstrap: [ ... ]
})
export class AppModule { }

```

To render Survey Creator, add a `<survey-creator>` element to your component template and bind the element's `model` attribute to the model instance you created in the previous step:

```html
<div id="surveyCreator">
  <survey-creator [model]="surveyCreatorModel"></survey-creator>
</div>
```
```css
#surveyCreator {
    height: 100vh;
    width: 100vw;
}
```

<details>
  <summary>View Full Code</summary>

```html
<!-- survey-creator.component.html -->
<div id="surveyCreator">
  <survey-creator [model]="surveyCreatorModel"></survey-creator>
</div>
```

```js
// survey-creator.component.ts
import { Component, OnInit } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

@Component({
  selector: 'survey-creator-component',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.css']
})
export class SurveyCreatorComponent implements OnInit {
  surveyCreatorModel: SurveyCreatorModel;
  ngOnInit() {
    const creator = new SurveyCreatorModel(creatorOptions);
    this.surveyCreatorModel = creator;
  }
}
```

```css
/* survey-creator.component.css */
#surveyCreator {
    height: 100vh;
    width: 100vw;
}
```

```js
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SurveyCreatorModule } from 'survey-creator-angular';

import { AppComponent } from './app.component';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyCreatorComponent
  ],
  imports: [
    BrowserModule,
    SurveyCreatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
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
function saveSurveyJson(url: string | URL, json: object, saveNo: number, callback: Function) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(json)
  })
  .then(response => {
    if (response.ok) {
      callback(saveNo, true);
    } else {
      callback(saveNo, false);
    }
  })
  .catch(error => {
    callback(saveNo, false);
  });
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
  <summary>View Full Code</summary>

```html
<!-- survey-creator.component.html -->
<div id="surveyCreator">
  <survey-creator [model]="surveyCreatorModel"></survey-creator>
</div>
```

```js
// survey-creator.component.ts
import { Component, OnInit } from "@angular/core";
import { SurveyCreatorModel } from "survey-creator-core";

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
  selector: 'survey-creator-component',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.css']
})
export class SurveyCreatorComponent implements OnInit {
  surveyCreatorModel: SurveyCreatorModel;
  ngOnInit() {
    const creator = new SurveyCreatorModel(creatorOptions);
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
    this.surveyCreatorModel = creator;
  }
}

// function saveSurveyJson(url: string | URL, json: object, saveNo: number, callback: Function) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       callback(saveNo, true);
//     } else {
//       callback(saveNo, false);
//     }
//   })
//   .catch(error => {
//     callback(saveNo, false);
//   });
// }
```

```css
/* survey-creator.component.css */
#surveyCreator {
    height: 100vh;
    width: 100vw;
}
```

```js
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SurveyCreatorModule } from 'survey-creator-angular';

import { AppComponent } from './app.component';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyCreatorComponent
  ],
  imports: [
    BrowserModule,
    SurveyCreatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
</details>

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/angular (linkStyle))

## Further Reading

- [Localization](https://surveyjs.io/Documentation/Survey-Creator?id=localization)
- [Property Grid Customization](https://surveyjs.io/Documentation/Survey-Creator?id=property-grid)
- [Toolbox Customization](https://surveyjs.io/Documentation/Survey-Creator?id=toolbox)
- [Survey Customization](https://surveyjs.io/Documentation/Survey-Creator?id=survey-customization)
- [Create a Custom Widget](https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget)