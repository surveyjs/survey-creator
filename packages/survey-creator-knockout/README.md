**SurveyJS Creator for knockout** is the visual survey creator / form builder for [SurveyJS](https://github.com/surveyjs/survey-library).
[![Build Status](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_apis/build/status/SurveyJS%20Creator?branchName=master)](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_build/latest?definitionId=8&branchName=master)
<a href="https://www.npmjs.com/package/survey-creator"><img alt="NPM Version" src="https://img.shields.io/npm/v/survey-creator.svg" data-canonical-src="https://img.shields.io/npm/v/survey-creator.svg" style="max-width:100%;"></a>

## See Survey Creator / Form Builder in action

[Create your Survey or Form now](https://surveyjs.io/create-survey/)


## Install

Install the library using npm.

```
npm install survey-creator-knockout
```

## Include into your project

### Into knockout or jQuery web application

```html
<head>
  ...
<script src="https://unpkg.com/knockout@3.5.1/build/output/knockout-latest.js"></script>
<script src="https://unpkg.com/survey-core/survey.core.min.js"></script>
<script src="https://unpkg.com/survey-knockout-ui/survey-knockout-ui.min.js"></script>
<link href="https://unpkg.com/survey-coredefaultV2.min.css" type="text/css" rel="stylesheet"/>
<script src="https://unpkg.com/survey-creator-knockout/survey-creator-knockout.min.js"></script>
<link href="https://unpkg.com/survey-creator-knockout/survey-creator-knockout.min.css" type="text/css" rel="stylesheet"/>
  ...
</head>
```

```html
<body>
  ...
  <div id="surveyContainer">
    <div id="creatorElement" style="height: 100vh;"></div>
  </div>
  ...
</body>
```

```js
//Create creator model
const creator = new SurveyCreator.SurveyCreator({ showLogicTab: true });
//Support auto save, fire saveSurveyFunc callback on changes
creator.isAutoSave = true;
//Show notifications on saving/saved
creator.showState = true;
//Save survey definition
creator.saveSurveyFunc = (saveNo, callback) => {
  //Call your webservice function to store survey definition JSON
  //as alternative you can use creator.text string property
  //saveSurveyJSON(this.id, creator.JSON, () => {
  //  callback(saveNo, true);
  //});
};
//Load survey definition that you can likely get from your web service
//creator.JSON = yourJSON;
creator.render("creatorElement");
```

### Into React application

Please use "survey-creator-react" package that was created for react application. It is library created using react rendering and approach. You should use it in your react application.

### Into Angular application

Include survey-creator-knockout into your package.json into dependencies section
````js
"dependencies": {
   ...  
   "survey-creator-knockout": "latest"
}
````
and create a new component, that you can use in your Angular application
````js
import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import * as Survey from "survey-core";
import * as SurveyCreator from "survey-creator-knockout";
//Import CSS rules from Survey Library (survey-core) and Creator
import "survey-core/defaultV2.min.css";
import "survey-creator-knockout/survey-creator-knockout.css";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "creator",
  template: `<div class="survey-container contentcontainer codecontainer" id="surveyCreatorContainer">
    <div id="creatorElement" style="height: 100vh;"></div>
  </div>`
})
export class SurveyCreatorComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();
  @Input()
  result: any;

  ngOnInit() {
    //Create creator model
    const creator = new SurveyCreator.SurveyCreator({ showLogicTab: true });
    //Support auto save, fire saveSurveyFunc callback on changes
    creator.isAutoSave = true;
    //Show notifications on saving/saved
    creator.showState = true;
    //Save survey definition
    creator.saveSurveyFunc = (saveNo, callback) => {
    //Call your webservice function to store survey definition JSON
    //as alternative you can use creator.text string property
    //saveSurveyJSON(this.id, creator.JSON, () => {
     //  callback(saveNo, true);
    //});
    //Load survey definition that you can likely get from your web service
    //this.creator.JSON = yourJSON;
    creator.render("creatorElement");
  }
}
````

### Into Vue application

Include survey-creator-knockout into your package.json into dependencies section
````js
"dependencies": {
   ...  
   "survey-creator-knockout": "latest"
}
````
and create a new component, that you can use in your Vue application
````js
<template>
  <div id="creatorElement" />
</template>

<script>
import * as SurveyCreator from "survey-creator-knockout";
//Import CSS rules from Survey Library (survey-core) and Creator
import "survey-core/defaultV2.min.css";
import "survey-creator-knockout/survey-creator-knockout.min.css";

export default {
  name: "surveyjs-creator-component",
  mounted() {
    //Create creator model
    const creator = new SurveyCreator.SurveyCreator({ showLogicTab: true });
    //Support auto save, fire saveSurveyFunc callback on changes
    creator.isAutoSave = true;
    //Show notifications on saving/saved
    creator.showState = true;
    //Save survey definition
    creator.saveSurveyFunc = (saveNo, callback) => {
    //Call your webservice function to store survey definition JSON
    //as alternative you can use creator.text string property
    //saveSurveyJSON(this.id, creator.JSON, () => {
     //  callback(saveNo, true);
    //});
    //Load survey definition that you can likely get from your web service
    //this.creator.JSON = yourJSON;
    creator.render("creatorElement");
  }
};
</script>
   
````

### Explore examples

To learn how to include the visual survey creator / form builder on your page and explore examples of using, please go to [surveyjs.io/Examples/Survey-Creator](https://surveyjs.io/Examples/Survey-Creator) web site

### Read documentation

To find out more about the library concepts and the you may customize it, please read [our documentation](https://surveyjs.io/Documentation/Survey-Creator)

## License

The Survey Creator (Form Builder) is NOT FREE for commercial using. Please find more about licensing the product [here](http://surveyjs.io/Licenses).
