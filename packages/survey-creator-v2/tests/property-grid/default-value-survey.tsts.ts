import {
  QuestionDropdownModel,
  QuestionExpressionModel,
  QuestionMatrixDynamicModel,
  QuestionMatrixDropdownModel,
  QuestionPanelDynamicModel,
} from "survey-knockout";
import {
  DefaultValueEditor,
  DefaultMatrixRowValueEditor,
  DefaultPanelDynamicPanelValueEditor,
} from "../../src/property-grid/values-survey";

test("DefaultValueEditor, simple test", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3, 4, 5];
  question.defaultValue = 2;
  var editor = new DefaultValueEditor(question, "defaultValue");
  expect(editor.question.choices).toHaveLength(5);
  expect(editor.question.value).toEqual(2);
  editor.question.value = 4;
  editor.apply();
  expect(question.defaultValue).toEqual(4);
});
test("Edit expression as text", () => {
  var question = new QuestionExpressionModel("q1");
  var editor = new DefaultValueEditor(question, "defaultValue");
  expect(editor.question.getType()).toEqual("text");
});
test("Delete width", () => {
  var question = new QuestionExpressionModel("q1");
  question.width = "10%";
  var editor = new DefaultValueEditor(question, "defaultValue");
  expect(editor.question.width).toBeFalsy();
});
test("Edit matrix row default value", () => {
  var question = new QuestionMatrixDropdownModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  question.rows = ["row1", "row2"];
  question.defaultRowValue = { col1: 1, col2: 2 };
  var editor = new DefaultMatrixRowValueEditor(question, "defaultRowValue");
  expect(editor.question.getType()).toEqual("matrixdynamic");
  expect(editor.question.columns).toHaveLength(2);
  expect(editor.question.rowCount).toEqual(1);
  expect(editor.question.columnsLocation).toEqual("vertical");
  expect(editor.question.value).toEqual([{ col1: 1, col2: 2 }]);
  editor.question.visibleRows[0].cells[0].value = 3;
  editor.question.visibleRows[0].cells[1].value = 4;
  editor.apply();
  expect(question.defaultRowValue).toEqual({ col1: 3, col2: 4 });
});
test("Edit panel dynamic panel default value", () => {
  var question = new QuestionPanelDynamicModel("q1");
  question.template.addNewQuestion("text", "q1");
  question.template.addNewQuestion("text", "q2");
  question.defaultPanelValue = { q1: 1, q2: 2 };
  question.panelCount = 2;
  var editor = new DefaultPanelDynamicPanelValueEditor(
    question,
    "defaultPanelValue"
  );
  expect(editor.question.getType()).toEqual("paneldynamic");
  expect(editor.question.panelCount).toEqual(1);
  expect(editor.question.value).toEqual([{ q1: 1, q2: 2 }]);
  editor.question.panels[0].getQuestionByName("q1").value = 3;
  editor.question.panels[0].getQuestionByName("q2").value = 4;
  editor.apply();
  expect(question.defaultPanelValue).toEqual({ q1: 3, q2: 4 });
});
