import {
  SurveyModel,
  SurveyTriggerComplete,
  QuestionMatrixDropdownModel,
  QuestionDropdownModel,
  ExpressionValidator,
  PanelModel,
  QuestionExpressionModel,
  QuestionMatrixModel,
  QuestionRadiogroupModel,
  SurveyTriggerRunExpression,
  SurveyTriggerCopyValue,
  ItemValue
} from "survey-core";
import { SurveyLogic } from "../../src/components/tabs/logic";
import { SurveyLogicUI } from "../../src/components/tabs/logic-ui";
import { SurveyLogicAction } from "../../src/components/tabs/logic-items";
import { EmptySurveyCreatorOptions } from "../../src/settings";
import { defaultStrings } from "../../src/editorLocalization";

test("Page visibility logic", () => {
  var survey = new SurveyModel({});
  var logic = new SurveyLogic(survey);
  var pageVis = logic.getTypeByName("page_visibility");
  expect(pageVis).toBeTruthy();
  expect(pageVis.visible).toBeFalsy();
  survey.addNewPage("p1");
  survey.addNewPage("p2");
  logic.update();
  pageVis = logic.getTypeByName("page_visibility");
  expect(pageVis).toBeTruthy();
  expect(pageVis.visible).toBeTruthy();
});
test("Question visibility logic", () => {
  var survey = new SurveyModel({});
  survey.addNewPage("p1");
  var logic = new SurveyLogic(survey);
  var questionVis = logic.getTypeByName("question_visibility");
  expect(questionVis).toBeTruthy();
  expect(questionVis.visible).toBeFalsy();
  survey.pages[0].addNewQuestion("text", "q1");
  expect(survey.getAllQuestions()).toHaveLength(1);
  logic.update();
  questionVis = logic.getTypeByName("question_visibility");
  expect(questionVis.visible).toBeTruthy();
});
test("Panel visibility logic", () => {
  var survey = new SurveyModel({});
  survey.addNewPage("p1");
  var logic = new SurveyLogic(survey);
  var panelVis = logic.getTypeByName("panel_visibility");
  expect(panelVis).toBeTruthy();
  expect(panelVis.visible).toBeFalsy();
  survey.pages[0].addNewPanel("panel1");
  expect(survey.getAllPanels()).toHaveLength(1);
  logic.update();
  panelVis = logic.getTypeByName("panel_visibility");
  expect(panelVis.visible).toBeTruthy();
});
test("Do not show ShowInUI=false visibility logic", () => {
  var survey = new SurveyModel({});
  var logic = new SurveyLogic(survey);
  var validatorLogic = logic.getTypeByName("question_expressionValidator");
  expect(validatorLogic).toBeTruthy();
  expect(validatorLogic.visible).toBeFalsy();
});
test("Add existing visible Items", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q2}=1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" }
    ]
  });
  var logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(2);
});

test("Add new action immediately", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.mode).toEqual("view");
  logic.addNew();
  expect(logic.mode).toEqual("new");
  expect(logic.itemEditor.panels).toHaveLength(1);
  logic.expressionEditor.text = "{q2} = 1";
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  panel.getQuestionByName("elementSelector").value = "q1";
  logic.saveEditableItem();
  expect(survey.getQuestionByName("q1").visibleIf).toEqual("{q2} = 1");
});

test("Do not add expression question into visible Items", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "expression", name: "q2", expression: "{q1}+1" }
    ]
  });
  var logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(0);
  expect(logic.invisibleItems).toHaveLength(1);
});

test("Add new item", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q2}=1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.mode).toEqual("view");
  logic.addNew();
  expect(logic.mode).toEqual("new");
  expect(logic.editableItem).toBeTruthy();
  expect(logic.expressionEditor).toBeTruthy();
  expect(logic.expressionEditor.text).toBeFalsy();
  expect(logic.expressionEditor.allConditionQuestions).toHaveLength(3);
  expect(logic.editableItem.actions).toHaveLength(0);
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  var elSelectorQuestion = <QuestionDropdownModel>(
    panel.getQuestionByName("elementSelector")
  );
  expect(elSelectorQuestion.choices[0].isEnabled).toBeFalsy();
  expect(elSelectorQuestion.choices[1].isEnabled).toBeFalsy();
  expect(elSelectorQuestion.choices[2].isEnabled).toBeTruthy();
  elSelectorQuestion.value = "q3";
  logic.expressionEditor.text = "{q1} = 2";
  expect(logic.saveEditableItem()).toBeTruthy();
  expect(survey.getQuestionByName("q3").visibleIf).toEqual("{q1} = 2");
  expect(logic.items).toHaveLength(3);
});
test("Edit existing item", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3} =1" },
      { type: "text", name: "q3" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.mode).toEqual("view");
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].actions).toHaveLength(2);
  expect(logic.items[0].actions[0].element["name"]).toEqual("q1");
  logic.editItem(logic.items[0]);
  expect(logic.editableItem).toBeTruthy();
  expect(logic.expressionEditor.text).toEqual("{q3} = 1");
});

