import type { Sample } from "./types";

// The first of the two inputs a survey takes from outside itself: a function the application registers
// with FunctionFactory and an expression then calls. It is declared in the suite's "functions" map, so
// the answer is part of the case document rather than of the machine the case runs on - and the runner
// waits for it, because an asynchronous function is an operation in flight like any other.

export const sample: Sample = {
  id: "async-functions",
  name: "Asynchronous custom functions",
  description: "An expression that calls a service — the rate a calculated value reads, the check a " + // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    "question's visibleIf makes — answered by the suite's \"functions\" map instead of by the network.", // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
  tags: ["functions", "async", "results", "error", "calculatedValue", "expression", "trigger", "visibleIf"],
  expectedStatus: "passed",
  why: "Every check holds. Nothing here calls a real service: getRate and isMemberValid are declared " +
    "by the case, so the same suite gives the same answers on every machine and at any hour.",
  surveyJson: {
    title: "Order",
    calculatedValues: [
      // The function is asynchronous, so this value is not there when the expression that starts it
      // returns. The runner waits for the model to settle after every command, which is why the step
      // after a "set" reads the rate and not the state before it.
      { name: "rate", expression: "getRate({currency})", includeIntoResult: true },
    ],
    triggers: [
      { type: "setvalue", expression: "{rate} >= 1.5", setToName: "approval", setValue: "needed" },
    ],
    elements: [
      { type: "dropdown", name: "currency", title: "Currency", choices: ["EUR", "GBP", "USD"] },
      { type: "text", name: "amount", title: "Amount", inputType: "number" },
      { type: "expression", name: "converted", title: "In your currency", expression: "{amount} * {rate}" },
      { type: "text", name: "membershipId", title: "Membership id" },
      {
        type: "text", name: "discountCode", title: "Discount code",
        visibleIf: "isMemberValid({membershipId}) = true",
      },
      { type: "text", name: "approval", title: "Approval" },
    ],
  },
  tests: {
    name: "Asynchronous functions",
    description: "getRate answers per currency and isMemberValid per membership id. Both are declared " +
      "here, and both merge per name - a test overrides one entry without restating the map.",
    functions: {
      getRate: {
        async: true,
        // The answer when no row below matches, which is what an unanswered currency gets.
        result: 1.0,
        results: [
          { params: ["EUR"], result: 1.25 },
          // Real milliseconds, never the pinned clock: what is simulated is a slow handler.
          { params: ["GBP"], delay: 20, result: 1.5 },
        ],
      },
      isMemberValid: {
        async: true,
        results: [{ params: ["M-1001"], result: true }],
        result: false,
      },
    },
    tests: [
      {
        name: "A calculated value waits for the function that feeds it",
        steps: [
          { set: { currency: "EUR" } },
          { expect: { rate: { value: 1.25 } } },
          { set: { amount: 200 } },
          { expect: { converted: { value: 250 } } },
        ],
      },
      {
        name: "A results row answers by its arguments, and result answers the rest",
        description: "\"GBP\" matches a row that answers 20 ms late; \"USD\" matches none and gets the " +
          "fallback. Neither costs the case a step of waiting.",
        steps: [
          { set: { amount: 200 } },
          { set: { currency: "GBP" } },
          { expect: { rate: { value: 1.5 }, converted: { value: 300 } } },
          { set: { currency: "USD" } },
          { expect: { rate: { value: 1 }, converted: { value: 200 } } },
        ],
      },
      {
        name: "A trigger fires on the value the function produced",
        description: "The function answers, the calculated value takes it, the conditions re-run and " +
          "the trigger writes — all inside the one command that set the currency.", // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
        steps: [
          { set: { currency: "GBP" } },
          { expect: { survey: { values: { approval: "needed" } } } },
          { set: { currency: "EUR" } },
          { expect: { rate: { value: 1.25 } } },
        ],
      },
      {
        name: "An expression that calls the service decides what the respondent sees",
        steps: [
          { expect: { discountCode: { visible: false } } },
          { set: { membershipId: "M-1001" } },
          { expect: { discountCode: { visible: true } } },
          { set: { membershipId: "M-9999" } },
          { expect: { discountCode: { visible: false } } },
        ],
      },
      {
        name: "A test overrides one function without restating the map",
        description: "Only getRate is replaced here — the whole entry, rows and all — and " + // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
          "isMemberValid is still the suite's.",
        functions: { getRate: { async: true, result: 3 } },
        steps: [
          { set: { currency: "EUR", amount: 200 } },
          { expect: { rate: { value: 3 }, converted: { value: 600 } } },
          { set: { membershipId: "M-1001" } },
          { expect: { discountCode: { visible: true } } },
        ],
      },
      {
        name: "A function declared as failing takes the survey's own failure path",
        description: "The expression receives null, exactly as it does when a real handler throws, and " +
          "the step carries the functionStubFailed warning that says why.",
        functions: { isMemberValid: { async: true, error: "the membership service is down" } },
        steps: [
          { set: { membershipId: "M-1001" } },
          { expect: { discountCode: { visible: false } } },
        ],
      },
    ],
  },
};
