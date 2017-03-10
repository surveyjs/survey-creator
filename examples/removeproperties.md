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
<h2>Removing/hiding properties</h2>
Removing a property, will remove the value of this property from objects. This value could not be stored/load into/from JSON.
<p />
If you want only to hide the property from UI, then use onCanShowProperty event.
<p />
Please note, that the property will be removed/hidden from property editor and from question editor as well.