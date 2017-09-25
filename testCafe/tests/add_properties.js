import { url} from "../settings";
import {Selector, ClientFunction} from 'testcafe';
const assert = require('assert');
const title = `add properties`;

const init = ClientFunction(() => {
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
    //add a property to the survey object
    Survey.JsonObject.metaData.addProperty("survey", {name:"customProperty:number", default: 123456});
    var editorOptions = { };
    var editor = new SurveyEditor.SurveyEditor("editorElement", editorOptions);
    
    window.editor = editor;
});

fixture `surveyjseditor: ${title}`

    .page `${url}`

    .beforeEach( async ctx => {
        await init();
    });

    test(`check the new prop exists`, async t => {
        const newProp = Selector('td', {visibilityCheck: true}).withText('11231rnd2231rnd2somernd13123123');
       
        await t
            .click(newProp)
            .expect(newProp.child("input").value, 124);
    });