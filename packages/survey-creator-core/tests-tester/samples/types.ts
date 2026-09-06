import type { ISurveyTests, SurveyTestStatus } from "survey-core/tester";

export interface Sample {
  id: string;
  name: string;
  description: string;
  // The commands and checks the sample is about, shown on its card.
  tags: Array<string>;
  // The status this sample produces. It is asserted by src/samples/samples.test.ts: a sample whose
  // card promises "passed" and whose run errors would teach the wrong thing about the tester.
  expectedStatus: SurveyTestStatus;
  why: string;
  surveyJson: any;
  tests: ISurveyTests;
  // Server validation is runtime behaviour attached through the createSurvey execution option, so it
  // is a host option and not something a suite can express. Loading such a sample switches it on.
  requiresServerValidation?: boolean;
}
