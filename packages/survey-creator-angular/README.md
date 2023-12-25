# Survey Creator / Form Builder for Angular


<video src="https://github.com/surveyjs/survey-creator/assets/22315929/884eeb5b-68e6-4d38-a8f9-d2483e6ce386"></video>


[![Build Status](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_apis/build/status/SurveyJS%20Creator?branchName=master)](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_build/latest?definitionId=8&branchName=master)
<a href="https://www.npmjs.com/package/survey-creator"><img alt="NPM Version" src="https://img.shields.io/npm/v/survey-creator.svg" data-canonical-src="https://img.shields.io/npm/v/survey-creator.svg" style="max-width:100%;"></a>

A visual designer that enables you and your users to create and modify surveys and forms in your Angular application.

[Try Survey Creator / Form Builder](https://surveyjs.io/create-survey)

## Get Started

To get started with Survey Creator / Form Builder for Angular, refer to the following tutorial: [Add Survey Creator / Form Builder to an Angular Application](https://surveyjs.io/Documentation/Survey-Creator?id=get-started-angular).

## Resources

- [Website](https://surveyjs.io/)
- [Documentation](https://surveyjs.io/Documentation/Survey-Creator)
- [Live Examples](https://surveyjs.io/survey-creator/examples/free-nps-survey-template/angular)
- [What's New](https://surveyjs.io/WhatsNew)

## Build Survey Creator / Form Builder for Angular from Sources

If you want to build the library yourself, do the following:

1. **Build `survey-library` and `survey-creator-core`**\
    Refer to the following instructions:

    - [Build the SurveyJS Form Library from Sources](https://github.com/surveyjs/survey-library#build-the-surveyjs-form-library-from-sources)
    - [Build the Survey Creator Model from Sources](https://github.com/surveyjs/survey-creator/tree/master/packages/survey-creator-core#build-the-survey-creator-model-from-sources)

    > NOTE: Make sure that folders with cloned `survey-library` and `survey-creator` repositories are in the same directory.

2.  **Install build dependencies for Survey Creator / Form Builder for Angular**

    ```
    cd survey-creator/packages/survey-creator-angular
    npm install
    ```

3.  **Build the library**

    ```
    npm run build
    ```

    You can find the built library in the "build" directory.

4.  **Run unit tests**

    ```
    npm test
    ```
    This command runs unit tests using [Karma](https://karma-runner.github.io/0.13/index.html).

## Licensing

Survey Creator is **not available for free commercial usage**. If you want to integrate it into your application, you must purchase a [commercial license](https://surveyjs.io/licensing). However, you can [use Survey Creator online](https://surveyjs.io/create-survey) to produce survey JSON configurations and run them with [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview) in your application free of charge.
