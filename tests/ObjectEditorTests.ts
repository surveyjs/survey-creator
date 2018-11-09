import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyObjectEditor } from "../src/objectEditor";
import { SurveyObjectProperty } from "../src/objectProperty";
import { BigCar, Truck, TruckDefaultValue } from "./ObjectEditorTestedClasses";
import {
  SurveyPropertyEditorBase,
  ISurveyObjectEditorOptions
} from "../src/propertyEditors/propertyEditorBase";
import {
  SurveyPropertyItemValuesEditor,
  SurveyPropertyItemValuesEditorItem
} from "../src/propertyEditors/propertyItemValuesEditor";
import { SurveyPropertyDropdownColumnsEditor } from "../src/propertyEditors/propertyMatrixDropdownColumnsEditor";
import { defaultStrings } from "../src/editorLocalization";

export default QUnit.module("objectEditorTests");

QUnit.test("Created properties on set selected Object", function(assert) {
  var editor = new SurveyObjectEditor();
  assert.equal(
    editor.koProperties().length,
    0,
    "No properties for null object"
  );

  editor.selectedObject = new BigCar();
  assert.equal(editor.koProperties().length, 2, "One property object");
  assert.equal(editor.koProperties()[0].name, "name", "name property");
  assert.equal(
    editor.koProperties()[0].editorType,
    "string",
    "It is a text editor"
  );

  defaultStrings.p["maxWeight"] = "Maximum weight";
  editor.selectedObject = new Truck();
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
  var editor = new SurveyObjectEditor();
  editor.onSortPropertyCallback = function(obj, a, b) {
    if (a.name == "name") return -1;
    if (b.name == "name") return 1;
    return 0;
  };
  editor.selectedObject = new Truck();

  assert.equal(editor.koProperties().length, 3, "Two property object");
  assert.equal(editor.koProperties()[0].name, "name", "name property");
});
QUnit.test("Sort by displayName by default", function(assert) {
  defaultStrings.p["maxWeight"] = "zzz maximum weight";
  var editor = new SurveyObjectEditor();
  editor.selectedObject = new Truck();

  assert.equal(editor.koProperties().length, 3, "Three properties object");
  assert.equal(
    editor.koProperties()[2].name,
    "maxWeight",
    "It is a last property, sort by display name"
  );
  delete defaultStrings.p["maxWeight"];
});
QUnit.test("Get Property Value", function(assert) {
  var editor = new SurveyObjectEditor();
  var car = new Truck();
  car.name = "truckCar";
  car.maxWeight = 20000;
  editor.selectedObject = car;
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
QUnit.test("Active property", function(assert) {
  var editor = new SurveyObjectEditor();
  assert.equal(editor.koActiveProperty(), null, "no properties");
  editor.selectedObject = new TruckDefaultValue();
  assert.equal(
    editor.koActiveProperty().name,
    "name",
    "name property is active by default"
  );
});
QUnit.test("Is show property", function(assert) {
  var editor = new SurveyObjectEditor();
  editor.selectedObject = new TruckDefaultValue();
  var nameProperty = editor.getPropertyEditor("name");
  var maxWeightProperty = editor.getPropertyEditor("maxWeight");
  var isNewProperty = editor.getPropertyEditor("isNew");
  assert.equal(
    nameProperty.koIsShowEditor(),
    true,
    "name property is active by default"
  );
  assert.equal(
    maxWeightProperty.koIsShowEditor(),
    false,
    "name property is not active"
  );
  editor.koActiveProperty(maxWeightProperty);
  assert.equal(
    nameProperty.koIsShowEditor(),
    false,
    "name property is inactive now"
  );
  assert.equal(
    maxWeightProperty.koIsShowEditor(),
    true,
    "maxWeight property is active"
  );

  assert.equal(
    isNewProperty.koIsShowEditor(),
    true,
    "isNewProperty property always show Editor"
  );
});
QUnit.test("On property changed", function(assert) {
  var editor = new SurveyObjectEditor();
  var car = new TruckDefaultValue();
  car.name = "myName";
  var callCounter = 0;
  editor.onPropertyValueChanged.add((sender, options) => {
    car.name = options.newValue;
    callCounter++;
  });
  editor.selectedObject = car;
  editor.koActiveProperty().koValue("newName");
  assert.equal(car.name, "newName", "on property changed event is working");
  assert.equal(callCounter, 1, "It should be called only one time");
});
QUnit.test("Use metadata getPropertyValue function", function(assert) {
  var editor = new SurveyObjectEditor();
  var car = new TruckDefaultValue();
  car.truckTitle = "test";
  editor.selectedObject = car;
  var property = editor.getPropertyEditor("truckTitle");

  editor.koActiveProperty().koValue("newName");
  assert.equal(property.koText(), "test", "use the real value to get value");
});
QUnit.test(
  "Fix the bug with title property, https://github.com/surveyjs/editor/issues/33",
  function(assert) {
    var editor = new SurveyObjectEditor();
    var car = new BigCar();
    car.name = "name1";
    editor.onPropertyValueChanged.add((sender, options) => {
      car[options.property.name] = options.newValue;
    });
    editor.selectedObject = car;
    var property = editor.getPropertyEditor("title");
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
  var editor = new SurveyObjectEditor();
  editor.onCanShowPropertyCallback = function(
    object: any,
    property: Survey.JsonObjectProperty
  ) {
    return property.name == "title";
  };
  var car = new TruckDefaultValue();
  editor.selectedObject = car;
  assert.equal(
    editor.koProperties().length,
    1,
    "Only one property is accepted"
  );
});

class EditorOptionsTests implements ISurveyObjectEditorOptions {
  alwaySaveTextInPropertyEditors: boolean;
  showApplyButtonInEditors: boolean;
  useTabsInElementEditor: boolean;
  propertyName: string;
  onItemValueAddedCallback(
    propertyName: string,
    itemValue: Survey.ItemValue,
    itemValues: Array<Survey.ItemValue>
  ) {
    itemValue.value = "item" + (itemValues.length + 1);
    this.propertyName = propertyName;
  }
  onMatrixDropdownColumnAddedCallback(
    matrix: Survey.Question,
    column: Survey.MatrixDropdownColumn,
    columns: Array<Survey.MatrixDropdownColumn>
  ) {
    column.name = "column1";
    matrix["columnCount"] = columns.length;
  }
  onSetPropertyEditorOptionsCallback(
    propertyName: string,
    obj: Survey.Base,
    editorOptions: any
  ) {
    if (propertyName == "choices" && obj["name"] == "hideAddRemove") {
      editorOptions.allowAddRemoveItems = false;
    }
  }
  onPropertyEditorKeyDownCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    event: KeyboardEvent
  ) {}
  onGetErrorTextOnValidationCallback(
    propertyName: string,
    obj: Survey.Base,
    value: any
  ): string {
    return "";
  }
  onValueChangingCallback(options: any) {}
  onPropertyEditorObjectSetCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase
  ) {}
  onPropertyEditorModalShowDescriptionCallback(
    propertyName: string,
    obj: Survey.Base
  ): any {
    var res = { top: "", bottom: "" };
    if (obj["name"] == "showOnTop") res.top = "topValue";
    if (obj["name"] == "showOnBottom") res.bottom = "bottomValue";
    return res;
  }
  onGetElementEditorTitleCallback(obj: Survey.Base, title: string): string {
    return title;
  }
  onConditionValueSurveyCreatedCallBack(
    valueQuestionName: string,
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    survey: Survey.Survey
  ) {}
}

