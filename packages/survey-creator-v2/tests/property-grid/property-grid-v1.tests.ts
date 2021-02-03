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
  QuestionMatrixDropdownModel,
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
  QuestionRadiogroupModel,
  SurveyTriggerVisible,
} from "survey-knockout";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions,
} from "@survey/creator/settings";
import {
  defaultStrings,
  editorLocalization,
} from "@survey/creator/editorLocalization";
import { SurveyQuestionEditorDefinition } from "@survey/creator/questionEditors/questionEditorDefinition";

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
  var setupAction = actions.find((el) => el.id === "property-grid-setup");
  expect(setupAction).toBeTruthy();
  expect(setupAction.enabled).toBeTruthy();

  Serializer.removeProperty("itemvalue", "myImageLink");
});
test("SurveyPropertyItemValue override properties", () => {
  Serializer.addProperty("itemvalue", {
    name: "price:number",
    visible: false,
    isSerializable: false,
  });
  Serializer.addClass(
    "ordergriditem",
    [
      {
        name: "price:number",
        default: 0,
        visible: true,
        isSerializable: true,
      },
      { name: "text", visible: false },
      { name: "visibleIf", visible: false },
      { name: "enableIf", visible: false },
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
    name: "price:number",
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
    properties: ["value", "text"],
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
    isLocalizable: true,
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
  var setupAction = actions.find((el) => el.id === "property-grid-setup");
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
  expect(choicesQuestion.hasErrors()).toBeTruthy();
  var rows = choicesQuestion.visibleRows;
  expect(rows).toHaveLength(1);
  rows[0].cells[0].value = "item1";
  expect(question.choices[0].value).toEqual("item1");
  expect(choicesQuestion.hasErrors()).toBeFalsy();
});
test("SurveyPropertyMatrixDropdownColumns set properties", () => {
  var question = new QuestionMatrixDropdownModel("q1");
  question.columns.push(new MatrixDropdownColumn("column 1"));
  question.columns.push(new MatrixDropdownColumn("column 2"));
  question.columns[0]["choices"] = [1, 2, "three"];
  var propertyGrid = new PropertyGridModelTester(question);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  expect(columnsQuestion.columns).toHaveLength(4);
  var rows = columnsQuestion.visibleRows;
  expect(rows[0].getQuestionByColumnName("name").value).toEqual("column 1");
  columnsQuestion.addRow();
  expect(question.columns).toHaveLength(3);
  rows = columnsQuestion.visibleRows;
  expect(rows[2].getQuestionByColumnName("name").value).toEqual("column 3");
  rows[2].getQuestionByColumnName("cellType").value = "checkbox";
  rows[2].getQuestionByColumnName("name").value = "column 5";
  expect(question.columns).toHaveLength(3);
  expect(question.columns[2].cellType).toEqual("checkbox");
  expect(question.columns[2].name).toEqual("column 5");
});
test("SurveyPropertyMatrixDropdownColumns change columns", () => {
  var saveProperties =
    SurveyQuestionEditorDefinition.definition.matrixdropdowncolumn.properties;

  SurveyQuestionEditorDefinition.definition.matrixdropdowncolumn.properties = [
    "cellType",
    "name",
    "readOnly",
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

  SurveyQuestionEditorDefinition.definition.matrixdropdowncolumn.properties = saveProperties;
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
  rows[0].showDetailPanel();
  var detailPanel = rows[0].detailPanel;
  detailPanel.getQuestionByName("cellType").value = "dropdown";
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
  rows[0].showDetailPanel();
  var detailPanel = rows[0].detailPanel;
  detailPanel.getQuestionByName("cellType").value = "dropdown";
  detailPanel.getQuestionByName("title").value = "Title 1";
  expect(question.columns[0].title).toEqual("Title 1");
  expect(rows[0].getQuestionByColumnName("title").value).toEqual("Title 1");
});
/* TODO
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
  expect(columnsQuestion.keyName).toEqual("name");
  var rows = columnsQuestion.visibleRows;
  expect(rows[1].getQuestionByColumnName("name").value).toEqual("column2");
  columnsQuestion.addRow();
  expect(question.columns).toHaveLength(3);
  rows = columnsQuestion.visibleRows;
  rows[2].getQuestionByColumnName("name").value = "column3";
  expect(question.columns[2].name).toEqual("column3");
  rows[2].getQuestionByColumnName("name").value = "column2";
  expect(question.columns[2].name).toEqual("column2");
  rows[2].getQuestionByColumnName("name").value = "column1";
  expect(question.columns[2].name).toEqual("column3");
  rows[2].getQuestionByColumnName("name").value = "column3";
  expect(question.columns[2].name).toEqual("column3");
  rows[2].getQuestionByColumnName("name").value = "column4";
  expect(question.columns[2].name).toEqual("column4");
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
  expect(columnsQuestion.hasError()).toBeFalsy();
  column2Name.value = "column1";
  expect(columnsQuestion.hasError()).toBeTruthy();
  column2Name.value = "column3";
  expect(columnsQuestion.hasError()).toBeTruthy();
  column2Name.value = "column2";
  expect(columnsQuestion.hasError()).toBeFalsy();
  column2Name.value = "column4";
  expect(columnsQuestion.hasError()).toBeFalsy();
});
*/

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
  rows[1].showDetailPanel();
  var detailPanel = rows[1].detailPanel;
  expect(detailPanel.getQuestionByName("defaultValue").isVisible).toBeTruthy();
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
  pagesQuestion.addRow();
  expect(survey.pages).toHaveLength(2);
  expect(survey.pages[1].name).toEqual("p2");
});
/* TODO pages canremove is not implemented
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
  var propertyGrid = new PropertyGridModelTester(survey);
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
  var propertyGrid = new PropertyGridModelTester(survey);
  var pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  survey.currentPage = survey.pages[0];
  expect(pagesQuestion.canRemoveRow(pagesQuestion.visibleRows[1])).toBeFalsy();
  expect(pagesQuestion.canRemoveRow(pagesQuestion.visibleRows[2])).toBeTruthy();
});
*/
/* TODO buttons localization
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
*/
/* TODO doesn't work
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
    isSerializable: false,
  });
  SurveyQuestionEditorDefinition.definition["page@page"] = {
    properties: ["name"],
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
  survey.addNewPage("page4");
  expect(pagesQuestion.visibleRows).toHaveLength(4);
  pagesQuestion.addRow();
  expect(survey.pages).toHaveLength(5);
  expect(survey.pages[4].name).toEqual("page5");
  Serializer.removeProperty("page", "pages");
});
*/
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
/*TODO likely remove
QUnit.test(
    "Check showDisplayNameOnTop for different property editors",
    function (assert) {
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
  */

// TODO we need to add the testing result

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