test("Use SurveyItemSelector for editing", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3}=1" },
      { type: "text", name: "q3", visibleIf: "{q2}=1" },
      { type: "text", name: "q4" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  expect(logic.mode).toEqual("view");
  expect(logic.items).toHaveLength(2);
  logic.editItem(logic.items[1]);
  var panel = logic.itemEditor.panels[0];
  expect(panel.getQuestionByName("logicTypeName").value).toEqual(
    "question_visibility"
  );
  var elSelectorQuestion = <QuestionDropdownModel>(
    panel.getQuestionByName("elementSelector")
  );
  expect(elSelectorQuestion).toBeTruthy();
  expect(elSelectorQuestion.choices).toHaveLength(4);
  expect(elSelectorQuestion.choices[0].isEnabled).toBeFalsy();
  expect(elSelectorQuestion.choices[1].isEnabled).toBeFalsy();
  expect(elSelectorQuestion.choices[2].isEnabled).toBeTruthy();
  expect(elSelectorQuestion.choices[3].isEnabled).toBeTruthy();
  logic.itemEditor.panel.addPanel();
  panel = logic.itemEditor.panels[1];
  elSelectorQuestion = <QuestionDropdownModel>(
    panel.getQuestionByName("elementSelector")
  );
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  elSelectorQuestion.value = "q4";
  logic.saveEditableItemAndBack();
  expect(survey.getQuestionByName("q4").visibleIf).toEqual("{q2} = 1");
  logic.editItem(logic.items[0]);
  panel = logic.itemEditor.panels[0];
  elSelectorQuestion = <QuestionDropdownModel>(
    panel.getQuestionByName("elementSelector")
  );
  expect(elSelectorQuestion.choices).toHaveLength(4);
  expect(elSelectorQuestion.choices[0].isEnabled).toBeTruthy();
  expect(elSelectorQuestion.choices[1].isEnabled).toBeTruthy();
  expect(elSelectorQuestion.choices[2].isEnabled).toBeFalsy();
  expect(elSelectorQuestion.choices[3].isEnabled).toBeFalsy();
});

test("Remove same actions on save", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  logic.editItem(logic.items[0]);
  expect(logic.expressionEditor.text).toEqual("{q3} = 1");
  var questions = ["q1", "q2", "q2"];
  for (var i = 0; i < questions.length; i++) {
    var panel = logic.itemEditor.panel.addPanel();
    panel.getQuestionByName("logicTypeName").value = "question_visibility";
    panel.getQuestionByName("elementSelector").value = questions[i];
  }
  expect(logic.itemEditor.panels).toHaveLength(4);
  logic.saveEditableItem();
  expect(logic.editableItem.actions).toHaveLength(2);
  expect(logic.itemEditor.panels).toHaveLength(2);
});

test("Remove existing action", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3}=1" },
      { type: "text", name: "q3" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  logic.editItem(logic.items[0]);
  expect(logic.itemEditor.panels).toHaveLength(2);
  logic.itemEditor.panel.removePanel(1);
  logic.saveEditableItem();
  expect(survey.getQuestionByName("q2").visibleIf).toBeFalsy();
});
test("Remove existing item", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3}=1" },
      { type: "text", name: "q3" }
    ]
  });
  var logic = new SurveyLogic(survey);
  logic.removeItem(logic.items[0]);
  expect(logic.items).toHaveLength(0);
  expect(survey.getQuestionByName("q1").visibleIf).toBeFalsy();
  expect(survey.getQuestionByName("q2").visibleIf).toBeFalsy();
});

test("Remove existing item, triggers, Bug #1598", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ],
    triggers: [
      {
        type: "setvalue",
        expression: "{q1} = 1",
        setToName: "q2",
        setValue: "q2Value"
      }
    ]
  });
  var logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(1);
  expect(survey.triggers).toHaveLength(1);
  logic.removeItem(logic.items[0]);
  expect(logic.items).toHaveLength(0);
  expect(survey.triggers).toHaveLength(0);
});

