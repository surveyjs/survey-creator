import {SurveyPropertyEditorBase} from "../src/propertyEditors/propertyEditorBase";
import {SurveyQuestionEditorBase, SurveyQuestionEditorTabGeneral, SurveyQuestionEditorTabProperty} from "../src/questionEditors/questionEditorBase";
import {SurveyQuestionSelectBaseEditor} from "../src/questionEditors/questionSelectBaseEditor";
import * as Survey from "survey-knockout";

export default QUnit.module("QuestionEditorsTests");

QUnit.test("Create correct question editor property tab ", function (assert) {
    var dropdownQuestion = new Survey.QuestionDropdown("q1");
    dropdownQuestion.choices = ["item1"];
    dropdownQuestion.visibleIf = "true";

    var tab = new SurveyQuestionEditorTabProperty(dropdownQuestion, "choices", 10, null);
    assert.equal(tab.htmlTemplate, "propertyeditorcontent-itemvalues", "itemvalues template should be created");
    assert.equal(tab.propertyEditor.editorType, "itemvalues", "create correct property editor");
    assert.deepEqual(tab.propertyEditor.value, ["item1"], "set value to property editor correctly");

    tab = new SurveyQuestionEditorTabProperty(dropdownQuestion, "visibleIf", 100, null);
    assert.equal(tab.propertyEditor.value, dropdownQuestion.visibleIf, "set value of 'visibleIf' to property editor correctly");
});

QUnit.test("Question Editor apply/reset/onChanged", function (assert) {
    var dropdownQuestion = new Survey.QuestionDropdown("q1");
    dropdownQuestion.visibleIf = "true";
    var changeCounter = 0;
    var editor = SurveyQuestionEditorBase.createEditor(dropdownQuestion, function () { changeCounter++; }, null);
    var generalTab = <SurveyQuestionEditorTabGeneral>editor.koTabs()[0];
    assert.equal(generalTab.koName(), "q1", "name set correct");
    assert.equal(generalTab.koTitle(), null, "title set correct");
    generalTab.koName("newName");
    generalTab.koTitle("new title");
    var visibleIfTab = <SurveyQuestionEditorTabProperty>editor.koTabs()[editor.koTabs().length - 1];
    visibleIfTab.propertyEditor["koValue"]("false");
    editor.apply();
    assert.equal(changeCounter, 1, "changed one time");
    assert.equal(dropdownQuestion.name, "newName", "name assign correct");
    assert.equal(dropdownQuestion.title, "new title", "title assign correct");
    assert.equal(dropdownQuestion.visibleIf, "false", "visibleIf assign correct");
});

QUnit.test("Create correct Question Editor by question type", function (assert) {
    var radioGroupQuestion = new Survey.QuestionRadiogroup("q1");
    //fix- required to register the editor in the tests.
    var selEditor = new SurveyQuestionSelectBaseEditor(radioGroupQuestion, null);
    var editor = SurveyQuestionEditorBase.createEditor(radioGroupQuestion, null, null);
    assert.equal(editor.koTabs().length, 4, "There are 3 tabs");
    assert.equal(editor.koTabs()[1].name, "choices", "The name of the second tab is 'choices'");
});

QUnit.test("Hide visibleIf tab and startWithNewLine", function (assert) {
    var radioGroupQuestion = new Survey.QuestionRadiogroup("q1");
    var onCanShowPropertyCallback = function (object: any, property: Survey.JsonObjectProperty) {
        return property.name != "visibleIf" && property.name != "startWithNewLine";
    };
    var editor = SurveyQuestionEditorBase.createEditor(radioGroupQuestion, null, onCanShowPropertyCallback);
    assert.equal(editor.koTabs().length, 3, "There are 2 tabs");
    assert.equal(editor.koTabs()[1].name, "choices", "The name of the second tab is 'choices'");
    var generalTab = <SurveyQuestionEditorTabGeneral>editor.koTabs()[0];
    assert.equal(generalTab.hasStartWithNewLine, false, "We have made it invisible");
});


