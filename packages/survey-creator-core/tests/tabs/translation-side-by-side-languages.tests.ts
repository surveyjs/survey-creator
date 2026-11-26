import { ItemValue, QuestionDropdownModel, settings as surveySettings } from "survey-core";
import { TranslationSideBySide, getTranslationLocaleProgress } from "../../src/components/tabs/translation-side-by-side";
import { TabTranslationPlugin } from "../../src/components/tabs/translation-plugin";
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

function createSideBySideCreator(json: any = languagesJSON, view?: "form" | "grid"): CreatorTester {
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
// The progress text of the side panel and the Clear all button below it.
function getProgressText(creator: CreatorTester): string {
  return (<any>getModel(creator).settingsSurvey.getQuestionByName("translationProgress")).html;
}
function canClearAll(creator: CreatorTester): boolean {
  return getModel(creator).getSettingsAction("svc-translation-clear-all").enabled;
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
// Clear all asks through a danger alert (showConfirmDialog), confirmed here.
function mockConfirmDialog(run: () => void): void {
  const origin = surveySettings.showDialog;
  const shown: Array<any> = [];
  surveySettings.showDialog = (options: any): any => {
    const actions = [{ id: "cancel", title: "" }, { id: "apply", title: "" }];
    shown.push(options);
    return { footerToolbar: { actions: actions, getActionById: (id: string): any => actions.filter(a => a.id === id)[0] } };
  };
  try {
    run();
    shown.forEach(options => options.onApply());
  } finally {
    surveySettings.showDialog = origin;
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

test("a survey without translations: no counters, and the progress text appears with the target language", () => {
  const creator = createSideBySideCreator({
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "Question 1" }] }]
  });
  const model = getModel(creator);
  expect(getChoiceValues(getSourceDropdown(creator))).toEqual(["default"]);
  expect(getTargetDropdown(creator).choices.every((item: ItemValue) => !getTranslationLocaleProgress(item))).toBeTruthy();
  // No language is being translated - the progress text says nothing.
  expect(model.targetLocale || "").toBe("");
  expect(getProgressText(creator)).toBe("");
  // Targeting a language shows the progress of a translation that has not started yet.
  model.targetLocale = "de";
  expect(getProgressText(creator)).toBe("0 of 1 strings translated");
  // Nothing is stored for the language - there is nothing Clear all could drop.
  expect(canClearAll(creator)).toBeFalsy();
  expect(getTargetProgress(creator, "de")).toBeFalsy();
  // The first stored string makes it a translation the survey has.
  model.targetSurvey.getQuestionByName("q1").locTitle.text = "Frage 1";
  expect(getProgressText(creator)).toBe("1 of 1 strings translated");
  expect(canClearAll(creator)).toBeTruthy();
  expect(getTargetProgress(creator, "de")).toBe("1 / 1");
  // And clearing the language's strings takes it back to where it started.
  mockConfirmDialog(() => model.clearTargetLocaleStrings());
  expect(getProgressText(creator)).toBe("0 of 1 strings translated");
  expect(canClearAll(creator)).toBeFalsy();
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
  expect(getProgressText(creator)).toBe("1 of 2 strings translated");
  expect(getTargetProgress(creator, "de")).toBe("1 / 2");
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "Frage 2";
  expect(getProgressText(creator)).toBe("2 of 2 strings translated");
  expect(getTargetProgress(creator, "de")).toBe("2 / 2");
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "";
  expect(getProgressText(creator)).toBe("1 of 2 strings translated");
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
  expect(getProgressText(creator)).toBe("2 of 2 strings translated");
  expect(getTargetProgress(creator, "de")).toBe("2 / 2");
  // And so is the deletion.
  mockConfirmDialog(() => model.getSettingsAction("svc-translation-clear-all").action());
  expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBeFalsy();
  expect(creator.survey.getQuestionByName("q2").locTitle.getLocaleText("de")).toBeFalsy();
  expect(getProgressText(creator)).toBe("0 of 2 strings translated");
  expect(getTargetProgress(creator, "de")).toBeFalsy();
});
