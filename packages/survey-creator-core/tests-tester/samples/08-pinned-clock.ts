import type { Sample } from "./types";

export const sample: Sample = {
  id: "pinned-clock",
  name: "The pinned clock",
  description: "A survey that reads today() and age(). The suite pins the moment, and one test moves it: " +
    "the same case gives the same answer on every machine and at any hour.",
  tags: ["now", "options merge", "age()", "currentYear()", "visible", "value"],
  expectedStatus: "passed",
  why: "The clock is a property of the model, so a test can override \"now\" per key and nothing global " +
    "is installed.",
  surveyJson: {
    title: "Pension",
    elements: [
      { type: "text", name: "birthDate", title: "Date of birth", inputType: "date" },
      { type: "expression", name: "thisYear", title: "This year", expression: "currentYear()" },
      { type: "expression", name: "ageNow", title: "Age", expression: "age({birthDate})" },
      { type: "text", name: "pensionNote", title: "Pension note", visibleIf: "{ageNow} >= 65" },
    ],
  },
  tests: {
    name: "Dates",
    // Pinned by the suite, so the run does not depend on the Now option in the Setup tab.
    options: { now: "2024-01-01T00:00:00" },
    starts: [{ name: "born1950", data: { birthDate: "1950-06-15" } }],
    tests: [
      {
        name: "In 2024 the respondent is 73 and the pension note is visible",
        start: "born1950",
        steps: [
          { expect: { thisYear: { value: 2024 } } },
          { expect: { ageNow: { value: 73 } } },
          { expect: { pensionNote: { visible: true } } },
        ],
      },
      {
        name: "The same case in 2010 hides the note",
        description: "Only the \"now\" option differs, and options merge per key.",
        start: "born1950",
        options: { now: "2010-01-01T00:00:00" },
        steps: [
          { expect: { thisYear: { value: 2010 } } },
          { expect: { ageNow: { value: 59 } } },
          { expect: { pensionNote: { visible: false } } },
        ],
      },
    ],
  },
};
