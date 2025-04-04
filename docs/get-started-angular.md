---
title: Angular Form Builder | Generate reactive HTML forms using JSON
description: SurveyJS Form Builder for Angular is an open-source client-side component that fully integrates into your Angular application and generates form JSON definitions (schemas) behind the scenes. It offers a user-friendly drag-and-drop interface, GUI for form branching, and an integrated theme editor for customizing form design.
---
# Angular Form Builder

[SurveyJS Form Builder](https://surveyjs.io/create-free-survey) is an open-source UI component for Angular that seamlessly integrates with any backend system and allows you to create and style multiple dynamic HTML forms right in your Angular application. This component generates form definitions (schemas) in real-time and offers a no-code drag-and-drop interface that makes form creation accessible to anyone. The form builder features a dedicated GUI for conditional rules and form branching and an integrated CSS theme editor for custom form styling and branding. This step-by-step tutorial will help you get started with the Form Builder component in an Angular application. To add the component to your application, follow the steps below:

- [Install the `survey-creator-angular` npm Package](#install-the-survey-creator-angular-npm-package)
- [Configure Styles](#configure-styles)
- [Configure Survey Creator](#configure-survey-creator)
- [Render Survey Creator](#render-survey-creator)
- [Save and Load Survey Model Schemas](#save-and-load-survey-model-schemas)
- [Manage Image Uploads](#manage-image-uploads)

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/angular (linkStyle))

If you are looking for a quick-start application that includes all SurveyJS components, refer to the following GitHub repository: <a href="https://github.com/surveyjs/surveyjs_angular_cli" target="_blank">SurveyJS + Angular CLI Quickstart Template</a>.

> In this guide, the terms "Form Builder" and "Survey Creator" are used interchangeably and both refer to the SurveyJS form building component for Angular.

<div id="install-the-survey-creator-angular-npm-package"></div>

## Install the Angular Form Builder npm Package

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
> Earlier Angular versions are supported by the [`survey-creator-knockout`](https://www.npmjs.com/package/survey-creator-knockout) package. It depends on Knockout and is now obsolete. However, you can use it in your Angular v8&ndash;v11 projects. Refer to the following examples on GitHub for more information:
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
              "node_modules/survey-core/survey-core.min.css",
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

When [using standalone components](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/angular-standalone-components), import the style sheets directly in the component file:

```js
// survey-creator.component.ts
import "survey-core/survey-core.min.css";
import "survey-creator-core/survey-creator-core.min.css";
```

## Configure Survey Creator

To configure the Survey Creator component, specify [its properties](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions) in a configuration object. In this tutorial, the object enables the following properties:

- [`autoSaveEnabled`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#autoSaveEnabled)        
Automatically saves the survey JSON schema on every change.

- [`collapseOnDrag`](https://surveyjs.io/survey-creator/documentation/api-reference/icreatoroptions#collapseOnDrag)        
Collapses pages on the design surface when users start dragging a survey element.

```js
const creatorOptions = {
  autoSaveEnabled: true,
  collapseOnDrag: true
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
  autoSaveEnabled: true,
  collapseOnDrag: true
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

Before you render the survey, you need to import the module that integrates Survey Creator with Angular. Open your `NgModule` class (usually resides in the `app.module.ts` file), import the `SurveyCreatorModule` from `survey-creator-angular`, and list it in the `imports` array.

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

When [using standalone components](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/angular-standalone-components), import the `SurveyCreatorModule` and add it to the `imports` array directly in the component file:

```js
// survey-creator.component.ts
// ...
import { SurveyCreatorModule } from 'survey-angular-ui';

@Component({
  // ...
  standalone: true,
  imports: [ SurveyCreatorModule ],
  // ...
})
export class SurveyCreatorComponent implements OnInit {
  // ...
}
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
  autoSaveEnabled: true,
  collapseOnDrag: true
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

Survey Creator produces survey model schemas as JSON objects. You can persist these objects on your server: save updates and restore previously saved schemas. To save a JSON object, implement the [`saveSurveyFunc`](/survey-creator/documentation/api-reference/survey-creator#saveSurveyFunc) function. It accepts two arguments:

- `saveNo`      
An incremental number of the current change. Since web services are asynchronous, you cannot guarantee that the service receives the changes in the same order as the client sends them. For example, change #11 may arrive to the server faster than change #10. In your web service code, update the storage only if you receive changes with a higher `saveNo`.

- `callback`        
A callback function. Call it and pass `saveNo` as the first argument. Set the second argument to `true` or `false` based on whether the server applied or rejected the change.

The following code shows how to use the `saveSurveyFunc` function to save a survey model schema in the browser's <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">`localStorage`</a> or in your web service:


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

[View Demo](/survey-creator/examples/set-how-survey-configuration-changes-are-saved/ (linkStyle))

If you are running a NodeJS server, you can check a survey JSON schema before saving it. On the server, create a `SurveyModel` and call its [`toJSON()`](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#toJSON) method. This method deletes unknown properties and incorrect property values from the survey JSON schema:

```js
// Server-side code for a NodeJS backend
import { Model } from "survey-core";

const incorrectSurveyJson = { ... };
const survey = new Model(surveyJson);
const correctSurveyJson = survey.toJSON();
// ...
// Save `correctSurveyJson` in a database
// ...
```

To load a survey model schema into Survey Creator, assign the schema to Survey Creator's [`JSON`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#JSON) or [`text`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#text) property. Use `text` if the JSON object is converted to a string; otherwise, use `JSON`. The following code takes a survey model schema from the `localStorage`. If the schema is not found (for example, when Survey Creator is launched for the first time), a default JSON is used:

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
  autoSaveEnabled: true,
  collapseOnDrag: true
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

## Manage Image Uploads

When survey authors design a form or questionnaire, they can add images to use as a survey [logo](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#logo) or [background](https://surveyjs.io/form-library/documentation/api-reference/survey-data-model#backgroundImage), in the survey header, or within [Image](https://surveyjs.io/form-library/examples/add-image-and-video-to-survey/) and [Image Picker](https://surveyjs.io/form-library/examples/image-picker-question/) questions. Those images are embedded in the survey and theme JSON schemas as Base64 URLs. However, this technique increases the schema size. To avoid this, you can upload images to a server and save only image links in the JSON schemas.

To implement image upload, handle the [`onUploadFile`](https://surveyjs.io/survey-creator/documentation/api-reference/survey-creator#onUploadFile) event. Its `options.files` parameter stores the images you should send to your server. Once the server responds with an image link, call the `options.callback(status, imageLink)` method. Pass `"success"` as the `status` parameter and a link to the uploaded image as the `imageLink` parameter.

```js
// ...
@Component({
  // ...
})
export class SurveyCreatorComponent implements OnInit {
  ngOnInit() {
    // ...
    creator.onUploadFile.add((_, options) => {
      const formData = new FormData();
      options.files.forEach((file: File) => {
        formData.append(file.name, file);
      });
      fetch("https://example.com/uploadFiles", {
        method: "post",
        body: formData
      }).then(response => response.json())
        .then(result => {
          options.callback(
            "success",
            // A link to the uploaded file
            "https://example.com/files?name=" + result[options.files[0].name]
          );
        })
        .catch(error => {
          options.callback('error');
        });
    });
    // ...
  }
}
```

[View Demo](https://surveyjs.io/survey-creator/examples/file-upload/angular (linkStyle))

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
  autoSaveEnabled: true,
  collapseOnDrag: true
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

    // creator.onUploadFile.add((_, options) => {
    //   const formData = new FormData();
    //   options.files.forEach((file: File) => {
    //     formData.append(file.name, file);
    //   });
    //   fetch("https://example.com/uploadFiles", {
    //     method: "post",
    //     body: formData
    //   }).then(response => response.json())
    //     .then(result => {
    //       options.callback(
    //         "success",
    //         // A link to the uploaded file
    //         "https://example.com/files?name=" + result[options.files[0].name]
    //       );
    //     })
    //     .catch(error => {
    //       options.callback('error');
    //     });
    // });

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


## (Optional) Enable Ace Editor in the JSON Editor Tab

The JSON Editor tab enables users to edit survey JSON schemas as text. To make the editing process more convenient, you can integrate the <a href="https://ace.c9.io/" target="_blank">Ace</a> code editor. Install the <a href="https://www.npmjs.com/package/ace-builds" target="_blank">`ace-builds`</a> package to add Ace to your project:

```sh
npm install ace-builds --save
```

Import Ace and required extensions in an Angular component that renders Survey Creator. For instance, the following code imports an extension that adds a Find/Replace dialog to Ace:

```js
// survey-creator.component.ts
// ...
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-searchbox";
// ...
```

[View Full Code on GitHub](https://github.com/surveyjs/code-examples/tree/main/get-started-creator/angular (linkStyle))

## Further Reading

- [Localization](https://surveyjs.io/Documentation/Survey-Creator?id=localization)
- [Property Grid Customization](https://surveyjs.io/Documentation/Survey-Creator?id=property-grid)
- [Toolbox Customization](https://surveyjs.io/Documentation/Survey-Creator?id=toolbox)
- [Survey Customization](https://surveyjs.io/Documentation/Survey-Creator?id=survey-customization)
- [Create a Custom Widget](https://surveyjs.io/Documentation/Survey-Creator?id=Create-Custom-Widget)
