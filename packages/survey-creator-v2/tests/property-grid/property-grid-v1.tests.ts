import {
  PropertyGridModel,
  PropertyGridEditorCollection,
  PropertyEditorSetupValue,
} from "../../src/property-grid";
import {
  Base,
  QuestionText,
  JsonObjectProperty,
  QuestionTextModel,
  QuestionCheckboxModel,
  QuestionDropdownModel,
  QuestionMatrixDynamicModel,
  PanelModel,
  SurveyModel,
  SurveyTriggerRunExpression,
  ExpressionValidator,
  CalculatedValue,
  HtmlConditionItem,
  QuestionMultipleTextModel,
  UrlConditionItem,
  QuestionCompositeModel,
  ItemValue,
  Question,
  MatrixDropdownColumn,
  SurveyTriggerSetValue,
  QuestionMatrixModel,
  Serializer,
  QuestionPanelDynamicModel,
} from "survey-knockout";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions,
} from "@survey/creator/settings";
import {
  defaultStrings,
  editorLocalization,
} from "@survey/creator/editorLocalization";

export * from "../../src/property-grid/matrices";
export * from "../../src/property-grid/condition";
export * from "../../src/property-grid/restfull";
export * from "../../src/property-grid/fast-entry";

import { CellsEditor } from "../../src/property-grid/cells-survey";
import {
  PropertyGridValueEditor,
  PropertyGridRowValueEditor,
} from "../../src/property-grid/values";
import { assert } from "console";

//PropertyGridEditorCollection.register(new PropertyGridValueEditor());
//PropertyGridEditorCollection.register(new PropertyGridEditorQuestionRestfull());

export class PropertyGridModelTester extends PropertyGridModel {
  constructor(obj: Base, options: ISurveyCreatorOptions = null) {
    PropertyGridEditorCollection.clearHash();
    super(obj, options);
  }
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
    restfull: "propertygrid_restfull",
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
  var question = new QuestionText("q1");
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
      { type: "text", name: "question3" },
    ],
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
      { type: "dropdown", name: "question4" },
    ],
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
      { type: "text", name: "question3" },
    ],
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
    { value: 3, text: "item3" },
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
  var setupAction = actions.find((el) => el.id === "property-grid-setup");
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
  setupAction = actions.find((el) => el.id === "property-grid-setup");
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
  setupAction = actions.find((el) => el.id === "property-grid-setup");
  expect(setupAction).toBeTruthy();
  expect(setupAction.enabled).toBeFalsy();
  Serializer.findProperty("ItemValue", "value").visible = true;
});
test("SurveyPropertyItemValuesEditor - returns error on empty value", () => {
  //TODO
  Serializer.findProperty("ItemValue", "value").isRequired = true;
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
        choices: [{ value: 1, text: { default: "item1", de: "de_item1" } }],
      },
    ],
  });
  survey.locale = "de";
  var question = <QuestionCheckboxModel>survey.getQuestionByName("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var actions = choicesQuestion.getTitleActions();
  var setupAction = actions.find((el) => el.id === "property-grid-setup");
  expect(setupAction).toBeTruthy();
  expect(setupAction.enabled).toBeFalsy();
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
  var setupAction = actions.find((el) => el.id === "property-grid-setup");
  expect(setupAction).toBeTruthy();
  expect(setupAction.enabled).toBeTruthy();

  Serializer.removeProperty("itemvalue", "myImageLink");
});
