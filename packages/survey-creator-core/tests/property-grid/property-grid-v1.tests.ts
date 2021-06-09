import {
  Base,
  JsonObjectProperty,
  QuestionTextModel,
  QuestionCheckboxModel,
  QuestionDropdownModel,
  QuestionMatrixDynamicModel,
  QuestionMatrixDropdownModel,
  SurveyModel,
  QuestionMultipleTextModel,
  QuestionCompositeModel,
  ItemValue,
  Question,
  MatrixDropdownColumn,
  SurveyTriggerSetValue,
  Serializer,
  QuestionRadiogroupModel,
  SurveyTriggerVisible,
  NumericValidator,
  QuestionExpressionModel
} from "survey-core";
import {
  PropertyGridModel,
  PropertyGridEditorCollection,
  PropertyEditorSetupValue
} from "../../src/property-grid";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions
} from "../../src/settings";
import {
  defaultStrings,
  editorLocalization
} from "../../src/editorLocalization";
import { SurveyQuestionEditorDefinition } from "../../src/questionEditors/questionEditorDefinition";

export * from "../../src/property-grid/matrices";
export * from "../../src/property-grid/restfull";
export * from "../../src/property-grid/fast-entry";
import { PropertyGridEditorCondition } from "../../src/property-grid/condition";
import { ConditionEditor } from "../../src/property-grid/condition-survey";
import { DefaultValueEditor } from "../../src/property-grid/values-survey";

import { CellsEditor } from "../../src/property-grid/cells-survey";
import {
  PropertyGridValueEditor,
  PropertyGridRowValueEditor
} from "../../src/property-grid/values";
import { FastEntryEditor } from "../../src/property-grid/fast-entry";
import { PropertiesHelpTexts } from "../../src/property-grid/properties-helptext";

export class PropertyGridModelTester extends PropertyGridModel {
  constructor(obj: Base, options: ISurveyCreatorOptions = null) {
    PropertyGridEditorCollection.clearHash();
    super(obj, options);
  }
}
class BindingsTester extends Base {
  private survey: SurveyModel;
  constructor() {
    super();
    this.survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2" }
      ]
    });
  }
  public getType() {
    return "bindingstester";
  }
  public getSurvey(): SurveyModel {
    return this.survey;
  }
  public get property1(): string {
    return this.getPropertyValue("property1", "");
  }
  public set property1(val: string) {
    this.setPropertyValue("property1", val);
  }
  public get property2(): string {
    return this.getPropertyValue("property2", "");
  }
  public set property2(val: string) {
    this.setPropertyValue("property2", val);
  }
  public get property3(): number {
    return this.getPropertyValue("property3", 0);
  }
  public set property3(val: number) {
    this.setPropertyValue("property3", val);
  }
}

Serializer.addClass(
  "bindingstester",
  [
    { name: "property1", isBindable: true },
    "proeprty2",
    { name: "property3:number", isBindable: true },
    { name: "bindings:bindings", serializationProperty: "bindings" }
  ],
  function (json: any) {
    return new BindingsTester();
  },
  "base"
);

function createSurvey(): SurveyModel {
  return new SurveyModel({
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

function findSetupAction(actions: Array<any>): any {
  for (var i = 0; i < actions.length; i++) {
    if (actions[i].id === "property-grid-setup") return actions[i];
  }
  return null;
}

test("Create correct questions for property editors", () => {
  var property = Serializer.addProperty("question", "testname");
  property.type = "unknown";
  var propertyEditor = PropertyGridEditorCollection.getEditor(property);
  expect(
    propertyEditor.getJSON(new Question("q1"), property, null).type
  ).toEqual("text");
  Serializer.removeProperty("question", "testname");
  var propertyTypes = {
    string: "text",
    boolean: "boolean",
    number: "text",
    text: "comment",
    html: "comment",
    "itemvalue[]": "matrixdynamic",
    matrixdropdowncolumns: "matrixdynamic",
    textitems: "matrixdynamic",
    triggers: "matrixdynamic",
    validators: "matrixdynamic",
    restfull: "propertygrid_restfull"
  };
  for (var key in propertyTypes) {
    var propName = "testname_" + key;
    property = Serializer.addProperty("question", propName);
    property.type = key.toString();
    propertyEditor = PropertyGridEditorCollection.getEditor(property);
    expect(
      propertyEditor.getJSON(
        new Question("q1"),
        property,
        new EmptySurveyCreatorOptions()
      ).type
    ).toEqual(propertyTypes[key]);
    Serializer.removeProperty("question", propName);
  }
});
test("propertyEditor.displayName", () => {
  var oldValue = defaultStrings.p["enableIf"];
  defaultStrings.p["enableIf"] = "It is enableIf";
  var propertyGrid = new PropertyGridModelTester(new Question("q1"));
  var enableIfQuestion = propertyGrid.survey.getQuestionByName("enableIf");
  expect(enableIfQuestion.title).toEqual("It is enableIf");
  defaultStrings.p["enableIf"] = oldValue;
});
/**
 * Skip several tests with custom property editors. We do not it completely different now and any question, including custom widget, can become a property editors.
 */
test("PropertyEditor and hasError - required", () => {
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var nameQuestion = propertyGrid.survey.getQuestionByName("name");
  expect(nameQuestion.isRequired).toEqual(true);
  nameQuestion.value = "";
  expect(question.name).toEqual("q1");
  expect(nameQuestion.errors).toHaveLength(1);
  nameQuestion.value = "q2";
  expect(question.name).toEqual("q2");
  expect(nameQuestion.errors).toHaveLength(0);
});
test("Property with choices", () => {
  var property = Serializer.addProperty("question", "dropdown");
  property.setChoices([1, 2, 3], null);
  var propertyGrid = new PropertyGridModelTester(new Question("q1"));
  var dropdownQuestion = propertyGrid.survey.getQuestionByName("dropdown");
  expect(dropdownQuestion.choices).toHaveLength(3);
  expect(dropdownQuestion.choices[0].value).toEqual(1);
  Serializer.removeProperty("question", "dropdown");
});
test("Property with choices, support ItemValue", () => {
  var property = Serializer.addProperty("question", "dropdown");
  property.setChoices([{ value: 1, text: "Item 1" }, 2, 3], null);
  var propertyGrid = new PropertyGridModelTester(new Question("q1"));
  var dropdownQuestion = propertyGrid.survey.getQuestionByName("dropdown");
  expect(dropdownQuestion.choices).toHaveLength(3);
  expect(dropdownQuestion.choices[0].value).toEqual(1);
  expect(dropdownQuestion.choices[0].text).toEqual("Item 1");
  Serializer.removeProperty("question", "dropdown");
});
test("Question property editor - choices", () => {
  Serializer.addProperty("survey", "question_test:question");
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "question1", valueName: "value1" },
      { type: "text", name: "question2" },
      { type: "text", name: "question3" }
    ]
  });
  var propertyGrid = new PropertyGridModelTester(survey);
  var dropdownQuestion = propertyGrid.survey.getQuestionByName("question_test");
  expect(dropdownQuestion.choices).toHaveLength(3);
  expect(dropdownQuestion.choices[0].value).toEqual("question1");
  Serializer.removeProperty("survey", "question_test");
});
test("SurveySelectBaseQuestionPropertyEditor", () => {
  Serializer.addProperty("question", "question_test:question_selectbase");
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "question1", valueName: "value1" },
      { type: "radiogroup", name: "question2" },
      { type: "checkbox", name: "question3" },
      { type: "dropdown", name: "question4" }
    ]
  });
  var propertyGrid = new PropertyGridModelTester(
    survey.getQuestionByName("question3")
  );
  var dropdownQuestion = propertyGrid.survey.getQuestionByName("question_test");
  expect(dropdownQuestion.choices).toHaveLength(2);
  expect(dropdownQuestion.choices[0].value).toEqual("question2");
  Serializer.removeProperty("question", "question_test");
});
test("SurveyQuestionValuePropertyEditor - choices", () => {
  Serializer.addProperty("survey", "question_test:questionvalue");
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "question1", valueName: "value1" },
      { type: "text", name: "question2" },
      { type: "text", name: "question3" }
    ]
  });
  var propertyGrid = new PropertyGridModelTester(survey);
  var dropdownQuestion = propertyGrid.survey.getQuestionByName("question_test");
  expect(dropdownQuestion.choices).toHaveLength(3);
  expect(dropdownQuestion.choices[0].value).toEqual("value1");
  expect(dropdownQuestion.choices[0].text).toEqual("question1");
  expect(dropdownQuestion.choices[1].value).toEqual("question2");
  Serializer.removeProperty("survey", "question_test");
});
test("SurveyPropertyItemValue", () => {
  var question = new QuestionCheckboxModel("q1");
  question.choices = [
    { value: 1, text: "item1" },
    { value: 2, text: "item2" },
    { value: 3, text: "item3" }
  ];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var rows = choicesQuestion.visibleRows;
  expect(rows).toHaveLength(3);
  expect(rows[1].cells[0].value).toEqual(2);
  expect(rows[1].cells[1].value).toEqual("item2");

  choicesQuestion.removeRow(1);
  expect(question.choices).toHaveLength(2);
  expect(rows[1].cells[0].value).toEqual(3);
  expect(rows[1].cells[1].value).toEqual("item3");

  choicesQuestion.addRow();
  expect(question.choices).toHaveLength(3);
  expect(rows[2].cells[0].value).toEqual(4);
  rows[2].cells[1].value = "item4";
  expect(rows[2].cells[1].value).toEqual("item4");
  expect(question.choices[2].value).toEqual(4);
  expect(question.choices[2].text).toEqual("item4");
});
test("SurveyPropertyItemValue different view type", () => {
  var question = new QuestionCheckboxModel("q1");
  question.choices = [{ value: 1, text: "item1" }, { value: 2 }];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var editor = PropertyGridEditorCollection.getEditor(choicesQuestion.property);
  expect(editor).toBeTruthy();
  var valueEditor = <PropertyEditorSetupValue>(
    editor.createPropertyEditorSetup(
      question,
      choicesQuestion.property,
      choicesQuestion,
      new EmptySurveyCreatorOptions()
    )
  );
  var valueQuestion = valueEditor.editSurvey.getQuestionByName("question");
  expect(valueQuestion.value).toEqual("1|item1\n2");
  valueQuestion.value = "1|item1\n\n2|item2\n3\ni4";
  valueEditor.apply();
  expect(question.choices).toHaveLength(4);

  var rows = choicesQuestion.visibleRows;
  expect(rows).toHaveLength(4);
  expect(rows[1].cells[0].value).toEqual(2);
  expect(rows[1].cells[1].value).toEqual("item2");
  expect(rows[2].cells[0].value).toEqual("3");
  expect(rows[2].cells[1].value).toBeFalsy();
  expect(rows[3].cells[0].value).toEqual("i4");
  expect(rows[3].cells[1].value).toBeFalsy();
  valueEditor = <PropertyEditorSetupValue>(
    editor.createPropertyEditorSetup(
      question,
      choicesQuestion.property,
      choicesQuestion,
      new EmptySurveyCreatorOptions()
    )
  );
  valueQuestion = valueEditor.editSurvey.getQuestionByName("question");
  valueQuestion.value = "1|item1";
  valueEditor.apply();
  expect(question.choices).toHaveLength(1);
});
test("SurveyPropertyItemValuesEditor - fast entry is available - https://surveyjs.answerdesk.io/ticket/details/T1534", () => {
  var question = new QuestionCheckboxModel("q1");
  question.choices = ["1|item1", "item2"];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var editor = PropertyGridEditorCollection.getEditor(choicesQuestion.property);
  expect(editor).toBeTruthy();
  var valueEditor = <PropertyEditorSetupValue>(
    editor.createPropertyEditorSetup(
      question,
      choicesQuestion.property,
      choicesQuestion,
      new EmptySurveyCreatorOptions()
    )
  );
  var valueQuestion = valueEditor.editSurvey.getQuestionByName("question");
  expect(valueQuestion.value).toEqual("1|item1\nitem2");
  expect(valueQuestion.isReadOnly).toEqual(false);
});

