import {
  CalculatedValue, ExpressionValidator, HtmlConditionItem, QuestionCheckboxBase, QuestionDropdownModel, QuestionMatrixDropdownModel, QuestionMatrixDynamicModel,
  QuestionMatrixModel, QuestionMultipleTextModel, QuestionRatingModel, QuestionTextModel, QuestionBooleanModel, Serializer, SurveyModel,
  SurveyTriggerRunExpression, UrlConditionItem, settings as surveySettings,
  ItemValue
} from "survey-core";
import { PropertyGridModelTester } from "./property-grid.base";
import { PropertyGridEditorMatrixMutlipleTextItems } from "../../src/property-grid/matrices";
import { EmptySurveyCreatorOptions, settings as settingsCreator } from "../../src/creator-settings";
import { SurveyTriggerComplete } from "survey-core";
export * from "../../src/property-grid/matrices";
export * from "../../src/property-grid/bindings";
export * from "../../src/property-grid/condition";
export * from "../../src/property-grid/restfull";
export * from "../../src/property-grid/theme-settings";
export * from "../../src/custom-questions/question-text-with-reset";

test("Validators property editor", () => {
  var question = new QuestionTextModel("q1");
  question.validators.push(new ExpressionValidator());
  var propertyGrid = new PropertyGridModelTester(question);
  var validatorsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("validators")
  );
  expect(validatorsQuestion).toBeTruthy(); //visibleIf is here
  expect(validatorsQuestion.columns).toHaveLength(1);
  expect(validatorsQuestion.visibleRows).toHaveLength(1);
  var validatorTypeQuestion = <QuestionDropdownModel>(
    validatorsQuestion.visibleRows[0].cells[0].question
  );
  expect(validatorTypeQuestion.getType()).toEqual("dropdown");
  expect(validatorTypeQuestion.showOptionsCaption).toBeFalsy();
  expect(validatorTypeQuestion.value).toEqual("expressionvalidator");
  var validatorCount = question.getSupportedValidators().length;
  expect(validatorTypeQuestion.choices).toHaveLength(validatorCount);
  validatorsQuestion.addRow();
  expect(question.validators).toHaveLength(2);
  expect(question.validators[1].getType()).toEqual("expressionvalidator");

  validatorTypeQuestion.value = "numericvalidator";
  expect(question.validators[0].getType()).toEqual("numericvalidator");
  expect(question.validators[1].getType()).toEqual("expressionvalidator");
  expect(validatorsQuestion.visibleRows[0].cells[0].value).toEqual(
    "numericvalidator"
  );
  expect(validatorsQuestion.visibleRows[1].cells[0].value).toEqual(
    "expressionvalidator"
  );
  validatorsQuestion.visibleRows[1].showDetailPanel();
  validatorsQuestion.visibleRows[1].detailPanel.getQuestionByName(
    "text"
  ).value = "validator2 text";
  expect(question.validators[1].text).toEqual("validator2 text");
  validatorTypeQuestion = <QuestionDropdownModel>(
    validatorsQuestion.visibleRows[1].cells[0].question
  );
  validatorTypeQuestion.value = "numericvalidator";
  expect(
    validatorsQuestion.visibleRows[1].detailPanel.getQuestionByName("text")
      .value
  ).toEqual("validator2 text");
  expect(
    validatorsQuestion.visibleRows[1].detailPanel.getQuestionByName("minValue")
  ).toBeTruthy();
  expect(question.validators[0].getType()).toEqual("numericvalidator");
  expect(question.validators[1].getType()).toEqual("numericvalidator");
});
test("Validators property editor for column", () => {
  var matrix = new QuestionMatrixDynamicModel("q1");
  var column = matrix.addColumn("col1");
  column.cellType = "text";
  column.validators.push(new ExpressionValidator());
  var propertyGrid = new PropertyGridModelTester(column);
  var validatorsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("validators")
  );
  expect(validatorsQuestion).toBeTruthy(); //visibleIf is here
  expect(validatorsQuestion.columns).toHaveLength(1);
  expect(validatorsQuestion.visibleRows).toHaveLength(1);
  var validatorTypeQuestion = <QuestionDropdownModel>(
    validatorsQuestion.visibleRows[0].cells[0].question
  );
  expect(validatorTypeQuestion.getType()).toEqual("dropdown");
  expect(validatorTypeQuestion.showOptionsCaption).toBeFalsy();
  expect(validatorTypeQuestion.value).toEqual("expressionvalidator");
  var validatorCount = column.templateQuestion.getSupportedValidators().length;
  expect(validatorTypeQuestion.choices).toHaveLength(validatorCount);
  validatorsQuestion.addRow();
  expect(column.validators).toHaveLength(2);
  expect(column.validators[1].getType()).toEqual("expressionvalidator");

  validatorTypeQuestion.value = "numericvalidator";
  expect(column.validators[0].getType()).toEqual("numericvalidator");
  expect(column.validators[1].getType()).toEqual("expressionvalidator");
  expect(validatorsQuestion.visibleRows[0].cells[0].value).toEqual(
    "numericvalidator"
  );
  expect(validatorsQuestion.visibleRows[1].cells[0].value).toEqual(
    "expressionvalidator"
  );
  validatorsQuestion.visibleRows[1].showDetailPanel();
  validatorsQuestion.visibleRows[1].detailPanel.getQuestionByName(
    "text"
  ).value = "validator2 text";
  expect(column.validators[1].text).toEqual("validator2 text");
  validatorTypeQuestion = <QuestionDropdownModel>(
    validatorsQuestion.visibleRows[1].cells[0].question
  );
  validatorTypeQuestion.value = "numericvalidator";
  expect(
    validatorsQuestion.visibleRows[1].detailPanel.getQuestionByName("text")
      .value
  ).toEqual("validator2 text");
  expect(
    validatorsQuestion.visibleRows[1].detailPanel.getQuestionByName("minValue")
  ).toBeTruthy();
  expect(column.validators[0].getType()).toEqual("numericvalidator");
  expect(column.validators[1].getType()).toEqual("numericvalidator");
});
test("Question doesn't have expression validator, bug#4378", () => {
  const oldArray: Array<string> = [];
  surveySettings.supportedValidators.question.forEach(val => oldArray.push(val));
  surveySettings.supportedValidators.question = [];
  const question = new QuestionTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  var validatorsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("validators")
  );
  expect(validatorsQuestion).toBeTruthy(); //visibleIf is here
  expect(validatorsQuestion.columns).toHaveLength(1);
  expect(validatorsQuestion.visibleRows).toHaveLength(0);
  validatorsQuestion.addRow();
  expect(question.validators).toHaveLength(1);
  expect(question.validators[0].getType()).toEqual("numericvalidator");
  surveySettings.supportedValidators.question = oldArray;
});
test("Triggers property editor", () => {
  var survey = new SurveyModel();
  survey.triggers.push(new SurveyTriggerRunExpression());
  var propertyGrid = new PropertyGridModelTester(survey);
  var triggersQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("triggers")
  );
  expect(triggersQuestion).toBeTruthy(); //visibleIf is here
  expect(triggersQuestion.visibleRows).toHaveLength(1);
  var triggerTypeQuestion = triggersQuestion.visibleRows[0].cells[0].question;
  expect(triggerTypeQuestion.getType()).toEqual("dropdown");
  expect(triggerTypeQuestion.value).toEqual("runexpressiontrigger");
  expect(triggerTypeQuestion.choices).toHaveLength(5);
  triggersQuestion.addRow();
  expect(survey.triggers).toHaveLength(2);
  expect(survey.triggers[1].getType()).toEqual("runexpressiontrigger");

  triggerTypeQuestion.value = "completetrigger";
  expect(survey.triggers[0].getType()).toEqual("completetrigger");
  expect(survey.triggers[1].getType()).toEqual("runexpressiontrigger");
  expect(triggersQuestion.visibleRows[0].cells[0].value).toEqual(
    "completetrigger"
  );
  expect(triggersQuestion.visibleRows[1].cells[0].value).toEqual(
    "runexpressiontrigger"
  );
  triggersQuestion.visibleRows[1].showDetailPanel();
  triggersQuestion.visibleRows[1].detailPanel.getQuestionByName(
    "expression"
  ).value = "{q1} = 1";
  expect(survey.triggers[1].expression).toEqual("{q1} = 1");
  triggerTypeQuestion = <QuestionDropdownModel>(
    triggersQuestion.visibleRows[1].cells[0].question
  );
  expect(triggerTypeQuestion.showOptionsCaption).toBeFalsy();
  triggerTypeQuestion.value = "completetrigger";
  expect(
    triggersQuestion.visibleRows[1].detailPanel.getQuestionByName("expression")
      .value
  ).toEqual("{q1} = 1");
  expect(survey.triggers[0].getType()).toEqual("completetrigger");
  expect(survey.triggers[1].getType()).toEqual("completetrigger");
});

