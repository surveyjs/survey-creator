import { url} from "../settings";
import {Selector, ClientFunction} from 'testcafe';
const assert = require('assert');
const title = `localization`;

const init = ClientFunction(() => {
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

    SurveyEditor.editorLocalization.currentLocale = "fr";
    var editorOptions = { };
    var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
    
    window.editor = editor;
});

fixture `surveyjseditor: ${title}`

    .page `${url}`

    .beforeEach( async ctx => {
        await init();
    });

    test(`check on French locale`, async t => {
        const isTabExists = ClientFunction(() =>
            document.documentElement.innerText.indexOf("Designer de questionnaire"));

        assert.notEqual(await isTabExists(), -1);
    });