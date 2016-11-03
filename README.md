**survey.js.editor** is the visual editor for [surveyjs](https://github.com/andrewtelnov/surveyjs). It uses JSON to store the survey metadata.

[![Build Status](https://travis-ci.org/andrewtelnov/surveyjs.editor.svg?branch=master)](https://travis-ci.org/andrewtelnov/surveyjs.editor)

#Download
Dowload the latest version as zip file [Download](http://surveyjs.org/downloads/surveyjs.editor.zip)

Install the library using npm.
```
npm install surveyjs-editor
```

#Example of using
```
<div id="surveyjseditor"></div>
<script type="text/javascript">
	var options = {};
	//surveyjseditor - element id or html element where editor will be rendered
	//options is an optional parameter.
	//options.generateValidJSON = true; //generate the valid JSON. By It is false by default and JSON5 is used.
	//options.questionTypes = ["text", "checkbox"]; Use it to limit the question types supported by the editor. By default it is empty and all available question types are used.
	var editor = new SurveyEditor.SurveyEditor("surveyjseditor", options);
	//set the survey json
	editor.text = JSON.stringify({pages:[questions:[{ name: "rateme", type: "rating" }]]});
	// setting saveSurveyFunc will make visible the save button
	// use it to save the survey json as text in your database
	editor.saveSurveyFunc = function() { var myJSONText = editor.text; };
</script>
```
See the visual editor in [action](http://surveyjs.org/builder/).

##Building surveyjs Editor from sources

To build library yourself:

 1. **Clone the repo from GitHub**  
	```
	git clone https://github.com/andrewtelnov/surveyjs.editor.git
	cd surveyjs.editor
	```

 2. **Acquire build dependencies.** Make sure you have [Node.js](http://nodejs.org/) installed on your workstation. 
	```
	npm install -g gulp
	npm install -g typings
	npm install
	```
	The first `npm` command sets up the popular [Gulp](http://gulpjs.com/) build tool. 
	The second `npm` command sets up the Typescript Definition Manager [Typings](https://github.com/typings/typings). 

 3. **Create TypeScript definition files**
	```
	typings install
	```
	Typescript definition files should be located at 'typings' directory.

 4. **Build the library**
	```
	gulp makedist
	```
	After that you should have the library at 'dist' directory.

 5. **Run unit tests**
	```
	gulp copyfiles
	gulp test_ci
	```
	The first command will copy all required files to 'wwwroot' directory and the last command will run unit tests usign [Karma](https://karma-runner.github.io/0.13/index.html)


##Coming features

Find the features under development and Todo list in the [Trello board](https://trello.com/b/lAwhTw3H/surveyjs-project).

#Dependencies
 The library depends from: [surveyjs](http://surveyjs.org), [knockoutjs](http://knockoutjs.com), [bootstrap](http://getbootstrap.com) and [ace editor](https://ace.c9.io/).

#License

|Non-commercial use   | Commercial use   |
|------|------|
|[![Noncommercial](https://licensebuttons.net/l/by-nc/3.0/88x31.png)](http://creativecommons.org/licenses/by-nc/3.0/legalcode) | Please contact me: andrew.telnov at gmail.com  |