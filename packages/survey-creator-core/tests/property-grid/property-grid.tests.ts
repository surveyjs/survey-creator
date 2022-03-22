import {
  PropertyGridModel,
  PropertyGridEditorCollection,
  PropertyJSONGenerator,
  PropertyGridEditorBoolean,
  IPropertyGridEditor
} from "../../src/property-grid";
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
  SurveyTriggerSetValue,
  QuestionMatrixModel,
  Serializer,
  QuestionPanelDynamicModel,
  QuestionMatrixDropdownModel,
  IAction,
  QuestionRatingModel,
  QuestionCustomModel,
  surveyLocalization,
  AdaptiveActionContainer,
  QuestionCommentModel,
  QuestionImagePickerModel
} from "survey-core";
import {
  ISurveyCreatorOptions,
  EmptySurveyCreatorOptions,
  ICollectionItemAllowOperations,
  settings
} from "../../src/settings";
import { ConditionEditor } from "../../src/property-grid/condition-survey";
import { PropertyGridEditorCondition } from "../../src/property-grid/condition";
import { QuestionLinkValueModel } from "../../src/components/link-value";
import {
  PropertyGridValueEditor,
  PropertyGridRowValueEditor,
  PropertyGridValueEditorBase
} from "../../src/property-grid/values";
import { PropertyGridEditorMatrixMutlipleTextItems } from "../../src/property-grid/matrices";

export * from "../../src/property-grid/matrices";
export * from "../../src/property-grid/condition";
export * from "../../src/property-grid/restfull";

export class PropertyGridModelTester extends PropertyGridModel {
  constructor(obj: Base, options: ISurveyCreatorOptions = null) {
    PropertyGridEditorCollection.clearHash();
    super(obj, options);
  }
}
function findSetupAction(actions: Array<any>): any {
  for (var i = 0; i < actions.length; i++) {
    if (actions[i].id === "property-grid-setup") return actions[i];
  }
  return null;
}

test("Check property grid survey options", () => {
  const oldValue = Serializer.findProperty(
    "survey",
    "showProgressBar"
  ).defaultValue;
  Serializer.findProperty("survey", "showProgressBar").defaultValue = "top";
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  expect(propertyGrid.survey.showNavigationButtons).toEqual("none");
  expect(propertyGrid.survey.showProgressBar).toEqual("off");
  Serializer.findProperty("survey", "showProgressBar").defaultValue = oldValue;
});

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
  var actions = generalPanel.getTitleActions();
  expect(actions).toHaveLength(0);
  var choicesPanel = <PanelModel>propertyGrid.survey.getPanelByName("choices");
  expect(choicesPanel).toBeTruthy();
  expect(choicesPanel.title).toEqual("Choices");
});
test("Stop doing it because of title actions - Hide question title if property is first in tab and has the same title as tab", () => {
  var question = new QuestionCheckboxModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = propertyGrid.survey.getQuestionByName("choices");
  expect(choicesQuestion).toBeTruthy();
  expect(choicesQuestion.titleLocation).toEqual("default");
  expect(choicesQuestion.title).toEqual("Choices");
});

test("boolean property editor (boolean/switch)", () => {
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var startWithNewLineQuestion =
    propertyGrid.survey.getQuestionByName("startWithNewLine");
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
  var titleLocationQuestion = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("titleLocation");
  expect(titleLocationQuestion.getType()).toEqual("dropdown"); //"correct property editor is created"
  expect(titleLocationQuestion.choices.length).toEqual(5); // "There are five choices"
  expect(titleLocationQuestion.value).toEqual("default"); //"the value is correct"
  question.titleLocation = "top";
  expect(titleLocationQuestion.value).toEqual("top"); //"property editor react on value chage"
  titleLocationQuestion.value = "bottom";
  expect(question.titleLocation).toEqual("bottom"); //"property editor change the question property"
});
test("dropdown property editor localization", (): any => {
  var survey = new SurveyModel();
  var propertyGrid = new PropertyGridModelTester(survey);
  var questionDescriptionLocationQuestion = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("questionDescriptionLocation");
  expect(questionDescriptionLocationQuestion.getType()).toEqual("buttongroup"); //"correct property editor is created" //since choices.length < 5 buttongroup rendered instead of dropdown
  expect(questionDescriptionLocationQuestion.choices[0].value).toEqual(
    "underInput"
  );
  expect(questionDescriptionLocationQuestion.choices[0].text).toEqual(
    "under input"
  );

  var showPreviewQuestion = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("showPreviewBeforeComplete");
  expect(showPreviewQuestion.getType()).toEqual("dropdown"); //"correct property editor is created" a lot of text
  expect(showPreviewQuestion.choices[0].value).toEqual("noPreview");
  expect(showPreviewQuestion.choices[0].text).toEqual("no preview");

  var localeQuestion = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("locale");
  expect(localeQuestion.getType()).toEqual("dropdown"); //"correct property editor is created"
  expect(localeQuestion.showOptionsCaption).toBeTruthy();
  expect(localeQuestion.optionsCaption).toEqual("Default (english)");
  expect(localeQuestion.displayValue).toEqual("Default (english)");
});
test("dropdown property editor localization & empty supportedLocales", (): any => {
  var oldSupportedLocales = surveyLocalization.supportedLocales;
  surveyLocalization.supportedLocales = ["en"];

  var survey = new SurveyModel();
  var propertyGrid = new PropertyGridModelTester(survey);
  var localeQuestion = <QuestionDropdownModel>(
    propertyGrid.survey.getQuestionByName("locale")
  );
  expect(localeQuestion.getType()).toEqual("dropdown"); //"correct property editor is created"
  expect(localeQuestion.choices).toHaveLength(0);
  expect(localeQuestion.showOptionsCaption).toBeTruthy();
  expect(localeQuestion.optionsCaption).toEqual("Default (english)");
  expect(localeQuestion.displayValue).toEqual("Default (english)");
  surveyLocalization.supportedLocales = oldSupportedLocales;
});

test("settings.propertyGrid.useButtonGroup", (): any => {
  var survey = new SurveyModel();
  var propertyGrid = new PropertyGridModelTester(survey);
  var questionDescriptionLocationQuestion =
    propertyGrid.survey.getQuestionByName("questionDescriptionLocation");
  expect(questionDescriptionLocationQuestion.getType()).toEqual("buttongroup");
  settings.propertyGrid.useButtonGroup = false;
  propertyGrid = new PropertyGridModelTester(survey);
  questionDescriptionLocationQuestion = propertyGrid.survey.getQuestionByName(
    "questionDescriptionLocation"
  );
  expect(questionDescriptionLocationQuestion.getType()).toEqual("dropdown");
  settings.propertyGrid.useButtonGroup = true;
});

test("dropdown property editor, get choices on callback", () => {
  var choices = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  var callback = null;
  Serializer.addProperty("survey", {
    name: "region",
    choices: function (obj, choicesCallback) {
      callback = choicesCallback;
      return [];
    }
  });
  var survey = new SurveyModel();
  var propertyGrid = new PropertyGridModelTester(survey);
  var setQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("region")
  );
  expect(setQuestion.choices).toHaveLength(0);
  callback(choices);
  expect(setQuestion.choices).toHaveLength(5);
  Serializer.removeProperty("survey", "region");
});

test("set property editor", () => {
  Serializer.addProperty("question", {
    name: "prop1:set",
    choices: ["item1", "item2", "item3"]
  });
  var question = new QuestionTextModel("q1");
  (<any>question).prop1 = ["item1", "item3"];
  var propertyGrid = new PropertyGridModelTester(question);
  var editQuestion = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("prop1");
  expect(editQuestion.getType()).toEqual("checkbox");
  expect(editQuestion.choices.length).toEqual(3);
  expect(editQuestion.value).toHaveLength(2);
  expect(editQuestion.value[0]).toEqual("item1");
  expect(editQuestion.value[1]).toEqual("item3");
  (<any>question).prop1 = ["item2"];
  expect(editQuestion.value).toHaveLength(1);
  expect(editQuestion.value[0]).toEqual("item2");
  editQuestion.value = ["item2", "item3"];
  expect((<any>question).prop1).toHaveLength(2);
  expect((<any>question).prop1[0]).toEqual("item2");
  expect((<any>question).prop1[1]).toEqual("item3");
  Serializer.removeProperty("question", "prop1");
});

