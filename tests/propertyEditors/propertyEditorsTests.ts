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
import { SurveyPropertyTextItemsEditor } from "../../src/propertyEditors/propertyTextItemsEditor";
import {
  SurveyPropertyTriggersEditor,
  SurveyPropertyVisibleTrigger,
  SurveyPropertySetValueTrigger
} from "../../src/propertyEditors/propertyTriggersEditor";
import {
  SurveyPropertyValidatorsEditor,
  SurveyPropertyValidatorItem
} from "../../src/propertyEditors/propertyValidatorsEditor";
import { SurveyPropertyCustomEditor } from "../../src/propertyEditors/propertyCustomEditor";
import { Extentions } from "../../src/extentions";
import {
  SurveyPropertyEditorFactory,
  SurveyDropdownPropertyEditor,
  SurveyStringPropertyEditor
} from "../../src/propertyEditors/propertyEditorFactory";
import { defaultStrings } from "../../src/editorLocalization";

export default QUnit.module("PropertyEditorsTests");

class SurveyPropertyItemValuesEditorForTests extends SurveyPropertyItemValuesEditor {
  constructor() {
    super(Survey.JsonObject.metaData.findProperty("selectbase", "choices"));
  }
}

class EditorOptionsTests implements ISurveyObjectEditorOptions {
  doValueChangingCallback: (options: any) => any;
  alwaySaveTextInPropertyEditors: boolean;
  showApplyButtonInEditors: boolean;
  useTabsInElementEditor: boolean;
  showObjectTitles: boolean;
  showTitlesInExpressions: boolean;
  onIsEditorReadOnlyCallback(
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    readOnly: boolean
  ): boolean {
    return false;
  }
  onItemValueAddedCallback(
    obj: Survey.Base,
    propertyName: string,
    itemValue: Survey.ItemValue,
    itemValues: Array<Survey.ItemValue>
  ) {}
  onMatrixDropdownColumnAddedCallback(
    matrix: Survey.Question,
    column: Survey.MatrixDropdownColumn,
    columns: Array<Survey.MatrixDropdownColumn>
  ) {}
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
  onPropertyEditorKeyDownCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    event: KeyboardEvent
  ) {}
  onValueChangingCallback(options: any) {
    if (!!this.doValueChangingCallback) this.doValueChangingCallback(options);
  }
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
  onConditionValueSurveyCreatedCallBack(
    valueQuestionName: string,
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    survey: Survey.Survey
  ) {}
  onConditionQuestionsGetListCallback(
    propertyName: string,
    obj: Survey.Base,
    editor: SurveyPropertyEditorBase,
    list: any[]
  ) {}
  public createSurvey(
    json: any = {},
    reason: string = "designer",
    surveyType = Survey.Survey
  ) {
    return new surveyType(json);
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
    "itemvalue[]",
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
  Extentions.unregisterCustomPropertyEditor("customBool");
});

QUnit.test("Custom property editor - validation", function(assert) {
  var widgetJSON = {
    validate: function(editor, newValue): string {
      if (!newValue) return null;
      if (newValue.length < 2) return "Length is less than 2";
      if (newValue.length > 5) return "Length is more than 5";
      return null;
    }
  };
  Extentions.registerCustomPropertyEditor("customVal", widgetJSON);
  var property = new Survey.JsonObjectProperty("testname");
  property.type = "customVal";
  var propertyEditor = SurveyPropertyEditorFactory.createEditor(property, null);
  assert.equal(propertyEditor.editorType, "custom", "It is a custom editor'");
  assert.deepEqual(
    (<SurveyPropertyCustomEditor>propertyEditor).widgetJSON,
    widgetJSON,
    "widgetJSON set correctly"
  );
  propertyEditor.koValue("1");
  assert.equal(propertyEditor.hasError(), true, "value length less then 2");
  propertyEditor.koValue("123456");
  assert.equal(propertyEditor.hasError(), true, "value length more then 5");
  assert.equal(
    propertyEditor.koErrorText(),
    "Length is more than 5",
    "Error text shows correctly"
  );
  propertyEditor.koValue("123");
  assert.equal(propertyEditor.hasError(), false, "there is no errors");
  Extentions.unregisterCustomPropertyEditor("customVal");
});

