import {
  PropertyGridEditorCollection,
  PropertyJSONGenerator,
  PropertyGridEditorBoolean,
  IPropertyGridEditor,
  PropertyGridModel
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
  QuestionCompositeModel,
  ItemValue,
  Question,
  MatrixDropdownColumn,
  SurveyTriggerSetValue,
  QuestionMatrixModel,
  Serializer, QuestionFactory,
  QuestionPanelDynamicModel,
  QuestionMatrixDropdownModel,
  IAction,
  QuestionRatingModel,
  ComputedUpdater,
  surveyLocalization,
  AdaptiveActionContainer,
  QuestionCommentModel,
  QuestionFileModel,
  QuestionImagePickerModel,
  ComponentCollection,
  QuestionBooleanModel,
  QuestionRadiogroupModel,
  PageModel,
  ActionContainer,
  matrixDropdownColumnTypes
} from "survey-core";
import {
  EmptySurveyCreatorOptions,
  ICollectionItemAllowOperations,
  settings
} from "../../src/creator-settings";
import { ConditionEditor } from "../../src/property-grid/condition-survey";
import { PropertyGridEditorCondition, PropertyGridEditorExpression } from "../../src/property-grid/condition";
import { QuestionLinkValueModel } from "../../src/components/link-value";
import {
  PropertyGridValueEditor,
  PropertyGridRowValueEditor,
  PropertyGridValueEditorBase
} from "../../src/property-grid/values";
import { PropertyGridEditorMatrixPages, PropertyGridEditorMatrixRateValues } from "../../src/property-grid/matrices";
import { PropertyGridEditorBooleanDisplayMode } from "../../src/property-grid/boolean-display-mode";
import { editorLocalization } from "../../src/editorLocalization";
import { SurveyQuestionEditorDefinition, defaultPropertyGridDefinition } from "../../src/question-editor/definition";
import { PropertyGridModelTester, findSetupAction } from "./property-grid.base";
import { enStrings } from "../../src/localization/english";
import { CreatorTester } from "../creator-tester";
import { setupLocale } from "../../src/editorLocalization";
import { UIPreset } from "../../src/ui-presets-creator/presets";
import { Advanced } from "../../src/ui-presets";

test("Check property grid survey options", () => {
  const oldValue = Serializer.findProperty(
    "survey",
    "showProgressBar"
  ).defaultValue;
  Serializer.findProperty("survey", "showProgressBar").defaultValue = true;
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  expect(propertyGrid.survey.showNavigationButtons).toEqual(false);
  expect(propertyGrid.survey.showProgressBar).toEqual(false);
  Serializer.findProperty("survey", "showProgressBar").defaultValue = oldValue;
});

