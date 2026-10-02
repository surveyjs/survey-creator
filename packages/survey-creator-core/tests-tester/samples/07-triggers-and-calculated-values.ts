import type { Sample } from "./types";

export const sample: Sample = {
  id: "triggers-and-calculated-values",
  name: "Triggers and calculated values",
  description: "A trigger that fills a question in, a calculated value that follows two answers, and a " +
    "check whose details carry the expression that produced the state.",
  tags: ["set", "value", "values", "visible", "calculated value", "setvalue trigger"],
  expectedStatus: "passed",
  why: "The calculated value is recomputed before the next step reads it: a command is not finished " +
    "until the model it acted on has settled.",
  surveyJson: {
    title: "Subscription",
    elements: [
      { type: "radiogroup", name: "plan", title: "Plan", choices: ["basic", "pro"] },
      { type: "text", name: "seats", title: "Seats", inputType: "number" },
      { type: "text", name: "supportLevel", title: "Support level" },
      { type: "text", name: "proNote", title: "Pro note", visibleIf: "{total} > 100" },
    ],
    calculatedValues: [
      { name: "total", expression: "{seats} * iif({plan} = 'pro', 20, 10)", includeIntoResult: true },
    ],
    triggers: [
      { type: "setvalue", expression: "{plan} = 'pro'", setToName: "supportLevel", setValue: "priority" },
    ],
  },
  tests: {
    name: "Derived state",
    tests: [
      {
        name: "Choosing the pro plan fills the support level in",
        steps: [
          { expect: { supportLevel: { empty: true } } },
          { set: { plan: "pro" } },
          { expect: { supportLevel: { value: "priority" } } },
        ],
      },
      {
        name: "The total follows both answers",
        steps: [
          { set: { plan: "basic" } },
          { set: { seats: 3 } },
          { expect: { total: { value: 30 } } },
          { expect: { proNote: { visible: false } } },
          { set: { plan: "pro" } },
          { expect: { total: { value: 60 } } },
          { set: { seats: 6 } },
          { expect: { total: { value: 120 } } },
          { expect: { proNote: { visible: true } } },
          { complete: { survey: true } },
          { expect: { survey: { state: "completed", values: { total: 120, supportLevel: "priority" } } } },
        ],
      },
    ],
  },
};