test("string[] property editor", () => {
  var question = new QuestionTextModel("q1");
  question.dataList = ["item1", "item2"];
  var propertyGrid = new PropertyGridModelTester(question);
  var dataListQuestion = propertyGrid.survey.getQuestionByName("dataList");
  expect(dataListQuestion.getType()).toEqual("comment");
  expect(dataListQuestion.value).toEqual("item1\nitem2");
  dataListQuestion.value = "item1\nitem2\nitem3";
  expect(question.dataList).toHaveLength(3);
  expect(question.dataList[2]).toEqual("item3");
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
test("itemvalue[] property editor, remove action", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion).toBeTruthy(); //"choices property editor created");
  expect(choicesQuestion.getType()).toEqual("matrixdynamic"); //"It is a matrix");
  expect(choicesQuestion.rowCount).toEqual(3);
  expect(choicesQuestion.renderedTable.rows[0].cells).toHaveLength(4);
  const cell = choicesQuestion.renderedTable.rows[0].cells[3];
  expect(cell.isActionsCell).toBeTruthy();
  expect(cell.item.value).toBeTruthy();
  const actions = <AdaptiveActionContainer>cell.item.value;
  expect(actions.actions).toHaveLength(2);
  const action = actions.actions[1];
  expect(action.component).toEqual("sv-action-bar-item");
  expect(action.iconName).toEqual("icon-delete");
  expect(action.title).toEqual("Remove");
  expect(action.showTitle).toBeFalsy();
  action.action();
  expect(choicesQuestion.rowCount).toEqual(2);
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
  expect(row.detailPanel.getQuestionByName("visibleIf")).toBeTruthy(); //"visibleIf property is here"
});
test("itemvalue[] property editor + row actions", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  const row = choicesQuestion.renderedTable.rows[0];
  expect(row.cells).toHaveLength(4);
  expect(row.cells[3].isActionsCell).toBeTruthy();
  expect(row.cells[3].item).toBeTruthy();
  const actions = row.cells[3].item.value.actions;
  expect(actions).toHaveLength(2);
  const detailAction: IAction = actions.filter(
    (item: IAction) => item.id === "show-detail"
  )[0];
  expect(detailAction).toBeTruthy();
  expect(detailAction.iconName).toEqual("icon-edit");
  detailAction.action();
  expect(detailAction.iconName).toEqual("icon-editing-finish");
});
test("itemvalue[] property editor + row actions", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  const row = choicesQuestion.renderedTable.rows[0];
  expect(row.cells).toHaveLength(4);
  expect(row.cells[3].isActionsCell).toBeTruthy();
  expect(row.cells[3].item).toBeTruthy();
  const actions = row.cells[3].item.value.actions;
  expect(actions).toHaveLength(2);
  const detailAction: IAction = actions.filter(
    (item: IAction) => item.id === "show-detail"
  )[0];
  expect(detailAction).toBeTruthy();
  expect(detailAction.iconName).toEqual("icon-edit");
  detailAction.action();
  expect(detailAction.iconName).toEqual("icon-editing-finish");
});
test("itemvalue[] custom dropdown property", () => {
  Serializer.addProperty("itemvalue", { name: "prop1", choices: ["item1", "item2"] });

  var question = new QuestionCheckboxModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.columns).toHaveLength(3);
  expect(choicesQuestion.columns[2].name).toEqual("prop1");
  expect(choicesQuestion.columns[2].cellType).toEqual("dropdown");
  expect(choicesQuestion.columns[2].choices).toHaveLength(2);
  expect(choicesQuestion.columns[2].choices[0].value).toEqual("item1");

  Serializer.removeProperty("itemvalue", "prop1");
});
test("itemvalue[] custom properties with dependsOn", () => {
  Serializer.addProperty("itemvalue", { name: "prop1", choices: ["item1", "item2"] });
  Serializer.addProperty("itemvalue", { name: "prop2", dependsOn: "prop1", visibleIf: (obj: any) => { return obj.prop1 == "item1"; } });

  var question = new QuestionCheckboxModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.columns).toHaveLength(4);
  const rows = choicesQuestion.visibleRows;
  const cellProp1 = rows[0].cells[2];
  const cellProp2 = rows[0].cells[3];
  expect(cellProp1.question.choices).toHaveLength(2);
  expect(cellProp2.question.visibleIf).toBeTruthy();
  expect(cellProp2.question.isVisible).toBeFalsy();
  cellProp1.question.value = "item1";
  expect(cellProp2.question.isVisible).toBeTruthy();
  cellProp1.question.value = "item2";
  expect(cellProp2.question.isVisible).toBeFalsy();

  Serializer.removeProperty("itemvalue", "prop1");
  Serializer.removeProperty("itemvalue", "prop2");
});
test("column[] property editor", (): any => {
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  question.addColumn("col3");
  var propertyGrid = new PropertyGridModelTester(question);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  expect(columnsQuestion).toBeTruthy(); //"choices property editor created");
  expect(columnsQuestion.showHeader).toBeFalsy; //"No header in matrix";
  expect(columnsQuestion.getType()).toEqual("matrixdynamic"); //"It is a matrix";
  expect(columnsQuestion.columns).toHaveLength(2); //"There are two columns");
  expect(columnsQuestion.columns[0].title).toEqual("Name");
  expect(columnsQuestion.visibleRows).toHaveLength(3); //"There are three elements"
  expect(columnsQuestion.visibleRows[0].cells[0].value).toEqual("col1"); //"the first cell value is 'col1'"
  columnsQuestion.visibleRows[0].cells[0].value = "col11";
  expect(question.columns[0].name).toEqual("col11"); //"column name has been changed"

  columnsQuestion.addRow();
  expect(question.columns).toHaveLength(4); //"There are 4 items now");
  expect(question.columns[3].getType()).toEqual("matrixdropdowncolumn"); //"Object created correctly"
  expect(question.columns[3].name).toEqual("col4"); //"Object created correctly"
  question.columns[1].title = "Column 2";
  expect(columnsQuestion.visibleRows[1].cells[1].value).toEqual("Column 2"); //"the second cell in second row is correct"
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
test("Test options.allowEditExpressionsInTextEditor", () => {
  var question = new QuestionTextModel("q1");
  var options = new EmptySurveyCreatorOptions();
  options.allowEditExpressionsInTextEditor = false;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var conditionQuestion = propertyGrid.survey.getQuestionByName("visibleIf");
  var expressionQuestion = propertyGrid.survey.getQuestionByName(
    "defaultValueExpression"
  );
  expect(conditionQuestion.isReadOnly).toBeTruthy();
  expect(expressionQuestion.isReadOnly).toBeFalsy();

  options.allowEditExpressionsInTextEditor = true;
  propertyGrid = new PropertyGridModelTester(question, options);
  conditionQuestion = propertyGrid.survey.getQuestionByName("visibleIf");
  expressionQuestion = propertyGrid.survey.getQuestionByName(
    "defaultValueExpression"
  );
  expect(conditionQuestion.isReadOnly).toBeFalsy();
  expect(expressionQuestion.isReadOnly).toBeFalsy();
});

test("Support question property editor", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ],
    triggers: [{ type: "skiptrigger", gotoName: "q2" }]
  });
  var trigger = survey.triggers[0];
  var propertyGrid = new PropertyGridModelTester(trigger);
  var gotoNamePropEd = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("gotoName");
  expect(gotoNamePropEd).toBeTruthy();
  expect(gotoNamePropEd.choices).toHaveLength(2);
  expect(gotoNamePropEd.choices[0].value).toEqual("q1");
  expect(gotoNamePropEd.value).toEqual("q2");
});

test("Support select base question property editor", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "checkbox", name: "q3" },
      { type: "dropdown", name: "q4" }
    ]
  });
  var question = <QuestionDropdownModel>survey.getQuestionByName("q4");
  var propertyGrid = new PropertyGridModelTester(question);
  var gotoNamePropEd = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("choicesFromQuestion");
  expect(gotoNamePropEd).toBeTruthy();
  expect(gotoNamePropEd.choices).toHaveLength(1);
  expect(gotoNamePropEd.choices[0].value).toEqual("q3");
  expect(question.choicesFromQuestion).toBeFalsy();
  gotoNamePropEd.value = "q3";
  expect(question.choicesFromQuestion).toEqual("q3");
});

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

