---
layout: example
title: Change new created question properties and make properties readonly.
platform: knockout
---
{% capture survey_setup %}
//Add a tag property
Survey.JsonObject.metaData.addProperty("questionbase", "tag");
//Make name and tag properties read-only
Survey.JsonObject.metaData.findProperty("questionbase", "name").readOnly = true;
Survey.JsonObject.metaData.findProperty("questionbase", "tag").readOnly = true;

var editor = new SurveyEditor.SurveyEditor();

var questionCounter = 1;
//Set the name property different from the default value 
//and set the tag property to a generated GUID value.
editor.onQuestionAdded.add(function(sender, options){
    var q = options.question;
    var t = q.getType();
    q.name = "Question" + t[0].toUpperCase() + t.substring(1) + questionCounter;
    q.tag = guid();
    questionCounter ++;
});
editor.render("editorElement");

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

{% endcapture %}

{% include live-example-code.html %}
<h2>Use onQuestionAdded event</h2>
Use this event to modify a new created question in the designer as you want. 
<p/>
You may make any property readonly by setting its "readOnly" attribute to true. It is always false by default.
<pre><code class="language-javascript">Survey.JsonObject.metaData.findProperty("questionbase", "name").readOnly = true;
</code></pre>

