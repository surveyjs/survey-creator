import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyEditorBase } from "../../src/propertyEditors/propertyEditorBase";
import {
  SurveyQuestionEditor,
  SurveyQuestionEditorTab
} from "../../src/questionEditors/questionEditor";
import {
  SurveyPropertyItemValuesEditor,
  SurveyPropertyItemValuesEditorItem
} from "../../src/propertyEditors/propertyItemValuesEditor";
import {
  SurveyNestedPropertyEditorEditorCell,
  SurveyNestedPropertyEditorColumn
} from "../../src/propertyEditors/propertyNestedPropertyEditor";
import { SurveyQuestionEditorDefinition } from "../../src/questionEditors/questionEditorDefinition";

import { SurveyPropertyMultipleValuesEditor } from "../../src/propertyEditors/propertyMultipleValuesEditor";
import { SurveyPropertyDropdownColumnsEditor } from "../../src/propertyEditors/propertyMatrixDropdownColumnsEditor";
import { SurveyObjectProperty } from "../../src/objectProperty";
import { SurveyPropertyTextEditor } from "../../src/propertyEditors/propertyModalEditor";
import { SurveyPropertyResultfullEditor } from "../../src/propertyEditors/propertyRestfullEditor";
import { ISurveyObjectEditorOptions } from "../../src/propertyEditors/propertyEditorBase";
import "../../src/propertyEditors/propertyTextItemsEditor";
import {
  SurveyPropertyTriggersEditor,
  SurveyPropertyVisibleTrigger
} from "../../src/propertyEditors/propertyTriggersEditor";
import {
  SurveyPropertyValidatorsEditor,
  SurveyPropertyValidatorItem
} from "../../src/propertyEditors/propertyValidatorsEditor";
import { SurveyPropertyCustomEditor } from "../../src/propertyEditors/propertyCustomEditor";
import { Extentions } from "../../src/extentions";
import {
  SurveyPropertyEditorFactory,
  SurveyDropdownPropertyEditor
} from "../../src/propertyEditors/propertyEditorFactory";
import { defaultStrings } from "../../src/editorLocalization";
import RModal from "rmodal";

export default QUnit.module("PropertyEditorsTests");

class EditorOptionsTests implements ISurveyObjectEditorOptions {
  alwaySaveTextInPropertyEditors: boolean;
  showApplyButtonInEditors: boolean;
  useTabsInElementEditor: boolean;
  onItemValueAddedCallback(propertyName: string, itemValue: Survey.ItemValue) {}
  onMatrixDropdownColumnAddedCallback(column: Survey.MatrixDropdownColumn) {}
  onSetPropertyEditorOptionsCallback(
    propertyName: string,
    obj: Survey.Base,
    editorOptions: any
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
    return null;
  }
  onGetElementEditorTitleCallback(obj: Survey.Base, title: string): string {
    return title;
  }
}

