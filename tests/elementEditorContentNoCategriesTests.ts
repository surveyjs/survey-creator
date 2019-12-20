import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyObjectProperty } from "../src/objectProperty";
import { BigCar, Truck, TruckDefaultValue } from "./ObjectEditorTestedClasses";
import { EditorOptionsTests } from "./editorOptionsTests";
import { SurveyPropertyItemValuesEditor } from "../src/propertyEditors/propertyItemValuesEditor";
import { SurveyNestedPropertyEditorItem } from "../src/propertyEditors/propertyNestedPropertyEditor";
import { SurveyPropertyDropdownColumnsEditor } from "../src/propertyEditors/propertyMatrixDropdownColumnsEditor";
import { defaultStrings } from "../src/editorLocalization";
import { SurveyDropdownPropertyEditor } from "../src/propertyEditors/propertyEditorFactory";
import { SurveyElementEditorContentNoCategries } from "../src/questionEditors/questionEditor";

export default QUnit.module("objectEditorTests");

QUnit.test("Created properties on set selected Object", function(assert) {
  var editor = new SurveyElementEditorContentNoCategries(new BigCar());

  assert.equal(editor.koProperties().length, 2, "One property object");
  assert.equal(editor.koProperties()[0].name, "name", "name property");
  assert.equal(
    editor.koProperties()[0].editorType,
    "string",
    "It is a text editor"
  );

  defaultStrings.p["maxWeight"] = "Maximum weight";
  editor = new SurveyElementEditorContentNoCategries(new Truck());
  assert.equal(editor.koProperties().length, 3, "Two property object");
  assert.equal(
    editor.koProperties()[0].name,
    "maxWeight",
    "maxWeight property"
  );
  assert.equal(
    editor.koProperties()[0].displayName,
    "Maximum weight",
    "maxWeight property"
  );
  assert.equal(editor.koProperties()[1].name, "name", "name property");
  delete defaultStrings.p["maxWeight"];
});
QUnit.test("Custom sort properties", function(assert) {
  var editor = new SurveyElementEditorContentNoCategries(
    new Truck(),
    "",
    null,
    function(obj, a, b) {
      if (a.name == "name") return -1;
      if (b.name == "name") return 1;
      return 0;
    }
  );
  assert.equal(editor.koProperties().length, 3, "Two property object");
  assert.equal(editor.koProperties()[0].name, "name", "name property");
});
QUnit.test("Sort by displayName by default", function(assert) {
  defaultStrings.p["maxWeight"] = "zzz maximum weight";
  var editor = new SurveyElementEditorContentNoCategries(new Truck());
  assert.equal(editor.koProperties().length, 3, "Three properties object");
  assert.equal(
    editor.koProperties()[2].name,
    "maxWeight",
    "It is a last property, sort by display name"
  );
  delete defaultStrings.p["maxWeight"];
});
QUnit.test("Get Property Value", function(assert) {
  var car = new Truck();
  car.name = "truckCar";
  car.maxWeight = 20000;
  var editor = new SurveyElementEditorContentNoCategries(car);
  assert.equal(
    editor.koProperties()[1].koValue(),
    "truckCar",
    "get name property"
  );
  assert.equal(
    editor.koProperties()[0].koValue(),
    20000,
    "get maxWeight property"
  );
});
QUnit.test("isDefault property value", function(assert) {
  var car = new TruckDefaultValue();
  var editor = new SurveyElementEditorContentNoCategries(car);
  var property = editor.getPropertyEditorByName("isNew");
  assert.equal(property.koIsDefault(), true, "the value is default");
  assert.equal(property.editorType, "boolean", "It is a boolean editor");
  car.isNew = true;
  assert.equal(property.koIsDefault(), false, "the value is not default");
});
QUnit.test("On property changed", function(assert) {
  var car = new TruckDefaultValue();
  car.name = "myName";
  var editor = new SurveyElementEditorContentNoCategries(car);
  var propertyEditor = editor.getPropertyEditorByName("name");
  propertyEditor.editor.koValue("newName");
  assert.equal(car.name, "newName", "on property changed event is working");
});
QUnit.test("Use metadata getPropertyValue function", function(assert) {
  var car = new TruckDefaultValue();
  car.truckTitle = "test";
  var editor = new SurveyElementEditorContentNoCategries(car);
  var propertyEditor = editor.getPropertyEditorByName("truckTitle");

  propertyEditor.editor.koValue("newName");
  assert.equal(
    propertyEditor.koText(),
    "newName",
    "The text value has been changed"
  );
});
QUnit.test(
  "Fix the bug with title property, https://github.com/surveyjs/editor/issues/33",
  function(assert) {
    var car = new BigCar();
    car.name = "name1";
    var editor = new SurveyElementEditorContentNoCategries(car);
    var property = editor.getPropertyEditorByName("title").editor;
    property.koValue("name1");
    assert.equal(
      property.koText(),
      "name1",
      "the property has been set in the editor"
    );
    assert.equal(
      car["titleValue"],
      "name1",
      "the property has been actually set into the object"
    );
  }
);
QUnit.test("Use onCanShowPropertyCallback", function(assert) {
  var options = new EditorOptionsTests();
  options.onCanShowPropertyCallback = function(
    object: any,
    property: Survey.JsonObjectProperty
  ) {
    return property.name == "title";
  };
  var car = new TruckDefaultValue();
  var editor = new SurveyElementEditorContentNoCategries(car, "", options);
  assert.equal(
    editor.koProperties().length,
    1,
    "Only one property is accepted"
  );
});

