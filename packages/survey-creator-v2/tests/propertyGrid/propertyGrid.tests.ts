import {
  PropertyGridModel,
  PropertyGridEditorCollection,
} from "../../src/propertyGrid/propertygrid";
import {
  Base,
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
  Serializer,
} from "survey-knockout";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions,
} from "@survey/creator/settings";

import { assert } from "console";
export * from "../../src/propertyGrid/propertygrid_matrices";
export * from "../../src/propertyGrid/propertygtrid_condition";
export * from "../../src/propertyGrid/propertygtrid_restfull";

export class PropertyGridModelTester extends PropertyGridModel {
  constructor(obj: Base, options: ISurveyCreatorOptions = null) {
    PropertyGridEditorCollection.clearHash();
    super(obj, options);
  }
}
test("Create survey with editingObj", () => {
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  expect(propertyGrid.survey.getValue("name")).toEqual("q1");
  var nameQuestion = propertyGrid.survey.getQuestionByName("name");
  expect(nameQuestion).toBeTruthy();
  expect(nameQuestion.title).toEqual("Name");
  nameQuestion.value = "q2";
  expect(question.name).toEqual("q2");
});
test("Check tabs creating", () => {
  var question = new QuestionCheckboxModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var generalPanel = <PanelModel>propertyGrid.survey.getPanelByName("general");
  expect(generalPanel).toBeTruthy();
  expect(generalPanel.title).toEqual("General");
  var choicesPanel = <PanelModel>propertyGrid.survey.getPanelByName("choices");
  expect(choicesPanel).toBeTruthy();
  expect(choicesPanel.title).toEqual("Choices");
});
test("Hide question title if property is first in tab and has the same title as tab", () => {
  var question = new QuestionCheckboxModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = propertyGrid.survey.getQuestionByName("choices");
  expect(choicesQuestion).toBeTruthy();
  expect(choicesQuestion.titleLocation).toEqual("hidden");
});

test("boolean property editor (boolean/switch)", () => {
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var startWithNewLineQuestion = propertyGrid.survey.getQuestionByName(
    "startWithNewLine"
  );
  var isRequiredQuestion = propertyGrid.survey.getQuestionByName("isRequired");
  expect(startWithNewLineQuestion).toBeTruthy(); //"property for startWithNewLine is created"
  expect(isRequiredQuestion).toBeTruthy(); // "property for isRequired is created"
  expect(startWithNewLineQuestion.getType()).toEqual("boolean"); // "property for startWithNewLine is created"
  expect(isRequiredQuestion.getType()).toEqual("boolean"); // "property for isRequired is created"
  expect(startWithNewLineQuestion.value).toEqual(true); // "startWithNewLine default value is true"
  expect(isRequiredQuestion.value).toEqual(false); //"isRequired default value is false"
  question.isRequired = true;
  expect(isRequiredQuestion.value).toEqual(true); //"isRequired is true now");
  isRequiredQuestion.value = false;
  expect(question.isRequired).toEqual(false); //"isRequired is false again - two way bindings"
});
test("dropdown property editor", () => {
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var titleLocationQuestion = propertyGrid.survey.getQuestionByName(
    "titleLocation"
  );
  expect(titleLocationQuestion.getType()).toEqual("dropdown"); //"correct property editor is created"
  expect(titleLocationQuestion.choices.length).toEqual(5); // "There are five choices"
  expect(titleLocationQuestion.value).toEqual("default"); //"the value is correct"
  question.titleLocation = "top";
  expect(titleLocationQuestion.value).toEqual("top"); //"property editor react on value chage"
  titleLocationQuestion.value = "bottom";
  expect(question.titleLocation).toEqual("bottom"); //"property editor change the question property"
});
test("dropdown property editor localization", () => {
  var survey = new SurveyModel();
  var propertyGrid = new PropertyGridModelTester(survey);
  var showPreviewQuestion = propertyGrid.survey.getQuestionByName(
    "showPreviewBeforeComplete"
  );
  expect(showPreviewQuestion.getType()).toEqual("dropdown"); //"correct property editor is created"
  expect(showPreviewQuestion.choices[0].value).toEqual("noPreview");
  expect(showPreviewQuestion.choices[0].text).toEqual("no preview");

  var localeQuestion = propertyGrid.survey.getQuestionByName("locale");
  expect(localeQuestion.getType()).toEqual("dropdown"); //"correct property editor is created"
  expect(localeQuestion.choices[0].value).toEqual("");
  expect(localeQuestion.choices[0].text).toEqual("Default (english)");
});

