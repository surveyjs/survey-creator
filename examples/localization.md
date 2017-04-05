---
layout: example
title: Use options to customize the editor
platform: knockout
---
{% capture survey_setup %}

//Create your translation
var deutschStrings = {
    p: {
        isRequired : "Wird benötigt"
    }
};

//Set the your translation to the locale
SurveyEditor.editorLocalization.locales["de"] = deutschStrings;
//Make this locale the current
//SurveyEditor.editorLocalization.currentLocale = "de";
//Make french locale active
SurveyEditor.editorLocalization.currentLocale = "fr";

var editor = new SurveyEditor.SurveyEditor("editorElement");
{% endcapture %}

{% include live-example-code.html %}
<h2>Localication</h2>
Please make a pull request of your localization to <a href="https://github.com/surveyjs/editor/tree/master/src/localization">Editor Localization Files</a>.
<p/>
You have to localize the defaultStrings variable located in <a href="https://github.com/surveyjs/editor/blob/master/src/editorLocalization.ts">editorLocalization.ts</a>
<p/>
The example of localization survey js strings are <a href="http://surveyjs.org/examples/jquery/survey-localization.html">here</a>.