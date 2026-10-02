import type { Sample } from "./types";

export const sample: Sample = {
  id: "starts-and-variables",
  name: "Starts and variables",
  description: "Three inputs with three rules: a start is referenced or inlined and never merged, " +
    "variables merge per name, and dataMode decides whether triggers run.",
  tags: ["start", "starts", "variables", "dataMode", "restore", "input"],
  expectedStatus: "passed",
  why: "Variables are applied before the start data, so a visibleIf that reads one sees it while the " +
    "answers go in; \"restore\" assigns the data at once and runs no trigger.",
  surveyJson: {
    title: "Order",
    elements: [
      { type: "text", name: "orderId", title: "Order" },
      { type: "text", name: "vipNote", title: "VIP note", visibleIf: "{tier} = 'gold'" },
      { type: "radiogroup", name: "shipping", title: "Shipping", choices: ["standard", "express"] },
      { type: "text", name: "expressFee", title: "Express fee", inputType: "number" },
    ],
    triggers: [
      { type: "setvalue", expression: "{shipping} = 'express'", setToName: "expressFee", setValue: 15 },
    ],
  },
  tests: {
    name: "Starts",
    variables: { tier: "silver", currency: "EUR" },
    starts: [
      { name: "orderA", description: "An order and nothing else.", data: { orderId: "A-1" } },
      { name: "expressOrder", data: { orderId: "A-2", shipping: "express" } },
      {
        name: "expressOrderRestored",
        description: "The same data as if it were loaded from saved storage.",
        data: { orderId: "A-2", shipping: "express" },
        dataMode: "restore",
      },
    ],
    tests: [
      {
        name: "A gold tier makes the VIP note visible from the first step",
        start: "orderA",
        variables: { tier: "gold" },
        steps: [
          { expect: { vipNote: { visible: true } } },
          { expect: { survey: { variables: { tier: "gold", currency: "EUR" }, values: { orderId: "A-1" } } } },
        ],
      },
      {
        name: "The suite default tier hides it",
        start: "orderA",
        steps: [
          { expect: { vipNote: { visible: false } } },
          { expect: { survey: { variables: { tier: "silver", currency: "EUR" } } } },
        ],
      },
      {
        name: "Start data applied as input runs the trigger",
        start: "expressOrder",
        steps: [
          { expect: { expressFee: { value: 15 } } },
        ],
      },
      {
        name: "The same data restored runs no trigger",
        start: "expressOrderRestored",
        steps: [
          { expect: { shipping: { value: "express" } } },
          { expect: { expressFee: { empty: true } } },
        ],
      },
      {
        name: "An inline start is written where it is used",
        start: { data: { orderId: "A-3" }, dataMode: "input" },
        steps: [
          { expect: { survey: { values: { orderId: "A-3" }, noValues: ["shipping"] } } },
        ],
      },
    ],
  },
};
