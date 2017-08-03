import {SurveyObjectEditor} from "../src/objectEditor";
import {SurveyObjectProperty} from "../src/objectProperty";
import {BigCar, Truck, TruckDefaultValue} from "./ObjectEditorTestedClasses";
import {ISurveyObjectEditorOptions} from "../src/propertyEditors/propertyEditorBase";
import {SurveyPropertyItemValuesEditor} from "../src/propertyEditors/propertyItemValuesEditor";
import {SurveyPropertyDropdownColumnsEditor} from "../src/propertyEditors/propertyMatrixDropdownColumnsEditor";
import * as Survey from "survey-knockout";

export default QUnit.module("objectEditorTests");

QUnit.test("Created properties on set selected Object", function (assert) {
    var editor = new SurveyObjectEditor();
    assert.equal(editor.koProperties().length, 0, "No properties for null object");

    editor.selectedObject = new BigCar();
    assert.equal(editor.koProperties().length, 2, "One property object");
    assert.equal(editor.koProperties()[0].name, "name", "name property");
    assert.equal(editor.koProperties()[0].editorType, "string", "It is a text editor");

    editor.selectedObject = new Truck();
    assert.equal(editor.koProperties().length, 3, "Two property object");
    assert.equal(editor.koProperties()[0].name, "maxWeight", "maxWeight property");
    assert.equal(editor.koProperties()[1].name, "name", "name property");
});
QUnit.test("Get Property Value", function (assert) {
    var editor = new SurveyObjectEditor();
    var car = new Truck();
    car.name = "truckCar";
    car.maxWeight = 20000;
    editor.selectedObject = car;
    assert.equal(editor.koProperties()[1].koValue(), "truckCar", "get name property");
    assert.equal(editor.koProperties()[0].koValue(), 20000, "get maxWeight property");
});
QUnit.test("isDefault property value", function (assert) {
    var editor = new SurveyObjectEditor();
    var car = new TruckDefaultValue();
    editor.selectedObject = car;
    var property = editor.getPropertyEditor("isNew");
    assert.equal(property.koIsDefault(), true, "the value is default");
    assert.equal(property.editorType, "boolean", "It is a boolean editor");
    car.isNew = true;
    editor.objectChanged();
    assert.equal(property.koIsDefault(), false, "the value is not default");
});
QUnit.test("Active property", function (assert) {
    var editor = new SurveyObjectEditor();
    assert.equal(editor.koActiveProperty(), null, "no properties");
    editor.selectedObject = new TruckDefaultValue();
    assert.equal(editor.koActiveProperty().name, "name", "name property is active by default");
});
QUnit.test("On property changed", function (assert) {
    var editor = new SurveyObjectEditor();
    var car = new TruckDefaultValue();
    car.name = "myName";
    var callCounter = 0;
    editor.onPropertyValueChanged.add((sender, options) => { car.name = options.newValue; callCounter++; });
    editor.selectedObject = car;
    editor.koActiveProperty().koValue("newName");
    assert.equal(car.name, "newName", "on property changed event is working");
    assert.equal(callCounter, 1, "It should be called only one time");
});
QUnit.test("Use metadata getPropertyValue function", function (assert) {
    var editor = new SurveyObjectEditor();
    var car = new TruckDefaultValue();
    car.truckTitle = "test";
    editor.selectedObject = car;
    var property = editor.getPropertyEditor("truckTitle");

    editor.koActiveProperty().koValue("newName");
    assert.equal(property.koText(), "test", "use the real value to get value");
});
QUnit.test("Fix the bug with title property, https://github.com/surveyjs/editor/issues/33", function (assert) {
    var editor = new SurveyObjectEditor();
    var car = new BigCar();
    car.name = "name1";
    editor.onPropertyValueChanged.add((sender, options) => { car[options.property.name] = options.newValue; });
    editor.selectedObject = car;
    var property = editor.getPropertyEditor("title");
    property.koValue("name1");
    assert.equal(property.koText(), "name1", "the property has been set in the editor");
    assert.equal(car["titleValue"], "name1", "the property has been actually set into the object");
});
QUnit.test("Use onCanShowPropertyCallback", function (assert) {
    var editor = new SurveyObjectEditor();
    editor.onCanShowPropertyCallback = function (object: any, property: Survey.JsonObjectProperty) {
        return property.name == "title"; }
    var car = new TruckDefaultValue();
    editor.selectedObject = car;
    assert.equal(editor.koProperties().length, 1, "Only one property is accepted");
});

class EditorOptionsTests implements ISurveyObjectEditorOptions {
    alwaySaveTextInPropertyEditors: boolean;
    showApplyButtonInEditors: boolean;
    propertyName: string;
    onItemValueAddedCallback(propertyName: string, itemValue: Survey.ItemValue) {
        itemValue.value = "item1";
        this.propertyName = propertyName;
    }
    onMatrixDropdownColumnAddedCallback(column: Survey.MatrixDropdownColumn) {
        column.name = "column1";
    }
    onSetPropertyEditorOptionsCallback(propertyName: string, obj: Survey.Base, editorOptions: any) {
        if(propertyName == "choices" && obj["name"] == "hideAddRemove") {
            editorOptions.allowAddRemoveItems = false;
        }
    }
}

QUnit.test("On new ItemValue added", function (assert) {
    var options = new EditorOptionsTests();
    var editor = new SurveyObjectEditor(options);
    var question = new Survey.QuestionDropdown("q1");
    question.choices = [];
    editor.selectedObject = question;
    editor.onPropertyValueChanged.add((sender, options) => { question.choices = options.newValue; });
    var property = <SurveyObjectProperty>editor.getPropertyEditor("choices");
    var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
    itemValuesEditor.onAddClick();
    itemValuesEditor.onApplyClick();
    assert.equal(question.choices.length, 1, "One item is added");
    assert.equal(question.choices[0].value, "item1", "auto generated value");
    assert.equal(options.propertyName, "choices", "property name set correcty")
});

QUnit.test("On new Matrix Column added", function (assert) {
    var options = new EditorOptionsTests();
    var editor = new SurveyObjectEditor(options);
    var question = new Survey.QuestionMatrixDropdown("q1");
    question.columns = [];
    editor.selectedObject = question;
    editor.onPropertyValueChanged.add((sender, options) => { question.columns = options.newValue; });
    var property = <SurveyObjectProperty>editor.getPropertyEditor("columns");
    var itemValuesEditor = <SurveyPropertyDropdownColumnsEditor>property.editor;
    itemValuesEditor.onAddClick();
    itemValuesEditor.onApplyClick();
    assert.equal(question.columns.length, 1, "One item is added");
    assert.equal(question.columns[0].name, "column1", "auto generated column name");
});

QUnit.test("hideAddRemoveButtons", function (assert) {
    var options = new EditorOptionsTests();
    var editor = new SurveyObjectEditor(options);
    var question1 = new Survey.QuestionDropdown("q1");
    var question2 = new Survey.QuestionDropdown("hideAddRemove");
    
    editor.selectedObject = question1;
    var property = <SurveyObjectProperty>editor.getPropertyEditor("choices");
    var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
    assert.equal(itemValuesEditor.koAllowAddRemoveItems(), true, "Show buttons for the first question");
    
    editor.selectedObject = question2;
    property = <SurveyObjectProperty>editor.getPropertyEditor("choices");
    itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
    assert.equal(itemValuesEditor.koAllowAddRemoveItems(), false, "Hide buttons for the second question");
});