test("SurveyPropertyItemValuesEditor - disable Fast Entry functionality if itemvalue.value property is readonly or invisible - https://surveyjs.answerdesk.io/ticket/details/T1837", () => {
  Serializer.findProperty("ItemValue", "value").readOnly = true;
  var question = new QuestionCheckboxModel("q1");
  question.choices = ["1|item1", "item2"];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var column = choicesQuestion.getColumnByName("value");
  expect(column).toBeTruthy();
  expect(column.readOnly).toBeTruthy();
  var actions = choicesQuestion.getTitleActions();
  var setupAction = findSetupAction(actions);
  expect(setupAction).toBeTruthy();
  expect(setupAction.enabled).toBeFalsy();
  Serializer.findProperty("ItemValue", "value").readOnly = false;
  propertyGrid = new PropertyGridModelTester(question);
  choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  column = choicesQuestion.getColumnByName("value");
  expect(column).toBeTruthy();
  expect(column.readOnly).toBeFalsy();
  expect(column.isVisible).toBeTruthy();
  actions = choicesQuestion.getTitleActions();
  setupAction = findSetupAction(actions);
  expect(setupAction).toBeTruthy();
  expect(setupAction.enabled).toBeTruthy();
  Serializer.findProperty("ItemValue", "value").visible = false;
  propertyGrid = new PropertyGridModelTester(question);
  choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  column = choicesQuestion.getColumnByName("value");
  expect(column).toBeFalsy();
  actions = choicesQuestion.getTitleActions();
  setupAction = findSetupAction(actions);
  expect(setupAction).toBeTruthy();
  expect(setupAction.enabled).toBeFalsy();
  Serializer.findProperty("ItemValue", "value").visible = true;
});
test("SurveyPropertyItemValuesEditor - returns error on empty value", () => {
  var question = new QuestionCheckboxModel("q1");
  question.choices = ["1|item1", "item2"];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var column = choicesQuestion.getColumnByName("value");
  expect(column).toBeTruthy();
  expect(column.isRequired).toBeTruthy();
  var rows = choicesQuestion.visibleRows;
  expect(rows).toHaveLength(2);
  expect(rows[0].cells[0].value).toEqual("1");
  rows[0].cells[0].value = undefined;
  expect(question.choices[0].value).toEqual("1");
  expect(rows[0].cells[0].question.errors).toHaveLength(1);
  rows[0].cells[0].value = 3;
  expect(question.choices[0].value).toEqual(3);
  expect(rows[0].cells[0].question.errors).toHaveLength(0);
});
test("SurveyPropertyItemValue disable viewtext for multiple languages", () => {
  var survey = new SurveyModel({
    questions: [
      {
        type: "checkbox",
        name: "q1",
        choices: [{ value: 1, text: { default: "item1", de: "de_item1" } }]
      }
    ]
  });
  survey.locale = "de";
  var question = <QuestionCheckboxModel>survey.getQuestionByName("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var actions = choicesQuestion.getTitleActions();
  var setupAction = findSetupAction(actions);
  expect(setupAction).toBeTruthy();
  expect(setupAction.enabled).toBeFalsy();
  survey.locale = "en";
});
test("SurveyPropertyItemValue_PureValue", () => {
  var question = new QuestionCheckboxModel("q1");
  question.choices = [1, "item2", { value: 3, text: "item3" }];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(question.choices).toHaveLength(3);
  var rows = choicesQuestion.visibleRows;
  expect(rows[0].cells[0].value).toEqual(1);
  expect(rows[1].cells[0].value).toEqual("item2");
  expect(rows[2].cells[0].value).toEqual(3);
  expect(rows[2].cells[1].value).toEqual("item3");
});
test("SurveyPropertyItemValue columns generation", () => {
  var question = new QuestionCheckboxModel("q1");
  question.choices = [1, "item2", { value: 3, text: "item3" }];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.columns).toHaveLength(2);
  expect(choicesQuestion.columns[0].name).toEqual("value");
  expect(choicesQuestion.columns[1].name).toEqual("text");
});
test("SurveyPropertyItemValue custom property", () => {
  Serializer.addProperty("itemvalue", { name: "myImageLink" });

  var question = new QuestionCheckboxModel("q1");
  question.choices = [1, "item2", { value: 3, text: "item3" }];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.columns).toHaveLength(3);
  expect(choicesQuestion.columns[2].name).toEqual("myImageLink");
  expect(choicesQuestion.columns[2].title).toEqual("My image link");

  var actions = choicesQuestion.getTitleActions();
  var setupAction = findSetupAction(actions);
  expect(setupAction).toBeTruthy();
  expect(setupAction.enabled).toBeTruthy();

  Serializer.removeProperty("itemvalue", "myImageLink");
});
test("SurveyPropertyItemValue override properties", () => {
  Serializer.addProperty("itemvalue", {
    name: "price:number",
    visible: false,
    isSerializable: false
  });
  Serializer.addClass(
    "ordergriditem",
    [
      {
        name: "price:number",
        default: 0,
        visible: true,
        isSerializable: true
      },
      { name: "text", visible: false },
      { name: "visibleIf", visible: false },
      { name: "enableIf", visible: false }
    ],
    function () {
      return new ItemValue(null, null, "ordergriditem");
    },
    "itemvalue"
  );
  Serializer.addProperty("text", "orderItems:ordergriditem[]");
  var question = new QuestionCheckboxModel("q1");
  question.choices = [1, "item2", { value: 3, text: "item3" }];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.columns).toHaveLength(2);
  expect(choicesQuestion.columns[1].title).toEqual("Text");

  var question2 = new QuestionTextModel("q1");
  var item = new ItemValue("item1", null, "ordergriditem");
  item.price = 20;
  question2.orderItems.push(item);

  var propertyGrid2 = new PropertyGridModelTester(question2);
  var choicesQuestion2 = <QuestionMatrixDynamicModel>(
    propertyGrid2.survey.getQuestionByName("orderItems")
  );
  expect(choicesQuestion2).toBeTruthy();
  expect(choicesQuestion2.columns).toHaveLength(2);
  expect(choicesQuestion2.columns[1].title).toEqual("Price");

  Serializer.removeProperty("text", "orderItems");
  Serializer.removeClass("ordergriditem");
  Serializer.removeProperty("itemvalue", "price");
});
test("SurveyPropertyItemValueEditor override grid columns using canShowProperty callback", () => {
  Serializer.addProperty("itemvalue", {
    name: "price:number"
  });
  var dropdownQuestion = new QuestionDropdownModel("q1");
  dropdownQuestion.choices = [1, 2];
  var radiogroupQuestion = new QuestionRadiogroupModel("q2");
  radiogroupQuestion.choices = [1, 2];
  var options: ISurveyCreatorOptions = new EmptySurveyCreatorOptions();
  options.onCanShowPropertyCallback = function (
    obj,
    property,
    showMode: string,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean {
    if (!!parentObj && parentObj.getType() == "dropdown") return true;
    return property.name == "value";
  };
  var propertyGrid1 = new PropertyGridModelTester(dropdownQuestion, options);
  var choicesQuestion1 = <QuestionMatrixDynamicModel>(
    propertyGrid1.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion1).toBeTruthy();
  expect(choicesQuestion1.columns).toHaveLength(3);
  expect(choicesQuestion1.columns[2].title).toEqual("Price");

  var propertyGrid2 = new PropertyGridModelTester(radiogroupQuestion, options);
  var choicesQuestion2 = <QuestionMatrixDynamicModel>(
    propertyGrid2.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion2).toBeTruthy();
  expect(choicesQuestion2.columns).toHaveLength(1);
  expect(choicesQuestion1.columns[0].title).toEqual("Value");
  Serializer.removeProperty("itemvalue", "price");
});
test("SurveyPropertyItemValue columns define in definition", () => {
  Serializer.addProperty("itemvalue", "description");
  SurveyQuestionEditorDefinition.definition["checkbox@choices"] = {
    properties: ["value", "text"]
  };

  var qRadio = new QuestionRadiogroupModel("q1");
  var qCheck = new QuestionCheckboxModel("q2");

  var propertyGrid1 = new PropertyGridModelTester(qRadio);
  var choicesQuestion1 = <QuestionMatrixDynamicModel>(
    propertyGrid1.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion1).toBeTruthy();
  expect(choicesQuestion1.columns).toHaveLength(3);
  expect(choicesQuestion1.columns[2].name).toEqual("description");

  var propertyGrid2 = new PropertyGridModelTester(qCheck);
  var choicesQuestion2 = <QuestionMatrixDynamicModel>(
    propertyGrid2.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion2).toBeTruthy();
  expect(choicesQuestion2.columns).toHaveLength(2);
  delete SurveyQuestionEditorDefinition.definition["checkbox@choices"];
  Serializer.removeProperty("itemvalue", "description");
});
test("SurveyPropertyItemValue columns new localizable property", () => {
  Serializer.addProperty("itemvalue", {
    name: "description",
    isLocalizable: true
  });
  var qRadio = new QuestionRadiogroupModel("q1");
  qRadio.choices = ["item1", "item2"];
  var propertyGrid = new PropertyGridModelTester(qRadio);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.columns).toHaveLength(3);
  var rows = choicesQuestion.visibleRows;
  rows[0].cells[2].value = "new description";
  expect(qRadio.choices[0].description).toEqual("new description");
  Serializer.removeProperty("itemvalue", "description");
});
test("extended SurveyPropertyItemValue + custom property", () => {
  Serializer.addClass("itemvalues_ex", ["imageLink"], null, "itemvalue");
  var property = Serializer.addProperty("question", "test");
  property.type = "itemvalues_ex[]";

  var question = new QuestionTextModel("q1");
  question.choices = ["item1", "item2"];
  var propertyGrid = new PropertyGridModelTester(question);
  var testQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("test")
  );
  expect(testQuestion.columns).toHaveLength(3);

  var actions = testQuestion.getTitleActions();
  var setupAction = findSetupAction(actions);
  expect(setupAction).toBeTruthy();
  expect(setupAction.enabled).toBeTruthy();

  Serializer.removeProperty("itemvalue_ex", "imageLink");
  Serializer.removeProperty("question", "test");
});
test("extended SurveyPropertyItemValue + custom property - process items with custom properties", () => {
  Serializer.addClass("itemvalues_ex", [], null, "itemvalue");
  Serializer.addProperty("itemvalues_ex", "imageLink");
  Serializer.addProperty("text", { name: "test:itemvalues_ex[]" });
  var property = Serializer.findProperty("text", "test");
  property.type = "itemvalues_ex[]";

  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var testQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("test")
  );
  expect(testQuestion.columns).toHaveLength(3);
  testQuestion.addRow();
  testQuestion.addRow();
  var rows = testQuestion.visibleRows;
  rows[0].cells[0].value = "item";
  rows[0].cells[1].value = "2nd";
  rows[0].cells[2].value = "custom1";
  rows[1].cells[0].value = "item2";

  expect(question.test[0].value).toEqual("item");
  expect(question.test[0].imageLink).toEqual("custom1");
  question.test[0].value = "item1";
  expect(rows[0].cells[0].value).toEqual("item1");
  question.test[0].imageLink = "custom";
  expect(rows[0].cells[2].value).toEqual("custom");

  var editor = PropertyGridEditorCollection.getEditor(testQuestion.property);
  expect(editor).toBeTruthy();
  var valueEditor = <PropertyEditorSetupValue>(
    editor.createPropertyEditorSetup(
      question,
      testQuestion.property,
      testQuestion,
      new EmptySurveyCreatorOptions()
    )
  );
  var valueQuestion = valueEditor.editSurvey.getQuestionByName("question");
  expect(valueQuestion.value).toEqual("item1|2nd|custom\nitem2");

  valueQuestion.value = "item|2nd|custom\nitem2|2nd2|custom2";
  valueEditor.apply();
  rows = testQuestion.visibleRows;
  expect(rows[1].cells[0].value).toEqual("item2");
  expect(rows[1].cells[1].value).toEqual("2nd2");
  expect(rows[1].cells[2].value).toEqual("custom2");

  Serializer.removeProperty("text", "test");
  Serializer.removeProperty("itemvalues_ex", "imageLink");
  Serializer.removeClass("itemvalues_ex");
});
test("SurveyPropertyItemValuesEditor + locale", () => {
  var survey = new SurveyModel();
  var p = survey.addNewPage();
  var question = <QuestionDropdownModel>p.addNewQuestion("dropdown", "q1");
  question.choices = [1, 2, 3];
  survey.locale = "en";
  question.choices[0].text = "English 1";
  survey.locale = "de";
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var rows = choicesQuestion.visibleRows;
  expect(rows[0].cells[1].value).toEqual("English 1");
  rows[0].cells[1].value = "Deutsch 1";
  survey.locale = "en";
  expect(question.choices[0].text).toEqual("English 1");
  survey.locale = "de";
  expect(question.choices[0].text).toEqual("Deutsch 1");
  expect(rows[0].cells[1].value).toEqual("Deutsch 1");
  survey.locale = "en";
});
test("SurveyPropertyDropdownColumnsEditor + locale, bug#1285", () => {
  var survey = new SurveyModel();
  var p = survey.addNewPage();
  var question = <QuestionMatrixDynamicModel>(
    p.addNewQuestion("matrixdynamic", "q1")
  );
  question.addColumn("col1");
  survey.locale = "en";
  question.columns[0].title = "English 1";

  survey.locale = "de";
  var propertyGrid = new PropertyGridModelTester(question);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  var rows = columnsQuestion.visibleRows;
  expect(rows[0].getQuestionByColumnName("title").value).toEqual("English 1");
  rows[0].getQuestionByColumnName("title").value = "Deutsch 1";
  survey.locale = "en";
  expect(question.columns[0].title).toEqual("English 1");
  survey.locale = "de";
  expect(question.columns[0].title).toEqual("Deutsch 1");
  survey.locale = "en";
});
test("SurveyNestedPropertyEditorEditorCell + property editor", () => {
  var property = Serializer.addProperty("itemvalue", "testBoolean:boolean");
  var question = new QuestionRadiogroupModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.columns).toHaveLength(3);
  expect(choicesQuestion.columns[2].cellType).toEqual("boolean");
  Serializer.removeProperty("itemvalue", "testBoolean");
});
test("SurveyNestedPropertyEditorItem", () => {
  var question = new QuestionRadiogroupModel("q1");
  question.choices.push(new ItemValue(null));
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var rows = choicesQuestion.visibleRows;
  expect(choicesQuestion.hasErrors()).toBeTruthy();
  expect(rows).toHaveLength(1);
  rows[0].cells[0].value = "item1";
  expect(question.choices[0].value).toEqual("item1");
  expect(choicesQuestion.hasErrors()).toBeFalsy();
});
test("SurveyPropertyMatrixDropdownColumns set properties", (): any => {
  var question = new QuestionMatrixDropdownModel("q1");
  question.columns.push(new MatrixDropdownColumn("column 1"));
  question.columns.push(new MatrixDropdownColumn("column 2"));
  question.columns[0]["choices"] = [1, 2, "three"];
  var propertyGrid = new PropertyGridModelTester(question);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  expect(columnsQuestion.columns).toHaveLength(3);
  var rows = columnsQuestion.visibleRows;
  expect(rows[0].getQuestionByColumnName("name").value).toEqual("column 1");
  columnsQuestion.addRow();
  expect(question.columns).toHaveLength(3);
  rows = columnsQuestion.visibleRows;
  expect(rows[2].getQuestionByColumnName("name").value).toEqual("column 3");
  rows[2].getQuestionByColumnName("name").value = "column 5";
  expect(question.columns).toHaveLength(3);
  expect(question.columns[2].name).toEqual("column 5");
});
test("SurveyPropertyMatrixDropdownColumns change columns", () => {
  var saveProperties =
    SurveyQuestionEditorDefinition.definition.matrixdropdowncolumn.properties;

  SurveyQuestionEditorDefinition.definition.matrixdropdowncolumn.properties = [
    "cellType",
    "name",
    "readOnly"
  ];
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("column 1");
  question.addColumn("column 2");
  var propertyGrid = new PropertyGridModelTester(question);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  expect(columnsQuestion.columns).toHaveLength(3);
  expect(columnsQuestion.columns[2].name).toEqual("readOnly");

  SurveyQuestionEditorDefinition.definition.matrixdropdowncolumn.properties =
    saveProperties;
});
test("SurveyPropertyMatrixDropdownColumns use question editor", () => {
  var survey = new SurveyModel();
  survey.addNewPage("p");
  var question = new QuestionMatrixDropdownModel("q1");
  question.addColumn("column 1");
  question.addColumn("column 2");
  survey.pages[0].addElement(question);
  var propertyGrid = new PropertyGridModelTester(question);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  var rows = columnsQuestion.visibleRows;
  var actions = [];
  propertyGrid.survey.getUpdatedMatrixRowActions(
    columnsQuestion,
    rows[0],
    actions
  );
  actions[0].action();
  expect(propertyGrid.survey.getQuestionByName("cellType")).toBeTruthy();
  propertyGrid.survey.getQuestionByName("cellType").value = "dropdown";
  expect(question.columns[0].cellType).toEqual("dropdown");
});
test("SurveyPropertyMatrixDropdownColumns change cell koValue on changing value in detail form ", () => {
  var survey = new SurveyModel();
  survey.addNewPage("p");
  var question = new QuestionMatrixDropdownModel("q1");
  question.addColumn("column 1");
  question.addColumn("column 2");
  survey.pages[0].addElement(question);
  var propertyGrid = new PropertyGridModelTester(question);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  var rows = columnsQuestion.visibleRows;
  var actions = [];
  propertyGrid.survey.getUpdatedMatrixRowActions(
    columnsQuestion,
    rows[0],
    actions
  );
  actions[0].action();
  propertyGrid.survey.getQuestionByName("cellType").value = "dropdown";
  expect(question.columns[0].cellType).toEqual("dropdown");
  propertyGrid.survey.getQuestionByName("title").value = "Title 1";
  expect(question.columns[0].title).toEqual("Title 1");
  question.columns[0].title = "Title 11";
  expect(propertyGrid.survey.getQuestionByName("title").value).toEqual(
    "Title 11"
  );
});
test("SurveyPropertyMatrixDropdownColumns show error on setting same column name", () => {
  expect(
    Serializer.findProperty("matrixdropdowncolumn", "name").isUnique
  ).toBeTruthy();
  var question = new QuestionMatrixDropdownModel("q1");
  question.addColumn("column1");
  question.addColumn("column2");
  expect(question.columns).toHaveLength(2);
  var propertyGrid = new PropertyGridModelTester(question);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  expect(columnsQuestion.emptyRowsText).toEqual("Add a new item");
  expect(columnsQuestion.getColumnByName("name").isUnique).toBeTruthy();
  var rows = columnsQuestion.visibleRows;
  expect(rows[1].getQuestionByColumnName("name").value).toEqual("column2");
  columnsQuestion.addRow();
  expect(question.columns).toHaveLength(3);
  rows = columnsQuestion.visibleRows;
  expect(question.columns[2].name).toEqual("column3");
  var column3Name = rows[2].getQuestionByColumnName("name");
  column3Name.value = "column2";
  expect(question.columns[2].name).toEqual("column3");
  expect(column3Name.errors).toHaveLength(1);
  column3Name.value = "column1";
  expect(question.columns[2].name).toEqual("column3");
  expect(column3Name.errors).toHaveLength(1);
  expect(column3Name.errors[0].getText()).toEqual(
    "Please enter a unique value"
  );
  column3Name.value = "column3";
  expect(question.columns[2].name).toEqual("column3");
  expect(column3Name.errors).toHaveLength(0);
  column3Name.value = "column4";
  expect(question.columns[2].name).toEqual("column4");
  expect(column3Name.errors).toHaveLength(0);
});
test("editor base check for unique property value", () => {
  var question = new QuestionMatrixDropdownModel("q1");
  question.addColumn("column1");
  question.addColumn("column2");
  question.addColumn("column3");

  var propertyGrid = new PropertyGridModelTester(question);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  var rows = columnsQuestion.visibleRows;
  var column2Name = rows[1].getQuestionByColumnName("name");
  expect(column2Name.value).toEqual("column2");
  column2Name.value = "column1";
  expect(column2Name.errors).toHaveLength(1);
  column2Name.value = "column3";
  expect(column2Name.errors).toHaveLength(1);
  column2Name.value = "column2";
  expect(column2Name.errors).toHaveLength(0);
  column2Name.value = "column4";
  expect(column2Name.errors).toHaveLength(0);
  column2Name.value = "";
  expect(column2Name.errors).toHaveLength(1);
  expect(question.columns[1].name).toEqual("column4");
});

