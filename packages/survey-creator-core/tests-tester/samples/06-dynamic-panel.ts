import type { Sample } from "./types";

export const sample: Sample = {
  id: "dynamic-panel",
  name: "Dynamic panel",
  description: "Panels a respondent adds and removes, and the questions inside one addressed by index.",
  tags: ["addPanel", "removePanel", "panelCount", "set", "clear"],
  expectedStatus: "passed",
  why: "Add and Remove read canAddPanel and canRemovePanel, and the panel indexes shift exactly as the " +
    "model shifts them.",
  surveyJson: {
    title: "Contacts",
    elements: [
      {
        type: "paneldynamic", name: "contacts", title: "Contacts",
        panelCount: 1, minPanelCount: 1, maxPanelCount: 3,
        allowAddPanel: true, allowRemovePanel: true,
        templateElements: [
          { type: "text", name: "fullName", title: "Name" },
          { type: "text", name: "phone", title: "Phone" },
        ],
      },
    ],
  },
  tests: {
    name: "Panels",
    tests: [
      {
        name: "A second contact is added and filled in",
        steps: [
          { expect: { contacts: { panelCount: 1 } } },
          { set: { "contacts[0].fullName": "Ann" } },
          { addPanel: { contacts: 1 } },
          { expect: { contacts: { panelCount: 2 } } },
          { set: { "contacts[1].fullName": "Bo", "contacts[1].phone": "555-0100" } },
          { expect: { "contacts[1].phone": { value: "555-0100" } } },
          { expect: { "contacts[0].phone": { empty: true } } },
        ],
      },
      {
        name: "Removing the first panel shifts the second into its place",
        start: { data: { contacts: [{ fullName: "Ann" }, { fullName: "Bo", phone: "555-0100" }] } },
        steps: [
          { expect: { contacts: { panelCount: 2 } } },
          { removePanel: { contacts: 0 } },
          { expect: { contacts: { panelCount: 1 } } },
          { expect: { "contacts[0].fullName": { value: "Bo" } } },
          { clear: { "contacts[0].phone": true } },
          { expect: { "contacts[0].phone": { empty: true } } },
        ],
      },
    ],
  },
};