QUnit.test("Create correct property editor", function(assert) {
  var property = new Survey.JsonObjectProperty("testname");
  property.type = "unknown";
  var propertyEditor = SurveyPropertyEditorFactory.createEditor(property, null);
  assert.equal(
    propertyEditor.editorType,
    "string",
    "The default property editor is 'string'"
  );

  var propertyTypes = [
    "string",
    "boolean",
    "number",
    "dropdown",
    "text",
    "html",
    "itemvalues",
    "matrixdropdowncolumns",
    "textitems",
    "triggers",
    "validators",
    "restfull"
  ];
  var property = new Survey.JsonObjectProperty("testname");
  for (var i = 0; i < propertyTypes.length; i++) {
    var propType = propertyTypes[i];
    property.type = propType;
    propertyEditor = SurveyPropertyEditorFactory.createEditor(property, null);
    assert.equal(
      propertyEditor.editorType,
      propType,
      "Create '" + propType + "' property editor"
    );
  }
});
QUnit.test("propertyEditor.displayName", function(assert) {
  var property = Survey.JsonObject.metaData.findProperty(
    "question",
    "enableIf"
  );
  defaultStrings.p["enableIf"] = "It is enableIf";
  var propertyEditor = SurveyPropertyEditorFactory.createEditor(property, null);
  assert.equal(
    propertyEditor.displayName,
    "It is enableIf",
    "The displayName was set correctly"
  );
});
QUnit.test("Create custom property editor", function(assert) {
  var propertyValue = null;
  var widgetJSON = {
    render: function(editor, el) {
      propertyValue = propertyEditor.editingValue;
      editor.onValueChangedCallback = function(newValue) {
        propertyValue = newValue;
      };
    }
  };
  Extentions.registerCustomPropertyEditor("customBool", widgetJSON);
  var property = new Survey.JsonObjectProperty("testname");
  property.type = "customBool";
  var propertyEditor = SurveyPropertyEditorFactory.createEditor(property, null);
  assert.equal(propertyEditor.editorType, "custom", "It is a custom editor'");
  assert.deepEqual(
    (<SurveyPropertyCustomEditor>propertyEditor).widgetJSON,
    widgetJSON,
    "widgetJSON set correctly"
  );
  widgetJSON.render(propertyEditor, null);
  propertyEditor.editingValue = 3;
  assert.equal(propertyValue, 3, "value has been set to 3 as well");
});
QUnit.test("PropertyEditor and hasError - required", function(assert) {
  var question = new Survey.QuestionText("q1");
  var property = Survey.JsonObject.metaData.findProperty(
    "questionbase",
    "name"
  );
  var propertyEditor = new SurveyObjectProperty(property);
  propertyEditor.object = question;
  var editor = propertyEditor.editor;
  assert.equal(editor.isRequired, true, "The property is required");
  assert.equal(editor.hasError(), false, "There is value here");
  assert.equal(editor.koErrorText(), "", "The error is empty");
  editor.koValue("");
  assert.equal(editor.hasError(), true, "There is no value here");
  assert.notEqual(editor.koErrorText(), "", "The error is not empty");
});
QUnit.test("SurveyPropertyDropdown - choices", function(assert) {
  var property = new Survey.JsonObjectProperty("dropdown");
  property.setChoices([1, 2, 3], null);
  var propertyEditor = new SurveyObjectProperty(property);
  var editor = <SurveyDropdownPropertyEditor>propertyEditor.editor;
  assert.equal(
    propertyEditor.editorType,
    "dropdown",
    "Dropdown editor should be created"
  );
  assert.equal(editor.koChoices().length, 3, "There are 3 items");
  assert.equal(editor.koChoices()[0].value, 1, "The first value");
  assert.equal(editor.koChoices()[0].text, 1, "The first text");
});
QUnit.test("SurveyPropertyDropdown - choices, support ItemValue", function(
  assert
) {
  var property = new Survey.JsonObjectProperty("dropdown");
  property.setChoices([{ value: 1, text: "Item 1" }, 2, 3], null);
  var propertyEditor = new SurveyObjectProperty(property);
  var editor = <SurveyDropdownPropertyEditor>propertyEditor.editor;
  assert.equal(
    propertyEditor.editorType,
    "dropdown",
    "Dropdown editor should be created"
  );
  assert.equal(editor.koChoices().length, 3, "There are 3 items");
  assert.equal(editor.koChoices()[0].value, 1, "The first value");
  assert.equal(editor.koChoices()[0].text, "Item 1", "Use text property");
});
QUnit.test("SurveyPropertyItemValue", function(assert) {
  var choices = [
    { value: 1, text: "item1" },
    { value: 2, text: "item2" },
    { value: 3, text: "item3" }
  ];
  var property = new Survey.JsonObjectProperty("choices");
  property.type = "itemvalue";
  var itemValueProperty = new SurveyPropertyItemValuesEditor(property);
  itemValueProperty.object = { choices: choices };
  itemValueProperty.beforeShow();
  itemValueProperty.onChanged = (newValue: Array<Survey.ItemValue>) => {
    choices = newValue;
  };
  assert.equal(
    itemValueProperty.koItems().length,
    3,
    "there are three elements"
  );
  assert.equal(
    itemValueProperty.koItems()[1].cells[0].value,
    2,
    "check value of the second element"
  );
  assert.equal(
    itemValueProperty.koItems()[1].cells[1].value,
    "item2",
    "check text of the second element"
  );

  itemValueProperty.onDeleteClick(itemValueProperty.koItems()[1]);
  assert.equal(
    itemValueProperty.koItems().length,
    2,
    "there are two elements after deleting"
  );
  assert.equal(
    itemValueProperty.koItems()[1].cells[0].value,
    3,
    "check value of the second element"
  );
  assert.equal(
    itemValueProperty.koItems()[1].cells[1].value,
    "item3",
    "check text of the second element"
  );

  itemValueProperty.onAddClick();
  assert.equal(
    itemValueProperty.koItems().length,
    3,
    "there are three elements after adding"
  );
  itemValueProperty.koItems()[2].cells[0].koValue(4);
  itemValueProperty.koItems()[2].cells[1].koValue("item4");
  assert.equal(
    itemValueProperty.koItems()[2].cells[0].koValue(),
    4,
    "check value of the last element"
  );
  assert.equal(
    itemValueProperty.koItems()[2].cells[1].koValue(),
    "item4",
    "check text of the last element"
  );

  itemValueProperty.onApplyClick();
  assert.equal(choices.length, 3, "there are three elements after adding");
  assert.equal(choices[2].value, 4, "check value of the last element");
  assert.equal(choices[2].text, "item4", "check text of the last element");

  itemValueProperty.onAddClick();
  itemValueProperty.onAddClick();
  itemValueProperty.onResetClick();
  assert.equal(
    itemValueProperty.koItems().length,
    3,
    "there are three elements"
  );
});
QUnit.test("SurveyPropertyItemValue different view type", function(assert) {
  var choices = [{ value: 1, text: "item1" }, { value: 2 }];
  var editor = new SurveyPropertyItemValuesEditor(null);
  editor.beforeShow();
  editor.editingValue = choices;
  editor.onChanged = (newValue: Array<Survey.ItemValue>) => {
    choices = newValue;
  };
  assert.equal(editor.koItemsText(), "", "It is empty by default");
  editor.koActiveView("text");
  assert.equal(editor.koItemsText(), "1|item1\n2", "It is empty by default");
  editor.koItemsText("1|item1\n\n2|item2\n3\ni4");
  editor.koActiveView("form");
  assert.equal(editor.koItems().length, 4, "There are 4 items");
  assert.equal(
    editor.koItems()[1].cells[0].koValue(),
    2,
    "Value of second item is 2"
  );
  assert.equal(
    editor.koItems()[1].cells[1].koValue(),
    "item2",
    "Text of second item is item2"
  );
  assert.equal(
    editor.koItems()[2].cells[0].koValue(),
    3,
    "Value of 3-th item is 3"
  );
  assert.equal(
    editor.koItems()[2].cells[1].koValue(),
    "",
    "Text of 3-th item is empty"
  );
  assert.equal(
    editor.koItems()[3].cells[0].koValue(),
    "i4",
    "Value of 4-th item is i4"
  );
  assert.equal(
    editor.koItems()[3].cells[1].koValue(),
    "",
    "Text of 4-th item is empty"
  );
  editor.koActiveView("text");
  editor.koItemsText("1|item1");
  editor.onApplyClick();
  assert.equal(choices.length, 1, "The value is still applied");
});
QUnit.test("SurveyPropertyItemValue: Value and Text are same", function(
  assert
) {
  var choices: Array<Survey.ItemValue> = [];
  choices.push(new Survey.ItemValue(1, "1"));
  choices.push(new Survey.ItemValue("item 2", "item 2"));
  var itemValueProperty = new SurveyPropertyItemValuesEditor(null);
  itemValueProperty.beforeShow();
  assert.equal(choices[0].hasText, true, "the first item has text");
  assert.equal(choices[1].hasText, true, "the second item has text");
  itemValueProperty.onChanged = (newValue: Array<Survey.ItemValue>) => {
    Survey.ItemValue.setData(choices, newValue);
  };
  itemValueProperty.editingValue = choices;
  assert.equal(
    itemValueProperty.koItems().length,
    2,
    "there are three elements"
  );
  itemValueProperty.onApplyClick();
  assert.equal(choices.length, 2, "there are two items");
  assert.equal(choices[0].value, 1, "the first value is 1");
  assert.equal(choices[0].hasText, false, "the first text is null");
  assert.equal(choices[1].value, "item 2", "the second value is 'item 2'");
  assert.equal(choices[1].hasText, false, "the second text is null");
});
QUnit.test(
  "SurveyPropertyItemValue: Value and Text are same and editor.alwaySaveTextInPropertyEditors = true",
  function(assert) {
    var choices = [
      { value: 1, text: "1" },
      { value: "item 2", text: "item 2" }
    ];
    var itemValueProperty = new SurveyPropertyItemValuesEditor(null);
    itemValueProperty.beforeShow();
    itemValueProperty.onChanged = (newValue: Array<Survey.ItemValue>) => {
      choices = newValue;
    };
    itemValueProperty.editingValue = choices;
    var options = new EditorOptionsTests();
    options.alwaySaveTextInPropertyEditors = true;
    itemValueProperty.options = options;
    assert.equal(
      itemValueProperty.koItems().length,
      2,
      "there are three elements"
    );
    itemValueProperty.onApplyClick();
    assert.equal(choices.length, 2, "there are two items");
    assert.equal(choices[0].value, 1, "the first value is 1");
    assert.equal(choices[0].text, "1", "the first text is '1'");
    assert.equal(choices[1].value, "item 2", "the second value is 'item 2'");
    assert.equal(choices[1].text, "item 2", "the second text is 'item 2'");
  }
);
QUnit.test("SurveyPropertyItemValue_PureValue", function(assert) {
  var choices = [1, "item2", { value: 3, text: "item3" }];
  var itemValueProperty = new SurveyPropertyItemValuesEditor(null);
  itemValueProperty.beforeShow();
  itemValueProperty.onChanged = (newValue: Array<Survey.ItemValue>) => {
    choices = newValue;
  };
  itemValueProperty.editingValue = choices;
  assert.equal(
    itemValueProperty.koItems().length,
    3,
    "there are three elements"
  );
  assert.equal(
    itemValueProperty.koItems()[0].cells[0].koValue(),
    1,
    "check value of the first element"
  );
  assert.equal(
    itemValueProperty.koItems()[1].cells[0].koValue(),
    "item2",
    "check value of the second element"
  );
  assert.equal(
    itemValueProperty.koItems()[2].cells[0].koValue(),
    3,
    "check value of the third element"
  );
  assert.equal(
    itemValueProperty.koItems()[2].cells[1].koValue(),
    "item3",
    "check text of the third element"
  );
});
QUnit.test("SurveyPropertyItemValue columns generation", function(assert) {
  var propertyEditor = new SurveyPropertyItemValuesEditor(null);
  assert.equal(
    propertyEditor.columns.length,
    2,
    "There are two columns value + text"
  );
  assert.equal(
    propertyEditor.columns[0].property.name,
    "value",
    "The first column is value"
  );
  assert.equal(
    propertyEditor.columns[1].property.name,
    "text",
    "The second column is text"
  );
});
QUnit.test("SurveyPropertyItemValue custom property", function(assert) {
  Survey.JsonObject.metaData.addProperty("itemvalue", { name: "imageLink" });

  var propertyEditor = new SurveyPropertyItemValuesEditor(null);
  assert.equal(
    propertyEditor.columns.length,
    3,
    "There are three columns value + text + link"
  );
  assert.equal(
    propertyEditor.koShowTextView(),
    true,
    "Allow to show text view with custom properties"
  );

  Survey.JsonObject.metaData.removeProperty("itemvalue", "imageLink");
});
QUnit.test("SurveyPropertyItemValue columns define in definition", function(
  assert
) {
  Survey.JsonObject.metaData.addProperty("itemvalue", "description");
  SurveyQuestionEditorDefinition.definition["checkbox@choices"] = {
    properties: ["value", "text"]
  };

  var qRadio = new Survey.QuestionRadiogroup("q1");
  var qCheck = new Survey.QuestionCheckbox("q2");

  var propertyEditor = new SurveyPropertyItemValuesEditor(
    Survey.JsonObject.metaData.findProperty("selectbase", "choices")
  );
  propertyEditor.object = qRadio;
  propertyEditor.editingValue = qRadio.choices;
  propertyEditor.beforeShow();
  assert.equal(
    propertyEditor.columns.length,
    3,
    "There are three columns value + text + description"
  );
  assert.equal(
    propertyEditor.columns[2].property.name,
    "description",
    "The last column name is"
  );
  propertyEditor = new SurveyPropertyItemValuesEditor(
    Survey.JsonObject.metaData.findProperty("selectbase", "choices")
  );
  propertyEditor.object = qCheck;
  propertyEditor.editingValue = qCheck.choices;
  propertyEditor.beforeShow();
  assert.equal(
    propertyEditor.columns.length,
    2,
    "There are two columns value + text"
  );

  delete SurveyQuestionEditorDefinition.definition["radiogroup@choices"];
  Survey.JsonObject.metaData.removeProperty("itemvalue", "description");
});
QUnit.test("extended SurveyPropertyItemValue + custom property", function(
  assert
) {
  Survey.JsonObject.metaData.addClass(
    "itemvalues_ex",
    ["imageLink"],
    function() {
      return new Survey.ItemValue(null);
    },
    "itemvalue"
  );
  var property = new Survey.JsonObjectProperty("test");
  property.type = "itemvalues_ex";
  var propEditor = SurveyPropertyEditorFactory.createEditor(property, null);
  assert.equal(
    propEditor.editorType,
    "itemvalues",
    "It is item value, use parent"
  );
  var propertyEditor = <SurveyPropertyItemValuesEditor>propEditor;
  assert.equal(
    propertyEditor.columns.length,
    3,
    "There are three columns value + text + link"
  );
  assert.equal(
    propertyEditor.koShowTextView(),
    true,
    "Allow to show text view with custom properties"
  );
  Survey.JsonObject.metaData.removeProperty("itemvalue_ex", "imageLink");
});
QUnit.test(
  "extended SurveyPropertyItemValue + custom property - process items with custom properties",
  function(assert) {
    Survey.JsonObject.metaData.addClass(
      "itemvalues_ex",
      ["imageLink"],
      function() {
        return new Survey.ItemValue(null);
      },
      "itemvalue"
    );
    var property = new Survey.JsonObjectProperty("test");
    property.type = "itemvalues_ex";
    var propEditor = SurveyPropertyEditorFactory.createEditor(property, null);
    var propertyEditor = <SurveyPropertyItemValuesEditor>propEditor;
    assert.equal(
      propertyEditor.columns.length,
      3,
      "There are three columns value + text + link"
    );
    assert.equal(
      propertyEditor.koShowTextView(),
      true,
      "Allow to show text view with custom properties"
    );
    assert.equal(propertyEditor.koItems().length, 0, "No items");
    assert.equal(propertyEditor.koItemsText(), "", "Editor is empty");

    propertyEditor.onAddClick();
    assert.equal(propertyEditor.koItems().length, 1, "One item");

    propertyEditor.koItems()[0].cells[0].value = "item";
    propertyEditor.koItems()[0].cells[1].value = "2nd";
    propertyEditor.koItems()[0].cells[2].value = "custom";
    propertyEditor.koActiveView("fast");
    assert.equal(propertyEditor.koItemsText(), "item|2nd|custom", "One item");

    propertyEditor.koItemsText("item|2nd|custom\nitem2|2nd2|custom2");
    propertyEditor.koActiveView("form");
    assert.equal(propertyEditor.koItems().length, 2, "Two items");
    assert.equal(
      propertyEditor.koItems()[1].cells[0].value,
      "item2",
      "Row 1 Col 1"
    );
    assert.equal(
      propertyEditor.koItems()[1].cells[1].value,
      "2nd2",
      "Row 1 Col 2"
    );
    assert.equal(
      propertyEditor.koItems()[1].cells[2].value,
      "custom2",
      "Row 1 Col 3"
    );

    Survey.JsonObject.metaData.removeProperty("itemvalue_ex", "imageLink");
  }
);
QUnit.test("SurveyPropertyItemValuesEditor + locale", function(assert) {
  var survey = new Survey.Survey();
  var p = survey.addNewPage();
  var q = <Survey.QuestionDropdown>p.addNewQuestion("dropdown", "q1");
  q.choices = [1, 2, 3];
  survey.locale = "en";
  q.choices[0].text = "Engish 1";

  survey.locale = "de";
  var property = Survey.JsonObject.metaData.findProperty(
    "selectbase",
    "choices"
  );
  var propEditor = <SurveyPropertyItemValuesEditor>(
    SurveyPropertyEditorFactory.createEditor(property, function(newValue) {
      q.choices = newValue;
    })
  );
  propEditor.beforeShow();
  propEditor.object = q;
  assert.equal(
    propEditor.koItems()[0].cells[1].koValue(),
    "",
    "There is no value for deutsch"
  );
  propEditor.koItems()[0].cells[1].koValue("Deutsch 1");
  assert.equal(
    propEditor.koItems()[0].cells[1].koValue(),
    "Deutsch 1",
    "Replace with deutch"
  );
  propEditor.apply();
  survey.locale = "en";
  assert.equal(q.choices[0].text, "Engish 1", "value is english");
  survey.locale = "de";
  assert.equal(q.choices[0].text, "Deutsch 1", "value is deutsch");
});
QUnit.test("SurveyNestedPropertyEditorEditorCell", function(assert) {
  //TODO remove later - create property if it doesn't exist
  var propertyEditor = new SurveyPropertyItemValuesEditor(null);

  var property = Survey.JsonObject.metaData.findProperty("itemvalue", "value");
  var column = new SurveyNestedPropertyEditorColumn(property);
  var itemValue = new Survey.ItemValue(1);
  var cell = new SurveyNestedPropertyEditorEditorCell(
    itemValue,
    column.property
  );
  assert.equal(cell.value, 1, "value equals 1");
  assert.equal(cell.koValue(), 1, "koValue equals 1");
  cell.koValue(5);
  assert.equal(cell.value, 5, "value equals 5");
  assert.equal(itemValue.value, 5, "itemValue.value equals 5");
  assert.equal(cell.hasError, false, "There is no errors in hasError");
  assert.equal(
    cell.editor.koHasError(),
    false,
    "There is no errors in koHasError"
  );
  cell.koValue(null);
  assert.equal(cell.hasError, true, "There is empty error in hasError");
  assert.equal(
    cell.editor.koHasError(),
    true,
    "There is empty error in koHasError"
  );
});
QUnit.test("SurveyNestedPropertyEditorEditorCell + property editor", function(
  assert
) {
  var property = new Survey.JsonObjectProperty("testBoolean");
  property.type = "boolean";
  var column = new SurveyNestedPropertyEditorColumn(property);
  var itemValue = new Survey.ItemValue(1);
  itemValue["testBoolean"] = true;
  var cell = new SurveyNestedPropertyEditorEditorCell(
    itemValue,
    column.property
  );
  assert.equal(cell.value, true, "value equals true");
  assert.equal(cell.koValue(), true, "koValue equals true");
  assert.equal(
    cell.objectProperty.editorType,
    "boolean",
    "create boolean editor type"
  );
});
QUnit.test("SurveyPropertyItemValuesEditorItem", function(assert) {
  var propertyEditor = new SurveyPropertyItemValuesEditor(null);
  var itemValue = new Survey.ItemValue(null);
  var item = new SurveyPropertyItemValuesEditorItem(
    itemValue,
    propertyEditor.columns,
    null
  );
  assert.equal(item.cells.length, 2, "There are two cells");
  assert.equal(item.hasError(), true, "There is an error");
  item.cells[0].koValue(0);
  assert.equal(item.hasError(), false, "There is no errors");
});

