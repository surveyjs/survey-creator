---
layout: example
title: Allow to change only title for survey object and remove visibleIf property from page and question objects 
platform: knockout
---
{% capture survey_setup %}
//remove a property to the page object. You can't set it in JSON as well
Survey.JsonObject.metaData.removeProperty("page", "visibleIf");
//remove a property from the base question class and as result from all questions 
Survey.JsonObject.metaData.removeProperty("questionbase", "visibleIf");

var editor = new SurveyEditor.SurveyEditor();
//Hide properties from properties editor. You may set hidden properties in JSON editor. 
editor.onCanShowProperty.add(function(sender, options){
    if(options.obj.getType() == "survey") {
        options.canShow = options.property.name == "title";
    }
});
editor.render("editorElement");
{% endcapture %}

{% include live-example-code.html %}