test("calculatedValues property editor", () => {
  var survey = new SurveyModel();
  survey.calculatedValues.push(new CalculatedValue("var1", "{q1}=1"));
  var propertyGrid = new PropertyGridModelTester(survey);
  var calcValuesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("calculatedValues")
  );
  expect(calcValuesQuestion).toBeTruthy();
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
  rows[0].showDetailPanel();
  var titleQ =
    itemsQuestion.visibleRows[0].detailPanel.getQuestionByName("title");
  expect(titleQ).toBeTruthy();
  expect(titleQ.value).toEqual("Item 1");
  titleQ.value = "item 2";
  expect(question.items[0].title).toEqual("item 2");
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
  rows[0].showDetailPanel();
  var validatorsQuestion = <QuestionMatrixDynamicModel>(
    rows[0].detailPanel.getQuestionByName("validators")
  );
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
test("check multiple text items editing by fast entry", () => {
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
  expect(itemsQuestion.renderedTable.rows[1].cells[1].question.value).toEqual("item2");
  expect(itemsQuestion.renderedTable.rows[1].cells[2].question.value).toEqual("Item 2");
});
test("bindings property editor", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q2" },
      { type: "matrixdynamic", name: "q1", bindings: { rowCount: "q2" } },
      { type: "text", name: "q3" }
    ]
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

test("Dynamic panel 'Panel count' binding property editor", () => {
  const survey = new SurveyModel({
    "elements": [
      {
        "type": "text",
        "name": "numberInput",
        "inputType": "number"
      },
      {
        "type": "text",
        "name": "q1",
        "inputType": "number"
      },
      {
        "type": "paneldynamic",
        "name": "paneldynamic",
        "bindings": {
          "panelCount": "numberInput"
        }
      }
    ]
  });
  const paneldynamic = <QuestionPanelDynamicModel>survey.getQuestionByName("paneldynamic");
  const propertyGrid = new PropertyGridModelTester(survey);

  propertyGrid.obj = paneldynamic;
  expect(paneldynamic.bindings.getValueNameByPropertyName("panelCount")).toEqual("numberInput");
  let bindingsQuestion = <QuestionMatrixDropdownModel>(propertyGrid.survey.getQuestionByName("bindings"));
  bindingsQuestion["createRenderedTable"]();
  expect(bindingsQuestion.renderedTable).toBeDefined();
  expect(paneldynamic.bindings.getValueNameByPropertyName("panelCount")).toEqual("numberInput");
  expect(bindingsQuestion.visibleRows[0].cells[0].question.value).toEqual("numberInput");

  bindingsQuestion.visibleRows[0].cells[0].question.value = "q1";
  expect(paneldynamic.bindings.getValueNameByPropertyName("panelCount")).toEqual("q1");
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
test("restfull property editor, show imageLinkName", () => {
  const dropdown = new QuestionDropdownModel("q1");
  const imagePicker = new QuestionImagePickerModel("q2");
  let propertyGrid = new PropertyGridModelTester(imagePicker);
  let restFullQuestion = <QuestionCompositeModel>(
    propertyGrid.survey.getQuestionByName("choicesByUrl")
  );
  let imageLinkQuestion = restFullQuestion.contentPanel.getQuestionByName("imageLinkName");
  expect(imageLinkQuestion.visibleIf).toBeTruthy();
  expect(imageLinkQuestion.isVisible).toBeTruthy();

  propertyGrid = new PropertyGridModelTester(dropdown);
  restFullQuestion = <QuestionCompositeModel>(
    propertyGrid.survey.getQuestionByName("choicesByUrl")
  );
  imageLinkQuestion = restFullQuestion.contentPanel.getQuestionByName("imageLinkName");
  expect(imageLinkQuestion.isVisible).toBeFalsy();
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
test("options.onIsPropertyReadOnlyCallback and property enable/disable", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onIsPropertyReadOnlyCallback = (
    object: any,
    property: JsonObjectProperty,
    readOnly: boolean,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean => {
    return property.name == "name" || property.name == "renderAs";
  };
  var question = new QuestionDropdownModel("q1");
  var propertyGrid = new PropertyGridModelTester(question, options);
  expect(propertyGrid.survey.getQuestionByName("name").isReadOnly).toEqual(
    true
  );
  expect(
    propertyGrid.survey.getQuestionByName("isRequired").isReadOnly
  ).toEqual(false);
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
  expect(pathQuestion.visible).toEqual(true);

  urlQuestion.value = "myUrl2";
  expect(question.choicesByUrl.url).toEqual("myUrl2");
});
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
  expect(row.detailPanel.getQuestionByName("visibleIf").visible).toBeTruthy();
  expect(row.detailPanel.getQuestionByName("enableIf").visible).toBeFalsy();
});
test("itemvalue[] property editor + detail panel + options.onIsPropertyReadOnlyCallback", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onIsPropertyReadOnlyCallback = (
    object: any,
    property: JsonObjectProperty,
    readOnly: boolean,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean => {
    if (!parentObj || !parentProperty) return readOnly;
    return (
      property.name == "visibleIf" &&
      parentObj.getType() == "matrixdropdown" &&
      parentProperty.name == "rows"
    );
  };
  var question = new QuestionMatrixDropdownModel("q1");
  question.rows = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question, options);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("rows")
  );
  var row = choicesQuestion.visibleRows[0];
  row.showDetailPanel();
  expect(row.detailPanel.getQuestionByName("visibleIf").readOnly).toEqual(true);
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

test("itemvalue[] property editor  + create columns + options.onIsPropertyReadOnlyCallback", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onIsPropertyReadOnlyCallback = (
    object: any,
    property: JsonObjectProperty,
    readOnly: boolean,
    parentObj: any,
    parentProperty: JsonObjectProperty
  ): boolean => {
    if (!parentObj || !parentProperty) return readOnly;
    return (
      property.name == "value" &&
      parentObj.getType() == "matrixdropdown" &&
      parentProperty.name == "rows"
    );
  };
  var question = new QuestionMatrixDropdownModel("q1");
  question.rows = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question, options);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("rows")
  );
  expect(choicesQuestion.columns).toHaveLength(2);
  var rows = choicesQuestion.visibleRows;
  expect(choicesQuestion.columns[0].name).toEqual("value");
  expect(rows[0].cells[0].question.value).toEqual(1);
  expect(rows[0].cells[0].question.isReadOnly).toBeTruthy();
  expect(rows[0].cells[1].question.isReadOnly).toBeFalsy();
  expect(rows[1].cells[0].question.isReadOnly).toBeTruthy();
  expect(rows[1].cells[1].question.isReadOnly).toBeFalsy();
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
test("options.onCollectionItemAllowingCallback", () => {
  const options = new EmptySurveyCreatorOptions();
  options.onCollectionItemAllowingCallback = (
    obj: Base,
    property: JsonObjectProperty,
    collection: Array<Base>,
    item: Base,
    options: ICollectionItemAllowOperations
  ): void => {
    options.allowDelete = (<ItemValue>item).value % 2 == 1;
    options.allowEdit = (<ItemValue>item).value > 2;
  };
  const question = new QuestionDropdownModel("q1");
  for (let i = 0; i < 5; i++) {
    question.choices.push(new ItemValue(i + 1));
  }
  var propertyGrid = new PropertyGridModelTester(question, options);
  var editQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var rows = editQuestion.visibleRows;
  expect(editQuestion.canRemoveRow(rows[0])).toBeTruthy();
  expect(editQuestion.canRemoveRow(rows[1])).toBeFalsy();
  expect(editQuestion.canRemoveRow(rows[2])).toBeTruthy();
  expect(editQuestion.canRemoveRow(rows[3])).toBeFalsy();
  expect(editQuestion.canRemoveRow(rows[4])).toBeTruthy();

  expect(rows[0].hasPanel).toBeFalsy();
  expect(rows[1].hasPanel).toBeFalsy();
  expect(rows[2].hasPanel).toBeTruthy();
  expect(rows[3].hasPanel).toBeTruthy();
  expect(rows[4].hasPanel).toBeTruthy();

  expect(rows[0].cells[0].question.isReadOnly).toBeTruthy();
  expect(rows[1].cells[0].question.isReadOnly).toBeTruthy();
  expect(rows[2].cells[0].question.isReadOnly).toBeFalsy();
  expect(rows[3].cells[0].question.isReadOnly).toBeFalsy();
  expect(rows[4].cells[0].question.isReadOnly).toBeFalsy();
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
  var rows = choicesQuestion.visibleRows;
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
  var rows = columnsQuestion.visibleRows;
  columnsQuestion.addRow();
  expect(question.columns[3].title).toEqual("q1:4");
});
test("matrix column has isUnique property", () => {
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  var propertyGrid = new PropertyGridModelTester(question.columns[0]);
  var isUniqueQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("isUnique")
  );
  expect(isUniqueQuestion).toBeTruthy();
  expect(isUniqueQuestion.getType()).toEqual("boolean");
});
test("options.onSetPropertyEditorOptionsCallback", () => {
  const options = new EmptySurveyCreatorOptions();
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
    options.allowRemoveAllItems = false;
    options.showTextView = false;
  };

  const question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  const propertyGrid = new PropertyGridModelTester(question, options);
  const choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(propName).toEqual("choices");
  expect(object.getType()).toEqual("dropdown");
  expect(choicesQuestion.allowAddRows).toEqual(false);
  expect(choicesQuestion.allowRemoveRows).toEqual(false);
  const actions = choicesQuestion.getTitleActions();
  expect(actions).toHaveLength(2);
  expect(actions[0].enabled).toBeFalsy();
  expect(actions[1].enabled).toBeFalsy();
});

