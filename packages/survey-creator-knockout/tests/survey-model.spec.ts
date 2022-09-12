import { SurveyCreator } from "../src/creator";

beforeEach(() => {});

test("getRendererForString", () => {
  const creator = new SurveyCreator();
  const survey = creator.survey;
  expect(creator.readOnly).toBeFalsy();
  expect(survey.getRendererForString(<any>{}, "")).toEqual("svc-string-editor");
  creator.readOnly = true;
  expect(survey.getRendererForString(<any>{}, "")).toEqual(undefined);
});