QUnit.test("PropertyEditor and hasError - required", function(assert) {
  var question = new Survey.QuestionText("q1");
  var property = Survey.JsonObject.metaData.findProperty("question", "name");
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
  editor.setObject({});
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
  editor.setObject({});
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
  var itemValueProperty = new SurveyPropertyItemValuesEditorForTests();
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
  var editor = new SurveyPropertyItemValuesEditorForTests();
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
    "3",
    "Text of 3-th item same as value"
  );
  assert.equal(
    editor.koItems()[3].cells[0].koValue(),
    "i4",
    "Value of 4-th item is i4"
  );
  assert.equal(
    editor.koItems()[3].cells[1].koValue(),
    "i4",
    "Text of 4-th item same as value"
  );
  editor.koActiveView("text");
  editor.koItemsText("1|item1");
  editor.onApplyClick();
  assert.equal(choices.length, 1, "The value is still applied");
});
QUnit.test(
  "SurveyPropertyItemValuesEditor - fast entry is available - https://surveyjs.answerdesk.io/ticket/details/T1534",
  function(assert) {
    var editor = new SurveyPropertyItemValuesEditorForTests();
    editor.beforeShow();
    editor.editingValue = ["1|item1", "item2"];
    assert.ok(editor.koShowTextView(), "Editor can show text view (fastEntry)");
  }
);
QUnit.test(
  "SurveyPropertyItemValuesEditor - disable Fast Entry functionality if itemvalue.value property is readonly or invisible - https://surveyjs.answerdesk.io/ticket/details/T1837",
  function(assert) {
    Survey.JsonObject.metaData.findProperty(
      "ItemValue",
      "value"
    ).readOnly = true;
    var editor = new SurveyPropertyItemValuesEditorForTests();
    editor.beforeShow();
    assert.equal(editor.koShowTextView(), false, "item.value is read only");
    Survey.JsonObject.metaData.findProperty(
      "ItemValue",
      "value"
    ).readOnly = false;
    Survey.JsonObject.metaData.findProperty(
      "ItemValue",
      "value"
    ).visible = false;
    editor = new SurveyPropertyItemValuesEditorForTests();
    editor.beforeShow();
    assert.equal(editor.koShowTextView(), false, "item.value is invisible");
    Survey.JsonObject.metaData.findProperty(
      "ItemValue",
      "value"
    ).visible = true;
    editor = new SurveyPropertyItemValuesEditorForTests();
    editor.beforeShow();
    assert.equal(
      editor.koShowTextView(),
      true,
      "item.value is visible and editable"
    );
  }
);

QUnit.test("SurveyPropertyItemValue: Value and Text are same", function(
  assert
) {
  var choices: Array<Survey.ItemValue> = [];
  choices.push(new Survey.ItemValue(1, "1"));
  choices.push(new Survey.ItemValue("item 2", "item 2"));
  var itemValuePropertyEditor = new SurveyPropertyItemValuesEditorForTests();
  itemValuePropertyEditor.beforeShow();
  assert.equal(choices[0].hasText, true, "the first item has text");
  assert.equal(choices[1].hasText, true, "the second item has text");
  itemValuePropertyEditor.onChanged = (newValue: Array<Survey.ItemValue>) => {
    Survey.ItemValue.setData(choices, newValue);
  };
  itemValuePropertyEditor.editingValue = choices;
  assert.equal(
    itemValuePropertyEditor.koItems().length,
    2,
    "there are three elements"
  );
  itemValuePropertyEditor.onApplyClick();
  assert.equal(choices.length, 2, "there are two items");
  assert.equal(choices[0].value, 1, "the first value is 1");
  assert.equal(choices[0].hasText, false, "the first text is null");
  assert.equal(choices[1].value, "item 2", "the second value is 'item 2'");
  assert.equal(choices[1].hasText, false, "the second text is null");
});
QUnit.test(
  "SurveyPropertyItemValue disable viewtext for multiple languages",
  function(assert) {
    var survey = new Survey.Survey({
      questions: [
        {
          type: "checkbox",
          name: "q1",
          choices: [{ value: 1, text: { default: "item1", de: "de_item1" } }]
        }
      ]
    });
    survey.locale = "de";
    var q = <Survey.QuestionCheckbox>survey.getQuestionByName("q1");
    var editor = new SurveyPropertyItemValuesEditorForTests();
    editor.beforeShow();
    editor.editingValue = q.choices;
    assert.equal(editor.koShowTextView(), false, "Can't show as text ");
  }
);

