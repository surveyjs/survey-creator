import { settings as surveySettings } from "survey-core";
import { settings } from "../../src/creator-settings";

test("settings.operators is the survey-core operator table", () => {
  expect(settings.operators).toBe(surveySettings.logic.operators);
  const prev = settings.operators;
  const table = { empty: [], equal: [] };
  settings.operators = table;
  try {
    expect(surveySettings.logic.operators, "a whole table assigned through Creator reaches the core").toBe(table);
  } finally {
    settings.operators = prev;
  }
});
test("settings.logic.defaultOperators and defaultOperator are the survey-core defaults", () => {
  expect(settings.logic.defaultOperators).toBe(surveySettings.logic.defaultOperators);
  const prev = settings.logic.defaultOperator;
  settings.logic.defaultOperator = "notequal";
  try {
    expect(surveySettings.logic.defaultOperators.default).toBe("notequal");
  } finally {
    settings.logic.defaultOperator = prev;
  }
});
