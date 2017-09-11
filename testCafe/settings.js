import {Selector, ClientFunction} from 'testcafe';

export const url = 'http://127.0.0.1:7777/example/';

export const init = ClientFunction(() => {
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

    var editor = new SurveyEditor.SurveyEditor("editorElement");
    editor.saveSurveyFunc = function (saveNo, callback) { alert('ok'); callback(saveNo, true) };
    editor.showOptions = true;
    editor.showState = true;
    
    window.editor = editor;
});