test("Triggers property editor after remove trigger class", () => {
  const runexpressiontriggerClass = Serializer.findClass("runexpressiontrigger");
  Serializer.removeClass("runexpressiontrigger");

  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const triggersQuestion = <QuestionMatrixDynamicModel>(propertyGrid.survey.getQuestionByName("triggers"));
  expect(triggersQuestion).toBeTruthy(); //visibleIf is here
  expect(triggersQuestion.visibleRows).toHaveLength(0);
  triggersQuestion.addRow();
  expect(triggersQuestion.visibleRows).toHaveLength(1);
  const triggerTypeQuestion = triggersQuestion.visibleRows[0].cells[0].question;
  expect(triggerTypeQuestion.getType()).toEqual("dropdown");
  expect(triggerTypeQuestion.value).toEqual("completetrigger");
  expect(triggerTypeQuestion.choices).toHaveLength(4);

  const props: any = [];
  runexpressiontriggerClass.properties.forEach(prop => props.push({ name: prop.name + ":" + prop.type }));
  Serializer.addClass(runexpressiontriggerClass.name, props, runexpressiontriggerClass.creator, runexpressiontriggerClass.parentName);
});

test("Hide triggers based on settings.logic.invisibleTriggers, #6031", () => {
  settingsCreator.logic.invisibleTriggers = ["skip", "complete"];

  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const triggersQuestion = <QuestionMatrixDynamicModel>(propertyGrid.survey.getQuestionByName("triggers"));
  triggersQuestion.addRow();
  expect(triggersQuestion.visibleRows).toHaveLength(1);
  const triggerTypeQuestion = triggersQuestion.visibleRows[0].cells[0].question;
  expect(triggerTypeQuestion.getType()).toEqual("dropdown");
  expect(ItemValue.getItemByValue(triggerTypeQuestion.choices, "runexpressiontrigger")).toBeTruthy();
  expect(ItemValue.getItemByValue(triggerTypeQuestion.choices, "completetrigger")).toBeFalsy();
  expect(ItemValue.getItemByValue(triggerTypeQuestion.choices, "skiptrigger")).toBeFalsy();

  settingsCreator.logic.invisibleTriggers = [];
});

