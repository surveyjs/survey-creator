import type { Sample } from "./types";

export const sample: Sample = {
  id: "start-page-and-preview",
  name: "Start page and preview",
  description: "Every state a survey passes through: starting → running → preview → running → completed.", // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
  tags: ["startSurvey", "showPreview", "cancelPreview", "complete", "state", "currentPage"],
  expectedStatus: "passed",
  why: "Each command checks that its own button is displayed first, so the sequence is the one a " +
    "respondent could actually perform.",
  surveyJson: {
    title: "Feedback",
    firstPageIsStartPage: true,
    showPreviewBeforeComplete: true,
    previewMode: "allQuestions",
    pages: [
      {
        name: "intro",
        elements: [{ type: "html", name: "welcome", html: "<p>This survey takes two minutes.</p>" }],
      },
      {
        name: "questions",
        elements: [
          {
            type: "rating", name: "score", title: "How likely are you to recommend us?", rateMax: 5,
            // Without it there is no comment area at all, and setComment ends the case with
            // commentNotAvailable: the comment area is off by default on every question type.
            showCommentArea: true,
          },
          { type: "comment", name: "why", title: "Why?" },
        ],
      },
    ],
  },
  tests: {
    name: "States",
    tests: [
      {
        name: "The survey starts on the start page",
        steps: [
          { expect: { survey: { state: "starting" } } },
          { startSurvey: { survey: true } },
          { expect: { survey: { state: "running", currentPage: "questions" } } },
        ],
      },
      {
        name: "Preview, back to editing, then complete",
        steps: [
          { startSurvey: { survey: true } },
          { set: { score: 5 } },
          { setComment: { score: "The support team answered in minutes." } },
          { showPreview: { survey: true } },
          { expect: { survey: { state: "preview" } } },
          { cancelPreview: { survey: true } },
          { expect: { survey: { state: "running", currentPage: "questions" } } },
          { set: { why: "Fast support." } },
          { showPreview: { survey: true } },
          { complete: { survey: true } },
          {
            expect: {
              survey: {
                state: "completed",
                values: { score: 5, why: "Fast support." },
              },
            },
          },
          { expect: { score: { comment: "The support team answered in minutes." } } },
        ],
      },
    ],
  },
};