test("SurveyPropertyMatrixDropdownColumns property editors in the cell should be readonly if parent property is readOnly", () => {
  var property = Serializer.findProperty("matrixdropdownbase", "columns");
  property.readOnly = true;
  var question = new QuestionMatrixDropdownModel("q1");
  question.addColumn("column1");
  question.addColumn("column2");
  expect(question.columns).toHaveLength(2);
  var propertyGrid = new PropertyGridModelTester(question);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  expect(columnsQuestion.isReadOnly).toBeTruthy();
  property.readOnly = false;
});
test("SurveyPropertyItemValuesEditor check if there are visibleIf and enableIf properties in detail form", () => {
  var question = new QuestionCheckboxModel("q1");
  question.choices = [{ value: 1, text: "item1" }];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var rows = choicesQuestion.visibleRows;
  expect(rows).toHaveLength(1);
  rows[0].showDetailPanel();
  expect(rows[0].getQuestionByName("visibleIf").isVisible).toBeTruthy();
  expect(rows[0].getQuestionByName("enableIf").isVisible).toBeTruthy();
});
/* TODO
QUnit.test(
    "SurveyPropertyMatrixDropdownColumns change nested property content on changing column type",
    function (assert) {
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
      var colDetailEditor = <SurveyElementEditorContentModel>(
        columnsEditor.koEditItem().itemEditor
      );
      assert.ok(colDetailEditor.getPropertyEditorByName("choices"));
      columnsEditor.onReturnToListClick();
  
      itemViewModel.obj.cellType = "default";
      columnsEditor.onEditItemClick(itemViewModel);
      colDetailEditor = <SurveyElementEditorContentModel>(
        columnsEditor.koEditItem().itemEditor
      );
      assert.notOk(colDetailEditor.getPropertyEditorByName("choices"));
    }
  );
  */