QUnit.test("On new ItemValue added", function(assert) {
  var question = new Survey.QuestionDropdown("q1");
  question.choices = [];
  var options = new EditorOptionsTests();
  var editor = new SurveyElementEditorContentNoCategries(question, "", options);
  var property = <SurveyObjectProperty>(
    editor.getPropertyEditorByName("choices")
  );
  var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  itemValuesEditor.onAddClick();
  itemValuesEditor.onApplyClick();
  assert.equal(question.choices.length, 1, "One item is added");
  assert.equal(question.choices[0].value, "item1", "auto generated value");
  assert.equal(options.propertyName, "choices", "property name set correcty");
  itemValuesEditor.onAddClick();
  itemValuesEditor.onApplyClick();
  assert.equal(question.choices.length, 2, "Two items are added");
  assert.equal(question.choices[1].value, "item2", "auto generated value 2");
});

QUnit.test("On new Matrix Column added", function(assert) {
  var options = new EditorOptionsTests();
  var question = new Survey.QuestionMatrixDropdown("q1");
  question.columns = [];
  var editor = new SurveyElementEditorContentNoCategries(question, "", options);
  var property = <SurveyObjectProperty>(
    editor.getPropertyEditorByName("columns")
  );
  var columnsEditor = <SurveyPropertyDropdownColumnsEditor>property.editor;
  columnsEditor.onAddClick();
  assert.equal(question["columnCount"], 1, "1 column in editor");
  columnsEditor.onApplyClick();
  assert.equal(question.columns.length, 1, "One item is added");
  assert.equal(
    question.columns[0].name,
    "column1",
    "auto generated column name"
  );
});

QUnit.test("hideAddRemoveButtons", function(assert) {
  var options = new EditorOptionsTests();
  var question1 = new Survey.QuestionDropdown("q1");
  var question2 = new Survey.QuestionDropdown("hideAddRemove");
  var editor = new SurveyElementEditorContentNoCategries(
    question1,
    "",
    options
  );

  var property = <SurveyObjectProperty>(
    editor.getPropertyEditorByName("choices")
  );
  var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(
    itemValuesEditor.koAllowAddRemoveItems(),
    true,
    "Show buttons for the first question"
  );

  editor = new SurveyElementEditorContentNoCategries(question2, "", options);
  property = <SurveyObjectProperty>editor.getPropertyEditorByName("choices");
  itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(
    itemValuesEditor.koAllowAddRemoveItems(),
    false,
    "Hide buttons for the second question"
  );
});

QUnit.test("show top/bottom description", function(assert) {
  var options = new EditorOptionsTests();
  var question1 = new Survey.QuestionDropdown("showOnTop");
  var question2 = new Survey.QuestionDropdown("showOnBottom");
  var question3 = new Survey.QuestionDropdown("donotshow");

  var editor = new SurveyElementEditorContentNoCategries(
    question1,
    "",
    options
  );
  var property = <SurveyObjectProperty>(
    editor.getPropertyEditorByName("choices")
  );
  var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(
    itemValuesEditor.koHtmlTop(),
    "topValue",
    "top value set correctly"
  );
  assert.equal(itemValuesEditor.koHtmlBottom(), "", "bottom value is not set");

  editor = new SurveyElementEditorContentNoCategries(question2, "", options);
  property = <SurveyObjectProperty>editor.getPropertyEditorByName("choices");
  itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(itemValuesEditor.koHtmlTop(), "", "top value is not set");
  assert.equal(
    itemValuesEditor.koHtmlBottom(),
    "bottomValue",
    "bottom value set correctly"
  );

  editor = new SurveyElementEditorContentNoCategries(question3, "", options);
  property = <SurveyObjectProperty>editor.getPropertyEditorByName("choices");
  itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(itemValuesEditor.koHtmlTop(), "", "top value should not be set");
  assert.equal(
    itemValuesEditor.koHtmlBottom(),
    "",
    "bottom value should not be set"
  );
});