test("itemvalue[] property editor", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion).toBeTruthy(); //"choices property editor created");
  expect(choicesQuestion.getType()).toEqual("matrixdynamic"); //"It is a matrix");
  expect(choicesQuestion.columns).toHaveLength(2); //"There are two columns");
  expect(choicesQuestion.visibleRows).toHaveLength(3); //"There are three elements"
  expect(choicesQuestion.visibleRows[0].cells[0].value).toEqual(1); //"the first cell value is 3"
  choicesQuestion.addRow();
  expect(question.choices).toHaveLength(4); // "There are 4 items now");
  expect(question.choices[3].getType()).toEqual("itemvalue"); //correct class created
  expect(choicesQuestion.visibleRows[3].cells[0].value).toEqual(4);
  expect(question.choices[3].value).toEqual(4); //"The last item value is 4");
  question.choices[1].text = "Item 2";
  expect(choicesQuestion.visibleRows[1].cells[1].value).toEqual("Item 2"); // "the second cell in second row is correct"
  question.choices[2].value = 333;
  expect(choicesQuestion.visibleRows[2].cells[0].value).toEqual(333); //"the first cell in third row is correct"
});
test("itemvalue[] property editor + detail panel", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var row = choicesQuestion.visibleRows[0];
  expect(row.hasPanel).toEqual(true); //"There is a detail panel here");
  row.showDetailPanel();
  expect(row.detailPanel).toBeTruthy(); //"Detail panel is showing");
  expect(row.detailPanel.getQuestionByName("value")).toBeTruthy(); //"value property is here"
});

test("column[] property editor", () => {
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  question.addColumn("col3");
  var propertyGrid = new PropertyGridModelTester(question);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  expect(columnsQuestion).toBeTruthy(); //"choices property editor created");
  expect(columnsQuestion.getType()).toEqual("matrixdynamic"); //"It is a matrix";
  expect(columnsQuestion.columns).toHaveLength(3); //"There are three columns");
  expect(columnsQuestion.columns[0].cellType).toEqual("dropdown"); //"Correct cell type created for cellType property"
  expect(columnsQuestion.columns[1].title).toEqual("Name");
  expect(columnsQuestion.visibleRows).toHaveLength(3); //"There are three elements"
  expect(columnsQuestion.visibleRows[0].cells[0].value).toEqual("default"); //"the first cell value is 'default'"
  expect(columnsQuestion.visibleRows[0].cells[1].value).toEqual("col1"); //"the second cell value is 'col1'"
  columnsQuestion.visibleRows[0].cells[1].value = "col11";
  expect(question.columns[0].name).toEqual("col11"); //"column name has been changed"

  columnsQuestion.addRow();
  expect(question.columns).toHaveLength(4); //"There are 4 items now");
  expect(question.columns[3].getType()).toEqual("matrixdropdowncolumn"); //"Object created correctly"
  expect(question.columns[3].name).toEqual("col4"); //"Object created correctly"
  question.columns[1].title = "Column 2";
  expect(columnsQuestion.visibleRows[1].cells[2].value).toEqual("Column 2"); //"the third cell in second row is correct"
  question.columns[2].cellType = "text";
  expect(columnsQuestion.visibleRows[2].cells[0].value).toEqual("text"); //"react on changing column cell type"
  columnsQuestion.visibleRows[2].cells[0].value = "checkbox";
  expect(question.columns[2].cellType).toEqual("checkbox"); //"change column cell type in matrix"
});