test("Create survey with editingObj", () => {
  var question = new QuestionTextModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  expect(propertyGrid.survey.getValue("name")).toEqual("q1");
  var nameQuestion = propertyGrid.survey.getQuestionByName("name");
  expect(nameQuestion).toBeTruthy();
  expect(nameQuestion.title).toEqual("Question name");
  nameQuestion.value = "q2";
  expect(question.name).toEqual("q2");
});
test("Check tabs creating", () => {
  var question = new QuestionCheckboxModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var generalPanel = <PanelModel>propertyGrid.survey.getPanelByName("general");
  expect(generalPanel).toBeTruthy();
  expect(generalPanel.title).toEqual("General");
  expect(generalPanel["iconName"]).toEqual("icon-pg-general-24x24");
  var actions = generalPanel.getTitleActions();
  expect(actions).toHaveLength(0);
  var choicesPanel = <PanelModel>propertyGrid.survey.getPanelByName("choices");
  expect(choicesPanel).toBeTruthy();
  expect(choicesPanel.title).toEqual("Choice Options");
  expect(choicesPanel["iconName"]).toEqual("icon-pg-specific-24x24");
});
test("Categories titles", () => {
  enStrings.pe.tabs.layout.panel = "Panel Layout";
  enStrings.pe.tabs.layout.question = "Question Layout";
  const question = new QuestionCheckboxModel("q1");
  const panel = new PanelModel("panel1");
  let propertyGrid = new PropertyGridModelTester(question);
  const questionLayout = propertyGrid.survey.getPanelByName("layout");
  expect(questionLayout.title).toBe("Question Layout");
  propertyGrid = new PropertyGridModelTester(panel);
  const panelLayout = propertyGrid.survey.getPanelByName("layout");
  expect(panelLayout.title).toBe("Panel Layout");
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
test("boolean displayMode property editor", () => {
  const question = new QuestionBooleanModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const displayModeQuestion = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("displayMode");
  expect(displayModeQuestion.getType()).toEqual("dropdown");
  expect(displayModeQuestion.choices).toHaveLength(4);
  expect(displayModeQuestion.choices.map(c => c.value)).toEqual(["segmented", "radio", "checkbox", "switch"]);
  expect(displayModeQuestion.value).toEqual("segmented");

  question.displayMode = "custom";
  PropertyGridEditorCollection.clearHash();
  const propertyGridCustom = new PropertyGridModelTester(question);
  const displayModeQuestionCustom = <QuestionDropdownModel>propertyGridCustom.survey.getQuestionByName("displayMode");
  expect(displayModeQuestionCustom.choices).toHaveLength(5);
  expect(displayModeQuestionCustom.choices.map(c => c.value)).toEqual(["segmented", "radio", "checkbox", "switch", "custom"]);
  expect(displayModeQuestionCustom.value).toEqual("custom");

  const prop = Serializer.findProperty("boolean", "displayMode");
  expect(PropertyGridEditorCollection.getEditor(prop)).toBeInstanceOf(PropertyGridEditorBooleanDisplayMode);
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
  var questionDescriptionLocationQuestion = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("logoFit");
  expect(questionDescriptionLocationQuestion.getType()).toEqual("buttongroup"); //"correct property editor is created" //since choices.length < 5 buttongroup rendered instead of dropdown

  var questionDescriptionLocationQuestion = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("questionDescriptionLocation");
  expect(questionDescriptionLocationQuestion.getType()).toEqual("dropdown");
  expect(questionDescriptionLocationQuestion.choices[0].value).toEqual(
    "underInput"
  );
  expect(questionDescriptionLocationQuestion.choices[0].text).toEqual(
    "Under the input field"
  );

  var showPreviewQuestion = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("previewMode");
  expect(showPreviewQuestion.getType()).toEqual("dropdown"); //"correct property editor is created" a lot of text
  expect(showPreviewQuestion.choices[0].value).toEqual("allQuestions");
  expect(showPreviewQuestion.choices[0].text).toEqual("Show all questions");

  var localeQuestion = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("locale");
  expect(localeQuestion.getType()).toEqual("dropdown"); //"correct property editor is created"
  expect(localeQuestion.allowClear).toBeTruthy();
  expect(localeQuestion.placeholder).toEqual("Default (English)");
  expect(localeQuestion.displayValue).toEqual("Default (English)");
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
  expect(localeQuestion.allowClear).toBeTruthy();
  expect(localeQuestion.placeholder).toEqual("Default (English)");
  expect(localeQuestion.displayValue).toEqual("Default (English)");
  surveyLocalization.supportedLocales = oldSupportedLocales;
});

test("settings.propertyGrid.useButtonGroup", (): any => {
  var survey = new SurveyModel();
  var propertyGrid = new PropertyGridModelTester(survey);
  var questionDescriptionLocationQuestion =
    propertyGrid.survey.getQuestionByName("logoFit");
  expect(questionDescriptionLocationQuestion.getType()).toEqual("buttongroup");
  settings.propertyGrid.useButtonGroup = false;
  propertyGrid = new PropertyGridModelTester(survey);
  questionDescriptionLocationQuestion = propertyGrid.survey.getQuestionByName(
    "logoFit"
  );
  expect(questionDescriptionLocationQuestion.getType()).toEqual("dropdown");
  settings.propertyGrid.useButtonGroup = true;
});

test("Use dropdown & buttongroup property type", (): any => {
  Serializer.addProperty("survey", { name: "prop1:dropdown", choices: [1] });
  Serializer.addProperty("survey", { name: "prop2:buttongroup", choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] });
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  expect(propertyGrid.survey.getQuestionByName("prop1").getType()).toEqual("dropdown");
  expect(propertyGrid.survey.getQuestionByName("prop2").getType()).toEqual("buttongroup");
  Serializer.removeProperty("survey", "prop1");
  Serializer.removeProperty("survey", "prop2");
});

test("dropdown property editor, get choices on callback", () => {
  var choices = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  var callback = null;
  const callbackList = new Array<any>();
  Serializer.addProperty("survey", {
    name: "region",
    choices: function (obj, choicesCallback) {
      callbackList.push(choicesCallback);
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
  expect(callbackList).toHaveLength(2);
  expect(callbackList[0]).toBeTruthy();
  expect(callbackList[1]).toBeTruthy();
  Serializer.removeProperty("survey", "region");
});
test("Serializer.addpropery, type: 'dropdown' cuts the text before dots, provided into choices. Bug#5787", (): any => {
  Serializer.addProperty("survey", {
    name: "prop1:dropdown", type: "dropdown",
    choices: ["Gemini 1.5 Pro", "Claude 3.5 Sonnet"]
  });
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const question = propertyGrid.survey.getQuestionByName("prop1");
  expect(question.getType()).toBe("dropdown");
  expect(question.choices).toHaveLength(2);
  expect(question.choices[0].value).toBe("Gemini 1.5 Pro");
  expect(question.choices[1].value).toBe("Claude 3.5 Sonnet");
  expect(question.choices[0].text).toBe("Gemini 1.5 Pro");
  expect(question.choices[1].text).toBe("Claude 3.5 Sonnet");

  Serializer.removeProperty("survey", "prop1");
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
  expect(editQuestion.getType()).toEqual("tagbox");
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
  expect(question.choices[3].getType()).toEqual("choiceitem"); //correct class created
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
  expect(row.detailPanel.getQuestionByName("visibleIf").title).toBe("Make the option visible if");
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
test("itemvalue[] custom dropdown property add showMode as 'form'", () => {
  Serializer.addProperty("itemvalue", { name: "prop1", category: "general", choices: ["item1", "item2", "item3", "item4", "item5"], showMode: "form" });

  var question = new QuestionCheckboxModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.columns).toHaveLength(2);
  const row = choicesQuestion.visibleRows[0];
  row.showDetailPanel();
  expect(row.detailPanel.elements).toHaveLength(7);
  const thirdElement = row.detailPanel.elements[2];
  expect(thirdElement.name).toEqual("prop1");
  expect(thirdElement.getType()).toEqual("dropdown");
  expect(thirdElement.choices).toHaveLength(5);
  expect(thirdElement.choices[0].value).toEqual("item1");

  Serializer.removeProperty("itemvalue", "prop1");
});
test("itemvalue[] custom add showMode as 'form', create in general category by default", () => {
  Serializer.addProperty("itemvalue", { name: "prop1", showMode: "form" });

  var question = new QuestionCheckboxModel("q1");
  question.choices = [1, 2, 3];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.columns).toHaveLength(2);
  const row = choicesQuestion.visibleRows[0];
  row.showDetailPanel();
  expect(row.detailPanel.elements).toHaveLength(7);
  const thirdElement = row.detailPanel.elements[2];
  expect(thirdElement.name).toEqual("prop1");

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
  expect(columnsQuestion.showHeader).toBeTruthy();
  expect(columnsQuestion.getType()).toEqual("matrixdynamic"); //"It is a matrix";
  expect(columnsQuestion.columns).toHaveLength(2); //"There are two columns");
  expect(columnsQuestion.columns[0].title).toEqual("Column name");
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
test("column[] property editor, store column title if it was entered an equals to name", (): any => {
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  var propertyGrid = new PropertyGridModelTester(question);
  var columnsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  expect(columnsQuestion).toBeTruthy();
  expect(columnsQuestion.columns).toHaveLength(2);
  const row = columnsQuestion.visibleRows[0];
  expect(row.cells[0].value).toEqual("col1");
  expect(row.cells[1].value).toBeFalsy();
  expect(question.toJSON()).toEqual({
    name: "q1",
    columns: [{ name: "col1" }]
  });
  row.cells[1].value = "Column 1";
  expect(question.toJSON()).toEqual({
    name: "q1",
    columns: [{ name: "col1", title: "Column 1" }]
  });
  row.cells[1].value = "col1";
  expect(question.toJSON()).toEqual({
    name: "q1",
    columns: [{ name: "col1", title: "col1" }]
  });
});
test("column title property editor, set placeholder", (): any => {
  const question = new QuestionMatrixDynamicModel("q1");
  const column = question.addColumn("col1");
  const propertyGrid = new PropertyGridModelTester(column);
  const titlePropertyEditor = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("title");
  expect(titlePropertyEditor.placeholder).toEqual("col1");
  column.name = "Column1";
  expect(titlePropertyEditor.placeholder).toEqual("Column1");
});
test("column title property editor, set placeholder", (): any => {
  const question = new QuestionTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const titlePropertyEditor = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("title");
  expect(titlePropertyEditor.placeholder).toEqual("q1");
  question.name = "Question1";
  expect(titlePropertyEditor.placeholder).toEqual("Question1");
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
  expect(pagesQuestion.columns[0].title).toEqual("Page name");
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

test("surveypages property editor and onCollectionItemAllowingCallback", () => {
  const survey = new SurveyModel();
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  survey.addNewPage("page3");
  const options = new EmptySurveyCreatorOptions();
  options.onCollectionItemAllowingCallback = (
    obj: Base,
    property: JsonObjectProperty,
    collection: Array<Base>,
    item: Base,
    options: ICollectionItemAllowOperations
  ): void => {
    if (property.name !== "pages") return;
    const name = (<any>item).name;
    options.allowDelete = name !== "page2";
    options.allowEdit = name !== "page2";
  };
  const propertyGrid = new PropertyGridModelTester(survey, options);
  const pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  const rows = pagesQuestion.visibleRows;
  expect(rows[0].cells[0].question.isReadOnly).toBeFalsy();
  expect(rows[0].cells[1].question.isReadOnly).toBeFalsy();
  expect(rows[1].cells[0].question.isReadOnly).toBeTruthy();
  expect(rows[1].cells[1].question.isReadOnly).toBeTruthy();
  expect(rows[2].cells[0].question.isReadOnly).toBeFalsy();
  expect(rows[2].cells[1].question.isReadOnly).toBeFalsy();
  expect(pagesQuestion.canRemoveRow(rows[0])).toBeTruthy();
  expect(pagesQuestion.canRemoveRow(rows[1])).toBeFalsy();
  expect(pagesQuestion.canRemoveRow(rows[2])).toBeTruthy();
});

test("Change editingObj of the property grid", () => {
  var question = new QuestionTextModel("q1");
  var question2 = new QuestionTextModel("q2");
  var propertyGrid = new PropertyGridModelTester(question);
  expect(propertyGrid.survey.getValue("name")).toEqual("q1"); //"name property value is set for the first editingObj"
  propertyGrid.obj = question2;
  expect(propertyGrid.survey.getValue("name")).toEqual("q2"); //"name property value is set for the second editingObj"
});
test("Check onNewSurveyCreatedCallback", () => {
  let count = 0;
  const onNewSurveyCreatedCallback = () => {
    count++;
  };
  const question = new QuestionTextModel("q1");
  const question2 = new QuestionTextModel("q2");
  const propertyGrid = new PropertyGridModelTester(question);
  propertyGrid.onNewSurveyCreatedCallback = onNewSurveyCreatedCallback;
  expect(count).toEqual(0); //"onNewSurveyCreatedCallback isn't called");
  propertyGrid.obj = question2;
  expect(propertyGrid.survey).toBeTruthy();
  expect(count).toEqual(1); //"onNewSurveyCreatedCallback is called after changing obj value"
  propertyGrid.obj = question2;
  expect(count).toEqual(1); //"onNewSurveyCreatedCallback isn't called after setting same obj value"
  propertyGrid.obj = question;
  expect(count).toEqual(2); //"onNewSurveyCreatedCallback is called after changing obj value"
});
test("Switching edited object releases the onPropertyChanged listener of the previous object", () => {
  const survey = new SurveyModel({ elements: [
    { type: "checkbox", name: "q1", choices: [1, 2], validators: [{ type: "answercount", minCount: 1 }] },
    { type: "text", name: "q2", maskType: "currency" }
  ] });
  const q1 = survey.getQuestionByName("q1");
  const q2 = survey.getQuestionByName("q2");
  const item = q1.choices[0];
  const validator = q1.validators[0];
  const maskSettings = q2.maskSettings;
  const handlers = [q1, item, validator, q2, maskSettings].map(obj => obj.onPropertyChanged.length);
  const getHandlers = () => [q1, item, validator, q2, maskSettings].map(obj => obj.onPropertyChanged.length);
  const propertyGrid = new PropertyGridModelTester(q1);
  expect(propertyGrid.survey.editingObj).toBe(q1);
  expect((<QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("choices")).visibleRows).toHaveLength(2);
  expect((<QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("validators")).visibleRows).toHaveLength(1);
  expect(q1.onPropertyChanged.length).toBeGreaterThan(handlers[0]);
  expect(item.onPropertyChanged.length).toBeGreaterThan(handlers[1]);
  expect(validator.onPropertyChanged.length).toBeGreaterThan(handlers[2]);
  propertyGrid.obj = q2;
  expect(propertyGrid.survey.getQuestionByName("maskSettings")).toBeTruthy();
  expect(q2.onPropertyChanged.length).toBeGreaterThan(handlers[3]);
  expect(maskSettings.onPropertyChanged.length).toBeGreaterThan(handlers[4]);
  expect(getHandlers().slice(0, 3)).toEqual(handlers.slice(0, 3));
  propertyGrid.obj = q1;
  expect(getHandlers().slice(3)).toEqual(handlers.slice(3));
  propertyGrid.obj = null;
  expect(getHandlers()).toEqual(handlers);
});
test("Switching edited object does not modify the previous object", () => {
  const survey = new SurveyModel({ elements: [
    { type: "checkbox", name: "q1", title: "Question 1", visibleIf: "{q2} = 'a'",
      choices: [{ value: 1, text: "Item 1" }, 2, 3], validators: [{ type: "answercount", minCount: 1 }] },
    { type: "text", name: "q2" }
  ] });
  const q1 = survey.getQuestionByName("q1");
  const q2 = survey.getQuestionByName("q2");
  const q1Json = JSON.stringify(q1.toJSON());
  const propertyGrid = new PropertyGridModelTester(q1);
  expect(propertyGrid.survey.getValue("title")).toEqual("Question 1");
  propertyGrid.obj = q2;
  expect(JSON.stringify(q1.toJSON())).toEqual(q1Json);
  propertyGrid.obj = q1;
  expect(JSON.stringify(q1.toJSON())).toEqual(q1Json);
  expect(propertyGrid.survey.getValue("title")).toEqual("Question 1");
});
test("The property grid survey of the previous object is disposed and not updated after switching", () => {
  const survey = new SurveyModel({ elements: [{ type: "text", name: "q1", title: "Title 1" }, { type: "text", name: "q2" }] });
  const q1 = survey.getQuestionByName("q1");
  const q2 = survey.getQuestionByName("q2");
  const propertyGrid = new PropertyGridModelTester(q1);
  const q1Survey = propertyGrid.survey;
  const q1TitleEditor = q1Survey.getQuestionByName("title");
  expect(q1TitleEditor.value).toEqual("Title 1");
  propertyGrid.obj = q2;
  const q2Survey = propertyGrid.survey;
  const q2NameEditor = q2Survey.getQuestionByName("name");
  expect(q2Survey).not.toBe(q1Survey);
  expect(q1Survey.isDisposed).toBeTruthy();
  expect(q1Survey.editingObj).toBeFalsy();
  const q1TitleEditorValue = q1TitleEditor.value;
  propertyGrid.obj = q1;
  expect(q2Survey.isDisposed).toBeTruthy();
  expect(q2Survey.editingObj).toBeFalsy();
  const q2NameEditorValue = q2NameEditor.value;
  q1.title = "Title 1 changed";
  q2.name = "q2_changed";
  //the editors of the disposed surveys are not updated any more
  expect(q1TitleEditor.value).toEqual(q1TitleEditorValue);
  expect(q2NameEditor.value).toEqual(q2NameEditorValue);
  expect(propertyGrid.survey.editingObj).toBe(q1);
  expect(propertyGrid.survey.getQuestionByName("title").value).toEqual("Title 1 changed");
});
test("Selecting elements in creator does not modify the survey or the undo stack", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [
    { type: "checkbox", name: "q1", title: "Question 1", visibleIf: "{q2} = 'a'",
      choices: [{ value: 1, text: "Item 1" }, 2, 3], validators: [{ type: "answercount", minCount: 1 }] },
    { type: "text", name: "q2", maskType: "currency" },
    { type: "matrixdropdown", name: "q3", columns: [{ name: "col1" }], rows: ["row1"] }
  ] };
  const json = JSON.stringify(creator.JSON);
  let modifiedCount = 0;
  creator.onModified.add(() => modifiedCount++);
  ["q1", "q2", "q3", "q1"].forEach(name => {
    creator.selectElement(creator.survey.getQuestionByName(name));
    expect(creator.propertyGrid.editingObj).toBe(creator.survey.getQuestionByName(name));
  });
  creator.selectElement(creator.survey);
  expect(modifiedCount).toEqual(0);
  expect(creator.state).toBeFalsy();
  expect(creator.undoRedoManager.canUndo()).toBeFalsy();
  expect(JSON.stringify(creator.JSON)).toEqual(json);
});
test("Switching the edited object does not unbind the old grid's editors", () => {
  const choices = [];
  for (let i = 1; i <= 50; i++) choices.push(i);
  const survey = new SurveyModel({ elements: [{ type: "checkbox", name: "q1", choices: choices }, { type: "text", name: "q2" }] });
  const q1 = survey.getQuestionByName("q1");
  const q2 = survey.getQuestionByName("q2");
  const propertyGrid = new PropertyGridModelTester(q1);
  const unbind = vi.spyOn(Question.prototype, "unbindValue");
  const dataSet = vi.spyOn(SurveyModel.prototype, "data", "set");
  const switchObj = (count: number): void => {
    for (let i = 0; i < count; i++) {
      propertyGrid.obj = propertyGrid.obj === q1 ? q2 : q1;
    }
  };
  switchObj(1);
  expect(propertyGrid.survey.editingObj).toBe(q2);
  switchObj(9);
  expect(propertyGrid.survey.editingObj).toBe(q1);
  expect.soft(unbind).toHaveBeenCalledTimes(0);
  expect.soft(dataSet).toHaveBeenCalledTimes(0);
  switchObj(10);
  expect(propertyGrid.survey.editingObj).toBe(q1);
  expect.soft(unbind).toHaveBeenCalledTimes(0);
  expect.soft(dataSet).toHaveBeenCalledTimes(0);
  unbind.mockRestore();
  dataSet.mockRestore();
});
test("Selecting elements does not unbind the previous property grid's editors", () => {
  const creator = new CreatorTester();
  const elements = [];
  for (let i = 1; i <= 20; i++) {
    elements.push(i % 2 === 1 ? { type: "checkbox", name: "q" + i, choices: [1, 2, 3] } : { type: "text", name: "q" + i });
  }
  creator.JSON = { elements: elements };
  const select = (name: string): void => {
    creator.selectElement(creator.survey.getQuestionByName(name));
  };
  select("q1");
  const unbind = vi.spyOn(Question.prototype, "unbindValue");
  for (let i = 2; i <= 11; i++) select("q" + i);
  expect(creator.propertyGrid.editingObj).toBe(creator.survey.getQuestionByName("q11"));
  expect.soft(unbind).toHaveBeenCalledTimes(0);
  for (let i = 12; i <= 20; i++) select("q" + i);
  select("q1");
  expect(creator.propertyGrid.editingObj).toBe(creator.survey.getQuestionByName("q1"));
  expect.soft(unbind).toHaveBeenCalledTimes(0);
  unbind.mockRestore();
});
test("Support property visibleIf attribute", () => {
  var question = new QuestionCheckboxModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var otherTextPropEd = propertyGrid.survey.getQuestionByName("otherText");
  expect(otherTextPropEd).toBeTruthy(); //otherText is here
  expect(otherTextPropEd.isVisible).toEqual(false); //It hidden by default
  question.showOtherItem = true;
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
test("Test options.logicAllowTextEditExpressions", () => {
  const question = new QuestionTextModel("q1");
  question.visibleIf = "{q2} = 'abc'";
  const options = new EmptySurveyCreatorOptions();
  options.logicAllowTextEditExpressions = false;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var conditionQuestion = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("visibleIf");
  var expressionQuestion = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("defaultValueExpression");
  expect(conditionQuestion.forceIsInputReadOnly).toBeTruthy();
  expect(conditionQuestion.isInputReadOnly).toBeTruthy();
  expect(expressionQuestion.forceIsInputReadOnly).toBeFalsy();
  expect(expressionQuestion.isInputReadOnly).toBeFalsy();
  expect(conditionQuestion.getTitleToolbar()).toBeTruthy();
  expect(conditionQuestion.titleActions).toHaveLength(2);
  expect(conditionQuestion.titleActions[1].enabled).toBeTruthy();

  options.logicAllowTextEditExpressions = true;
  propertyGrid = new PropertyGridModelTester(question, options);
  conditionQuestion = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("visibleIf");
  expressionQuestion = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("defaultValueExpression");
  expect(conditionQuestion.forceIsInputReadOnly).toBeFalsy();
  expect(conditionQuestion.isInputReadOnly).toBeFalsy();
  expect(expressionQuestion.forceIsInputReadOnly).toBeFalsy();
  expect(expressionQuestion.isInputReadOnly).toBeFalsy();
  expect(conditionQuestion.getTitleToolbar()).toBeTruthy();
  expect(conditionQuestion.titleActions).toHaveLength(3);
  expect(conditionQuestion.titleActions[1].enabled).toBeTruthy();
  expect(conditionQuestion.titleActions[2].enabled).toBeTruthy();
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
test("Question property editor should support getObjectDisplayName", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ],
    triggers: [{ type: "skiptrigger", gotoName: "q2" }]
  });
  const trigger = survey.triggers[0];
  const options = new EmptySurveyCreatorOptions();
  const getDefaultDisplayName = options.getObjectDisplayName.bind(options);
  options.getObjectDisplayName = (obj: Base, area: string, reason: string, displayName: string): string => {
    const text = getDefaultDisplayName(obj, area, reason, displayName);
    if (reason === "property-editor" && area === "property-grid:property-editor") return (survey.getAllQuestions().indexOf(<Question>obj) + 1).toString() + ". " + text;
    return text;
  };
  const propertyGrid = new PropertyGridModelTester(trigger, options);
  const gotoNamePropEd = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("gotoName");
  expect(gotoNamePropEd).toBeTruthy();
  expect(gotoNamePropEd.choices).toHaveLength(2);
  expect(gotoNamePropEd.choices[0].text).toEqual("1. q1");
  expect(gotoNamePropEd.choices[1].text).toEqual("2. q2");
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
test("choicesFromQuestion editor doesn't list questions that copy choices from the edited question, Bug#8096", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "checkbox", name: "q1" },
      { type: "checkbox", name: "q2", choicesFromQuestion: "q1" },
      { type: "checkbox", name: "q3", choicesFromQuestion: "q2" },
      { type: "checkbox", name: "q4" }
    ]
  });
  const getChoiceValues = (name: string): Array<string> => {
    const propertyGrid = new PropertyGridModelTester(survey.getQuestionByName(name));
    const editor = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("choicesFromQuestion");
    return editor.choices.map(item => item.value);
  };
  expect(getChoiceValues("q1"), "q1: q2 and q3 copy choices from q1 directly or through q2").toEqual(["q4"]);
  expect(getChoiceValues("q2"), "q2: q3 copies choices from q2").toEqual(["q1", "q4"]);
  expect(getChoiceValues("q3"), "q3: nobody copies choices from q3").toEqual(["q1", "q2", "q4"]);
  expect(getChoiceValues("q4"), "q4: nobody copies choices from q4").toEqual(["q1", "q2", "q3"]);
});
test("choicesFromQuestion editor handles an existing circular reference, Bug#8096", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "checkbox", name: "q1", choicesFromQuestion: "q2" },
      { type: "checkbox", name: "q2", choicesFromQuestion: "q1" },
      { type: "checkbox", name: "q3" }
    ]
  });
  const propertyGrid = new PropertyGridModelTester(survey.getQuestionByName("q1"));
  const editor = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("choicesFromQuestion");
  expect(editor.choices.map(item => item.value)).toEqual(["q2", "q3"]);
});

