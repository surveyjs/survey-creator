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
        assert.equal(editor.koProperties()[0].editorType, "string", "It is a text editor");

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
        assert.equal(property.editorType, "boolean", "It is a boolean editor");
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
    QUnit.test("SurveyPropertyItemValue", function (assert) {
        var choices = [{ value: 1, text: "item1" }, { value: 2, text: "item2" }, { value: 3, text: "item3" }];
        var itemValueProperty = new SurveyEditor.SurveyPropertyItemValues((newValue: Array<Survey.ItemValue>) => {
            choices = newValue;
        });
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
    });
    QUnit.test("Use metadata getPropertyValue function", function (assert) {
        var editor = new SurveyEditor.SurveyObjectEditor();
        var car = new TruckDefaultValue();
        car.title = "test";
        editor.selectedObject = car;
        var property = editor.getPropertyEditor("title");
        
        editor.koActiveProperty().koValue("newName");
        assert.equal(property.koText(), "test", "use the real value to get value");
    });
}