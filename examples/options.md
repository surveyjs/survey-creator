---
layout: example
title: Use options to customize the editor
propertiesFile: exampleproperties/options.html 
platform: knockout
---
{% capture survey_setup %}

//Use default options. See more information about Survey options bellow.
var editorOptions = {};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
{% endcapture %}

{% include live-example-code.html %}
<h2>Survey options</h2>
You may:
<ul>
<li>Show/hide survey tabs.</li>
<li>Show/hide options menu button and turn-on valid JSON generation</li>
<li>Limit question types you want to have in the toolbox</li>
<li>Set the designer height</li>
</ul>
<h4>Show/hide survey tabs.</h4>
By default, "Survey Designer", "JSON Editor" and "Test Survey" are visible. "Embed Survey" tab is invisible.
The following boolean properties in editorOptions give you the control under them. Please note, that there is no property for "Survey Designer" tab. You can't make it invisible.
<ul>
<li><i>showJSONEditorTab</i> - Show/hide JSON editor tab. It is true by default.</li>
<li><i>showTestSurveyTab</i> - Show/hide Test Survey tab. It is true by default.</li>
<li><i>showEmbededSurveyTab</i> - Show/hide a tab that shows how to embed the survey into your web page. It is false by default.</li>
</ul>
<pre><code class="language-javascript">var editorOptions = {showJSONEditorTab: false};
//There will be two tabs visible: "Survey Designer" and "Test Survey"
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
</code></pre>

<h4>Show/hide options menu button and turn-on valid JSON generation.</h4>
There is an Options menu button in the editor. You may see it <a href="http://surveyjs.org/builder/">here</a>. It is invisible by default and in the most cases you do not need it showing it to your end-users. However, you may decide to generate a valid JSON, instead of <a href="http://json5.org/">JSON5</a>. The SurveyJS editor generates JSON5 json by default.
<li><i>generateValidJSON</i> - Generate valid JSON if it is true and a <a href="http://json5.org/">JSON5 - modern, user-friendly</a> if it is false. It is false by default and as result, the generated JSON is not VALID.</li>
<li><i>showOptions</i> - Show/hide options menu button, it is false by default.</li>

<h4>Limit question types you want to have in the toolbox</h4>
You may limit question types your end-users may use in the editor.

The following example show how to show in the toolbox only four question types.
<pre><code class="language-javascript">var editorOptions = {questionTypes : ["text", "checkbox", "radiogroup", "dropdown"]};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
</code></pre>

There are more possibilities for toolbox customization. Please go <a href="{{ site.baseurl }}/examples/toolboxcustomization.html">to this demo</a> to learn more about toolbox customization API.
<h4>Set the designer height</h4>
By default the designer height is "75vh". You may find it in the surveyeditor.css. You may set the designer height via options. The following examples set the designer height to 700px:
<pre><code class="language-javascript">var editorOptions = {designerHeight: "700px"};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
</code></pre>