test("check Fast Entry for Rating", () => {
  const question = new QuestionRatingModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("rateValues")
  );
  const propertyEditor = new PropertyGridEditorMatrixRateValues();
  const fastEntry: any = propertyEditor.createPropertyEditorSetup(propertyGrid.obj, (<any>itemsQuestion).property,
    itemsQuestion, new EmptySurveyCreatorOptions());
  fastEntry.commentValue.value = "1|item1\n2\n3\n4|item4";
  fastEntry.apply();
  expect(question.rateValues).toHaveLength(4);
  expect(question.rateValues[0].value).toEqual("1");
  expect(question.rateValues[0].text).toEqual("item1");
  expect(question.rateValues[1].value).toEqual("2");
  expect(question.rateValues[1].text).toEqual("2");
  expect(question.rateValues[2].value).toEqual("3");
  expect(question.rateValues[2].text).toEqual("3");
  expect(question.rateValues[3].value).toEqual("4");
  expect(question.rateValues[3].text).toEqual("item4");
});

test("check editor for rating in matrix Rating", () => {
  const question = new QuestionMatrixDropdownModel("q1");
  question.addColumn("col1");
  question.columns[0].cellType = "rating";
  question.columns[0].templateQuestion.rateCount = 2;
  const propertyGrid = new PropertyGridModelTester(question.columns[0]);
  const itemsQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("rateValues")
  );
  const propertyEditor = new PropertyGridEditorMatrixRateValues();
  expect(itemsQuestion.allowAddRows).toEqual(true);
  expect(itemsQuestion.allowRemoveRows).toEqual(false);

  question.columns[0].rateCount++;
  expect(itemsQuestion.allowAddRows).toEqual(true);
  expect(itemsQuestion.allowRemoveRows).toEqual(true);
});