test("Rename the name", () => {
  var survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        visibleIf: "{q2} != 2",
        elements: [{ type: "text", name: "q1", enableIf: "{q2} > 2" }]
      },
      {
        name: "page2",
        visibleIf: "{Q1} != 1 and {q1} < 1",
        elements: [{ type: "text", name: "q2", requiredIf: "{q1} < 1" }]
      },
      {
        name: "page3",
        elements: [
          {
            type: "panel",
            name: "panel1",
            visibleIf: "{q1} = 1",
            enableIf: "{q2} = 2",
            elements: [
              {
                type: "text",
                name: "q3",
                validators: [
                  { type: "expressionvalidator", expression: "{q1} > 1" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "page4",
        elements: [
          { type: "expression", name: "q4", expression: "{q1} + {q2}" }
        ]
      },
      {
        name: "page5",
        elements: [
          {
            type: "matrixdropdown",
            name: "q5",
            columns: [
              {
                name: "col1",
                visibleIf: "{q1} = 1",
                enableIf: "{q2} = 2",
                requiredIf: "{q1} = 1",
                totalExpression: "{q1} + {q2}"
              }
            ]
          }
        ]
      },
      {
        name: "page6",
        elements: [
          {
            type: "matrixdropdown",
            name: "q6",
            rowsVisibleIf: "{item} = {q1}"
          },
          {
            type: "matrix",
            name: "q7",
            rowsVisibleIf: "{item} = {q1}",
            columnsVisibleIf: "{item} = {q2}"
          }
        ]
      },
      {
        name: "page7",
        elements: [
          {
            type: "radiogroup",
            name: "q8",
            choicesVisibleIf: "{item} = {q1}",
            choicesEnableIf: "{item} = {q2}",
            choices: [{ value: 1, visibleIf: "{q1} = 1", enableIf: "{q2} = 2" }]
          }
        ]
      }
    ],
    triggers: [
      {
        type: "runexpression",
        expression: "{q1} = 1",
        runExpression: "{q2} + 1"
      },
      {
        type: "complete",
        expression: "{q1} = 1"
      },
      {
        type: "copyvalue",
        expression: "{q1} = 1",
        setToName: "q1",
        fromName: "q2"
      }
    ],
    completedHtmlOnCondition: [
      {
        expression: "{q1} = 1",
        html: "text"
      }
    ],
    calculatedValues: [
      {
        name: "var1",
        expression: "{q1} = 1"
      }
    ]
  });
  var logic = new SurveyLogic(survey);
  var q1 = survey.getQuestionByName("q1");
  var q2 = survey.getQuestionByName("q2");
  var q3 = survey.getQuestionByName("q3");
  var validator = <ExpressionValidator>q3.validators[0];
  var panel1 = <PanelModel>survey.getPanelByName("panel1");
  var q4 = <QuestionExpressionModel>survey.getQuestionByName("q4");
  var q5 = <QuestionMatrixDropdownModel>survey.getQuestionByName("q5");
  var q6 = <QuestionMatrixDropdownModel>survey.getQuestionByName("q6");
  var q7 = <QuestionMatrixModel>survey.getQuestionByName("q7");
  var q8 = <QuestionRadiogroupModel>survey.getQuestionByName("q8");
  var trigger1 = <SurveyTriggerRunExpression>survey.triggers[0];
  var trigger2 = <SurveyTriggerComplete>survey.triggers[1];
  var trigger3 = <SurveyTriggerCopyValue>survey.triggers[2];
  var q5col1 = q5.columns[0];
  logic.renameQuestion("Q1", "question1");
  logic.renameQuestion("q2", "question2");
  expect(survey.pages[0].visibleIf).toEqual("{question2} != 2");
  expect(survey.pages[1].visibleIf).toEqual(
    "{question1} != 1 and {question1} < 1"
  );
  expect(q1.enableIf).toEqual("{question2} > 2");
  expect(q2.requiredIf).toEqual("{question1} < 1");
  expect(panel1.visibleIf).toEqual("{question1} = 1");
  expect(panel1.enableIf).toEqual("{question2} = 2");
  expect(q4.expression).toEqual("{question1} + {question2}");
  expect(q5col1.visibleIf).toEqual("{question1} = 1");
  expect(q5col1.enableIf).toEqual("{question2} = 2");
  expect(q5col1.requiredIf).toEqual("{question1} = 1");
  expect(q5col1.totalExpression).toEqual("{question1} + {question2}");
  expect(trigger1.expression).toEqual("{question1} = 1");
  expect(trigger1.runExpression).toEqual("{question2} + 1");
  expect(trigger2.expression).toEqual("{question1} = 1");
  expect(trigger3.expression).toEqual("{question1} = 1");
  expect(trigger3.setToName).toEqual("question1");
  expect(trigger3.fromName).toEqual("question2");
  expect(validator.expression).toEqual("{question1} > 1");
  expect(q6.rowsVisibleIf).toEqual("{item} = {question1}");
  expect(q7.rowsVisibleIf).toEqual("{item} = {question1}");
  expect(q7.columnsVisibleIf).toEqual("{item} = {question2}");
  expect(q8.choicesVisibleIf).toEqual("{item} = {question1}");
  expect(q8.choicesEnableIf).toEqual("{item} = {question2}");
  expect(q8.choices[0].visibleIf).toEqual("{question1} = 1");
  expect(q8.choices[0].enableIf).toEqual("{question2} = 2");
  expect(survey.completedHtmlOnCondition[0].expression).toEqual(
    "{question1} = 1"
  );
  expect(survey.calculatedValues).toHaveLength(1);
  expect(survey.calculatedValues[0].expression).toEqual("{question1} = 1");
});
test("Delete the question", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3} > 2" },
      {
        type: "text",
        name: "q2",
        visibleIf: "{q1} = 1 and {q3} < 2 or {q1} = 2"
      },
      { type: "text", name: "q3" }
    ]
  });
  var q1 = survey.getQuestionByName("q1");
  var q2 = survey.getQuestionByName("q2");
  var q3 = survey.getQuestionByName("q3");
  var logic = new SurveyLogic(survey);
  q3.delete();
  logic.removeQuestion(q3.name);
  expect(q1.visibleIf).toBeFalsy();
  expect(q2.visibleIf).toEqual("(({q1} == 1) or ({q1} == 2))");
});

