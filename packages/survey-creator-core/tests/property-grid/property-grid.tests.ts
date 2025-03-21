import {
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
  QuestionImagePickerModel,
  ComponentCollection,
  QuestionBooleanModel,
  QuestionRadiogroupModel,
  PageModel,
  ActionContainer
} from "survey-core";
import {
  EmptySurveyCreatorOptions,
  ICollectionItemAllowOperations,
  settings
} from "../../src/creator-settings";
import { ConditionEditor } from "../../src/property-grid/condition-survey";
import { PropertyGridEditorCondition } from "../../src/property-grid/condition";
import { QuestionLinkValueModel } from "../../src/components/link-value";
import {
  PropertyGridValueEditor,
  PropertyGridRowValueEditor,
  PropertyGridValueEditorBase
} from "../../src/property-grid/values";
import { PropertyGridEditorMatrixPages, PropertyGridEditorMatrixRateValues } from "../../src/property-grid/matrices";
import { editorLocalization } from "../../src/editorLocalization";
import { SurveyQuestionEditorDefinition } from "../../src/question-editor/definition";
import { PropertyGridModelTester, findSetupAction } from "./property-grid.base";
import { enStrings } from "../../src/localization/english";
import { CreatorTester } from "../creator-tester";
import { QuestionButtonGroupModel } from "survey-core";

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
  expect(localeQuestion.showOptionsCaption).toBeTruthy();
  expect(localeQuestion.optionsCaption).toEqual("Default (English)");
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
  expect(localeQuestion.showOptionsCaption).toBeTruthy();
  expect(localeQuestion.optionsCaption).toEqual("Default (English)");
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
  expect(row.detailPanel.elements).toHaveLength(3);
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
  expect(row.detailPanel.elements).toHaveLength(3);
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
  const question = new QuestionTextModel("q1");
  question.visibleIf = "{q2} = 'abc'";
  const options = new EmptySurveyCreatorOptions();
  options.allowEditExpressionsInTextEditor = false;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var conditionQuestion = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("visibleIf");
  var expressionQuestion = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("defaultValueExpression");
  expect(conditionQuestion.onKeyDownPreprocess).toBeTruthy();
  expect(expressionQuestion.onKeyDownPreprocess).toBeFalsy();
  expect(conditionQuestion.getTitleToolbar()).toBeTruthy();
  expect(conditionQuestion.titleActions).toHaveLength(2);
  expect(conditionQuestion.titleActions[1].enabled).toBeTruthy();

  options.allowEditExpressionsInTextEditor = true;
  propertyGrid = new PropertyGridModelTester(question, options);
  conditionQuestion = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("visibleIf");
  expressionQuestion = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("defaultValueExpression");
  expect(conditionQuestion.onKeyDownPreprocess).toBeFalsy();
  expect(expressionQuestion.onKeyDownPreprocess).toBeFalsy();
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
  options.getObjectDisplayName = (obj: Base, area: string, reason: string, displayName: string): string => {
    if (reason === "property-editor" && area === "property-grid:property-editor") return (survey.getAllQuestions().indexOf(<Question>obj) + 1).toString() + ". " + displayName;
    return displayName;
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
test("property-grid-setup action dynamic enabled property Bug#6751", () => {
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
  const updater = getAddItemActionEnableUpdater(editQuestion);
  expect(updater()).toBeTruthy();
  question.addColumn("col3");
  expect(updater()).toBeFalsy();
  question.columns.splice(2, 1);
  expect(updater()).toBeTruthy();
});
test("Support minimumChoicesCount option", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices.push(new ItemValue("item1"));
  question.choices.push(new ItemValue("item2"));
  var options = new EmptySurveyCreatorOptions();
  options.minimumChoicesCount = 3;
  var propertyGrid = new PropertyGridModelTester(question, options);
  var editQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(editQuestion.minRowCount).toEqual(3);
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
  const updater = getAddItemActionEnableUpdater(editQuestion);
  expect(updater()).toBeTruthy();
  question.choices.push(new ItemValue("item3"));
  expect(updater()).toBeFalsy();
  question.choices.splice(0, 1);
  expect(updater()).toBeTruthy();
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
    const updater = getAddItemActionEnableUpdater(editQuestion);
    expect(updater()).toBeTruthy();
    question.rows.push(new ItemValue("row3"));
    expect(updater()).toBeFalsy();
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
  const updater = getAddItemActionEnableUpdater(editQuestion);
  expect(updater()).toBeTruthy();
  question.columns.push(new ItemValue("col3"));
  expect(updater()).toBeFalsy();
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

test("Validate Selected Element Errors 1", (): any => {
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
test("Required properties restore on change to empty value", (): any => {
  var titleProp = Serializer.findProperty("question", "title");
  var oldIsRequired = titleProp.isRequired;
  titleProp.isRequired = true;
  var question = new QuestionTextModel("q1");
  question.title = "q1Title";
  var options = new EmptySurveyCreatorOptions();
  options["survey"] = { getAllQuestions: () => [question] };
  var propertyGrid = new PropertyGridModelTester(question, options);
  var titleQuestion = propertyGrid.survey.getQuestionByName("title") as QuestionTextModel;
  titleQuestion.value = "q1t";
  expect(titleQuestion.value).toEqual("q1t");
  titleQuestion.value = "";
  expect(question.title).toEqual("q1t");
  expect(titleQuestion.value).toBeFalsy();
  titleProp.isRequired = oldIsRequired;
});
test("Validate Selected Element Errors 2", () => {
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
test("Expand/collapse categories, allowExpandMultipleCategories = true", () => {
  settings.propertyGrid.allowExpandMultipleCategories = true;
  var question = new QuestionTextModel("q1");
  var options = new EmptySurveyCreatorOptions();
  var propertyGrid = new PropertyGridModelTester(question, options);
  var generalPanel = <PanelModel>propertyGrid.survey.getPanelByName("general");
  var logicPanel = <PanelModel>propertyGrid.survey.getPanelByName("logic");
  expect(generalPanel.isExpanded).toBeFalsy();
  propertyGrid.expandCategory("general");
  expect(generalPanel.isExpanded).toBeTruthy();

  expect(logicPanel.isExpanded).toBeFalsy();
  propertyGrid.expandAllCategories();
  expect(logicPanel.isExpanded).toBeTruthy();
  propertyGrid.collapseAllCategories();
  expect(logicPanel.isExpanded).toBeFalsy();
  settings.propertyGrid.allowExpandMultipleCategories = false;
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
    var choices = new Array<any>();
    if (!entity) return choices;
    choices.push({ value: null });
    choices.push({ value: "entity" });
    choices.push({ value: entity + "1", text: entity + " 1" });
    choices.push({ value: entity + "2", text: entity + " 2" });
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
  expect(targetQuestion.allowClear).toBeTruthy();
  expect(targetQuestion.visibleChoices[1].value).toEqual("Account1");
  targetQuestion.value = "Account2";
  entityQuestion.value = "Product";
  expect(targetQuestion.visibleChoices).toHaveLength(3);
  expect(targetQuestion.visibleChoices[1].value).toEqual("Product1");
  expect(targetQuestion.value).toBeFalsy();

  Serializer.removeProperty("question", "targetEntity");
  Serializer.removeProperty("question", "targetField");
});
test("DependedOn properties in matrix detail panel, dynamic choices", () => {
  Serializer.addProperty("calculatedvalue", "targetEntity");
  Serializer.addProperty("calculatedvalue", {
    name: "targetField",
    dependsOn: "targetEntity",
    choices: function (obj) {
      return getChoicesByEntity(obj);
    }
  });
  function getChoicesByEntity(obj: any): Array<any> {
    const entity = !!obj ? obj["targetEntity"] : null;
    const choices = [];
    if (!entity) return choices;
    choices.push({ value: "entity" });
    choices.push({ value: entity + " 1", text: entity + " 1" });
    choices.push({ value: entity + " 2", text: entity + " 2" });
    return choices;
  }

  const survey = new SurveyModel({
    calculatedValues: [{ name: "var1" }]
  });
  const propertyGrid = new PropertyGridModelTester(survey);
  const calculatedValueQuestion = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("calculatedValues");
  expect(calculatedValueQuestion).toBeTruthy();
  expect(calculatedValueQuestion.visibleRows).toHaveLength(1);
  const row = calculatedValueQuestion.visibleRows[0];
  row.showDetailPanel();
  const detailPanel = row.detailPanel;
  expect(detailPanel).toBeTruthy();

  var entityQuestion = detailPanel.getQuestionByName("targetEntity");
  var targetQuestion = <QuestionDropdownModel>detailPanel.getQuestionByName("targetField");

  expect(targetQuestion.visibleChoices).toHaveLength(0);
  entityQuestion.value = "Account";
  expect(targetQuestion.visibleChoices).toHaveLength(3);
  expect(targetQuestion.visibleChoices[1].value).toEqual("Account 1");

  Serializer.removeProperty("calculatedvalue", "targetEntity");
  Serializer.removeProperty("calculatedvalue", "targetField");
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

test("enableIf JSON property attribute", () => {
  Serializer.addProperty("question", {
    name: "prop1",
    category: "general",
    enableIf: function (obj) {
      return obj.title === "abc";
    },
  });
  const question = new QuestionDropdownModel("q1");

  const propertyGrid = new PropertyGridModelTester(question);
  const prop1Question = propertyGrid.survey.getQuestionByName("prop1");
  expect(prop1Question.isReadOnly).toBeTruthy();
  question.title = "abc";
  expect(prop1Question.isReadOnly).toBeFalsy();

  Serializer.removeProperty("question", "prop1");
});

test("showOptionsCaption/allowClear for dropdown with empty choice item", () => {
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
  expect(testQuestion.allowClear).toBeTruthy();
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
      "The expression can include basic calculations"
    ) > -1
  ).toBeTruthy();
  expect(actions).toHaveLength(2);
  expect(actions[0].id).toEqual("property-grid-help");
  expect(actions[0].iconName).toEqual("icon-description");
  expect(defaultValueExpressionQuestion.descriptionLocation).toEqual("hidden");
  actions[0].action();
  expect(defaultValueExpressionQuestion.descriptionLocation).toEqual(
    "underTitle"
  );
  expect(actions[0].iconName).toEqual("icon-description-hide");
  actions[0].action();
  expect(defaultValueExpressionQuestion.descriptionLocation).toEqual("hidden");
  expect(actions[0].iconName).toEqual("icon-description");
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
    if (["linkvalue", "color"].indexOf(allQuestionTypes[i].name) > -1)
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
test("Show empty rows template if there is no rows", () => {
  PropertyGridEditorCollection.register(new PropertyGridEditorCondition());
  var survey = new SurveyModel({
    elements: [
      { type: "checkbox", name: "q1" }
    ]
  });
  let propertyGrid = new PropertyGridModelTester(survey);
  let propEditorQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("triggers")
  );
  expect(propEditorQuestion.hideColumnsIfEmpty).toBeTruthy();
  expect(propEditorQuestion.renderedTable.showTable).toBeFalsy();
  expect(propEditorQuestion.noRowsText).toEqual("You don't have any triggers yet");
  expect(propEditorQuestion.addRowText).toEqual("Add new trigger");

  propertyGrid = new PropertyGridModelTester(survey.getQuestionByName("q1"));
  propEditorQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(propEditorQuestion.hideColumnsIfEmpty).toBeTruthy();
  expect(propEditorQuestion.renderedTable.showTable).toBeFalsy();
  expect(propEditorQuestion.noRowsText).toEqual("You don't have any choices yet");
  expect(propEditorQuestion.addRowText).toEqual("Add new choice");
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
  expect(choicesQuestion.allowRowReorder).toBeTruthy();
  Serializer.findProperty("selectbase", "choices").readOnly = true;
  propertyGrid = new PropertyGridModelTester(question);
  choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.allowRowReorder).toBeFalsy();
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
  const placeholderQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("placeholder");
  const stepQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("step");

  expect(nameQuestion.getType()).toEqual("text");
  expect(nameQuestion.getIsInputTextUpdate()).toBeFalsy();
  expect(titleQuestion.getType()).toEqual("comment");
  expect(titleQuestion.getIsInputTextUpdate()).toBeTruthy();
  expect(placeholderQuestion.getType()).toEqual("text");
  expect(placeholderQuestion.getIsInputTextUpdate()).toBeTruthy();
  expect(stepQuestion.getType()).toEqual("text");
  expect(stepQuestion.getIsInputTextUpdate()).toBeFalsy();
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
  Serializer.removeProperty("question", "nameLink");
});
test("Use validation in custom property editor", (): any => {
  Serializer.addProperty("survey", { name: "sentTo", type: "email" });
  const propEditor: IPropertyGridEditor = {
    fit: function (prop) {
      return prop.type === "email";
    },
    getJSON: function (obj, prop, options) {
      return { type: "text", textUpdateMode: "onBlur" };
    },
    validateValue: function (obj, question, prop, value: any): string {
      if (!value) return "";
      const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
      return !valid ? "Incorrect email" : "";
    }
  };
  PropertyGridEditorCollection.register(propEditor);
  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const emailQuestion = propertyGrid.survey.getQuestionByName("sentTo");
  expect(emailQuestion.errors).toHaveLength(0);
  emailQuestion.value = "incorrect@";
  expect(emailQuestion.errors).toHaveLength(1);
  expect(emailQuestion.errors[0].text).toEqual("Incorrect email");
  emailQuestion.value = "abc@abc.com";
  expect(emailQuestion.errors).toHaveLength(0);
  Serializer.removeProperty("email", "sentTo");
});
test("autoComplate property", () => {
  const question = new QuestionTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const autoCompleteQuestion = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("autocomplete");
  expect(autoCompleteQuestion.choices).toBeTruthy();
  expect(Array.isArray(autoCompleteQuestion.choices)).toBeTruthy();
  expect(autoCompleteQuestion.choices.length > 10).toBeTruthy();
});
test("property editor title description html", () => {
  var survey = new SurveyModel();
  var curStrings = editorLocalization.getLocale("");
  curStrings.pehelp.title = "Common **Title**";
  var propertyGrid = new PropertyGridModelTester(survey);
  var titleQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("title")
  );
  expect(titleQuestion.locDescription.html).toEqual("Common <span class='spg-bold'>Title</span>");
});
test("Image picker question imageHeight placeholder", () => {
  const question = new QuestionImagePickerModel("q1");
  let propertyGrid = new PropertyGridModelTester(question);
  let imageHeightQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("imageHeight")
  );
  expect(imageHeightQuestion.placeholder).toEqual("auto");
  var curStrings = editorLocalization.getLocale("");
  curStrings.pe.imageHeight_placeholder = "Auto 2";
  propertyGrid = new PropertyGridModelTester(question);
  imageHeightQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("imageHeight")
  );
  expect(imageHeightQuestion.placeholder).toEqual("Auto 2");
  curStrings.pe.imageHeight_placeholder = "auto";
});
test("Add tab after general for survey object", () => {
  Serializer.addProperty("survey", { name: "region", category: "geoLocation", categoryIndex: 10 });
  const survey = new SurveyModel();
  let propertyGrid = new PropertyGridModelTester(survey);
  expect(propertyGrid.survey.getAllPanels()[1].name).toEqual("geoLocation");
  Serializer.removeProperty("survey", "region");
});
test("itemvalue[] property editor + row actions + invisible detail elements", () => {
  const question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  const options = new EmptySurveyCreatorOptions();
  const propertyGrid = new PropertyGridModelTester(question, options);
  const choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  const actions1 = choicesQuestion.renderedTable.rowsActions[0];
  expect(actions1).toHaveLength(2);

  const oldDefinition = SurveyQuestionEditorDefinition.definition["itemvalue[]@choices"].tabs;
  SurveyQuestionEditorDefinition.definition["itemvalue[]@choices"].tabs = [
    { name: "general", visible: false }
  ];
  const propertyGrid2 = new PropertyGridModelTester(question, options);
  const choicesQuestion2 = <QuestionMatrixDynamicModel>(
    propertyGrid2.survey.getQuestionByName("choices")
  );
  const actions2 = choicesQuestion2.renderedTable.rowsActions[0];
  expect(actions2).toHaveLength(1);
  SurveyQuestionEditorDefinition.definition["itemvalue[]@choices"].tabs = oldDefinition;
});
test("choices and onCollectionItemDeleting", () => {
  const question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3];
  const options = new EmptySurveyCreatorOptions();
  options.onCollectionItemDeletingCallback = (obj: Base, property: JsonObjectProperty, collection: any, item: Base): boolean => {
    return collection.indexOf(item) % 2 === 1;
  };
  const propertyGrid = new PropertyGridModelTester(question, options);
  const choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  const rows = choicesQuestion.visibleRows;
  expect(choicesQuestion.canRemoveRow(rows[0])).toBeTruthy();
  expect(choicesQuestion.canRemoveRow(rows[1])).toBeTruthy();
  expect(choicesQuestion.canRemoveRow(rows[2])).toBeTruthy();
  choicesQuestion.removeRowUI(rows[0]);
  expect(question.choices).toHaveLength(3);
  choicesQuestion.removeRowUI(rows[1]);
  expect(question.choices).toHaveLength(2);
});
test("PropertyGridEditorQuestionValue without nonvalue questions", () => {
  const survey = new SurveyModel({
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "aNumber"
          },
          {
            "type": "html",
            "name": "question1",
            "html": "<div>Hello World</div>"
          },
          {
            "type": "image",
            "name": "question2",
            "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
          }
        ]
      }
    ],
    "triggers": [
      {
        "type": "setvalue",
        "expression": "expression: \"{aNumber} <> 100\",",
        "setToName": "aNumber"
      }
    ]
  });
  const propertyGrid = new PropertyGridModelTester(survey);
  const triggersQuestion = <QuestionMatrixDynamicModel>(propertyGrid.survey.getQuestionByName("triggers"));
  expect(triggersQuestion).toBeTruthy();
  expect(triggersQuestion.useCaseSensitiveComparison).toEqual(false);
  expect(triggersQuestion.visibleRows).toHaveLength(1);
  triggersQuestion.visibleRows[0].showDetailPanel();
  const setToValue = triggersQuestion.visibleRows[0].detailPanel.getQuestionByName("setToName");
  expect(setToValue).toBeTruthy();
  expect(setToValue.getType()).toEqual("dropdown");
  expect(setToValue.choices).toHaveLength(1);
  expect(setToValue.value).toEqual("aNumber");
});
test("cellType equals 'file'", (): any => {
  const question = new QuestionMatrixDynamicModel("q1");
  const column = question.addColumn("col1");
  column.cellType = "file";
  const propertyGrid = new PropertyGridModelTester(column);
  const cellTypePropEditor = <QuestionDropdownModel>propertyGrid.survey.getQuestionByName("cellType");
  expect(cellTypePropEditor.value).toEqual("file");
});
test("rating smileys - icon column", () => {
  var question = new QuestionRatingModel("q1");
  question.autoGenerate = false;
  question.rateCount = 2;
  question.rateDisplayMode = "smileys";
  var propertyGrid = new PropertyGridModelTester(question);
  var rateValuesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("rateValues")
  );
  expect(rateValuesQuestion).toBeTruthy();

  expect(rateValuesQuestion.visibleRows[0].cells[0].question.html).toContain("#icon-smiley-rate4-24x24");
  expect(rateValuesQuestion.visibleRows[1].cells[0].question.html).toContain("#icon-smiley-rate8-24x24");

  question.rateCount = 3;
  expect(rateValuesQuestion.visibleRows[0].cells[0].question.html).toContain("#icon-smiley-rate4-24x24");
  expect(rateValuesQuestion.visibleRows[2].cells[0].question.html).toContain("#icon-smiley-rate8-24x24");
});
test("Check rateValues position in tab", () => {
  var question = new QuestionRatingModel("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  var panel = <PanelModel>propertyGrid.survey.getPanelByName("rateValues");
  var rateValuesQuestion = propertyGrid.survey.getQuestionByName("rateValues");
  expect(panel).toBeTruthy();
  expect(panel.questions.indexOf(rateValuesQuestion)).toBeGreaterThan(0);
});
test("test rateValues allow add, allow remove", () => {
  const question = new QuestionRatingModel("q1");
  question.rateCount = 2;
  const propertyGrid = new PropertyGridModelTester(question);
  const rateValuesQuestion = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("rateValues");
  //expect(rateValuesQuestion.titleActions.filter(a => a.id == "property-grid-clear")[0].visible).toBeFalsy();

  expect(rateValuesQuestion.allowRemoveRows).toBeFalsy();
  expect(rateValuesQuestion.allowAddRows).toBeTruthy();

  question.rateCount = 20;
  expect(rateValuesQuestion.allowRemoveRows).toBeTruthy();
  expect(rateValuesQuestion.allowAddRows).toBeFalsy();

});
test("itemvalue[] property editor & placeholder, bug#4032", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices = ["Item 1", "Item 2", "Item 3"];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  const row = choicesQuestion.visibleRows[2];
  const qValue = <QuestionTextModel>row.cells[0].question;
  const qText = <QuestionTextModel>row.cells[1].question;
  expect(qText.placeholder).toBe("Item 3");
  qText.value = "Item Three";
  qValue.value = "Item D";
  qText.clearValue();
  expect(qText.placeholder).toBe("Item D");
});