QUnit.test("On new ItemValue added", function(assert) {
  var options = new EditorOptionsTests();
  var editor = new SurveyObjectEditor(options);
  var question = new Survey.QuestionDropdown("q1");
  question.choices = [];
  editor.selectedObject = question;
  editor.onPropertyValueChanged.add((sender, options) => {
    question.choices = options.newValue;
  });
  var property = <SurveyObjectProperty>editor.getPropertyEditor("choices");
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
  var editor = new SurveyObjectEditor(options);
  var question = new Survey.QuestionMatrixDropdown("q1");
  question.columns = [];
  editor.selectedObject = question;
  editor.onPropertyValueChanged.add((sender, options) => {
    question.columns = options.newValue;
  });
  var property = <SurveyObjectProperty>editor.getPropertyEditor("columns");
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
  var editor = new SurveyObjectEditor(options);
  var question1 = new Survey.QuestionDropdown("q1");
  var question2 = new Survey.QuestionDropdown("hideAddRemove");

  editor.selectedObject = question1;
  var property = <SurveyObjectProperty>editor.getPropertyEditor("choices");
  var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(
    itemValuesEditor.koAllowAddRemoveItems(),
    true,
    "Show buttons for the first question"
  );

  editor.selectedObject = question2;
  property = <SurveyObjectProperty>editor.getPropertyEditor("choices");
  itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(
    itemValuesEditor.koAllowAddRemoveItems(),
    false,
    "Hide buttons for the second question"
  );
});

