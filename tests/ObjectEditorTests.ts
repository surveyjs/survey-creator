import {SurveyObjectEditor} from "../src/objectEditor";
import {BigCar, Truck, TruckDefaultValue} from "./ObjectEditorTestedClasses";
import * as Survey from "survey-knockout";

QUnit.module("objectEditorTests");

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
    editor.ObjectChanged();
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
QUnit.test("Fix the bug with title property, https://github.com/andrewtelnov/surveyjs.editor/issues/33", function (assert) {
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