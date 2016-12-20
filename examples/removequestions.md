---
layout: example
title: Remove unneeded questions. 
propertiesFile: exampleproperties/removequestions.html 
platform: knockout
---
{% capture survey_setup %}
//Use default options 
var editorOptions = {questionTypes : ["text", "checkbox", "radiogroup", "dropdown"]};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
{% endcapture %}

{% include live-example-code.html %}