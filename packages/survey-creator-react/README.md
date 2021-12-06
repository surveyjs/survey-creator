**SurveyJS Creator for react** is the visual survey creator / form builder for [SurveyJS](https://github.com/surveyjs/survey-library), for its react version.
[![Build Status](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_apis/build/status/SurveyJS%20Creator?branchName=master)](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_build/latest?definitionId=8&branchName=master)
<a href="https://www.npmjs.com/package/survey-creator"><img alt="NPM Version" src="https://img.shields.io/npm/v/survey-creator.svg" data-canonical-src="https://img.shields.io/npm/v/survey-creator.svg" style="max-width:100%;"></a>

## See Survey Creator / Form Builder in action

[Create your Survey or Form now](https://surveyjs.io/create-survey/)


## Install

Install the library using npm.

```
npm install survey-creator-react
```

## Include into your project

Include survey-creator-react into your package.json into dependencies section
````js
"dependencies": {
   ...  
   "survey-creator-react": "latest"
}
````
and create a new component, that you can use in your react application
````js
import { Component, Fragment } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
//Import CSS rules from Survey Library (survey-core) and Creator
import "survey-core/defaultV2.min.css";
import "survey-creator-react/survey-creator-react.min.css";

export class SurveyCreatorWidget extends Component {
  constructor() {
    super();
    //Create SurveyJS creator model instance in the constructor
    this.creator = new SurveyCreator({ showLogicTab: true });
    //Support auto save, fire saveSurveyFunc callback on changes
    this.creator.isAutoSave = true;
    //Show notifications on saving/saved
    this.creator.showState = true;
    //Save survey definition
    this.creator.saveSurveyFunc = (saveNo, callback) => {
       //Call your webservice function to store survey definition JSON
      //as alternative you can use this.creator.text string property
      //saveSurveyJSON(this.id, this.creator.JSON, () => {
      //  callback(saveNo, true);
      //});
    };
  }
  componentDidMount() {
    //Load survey definition that you can likely get from your web service
    //this.creator.JSON = yourJSON;
  }
  render() {
    //Render SurveyJS Creator using model initialized in constructor
    return (
      <Fragment>
        <SurveyCreatorComponent creator={this.creator}></SurveyCreatorComponent>
      </Fragment>
    );
  }
}
````

### Explore examples

To learn how to include the visual survey creator / form builder on your page and explore examples of using, please go to [surveyjs.io/Examples/Survey-Creator](https://surveyjs.io/Examples/Survey-Creator) web site

### Read documentation

To find out more about the library concepts and the you may customize it, please read [our documentation](https://surveyjs.io/Documentation/Survey-Creator)

## License

The Survey Creator (Form Builder) is NOT FREE for commercial using. Please find more about licensing the product [here](http://surveyjs.io/Licenses).
