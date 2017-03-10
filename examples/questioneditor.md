---
layout: example
title: Customize Question Editor
platform: knockout
---
{% capture survey_setup %}
//Add a tag property to all questions
Survey.JsonObject.metaData.addProperty("questionbase", "tag");
// Change the order of name and title properties, remove the startWithNewLine property and add a tag property
SurveyEditor.SurveyQuestionEditorDefinition.definition["questionbase"].properties = 
["title", "name", {name: "tag", title: "Tag"}, {name: "visible", category: "checks"}, {name: "isRequired", category: "checks"}];
// make visibleIf tab the second after general for all questions
SurveyEditor.SurveyQuestionEditorDefinition.definition["questionbase"].tabs = [{name: "visibleIf", index: 1}];

var editor = new SurveyEditor.SurveyEditor("editorElement");

{% endcapture %}
{% include live-example-code.html %}
<h2>Question Editor Definition</h2>
UI of Question Editors are built based on JSON located in SurveyEditor.SurveyQuestionEditorDefinition.definition property.
<p/>
You can modify it, before creating the editor object. 
<p/>
The UI builder combines the information for the selected question type and all its parents. For example, the "dropdown" question combines properties and tabs from: "questionbase", "selectbase" and "dropdown".
<p/>
The origional, unmodified definition, you may find <a href="https://github.com/surveyjs/editor/blob/master/src/questionEditors/questionEditorDefinition.ts">here</a>
<p/>
Here is the full Question Editors definition as JSON, used in the demo, property SurveyEditor.SurveyQuestionEditorDefinition.definition:
<textarea id="questionEditorJSON" style="width: 100%" rows="20">
</textarea>
<script>
    document.getElementById("questionEditorJSON").value = JSON.stringify(SurveyEditor.SurveyQuestionEditorDefinition.definition, null, 2);
</script>