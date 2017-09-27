import {Selector, ClientFunction} from 'testcafe';
const assert = require('assert');
const title = `toolbar customization`;

const url = "http://127.0.0.1:7777/example/toolbarCustomization.html"

const init = ClientFunction(() => {
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
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
});

fixture `surveyjseditor: ${title}`

    .page `${url}`

    .beforeEach( async ctx => {
        await init();
    });

    test(`check custom survey preview`, async t => {
        const getPosition = ClientFunction(() =>
            document.documentElement.innerHTML.indexOf('There is no visible page or question in the survey.'));
        
        await t
            .click(`.svd_toolbar li:not([style~=none]):last-child button`)

        assert.notEqual(await getPosition(), -1);
    });