---
layout: example
title: You may use almost any third-party widget in your survey.
platform: knockout
---
<script src="https://unpkg.com/icheck@1.0.2"></script>
<link rel="stylesheet" href="https://unpkg.com/icheck@1.0.2/skins/square/blue.css">
{% capture survey_setup %}

var iCheckWidget = {
    name: "icheck",
    isFit : function(question) { return question.getType() == "radiogroup"; },
    isDefaultRender: true,
    afterRender: function(question, el) {
        var select = function() {
          $(el).find("input[value=" + question.value + "]").iCheck('check');
        }
        $(el).find('input').iCheck({
          checkboxClass: 'iradio_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' // optional
        });
        $(el).find('input').on('ifChecked', function(event){
          question.value = event.target.value;
        });
        question.valueChangedCallback = select;
        select();
    }
}
Survey.CustomWidgetCollection.Instance.addCustomWidget(iCheckWidget);

var editor = new SurveyEditor.SurveyEditor("editorElement");
{% endcapture %}

{% include live-example-code.html %}
<h2>Custom Widgets in the Editor</h2>