test("options.onValueChangingCallback", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onValueChangingCallback = (options: any) => {
    if (options.propertyName != "name") return;
    if (options.obj.getType() == "dropdown" && options.newValue.length > 3) {
      options.newValue = options.newValue.substring(0, 3);
    }
  };

  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question, options);
  var nameQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("name")
  );
  nameQuestion.value = "q2";
  expect(question.name).toEqual("q2");
  nameQuestion.value = "qq22";
  expect(question.name).toEqual("qq2");
});

test("options.onGetErrorTextOnValidationCallback", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onGetErrorTextOnValidationCallback = (
    propertyName: string,
    obj: Base,
    value: any
  ): string => {
    if (propertyName != "name") return;
    if (obj.getType() != "dropdown" || value.length != 3) return "No3Letters";
    return null;
  };

  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question, options);
  var nameQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("name")
  );
  nameQuestion.value = "q2";
  expect(nameQuestion.errors).toHaveLength(1);
  expect(nameQuestion.errors[0].text).toEqual("No3Letters");
  expect(question.name).toEqual("q1");
  nameQuestion.value = "qq2";
  expect(nameQuestion.errors).toHaveLength(0);
  expect(question.name).toEqual("qq2");
});
test("options.onValueChangingCallback in matrix", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onValueChangingCallback = (options: any) => {
    if (options.propertyName != "name") return;
    if (
      options.obj.getType() == "matrixdropdowncolumn" &&
      options.newValue.length > 5
    ) {
      options.newValue = options.newValue.substring(0, 5);
    }
  };
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  question.addColumn("col3");
  var propertyGrid = new PropertyGridModelTester(question, options);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  columnsQuestion.visibleRows[0].getQuestionByColumnName("name").value =
    "col1234";
  expect(question.columns[0].name).toEqual("col12");
});
test("options.onGetErrorTextOnValidationCallback in matrix", () => {
  var options = new EmptySurveyCreatorOptions();
  options.onGetErrorTextOnValidationCallback = (
    propertyName: string,
    obj: Base,
    value: any
  ): string => {
    if (propertyName != "name") return;
    if (obj.getType() != "matrixdropdowncolumn" || value.length != 5)
      return "No5Letters";
    return null;
  };
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  question.addColumn("col3");
  var propertyGrid = new PropertyGridModelTester(question, options);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  columnsQuestion.visibleRows[0].getQuestionByColumnName("name").value =
    "col1234";
  expect(question.columns[0].name).toEqual("col1");
  columnsQuestion.visibleRows[0].getQuestionByColumnName("name").value =
    "col12";
  expect(question.columns[0].name).toEqual("col12");
});
test("QuestionLinekValueModel test", () => {
  const question = new QuestionLinkValueModel("q1");
  const checkQuestion = new QuestionCheckboxModel("q2");
  checkQuestion.choices = [
    { value: 1, text: "Item 1" },
    { value: 2, text: "Item 2" }
  ];
  (<any>question).obj = checkQuestion;
  expect(question.linkValueText).toEqual("Value is empty");
  question.value = [1, 2];
  expect(question.linkValueText).toEqual("Item 1, Item 2");

  question.showValueInLink = false;
  question.value = null;
  expect(question.linkValueText).toEqual("Set q1");
  question.value = [1, 2];
  expect(question.linkValueText).toEqual("Change q1");

});

test("DefaultValue editor", () => {
  PropertyGridEditorCollection.register(new PropertyGridValueEditor());
  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3, 4, 5];
  question.defaultValue = 2;
  var propertyGrid = new PropertyGridModelTester(question);
  const editQuestion = <QuestionLinkValueModel>propertyGrid.survey.getQuestionByName("defaultValue");
  const property = <JsonObjectProperty>(<any>editQuestion).property;
  expect(editQuestion).toBeTruthy();
  expect(editQuestion.getType()).toEqual("linkvalue");
  expect(editQuestion.value).toEqual(2);
  expect(editQuestion.linkValueText).toEqual("Change Default value");
  expect(editQuestion.isReadOnly).toBeFalsy();
  var editor = <PropertyGridValueEditor>(
    PropertyGridEditorCollection.getEditor(property)
  );
  const titleActions = editQuestion.getTitleActions();
  expect(titleActions).toHaveLength(2);
  expect(editQuestion.linkClickCallback).toBeTruthy();
  expect(titleActions[1].disabled).toBeFalsy();
  expect(editor).toBeTruthy();
  var valueEditor = editor.createPropertyEditorSetup(
    question,
    property,
    editQuestion,
    new EmptySurveyCreatorOptions()
  );
  var valueQuestion = valueEditor.editSurvey.getQuestionByName("question");
  expect(valueQuestion).toBeTruthy();
  expect(valueQuestion.value).toEqual(2);
  valueQuestion.value = 4;
  valueEditor.apply();
  expect(question.defaultValue).toEqual(4);
  editor.clearPropertyValue(
    question,
    property,
    editQuestion,
    new EmptySurveyCreatorOptions()
  );
  expect(question.defaultValue).toBeFalsy();
});
test("DefaultValue editor, use display value", () => {
  PropertyGridEditorCollection.register(new PropertyGridValueEditor());
  var question = new QuestionCheckboxModel("q1");
  question.choices = [
    { value: 1, text: "Item 1" },
    { value: 2, text: "Item 2" }
  ];
  var propertyGrid = new PropertyGridModelTester(question);
  var editQuestion = <QuestionLinkValueModel>propertyGrid.survey.getQuestionByName("defaultValue");
  expect(editQuestion.showValueInLink).toEqual(false);
  expect(editQuestion.linkValueText).toEqual("Set Default value");
  question.defaultValue = [1, 2];
  expect(editQuestion.linkValueText).toEqual("Change Default value");
  question.defaultValue = undefined;
  expect(editQuestion.linkValueText).toEqual("Set Default value");
});

test("DefaultValue editor for invisible values", () => {
  PropertyGridEditorCollection.register(new PropertyGridValueEditor());
  var question = new QuestionDropdownModel("q1");
  question.visibleIf = "{q2} = 1";
  question.visible = false;
  question.choices = [
    { value: 1, visibleIf: "{q2} = 2}" },
    { value: 2, enableIf: "{q2} = 2}" },
    3
  ];
  var propertyGrid = new PropertyGridModelTester(question);
  var editQuestion = propertyGrid.survey.getQuestionByName("defaultValue");
  const property = <JsonObjectProperty>(<any>editQuestion).property;
  var editor = <PropertyGridValueEditor>(
    PropertyGridEditorCollection.getEditor(property)
  );
  var valueEditor = editor.createPropertyEditorSetup(
    question,
    property,
    editQuestion,
    new EmptySurveyCreatorOptions()
  );
  var valueQuestion = <QuestionDropdownModel>valueEditor.editSurvey.getQuestionByName("question");
  expect(valueQuestion).toBeTruthy();
  expect(valueQuestion.isVisible).toBeTruthy();
  expect(valueQuestion.visibleChoices).toHaveLength(3);
  expect(valueQuestion.visibleChoices[1].isEnabled).toBeTruthy();
});

