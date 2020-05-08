import * as ko from "knockout";
import * as Survey from "survey-knockout";
import { SurveyPropertyEditorBase } from "../../src/propertyEditors/propertyEditorBase";
import {
  SurveyQuestionEditor,
  SurveyElementEditorContent,
  SurveyQuestionEditorTab,
  SurveyQuestionProperties,
} from "../../src/questionEditors/questionEditor";
import { SurveyPropertyItemValuesEditor } from "../../src/propertyEditors/propertyItemValuesEditor";
import {
  SurveyNestedPropertyEditorEditorCell,
  SurveyNestedPropertyEditorItem,
  SurveyNestedPropertyEditorColumn,
} from "../../src/propertyEditors/propertyNestedPropertyEditor";
import { SurveyQuestionEditorDefinition } from "../../src/questionEditors/questionEditorDefinition";

import { SurveyPropertyMultipleValuesEditor } from "../../src/propertyEditors/propertyMultipleValuesEditor";
import { SurveyPropertyDropdownColumnsEditor } from "../../src/propertyEditors/propertyMatrixDropdownColumnsEditor";
import { SurveyObjectProperty } from "../../src/objectProperty";
import { SurveyPropertyTextEditor } from "../../src/propertyEditors/propertyModalEditor";
import { SurveyPropertyResultfullEditor } from "../../src/propertyEditors/propertyRestfullEditor";
import { EditorOptionsTests } from "../editorOptionsTests";
import { SurveyPropertyTextItemsEditor } from "../../src/propertyEditors/propertyTextItemsEditor";
import { SurveyPropertyTriggersEditor } from "../../src/propertyEditors/propertyTriggersEditor";
import { SurveyPropertyValidatorsEditor } from "../../src/propertyEditors/propertyValidatorsEditor";
import { SurveyPropertyCustomEditor } from "../../src/propertyEditors/propertyCustomEditor";
import { SurveyPropertyCalculatedValueEditor } from "../../src/propertyEditors/propertyCalculatedValues";
import { Extentions } from "../../src/extentions";
import {
  SurveyPropertyEditorFactory,
  SurveyDropdownPropertyEditor,
  SurveyStringPropertyEditor,
} from "../../src/propertyEditors/propertyEditorFactory";
import {
  defaultStrings,
  editorLocalization,
} from "../../src/editorLocalization";
import { SurveyPropertyConditionEditor } from "../../src/propertyEditors/propertyConditionEditor";
import {
  SurveyPropertyDefaultValueEditor,
  SurveyPropertySetEditor,
} from "../../src/propertyEditors/propertyDefaultValueEditor";
import { SurveyPropertyCellsEditor } from "../../src/propertyEditors/propertyCellsEditor";

export default QUnit.module("PropertyEditorsTests");

Survey.Serializer.findProperty("itemvalue", "visibleIf").showMode = "form";
Survey.Serializer.findProperty("itemvalue", "enableIf").showMode = "form";
Survey.Serializer.findProperty("itemvalue", "visibleIf").visible = true;
Survey.Serializer.findProperty("itemvalue", "enableIf").visible = true;

class SurveyPropertyItemValuesEditorForTests extends SurveyPropertyItemValuesEditor {
  constructor() {
    super(Survey.Serializer.findProperty("selectbase", "choices"));
  }
  public doShowModal() {
    this.beforeShowModal();
    this.beforeShow();
  }
  public doCloseModal() {
    this.beforeCloseModal();
  }
}

class SurveyPropertyTextEditorForTests extends SurveyPropertyTextEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public doShowModal() {
    this.beforeShowModal();
    this.beforeShow();
  }
  public doCloseModal() {
    this.beforeCloseModal();
  }
}

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
              { value: 3, text: "third value" },
            ],
            type: "checkbox",
          },
        ],
      },
      { name: "page2", questions: [{ name: "question3", type: "comment" }] },
      {
        name: "page3",
        questions: [
          {
            name: "question4",
            columns: ["Column 1", "Column 2", "Column 3"],
            rows: ["Row 1", "Row 2"],
            type: "matrix",
          },
          { name: "question5", type: "rating" },
        ],
      },
    ],
  });
}

QUnit.test("Create correct property editor", function(assert) {
  var property = new Survey.JsonObjectProperty("testname");
  property.type = "unknown";
  var propertyEditor = SurveyPropertyEditorFactory.createEditor(property);
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
    "restfull",
  ];
  var property = new Survey.JsonObjectProperty("testname");
  for (var i = 0; i < propertyTypes.length; i++) {
    var propType = propertyTypes[i];
    property.type = propType;
    propertyEditor = SurveyPropertyEditorFactory.createEditor(property);
    assert.equal(
      propertyEditor.editorType,
      propType,
      "Create '" + propType + "' property editor"
    );
  }
});
QUnit.test("propertyEditor.displayName", function(assert) {
  var property = Survey.Serializer.findProperty("question", "enableIf");
  defaultStrings.p["enableIf"] = "It is enableIf";
  var propertyEditor = SurveyPropertyEditorFactory.createEditor(property);
  assert.equal(
    propertyEditor.displayName,
    "It is enableIf",
    "The displayName was set correctly"
  );
});
QUnit.test("propertyEditor.editingValue - SurveyPropertyModalEditor", function(
  assert
) {
  var property = Survey.Serializer.findProperty("question", "title");
  var propertyEditor = new SurveyPropertyTextEditor(property);
  propertyEditor.setObject({});
  assert.equal(propertyEditor.editingValue, undefined, "Initial value");
  propertyEditor.editingValue = "Test";
  assert.equal(propertyEditor.editingValue, "Test", "Entered value");
  assert.equal(propertyEditor.koValue(), "Test", "Entered ko value");
  propertyEditor.koValue("Test1");
  assert.equal(propertyEditor.koValue(), "Test1", "Entered ko value 1");
  assert.equal(propertyEditor.editingValue, "Test1", "Entered value 1");
});
QUnit.test("Create custom property editor", function(assert) {
  var propertyValue = null;
  var widgetJSON = {
    render: function(editor, el) {
      propertyValue = propertyEditor.koValue();
      editor.onValueChangedCallback = function(newValue) {
        propertyValue = newValue;
      };
    },
  };
  Extentions.registerCustomPropertyEditor("customBool", widgetJSON);
  var property = new Survey.JsonObjectProperty("testname");
  property.type = "customBool";
  var propertyEditor = SurveyPropertyEditorFactory.createEditor(property);
  assert.equal(propertyEditor.editorType, "custom", "It is a custom editor'");
  assert.deepEqual(
    (<SurveyPropertyCustomEditor>propertyEditor).widgetJSON,
    widgetJSON,
    "widgetJSON set correctly"
  );
  widgetJSON.render(propertyEditor, null);
  propertyEditor.koValue(3);
  assert.equal(propertyValue, 3, "value has been set to 3 as well");
  Extentions.unregisterCustomPropertyEditor("customBool");
});

QUnit.test(
  "Сustom property editor should be rendered regardless the editor.object value - https://surveyjs.answerdesk.io/ticket/details/t2550/file-upload-property-not-working-in-the-1-1-6-version",
  function(assert) {
    var renderCount = 0;
    var widgetJSON = {
      render: function(editor, el) {
        renderCount++;
      },
    };
    Extentions.registerCustomPropertyEditor("customBool", widgetJSON);
    var property = new Survey.JsonObjectProperty("testname");
    property.type = "customBool";
    var propertyEditor = <SurveyPropertyCustomEditor>(
      SurveyPropertyEditorFactory.createEditor(property)
    );
    assert.equal(renderCount, 0, "Initial counter");
    assert.equal(propertyEditor.object, undefined, "Object is not assigned");
    propertyEditor["doAfterRender"]([{}], null);
    assert.equal(propertyEditor.object, undefined, "Object is not assigned");
    assert.equal(renderCount, 1, "Render has been called");
    Extentions.unregisterCustomPropertyEditor("customBool");
  }
);