test("Add new trigger", () => {
  var survey = new SurveyModel({
    elements: [{ type: "text", name: "q1" }]
  });
  var logic = new SurveyLogicUI(survey);
  logic.addNew();
  expect(logic.mode).toEqual("new");
  expect(logic.editableItem).toBeTruthy();
  expect(logic.expressionEditor).toBeTruthy();
  expect(logic.expressionEditor.text).toBeFalsy();
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "trigger_complete";
  expect(panel.getElementByName("elementPanel").isVisible).toBeFalsy();
  logic.expressionEditor.text = "{q1} = 2";
  panel.getQuestionByName("elementPanel");
  expect(survey.triggers).toHaveLength(0);
  logic.saveEditableItem();
  expect(survey.triggers).toHaveLength(1);
  expect(survey.triggers[0].getType()).toEqual("completetrigger");
  expect(survey.triggers[0].expression).toEqual("{q1} = 2");
});

test("Edit triggers via trigger editor", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", title: "Question 1" },
      { type: "text", name: "q2", title: "Question 2" },
      { type: "text", name: "q3", title: "Question 3" }
    ],
    triggers: [
      {
        type: "runexpression",
        expression: "{q1} = 1",
        runExpression: "{q2} + 1",
        setToName: "q2"
      }
    ]
  });
  var options = new EmptySurveyCreatorOptions();
  options.showTitlesInExpressions = true;
  var logic = new SurveyLogicUI(survey, options);
  expect(logic.items).toHaveLength(1);
  logic.editItem(logic.items[0]);
  expect(logic.editableItem).toBeTruthy();
  expect(logic.expressionEditor.text).toEqual("{q1} = 1");
  expect(logic.editableItem.actions).toHaveLength(1);
  logic.expressionEditor.text = "{q1} = 10";
  var panel = logic.itemEditor.panels[0];
  var elementPanel = <PanelModel>panel.getElementByName("elementPanel");
  expect(elementPanel.getQuestionByName("setToName").value).toEqual("q2");
  expect(elementPanel.isVisible).toBeTruthy();
  expect(elementPanel.getQuestionByName("expression").isVisible).toBeFalsy();
  elementPanel.getQuestionByName("setToName").value = "q3";
  logic.saveEditableItem();
  expect(logic.items[0].actions[0].text).toEqual(
    "Run expression: '{Question 2} + 1' and set its result into question: {Question 3}"
  );
  expect(survey.triggers[0]["setToName"]).toEqual("q3");
  expect(survey.triggers[0].expression).toEqual("{q1} = 10");
});