test("SurveyNestedPropertyEditorItem koCanDeleteItem", () => {
  var survey = new SurveyModel();
  survey.addNewPage("p");
  var question = new QuestionMatrixDropdownModel("q1");
  question.addColumn("column 1");
  question.addColumn("column 2");
  survey.pages[0].addElement(question);
  var options = new EmptySurveyCreatorOptions();
  var allowDeleteItem = true;
  options.onCanDeleteItemCallback = (
    object: any,
    item: Base,
    allowDelete: boolean
  ) => allowDeleteItem;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  expect(
    columnsQuestion.canRemoveRow(columnsQuestion.visibleRows[0])
  ).toBeTruthy();
  allowDeleteItem = false;
  expect(
    columnsQuestion.canRemoveRow(columnsQuestion.visibleRows[0])
  ).toBeFalsy();
});
test("SurveyNestedPropertyEditorItem edit boolean column", () => {
  var survey = new SurveyModel();
  survey.addNewPage("p");
  var question = new QuestionMatrixDropdownModel("q1");
  question.addColumn("column 1");
  question.addColumn("column 2");
  question.columns[1].cellType = "boolean";
  survey.pages[0].addElement(question);
  var propertyGrid = new PropertyGridModelTester(question);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  var rows = columnsQuestion.visibleRows;
  var actions = [];
  propertyGrid.survey.getUpdatedMatrixRowActions(
    columnsQuestion,
    rows[1],
    actions
  );
  actions[0].action();
  expect(
    propertyGrid.survey.getQuestionByName("defaultValue").isVisible
  ).toBeTruthy();
  expect(
    propertyGrid.survey.getQuestionByName("labelTrue").isVisible
  ).toBeTruthy();
});
test("SurveyPropertyPagesEditor two columns and no editing", () => {
  var survey = new SurveyModel();
  survey.addNewPage("p1");

  var propertyGrid = new PropertyGridModelTester(survey);
  var pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  expect(pagesQuestion.columns).toHaveLength(2);
  expect(
    pagesQuestion.hasDetailPanel(pagesQuestion.visibleRows[0])
  ).toBeFalsy();
});
test("SurveyPropertyPagesEditor add page", () => {
  var survey = new SurveyModel();
  survey.addNewPage("p1");

  var propertyGrid = new PropertyGridModelTester(survey);
  var pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  var rows = pagesQuestion.visibleRows;
  pagesQuestion.addRow();
  expect(survey.pages).toHaveLength(2);
  expect(survey.pages[1].name).toEqual("p2");
});

