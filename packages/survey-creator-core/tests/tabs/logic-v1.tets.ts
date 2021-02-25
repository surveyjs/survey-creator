import {
  SurveyModel,
  Question,
  QuestionTextModel,
  QuestionCheckboxModel,
  surveyLocalization,
  SurveyTriggerComplete,
  RegexValidator,
  QuestionMatrixDropdownModel,
  QuestionMultipleTextModel,
  Serializer,
} from "survey-knockout";
import { SurveyLogic } from "../../src/tabs/logic";
import { settings } from "../../src/settings";

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
      { type: "text", name: "q2", visibleIf: "{q1}=1" },
    ],
  });
  var logic = new SurveyLogic(survey);
  expect(logic.items).toHaveLength(2);
});
/*
test("Add new action immediately", () => {
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2" },
      ],
    });
    var logic = new SurveyLogic(survey);
    expect(logic.mode).toEqual("view");
    logic.addNew();
    expect(logic.mode).toEqual("new");
    var action = logic.editableItem.actions[0];
    action.logicType = logic.getTypeByName("question_visibility");
    action.itemSelector.koValue("q1");
    logic.expressionEditor.koValue("{q2} = 1");
    logic.saveEditableItem();
    expect(
      (<Survey.Question>survey.getQuestionByName("q1")).visibleIf).toEqual("{q2} = 1");
  });
*/
/*
  test(
    "Do not add expression question into visible Items",
    () => {
      var survey = new SurveyModel({
        elements: [
          { type: "text", name: "q1" },
          { type: "expression", name: "q2", expression: "{q1}+1" },
        ],
      });
      var logic = new SurveyLogic(survey);
      expect.equal(logic.items.length, 0, "There is not visible items");
      expect.equal(logic.invisibleItems.length, 1, "There is one invisible item");
    }
  );
  test("Add new item", () => {
    var survey = new SurveyModel();
    var logic = new SurveyLogic(survey);
    logic.addNew();
    expect.equal(logic.mode, "new", "There is no items");
    survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1", visibleIf: "{q2}=1" },
        { type: "text", name: "q2", visibleIf: "{q1}=1" },
        { type: "text", name: "q3" },
      ],
    });
    logic = new SurveyLogic(survey);
    expect.equal(logic.mode, "view", "There are items");
    logic.editItem(logic.items[0]);
    logic.addNew();
    expect.equal(logic.mode, "new", "change to the select type mode");
    expect.ok(logic.editableItem, "Editable item is created");
    expect.ok(logic.expressionEditor, "expression editor is created");
    expect.equal(logic.expressionEditor.koValue(), "", "the expression is empty");
    expect.equal(
      logic.expressionEditor.allConditionQuestions.length,
      3,
      "We have 3 questions here"
    );
    expect.equal(logic.editableItem.actions.length, 1, "There is one action");
    var action = logic.editableItem.actions[0];
    action.logicType = logic.getTypeByName("question_visibility");
    var itemSelector = action.itemSelector;
    expect.equal(
      itemSelector.koElements().length,
      3,
      "There are three questions"
    );
    itemSelector.updateItems();
    expect.equal(
      itemSelector.koElements()[0].koDisabled(),
      true,
      "q1 is disabled"
    );
    expect.equal(
      itemSelector.koElements()[1].koDisabled(),
      true,
      "q2 is disabled"
    );
    expect.equal(
      itemSelector.koElements()[2].koDisabled(),
      false,
      "q3 is enabled"
    );
    itemSelector.koValue("q3");
    logic.expressionEditor.koValue("{q1} = 2");
    expect.equal(action.element["name"], "q3", "Question set correctly");
    expect.equal(logic.saveEditableItem(), true, "Save correctly");
    var q3 = <Survey.Question>survey.getQuestionByName("q3");
    expect.equal(q3.visibleIf, "{q1} = 2");
    expect.equal(logic.items.length, 3, "There are 3 items now");
  });
  test("Edit existing item", () => {
    var survey = new SurveyModel();
    var logic = new SurveyLogic(survey);
    logic.addNew();
    expect.equal(logic.mode, "new", "There is no items");
    survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1", visibleIf: "{q3}=1" },
        { type: "text", name: "q2", visibleIf: "{q3} =1" },
        { type: "text", name: "q3" },
      ],
    });
    logic = new SurveyLogic(survey);
    expect.equal(logic.mode, "view", "There are items");
    expect.equal(logic.items.length, 1, "There is one item");
    expect.equal(logic.items[0].actions.length, 2, "The item has two actions");
    expect.equal(
      logic.items[0].actions[0].element["name"],
      "q1",
      "Element in the first action set correctly"
    );
    logic.editItem(logic.items[0]);
    expect.ok(logic.editableItem, "Editable item is set");
    expect.equal(
      logic.expressionEditor.koValue(),
      "{q3}=1",
      "Expression is set for editing"
    );
  });
  test("Use SurveyItemSelector for editing", () => {
    var survey = new SurveyModel();
    var logic = new SurveyLogic(survey);
    logic.addNew();
    expect.equal(logic.mode, "new", "There is no items");
    survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1", visibleIf: "{q3}=1" },
        { type: "text", name: "q2", visibleIf: "{q3}=1" },
        { type: "text", name: "q3", visibleIf: "{q2}=1" },
        { type: "text", name: "q4" },
      ],
    });
    logic = new SurveyLogic(survey);
    expect.equal(logic.mode, "view", "There are items");
    expect.equal(logic.items.length, 2, "There are two items");
    logic.editItem(logic.items[0]);
    var itemSelector = logic.editableItem.actions[0].itemSelector;
    itemSelector.updateItems();
    expect.ok(itemSelector, "itemSelector has been created");
    expect.equal(
      itemSelector.koElements().length,
      4,
      "All questions are available, op0"
    );
    expect.equal(
      itemSelector.koElements()[1].koDisabled(),
      true,
      "The q2 is disabled, op0"
    );
    expect.equal(
      itemSelector.koElements()[2].koDisabled(),
      true,
      "The q3 is disabled, op0"
    );
    logic.addNewAction;
    var action = logic.addAction(logic.getTypeByName("question_visibility"));
    action.itemSelector.koValue("q4");
    expect.equal(action.element["name"], "q4", "Eleement set correctly");
    logic.saveEditableItem();
    logic.mode = "view";
    logic.editItem(logic.items[1]);
    itemSelector = logic.editableItem.actions[0].itemSelector;
    itemSelector.updateItems();
    expect.equal(
      itemSelector.koElements().length,
      4,
      "Just one question is available, op0"
    );
    expect.equal(
      itemSelector.koElements()[0].koDisabled(),
      true,
      "The q1 is disabled"
    );
  });
  test("Remove same actions on save", () => {
    var survey = new SurveyModel();
    var logic = new SurveyLogic(survey);
    logic.addNew();
    expect.equal(logic.mode, "new", "There is no items");
    survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1", visibleIf: "{q3}=1" },
        { type: "text", name: "q2" },
      ],
    });
    logic = new SurveyLogic(survey);
    logic.editItem(logic.items[0]);
    var lt = logic.getTypeByName("question_visibility");
    logic.addAction(lt, <Survey.Question>survey.getQuestionByName("q1"));
    logic.addAction(lt, <Survey.Question>survey.getQuestionByName("q2"));
    logic.addAction(lt, <Survey.Question>survey.getQuestionByName("q2"));
    expect.equal(logic.editableItem.actions.length, 4, "There are 4 actions");
    logic.saveEditableItem();
    expect.equal(
      logic.editableItem.actions.length,
      2,
      "There are 2 actions left"
    );
  });
  test("Remove existing action", () => {
    var survey = new SurveyModel();
    var logic = new SurveyLogic(survey);
    logic.addNew();
    expect.equal(logic.mode, "new", "There is no items");
    survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1", visibleIf: "{q3}=1" },
        { type: "text", name: "q2", visibleIf: "{q3}=1" },
      ],
    });
    logic = new SurveyLogic(survey);
    logic.editItem(logic.items[0]);
    logic.editableItem.removeAction(logic.items[0].actions[1]);
    logic.saveEditableItem();
    expect.equal(
      (<Survey.Question>survey.getQuestionByName("q2")).visibleIf,
      "",
      "Remove the visibleIf"
    );
  });
  test("Remove existing item", () => {
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1", visibleIf: "{q3}=1" },
        { type: "text", name: "q2", visibleIf: "{q3}=1" },
      ],
    });
    var logic = new SurveyLogic(survey);
    logic.removeItem(logic.items[0]);
    expect.equal(logic.items.length, 0, "There is no more items");
    expect.equal(
      (<Survey.Question>survey.getQuestionByName("q1")).visibleIf,
      "",
      "Remove the visibleIf from q1"
    );
    expect.equal(
      (<Survey.Question>survey.getQuestionByName("q2")).visibleIf,
      "",
      "Remove the visibleIf from q2"
    );
  });
  
  test("Rename the name", () => {
    var survey = new SurveyModel({
      pages: [
        {
          name: "page1",
          visibleIf: "{q2} != 2",
          elements: [{ type: "text", name: "q1", enableIf: "{q2} > 2" }],
        },
        {
          name: "page2",
          visibleIf: "{Q1} != 1 and {q1} < 1",
          elements: [{ type: "text", name: "q2", requiredIf: "{q1} < 1" }],
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
                    { type: "expressionvalidator", expression: "{q1} > 1" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "page4",
          elements: [
            { type: "expression", name: "q4", expression: "{q1} + {q2}" },
          ],
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
                  totalExpression: "{q1} + {q2}",
                },
              ],
            },
          ],
        },
        {
          name: "page6",
          elements: [
            {
              type: "matrixdropdown",
              name: "q6",
              rowsVisibleIf: "{item} = {q1}",
            },
            {
              type: "matrix",
              name: "q7",
              rowsVisibleIf: "{item} = {q1}",
              columnsVisibleIf: "{item} = {q2}",
            },
          ],
        },
        {
          name: "page7",
          elements: [
            {
              type: "radiogroup",
              name: "q8",
              choicesVisibleIf: "{item} = {q1}",
              choicesEnableIf: "{item} = {q2}",
              choices: [
                { value: 1, visibleIf: "{q1} = 1", enableIf: "{q2} = 2" },
              ],
            },
          ],
        },
      ],
      triggers: [
        {
          type: "runexpression",
          expression: "{q1} = 1",
          runExpression: "{q2} + 1",
        },
        {
          type: "complete",
          expression: "{q1} = 1",
        },
        {
          type: "copyvalue",
          expression: "{q1} = 1",
          setToName: "q1",
          fromName: "q2",
        },
      ],
      completedHtmlOnCondition: [
        {
          expression: "{q1} = 1",
          html: "text",
        },
      ],
      calculatedValues: [
        {
          name: "var1",
          expression: "{q1} = 1",
        },
      ],
    });
    var logic = new SurveyLogic(survey);
    var q1 = <Survey.Question>survey.getQuestionByName("q1");
    var q2 = <Survey.Question>survey.getQuestionByName("q2");
    var q3 = <Survey.Question>survey.getQuestionByName("q3");
    var validator = <Survey.ExpressionValidator>q3.validators[0];
    var panel1 = <Survey.Panel>survey.getPanelByName("panel1");
    var q4 = <Survey.QuestionExpression>survey.getQuestionByName("q4");
    var q5 = <Survey.QuestionMatrixDropdown>survey.getQuestionByName("q5");
    var q6 = <Survey.QuestionMatrixDropdown>survey.getQuestionByName("q6");
    var q7 = <Survey.QuestionMatrix>survey.getQuestionByName("q7");
    var q8 = <Survey.QuestionRadiogroup>survey.getQuestionByName("q8");
    var trigger1 = <Survey.SurveyTriggerRunExpression>survey.triggers[0];
    var trigger2 = <Survey.SurveyTriggerComplete>survey.triggers[1];
    var trigger3 = <Survey.SurveyTriggerCopyValue>survey.triggers[2];
    var q5col1 = q5.columns[0];
    logic.renameQuestion("Q1", "question1");
    logic.renameQuestion("q2", "question2");
    expect.equal(
      survey.pages[0].visibleIf,
      "{question2} != 2",
      "Rename q1: page1.visibleIf"
    );
    expect.equal(
      survey.pages[1].visibleIf,
      "{question1} != 1 and {question1} < 1",
      "Rename q2: page1.visibleIf"
    );
    expect.equal(q1.enableIf, "{question2} > 2", "Rename q2: q1.enableIf");
    expect.equal(q2.requiredIf, "{question1} < 1", "Rename q1: q2.requiredIf");
  
    expect.equal(
      panel1.visibleIf,
      "{question1} = 1",
      "Rename panel1: panel1.visibleIf"
    );
    expect.equal(
      panel1.enableIf,
      "{question2} = 2",
      "Rename panel1: panel1.enableIf"
    );
    expect.equal(
      q4.expression,
      "{question1} + {question2}",
      "Rename q4(expression): q4.expression"
    );
    expect.equal(
      q5col1.visibleIf,
      "{question1} = 1",
      "Rename q1: q5_column1.visibleIf"
    );
    expect.equal(
      q5col1.enableIf,
      "{question2} = 2",
      "Rename q2: q5_column1.enableIf"
    );
    expect.equal(
      q5col1.requiredIf,
      "{question1} = 1",
      "Rename q1: q5_column1.requiredIf"
    );
    expect.equal(
      q5col1.totalExpression,
      "{question1} + {question2}",
      "Rename q1 and q2: q5_column1.totalExpression"
    );
    expect.equal(
      trigger1.expression,
      "{question1} = 1",
      "Rename q1: trigger.expression"
    );
    expect.equal(
      trigger1.runExpression,
      "{question2} + 1",
      "Rename q2: trigger.runExpression"
    );
    expect.equal(
      trigger2.expression,
      "{question1} = 1",
      "Rename q1: trigger2.expression"
    );
    expect.equal(
      trigger3.expression,
      "{question1} = 1",
      "Rename q1: trigger3.expression"
    );
    expect.equal(
      trigger3.setToName,
      "question1",
      "Rename q1: trigger3.setToName"
    );
    expect.equal(trigger3.fromName, "question2", "Rename q2: trigger3.fromName");
    expect.equal(
      validator.expression,
      "{question1} > 1",
      "Rename q1: validator.expression"
    );
    expect.equal(
      q6.rowsVisibleIf,
      "{item} = {question1}",
      "Rename q1: matrixdropdown.rowsVisibleIf"
    );
    expect.equal(
      q7.rowsVisibleIf,
      "{item} = {question1}",
      "Rename q1: matrix.rowsVisibleIf"
    );
    expect.equal(
      q7.columnsVisibleIf,
      "{item} = {question2}",
      "Rename q2: matrix.columnsVisibleIf"
    );
    expect.equal(
      q8.choicesVisibleIf,
      "{item} = {question1}",
      "Rename q1: radiogroup.choicesVisibleIf"
    );
    expect.equal(
      q8.choicesEnableIf,
      "{item} = {question2}",
      "Rename q2: radiogroup.choicesVisibleIf"
    );
    expect.equal(
      q8.choices[0].visibleIf,
      "{question1} = 1",
      "Rename q1: radiogroup.choices[0].visibleIf"
    );
    expect.equal(
      q8.choices[0].enableIf,
      "{question2} = 2",
      "Rename q2: radiogroup.choices[0].enableIf"
    );
    expect.equal(
      survey.completedHtmlOnCondition[0].expression,
      "{question1} = 1",
      "Rename q1: survey.completedHtmlOnCondition[0].expression"
    );
    expect.equal(
      survey.calculatedValues.length,
      1,
      "There is one calculated value"
    );
    expect.equal(
      survey.calculatedValues[0].expression,
      "{question1} = 1",
      "Rename q1: survey.calculatedValues[0].expression"
    );
  });
  
  test("Delete the question", () => {
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1", visibleIf: "{q3} > 2" },
        {
          type: "text",
          name: "q2",
          visibleIf: "{q1} = 1 and {q3} < 2 or {q1} = 2",
        },
        { type: "text", name: "q3" },
      ],
    });
    var q1 = survey.getQuestionByName("q1");
    var q2 = survey.getQuestionByName("q2");
    var q3 = survey.getQuestionByName("q3");
    var logic = new SurveyLogic(survey);
    q3.delete();
    logic.removeQuestion(q3.name);
    expect.equal(q1.visibleIf, "", "Visible If is empty");
    expect.equal(
      q2.visibleIf,
      "(({q1} == 1) or ({q1} == 2))",
      "Visible If remove {q3}"
    );
  });
  
  test("Add new item with two triggers", () => {
    var survey = new SurveyModel({
      elements: [{ type: "text", name: "q1" }],
    });
    var logic = new SurveyLogic(survey);
    logic.addNew();
    expect.equal(logic.mode, "new", "There is no items");
    expect.ok(logic.editableItem, "Editable item is created");
    expect.ok(logic.expressionEditor, "expression editor is created");
    expect.equal(logic.expressionEditor.koValue(), "", "the expression is empty");
    var lt = logic.getTypeByName("trigger_complete");
    var action = logic.editableItem.actions[0];
    action.logicType = lt;
    expect.equal(lt.visible, true, "Trigger logic type is visible");
    expect.equal(
      logic.editableItem.actions.length,
      1,
      "There is one action in new item"
    );
    logic.removeAction(action);
    expect.equal(
      logic.editableItem.actions.length,
      1,
      "We are removing action and creatin a new one"
    );
    action = logic.editableItem.actions[0];
    expect.notOk(action.logicType, "There is no logic type");
    expect.equal(lt.visible, true, "Trigger logic type is visible again");
    action.logicType = lt;
    logic.expressionEditor.koValue("{q1} = 2");
    expect.equal(survey.triggers.length, 0, "There is no triggers yet");
    logic.saveEditableItem();
    expect.equal(survey.triggers.length, 1, "There is one trigger now");
    expect.equal(
      survey.triggers[0].getType(),
      "completetrigger",
      "It is a complete trigger"
    );
    expect.equal(
      survey.triggers[0].expression,
      "{q1} = 2",
      "Complete trigger has the correct expression property"
    );
  });
  
  test("Edit triggers via trigger editor", () => {
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1", title: "Question 1" },
        { type: "text", name: "q2", title: "Question 2" },
        { type: "text", name: "q3", title: "Question 3" },
      ],
      triggers: [
        {
          type: "runexpression",
          expression: "{q1} = 1",
          runExpression: "{q2} + 1",
          setToName: "q2",
        },
      ],
    });
    var options = new EditorOptionsTests();
    options.showTitlesInExpressions = true;
    var logic = new SurveyLogic(survey, options);
    expect.equal(logic.items.length, 1, "There is one item");
    logic.editItem(logic.items[0]);
    expect.ok(logic.editableItem, "Editable item is created");
    expect.equal(
      logic.expressionEditor.koValue(),
      "{q1} = 1",
      "the expression set correctly"
    );
    expect.equal(logic.editableItem.actions.length, 1, "There is one action");
    var action = logic.editableItem.actions[0];
    expect.ok(action.templateObject, "Template object is created");
    logic.expressionEditor.koValue("{q1} = 10");
    var triggerEditor = <SurveyElementEditorContentModel>action.templateObject;
    expect.equal(
      triggerEditor.getPropertyEditorByName("expression").koVisible(),
      false,
      "Do not show expression editor here"
    );
    triggerEditor.getPropertyEditorByName("setToName").editor.koValue("q3");
    logic.saveEditableItem();
    expect.equal(
      logic.items[0].actions[0].text,
      "Run expression: '{Question 2} + 1' and set its result into question: {Question 3}",
      "use showTitlesInExpressions option"
    );
    expect.equal(
      survey.triggers[0]["setToName"],
      "q3",
      "Trigger property editor works correctly, setToName"
    );
    expect.equal(
      survey.triggers[0].expression,
      "{q1} = 10",
      "Trigger property editor works correctly, expression"
    );
  });
  
  test("Edit condition complete via its editor", () => {
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1", title: "Question 1" },
        { type: "text", name: "q2" },
        { type: "text", name: "q3" },
      ],
    });
    var logic = new SurveyLogic(survey);
    logic.addNew();
    var action = logic.editableItem.actions[0];
    action.logicType = logic.getTypeByName("completedHtmlOnCondition");
    action.templateObject.koValue("Some text");
    logic.expressionEditor.koValue("{q1} = 10");
    logic.saveEditableItem();
    expect.equal(survey.completedHtmlOnCondition.length, 1, "There is one item");
    expect.equal(
      survey.completedHtmlOnCondition[0].expression,
      "{q1} = 10",
      "Expression set correctly"
    );
    expect.equal(
      survey.completedHtmlOnCondition[0].html,
      "Some text",
      "html set correctly"
    );
    logic.editItem(logic.items[0]);
    expect.equal(logic.items[0].actions.length, 1, "There is one action here");
    logic.expressionEditor.koValue(logic.expressionEditor.koValue() + "0");
    action.templateObject.koValue(action.templateObject.koValue() + " 2");
    logic.saveEditableItem();
    expect.equal(
      survey.completedHtmlOnCondition.length,
      1,
      "There is still one item"
    );
    expect.equal(
      survey.completedHtmlOnCondition[0].expression,
      "{q1} = 100",
      "Expression is changed correctly"
    );
    expect.equal(
      survey.completedHtmlOnCondition[0].html,
      "Some text 2",
      "html is changed correctly"
    );
  });
  test("Use survey creator options", () => {
    var options = new EditorOptionsTests();
    options.showTitlesInExpressions = true;
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1", title: "Question 1" },
        { type: "text", name: "q2", title: "Question 2" },
      ],
    });
    var logic = new SurveyLogic(survey, options);
    logic.addNew();
    var action = logic.editableItem.actions[0];
    action.logicType = logic.getTypeByName("question_visibility");
    expect.equal(
      logic.expressionEditor.options.showTitlesInExpressions,
      true,
      "Use correct options in expression editor"
    );
    expect.equal(
      action.itemSelector.koElements()[0].text,
      "Question 1",
      "Use showTitlesInExpression"
    );
  });
  test("Disable editing for readOnly", () => {
    var options = new EditorOptionsTests();
    options.readOnly = true;
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2" },
      ],
    });
    var logic = new SurveyLogic(survey, options);
    expect.equal(logic.mode, "view", "Can't insert, it is readOnly");
    expect.equal(logic.koReadOnly(), true, "It is readOnly");
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
                  name: "q5",
                },
              ],
            },
          ],
        },
      ],
      triggers: [
        {
          type: "complete",
          expression: "{q1} = 1",
        },
        {
          type: "skip",
          expression: "{q1} = 1",
          gotoName: "q2",
        },
        {
          type: "runexpression",
          expression: "{q1} = 1",
          runExpression: "{q2} + 1",
          setToName: "q3",
        },
        {
          type: "copyvalue",
          expression: "{q1} = 1",
          setToName: "q1",
          fromName: "q2",
        },
        {
          type: "setvalue",
          expression: "{q1} = 1",
          setToName: "q2",
          setValue: "q2Value",
        },
      ],
      completedHtmlOnCondition: [
        {
          expression: "{q1} = 1",
          html: "text",
        },
      ],
    });
    var logic = new SurveyLogic(survey);
    expect.equal(logic.items.length, 1, "We have one item");
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
      "completedHtmlOnCondition",
    ];
    expect.equal(
      ops.length,
      logicTypes.length,
      "There are 11 actions: 1 page + 2 panels + 3 questions + 5 triggers + 1 html condition"
    );
    var findOp = function (name: string): SurveyLogicAction {
      for (var i = 0; i < ops.length; i++) {
        if (ops[i].logicType.name == name) return ops[i];
      }
      return ops[i];
    };
    for (var i = 0; i < logicTypes.length; i++) {
      expect.ok(findOp(logicTypes[i]), logicTypes[i] + " is here.");
    }
    expect.equal(
      logic.items[0].expressionText,
      "When expression: '{q1} == 1' returns true:",
      "Item expressionText"
    );
    expect.equal(findOp("page_visibility").text, "Make page {page1} visible");
    expect.equal(findOp("panel_visibility").text, "Make panel {panel1} visible");
    expect.equal(findOp("panel_enable").text, "Make panel {panel1} enable");
    expect.equal(
      findOp("question_visibility").text,
      "Make question {q2} visible"
    );
    expect.equal(findOp("question_enable").text, "Make question {q3} enable");
    expect.equal(findOp("question_require").text, "Make question {q4} required");
    expect.equal(findOp("trigger_complete").text, "Survey becomes completed");
    expect.equal(
      findOp("trigger_setvalue").text,
      "Set into question: {q2} value q2Value"
    );
    expect.equal(
      findOp("trigger_copyvalue").text,
      "Copy into question: {q1} value from question {q2}"
    );
    expect.equal(findOp("trigger_skip").text, "Survey skip to the question {q2}");
    expect.equal(
      findOp("trigger_runExpression").text,
      "Run expression: '{q2} + 1' and set its result into question: {q3}"
    );
    expect.equal(
      findOp("completedHtmlOnCondition").text,
      "Show custom text for the 'Thank you page'."
    );
  
    expect.equal(findOp("page_visibility").name, "Page visibility");
  });
  
  test("Logic editing errors", () => {
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2" },
      ],
    });
    var logic = new SurveyLogic(survey);
    logic.addNew();
    expect.equal(logic.saveEditableItem(), false, "Expression is empty");
    expect.equal(
      logic.koErrorText(),
      "The logic expression is empty or invalid. Please correct it.",
      "Check 1"
    );
    logic.expressionEditor.koValue("ww++++2");
    expect.equal(logic.saveEditableItem(), false, "Expression is invalid");
    expect.equal(
      logic.koErrorText(),
      "The logic expression is empty or invalid. Please correct it.",
      "Check 2"
    );
    logic.expressionEditor.koValue("{q1} = 1");
    expect.equal(logic.saveEditableItem(), false, "There is no actions");
    expect.ok(logic.koErrorText());
    var action = logic.editableItem.actions[0];
    action.logicType = logic.getTypeByName("question_visibility");
    action.itemSelector.koValue("q1");
    action.itemSelector.koValue("");
    expect.equal(logic.saveEditableItem(), false, "Action is incorret");
    expect.equal(logic.koErrorText(), "Please, fix problems in your action(s).");
    action.itemSelector.koValue("q2");
    expect.equal(logic.saveEditableItem(), true, "Action is corret now");
    action = logic.addNewAction();
    action.logicType = logic.getTypeByName("trigger_setvalue");
    expect.equal(logic.editableItem.actions.length, 2, "There two actions");
    expect.equal(action.hasError(), true, "setToName is empty");
    var triggerEditor = <SurveyElementEditorContentModel>action.templateObject;
    triggerEditor.getPropertyEditorByName("setToName").editor.koValue("q2");
    triggerEditor.getPropertyEditorByName("setValue").editor.koValue("newValue");
    expect.equal(action.hasError(), false, "setToName  is correct");
    expect.equal(
      logic.editableItem.actions.length,
      2,
      "trigger set correctly now"
    );
    expect.equal(logic.saveEditableItem(), true, "setToName is correct");
  });
  
  test("Return without saving", () => {
    var survey = new SurveyModel({
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
    });
    var logic = new SurveyLogic(survey);
    var item = logic.items[0];
    item.edit();
    logic.expressionEditor.koTextValue("{q1} = 2");
    var triggerEditor = <SurveyElementEditorContentModel>(
      item.actions[1].templateObject
    );
    triggerEditor.getPropertyEditorByName("gotoName").editor.koValue("q3");
    logic.addAction(logic.getTypeByName("question_visibility"));
    expect.equal(item.actions.length, 3, "There three actions");
    expect.equal(logic.saveEditableItem(), false, "Can't save");
    expect.ok(logic.koErrorText(), "There is an error in the text");
    logic.koShowView();
    item = logic.items[0];
    expect.equal(item.actions.length, 2, "The last action was not saved");
    expect.equal(item.expression, "{q1} = 1", "Item expression is not changed");
    expect.equal(
      item.actions[1].element["gotoName"],
      "q2",
      "action gotoName is not changed"
    );
    expect.notOk(logic.koErrorText(), "The error is cleared");
  });
  
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
    expect.equal(modifiedCounter, 0, "Has not changed yet");
    logic.saveEditableItem();
    expect.equal(modifiedCounter, 1, "It was changed one time");
    logic.removeItem(logic.items[0]);
    expect.equal(modifiedCounter, 2, "It was changed two times");
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
      expect.equal(
        logic.expressionEditor.koShowExpressionHeader(),
        false,
        "Do not show expression header"
      );
    }
  );
  
  test("Add existing visible Items", () => {
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1", title: "My Question 1" },
        { type: "text", name: "q2", visibleIf: "{q1}=1" },
        { type: "text", name: "q3", visibleIf: "{q1}=1" },
      ],
    });
    var options = new EditorOptionsTests();
    options.showTitlesInExpressions = true;
    var logic = new SurveyLogic(survey, options);
    expect.equal(logic.items.length, 1, "There one item");
    expect.equal(
      logic.items[0].expressionText,
      "When expression: '{My Question 1} == 1' returns true:"
    );
  });
  
  test("Allow logic type to be null and change it", () => {
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2", visibleIf: "{q1}=1" },
        { type: "text", name: "q3" },
      ],
    });
    var options = new EditorOptionsTests();
    var logic = new SurveyLogic(survey, options);
    var item = logic.items[0];
    item.edit();
    expect.ok(logic.editableItem, "Editable item is created");
    var action = logic.editableItem.actions[0];
    expect.equal(action.logicType.name, "question_visibility");
    action.logicType = null;
    expect.notOk(action.logicType, "Logic type is empty");
    expect.notOk(logic.saveEditableItem(), "Can't save there is no logic type");
    expect.ok(action.koErrorText(), "There is an error text");
    action.logicType = logic.getTypeByName("page_visibility");
    expect.notOk(action.koErrorText(), "There is no error text");
    expect.notOk(logic.saveEditableItem(), "Action is not set");
    action.itemSelector.element = survey.currentPage;
    expect.ok(logic.saveEditableItem(), "Action is good");
  });
  test("One action exists in new item", () => {
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2" },
        { type: "text", name: "q3" },
      ],
    });
    var options = new EditorOptionsTests();
    var logic = new SurveyLogic(survey, options);
    logic.addNew();
    var item = logic.editableItem;
    logic.expressionEditor.koValue("{q1} = 1");
    expect.ok(item, "Editable item is created");
    expect.equal(item.actions.length, 1, "There is one action in it");
    var action = item.actions[0];
    expect.notOk(action.logicType, "logic type is emtpy");
    expect.notOk(logic.saveEditableItem(), "Can't save there is no logic type");
    expect.ok(action.koErrorText(), "There is an error text");
    action.logicType = logic.getTypeByName("page_visibility");
    expect.notOk(action.koErrorText(), "There is no error text");
    expect.notOk(logic.saveEditableItem(), "Action is not set");
    action.itemSelector.element = survey.currentPage;
    expect.ok(logic.saveEditableItem(), "Action is good");
  });
  test("Limit the number of action types.", () => {
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2" },
        { type: "text", name: "q3" },
      ],
    });
    var options = new EditorOptionsTests();
    SurveyLogic.visibleActions = [
      "question_visibility",
      "question_require",
      "trigger_skip",
      "trigger_complete",
    ];
    var logic = new SurveyLogic(survey, options);
    expect.equal(
      logic.logicTypes.length,
      4,
      "There are four visible action types"
    );
    SurveyLogic.visibleActions = [];
    logic = new SurveyLogic(survey, options);
    expect.notEqual(
      logic.logicTypes.length,
      4,
      "There are more than four visible action types"
    );
  });
  
  test("Logic onLogicItemSaved event", () => {
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2" },
      ],
    });
    var logic = new SurveyLogic(survey);
    var callCount = 0;
    logic.onLogicItemSaved.add((_, options) => {
      callCount++;
    });
    logic.addNew();
    logic.expressionEditor.koValue("{q1} = 1");
    var action = logic.editableItem.actions[0];
    action.logicType = logic.getTypeByName("question_visibility");
    action.itemSelector.koValue("q2");
    expect.equal(callCount, 0, "Event has not been called yet");
    logic.saveEditableItem();
    expect.equal(callCount, 1, "Event has been called");
  });
  test("Logic onLogicItemValidation event", () => {
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2" },
      ],
    });
    var logic = new SurveyLogic(survey);
    var callCount = 0;
    logic.onLogicItemValidation.add((_, options) => {
      expect.equal(
        options.usedNamesInExpression.length,
        1,
        "There is one item in usedNames"
      );
      expect.equal(options.usedNamesInExpression[0], "q1", "usedNames[0] = 'q1'");
      callCount++;
      var actions = options.item.actions;
      expect.equal(actions.length, 1, "There is one action");
      expect.equal(
        actions[0].logicTypeName,
        "question_visibility",
        "It is visibility action"
      );
      for (var i = 0; i < options.item.actions.length; i++) {
        let action = options.item.actions[i];
        if (action.logicTypeName === "question_visibility" && !!action.element) {
          if (options.usedNamesInExpression.indexOf(action.element.name) > -1) {
            action.errorText = "Please use another question";
            options.error = "There is an error in an action";
          }
        }
      }
    });
    logic.addNew();
    logic.expressionEditor.koValue("{q1} = 1");
    var action = logic.editableItem.actions[0];
    action.logicType = logic.getTypeByName("question_visibility");
    action.itemSelector.koValue("q1");
    expect.equal(callCount, 0, "Event has not been called yet");
    logic.saveEditableItem();
    expect.equal(callCount, 1, "Event has been called");
    expect.equal(logic.items.length, 0, "We do not save");
    action.itemSelector.koValue("q2");
    logic.saveEditableItem();
    expect.equal(callCount, 2, "Event has been called one mor3e time");
    expect.equal(logic.items.length, 1, "We save it now, no errors");
  });
  
  test(
    "Logic onLogicItemRemoving/onLogicItemRemoved events",
    () => {
      var survey = new SurveyModel({
        elements: [
          { type: "text", name: "q1", visibleIf: "{q3}=1" },
          { type: "text", name: "q2", visibleIf: "{q3}=1" },
        ],
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
      expect.equal(removingCallCount, 0, "Event has not been called yet");
      expect.equal(removedCallCount, 0, "Event has not been called yet");
  
      logic.removeItem(logic.items[0]);
      expect.equal(logic.items.length, 1, "There is no more items");
      expect.equal(removingCallCount, 1, "Event has been called");
      expect.equal(removedCallCount, 0, "Event has been called");
  
      logic.removeItem(logic.items[0]);
      expect.equal(logic.items.length, 0, "There is no more items");
      expect.equal(removingCallCount, 2, "Event has been called");
      expect.equal(removedCallCount, 1, "Event has been called");
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
      expect.equal(logic.items.length, 1, "We have one item here");
    }
  );
  test("Hide/show logic types in actions", () => {
    var findLogicTypeInAction = function (
      action: SurveyLogicAction,
      lt: SurveyLogicType
    ): any {
      for (var i = 0; action.koLogicTypes().length; i++) {
        if (action.koLogicTypes()[i].logicType == lt)
          return action.koLogicTypes()[i];
      }
      return null;
    };
    var survey = new SurveyModel({
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2" },
        { type: "text", name: "q3" },
      ],
    });
    var logic = new SurveyLogic(survey);
    logic.addNew();
    var action1 = logic.editableItem.actions[0];
    var lt1Skip = findLogicTypeInAction(
      action1,
      logic.getTypeByName("trigger_skip")
    );
    var lt1Complete = findLogicTypeInAction(
      action1,
      logic.getTypeByName("trigger_complete")
    );
  
    var action2 = logic.addNewAction();
    var lt2Skip = findLogicTypeInAction(
      action2,
      logic.getTypeByName("trigger_skip")
    );
    var lt2Complete = findLogicTypeInAction(
      action2,
      logic.getTypeByName("trigger_complete")
    );
    expect.ok(lt1Skip, "lt1Skip is here");
    expect.equal(lt1Skip.koVisible(), true, "initial, lt1Skip");
    expect.equal(lt1Complete.koVisible(), true, "initial, lt1Complete");
    expect.equal(lt2Skip.koVisible(), true, "initial, lt2Skip");
    expect.equal(lt2Complete.koVisible(), true, "initial, lt2Complete");
  
    action1.logicType = logic.getTypeByName("trigger_complete");
    expect.equal(lt1Skip.koVisible(), true, "action1 set complete, lt1Skip");
    expect.equal(
      lt1Complete.koVisible(),
      true,
      "action1 set complete, lt1Complete"
    );
    expect.equal(lt2Skip.koVisible(), true, "action1 set complete, lt2Skip");
    expect.equal(
      lt2Complete.koVisible(),
      false,
      "action1 set complete, lt2Complete"
    );
  
    action2.logicType = logic.getTypeByName("trigger_skip");
    expect.equal(lt1Skip.koVisible(), false, "action2 set skip, lt1Skip");
    expect.equal(lt1Complete.koVisible(), true, "action2 set skip, lt1Complete");
    expect.equal(lt2Skip.koVisible(), true, "action2 set skip, lt2Skip");
    expect.equal(lt2Complete.koVisible(), false, "action2 set skip, lt2Complete");
  
    action1.logicType = null;
    expect.equal(lt1Skip.koVisible(), false, "action1 set null, lt1Skip");
    expect.equal(lt1Complete.koVisible(), true, "action1 set null, lt1Complete");
    expect.equal(lt2Skip.koVisible(), true, "action1 set null, lt2Skip");
    expect.equal(lt2Complete.koVisible(), true, "action1 set null, lt2Complete");
  
    var action3 = logic.addNewAction();
    action3.logicType = logic.getTypeByName("trigger_complete");
    expect.equal(lt1Skip.koVisible(), false, "action3 set complete, lt1Skip");
    expect.equal(
      lt1Complete.koVisible(),
      false,
      "action3 set complete, lt1Complete"
    );
    expect.equal(lt2Skip.koVisible(), true, "action3 set complete, lt2Skip");
    expect.equal(
      lt2Complete.koVisible(),
      false,
      "action3 set complete, lt2Complete"
    );
  
    logic.removeAction(action3);
    expect.equal(lt1Skip.koVisible(), false, "action3 is removed, lt1Skip");
    expect.equal(
      lt1Complete.koVisible(),
      true,
      "action3 is removed, lt1Complete"
    );
    expect.equal(lt2Skip.koVisible(), true, "action3 is removed, lt2Skip");
    expect.equal(
      lt2Complete.koVisible(),
      true,
      "action3 is removed, lt2Complete"
    );
  });
  test("Logic addNewText", () => {
    var logic = new SurveyLogic(new SurveyModel());
    expect.equal(logic.addNewText, "Add New", "Get default value");
    (<any>defaultStrings).ed.lg["addNewItem"] = "Add New Rule";
    expect.equal(
      logic.addNewText,
      "Add New Rule",
      "Get value from logic strings"
    );
    (<any>defaultStrings).ed.lg["addNewItem"] = "";
    expect.equal(logic.addNewText, "Add New", "Get default value again");
  });
  */