test("Edit condition complete via its editor", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", title: "Question 1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  logic.addNew();
  logic.expressionEditor.text = "{q1} = 10";
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "completedHtmlOnCondition";
  var elementPanel = <PanelModel>panel.getElementByName("elementPanel");
  elementPanel.getQuestionByName("html").value = "Some text";
  logic.saveEditableItem();
  expect(survey.completedHtmlOnCondition).toHaveLength(1);
  expect(survey.completedHtmlOnCondition[0].expression).toEqual("{q1} = 10");
  expect(survey.completedHtmlOnCondition[0].html).toEqual("Some text");
  logic.expressionEditor.text = "{q1} = 100";
  elementPanel = <PanelModel>panel.getElementByName("elementPanel");
  elementPanel.getQuestionByName("html").value = "Some text 2";
  logic.saveEditableItemAndBack();
  expect(survey.completedHtmlOnCondition).toHaveLength(1);
  expect(survey.completedHtmlOnCondition[0].expression).toEqual("{q1} = 100");
  expect(survey.completedHtmlOnCondition[0].html).toEqual("Some text 2");

  logic.editItem(logic.items[0]);
  expect(logic.itemEditor.panels).toHaveLength(1);
  panel = logic.itemEditor.panels[0];
  logic.expressionEditor.text = "{q1} = 1000";
  elementPanel = <PanelModel>panel.getElementByName("elementPanel");
  elementPanel.getQuestionByName("html").value = "Some text 3";
  logic.saveEditableItemAndBack();
  expect(survey.completedHtmlOnCondition).toHaveLength(1);
  expect(survey.completedHtmlOnCondition[0].expression).toEqual("{q1} = 1000");
  expect(survey.completedHtmlOnCondition[0].html).toEqual("Some text 3");
});
test("Use survey creator options", () => {
  var options = new EmptySurveyCreatorOptions();
  options.showTitlesInExpressions = true;
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", title: "Question 1" },
      { type: "text", name: "q2", title: "Question 2" }
    ]
  });
  var logic = new SurveyLogicUI(survey, options);
  logic.addNew();
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  var elementSelector = <QuestionDropdownModel>(
    panel.getElementByName("elementSelector")
  );
  expect(elementSelector.choices[0].text).toEqual("Question 1");
  var chooseQuestion =
    logic.expressionEditor.panel.panels[0].getQuestionByName("questionName");
  expect(chooseQuestion.choices[0].text).toEqual("Question 1");
});

test("Disable editing for readOnly", () => {
  var options = new EmptySurveyCreatorOptions();
  options.readOnly = true;
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  });
  var logic = new SurveyLogic(survey, options);
  expect(logic.mode).toEqual("view");
  expect(logic.readOnly).toBeTruthy();
});
test("Displaying correct text for logic action", () => {
  var survey = new SurveyModel({
    pages: [
      {
        name: "page1",
        visibleIf: "{q1} = 1",
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" },
          { type: "text", name: "q3", enableIf: "{q1} = 1" },
          { type: "text", name: "q4", requiredIf: "{q1} = 1" },
          {
            type: "panel",
            name: "panel1",
            visibleIf: "{q1} = 1",
            enableIf: "{q1} = 1",
            elements: [
              {
                type: "text",
                name: "q5"
              }
            ]
          }
        ]
      }
    ],
    triggers: [
      {
        type: "complete",
        expression: "{q1} = 1"
      },
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q2"
      },
      {
        type: "runexpression",
        expression: "{q1} = 1",
        runExpression: "{q2} + 1",
        setToName: "q3"
      },
      {
        type: "copyvalue",
        expression: "{q1} = 1",
        setToName: "q1",
        fromName: "q2"
      },
      {
        type: "setvalue",
        expression: "{q1} = 1",
        setToName: "q2",
        setValue: "q2Value"
      }
    ],
    completedHtmlOnCondition: [
      {
        expression: "{q1} = 1",
        html: "text"
      }
    ]
  });
  var logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(1);
  var ops = logic.items[0].actions;
  var logicTypes = [
    "page_visibility",
    "panel_visibility",
    "panel_enable",
    "question_visibility",
    "question_enable",
    "question_require",
    "trigger_complete",
    "trigger_setvalue",
    "trigger_copyvalue",
    "trigger_skip",
    "trigger_runExpression",
    "completedHtmlOnCondition"
  ];
  // "There are 11 actions: 1 page + 2 panels + 3 questions + 5 triggers + 1 html condition"
  expect(ops).toHaveLength(logicTypes.length);
  var findOp = function (name: string): SurveyLogicAction {
    for (var i = 0; i < ops.length; i++) {
      if (ops[i].logicType.name == name) return ops[i];
    }
    return ops[i];
  };
  for (var i = 0; i < logicTypes.length; i++) {
    expect(findOp(logicTypes[i])).toBeTruthy();
  }
  expect(logic.items[0].expressionText).toEqual(
    "When expression: '{q1} == 1' returns true:"
  );
  expect(findOp("page_visibility").text).toEqual("Make page {page1} visible");
  expect(findOp("panel_visibility").text).toEqual(
    "Make panel {panel1} visible"
  );
  expect(findOp("panel_enable").text).toEqual("Make panel {panel1} enable");
  expect(findOp("question_visibility").text).toEqual(
    "Make question {q2} visible"
  );
  expect(findOp("question_enable").text).toEqual("Make question {q3} enable");
  expect(findOp("question_require").text).toEqual(
    "Make question {q4} required"
  );
  expect(findOp("trigger_complete").text).toEqual("Survey becomes completed");
  expect(findOp("trigger_setvalue").text).toEqual(
    "Set into question: {q2} value q2Value"
  );
  expect(findOp("trigger_copyvalue").text).toEqual(
    "Copy into question: {q1} value from question {q2}"
  );
  expect(findOp("trigger_skip").text).toEqual(
    "Survey skip to the question {q2}"
  );
  expect(findOp("trigger_runExpression").text).toEqual(
    "Run expression: '{q2} + 1' and set its result into question: {q3}"
  );
  expect(findOp("completedHtmlOnCondition").text).toEqual(
    "Show custom text for the 'Thank you page'."
  );
  expect(findOp("page_visibility").name).toEqual("Page visibility");
});