test("DefaultRowValue editor", () => {
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  question.rowCount = 2;
  question.defaultRowValue = { col1: 1, col2: 2 };
  var propertyGrid = new PropertyGridModelTester(question);
  var editQuestion = propertyGrid.survey.getQuestionByName("defaultRowValue");
  expect(editQuestion).toBeTruthy();
  const property = <JsonObjectProperty>(<any>editQuestion).property;
  var editor = <PropertyGridRowValueEditor>(
    PropertyGridEditorCollection.getEditor(property)
  );
  expect(editor).toBeTruthy();
  var valueEditor = editor.createPropertyEditorSetup(
    question,
    property,
    editQuestion,
    new EmptySurveyCreatorOptions()
  );
  var valueQuestion = valueEditor.editSurvey.getQuestionByName("question");
  expect(valueQuestion).toBeTruthy();
  expect(valueQuestion.value).toEqual([{ col1: 1, col2: 2 }]);
  valueQuestion.value = [{ col1: 3, col2: 4 }];
  valueEditor.apply();
  expect(question.defaultRowValue).toEqual({ col1: 3, col2: 4 });
  editor.clearPropertyValue(
    question,
    property,
    editQuestion,
    new EmptySurveyCreatorOptions()
  );
  expect(question.defaultRowValue).toBeFalsy();
});
test("DefaultPanelValue editor", () => {
  var question = new QuestionPanelDynamicModel("q1");
  question.template.addNewQuestion("text", "q1");
  question.template.addNewQuestion("text", "q2");
  question.panelCount = 2;
  question.defaultPanelValue = { q1: 1, q2: 2 };
  var propertyGrid = new PropertyGridModelTester(question);
  var editQuestion = propertyGrid.survey.getQuestionByName("defaultPanelValue");
  expect(editQuestion).toBeTruthy();
  const property = <JsonObjectProperty>(<any>editQuestion).property;
  var editor = <PropertyGridRowValueEditor>(
    PropertyGridEditorCollection.getEditor(property)
  );
  expect(editor).toBeTruthy();
  var valueEditor = editor.createPropertyEditorSetup(
    question,
    property,
    editQuestion,
    new EmptySurveyCreatorOptions()
  );
  var valueQuestion = valueEditor.editSurvey.getQuestionByName("question");
  expect(valueQuestion).toBeTruthy();
  expect(valueQuestion.value).toEqual([{ q1: 1, q2: 2 }]);
  valueQuestion.value = [{ q1: 3, q2: 4 }];
  valueEditor.apply();
  expect(question.defaultPanelValue).toEqual({ q1: 3, q2: 4 });
  editor.clearPropertyValue(
    question,
    property,
    editQuestion,
    new EmptySurveyCreatorOptions()
  );
  expect(question.defaultPanelValue).toBeFalsy();
});
test("Matrix cells editor", () => {
  var question = new QuestionMatrixModel("q1");
  question.columns = ["col1", "col2"];
  question.rows = ["row1", "row2"];
  question.cells.setJson({
    default: { col1: "dCol1" },
    row1: { col1: "val1" },
    row2: { col2: "val2" }
  });
  expect(question.cells.getJson()).toEqual({
    default: { col1: "dCol1" },
    row1: { col1: "val1" },
    row2: { col2: "val2" }
  });
  var propertyGrid = new PropertyGridModelTester(question);
  var editQuestion = propertyGrid.survey.getQuestionByName("cells");
  expect(editQuestion).toBeTruthy();
  const property = <JsonObjectProperty>(<any>editQuestion).property;
  var editor = <PropertyGridRowValueEditor>(
    PropertyGridEditorCollection.getEditor(property)
  );
  expect(editor).toBeTruthy();
  var valueEditor = editor.createPropertyEditorSetup(
    question,
    property,
    editQuestion,
    new EmptySurveyCreatorOptions()
  );
  var valueQuestion = valueEditor.editSurvey.getQuestionByName("question");
  expect(valueQuestion).toBeTruthy();
  expect(valueQuestion.value).toEqual({
    default: { col1: "dCol1" },
    row1: { col1: "val1" },
    row2: { col2: "val2" }
  });
  valueQuestion.value = {
    default: { col2: "dCol2" },
    row1: { col2: "val3" },
    row2: { col1: "val4" }
  };
  valueEditor.apply();
  expect(question.cells.getJson()).toEqual({
    default: { col2: "dCol2" },
    row1: { col2: "val3" },
    row2: { col1: "val4" }
  });
  editor.clearPropertyValue(
    question,
    property,
    editQuestion,
    new EmptySurveyCreatorOptions()
  );
  expect(question.cells.getJson()).toBeFalsy();
});
test("trigger value editor", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "dropdown", name: "q1", choices: [1, 2, 3, 4, 5] },
      { type: "text", name: "q2" }
    ],
    triggers: [
      {
        type: "setvalue",
        expression: "{q2} = 1",
        setToName: "q1",
        setValue: 1
      }
    ]
  });
  var trigger = <SurveyTriggerSetValue>survey.triggers[0];

  var propertyGrid = new PropertyGridModelTester(trigger);
  var editQuestion = propertyGrid.survey.getQuestionByName("setValue");
  expect(editQuestion).toBeTruthy();
  const property = <JsonObjectProperty>(<any>editQuestion).property;
  var editor = <PropertyGridRowValueEditor>(
    PropertyGridEditorCollection.getEditor(property)
  );
  expect(editor).toBeTruthy();
  var valueEditor = editor.createPropertyEditorSetup(
    trigger,
    property,
    editQuestion,
    new EmptySurveyCreatorOptions()
  );
  var valueQuestion = <QuestionDropdownModel>valueEditor.editSurvey.getQuestionByName("question");
  expect(valueQuestion).toBeTruthy();
  expect(valueQuestion.value).toEqual(1);
  expect(valueQuestion.choices).toHaveLength(5);
  valueQuestion.value = 3;
  valueEditor.apply();
  expect(trigger.setValue).toEqual(3);
  editor.clearPropertyValue(
    trigger,
    property,
    editQuestion,
    new EmptySurveyCreatorOptions()
  );
  expect(trigger.setValue).toBeFalsy();
});
test("Create setvalue trigger", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "dropdown", name: "q1", choices: [1, 2, 3, 4, 5] },
      { type: "text", name: "q2" }
    ]
  });
  survey.setDesignMode(true);
  var propertyGrid = new PropertyGridModelTester(survey);
  var triggersQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("triggers")
  );
  expect(triggersQuestion).toBeTruthy();
  expect(triggersQuestion.detailPanelShowOnAdding).toBeTruthy();
  triggersQuestion.addRow();
  expect(triggersQuestion.visibleRows[0].detailPanel).toBeTruthy();
  triggersQuestion.visibleRows[0].getQuestionByName("triggerType").value =
    "setvaluetrigger";
  const setValueQuestion = <QuestionLinkValueModel>(
    triggersQuestion.visibleRows[0].detailPanel.getQuestionByName("setValue")
  );
  expect(setValueQuestion).toBeTruthy();
  expect(setValueQuestion.isVisible).toBeFalsy();
  var setToNameQuestion =
    triggersQuestion.visibleRows[0].detailPanel.getQuestionByName("setToName");
  expect(setToNameQuestion).toBeTruthy();
  setToNameQuestion.value = "q1";
  expect(setValueQuestion.isVisible).toBeTruthy();
  var actions = setValueQuestion.getTitleActions();
  expect(actions).toHaveLength(2);
  const property = <JsonObjectProperty>(<any>setValueQuestion).property;
  var setValuePropEditor = PropertyGridEditorCollection.getEditor(
    property
  );
  expect(setValuePropEditor).toBeTruthy();
  var setupValueEditor = setValuePropEditor.createPropertyEditorSetup(
    survey,
    property,
    setValueQuestion,
    propertyGrid.options
  );
  expect(setupValueEditor).toBeTruthy();
  var editorSetValueQuestion = setupValueEditor.editSurvey.getAllQuestions()[0];
  editorSetValueQuestion.value = 2;
  setupValueEditor.apply();
  expect(setValueQuestion.value).toEqual(2);
  expect(setValueQuestion.linkValueText).toEqual("Change Set value");
  expect(survey.triggers).toHaveLength(1);
  var trigger = <SurveyTriggerSetValue>survey.triggers[0];
  expect(trigger.getType()).toEqual("setvaluetrigger");
  expect(trigger.setToName).toEqual("q1");
  expect(trigger.setValue).toEqual(2);
  actions[0].action();
  expect(trigger.setValue).toBeFalsy();
  expect(setValueQuestion.value).toBeFalsy();
  expect(setValueQuestion.linkValueText).toEqual("Set Set value");
  setValueQuestion.value = 3;
  expect(trigger.setValue).toEqual(3);
  setToNameQuestion.value = "q2";
  expect(trigger.setToName).toEqual("q2");
  expect(trigger.setValue).toBeFalsy();
  expect(setValueQuestion.value).toBeFalsy();
});
function getAddItemAction(question: Question): IAction {
  var actions = question.getTitleActions();
  var addAction = undefined;
  for (var i = 0; i < actions.length; i++) {
    if (actions[i].id == "add-item") {
      addAction = actions[i];
      break;
    }
  }
  return addAction;
}
test("Support maximumColumnsCount option", () => {
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  var options = new EmptySurveyCreatorOptions();
  options.maximumColumnsCount = 3;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var editQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  expect(editQuestion.maxRowCount).toEqual(3);
  const addAction = getAddItemAction(editQuestion);
  expect(addAction).toBeTruthy();
  expect(addAction.enabled).toBeTruthy();
  question.addColumn("col3");
  expect(addAction.enabled).toBeFalsy();
  question.columns.splice(2, 1);
  expect(addAction.enabled).toBeTruthy();
});
test("Support maximumChoicesCount option", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices.push(new ItemValue("item1"));
  question.choices.push(new ItemValue("item2"));
  var options = new EmptySurveyCreatorOptions();
  options.maximumChoicesCount = 3;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var editQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(editQuestion.maxRowCount).toEqual(3);
  const addAction = getAddItemAction(editQuestion);
  expect(addAction).toBeTruthy();
  expect(addAction.enabled).toBeTruthy();
  question.choices.push(new ItemValue("item3"));
  expect(addAction.enabled).toBeFalsy();
});
test("Support maximumRowsCount option", () => {
  const testMaxRows = (question: any) => {
    question.rows.push(new ItemValue("row1"));
    question.rows.push(new ItemValue("row2"));
    var options = new EmptySurveyCreatorOptions();
    options.maximumRowsCount = 3;
    var propertyGrid = new PropertyGridModelTester(question, options);
    var editQuestion = <QuestionMatrixDynamicModel>(
      propertyGrid.survey.getQuestionByName("rows")
    );
    expect(editQuestion.maxRowCount).toEqual(3);
    const addAction = getAddItemAction(editQuestion);
    expect(addAction).toBeTruthy();
    expect(addAction.enabled).toBeTruthy();
    question.rows.push(new ItemValue("row3"));
    expect(addAction.enabled).toBeFalsy();
  };
  testMaxRows(new QuestionMatrixDropdownModel("q1"));
  testMaxRows(new QuestionMatrixModel("q1"));
});
test("Support maximumColumnsCount option in single matrix", () => {
  var question = new QuestionMatrixModel("q1");
  question.columns.push(new ItemValue("col1"));
  question.columns.push(new ItemValue("col2"));
  var options = new EmptySurveyCreatorOptions();
  options.maximumColumnsCount = 3;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var editQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  expect(editQuestion.maxRowCount).toEqual(3);
  const addAction = getAddItemAction(editQuestion);
  expect(addAction).toBeTruthy();
  expect(addAction.enabled).toBeTruthy();
  question.columns.push(new ItemValue("col3"));
  expect(addAction.enabled).toBeFalsy();
});
test("Support maximumRateValuesCount option", () => {
  var question = new QuestionRatingModel("q1");
  question.rateValues.push(new ItemValue("item1"));
  question.rateValues.push(new ItemValue("item2"));
  var options = new EmptySurveyCreatorOptions();
  options.maximumRateValues = 3;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var editQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("rateValues")
  );
  expect(editQuestion.maxRowCount).toEqual(3);
  const addAction = getAddItemAction(editQuestion);
  expect(addAction).toBeTruthy();
  expect(addAction.enabled).toBeTruthy();
  question.rateValues.push(new ItemValue("item3"));
  expect(addAction.enabled).toBeFalsy();
});
test("Edit columns in property grid", () => {
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  var options = new EmptySurveyCreatorOptions();
  var propertyGrid = new PropertyGridModelTester(question, options);
  var editQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  var rows = editQuestion.visibleRows;
  var actions: Array<IAction> = [];
  propertyGrid.survey.getUpdatedMatrixRowActions(
    editQuestion,
    rows[0],
    actions
  );
  expect(actions).toHaveLength(1);
  expect(actions[0].id).toEqual("svd-grid-edit-column");
  actions[0].action();
  expect(propertyGrid.obj["name"]).toEqual("col1");
  expect(propertyGrid.survey.getQuestionByName("cellType")).toBeTruthy();
  expect(propertyGrid.survey.getQuestionByName("name").value).toEqual("col1");
  propertyGrid.survey.getQuestionByName("name").value = "col3";
  expect(question.columns[0].name).toEqual("col3");
  propertyGrid.survey.getQuestionByName("cellType").value = "text";
  expect(question.columns[0].cellType).toEqual("text");
});
test("Change cellType in the column in property grid", () => {
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  var options = new EmptySurveyCreatorOptions();
  var propertyGrid = new PropertyGridModelTester(question.columns[0], options);
  expect(propertyGrid.survey.getQuestionByName("name").value).toEqual("col1");
  var cellTypQuestion = propertyGrid.survey.getQuestionByName("cellType");
  expect(cellTypQuestion).toBeTruthy();
  expect(cellTypQuestion.getType()).toEqual("dropdown");
  expect(cellTypQuestion.value).toEqual("default");
  expect(propertyGrid.survey.getQuestionByName("hasNone")).toBeFalsy();
  cellTypQuestion.value = "checkbox";
  expect(question.columns[0].cellType).toEqual("checkbox");
  expect(propertyGrid.survey.getQuestionByName("name").value).toEqual("col1");
  expect(propertyGrid.survey.getQuestionByName("hasNone")).toBeTruthy();
});
test("Validate Selected Element Errors", (): any => {
  var titleProp = Serializer.findProperty("question", "title");
  var oldIsRequired = titleProp.isRequired;
  titleProp.isRequired = true;
  var question = new QuestionTextModel("q1");
  var options = new EmptySurveyCreatorOptions();
  var propertyGrid = new PropertyGridModelTester(question, options);
  expect(propertyGrid.validate()).toBeFalsy();
  var titleQuestion = propertyGrid.survey.getQuestionByName("title");
  expect(titleQuestion.errors).toHaveLength(1);
  expect(titleQuestion.errors[0].getText()).toEqual("Please enter a value");
  titleQuestion.value = "Question 1";
  expect(propertyGrid.validate()).toBeTruthy();
  expect(titleQuestion.errors).toHaveLength(0);
  expect(question.title).toEqual("Question 1");
  titleProp.isRequired = oldIsRequired;
});
test("Validate Selected Element Errors", () => {
  var question = new QuestionTextModel("q1");
  var options = new EmptySurveyCreatorOptions();
  var propertyGrid = new PropertyGridModelTester(question, options);
  expect(propertyGrid.survey.getQuestionByName("name")).toBeTruthy();
  propertyGrid.obj = null;
  expect(propertyGrid.survey.getQuestionByName("name")).toBeFalsy();
});
test("Change page", () => {
  var survey = new SurveyModel();
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  var question = survey.pages[0].addNewQuestion("text", "q1");
  var options = new EmptySurveyCreatorOptions();
  var propertyGrid = new PropertyGridModelTester(question, options);
  var pageQuestion = <QuestionDropdownModel>(
    propertyGrid.survey.getQuestionByName("page")
  );
  expect(pageQuestion).toBeTruthy();
  expect(pageQuestion.choices).toHaveLength(2);
  expect(question.page.name).toEqual("page1");
  expect(pageQuestion.value).toEqual("page1");
  pageQuestion.value = "page2";
  expect(question.page.name).toEqual("page2");
});
test("Expand/collapse categories", () => {
  var question = new QuestionTextModel("q1");
  var options = new EmptySurveyCreatorOptions();
  var propertyGrid = new PropertyGridModelTester(question, options);
  var generalPanel = <PanelModel>propertyGrid.survey.getPanelByName("general");
  var logicPanel = <PanelModel>propertyGrid.survey.getPanelByName("logic");
  expect(generalPanel.isExpanded).toBeTruthy();
  propertyGrid.collapseCategory("general");
  expect(generalPanel.isExpanded).toBeFalsy();
  propertyGrid.expandCategory("general");
  expect(generalPanel.isExpanded).toBeTruthy();

  expect(logicPanel.isExpanded).toBeFalsy();
  propertyGrid.expandAllCategories();
  expect(logicPanel.isExpanded).toBeTruthy();
  propertyGrid.collapseAllCategories();
  expect(logicPanel.isExpanded).toBeFalsy();
});
test("add item into rates", () => {
  var question = new QuestionRatingModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var rateValuesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("rateValues")
  );
  expect(rateValuesQuestion).toBeTruthy();
  expect(rateValuesQuestion.rowCount).toEqual(0);
  rateValuesQuestion.addRow();
  expect(question.rateValues).toHaveLength(1);
  expect(question.rateValues[0].value).toEqual("item1");
});