test("calculatedValues property editor", () => {
  var survey = new SurveyModel();
  survey.calculatedValues.push(new CalculatedValue("var1", "{q1}=1"));
  var propertyGrid = new PropertyGridModelTester(survey);
  var calcValuesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("calculatedValues")
  );
  expect(calcValuesQuestion).toBeTruthy();
  expect(calcValuesQuestion.useCaseSensitiveComparison).toEqual(false);
  expect(calcValuesQuestion.visibleRows).toHaveLength(1);
  expect(calcValuesQuestion.columns).toHaveLength(2);
  expect(calcValuesQuestion.columns[0].cellType).toEqual("text");
  expect(calcValuesQuestion.columns[1].cellType).toEqual("text");
  calcValuesQuestion.visibleRows[0].showDetailPanel();
  var expQ =
    calcValuesQuestion.visibleRows[0].detailPanel.getQuestionByName(
      "expression"
    );
  expect(expQ).toBeTruthy();
  expect(expQ.value).toEqual("{q1}=1");
  expQ.value = "{q1}=2";
  expect(survey.calculatedValues[0].expression).toEqual("{q1}=2");
  calcValuesQuestion.addRow();
  expect(survey.calculatedValues).toHaveLength(2);
  expect(survey.calculatedValues[1].name).toEqual("var2");
});

