import type { Sample } from "./types";

// The diagnostics sample: every test in it is a different way of writing a case wrong, and the point
// is that each one says what is wrong and, where it can, what was probably meant.

export const sample: Sample = {
  id: "broken-suite",
  name: "A broken suite (on purpose)",
  description: "Eight cases that cannot run: a typo in a target, two commands in one step, an unknown " +
    "check, a hidden question, a command that does not apply, a payload the command does not " +
    "understand, a question on another page, and a start that does not exist.",
  tags: ["unknownTarget", "stepHasSeveralCommands", "unknownCheck", "elementNotVisible",
    "commandNotApplicable", "invalidCommandParams", "elementNotOnCurrentPage", "unknownStartReference"],
  expectedStatus: "error",
  why: "Nothing here is a failed assertion: each case describes something that cannot happen, so the " +
    "harness ends it with an error and leaves the survey untouched.",
  surveyJson: {
    title: "Diagnostics",
    pages: [
      {
        name: "page1",
        elements: [
          { type: "text", name: "houseNumber", title: "House number" },
          { type: "text", name: "hiddenNote", title: "Hidden note", visible: false },
        ],
      },
      {
        name: "page2",
        elements: [{ type: "text", name: "comment", title: "Anything else?" }],
      },
    ],
  },
  tests: {
    name: "Diagnostics",
    tests: [
      {
        name: "A target that does not exist",
        description: "unknownTarget, with the name it probably meant.",
        steps: [
          { expect: { housNumber: { value: 1 } } },
        ],
      },
      {
        name: "Two commands in one step",
        description: "A step is exactly one command; the validator rejects this before anything runs.",
        steps: [
          { set: { houseNumber: "12" }, clear: { houseNumber: true } },
        ],
      },
      {
        name: "A check nobody registered",
        description: "unknownCheck: the message lists the checks that exist for this kind of target.",
        steps: [
          { expect: { houseNumber: { valu: "12" } } },
        ],
      },
      {
        name: "Typing into a hidden question",
        description: "elementNotVisible: no respondent could reach it. setDirectly is the escape hatch.",
        steps: [
          { set: { hiddenNote: "written by nobody" } },
        ],
      },
      {
        name: "A command that does not apply to this question",
        description: "commandNotApplicable: rows belong to a dynamic matrix.",
        steps: [
          { addRow: { houseNumber: 2 } },
        ],
      },
      {
        name: "A payload the command does not understand",
        description: "invalidCommandParams: \"complete\" takes true, and the message names the key.",
        steps: [
          { complete: { survey: { force: true } } },
        ],
      },
      {
        name: "A question on another page",
        description: "elementNotOnCurrentPage: the survey is on page1.",
        steps: [
          { set: { comment: "too early" } },
        ],
      },
      {
        name: "A start that is not in the starts list",
        description: "unknownStartReference, with the closest name.",
        start: "declined",
        steps: [
          { expect: { houseNumber: { empty: true } } },
        ],
      },
    ],
  },
};
