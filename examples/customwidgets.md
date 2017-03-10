---
layout: example
title: You may use almost any third-party widget in your survey.
platform: knockout
---
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/themes/smoothness/jquery-ui.css" type="text/css" rel="stylesheet" /> 
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>
<script src="https://unpkg.com/icheck@1.0.2"></script>
<link rel="stylesheet" href="https://unpkg.com/icheck@1.0.2/skins/square/blue.css">
{% capture survey_setup %}

var dateWidget = {
    name: "datepicker",
    htmlTemplate: "<input id='widget-datepicker' type='text'>",
    isFit : function(question) { return question.inputType === 'date'; },
    afterRender: function(question, el) {

        var widget = $(el).datepicker();

        widget.on("change", function (e) {
            question.value = $(this).val();
        });
        question.valueChangedCallback = function() {
            widget.datepicker('setDate', new Date(question.value));
        }
    }
}
Survey.CustomWidgetCollection.Instance.addCustomWidget(dateWidget);

var select2Widget = {
    name: "select2",
    htmlTemplate: "<select style='width: 100%;'></select>",
    isFit : function(question) { return question.getType() === 'dropdown'; },
    afterRender: function(question, el) {

        var $el = $(el);

        var widget = $el.select2({
            data: question.choices.map(function(choice) { return { id: choice.value, text: choice.text }; }),
            theme: "classic"
        });
        $el.on('select2:select', function (e) {
            question.value = e.target.value;
        });
        var updateHandler = function() {
            $el.val(question.value).trigger("change");
        };
        question.valueChangedCallback = updateHandler;
        updateHandler();
    }
}
Survey.CustomWidgetCollection.Instance.addCustomWidget(select2Widget);

var select2TagBoxWidget = {
    name: "select2tagbox",
    htmlTemplate: "<select multiple='multiple' style='width: 100%;'></select>",
    isFit : function(question) { return question.getType() === 'checkbox'; },
    afterRender: function(question, el) {

        var $el = $(el);

        var widget = $el.select2({
            tags: "true",
            data: question.choices.map(function(choice) { return { id: choice.value, text: choice.text }; }),
            theme: "classic"
        });
        $el.on('select2:unselect', function (e) {
            var index = (question.value || []).indexOf(e.params.data.id);
            if(index !== -1) {
                question.value = question.value.splice(index, 1);
            }
        });
        $el.on('select2:select', function (e) {
            question.value = (question.value || []).concat(e.params.data.id);
        });
        var updateHandler = function() {
            $el.val(question.value).trigger("change");
        };
        question.valueChangedCallback = updateHandler;
        updateHandler();
    }
}
Survey.CustomWidgetCollection.Instance.addCustomWidget(select2TagBoxWidget);

//Use iCheck as radiogroup
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

var editorOptions = {questionTypes : ["text", "checkbox", "radiogroup", "dropdown"]};
var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
{% endcapture %}

{% include live-example-code.html %}
<h2>Custom Widgets in the Editor</h2>