QUnit.test("SurveyPropertyItemValuesEditor, show 'Visible If' button", function(
  assert
) {
  var options = new EditorOptionsTests();
  var qChoices = new Survey.QuestionDropdown("q1");
  var qMatrix = new Survey.QuestionMatrix("q2");

  var editor = new SurveyElementEditorContentNoCategries(qChoices, "", options);

  var property = <SurveyObjectProperty>(
    editor.getPropertyEditorByName("choices")
  );
  var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(
    itemValuesEditor.hasDetailButton,
    true,
    "Choices property has Rules button"
  );

  editor = new SurveyElementEditorContentNoCategries(qMatrix, "", options);
  var property = <SurveyObjectProperty>(
    editor.getPropertyEditorByName("columns")
  );
  var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(
    itemValuesEditor.hasDetailButton,
    true,
    "Columns property has Rules button now"
  );
});

QUnit.test("SurveyPropertyItemValuesEditor, Detail tabs", function(assert) {
  var options = new EditorOptionsTests();
  var qChoices = new Survey.QuestionDropdown("q1");
  qChoices.choices = [1, 2, 3];
  var editor = new SurveyElementEditorContentNoCategries(qChoices, "", options);
  var property = <SurveyObjectProperty>(
    editor.getPropertyEditorByName("choices")
  );
  var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  itemValuesEditor.beforeShow();
  var firstItem = <SurveyNestedPropertyEditorItem>(
    itemValuesEditor.createItemViewModel(qChoices.choices[0])
  );
  itemValuesEditor.koEditItem(firstItem);
  assert.equal(firstItem.itemEditor.koTabs().length, 2, "There are two tabs");
  assert.equal(
    firstItem.itemEditor.koTabs()[0].name,
    "visibleIf",
    "It is visibleIf tab"
  );
  assert.equal(
    firstItem.itemEditor.koTabs()[1].name,
    "enableIf",
    "It is enableIf tab"
  );
  firstItem.obj["visibleIf"] = "{cars} contains {item}";
  itemValuesEditor.koEditItem(null);
  assert.equal(
    itemValuesEditor.koShowTextView(),
    false,
    "visibleIf will be lost in text editing"
  );
});

QUnit.test("DependedOn properties, koVisible", function(assert) {
  Survey.Serializer.addProperty("text", {
    name: "customProp1",
    dependsOn: ["inputType"],
    visibleIf: function(obj) {
      return obj.inputType == "date";
    }
  });
  var options = new EditorOptionsTests();
  var question = new Survey.QuestionText("q1");
  var editor = new SurveyElementEditorContentNoCategries(question, "", options);
  var custPropEditor = editor.getPropertyEditorByName("customProp1");
  var inputTypePropEditor = editor.getPropertyEditorByName("inputType");

  assert.equal(custPropEditor.koVisible(), false, "It is invisible by default");
  inputTypePropEditor.koValue("date");
  assert.equal(custPropEditor.koVisible(), true, "It is visible now");
  inputTypePropEditor.koValue("range");
  assert.equal(custPropEditor.koVisible(), false, "It is invisible again");

  Survey.Serializer.removeProperty("text", "customProp1");
});

QUnit.test("DependedOn properties, koVisible", function(assert) {
  Survey.Serializer.addProperty("question", "targetEntity");
  Survey.Serializer.addProperty("question", {
    name: "targetField",
    dependsOn: "targetEntity",
    choices: function(obj) {
      return getChoicesByEntity(obj);
    }
  });
  function getChoicesByEntity(obj: any): Array<any> {
    var entity = !!obj ? obj["targetEntity"] : null;
    var choices = [];
    if (!entity) return choices;
    choices.push({ value: null });
    choices.push({ value: entity + " 1", text: entity + " 1" });
    choices.push({ value: entity + " 2", text: entity + " 2" });
    return choices;
  }

  var options = new EditorOptionsTests();
  var question = new Survey.QuestionText("q1");
  var editor = new SurveyElementEditorContentNoCategries(question, "", options);
  var entityPropEditor = editor.getPropertyEditorByName("targetEntity");
  var targetPropEditor = <SurveyDropdownPropertyEditor>(
    editor.getPropertyEditorByName("targetField").editor
  );

  assert.equal(
    targetPropEditor.koChoices().length,
    0,
    "It is empty by default"
  );
  entityPropEditor.koValue("Account");
  assert.equal(
    targetPropEditor.koChoices().length,
    3,
    "Choices updated immediately"
  );

  Survey.Serializer.removeProperty("question", "targetEntity");
  Survey.Serializer.removeProperty("question", "targetField");
});

QUnit.test("Property Editor - property.isRequired = true", function(assert) {
  var options = new EditorOptionsTests();
  var question = new Survey.QuestionText("q1");
  var editor = new SurveyElementEditorContentNoCategries(question, "", options);
  var nameEditor = editor.getPropertyEditorByName("name").editor;
  nameEditor.koValue("q2");
  assert.equal(question.name, "q2", "Set correctly");
  nameEditor.koValue("");
  assert.equal(question.name, "q2", "We can't set nullable value");
  assert.equal(nameEditor.koHasError(), true, "It shows error");
});
