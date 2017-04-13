import {SurveyQuestionProperties, SurveyQuestionEditor, SurveyQuestionEditorTabGeneral, SurveyQuestionEditorTabProperty} from "../src/questionEditors/questionEditor";
import {SurveyQuestionEditorGeneralProperties, SurveyQuestionEditorGeneralRow, SurveyQuestionEditorGeneralProperty} from "../src/questionEditors/questionEditorGeneralProperties";
import {SurveyQuestionEditorDefinition} from "../src/questionEditors/questionEditorDefinition";
import * as Survey from "survey-knockout";

export default QUnit.module("QuestionEditorsTests");

QUnit.test("Create correct question editor property tab ", function (assert) {
    var dropdownQuestion = new Survey.QuestionDropdown("q1");
    dropdownQuestion.choices = ["item1"];
    dropdownQuestion.visibleIf = "true";
    var properties = new SurveyQuestionProperties(dropdownQuestion, null);

    var property = properties.getProperty("choices");
    var tab = new SurveyQuestionEditorTabProperty(dropdownQuestion, property);
    assert.equal(tab.htmlTemplate, "propertyeditorcontent-itemvalues", "itemvalues template should be created");
    assert.equal(tab.propertyEditor.editorType, "itemvalues", "create correct property editor");
    assert.deepEqual(tab.propertyEditor.value, ["item1"], "set value to property editor correctly");

    property = properties.getProperty("visibleIf");
    tab = new SurveyQuestionEditorTabProperty(dropdownQuestion, property);
    assert.equal(tab.propertyEditor.value, dropdownQuestion.visibleIf, "set value of 'visibleIf' to property editor correctly");
});

QUnit.test("Question Editor apply/reset/onChanged", function (assert) {
    var dropdownQuestion = new Survey.QuestionDropdown("q1");
    dropdownQuestion.visibleIf = "true";
    var changeCounter = 0;
    var editor = new SurveyQuestionEditor(dropdownQuestion, null);
    editor.onChanged = function () { changeCounter++; };
    var generalTab = <SurveyQuestionEditorTabGeneral>editor.koTabs()[0];
    assert.equal(generalTab.properties.rows[0].properties[0].koValue(), "q1", "name set correct");
    assert.equal(generalTab.properties.rows[1].properties[0].koValue(), "", "title set correct");
    generalTab.properties.rows[0].properties[0].koValue("newName");
    generalTab.properties.rows[1].properties[0].koValue("new title");
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
    var editor = new SurveyQuestionEditor(radioGroupQuestion, null);
    assert.equal(editor.koTabs().length, 4, "There are 3 tabs");
    assert.equal(editor.koTabs()[1].name, "choices", "The name of the second tab is 'choices'");
});

QUnit.test("Hide visibleIf tab and startWithNewLine", function (assert) {
    var radioGroupQuestion = new Survey.QuestionRadiogroup("q1");
    var onCanShowPropertyCallback = function (object: any, property: Survey.JsonObjectProperty) {
        return property.name != "visibleIf" && property.name != "startWithNewLine";
    };
    var editor = new SurveyQuestionEditor(radioGroupQuestion, onCanShowPropertyCallback);
    assert.equal(editor.koTabs().length, 3, "There are 2 tabs");
    assert.equal(editor.koTabs()[1].name, "choices", "The name of the second tab is 'choices'");
    var generalTab = <SurveyQuestionEditorTabGeneral>editor.koTabs()[0];
    var hasFound = false;
    var prop = generalTab.properties;
    for(var i = 0; i < prop.rows.length; i ++) {
        var row = prop.rows[i];
        for(var j = 0; j < row.properties.length; j ++) {
            if(row.properties[j].name == "startWithNewLine") {
                hasFound = true;
                break;
            }
        }
    }
    assert.equal(hasFound, false, "We have made 'startWithNewLine' invisible");
});

QUnit.test("Create  general properties", function (assert) {
    var question = new Survey.QuestionText("q1");
    var properties = new SurveyQuestionEditorGeneralProperties(question, [{name: "name"}, "visible", "dummy"]);
    assert.equal(properties.rows.length, 2, "There are two rows");
    assert.equal(properties.rows[0].properties[0].name, "name", "The first property created correctly");
    assert.equal(properties.rows[1].properties[0].name, "visible", "The second property created correctly");
});

QUnit.test("General properties different categories", function (assert) {
    var question = new Survey.QuestionText("q1");
    var properties = new SurveyQuestionEditorGeneralProperties(question, [{name: "name", category: "1", title: "MyName"}, { name: "visible"}, {name: "title", category: "1"}]);
    assert.equal(properties.rows.length, 2, "There are two rows");
    assert.equal(properties.rows[0].properties.length, 2, "There are two rows");
    assert.equal(properties.rows[0].properties[0].name, "name", "The first property in row is name");
    assert.equal(properties.rows[0].properties[1].name, "title", "The second property in row is title");
    assert.equal(properties.rows[0].properties[0].title, "MyName", "Title property was set correctly");
});

QUnit.test("General properties, editor type", function (assert) {
    var question = new Survey.QuestionText("q1");
    var properties = new SurveyQuestionEditorGeneralProperties(question, ["name", "visible", "title"]);
    assert.equal(properties.rows[0].properties[0].editType, "text", "Name property has text edit type");
    assert.equal(properties.rows[1].properties[0].editType, "check", "visible property has check edit type");
    assert.equal(properties.rows[2].properties[0].editType, "textarea", "title property has textarea edit type");
});

QUnit.test("General properties, apply/reset", function (assert) {
    var question = new Survey.QuestionText("q1");
    var properties = new SurveyQuestionEditorGeneralProperties(question, ["name", "visible", "title"]);
    assert.equal(properties.rows[0].properties[0].koValue(), "q1", "Initially it is q1");
    properties.rows[0].properties[0].koValue("q2");
    properties.apply();
    assert.equal(question.name, "q2", "question.name is 'q2'");
    properties.rows[0].properties[0].koValue("q3");
    properties.reset();
    assert.equal(properties.rows[0].properties[0].koValue(), "q2", "reset to q2");
});

QUnit.test("General properties, has errors", function (assert) {
    var question = new Survey.QuestionText("q1");
    var properties = new SurveyQuestionEditorGeneralProperties(question, [{name: "name"}, "visible", "dummy"]);
    var prop = properties.rows[0].properties[0];
    assert.equal(prop.hasError(), false, "There is no error");
    prop.koValue("");
    assert.equal(prop.hasError(), true, "There is an error");
    prop.koValue("q2");
    assert.equal(prop.hasError(), false, "There is no error");
});

QUnit.test("Question editor definition: getProperties", function (assert) {
    var baseProperties = SurveyQuestionEditorDefinition.getProperties("questionbase");
    var properties = SurveyQuestionEditorDefinition.getProperties("rating");
    assert.equal(properties.length, baseProperties.length + 2, "Rating adds two properties");
    assert.equal(properties[0], "name", "The first rating property");
    assert.equal(properties[properties.length - 1], "maxRateDescription", "The last rating property");
});

QUnit.test("Question editor definition: getTabs", function (assert) {
    var tabs = SurveyQuestionEditorDefinition.getTabs("rating");
    assert.equal(tabs.length, 2, "Rating has two tabs");
    assert.equal(tabs[0].name, "rateValues", "The first tab");
    assert.equal(tabs[1].name, "visibleIf", "The last tab");
});
