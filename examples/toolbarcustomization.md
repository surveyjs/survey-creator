---
layout: example
title: Add custom button in the editor's toolbar to show test survey in the separate popup window
platform: knockout
---
{% capture survey_setup %}
Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
Survey.Survey.cssType = "bootstrap";
//Hide Test Survey tab
var options = { showTestSurveyTab: false };
var editor = new SurveyEditor.SurveyEditor("editorElement", options);
//Add custom button in the toolbar
editor.toolbarItems.push({
        id: "custom-preview",
        visible: true,
        title: "Survey Preview",
        action: function() {
            var windowElement = document.getElementById("surveyContainerInPopup");
            var testSurveyModel = new Survey.Model(editor.getSurveyJSON());
            testSurveyModel.render("surveyContainerInPopup");
            $("#modalSurvey").modal("show");
        }
});
{% endcapture %}

{% include live-example-code.html %}

<h2>Question Toolbar API</h2>
<h4>toolbarItems property: knockout observable array of boolbar items</h4>
<div>Use toolbarItems for toolbar customizations. Only the given toolbar items will appear in the Toolbar</div>

<h4>Question Toolbar Item properties</h4>
<pre><code class="language-java1script">{
    id: string;
    visible: boolean | KnockoutObservable(boolean);
    title: string | KnockoutObservable(string);
    action: Function;
}</code></pre>
<ul>
<li><i>id</i> – The required attribute. The unique toolbar item id.</li>
<li><i>visible</i> – The required attribute. Controls visibility of the toolbar item.</li>
<li><i>title</i> – The required attribute. Toolbar buuton title. </li>
<li><i>action</i>  – The required attribute. Function will be called on button click.</li>
</ul>