test("SurveyPropertyPagesEditor koCanDeleteItem + options.", () => {
  var survey = new SurveyModel();
  survey.setDesignMode(true);
  survey.addNewPage("page1");
  var options = new EmptySurveyCreatorOptions();
  var allowDeleteAll = false;
  options.onCanDeleteItemCallback = (
    object: any,
    item: Base,
    allowDelete: boolean
  ) => {
    if (item.getType() !== "page") return allowDelete;
    if (allowDeleteAll) return true;
    return allowDelete;
  };
  var propertyGrid = new PropertyGridModelTester(survey, options);
  var pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  survey.currentPage = survey.pages[0];
  expect(pagesQuestion.canRemoveRow(pagesQuestion.visibleRows[0])).toBeFalsy();
  survey.addNewPage("page2");
  survey.currentPage = survey.pages[0];
  expect(pagesQuestion.canRemoveRow(pagesQuestion.visibleRows[1])).toBeTruthy();
  expect(pagesQuestion.canRemoveRow(pagesQuestion.visibleRows[0])).toBeFalsy();
  allowDeleteAll = true;
  expect(pagesQuestion.canRemoveRow(pagesQuestion.visibleRows[0])).toBeTruthy();
});

test("SurveyPropertyPagesEditor koCanDeleteItem + options.", () => {
  var survey = new SurveyModel();
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  survey.addNewPage("page3");
  var options = new EmptySurveyCreatorOptions();
  options.onCollectionItemDeletingCallback = (
    obj: Base,
    property: JsonObjectProperty,
    collection: Array<Base>,
    item: Base
  ): boolean => {
    //check all properties
    return (
      item["name"] == "page3" &&
      property.name == "pages" &&
      collection.length == 3 &&
      obj.getType() == "survey"
    );
  };
  var propertyGrid = new PropertyGridModelTester(survey, options);
  var pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  survey.currentPage = survey.pages[0];
  expect(pagesQuestion.canRemoveRow(pagesQuestion.visibleRows[1])).toBeFalsy();
  expect(pagesQuestion.canRemoveRow(pagesQuestion.visibleRows[2])).toBeTruthy();
});

test("SurveyPropertyPagesEditor custom loc item for 'add item'.", () => {
  var survey = new SurveyModel();
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  var propertyGrid = new PropertyGridModelTester(survey);
  var pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  expect(pagesQuestion.addRowText).toEqual("Add New");

  defaultStrings.pe["addNew@pages"] = "Add New Page";
  propertyGrid = new PropertyGridModelTester(survey);
  pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  expect(pagesQuestion.addRowText).toEqual("Add New Page");

  delete defaultStrings.pe["addNew@pages"];
});

test("SurveyPropertyPagesEditor show Pages Editor for Page object", () => {
  Serializer.addProperty("page", {
    name: "pages:surveypages",
    className: "page",
    category: "general",
    displayName: "Page order",
    onGetValue: function (obj) {
      return !!obj && !!obj.survey ? obj.survey.pages : [];
    },
    onSetValue: function (obj) {
      //Do nothing
    },
    isSerializable: false
  });
  SurveyQuestionEditorDefinition.definition["page@page"] = {
    properties: ["name"]
  };
  var survey = new SurveyModel();
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  survey.addNewPage("page3");
  survey.currentPage = survey.pages[0];
  var propertyGrid = new PropertyGridModelTester(survey.pages[0]);
  var pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  expect(pagesQuestion.columns).toHaveLength(1);
  expect(pagesQuestion.columns[0].name).toEqual("name");
  expect(pagesQuestion.visibleRows).toHaveLength(3);
  pagesQuestion.addRow();
  pagesQuestion.addRow();
  expect(survey.pages).toHaveLength(5);
  expect(survey.pages[4].name).toEqual("page5");
  Serializer.removeProperty("page", "pages");
});

test("Change displayName for existing property. It should have higher priority than localization", () => {
  var prop = Serializer.findProperty("question", "visible");
  prop.displayName = "My is visible?";
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var visibleQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("visible")
  );
  expect(visibleQuestion.title).toEqual("My is visible?");
  prop.displayName = null;
  propertyGrid = new PropertyGridModelTester(question);
  visibleQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("visible")
  );
  expect(visibleQuestion.title).toEqual("Is visible?");
});

test("SurveyPropertyResultfullEditor test", () => {
  var question = new QuestionCheckboxModel("q1");
  question.choicesByUrl.url = "url1";
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesByUrlQuestion = <QuestionCompositeModel>(
    propertyGrid.survey.getQuestionByName("choicesByUrl")
  );
  var panel = choicesByUrlQuestion.contentPanel;
  expect(panel.getQuestionByName("url").value).toEqual("url1");
  panel.getQuestionByName("path").value = "path1";
  expect(question.choicesByUrl.path).toEqual("path1");
});

