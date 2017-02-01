import {SurveyUndoRedo} from "../src/undoredo";
import {SurveyEditor} from "../src/editor";
import * as Survey from "survey-knockout";

export default QUnit.module("UndoRedoTests");

QUnit.test("Enabeling undo redo", function (assert) {
    var survey = new Survey.Survey(getSurveyJson());
    var undo = new SurveyUndoRedo();
    assert.equal(undo.koCanUndo(), false, "CanUndo 1");
    assert.equal(undo.koCanRedo(), false, "CanRedo 1");
    undo.setCurrent(survey, null);
    assert.equal(undo.koCanUndo(), false, "CanUndo 2");
    assert.equal(undo.koCanRedo(), false, "CanRedo 2");
    undo.setCurrent(survey, null);
    assert.equal(undo.koCanUndo(), true, "CanUndo 3");
    assert.equal(undo.koCanRedo(), false, "CanRedo 3");
    undo.undo();
    assert.equal(undo.koCanUndo(), false, "CanUndo 4");
    assert.equal(undo.koCanRedo(), true, "CanRedo 4");
    undo.redo();
    assert.equal(undo.koCanUndo(), true, "CanUndo 5");
    assert.equal(undo.koCanRedo(), false, "CanRedo 5");
    undo.undo();
    undo.setCurrent(survey, null);
    assert.equal(undo.koCanUndo(), true, "CanUndo 6");
    assert.equal(undo.koCanRedo(), false, "CanRedo 6");
    undo.setCurrent(survey, null);
    assert.equal(undo.koCanUndo(), true, "CanUndo 7");
    assert.equal(undo.koCanRedo(), false, "CanRedo 7");
    undo.undo();
    assert.equal(undo.koCanUndo(), true, "CanUndo 8");
    assert.equal(undo.koCanRedo(), true, "CanRedo 8");
    undo.undo();
    assert.equal(undo.koCanUndo(), false, "CanUndo 9");
    assert.equal(undo.koCanRedo(), true, "CanRedo 9");
});
QUnit.test("Do undo", function (assert) {
    var survey = new Survey.Survey(getSurveyJson());
    var undo = new SurveyUndoRedo();
    undo.setCurrent(survey, null);
    survey.addNewPage("New Page");
    undo.setCurrent(survey, null);
    assert.equal(4, survey.pages.length);
    survey = new Survey.Survey(undo.undo().surveyJSON);
    assert.equal(3, survey.pages.length);
});
QUnit.test("Do undo/redo", function (assert) {
    var survey = new Survey.Survey(getSurveyJson());
    var undo = new SurveyUndoRedo();
    undo.setCurrent(survey, null);
    survey.addNewPage("New Page");
    undo.setCurrent(survey, null);
    survey = new Survey.Survey(undo.undo().surveyJSON);
    assert.equal(3, survey.pages.length, "3 pages after undo");
    survey = new Survey.Survey(undo.redo().surveyJSON);
    assert.equal(4, survey.pages.length, "4 pages after redo");
});
QUnit.test("Undo maximum count", function (assert) {
    var survey = new Survey.Survey(getSurveyJson());
    var undo = new SurveyUndoRedo();
    undo.maximumCount = 2;
    for (var i = 0; i < 10; i++) {
        undo.setCurrent(survey, null);
    }
    assert.equal(undo.koCanUndo(), true, "Initial can undo");
    undo.undo();
    undo.undo();
    assert.equal(undo.koCanUndo(), false, "Store only for two undo");
});
QUnit.test("Do undo/redo with editor", function (assert) {
    var editor = new SurveyEditor();
    editor.text = JSON.stringify(getSurveyJson());
    editor.addPage();
    assert.equal(4, editor.survey.pages.length);
    editor.doUndoClick();
    assert.equal(3, editor.survey.pages.length);
    editor.doRedoClick();
    assert.equal(4, editor.survey.pages.length);
    assert.equal(editor.koSelectedObject().value, editor.survey.pages[editor.survey.pages.length - 1], "the last page should be selected");
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