QUnit.test("SurveyPropertyMultipleValuesEditor", function(assert) {
  Survey.JsonObject.metaData.addProperty("question", {
    name: "multiple:multiplevalues",
    choices: [
      { value: 1, text: "Item 1" },
      { value: 2, text: "Item 2" },
      { value: 3, text: "Item 3" }
    ]
  });
  var property = Survey.JsonObject.metaData.findProperty(
    "question",
    "multiple"
  );
  var propertyEditor = new SurveyPropertyMultipleValuesEditor(property);
  assert.equal(
    propertyEditor.getValueText([1, 3]),
    "[Item 1, Item 3]",
    "Use text for displaying the value"
  );
  Survey.JsonObject.metaData.removeProperty("question", "multiple");
});

QUnit.test("SurveyPropertyMatrixDropdownColumns set properties", function(
  assert
) {
  var columns: Array<Survey.MatrixDropdownColumn> = [];
  columns.push(new Survey.MatrixDropdownColumn("column 1"));
  columns.push(new Survey.MatrixDropdownColumn("column 2"));
  columns[0]["choices"] = [1, 2, "three"];
  var columnsEditor = new SurveyPropertyDropdownColumnsEditor(null);
  columnsEditor.beforeShow();
  columnsEditor.onChanged = (newValue: Array<Survey.MatrixDropdownColumn>) => {
    columns = newValue;
  };

  assert.equal(columnsEditor.columns.length, 4, "By default four columns");

  columnsEditor.editingValue = columns;
  assert.equal(columnsEditor.koItems().length, 2, "there are two elements");
  assert.equal(
    columnsEditor.koItems()[0].cells[2].value,
    "column 1",
    "the first column name"
  );
  columnsEditor.onAddClick();
  columnsEditor.koItems()[2].cells[1].koValue("checkbox");
  columnsEditor.koItems()[2].cells[2].koValue("column 3");
  assert.equal(
    columnsEditor.koItems().length,
    3,
    "There are 3 columns in editor"
  );
  columnsEditor.onApplyClick();
  assert.equal(columns.length, 3, "There are 3 columns");
  assert.equal(
    columns[2]["cellType"],
    "checkbox",
    "the last column has checkbox cells"
  );
  assert.equal(
    columns[2]["name"],
    "column 3",
    "the last column name set correctly"
  );
});