test("Triggers property editor", () => {
  var survey = createSurvey();
  survey.getQuestionByName("question1").title = "Question1 title";
  var trigger = new SurveyTriggerVisible();
  trigger.expression = "{question1} != val1";
  trigger.questions.push("question2");
  survey.triggers.push(trigger);
  var options = new EmptySurveyCreatorOptions();
  options.showTitlesInExpressions = true;
  var propertyGrid = new PropertyGridModelTester(survey, options);
  var triggersQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("triggers")
  );
  expect(triggersQuestion.columns).toHaveLength(1);
  expect(triggersQuestion.columns[0].name).toEqual("triggerType");
  var rows = triggersQuestion.visibleRows;
  expect(rows).toHaveLength(1);
  var triggerTypes =
    Serializer.getChildrenClasses("surveytrigger", true).length - 1;

  expect(rows[0].getQuestionByColumnName("triggerType").choices).toHaveLength(
    triggerTypes
  );
  /* TODO not implmeneted yet
    assert.equal(
      propEditor.getItemText(propEditor.koSelected()),
      "Run if: {Question1 title} != val1",
      "display text shows correctly"
    );
  
    propEditor.onAddClick({ value: "skiptrigger" });
    assert.equal(survey.triggers.length, 2, "There are two triggers now");
  
    var trigerEditor = <SurveyElementEditorContentModel>(
      propEditor.selectedObjectEditor()
    );
    trigerEditor
      .getPropertyEditorByName("expression")
      .editor.koValue("{question2} notempty");
    assert.equal(
      propEditor.getItemText(propEditor.koSelected()),
      "Run if: {question2} is not empty",
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
    trigerEditor = <SurveyElementEditorContentModel>(
      propEditor.selectedObjectEditor()
    );
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
    */
});
test("Triggers property editor and setvalue trigger", () => {
  var survey = createSurvey();
  var trigger = new SurveyTriggerSetValue();
  trigger.expression = "{question1} != 'val1'";
  survey.triggers.push(trigger);
  var propertyGrid = new PropertyGridModelTester(survey);
  var triggersQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("triggers")
  );
  var rows = triggersQuestion.visibleRows;
  expect(rows).toHaveLength(1);
  rows[0].showDetailPanel();
  var panel = rows[0].detailPanel;
  var setToNameQuestion = <QuestionDropdownModel>(
    panel.getQuestionByName("setToName")
  );
  var setValueQuestion = panel.getQuestionByName("setValue");
  expect(setValueQuestion.isVisible).toBeFalsy();
  expect(setToNameQuestion.choices).toHaveLength(
    survey.getAllQuestions().length
  );
  expect(setToNameQuestion.choices[0].text).toEqual("question1");
  setToNameQuestion.value = "question1";
  expect(survey.triggers[0]["setToName"]).toEqual("question1");
  var expressionQuestion = panel.getQuestionByName("expression");
  expect(expressionQuestion.isVisible).toBeTruthy();
  expect(setValueQuestion.isVisible).toBeTruthy();
  setToNameQuestion.value = "question2";
  setValueQuestion.value = ["one", "two"];
  expect(survey.triggers[0]["setValue"]).toHaveLength(2);
  expect(survey.triggers[0]["setValue"][0]).toEqual("one");
  setToNameQuestion.value = "";
  expect(survey.triggers[0]["setToName"]).toEqual("question2");
});
test("'set' property editor", () => {
  Serializer.addProperty("survey", {
    name: "region:set",
    choices: ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  });
  var survey = createSurvey();
  var propertyGrid = new PropertyGridModelTester(survey);
  var setQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("region")
  );
  expect(setQuestion.getType()).toEqual("checkbox");
  expect(setQuestion.choices).toHaveLength(5);
  Serializer.removeProperty("survey", "region");
});

test("'set' property editor, get choices on callback, Bug#720", () => {
  var choices = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  var callback = null;
  Serializer.addProperty("survey", {
    name: "region:set",
    choices: function (obj, choicesCallback) {
      callback = choicesCallback;
      return [];
    }
  });
  var survey = createSurvey();
  var propertyGrid = new PropertyGridModelTester(survey);
  var setQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("region")
  );
  expect(setQuestion.choices).toHaveLength(0);
  callback(choices);
  expect(setQuestion.choices).toHaveLength(5);
  Serializer.removeProperty("survey", "region");
});

test("Validators property editor", () => {
  var survey = createSurvey();
  var validator = new NumericValidator(10, 100);
  validator.text = "validatortext";
  var question = <Question>survey.getQuestionByName("question1");
  question.validators.push(validator);
  var propertyGrid = new PropertyGridModelTester(question);
  var validatorsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("validators")
  );
  var rows = validatorsQuestion.visibleRows;
  expect(rows).toHaveLength(1);
  expect(rows[0].cells[0].question.choices.length > 1).toBeTruthy();
  expect(rows[0].cells[0].value).toEqual("numericvalidator");
  validatorsQuestion.addRow();
  expect(rows[1].cells[0].value).toEqual("expressionvalidator");
  rows[1].cells[0].value = "textvalidator";
  expect(question.validators).toHaveLength(2);
  validatorsQuestion.addRow();
  expect(question.validators).toHaveLength(3);
  validatorsQuestion.removeRowUI(2);
  expect(question.validators).toHaveLength(2);
  validatorsQuestion.removeRowUI(0);
  validatorsQuestion.removeRowUI(0);
  expect(question.validators).toHaveLength(0);
});
test("Validators property editor - custom property, Bug: https://surveyjs.answerdesk.io/ticket/details/T2537", () => {
  Serializer.addProperty("surveyvalidator", "validationType");

  var survey = createSurvey();
  var validator = new NumericValidator(10, 100);
  validator["validationType"] = "Error";
  validator.text = "validatortext";
  var question = survey.getQuestionByName("question1");
  question.validators.push(validator);
  var propertyGrid = new PropertyGridModelTester(question);
  var validatorsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("validators")
  );
  var rows = validatorsQuestion.visibleRows;
  rows[0].showDetailPanel();
  var panel = rows[0].detailPanel;
  var textQuestion = panel.getQuestionByName("text");
  expect(textQuestion.value).toEqual("validatortext");
  var validationTypeQuestion = panel.getQuestionByName("validationType");
  expect(validationTypeQuestion.value).toEqual("Error");
  Serializer.removeProperty("surveyvalidator", "validationType");
});
test("Validators property editor update existing validator property - https://surveyjs.answerdesk.io/ticket/details/T2058", () => {
  var survey = createSurvey();
  var validator = new NumericValidator(10, 100);
  validator.text = "validatortext";
  var question = survey.getQuestionByName("question1");
  question.validators.push(validator);
  var propertyGrid = new PropertyGridModelTester(question);
  var validatorsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("validators")
  );
  var rows = validatorsQuestion.visibleRows;
  expect(rows).toHaveLength(1);
  expect(rows[0].cells[0].question.choices.length > 1).toBeTruthy();
  expect(rows[0].cells[0].value).toEqual("numericvalidator");
  rows[0].showDetailPanel();
  var panel = rows[0].detailPanel;
  var maxValueQuestion = panel.getQuestionByName("maxValue");
  expect(maxValueQuestion.value).toEqual(100);
  maxValueQuestion.value = 101;
  expect(question.validators[0]["maxValue"]).toEqual(101);
});

test("minValue doesn't work when it is 0, Bug #687", () => {
  Serializer.addProperty("question", {
    name: "decimalPlaces:number",
    default: 0,
    minValue: 0,
    maxValue: 5,
    category: "validation",
    visibleIndex: 0
  });

  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var decimalPlacesQuestion = <QuestionTextModel>(
    propertyGrid.survey.getQuestionByName("decimalPlaces")
  );
  expect(decimalPlacesQuestion.getType()).toEqual("text");
  expect(decimalPlacesQuestion.inputType).toEqual("number");
  expect(decimalPlacesQuestion.min).toEqual(0);
  expect(decimalPlacesQuestion.max).toEqual(5);
  expect(decimalPlacesQuestion.value).toEqual(0);
  decimalPlacesQuestion.value = -5;
  expect(question.decimalPlaces).toEqual(0);
  decimalPlacesQuestion.value = 2;
  expect(question.decimalPlaces).toEqual(2);
  decimalPlacesQuestion.value = 6;
  expect(question.decimalPlaces).toEqual(2);
  decimalPlacesQuestion.value = 5;
  expect(question.decimalPlaces).toEqual(5);
  Serializer.removeProperty("question", "decimalPlaces");
});

