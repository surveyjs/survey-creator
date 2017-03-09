---
layout: example
title: Add, remove, replace, save and load items in Question Toolbox. 
propertiesFile: exampleproperties/toolboxcustomization.html 
platform: knockout
---
{% capture survey_setup %}
var editorOptions = {questionTypes : ["text", "checkbox", "radiogroup", "dropdown"]};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
//Add all countries question into toolbox
editor.toolbox.addItem({
        name: "countries",
        isCopied: true,
        iconName: "icon-default",
        title: "All countries",
        json: { "type": "dropdown",  optionsCaption: "Select a country...", choicesByUrl: { url: "https://restcountries.eu/rest/v1/all"   } }
});
{% endcapture %}

{% include live-example-code.html %}

<h2>Question Toolbox API</h2>
<h4>Limit the default question types</h4>
<div>Use questionTypes string  array in the editorOptions parameter of Editor constructor. Only the given question types will appear in the Toolbox</div>
<pre><code class="language-javascript">var editorOptions = {questionTypes : ["text", "checkbox", "radiogroup", "dropdown"]};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);</code></pre>
<h4>Question Toolbox functions</h4>
From version 0.12.0 a new editor.toolbox property has been introduced. It provides the full control under Question Toolbox.
<ul>
Here is the list of available properties and functions:
<li><i>jsonText</i> – The string property. Allows to get and set all toolbox items as a string.</li>
<li><i>copiedJsonText</i> – The string property. Allows to get and set copied questions as a string. End-user may add a queston into toolbox by clicking on 'Add to Toolbox' question menu item.</li>
<li><i>items</i> – Returns the list of current toolbox items. Toolbox item properties are described below.</li>
<li><i>copiedItems</i> – Returns the list of current copied toolbox items. End-user may add a queston into toolbox by clicking on 'Add to Toolbox' question menu item.</li>
<li><i>addItems(items[, clearAll])</i>  – Add the list of toolbox items into toolbox. If an optional parameter clearAll is set to true, all previous items will be removed.</li>
<li><i>addCopiedItem(question</i>  – Add a question into Toolbox as a copied item.</li>
<li><i>addItem(item)</i>  – Add a new item into toolobx. If the item with the same name already exists, then replace it.</li>
<li><i>replaceItem(item)</i>  – Find an existing item by item.name and replace its properties. Return false if the item with the same name doesn't exist.</li>
<li><i>removeItem(name)</i>  – Find an existing item by name parameter and remove it.</li>
<li><i>clearItems()</i>  – Remove all items from the toolbox.</li>
<li><i>clearCopiedItems()</i> - Remove all copied items from the toolbox.</li>
</ul>

<h4>Question Toolbox Item properties</h4>
<pre><code class="language-java1script">{
    name: string;
    iconName: string;
    json: any;
    title: string;
    isCopied: boolean;
}</code></pre>
<ul>
<li><i>name</i> – The required attribute. The unique item id. By default it is a question type.</li>
<li><i>iconName</i> – The optional attribute. The icon name. The default value is 'icon-default'. It is 'icon-' + [question_type] for a standard Survey question.</li>
<li><i>json</i> – The required attribute. A question is created based on this json. The json should has at least the 'type' string property. It used to create the correct question. All other properties are optional and you </li>
<li><i>title</i> – The toolbox item title.</li>
<li><i>isCopied</i>  – true if the item is created by clicking on 'Add to Toolbox' question menu item.</li>
</ul>