test("surveypages property editor", () => {
  var survey = new SurveyModel();
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  survey.addNewPage("page3");
  var propertyGrid = new PropertyGridModelTester(survey);
  var pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  expect(pagesQuestion).toBeTruthy();
  expect(pagesQuestion.getType()).toEqual("matrixdynamic");
  expect(pagesQuestion.columns).toHaveLength(2);
  expect(pagesQuestion.columns[0].cellType).toEqual("text");
  expect(pagesQuestion.columns[0].title).toEqual("Name");
  expect(pagesQuestion.visibleRows).toHaveLength(3);
  expect(pagesQuestion.visibleRows[0].cells[0].value).toEqual("page1");
  expect(pagesQuestion.visibleRows[0].cells[1].value).toBeFalsy();
  pagesQuestion.visibleRows[0].cells[1].value = "My Page 1";
  expect(survey.pages[0].title).toEqual("My Page 1");

  pagesQuestion.addRow();
  expect(survey.pages).toHaveLength(4);
  expect(survey.pages[3].getType()).toEqual("page");
  expect(survey.pages[3].name).toEqual("page4");
  survey.pages[1].title = "Page 2";
  expect(pagesQuestion.visibleRows[1].cells[1].value).toEqual("Page 2");
});

test("Change editingObj of the property grid", () => {
  var question = new QuestionTextModel("q1");
  var question2 = new QuestionTextModel("q2");
  var propertyGrid = new PropertyGridModelTester(question);
  expect(propertyGrid.survey.getValue("name")).toEqual("q1"); //"name property value is set for the first editingObj"
  propertyGrid.obj = question2;
  expect(propertyGrid.survey.getValue("name")).toEqual("q2"); //"name property value is set for the second editingObj"
});
test("Check objValueChangedCallback", () => {
  var count = 0;
  var objValueChangedCallback = () => {
    count++;
  };
  var question = new QuestionTextModel("q1");
  var question2 = new QuestionTextModel("q2");
  var propertyGrid = new PropertyGridModelTester(question);
  propertyGrid.objValueChangedCallback = objValueChangedCallback;
  expect(count).toEqual(0); //"objValueChangedCallback isn't called");
  propertyGrid.obj = question2;
  expect(count).toEqual(1); //"objValueChangedCallback is called after changing obj value"
  propertyGrid.obj = question2;
  expect(count).toEqual(1); //"objValueChangedCallback isn't called after setting same obj value"
  propertyGrid.obj = question;
  expect(count).toEqual(2); //"objValueChangedCallback is called after changing obj value"
});
test("Support property visibleIf attribute", () => {
  var question = new QuestionCheckboxModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var otherTextPropEd = propertyGrid.survey.getQuestionByName("otherText");
  expect(otherTextPropEd).toBeTruthy(); //otherText is here
  expect(otherTextPropEd.isVisible).toEqual(false); //It hidden by default
  question.hasOther = true;
  expect(otherTextPropEd.isVisible).toEqual(true); //We show it now
});
test("Show property editor for condition/expression", () => {
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  expect(propertyGrid.survey.getQuestionByName("visibleIf")).toBeTruthy(); //visibleIf is here
  expect(
    propertyGrid.survey.getQuestionByName("defaultValueExpression")
  ).toBeTruthy(); //defaultValueExpression is here
});
test("Support question property editor", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
    ],
    triggers: [{ type: "skiptrigger", gotoName: "q2" }],
  });
  var trigger = survey.triggers[0];
  var propertyGrid = new PropertyGridModelTester(trigger);
  var gotoNamePropEd = propertyGrid.survey.getQuestionByName("gotoName");
  expect(gotoNamePropEd).toBeTruthy();
  expect(gotoNamePropEd.choices).toHaveLength(2);
  expect(gotoNamePropEd.choices[0].value).toEqual("q1");
  expect(gotoNamePropEd.value).toEqual("q2");
});