test("automicatilly create name for new item in SurveyPropertyTextItemsEditor", () => {
  var question = new QuestionMultipleTextModel("q1");
  question.addItem("text1");
  question.addItem("text2");
  var propertyGrid = new PropertyGridModelTester(question);
  var itemsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("items")
  );
  var rows = itemsQuestion.visibleRows;
  itemsQuestion.addRow();
  expect(question.items).toHaveLength(3);
  expect(question.items[2].name).toEqual("text3");
});
test("be able to modify empty items, bug#428", () => {
  var question = new QuestionMultipleTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var itemsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("items")
  );
  itemsQuestion.addRow();
  expect(question.items).toHaveLength(1);
  expect(question.items[0].name).toEqual("item1");
});
test("onPropertyValueChanging callback, Bug #438", () => {
  var question = new QuestionTextModel("q1");
  var options = new EmptySurveyCreatorOptions();
  options.onValueChangingCallback = function (options) {
    options.newValue = options.newValue.trim();
  };
  var propertyGrid = new PropertyGridModelTester(question, options);
  var titleQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("title")
  );
  titleQuestion.value = " ss   ";
  expect(question.title).toEqual("ss");
});
test("onPropertyValueChanging callback, set empty string, Bug#1158", () => {
  var question = new QuestionTextModel("q1");
  var options = new EmptySurveyCreatorOptions();
  options.onValueChangingCallback = function (options) {
    options.newValue = options.newValue.trim();
  };
  var propertyGrid = new PropertyGridModelTester(question, options);
  var titleQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("name")
  );
  titleQuestion.value = "  ";
  expect(titleQuestion.errors).toHaveLength(1);
  expect(question.name).toEqual("q1");
});
/* TODO fix
test("SurveyPropertyItemValuesEditor + item.koShowDetails", () => {
  var survey = new SurveyModel();
  var p = survey.addNewPage();
  var question = <QuestionDropdownModel>p.addNewQuestion("dropdown", "q1");
  question.choices = [1, 2, 3];
  survey.locale = "en";
  question.choices[0].text = "English 1";
  var tabs =
    SurveyQuestionEditorDefinition.definition["itemvalue[]@choices"].tabs;
  SurveyQuestionEditorDefinition.definition["itemvalue[]@choices"].tabs = [
    { name: "general", visible: false },
  ];

  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(
    choicesQuestion.hasDetailPanel(choicesQuestion.visibleRows[0])
  ).toBeFalsy();
  SurveyQuestionEditorDefinition.definition["itemvalue[]@choices"].tabs = tabs;
});
*/
test("SurveyPropertyItemValuesEditor + item.koShowDetails + make properties invisible", () => {
  var survey = new SurveyModel();
  var p = survey.addNewPage();
  var question = <QuestionDropdownModel>p.addNewQuestion("dropdown", "q1");
  question.choices = [1, 2, 3];

  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var rows = choicesQuestion.visibleRows;
  rows[0].showDetailPanel();
  var panel = rows[0].detailPanel;
  expect(panel.getQuestionByName("visibleIf").isVisible).toBeTruthy();
  expect(panel.getQuestionByName("enableIf").isVisible).toBeTruthy();

  Serializer.findProperty("itemvalue", "visibleIf").visible = false;
  Serializer.findProperty("itemvalue", "enableIf").visible = false;
  propertyGrid = new PropertyGridModelTester(question);
  choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  rows = choicesQuestion.visibleRows;
  rows[0].showDetailPanel();
  panel = rows[0].detailPanel;
  expect(panel.getQuestionByName("value").isVisible).toBeTruthy();
  expect(panel.getQuestionByName("visibleIf")).toBeFalsy();
  expect(panel.getQuestionByName("enableIf")).toBeFalsy();
  Serializer.findProperty("itemvalue", "visibleIf").visible = true;
  Serializer.findProperty("itemvalue", "enableIf").visible = true;
});
test("SurveyPropertyItemValuesEditor + koShowHeader", () => {
  var survey = new SurveyModel();
  var p = survey.addNewPage();
  var question = <QuestionDropdownModel>p.addNewQuestion("dropdown", "q1");
  question.choices = [1, 2, 3];

  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.showHeader).toBeFalsy(); //according to design header is not shown for item values editor

  Serializer.findProperty("itemvalue", "text").visible = false;
  propertyGrid = new PropertyGridModelTester(question);
  choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.showHeader).toBeFalsy();
  Serializer.findProperty("itemvalue", "text").visible = false;
});
test("SurveyPropertyCalculatedValueEditor", () => {
  var survey = new SurveyModel();
  var propertyGrid = new PropertyGridModelTester(survey);
  var calculatedValuesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("calculatedValues")
  );
  calculatedValuesQuestion.addRow();

  expect(survey.calculatedValues).toHaveLength(1);
  var rows = calculatedValuesQuestion.visibleRows;
  expect(rows[0].getQuestionByColumnName("name").value).toEqual("var1");
  expect(survey.calculatedValues[0].name).toEqual("var1");
  rows[0].showDetailPanel();
  var panel = rows[0].detailPanel;
  panel.getQuestionByName("name").value = "var11";
  panel.getQuestionByName("expression").value = "{q1} = 1";
  expect(survey.calculatedValues[0].name).toEqual("var11");
  expect(survey.calculatedValues[0].expression).toEqual("{q1} = 1");
});
test("SurveyPropertyCalculatedValueEditor as propertyItemsEditor, syncronize it with the real object", () => {
  var survey = new SurveyModel();
  var propertyGrid = new PropertyGridModelTester(survey);
  var calculatedValuesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("calculatedValues")
  );
  calculatedValuesQuestion.addRow();
  expect(survey.calculatedValues).toHaveLength(1);
  expect(survey.calculatedValues[0].name).toEqual("var1");
  calculatedValuesQuestion.addRow();
  expect(survey.calculatedValues).toHaveLength(2);
  expect(survey.calculatedValues[1].name).toEqual("var2");
});
test("SurveyElementEditorContentModel do not allow empty value for a unique property", () => {
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var nameQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("name")
  );
  expect(nameQuestion.value).toEqual("q1");
  nameQuestion.value = "";
  expect(question.name).toEqual("q1");
  nameQuestion.value = "q2";
  expect(question.name).toEqual("q2");
});

test("expression editor in question expression validator should has access to survey", () => {
  PropertyGridEditorCollection.register(new PropertyGridEditorCondition());
  var survey = new SurveyModel();
  survey.addNewPage("p");
  var question = <QuestionTextModel>(
    survey.pages[0].addNewQuestion("text", "q1")
  );
  survey.pages[0].addNewQuestion("text", "q2");
  survey.pages[0].addNewQuestion("text", "q3");
  var propertyGrid = new PropertyGridModelTester(question);
  var validatorsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("validators")
  );

  validatorsQuestion.addRow();
  var rows = validatorsQuestion.visibleRows;
  expect(rows[0].getQuestionByColumnName("validatorType").value).toEqual(
    "expressionvalidator"
  );
  expect(question.validators).toHaveLength(1);
  rows[0].showDetailPanel();
  var expressionQuestion = rows[0].detailPanel.getQuestionByName("expression");
  expect(expressionQuestion.isVisible).toBeTruthy();
  var actions = expressionQuestion.getTitleActions();
  var setupAction = findSetupAction(actions);
  expect(setupAction).toBeTruthy();

  var propEditor = PropertyGridEditorCollection.getEditor(
    expressionQuestion.property
  );

  var conditionEditor = <ConditionEditor>(
    propEditor.createPropertyEditorSetup(
      question.validators[0],
      expressionQuestion.property,
      expressionQuestion,
      new EmptySurveyCreatorOptions()
    )
  );
  expect(conditionEditor.survey).toBeTruthy();
  expect(conditionEditor.survey.getAllQuestions()).toHaveLength(3);
});

test("SurveyHelper.applyItemValueArray", () => {
  var q1 = new QuestionDropdownModel("q1");
  var q2 = new QuestionDropdownModel("q1");
  q1.choices = [1];
  FastEntryEditor.applyItemValueArray(q1.choices, null);
  expect(q1.choices).toHaveLength(0);
  q1.choices = [1];
  q2.choices = [];
  FastEntryEditor.applyItemValueArray(q1.choices, q2.choices);
  expect(q1.choices).toHaveLength(0);
  var testSetFunc = function (val1: Array<any>, val2: Array<any>, num: number) {
    q1.choices = val1;
    q2.choices = val2;
    FastEntryEditor.applyItemValueArray(q1.choices, q2.choices);
    expect(q1.toJSON()).toEqual(q2.toJSON());
  };
  testSetFunc([1, 2, 3], [1, 2, 4], 1);
  testSetFunc([1, 2, 3], [1, 2, 4, 5], 2);
  testSetFunc([1, 2, 3], [0, 1, 2, 3], 3);
  testSetFunc([1, 2, 3], [1, 4, 3], 4);
  testSetFunc([1, 2, 3], [1, 2, 3, 4, 5, 6], 5);
  testSetFunc([1, 2, 3, 4, 5, 6], [1, 2, 3], 6);
  testSetFunc(
    [1, 2, 3],
    [1, { value: 2, text: "item 2" }, { value: 4, text: "item 4" }],
    7
  );
  testSetFunc([1, 2, 2, 3, 4, 5, 6], [1, 2, 2, 3], 8);
  testSetFunc([1, 2, 3, 4, 2, 5, 6], [1, 2, 3, 2], 9);
  testSetFunc(
    [1, 2, 13, 14, 5, 6],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    10
  );
});

test("property editor propertyHelpText", () => {
  PropertiesHelpTexts.instance.reset();
  var survey = new SurveyModel();
  survey.addNewPage("p");
  var question = survey.pages[0].addNewQuestion("text", "q1");
  var curStrings = editorLocalization.getLocale("");
  curStrings.pehelp.title = "Common Title";
  curStrings.pehelp.survey_title = "Survey Title";
  curStrings.pehelp.page_title = "Page Title";
  curStrings.pehelp.question_title = "Question Title";
  var propertyGrid = new PropertyGridModelTester(question);
  var titleQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("title")
  );
  expect(titleQuestion.description).toEqual("Question Title");

  propertyGrid = new PropertyGridModelTester(survey.pages[0]);
  titleQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("title")
  );
  expect(titleQuestion.description).toEqual("Page Title");

  propertyGrid = new PropertyGridModelTester(survey);
  titleQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("title")
  );
  expect(titleQuestion.description).toEqual("Survey Title");

  delete curStrings.pehelp["page_title"];
  PropertiesHelpTexts.instance.reset();
  propertyGrid = new PropertyGridModelTester(survey.pages[0]);
  titleQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("title")
  );
  expect(titleQuestion.description).toEqual("Common Title");
  propertyGrid = new PropertyGridModelTester(question);
  var defaultValueExpressionQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("defaultValueExpression")
  );
  expect(
    defaultValueExpressionQuestion.description.indexOf(
      "You can use curly brackets"
    ) > -1
  ).toBeTruthy();
});

