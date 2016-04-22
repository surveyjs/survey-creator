**survey.js.editor** is the visual editor for [surveyjs](https://github.com/andrewtelnov/surveyjs). It uses JSON to store the survey metadata.

#Download
Dowload the latest version as zip file [Download](http://surveyjs.org/downloads/surveyjs.editor.zip)

#Example of using
```
<div id="surveyjseditor"></div>
<script type="text/javascript">
	var editor = new SurveyEditor.SurveyEditor("surveyjseditor");
	//set/get the result
	editor.text = JSON.stringify({pages:[questions:[{ name: "rateme", type: "rating" }]]});
</script>
```
See the visual editor in [action](http://surveyjs.org/builder/).

#Dependencies
 The library depends from: [surveyjs](http://surveyjs.org), [knockoutjs](http://knockoutjs.com), [bootstrap](http://getbootstrap.com) and [ace editor](https://ace.c9.io/).

##Coming features

Find the features under development and Todo list in the [Trello board](https://trello.com/b/lAwhTw3H/surveyjs-project).

#License

|Non-commercial use   | Commercial use   |
|------|------|
|[![Noncommercial](https://licensebuttons.net/l/by-nc/3.0/88x31.png)](http://creativecommons.org/licenses/by-nc/3.0/legalcode) | Please contact me: andrew.telnov at gmail.com  |