test("add item into rates", () => {
  var question = new QuestionRatingModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var rateValuesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("rateValues")
  );
  expect(rateValuesQuestion).toBeTruthy();
  expect(rateValuesQuestion.rowCount).toEqual(0);
  rateValuesQuestion.addRow();
  expect(question.rateValues).toHaveLength(1);
  expect(question.rateValues[0].value).toEqual("item1");
});
test("Change survey locale", () => {
  var survey = new SurveyModel();
  survey.setDesignMode(true);
  survey.fromJSON({
    title: {
      default: "title en",
      de: "title de"
    }
  });
  var propertyGrid = new PropertyGridModelTester(survey);
  var localeQuestion = <QuestionDropdownModel>(
    propertyGrid.survey.getQuestionByName("locale")
  );
  var titleQuestion = <QuestionDropdownModel>(
    propertyGrid.survey.getQuestionByName("title")
  );
  expect(titleQuestion.value).toEqual("title en");
  localeQuestion.value = "de";
  expect(survey.locale).toEqual("de");
  expect(titleQuestion.value).toEqual("title de");
});
test("DependedOn properties, dynamic choices", () => {
  Serializer.addProperty("question", "targetEntity");
  Serializer.addProperty("question", {
    name: "targetField",
    dependsOn: "targetEntity",
    choices: function (obj) {
      return getChoicesByEntity(obj);
    }
  });
  function getChoicesByEntity(obj: any): Array<any> {
    var entity = !!obj ? obj["targetEntity"] : null;
    var choices = [];
    if (!entity) return choices;
    choices.push({ value: "entity" });
    choices.push({ value: entity + " 1", text: entity + " 1" });
    choices.push({ value: entity + " 2", text: entity + " 2" });
    return choices;
  }

  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var entityQuestion = propertyGrid.survey.getQuestionByName("targetEntity");
  var targetQuestion = <QuestionDropdownModel>(
    propertyGrid.survey.getQuestionByName("targetField")
  );

  expect(targetQuestion.visibleChoices).toHaveLength(0);
  entityQuestion.value = "Account";
  expect(targetQuestion.visibleChoices).toHaveLength(3);
  expect(targetQuestion.visibleChoices[1].value).toEqual("Account 1");

  Serializer.removeProperty("question", "targetEntity");
  Serializer.removeProperty("question", "targetField");
});
test("DependedOn an array property", () => {
  Serializer.addProperty("dropdown", {
    name: "custProp",
    dependsOn: ["choices"],
    visibleIf: function (obj) {
      return obj.choices.length > 3;
    },
  });
  const question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];

  const propertyGrid = new PropertyGridModelTester(question);
  const custPropQuestion = propertyGrid.survey.getQuestionByName("custProp");
  expect(custPropQuestion.isVisible).toBeFalsy();
  question.choices.push(new ItemValue(4));
  expect(custPropQuestion.isVisible).toBeTruthy();

  Serializer.removeProperty("dropdown", "custProp");
});

