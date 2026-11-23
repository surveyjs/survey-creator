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
import { setEditorLocaleStrings } from "../editor-locale-stub";
import { setupLocale } from "../../src/editorLocalization";
import { UIPreset } from "../../src/ui-presets-creator/presets";
import { Advanced } from "../../src/ui-presets";

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
  expect(testQuestion.placeholder).toEqual("Empty value");

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
  expect(actions[0].getTooltip()).toEqual("Show description");
  expect(defaultValueExpressionQuestion.descriptionLocation).toEqual("hidden");
  actions[0].action();
  expect(defaultValueExpressionQuestion.descriptionLocation).toEqual(
    "underTitle"
  );
  expect(actions[0].iconName).toEqual("icon-description-hide");
  expect(actions[0].getTooltip()).toEqual("Hide description");
  actions[0].action();
  expect(defaultValueExpressionQuestion.descriptionLocation).toEqual("hidden");
  expect(actions[0].iconName).toEqual("icon-description");
  expect(actions[0].getTooltip()).toEqual("Show description");
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
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" }
    ]
  };
  creator.onPropertyGridShowPopup.add((_, options) => {
    const conditionEditor = <ConditionEditor>options.popupEditor;
    expect(conditionEditor).toBeTruthy();
    expect(conditionEditor.survey).toEqual(survey);
    expect(conditionEditor.object).toEqual(survey.triggers[0]);
    conditionEditor.text = "{q1} = 1";
    conditionEditor.apply();
    expect(survey.triggers[0].expression).toEqual("{q1} = 1");
  });
  const survey = creator.survey;
  survey.triggers.push(new SurveyTriggerRunExpression());
  const triggersQuestion = <QuestionMatrixDynamicModel>(creator.propertyGrid.getQuestionByName("triggers"));
  expect(triggersQuestion).toBeTruthy(); //visibleIf is here
  expect(triggersQuestion.visibleRows).toHaveLength(1);
  triggersQuestion.visibleRows[0].showDetailPanel();
  const expressionQuestion = triggersQuestion.visibleRows[0].detailPanel.getQuestionByName("expression");
  expect(expressionQuestion.isVisible).toBeTruthy();
  const actions = expressionQuestion.getTitleActions();
  const setupAction = findSetupAction(actions);
  expect(setupAction).toBeTruthy();
  setupAction.action();
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
  expect(propEditorQuestion.noRowsText).toEqual("No triggers");
  expect(propEditorQuestion.addRowText).toEqual("Add trigger");

  propertyGrid = new PropertyGridModelTester(survey.getQuestionByName("q1"));
  propEditorQuestion = <QuestionMatrixDynamicModel>(
    propertyGrid.survey.getQuestionByName("choices")
  );
  expect(propEditorQuestion.hideColumnsIfEmpty).toBeTruthy();
  expect(propEditorQuestion.renderedTable.showTable).toBeFalsy();
  expect(propEditorQuestion.noRowsText).toEqual("No choices");
  expect(propEditorQuestion.addRowText).toEqual("Add choice");
});
test("Espace new line and tabs, Bug#6818", () => {
  PropertyGridEditorCollection.register(new PropertyGridEditorExpression());
  const survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" }
    ]
  });
  const q1 = survey.getQuestionByName("q1");
  const propertyGrid = new PropertyGridModelTester(q1);
  let propEditor = <QuestionMatrixDynamicModel>(propertyGrid.survey.getQuestionByName("setValueExpression"));
  q1.setValueExpression = "{q2} + '\n' + {q4}";
  expect(propEditor.value).toEqual("{q2} + '\\n' + {q4}");
  propEditor.value = "{q2} + '\\n' + {q3} + '\\t' + {q4}";
  expect(q1.setValueExpression).toEqual("{q2} + '\n' + {q3} + '\t' + {q4}");
});
test("Do not modify expression value on showing it, Bug#6860", () => {
  const question = new QuestionTextModel("q1");
  question.resetValueIf = "{a} = 1\nand\n{b} =2";
  const propertyGrid = new PropertyGridModelTester(question);
  const propEditor = propertyGrid.survey.getQuestionByName("resetValueIf");
  expect(propEditor.value).toEqual("{a} = 1\nand\n{b} =2");
  propEditor.value = "{a}=3\nor\n{c}<4";
  expect(question.resetValueIf).toEqual("{a}=3\nor\n{c}<4");
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
test("Show baseselect logic properties after question logic properties, Bug#6936", () => {
  const survey = new SurveyModel({
    elements: [
      { type: "dropdown", name: "q1", choices: [1, 2, 3, 4, 5] }
    ]
  });
  const q1 = <QuestionDropdownModel>survey.getQuestionByName("q1");
  const propertyGrid = new PropertyGridModelTester(q1);
  const panel = <PanelModel>propertyGrid.survey.getPanelByName("logic");
  const getIndex = (name: string): number => {
    const question = panel.getQuestionByName(name);
    return panel.questions.indexOf(question);
  };
  const questionCount = panel.questions.length;
  expect(getIndex("hideIfChoicesEmpty")).toBe(questionCount - 3);
  expect(getIndex("choicesVisibleIf")).toBe(questionCount - 2);
  expect(getIndex("choicesEnableIf")).toBe(questionCount - 1);
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
test("Has no narrow style after invisible question", () => {
  const defaultValueProperty = Serializer.findProperty("text", "defaultValue");
  const oldVisible = defaultValueProperty.visible;
  defaultValueProperty.visible = false;
  const question = new QuestionTextModel("q1");
  const propertyGrid = new PropertyGridModelTester(question);
  const correctAnswerQuestion = <QuestionCommentModel>propertyGrid.survey.getQuestionByName("correctAnswer");
  expect(correctAnswerQuestion.cssRoot.indexOf("spg-row-narrow__question") > -1).toBeFalsy();
  defaultValueProperty.visible = oldVisible;
});
test("Narrow style updates when a visibleIf property between booleans changes visibility", () => {
  Serializer.addProperty("question", {
    name: "gapText",
    visibleIf: (obj: any) => obj.inputType === "color"
  });
  try {
    const question = new QuestionTextModel("q1");
    const propertyGrid = new PropertyGridModelTester(question, undefined, {
      generateOtherTab: false,
      classes: {
        question: {
          properties: ["isRequired", "gapText", "readOnly"]
        }
      }
    });
    const gapText = propertyGrid.survey.getQuestionByName("gapText");
    const readOnlyQuestion = propertyGrid.survey.getQuestionByName("readOnly");
    expect(gapText.isVisible).toBeFalsy();
    expect(readOnlyQuestion.cssRoot.indexOf("spg-row-narrow__question") > -1).toBeTruthy();
    question.inputType = "color";
    expect(gapText.isVisible).toBeTruthy();
    expect(readOnlyQuestion.cssRoot.indexOf("spg-row-narrow__question") > -1).toBeFalsy();
    question.inputType = "text";
    expect(gapText.isVisible).toBeFalsy();
    expect(readOnlyQuestion.cssRoot.indexOf("spg-row-narrow__question") > -1).toBeTruthy();
  } finally {
    Serializer.removeProperty("question", "gapText");
  }
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
  expect(q.getTitleActions()).toHaveLength(0);
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
  try {
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
  } finally {
    Serializer.removeProperty("survey", "sentTo");
  }
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
test("File question photoPlaceholder placeholder is taken from the survey locale and doesn't depend on the creator locale, Bug#7867", () => {
  const defaultEnText = "Click the button below to take a photo using the camera.";
  surveyLocalization.locales["de"] = <any>{ photoPlaceholder: "de-photoPlaceholder" };
  const survey = new SurveyModel({
    elements: [{ type: "file", name: "q1", sourceType: "camera" }]
  });
  const question = <QuestionFileModel>survey.getQuestionByName("q1");
  const getEditor = (): QuestionCommentModel => {
    const propertyGrid = new PropertyGridModelTester(question);
    return <QuestionCommentModel>propertyGrid.survey.getQuestionByName("photoPlaceholder");
  };
  expect(getEditor().renderedPlaceholder).toEqual(defaultEnText);

  const editor = getEditor();
  survey.locale = "de";
  expect(editor.renderedPlaceholder).toEqual("de-photoPlaceholder");
  expect(getEditor().renderedPlaceholder).toEqual("de-photoPlaceholder");

  editorLocalization.currentLocale = "de";
  expect(getEditor().renderedPlaceholder).toEqual("de-photoPlaceholder");
  survey.locale = "";
  expect(getEditor().renderedPlaceholder).toEqual(defaultEnText);
  editorLocalization.currentLocale = "";

  question.photoPlaceholder = "Take a photo!";
  survey.locale = "de";
  expect(getEditor().renderedPlaceholder).toEqual("Take a photo!");

  survey.locale = "";
  delete surveyLocalization.locales["de"];
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
  expect(actions1).toHaveLength(3);

  const oldDefinition = SurveyQuestionEditorDefinition.definition["choiceitem[]@choices"].tabs;
  SurveyQuestionEditorDefinition.definition["choiceitem[]@choices"].tabs = [
    { name: "general", visible: false }
  ];
  const propertyGrid2 = new PropertyGridModelTester(question, options);
  const choicesQuestion2 = <QuestionMatrixDynamicModel>(
    propertyGrid2.survey.getQuestionByName("choices")
  );
  const actions2 = choicesQuestion2.renderedTable.rowsActions[0];
  expect(actions2).toHaveLength(2);
  SurveyQuestionEditorDefinition.definition["choiceitem[]@choices"].tabs = oldDefinition;
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
  expect(allowClearQuestion.parent.name).toBe("general");
  expect(showOtherItemQuestion.parent.name).toBe("choices");
  ComponentCollection.Instance.clear();
});
test("allowClear is in the General tab after showTitle for select-based questions", () => {
  ["radiogroup", "dropdown", "tagbox", "checkbox"].forEach(type => {
    const question = Serializer.createClass(type, { name: "q1" });
    const propertyGrid = new PropertyGridModelTester(question);
    const allowClearQuestion = propertyGrid.survey.getQuestionByName("allowClear");
    expect(allowClearQuestion, type + ": allowClear is shown").toBeTruthy();
    expect(allowClearQuestion.parent.name, type + ": tab").toBe("general");
    const names = allowClearQuestion.parent.elements.map(el => el.name);
    expect(names.indexOf("allowClear"), type + ": after showTitle").toBe(names.indexOf("showTitle") + 1);
    const choicesPanel = propertyGrid.survey.getPanelByName("choices");
    expect(choicesPanel.getQuestionByName("allowClear"), type + ": not in choices").toBeFalsy();
  });
});
test("allowClear in the advanced preset: General after showTitle, including slider", () => {
  const creator = new CreatorTester();
  new UIPreset(Advanced as any).apply(creator);
  creator.JSON = { elements: [{ type: "dropdown", name: "q1" }, { type: "slider", name: "q2" }] };
  ["q1", "q2"].forEach(name => {
    creator.selectElement(creator.survey.getQuestionByName(name));
    const allowClearQuestion = creator.propertyGrid.getQuestionByName("allowClear");
    expect(allowClearQuestion, name + ": allowClear is shown").toBeTruthy();
    expect(allowClearQuestion.parent.name, name + ": tab").toBe("general");
    const names = allowClearQuestion.parent.elements.map(el => el.name);
    expect(names.indexOf("allowClear"), name + ": after showTitle").toBe(names.indexOf("showTitle") + 1);
  });
});
test("allowClear stays the last property in the Choices tab for dropdown and tagbox matrix columns", () => {
  ["dropdown", "tagbox"].forEach(cellType => {
    const matrix = new QuestionMatrixDynamicModel("m1");
    const column = matrix.addColumn("c1");
    column.cellType = cellType;
    const propertyGrid = new PropertyGridModelTester(column);
    const allowClearQuestion = propertyGrid.survey.getQuestionByName("allowClear");
    expect(allowClearQuestion, cellType + ": allowClear is shown").toBeTruthy();
    expect(allowClearQuestion.parent.name, cellType + ": tab").toBe("choices");
    const elements = allowClearQuestion.parent.elements;
    expect(elements[elements.length - 1].name, cellType + ": last in choices").toBe("allowClear");
  });
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
  expect(columnLayoutQuestion.displayMode).toBe("checkbox");
  expect(columnLayoutQuestion.renderAs).toBe("default");
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
  const options = { actions: [], question: pagesQuestion };
  propertyEditor.onGetQuestionTitleActions(creator.survey, options, creator);
  const addNewPageAction = options.actions[0] as IAction;

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
  const restoreDe = setEditorLocaleStrings("de", deutschStrings);
  try {
    const creator = new CreatorTester();
    creator.locale = "de";
    creator.JSON = {};
    const propertyGrid = new PropertyGridModelTester(creator.survey);
    const pagesQuestion = <QuestionMatrixDynamicModel>(
      propertyGrid.survey.getQuestionByName("pages")
    );
    const propertyEditor = new PropertyGridEditorMatrixPages();
    const options = { actions: [], question: pagesQuestion };
    propertyEditor.onGetQuestionTitleActions(creator.survey, options, creator);
    const addNewPageAction = options.actions[0] as IAction;

    expect(creator.survey.pages.length).toBe(0);
    addNewPageAction.action!();

    expect(creator.survey.pages.length).toBe(1);
    expect(creator.survey.pages[0].name).toBe("Seite1");
  } finally {
    restoreDe();
  }
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
test("If a property becomes in different categories for different question types it can lead to errors, Bug#6997", () => {
  Serializer.addProperty("matrix", { name: "isRequired:boolean", category: "validation" });
  expect(Serializer.findProperty("question", "isRequired").category).toBeFalsy();

  const survey = new SurveyModel({
    elements: [
      { type: "matrix", name: "q1" },
      { type: "text", name: "q2" }
    ]
  });
  const q1 = survey.getQuestionByName("q1");
  const q2 = survey.getQuestionByName("q2");
  let propertyGrid = new PropertyGridModelTester(q1);
  let requiredQ = propertyGrid.survey.getQuestionByName("isRequired");
  expect(requiredQ).toBeTruthy();
  expect(requiredQ.parent.name).toBe("validation");
  propertyGrid = new PropertyGridModelTester(q2);
  requiredQ = propertyGrid.survey.getQuestionByName("isRequired");
  expect(requiredQ).toBeTruthy();
  expect(requiredQ.parent.name).toBe("general");

  Serializer.removeProperty("matrix", "isRequired");
});
test("Unique question name property & whitespace, Bug#7022", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }]
  };
  const q2 = creator.survey.getQuestionByName("q2");
  const propertyGrid = new PropertyGridModelTester(q2, creator);
  const questionName = propertyGrid.survey.getQuestionByName("name");
  expect(questionName.value).toBe("q2");
  questionName.value = "q1";
  expect(questionName.errors).toHaveLength(1);
  expect(q2.name).toBe("q2");
  questionName.value = "q1 ";
  expect(questionName.errors).toHaveLength(1);
  expect(q2.name).toBe("q2");
});
test("Unique page name property & whitespace, Bug#7022", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [{ name: "page1" }, { name: "page2" }]
  };
  const page2 = creator.survey.getPageByName("page2");
  const propertyGrid = new PropertyGridModelTester(page2, creator);
  const questionName = propertyGrid.survey.getQuestionByName("name");
  expect(questionName.value).toBe("page2");
  questionName.value = "page1";
  expect(questionName.errors).toHaveLength(1);
  expect(page2.name).toBe("page2");
  questionName.value = "page1 ";
  expect(questionName.errors).toHaveLength(1);
  expect(page2.name).toBe("page2");
});
test("Single matrix cellType property editor", () => {
  const survey = new SurveyModel({
    elements: [{ type: "matrix", name: "q1" }]
  });
  const q1 = survey.getQuestionByName("q1");
  const propertyGrid = new PropertyGridModelTester(q1);
  const questionCellType = propertyGrid.survey.getQuestionByName("cellType");
  expect(questionCellType.getType()).toBe("buttongroup");
  expect(questionCellType.choices).toHaveLength(2);
  expect(questionCellType.choices[0].value).toBe("radio");
  expect(questionCellType.choices[1].value).toBe("checkbox");
  expect(questionCellType.choices[0].text).toBe("Radio buttons");
  expect(questionCellType.choices[1].text).toBe("Checkboxes");
});
test("The progressBarLocation property values appear unlocalized when applying a custom locale, Bug#7110", () => {
  const localeStringsEn = {
    pe: {
      questionOrder: "Form field order",
      questionTitleLocation: "Field title location",
    },
  };
  setupLocale({ localeCode: "customlocale", strings: localeStringsEn });

  const creator = new CreatorTester();
  creator.locale = "customlocale";
  const propertyGrid = new PropertyGridModelTester(creator.survey, creator);
  const questionOrder = propertyGrid.survey.getQuestionByName("questionOrder");
  expect(questionOrder.title).toBe("Form field order");
  const progressBarLocation = propertyGrid.survey.getQuestionByName("progressBarLocation");
  expect(progressBarLocation.choices[0].text).toBe("Auto");
  expect(progressBarLocation.choices[1].text).toBe("Above the header");

  creator.locale = "en";
});
test("The property is not translated for the custom question, Bug#7118", () => {
  ComponentCollection.Instance.add({
    name: "customsignature",
    inheritBaseProps: true,
    questionJSON: {
      type: "signaturepad"
    },
  });

  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "customsignature", name: "q1" }] };
  const question = creator.survey.getQuestionByName("q1");
  const propertyGrid = new PropertyGridModelTester(question, creator);
  const questionShowPlaceHolder = propertyGrid.survey.getQuestionByName("showPlaceholder");
  expect(questionShowPlaceHolder.title).toBe("Show a placeholder within signature area");

  ComponentCollection.Instance.clear();
});
test("The property is not translated for the custom question, Bug#7202", () => {
  Serializer.addProperty("question", { name: "testProp", category: "myTestCategory", readOnly: true });
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }] };
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  const propertyGrid = creator.sidebar.getPageById("propertyGrid").componentData.propertyGridModel as PropertyGridModel;
  propertyGrid.selectProperty("testProp", true);
  expect(propertyGrid.survey.currentPage.title).toBe("myTestCategory");

  Serializer.removeProperty("question", "testProp");
});
test("selectProperty focuses an editor of a new grid survey after the renderers update the page", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] };
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  // Installed after the selection: the creator's own focus timers stay real
  vi.useFakeTimers();
  try {
    const propertyGrid = creator.sidebar.getPageById("propertyGrid").componentData.propertyGridModel as PropertyGridModel;
    const log: Array<string> = [];
    propertyGrid.survey.getAllQuestions().forEach(q => q.focus = () => { log.push(q.name); });

    // The page still shows the grid of the previously selected object
    propertyGrid.selectProperty("title", true);
    expect(log).toEqual([]);
    // A later call replaces the waiting focus
    propertyGrid.selectProperty("description", true);
    expect(log).toEqual([]);
    vi.runOnlyPendingTimers();
    expect(log).toEqual(["description"]);

    // The same grid survey focuses an editor at once
    propertyGrid.selectProperty("title", true);
    expect(log).toEqual(["description", "title"]);
  } finally {
    vi.useRealTimers();
  }
});
test("A focus waiting for a replaced grid survey does not let the next grid survey focus at once", () => {
  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] };
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  vi.useFakeTimers();
  try {
    const propertyGrid = creator.sidebar.getPageById("propertyGrid").componentData.propertyGridModel as PropertyGridModel;
    propertyGrid.selectProperty("title", true);
    // Another object is selected before the waiting focus runs: its grid survey replaces the first one
    creator.selectElement(creator.survey.getQuestionByName("q2"));
    const log: Array<string> = [];
    propertyGrid.survey.getAllQuestions().forEach(q => q.focus = () => { log.push(q.name); });
    vi.runOnlyPendingTimers();

    // The page may still show the replaced grid: the first focus in the new grid survey waits as well
    propertyGrid.selectProperty("description", true);
    expect(log).toEqual([]);
    vi.runOnlyPendingTimers();
    expect(log).toEqual(["description"]);
  } finally {
    vi.clearAllTimers();
    vi.useRealTimers();
  }
});
test("Choices as function & async function, Bug#7207", () => {
  Serializer.addProperty("dropdown", {
    name: "func",
    choices: (obj: any, choicesCallback: any) => {
      choicesCallback([1, 2, 3]);
    },
  });

  Serializer.addProperty("dropdown", {
    name: "asyncFunc",
    choices: async (obj: any, choicesCallback: any) => {
      choicesCallback([1, 2, 3]);
    }
  });

  const creator = new CreatorTester();
  creator.JSON = { elements: [{ type: "dropdown", name: "q1" }] };
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  const propertyGrid = creator.sidebar.getPageById("propertyGrid").componentData.propertyGridModel as PropertyGridModel;
  expect(propertyGrid.survey.getQuestionByName("func").getType()).toEqual("dropdown");
  expect(propertyGrid.survey.getQuestionByName("asyncFunc").getType()).toEqual("dropdown");

  Serializer.removeProperty("dropdown", "func");
  Serializer.removeProperty("dropdown", "asyncFunc");
});
test("Move a property into another category by changing the category property if generateOtherTab is true, Bug#7465", () => {
  const requiredTextProp = Serializer.findProperty("question", "requiredErrorText");
  expect(requiredTextProp.category).toBeFalsy();
  requiredTextProp.category = "general";

  expect(defaultPropertyGridDefinition.generateOtherTab).toBeTruthy();

  let propertyGrid = new PropertyGridModelTester(new QuestionTextModel("q1"));
  let requiredTextQuestion = propertyGrid.survey.getQuestionByName("requiredErrorText");
  expect(requiredTextQuestion).toBeTruthy();
  expect(requiredTextQuestion.parent.name).toBe("general");

  defaultPropertyGridDefinition.generateOtherTab = false;

  propertyGrid = new PropertyGridModelTester(new QuestionTextModel("q1"));
  requiredTextQuestion = propertyGrid.survey.getQuestionByName("requiredErrorText");
  expect(requiredTextQuestion).toBeTruthy();
  expect(requiredTextQuestion.parent.name).toBe("validation");

  defaultPropertyGridDefinition.generateOtherTab = true;
  requiredTextProp.category = "";
});
test("Use the standalone question type definition for a cell type added into matrixDropdownColumnTypes, Bug#7976", () => {
  matrixDropdownColumnTypes["file"] = {};
  try {
    const matrix = new QuestionMatrixDynamicModel("q1");
    const column = matrix.addColumn("col1");
    column.cellType = "file";
    const propertyGrid = new PropertyGridModelTester(column);
    const panels = propertyGrid.survey.getAllPanels();
    expect(panels.map(panel => panel.name)).toStrictEqual(["general", "logic", "data", "totals", "validation"]);

    const generalNames = panels[0].elements.map(el => el.name);
    expect(generalNames.indexOf("cellType")).toBe(2);
    ["sourceType", "allowMultiple", "maxFiles", "acceptedTypes", "maxSize"].forEach(name => {
      expect(generalNames.indexOf(name)).toBeGreaterThan(-1);
    });
    ["page", "titleLocation", "startWithNewLine", "indent"].forEach(name => {
      expect(generalNames.indexOf(name)).toBe(-1);
    });
    expect(panels[1].elements.map(el => el.name)).toStrictEqual(["visibleIf", "enableIf", "requiredIf",
      "defaultValueExpression", "resetValueIf", "setValueIf", "setValueExpression"]);
    expect(panels[4].elements.map(el => el.name)).toStrictEqual(["validators", "requiredErrorText"]);
  } finally {
    delete matrixDropdownColumnTypes["file"];
  }
});
function getPropertyGridPanelsInfo(obj: Base): Array<{ name: string, elements: Array<string> }> {
  const propertyGrid = new PropertyGridModelTester(obj);
  return propertyGrid.survey.getAllPanels().map(panel => ({ name: panel.name, elements: panel.elements.map(el => el.name) }));
}
test("Show the wrapped question properties for a specialized question by default, Bug#8001", () => {
  ComponentCollection.Instance.add({ name: "customfile", inheritBaseProps: true, questionJSON: { type: "file" } });
  try {
    const survey = new SurveyModel({ elements: [{ type: "file", name: "q1" }, { type: "customfile", name: "q2" }] });
    // Compare the properties of the wrapped question type only, the common question properties may differ
    const getFileProperties = (info: Array<{ name: string, elements: Array<string> }>) =>
      info.map(panel => ({ name: panel.name, elements: panel.elements.filter(name => !Serializer.findProperty("question", name) && !!Serializer.findProperty("file", name)) }))
        .filter(panel => panel.elements.length > 0);
    const fileInfo = getFileProperties(getPropertyGridPanelsInfo(survey.getQuestionByName("q1")));
    const customInfo = getFileProperties(getPropertyGridPanelsInfo(survey.getQuestionByName("q2")));
    expect(fileInfo.some(panel => panel.elements.indexOf("allowMultiple") > -1)).toBeTruthy();
    expect(customInfo).toStrictEqual(fileInfo);
  } finally {
    ComponentCollection.Instance.clear();
  }
});
test("Show the wrapped question properties for a specialized question used as a cell type by default, Bug#8001", () => {
  ComponentCollection.Instance.add({ name: "customfile", inheritBaseProps: true, questionJSON: { type: "file" } });
  matrixDropdownColumnTypes["file"] = {};
  matrixDropdownColumnTypes["customfile"] = {};
  try {
    const matrix = new QuestionMatrixDynamicModel("q1");
    const fileColumn = matrix.addColumn("col1");
    fileColumn.cellType = "file";
    const customColumn = matrix.addColumn("col2");
    customColumn.cellType = "customfile";
    expect(customColumn.templateQuestion.getType()).toBe("customfile");
    const fileInfo = getPropertyGridPanelsInfo(fileColumn);
    const customInfo = getPropertyGridPanelsInfo(customColumn);
    expect(fileInfo[0].elements.indexOf("allowMultiple")).toBeGreaterThan(-1);
    expect(customInfo).toStrictEqual(fileInfo);
  } finally {
    delete matrixDropdownColumnTypes["file"];
    delete matrixDropdownColumnTypes["customfile"];
    ComponentCollection.Instance.clear();
  }
});
test("readOnlyMode is editable next to readOnly", () => {
  const choiceValues = (question: Question) => question.visibleChoices.map(item => item.value);
  const choiceTexts = (question: Question) => question.visibleChoices.map(item => item.text);
  const open = (obj: Base) => {
    const propertyGrid = new PropertyGridModelTester(obj);
    const question = propertyGrid.survey.getQuestionByName("readOnlyMode");
    const readOnly = propertyGrid.survey.getQuestionByName("readOnly");
    return { question, readOnly };
  };

  const text = new QuestionTextModel("q1");
  const textEditor = open(text);
  expect(textEditor.question).toBeTruthy();
  expect(textEditor.question.title).toBe("Read-only mode");
  expect(textEditor.question.parent.name).toBe("general");
  const generalNames = textEditor.question.parent.elements.map(el => el.name);
  expect(generalNames.indexOf("readOnlyMode")).toBe(generalNames.indexOf("readOnly_overridingProperty") + 1);
  expect(choiceValues(textEditor.question)).toEqual(["default", "readonly", "view"]);
  expect(choiceTexts(textEditor.question)).toEqual(["Inherit", "Read-only", "View"]);
  expect(textEditor.question.value).toBe("default");
  textEditor.question.value = "view";
  expect(text.readOnlyMode).toBe("view");

  const panel = new PanelModel("p1");
  const panelEditor = open(panel);
  expect(panelEditor.question.parent.name).toBe("general");
  expect(choiceValues(panelEditor.question)).toEqual(["default", "readonly", "view"]);
  panelEditor.question.value = "readonly";
  expect(panel.readOnlyMode).toBe("readonly");

  const page = new PageModel("page1");
  const pageEditor = open(page);
  expect(choiceValues(pageEditor.question)).toEqual(["default", "readonly", "view"]);

  const survey = new SurveyModel();
  const surveyEditor = open(survey);
  expect(surveyEditor.question.title).toBe("Read-only mode");
  expect(choiceValues(surveyEditor.question)).toEqual(["readonly", "view"]);
  expect(choiceTexts(surveyEditor.question)).toEqual(["Read-only", "View"]);
  expect(surveyEditor.question.value).toBe("readonly");
  surveyEditor.question.value = "view";
  expect(survey.readOnlyMode).toBe("view");

  const matrix = new QuestionMatrixDynamicModel("m1");
  const column = matrix.addColumn("col1");
  const columnEditor = open(column);
  expect(columnEditor.question.parent.name).toBe("general");
  const columnNames = columnEditor.question.parent.elements.map(el => el.name);
  expect(columnNames.indexOf("readOnlyMode")).toBe(columnNames.indexOf("readOnly") + 1);
  expect(choiceValues(columnEditor.question)).toEqual(["default", "readonly", "view"]);
  columnEditor.question.value = "view";
  expect(column.readOnlyMode).toBe("view");
});