test("Check allowRootStyle is set false for all questions inside property grids", () => {
  var question = new QuestionCheckboxModel("q1");
  question.choices = ["Item 1", "Item 2", "Item 3"];
  var propertyGrid = new PropertyGridModelTester(question);
  var choicesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(choicesQuestion.allowRootStyle).toBeFalsy();
  const row = choicesQuestion.visibleRows[2];
  row.showHideDetailPanelClick();
  expect(row.detailPanel.questions.filter(q => q.allowRootStyle).length).toBe(0);
});
test("PropertyEditor and hasError - required for survey.title", () => {
  const survey = new SurveyModel();
  survey.title = "My Title";
  let propertyGrid = new PropertyGridModelTester(survey);
  let titleQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("title");
  expect(titleQuestion.getIsInputTextUpdate()).toBeTruthy();
  const prop = Serializer.findProperty("survey", "title");
  prop.isRequired = true;
  propertyGrid = new PropertyGridModelTester(survey);
  titleQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("title");
  expect(titleQuestion.getIsInputTextUpdate()).toBeFalsy();
  expect(titleQuestion.textUpdateMode).toBe("onBlur");
  titleQuestion.value = "";
  expect(survey.title).toEqual("My Title");
  expect(titleQuestion.errors).toHaveLength(1);
  expect(titleQuestion.errors[0].text).toEqual("Please enter a value");
  expect(titleQuestion.value).toBeFalsy();
  titleQuestion.value = "title1";
  expect(survey.title).toEqual("title1");
  expect(titleQuestion.errors).toHaveLength(0);
  prop.isRequired = false;
});
test("PropertyEditor for question name", () => {
  const question = new QuestionTextModel("q");
  let propertyGrid = new PropertyGridModelTester(question);
  let nameQuestion = propertyGrid.survey.getQuestionByName("name");
  const checkedData = ["Row", "panel", "choice", "Item"];
  const errorText = "Do not use reserved words: \"item\", \"choice\", \"panel\", \"row\".";
  let prevName = question.name;
  for (let i = 0; i < checkedData.length; i++) {
    const erroredName = checkedData[i];
    const validName = "q" + (i + 1).toString();
    nameQuestion.value = erroredName;
    expect(nameQuestion.value).toBe(erroredName);
    expect(question.name).toEqual(prevName);
    expect(nameQuestion.errors).toHaveLength(1);
    expect(nameQuestion.errors[0].text).toEqual(errorText);
    nameQuestion.value = validName;
    expect(question.name).toEqual(validName);
    expect(nameQuestion.errors).toHaveLength(0);
    prevName = validName;
  }
  const panel = new PanelModel("p");
  propertyGrid = new PropertyGridModelTester(panel);
  nameQuestion = propertyGrid.survey.getQuestionByName("name");
  for (let i = 0; i < checkedData.length; i++) {
    const erroredName = checkedData[i];
    nameQuestion.value = erroredName;
    expect(nameQuestion.value).toBe(erroredName);
    expect(panel.name).toEqual(erroredName);
    expect(nameQuestion.errors).toHaveLength(0);
  }
});
test("Required name property for page", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" }
    ],
  });
  const options = new EmptySurveyCreatorOptions();
  const generator = new PropertyJSONGenerator(survey.pages[0], options);
  let panel = new PanelModel("panel");
  generator.setupObjPanel(panel);
  let question = panel.getQuestionByName("name");
  expect(question.isRequired).toBeTruthy();
});
test("Allow to enter one space into question title #4416", () => {
  var question = new QuestionTextModel("q1");

  const propertyGrid = new PropertyGridModelTester(question);
  const titleQuestion = <QuestionMatrixDynamicModel>(propertyGrid.survey.getQuestionByName("title"));
  expect(titleQuestion.value).toBeFalsy();
  titleQuestion.value = " ";
  expect(question.title).toBe(" ");
  expect(titleQuestion.value).toBe(" ");
  expect(question.toJSON()).toStrictEqual({ name: "q1", title: " " });
  const propertyGrid2 = new PropertyGridModelTester(question);
  const titleQuestion2 = <QuestionMatrixDynamicModel>(propertyGrid2.survey.getQuestionByName("title"));
  expect(titleQuestion2.value).toBe(" ");
});
test("Do not allow to enter undefined or '' to number type", () => {
  var question = new QuestionDropdownModel("q1");
  question.choicesMin = 1;
  question.choicesMax = 5;

  const propertyGrid = new PropertyGridModelTester(question);
  const choicesMinQuestion = <QuestionTextModel>(propertyGrid.survey.getQuestionByName("choicesMin"));
  expect(choicesMinQuestion.inputType).toBe("number");
  expect(choicesMinQuestion.value).toBe(1);
  choicesMinQuestion.value = undefined;
  expect(question.choicesMin).toBe(0);
  expect(choicesMinQuestion.value).toBe(0);
  choicesMinQuestion.value = 2;
  expect(question.choicesMin).toBe(2);
  expect(choicesMinQuestion.value).toBe(2);
  choicesMinQuestion.value = "";
  expect(question.choicesMin).toBe(0);
  expect(choicesMinQuestion.value).toBe(0);
});
test("Allow delete all pages by default", () => {
  const survey = new SurveyModel();
  survey.setDesignMode(true);
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  var propertyGrid = new PropertyGridModelTester(survey);
  var pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  survey.currentPage = survey.pages[0];
  expect(pagesQuestion.canRemoveRow(pagesQuestion.visibleRows[0])).toBeTruthy();
  expect(pagesQuestion.canRemoveRow(pagesQuestion.visibleRows[1])).toBeTruthy();
});
test("Do not select page on adding new page in the property grid #5564", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  expect(creator.survey.pages).toHaveLength(1);
  creator.selectElement(creator.survey);
  const pagesQuestion = <QuestionMatrixDynamicModel>creator.propertyGrid.getQuestionByName("pages");
  expect(pagesQuestion.visibleRows).toHaveLength(1);
  const actions = pagesQuestion.getTitleActions();
  actions[actions.length - 1].action();
  expect(creator.survey.pages).toHaveLength(2);
  expect(pagesQuestion.visibleRows).toHaveLength(2);
  expect((<any>creator.selectedElement).pages).toHaveLength(2);
});
test("Setup correct categories for dynamic properties in components", () => {
  ComponentCollection.Instance.add({
    name: "customdropdown",
    inheritBaseProps: ["allowClear", "showOtherItem"],
    questionJSON: {
      type: "dropdown",
      choices: [1, 2, 3]
    },
  });
  const survey = new SurveyModel();
  survey.setDesignMode(true);
  survey.fromJSON({
    elements: [
      { type: "customdropdown", name: "q1", allowClear: false, showOtherItem: true }
    ]
  });
  const question = survey.getQuestionByName("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  const visibleQuestion = propertyGrid.survey.getQuestionByName("visible");
  const allowClearQuestion = propertyGrid.survey.getQuestionByName("allowClear");
  const showOtherItemQuestion = propertyGrid.survey.getQuestionByName("showOtherItem");
  expect(visibleQuestion.parent.name).toBe("general");
  expect(allowClearQuestion.parent.name).toBe("choices");
  expect(showOtherItemQuestion.parent.name).toBe("choices");
  ComponentCollection.Instance.clear();
});
test("Setup correct categories for dynamic properties in components, #2", () => {
  ComponentCollection.Instance.add({
    name: "customtext",
    inheritBaseProps: ["placeholder", "inputType"],
    questionJSON: {
      type: "text"
    },
  });
  const survey = new SurveyModel();
  survey.setDesignMode(true);
  survey.fromJSON({
    elements: [
      { type: "customtext", name: "q1", placeholder: "abc" }
    ]
  });
  const question = survey.getQuestionByName("q1");
  var propertyGrid = new PropertyGridModelTester(question);
  const placeholderQuestion = propertyGrid.survey.getQuestionByName("placeholder");
  const inputTypeQuestion = propertyGrid.survey.getQuestionByName("inputType");
  expect(placeholderQuestion.parent.name).toBe("general");
  expect(placeholderQuestion.isVisible).toBeTruthy();
  expect(placeholderQuestion.title).toBe("Placeholder text within input field");
  expect(inputTypeQuestion.parent.name).toBe("general");
  const panel = propertyGrid.survey.getPanelByName("general");
  expect(panel.questions[0].name).toBe("name");
  expect(panel.questions[1].name).toBe("title");
  ComponentCollection.Instance.clear();
});
test("Check showInMultipleColumns property visibility", () => {
  const survey = new SurveyModel();
  survey.setDesignMode(true);
  survey.fromJSON({
    elements: [
      {
        "type": "matrixdynamic",
        "name": "matrix",
        "columns": [
          {
            "name": "Column1",
            "cellType": "checkbox",
            "showInMultipleColumns": true
          }
        ]
      }
    ]
  });
  const question = <QuestionMatrixDynamicModel>survey.getQuestionByName("matrix");
  var propertyGrid = new PropertyGridModelTester(question.columns[0]);
  const showInMultipleColumnsQuestion = propertyGrid.survey.getQuestionByName("showInMultipleColumns");
  expect(showInMultipleColumnsQuestion.value).toBe(true);
  expect(showInMultipleColumnsQuestion.isVisible).toBeTruthy();
});
test("allowExpandMultipleCategories", () => {
  const survey = new SurveyModel();
  survey.setDesignMode(true);
  const propertyGrid = new PropertyGridModelTester(survey);
  const propSurvey = propertyGrid.survey;
  const getOpendedCategories = (): number => {
    let res = 0;
    propSurvey.getAllPanels().forEach(panel => {
      if (panel.isExpanded) res++;
    });
    return res;
  };
  expect(getOpendedCategories()).toBe(0);
  propSurvey.getAllPanels()[0].expand();
  expect(getOpendedCategories()).toBe(1);
  propSurvey.getAllPanels()[1].expand();
  expect(getOpendedCategories()).toBe(1);
  expect(propSurvey.getAllPanels()[0].isExpanded).toBe(false);
  expect(propSurvey.getAllPanels()[1].isExpanded).toBe(true);

  settings.propertyGrid.allowExpandMultipleCategories = true;
  propSurvey.getAllPanels()[0].expand();
  expect(getOpendedCategories()).toBe(2);
  settings.propertyGrid.allowExpandMultipleCategories = false;
});
test("property with boolean type and two choices", () => {
  const columnLayoutProperty = Serializer.findProperty("matrixdropdown", "columnLayout");
  const oldVisible = columnLayoutProperty.visible;
  columnLayoutProperty.visible = true;
  columnLayoutProperty.type = "boolean";

  const matrix = new QuestionMatrixDropdownModel("q1");
  const propertyGrid = new PropertyGridModelTester(matrix);
  const columnLayoutQuestion = <QuestionBooleanModel>propertyGrid.survey.getQuestionByName("columnLayout");
  expect(columnLayoutQuestion.getType()).toBe("boolean");
  expect(columnLayoutQuestion.renderAs).toBe("checkbox");
  expect(columnLayoutQuestion.valueTrue).toBe("horizontal");
  expect(columnLayoutQuestion.valueFalse).toBe("vertical");
  expect(columnLayoutQuestion.labelTrue).toBe("Horizontal");
  expect(columnLayoutQuestion.labelFalse).toBe("Vertical");

  columnLayoutProperty.visible = oldVisible;
  columnLayoutProperty.type = "";
});
test("category, parent property", () => {
  Serializer.addProperty("question", "prop1");
  Serializer.addProperty("question", "prop2");
  Serializer.addProperty("question", "prop3");
  Serializer.addProperty("question", "prop4");
  enStrings.pe.tabs["sub1"] = "Sub Panel 1";

  const definition = SurveyQuestionEditorDefinition.definition["question"];
  const properties = definition.properties || [];
  const tabs = definition.tabs || [];
  const oldPropCount = properties.length;
  const oldTabCount = tabs.length;
  properties.push({ name: "prop1", tab: "sub1" });
  properties.push({ name: "prop2", tab: "sub2" });
  properties.push({ name: "prop3", tab: "sub1" });
  properties.push({ name: "prop4", tab: "sub2" });
  tabs.push({ name: "sub1", parent: "general" });
  tabs.push({ name: "sub2", parent: "general" });

  const question = new QuestionDropdownModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const tabsFistLevel = propertyGrid.survey.pages[0].elements.map(el => el.name);
  const tabsSecondLevel = propertyGrid.survey.pages[0].elements[0].elements.map(el => el.name);
  expect(tabsFistLevel.indexOf("sub1")).toBe(-1);
  expect(tabsFistLevel.indexOf("sub2")).toBe(-1);

  expect(tabsSecondLevel.indexOf("sub1")).toBeGreaterThan(-1);
  expect(tabsSecondLevel.indexOf("sub2")).toBeGreaterThan(-1);

  const generalPanel = propertyGrid.survey.getPanelByName("general");
  generalPanel.expand();
  generalPanel.collapse();
  generalPanel.expand();
  const sub1Panel = <PanelModel>generalPanel.getElementByName("sub1");
  const sub2Panel = <PanelModel>generalPanel.getElementByName("sub2");
  expect(sub1Panel).toBeTruthy();
  expect(sub2Panel).toBeTruthy();
  expect(sub1Panel.elements).toHaveLength(2);
  expect(sub2Panel.elements).toHaveLength(2);
  expect(sub1Panel.isVisible).toBeTruthy();
  expect(sub2Panel.isVisible).toBeTruthy();
  expect(sub1Panel.elements).toHaveLength(2);
  expect(sub2Panel.elements).toHaveLength(2);
  expect(sub1Panel.elements[0].name).toBe("prop1");
  expect(sub1Panel.elements[1].name).toBe("prop3");
  expect(sub2Panel.elements[0].name).toBe("prop2");
  expect(sub2Panel.elements[1].name).toBe("prop4");
  expect(sub1Panel.state).toBe("default");
  expect(sub2Panel.state).toBe("default");
  expect(sub1Panel.title).toBe("Sub Panel 1");
  expect(sub2Panel.title).toBeFalsy();

  delete enStrings.pe.tabs["sub1"];
  properties.splice(oldPropCount, 4);
  tabs.splice(oldTabCount, 2);
  Serializer.removeProperty("question", "prop1");
  Serializer.removeProperty("question", "prop2");
  Serializer.removeProperty("question", "prop3");
  Serializer.removeProperty("question", "prop4");
});

test("check pages editor respects onPageAdding", () => {
  const savedNewJSON = settings.defaultNewSurveyJSON;
  settings.defaultNewSurveyJSON = {};
  const creator = new CreatorTester(undefined, undefined, false);
  let allowAdd = true;
  creator.onPageAdding.add((s, o) => {
    o.allow = allowAdd;
  });
  const propertyGrid = new PropertyGridModelTester(creator.survey);
  const pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  const propertyEditor = new PropertyGridEditorMatrixPages();
  const options = { titleActions: [], question: pagesQuestion };
  propertyEditor.onGetQuestionTitleActions(creator.survey, options, creator);
  const addNewPageAction = options.titleActions[0] as IAction;

  expect(creator.survey.pages.length).toBe(0);
  addNewPageAction.action!();
  expect(creator.survey.pages.length).toBe(1);
  allowAdd = false;
  addNewPageAction.action!();
  expect(creator.survey.pages.length).toBe(1);
  settings.defaultNewSurveyJSON = savedNewJSON;
});
test("Localication and survey.pages property, Bug#6687", () => {
  const deutschStrings: any = {
    ed: {
      newPageName: "Seite"
    }
  };
  editorLocalization.locales["de"] = deutschStrings;
  const creator = new CreatorTester();
  creator.locale = "de";
  creator.JSON = {};
  const propertyGrid = new PropertyGridModelTester(creator.survey);
  const pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  const propertyEditor = new PropertyGridEditorMatrixPages();
  const options = { titleActions: [], question: pagesQuestion };
  propertyEditor.onGetQuestionTitleActions(creator.survey, options, creator);
  const addNewPageAction = options.titleActions[0] as IAction;

  expect(creator.survey.pages.length).toBe(0);
  addNewPageAction.action!();

  expect(creator.survey.pages.length).toBe(1);
  expect(creator.survey.pages[0].name).toBe("Seite1");
});
test("Localication and different locales, Bug#6717", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1", title: "Question 1", choices: [{ value: 1, text: "Item 1" }] }
    ]
  };
  const question = creator.survey.getQuestionByName("q1");
  let propertyGrid = new PropertyGridModelTester(question);
  let titleQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("title");
  expect(titleQuestion.value).toBe("Question 1");
  expect(titleQuestion.placeholder).toBe("q1");
  creator.survey.locale = "de";
  propertyGrid = new PropertyGridModelTester(question);
  titleQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("title");
  expect(titleQuestion.value).toBeFalsy();
  expect(titleQuestion.placeHolder).toBe("Question 1");
});
test("panellayoutcolumns doesn't have adding button", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    gridLayoutEnabled: true,
    elements: [{ type: "text", name: "q1" }]
  };
  const propertyGrid = new PropertyGridModelTester(creator.survey.pages[0]);
  const gridColumnsQuestion = <QuestionMatrixDynamicModel>(propertyGrid.survey.getQuestionByName("gridLayoutColumns"));
  expect(gridColumnsQuestion).toBeTruthy();
  expect(gridColumnsQuestion.allowAddRows).toBeFalsy();
  expect(gridColumnsQuestion.getTitleToolbar()).toBeTruthy();
  const helpButton = gridColumnsQuestion.titleActions.find(a => a.id === "property-grid-help");
  const addButton = gridColumnsQuestion.titleActions.find(a => a.id === "add-item");
  expect(helpButton).toBeTruthy();
  expect(addButton).toBeFalsy();
});
test("Set property name into correct category", () => {
  Serializer.addProperty("question", {
    name: "validation",
    category: "general",
  });
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  const q = creator.survey.getQuestionByName("q1");
  const propertyGrid = new PropertyGridModelTester(q);
  const validationQuestion = <QuestionMatrixDynamicModel>(propertyGrid.survey.getQuestionByName("validation"));
  expect(validationQuestion.name).toEqual("validation");
  expect(validationQuestion.parent.name).toEqual("general");
  Serializer.removeProperty("question", "validation");
});
test("Set correct property grid category", () => {
  Serializer.addProperty("question", {
    name: "validation",
    category: "cust_category",
    categoryIndex: 1
  });
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  const q = creator.survey.getQuestionByName("q1");
  const propertyGrid = new PropertyGridModelTester(q);
  const panel = propertyGrid.survey.getPanelByName("cust_category");
  expect(panel).toBeTruthy();
  expect(propertyGrid.survey.getAllPanels().indexOf(panel)).toEqual(1);
  Serializer.removeProperty("question", "validation");
});
test("column title property editor, set placeholder", (): any => {
  const panel = new PanelModel("p1");
  const propertyGrid = new PropertyGridModelTester(panel);
  const questionStartIndexPropertyEditor = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("questionStartIndex");
  expect(questionStartIndexPropertyEditor.placeholder).toEqual("Ex.: a)");
});
test("Check enableIf for nested proeprties", () => {
  const prop = Serializer.findProperty("choicesByUrl", "path");
  const oldEnableIf = prop.enableIf;
  prop.enableIf = (obj) => !!obj.url;
  const question = new QuestionDropdownModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const restFullQuestion = <QuestionCompositeModel>(
    propertyGrid.survey.getQuestionByName("choicesByUrl")
  );
  const urlQuestion = restFullQuestion.contentPanel.getQuestionByName("url");
  const pathQuestion = restFullQuestion.contentPanel.getQuestionByName("path");
  expect(pathQuestion.readOnly).toBeTruthy();
  urlQuestion.value = "abc";
  expect(pathQuestion.readOnly).toBeFalsy();
  urlQuestion.clearValue();
  expect(pathQuestion.readOnly).toBeTruthy();

  prop.enableIf = oldEnableIf;
});
test("PropertyGridEditorMaskType editor", () => {
  const question = new QuestionTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const maskTypeQuestion = propertyGrid.survey.getQuestionByName("maskType");
  expect(maskTypeQuestion.getType()).toEqual("dropdown");
  expect(maskTypeQuestion.selectedItem.value).toEqual("none");
  expect(maskTypeQuestion.selectedItem.title).toEqual("None");

  maskTypeQuestion.value = "pattern";
  expect(maskTypeQuestion.selectedItem.value).toEqual("pattern");
  expect(maskTypeQuestion.selectedItem.title).toEqual("Pattern");
});
test("PropertyGridEditorMaskType editor: choices redefinition", () => {
  const prop = Serializer.findProperty("text", "maskType");
  const oldChoicesValue = (prop as any).choicesValue;
  const oldChoicesFunc = (prop as any).choicesfunc;
  prop.setChoices(["none", "pattern", "numeric"], undefined);
  const question = new QuestionTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const maskTypeQuestion = propertyGrid.survey.getQuestionByName("maskType");
  expect(maskTypeQuestion.getType()).toEqual("buttongroup");
  expect(maskTypeQuestion.choices).toHaveLength(3);
  expect(maskTypeQuestion.choices[0].value).toBe("none");
  expect(maskTypeQuestion.choices[1].value).toBe("pattern");
  expect(maskTypeQuestion.choices[2].value).toBe("numeric");

  Serializer.findProperty("text", "maskType").setChoices(oldChoicesValue as any, oldChoicesFunc);
});
test("PropertyGridEditorMaskType editor: localize item", () => {
  const enLocale = editorLocalization.getLocale("");
  const oldMaskTypesNone = enLocale.pv.maskType.none;
  enLocale.pv.maskType.none = "Unmasked";

  const question = new QuestionTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const maskTypeQuestion = propertyGrid.survey.getQuestionByName("maskType");
  expect(maskTypeQuestion.getType()).toEqual("dropdown");
  expect(maskTypeQuestion.selectedItem.value).toEqual("none");
  expect(maskTypeQuestion.selectedItem.title).toEqual("Unmasked");

  enLocale.pv.maskType.none = oldMaskTypesNone;
});
test("PropertyGridEditorMaskType editor: localize item", () => {
  ComponentCollection.Instance.add({
    name: "CSAT",
    inheritBaseProps: true,
    questionJSON: {
      type: "rating",
      rateType: "labels"
    }
  });
  const question = Serializer.createClass("CSAT", { name: "q1" });
  expect(question.getType()).toBe("csat");
  const propertyGrid = new PropertyGridModelTester(question);
  const autoGenerateQuestion = propertyGrid.survey.getQuestionByName("autoGenerate");
  expect(autoGenerateQuestion.value).toBeTruthy();

  ComponentCollection.Instance.clear();
});
test("surveypages property editor & default value", () => {
  Serializer.addProperty("survey", { name: "name", default: "test" });
  const survey = new SurveyModel();
  survey.addNewPage("page1");
  survey.addNewPage("page2");
  const propertyGrid = new PropertyGridModelTester(survey);
  const pagesQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("pages")
  );
  const col = pagesQuestion.getColumnByName("name");
  expect(col.cellType).toEqual("text");

  Serializer.removeProperty("survey", "name");
});
test("showRefuseItem&showDontKnowItem in question&column", () => {
  const question = new QuestionRadiogroupModel("q1");
  const matrix = new QuestionMatrixDynamicModel("q2");
  const column = matrix.addColumn("col1");
  column.cellType = "dropdown";
  const prop1 = Serializer.findProperty("selectbase", "showRefuseItem");
  const prop2 = Serializer.findProperty("selectbase", "showDontKnowItem");
  expect(prop1.visible).toBeFalsy();
  let propertyGrid = new PropertyGridModelTester(question);
  expect(propertyGrid.survey.getQuestionByName("showRefuseItem")).toBeFalsy();
  prop1.visible = true;
  prop2.visible = true;
  propertyGrid = new PropertyGridModelTester(question);
  let survey = propertyGrid.survey;
  expect(survey.getQuestionByName("showRefuseItem")).toBeTruthy();
  expect(survey.getQuestionByName("showDontKnowItem")).toBeTruthy();
  expect(survey.getQuestionByName("refuseText")).toBeTruthy();
  expect(survey.getQuestionByName("dontKnowText")).toBeTruthy();

  propertyGrid = new PropertyGridModelTester(column);
  survey = propertyGrid.survey;
  expect(survey.getQuestionByName("showRefuseItem")).toBeTruthy();
  expect(survey.getQuestionByName("showDontKnowItem")).toBeTruthy();
  expect(survey.getQuestionByName("refuseText")).toBeTruthy();
  expect(survey.getQuestionByName("dontKnowText")).toBeTruthy();

  prop1.visible = false;
  prop2.visible = false;
});
test("It is impossible to clear value for numeric property, bug#5395", () => {
  const question = new QuestionImagePickerModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const imageHeightQuestion = <QuestionTextModel>propertyGrid.survey.getQuestionByName("imageHeight");
  imageHeightQuestion.value = 100;
  expect(question.imageHeight).toEqual(100);
  imageHeightQuestion.value = "";
  expect(imageHeightQuestion.value).not.toBe(0);
  expect(imageHeightQuestion.isEmpty()).toBeTruthy();
  expect(question.imageHeight).not.toBe(0);
  expect(question.imageHeight).toBeFalsy();
});
test("Image picker items doesn't support youtube, bug#5867", () => {
  const question = new QuestionImagePickerModel("q1");
  question.choices = [{ value: "item1", imageLink: "abc" }];
  const propertyGrid = new PropertyGridModelTester(question);
  const matrix = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("choices");
  expect(matrix.visibleRows).toHaveLength(1);
  const cell = matrix.visibleRows[0].cells[2].question;
  expect(cell.value).toBe("abc");
  const imgUrl = "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg";
  cell.value = imgUrl;
  expect(cell.errors).toHaveLength(0);
  expect(question.choices[0].imageLink).toBe(imgUrl);
  cell.value = "https://www.youtube.com/embed/tgbNymZ7vqY";
  expect(cell.errors).toHaveLength(1);
  expect(cell.errors[0].text).toBe("YouTube links are not supported.");
  expect(question.choices[0].imageLink).toBe(imgUrl);
});
test("Show commentText & commentPlaceholder on setting showCommentArea, bug#5527", () => {
  const question = new QuestionImagePickerModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const showCommentAreaQuestion = propertyGrid.survey.getQuestionByName("showCommentArea");
  const commentTextQuestion = propertyGrid.survey.getQuestionByName("commentText");
  const commentPlaceholderAreaQuestion = propertyGrid.survey.getQuestionByName("commentPlaceholder");
  expect(showCommentAreaQuestion).toBeTruthy();
  expect(commentTextQuestion).toBeTruthy();
  expect(commentPlaceholderAreaQuestion).toBeTruthy();
  expect(showCommentAreaQuestion.isVisible).toBeTruthy();
  expect(commentTextQuestion.isVisible).toBeFalsy();
  expect(commentPlaceholderAreaQuestion.isVisible).toBeFalsy();
  showCommentAreaQuestion.value = true;
  expect(question.showCommentArea).toBeTruthy();
  expect(showCommentAreaQuestion.isVisible).toBeTruthy();
  expect(commentTextQuestion.isVisible).toBeTruthy();
  expect(commentPlaceholderAreaQuestion.isVisible).toBeTruthy();
});
test("autoGrow & allowResize on setting comment question", () => {
  const question = new QuestionCommentModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const autoGrowQuestion = propertyGrid.survey.getQuestionByName("autoGrow");
  const allowResizeQuestion = propertyGrid.survey.getQuestionByName("allowResize");

  expect(question.autoGrow === undefined).toBeTruthy();
  expect(question.allowResize === undefined).toBeTruthy();
  expect(autoGrowQuestion.value === "auto").toBeTruthy();
  expect(allowResizeQuestion.value === "auto").toBeTruthy();

  autoGrowQuestion.value = "false";
  allowResizeQuestion.value = "false";
  expect(question.autoGrow === false).toBeTruthy();
  expect(question.allowResize === false).toBeTruthy();

  autoGrowQuestion.value = "true";
  allowResizeQuestion.value = "true";
  expect(question.autoGrow === true).toBeTruthy();
  expect(question.allowResize === true).toBeTruthy();

  question.autoGrow = false;
  question.allowResize = false;
  expect(autoGrowQuestion.value === "false").toBeTruthy();
  expect(allowResizeQuestion.value === "false").toBeTruthy();

  question.autoGrow = undefined;
  question.allowResize = undefined;
  expect(autoGrowQuestion.value === "auto").toBeTruthy();
  expect(allowResizeQuestion.value === "auto").toBeTruthy();

  question.autoGrow = true;
  question.allowResize = true;
  expect(autoGrowQuestion.value === "true").toBeTruthy();
  expect(allowResizeQuestion.value === "true").toBeTruthy();
});
test("page class doesn't have layout category", () => {
  const page = new PageModel("page");
  const propertyGrid = new PropertyGridModelTester(page);
  expect(propertyGrid.survey.getPanelByName("logic")).toBeTruthy();
  expect(propertyGrid.survey.getPanelByName("layout")).toBeFalsy();
});
test("tagbox as property & required", () => {
  Serializer.addProperty("survey", {
    name: "prop1", category: "general", default: ["item1"],
    isRequired: true, type: "multiplevalues", choices: ["item1", "item2", "item3"]
  });

  const survey = new SurveyModel();
  const propertyGrid = new PropertyGridModelTester(survey);
  const question = propertyGrid.survey.getQuestionByName("prop1");
  expect(question.value).toHaveLength(1);
  expect(question.value[0]).toBe("item1");
  expect(question.errors).toHaveLength(0);
  question.clearValue();
  expect(question.errors).toHaveLength(1);
  question.value = ["item1"];
  expect(question.errors).toHaveLength(0);

  Serializer.removeProperty("survey", "prop1");
});
test("Use undefined boolean editor, Bug#6099", () => {
  const survey = new SurveyModel({
    elements: [{ type: "comment", name: "q1" }]
  });
  const q1 = <QuestionCommentModel>survey.getQuestionByName("q1");
  const propertyGrid = new PropertyGridModelTester(q1);
  const question = propertyGrid.survey.getQuestionByName("allowResize");
  expect(q1.allowResize).toStrictEqual(undefined);
  question.value = "false";
  expect(q1.allowResize).toStrictEqual(false);
  question.value = "true";
  expect(q1.allowResize).toStrictEqual(true);
  question.value = "auto";
  expect(q1.allowResize).toStrictEqual(null);
});
test("Depends on & defaultFunc, Bug#6143", () => {
  Serializer.addProperty("question", { name: "secondName", dependsOn: ["name"], defaultFunc: (obj: any) => { return (obj?.name || "") + "_second"; } });
  const survey = new SurveyModel({
    elements: [{ type: "text", name: "q1" }]
  });
  const q1 = survey.getQuestionByName("q1");
  const propertyGrid = new PropertyGridModelTester(q1);
  const questionName = propertyGrid.survey.getQuestionByName("name");
  const questionSecondName = propertyGrid.survey.getQuestionByName("secondName");

  expect(questionSecondName.value).toBe("q1_second");
  questionName.value = "q2";
  expect(q1.secondName).toBe("q2_second");
  expect(questionSecondName.value).toBe("q2_second");

  q1.secondName = "test";
  questionName.value = "q3";
  expect(questionSecondName.value).toBe("test");

  q1.resetPropertyValue("secondName");
  expect(q1.secondName).toBe("q3_second");
  expect(questionSecondName.value).toBe("q3_second");

  Serializer.removeProperty("question", "secondName");
});
test("Undo for deleting validator in text, Bug#6295", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1", validators: [{ type: "expression" }] }]
  };
  const q1 = creator.survey.getQuestionByName("q1");
  expect(q1.validators).toHaveLength(1);
  creator.selectQuestionByName("q1");
  const propGridSurvey = creator.propertyGrid;
  const matrix = propGridSurvey.getQuestionByName("validators");
  expect(matrix).toBeTruthy();
  matrix.focus();
  expect(matrix.visibleRows).toHaveLength(1);
  matrix.removeRow(0);
  expect(matrix.visibleRows).toHaveLength(0);
  expect(q1.validators).toHaveLength(0);
  creator.undo();
  expect(q1.validators).toHaveLength(1);
  expect(matrix.visibleRows).toHaveLength(1);
});
test("Undo for deleting validator in multiple text item, Bug#6295", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "multipletext", name: "q1", items: [{ name: "item1", validators: [{ type: "expression" }] }] }]
  };
  const q1 = creator.survey.getQuestionByName("q1");
  const item1: Question = q1.items[0];
  expect(item1.validators).toHaveLength(1);
  creator.selectElement(item1);
  const propGridSurvey = creator.propertyGrid;
  const matrix = propGridSurvey.getQuestionByName("validators");
  expect(matrix).toBeTruthy();
  matrix.focus();
  expect(matrix.visibleRows).toHaveLength(1);
  matrix.removeRow(0);
  expect(matrix.visibleRows).toHaveLength(0);
  expect(item1.validators).toHaveLength(0);
  creator.undo();
  expect(item1.validators).toHaveLength(1);
  expect(matrix.visibleRows).toHaveLength(1);
});
test("Pages Collection Editor - The Trash Bin (Remove) button is unavailable when you use the Add Page button Bug#6645", () => {
  const creator = new CreatorTester();
  const propertyGrid = new PropertyGridModelTester(creator.survey, creator);
  const pagesQuestion = <QuestionMatrixDynamicModel>propertyGrid.survey.getQuestionByName("pages");
  expect(pagesQuestion.visibleRows).toHaveLength(0);
  const action = pagesQuestion.getTitleActions().filter(action => action.id === "add-item")[0];
  expect(action).toBeTruthy();
  action.action();
  action.action();
  expect(pagesQuestion.visibleRows).toHaveLength(2);

  const rows = pagesQuestion.renderedTable.rows;
  expect(rows[0].isErrorsRow).toBeFalsy();
  expect(rows[0].hasEndActions).toBeTruthy();
  let cell = rows[0].cells[rows[0].cells.length - 1];
  expect(cell.isActionsCell).toBeTruthy();
  let container = <ActionContainer>cell.item.value;
  expect(container.getActionById("remove-row")).toBeTruthy();
  expect(rows[2].isErrorsRow).toBeFalsy();
  expect(rows[2].hasEndActions).toBeTruthy();
  cell = rows[2].cells[rows[2].cells.length - 1];
  expect(cell.isActionsCell).toBeTruthy();
  container = <ActionContainer>cell.item.value;
  expect(container.getActionById("remove-row")).toBeTruthy();
});
