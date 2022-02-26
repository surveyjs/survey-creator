# Survey Creator V1

[![Build Status](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_apis/build/status/SurveyJS%20Creator?branchName=master)](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_build/latest?definitionId=8&branchName=master)
<a href="https://www.npmjs.com/package/survey-creator"><img alt="NPM Version" src="https://img.shields.io/npm/v/survey-creator.svg" data-canonical-src="https://img.shields.io/npm/v/survey-creator.svg" style="max-width:100%;"></a>

The Survey Creator is a visual survey designer / form builder for [SurveyJS](https://github.com/surveyjs/survey-library).

- [Live Examples](https://surveyjs.io/Examples/Survey-Creator)
- [Documentation](https://surveyjs.io/Documentation/Survey-Creator)
- [Create your Survey or Form now](https://surveyjs.io/create-survey/)

**NOTE**: This package contains Survey Creator V1. For information on Survey Creator V2, refer to the following directories:

- [survey-creator-react](../survey-creator-react) for React
- [survey-creator-knockout](../survey-creator-knockout) for Knockout, jQuery, Angular, and Vue

## Quick Start

- [Angular CLI](https://github.com/surveyjs/surveyjs_angular_cli)
- [React](https://github.com/surveyjs/surveyjs_react_quickstart)
- [Vue](https://github.com/surveyjs/surveyjs_vue_quickstart)

## Download and Install

- npm

  ```
  npm install survey-creator
  ```

- Azure CDN

  https://unpkg.com/survey-creator@{version-number}/survey-creator.js   
  https://unpkg.com/survey-knockout@{version-number}/survey.ko.min.css    
  https://unpkg.com/survey-creator@{version-number}/survey-creator.css
  
- Zip file  
  [Download zip](https://github.com/surveyjs/survey-creator/releases)

## Dependencies

The Survey Creator depends on the following libraries:

- [SurveyJS](http://surveyjs.io/Library/)
- [Knockout](http://knockoutjs.com)

Optionally, you can use [Bootstrap](http://getbootstrap.com), [Ace editor](https://ace.c9.io/), and [Select2](https://select2.org/).

## Build the Survey Creator from Sources

If you want to build the library yourself, do the following:

1.  **Clone the repo from GitHub and install build dependencies**

    ```
    git clone https://github.com/surveyjs/survey-creator.git
    cd survey-creator/packages/survey-creator
    npm install
    ```

1.  **Build the library**

    ```
    npm run build_prod
    ```

    You can find the built library in the "build" directory.

1.  **Run unit tests**
    ```
    npm test
    ```
    This command runs unit tests using [Karma](https://karma-runner.github.io/0.13/index.html).

## License

The Survey Creator (Form Builder) is **not available for free commercial usage**. You can find more information about licensing this product on the following page: [Licenses](http://surveyjs.io/Licenses).