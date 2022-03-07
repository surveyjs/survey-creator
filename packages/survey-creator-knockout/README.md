# Survey Creator V2 for Knockout

[![Build Status](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_apis/build/status/SurveyJS%20Creator?branchName=master)](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_build/latest?definitionId=8&branchName=master)
<a href="https://www.npmjs.com/package/survey-creator"><img alt="NPM Version" src="https://img.shields.io/npm/v/survey-creator.svg" data-canonical-src="https://img.shields.io/npm/v/survey-creator.svg" style="max-width:100%;"></a>

Survey Creator V2 for Knockout is a visual survey designer / form builder for the Knockout version of [SurveyJS](https://github.com/surveyjs/survey-library).

Although it is powered by Knockout, this library can also be used with Angular, Vue, and jQuery. For React, we ship an individual version: [survey-creator-react](/packages/survey-creator-react).

- [Live Examples](https://surveyjs.io/Examples/Survey-Creator?platform=KnockoutjsV2)
- [Documentation](https://surveyjs.io/Documentation/Survey-Creator)
- [Create your Survey or Form now](https://surveyjs.io/create-survey-v2)

**NOTE**: This package contains Survey Creator V2. If you are looking for information on V1, refer to the [survey-creator](/packages/survey-creator) directory. Differences between these two versions are described in the following help topic: [SurveyJS Creator V2: What's new](https://surveyjs.io/Documentation/Survey-Creator?id=Creator-V2-Whats-New). For information on how to migrate to V2, refer to the [Migration Guide for SurveyJS Creator - from V1 to V2](https://surveyjs.io/Documentation/Survey-Creator?id=Migrate-from-V1-to-V2) article.

## Use with Knockout, jQuery, or Vanilla JS

```html
<head>
  <!-- ... -->
  <script src="https://unpkg.com/knockout@3.5.1/build/output/knockout-latest.js"></script>
  
  <link  href="https://unpkg.com/survey-core/defaultV2.min.css" type="text/css" rel="stylesheet">
  <script src="https://unpkg.com/survey-core/survey.core.min.js"></script>
  <script src="https://unpkg.com/survey-knockout-ui/survey-knockout-ui.min.js"></script>
  
  <link  href="https://unpkg.com/survey-creator-core/survey-creator-core.min.css" type="text/css" rel="stylesheet">
  <script src="https://unpkg.com/survey-creator-core/survey-creator-core.min.js"></script>
  <script src="https://unpkg.com/survey-creator-knockout/survey-creator-knockout.min.js"></script>
  <!-- ... -->
</head>
```

```html
<body>
  <!-- ... -->
  <div id="surveyContainer">
    <div id="creatorElement" style="height: 100vh;"></div>
  </div>
  <!-- ... -->
</body>
```

```js
// Instantiate Survey Creator
const creator = new SurveyCreator.SurveyCreator({ showLogicTab: true });
// Enable auto save
creator.isAutoSave = true;
// Show notifications before and after a survey definition JSON is saved
creator.showState = true;
// Save the survey definition JSON to your web service
creator.saveSurveyFunc = (saveNo, callback) => {
  // Call a function on your web service to store the survey definition JSON
  // As an alternative to creator.JSON, you can use the creator.text string property
  // saveSurveyJSON(this.id, creator.JSON, () => {
  //   callback(saveNo, true);
  // });
};
// Load a survey definition JSON from you web service
// ...
// Assign the survey definition to Survey Creator
// creator.JSON = yourJSON;

creator.render("creatorElement");
```

## Use with Angular

Install the package:

```
npm install survey-creator-knockout --save
```

Open the `angular.json` file and reference CSS files for SurveyJS (survey-core) and Survey Creator:

{
  ...
  "projects": {
    "project-name": {
      ...
      "architect": {
        "build": {
          ...
          "options": {
            ...
            "styles": [
              ...
              "node_modules/survey-core/defaultV2.min.css",
              "node_modules/survey-creator-core/survey-creator-core.min.css"
            ],
            ...


Create a new component and use it in your Angular application:

```js
import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { SurveyCreator } from "survey-creator-knockout";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "creator",
  template: `<div class="survey-container contentcontainer codecontainer" id="surveyCreatorContainer">
    <div id="creatorElement" style="height: 100vh;"></div>
  </div>`
})
export class SurveyCreatorComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();
  @Input() result: any;

  ngOnInit() {
    // Instantiate Survey Creator
    const creator = new SurveyCreator({ showLogicTab: true });
    // Enable auto save
    creator.isAutoSave = true;
    // Show notifications before and after a survey definition JSON is saved
    creator.showState = true;
    // Save the survey definition JSON to your web service
    creator.saveSurveyFunc = (saveNo, callback) => {
      // Call a function on your web service to store the survey definition JSON
      // As an alternative to creator.JSON, you can use the creator.text string property
      // saveSurveyJSON(this.id, creator.JSON, () => {
      //   callback(saveNo, true);
      // });
    };
    // Load a survey definition JSON from you web service
    // ...
    // Assign the survey definition to Survey Creator
    // creator.JSON = yourJSON;
    creator.render("creatorElement");
  }
}
```

## Use with Vue

Install the package:

```
npm install survey-creator-knockout --save
```

Create a new component and use it in your Vue application:

```js
<template>
  <div id="creatorElement" />
</template>

<script>
import { SurveyCreator } from "survey-creator-knockout";
// Import CSS files for SurveyJS (survey-core) and Survey Creator
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

export default {
  name: "surveyjs-creator-component",
  mounted() {
    // Instantiate Survey Creator
    const creator = new SurveyCreator({ showLogicTab: true });
    // Enable auto save
    creator.isAutoSave = true;
    // Show notifications before and after a survey definition JSON is saved
    creator.showState = true;
    // Save the survey definition JSON to your web service
    creator.saveSurveyFunc = (saveNo, callback) => {
      // Call a function on your web service to store the survey definition JSON
      // As an alternative to this.creator.JSON, you can use the this.creator.text string property
      // saveSurveyJSON(this.id, creator.JSON, () => {
      //   callback(saveNo, true);
      // });
    };
    // Load a survey definition JSON from you web service
    // ...
    // Assign the survey definition to Survey Creator
    // this.creator.JSON = yourJSON;
    creator.render("creatorElement");
  }
};
</script>
   
```

## Use with React

Use the [survey-creator-react](/packages/survey-creator-react) package instead.

## License

The Survey Creator (Form Builder) is **not available for free commercial usage**. You can find more information about licensing this product on the following page: [Licenses](http://surveyjs.io/Licenses).
