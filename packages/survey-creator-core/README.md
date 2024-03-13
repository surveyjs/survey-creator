# Survey Creator Model (Platform-Independent Part)


<video src="https://github.com/surveyjs/survey-creator/assets/22315929/884eeb5b-68e6-4d38-a8f9-d2483e6ce386"></video>


[![Build Status](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_apis/build/status/SurveyJS%20Creator?branchName=master)](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_build/latest?definitionId=8&branchName=master)
<a href="https://www.npmjs.com/package/survey-creator"><img alt="NPM Version" src="https://img.shields.io/npm/v/survey-creator.svg" data-canonical-src="https://img.shields.io/npm/v/survey-creator.svg" style="max-width:100%;"></a>

A platform-independent data model for Survey Creator / Form Builder by [SurveyJS](https://surveyjs.io/documentation). This package should be used with one of the following platform-specific UI rendering packages:

- [`survey-creator-react`](https://www.npmjs.com/package/survey-creator-react) for React
- [`survey-creator-angular`](https://www.npmjs.com/package/survey-creator-angular) for Angular
- [`survey-creator-vue`](https://www.npmjs.com/package/survey-creator-vue) for Vue
- [`survey-creator-knockout`](https://www.npmjs.com/package/survey-creator-knockout) for Knockout and jQuery

## Build the Survey Creator Model from Sources

If you want to build the library yourself, do the following:

1.  **Clone the repo from GitHub and install build dependencies**

    ```
    git clone https://github.com/surveyjs/survey-creator.git
    cd survey-creator/packages/survey-creator-core
    npm install
    ```

1.  **Build the library**

    ```
    npm run build
    ```

    You can find the built library in the "build" directory.

1.  **Run unit tests**
    ```
    npm test
    ```
    This command runs unit tests using [Karma](https://karma-runner.github.io/0.13/index.html).

## Licensing

Survey Creator (Form Builder) is **not available for free commercial usage**. You can find more information about licensing this product on the following page: [Product Licensing](https://surveyjs.io/licensing).
