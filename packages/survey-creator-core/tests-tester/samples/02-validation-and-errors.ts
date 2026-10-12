import type { Sample } from "./types";

export const sample: Sample = {
  id: "validation-and-errors",
  name: "Validation and errors",
  description: "A blocked Complete, and the three error checks side by side: errors is the texts, " +
    "errorCount is a number, hasErrors says \"at least one\".",
  tags: ["complete", "errors", "errorCount", "hasErrors", "required", "completeBlocked"],
  expectedStatus: "passed",
  why: "The blocked completion is a warning, not a failure: possible-but-ineffective is exactly what the " +
    "following expect is there to describe.",
  surveyJson: {
    title: "Sign up",
    elements: [
      {
        type: "text", name: "email", title: "Email",
        isRequired: true,
        validators: [{ type: "email", text: "Enter a valid email address." }],
      },
      {
        type: "text", name: "age", title: "Age", inputType: "number",
        validators: [{ type: "numeric", minValue: 18, maxValue: 120, text: "Age must be between 18 and 120." }],
      },
    ],
  },
  tests: {
    name: "Validation",
    options: { checkErrorsMode: "onNextPage" },
    tests: [
      {
        name: "An empty required question blocks Complete",
        steps: [
          { expect: { email: { required: true, empty: true, hasErrors: false } } },
          { name: "Press Complete with nothing filled in", complete: { survey: true } },
          { expect: { survey: { state: "running", errorCount: 1 } } },
          { expect: { email: { hasErrors: true, errorCount: 1 } } },
        ],
      },
      {
        name: "An invalid value is reported with the validator's own text",
        steps: [
          { set: { email: "not-an-email" } },
          { complete: { survey: true } },
          { expect: { email: { errors: ["Enter a valid email address."], hasErrors: true } } },
          { expect: { survey: { state: "running" } } },
        ],
      },
      {
        name: "A value the validator rejects is still the value the respondent typed",
        description: "min/max and validators are deliberately not feasibility-checked, or validation " +
          "itself would be untestable.",
        steps: [
          { set: { email: "ann@example.com" } },
          { set: { age: 7 } },
          { expect: { age: { value: 7 } } },
          { complete: { survey: true } },
          { expect: { age: { errors: ["Age must be between 18 and 120."] } } },
          { expect: { survey: { state: "running" } } },
        ],
      },
      {
        name: "A valid form completes",
        steps: [
          { set: { email: "ann@example.com", age: 34 } },
          { complete: { survey: true } },
          {
            expect: {
              survey: { state: "completed", errorCount: 0, values: { email: "ann@example.com", age: 34 } },
            },
          },
        ],
      },
    ],
  },
};
