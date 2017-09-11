import {Selector, ClientFunction} from 'testcafe';

export const url = 'http://127.0.0.1:7777/example/';

export const init = ClientFunction(() => {
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

    var editor = new SurveyEditor.SurveyEditor("editorElement");
    editor.saveSurveyFunc = function (saveNo, callback) { alert('ok'); callback(saveNo, true) };
    editor.showOptions = true;
    editor.showState = true;   
    
    ko.applyBindings(new SurveyEditor.SurveysManager("https://dxsurvey.com", "a797f29b53f8455e8b3ef317f8904dac", editor), document.getElementById("manage"));
    
    window.editor = editor;
});
