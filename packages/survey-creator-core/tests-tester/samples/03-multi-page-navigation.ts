import type { Sample } from "./types";

export const sample: Sample = {
  id: "multi-page-navigation",
  name: "Multi-page navigation",
  description: "Next, Previous, the visible pages in order, and a Next that validation blocks. " +
    "The last test is disabled: enable it to see what pressing Next on the last page reports.",
  tags: ["nextPage", "prevPage", "currentPage", "pages", "nextPageBlocked", "navigationButtonNotAvailable"],
  expectedStatus: "passed",
  why: "The blocked Next is a warning. The case error is kept in a disabled test so that the suite runs " +
    "green until someone deliberately enables it.",
  surveyJson: {
    title: "Employment",
    pages: [
      { name: "page1", elements: [{ type: "text", name: "firstName", title: "First name", isRequired: true }] },
      {
        name: "page2",
        elements: [
          {
            type: "radiogroup", name: "employment", title: "Employment",
            choices: ["employed", "student"],
          },
        ],
      },
      {
        name: "page3",
        visibleIf: "{employment} = 'employed'",
        elements: [{ type: "text", name: "employer", title: "Employer" }],
      },
    ],
  },
  tests: {
    name: "Navigation",
    options: { checkErrorsMode: "onNextPage" },
    starts: [{ name: "named", data: { firstName: "Ann" } }],
    tests: [
      {
        name: "Next is blocked while a required answer is missing",
        steps: [
          { expect: { survey: { currentPage: "page1", pages: ["page1", "page2"] } } },
          { nextPage: { survey: true } },
          { expect: { survey: { currentPage: "page1" } } },
          { expect: { firstName: { hasErrors: true } } },
          { set: { firstName: "Ann" } },
          { nextPage: { survey: true } },
          { expect: { survey: { currentPage: "page2" } } },
        ],
      },
      {
        name: "An answer makes a page appear, and Previous goes back to it",
        start: "named",
        steps: [
          { nextPage: { survey: true } },
          { expect: { survey: { currentPage: "page2", pages: ["page1", "page2"] } } },
          { set: { employment: "employed" } },
          { expect: { survey: { pages: ["page1", "page2", "page3"] } } },
          { nextPage: { survey: true } },
          { expect: { survey: { currentPage: "page3" } } },
          { expect: { employer: { page: "page3", visible: true } } },
          { prevPage: { survey: true } },
          { expect: { survey: { currentPage: "page2" } } },
        ],
      },
      {
        name: "The student path ends on page 2",
        start: { data: { firstName: "Ann", employment: "student" } },
        steps: [
          { expect: { survey: { pages: ["page1", "page2"] } } },
          { nextPage: { survey: true } },
          { expect: { survey: { currentPage: "page2" } } },
          { complete: { survey: true } },
          { expect: { survey: { state: "completed", noValues: ["employer"] } } },
        ],
      },
      {
        name: "Pressing Next on the last page is an error, not a no-op",
        description: "Disabled on purpose. Enable it to see navigationButtonNotAvailable and the " +
          "command it suggests instead.",
        disabled: true,
        start: { data: { firstName: "Ann", employment: "student" } },
        steps: [
          { nextPage: { survey: true } },
          { nextPage: { survey: true } },
        ],
      },
    ],
  },
};