QUnit.test("Custom property editor - validation", function(assert) {
  var widgetJSON = {
    validate: function(editor, newValue): string {
      if (!newValue) return null;
      if (newValue.length < 2) return "Length is less than 2";
      if (newValue.length > 5) return "Length is more than 5";
      return null;
    },
  };
  Extentions.registerCustomPropertyEditor("customVal", widgetJSON);
  var property = new Survey.JsonObjectProperty("testname");
  property.type = "customVal";
  var propertyEditor = SurveyPropertyEditorFactory.createEditor(property);
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
  var property = Survey.Serializer.findProperty("question", "name");
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
QUnit.test("SurveyQuestionPropertyEditor - choices", function(assert) {
  Survey.Serializer.addProperty("survey", "question_test:question");
  var survey = new Survey.Survey({
    elements: [
      { type: "text", name: "question1", valueName: "value1" },
      { type: "text", name: "question2" },
      { type: "text", name: "question3" },
    ],
  });
  var propertyEditor = new SurveyObjectProperty(
    Survey.Serializer.findProperty("survey", "question_test")
  );
  propertyEditor.object = survey;
  var editor = <SurveyDropdownPropertyEditor>propertyEditor.editor;
  assert.equal(
    propertyEditor.editorType,
    "question",
    "Question editor should be created"
  );
  assert.equal(editor.koChoices().length, 4, "There are 3 items");
  assert.equal(editor.koChoices()[1].value, "question1", "The first value");
  assert.equal(editor.koChoices()[1].text, "question1", "The first text");
  Survey.Serializer.removeProperty("survey", "question_test");
});
QUnit.test("SurveyQuestionValuePropertyEditor - choices", function(assert) {
  Survey.Serializer.addProperty("survey", "question_test:questionvalue");
  var survey = new Survey.Survey({
    elements: [
      { type: "text", name: "question1", valueName: "value1" },
      { type: "text", name: "question2" },
      { type: "text", name: "question3" },
    ],
  });
  var propertyEditor = new SurveyObjectProperty(
    Survey.Serializer.findProperty("survey", "question_test")
  );
  propertyEditor.object = survey;
  var editor = <SurveyDropdownPropertyEditor>propertyEditor.editor;
  assert.equal(
    propertyEditor.editorType,
    "questionvalue",
    "Question editor should be created"
  );
  assert.equal(editor.koChoices().length, 4, "There are 3 items");
  assert.equal(editor.koChoices()[1].value, "value1", "The first value");
  assert.equal(editor.koChoices()[1].text, "question1", "The first text");
  assert.equal(editor.koChoices()[2].value, "question2", "The second value");
  assert.equal(editor.koChoices()[2].text, "question2", "The second text");
  Survey.Serializer.removeProperty("survey", "question_test");
});
QUnit.test("SurveyPropertyItemValue", function(assert) {
  var question = new Survey.QuestionCheckbox("q1");
  question.choices = [
    { value: 1, text: "item1" },
    { value: 2, text: "item2" },
    { value: 3, text: "item3" },
  ];
  var itemValueProperty = new SurveyPropertyItemValuesEditorForTests();
  itemValueProperty.object = question;
  itemValueProperty.beforeShow();
  var itemViewModel = itemValueProperty.createItemViewModel(
    question.choices[1]
  );
  assert.equal(
    itemViewModel.cells[0].value,
    2,
    "check value of the second element"
  );
  assert.equal(
    itemViewModel.cells[1].value,
    "item2",
    "check text of the second element"
  );

  itemValueProperty.onDeleteClick(itemViewModel);
  assert.equal(
    question.choices.length,
    2,
    "there are two elements after deleting"
  );
  itemViewModel = itemValueProperty.createItemViewModel(question.choices[1]);
  assert.equal(
    itemViewModel.cells[0].value,
    3,
    "check value of the second element"
  );
  assert.equal(
    itemViewModel.cells[1].value,
    "item3",
    "check text of the second element"
  );

  itemValueProperty.onAddClick();
  assert.equal(
    question.choices.length,
    3,
    "there are three elements after adding"
  );
  itemViewModel = itemValueProperty.createItemViewModel(question.choices[2]);
  itemViewModel.cells[0].koValue(4);
  itemViewModel.cells[1].koValue("item4");
  assert.equal(
    itemViewModel.cells[0].koValue(),
    4,
    "check value of the last element"
  );
  assert.equal(
    itemViewModel.cells[1].koValue(),
    "item4",
    "check text of the last element"
  );

  assert.equal(question.choices[2].value, 4, "check value of the last element");
  assert.equal(
    question.choices[2].text,
    "item4",
    "check text of the last element"
  );
});
QUnit.test("SurveyPropertyItemValue different view type", function(assert) {
  var question = new Survey.QuestionCheckbox("q1");
  question.choices = [{ value: 1, text: "item1" }, { value: 2 }];
  var editor = new SurveyPropertyItemValuesEditorForTests();
  editor.beforeShow();
  editor.object = question;
  assert.equal(editor.koItemsText(), "", "It is empty by default");
  editor.koActiveView("text");
  assert.equal(editor.koItemsText(), "1|item1\n2", "It is empty by default");
  editor.koItemsText("1|item1\n\n2|item2\n3\ni4");
  editor.koActiveView("form");
  assert.equal(question.choices.length, 4, "There are 4 items");
  var itemViewModel = editor.createItemViewModel(question.choices[1]);
  assert.equal(
    itemViewModel.cells[0].koValue(),
    2,
    "Value of second item is 2"
  );
  assert.equal(
    itemViewModel.cells[1].koValue(),
    "item2",
    "Text of second item is item2"
  );
  itemViewModel = editor.createItemViewModel(question.choices[2]);
  assert.equal(itemViewModel.cells[0].koValue(), 3, "Value of 3-th item is 3");
  assert.equal(
    itemViewModel.cells[1].koValue(),
    "",
    "Text of 3-th item is empty "
  );
  itemViewModel = editor.createItemViewModel(question.choices[3]);
  assert.equal(
    itemViewModel.cells[0].koValue(),
    "i4",
    "Value of 4-th item is i4"
  );
  assert.equal(
    itemViewModel.cells[1].koValue(),
    "",
    "Text of 4-th item is empty"
  );
  editor.koActiveView("text");
  editor.koItemsText("1|item1");
  editor.koActiveView("form");
  assert.equal(question.choices.length, 1, "The value is still applied");
});
QUnit.test(
  "SurveyPropertyItemValuesEditor - fast entry is available - https://surveyjs.answerdesk.io/ticket/details/T1534",
  function(assert) {
    var question = new Survey.QuestionCheckbox("q1");
    question.choices = ["1|item1", "item2"];
    var editor = new SurveyPropertyItemValuesEditorForTests();
    editor.object = question;
    editor.beforeShow();
    assert.ok(editor.koShowTextView(), "Editor can show text view (fastEntry)");
  }
);
QUnit.test(
  "SurveyPropertyItemValuesEditor - disable Fast Entry functionality if itemvalue.value property is readonly or invisible - https://surveyjs.answerdesk.io/ticket/details/T1837",
  function(assert) {
    Survey.Serializer.findProperty("ItemValue", "value").readOnly = true;
    var question = new Survey.QuestionCheckbox("q1");
    var editor = new SurveyPropertyItemValuesEditorForTests();
    editor.object = question;
    editor.beforeShow();
    assert.equal(editor.koShowTextView(), false, "item.value is read only");
    Survey.Serializer.findProperty("ItemValue", "value").readOnly = false;
    Survey.Serializer.findProperty("ItemValue", "value").visible = false;
    editor = new SurveyPropertyItemValuesEditorForTests();
    editor.object = question;
    editor.beforeShow();
    assert.equal(editor.koShowTextView(), false, "item.value is invisible");
    Survey.Serializer.findProperty("ItemValue", "value").visible = true;
    editor = new SurveyPropertyItemValuesEditorForTests();
    editor.beforeShow();
    editor.object = question;
    assert.equal(
      editor.koShowTextView(),
      true,
      "item.value is visible and editable"
    );
  }
);
QUnit.test(
  "SurveyPropertyItemValuesEditor - do not change value on adding in modal window and set it after apply only",
  function(assert) {
    var question = new Survey.QuestionCheckbox("q1");
    question.choices = [1, 2];
    var editor = new SurveyPropertyItemValuesEditorForTests();
    editor.object = question;
    editor.doShowModal();
    var itemViewModel = editor.createItemViewModel(editor.originalValue[0]);
    itemViewModel.cells[0].koValue(5);
    assert.equal(question.choices[0].value, 1, "We do not apply the changes");
    editor.doCloseModal();
    editor.doShowModal();
    var itemViewModel = editor.createItemViewModel(editor.originalValue[0]);
    itemViewModel.cells[0].koValue(7);
    assert.equal(question.choices[0].value, 1, "We do not apply the changes#2");
    editor.onApplyClick();
    assert.equal(question.choices[0].value, 7, "We applied on changes");
  }
);

QUnit.test(
  "SurveyPropertyItemValuesEditor - returns error on empty value",
  function(assert) {
    var question = new Survey.QuestionCheckbox("q1");
    question.choices = ["1|item1", "item2"];
    var editor = new SurveyPropertyItemValuesEditorForTests();
    editor.object = question;
    editor.beforeShow();
    var itemViewModel = editor.createItemViewModel(editor.originalValue[0]);
    assert.equal(editor.hasError(), false, "There is no errors");
    itemViewModel.cells[0].koValue("");
    assert.equal(editor.hasError(), true, "There is an error");
    editor.onDeleteClick(itemViewModel);
    assert.equal(
      editor.hasError(),
      false,
      "The item with empty value is deleted"
    );
  }
);

QUnit.test(
  "SurveyPropertyTextEditor - do not change value on adding in modal window and set it after apply only",
  function(assert) {
    SurveyPropertyEditorFactory.registerEditor("text", function(
      property: Survey.JsonObjectProperty
    ): SurveyPropertyEditorBase {
      return new SurveyPropertyTextEditorForTests(property);
    });

    var question = new Survey.QuestionCheckbox("q1");
    var objProperty = new SurveyObjectProperty(
      Survey.Serializer.findProperty("question", "description")
    );
    objProperty.object = question;
    var editor = <SurveyPropertyTextEditorForTests>objProperty.editor;
    editor.doShowModal();
    editor.koValue("New description");
    assert.notOk(question.description, "It is empty");
    editor.doCloseModal();
    assert.notOk(question.description, "It is empty");
    editor.doShowModal();
    editor.koValue("desc1");
    assert.notOk(question.description, "It is empty");
    editor.onApplyClick();
    assert.equal(
      question.description,
      "desc1",
      "Set the value from modal window"
    );
    editor.doCloseModal();
    SurveyPropertyEditorFactory.registerEditor("text", function(
      property: Survey.JsonObjectProperty
    ): SurveyPropertyEditorBase {
      return new SurveyPropertyTextEditor(property);
    });
  }
);

/* TODO after refactor
QUnit.test("SurveyPropertyItemValue: Value and Text are same", function(
  assert
) {
  var choices: Array<Survey.ItemValue> = [];
  choices.push(new Survey.ItemValue(1, "1"));
  choices.push(new Survey.ItemValue("item 2", "item 2"));
  var question = new Survey.QuestionCheckbox("q1");
  question.choices = choices;
  var itemValuePropertyEditor = new SurveyPropertyItemValuesEditorForTests();
  itemValuePropertyEditor.beforeShow();
  assert.equal(question.choices[0].hasText, true, "the first item has text");
  assert.equal(question.choices[1].hasText, true, "the second item has text");
  itemValuePropertyEditor.object = question;
  assert.equal(
    question.choices.length,
    2,
    "there are two elements"
  );
  itemValuePropertyEditor.onApplyClick();
  assert.equal(choices.length, 2, "there are two items");
  assert.equal(choices[0].value, 1, "the first value is 1");
  assert.equal(choices[0].hasText, false, "the first text is null");
  assert.equal(choices[1].value, "item 2", "the second value is 'item 2'");
  assert.equal(choices[1].hasText, false, "the second text is null");
});
*/
QUnit.test(
  "SurveyPropertyItemValue disable viewtext for multiple languages",
  function(assert) {
    var survey = new Survey.Survey({
      questions: [
        {
          type: "checkbox",
          name: "q1",
          choices: [{ value: 1, text: { default: "item1", de: "de_item1" } }],
        },
      ],
    });
    survey.locale = "de";
    var q = <Survey.QuestionCheckbox>survey.getQuestionByName("q1");
    var editor = new SurveyPropertyItemValuesEditorForTests();
    editor.beforeShow();
    editor.object = q;
    assert.equal(editor.koShowTextView(), false, "Can't show as text ");
  }
);

/* TODO after refactor
QUnit.test(
  "SurveyPropertyItemValue: Value and Text are same and editor.alwaySaveTextInPropertyEditors = true",
  function(assert) {
    var question = new Survey.QuestionCheckbox("q1");
    var choices = [
      { value: 1, text: "1" },
      { value: "item 2", text: "item 2" }
    ];
    question.choices = choices;
    var itemValuePropertyEditor = new SurveyPropertyItemValuesEditorForTests();
    itemValuePropertyEditor.beforeShow();
    itemValuePropertyEditor.object = question;
    var options = new EditorOptionsTests();
    options.alwaySaveTextInPropertyEditors = true;
    itemValuePropertyEditor.options = options;
    assert.equal(
      question.choices.length,
      2,
      "there are two elements"
    );
    itemValuePropertyEditor.onApplyClick();
    assert.equal(choices.length, 2, "there are two items");
    assert.equal(choices[0].value, 1, "the first value is 1");
    assert.equal(choices[0].text, "1", "the first text is '1'");
    assert.equal(choices[1].value, "item 2", "the second value is 'item 2'");
    assert.equal(choices[1].text, "item 2", "the second text is 'item 2'");
  }
);
*/
QUnit.test("SurveyPropertyItemValue_PureValue", function(assert) {
  var question = new Survey.QuestionCheckbox("q1");
  question.choices = [1, "item2", { value: 3, text: "item3" }];
  var itemValuePropertyEditor = new SurveyPropertyItemValuesEditorForTests();
  itemValuePropertyEditor.beforeShow();
  itemValuePropertyEditor.object = question;
  assert.equal(question.choices.length, 3, "there are three elements");
  var itemValueModel = itemValuePropertyEditor.createItemViewModel(
    question.choices[0]
  );
  assert.equal(
    itemValueModel.cells[0].koValue(),
    1,
    "check value of the first element"
  );
  itemValueModel = itemValuePropertyEditor.createItemViewModel(
    question.choices[1]
  );
  assert.equal(
    itemValueModel.cells[0].koValue(),
    "item2",
    "check value of the second element"
  );
  itemValueModel = itemValuePropertyEditor.createItemViewModel(
    question.choices[2]
  );
  assert.equal(
    itemValueModel.cells[0].koValue(),
    3,
    "check value of the third element"
  );
  assert.equal(
    itemValueModel.cells[1].koValue(),
    "item3",
    "check text of the third element"
  );
});
QUnit.test("SurveyPropertyItemValue columns generation", function(assert) {
  var propertyEditor = new SurveyPropertyItemValuesEditorForTests();
  propertyEditor.beforeShow();
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
  Survey.Serializer.addProperty("itemvalue", { name: "myImageLink" });

  var propertyEditor = new SurveyPropertyItemValuesEditorForTests();
  propertyEditor.beforeShow();
  assert.equal(
    propertyEditor.columns.length,
    3,
    "There are three columns value + text + link"
  );
  assert.equal(
    propertyEditor.columns[2].text,
    "My Image Link",
    "Set the correct column title"
  );
  assert.equal(
    propertyEditor.koShowTextView(),
    true,
    "Allow to show text view with custom properties"
  );

  Survey.Serializer.removeProperty("itemvalue", "myImageLink");
});

/* TODO should be fixed in library
QUnit.test("SurveyPropertyItemValue override properties", function(assert) {
  Survey.Serializer.addProperty("itemvalue", {
    name: "price:number",
    visible: false,
    isSerializable: false,
  });
  Survey.Serializer.addClass(
    "ordergriditem",
    [
      {
        name: "price:number",
        default: 0,
        isSerializable: true,
      },
      { name: "text", visible: false },
      { name: "visibleIf", visible: false },
      { name: "enableIf", visible: false },
    ],
    function() {
      return new Survey.ItemValue(null, null, "ordergriditem");
    },
    "itemvalue"
  );
  Survey.Serializer.addProperty("text", "orderItems:ordergriditem[]");
  var question = new Survey.QuestionText("q1");
  var item = new Survey.ItemValue("item1", null, "ordergriditem");
  item.price = 20;
  question.orderItems.push(item);

  var propertyEditor: SurveyPropertyItemValuesEditor = new SurveyPropertyItemValuesEditorForTests();
  propertyEditor.beforeShow();
  assert.equal(
    propertyEditor.columns.length,
    2,
    "There are two columns value + text"
  );
  assert.equal(
    propertyEditor.columns[1].text,
    "Text",
    "Set the correct text title"
  );
  propertyEditor = new SurveyPropertyItemValuesEditor(
    Survey.Serializer.findProperty("text", "orderItems")
  );
  propertyEditor.object = question;
  propertyEditor.beforeShow();
  assert.equal(
    propertyEditor.columns.length,
    2,
    "There are two columns value + price"
  );
  assert.equal(
    propertyEditor.columns[1].text,
    "Price",
    "Set the correct price title"
  );

  Survey.Serializer.removeProperty("text", "orderItems");
  Survey.Serializer.removeClass("ordergriditem");
  Survey.Serializer.removeProperty("itemvalue", "price");
});
*/
QUnit.test("SurveyPropertyItemValue columns define in definition", function(
  assert
) {
  Survey.Serializer.addProperty("itemvalue", "description");
  SurveyQuestionEditorDefinition.definition["checkbox@choices"] = {
    properties: ["value", "text"],
  };

  var qRadio = new Survey.QuestionRadiogroup("q1");
  var qCheck = new Survey.QuestionCheckbox("q2");

  var propertyEditor = new SurveyPropertyItemValuesEditor(
    Survey.Serializer.findProperty("radiogroup", "choices")
  );
  propertyEditor.object = qRadio;
  propertyEditor.koValue(qRadio.choices);
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
    Survey.Serializer.findProperty("checkbox", "choices")
  );
  propertyEditor.object = qCheck;
  propertyEditor.koValue(qCheck.choices);
  propertyEditor.beforeShow();
  assert.equal(
    propertyEditor.columns.length,
    2,
    "There are two columns value + text"
  );

  delete SurveyQuestionEditorDefinition.definition["radiogroup@choices"];
  Survey.Serializer.removeProperty("itemvalue", "description");
});
QUnit.test("SurveyPropertyItemValue custom property", function(assert) {
  Survey.Serializer.addProperty("itemvalue", { name: "imageLink" });

  var propertyEditor = new SurveyPropertyItemValuesEditorForTests();
  propertyEditor.beforeShow();
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

  Survey.Serializer.removeProperty("itemvalue", "imageLink");
});

QUnit.test("SurveyPropertyItemValue columns new localizable property", function(
  assert
) {
  Survey.Serializer.addProperty("itemvalue", {
    name: "description",
    isLocalizable: true,
  });
  var qRadio = new Survey.QuestionRadiogroup("q1");
  qRadio.choices = ["item1", "item2"];
  var propertyEditor = new SurveyPropertyItemValuesEditor(
    Survey.Serializer.findProperty("radiogroup", "choices")
  );
  propertyEditor.object = qRadio;
  propertyEditor.koValue(qRadio.choices);
  propertyEditor.beforeShow();
  assert.equal(
    propertyEditor.columns.length,
    3,
    "There are three columns value + text + description"
  );
  var itemViewModel = propertyEditor.createItemViewModel(qRadio.choices[0]);
  itemViewModel.cells[2].value = "new description";
  assert.equal(
    qRadio.choices[0].description,
    "new description",
    "Set the new property value correctly"
  );
  Survey.Serializer.removeProperty("itemvalue", "description");
});

QUnit.test("extended SurveyPropertyItemValue + custom property", function(
  assert
) {
  Survey.Serializer.addClass(
    "itemvalues_ex",
    ["imageLink"],
    function() {
      return new Survey.ItemValue(null);
    },
    "itemvalue"
  );
  var property = new Survey.JsonObjectProperty("test");
  property.type = "itemvalues_ex[]";
  var propEditor = SurveyPropertyEditorFactory.createEditor(property);
  assert.equal(
    propEditor.editorType,
    "itemvalue[]",
    "It is item value, use parent"
  );
  var propertyEditor = <SurveyPropertyItemValuesEditor>propEditor;
  propEditor.beforeShow();
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
  Survey.Serializer.removeProperty("itemvalue_ex", "imageLink");
});
QUnit.test(
  "extended SurveyPropertyItemValue + custom property - process items with custom properties",
  function(assert) {
    Survey.Serializer.addClass(
      "itemvalues_ex",
      ["imageLink"],
      null,
      "itemvalue"
    );
    Survey.Serializer.addProperty("checkbox", { name: "test:itemvalues_ex[]" });
    var property = Survey.Serializer.findProperty("checkbox", "test");
    property.type = "itemvalues_ex[]";
    var propertyEditor = <SurveyPropertyItemValuesEditor>(
      SurveyPropertyEditorFactory.createEditor(property)
    );
    var question = new Survey.QuestionCheckbox("q1");
    propertyEditor.object = question;
    propertyEditor.beforeShow();
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
    assert.equal(question["test"].length, 0, "No items");
    assert.equal(propertyEditor.koItemsText(), "", "Editor is empty");

    propertyEditor.onAddClick();
    assert.equal(question["test"].length, 1, "One item");

    var itemViewModel = propertyEditor.createItemViewModel(question.test[0]);
    itemViewModel.cells[0].value = "item";
    itemViewModel.cells[1].value = "2nd";
    itemViewModel.cells[2].value = "custom";
    propertyEditor.koActiveView("fast");
    assert.equal(propertyEditor.koItemsText(), "item|2nd|custom", "One item");

    propertyEditor.koItemsText("item|2nd|custom\nitem2|2nd2|custom2");
    propertyEditor.koActiveView("form");
    assert.equal(question["test"].length, 2, "Two items");

    itemViewModel = propertyEditor.createItemViewModel(question.test[1]);
    assert.equal(itemViewModel.cells[0].value, "item2", "Row 1 Col 1");
    assert.equal(itemViewModel.cells[1].value, "2nd2", "Row 1 Col 2");
    assert.equal(itemViewModel.cells[2].value, "custom2", "Row 1 Col 3");

    Survey.Serializer.removeProperty("checkbox", "test");
    Survey.Serializer.removeProperty("itemvalue_ex", "imageLink");
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
  var property = Survey.Serializer.findProperty("selectbase", "choices");
  var propEditor = <SurveyPropertyItemValuesEditor>(
    SurveyPropertyEditorFactory.createEditor(property)
  );
  propEditor.onGetLocale = function() {
    return survey.locale;
  };
  propEditor.beforeShow();
  propEditor.object = q;
  var itemViewModel = propEditor.createItemViewModel(q.choices[0]);
  assert.equal(
    itemViewModel.cells[1].koValue(),
    "English 1",
    "There is no value for deutsch"
  );
  itemViewModel.cells[1].koValue("Deutsch 1");
  assert.equal(
    itemViewModel.cells[1].koValue(),
    "Deutsch 1",
    "Replace with deutch"
  );
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
  var property = Survey.Serializer.findProperty(
    "matrixdropdownbase",
    "columns"
  );
  var propEditor = <SurveyPropertyDropdownColumnsEditor>(
    SurveyPropertyEditorFactory.createEditor(property)
  );
  propEditor.onGetLocale = function() {
    return survey.locale;
  };

  propEditor.object = q;
  propEditor.beforeShow();
  var itemViewModel = propEditor.createItemViewModel(q.columns[0]);
  assert.equal(
    itemViewModel.cells[3].koValue(),
    "English 1",
    "There is no value for deutsch"
  );
  itemViewModel.cells[3].koValue("Deutsch 1");
  assert.equal(
    itemViewModel.cells[3].koValue(),
    "Deutsch 1",
    "Replace with deutch"
  );
  survey.locale = "en";
  assert.equal(q.columns[0].title, "English 1", "value is english");
  survey.locale = "de";
  assert.equal(q.columns[0].title, "Deutsch 1", "value is deutsch");
});

QUnit.test("SurveyNestedPropertyEditorEditorCell", function(assert) {
  var property = Survey.Serializer.findProperty("itemvalue", "value");
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
QUnit.test("SurveyNestedPropertyEditorItem", function(assert) {
  var propertyEditor = new SurveyPropertyItemValuesEditorForTests();
  var itemValue = new Survey.ItemValue(null);
  var item = new SurveyNestedPropertyEditorItem(
    itemValue,
    () => propertyEditor.columns,
    null
  );
  propertyEditor.beforeShow();
  assert.equal(item.cells.length, 2, "There are two cells");
  assert.equal(item.hasError(), true, "There is an error");
  item.cells[0].koValue(0);
  assert.equal(item.hasError(), false, "There is no errors");
});

QUnit.test("SurveyPropertyMultipleValuesEditor", function(assert) {
  Survey.Serializer.addProperty("question", {
    name: "multiple:multiplevalues",
    choices: [
      { value: 1, text: "Item 1" },
      { value: 2, text: "Item 2" },
      { value: 3, text: "Item 3" },
    ],
  });
  var property = Survey.Serializer.findProperty("question", "multiple");
  var propertyEditor = new SurveyPropertyMultipleValuesEditor(property);
  assert.equal(
    propertyEditor.getValueText([1, 3]),
    "[Item 1, Item 3]",
    "Use text for displaying the value"
  );
  Survey.Serializer.removeProperty("question", "multiple");
});

QUnit.test("SurveyPropertyMatrixDropdownColumns set properties", function(
  assert
) {
  var question = new Survey.QuestionMatrixDropdown("q1");
  question.columns.push(new Survey.MatrixDropdownColumn("column 1"));
  question.columns.push(new Survey.MatrixDropdownColumn("column 2"));
  question.columns[0]["choices"] = [1, 2, "three"];
  var columnsEditor = new SurveyPropertyDropdownColumnsEditor(
    Survey.Serializer.findProperty("matrixdropdownbase", "columns")
  );
  columnsEditor.object = question;
  columnsEditor.beforeShow();
  assert.equal(columnsEditor.columns.length, 4, "By default four columns");
  var itemViewModel = columnsEditor.createItemViewModel(question.columns[0]);
  assert.equal(
    itemViewModel.cells[2].value,
    "column 1",
    "the first column name"
  );
  columnsEditor.onAddClick();
  assert.equal(question.columns.length, 3, "There are 3 columns now");
  itemViewModel = columnsEditor.createItemViewModel(question.columns[2]);
  assert.equal(
    itemViewModel.cells[2].koValue(),
    "column 3",
    "set default column name"
  );
  itemViewModel.cells[1].koValue("checkbox");
  itemViewModel.cells[2].koValue("column 5");
  assert.equal(question.columns.length, 3, "There are 3 columns");
  assert.equal(
    question.columns[2]["cellType"],
    "checkbox",
    "the last column has checkbox cells"
  );
  assert.equal(
    question.columns[2]["name"],
    "column 5",
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
    "readOnly",
  ];

  var columns: Array<Survey.MatrixDropdownColumn> = [];
  columns.push(new Survey.MatrixDropdownColumn("column 1"));
  columns.push(new Survey.MatrixDropdownColumn("column 2"));
  var columnsEditor = new SurveyPropertyDropdownColumnsEditor(
    Survey.Serializer.findProperty("matrixdropdownbase", "columns")
  );
  columnsEditor.beforeShow();
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
    Survey.Serializer.findProperty("matrixdropdownbase", "columns")
  );
  columnsEditor.object = question;
  columnsEditor.beforeShow();
  assert.equal(columnsEditor.koEditItem(), null, "It is null by default");
  var itemViewModel = columnsEditor.createItemViewModel(question.columns[1]);
  itemViewModel.obj.cellType = "dropdown";
  columnsEditor.koEditItem(itemViewModel);
  var colDetailEditor = <SurveyElementEditorContent>(
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
  var props = generalTab.editorProperties;
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    if (prop.editor.editorType == "boolean") continue;
    assert.equal(
      prop.editor.showDisplayNameOnTop,
      true,
      "It should be shown on top"
    );
  }
});

QUnit.test(
  "SurveyPropertyMatrixDropdownColumns change cell koValue on changing value in detail form ",
  function(assert) {
    var survey = new Survey.Survey();
    survey.addNewPage("p");
    var question = new Survey.QuestionMatrixDropdown("q1");
    question.addColumn("column 1");
    question.addColumn("column 2");
    survey.pages[0].addElement(question);
    var columnsEditor = new SurveyPropertyDropdownColumnsEditor(
      Survey.Serializer.findProperty("matrixdropdownbase", "columns")
    );
    columnsEditor.object = question;
    columnsEditor.beforeShow();
    var itemViewModel = <SurveyNestedPropertyEditorItem>(
      columnsEditor.createItemViewModel(question.columns[0])
    );
    itemViewModel.obj.cellType = "dropdown";
    columnsEditor.onEditItemClick(itemViewModel);
    var colDetailEditor = <SurveyElementEditorContent>(
      columnsEditor.koEditItem().itemEditor
    );
    var titleEditor = colDetailEditor.getPropertyEditorByName("title").editor;
    titleEditor.koValue("Title 1");
    assert.equal(
      question.columns[0].title,
      "Title 1",
      "The object value is changed"
    );
    columnsEditor.onReturnToListClick();
    assert.equal(
      itemViewModel.cells[itemViewModel.columns.length - 1].koValue(),
      "Title 1",
      "Value in cell is updated"
    );
  }
);
QUnit.test(
  "SurveyPropertyItemValuesEditor check if there are visibleIf and enableIf properties in detail form",
  function(assert) {
    var question = new Survey.QuestionCheckbox("q1");
    question.choices = [{ value: 1, text: "item1" }];
    var itemValueEditor = new SurveyPropertyItemValuesEditorForTests();
    itemValueEditor.object = question;
    itemValueEditor.beforeShow();

    var itemViewModel = <SurveyNestedPropertyEditorItem>(
      itemValueEditor.createItemViewModel(question.choices[0])
    );
    itemValueEditor.onEditItemClick(itemViewModel);
    var colDetailEditor = <SurveyElementEditorContent>(
      itemValueEditor.koEditItem().itemEditor
    );
    assert.ok(
      colDetailEditor.getPropertyEditorByName("visibleIf"),
      "visibleIf property is in the choices detail form"
    );
    assert.equal(
      colDetailEditor.getPropertyEditorByName("visibleIf").koVisible(),
      true,
      "visibleIf property is visible"
    );
    assert.ok(
      colDetailEditor.getPropertyEditorByName("enableIf"),
      "enableIf property is in the choices detail form"
    );
    assert.equal(
      colDetailEditor.getPropertyEditorByName("enableIf").koVisible(),
      true,
      "enableIf property is visible"
    );
  }
);

QUnit.test(
  "SurveyPropertyMatrixDropdownColumns change nested property content on changing column type",
  function(assert) {
    var survey = new Survey.Survey();
    survey.addNewPage("p");
    var question = new Survey.QuestionMatrixDropdown("q1");
    question.addColumn("column 1");
    question.addColumn("column 2");
    survey.pages[0].addElement(question);
    var columnsEditor = new SurveyPropertyDropdownColumnsEditor(
      Survey.Serializer.findProperty("matrixdropdownbase", "columns")
    );
    columnsEditor.object = question;
    columnsEditor.beforeShow();
    var itemViewModel = <SurveyNestedPropertyEditorItem>(
      columnsEditor.createItemViewModel(question.columns[0])
    );
    itemViewModel.obj.cellType = "dropdown";
    columnsEditor.onEditItemClick(itemViewModel);
    var colDetailEditor = <SurveyElementEditorContent>(
      columnsEditor.koEditItem().itemEditor
    );
    assert.ok(colDetailEditor.getPropertyEditorByName("choices"));
    columnsEditor.onReturnToListClick();

    itemViewModel.obj.cellType = "default";
    columnsEditor.onEditItemClick(itemViewModel);
    colDetailEditor = <SurveyElementEditorContent>(
      columnsEditor.koEditItem().itemEditor
    );
    assert.notOk(colDetailEditor.getPropertyEditorByName("choices"));
  }
);

QUnit.test("SurveyNestedPropertyEditorItem koCanDeleteItem", function(assert) {
  var survey = new Survey.Survey();
  survey.addNewPage("p");
  var question = new Survey.QuestionMatrixDropdown("q1");
  question.addColumn("column 1");
  question.addColumn("column 2");
  survey.pages[0].addElement(question);
  var columnsEditor = new SurveyPropertyDropdownColumnsEditor(
    Survey.Serializer.findProperty("matrixdropdownbase", "columns")
  );
  columnsEditor.object = question;
  columnsEditor.beforeShow();
  var itemViewModel = <SurveyNestedPropertyEditorItem>(
    columnsEditor.createItemViewModel(question.columns[0])
  );

  assert.ok(itemViewModel.koCanDeleteItem(), "Allow delete item");

  (<any>itemViewModel).options = new EditorOptionsTests();
  (<any>itemViewModel).options.onCanDeleteItemCallback = (
    object: any,
    item: Survey.ItemValue
  ) => false;
  (<any>columnsEditor).koColumnsValue.notifySubscribers();
  assert.notOk(itemViewModel.koCanDeleteItem(), "Forbid delete item");
});

QUnit.test(
  "Check showDisplayNameOnTop for different property editors",
  function(assert) {
    var question = new Survey.QuestionCheckbox("q1");
    var editor = new SurveyQuestionEditor(question);
    assert.equal(
      editor.getPropertyEditorByName("name").editor.showDisplayNameOnTop,
      true,
      "Show title on top for name"
    );
    assert.equal(
      editor.getPropertyEditorByName("choices").editor.showDisplayNameOnTop,
      false,
      "Hide title on top for choices"
    );
    assert.equal(
      editor.getPropertyEditorByName("visible").editor.showDisplayNameOnTop,
      false,
      "Hide title on top for visible"
    );
    assert.equal(
      editor.getPropertyEditorByName("visibleIf").editor.showDisplayNameOnTop,
      true,
      "Show title on top for visibleIf"
    );
  }
);

QUnit.test("SurveyPropertyResultfullEditor test", function(assert) {
  var question = new Survey.QuestionCheckbox("q1");
  question.choicesByUrl.url = "url1";
  var editor = new SurveyPropertyResultfullEditor(
    Survey.Serializer.findProperty("selectbase", "choicesByUrl")
  );
  editor.object = question;
  editor.options = new EditorOptionsTests();
  editor.beforeShow();
  var testQuestion = <Survey.QuestionDropdown>(
    editor.survey.getAllQuestions()[0]
  );
  assert.ok(testQuestion, "test question created correctly");
  assert.equal(
    testQuestion.choicesByUrl.url,
    "url1",
    "url1 is set to test question"
  );
  assert.ok(editor.contentEditor, "Content Editor is created");
  editor.contentEditor.getPropertyEditorByName("path").editor.koValue("path1");
  assert.equal(question.choicesByUrl.path, "path1", "path set correctly");
  assert.equal(
    testQuestion.choicesByUrl.path,
    "path1",
    "path is set to test question"
  );
  assert.equal(
    editor.options["lastPropertyValueChangedName"],
    "choicesByUrl",
    "onPropertyValueChanged has been called"
  );
});
QUnit.test("Triggers property editor", function(assert) {
  var survey = createSurvey();
  survey.getQuestionByName("question1").title = "Question1 title";
  var trigger = new Survey.SurveyTriggerVisible();
  trigger.expression = "{question1} != val1";
  trigger.questions.push("question2");
  survey.triggers.push(trigger);
  var propEditor = new SurveyPropertyTriggersEditor(
    Survey.Serializer.findProperty("survey", "triggers")
  );
  propEditor.options = new EditorOptionsTests();
  propEditor.options.showTitlesInExpressions = true;
  propEditor.object = survey;
  propEditor.beforeShow();
  assert.equal(
    propEditor.koAvailableClasses().length,
    Survey.Serializer.getChildrenClasses("surveytrigger", true).length - 1,
    "Exclude visibility trigger"
  );
  assert.equal(
    propEditor.getItemText(propEditor.koSelected()),
    "Run if: ({Question1 title} != val1)",
    "display text shows correctly"
  );

  propEditor.onAddClick({ value: "skiptrigger" });
  assert.equal(survey.triggers.length, 2, "There are two triggers now");

  var trigerEditor = <SurveyElementEditorContent>(
    propEditor.selectedObjectEditor()
  );
  trigerEditor
    .getPropertyEditorByName("expression")
    .editor.koValue("{question2} notempty");
  assert.equal(
    propEditor.getItemText(propEditor.koSelected()),
    "Run if: notempty {question2}",
    "text for valid trigger"
  );
  trigerEditor.getPropertyEditorByName("gotoName").editor.koValue("question3");
  assert.equal(survey.triggers[1].expression, "{question2} notempty");
  assert.equal(
    (<Survey.SurveyTriggerSkip>survey.triggers[1]).gotoName,
    "question3"
  );

  propEditor.onAddClick({ value: "copyvaluetrigger" });
  assert.equal(survey.triggers.length, 3, "There are three triggers now");
  propEditor.onDeleteClick();
  assert.equal(survey.triggers.length, 2, "There are again two triggers");
  propEditor.onAddClick({ value: "completetrigger" });
  trigerEditor = <SurveyElementEditorContent>propEditor.selectedObjectEditor();
  assert.equal(survey.triggers[1].expression, "{question2} notempty");
  assert.equal(survey.triggers.length, 3, "There are 3 triggers");
  assert.equal(
    survey.triggers[2].getType(),
    "completetrigger",
    "Complete trigger is created"
  );
  propEditor.onDeleteClick();
  propEditor.onDeleteClick();
  propEditor.onDeleteClick();
  assert.equal(survey.triggers.length, 0, "Delete all triggers");
  assert.notOk(propEditor.selectedObjectEditor(), "Nothing to select");
});
QUnit.test("Triggers property editor and setvalue trigger", function(assert) {
  var propSetToName = Survey.Serializer.findProperty(
    "setvaluetrigger",
    "setToName"
  );
  propSetToName.type = "question";
  propSetToName.addDependedProperty("setValue");
  var propSetValue = Survey.Serializer.findProperty(
    "setvaluetrigger",
    "setValue"
  );
  propSetValue.type = "triggervalue";
  propSetValue.visibleIf = function(obj) {
    return !!obj && !!obj["setToName"];
  };
  var survey = createSurvey();
  var trigger = new Survey.SurveyTriggerSetValue();
  trigger.expression = "{question1} != 'val1'";
  survey.triggers.push(trigger);
  var propEditor = new SurveyPropertyTriggersEditor(
    Survey.Serializer.findProperty("survey", "triggers")
  );
  propEditor.beforeShow();
  propEditor.object = survey;
  var trigerEditor = <SurveyElementEditorContent>(
    propEditor.selectedObjectEditor()
  );
  var setToNameEditor = trigerEditor.getPropertyEditorByName("setToName")
    .editor;
  assert.equal(
    setToNameEditor["koChoices"]().length,
    survey.getAllQuestions().length,
    "Create the correct editor and set choices to it, questions, no option since setToName is requried"
  );
  assert.equal(
    setToNameEditor["koChoices"]()[0].text,
    "question1",
    "No option"
  );
  setToNameEditor.koValue("question1");
  assert.equal(
    survey.triggers[0]["setToName"],
    "question1",
    "Property set correctly"
  );
  var expressionEditor = <SurveyPropertyConditionEditor>(
    trigerEditor.getPropertyEditorByName("expression").editor
  );
  assert.equal(
    expressionEditor.isEditorShowing,
    true,
    "The expression editing is showing by default"
  );
  assert.equal(
    expressionEditor.availableQuestions.length,
    survey.getAllQuestions().length,
    "All questions are here"
  );

  var setValueEditor = <SurveyPropertyDefaultValueEditor>(
    trigerEditor.getPropertyEditorByName("setValue").editor
  );
  assert.equal(
    setValueEditor.editorType,
    "value",
    "has correct editor type for setValue property"
  );
  setToNameEditor.koValue("question2");
  assert.equal(
    trigerEditor.getPropertyEditorByName("setValue").koVisible(),
    true,
    "SetToName is not empty"
  );
  assert.ok(setValueEditor.survey, "Survey is created");
  assert.equal(
    setValueEditor.survey.getAllQuestions()[0].getType(),
    "checkbox",
    "question is checkbox"
  );
  setValueEditor.survey.setValue("question", ["one", "two"]);
  assert.deepEqual(
    survey.triggers[0]["setValue"],
    ["one", "two"],
    "Set value is set"
  );
  setToNameEditor.koValue("");
  assert.equal(
    survey.triggers[0]["setToName"],
    "question2",
    "Property could not be changed"
  );
});

QUnit.test("'set' property editor", function(assert) {
  Survey.Serializer.addProperty("survey", {
    name: "region:set",
    choices: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
  });
  var survey = createSurvey();
  var setValueEditor = new SurveyPropertySetEditor(
    Survey.Serializer.findProperty("survey", "region")
  );
  setValueEditor.object = survey;
  setValueEditor.beforeShow();
  var question = setValueEditor.koSurvey().getAllQuestions()[0];
  assert.deepEqual(question.choices.length, 5, "There are 5 choices");
  Survey.Serializer.removeProperty("survey", "region");
});

QUnit.test("'set' property editor, get choices on callback, Bug#720", function(
  assert
) {
  var choices = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  var callback = null;
  Survey.Serializer.addProperty("survey", {
    name: "region:set",
    choices: function(obj, choicesCallback) {
      callback = choicesCallback;
      return [];
    },
  });
  var survey = createSurvey();
  var setValueEditor = new SurveyPropertySetEditor(
    Survey.Serializer.findProperty("survey", "region")
  );
  setValueEditor.object = survey;
  setValueEditor.beforeShow();
  var question = setValueEditor.koSurvey().getAllQuestions()[0];
  assert.deepEqual(question.choices.length, 0, "There is no choices yet");
  callback(choices);
  question = setValueEditor.koSurvey().getAllQuestions()[0];
  assert.deepEqual(question.choices.length, 5, "There are 5 choices now");
  Survey.Serializer.removeProperty("survey", "region");
});

QUnit.test("Validators property editor", function(assert) {
  var survey = createSurvey();
  var validator = new Survey.NumericValidator(10, 100);
  validator.text = "validatortext";
  var question = <Survey.Question>survey.getQuestionByName("question1");
  question.validators.push(validator);
  var propEditor = new SurveyPropertyValidatorsEditor(
    Survey.Serializer.findProperty("question", "validators")
  );
  propEditor.object = question;
  propEditor.beforeShow();
  assert.ok(
    propEditor.koAvailableClasses().length > 1,
    "Localized validators have been created"
  );
  assert.equal(
    propEditor.getItemText(validator),
    "numeric",
    "It is a numeric validator"
  );
  propEditor.onAddClick({ value: "textvalidator" });
  assert.equal(question.validators.length, 2, "2 validators now");
  assert.equal(
    propEditor.getItemText(question.validators[1]),
    "text",
    "Created with corrected value"
  );

  propEditor.onAddClick({ value: "textvalidator" });
  assert.equal(question.validators.length, 3, "3 validators");
  propEditor.onDeleteClick();
  assert.equal(question.validators.length, 2, "Two validators are saved");
  propEditor.onDeleteClick();
  propEditor.onDeleteClick();
  assert.notOk(
    propEditor.selectedObjectEditor(),
    "There is no validators, nothing to show"
  );
});

QUnit.test(
  "Validators property editor - custom property, Bug: https://surveyjs.answerdesk.io/ticket/details/T2537",
  function(assert) {
    Survey.Serializer.addProperty("surveyvalidator", "validationType");

    var survey = createSurvey();
    var validator = new Survey.NumericValidator(10, 100);
    validator["validationType"] = "Error";
    validator.text = "validatortext";
    var question = <Survey.Question>survey.getQuestionByName("question1");
    question.validators.push(validator);
    var propEditor = new SurveyPropertyValidatorsEditor(
      Survey.Serializer.findProperty("question", "validators")
    );
    propEditor.beforeShow();
    propEditor.object = question;
    var editingValidator = propEditor.selectedObjectEditor().editableObj;
    assert.equal(
      editingValidator.text,
      "validatortext",
      "Standard property set correctly"
    );
    assert.equal(
      editingValidator.validationType,
      "Error",
      "Custom property set correctly"
    );

    Survey.Serializer.removeProperty("surveyvalidator", "validationType");
  }
);

QUnit.test(
  "Validators property editor update existing validator property - https://surveyjs.answerdesk.io/ticket/details/T2058",
  function(assert) {
    var survey = createSurvey();
    var validator = new Survey.NumericValidator(10, 100);
    validator.text = "validatortext";
    var question = <Survey.Question>survey.getQuestionByName("question1");
    question.validators.push(validator);
    var propEditor = new SurveyPropertyValidatorsEditor(
      Survey.Serializer.findProperty("question", "validators")
    );
    propEditor.object = question;
    propEditor.beforeShow();
    assert.ok(
      propEditor.koAvailableClasses().length > 1,
      "Localized validators have been created"
    );
    var maxValuePropertyEditor = propEditor
      .selectedObjectEditor()
      .getPropertyEditorByName("maxValue");
    assert.equal(
      maxValuePropertyEditor.editor.koValue(),
      100,
      "Initial max value = 100"
    );

    maxValuePropertyEditor.editor.koValue(101);
    propEditor.apply();

    assert.equal(
      question.validators[0]["maxValue"],
      101,
      "New value is saved into object"
    );
  }
);

QUnit.test("minValue doesn't work when it is 0, Bug #687", function(assert) {
  Survey.Serializer.addProperty("question", {
    name: "decimalPlaces:number",
    default: 0,
    minValue: 0,
    maxValue: 5,
    category: "validation",
    visibleIndex: 0,
  });

  var question = new Survey.QuestionText("q1");
  var propEditor = new SurveyPropertyTextEditor(
    Survey.Serializer.findProperty("question", "decimalPlaces")
  );
  propEditor.object = question;
  propEditor.koValue(-5);
  assert.equal(propEditor.koValue(), 0, "The minimum value is 0");
  propEditor.koValue(2);
  assert.equal(propEditor.koValue(), 2, "value 2 is correct");
  propEditor.koValue(6);
  assert.equal(propEditor.koValue(), 5, "The maximum value is 5");
  Survey.Serializer.removeProperty("question", "decimalPlaces");
});

QUnit.test(
  "automicatilly create name for new item in SurveyPropertyTextItemsEditor",
  function(assert) {
    var question = new Survey.QuestionMultipleText("q1");
    question.addItem("text1");
    question.addItem("text2");
    var property = Survey.Serializer.findProperty("multipletext", "items");
    var editor = new SurveyPropertyTextItemsEditor(property);
    editor.object = question;
    editor.beforeShow();
    editor.onAddClick();
    assert.equal(question.items.length, 3, "There are 3 items now");
    assert.equal(
      question.items[2].name,
      "text3",
      "the name autogenerated successful"
    );
  }
);

QUnit.test("be able to modify empty items, bug#428", function(assert) {
  var question = new Survey.QuestionMultipleText("q1");
  var property = Survey.Serializer.findProperty("multipletext", "items");
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
  var property = Survey.Serializer.findProperty("question", "title");
  var stringProperty = new SurveyStringPropertyEditor(property);
  stringProperty.beforeShow();
  stringProperty.onChanged = (newValue: any) => {
    question.title = newValue;
  };
  stringProperty.object = question;
  var options = new EditorOptionsTests();
  options.doValueChangingCallback = function(options) {
    options.newValue = options.newValue.trim();
  };
  stringProperty.options = options;
  stringProperty.koValue(" ss   ");
  stringProperty.apply();
  assert.equal(question.title, "ss", "The value has been trimmed");
});

QUnit.test("SurveyPropertyMultipleValuesEditor - categories ", function(
  assert
) {
  Survey.Serializer.addProperty("question", {
    name: "multiple:multiplevalues",
    choices: function(obj) {
      return [
        { value: 5, text: "item 5", category: "category 2" },
        { value: 4, text: "item 4", category: "category 1" },
        { value: 6, text: "item 6", category: "category 2" },
        { value: 1, text: "item 1" },
        { value: 3, text: "item 3", category: "category 1" },
        { value: 2, text: "item 2" },
      ];
    },
  });
  var property = Survey.Serializer.findProperty("question", "multiple");

  var propertyEditor = new SurveyPropertyMultipleValuesEditor(property);
  var categories = propertyEditor.koCategories();
  assert.equal(categories.length, 3, "There are 3 categories");
  assert.equal(categories[0].koCategory(), "", "The first category is empty");
  assert.equal(
    categories[0].koTitleVisible(),
    false,
    "The first category is invisible"
  );
  assert.equal(
    categories[1].koCategory(),
    "category 1",
    "The second category is 1"
  );
  assert.equal(
    categories[1].koTitleVisible(),
    true,
    "The second category is visible"
  );
  assert.equal(
    categories[2].koCategory(),
    "category 2",
    "The third category is 2"
  );

  Survey.Serializer.removeProperty("question", "multiple");
});

QUnit.test("SurveyPropertyItemValuesEditor + item.koShowDetails", function(
  assert
) {
  var survey = new Survey.Survey();
  var p = survey.addNewPage();
  var q = <Survey.QuestionDropdown>p.addNewQuestion("dropdown", "q1");
  q.choices = [1, 2, 3];
  survey.locale = "en";
  q.choices[0].text = "English 1";

  var property = Survey.Serializer.findProperty("selectbase", "choices");
  var propEditor = <SurveyPropertyItemValuesEditor>(
    SurveyPropertyEditorFactory.createEditor(property)
  );
  propEditor.object = q;
  propEditor.beforeShow();
  var itemViewModel = propEditor.createItemViewModel(q.choices[0]);
  assert.equal(
    itemViewModel.koHasDetails(),
    true,
    "Detail buttons are here for the first item"
  );
  var tabs =
    SurveyQuestionEditorDefinition.definition["itemvalue[]@choices"].tabs;
  SurveyQuestionEditorDefinition.definition["itemvalue[]@choices"].tabs = [
    { name: "general", visible: false },
  ];
  propEditor.beforeShow();
  itemViewModel = propEditor.createItemViewModel(q.choices[0]);
  assert.equal(
    itemViewModel.koHasDetails(),
    false,
    "Detail buttons are hidden"
  );
  SurveyQuestionEditorDefinition.definition["itemvalue[]@choices"].tabs = tabs;
  propEditor.beforeShow();
  itemViewModel = propEditor.createItemViewModel(q.choices[0]);
  assert.equal(
    itemViewModel.koHasDetails(),
    true,
    "Detail buttons are shown again"
  );
});

QUnit.test(
  "SurveyPropertyItemValuesEditor + item.koShowDetails + make properties invisible",
  function(assert) {
    var survey = new Survey.Survey();
    var p = survey.addNewPage();
    var q = <Survey.QuestionDropdown>p.addNewQuestion("dropdown", "q1");
    q.choices = [1, 2, 3];
    survey.locale = "en";
    q.choices[0].text = "English 1";
    Survey.Serializer.findProperty("itemvalue", "visibleIf").visible = false;
    Survey.Serializer.findProperty("itemvalue", "enableIf").visible = false;

    var property = Survey.Serializer.findProperty("selectbase", "choices");
    var propEditor = <SurveyPropertyItemValuesEditor>(
      SurveyPropertyEditorFactory.createEditor(property)
    );
    propEditor.object = q;
    propEditor.beforeShow();
    var itemViewModel = propEditor.createItemViewModel(q.choices[0]);
    assert.equal(
      itemViewModel.koHasDetails(),
      false,
      "Detail buttons are hidden"
    );
    Survey.Serializer.findProperty("itemvalue", "visibleIf").visible = true;
    Survey.Serializer.findProperty("itemvalue", "enableIf").visible = true;
  }
);

QUnit.test("SurveyPropertyItemValuesEditor + koShowHeader", function(assert) {
  var survey = new Survey.Survey();
  var p = survey.addNewPage();
  var q = <Survey.QuestionDropdown>p.addNewQuestion("dropdown", "q1");
  q.choices = [1, 2, 3];
  survey.locale = "en";
  q.choices[0].text = "English 1";

  var property = Survey.Serializer.findProperty("selectbase", "choices");
  var propEditor = <SurveyPropertyItemValuesEditor>(
    SurveyPropertyEditorFactory.createEditor(property)
  );
  propEditor.object = q;
  propEditor.beforeShow();
  assert.equal(
    propEditor.koShowHeader(),
    true,
    "There are several editable columns, we are rendering header"
  );
  Survey.Serializer.findProperty("itemvalue", "text").visible = false;
  propEditor = <SurveyPropertyItemValuesEditor>(
    SurveyPropertyEditorFactory.createEditor(property)
  );
  propEditor.beforeShow();
  assert.equal(
    propEditor.koShowHeader(),
    false,
    "There are several editable columns, we are not rendering header"
  );
  Survey.Serializer.findProperty("itemvalue", "text").visible = true;
});

QUnit.test(
  "SurveyPropertyEditorFactory.createEditor, isCellEditor=true, for expression and condition",
  function(assert) {
    var expressionProperty = Survey.Serializer.findProperty(
      "expression",
      "expression"
    );
    assert.equal(
      SurveyPropertyEditorFactory.createEditor(expressionProperty).editorType,
      "expression",
      "By default create expression"
    );
    assert.equal(
      SurveyPropertyEditorFactory.createEditor(expressionProperty, true)
        .editorType,
      "string",
      "For cell editor create string, not expression"
    );
    var conditionProperty = Survey.Serializer.findProperty(
      "question",
      "visibleIf"
    );
    assert.equal(
      SurveyPropertyEditorFactory.createEditor(conditionProperty).editorType,
      "condition",
      "By default create condition"
    );
    assert.equal(
      SurveyPropertyEditorFactory.createEditor(conditionProperty, true)
        .editorType,
      "string",
      "For cell editor create string, not condition"
    );
  }
);

QUnit.test("SurveyPropertyCalculatedValueEditor", function(assert) {
  var survey = new Survey.Survey();
  var property = Survey.Serializer.findProperty("survey", "calculatedValues");
  var propEditor = <SurveyPropertyCalculatedValueEditor>(
    SurveyPropertyEditorFactory.createEditor(property)
  );
  propEditor.beforeShow();
  propEditor.object = survey;
  propEditor.onAddClick();
  assert.equal(survey.calculatedValues.length, 1, "One item is added");
  var itemViewModel = propEditor.createItemViewModel(
    survey.calculatedValues[0]
  );
  assert.equal(
    itemViewModel.cells[0].koValue(),
    "var1",
    "The value created correctly"
  );
  assert.ok(itemViewModel.cells[1].editor, "Editor for expression is created");
  assert.equal(
    itemViewModel.cells[1].editor.editorType,
    "string",
    "Use the string editor"
  );
  propEditor.onEditItemClick(itemViewModel);
  var itemEditor = <SurveyElementEditorContent>(
    propEditor.koEditItem().itemEditor
  );
  assert.ok(itemEditor, "Item editor is created");
  var nameEditor = itemEditor.getPropertyEditorByName("name");
  var expressionEditor = itemEditor.getPropertyEditorByName("expression");
  assert.equal(nameEditor.editor.koValue(), "var1", "name set correctly");
  nameEditor.editor.koValue("var11");
  expressionEditor.editor.koValue("{q1} = 1");
  assert.equal(
    survey.calculatedValues[0].name,
    "var11",
    "cell name editor is updated"
  );
  assert.equal(
    survey.calculatedValues[0].expression,
    "{q1} = 1",
    "cell expression editor is updated"
  );
});

QUnit.test(
  "SurveyPropertyCalculatedValueEditor as propertyItemsEditor, syncronize it with the real object",
  function(assert) {
    var survey = new Survey.Survey();
    var property = Survey.Serializer.findProperty("survey", "calculatedValues");
    var propEditor = <SurveyPropertyCalculatedValueEditor>(
      SurveyPropertyEditorFactory.createEditor(property)
    );
    propEditor.beforeShow();
    propEditor.object = survey;
    propEditor.onAddClick();
    assert.equal(survey.calculatedValues.length, 1, "There is one item now");
    assert.equal(
      survey.calculatedValues[0].name,
      "var1",
      "Name for first item generated correctly"
    );
    propEditor.onAddClick();
    assert.equal(survey.calculatedValues.length, 2, "There are two items");
    assert.equal(
      survey.calculatedValues[1].name,
      "var2",
      "Name for second item generated correctly"
    );
  }
);

QUnit.test(
  "SurveyElementEditorContent do not allow empty value for a unique property",
  function(assert) {
    var question = new Survey.QuestionText("q1");
    var propEditor = new SurveyElementEditorContent(question);
    var edName = propEditor.getPropertyEditorByName("name");
    edName.editor.koValue("");
    assert.equal(question.name, "q1", "The value is not changed");
    edName.editor.koValue("q2");
    assert.equal(question.name, "q2", "The value is changed");
  }
);

QUnit.test(
  "Update matrix.cells immediately with updated property editor",
  function(assert) {
    var question = new Survey.QuestionMatrix("q1");
    question.columns = ["col1", "col2"];
    question.rows = ["row1", "row2"];
    question.setDefaultCellText("col1", "defCol1");
    question.setCellText(0, "col2", "row1_col2");
    var property = Survey.Serializer.findProperty("matrix", "cells");
    var propEditor = new SurveyPropertyCellsEditor(property);
    propEditor.object = question;
    propEditor.beforeShow();
    assert.equal(
      propEditor
        .koRows()[0]
        .koCells()[0]
        .text(),
      "defCol1",
      "define value set correctly"
    );
    assert.equal(
      propEditor
        .koRows()[1]
        .koCells()[1]
        .text(),
      "row1_col2",
      "row1_col2 value set correctly"
    );
    propEditor
      .koRows()[0]
      .koCells()[0]
      .text("defCol1_Updated");
    propEditor
      .koRows()[1]
      .koCells()[1]
      .text("row1_col2_Updated");
    assert.equal(
      question.getDefaultCellText("col1"),
      "defCol1_Updated",
      "Set default cell into matrix succesfull"
    );
    assert.equal(
      question.getCellText(0, "col2"),
      "row1_col2_Updated",
      "Set cell into matrix succesfull"
    );
  }
);

QUnit.test(
  "expression editor in question expression validator should has access to survey",
  function(assert) {
    var survey = new Survey.SurveyModel();
    survey.addNewPage("p");
    var question = <Survey.QuestionTextModel>(
      survey.pages[0].addNewQuestion("text", "q1")
    );
    survey.pages[0].addNewQuestion("text", "q2");
    survey.pages[0].addNewQuestion("text", "q3");
    var validatorsProp = new SurveyObjectProperty(
      Survey.Serializer.findProperty("question", "validators")
    );
    validatorsProp.object = question;
    var validatorsEditor = <SurveyPropertyValidatorsEditor>(
      validatorsProp.editor
    );
    validatorsEditor.onAddClick({ value: "expressionvalidator" });
    assert.equal(question.validators.length, 1, "There is one validator now");
    var conditionProp = validatorsEditor
      .selectedObjectEditor()
      .getPropertyEditorByName("expression");
    assert.ok(conditionProp, "Condition editor is here");
    var conditionEditor = <SurveyPropertyConditionEditor>conditionProp.editor;
    assert.equal(
      conditionEditor.allConditionQuestions.length,
      3,
      "There are 3 questions in the survey"
    );
  }
);
