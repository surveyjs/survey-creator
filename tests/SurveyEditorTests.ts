import {SurveyEditor} from "../src/editor";
import * as Survey from "survey-knockout";

QUnit.module("surveyEditorTests");

QUnit.test("Set Text property", function (assert) {
    var editor = new SurveyEditor();
    var json = {
        questions: [
            {
                type: "checkbox", name: "car", title: "What car are you driving?", isRequired: true,
                colCount: 4, choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"]
            }
        ]
    };
    var jsonText = JSON.stringify(json);
    editor.text = jsonText;
    assert.equal(editor.koIsShowDesigner(), true);
    assert.equal(editor.survey.getAllQuestions().length, 1, "There is one question");
    assert.equal(editor.survey.getAllQuestions()[0].name, "car", "The question converted successufull");
    jsonText = jsonText.substr(5);
    editor.text = jsonText;
    assert.equal(editor.koIsShowDesigner(), false);
});
QUnit.test("Add questions to toolbox", function (assert) {
    var editor = new SurveyEditor();
    editor.text = JSON.stringify(getSurveyJson());

    assert.equal(editor.koCustomToolboxQuestions().length, 0, "There is no copied question yet.");
    editor.addCustomToolboxQuestion(<Survey.Question>editor.survey.getAllQuestions()[0]);
    assert.equal(editor.koCustomToolboxQuestions().length, 1, "There is one copied question now.");
    assert.equal(editor.koCustomToolboxQuestions()[0].name, "question1", "The copied question is 'question1'");
    editor.addCustomToolboxQuestion(<Survey.Question>editor.survey.getAllQuestions()[0]);
    assert.equal(editor.koCustomToolboxQuestions().length, 1, "There is still one copied question now.");
    assert.equal(editor.koCustomToolboxQuestions()[0].name, "question1", "The copied question is 'question1'");
});
QUnit.test("Save/Load custom questions", function (assert) {
    var editor = new SurveyEditor();
    editor.text = JSON.stringify(getSurveyJson());
    editor.addCustomToolboxQuestion(<Survey.Question>editor.survey.getAllQuestions()[0]);
    editor.addCustomToolboxQuestion(<Survey.Question>editor.survey.getAllQuestions()[1]);

    var customToolboxQuestionsText = editor.customToolboxQuestionsText;

    var editor2 = new SurveyEditor();
    editor2.text = JSON.stringify(getSurveyJson());
    editor2.customToolboxQuestionsText = customToolboxQuestionsText;
    assert.equal(editor2.koCustomToolboxQuestions().length, 2, "There are two custom toolbox questions");
    assert.equal(editor.koCustomToolboxQuestions()[0].name, "question1", "The copied first question is 'question1'");
    assert.equal(editor.koCustomToolboxQuestions()[1].name, "question2", "The copied second question is 'question2'");

    editor2.customToolboxQuestionsText = "";
    assert.equal(editor2.koCustomToolboxQuestions().length, 0, "Empty the customToolbox questions");
});
QUnit.test("options.questionTypes", function (assert) {
    var allTypes = Survey.QuestionFactory.Instance.getAllTypes();
    var editor = new SurveyEditor(null, null);
    assert.equal(editor.questionTypes.length, allTypes.length, "All types are accepted");
    editor = new SurveyEditor(null, { questionTypes: ["text", "dropdown", "unknown"]});
    assert.equal(editor.questionTypes.length, 2, "Only two types from three are accepted");
});
QUnit.test("Editor state property", function (assert) {
    var editor = new SurveyEditor();
    editor.saveSurveyFunc = function (no: number, doSaveCallback: (no: number, isSuccess: boolean) => void) {
        doSaveCallback(no, true);
    };
    editor.text = JSON.stringify(getSurveyJson());
    assert.equal(editor.state, "");
    editor.addPage();
    assert.equal(editor.state, "modified");
    editor.saveButtonClick();
    assert.equal(editor.state, "saved");
    /*
     editor.addPage();
     assert.equal(editor.state, "modified");
     editor.doUndoClick();
     assert.equal(editor.state, "saved");
     editor.doRedoClick();
     assert.equal(editor.state, "modified");
     */
});
QUnit.test("Do not reload surey on 'Designer' tab click", function (assert) {
    var editor = new SurveyEditor();
    editor.text = JSON.stringify(getSurveyJson());
    var pageCount = editor.survey.PageCount;
    editor.addPage();
    assert.equal(editor.survey.PageCount, pageCount + 1, "new Page is added");
    editor.selectDesignerClick();
    assert.equal(editor.survey.PageCount, pageCount + 1, "new Page is stil there");
    editor.selectTestClick();
    assert.equal(editor.survey.PageCount, pageCount + 1, "new Page is stil there");
});

function getSurveyJson(): any {
    return {
        pages: [{
            name: 'page1', questions: [{ type: 'text', name: 'question1' },
                { name: "question2", choices: ["one", { value: "two", text: "second value" }, { value: 3, text: "third value" }], type: "checkbox" }]
        },
            { name: 'page2', questions: [{ name: "question3", type: "comment" }] },
            {
                name: 'page3', questions: [{ name: "question4", columns: ["Column 1", "Column 2", "Column 3"], rows: ["Row 1", "Row 2"], type: "matrix" },
                { name: "question5", type: "rating" }]
            }]
    };
}