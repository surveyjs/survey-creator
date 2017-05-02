import {SurveyPropertyEditorBase} from "../src/propertyEditors/propertyEditorBase";
import {SurveyPropertyItemValuesEditor} from "../src/propertyEditors/propertyItemValuesEditor";
import {SurveyPropertyDropdownColumnsEditor} from "../src/propertyEditors/propertyMatrixDropdownColumnsEditor";
import {SurveyObjectProperty} from "../src/objectProperty";
import {SurveyPropertyTextEditor} from "../src/propertyEditors/propertyModalEditor";
import {SurveyPropertyResultfullEditor} from "../src/propertyEditors/propertyRestfullEditor";
import * as Survey from "survey-knockout";
import "../src/propertyEditors/propertyTextItemsEditor";
import {
    SurveyPropertyTriggersEditor,
    SurveyPropertyVisibleTrigger
} from "../src/propertyEditors/propertyTriggersEditor";
import {
    SurveyPropertyValidatorsEditor,
    SurveyPropertyValidatorItem
} from "../src/propertyEditors/propertyValidatorsEditor";

export default QUnit.module("PropertyEditorsTests");

QUnit.test("Create correct property editor", function (assert) {
    var propertyEditor = SurveyPropertyEditorBase.createEditor("unknown", null);
    assert.equal(propertyEditor.editorType, "string", "The default property editor is 'string'");

    var propertyTypes = ["string", "boolean", "number", "dropdown", "text", "html", "itemvalues",
        "matrixdropdowncolumns", "textitems", "triggers", "validators", "restfull"];
    for (var i = 0; i < propertyTypes.length; i++) {
        var propType = propertyTypes[i];
        propertyEditor = SurveyPropertyEditorBase.createEditor(propType, null);
        assert.equal(propertyEditor.editorType, propType, "Create '" + propType  + "' property editor");
    }
});
QUnit.test("SurveyPropertyItemValue", function (assert) {
    var choices = [{ value: 1, text: "item1" }, { value: 2, text: "item2" }, { value: 3, text: "item3" }];
    var itemValueProperty = new SurveyPropertyItemValuesEditor();
    itemValueProperty.onChanged = (newValue: Array<Survey.ItemValue>) => {  choices = newValue; };
    itemValueProperty.value = choices;
    assert.equal(itemValueProperty.koItems().length, 3, "there are three elements");
    assert.equal(itemValueProperty.koItems()[1].koValue(), 2, "check value of the second element");
    assert.equal(itemValueProperty.koItems()[1].koText(), "item2", "check text of the second element");

    itemValueProperty.onDeleteClick(itemValueProperty.koItems()[1]);
    assert.equal(itemValueProperty.koItems().length, 2, "there are two elements after deleting");
    assert.equal(itemValueProperty.koItems()[1].koValue(), 3, "check value of the second element");
    assert.equal(itemValueProperty.koItems()[1].koText(), "item3", "check text of the second element");

    itemValueProperty.onAddClick();
    assert.equal(itemValueProperty.koItems().length, 3, "there are three elements after adding");
    itemValueProperty.koItems()[2].koValue(4);
    itemValueProperty.koItems()[2].koText("item4")
    assert.equal(itemValueProperty.koItems()[2].koValue(), 4, "check value of the last element");
    assert.equal(itemValueProperty.koItems()[2].koText(), "item4", "check text of the last element");

    itemValueProperty.onApplyClick();
    assert.equal(choices.length, 3, "there are three elements after adding");
    assert.equal(choices[2].value, 4, "check value of the last element");
    assert.equal(choices[2].text, "item4", "check text of the last element");

    itemValueProperty.onMoveDownClick(itemValueProperty.koItems()[0]);
    assert.equal(itemValueProperty.koItems()[0].koValue(), 3, "check the first element");
    assert.equal(itemValueProperty.koItems()[1].koValue(), 1, "check the second element");
    itemValueProperty.onMoveUpClick(itemValueProperty.koItems()[1]);
    assert.equal(itemValueProperty.koItems()[0].koValue(), 1, "check the first element");
    assert.equal(itemValueProperty.koItems()[1].koValue(), 3, "check the second element");

    itemValueProperty.onAddClick();
    itemValueProperty.onAddClick();
    itemValueProperty.onResetClick();
    assert.equal(itemValueProperty.koItems().length, 3, "there are three elements");
});
QUnit.test("SurveyPropertyItemValue different view type", function (assert) {
    var choices = [{ value: 1, text: "item1" }, { value: 2 } ];
    var editor = new SurveyPropertyItemValuesEditor();
    editor.value = choices;
    editor.onChanged = (newValue: Array<Survey.ItemValue>) => { choices = newValue; };
    assert.equal(editor.koItemsText(), "", "It is empty by default");
    editor.koActiveView("text");
    assert.equal(editor.koItemsText(), "1|item1\n2", "It is empty by default");
    editor.koItemsText("1|item1\n\n2|item2\n3\ni4");
    editor.koActiveView("form");
    assert.equal(editor.koItems().length, 4, "There are 4 items");
    assert.equal(editor.koItems()[1].koValue(), 2, "Value of second item is 2");
    assert.equal(editor.koItems()[1].koText(), "item2", "Text of second item is item2");
    assert.equal(editor.koItems()[2].koValue(), 3, "Value of 3-th item is 3");
    assert.equal(editor.koItems()[2].koText(), "", "Text of 3-th item is empty");
    assert.equal(editor.koItems()[3].koValue(), "i4", "Value of 4-th item is i4");
    assert.equal(editor.koItems()[3].koText(), "", "Text of 4-th item is empty");
    editor.koActiveView("text");
    editor.koItemsText("1|item1");
    editor.onApplyClick();
    assert.equal(choices.length, 1, "The value is still applied");
});
QUnit.test("SurveyPropertyItemValue: Value and Text are same", function (assert) {
    var choices : Array<Survey.ItemValue> = [];
    choices.push(new Survey.ItemValue(1, "1"));
    choices.push(new Survey.ItemValue("item 2", "item 2"));
    var itemValueProperty = new SurveyPropertyItemValuesEditor();
    assert.equal(choices[0].hasText, true, "the first item has text");
    assert.equal(choices[1].hasText, true, "the second item has text");
    itemValueProperty.onChanged = (newValue: Array<Survey.ItemValue>) => { Survey.ItemValue.setData(choices, newValue); };
    itemValueProperty.value = choices;
    assert.equal(itemValueProperty.koItems().length, 2, "there are three elements");
    itemValueProperty.onApplyClick();
    assert.equal(choices.length, 2, "there are two items");
    assert.equal(choices[0].value, 1, "the first value is 1");
    assert.equal(choices[0].hasText, false, "the first text is null");
    assert.equal(choices[1].value, "item 2", "the second value is 'item 2'");
    assert.equal(choices[1].hasText, false, "the second text is null");
});
QUnit.test("SurveyPropertyItemValue: Value and Text are same for text with several locales: #366", function (assert) {
    var choices : Array<Survey.ItemValue> = [];
    choices.push(new Survey.ItemValue("item 1"));
    choices[0].locText.setLocaleText("default", "item 1");
    choices[0].locText.setLocaleText("de", "item 1 - de");
    var itemValueProperty = new SurveyPropertyItemValuesEditor();
    itemValueProperty.onChanged = (newValue: Array<Survey.ItemValue>) => { Survey.ItemValue.setData(choices, newValue); };
    itemValueProperty.value = choices;
    itemValueProperty.onApplyClick();
    assert.equal(choices.length, 1, "there are two items");
    assert.equal(choices[0].text, "item 1", "the text is 'item 1'");
});
QUnit.test("SurveyPropertyItemValue: Value and Text are same and editor.alwaySaveTextInPropertyEditors = true", function (assert) {
    var choices = [{ value: 1, text: "1" }, { value: "item 2", text: "item 2" }];
    var itemValueProperty = new SurveyPropertyItemValuesEditor();
    itemValueProperty.onChanged = (newValue: Array<Survey.ItemValue>) => { choices = newValue; };
    itemValueProperty.value = choices;
    itemValueProperty.options = { alwaySaveTextInPropertyEditors: true };
    assert.equal(itemValueProperty.koItems().length, 2, "there are three elements");
    itemValueProperty.onApplyClick();
    assert.equal(choices.length, 2, "there are two items");
    assert.equal(choices[0].value, 1, "the first value is 1");
    assert.equal(choices[0].text, "1", "the first text is '1'");
    assert.equal(choices[1].value, "item 2", "the second value is 'item 2'");
    assert.equal(choices[1].text, "item 2", "the second text is 'item 2'");
});