test("Validators property editor", () => {
  var question = new QuestionTextModel("q1");
  question.validators.push(new ExpressionValidator());
  var propertyGrid = new PropertyGridModelTester(question);
  var validatorsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("validators")
  );
  expect(validatorsQuestion).toBeTruthy(); //visibleIf is here
  expect(validatorsQuestion.visibleRows).toHaveLength(1);
  var validatorTypeQuestion =
    validatorsQuestion.visibleRows[0].cells[0].question;
  expect(validatorTypeQuestion.getType()).toEqual("dropdown");
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
  validatorTypeQuestion = validatorsQuestion.visibleRows[1].cells[0].question;
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
  triggerTypeQuestion = triggersQuestion.visibleRows[1].cells[0].question;
  triggerTypeQuestion.value = "completetrigger";
  expect(
    triggersQuestion.visibleRows[1].detailPanel.getQuestionByName("expression")
      .value
  ).toEqual("{q1} = 1");
  expect(survey.triggers[0].getType()).toEqual("completetrigger");
  expect(survey.triggers[1].getType()).toEqual("completetrigger");
});

test("calculatedValues property editor", () => {
  var survey = new SurveyModel();
  survey.calculatedValues.push(new CalculatedValue("var1", "{q1}=1"));
  var propertyGrid = new PropertyGridModelTester(survey);
  var calcValuesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("calculatedValues")
  );
  expect(calcValuesQuestion).toBeTruthy();
  expect(calcValuesQuestion.visibleRows).toHaveLength(1);
  calcValuesQuestion.visibleRows[0].showDetailPanel();
  var expQ = calcValuesQuestion.visibleRows[0].detailPanel.getQuestionByName(
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
  var expQ = htmlConditionsQuestion.visibleRows[0].detailPanel.getQuestionByName(
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
  var expQ = urlConditionsQuestion.visibleRows[0].detailPanel.getQuestionByName(
    "expression"
  );
  expect(expQ).toBeTruthy();
  expect(expQ.value).toEqual("{q1}=1");
  expQ.value = "{q1}=2";
  expect(survey.navigateToUrlOnCondition[0].expression).toEqual("{q1}=2");
  urlConditionsQuestion.addRow();
  expect(survey.navigateToUrlOnCondition).toHaveLength(2);
});

test("QuestionMultipleTextModel items property editor", () => {
  var question = new QuestionMultipleTextModel("q1");
  question.addItem("item1", "Item 1");
  var propertyGrid = new PropertyGridModelTester(question);
  var itemsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("items")
  );
  expect(itemsQuestion).toBeTruthy();
  expect(itemsQuestion.visibleRows).toHaveLength(1);
  itemsQuestion.visibleRows[0].showDetailPanel();
  var titleQ = itemsQuestion.visibleRows[0].detailPanel.getQuestionByName(
    "title"
  );
  expect(titleQ).toBeTruthy();
  expect(titleQ.value).toEqual("Item 1");
  titleQ.value = "item 2";
  expect(question.items[0].title).toEqual("item 2");
  itemsQuestion.addRow();
  expect(question.items).toHaveLength(2);
  expect(question.items[1].name).toEqual("item2");
});
test("bindings property editor", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q2" },
      { type: "matrixdynamic", name: "q1", bindings: { rowCount: "q2" } },
      { type: "text", name: "q3" },
    ],
  });
  var matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("q1");
  var propertyGrid = new PropertyGridModelTester(matrix);
  var bindingsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("bindings")
  );
  expect(bindingsQuestion).toBeTruthy();
  expect(bindingsQuestion.getType()).toEqual("matrixdropdown");
  expect(bindingsQuestion.visibleRows).toHaveLength(1);
  expect(bindingsQuestion.visibleRows[0].rowName).toEqual("rowCount");
  expect(bindingsQuestion.columns).toHaveLength(1);
  var q = bindingsQuestion.visibleRows[0].cells[0].question;
  expect(q.choices).toHaveLength(3);
  expect(q.value).toEqual("q2");
  q.value = "q3";
  expect(matrix.bindings.getValueNameByPropertyName("rowCount")).toEqual("q3");
});
test("restfull property editor", () => {
  var question = new QuestionDropdownModel("q1");
  question.choicesByUrl.url = "myUrl";
  var propertyGrid = new PropertyGridModelTester(question);
  var restFullQuestion = <QuestionCompositeModel>(
    propertyGrid.survey.getQuestionByName("choicesByUrl")
  );
  expect(restFullQuestion).toBeTruthy();
  expect(restFullQuestion.getType()).toEqual("propertygrid_restfull");
  var urlQuestion = restFullQuestion.contentPanel.getQuestionByName("url");
  expect(urlQuestion).toBeTruthy();
  expect(urlQuestion.value).toEqual("myUrl");
  urlQuestion.value = "myUrl2";
  expect(question.choicesByUrl.url).toEqual("myUrl2");
});
test("options.readOnly is true", () => {
  var options = new EmptySurveyCreatorOptions();
  options.readOnly = true;
  var question = new QuestionDropdownModel("q1");
  var propertyGrid = new PropertyGridModelTester(question, options);
  expect(propertyGrid.survey.mode).toEqual("display");
});
test("options.onCanShowPropertyCallback and property visibility", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onCanShowPropertyCallback = (
    object: any,
    property: JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean => {
    return property.name == "name" || property.name == "renderAs";
  };
  var question = new QuestionDropdownModel("q1");
  var propertyGrid = new PropertyGridModelTester(question, options);
  expect(propertyGrid.survey.getQuestionByName("name").isVisible).toEqual(true);
  expect(propertyGrid.survey.getQuestionByName("isRequired").isVisible).toEqual(
    false
  );
});
test("property visibleIf attribute and options.onCanShowPropertyCallback", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onCanShowPropertyCallback = (
    object: any,
    property: JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean => {
    return false;
  };
  var question = new QuestionCheckboxModel("q1");
  var propertyGrid = new PropertyGridModelTester(question, options);
  var otherTextPropEd = propertyGrid.survey.getQuestionByName("otherText");
  expect(otherTextPropEd.isVisible).toEqual(false);
  question.hasOther = true;
  expect(otherTextPropEd.isVisible).toEqual(false);
});
/* TODO implement after releasing v1.9.21
test("restfull property editor and options.onCanShowPropertyCallback", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onCanShowPropertyCallback = (
    object: any,
    property: JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean => {
    return property.name == "choicesByUrl" || property.name == "url";
  };
  var question = new QuestionDropdownModel("q1");
  question.choicesByUrl.url = "myUrl";
  var propertyGrid = new PropertyGridModelTester(question);
  var restFullQuestion = <QuestionCompositeModel>(
    propertyGrid.survey.getQuestionByName("choicesByUrl")
  );
  expect(restFullQuestion).toBeTruthy();
  expect(restFullQuestion.getType()).toEqual("propertygrid_restfull");
  var urlQuestion = restFullQuestion.contentPanel.getQuestionByName("url");
  expect(urlQuestion.visible).toEqual(true);
  var pathQuestion = restFullQuestion.contentPanel.getQuestionByName("path");
  expect(pathQuestion.visible).toEqual(false);

  urlQuestion.value = "myUrl2";
  expect(question.choicesByUrl.url).toEqual("myUrl2");
});
*/
test("itemvalue[] property editor + detail panel + options.onCanShowPropertyCallback", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onCanShowPropertyCallback = (
    object: any,
    property: JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean => {
    return property.name !== "enableIf";
  };
  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question, options);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var row = choicesQuestion.visibleRows[0];
  row.showDetailPanel();
  expect(row.detailPanel.getQuestionByName("visibleIf").visible).toEqual(true);
  expect(row.detailPanel.getQuestionByName("enableIf").visible).toEqual(false);
});
test("itemvalue[] property editor + create columns + options.onCanShowPropertyCallback", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onCanShowPropertyCallback = (
    object: any,
    property: JsonObjectProperty,
    showMode: string,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean => {
    return showMode != "list" || property.name !== "text";
  };
  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question, options);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.columns).toHaveLength(1);
  expect(choicesQuestion.columns[0].name).toEqual("value");

  question = new QuestionDropdownModel("q1");
  propertyGrid = new PropertyGridModelTester(question, options);
  choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.columns).toHaveLength(1);
});

