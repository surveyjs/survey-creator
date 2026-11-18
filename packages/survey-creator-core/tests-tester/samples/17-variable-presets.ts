import type { Sample } from "./types";

// The variables a host application injects, described once in the suite: a definition survey whose
// questions are the variables, and named records of values for it. The suite is the only place they
// live - it runs the same way with no Creator around it - and a test references a record by name.

export const sample: Sample = {
  id: "variable-presets",
  name: "Variable presets",
  description: "Host variables described by a survey: a definition that says what a variable is, named " +
    "presets of values for it, a test that references one, and a value the definition rejects.",
  tags: ["variablePresets", "variablePreset", "variables", "variableInvalid", "variableNotDefined"],
  expectedStatus: "error",
  why: "Two tests pass on the preset they name; the third writes a tier the definition does not offer, " +
    "so the case ends with variableInvalid before a survey is ever built - and the fourth sets a name " +
    "the definition does not declare, which is a warning and not a value on the survey.",
  surveyJson: {
    title: "Pricing",
    elements: [
      { type: "text", name: "company", title: "Company" },
      { type: "text", name: "discountCode", title: "Discount code", visibleIf: "{tier} = 'gold'" },
      {
        type: "expression", name: "seats", title: "Seats included",
        expression: "iif({tier} = 'gold', {employees} * 2, {employees})",
      },
    ],
  },
  tests: {
    name: "Pricing by tier",
    variablePresets: {
      definition: {
        elements: [
          { type: "dropdown", name: "tier", title: "Customer tier", choices: ["basic", "gold"], isRequired: true },
          { type: "text", name: "employees", title: "Employees", inputType: "number", min: 1, max: 5000 },
        ],
      },
      presets: [
        { name: "gold customer", description: "A gold customer with 12 employees", variables: { tier: "gold", employees: 12 } },
        { name: "newcomer", description: "A basic customer with one employee", variables: { tier: "basic", employees: 1 } },
      ],
    },
    variablePreset: "newcomer",
    tests: [
      {
        name: "A gold customer sees the discount code",
        variablePreset: "gold customer",
        steps: [
          { expect: { discountCode: { visible: true } } },
          { expect: { seats: { value: 24 } } },
          { expect: { survey: { variables: { tier: "gold", employees: 12 } } } },
        ],
      },
      {
        name: "The suite's preset applies, and a test overrides one variable of it",
        variables: { employees: 3 },
        steps: [
          { expect: { discountCode: { visible: false } } },
          { expect: { survey: { variables: { tier: "basic", employees: 3 } } } },
        ],
      },
      {
        name: "A tier the definition does not offer ends the case",
        variables: { tier: "platinum" },
        steps: [
          { expect: { discountCode: { visible: false } } },
        ],
      },
      {
        name: "A name the definition does not declare is a warning, and is not set",
        variables: { region: "eu" },
        steps: [
          { expect: { survey: { variables: { tier: "basic", employees: 1 } } } },
        ],
      },
    ],
  },
};
