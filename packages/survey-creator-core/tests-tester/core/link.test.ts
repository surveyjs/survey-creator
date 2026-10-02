// The runtime half of npm run check:link. The script proves that one copy of survey-core is resolved;
// this proves that the copy the tester bundle imports is the copy this app builds its models with.
// If it ever is not, the model the factory returns is not an instanceof the SurveyModel class the
// runner compares against, and the run reports surveyFactoryInvalidResult instead of running.
import { describe, expect, it } from "vitest";
import { SurveyModel } from "survey-core";
import { runSurveyTests } from "survey-core/tester";
import type { ISurveyTests } from "survey-core/tester";

const surveyJson = {
  elements: [{ type: "text", name: "q1" }],
};

const tests: ISurveyTests = {
  name: "Link check",
  tests: [
    {
      name: "A value set by the tester is the value the survey holds",
      steps: [
        { set: { q1: "a" } },
        { expect: { q1: { value: "a" } } },
      ],
    },
  ],
};

describe("the local link", () => {
  it("shares one copy of survey-core with the tester bundle", async() => {
    const seen: Array<SurveyModel> = [];
    const result = await runSurveyTests(surveyJson, tests, undefined, {
      createSurvey: (json, context) => {
        const survey = new SurveyModel();
        survey.dateProvider = context.dateProvider;
        survey.fromJSON(json);
        seen.push(survey);
        return survey;
      },
    });
    expect(result.issues).toEqual([]);
    expect(result.status).toBe("passed");
    expect(seen.length).toBe(1);
    expect(seen[0]).toBeInstanceOf(SurveyModel);
  });

  it("pins the clock of a test to its now option", async() => {
    const result = await runSurveyTests(
      { elements: [{ type: "expression", name: "year", expression: "currentYear()" }] },
      { tests: [{ name: "The year is the one the option names", steps: [{ expect: { year: { value: 2031 } } }] }] },
      { now: "2031-06-01T00:00:00" },
    );
    expect(result.status).toBe("passed");
  });
});
