/// <reference path="../src/objectEditor.ts" />
/// <reference path="ObjectEditorTestedClasses.ts" />

module SurveyObjectEditorTests.Tests {
    QUnit.module("objectEditorTests");

    QUnit.test("Created properties on set selected Object", function (assert) {
        var editor = new SurveyEditor.SurveyObjectEditor();
        assert.equal(editor.koProperties().length, 0, "No properties for null object");

        editor.selectedObject = new BigCar();
        assert.equal(editor.koProperties().length, 1, "One property object");
        assert.equal(editor.koProperties()[0].name, "name", "name property");

        editor.selectedObject = new Truck();
        assert.equal(editor.koProperties().length, 2, "Two property object");
        assert.equal(editor.koProperties()[0].name, "maxWeight", "maxWeight property");
        assert.equal(editor.koProperties()[1].name, "name", "name property");
    });
    QUnit.test("Get Property Value", function (assert) {
        var editor = new SurveyEditor.SurveyObjectEditor();
        var car = new Truck();
        car.name = "truckCar";
        car.maxWeight = 20000;
        editor.selectedObject = car;
        assert.equal(editor.koProperties()[1].koValue(), "truckCar", "get name property");
        assert.equal(editor.koProperties()[0].koValue(), 20000, "get maxWeight property");
    });
    QUnit.test("isDefault property value", function (assert) {
        var editor = new SurveyEditor.SurveyObjectEditor();
        var car = new TruckDefaultValue();
        editor.selectedObject = car;
        var property = editor.getPropertyEditor("isNew");
        assert.equal(property.koIsDefault(), true, "the value is default");
        car.isNew = true;
        editor.ObjectChanged();
        assert.equal(property.koIsDefault(), false, "the value is not default");
    });
    QUnit.test("Active property", function (assert) {
        var editor = new SurveyEditor.SurveyObjectEditor();
        assert.equal(editor.koActiveProperty(), null, "no properties");
        editor.selectedObject = new TruckDefaultValue();
        assert.equal(editor.koActiveProperty().name, "name", "name property is active by default");
    });
    QUnit.test("On property changed", function (assert) {
        var editor = new SurveyEditor.SurveyObjectEditor();
        var car = new TruckDefaultValue();
        car.name = "myName";
        var callCounter = 0;
        editor.onPropertyValueChanged.add((sender, options) => { car.name = options.newValue; callCounter++; });
        editor.selectedObject = car;
        editor.koActiveProperty().koValue("newName");
        assert.equal(car.name, "newName", "on property changed event is working");
        assert.equal(callCounter, 1, "It should be called only one time");
    });
}