QUnit.test(
  "SurveyPropertyItemValue: Value and Text are same and editor.alwaySaveTextInPropertyEditors = true",
  function(assert) {
    var choices = [
      { value: 1, text: "1" },
      { value: "item 2", text: "item 2" }
    ];
    var itemValuePropertyEditor = new SurveyPropertyItemValuesEditorForTests();
    itemValuePropertyEditor.beforeShow();
    itemValuePropertyEditor.onChanged = (newValue: Array<Survey.ItemValue>) => {
      choices = newValue;
    };
    itemValuePropertyEditor.editingValue = choices;
    var options = new EditorOptionsTests();
    options.alwaySaveTextInPropertyEditors = true;
    itemValuePropertyEditor.options = options;
    assert.equal(
      itemValuePropertyEditor.koItems().length,
      2,
      "there are three elements"
    );
    itemValuePropertyEditor.onApplyClick();
    assert.equal(choices.length, 2, "there are two items");
    assert.equal(choices[0].value, 1, "the first value is 1");
    assert.equal(choices[0].text, "1", "the first text is '1'");
    assert.equal(choices[1].value, "item 2", "the second value is 'item 2'");
    assert.equal(choices[1].text, "item 2", "the second text is 'item 2'");
  }
);
QUnit.test("SurveyPropertyItemValue_PureValue", function(assert) {
  var choices = [1, "item2", { value: 3, text: "item3" }];
  var itemValuePropertyEditor = new SurveyPropertyItemValuesEditorForTests();
  itemValuePropertyEditor.beforeShow();
  itemValuePropertyEditor.onChanged = (newValue: Array<Survey.ItemValue>) => {
    choices = newValue;
  };
  itemValuePropertyEditor.editingValue = choices;
  assert.equal(
    itemValuePropertyEditor.koItems().length,
    3,
    "there are three elements"
  );
  assert.equal(
    itemValuePropertyEditor.koItems()[0].cells[0].koValue(),
    1,
    "check value of the first element"
  );
  assert.equal(
    itemValuePropertyEditor.koItems()[1].cells[0].koValue(),
    "item2",
    "check value of the second element"
  );
  assert.equal(
    itemValuePropertyEditor.koItems()[2].cells[0].koValue(),
    3,
    "check value of the third element"
  );
  assert.equal(
    itemValuePropertyEditor.koItems()[2].cells[1].koValue(),
    "item3",
    "check text of the third element"
  );
});
QUnit.test("SurveyPropertyItemValue columns generation", function(assert) {
  var propertyEditor = new SurveyPropertyItemValuesEditorForTests();
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

  var propertyEditor = new SurveyPropertyItemValuesEditorForTests();
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
    Survey.JsonObject.metaData.findProperty("radiogroup", "choices")
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
    Survey.JsonObject.metaData.findProperty("checkbox", "choices")
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
  property.type = "itemvalues_ex[]";
  var propEditor = SurveyPropertyEditorFactory.createEditor(property, null);
  assert.equal(
    propEditor.editorType,
    "itemvalue[]",
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
      null,
      "itemvalue"
    );
    var property = new Survey.JsonObjectProperty("test");
    property.type = "itemvalues_ex[]";
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
  q.choices[0].text = "English 1";

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
  propEditor.onGetLocale = function() {
    return survey.locale;
  };
  propEditor.beforeShow();
  propEditor.object = q;
  assert.equal(
    propEditor.koItems()[0].cells[1].koValue(),
    "English 1",
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
  assert.equal(q.choices[0].text, "English 1", "value is english");
  survey.locale = "de";
  assert.equal(q.choices[0].text, "Deutsch 1", "value is deutsch");
});
QUnit.test("SurveyPropertyDropdownColumnsEditor + locale, bug#1285", function(
  assert
) {
  var survey = new Survey.Survey();
  var p = survey.addNewPage();
  var q = <Survey.QuestionMatrixDynamic>p.addNewQuestion("matrixdynamic", "q1");
  q.addColumn("col1");
  survey.locale = "en";
  q.columns[0].title = "English 1";

  survey.locale = "de";
  var property = Survey.JsonObject.metaData.findProperty(
    "matrixdropdownbase",
    "columns"
  );
  var propEditor = <SurveyPropertyDropdownColumnsEditor>(
    SurveyPropertyEditorFactory.createEditor(property, function(newValue) {
      q.columns = newValue;
    })
  );
  propEditor.onGetLocale = function() {
    return survey.locale;
  };

  propEditor.beforeShow();
  propEditor.object = q;
  assert.equal(
    propEditor.koItems()[0].cells[3].koValue(),
    "English 1",
    "There is no value for deutsch"
  );
  propEditor.koItems()[0].cells[3].koValue("Deutsch 1");
  assert.equal(
    propEditor.koItems()[0].cells[3].koValue(),
    "Deutsch 1",
    "Replace with deutch"
  );
  propEditor.apply();
  survey.locale = "en";
  assert.equal(q.columns[0].title, "English 1", "value is english");
  survey.locale = "de";
  assert.equal(q.columns[0].title, "Deutsch 1", "value is deutsch");
});

QUnit.test("SurveyNestedPropertyEditorEditorCell", function(assert) {
  //TODO remove later - create property if it doesn't exist
  var propertyEditor = new SurveyPropertyItemValuesEditorForTests();

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
  var propertyEditor = new SurveyPropertyItemValuesEditorForTests();
  var itemValue = new Survey.ItemValue(null);
  var item = new SurveyPropertyItemValuesEditorItem(
    itemValue,
    () => propertyEditor.columns,
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
  assert.equal(
    koTrigger.conditionEditor.koTextValue(),
    "{question1} notequal 'val1'",
    "expression set correctly"
  );
  assert.deepEqual(
    koTrigger.questions.koChoosen().map(o => o.name),
    ["question2"],
    "questions set correctly"
  );

  propEditor.onAddClick({ value: "visibletrigger" });
  assert.equal(propEditor.koItems().length, 2, "There are two triggers now");
  koTrigger = <SurveyPropertyVisibleTrigger>propEditor.koSelected();

  assert.equal(koTrigger.koIsValid(), false, "the trigger is not valid");
  koTrigger.conditionEditor.koTextValue("{question2} notempty");
  assert.equal(koTrigger.koIsValid(), true, "the trigger is valid");
  assert.equal(
    koTrigger.koText(),
    "Run if: {question2} notempty",
    "text for valid trigger"
  );

  koTrigger.pages.koChoosen.push({ name: "page2" });
  koTrigger.questions.koChoosen.push({ name: "question3" });
  koTrigger.koValue(1);
  trigger = <Survey.SurveyTriggerVisible>koTrigger.createTrigger();
  assert.equal(
    koTrigger.conditionEditor.koTextValue(),
    "{question2} notempty",
    "set condition correctly"
  );
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
QUnit.test("Triggers property editor and setvalue trigger", function(assert) {
  var survey = createSurvey();
  var trigger = new Survey.SurveyTriggerSetValue();
  trigger.expression = "{question1} != 'val1'";
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
    propEditor.koItems().length,
    1,
    "There is one trigger initially"
  );
  var saveTriggerEditor = <SurveyPropertySetValueTrigger>(
    propEditor.koItems()[0]
  );
  assert.equal(saveTriggerEditor.koHasSurvey(), false, "survey is not visible");
  assert.notOk(saveTriggerEditor.survey, "There is no survey by default");
  saveTriggerEditor.kosetToName("question1");
  assert.ok(saveTriggerEditor.survey, "Survey has been created");
  assert.equal(saveTriggerEditor.koHasSurvey(), true, "survey is visible");
  saveTriggerEditor.kosetValue("val2");
  saveTriggerEditor.kosetToName("question2");
  assert.notOk(saveTriggerEditor.kosetValue(), "value is empty");
  assert.equal(
    saveTriggerEditor
      .koSurvey()
      .getQuestionByName("question")
      .getType(),
    "checkbox",
    "We have a checkbox question"
  );
  saveTriggerEditor.survey.setValue("question", ["one", "two"]);
  assert.deepEqual(
    saveTriggerEditor.kosetValue(),
    ["one", "two"],
    "value is set from survey"
  );
  saveTriggerEditor.koisVariable(true);
  assert.equal(
    saveTriggerEditor.koHasSurvey(),
    false,
    "survey is not visible again"
  );
  assert.notOk(
    saveTriggerEditor.kosetToName(),
    "question is empty, isVariable is true"
  );
  assert.notOk(
    saveTriggerEditor.kosetValue(),
    "value is empty, isVariable is true"
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
  assert.ok(
    propEditor.koAvailableClasses().length > 1,
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
    (<Survey.NumericValidator>koValidator.obj).text,
    "validatortext",
    "Validator Text is set correctly"
  );
  assert.equal(
    (<Survey.NumericValidator>koValidator.obj).minValue,
    10,
    "Validator 'minValue' is set correctly"
  );
  assert.equal(
    (<Survey.NumericValidator>koValidator.obj).maxValue,
    100,
    "Validator 'maxValue' is set correctly"
  );

  propEditor.onAddClick({ value: "textvalidator" });
  assert.equal(propEditor.koItems().length, 2, "There are two validators now");
  var koValidator = <SurveyPropertyValidatorItem>propEditor.koSelected();
  assert.equal(koValidator.koText(), "text", "Created with corrected value");

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

  propEditor.apply();
  assert.equal(result.length, 2, "Two validators are saved");
});

QUnit.test("Validators property editor update existing validator property - https://surveyjs.answerdesk.io/ticket/details/T2058", function(assert) {
  var survey = createSurvey();
  var validator = new Survey.NumericValidator(10, 100);
  validator.text = "validatortext";
  var question = <Survey.Question>survey.getQuestionByName("question1");
  question.validators.push(validator);
  var result = [];
  var propEditor = new SurveyPropertyValidatorsEditor(null);
  propEditor.beforeShow();
  assert.ok(
    propEditor.koAvailableClasses().length > 1,
    "Localized validators have been created"
  );

  propEditor.onChanged = (newValue: any) => {
    result = newValue;
  };
  propEditor.editingObject = question;
  propEditor.editingValue = question.validators;
  
  var maxValuePropertyEditor = propEditor.selectedObjectEditor().getPropertyEditorByName("maxValue");
  assert.equal(maxValuePropertyEditor.editor.koValue(), 100, "Initial max value = 100");
  
  maxValuePropertyEditor.editor.koValue(101);
  propEditor.apply();

  assert.equal(result[0].maxValue, 101, "New value is saved into object");
});

QUnit.test(
  "automicatilly create name for new item in SurveyPropertyTextItemsEditor",
  function(assert) {
    var question = new Survey.QuestionMultipleText("q1");
    question.addItem("text1");
    question.addItem("text2");
    var property = Survey.JsonObject.metaData.findProperty(
      "multipletext",
      "items"
    );
    var editor = new SurveyPropertyTextItemsEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.onAddClick();
    var item = editor.koItems()[2];
    assert.equal(item.item.name, "text3", "the name autogenerated successful");
  }
);

QUnit.test("be able to modify empty items, bug#428", function(assert) {
  var question = new Survey.QuestionMultipleText("q1");
  var property = Survey.JsonObject.metaData.findProperty(
    "multipletext",
    "items"
  );
  var editor = new SurveyPropertyTextItemsEditor(property);
  editor.onChanged = (newValue: any) => {
    question.items = newValue;
  };
  editor.object = question;
  editor.beforeShow();
  editor.onAddClick();
  editor.onApplyClick();
  assert.equal(question.items.length, 1, "The item has been added");
});

QUnit.test("onPropertyValueChanging callback, Bug #438", function(assert) {
  var question = new Survey.QuestionText("q1");
  var property = Survey.JsonObject.metaData.findProperty("question", "title");
  var stringProperty = new SurveyStringPropertyEditor(property);
  stringProperty.beforeShow();
  stringProperty.onChanged = (newValue: any) => {
    question.title = newValue;
  };
  stringProperty.object = question;
  var options = new EditorOptionsTests();
  options.doValueChangingCallback = function(options) {
    options.newValue = options.value.trim();
  };
  stringProperty.options = options;
  stringProperty.koValue(" ss   ");
  stringProperty.apply();
  assert.equal(question.title, "ss", "The value has been trimmed");
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