QUnit.test("SurveyPropertyItemValue_PureValue", function (assert) {
    var choices = [1, "item2", { value: 3, text: "item3" }];
    var itemValueProperty = new SurveyPropertyItemValuesEditor();
    itemValueProperty.onChanged = (newValue: Array<Survey.ItemValue>) => { choices = newValue; };
    itemValueProperty.value = choices;
    assert.equal(itemValueProperty.koItems().length, 3, "there are three elements");
    assert.equal(itemValueProperty.koItems()[0].koValue(), 1, "check value of the first element");
    assert.equal(itemValueProperty.koItems()[1].koValue(), "item2", "check value of the second element");
    assert.equal(itemValueProperty.koItems()[2].koValue(), 3, "check value of the third element");
    assert.equal(itemValueProperty.koItems()[2].koText(), "item3", "check text of the third element");
});
QUnit.test("SurveyPropertyMatrixDropdownColumns set properties", function (assert) {
    var columns: Array<Survey.MatrixDropdownColumn> = [];
    columns.push(new Survey.MatrixDropdownColumn("column 1"));
    columns.push(new Survey.MatrixDropdownColumn("column 2"));
    columns[0].choices = [1, 2, "three"];
    var itemValueProperty = new SurveyPropertyDropdownColumnsEditor();
    itemValueProperty.onChanged = (newValue: Array<Survey.MatrixDropdownColumn>) => { columns = newValue; };
    itemValueProperty.value = columns;
    assert.equal(itemValueProperty.koItems().length, 2, "there are two elements");
    assert.equal(itemValueProperty.koItems()[0].koName(), "column 1", "the first column name");
    itemValueProperty.onAddClick();
    itemValueProperty.koItems()[2].koCellType("checkbox");
    itemValueProperty.koItems()[2].koName("column 3");
    assert.equal(itemValueProperty.koItems().length, 3, "There are 3 columns un editor");
    itemValueProperty.onApplyClick();
    assert.equal(columns.length, 3, "There are 3 columns");
    assert.equal(columns[2]["cellType"], "checkbox", "the last column has checkbox cells");
});
QUnit.test("SurveyPropertyMatrixDropdownColumns use question editor", function (assert) {
    var columns: Array<Survey.MatrixDropdownColumn> = [];
    columns.push(new Survey.MatrixDropdownColumn("column 1"));
    columns.push(new Survey.MatrixDropdownColumn("column 2"));
    var itemValueProperty = new SurveyPropertyDropdownColumnsEditor();
    itemValueProperty.onChanged = (newValue: Array<Survey.MatrixDropdownColumn>) => { columns = newValue; };
    itemValueProperty.value = columns;

    assert.equal(itemValueProperty.koEditItem(), null, "It is null by default");
    itemValueProperty.koEditItem(itemValueProperty.koItems()[1]);
    assert.notEqual(itemValueProperty.koEditItem().itemEditor.obj, null, "The question editor obj is not null");
    assert.equal(itemValueProperty.koEditItem().itemEditor.obj.getType(), "matrixdropdowncolumn", "itemEditor edit the second item");
});

