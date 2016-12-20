---
layout: example
title: Use options to customize the editor
propertiesFile: exampleproperties/options.html 
platform: knockout
---
{% capture survey_setup %}
//Use default options. By default JSON and Test Survey tabs are visible. 
var editorOptions = {};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
{% endcapture %}

{% include live-example-code.html %}