test("Logic editing errors", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  logic.addNew();
  expect(logic.saveEditableItem()).toBeFalsy();
  expect(logic.errorText).toEqual(
    "The logic expression is empty or invalid. Please correct it."
  );
  logic.expressionEditor.text = "ww++++2";
  expect(logic.saveEditableItem()).toBeFalsy();
  expect(logic.errorText).toEqual(
    "The logic expression is empty or invalid. Please correct it."
  );
  logic.expressionEditor.text = "{q1} = 1";
  expect(logic.saveEditableItem()).toBeFalsy();
  expect(logic.errorText).toEqual("Please, fix problems in your action(s).");
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  panel.getQuestionByName("elementSelector").value = "";
  expect(logic.saveEditableItem()).toBeFalsy();
  expect(logic.errorText).toEqual("Please, fix problems in your action(s).");
  panel.getQuestionByName("elementSelector").value = "q2";
  expect(logic.saveEditableItem()).toBeTruthy();
  expect(logic.errorText).toBeFalsy();
  panel = logic.itemEditor.panel.addPanel();
  panel.getQuestionByName("logicTypeName").value = "trigger_setvalue";
  expect(logic.hasError()).toBeTruthy();
  var elementPanel = <PanelModel>panel.getElementByName("elementPanel");
  elementPanel.getQuestionByName("setToName").value = "q2";
  expect(logic.hasError()).toBeFalsy();
  expect(logic.saveEditableItem()).toBeTruthy();
});

test("Return without saving", () => {
  var survey = new SurveyModel({
    pages: [
      {
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" },
          { type: "text", name: "q3" }
        ]
      }
    ],
    triggers: [
      {
        type: "skip",
        expression: "{q1} = 1",
        gotoName: "q2"
      }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  var item = logic.items[0];
  item.edit();
  logic.expressionEditor.text = "{q1} = 2";
  var panel = logic.itemEditor.panels[1];
  var elementPanel = <PanelModel>panel.getElementByName("elementPanel");
  elementPanel.getQuestionByName("gotoName").value = "q3";
  panel = logic.itemEditor.panel.addPanel();
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  expect(logic.saveEditableItem()).toBeFalsy();
  expect(logic.errorText).toBeTruthy();
  logic.mode = "view";
  item = logic.items[0];
  expect(item.actions).toHaveLength(2);
  expect(item.expression).toEqual("{q1} = 1");
  expect(item.actions[1].element["gotoName"]).toEqual("q2");
  expect(logic.errorText).toBeFalsy();
});
test("Add existing visible Items", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", title: "My Question 1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3", visibleIf: "{q1}=1" }
    ]
  });
  var options = new EmptySurveyCreatorOptions();
  options.showTitlesInExpressions = true;
  var logic = new SurveyLogic(survey, options);
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].expressionText).toEqual(
    "When expression: '{My Question 1} == 1' returns true:"
  );
});

test("Allow logic type to be null and change it", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
      { type: "text", name: "q3" }
    ]
  });
  var options = new EmptySurveyCreatorOptions();
  var logic = new SurveyLogicUI(survey, options);
  var item = logic.items[0];
  item.edit();
  expect(logic.editableItem).toBeTruthy();
  var panel = logic.itemEditor.panels[0];
  expect(panel.getQuestionByName("logicTypeName").value).toEqual(
    "question_visibility"
  );
  panel.getQuestionByName("logicTypeName").clearValue();
  expect(logic.saveEditableItem()).toBeFalsy();
  expect(logic.errorText).toBeTruthy();
  panel.getQuestionByName("logicTypeName").value = "question_enable";
  expect(panel.getQuestionByName("elementSelector").isEmpty()).toBeTruthy();
  expect(panel.getQuestionByName("elementSelector").isVisible).toBeTruthy();
  expect(logic.saveEditableItem()).toBeFalsy();
  panel.getQuestionByName("elementSelector").value = survey.currentPage.name;
  expect(logic.saveEditableItem()).toBeTruthy();
});
test("One action exists in new item", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  logic.addNew();
  var item = logic.editableItem;
  logic.expressionEditor.text = "{q1} = 1";
  expect(item).toBeTruthy();
  expect(logic.itemEditor.panels).toHaveLength(1);
  var panel = logic.itemEditor.panels[0];
  expect(panel.getQuestionByName("logicTypeName").isEmpty()).toBeTruthy();
});
test("Limit the number of action types.", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ]
  });
  SurveyLogic.visibleActions = [
    "question_visibility",
    "question_require",
    "trigger_skip",
    "trigger_complete"
  ];
  var logic = new SurveyLogic(survey);
  expect(logic.logicTypes).toHaveLength(4);
  SurveyLogic.visibleActions = [];
  logic = new SurveyLogic(survey);
  expect(logic.logicTypes.length > 4).toBeTruthy();
});