test("check Rate values panel in matrix Rating equals to regular Rating", () => {
  const questionMatrix = new QuestionMatrixDropdownModel("q1");
  questionMatrix.addColumn("col1");
  questionMatrix.columns[0].cellType = "rating";
  const ratingColumnParams =
    (new PropertyGridModelTester(questionMatrix.columns[0]))
      .survey.getPanelByName("rateValues").elements.map(e => e.name);

  const question = new QuestionRatingModel("q1");
  const ratingQuestionParams =
    (new PropertyGridModelTester(question))
      .survey.getPanelByName("rateValues").elements.map(e => e.name);
  expect(ratingColumnParams).toEqual(ratingQuestionParams);
});

test("bindings property editor", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q2" },
      { type: "matrixdynamic", name: "q1", bindings: { rowCount: "q2" } },
      { type: "text", name: "q3" }
    ]
  });
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("q1");
  const propertyGrid = new PropertyGridModelTester(matrix);
  const bindingsQuestion = <QuestionCompositeModel>(
    propertyGrid.survey.getQuestionByName("bindings")
  );
  expect(bindingsQuestion).toBeTruthy();
  expect(bindingsQuestion.getType()).toEqual("propertygrid_bindings");
  expect(bindingsQuestion.contentPanel.questions).toHaveLength(1);
  const q = bindingsQuestion.contentPanel.questions[0];
  expect(q.titleLocation).toEqual("left");
  expect(q.name).toEqual("rowCount");
  expect(q.choices).toHaveLength(3);
  expect(q.value).toEqual("q2");
  q.value = "q3";
  expect(matrix.bindings.getValueNameByPropertyName("rowCount")).toEqual("q3");
});
test("bindings property editor, store in JSON, Bug#6743", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "matrixdynamic", name: "q1" },
      { type: "text", name: "q2" }
    ]
  });
  const matrix = <QuestionMatrixDynamicModel>survey.getQuestionByName("q1");
  const propertyGrid = new PropertyGridModelTester(matrix);
  const bindingsQuestion = <QuestionCompositeModel>(
    propertyGrid.survey.getQuestionByName("bindings")
  );
  expect(bindingsQuestion).toBeTruthy();
  expect(bindingsQuestion.getType()).toEqual("propertygrid_bindings");
  expect(bindingsQuestion.contentPanel.questions).toHaveLength(1);
  const q = bindingsQuestion.contentPanel.questions[0];
  expect(q.name).toEqual("rowCount");
  q.value = "q2";
  expect(matrix.bindings.getValueNameByPropertyName("rowCount")).toEqual("q2");
  expect(matrix.toJSON()).toEqual({ name: "q1", bindings: { rowCount: "q2" } });
  expect(survey.getQuestionByName("q2").toJSON()).toEqual({ name: "q2" });
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
  const bindingsQuestion = <QuestionCompositeModel>(propertyGrid.survey.getQuestionByName("bindings"));

  expect(paneldynamic.bindings.getValueNameByPropertyName("panelCount")).toEqual("numberInput");
  expect(bindingsQuestion.contentPanel.questions[0].value).toEqual("numberInput");

  bindingsQuestion.contentPanel.questions[0].value = "q1";
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
  expect(restFullQuestion.titleLocation).toEqual("hidden");
  var urlQuestion = restFullQuestion.contentPanel.getQuestionByName("url");
  expect(urlQuestion).toBeTruthy();
  expect(urlQuestion.value).toEqual("myUrl");
  urlQuestion.value = "myUrl2";
  expect(question.choicesByUrl.url).toEqual("myUrl2");
});
test("restfull property editor & test dropdown", () => {
  const question = new QuestionDropdownModel("q1");
  question.choicesByUrl.url = "myUrl";
  const propertyGrid = new PropertyGridModelTester(question);
  const restFullQuestion = <QuestionCompositeModel>(
    propertyGrid.survey.getQuestionByName("choicesByUrl")
  );
  const contentPanel = restFullQuestion.contentPanel;
  const testQuestion = <QuestionDropdownModel>contentPanel.getQuestionByName("test");
  const urlQuestion = contentPanel.getQuestionByName("url");
  const valueNameQuestion = contentPanel.getQuestionByName("valueName");
  expect(testQuestion).toBeTruthy();
  expect(testQuestion.choices).toHaveLength(0);
  expect(testQuestion.isVisible).toBeTruthy();
  expect(testQuestion.choicesByUrl.url).toBe("myUrl");
  urlQuestion.value = "";
  expect(testQuestion.isVisible).toBeFalsy();
  urlQuestion.value = "myUrl2";
  expect(testQuestion.isVisible).toBeTruthy();
  expect(testQuestion.choicesByUrl.url).toBe("myUrl2");
  valueNameQuestion.value = "val";
  expect(testQuestion.choicesByUrl.valueName).toBe("val");
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
function setupBlockItemValue() {
  Serializer.addClass("blockitemvalue", [
    { name: "randomizationGroup", displayName: "Randomization group" }
  ], undefined, "itemvalue");
  ["text", "visibleIf", "enableIf"].forEach(name => {
    Serializer.getProperty("blockitemvalue", name).visible = false;
  });
  Serializer.addProperty("choicesByUrl", { name: "blocks", type: "blockitemvalue[]" });
}
function teardownBlockItemValue() {
  Serializer.removeProperty("choicesByUrl", "blocks");
  Serializer.removeClass("blockitemvalue");
}
function getBlocksMatrix(propertyGrid: PropertyGridModelTester): QuestionMatrixDynamicModel {
  const choicesByUrlQuestion = <QuestionCompositeModel>(
    propertyGrid.survey.getQuestionByName("choicesByUrl")
  );
  return <QuestionMatrixDynamicModel>(
    choicesByUrlQuestion.contentPanel.getQuestionByName("blocks")
  );
}

test("restfull property editor, blockitemvalue[] in choicesByUrl - add and edit items, Bug#7705", () => {
  setupBlockItemValue();
  try {
    const question = new QuestionDropdownModel("q1");
    const propertyGrid = new PropertyGridModelTester(question);
    const blocksQuestion = getBlocksMatrix(propertyGrid);
    expect(blocksQuestion).toBeTruthy();

    blocksQuestion.addRow();
    expect(blocksQuestion.visibleRows).toHaveLength(1);
    const blocks: any[] = (<any>question.choicesByUrl)["blocks"];
    expect(blocks).toHaveLength(1);
    expect(blocks[0].getType()).toEqual("blockitemvalue");

    blocksQuestion.addRow();
    blocksQuestion.addRow();
    expect(blocksQuestion.visibleRows).toHaveLength(3);
    expect(blocks).toHaveLength(3);
    expect(blocks[1].getType()).toEqual("blockitemvalue");
    expect(blocks[2].getType()).toEqual("blockitemvalue");

    const rows = blocksQuestion.visibleRows;
    rows[0].cells[0].value = "block1";
    rows[1].cells[0].value = "block2";
    expect(blocks[0].value).toEqual("block1");
    expect(blocks[1].value).toEqual("block2");

    rows[0].showDetailPanel();
    const rgQuestion = rows[0].detailPanel.getQuestionByName("randomizationGroup");
    expect(rgQuestion).toBeTruthy();
    rgQuestion.value = "GroupA";
    expect(blocks[0]["randomizationGroup"]).toEqual("GroupA");
  } finally {
    teardownBlockItemValue();
  }
});
test("restfull property editor, blockitemvalue[] in choicesByUrl - delete items, Bug#7705", () => {
  setupBlockItemValue();
  try {
    const question = new QuestionDropdownModel("q1");
    const propertyGrid = new PropertyGridModelTester(question);
    const blocksQuestion = getBlocksMatrix(propertyGrid);

    blocksQuestion.addRow();
    blocksQuestion.addRow();
    blocksQuestion.addRow();
    expect(blocksQuestion.visibleRows).toHaveLength(3);

    const rows = blocksQuestion.visibleRows;
    rows[0].cells[0].value = "block1";
    rows[1].cells[0].value = "block2";
    rows[2].cells[0].value = "block3";

    blocksQuestion.removeRow(1);

    expect(blocksQuestion.visibleRows).toHaveLength(2);
    const blocks: any[] = (<any>question.choicesByUrl)["blocks"];
    expect(blocks).toHaveLength(2);
    expect(blocks[0].value).toEqual("block1");
    expect(blocks[1].value).toEqual("block3");
  } finally {
    teardownBlockItemValue();
  }
});
test("restfull property editor, blockitemvalue[] in choicesByUrl - serialize to JSON after adding items, Bug#7705", () => {
  setupBlockItemValue();
  try {
    const creator = new CreatorTester();
    creator.JSON = { elements: [{ type: "dropdown", name: "q1" }] };
    creator.selectQuestionByName("q1");
    const propGridSurvey = creator.propertyGrid;
    const choicesByUrlQuestion = <QuestionCompositeModel>(
      propGridSurvey.getQuestionByName("choicesByUrl")
    );
    const blocksQuestion = <QuestionMatrixDynamicModel>(
      choicesByUrlQuestion.contentPanel.getQuestionByName("blocks")
    );
    expect(blocksQuestion).toBeTruthy();

    blocksQuestion.addRow();
    blocksQuestion.addRow();
    expect(blocksQuestion.visibleRows).toHaveLength(2);

    const rows = blocksQuestion.visibleRows;
    rows[0].cells[0].value = "block1";
    rows[1].cells[0].value = "block2";

    // Simulate opening the JSON editor tab - the JSON editor reads creator.text on activation
    const creatorText = creator.text;
    expect(creatorText).toBeTruthy();
    const creatorJSON = JSON.parse(creatorText);
    const q1JSON = creatorJSON.pages[0].elements[0];
    expect(q1JSON.choicesByUrl).toBeTruthy();
    expect(q1JSON.choicesByUrl.blocks).toHaveLength(2);
    expect(q1JSON.choicesByUrl.blocks[0].value).toEqual("block1");
    expect(q1JSON.choicesByUrl.blocks[1].value).toEqual("block2");

    // Simulate JSON editor deactivation - the JSON editor calls creator.changeText on deactivation
    creator.text = creatorText;
    const q1Restored = creator.survey.getQuestionByName("q1");
    const blocksRestored: any[] = (<any>q1Restored.choicesByUrl)["blocks"];
    expect(blocksRestored).toHaveLength(2);
    expect(blocksRestored[0].value).toEqual("block1");
    expect(blocksRestored[1].value).toEqual("block2");
  } finally {
    teardownBlockItemValue();
  }
});
test("check imagepicker responsiveImageSize properties", () => {
  const imagePicker = new QuestionImagePickerModel("q2");
  let propertyGrid = new PropertyGridModelTester(imagePicker);
  const minWidth = <QuestionTextModel>propertyGrid.survey.getQuestionByName("minImageWidth");
  expect(minWidth.description).toEqual("Does not apply if you specify the exact display area width or height.");
  expect(minWidth.inputType).toEqual("number");
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
  question.showOtherItem = true;
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
    return property.name == "choicesByUrl" || property.name == "url" || property.name == "file";
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
test("matrix dropdown rows, enableIf and visibleIf in row", () => {
  const options = new EmptySurveyCreatorOptions();
  const question = new QuestionMatrixDropdownModel("q1");
  question.rows = [1, 2, 3];
  const propertyGrid = new PropertyGridModelTester(question, options);
  const choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("rows")
  );
  const row = choicesQuestion.visibleRows[0];
  row.showDetailPanel();
  const visibleIfQuestion = <Question>row.detailPanel.getQuestionByName("visibleIf");
  const enableIfQuestion = <Question>row.detailPanel.getQuestionByName("enableIf");
  expect(visibleIfQuestion).toBeTruthy();
  expect(enableIfQuestion).toBeTruthy();
  expect(visibleIfQuestion.parent).toEqual(enableIfQuestion.parent);
  expect(visibleIfQuestion.title).toBe("Make the row visible if");
  expect(enableIfQuestion.title).toBe("Make the row editable if");
});
test("matrix rows/columns, enableIf and visibleIf in row", () => {
  const options = new EmptySurveyCreatorOptions();
  const question = new QuestionMatrixModel("q1");
  question.rows = [1, 2, 3];
  question.columns = [1, 2, 3];
  const propertyGrid = new PropertyGridModelTester(question, options);
  let choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("rows")
  );
  let row = choicesQuestion.visibleRows[0];
  row.showDetailPanel();
  let visibleIfQuestion = <Question>row.detailPanel.getQuestionByName("visibleIf");
  let enableIfQuestion = <Question>row.detailPanel.getQuestionByName("enableIf");
  expect(visibleIfQuestion).toBeTruthy();
  expect(enableIfQuestion).toBeTruthy();
  expect(visibleIfQuestion.parent).toEqual(enableIfQuestion.parent);

  choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  row = choicesQuestion.visibleRows[0];
  row.showDetailPanel();
  visibleIfQuestion = <Question>row.detailPanel.getQuestionByName("visibleIf");
  enableIfQuestion = <Question>row.detailPanel.getQuestionByName("enableIf");
  expect(visibleIfQuestion).toBeTruthy();
  expect(enableIfQuestion).toBeTruthy();
  expect(visibleIfQuestion.parent).toEqual(enableIfQuestion.parent);
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
  const rows = pagesQuestion.visibleRows;
  expect(pagesQuestion.canRemoveRow(rows[0])).toBeTruthy();
  expect(pagesQuestion.canRemoveRow(rows[1])).toBeTruthy();
  expect(pagesQuestion.canRemoveRow(rows[2])).toBeTruthy();
  pagesQuestion.removeRowUI(rows[0]);
  expect(survey.pages).toHaveLength(3);
  pagesQuestion.removeRowUI(rows[1]);
  expect(survey.pages).toHaveLength(3);
  pagesQuestion.removeRowUI(rows[2]);
  expect(survey.pages).toHaveLength(2);
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
test("Set text into new ItemValue", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices = [{ value: 1, text: "Item 1" }, { value: 2, text: "Item 2" }];
  var propertyGrid = new PropertyGridModelTester(question, new EmptySurveyCreatorOptions());
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  var rows = choicesQuestion.visibleRows;
  choicesQuestion.addRow();
  expect(question.choices).toHaveLength(3);
  expect(question.choices[2].text).toEqual("Item 3");
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
  const question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  const propertyGrid = new PropertyGridModelTester(question.columns[0]);
  const isUniqueQuestion = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("isUnique");
  expect(isUniqueQuestion).toBeTruthy();
  expect(isUniqueQuestion.getType()).toEqual("boolean");
});
test("matrix columns and rows has column value with isUnique property set to true", () => {
  const question = new QuestionMatrixModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const columnsQuestion = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("columns");
  const rowsQuestion = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("rows");
  expect(columnsQuestion.getColumnByName("value").isUnique).toBeTruthy();
  expect(rowsQuestion.getColumnByName("value").isUnique).toBeTruthy();
  expect(columnsQuestion.keyName).toBe("value");
  expect(rowsQuestion.keyName).toBe("value");
});
test("choices values check on unique", () => {
  const question = new QuestionDropdownModel("q1");
  question.choices = ["item1", "item2", "item3"];
  const propertyGrid = new PropertyGridModelTester(question);
  const matrix = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("choices");
  expect(matrix.keyName).toBe("value");
  const cellQuestion = matrix.visibleRows[0].getQuestionByColumnName("value");
  expect(cellQuestion.errors).toHaveLength(0);
  cellQuestion.value = "item2";
  expect(cellQuestion.errors).toHaveLength(1);
  cellQuestion.value = "item4";
  expect(cellQuestion.errors).toHaveLength(0);
});
test("Do not set non-unique duplicated values, Bug#5891", () => {
  const question = new QuestionDropdownModel("q1");
  question.choices = ["item1", "item2", "item3"];
  const propertyGrid = new PropertyGridModelTester(question);
  const matrix = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("choices");
  const rows = matrix.visibleRows;
  rows[1].getQuestionByColumnName("value").value = "item1";
  expect(question.choices[1].value).toBe("item2");
  rows[1].getQuestionByColumnName("text").value = "abc";
  expect(question.choices[1].value).toBe("item2");
});
test("choices values check on unique when value is the detail panel", () => {
  const prop = Serializer.findProperty("itemvalue", "value");
  const prevShowMode = prop.showMode;
  prop.showMode = "form";
  const question = new QuestionDropdownModel("q1");
  question.choices = ["item1", "item2", "item3"];
  const propertyGrid = new PropertyGridModelTester(question);
  const matrix = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("choices");
  expect(matrix.keyName).toBe("value");
  matrix.visibleRows[0].showDetailPanel();
  const cellQuestion = matrix.visibleRows[0].detailPanel.getQuestionByName("value");
  expect(cellQuestion.errors).toHaveLength(0);
  cellQuestion.value = "item2";
  expect(cellQuestion.errors).toHaveLength(1);
  cellQuestion.value = "item4";
  expect(cellQuestion.errors).toHaveLength(0);
  prop.showMode = prevShowMode;
});
test("matrix dropdown rows has column value with isUnique property set to true", () => {
  const question = new QuestionMatrixDropdownModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const rowsQuestion = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("rows");
  expect(rowsQuestion.getColumnByName("value").isUnique).toBeTruthy();
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
  expect(actions).toHaveLength(3);
  const updater = getAddItemActionEnableUpdater(choicesQuestion);
  expect(actions[1].id).toEqual("property-grid-setup");
  expect(actions[1].enabled).toBeFalsy();
  expect(updater()).toBeFalsy();
});
test.skip("We decided to support editing visibleIf/enableIf. property-grid-setup action dynamic enabled property Bug#6751", () => {
  const question1 = new QuestionDropdownModel("q1");
  question1.choices = [1, 2, 3];
  const propertyGrid = new PropertyGridModelTester(question1);
  const choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  const action = choicesQuestion.getTitleToolbar().getActionById("property-grid-setup");
  expect(action).toBeTruthy();
  expect(action.enabled).toBeTruthy();
  const row = choicesQuestion.visibleRows[0];
  row.showDetailPanel();
  const visibleIfQuestion = row.detailPanel.getQuestionByName("visibleIf");
  visibleIfQuestion.value = "1 = 1";
  expect(action.enabled).toBeFalsy();
  visibleIfQuestion.value = "";
  expect(action.enabled).toBeTruthy();
});
test("property-grid-setup disable for multiple", () => {
  const question1 = new QuestionDropdownModel("q1");
  question1.choices = [1, { value: 2, text: { default: "t1", de: "t2" } }, 3];
  const propertyGrid = new PropertyGridModelTester(question1);
  const choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  const action = choicesQuestion.getTitleToolbar().getActionById("property-grid-setup");
  expect(action).toBeTruthy();
  expect(action.enabled).toBeFalsy();
});
test("property-grid-setup is not disabled by the editor locale, Bug#7935", () => {
  const question1 = new QuestionDropdownModel("q1");
  question1.choices = [1, 2, 3];
  const propertyGrid = new PropertyGridModelTester(question1);
  const choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  const action = choicesQuestion.getTitleToolbar().getActionById("property-grid-setup");
  expect(action).toBeTruthy();
  expect(action.enabled).toBeTruthy();

  editorLocalization.currentLocale = "de";
  try {
    const propertyGrid2 = new PropertyGridModelTester(question1);
    const choicesQuestion2 = <QuestionMatrixDynamicModel>(
      propertyGrid2.survey.getQuestionByName("choices")
    );
    const action2 = choicesQuestion2.getTitleToolbar().getActionById("property-grid-setup");
    expect(action2).toBeTruthy();
    expect(action2.enabled).toBeTruthy();
  } finally {
    editorLocalization.currentLocale = "";
  }
});
test("property-grid-setup should not be disabled by the Creator UI locale, Bug#7935", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "dropdown", name: "q1", choices: [1, 2, 3] }]
  };
  creator.locale = "de";
  try {
    creator.selectQuestionByName("q1");
    const choicesQuestion = <QuestionMatrixDynamicModel>creator.propertyGrid.getQuestionByName("choices");
    expect(choicesQuestion).toBeTruthy();
    const action = choicesQuestion.getTitleToolbar().getActionById("property-grid-setup");
    expect(action).toBeTruthy();
    expect(creator.survey.locale).toBeFalsy();
    expect(action.enabled).toBeTruthy();
  } finally {
    creator.locale = "";
  }
});
test("property-grid-setup should be disabled for a non-default survey locale, Bug#7935", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "dropdown", name: "q1", choices: [1, 2, 3] }]
  };
  creator.selectQuestionByName("q1");
  const choicesQuestion = <QuestionMatrixDynamicModel>creator.propertyGrid.getQuestionByName("choices");
  expect(choicesQuestion.getTitleToolbar().getActionById("property-grid-setup").enabled).toBeTruthy();

  creator.survey.locale = "de";
  //re-create the property grid to make sure the action state is re-calculated
  creator.selectElement(creator.survey);
  creator.selectQuestionByName("q1");
  const choicesQuestion2 = <QuestionMatrixDynamicModel>creator.propertyGrid.getQuestionByName("choices");
  const action2 = choicesQuestion2.getTitleToolbar().getActionById("property-grid-setup");
  expect(action2).toBeTruthy();
  expect(action2.enabled).toBeFalsy();
});
test("options.onSetPropertyEditorOptionsCallback - allowBatchEdit", () => {
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
    options.allowBatchEdit = false;
  };

  const question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  const propertyGrid = new PropertyGridModelTester(question, options);
  const choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(propName).toEqual("choices");
  const actions = choicesQuestion.getTitleActions();
  expect(actions).toHaveLength(3);
  expect(actions[0].id).toEqual("property-grid-help");
  expect(actions[1].id).toEqual("property-grid-clear");
  expect(actions[2].id).toEqual("add-item");
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
    if (propertyName != "name") return "";
    if (obj.getType() != "dropdown" || value.length != 3) return "No3Letters";
    return "";
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
  expect(editQuestion.linkValueText).toEqual("Change Default Answer");
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
  expect(editQuestion.linkValueText).toEqual("Set Default Answer");
  question.defaultValue = [1, 2];
  expect(editQuestion.linkValueText).toEqual("Change Default Answer");
  question.defaultValue = undefined;
  expect(editQuestion.linkValueText).toEqual("Set Default Answer");
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
test("DefaultValue editor & readOnly", () => {
  PropertyGridEditorCollection.register(new PropertyGridValueEditor());
  const question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3, 4, 5];
  question.defaultValue = 2;
  const defaultValueProp = Serializer.findProperty("dropdown", "defaultValue");
  defaultValueProp.readOnly = true;
  var propertyGrid = new PropertyGridModelTester(question);
  const editQuestion = <QuestionLinkValueModel>propertyGrid.survey.getQuestionByName("defaultValue");
  const property = <JsonObjectProperty>(<any>editQuestion).property;
  expect(editQuestion.isReadOnly).toBeTruthy();
  expect(editQuestion.isClickable).toBeTruthy();
  question.defaultValue = undefined;
  expect(editQuestion.isReadOnly).toBeTruthy();
  expect(editQuestion.isClickable).toBeFalsy();
  question.defaultValue = 2;
  const editor = <PropertyGridValueEditor>(
    PropertyGridEditorCollection.getEditor(property)
  );
  const valueEditor = editor.createPropertyEditorSetup(
    question,
    property,
    editQuestion,
    new EmptySurveyCreatorOptions()
  );
  var valueQuestion = valueEditor.editSurvey.getQuestionByName("question");
  expect(valueQuestion).toBeTruthy();
  expect(valueQuestion.value).toEqual(2);
  defaultValueProp.readOnly = false;
});
test("DefaultValue editor & matrix dropdown vs rowsVisibleIf, Bug#6902", () => {
  PropertyGridEditorCollection.register(new PropertyGridValueEditor());
  const question = new QuestionMatrixDropdownModel("q1");
  question.rows = [1, 2, 3, 4, 5];
  question.rowsVisibleIf = "{item} = 1";
  var propertyGrid = new PropertyGridModelTester(question);
  const editQuestion = <QuestionLinkValueModel>propertyGrid.survey.getQuestionByName("defaultValue");
  const property = <JsonObjectProperty>(<any>editQuestion).property;
  const editor = <PropertyGridValueEditor>(
    PropertyGridEditorCollection.getEditor(property)
  );
  const valueEditor = editor.createPropertyEditorSetup(
    question,
    property,
    editQuestion,
    new EmptySurveyCreatorOptions()
  );
  var valueQuestion = valueEditor.editSurvey.getQuestionByName("question");
  expect(valueQuestion).toBeTruthy();
  expect(valueQuestion.rowsVisibleIf).toBeFalsy();
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
  expect(setValueQuestion.linkValueText).toEqual("Change Answer");
  expect(survey.triggers).toHaveLength(1);
  var trigger = <SurveyTriggerSetValue>survey.triggers[0];
  expect(trigger.getType()).toEqual("setvaluetrigger");
  expect(trigger.setToName).toEqual("q1");
  expect(trigger.setValue).toEqual(2);
  actions[0].action();
  expect(trigger.setValue).toBeFalsy();
  expect(setValueQuestion.value).toBeFalsy();
  expect(setValueQuestion.linkValueText).toEqual("Set Answer");
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
function getAddItemActionEnableUpdater(question: Question): () => any {
  return (<ComputedUpdater><any>getAddItemAction(question).enabled).updater;
}
test("Support maxColumns option", () => {
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  var options = new EmptySurveyCreatorOptions();
  options.maxColumns = 3;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var editQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  expect(editQuestion.maxRowCount).toEqual(3);
  const addAction = getAddItemAction(editQuestion);
  expect(addAction).toBeTruthy();
  const updater = getAddItemActionEnableUpdater(editQuestion);
  expect(updater()).toBeTruthy();
  question.addColumn("col3");
  expect(updater()).toBeFalsy();
  question.columns.splice(2, 1);
  expect(updater()).toBeTruthy();
});
test("Support minChoices option", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices.push(new ItemValue("item1"));
  question.choices.push(new ItemValue("item2"));
  var options = new EmptySurveyCreatorOptions();
  options.minChoices = 3;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var editQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(editQuestion.minRowCount).toEqual(3);
});
test("Support maxChoices option", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices.push(new ItemValue("item1"));
  question.choices.push(new ItemValue("item2"));
  var options = new EmptySurveyCreatorOptions();
  options.maxChoices = 3;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var editQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(editQuestion.maxRowCount).toEqual(3);
  const addAction = getAddItemAction(editQuestion);
  expect(addAction).toBeTruthy();
  const updater = getAddItemActionEnableUpdater(editQuestion);
  expect(updater()).toBeTruthy();
  question.choices.push(new ItemValue("item3"));
  expect(updater()).toBeFalsy();
  question.choices.splice(0, 1);
  expect(updater()).toBeTruthy();
});
test("Support maxRows option", () => {
  const testMaxRows = (question: any) => {
    question.rows.push(new ItemValue("row1"));
    question.rows.push(new ItemValue("row2"));
    var options = new EmptySurveyCreatorOptions();
    options.maxRows = 3;
    var propertyGrid = new PropertyGridModelTester(question, options);
    var editQuestion = <QuestionMatrixDynamicModel>(
      propertyGrid.survey.getQuestionByName("rows")
    );
    expect(editQuestion.maxRowCount).toEqual(3);
    const addAction = getAddItemAction(editQuestion);
    expect(addAction).toBeTruthy();
    const updater = getAddItemActionEnableUpdater(editQuestion);
    expect(updater()).toBeTruthy();
    question.rows.push(new ItemValue("row3"));
    expect(updater()).toBeFalsy();
  };
  testMaxRows(new QuestionMatrixDropdownModel("q1"));
  testMaxRows(new QuestionMatrixModel("q1"));
});
test("Support maxColumns option in single matrix", () => {
  var question = new QuestionMatrixModel("q1");
  question.columns.push(new ItemValue("col1"));
  question.columns.push(new ItemValue("col2"));
  var options = new EmptySurveyCreatorOptions();
  options.maxColumns = 3;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var editQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("columns")
  );
  expect(editQuestion.maxRowCount).toEqual(3);
  const addAction = getAddItemAction(editQuestion);
  expect(addAction).toBeTruthy();
  const updater = getAddItemActionEnableUpdater(editQuestion);
  expect(updater()).toBeTruthy();
  question.columns.push(new ItemValue("col3"));
  expect(updater()).toBeFalsy();
});
test("Support maxRateValues option", () => {
  var question = new QuestionRatingModel("q1");
  question.rateValues.push(new ItemValue("item1"));
  question.rateValues.push(new ItemValue("item2"));
  var options = new EmptySurveyCreatorOptions();
  options.maxRateValues = 3;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var editQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("rateValues")
  );
  expect(editQuestion.maxRowCount).toEqual(3);
  const addAction = getAddItemAction(editQuestion);
  expect(addAction).toBeTruthy();
  const updater = getAddItemActionEnableUpdater(editQuestion);
  expect(updater()).toBeTruthy();
  question.rateValues.push(new ItemValue("item3"));
  expect(updater()).toBeFalsy();
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
  expect(question.columns[0].inputType).toEqual("text");
  expect(propertyGrid.survey.getQuestionByName("inputType").value).toEqual("text");
  propertyGrid.survey.getQuestionByName("inputType").value = "number";
  expect(question.columns[0].inputType).toEqual("number");
  propertyGrid.survey.getQuestionByName("title").value = "New title";
  expect(question.columns[0].title).toEqual("New title");
  expect(propertyGrid.survey.getQuestionByName("min")).toBeTruthy();
  expect(propertyGrid.survey.getQuestionByName("min").isVisible).toBeTruthy();
});
test("Change question name from 'question1' to 'Question1', Bug#7261", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [{ elements: [{ type: "text", name: "question1" }, { type: "text", name: "q2", visibleIf: "{question1}=1" }] }]
  };
  creator.setModified("");
  const question = creator.survey.getQuestionByName("question1");
  const propertyGrid = new PropertyGridModelTester(question, creator);
  const nameQuestion = propertyGrid.survey.getQuestionByName("name");
  nameQuestion.inputValue = "Question1";
  expect(nameQuestion.value).toStrictEqual("Question1");
  expect(question.name).toStrictEqual("Question1");
  const question2 = creator.survey.getQuestionByName("q2");
  expect(question2.visibleIf).toStrictEqual("{Question1}=1");
  expect(creator.state).toBe("modified");
  const json = creator.survey.toJSON();
  expect(json.pages[0].elements[0].name).toStrictEqual("Question1");
});
test("Change checkbox column type into boolean, Bug#4519", () => {
  const survey = new SurveyModel({
    "elements": [
      {
        "type": "matrixdropdown",
        "name": "matrix",
        "columns": [
          {
            "name": "checked",
            "cellType": "checkbox",
            "choices": [
              {
                "value": "item1",
                "text": " "
              }
            ]
          }
        ]
      }
    ]
  });
  const column = survey.getQuestionByName("matrix").columns[0];
  const options = new EmptySurveyCreatorOptions();
  const propertyGrid = new PropertyGridModelTester(column, options);
  const cellTypeQuestion = propertyGrid.survey.getQuestionByName("cellType");
  expect(cellTypeQuestion).toBeTruthy();
  expect(cellTypeQuestion.value).toEqual("checkbox");
  cellTypeQuestion.value = "boolean";
  expect(column.cellType).toBe("boolean");
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
  expect(propertyGrid.survey.getQuestionByName("showNoneItem")).toBeFalsy();
  cellTypQuestion.value = "checkbox";
  expect(propertyGrid.survey.getPanelByName("general").isExpanded).toBeTruthy();
  expect(question.columns[0].cellType).toEqual("checkbox");
  expect(propertyGrid.survey.getQuestionByName("name").value).toEqual("col1");
  expect(propertyGrid.survey.getQuestionByName("showNoneItem")).toBeTruthy();
});
test("title for expression property for expression column, Bug#5531", () => {
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1").cellType = "expression";
  var options = new EmptySurveyCreatorOptions();
  var propertyGrid = new PropertyGridModelTester(question.columns[0], options);
  const expressionQuestion = propertyGrid.survey.getQuestionByName("expression");
  expect(expressionQuestion.title).toEqual("Expression");
});
test("Support property availableInMatrixColumn attribute, #5877", (): any => {
  Serializer.addProperty("question", { name: "prop1", category: "general", availableInMatrixColumn: true });
  Serializer.addProperty("question", { name: "prop2", category: "general" });

  const question = new QuestionMatrixDynamicModel("q1");
  const column = question.addColumn("col1");
  const propertyGrid = new PropertyGridModelTester(column);
  const prop1Question = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("prop1");
  const prop2Question = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("prop2");
  expect(prop1Question).toBeTruthy();
  expect(prop1Question.parent.name).toBe("general");
  expect(prop2Question).toBeFalsy();

  Serializer.removeProperty("question", "prop1");
  Serializer.removeProperty("question", "prop2");
});
test("Support property availableInMatrixColumn attribute && correct category, #5877", (): any => {
  Serializer.addProperty("question", { name: "prop1", availableInMatrixColumn: true });
  Serializer.addProperty("question", { name: "prop2" });
  Serializer.addProperty("question", { name: "prop3", availableInMatrixColumn: true });

  const def = SurveyQuestionEditorDefinition.definition["question"];
  def.properties?.push({ name: "prop1", tab: "validation" });
  def.properties?.push({ name: "prop2", tab: "validation" });
  const question = new QuestionMatrixDynamicModel("q1");
  const column = question.addColumn("col1");
  const propertyGrid = new PropertyGridModelTester(column);
  const prop1Question = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("prop1");
  const prop2Question = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("prop2");
  expect(prop1Question).toBeTruthy();
  expect(prop1Question.parent.name).toBe("validation");
  expect(prop2Question).toBeFalsy();

  Serializer.removeProperty("question", "prop1");
  Serializer.removeProperty("question", "prop2");
  Serializer.removeProperty("question", "prop3");
});
test("multiplevalues property with dependsOn keeps the values that are still offered, Bug#8157", () => {
  Serializer.addProperty("question", { name: "mode", choices: ["a", "b"], default: "a", category: "general" });
  Serializer.addProperty("question", {
    name: "tags:multiplevalues",
    dependsOn: ["mode"],
    choices: (obj: any) => (obj && obj.mode === "b" ? ["x", "y", "z", "w"] : ["x", "y", "z"]),
    category: "general"
  });
  const survey = new SurveyModel({ elements: [{ type: "text", name: "q1", mode: "a", tags: ["x", "y"] }] });
  const q1 = survey.getQuestionByName("q1");
  const propertyGrid = new PropertyGridModelTester(q1);
  const modeQuestion = propertyGrid.survey.getQuestionByName("mode");
  const tagsQuestion = propertyGrid.survey.getQuestionByName("tags");
  expect([...tagsQuestion.value]).toEqual(["x", "y"]);

  modeQuestion.value = "b";
  expect(tagsQuestion.choices.map((item: ItemValue) => item.value)).toEqual(["x", "y", "z", "w"]);
  expect([...tagsQuestion.value]).toEqual(["x", "y"]);
  expect([...q1.tags]).toEqual(["x", "y"]);

  Serializer.removeProperty("question", "tags");
  Serializer.removeProperty("question", "mode");
});
test("multiplevalues property with dependsOn drops only the values that are no longer offered, Bug#8157", () => {
  Serializer.addProperty("question", { name: "mode", choices: ["a", "b"], default: "a", category: "general" });
  Serializer.addProperty("question", {
    name: "tags:multiplevalues",
    dependsOn: ["mode"],
    choices: (obj: any) => (obj && obj.mode === "b" ? ["x", "y"] : ["x", "y", "z"]),
    category: "general"
  });
  const survey = new SurveyModel({ elements: [{ type: "text", name: "q1", mode: "a", tags: ["x", "z"] }] });
  const q1 = survey.getQuestionByName("q1");
  const propertyGrid = new PropertyGridModelTester(q1);
  const modeQuestion = propertyGrid.survey.getQuestionByName("mode");
  const tagsQuestion = propertyGrid.survey.getQuestionByName("tags");
  expect([...tagsQuestion.value]).toEqual(["x", "z"]);

  modeQuestion.value = "b";
  expect([...tagsQuestion.value]).toEqual(["x"]);
  expect([...q1.tags]).toEqual(["x"]);

  modeQuestion.value = "a";
  expect([...tagsQuestion.value]).toEqual(["x"]);
  expect([...q1.tags]).toEqual(["x"]);

  Serializer.removeProperty("question", "tags");
  Serializer.removeProperty("question", "mode");
});
