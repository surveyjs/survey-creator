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

<h2>Property definition specification</h2>
<h4>Short definition</h4>
<pre><code class="language-javascript">"propertyName[:propertyType]"</code></pre>
<h4>Full definition</h4>
<pre><code class="language-javascript">{name: "propertyName[:propertyType]" [, default: defaultValue][, choices: Array of values]
[, onGetValue: function (obj) { return yourValueFromObject; }]
[, onSetValue: function (obj: any, value: any) {/*perform an action on setting value */ }]}</code></pre>
<p>
<h4>propertyName</h4>
<div>A property name. If a property name begins with ‘!’, it means the property is required. If the property is not set, the json parser will raise an error.
For example, "name" and "type" properties of the question object are required: "!type" – it means that string property "type" is required.</div>
</p>
<p>
<h4>propertyType</h4>
It is an optional attribute. If the value is not set then the library treats it as a string property.
<ul>
<li><i>string</i> – it is the default value type. Property editor is a text input. "myProperty" and "myProperty:string" - give the same result.</li>
<li><i>boolean</i> – a Boolean type. Property editor is a checkbox.</li>
<li><i>number</i> – a numeric type. Property editor is a text input.</li>
<li><i>text</i> – string type. Property editor is text input with an optional modal window for entering large text.</li>
<li><i>html</i>  – string type. Property editor is text input with an optional modal window for entering large text. In the future modal window becomes a very simple html editor.</li>
<li><i>Itemvalues</i> – the array of ItemValue object. ItemValue object has two properties {value: any, text: string}. Dropdown, checkbox and radiogroup questions has choices property with itemvalues type.</li>
<li><i>matrixdropdowncolumns</i> –for matrixdropdown and matrixdynamic columns have this type.</li>
<li><i>texitems</i> – items property of multiple text question has this type</li>
<li><i>triggers</i> – survey triggers property has this type.</li>
<li><i>validators</i> – question validators property has this type.</li>
</ul>
You are able to introduce your own type and register a new property editor for this new type.
</p>
<p>
<h4>default</h4>
It is an optional attribute. The library do not serialize the default value into JSON. By default, the empty text is default for string value, 0 is for numeric and false for boolean. You may change it by using this attribute.
<pre><code class="language-javascript">{ name: "mode", default: "edit"}</code></pre>
<pre><code class="language-javascript">{ name: "showTitle:boolean", default: true }</code></pre>
</p>
<p>
<h4>choices</h4>
It is an optional attribute. It makes sense for string and numeric property types only. If the choices attribute is set, the property editor for the property becomes dropdown. You may assign the array of values to this attribute or a function that will return the array of strings or numbers.
<pre><code class="language-javascript">{ name: "showProgressBar", default: "off", choices: ["off", "top", "bottom"] }</code></pre>
<pre><code class="language-javascript">//returns the supported languages in the surveyjs library.
{ name: "locale", choices: function() { return Survey.surveyLocalization.getLocales(); } }</code></pre>
</p>
<p>
<h4>onGetValue</h4>
It is an optional attribute. You may assign a function to return a value different from the property value.
<pre><code class="language-javascript">// get title property returns a title with question number and so on "5) My super title.", 
//but we want to serialize only a "pure" question title "My super title".
{ name: "title:text", onGetValue: function (obj: any) { return obj.titleValue; } }</code></pre>
<pre><code class="language-javascript">// the function always returns null. It means that the library will never serialize the property in JSON.
{ name: "calcProperty", onGetValue: function (obj: any) { return null; } }</code></pre>
</p>
<p>
<h4>onSetValue</h4>
It is an optional attribute. You may assign a function to set a different object property and/or perform some actions.
<pre><code class="language-javascript">
{ name: "myValue", onSetValue: function (obj, value, jsonConverter) {obj.myValue = value; /* Perform some actions */ }}</code></pre>
</p>
