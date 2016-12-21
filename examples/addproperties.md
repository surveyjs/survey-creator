---
layout: example
title: Add custom properties to objects. 
platform: knockout
---
{% capture survey_setup %}
//add a property to the survey object
Survey.JsonObject.metaData.addProperty("survey", "tag:number");
//add a property to the page object
Survey.JsonObject.metaData.addProperty("page", {name: "tag:number", default: 1});
//add a property to the base question class and as result to all questions 
Survey.JsonObject.metaData.addProperty("questionbase", {name: "tag:number", default: 0});

//Use default options 
var editorOptions = {};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
{% endcapture %}

{% include live-example-code.html %}