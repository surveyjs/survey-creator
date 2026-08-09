import { ItemValue, QuestionDropdownModel, settings as surveySettings } from "survey-core";
import { TranslationSideBySide, getTranslationLocaleProgress } from "../../src/components/tabs/translation-side-by-side";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
import { QuestionLinkValueModel } from "../../src/components/link-value";
import { CreatorTester } from "../creator-tester";
import "survey-core/survey.i18n";

const languagesJSON = {
  locale: "de",
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "q1", title: { default: "Question 1", de: "Frage 1" } },
        { type: "text", name: "q2", title: "Question 2" }
      ]
    }
  ]
};

function createSideBySideCreator(json: any = languagesJSON, view?: "forms" | "grid"): CreatorTester {
  const creator = new CreatorTester({ showTranslationTab: true, translationMode: "sideBySide" });
  if (!!view) {
    creator.translationSideBySideView = view;
  }
  // The survey takes ownership of the loaded JSON object, so pass a copy to keep tests independent.
  creator.JSON = JSON.parse(JSON.stringify(json));
  creator.activeTab = "translation";
  return creator;
}
function getModel(creator: CreatorTester): TranslationSideBySide {
  return <TranslationSideBySide>(<TabTranslationPlugin>creator.getPlugin("translation")).model;
}
function getTargetDropdown(creator: CreatorTester): QuestionDropdownModel {
  return <QuestionDropdownModel>getModel(creator).settingsSurvey.getQuestionByName("targetLocale");
}
function getSourceDropdown(creator: CreatorTester): QuestionDropdownModel {
  return <QuestionDropdownModel>getModel(creator).settingsSurvey.getQuestionByName("sourceLocale");
}
function getProgressQuestion(creator: CreatorTester): QuestionLinkValueModel {
  return <QuestionLinkValueModel>getModel(creator).settingsSurvey.getQuestionByName("translationProgress");
}
// The share of the survey translated into a language, as the target dropdown list shows it -
// absent for a language nothing is translated into.
function getTargetProgress(creator: CreatorTester, locale: string): string {
  const choice = getTargetDropdown(creator).choices.filter((item: ItemValue) => item.value === locale)[0];
  return !!choice ? getTranslationLocaleProgress(choice) : undefined;
}
function getChoiceValues(question: QuestionDropdownModel): Array<any> {
  return question.choices.map((item: ItemValue) => item.value);
}
function mockConfirmDialog(run: () => void): void {
  const originalCallback = surveySettings.confirmActionAsync;
  surveySettings.confirmActionAsync = (text, callback) => {
    callback(true);
    return true;
  };
  try {
    run();
  } finally {
    surveySettings.confirmActionAsync = originalCallback;
  }
}

test("translation languages: the ones the survey stores strings for, never a language without them", () => {
  const creator = createSideBySideCreator();
  // German is the survey's only translation - the target dropdown shows how much of the survey
  // it covers, and it is what the source dropdown offers next to the default language (not
  // while it is the target itself: the two dropdowns never hold the same language).
  expect(getTargetProgress(creator, "de")).toBe("1 / 2");
  expect(getChoiceValues(getSourceDropdown(creator))).toEqual(["default"]);
  // Picking a language without stored strings makes it the target, but not a translation the
  // survey has: no counter of its own, and nothing to translate from.
  getTargetDropdown(creator).value = "fr";
  expect(getModel(creator).targetLocale).toBe("fr");
  expect(getTargetProgress(creator, "fr")).toBeFalsy();
  expect(getChoiceValues(getSourceDropdown(creator))).toEqual(["default", "de"]);
});

test("the default language is never a translation language, whatever the survey locale is", () => {
  ["de", "en", ""].forEach(locale => {
    const json = JSON.parse(JSON.stringify(languagesJSON));
    json.locale = locale;
    const creator = createSideBySideCreator(json);
    getModel(creator).targetLocale = "it";
    // It is the reference the translations are measured against: it is offered as a source
    // (as "default"), never as a target and never with a counter of its own.
    expect(getChoiceValues(getSourceDropdown(creator))).toEqual(["default", "de"]);
    expect(getChoiceValues(getTargetDropdown(creator)).indexOf("default")).toBe(-1);
    expect(getTargetProgress(creator, "en")).toBeFalsy();
  });
});