test("htmlConditions property editor", () => {
  var survey = new SurveyModel();
  survey.completedHtmlOnCondition.push(new HtmlConditionItem("{q1}=1"));
  var propertyGrid = new PropertyGridModelTester(survey);
  var htmlConditionsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("completedHtmlOnCondition")
  );
  expect(htmlConditionsQuestion).toBeTruthy();
  expect(htmlConditionsQuestion.visibleRows).toHaveLength(1);
  htmlConditionsQuestion.visibleRows[0].showDetailPanel();
  var expQ =
    htmlConditionsQuestion.visibleRows[0].detailPanel.getQuestionByName(
      "expression"
    );
  expect(expQ).toBeTruthy();
  expect(expQ.value).toEqual("{q1}=1");
  expQ.value = "{q1}=2";
  expect(survey.completedHtmlOnCondition[0].expression).toEqual("{q1}=2");
  htmlConditionsQuestion.addRow();
  expect(survey.completedHtmlOnCondition).toHaveLength(2);
});
test("urlconditions property editor", () => {
  var survey = new SurveyModel();
  survey.navigateToUrlOnCondition.push(new UrlConditionItem("{q1}=1", "url1"));
  var propertyGrid = new PropertyGridModelTester(survey);
  var urlConditionsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("navigateToUrlOnCondition")
  );
  expect(urlConditionsQuestion).toBeTruthy();
  expect(urlConditionsQuestion.visibleRows).toHaveLength(1);
  urlConditionsQuestion.visibleRows[0].showDetailPanel();
  var expQ =
    urlConditionsQuestion.visibleRows[0].detailPanel.getQuestionByName(
      "expression"
    );
  expect(expQ).toBeTruthy();
  expect(expQ.value).toEqual("{q1}=1");
  expQ.value = "{q1}=2";
  expect(survey.navigateToUrlOnCondition[0].expression).toEqual("{q1}=2");
  urlConditionsQuestion.addRow();
  expect(survey.navigateToUrlOnCondition).toHaveLength(2);
});
test("QuestionMultipleTextModel column titles", () => {
  const question = new QuestionMultipleTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("items")
  );
  expect(itemsQuestion).toBeTruthy();
  const columns = itemsQuestion.columns;
  expect(columns).toHaveLength(2);
  expect(columns[0].name).toEqual("name");
  expect(columns[1].name).toEqual("title");
  expect(columns[0].title).toEqual("Name");
  expect(columns[1].title).toEqual("Title");
});
test("QuestionMultipleTextModel items property editor", () => {
  var question = new QuestionMultipleTextModel("q1");
  question.addItem("item1", "Item 1");
  var propertyGrid = new PropertyGridModelTester(question);
  var itemsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("items")
  );
  expect(itemsQuestion).toBeTruthy();
  var rows = itemsQuestion.visibleRows;
  expect(rows).toHaveLength(1);
  var nameQuestion = rows[0].getQuestionByName("name");
  expect(nameQuestion.value).toEqual("item1");
  nameQuestion.value = "item11";
  expect(question.items[0].name).toEqual("item11");
  question.items[0].name = "item1";
  propertyGrid.obj = rows[0].editingObj;
  var titleQ = propertyGrid.survey.getQuestionByName("title");
  expect(titleQ).toBeTruthy();
  expect(titleQ.value).toEqual("Item 1");
  titleQ.value = "item 2";
  propertyGrid.obj = question;
  expect(question.items[0].title).toEqual("item 2");
  itemsQuestion = <QuestionMatrixDynamicModel>(propertyGrid.survey.getQuestionByName("items"));
  var rows = itemsQuestion.visibleRows;
  expect(rows).toHaveLength(1);
  itemsQuestion.addRow();
  expect(question.items).toHaveLength(2);
  expect(question.items[1].name).toEqual("item2");
});
test("QuestionMultipleTextModel items property editor + validators editor", () => {
  var multipleQuestion = new QuestionMultipleTextModel("q1");
  var textItem = multipleQuestion.addItem("item1", "Item 1");
  var propertyGrid = new PropertyGridModelTester(multipleQuestion);
  var itemsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("items")
  );
  expect(itemsQuestion).toBeTruthy();
  var rows = itemsQuestion.visibleRows;
  propertyGrid.obj = rows[0].editingObj;
  var validatorsQuestion = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("validators");
  expect(validatorsQuestion).toBeTruthy(); //visibleIf is here
  expect(validatorsQuestion.columns).toHaveLength(1);
  expect(validatorsQuestion.visibleRows).toHaveLength(0);
  validatorsQuestion.addRow();
  expect(validatorsQuestion.visibleRows).toHaveLength(1);
  expect(validatorsQuestion.visibleRows[0].editingObj.getType()).toEqual(
    "expressionvalidator"
  );
  expect(textItem.validators).toHaveLength(1);
  expect(textItem.validators[0].getType()).toEqual("expressionvalidator");
  var validatorTypeQuestion = <QuestionDropdownModel>(
    validatorsQuestion.visibleRows[0].cells[0].question
  );
  expect(validatorTypeQuestion.getType()).toEqual("dropdown");
  expect(validatorTypeQuestion.showOptionsCaption).toBeFalsy();
  expect(validatorTypeQuestion.value).toEqual("expressionvalidator");
  var validatorCount = textItem.editor.getSupportedValidators().length;
  expect(validatorTypeQuestion.choices).toHaveLength(validatorCount);
  validatorsQuestion.addRow();
  expect(textItem.validators).toHaveLength(2);
  expect(textItem.validators[1].getType()).toEqual("expressionvalidator");
  expect(validatorsQuestion.visibleRows[1].editingObj.getType()).toEqual(
    "expressionvalidator"
  );
  validatorsQuestion.visibleRows[0].editingObj["data"] = "test";
  expect(textItem.validators[0]["data"]).toEqual("test");
  validatorTypeQuestion = <QuestionDropdownModel>(
    validatorsQuestion.visibleRows[0].cells[0].question
  );
  validatorTypeQuestion.value = "numericvalidator";
  expect(textItem.validators[0].getType()).toEqual("numericvalidator");
  expect(textItem.validators[1].getType()).toEqual("expressionvalidator");
  expect(validatorsQuestion.visibleRows[0].cells[0].value).toEqual(
    "numericvalidator"
  );
  expect(validatorsQuestion.visibleRows[0].editingObj["data"]).toBeFalsy();
  validatorsQuestion.visibleRows[0].showDetailPanel();
  expect(
    validatorsQuestion.visibleRows[0].detailPanel.getQuestionByName("minValue")
  ).toBeTruthy();
  expect(validatorsQuestion.visibleRows[1].cells[0].value).toEqual(
    "expressionvalidator"
  );
  validatorsQuestion.visibleRows[1].showDetailPanel();
  validatorsQuestion.visibleRows[1].detailPanel.getQuestionByName(
    "text"
  ).value = "validator2 text";
  expect(textItem.validators[1].text).toEqual("validator2 text");
  validatorTypeQuestion = <QuestionDropdownModel>(
    validatorsQuestion.visibleRows[1].cells[0].question
  );
  validatorTypeQuestion.value = "numericvalidator";
  expect(
    validatorsQuestion.visibleRows[1].detailPanel.getQuestionByName("text")
      .value
  ).toEqual("validator2 text");
  expect(textItem.validators[0].getType()).toEqual("numericvalidator");
  expect(textItem.validators[1].getType()).toEqual("numericvalidator");
});
test("textitem[] property editor", () => {
  const question = new QuestionMultipleTextModel("q1");
  const textItem = question.addItem("item1", "Item 1");
  const propertyGrid = new PropertyGridModelTester(question);
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("items")
  );
  expect(itemsQuestion).toBeTruthy(); //"choices property editor created");
  expect(itemsQuestion.getType()).toEqual("matrixdynamic"); //"It is a matrix");
  expect(itemsQuestion.rowCount).toEqual(1);
  expect(itemsQuestion.renderedTable.rows[0].cells).toHaveLength(4);
  expect(itemsQuestion.renderedTable.rows[0].cells[1].question.value).toEqual("item1");
  expect(itemsQuestion.renderedTable.rows[0].cells[2].question.value).toEqual("Item 1");
  textItem.title = "not Item 1";
  expect(itemsQuestion.renderedTable.rows[0].cells[2].question.value).toEqual("not Item 1");
});
test("check multiple text items editing by Manual Entry", () => {
  const question = new QuestionMultipleTextModel("q1");
  const textItem = question.addItem("item1", "Item 1");
  const propertyGrid = new PropertyGridModelTester(question);
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("items")
  );
  expect(itemsQuestion.rowCount).toEqual(1);
  expect(itemsQuestion.renderedTable.rows[0].cells[1].question.value).toEqual("item1");
  expect(itemsQuestion.renderedTable.rows[0].cells[2].question.value).toEqual("Item 1");
  const propertyEditor = new PropertyGridEditorMatrixMutlipleTextItems();
  const fastEntry: any = propertyEditor.createPropertyEditorSetup(propertyGrid.obj, (<any>itemsQuestion).property,
    itemsQuestion, new EmptySurveyCreatorOptions());
  let fastEntryValue: string = fastEntry.commentValue.value;
  expect(fastEntryValue).toEqual("item1|Item 1");
  fastEntry.commentValue.value = "notitem1|not Item 1\nitem2|Item 2";
  fastEntry.apply();
  expect(itemsQuestion.rowCount).toEqual(2);
  expect(itemsQuestion.renderedTable.rows[0].cells[1].question.value).toEqual("notitem1");
  expect(itemsQuestion.renderedTable.rows[0].cells[2].question.value).toEqual("not Item 1");
  expect(itemsQuestion.renderedTable.rows[2].cells[1].question.value).toEqual("item2");
  expect(itemsQuestion.renderedTable.rows[2].cells[2].question.value).toEqual("Item 2");
});
test("QuestionMultipleTextModel items property editor + validators editor", () => {
  var multipleQuestion = new QuestionMultipleTextModel("q1");
  var textItem = multipleQuestion.addItem("item1");
  var propertyGrid = new PropertyGridModelTester(multipleQuestion);
  var itemsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("items")
  );
  expect(itemsQuestion).toBeTruthy();
  const row = itemsQuestion.visibleRows[0];
  const cell = row.cells[1];
  expect(cell.question.value).toBeFalsy();
  expect(cell.question.placeholder).toBe("item1");
  row.showDetailPanel();
  expect(cell.question.value).toBeFalsy();
  expect(cell.question.placeholder).toBe("item1");
  row.hideDetailPanel();
  expect(cell.question.value).toBeFalsy();
  expect(cell.question.placeholder).toBe("item1");
});
test("Triggers property editor, Bug #4454", () => {
  var survey = new SurveyModel();
  const completeTrigger = new SurveyTriggerComplete();
  completeTrigger.expression = "{q1} = 1";
  survey.triggers.push(completeTrigger);
  var propertyGrid = new PropertyGridModelTester(survey);
  var triggersQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("triggers")
  );
  expect(triggersQuestion).toBeTruthy(); //visibleIf is here
  const rows = triggersQuestion.visibleRows;
  expect(rows).toHaveLength(1);
  rows[0].showDetailPanel();
  triggersQuestion.addRow();
  expect(survey.triggers).toHaveLength(2);
  expect(survey.triggers[1].getType()).toEqual("runexpressiontrigger");
  expect(rows[1].isDetailPanelShowing).toBeTruthy();
  expect(rows[0].isDetailPanelShowing).toBeFalsy();
  expect(rows[1].detailPanel.questions).toHaveLength(3);
  expect(rows[1].detailPanel.getQuestionByName("expression").value).toBeFalsy();
});
test("editor base check for unique property value and correct error in another editor, Bug#4165", () => {
  const question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("column1");
  question.addColumn("column2");
  question.addColumn("column3");

  const propertyGrid = new PropertyGridModelTester(question);
  const columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  const rows = columnsQuestion.visibleRows;

  const column1Name = rows[0].getQuestionByColumnName("name");
  const column2Name = rows[1].getQuestionByColumnName("name");
  column2Name.value = "column1";
  expect(column2Name.errors).toHaveLength(1);
  column1Name.value = "column5";
  expect(column2Name.errors).toHaveLength(0);
});
test("Several errors in choices, Bug #4701", () => {
  const q = new QuestionCheckboxBase("q1");
  q.choices = ["item1", "item2", "item3"];
  var propertyGrid = new PropertyGridModelTester(q);
  const qChoices = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("choices");
  const rows = qChoices.visibleRows;
  expect(rows).toHaveLength(3);
  expect(rows[0].cells[0].value).toBe("item1");
  expect(rows[1].cells[0].value).toBe("item2");
  expect(rows[2].cells[0].value).toBe("item3");

  const row1Q = rows[1].cells[0].question;
  const row2Q = rows[2].cells[0].question;

  row1Q.clearValue();
  row2Q.value = "item1";
  expect(row1Q.errors).toHaveLength(1);
  expect(row2Q.errors).toHaveLength(1);
  row1Q.value = "item4";
  expect(row1Q.errors).toHaveLength(0);
  expect(row2Q.errors).toHaveLength(1);
  row2Q.value = "item5";
  expect(row1Q.errors).toHaveLength(0);
  expect(row2Q.errors).toHaveLength(0);

  row1Q.clearValue();
  row2Q.value = "item1";
  expect(row1Q.errors).toHaveLength(1);
  expect(row2Q.errors).toHaveLength(1);
  row2Q.value = "item5";
  expect(row1Q.errors).toHaveLength(1);
  expect(row2Q.errors).toHaveLength(0);
  row1Q.value = "item4";
  expect(row1Q.errors).toHaveLength(0);
  expect(row2Q.errors).toHaveLength(0);
});
test("Apply value correctly after errors, Bug #5915", () => {
  const q = new QuestionCheckboxBase("q1");
  q.choices = ["item1", "item2", "item3"];
  var propertyGrid = new PropertyGridModelTester(q);
  const qChoices = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("choices");
  const rows = qChoices.visibleRows;
  expect(rows).toHaveLength(3);
  rows[1].cells[0].value = "item1";
  rows[0].cells[0].value = "item2";
  expect(q.choices[0].value).toBe("item2");
  expect(q.choices[1].value).toBe("item1");
});
test("Show text column in itemvalue (choices) if inplaceEditForValues is false (default)", () => {
  const q = new QuestionCheckboxBase("q1");
  q.choices = ["item1", "item2", "item3"];
  const propertyGrid = new PropertyGridModelTester(q);
  const qProperty = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("choices");
  expect(qProperty.columns).toHaveLength(2);
  expect(qProperty.columns[0].name).toBe("value");
  expect(qProperty.columns[1].name).toBe("text");
});
test("Hide text column in itemvalue (choices) if inplaceEditForValues is true", () => {
  const q = new QuestionCheckboxBase("q1");
  q.choices = ["item1", "item2", "item3"];
  const options = new EmptySurveyCreatorOptions();
  options.inplaceEditForValues = true;
  const propertyGrid = new PropertyGridModelTester(q, options);
  const qProperty = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("choices");
  expect(qProperty.columns).toHaveLength(1);
  expect(qProperty.columns[0].name).toBe("value");
});
test("Hide text column in itemvalue (rateValues) if inplaceEditForValues is true", () => {
  const q = new QuestionRatingModel("q1");
  q.rateValues = ["item1", "item2", "item3"];
  const options = new EmptySurveyCreatorOptions();
  options.inplaceEditForValues = true;
  const propertyGrid = new PropertyGridModelTester(q, options);
  const qProperty = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("rateValues");
  expect(qProperty.columns).toHaveLength(2);
  expect(qProperty.columns[0].name).toBe("icon");
  expect(qProperty.columns[1].name).toBe("value");
});
test("Hide text column in itemvalue (matrixdropdown.rows) if inplaceEditForValues is true", () => {
  const q = new QuestionMatrixDropdownModel("q1");
  q.rows = ["item1", "item2", "item3"];
  const options = new EmptySurveyCreatorOptions();
  options.inplaceEditForValues = true;
  const propertyGrid = new PropertyGridModelTester(q, options);
  const qProperty = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("rows");
  expect(qProperty.columns).toHaveLength(1);
  expect(qProperty.columns[0].name).toBe("value");
});
test("Hide text column in itemvalue (matrix.columns) if inplaceEditForValues is true", () => {
  const q = new QuestionMatrixModel("q1");
  q.columns = ["item1", "item2", "item3"];
  const options = new EmptySurveyCreatorOptions();
  options.inplaceEditForValues = true;
  const propertyGrid = new PropertyGridModelTester(q, options);
  const qProperty = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("columns");
  expect(qProperty.columns).toHaveLength(1);
  expect(qProperty.columns[0].name).toBe("value");
});
test("Add custom boolean property to choices, Bug#6004", () => {
  Serializer.addProperty("itemvalue", "isDeleted:boolean");

  const q = new QuestionMatrixModel("q1");
  q.columns = ["item1", "item2", "item3"];
  const propertyGrid = new PropertyGridModelTester(q);
  const qProperty = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("columns");
  expect(qProperty.columns).toHaveLength(3);
  expect(qProperty.columns[2].name).toBe("isDeleted");
  const qCell = <QuestionBooleanModel>qProperty.visibleRows[0].getQuestionByName("isDeleted");
  expect(qCell).toBeTruthy();
  expect(qCell.name).toBe("isDeleted");
  expect(qCell.getType()).toBe("boolean");
  expect(qCell.isLabelRendered).toBeFalsy();

  Serializer.removeProperty("itemvalue", "isDeleted");
});
