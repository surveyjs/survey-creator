import { REJECTED_EMAIL } from "../../src/tester/core/createSurvey";
import type { Sample } from "./types";

// The one sample that needs runtime behaviour on the model: an onServerValidateQuestions handler,
// installed through the createSurvey execution option. Loading the sample switches the host option on.

export const sample: Sample = {
  id: "async-server-validation",
  name: "Asynchronous server validation",
  description: "A completion the server holds, accepts or rejects — and a test whose asyncTimeout is " + // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    "shorter than the server takes.",
  tags: ["complete", "asyncTimeout", "asyncOperationTimeout", "completeBlocked", "errors"],
  expectedStatus: "error",
  why: "The first two tests pass. The third pins asyncTimeout to 200 ms against a server that answers " +
    "in 800, so it ends with the asyncOperationTimeout error on purpose: that is what a handler which " +
    "never answers looks like.",
  requiresServerValidation: true,
  surveyJson: {
    title: "Account",
    checkErrorsMode: "onComplete",
    elements: [
      { type: "text", name: "email", title: "Email", isRequired: true },
      { type: "text", name: "displayName", title: "Display name" },
    ],
  },
  tests: {
    name: "Server validation",
    description: "The demo handler answers after 800 ms and rejects one address.",
    tests: [
      {
        name: "A completion the server accepts is not reported as blocked",
        steps: [
          { set: { email: "ann@example.com", displayName: "Ann" } },
          { complete: { survey: true } },
          { expect: { survey: { state: "completed", values: { email: "ann@example.com" } } } },
        ],
      },
      {
        name: "A completion the server rejects carries the server's own text",
        steps: [
          { set: { email: REJECTED_EMAIL } },
          { complete: { survey: true } },
          { expect: { survey: { state: "running" } } },
          { expect: { email: { hasErrors: true } } },
        ],
      },
      {
        name: "A server that answers too late ends the test",
        description: "asyncTimeout is per operation: 200 ms against 800 ms of latency.",
        options: { asyncTimeout: 200 },
        steps: [
          { set: { email: "late@example.com" } },
          { complete: { survey: true } },
          { expect: { survey: { state: "completed" } } },
        ],
      },
    ],
  },
};
