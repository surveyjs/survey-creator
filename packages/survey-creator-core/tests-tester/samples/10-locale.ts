import type { Sample } from "./types";

export const sample: Sample = {
  id: "locale",
  name: "Locale and text piping",
  description: "The title check reads the title a respondent would see: the locale resolved, and the " +
    "piped answer substituted.",
  tags: ["locale", "title", "options merge", "text piping"],
  expectedStatus: "passed",
  why: "One option decides which of the two titles the check compares against; the piped value comes " +
    "from the start data.",
  surveyJson: {
    title: { default: "Registration", de: "Anmeldung" },
    elements: [
      {
        type: "text", name: "fullName",
        title: { default: "Your name", de: "Ihr Name" },
      },
      {
        type: "comment", name: "greeting",
        title: { default: "Hello, {fullName}. Anything to add?", de: "Hallo, {fullName}. Noch etwas?" },
      },
    ],
  },
  tests: {
    name: "Locales",
    options: { locale: "de" },
    starts: [{ name: "named", data: { fullName: "Ann" } }],
    tests: [
      {
        name: "The German title is the one the respondent sees",
        start: "named",
        steps: [
          { expect: { fullName: { title: "Ihr Name" } } },
          { expect: { greeting: { title: "Hallo, Ann. Noch etwas?" } } },
        ],
      },
      {
        name: "The default title comes back with the locale of the test",
        start: "named",
        options: { locale: "en" },
        steps: [
          { expect: { fullName: { title: "Your name" } } },
          { expect: { greeting: { title: "Hello, Ann. Anything to add?" } } },
        ],
      },
    ],
  },
};