QUnit.test("SurveyPropertyMatrixDropdownColumns change columns", function(
  assert
) {
  var saveProperties =
    SurveyQuestionEditorDefinition.definition.matrixdropdowncolumn.properties;

  SurveyQuestionEditorDefinition.definition.matrixdropdowncolumn.properties = [
    "cellType",
    "name",
    "readOnly"
  ];

  var columns: Array<Survey.MatrixDropdownColumn> = [];
  columns.push(new Survey.MatrixDropdownColumn("column 1"));
  columns.push(new Survey.MatrixDropdownColumn("column 2"));
  var columnsEditor = new SurveyPropertyDropdownColumnsEditor(null);
  assert.equal(columnsEditor.columns.length, 3, "There are 3 columns");
  assert.equal(
    columnsEditor.columns[2].property.name,
    "readOnly",
    "The last column is readonly"
  );

  SurveyQuestionEditorDefinition.definition.matrixdropdowncolumn.properties = saveProperties;
});

QUnit.test("SurveyPropertyMatrixDropdownColumns use question editor", function(
  assert
) {
  var survey = new Survey.Survey();
  survey.addNewPage("p");
  var question = new Survey.QuestionMatrixDropdown("q1");
  question.addColumn("column 1");
  question.addColumn("column 2");
  survey.pages[0].addElement(question);
  var columnsEditor = new SurveyPropertyDropdownColumnsEditor(
    Survey.JsonObject.metaData.findProperty(question.getType(), "columns")
  );
  columnsEditor.object = question;
  columnsEditor.beforeShow();
  columnsEditor.onChanged = (newValue: Array<Survey.MatrixDropdownColumn>) => {
    question.columns = newValue;
  };
  columnsEditor.editingValue = question.columns;

  assert.equal(columnsEditor.koEditItem(), null, "It is null by default");
  columnsEditor.koItems()[1].column.cellType = "dropdown";
  columnsEditor.koEditItem(columnsEditor.koItems()[1]);
  var colDetailEditor = <SurveyQuestionEditor>(
    columnsEditor.koEditItem().itemEditor
  );
  assert.notEqual(
    colDetailEditor.obj,
    null,
    "The question editor obj is not null"
  );
  assert.equal(
    colDetailEditor.obj.getType(),
    "matrixdropdowncolumn",
    "itemEditor edit the second item"
  );
  var generalTab = <SurveyQuestionEditorTab>colDetailEditor.koTabs()[0];
  var rows = generalTab.properties.rows;
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows[i].properties.length; j++) {
      var prop = rows[i].properties[j];
      if (prop.editor.editorType == "boolean") continue;
      assert.equal(
        prop.editor.showDisplayNameOnTop,
        true,
        "It should be shown on top"
      );
    }
  }
});