QUnit.test("show top/bottom description", function(assert) {
  var options = new EditorOptionsTests();
  var editor = new SurveyObjectEditor(options);
  var question1 = new Survey.QuestionDropdown("showOnTop");
  var question2 = new Survey.QuestionDropdown("showOnBottom");
  var question3 = new Survey.QuestionDropdown("donotshow");

  editor.selectedObject = question1;
  var property = <SurveyObjectProperty>editor.getPropertyEditor("choices");
  var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(
    itemValuesEditor.koHtmlTop(),
    "topValue",
    "top value set correctly"
  );
  assert.equal(itemValuesEditor.koHtmlBottom(), "", "bottom value is not set");

  editor.selectedObject = question2;
  property = <SurveyObjectProperty>editor.getPropertyEditor("choices");
  itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(itemValuesEditor.koHtmlTop(), "", "top value is not set");
  assert.equal(
    itemValuesEditor.koHtmlBottom(),
    "bottomValue",
    "bottom value set correctly"
  );

  editor.selectedObject = question3;
  property = <SurveyObjectProperty>editor.getPropertyEditor("choices");
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
  var editor = new SurveyObjectEditor(options);
  var qChoices = new Survey.QuestionDropdown("q1");
  var qMatrix = new Survey.QuestionMatrix("q2");

  editor.selectedObject = qChoices;
  var property = <SurveyObjectProperty>editor.getPropertyEditor("choices");
  var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(
    itemValuesEditor.hasDetailButton,
    true,
    "Choices property has Rules button"
  );

  editor.selectedObject = qMatrix;
  var property = <SurveyObjectProperty>editor.getPropertyEditor("columns");
  var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  assert.equal(
    itemValuesEditor.hasDetailButton,
    true,
    "Columns property has Rules button now"
  );
});

QUnit.test("SurveyPropertyItemValuesEditor, Detail tabs", function(assert) {
  var visibleIfProperty = Survey.JsonObject.metaData.findProperty(
    "itemvalue",
    "visibleIf"
  );
  if (!visibleIfProperty) {
    Survey.JsonObject.metaData.addProperty("itemvalue", {
      name: "visibleIf:condition",
      visible: false
    });
  }
  var options = new EditorOptionsTests();
  var editor = new SurveyObjectEditor(options);
  var qChoices = new Survey.QuestionDropdown("q1");
  qChoices.choices = [1, 2, 3];

  editor.selectedObject = qChoices;
  var property = <SurveyObjectProperty>editor.getPropertyEditor("choices");
  var itemValuesEditor = <SurveyPropertyItemValuesEditor>property.editor;
  itemValuesEditor.beforeShow();
  var firstItem = <SurveyPropertyItemValuesEditorItem>(
    itemValuesEditor.koItems()[0]
  );
  itemValuesEditor.koEditItem(firstItem);
  assert.equal(firstItem.itemEditor.koTabs().length, 1, "There is one tab");
  assert.equal(
    firstItem.itemEditor.koTabs()[0].name,
    "visibleIf",
    "It is visibleIf tab"
  );
  firstItem.item["visibleIf"] = "{cars} contains {item}";
  itemValuesEditor.koEditItem(null);
  assert.equal(
    itemValuesEditor.koShowTextView(),
    false,
    "visibleIf will be lost in text editing"
  );
  /* TODO add it later
  itemValuesEditor.apply();
  assert.equal(
    qChoices.choices[0]["visibleIf"],
    "{cars} contains {item}",
    "visibleIf has been saved"
  );
  */
  if (!visibleIfProperty) {
    Survey.JsonObject.metaData.removeProperty("itemvalue", "visibleIf");
  }
});
