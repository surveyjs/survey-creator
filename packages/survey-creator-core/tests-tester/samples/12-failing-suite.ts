import type { Sample } from "./types";

// Deliberately wrong expectations. A host that never shows a failing check honestly is not usable, so
// one sample exists to be red.

export const sample: Sample = {
  id: "failing-suite",
  name: "A failing suite (on purpose)",
  description: "Three checks that do not hold: a wrong value, a wrong type, and a state that was never " +
    "reached. Read the expected-versus-actual line and the details of each.",
  tags: ["failed", "value", "state", "type coercion", "details"],
  expectedStatus: "failed",
  why: "Nothing is broken about the cases: they run to the end and report what the survey actually did.",
  surveyJson: {
    title: "Delivery",
    elements: [
      { type: "radiogroup", name: "method", title: "Delivery", choices: ["pickup", "courier"] },
      { type: "text", name: "houseNumber", title: "House number", inputType: "number" },
    ],
  },
  tests: {
    name: "Failures",
    tests: [
      {
        name: "A value that is simply wrong",
        steps: [
          { set: { method: "pickup" } },
          { expect: { method: { value: "courier" } } },
        ],
      },
      {
        name: "The right value with the wrong type",
        description: "A check never converts one type into another: \"12\" does not match 12, even " +
          "though the expression engine treats them as equal.",
        steps: [
          { set: { houseNumber: 12 } },
          { expect: { houseNumber: { value: "12" } } },
        ],
      },
      {
        name: "A state that was never reached",
        steps: [
          { set: { method: "courier" } },
          { expect: { survey: { state: "completed" } } },
        ],
      },
      {
        name: "The same suite still holds one passing test",
        steps: [
          { set: { method: "courier", houseNumber: 12 } },
          { complete: { survey: true } },
          { expect: { survey: { state: "completed", values: { method: "courier", houseNumber: 12 } } } },
        ],
      },
    ],
  },
};
