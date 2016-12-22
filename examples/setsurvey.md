---
layout: example
title: Set and save a survey.
propertiesFile: exampleproperties/setsurvey.html 
platform: knockout
---
{% capture survey_setup %}
var editor = new SurveyEditor.SurveyEditor("editorElement");
//Setting this callback will make visible the "Save" button
editor.saveSurveyFunc = function() {
    //save the survey JSON
    var jsonEl = document.getElementById('surveyJSON');
    jsonEl.value = editor.text;
}

editor.text = "{ pages: [{ name:\'page1\', questions: [{ type: \'text\', name:\"q1\"}]}]}";
{% endcapture %}

{% include live-example-code.html %}