QUnit.test("Text property test - two way binding", function (assert) {
    var property = new Survey.JsonObjectProperty("text");
    property.type = "text";
    var propertyEditor = new SurveyObjectProperty(property);
    var editor = <SurveyPropertyTextEditor>(propertyEditor.editor);
    editor.koValue("1");
    editor.onApplyClick();
    assert.equal(propertyEditor.koValue(), "1", "the value is set correctly from the editor");
    propertyEditor.koValue("2");
    assert.equal(editor.koValue(), "2", "the value is set correctly from text input");
});
QUnit.test("SurveyPropertyResultfullEditor test", function (assert) {
    var editor = new SurveyPropertyResultfullEditor();
    editor.value = new Survey.ChoicesRestfull();
    editor.koPath("path1");
    editor.koValueName("name2");
    editor.koTitleName("title3");
    assert.equal(editor.question.choicesByUrl.path, "path1", "test path is set");
    assert.equal(editor.question.choicesByUrl.valueName, "name2", "test name is set");
    assert.equal(editor.question.choicesByUrl.titleName, "title3", "test title is set");
});
QUnit.test("Triggers property editor", function (assert) {
    var survey = createSurvey();
    var trigger = new Survey.SurveyTriggerVisible();
    trigger.name = "question1";
    trigger.value = "val1";
    trigger.operator = "notequal";
    trigger.questions.push("question2");
    survey.triggers.push(trigger);
    var result = [];
    var propEditor = new SurveyPropertyTriggersEditor();
    propEditor.onChanged = (newValue: any) => { result = newValue };
    propEditor.object = survey;
    propEditor.value = survey.triggers;
    assert.equal(propEditor.koItems().length, 1, "There are one trigger initially");
    var koTrigger = <SurveyPropertyVisibleTrigger>propEditor.koSelected();
    assert.equal(koTrigger.koName(), "question1", "Name set correctly");
    assert.equal(koTrigger.koOperator(), "notequal", "operator set correctly");
    assert.equal(koTrigger.koValue(), "val1", "value set correctly");
    assert.deepEqual(koTrigger.questions.koChoosen(), ["question2"], "questions set correctly");

    propEditor.onAddClick("visibletrigger");
    assert.equal(propEditor.koItems().length, 2, "There are two triggers now");
    koTrigger = <SurveyPropertyVisibleTrigger>propEditor.koSelected();
    assert.equal(koTrigger.koOperator(), "equal", "default operator is equal");
    assert.equal(koTrigger.koIsValid(), false, "the trigger is not valid");
    koTrigger.koName("question2");
    assert.equal(koTrigger.koIsValid(), false, "the trigger is still not valid");
    assert.equal(koTrigger.koRequireValue(), true, "value should be set");
    koTrigger.koOperator("notempty");
    assert.equal(koTrigger.koIsValid(), true, "the trigger is valid");
    assert.equal(koTrigger.koRequireValue(), false, "value should not be set");
    assert.equal(koTrigger.koText(), "Run if 'question2' is not empty", "text for valid trigger");

    koTrigger.pages.koChoosen.push("page2");
    koTrigger.questions.koChoosen.push("question3");
    koTrigger.koValue(1);
    trigger = <Survey.SurveyTriggerVisible>koTrigger.createTrigger();
    assert.equal(trigger.name, "question2", "create trigger correctly: name");
    assert.equal(trigger.operator, "notempty", "create trigger correctly: operator");
    assert.equal(trigger.value, 1, "create trigger correctly: value");
    assert.deepEqual(trigger.pages, ["page2"], "create trigger correctly: pages");
    assert.deepEqual(trigger.questions, ["question3"], "create trigger correctly: questions");

    propEditor.onAddClick("visibletrigger");
    assert.equal(propEditor.koItems().length, 3, "There are three triggers now");
    propEditor.onDeleteClick();
    assert.equal(propEditor.koItems().length, 2, "There are again two triggers");

    propEditor.onApplyClick();
    assert.equal(result.length, 2, "Two triggers are saved");

    propEditor.onAddClick("completetrigger");
    koTrigger = <SurveyPropertyVisibleTrigger>propEditor.koSelected();
    koTrigger.koName("question2");
    koTrigger.koOperator("notempty");
    propEditor.onApplyClick();
    assert.equal(result.length, 3, "There are 3 triggers");
    assert.equal(result[2].getType(), "completetrigger", "Complete trigger is created");
});
QUnit.test("Validators property editor", function (assert) {
    var survey = createSurvey();
    var validator = new Survey.NumericValidator(10, 100);
    validator.text = "validatortext";
    var question = <Survey.Question>survey.getQuestionByName("question1");
    question.validators.push(validator);
    var result = [];
    var propEditor = new SurveyPropertyValidatorsEditor();
    propEditor.onChanged = (newValue: any) => { result = newValue };
    propEditor.object = question;
    propEditor.value = question.validators;
    assert.equal(propEditor.koItems().length, 1, "There are one validator initially");
    var koValidator = <SurveyPropertyValidatorItem>propEditor.koSelected();
    assert.equal(koValidator.validator.text, "validatortext", "Validator Text is set correctly");
    assert.equal((<Survey.NumericValidator>koValidator.validator).minValue, 10, "Validator 'minValue' is set correctly");
    assert.equal((<Survey.NumericValidator>koValidator.validator).maxValue, 100, "Validator 'maxValue' is set correctly");

    propEditor.onAddClick("textvalidator");
    assert.equal(propEditor.koItems().length, 2, "There are two validators now");
    var koValidator = <SurveyPropertyValidatorItem>propEditor.koSelected();
    assert.equal(koValidator.text, "textvalidator", "Created with corrected value");
    (<Survey.TextValidator>koValidator.validator).minLength = 20;
    koValidator.validator.text = "text is short.";

    propEditor.onAddClick("textvalidator");
    assert.equal(propEditor.koItems().length, 3, "There are three validators now");
    propEditor.onDeleteClick();
    assert.equal(propEditor.koItems().length, 2, "There are two validators again");

    propEditor.onApplyClick();
    assert.equal(result.length, 2, "Two validators are saved");
    assert.equal(result[1].minLength, 20, "The properties are saved too");
});
function createSurvey(): Survey.Survey {
    return new Survey.Survey({
        pages: [{
            name: 'page1', questions: [{ type: 'text', name: 'question1' },
                { name: "question2", choices: ["one", { value: "two", text: "second value" }, { value: 3, text: "third value" }], type: "checkbox" }]
        },
            { name: 'page2', questions: [{ name: "question3", type: "comment" }] },
            {
                name: 'page3', questions: [{ name: "question4", columns: ["Column 1", "Column 2", "Column 3"], rows: ["Row 1", "Row 2"], type: "matrix" },
                { name: "question5", type: "rating" }]
            }]
    });
}