import type { Sample } from "./types";

export const sample: Sample = {
  id: "dynamic-matrix",
  name: "Dynamic matrix",
  description: "Rows a respondent adds and removes, cells addressed by index and by row name. " +
    "The disabled test shows what happens at maxRowCount.",
  tags: ["addRow", "removeRow", "rowCount", "set", "cannotAddRows", "rowsAddedImplicitly"],
  expectedStatus: "passed",
  why: "The row commands read the model's own canAddRow and canRemoveRows, so the enabled tests stay " +
    "inside what the buttons allow.",
  surveyJson: {
    title: "Order",
    elements: [
      {
        type: "matrixdynamic", name: "items", title: "Items",
        rowCount: 1, minRowCount: 1, maxRowCount: 3, allowAddRows: true, allowRemoveRows: true,
        columns: [
          { cellType: "dropdown", name: "product", title: "Product", choices: ["pen", "pencil", "eraser"] },
          { cellType: "text", name: "quantity", title: "Quantity", inputType: "number" },
        ],
      },
      {
        type: "matrixdropdown", name: "ratings", title: "Rate the service",
        rows: [{ value: "speed", text: "Speed" }, { value: "quality", text: "Quality" }],
        columns: [{ cellType: "rating", name: "score", title: "Score", rateMax: 5 }],
      },
    ],
  },
  tests: {
    name: "Matrices",
    tests: [
      {
        name: "Rows are added, filled leaf by leaf and removed",
        steps: [
          { expect: { items: { rowCount: 1 } } },
          { addRow: { items: 2 } },
          { expect: { items: { rowCount: 3 } } },
          { set: { "items[0].product": "pen", "items[0].quantity": 5 } },
          { expect: { "items[0].quantity": { value: 5 } } },
          { expect: { "items[0].product": { value: "pen" } } },
          { removeRow: { items: 1 } },
          { expect: { items: { rowCount: 2 } } },
          { expect: { "items[0].quantity": { value: 5 } } },
        ],
      },
      {
        name: "A cell of a static matrix is addressed by its row name",
        steps: [
          { set: { "ratings.speed.score": 5 } },
          { expect: { "ratings.speed.score": { value: 5 } } },
          { expect: { "ratings.quality.score": { empty: true } } },
          { complete: { survey: true } },
          { expect: { survey: { state: "completed", values: { ratings: { speed: { score: 5 } } } } } },
        ],
      },
      {
        name: "Adding a row past maxRowCount is an error",
        description: "Disabled on purpose. Enable it to see cannotAddRows: the Add button is not " +
          "displayed at maxRowCount, so no respondent could press it.",
        disabled: true,
        steps: [
          { addRow: { items: 3 } },
        ],
      },
    ],
  },
};
