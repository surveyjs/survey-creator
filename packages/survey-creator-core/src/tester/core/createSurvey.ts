import { SurveyModel } from "survey-core";
import type { ISurveyTestModelFactoryContext } from "survey-core/tester";

// The demo model factory. It exists to show the one thing a host cannot express in JSON: runtime
// behaviour attached to the model a test runs on. Here it is server validation, because that is the
// eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
// asynchronous survey operation the tester has to wait for (README §6, "Asynchronous survey
// operations").
//
// When the host option is off, no factory is passed at all and the tester's own default is used.

export const SERVER_LATENCY_MS = 800;
// A value the fake backend rejects. The sample suite writes it deliberately.
export const REJECTED_EMAIL = "taken@example.com";

export function createSurveyWithServerValidation(surveyJson: any,
  context: ISurveyTestModelFactoryContext): SurveyModel {
  const survey = new SurveyModel();
  // Before fromJSON, and this is the reason the factory builds the model in two steps: a
  // defaultValueExpression or a calculated value that calls today() runs while the JSON is loading,
  // and there is no moment between the two inside new SurveyModel(json).
  survey.dateProvider = context.dateProvider;
  survey.fromJSON(surveyJson);
  survey.onServerValidateQuestions.add((_, options) => {
    // The handler answers late on purpose: tryComplete() returns false meanwhile, and the survey
    // navigates from options.complete() afterwards. The tester waits for it, so the check that follows
    // reads the state the server produced - or the case ends with asyncOperationTimeout when
    // asyncTimeout is shorter than this latency.
    setTimeout(() => {
      const email = options.data["email"];
      if (typeof email === "string" && email.toLowerCase() === REJECTED_EMAIL) {
        options.errors["email"] = "This address is already registered (checked on the server).";
      }
      options.complete();
    }, SERVER_LATENCY_MS);
  });
  return survey;
}
