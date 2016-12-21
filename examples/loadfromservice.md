---
layout: example
title: Load a survey from the service. 
platform: knockout
---
{% capture survey_setup %}
var editor = new SurveyEditor.SurveyEditor("editorElement");
editor.loadSurvey("d5220f76-4802-40cf-ad67-61d7e55608e5");
{% endcapture %}

{% include live-example-code.html %}