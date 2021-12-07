# Survey Creator V2 for React (Beta)

[![Build Status](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_apis/build/status/SurveyJS%20Creator?branchName=master)](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_build/latest?definitionId=8&branchName=master)
<a href="https://www.npmjs.com/package/survey-creator"><img alt="NPM Version" src="https://img.shields.io/npm/v/survey-creator.svg" data-canonical-src="https://img.shields.io/npm/v/survey-creator.svg" style="max-width:100%;"></a>

Survey Creator V2 for React is a visual survey designer / form builder for the React version of [SurveyJS](https://github.com/surveyjs/survey-library).

- [Live Examples](https://surveyjs.io/Examples/Survey-Creator?platform=ReactjsV2)
- [Documentation](https://surveyjs.io/Documentation/Survey-Creator)
- [Create your Survey or Form now](https://surveyjs.io/create-survey-v2)

**NOTE**: This package contains Survey Creator V2. If you are looking for information on V1, refer to the [survey-creator](./packages/survey-creator) directory. Differences between these two versions are described in the following help topic: [SurveyJS Creator V2: What's new](https://surveyjs.io/Documentation/Survey-Creator?id=Creator-V2-Whats-New). For information on how to migrate to V2, refer to the [Migration Guide for SurveyJS Creator - from V1 to V2](https://surveyjs.io/Documentation/Survey-Creator?id=Migrate-from-V1-to-V2) article.

## Install

```
npm install survey-creator-react -- save
```

## Add Survey Creator V2 to Your Project

Create a new component and use it in your React application:

```js
import { Component, Fragment } from "react";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
// Import CSS stylesheets for SurveyJS (survey-core) and Survey Creator
import "survey-core/defaultV2.min.css";
import "survey-creator-react/survey-creator-react.min.css";

export class SurveyCreatorWidget extends Component {
  constructor() {
    super();
    // Instantiate Survey Creator
    this.creator = new SurveyCreator({ showLogicTab: true });
    // Enable auto save
    this.creator.isAutoSave = true;
    // Show notifications before and after a survey definition JSON is saved
    this.creator.showState = true;
    // Save the survey definition JSON to your web service
    this.creator.saveSurveyFunc = (saveNo, callback) => {
      // Call a function on your web service to store the survey definition JSON
      // As an alternative to this.creator.JSON, you can use the this.creator.text string property
      // saveSurveyJSON(this.id, this.creator.JSON, () => {
      //   callback(saveNo, true);
      // });
    };
  }
  componentDidMount() {
    // Load a survey definition JSON from you web service
    // ...
    // Assign the survey definition to Survey Creator
    // this.creator.JSON = yourJSON;
  }
  render() {
    return (
      <Fragment>
        <SurveyCreatorComponent creator={this.creator} />
      </Fragment>
    );
  }
}
```

## License

The Survey Creator (Form Builder) is **not available for free commercial usage**. You can find more information about licensing this product on the following page: [Licenses](http://surveyjs.io/Licenses).
