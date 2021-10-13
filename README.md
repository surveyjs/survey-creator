**survey.creator** is the visual survey creator / form builder for [SurveyJS](https://github.com/surveyjs/survey-library). It uses JSON to store the survey metadata.

[![Build Status](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_apis/build/status/SurveyJS%20Creator?branchName=master)](https://dev.azure.com/SurveyJS/SurveyJS%20Integration%20Tests/_build/latest?definitionId=8&branchName=master)
<a href="https://www.npmjs.com/package/survey-creator"><img alt="NPM Version" src="https://img.shields.io/npm/v/survey-creator.svg" data-canonical-src="https://img.shields.io/npm/v/survey-creator.svg" style="max-width:100%;"></a>
<a href="https://github.com/surveyjs/survey-creator/issues">
<img alt="Issues" title="Open Issues" src="https://img.shields.io/github/issues/surveyjs/survey-creator.svg">
</a>
<a href="https://github.com/surveyjs/survey-creator/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+">
<img alt="Closed issues" title="Closed Issues" src="https://img.shields.io/github/issues-closed/surveyjs/survey-creator.svg">
</a>

## See Survey Creator / Form Builder in action

[Create your Survey or Form now](https://surveyjs.io/create-survey/)


## Download

Dowload the latest version as zip file [Download](https://github.com/surveyjs/survey-creator/releases)

Install the library using npm.

```
npm install survey-creator
```

Or use Azure CDN:
- https://unpkg.com/survey-creator@{version-number}/survey-creator.js
- https://unpkg.com/survey-creator@{version-number}/survey-creator.css

## Include into your project

### Explore examples

To learn how to include the visual survey creator / form builder on your page and explore examples of using, please go to [surveyjs.io/Examples/Survey-Creator](https://surveyjs.io/Examples/Survey-Creator) web site

### Read documentation

To find out more about the library concepts and the you may customize it, please read [our documentation](https://surveyjs.io/Documentation/Survey-Creator)

### Use quickstart repos

[Angular CLI](https://github.com/surveyjs/surveyjs_angular_cli), [React](https://github.com/surveyjs/surveyjs_react_quickstart), [Vue](https://github.com/surveyjs/surveyjs_vue_quickstart)

## See survey creator in action

See the survey creator in [action](http://surveyjs.io/Survey/Builder/).

## Building Survey Creator from sources

To build library yourself:

1.  **Clone the repo from GitHub**

    ```
    git clone https://github.com/surveyjs/survey-creator.git
    cd survey-creator/packages/survey-creator
    ```

2.  **Acquire build dependencies.** Make sure you have [Node.js](http://nodejs.org/) installed on your workstation. You need a version of Node.js greater than 6.0.0 and npm greater than 2.7.0

    ```
    npm install
    ```

3.  **Build the library**

    ```
    npm run build_prod
    ```

    After that you should have the library at 'build' directory.

4.  **Run unit tests**
    ```
    npm test
    ```
    This command will run unit tests using [Karma](https://karma-runner.github.io/0.13/index.html)

## Dependencies

The library depends on: [surveyjs](http://surveyjs.io/Library/) and [knockoutjs](http://knockoutjs.com)
Optionally you may use [bootstrap](http://getbootstrap.com), [ace editor](https://ace.c9.io/) and [select2](https://select2.org/)

## License

The Survey Creator (Form Builder) is NOT FREE for commercial using. Please find more about licensing the product [here](http://surveyjs.io/Licenses).
