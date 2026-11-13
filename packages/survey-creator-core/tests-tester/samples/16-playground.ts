import type { Sample } from "./types";

export const sample: Sample = {
  id: "playground",
  name: "Playground",
  description: "Two questions and one step. The place to start writing a case of your own.",
  tags: ["set", "expect", "value"],
  expectedStatus: "passed",
  why: "A suite needs a non-empty \"tests\" array, so the playground ships with one step rather than none.",
  surveyJson: {
    title: "Playground",
    elements: [
      { type: "text", name: "q1", title: "A question" },
      { type: "radiogroup", name: "q2", title: "Another one", choices: ["a", "b", "c"] },
    ],
  },
  tests: {
    name: "Playground",
    tests: [
      {
        name: "The value the tester types is the value the survey holds",
        steps: [
          { set: { q1: "hello" } },
          { expect: { q1: { value: "hello" } } },
        ],
      },
    ],
  },
};