test("showOptionsCaption for dropdown with empty choice item", () => {
  Serializer.addProperty("question", {
    name: "test",
    choices: function (obj) {
      var choices = [];
      choices.push({ value: "", text: "Empty value" });
      for (var i = 1; i <= 10; i++) {
        choices.push({ value: i, text: "Value" + i.toString() });
      }
      return choices;
    }
  });
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var testQuestion = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("test");
  expect(testQuestion.getType()).toEqual("dropdown");
  expect(testQuestion.choices).toHaveLength(10);
  expect(testQuestion.showOptionsCaption).toBeTruthy();
  expect(testQuestion.optionsCaption).toEqual("Empty value");

  Serializer.removeProperty("question", "test");
});
test("property editor show help as description", () => {
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var defaultValueExpressionQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("defaultValueExpression")
  );
  var actions = defaultValueExpressionQuestion.getTitleActions();
  expect(
    defaultValueExpressionQuestion.description.indexOf(
      "You can use curly brackets"
    ) > -1
  ).toBeTruthy();
  expect(actions).toHaveLength(2);
  expect(actions[1].id).toEqual("property-grid-help");
  expect(actions[1].iconName).toEqual("icon-description");
  expect(defaultValueExpressionQuestion.descriptionLocation).toEqual("hidden");
  actions[1].action();
  expect(defaultValueExpressionQuestion.descriptionLocation).toEqual(
    "underTitle"
  );
  expect(actions[1].iconName).toEqual("icon-description-hide");
  actions[1].action();
  expect(defaultValueExpressionQuestion.descriptionLocation).toEqual("hidden");
  expect(actions[1].iconName).toEqual("icon-description");
});
test("Use maxLength property attribute", () => {
  Serializer.findProperty("question", "name").maxLength = 10;
  Serializer.findProperty("question", "title").maxLength = 20;
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var nameQuestion = <QuestionTextModel>(
    propertyGrid.survey.getQuestionByName("name")
  );
  expect(nameQuestion.getType()).toEqual("text");
  expect(nameQuestion.maxLength).toEqual(10);
  var titleQuestion = <QuestionTextModel>(
    propertyGrid.survey.getQuestionByName("title")
  );
  expect(titleQuestion.getType()).toEqual("comment");
  expect(titleQuestion.maxLength).toEqual(20);
  Serializer.findProperty("question", "name").maxLength = -1;
  Serializer.findProperty("question", "title").maxLength = -1;
});
test("We should not have 'Others' category in our objects", () => {
  const survey = new SurveyModel();
  const page = survey.addNewPage("page1");
  const panel = page.addNewPanel("panel");
  const objToCheck: Array<Base> = [survey, panel, page];
  const allQuestionTypes = Serializer.getChildrenClasses("question", true);
  for (let i = 0; i < allQuestionTypes.length; i++) {
    if (allQuestionTypes[i].name == "linkvalue")
      continue;
    let question = page.addNewQuestion(allQuestionTypes[i].name, "q" + (i + 1).toString());
    if (!!question) {
      objToCheck.push(question);
    }
  }
  const matrix = new QuestionMatrixDynamicModel("matrix");
  page.addQuestion(matrix);
  objToCheck.push(matrix.addColumn("col1"));
  for (let i = 0; i < objToCheck.length; i++) {
    let propGrid = new PropertyGridModelTester(objToCheck[i]);
    let panel = <PanelModel>propGrid.survey.getPanelByName("others");
    if (!!panel) {
      const props = panel.questions;
      const questionNames: Array<string> = [];
      for (var j = 0; j < props.length; j++) {
        questionNames.push(props[j].name);
      }
      if (JSON.stringify(questionNames) !== "[\"width\"]") { // for some reasons in composite questions (paneldynamic) we have the width property here but it doesn't appear in PG UI
        expect("obj: " + objToCheck[i].getType() + ", properties: " + JSON.stringify(questionNames)).toBeFalsy();
      }
    }
  }
});
test("expression editor in trigger expression", () => {
  PropertyGridEditorCollection.register(new PropertyGridEditorCondition());
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" }
    ]
  });
  survey.triggers.push(new SurveyTriggerRunExpression());
  var propertyGrid = new PropertyGridModelTester(survey);
  var triggersQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("triggers")
  );
  expect(triggersQuestion).toBeTruthy(); //visibleIf is here
  expect(triggersQuestion.visibleRows).toHaveLength(1);
  triggersQuestion.visibleRows[0].showDetailPanel();
  var expressionQuestion = triggersQuestion.visibleRows[0].detailPanel.getQuestionByName("expression");
  expect(expressionQuestion.isVisible).toBeTruthy();
  var actions = expressionQuestion.getTitleActions();
  var setupAction = findSetupAction(actions);
  expect(setupAction).toBeTruthy();
  var conditionEditor = <ConditionEditor>setupAction.action();
  expect(conditionEditor).toBeTruthy();
  expect(conditionEditor.survey).toEqual(survey);
  expect(conditionEditor.object).toEqual(survey.triggers[0]);
  conditionEditor.text = "{q1} = 1";
  conditionEditor.apply();
  expect(survey.triggers[0].expression).toEqual("{q1} = 1");
});
test("Different property editors for trigger value", () => {
  const prop = Serializer.findProperty("setvaluetrigger", "setValue");
  expect(prop).toBeTruthy();
  const editor1 = PropertyGridEditorCollection.getEditor(prop);
  const editor2 = PropertyGridEditorCollection.getEditor(prop, "logic");
  const survey = new SurveyModel({
    elements: [
      { type: "dropdown", name: "q1", choices: [1, 2, 3, 4, 5] },
      { type: "text", name: "q2" }
    ],
    triggers: [
      {
        type: "setvalue",
        expression: "{q2} = 1",
        setToName: "q1",
        setValue: 1
      }
    ]
  });
  const trigger = <SurveyTriggerSetValue>survey.triggers[0];
  const options = new EmptySurveyCreatorOptions();
  expect(editor1.getJSON(trigger, prop, options).type).toEqual("linkvalue");
  expect(editor2.getJSON(trigger, prop, options).type).toEqual("dropdown");
});
test("Different property editors for trigger value in panel", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "dropdown", name: "q1", choices: [1, 2, 3, 4, 5] },
      { type: "text", name: "q2" }
    ],
    triggers: [
      {
        type: "setvalue",
        expression: "{q2} = 1",
        setToName: "q1",
        setValue: 1
      }
    ]
  });
  const trigger = <SurveyTriggerSetValue>survey.triggers[0];
  const options = new EmptySurveyCreatorOptions();
  const generator = new PropertyJSONGenerator(trigger, options);
  let panel = new PanelModel("panel");
  generator.setupObjPanel(panel);
  let question = panel.getQuestionByName("setValue");
  expect(question).toBeTruthy();
  expect(question.getType()).toEqual("linkvalue");
  panel = new PanelModel("panel");
  generator.setupObjPanel(panel, false, "logic");
  question = panel.getQuestionByName("setValue");
  expect(question).toBeTruthy();
  expect(question.getType()).toEqual("dropdown");
});
test("AllowRowsDragDrop and property readOnly", () => {
  const question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  let propertyGrid = new PropertyGridModelTester(question);
  let choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion).toBeTruthy();
  expect(choicesQuestion.allowRowsDragAndDrop).toBeTruthy();
  Serializer.findProperty("selectbase", "choices").readOnly = true;
  propertyGrid = new PropertyGridModelTester(question);
  choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.allowRowsDragAndDrop).toBeFalsy();
  Serializer.findProperty("selectbase", "choices").readOnly = false;
});

