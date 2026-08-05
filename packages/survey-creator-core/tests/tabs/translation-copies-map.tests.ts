import { QuestionCheckboxModel, SurveyModel } from "survey-core";
import { TranslationGroup } from "../../src/components/tabs/translation-base";
import { TranslationCopiesMap } from "../../src/components/tabs/translation-copies-map";
import "survey-core/survey.i18n";

const surveyJSON = {
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } },
        {
          type: "checkbox", name: "q2", title: "Question 2",
          choices: [{ value: "item1", text: { default: "Item 1", de: "Punkt 1" } }, "item2"]
        }
      ]
    }
  ]
};

// The survey takes ownership of the loaded JSON object, so pass a copy to keep the copies independent.
function createSurvey(): SurveyModel {
  return new SurveyModel(JSON.parse(JSON.stringify(surveyJSON)));
}
function createRoot(survey: SurveyModel): TranslationGroup {
  const root = new TranslationGroup("survey", survey, null);
  root.setAsRoot();
  root.reset();
  return root;
}
function createMap(real: SurveyModel, editableCopy: SurveyModel, copy?: SurveyModel): TranslationCopiesMap {
  const res = new TranslationCopiesMap();
  res.build(createRoot(real), createRoot(editableCopy), !!copy ? createRoot(copy) : undefined);
  return res;
}
function getChoiceLocText(survey: SurveyModel): any {
  return (<QuestionCheckboxModel>survey.getQuestionByName("q2")).choices[0].locText;
}

test("build pairs the survey strings with their copies, the editable copy in both directions", () => {
  const real = createSurvey();
  const target = createSurvey();
  const source = createSurvey();
  const map = createMap(real, target, source);
  const realTitle = real.getQuestionByName("q1").locTitle;
  // The editable copy comes first, in the order the roots are passed.
  expect(map.getCopies(realTitle)).toEqual([target.getQuestionByName("q1").locTitle, source.getQuestionByName("q1").locTitle]);
  expect(map.getEditableCopy(realTitle)).toBe(target.getQuestionByName("q1").locTitle);
  expect(map.getItemByEditableCopy(target.getQuestionByName("q1").locTitle).locString).toBe(realTitle);
  // Only the editable copy is mapped back to the survey - nothing is forwarded from the other ones.
  expect(map.getItemByEditableCopy(source.getQuestionByName("q1").locTitle)).toBeFalsy();
});

test("build covers the strings of unnamed objects - a choice text", () => {
  const real = createSurvey();
  const target = createSurvey();
  const map = createMap(real, target);
  const realChoice = getChoiceLocText(real);
  expect(map.getEditableCopy(realChoice)).toBe(getChoiceLocText(target));
  expect(map.getItemByEditableCopy(getChoiceLocText(target)).locString).toBe(realChoice);
});

test("mirrorIntoCopies pushes every locale of the survey string into the copies", () => {
  const real = createSurvey();
  const target = createSurvey();
  const source = createSurvey();
  const map = createMap(real, target, source);
  const realTitle = real.getQuestionByName("q1").locTitle;
  realTitle.setLocaleText("de", "Frage 1 neu");
  realTitle.setLocaleText("fr", "Question 1 fr");
  expect(map.mirrorIntoCopies(realTitle)).toBeTruthy();
  [target, source].forEach(survey => {
    const copy = survey.getQuestionByName("q1").locTitle;
    expect(copy.getLocaleText("")).toBe("Question 1");
    expect(copy.getLocaleText("de")).toBe("Frage 1 neu");
    expect(copy.getLocaleText("fr")).toBe("Question 1 fr");
  });
  // A locale dropped in the survey is dropped in the copies - the whole JSON is mirrored.
  realTitle.setLocaleText("de", "");
  map.mirrorIntoCopies(realTitle);
  expect(target.getQuestionByName("q1").locTitle.getLocaleText("de")).toBeFalsy();
});

test("a string the copies have no counterpart for stays unmapped - the drift check", () => {
  const real = createSurvey();
  const target = createSurvey();
  target.getPageByName("page1").removeElement(target.getQuestionByName("q2"));
  const map = createMap(real, target);
  expect(map.hasReal(real.getQuestionByName("q1").locTitle)).toBeTruthy();
  const q2Title = real.getQuestionByName("q2").locTitle;
  expect(map.hasReal(q2Title)).toBeFalsy();
  expect(map.getCopies(q2Title)).toBeFalsy();
  expect(map.mirrorIntoCopies(q2Title)).toBeFalsy();
  expect(map.hasReal(undefined)).toBeFalsy();
  expect(map.getItemByEditableCopy(undefined)).toBeFalsy();
});

test("build replaces the previous mapping and clear drops it", () => {
  const real = createSurvey();
  const map = createMap(real, createSurvey());
  const realTitle = real.getQuestionByName("q1").locTitle;
  const target = createSurvey();
  map.build(createRoot(real), createRoot(target));
  expect(map.getCopies(realTitle)).toEqual([target.getQuestionByName("q1").locTitle]);
  map.clear();
  expect(map.hasReal(realTitle)).toBeFalsy();
  expect(map.getItemByEditableCopy(target.getQuestionByName("q1").locTitle)).toBeFalsy();
});
