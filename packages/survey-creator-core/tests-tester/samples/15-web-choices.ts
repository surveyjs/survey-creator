import type { Sample } from "./types";

// The other input a survey takes from outside itself: a question that loads its choices from a web
// service. The suite's "web" map answers by url, and Rule 0 of the tester holds - a test run performs
// no network request at all. An url the case did not declare is a defect of the case: it is reported,
// the question loads nothing, and the run carries on.

export const sample: Sample = {
  id: "web-choices",
  name: "Web choices",
  description: "choicesByUrl answered by the case: a piped url that asks a second time, a body read " +
    "through \"path\", a service that returns 500, and an url nobody declared.",
  tags: ["web", "choicesByUrl", "choices", "choiceTexts", "path", "status", "setDirectly",
    "webRequestNotStubbed", "choicesNotVerifiable"],
  expectedStatus: "passed",
  why: "Every check holds. The stub supplies the response and nothing else — valueName, titleName, " + // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    "path, the parsing and the error the failing status produces are the survey's own code, which is " +
    "the code the case is here to test.",
  surveyJson: {
    title: "Delivery",
    elements: [
      {
        type: "dropdown", name: "country", title: "Country",
        choicesByUrl: { url: "https://api.example.com/countries", valueName: "id", titleName: "name" },
      },
      {
        // The url is piped. Nothing is requested while {country} is empty - the survey does not send an
        // url it could not resolve - and each answer asks a different url, which the case answers with
        // a different entry.
        type: "dropdown", name: "city", title: "City", visibleIf: "{country} notempty",
        choicesByUrl: {
          url: "https://api.example.com/cities?country={country}", valueName: "id", titleName: "name",
        },
      },
      {
        type: "dropdown", name: "carrier", title: "Carrier",
        choicesByUrl: {
          url: "https://api.example.com/carriers", path: "items", valueName: "code", titleName: "label",
        },
      },
      {
        type: "dropdown", name: "plan", title: "Delivery plan",
        choicesByUrl: { url: "https://api.example.com/plans", valueName: "id", titleName: "name" },
      },
    ],
  },
  tests: {
    name: "Web choices",
    description: "Five urls and what each of them answers. The suite declares no entry for " +
      "\"?country=it\", which is the point of the last test.",
    web: {
      "https://api.example.com/countries": {
        response: [{ id: "de", name: "Germany" }, { id: "fr", name: "France" }],
      },
      "https://api.example.com/cities?country=de": {
        // Real milliseconds. The step after the one that set the country reads the settled model.
        delay: 10,
        response: [{ id: "ber", name: "Berlin" }, { id: "muc", name: "Munich" }],
      },
      "https://api.example.com/cities?country=fr": {
        response: [{ id: "par", name: "Paris" }],
      },
      // The body the service really returns, nested. "path" is the survey's own field and it reads it.
      "https://api.example.com/carriers": {
        response: { items: [{ code: "dhl", label: "DHL" }, { code: "ups", label: "UPS" }] },
      },
      // The path an application most needs covered and least likely to have tested.
      "https://api.example.com/plans": { status: 500, statusText: "Server Error" },
    },
    tests: [
      {
        name: "The choices of the first question arrive before the first step runs",
        description: "The model is settled before the case touches it, so the load is over by step 0.",
        steps: [
          {
            expect: {
              country: { choices: ["de", "fr"], choiceTexts: ["Germany", "France"] },
            },
          },
        ],
      },
      {
        name: "A piped url is a second request, answered by a second entry",
        steps: [
          { expect: { city: { visible: false } } },
          { set: { country: "de" } },
          {
            expect: {
              city: { visible: true, choices: ["ber", "muc"], choiceTexts: ["Berlin", "Munich"] },
            },
          },
          { set: { country: "fr" } },
          { expect: { city: { choices: ["par"], choiceTexts: ["Paris"] } } },
        ],
      },
      {
        name: "A nested body is read through the question's own path",
        steps: [
          { expect: { carrier: { choices: ["dhl", "ups"], choiceTexts: ["DHL", "UPS"] } } },
        ],
      },
      {
        name: "A status the case declares takes the question down the failing service's path",
        description: "500 produces the survey's own WebRequestError on the question. The tester builds " +
          "no ItemValue of its own and invents no error text.",
        steps: [
          { expect: { plan: { choices: [], hasErrors: true } } },
        ],
      },
      {
        name: "An url the case does not declare loads nothing, and says so",
        description: "\"it\" is not one of the choices the service returned, so it is written with " +
          "setDirectly — the command that says the value was never offered. The request for " + // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
          "?country=it matches no entry: the question ends loaded and empty, the step carries the " +
          "webRequestNotStubbed warning naming the url, and no request left the process.",
        steps: [
          { setDirectly: { country: "it" } },
          { expect: { city: { visible: true, choices: [] } } },
        ],
      },
    ],
  },
};
