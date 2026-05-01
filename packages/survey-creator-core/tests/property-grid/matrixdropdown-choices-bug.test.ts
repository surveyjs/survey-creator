import {
  QuestionMatrixDropdownModel, QuestionDropdownModel
} from "survey-core";
import { CreatorTester } from "../creator-tester";
import { MatrixCellWrapperEditSurvey } from "../../src/components/matrix-cell";

// Reproduction tests for https://github.com/surveyjs/survey-creator/issues/7672
// Multi-Select Matrix: Editing column choices via inline editor duplicates choices in JSON

test("Bug #7672: Editing cell choice text when column has own choices should not duplicate", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "matrixdropdown",
        name: "q1",
        columns: [{ name: "col1", cellType: "dropdown", choices: [1, 2, 3] }],
        rows: ["row1", "row2"]
      }
    ]
  };

  const matrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q1");
  const col = matrix.columns[0];
  expect(col.choices).toHaveLength(3);

  // Open cell editor
  const cellQuestion = matrix.visibleRows[0].cells[0].question;
  const editSurvey = new MatrixCellWrapperEditSurvey(creator, cellQuestion, col);
  const editQuestion = <QuestionDropdownModel>editSurvey.question;

  // Modify choice text (not value)
  editQuestion.choices[0].text = "Modified One";
  editSurvey.apply();

  expect(col.choices).toHaveLength(3);
  expect(col.choices[0].text).toBe("Modified One");
});

test("Bug #7672: Editing cell choice text when column inherits choices from matrix should not create column-level duplicates", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "matrixdropdown",
        name: "q1",
        columns: [{ name: "col1", cellType: "dropdown" }],
        choices: [1, 2, 3, 4, 5],
        rows: ["row1", "row2"]
      }
    ]
  };

  const matrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q1");
  const col = matrix.columns[0];

  // Column should NOT have its own choices (inheriting from matrix)
  expect(col.toJSON()).not.toHaveProperty("choices");

  // Open cell editor
  const cellQuestion = matrix.visibleRows[0].cells[0].question;
  const editSurvey = new MatrixCellWrapperEditSurvey(creator, cellQuestion, col);
  const editQuestion = <QuestionDropdownModel>editSurvey.question;

  // Modify choice text (just adding text to an existing choice)
  editQuestion.choices[0].text = "Strongly Disagree";
  editSurvey.apply();

  const matrixJSON = matrix.toJSON();

  // The matrix choices should still be 5
  expect(matrix.choices).toHaveLength(5);

  // Check if any choice value appears in both matrix-level and column-level
  const matrixChoiceValues = (matrixJSON.choices || []).map((c: any) => typeof c === "object" ? c.value : c);
  const columnChoiceValues = [];
  if (matrixJSON.columns) {
    matrixJSON.columns.forEach((col: any) => {
      if (col.choices) {
        col.choices.forEach((c: any) => {
          columnChoiceValues.push(typeof c === "object" ? c.value : c);
        });
      }
    });
  }
  const duplicateValues = matrixChoiceValues.filter((v: any) => columnChoiceValues.includes(v));

  // There should be no values duplicated between matrix and column
  expect(duplicateValues).toHaveLength(0);
});

test("Bug #7672: Cell editor choices vs matrix-level choices interaction", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "matrixdropdown",
        name: "q1",
        columns: [
          { name: "col1", cellType: "dropdown" },
          { name: "col2", cellType: "dropdown" }
        ],
        choices: [
          { value: 1, text: "Strongly Disagree" },
          { value: 2, text: "Disagree" },
          { value: 3, text: "Neutral" },
          { value: 4, text: "Agree" },
          { value: 5, text: "Strongly Agree" }
        ],
        rows: ["row1"]
      }
    ]
  };

  const matrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q1");

  // Open cell editor for col1
  const cellQuestion = matrix.visibleRows[0].cells[0].question;
  const editSurvey = new MatrixCellWrapperEditSurvey(creator, cellQuestion, matrix.columns[0]);
  const editQuestion = <QuestionDropdownModel>editSurvey.question;

  // Just change text of one choice
  editQuestion.choices[2].text = "Neither Agree nor Disagree";
  editSurvey.apply();

  const matrixJSON = matrix.toJSON();

  // Count total choice entries in the JSON
  let totalChoiceEntries = 0;
  if (matrixJSON.choices) totalChoiceEntries += matrixJSON.choices.length;
  if (matrixJSON.columns) {
    matrixJSON.columns.forEach((col: any) => {
      if (col.choices) totalChoiceEntries += col.choices.length;
    });
  }

  // There should be at most 5 total choice entries (not 10)
  expect(totalChoiceEntries).toBeLessThanOrEqual(5);
});
