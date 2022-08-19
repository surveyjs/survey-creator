import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyObjectProperty } from "../src/objectProperty";
import { BigCar, Truck, TruckDefaultValue } from "./ObjectEditorTestedClasses";
import { EditorOptionsTests } from "./editorOptionsTests";
import { SurveyPropertyItemValuesEditor } from "../src/propertyEditors/propertyItemValuesEditor";
import { SurveyNestedPropertyEditorItem } from "../src/propertyEditors/propertyNestedPropertyEditor";
import { SurveyPropertyDropdownColumnsEditor } from "../src/propertyEditors/propertyMatrixDropdownColumnsEditor";
import { defaultStrings } from "../src/editorLocalization";
import { SurveyElementEditorOldTableContentModel } from "../src/questionEditors/questionEditor";

import {
  SurveyDropdownPropertyEditor,
  SurveyStringPropertyEditor,
} from "../src/propertyEditors/propertyEditorFactory";

export default QUnit.module("objectEditorTests");

QUnit.test("Created properties on set selected Object", function (assert) {
  var editor = new SurveyElementEditorOldTableContentModel(new BigCar());

  assert.equal(editor.koProperties().length, 2, "One property object");
  assert.equal(editor.koProperties()[0].name, "name", "name property");
  assert.equal(
    editor.koProperties()[0].editorType,
    "string",
    "It is a text editor"
  );

  defaultStrings.p["maxWeight"] = "Maximum weight";
  editor = new SurveyElementEditorOldTableContentModel(new Truck());
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
QUnit.test("Custom sort properties", function (assert) {
  var editor = new SurveyElementEditorOldTableContentModel(
    new Truck(),
    "",
    null,
    function (obj, a, b) {
      if (a.name == "name") return -1;
      if (b.name == "name") return 1;
      return 0;
    }
  );
  assert.equal(editor.koProperties().length, 3, "Two property object");
  assert.equal(editor.koProperties()[0].name, "name", "name property");
});
QUnit.test("Sort by displayName by default", function (assert) {
  defaultStrings.p["maxWeight"] = "zzz maximum weight";
  var editor = new SurveyElementEditorOldTableContentModel(new Truck());
  assert.equal(editor.koProperties().length, 3, "Three properties object");
  assert.equal(
    editor.koProperties()[2].name,
    "maxWeight",
    "It is a last property, sort by display name"
  );
  delete defaultStrings.p["maxWeight"];
});
QUnit.test("Get Property Value", function (assert) {
  var car = new Truck();
  car.name = "truckCar";
  car.maxWeight = 20000;
  var editor = new SurveyElementEditorOldTableContentModel(car);
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
QUnit.test("isDefault property value", function (assert) {
  var car = new TruckDefaultValue();
  var editor = new SurveyElementEditorOldTableContentModel(car);
  var property = editor.getPropertyEditorByName("isNew");
  assert.equal(property.koIsDefault(), true, "the value is default");
  assert.equal(property.editorType, "boolean", "It is a boolean editor");
  car.isNew = true;
  assert.equal(property.koIsDefault(), false, "the value is not default");
});
QUnit.test("On property changed", function (assert) {
  var car = new TruckDefaultValue();
  car.name = "myName";
  var editor = new SurveyElementEditorOldTableContentModel(car);
  var propertyEditor = editor.getPropertyEditorByName("name");
  propertyEditor.editor.koValue("newName");
  assert.equal(car.name, "newName", "on property changed event is working");
});
QUnit.test("Use metadata getPropertyValue function", function (assert) {
  var car = new TruckDefaultValue();
  car.truckTitle = "test";
  var editor = new SurveyElementEditorOldTableContentModel(car);
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
  function (assert) {
    var car = new BigCar();
    car.name = "name1";
    var editor = new SurveyElementEditorOldTableContentModel(car);
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
QUnit.test("Use onCanShowPropertyCallback", function (assert) {
  var options = new EditorOptionsTests();
  options.onCanShowPropertyCallback = function (
    object: any,
    property: Survey.JsonObjectProperty,
    showMode: string = null,
    parentObj: any,
    parentProperty: Survey.JsonObjectProperty
  ) {
    return property.name == "title";
  };
  var car = new TruckDefaultValue();
  var editor = new SurveyElementEditorOldTableContentModel(car, "", options);
  assert.equal(
    editor.koProperties().length,
    1,
    "Only one property is accepted"
  );
});

QUnit.test("On new ItemValue added", function (assert) {
  var question = new Survey.QuestionDropdown("q1");
  question.choices = [];
  var options = new EditorOptionsTests();
  var editor = new SurveyElementEditorOldTableContentModel(
    question,
    "",
    options
  );
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

QUnit.test("On new Matrix Column added", function (assert) {
  var options = new EditorOptionsTests();
  var question = new Survey.QuestionMatrixDropdown("q1");
  question.columns = [];
  var editor = new SurveyElementEditorOldTableContentModel(
    question,
    "",
    options
  );
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

QUnit.test("hideAddRemoveButtons", function (assert) {
  var options = new EditorOptionsTests();
  var question1 = new Survey.QuestionDropdown("q1");
  var question2 = new Survey.QuestionDropdown("hideAddRemove");
  var editor = new SurveyElementEditorOldTableContentModel(
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
  assert.equal(
    itemValuesEditor.koAllowRemoveAllItems(),
    true,
    "Show buttons for the first question"
  );

  editor = new SurveyElementEditorOldTableContentModel(question2, "", options);
  property = <SurveyObjectProperty>editor.getPropertyEditorByName("choices");
  itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(
    itemValuesEditor.koAllowAddRemoveItems(),
    false,
    "Hide buttons for the second question"
  );
  assert.equal(
    itemValuesEditor.koAllowRemoveAllItems(),
    false,
    "Hide buttons for the second question"
  );
});

QUnit.test("show top/bottom description", function (assert) {
  var options = new EditorOptionsTests();
  var question1 = new Survey.QuestionDropdown("showOnTop");
  var question2 = new Survey.QuestionDropdown("showOnBottom");
  var question3 = new Survey.QuestionDropdown("donotshow");

  var editor = new SurveyElementEditorOldTableContentModel(
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

  editor = new SurveyElementEditorOldTableContentModel(question2, "", options);
  property = <SurveyObjectProperty>editor.getPropertyEditorByName("choices");
  itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(itemValuesEditor.koHtmlTop(), "", "top value is not set");
  assert.equal(
    itemValuesEditor.koHtmlBottom(),
    "bottomValue",
    "bottom value set correctly"
  );

  editor = new SurveyElementEditorOldTableContentModel(question3, "", options);
  property = <SurveyObjectProperty>editor.getPropertyEditorByName("choices");
  itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(itemValuesEditor.koHtmlTop(), "", "top value should not be set");
  assert.equal(
    itemValuesEditor.koHtmlBottom(),
    "",
    "bottom value should not be set"
  );
});

QUnit.test(
  "SurveyPropertyItemValuesEditor, show 'Visible If' button",
  function (assert) {
    var options = new EditorOptionsTests();
    var qChoices = new Survey.QuestionDropdown("q1");
    var qMatrix = new Survey.QuestionMatrix("q2");

    var editor = new SurveyElementEditorOldTableContentModel(
      qChoices,
      "",
      options
    );

    var property = <SurveyObjectProperty>(
      editor.getPropertyEditorByName("choices")
    );
    var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
    assert.equal(
      itemValuesEditor.hasDetailButton,
      true,
      "Choices property has Rules button"
    );

    editor = new SurveyElementEditorOldTableContentModel(qMatrix, "", options);
    var property = <SurveyObjectProperty>(
      editor.getPropertyEditorByName("columns")
    );
    var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
    assert.equal(
      itemValuesEditor.hasDetailButton,
      true,
      "Columns property has Rules button now"
    );
  }
);

QUnit.test("SurveyPropertyItemValuesEditor, Detail tabs", function (assert) {
  var options = new EditorOptionsTests();
  var qChoices = new Survey.QuestionDropdown("q1");
  qChoices.choices = [1, 2, 3];
  var editor = new SurveyElementEditorOldTableContentModel(
    qChoices,
    "",
    options
  );
  var property = <SurveyObjectProperty>(
    editor.getPropertyEditorByName("choices")
  );
  var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  itemValuesEditor.beforeShow();
  var firstItem = <SurveyNestedPropertyEditorItem>(
    itemValuesEditor.createItemViewModel(qChoices.choices[0])
  );
  itemValuesEditor.koEditItem(firstItem);
  firstItem.obj["visibleIf"] = "{cars} contains {item}";
  itemValuesEditor.koEditItem(null);
  assert.equal(
    itemValuesEditor.koShowTextView(),
    false,
    "visibleIf will be lost in text editing"
  );
});

QUnit.test("DependedOn properties, koVisible", function (assert) {
  Survey.Serializer.addProperty("text", {
    name: "customProp1",
    dependsOn: ["inputType"],
    visibleIf: function (obj) {
      return obj.inputType == "date";
    },
  });
  var options = new EditorOptionsTests();
  var question = new Survey.QuestionText("q1");
  var editor = new SurveyElementEditorOldTableContentModel(
    question,
    "",
    options
  );
  var custPropEditor = editor.getPropertyEditorByName("customProp1");
  var inputTypePropEditor = editor.getPropertyEditorByName("inputType");

  assert.equal(custPropEditor.koVisible(), false, "It is invisible by default");
  inputTypePropEditor.koValue("date");
  assert.equal(custPropEditor.koVisible(), true, "It is visible now");
  inputTypePropEditor.koValue("range");
  assert.equal(custPropEditor.koVisible(), false, "It is invisible again");

  Survey.Serializer.removeProperty("text", "customProp1");
});

QUnit.test("DependedOn properties, koVisible", function (assert) {
  Survey.Serializer.addProperty("question", "targetEntity");
  Survey.Serializer.addProperty("question", {
    name: "targetField",
    dependsOn: "targetEntity",
    choices: function (obj) {
      return getChoicesByEntity(obj);
    },
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
  var editor = new SurveyElementEditorOldTableContentModel(
    question,
    "",
    options
  );
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

QUnit.test("Property Editor - property.isRequired = true", function (assert) {
  var options = new EditorOptionsTests();
  var question = new Survey.QuestionText("q1");
  var editor = new SurveyElementEditorOldTableContentModel(
    question,
    "",
    options
  );
  var nameEditor = editor.getPropertyEditorByName("name").editor;
  nameEditor.koValue("q2");
  assert.equal(question.name, "q2", "Set correctly");
  nameEditor.koValue("");
  assert.equal(question.name, "q2", "We can't set nullable value");
  assert.equal(nameEditor.koHasError(), true, "It shows error");
});
QUnit.test("SurveyPropertyEditor - onPropertyEditorUpdate", function (assert) {
  Survey.Serializer.addProperty("text", {
    name: "testInputType",
    dependsOn: "inputType",
  });
  var prop = Survey.Serializer.findProperty("text", "testInputType");
  prop.visibleIf = function (obj: any) {
    return true;
  };
  prop.onPropertyEditorUpdate = function (obj: any, editor: any) {
    editor.inputType = obj.inputType;
  };
  var question = new Survey.QuestionText("q1");
  question.inputType = "date";
  var editor = new SurveyElementEditorOldTableContentModel(question, "", null);
  var newPropEditor = <SurveyStringPropertyEditor>(
    editor.getPropertyEditorByName("testInputType").editor
  );
  var inputTypePropEditor = editor.getPropertyEditorByName("inputType");
  assert.equal(newPropEditor.inputType, "date", "It is date now");
  inputTypePropEditor.koValue("number");
  assert.equal(newPropEditor.inputType, "number", "It is number now");
  Survey.Serializer.removeProperty("text", "testInputType");
});
QUnit.test("DependedOn properties, koVisible for arrays properties", function (assert) {
  Survey.Serializer.addProperty("dropdown", {
    name: "customProp1",
    dependsOn: ["choices"],
    visibleIf: function (obj) {
      return obj.choices.length > 3;
    },
  });
  const question = new Survey.QuestionDropdown("q1");
  question.choices = [1, 2, 3];
  const editor = new SurveyElementEditorOldTableContentModel(
    question,
    "",
    new EditorOptionsTests()
  );
  const custPropEditor = editor.getPropertyEditorByName("customProp1");
  const choicesPropEditor = editor.getPropertyEditorByName("choices");
  const itemValuesEditor = <SurveyPropertyItemValuesEditor>choicesPropEditor.editor;

  assert.equal(custPropEditor.koVisible(), false, "It is invisible by default");
  assert.equal(question.choices.length, 3, "There are 3 choices by default");
  itemValuesEditor.onAddClick();
  assert.equal(question.choices.length, 4, "There are 4 choices now");
  assert.equal(custPropEditor.koVisible(), true, "It is visible now");
  const itemViewModel = itemValuesEditor.createItemViewModel(
    question.choices[1]
  );
  itemValuesEditor.onDeleteClick(itemViewModel);
  assert.equal(question.choices.length, 3, "There are 3 choices again");
  assert.equal(custPropEditor.koVisible(), false, "It is visible again");

  Survey.Serializer.removeProperty("dropdown", "customProp1");
});