QUnit.test("Text property test - two way binding", function(assert) {
  var property = new Survey.JsonObjectProperty("text");
  property.type = "text";
  var propertyEditor = new SurveyObjectProperty(property);
  var editor = <SurveyPropertyTextEditor>propertyEditor.editor;
  editor.koTextValue("1");
  editor.onApplyClick();
  assert.equal(
    propertyEditor.editor.koValue(),
    "1",
    "the value is set correctly from the editor"
  );
  propertyEditor.editor.koValue("2");
  assert.equal(
    editor.koTextValue(),
    "2",
    "the value is set correctly from text input"
  );
});
QUnit.test("SurveyPropertyResultfullEditor test", function(assert) {
  var editor = new SurveyPropertyResultfullEditor(null);
  editor.editingValue = new Survey.ChoicesRestfull();
  assert.equal(editor.koItems().length, 4, "There are 4 items, 4 properties");
  editor.koItems()[1].koValue("path1");
  editor.koItems()[2].koValue("name2");
  editor.koItems()[3].koValue("title3");
  assert.equal(editor.question.choicesByUrl.path, "path1", "test path is set");
  assert.equal(
    editor.question.choicesByUrl.valueName,
    "name2",
    "test name is set"
  );
  assert.equal(
    editor.question.choicesByUrl.titleName,
    "title3",
    "test title is set"
  );
});
QUnit.test("Triggers property editor", function(assert) {
  var survey = createSurvey();
  var trigger = new Survey.SurveyTriggerVisible();
  trigger.name = "question1";
  trigger.value = "val1";
  trigger.operator = "notequal";
  trigger.questions.push("question2");
  survey.triggers.push(trigger);
  var result = [];
  var propEditor = new SurveyPropertyTriggersEditor(null);
  propEditor.beforeShow();
  propEditor.onChanged = (newValue: any) => {
    result = newValue;
  };
  propEditor.editingObject = survey;
  propEditor.editingValue = survey.triggers;
  assert.equal(
    propEditor.koTriggers().length,
    propEditor.availableTriggers.length,
    "localized triggers created correctly"
  );
  assert.equal(
    propEditor.koItems().length,
    1,
    "There are one trigger initially"
  );
  var koTrigger = <SurveyPropertyVisibleTrigger>propEditor.koSelected();
  assert.equal(koTrigger.koName(), "question1", "Name set correctly");
  assert.equal(koTrigger.koOperator(), "notequal", "operator set correctly");
  assert.equal(koTrigger.koValue(), "val1", "value set correctly");
  assert.deepEqual(
    koTrigger.questions.koChoosen(),
    ["question2"],
    "questions set correctly"
  );

  propEditor.onAddClick({ value: "visibletrigger" });
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
  assert.equal(
    koTrigger.koText(),
    "Run if 'question2' is not empty",
    "text for valid trigger"
  );

  koTrigger.pages.koChoosen.push("page2");
  koTrigger.questions.koChoosen.push("question3");
  koTrigger.koValue(1);
  trigger = <Survey.SurveyTriggerVisible>koTrigger.createTrigger();
  assert.equal(trigger.name, "question2", "create trigger correctly: name");
  assert.equal(
    trigger.operator,
    "notempty",
    "create trigger correctly: operator"
  );
  assert.equal(trigger.value, 1, "create trigger correctly: value");
  assert.deepEqual(trigger.pages, ["page2"], "create trigger correctly: pages");
  assert.deepEqual(
    trigger.questions,
    ["question3"],
    "create trigger correctly: questions"
  );

  propEditor.onAddClick({ value: "visibletrigger" });
  assert.equal(propEditor.koItems().length, 3, "There are three triggers now");
  propEditor.onDeleteClick();
  assert.equal(propEditor.koItems().length, 2, "There are again two triggers");

  propEditor.onApplyClick();
  assert.equal(result.length, 2, "Two triggers are saved");

  propEditor.onAddClick({ value: "completetrigger" });
  koTrigger = <SurveyPropertyVisibleTrigger>propEditor.koSelected();
  koTrigger.koName("question2");
  koTrigger.koOperator("notempty");
  propEditor.onApplyClick();
  assert.equal(result.length, 3, "There are 3 triggers");
  assert.equal(
    result[2].getType(),
    "completetrigger",
    "Complete trigger is created"
  );
});
QUnit.test("Validators property editor", function(assert) {
  var survey = createSurvey();
  var validator = new Survey.NumericValidator(10, 100);
  validator.text = "validatortext";
  var question = <Survey.Question>survey.getQuestionByName("question1");
  question.validators.push(validator);
  var result = [];
  var propEditor = new SurveyPropertyValidatorsEditor(null);
  propEditor.beforeShow();
  assert.equal(
    propEditor.availableValidators.length,
    propEditor.koValidators().length,
    "Localized validators have been created"
  );

  propEditor.onChanged = (newValue: any) => {
    result = newValue;
  };
  propEditor.editingObject = question;
  propEditor.editingValue = question.validators;
  assert.equal(
    propEditor.koItems().length,
    1,
    "There are one validator initially"
  );
  var koValidator = <SurveyPropertyValidatorItem>propEditor.koSelected();
  assert.equal(
    koValidator.validator.text,
    "validatortext",
    "Validator Text is set correctly"
  );
  assert.equal(
    (<Survey.NumericValidator>koValidator.validator).minValue,
    10,
    "Validator 'minValue' is set correctly"
  );
  assert.equal(
    (<Survey.NumericValidator>koValidator.validator).maxValue,
    100,
    "Validator 'maxValue' is set correctly"
  );

  propEditor.onAddClick({ value: "textvalidator" });
  assert.equal(propEditor.koItems().length, 2, "There are two validators now");
  var koValidator = <SurveyPropertyValidatorItem>propEditor.koSelected();
  assert.equal(koValidator.text, "text", "Created with corrected value");
  (<Survey.TextValidator>koValidator.validator).minLength = 20;
  koValidator.validator.text = "text is short.";

  propEditor.onAddClick({ value: "textvalidator" });
  assert.equal(
    propEditor.koItems().length,
    3,
    "There are three validators now"
  );
  propEditor.onDeleteClick();
  assert.equal(
    propEditor.koItems().length,
    2,
    "There are two validators again"
  );

  propEditor.onApplyClick();
  assert.equal(result.length, 2, "Two validators are saved");
  assert.equal(result[1].minLength, 20, "The properties are saved too");
});
function createSurvey(): Survey.Survey {
  return new Survey.Survey({
    pages: [
      {
        name: "page1",
        questions: [
          { type: "text", name: "question1" },
          {
            name: "question2",
            choices: [
              "one",
              { value: "two", text: "second value" },
              { value: 3, text: "third value" }
            ],
            type: "checkbox"
          }
        ]
      },
      { name: "page2", questions: [{ name: "question3", type: "comment" }] },
      {
        name: "page3",
        questions: [
          {
            name: "question4",
            columns: ["Column 1", "Column 2", "Column 3"],
            rows: ["Row 1", "Row 2"],
            type: "matrix"
          },
          { name: "question5", type: "rating" }
        ]
      }
    ]
  });
}
