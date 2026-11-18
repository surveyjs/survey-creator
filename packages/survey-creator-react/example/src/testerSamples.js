// Three sample suites, ported from the prototype's gallery (src/samples/) as example fixtures.
//
// They are here and not in the package because a sample is not part of the widget: the widget owns no
// documents at all - the host does - and these are the host's. Each card says the status its suite
// produces, which is also what makes the page usable as manual QA: a run that does not end where the
// card says it would is a regression you can see without reading anything.

export const samples = [
  {
    id: "conditional-visibility",
    name: "Conditional visibility",
    expectedStatus: "passed",
    why: "A question that only exists for one answer, and the data that is left when it does not.",
    surveyJson: {
      title: "Insurance",
      pages: [
        {
          name: "page1",
          title: "About your cover",
          elements: [
            {
              type: "radiogroup", name: "hasInsurance", title: "Do you have insurance?",
              choices: ["yes", "no"],
            },
            {
              type: "text", name: "insuranceProvider", title: "Who is your provider?",
              visibleIf: "{hasInsurance} = 'yes'", isRequired: true,
            },
          ],
        },
      ],
    },
    tests: {
      name: "Insurance",
      description: "The provider question belongs to one answer only.",
      options: { clearInvisibleValues: "onComplete" },
      starts: [
        { name: "declined", description: "The respondent has already said no.", data: { hasInsurance: "no" } },
      ],
      tests: [
        {
          name: "Declining insurance skips the provider question",
          steps: [
            { set: { hasInsurance: "no" } },
            { expect: { insuranceProvider: { visible: false } } },
            { complete: true },
            { expect: { survey: { state: "completed", noValues: ["insuranceProvider"] } } },
          ],
        },
        {
          name: "Accepting it asks for the provider, and it is required",
          steps: [
            { set: { hasInsurance: "yes" } },
            { expect: { insuranceProvider: { visible: true, required: true, empty: true } } },
            { set: { insuranceProvider: "Northern Mutual" } },
            { complete: true },
            { expect: { survey: { values: { hasInsurance: "yes", insuranceProvider: "Northern Mutual" } } } },
          ],
        },
      ],
    },
  },

  {
    id: "multi-page",
    name: "Two pages and a matrix",
    expectedStatus: "passed",
    why: "Navigation, a dynamic matrix and the cell targets a case addresses its rows by.",
    surveyJson: {
      title: "Contacts",
      pages: [
        {
          name: "who",
          title: "Who you are",
          elements: [{ type: "text", name: "fullName", title: "Full name", isRequired: true }],
        },
        {
          name: "how",
          title: "How to reach you",
          elements: [
            {
              type: "matrixdynamic", name: "contacts", title: "Contacts", rowCount: 1,
              columns: [
                { cellType: "dropdown", name: "kind", title: "Kind", choices: ["phone", "email"] },
                { cellType: "text", name: "value", title: "Value" },
              ],
            },
          ],
        },
      ],
    },
    tests: {
      name: "Contacts",
      tests: [
        {
          name: "A second contact can be added and addressed by its row",
          steps: [
            { set: { fullName: "Ada Lovelace" } },
            { nextPage: true },
            { expect: { survey: { currentPage: "how" } } },
            { addRow: "contacts" },
            { set: { "contacts[1].kind": "email", "contacts[1].value": "ada@example.com" } },
            { expect: { "contacts[1].value": { value: "ada@example.com" } } },
          ],
        },
      ],
    },
  },

  {
    id: "failing-suite",
    name: "A failing suite (on purpose)",
    expectedStatus: "failed",
    why: "Nothing is broken about the case: it runs to the end and reports what the survey actually did.",
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
          name: "A state that was never reached",
          steps: [
            { set: { houseNumber: "12" } },
            { expect: { survey: { state: "completed" } } },
          ],
        },
      ],
    },
  },
];

export function findSample(id) {
  return samples.filter(sample => sample.id === id)[0] || samples[0];
}

export function formatSuite(suite) {
  return JSON.stringify(suite, null, 2) + "\n";
}
