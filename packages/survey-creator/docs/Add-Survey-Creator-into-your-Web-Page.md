# Add Survey Creator / Form Builder  into your page

The easiest way to add the survey creator into your web page, is to go to [one of our examples](](https://surveyjs.io//Examples/Survey-Creator/), click on plunker button and copy the code from plunker editors into your web application.

If you do not want to use our Azure CDN, you may download our script files from GitHub: [Survey Creator](https://github.com/surveyjs/survey-creator/releases) and [SurveyJS library](https://github.com/surveyjs/survey-library/releases), or go to our [cdn repo](https://github.com/surveyjs/builds). It contains all versions since 0.12.0 (early 2017).

Finally you may install our npm package:
```npm install survey-creator```

## Step 1. Add links to [knockout](http://knockoutjs.com).

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>
```

## Step 2.  Add links to survey creator and survey library

Add link to Survey Creator classes.
```javascript
<link href="https://unpkg.com/@SurveyJSVersion/survey-creator.css" type="text/css" rel="stylesheet" />
```

Link to the SurveyJS Library knockout version and Survey Creator library.
```javascript
<script src="https://unpkg.com/@SurveyJSVersion/survey.ko.min.js">
<script src="https://unpkg.com//@SurveyJSVersion/survey-creator.min.js"></script>
```

## Step 3. Use boostrap or use our Themes

You may use bootstrap
```javascript
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
```

Or you may use one of our default themes (you may create your own theme).
```javascript
//You may use any of these: "default", "orange", "darkblue", "darkrose", "stone", "winter", "winterstone"
SurveyCreator.StylesManager.applyTheme("darkblue");
```

## Step 4. Show Survey Creator on the page

Inside your web page

```html
<div id="surveyCreatorContainer"></div>
```

```javascript
var options = {showEmbededSurveyTab: true}; //see examples below
var surveyCreator = new SurveyCreator.SurveyCreator("surveyCreatorContainer", options);
//set function on save callback
surveyCreator.saveSurveyFunc = saveMySurvey;
```

## Step 5. Save and load surveys

Save survey
```javascript
function saveMySurvey(){
    var yourNewSurveyJSON = surveyCreator.text;
    //send updated json in your storage  
}
```
Set Survey JSON directly
```surveyCreator.text = yourSurveyJSON;```

Load Survey from SurveyJS Service
```surveyCreator.loadSurvey(yourSurveyId);```

## Step 6. Customize Survey Creator via options

```javascript
var options = {
 // show the embedded survey tab. It is hidden by default
 showEmbededSurveyTab : true,
 // hide the test survey tab. It is shown by default
 showTestSurveyTab : false,
 // hide the JSON text editor tab. It is shown by default
 showJSONEditorTab : false,
 // show the "Options" button menu. It is hidden by default 
 showOptions: true                          
};
// pass the options into the constructor. It is an optional parameter.
var surveyCreator = new SurveyCreator.SurveyCreator("surveyCreatorContainer", options);
```

## Step 7. Optional external libraries.

+ Optionally use [Ace Code Editor](https://ace.c9.io/), instead of textarea.
+ Optionally use [Select2](https://select2.github.io/), instead of standard select for element selector.

Please note, **select2** requires [jQuery](https://jquery.com/)

Add link to ace editor library.
```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.10/ace.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.10/worker-json.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.10/mode-json.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.10/ext-language_tools.js" type="text/javascript"></script>
```

Add link to select2 and jQuery plugin.
```javascript
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js" type="text/javascript"></script>
```
