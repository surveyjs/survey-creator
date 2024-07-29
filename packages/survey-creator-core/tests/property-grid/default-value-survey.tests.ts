import {
  QuestionDropdownModel,
  QuestionMatrixDynamicModel,
  QuestionExpressionModel,
  QuestionMatrixModel,
  QuestionMatrixDropdownModel,
  QuestionPanelDynamicModel,
  SurveyTriggerSetValue,
  SurveyModel,
} from "survey-core";
import {
  DefaultValueEditor,
  DefaultMatrixRowValueEditor,
  DefaultPanelDynamicPanelValueEditor,
  TriggerValueEditor,
} from "../../src/property-grid/values-survey";
import { CellsEditor } from "../../src/property-grid/cells-survey";

test("DefaultValueEditor, simple test", () => {
  var question = new QuestionDropdownModel("q1");
  question.choices = [1, 2, 3, 4, 5];
  question.defaultValue = 2;
  var editor = new DefaultValueEditor(question, "defaultValue");
  expect((<QuestionDropdownModel>editor.question).choices).toHaveLength(5);
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
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  question.defaultRowValue = { col1: 1, col2: 2 };
  var editor = new DefaultMatrixRowValueEditor(question, "defaultRowValue");
  const editorQuestion = <QuestionMatrixDynamicModel>editor.question;
  expect(editorQuestion.getType()).toEqual("matrixdynamic");
  expect(editorQuestion.columns).toHaveLength(2);
  expect(editorQuestion.rowCount).toEqual(1);
  expect(editorQuestion.columnsLocation).toEqual("vertical");
  expect(editorQuestion.value).toEqual([{ col1: 1, col2: 2 }]);
  editorQuestion.visibleRows[0].cells[0].value = 3;
  editorQuestion.visibleRows[0].cells[1].value = 4;
  editor.apply();
  expect(question.defaultRowValue).toEqual({ col1: 3, col2: 4 });
});
test("Edit matrix row default value and defaultValue, Bug#5663", () => {
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1");
  question.addColumn("col2");
  question.defaultValue = [{ col1: 1, col2: 2 }, { col1: 3, col2: 4 }];
  var editor = new DefaultMatrixRowValueEditor(question, "defaultRowValue");
  const editorQuestion = <QuestionMatrixDynamicModel>editor.question;
  expect(editorQuestion.defaultValue).toBeFalsy();
  expect(editorQuestion.getType()).toEqual("matrixdynamic");
  expect(editorQuestion.columns).toHaveLength(2);
  expect(editorQuestion.rowCount).toEqual(1);
  expect(editorQuestion.columnsLocation).toEqual("vertical");
  editorQuestion.visibleRows[0].cells[0].value = 5;
  editorQuestion.visibleRows[0].cells[1].value = 6;
  editor.apply();
  expect(question.defaultRowValue).toEqual({ col1: 5, col2: 6 });
});
test("Edit panel dynamic panel default value", () => {
  const question = new QuestionPanelDynamicModel("q1");
  question.template.addNewQuestion("text", "q1");
  question.template.addNewQuestion("text", "q2");
  question.defaultPanelValue = { q1: 1, q2: 2 };
  question.panelCount = 2;
  var editor = new DefaultPanelDynamicPanelValueEditor(
    question,
    "defaultPanelValue"
  );
  const editorQuestion = <QuestionPanelDynamicModel>editor.question;
  expect(editorQuestion.getType()).toEqual("paneldynamic");
  expect(editorQuestion.panelCount).toEqual(1);
  expect(editor.question.value).toEqual([{ q1: 1, q2: 2 }]);
  editorQuestion.panels[0].getQuestionByName("q1").value = 3;
  editorQuestion.panels[0].getQuestionByName("q2").value = 4;
  editor.apply();
  expect(question.defaultPanelValue).toEqual({ q1: 3, q2: 4 });
});
test("DefaultValueEditor, simple test 2", () => {
  var survey = new SurveyModel({
    elements: [
      { type: "dropdown", name: "q1", choices: [1, 2, 3, 4, 5] },
      { type: "text", name: "q2" },
    ],
    triggers: [
      {
        type: "setvalue",
        expression: "{q2} = 1",
        setToName: "q1",
        setValue: 1,
      },
    ],
  });
  var question = survey.getQuestionByName("q1");
  var trigger = <SurveyTriggerSetValue>survey.triggers[0];
  expect(trigger).toBeTruthy();
  var editor = new TriggerValueEditor(question, trigger, "setValue");
  expect((<QuestionDropdownModel>editor.question).choices).toHaveLength(5);
  expect(editor.question.value).toEqual(1);
  editor.question.value = 3;
  editor.apply();
  expect(trigger.setValue).toEqual(3);
});
test("Cells-Editor", () => {
  var survey = new SurveyModel({
    questions: [
      {
        type: "matrix",
        name: "question1",
        columns: [
          { value: "Column 1", text: "Column 1 Text" },
          "Column 2",
          "Column 3",
        ],
        rows: ["Row 1", { value: "Row 2", text: "Row 2 Text" }],
        cells: {
          default: {
            "Column 1": "eredsf",
          },
          "Row 1": {
            "Column 2": "dsfdsfds",
            "Column 1": "sdfsdfdsf",
          },
          "Row 2": {
            "Column 1": "dsfsdf",
          },
        },
      },
    ],
  });
  var matrix = <QuestionMatrixModel>survey.getQuestionByName("question1");
  var cellsEditor = new CellsEditor(matrix);
  expect(cellsEditor.editMatrix.columns).toHaveLength(3);
  expect(cellsEditor.editMatrix.rows).toHaveLength(3);
  expect(cellsEditor.editMatrix.columns[0].name).toEqual("Column 1");
  expect(cellsEditor.editMatrix.columns[0].title).toEqual("Column 1 Text");
  expect(cellsEditor.editMatrix.rows[0].value).toEqual("default");
  expect(cellsEditor.editMatrix.rows[0].text).toEqual("Default texts");
  expect(cellsEditor.editMatrix.rows[1].value).toEqual("Row 1");
  expect(cellsEditor.editMatrix.rows[2].value).toEqual("Row 2");
  expect(cellsEditor.editMatrix.rows[2].text).toEqual("Row 2 Text");
  expect(cellsEditor.editMatrix.value).toEqual(matrix.cells.getJson());
  var rows = cellsEditor.editMatrix.visibleRows;
  expect(rows[0].cells[0].value).toEqual("eredsf");
  expect(rows[1].cells[0].value).toEqual("sdfsdfdsf");
  rows[0].cells[0].value = "cell 1";
  rows[1].cells[0].value = "cell 2";
  rows[2].cells[2].value = "cell 3";
  cellsEditor.apply();
  var newValue = {
    default: {
      "Column 1": "cell 1",
    },
    "Row 1": {
      "Column 2": "dsfdsfds",
      "Column 1": "cell 2",
    },
    "Row 2": {
      "Column 1": "dsfsdf",
      "Column 3": "cell 3",
    },
  };
  expect(matrix.cells.getJson()).toEqual(newValue);
});
test("DefaultValueEditor, question title", () => {
  var question = new QuestionDropdownModel("q1");
  var editor = new DefaultValueEditor(question, "defaultValue");
  const editorQuestionJSON1 = editor["getQuestionJSON"]();
  expect(editorQuestionJSON1.name).toEqual("question");
  expect(editorQuestionJSON1.title).toEqual(question.name);
  expect(editorQuestionJSON1).toEqual({
    "name": "question",
    "storeOthersAsComment": false,
    "title": "q1",
    "type": "dropdown",
  });
  question.title = "Title";
  const editorQuestionJSON2 = editor["getQuestionJSON"]();
  expect(editorQuestionJSON1.name).toEqual("question");
  expect(editorQuestionJSON2.title).toEqual(question.title);
  expect(editorQuestionJSON2).toEqual({
    "name": "question",
    "storeOthersAsComment": false,
    "title": "Title",
    "type": "dropdown",
  });
});
test("cells-editor for columns with number values should be created ok", () => {
  var survey = new SurveyModel({
    questions: [
      {
        type: "matrix",
        name: "question1",
        columns: [
          { value: 0, text: "No" },
          { value: 1, text: "Yes" }
        ],
        rows: ["Row 1"],
      },
    ],
  });
  var matrix = <QuestionMatrixModel>survey.getQuestionByName("question1");
  try {
    var cellsEditor = new CellsEditor(matrix);
    expect(true).toBeTruthy();
  } catch(e) {
    expect(e).toBeUndefined();
  }
});
test("Clear read-only and enbleIf column properties", () => {
  var question = new QuestionMatrixDynamicModel("q1");
  question.addColumn("col1").cellType = "text";
  question.addColumn("col2").readOnly = true;
  question.addColumn("col3").enableIf = "{row.col1} = 1";
  const editor = new DefaultValueEditor(question, "defaultValue");
  const editorQuestionJSON = editor["getQuestionJSON"]();
  expect(editorQuestionJSON.columns).toEqual([{ name: "col1", cellType: "text" }, { name: "col2" }, { name: "col3" }]);
});
test("Delete random properties properties", () => {
  const survey = new SurveyModel({
    "elements": [
      {
        "type": "checkbox",
        "name": "q1",
        "choices": ["Item-1"],
        "choicesOrder": "random"
      },
      {
        "type": "checkbox",
        "name": "q2",
        "choices": ["Item-1"],
        "choicesOrder": "asc"
      }
    ]
  });
  const etalon: any = { name: "question", choices: ["Item-1"], storeOthersAsComment: false, title: "q1", type: "checkbox" };
  let question = survey.getQuestionByName("q1");
  let editor = new DefaultValueEditor(question, "defaultValue");
  let editorQuestionJSON = editor["getQuestionJSON"]();
  expect(editorQuestionJSON).toEqual(etalon);
  question = survey.getQuestionByName("q2");
  editor = new DefaultValueEditor(question, "defaultValue");
  editorQuestionJSON = editor["getQuestionJSON"]();
  etalon.choicesOrder = "asc";
  etalon.title = "q2";
  expect(editorQuestionJSON).toEqual(etalon);
});
