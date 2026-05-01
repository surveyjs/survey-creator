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

  // The matrix choices should still be 5
  expect(matrix.choices).toHaveLength(5);

  // The column should still not have its own choices after a text-only edit
  expect(col.toJSON()).not.toHaveProperty("choices");

  // The text change should have been applied to the matrix-level choices
  expect(matrix.choices[0].text).toBe("Strongly Disagree");
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

  // The text change should have been applied at the matrix level
  expect(matrix.choices[2].text).toBe("Neither Agree nor Disagree");
});

test("Bug #7672: Structural change to inherited choices creates column-level override", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [
      {
        type: "matrixdropdown",
        name: "q1",
        columns: [{ name: "col1", cellType: "dropdown" }],
        choices: [1, 2, 3],
        rows: ["row1"]
      }
    ]
  };

  const matrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q1");
  const col = matrix.columns[0];
  expect(col.toJSON()).not.toHaveProperty("choices");

  // Open cell editor and add a new choice (structural change)
  const cellQuestion = matrix.visibleRows[0].cells[0].question;
  const editSurvey = new MatrixCellWrapperEditSurvey(creator, cellQuestion, col);
  const editQuestion = <QuestionDropdownModel>editSurvey.question;

  editQuestion.choices = [1, 2, 3, 4];
  editSurvey.apply();

  // Structural change should create a column-level override
  expect(col.choices).toHaveLength(4);
  // Matrix-level choices should be unchanged
  expect(matrix.choices).toHaveLength(3);
});

test("Bug #7672: Text edit on inherited choices propagates to all inheriting columns", () => {
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
        choices: [1, 2, 3],
        rows: ["row1"]
      }
    ]
  };

  const matrix = <QuestionMatrixDropdownModel>creator.survey.getQuestionByName("q1");

  // Edit choice text via col1's cell editor
  const cellQuestion = matrix.visibleRows[0].cells[0].question;
  const editSurvey = new MatrixCellWrapperEditSurvey(creator, cellQuestion, matrix.columns[0]);
  const editQuestion = <QuestionDropdownModel>editSurvey.question;

  editQuestion.choices[0].text = "Updated Label";
  editSurvey.apply();

  // Change should be at the matrix level, visible to both columns
  expect(matrix.choices[0].text).toBe("Updated Label");
  expect(matrix.columns[0].toJSON()).not.toHaveProperty("choices");
  expect(matrix.columns[1].toJSON()).not.toHaveProperty("choices");
});
