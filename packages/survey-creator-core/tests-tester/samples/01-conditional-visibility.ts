import type { Sample } from "./types";

// eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
// The example of src/tester/README.md §5, extended with the checks that make the point visible.

export const sample: Sample = {
  id: "conditional-visibility",
  name: "Conditional visibility",
  description: "A question that only exists for one answer, and the data that is left when it does not: " +
    "visibleIf, values, noValues and clearInvisibleValues.",
  tags: ["set", "complete", "expect", "visible", "required", "values", "noValues", "state"],
  expectedStatus: "passed",
  why: "Every check holds; the suite pins clearInvisibleValues so the run does not depend on the option in the Setup tab.",
  surveyJson: {
    title: "Insurance",
    pages: [
      {
        name: "page1",
        elements: [
          { type: "radiogroup", name: "hasInsurance", title: "Do you have insurance?", choices: ["yes", "no"] },
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
    variables: { region: "eu", tier: "gold" },
    starts: [
      { name: "declined", description: "The respondent has already said no.", data: { hasInsurance: "no" } },
    ],
    tests: [
      {
        name: "Declining insurance skips the provider question",
        steps: [
          { set: { hasInsurance: "no" } },
          { expect: { insuranceProvider: { visible: false, required: true } } },
          { complete: { survey: true } },
          {
            expect: {
              survey: {
                state: "completed",
                values: { hasInsurance: "no" },
                noValues: ["insuranceProvider"],
              },
            },
          },
        ],
      },
      {
        name: "Accepting insurance requires the provider",
        steps: [
          { set: { hasInsurance: "yes" } },
          { expect: { insuranceProvider: { visible: true, empty: true } } },
          { set: { insuranceProvider: "Allianz" } },
          { complete: { survey: true } },
          {
            expect: {
              survey: {
                state: "completed",
                values: { hasInsurance: "yes", insuranceProvider: "Allianz" },
              },
            },
          },
        ],
      },
      {
        name: "A start and a variable of its own",
        description: "The start is referenced by name, and one root variable is overridden.",
        start: "declined",
        variables: { region: "us" },
        steps: [
          { expect: { survey: { variables: { region: "us", tier: "gold" }, values: { hasInsurance: "no" } } } },
          { expect: { insuranceProvider: { visible: false } } },
        ],
      },
    ],
  },
};