test("Logic onLogicItemSaved event", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  var callCount = 0;
  logic.onLogicItemSaved.add((_, options) => {
    callCount++;
  });
  logic.addNew();
  logic.expressionEditor.text = "{q1} = 1";
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  panel.getQuestionByName("elementSelector").value = "q2";
  expect(callCount).toEqual(0);
  logic.saveEditableItem();
  expect(callCount).toEqual(1);
});

test("Logic onLogicItemValidation event", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  var callCount = 0;
  logic.onLogicItemValidation.add((_, options) => {
    expect(options.usedNamesInExpression).toHaveLength(1);
    expect(options.usedNamesInExpression[0]).toEqual("q1");
    callCount++;
    var actions = options.actions;
    expect(actions).toHaveLength(1);
    expect(actions[0].logicTypeName).toEqual("question_visibility");
    expect(actions[0].element.name).toBeTruthy();
    for (var i = 0; i < options.actions.length; i++) {
      let action = options.actions[i];
      if (action.logicTypeName === "question_visibility" && !!action.element) {
        if (options.usedNamesInExpression.indexOf(action.element.name) > -1) {
          action.errorText = "Please use another question";
          options.error = "There is an error in an action";
        }
      }
    }
  });
  logic.addNew();
  logic.expressionEditor.text = "{q1} = 1";
  var panel = logic.itemEditor.panels[0];
  panel.getQuestionByName("logicTypeName").value = "question_visibility";
  panel.getQuestionByName("elementSelector").value = "q1";
  expect(callCount).toEqual(0);
  logic.saveEditableItem();
  expect(callCount).toEqual(1);
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].isNew).toBeTruthy();
  panel.getQuestionByName("elementSelector").value = "q2";
  logic.saveEditableItem();
  expect(callCount).toEqual(2);
  expect(logic.items).toHaveLength(1);
  expect(logic.items[0].isNew).toBeFalsy();
});

test("Logic onLogicItemRemoving/onLogicItemRemoved events", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1", visibleIf: "{q3}=1" },
      { type: "text", name: "q2", visibleIf: "{q3}=1" }
    ]
  });
  var logic = new SurveyLogic(survey);
  var removingCallCount = 0;
  logic.onLogicItemRemoving.add((_, options) => {
    options.allowRemove = removingCallCount;
    removingCallCount++;
  });
  var removedCallCount = 0;
  logic.onLogicItemRemoved.add((_, options) => {
    removedCallCount++;
  });
  expect(removingCallCount).toEqual(0);
  expect(removedCallCount).toEqual(0);

  logic.removeItem(logic.items[0]);
  expect(logic.items).toHaveLength(1);
  expect(removingCallCount).toEqual(1);
  expect(removedCallCount).toEqual(0);

  logic.removeItem(logic.items[0]);
  expect(logic.items).toHaveLength(0);
  expect(removingCallCount).toEqual(2);
  expect(removedCallCount).toEqual(1);
});
test("Logic addNewText", () => {
  var logic = new SurveyLogicUI(new SurveyModel());
  expect(logic.addNewText).toEqual("Add New");
  (<any>defaultStrings).ed.lg["addNewItem"] = "Add New Rule";
  expect(logic.addNewText).toEqual("Add New Rule");
  (<any>defaultStrings).ed.lg["addNewItem"] = "";
  expect(logic.addNewText).toEqual("Add New");
});

