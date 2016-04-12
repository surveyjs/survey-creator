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
 The visual library is depends from: [surveyjs](http://surveyjs.org), [knockoutjs](http://knockoutjs.com) and [bootstrap](http://getbootstrap.com).

#License
 For Non-commercial use - [(https://licensebuttons.net/l/by-nc/3.0/88x31.png)](http://creativecommons.org/licenses/by-nc/3.0/legalcode).
 For commercial use, please contact me: andrew.telnov at gmail.com.  