test("options.onCollectionItemDeletingCallback", () => {
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
  var survey = new SurveyModel();
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  survey.addNewPage("page3");
  var propertyGrid = new PropertyGridModelTester(survey, options);
  var pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  var rows = pagesQuestion.visibleRows;
  expect(pagesQuestion.canRemoveRow(rows[0])).toBeFalsy();
  expect(pagesQuestion.canRemoveRow(rows[1])).toBeFalsy();
  expect(pagesQuestion.canRemoveRow(rows[2])).toBeTruthy();
});
test("options.onCanDeleteItemCallback", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onCanDeleteItemCallback = (
    object: any,
    item: Base,
    allowDelete: boolean
  ): boolean => {
    //check all properties
    return item["name"] == "col2" && object.getType() == "matrixdynamic";
  };
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  question.addColumn("col3");
  var propertyGrid = new PropertyGridModelTester(question, options);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  var rows = columnsQuestion.visibleRows;
  expect(columnsQuestion.canRemoveRow(rows[0])).toBeFalsy();
  expect(columnsQuestion.canRemoveRow(rows[1])).toBeTruthy();
  expect(columnsQuestion.canRemoveRow(rows[2])).toBeFalsy();
});
test("options.onItemValueAddedCallback", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onItemValueAddedCallback = (
    obj: Base,
    propertyName: string,
    itemValue: ItemValue,
    itemValues: Array<ItemValue>
  ) => {
    itemValue.text =
      obj.getType() +
      ":" +
      propertyName +
      "," +
      itemValue.value +
      "," +
      itemValues.length.toString();
  };

  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question, options);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  choicesQuestion.addRow();
  expect(question.choices).toHaveLength(4);
  expect(question.choices[3].text).toEqual("dropdown:choices,4,4");
});
test("options.onMatrixDropdownColumnAddedCallback", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onMatrixDropdownColumnAddedCallback = (
    matrix: Question,
    column: MatrixDropdownColumn,
    columns: Array<MatrixDropdownColumn>
  ) => {
    column.title = matrix.name + ":" + columns.length;
  };
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  question.addColumn("col3");
  var propertyGrid = new PropertyGridModelTester(question, options);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  columnsQuestion.addRow();
  expect(question.columns[3].title).toEqual("q1:4");
});
test("options.onSetPropertyEditorOptionsCallback", () => {
  var options = new EmptySurveyCreatorOptions();
  var propName = "";
  var object = null;
  options.onSetPropertyEditorOptionsCallback = (
    propertyName: string,
    obj: Base,
    options: any
  ) => {
    if (propertyName != "choices") return;
    propName = propertyName;
    object = obj;
    options.allowAddRemoveItems = false;
    //TODO we do not have these functionality yet
    //options.allowRemoveAllItems
    //options.showTextView
    //options.itemsEntryType
  };

  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question, options);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(propName).toEqual("choices");
  expect(object.getType()).toEqual("dropdown");
  expect(choicesQuestion.allowAddRows).toEqual(false);
  expect(choicesQuestion.allowRemoveRows).toEqual(false);
});