test("property editor propertyHelpText", () => {
  var tester = new BindingsTester();
  tester.bindings.setBinding("property1", "q1");
  var propertyGrid = new PropertyGridModelTester(tester);
  var bindingsQuestion = <QuestionMatrixDropdownModel>(
    propertyGrid.survey.getQuestionByName("bindings")
  );
  expect(bindingsQuestion.rows).toHaveLength(2);
  var rows = bindingsQuestion.visibleRows;
  var cellQuestion = rows[0].cells[0].question;
  expect(cellQuestion.value).toEqual("q1");
  expect(cellQuestion.choices).toHaveLength(2);
  expect(bindingsQuestion.rows[0].value).toEqual("property1");
  expect(bindingsQuestion.rows[0].text).toEqual("Property 1");
  cellQuestion.value = "q2";
  expect(tester.bindings.getValueNameByPropertyName("property1")).toEqual("q2");
});

test("property text editor dataList attribute", () => {
  var question = new QuestionTextModel("q1");
  question.dataList = ["item1", "item2"];
  var propertyGrid = new PropertyGridModelTester(question);
  var dataListQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("dataList")
  );
  expect(dataListQuestion.value).toEqual("item1\nitem2");
  dataListQuestion.value = "a\nbcd\nitem3";
  expect(question.dataList).toEqual(["a", "bcd", "item3"]);
});

test("SurveyPropertyDefaultValueEditor choicesVisibleIf/EnableIf", () => {
  PropertyGridEditorCollection.register(new PropertyGridValueEditor());
  var question = new QuestionCheckboxModel("q1");
  question.choices = [1, 2, 3];
  question.choicesVisibleIf = "{question1} = 1";
  question.choicesEnableIf = "{question1} = 2";
  var propertyGrid = new PropertyGridModelTester(question);
  var defaultValueQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("defaultValue")
  );
  var propEditor = PropertyGridEditorCollection.getEditor(
    defaultValueQuestion.property
  );
  expect(propEditor).toBeTruthy();

  var defaultValueEditor = <DefaultValueEditor>(
    propEditor.createPropertyEditorSetup(
      question,
      defaultValueQuestion.property,
      defaultValueQuestion,
      new EmptySurveyCreatorOptions()
    )
  );
  expect(defaultValueEditor.editQuestion).toBeTruthy();
  expect(defaultValueEditor.editQuestion.choices).toHaveLength(3);
  expect(defaultValueEditor.editQuestion.visibleChoices).toHaveLength(3);
  expect(defaultValueEditor.editQuestion.choices[0].isEnabled).toBeTruthy();
});

test("SurveyHelper convertTextToItemValues", () => {
  var choices = new Array<ItemValue>();
  var editor = new FastEntryEditor(choices);
  editor.comment.value = "1|One\n2|Two";
  editor.apply();
  expect(choices).toHaveLength(2);
  expect(choices[0].value).toEqual("1");
  expect(choices[0].text).toEqual("One");
  expect(choices[1].value).toEqual("2");
  expect(choices[1].text).toEqual("Two");
});
test("SurveyHelper convertTextToItemValues", () => {
  var choices = new Array<ItemValue>();
  choices.push(new ItemValue(1));
  choices.push(new ItemValue("itemValue", "itemText"));
  choices.push(new ItemValue("2"));

  var editor = new FastEntryEditor(choices);
  expect(editor.comment.value).toEqual("1\nitemValue|itemText\n2");
});

test("SurveyPropertyDefaultValueEditor json properties filtering", () => {
  PropertyGridEditorCollection.register(new PropertyGridValueEditor());
  var question = new QuestionTextModel("q1");
  question.width = "1px";
  question.minWidth = "2%";
  question.maxWidth = "102%";
  question.cellType = "anything";
  question.title = "my title";
  question.titleLocation = "default";
  var propertyGrid = new PropertyGridModelTester(question);
  var defaultValueQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("defaultValue")
  );
  var propEditor = PropertyGridEditorCollection.getEditor(
    defaultValueQuestion.property
  );
  expect(propEditor).toBeTruthy();

  var defaultValueEditor = <DefaultValueEditor>(
    propEditor.createPropertyEditorSetup(
      question,
      defaultValueQuestion.property,
      defaultValueQuestion,
      new EmptySurveyCreatorOptions()
    )
  );
  expect(defaultValueEditor.question).toBeTruthy();
  var json = defaultValueEditor.question.toJSON();

  expect(json.width).toBeFalsy();
  expect(json.minWidth).toBeFalsy();
  expect(json.maxWidth).toBeFalsy();
  expect(json.cellType).toBeFalsy();
  expect(json.title).toEqual("my title");
  expect(json.readOnly).toBeFalsy();
  expect(defaultValueEditor.question.getType()).toEqual("text");
  expect(json.titleLocation).toEqual("hidden");
});

test("SurveyPropertyDefaultValueEditor json expression converted to text", () => {
  PropertyGridEditorCollection.register(new PropertyGridValueEditor());
  Serializer.findProperty("expression", "defaultValue").visible = true;
  var question = new QuestionExpressionModel("q1");
  expect(question.getType()).toEqual("expression");
  var propertyGrid = new PropertyGridModelTester(question);
  var defaultValueQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("defaultValue")
  );
  var propEditor = PropertyGridEditorCollection.getEditor(
    defaultValueQuestion.property
  );
  expect(propEditor).toBeTruthy();

  var defaultValueEditor = <DefaultValueEditor>(
    propEditor.createPropertyEditorSetup(
      question,
      defaultValueQuestion.property,
      defaultValueQuestion,
      new EmptySurveyCreatorOptions()
    )
  );
  expect(defaultValueEditor.question).toBeTruthy();
  expect(defaultValueEditor.question.getType()).toEqual("text");
  Serializer.findProperty("expression", "defaultValue").visible = false;
});
test("SurveyPropertyDefaultValueEditor json cellType overrides type", () => {
  var column = new MatrixDropdownColumn("column 1");
  column.cellType = "boolean";
  expect(column.getType()).toEqual("matrixdropdowncolumn");
  var propertyGrid = new PropertyGridModelTester(column);
  var defaultValueQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("defaultValue")
  );
  expect(defaultValueQuestion).toBeTruthy();
  var propEditor = PropertyGridEditorCollection.getEditor(
    defaultValueQuestion.property
  );
  expect(propEditor).toBeTruthy();

  var defaultValueEditor = <DefaultValueEditor>(
    propEditor.createPropertyEditorSetup(
      column,
      defaultValueQuestion.property,
      defaultValueQuestion,
      new EmptySurveyCreatorOptions()
    )
  );
  expect(defaultValueEditor.question).toBeTruthy();
  expect(defaultValueEditor.question.getType()).toEqual("boolean");
  expect(defaultValueEditor.question.cellType).toBeFalsy();
});

test("SurveyPropertyDefaultValueEditor for matrixdropdown with cellType equals boolean, Bug#1127", () => {
  PropertyGridEditorCollection.register(new PropertyGridValueEditor());
  var question = new QuestionMatrixDropdownModel("q1");
  question.addColumn("col1");
  question.rows = ["row1", "row2"];
  question.cellType = "boolean";
  var propertyGrid = new PropertyGridModelTester(question);
  var defaultValueQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("defaultValue")
  );

  var propEditor = PropertyGridEditorCollection.getEditor(
    defaultValueQuestion.property
  );
  expect(propEditor).toBeTruthy();

  var defaultValueEditor = <DefaultValueEditor>(
    propEditor.createPropertyEditorSetup(
      question,
      defaultValueQuestion.property,
      defaultValueQuestion,
      new EmptySurveyCreatorOptions()
    )
  );
  expect(defaultValueEditor.question).toBeTruthy();
  expect(defaultValueEditor.question.getType()).toEqual("matrixdropdown");
  expect(defaultValueEditor.question.cellType).toEqual("boolean");
});

/* It works out of the box. expression/condition properties editors are comment questions with title actions
test(
    "SurveyPropertyEditorFactory.createEditor, isCellEditor=true, for expression and condition",
     () => {
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
  */

/* TODO Do not have multiple values property editor yet.
QUnit.test("SurveyPropertyMultipleValuesEditor", function (assert) {
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
*/
/* We do not have multiple values editor yet
QUnit.test("SurveyPropertyMultipleValuesEditor - categories ",
    () => {
      Serializer.addProperty("question", {
        name: "multiple:multiplevalues",
        choices: function (obj) {
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
    }
  );
  */
