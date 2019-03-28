# Add Survey Builder (Editor) into your page

The easiest way to add the survey into your web page, is to go to [one of our examples](](https://surveyjs.io//Examples/Builder/), click on plunker button and copy the code from plunker editors into your web application.

If you do not want to use our Azure CDN, you may download our script files from GitHub: [SurveyJS Editor/Builder](https://github.com/surveyjs/editor/releases) and [SurveyJS library](https://github.com/surveyjs/surveyjs/releases), or go to our [cdn repo](https://github.com/surveyjs/builds). It contains all versions since 0.12.0 (early 2017).

Finally you may install our npm package:
```npm install surveyjs-editor```

## Step 1. Add links to [knockout](http://knockoutjs.com).

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>
```

## Step 2.  Add links to surveyjs.editor and surveyjs libraries

Add link to builder classes.
```javascript
<link href="https://surveyjs.azureedge.net/@SurveyJSVersion/surveyeditor.css" type="text/css" rel="stylesheet" />
```

Link to the SurveyJS Library knockout version and Editor library.
```javascript
<script src="https://surveyjs.azureedge.net/@SurveyJSVersion/survey.ko.min.js">
<script src="https://surveyjs.azureedge.net/@SurveyJSVersion/surveyeditor.min.js"></script>
```

## Step 3. Use boostrap or use our Themes

You may use bootstrap
```
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
```

Or you may use one of our default themes (you may create your own theme)
```javascript
//You may use any of these: "default", "orange", "darkblue", "darkrose", "stone", "winter", "winterstone"
SurveyEditor.StylesManager.applyTheme("darkblue");
```

## Step 4. Show Survey Builder on the page

Inside your web page

```
<div id="surveyEditorContainer"></div>
```

```javascript
var editorOptions = {showEmbededSurveyTab: true}; //see examples below
var survey = new SurveyEditor.SurveyEditor("surveyEditorContainer", editorOptions);
//set function on save callback
editor.saveSurveyFunc = saveMySurvey;
```

## Step 5. Save and load surveys

Save survey
```javascript
function saveMySurvey(){
    var yourNewSurveyJSON = editor.text;
    //send updated json in your storage  
}
```
Set Survey JSON directly
```editor.text = yourSurveyJSON;```

Load Survey from SurveyJS Service
```editor.loadSurvey(yourSurveyId);```

## Step 6. Customize Builder via options

```javascript
var editorOptions = {
 // show the embeded survey tab. It is hidden by default
 showEmbededSurveyTab : true,
 // hide the test survey tab. It is shown by default
 showTestSurveyTab : false,
 // hide the JSON text editor tab. It is shown by default
 showJSONEditorTab : false,
 // show the "Options" button menu. It is hidden by default 
 showOptions: true                          
};
// pass the editorOptions into the constructor. It is an optional parameter.
var survey = new SurveyEditor.SurveyEditor("surveyEditorContainer", editorOptions);
```

## Step 7. Optional external libraries.

+ Optionally use [Ace Code Editor](https://ace.c9.io/), instead of textarea.
+ Optionally use [Select2](https://select2.github.io/), instead of standard select for element selector.

Please note, **select2** requires [jQuery](https://jquery.com/)

Add link to ace editor library.
```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.0/ace.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.0/worker-json.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.0/mode-json.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.0/ext-language_tools.js" type="text/javascript"></script>
```

Add link to select2 and jQuery plugin.
```javascript
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js" type="text/javascript"></script>
```