test("Hide/show logic types in actions", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2" },
      { type: "text", name: "q3" }
    ]
  });
  var logic = new SurveyLogicUI(survey);
  logic.addNew();
  var panel1 = logic.itemEditor.panels[0];
  var ltQuestion1 = panel1.getQuestionByName("logicTypeName");
  expect(ltQuestion1).toBeTruthy();
  var lt1Skip = ItemValue.getItemByValue(ltQuestion1.choices, "trigger_skip");
  var lt1Complete = ItemValue.getItemByValue(
    ltQuestion1.choices,
    "trigger_complete"
  );
  expect(lt1Skip).toBeTruthy();
  expect(lt1Complete).toBeTruthy();
  var panel2 = logic.itemEditor.panel.addPanel();
  var ltQuestion2 = panel2.getQuestionByName("logicTypeName");
  expect(ltQuestion2).toBeTruthy();
  var lt2Skip = ItemValue.getItemByValue(ltQuestion2.choices, "trigger_skip");
  var lt2Complete = ItemValue.getItemByValue(
    ltQuestion2.choices,
    "trigger_complete"
  );
  expect(lt2Skip).toBeTruthy();
  expect(lt2Complete).toBeTruthy();

  ltQuestion1.value = "trigger_complete";
  expect(lt1Skip.isVisible).toBeTruthy();
  expect(lt1Complete.isVisible).toBeTruthy();
  expect(lt2Skip.isVisible).toBeTruthy();
  expect(lt2Complete.isVisible).toBeFalsy();

  ltQuestion2.value = "trigger_skip";
  expect(lt1Skip.isVisible).toBeFalsy();
  expect(lt1Complete.isVisible).toBeTruthy();
  expect(lt2Skip.isVisible).toBeTruthy();
  expect(lt2Complete.isVisible).toBeFalsy();

  ltQuestion1.clearValue();
  expect(lt1Skip.isVisible).toBeFalsy();
  expect(lt1Complete.isVisible).toBeTruthy();
  expect(lt2Skip.isVisible).toBeTruthy();
  expect(lt2Complete.isVisible).toBeTruthy();

  var panel3 = logic.itemEditor.panel.addPanel();
  var ltQuestion3 = panel3.getQuestionByName("logicTypeName");
  ltQuestion3.value = "trigger_complete";
  expect(lt1Skip.isVisible).toBeFalsy();
  expect(lt1Complete.isVisible).toBeFalsy();
  expect(lt2Skip.isVisible).toBeTruthy();
  expect(lt2Complete.isVisible).toBeFalsy();

  logic.itemEditor.panel.removePanel(2);
  expect(lt1Skip.isVisible).toBeFalsy();
  expect(lt1Complete.isVisible).toBeTruthy();
  expect(lt2Skip.isVisible).toBeTruthy();
  expect(lt2Complete.isVisible).toBeTruthy();
});

//TODO Can not implement these tests yet
/*
  test("Make Survey Creator modified on changes", () => {
    var creator = new SurveyCreator();
    creator.JSON = {
      pages: [
        {
          elements: [
            { type: "text", name: "q1" },
            { type: "text", name: "q2", visibleIf: "{q1} = 1" },
            { type: "text", name: "q3" },
          ],
        },
      ],
      triggers: [
        {
          type: "skip",
          expression: "{q1} = 1",
          gotoName: "q2",
        },
      ],
    };
    var logic = new SurveyLogic(creator.survey, creator);
    creator.showLogicEditor();
    var modifiedCounter = 0;
    creator.onModified.add(function () {
      modifiedCounter++;
    });
    var item = logic.items[0];
    item.edit();
    logic.expressionEditor.koTextValue("{q1} = 2");
    logic.addAction(logic.getTypeByName("question_visibility"));
    item.actions[2].itemSelector.koValue("q3");
    expect(modifiedCounter, 0, "Has not changed yet");
    logic.saveEditableItem();
    expect(modifiedCounter, 1, "It was changed one time");
    logic.removeItem(logic.items[0]);
    expect(modifiedCounter, 2, "It was changed two times");
  });
  
  test(
    "Hide Expression Header in Condition Property Editor in Logic tab",
    () => {
      var creator = new SurveyCreator(null, {
        hideExpressionHeaderInLogicTab: true,
      });
      creator.JSON = {
        pages: [
          {
            elements: [
              { type: "text", name: "q1" },
              { type: "text", name: "q2", visibleIf: "{q1} = 1" },
              { type: "text", name: "q3" },
            ],
          },
        ],
        triggers: [
          {
            type: "skip",
            expression: "{q1} = 1",
            gotoName: "q2",
          },
        ],
      };
      var logic = new SurveyLogic(creator.survey, creator);
      var item = logic.items[0];
      item.edit();
      expect(
        logic.expressionEditor.koShowExpressionHeader(),
        false,
        "Do not show expression header"
      );
    }
  );
  test(
    "SurveyCreator with logictab only, set creator json",
    () => {
      var options = {
        showLogicTab: true,
        showDesignerTab: false,
        showTestSurveyTab: false,
        showJSONEditorTab: false,
      };
      var creator = new SurveyCreator(null, options);
      creator.JSON = {
        elements: [
          { type: "text", name: "q1", visibleIf: "{q3}=1" },
          { type: "text", name: "q2", visibleIf: "{q3}=1" },
          { type: "text", name: "q3" },
        ],
      };
      var logic = new SurveyLogic(creator.survey, creator);
      expect(logic.items.length, 1, "We have one item here");
    }
  );
*/