test("Edit matrix and property readOnly ", () => {
  const question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 4];
  let propertyGrid = new PropertyGridModelTester(question);
  let choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion).toBeTruthy();
  expect(choicesQuestion.visibleRows[0].cells[1].question.readOnly).toBeFalsy();

  Serializer.findProperty("itemvalue", "text").readOnly = true;
  propertyGrid = new PropertyGridModelTester(question);
  choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.visibleRows[0].cells[1].question.readOnly).toBeTruthy();

  Serializer.findProperty("itemvalue", "text").readOnly = false;
  Serializer.findProperty("selectbase", "choices").readOnly = true;
  propertyGrid = new PropertyGridModelTester(question);
  choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.visibleRows[0].cells[1].question.readOnly).toBeTruthy();
  Serializer.findProperty("selectbase", "choices").readOnly = false;
});

test("Check textUpdate mode for question", () => {
  const question = new QuestionTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const nameQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("name");
  const titleQuestion = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("title");
  const placeholderQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("placeHolder");
  const stepQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("step");

  expect(nameQuestion.getType()).toEqual("text");
  expect(nameQuestion.isSurveyInputTextUpdate).toBeFalsy();
  expect(titleQuestion.getType()).toEqual("comment");
  expect(titleQuestion.isSurveyInputTextUpdate).toBeTruthy();
  expect(placeholderQuestion.getType()).toEqual("text");
  expect(placeholderQuestion.isSurveyInputTextUpdate).toBeTruthy();
  expect(stepQuestion.getType()).toEqual("text");
  expect(stepQuestion.isSurveyInputTextUpdate).toBeFalsy();
});
test("Has narrow style between link value questions", () => {
  const question = new QuestionTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const defaultValueQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("defaultValue");
  const correctAnswerQuestion = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("correctAnswer");
  expect(defaultValueQuestion.cssRoot.indexOf("spg-row-narrow__question") > -1).toBeFalsy();
  expect(correctAnswerQuestion.cssRoot.indexOf("spg-row-narrow__question") > -1).toBeTruthy();
});
test("nextToProperty on the same line", () => {
  const maxProperty = Serializer.findProperty("text", "max");
  const oldNextToProperty = maxProperty.nextToProperty;
  maxProperty.nextToProperty = "*min";
  const question = new QuestionTextModel("q1");
  question.inputType = "number";
  const propertyGrid = new PropertyGridModelTester(question);
  expect(propertyGrid.survey.questionTitleLocation).toEqual("top");
  const nameQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("name");
  expect(nameQuestion.titleLocation).toEqual("default");
  const minQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("min");
  const maxQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("max");
  expect(minQuestion.isVisible).toBeTruthy();
  expect(maxQuestion.isVisible).toBeTruthy();
  expect(minQuestion.startWithNewLine).toBeTruthy();
  expect(maxQuestion.startWithNewLine).toBeFalsy();
  expect(minQuestion.titleLocation).toEqual("left");
  expect(maxQuestion.titleLocation).toEqual("left");
  expect(minQuestion.minWidth).toEqual("50px");
  expect(maxQuestion.minWidth).toEqual("50px");
  maxProperty.nextToProperty = oldNextToProperty;
});
test("nextToProperty on the same line", () => {
  const maxProperty: any = Serializer.findProperty("text", "max");
  const question = new QuestionTextModel("q1");
  question.inputType = "number";
  const propertyGrid = new PropertyGridModelTester(question);
  const maxQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("max");
  expect(maxQuestion.inputType).toEqual("number");
  question.inputType = "date";
  expect(maxQuestion.inputType).toEqual("date");
});

class TestValueEditor extends PropertyGridValueEditorBase {
  public fit(prop: JsonObjectProperty): boolean {
    throw new Error("Method not implemented.");
  }
}
test("isSupportGrouping", () => {
  const testValueEditor = new TestValueEditor();
  expect(testValueEditor.isSupportGrouping()).toBeTruthy();
  const testBooleanEditor = new PropertyGridEditorBoolean();
  expect(testBooleanEditor.isSupportGrouping()).toBeTruthy();
});

test("QuestionLinkValueModel showClear #2563", (): any => {
  const q = new QuestionLinkValueModel("q1");
  expect(q.showClear).toBeFalsy();
  q.value = ["one"];
  expect(q.showClear).toBeTruthy();
  q.value = [];
  expect(q.showClear).toBeFalsy();
});
test("Using html question in property grid", (): any => {
  Serializer.addProperty("question", { name: "nameLink", type: "namelink", category: "nameLink" });
  const propEditor: IPropertyGridEditor = {
    fit: function (prop) {
      return prop.type === "namelink";
    },
    getJSON: function (obj, prop, options) {
      return {
        type: "html",
        html: "<span>Some text</span>"
      };
    }
  };
  PropertyGridEditorCollection.register(propEditor);
  const question = new Question("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const panel = <PanelModel>propertyGrid.survey.getPanelByName("nameLink");
  expect(panel).toBeTruthy();
  panel.expand();
  propertyGrid.survey.whenPanelFocusIn(panel);
  expect(panel.questions).toHaveLength(1);
  Serializer.removeProperty("survey", "surveyLink");
});