test("a survey without translations: no counters, and the progress link appears with the target language", () => {
  const creator = createSideBySideCreator({
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "Question 1" }] }]
  });
  const model = getModel(creator);
  expect(getChoiceValues(getSourceDropdown(creator))).toEqual(["default"]);
  expect(getTargetDropdown(creator).choices.every((item: ItemValue) => !getTranslationLocaleProgress(item))).toBeTruthy();
  // No language is being translated - the progress link says nothing.
  expect(model.targetLocale || "").toBe("");
  expect(getProgressQuestion(creator).visible).toBeFalsy();
  // Targeting a language shows the progress of a translation that has not started yet.
  model.targetLocale = "de";
  expect(getProgressQuestion(creator).visible).toBeTruthy();
  expect(getProgressQuestion(creator).value).toBe(0);
  expect(getTargetProgress(creator, "de")).toBeFalsy();
  // The first stored string makes it a translation the survey has.
  model.targetSurvey.getQuestionByName("q1").locTitle.text = "Frage 1";
  expect(getProgressQuestion(creator).value).toBe(1);
  expect(getTargetProgress(creator, "de")).toBe("1 / 1");
  // And clearing the language's strings takes it back to where it started.
  mockConfirmDialog(() => model.clearTargetLocaleStrings());
  expect(getProgressQuestion(creator).value).toBe(0);
  expect(getTargetProgress(creator, "de")).toBeFalsy();
});

test("a language joins the translations with its first stored string and leaves them when it is cleared", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  model.targetLocale = "fr";
  expect(getTargetProgress(creator, "fr")).toBeFalsy();
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "Question 2 fr";
  expect(getTargetProgress(creator, "fr")).toBe("1 / 2");
  // The source dropdown follows on the next language switch - it lists what can be translated from.
  model.targetLocale = "it";
  expect(getChoiceValues(getSourceDropdown(creator))).toEqual(["default", "de", "fr"]);
  // Clearing the only French string drops the counter, and French is not a source any more.
  creator.survey.getQuestionByName("q2").locTitle.setLocaleText("fr", "");
  expect(getTargetProgress(creator, "fr")).toBeFalsy();
  model.targetLocale = "fr";
  expect(getChoiceValues(getSourceDropdown(creator))).toEqual(["default", "de"]);
});

test("counts update immediately on an inline edit and follow a CSV import", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  const progress = getProgressQuestion(creator);
  expect(progress.value).toBe(1);
  expect(getTargetProgress(creator, "de")).toBe("1 / 2");
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "Frage 2";
  expect(progress.value).toBe(2);
  expect(getTargetProgress(creator, "de")).toBe("2 / 2");
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "";
  expect(progress.value).toBe(1);
  expect(getTargetProgress(creator, "de")).toBe("1 / 2");
  // A bulk write refreshes the counts once, through the reset that follows it.
  model.importFromNestedArray([
    ["description", "fr"],
    ["survey.page1.q1.title", "Question 1 fr"]
  ]);
  expect(getTargetProgress(creator, "de")).toBe("1 / 2");
  expect(getTargetProgress(creator, "fr")).toBe("1 / 2");
});

const twoPagesJSON = {
  locale: "de",
  pages: [
    { name: "page1", elements: [{ type: "text", name: "q1", title: { default: "Q1", de: "F1" } }] },
    { name: "page2", elements: [{ type: "text", name: "q2", title: { default: "Q2", de: "F2" } }] }
  ]
};

test("grid view: counts ignore the page scope and clearing the language covers the whole survey", () => {
  const creator = createSideBySideCreator(twoPagesJSON, "grid");
  const model = getModel(creator);
  expect(model.isSideBySideGrid).toBeTruthy();
  model.filteredPage = creator.survey.pages[0];
  // The denominator is the whole survey, never the grid's page scope.
  const progress = getProgressQuestion(creator);
  expect(progress.value).toBe(2);
  expect(progress.linkValueText).toBe("2 of 2 strings translated");
  expect(getTargetProgress(creator, "de")).toBe("2 / 2");
  // And so is the deletion.
  mockConfirmDialog(() => progress.doClearClick());
  expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBeFalsy();
  expect(creator.survey.getQuestionByName("q2").locTitle.getLocaleText("de")).toBeFalsy();
  expect(getProgressQuestion(creator).value).toBe(0);
  expect(getTargetProgress(creator, "de")).toBeFalsy();
});
