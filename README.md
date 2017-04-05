**survey.js.editor** is the visual editor for [surveyjs](https://github.com/surveyjs/surveyjs). It uses JSON to store the survey metadata.

[![Build Status](https://travis-ci.org/surveyjs/editor.svg?branch=master)](https://travis-ci.org/surveyjs/editor)

*Download*
Dowload the latest version as zip file [Download](http://surveyjs.org/downloads/surveyjs.editor.zip)

Install the library using npm.
```
npm install surveyjs-editor
```

To learn how to include the visual editor on your page and explore examples of using, please go to [editor.surveyjs.io](http://editor.surveyjs.io) web site

See the visual editor in [action](http://surveyjs.org/builder/).

*Use quickstart repos*: [Angular 2](https://github.com/surveyjs/surveyjs_angular_quickstart), [Angular CLI](https://github.com/surveyjs/surveyjs_angular_cli), [React](https://github.com/surveyjs/surveyjs_react_quickstart), [Vue](https://github.com/surveyjs/surveyjs_vue_quickstart)

*Building surveyjs Editor from sources*

To build library yourself:

 1. **Clone the repo from GitHub**  
	```
	git clone https://github.com/surveyjs/editor.git
	cd surveyjs.editor
	```

 2. **Acquire build dependencies.** Make sure you have [Node.js](http://nodejs.org/) installed on your workstation. 
	```
	npm install
	```

 3. **Build the library**
	```
	npm run build_prod
	```
	After that you should have the library at 'dist' directory.

 4. **Run unit tests**
	```
	karma start
	```
	This command will run unit tests usign [Karma](https://karma-runner.github.io/0.13/index.html)


#Dependencies
 The library depends on: [surveyjs](http://surveyjs.org), [knockoutjs](http://knockoutjs.com), [bootstrap](http://getbootstrap.com) and [ace editor](https://ace.c9.io/).

#License

The SurveyJS Editor is NOT FREE for commercial using. Please find more about licensing the product [here](http://editor.surveyjs.io/license.html).