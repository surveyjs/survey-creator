import { Action, IAction, QuestionDropdownModel, QuestionMatrixDynamicModel, settings as surveySettings } from "survey-core";
import { TranslationSideBySide } from "../../src/components/tabs/translation-side-by-side";
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
function getLanguagesQuestion(creator: CreatorTester): QuestionMatrixDynamicModel {
  return getModel(creator).languagesQuestion;
}
function getRows(creator: CreatorTester): Array<any> {
  return getLanguagesQuestion(creator).value || [];
}
function getRowLink(creator: CreatorTester, index: number): QuestionLinkValueModel {
  return <QuestionLinkValueModel>getLanguagesQuestion(creator).visibleRows[index].cells[0].question;
}
// The matrix builds the "remove-row" action itself for the rows it may remove (canRemoveRow),
// so the actions of an existing row are the default ones passed through the creator's hook.
function getRowActions(creator: CreatorTester, index: number, actions: Array<IAction>): Array<IAction> {
  const matrix = getLanguagesQuestion(creator);
  const row = matrix.visibleRows[index];
  return getModel(creator).settingsSurvey.getUpdatedMatrixRowActions(matrix, row, actions);
}
function canRemoveRow(creator: CreatorTester, index: number): boolean {
  const matrix = getLanguagesQuestion(creator);
  return matrix.canRemoveRows && matrix.canRemoveRow(matrix.visibleRows[index]);
}
function removeRow(creator: CreatorTester, index: number): void {
  const matrix = getLanguagesQuestion(creator);
  matrix.removeRowUI(matrix.visibleRows[index]);
}
function getTargetDropdown(creator: CreatorTester): QuestionDropdownModel {
  return <QuestionDropdownModel>getModel(creator).settingsSurvey.getQuestionByName("targetLocale");
}
function getSourceDropdown(creator: CreatorTester): QuestionDropdownModel {
  return <QuestionDropdownModel>getModel(creator).settingsSurvey.getQuestionByName("sourceLocale");
}
// The matrix confirms a row removal through the library's confirm dialog (settings.showDialog):
// the mock captures its options so a test can apply or cancel it.
function mockConfirmDialog(run: (getOptions: () => any) => void): void {
  const prevShowDialog = surveySettings.showDialog;
  let confirmOptions: any = undefined;
  surveySettings.showDialog = <any>((options: any) => {
    confirmOptions = options;
    return { footerToolbar: { getActionById: (id: string) => new Action({ id: id }), setActionsAppearance: () => { } } };
  });
  try {
    run(() => confirmOptions);
  } finally {
    surveySettings.showDialog = prevShowDialog;
  }
}

test("languages matrix rows: the survey's translation languages only, no default row, no row for a strings-less target", () => {
  const creator = createSideBySideCreator();
  const rows = getRows(creator);
  expect(rows.map(row => row.name)).toEqual(["de"]);
  expect(rows[0].progress).toBe("1/2");
  // Picking a language without stored strings in the target dropdown adds no row - the row
  // appears only when the first string is stored for it.
  getTargetDropdown(creator).value = "fr";
  expect(getModel(creator).targetLocale).toBe("fr");
  expect(getRows(creator).map(row => row.name)).toEqual(["de"]);
});

test("the default language is never a row, whatever the survey locale is", () => {
  ["de", "en", ""].forEach(locale => {
    const json = JSON.parse(JSON.stringify(languagesJSON));
    json.locale = locale;
    const creator = createSideBySideCreator(json);
    expect(getRows(creator).map(row => row.name)).toEqual(["de"]);
  });
});

test("the matrix is hidden while the survey has no translations", () => {
  const creator = createSideBySideCreator({
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "Question 1" }] }]
  });
  const model = getModel(creator);
  expect(getRows(creator)).toHaveLength(0);
  expect(getLanguagesQuestion(creator).visible).toBeFalsy();
  // Targeting a language shows nothing yet - the row (and the matrix) appears with its first string.
  model.targetLocale = "de";
  expect(getLanguagesQuestion(creator).visible).toBeFalsy();
  model.targetSurvey.getQuestionByName("q1").locTitle.text = "Frage 1";
  expect(getRows(creator).map(row => row.name)).toEqual(["de"]);
  expect(getLanguagesQuestion(creator).visible).toBeTruthy();
  // And it is hidden again when the last language is deleted.
  mockConfirmDialog((getOptions) => {
    removeRow(creator, 0);
    getOptions().onApply();
    expect(getRows(creator)).toHaveLength(0);
    expect(getLanguagesQuestion(creator).visible).toBeFalsy();
  });
});

test("every row can be removed and gets the creator's remove action", () => {
  const creator = createSideBySideCreator();
  expect(canRemoveRow(creator, 0)).toBeTruthy();
  const action = <Action>getRowActions(creator, 0, [new Action({ id: "remove-row" })])[0];
  expect(action.iconName).toBe("icon-delete");
  expect(action.showTitle).toBeFalsy();
  expect(action.appearance.style).toBe("alert");
});

test("a row appears with the first stored string of a new target and survives until the next full refresh when it is cleared", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  model.targetLocale = "fr";
  expect(getRows(creator).map(row => row.name)).toEqual(["de"]);
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "Question 2 fr";
  const rows = getRows(creator);
  expect(rows.map(row => row.name)).toEqual(["de", "fr"]);
  expect(rows[1].progress).toBe("1/2");
  // Clearing the strings of a language does not refill the matrix - the row stays with no
  // progress instead, which is what a language being worked on looks like anyway.
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "";
  const clearedRows = getRows(creator);
  expect(clearedRows.map(row => row.name)).toEqual(["de", "fr"]);
  expect(clearedRows[1].progress).toBe("0/2");
  // The next full refresh - here the first string of another language - drops it.
  model.targetLocale = "it";
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "Question 2 it";
  expect(getRows(creator).map(row => row.name)).toEqual(["de", "it"]);
});

test("clicking a language retargets: model, target dropdown and row marking; the survey locale is untouched", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model.targetLocale).toBe("de");
  expect(getRowLink(creator, 0).isSelected).toBeTruthy();
  // No row is marked while no language is being translated.
  model.targetLocale = "";
  expect(getRowLink(creator, 0).isSelected).toBeFalsy();
  getRowLink(creator, 0).doLinkClick();
  expect(model.targetLocale).toBe("de");
  expect(getTargetDropdown(creator).value).toBe("de");
  expect(model.targetSurvey.locale).toBe("de");
  expect(getRowLink(creator, 0).isSelected).toBeTruthy();
  // The survey locale is the initial hint only - retargeting never writes it.
  expect(creator.survey.locale).toBe("de");
});

test("clicking the source's language takes it over as the target and resets the source to default", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  model.targetLocale = "fr";
  model.sourceLocale = "de";
  expect(getSourceDropdown(creator).value).toBe("de");
  const deIndex = getRows(creator).map(row => row.name).indexOf("de");
  getRowLink(creator, deIndex).doLinkClick();
  expect(model.targetLocale).toBe("de");
  expect(model.sourceLocale || "").toBe("");
  expect(getSourceDropdown(creator).value).toBe("default");
  expect(getTargetDropdown(creator).value).toBe("de");
});

test("counts update immediately on an inline edit and follow a CSV import", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(getRows(creator)[0].progress).toBe("1/2");
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "Frage 2";
  expect(getRows(creator)[0].progress).toBe("2/2");
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "";
  expect(getRows(creator)[0].progress).toBe("1/2");
  model.importFromNestedArray([
    ["description", "fr"],
    ["survey.page1.q1.title", "Question 1 fr"]
  ]);
  const rows = getRows(creator);
  expect(rows.map(row => row.name)).toEqual(["de", "fr"]);
  expect(rows[1].progress).toBe("1/2");
});

test("delete language: confirm dialog, cancel keeps the locale, apply removes it and clears the target", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  mockConfirmDialog((getOptions) => {
    removeRow(creator, 0);
    // The matrix removes nothing until its confirmation is applied.
    expect(getOptions()).toBeTruthy();
    expect(getRows(creator).map(row => row.name)).toEqual(["de"]);
    // Cancel keeps the language and its strings.
    getOptions().onCancel();
    expect(getRows(creator).map(row => row.name)).toEqual(["de"]);
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBe("Frage 1");
    // Apply removes the strings, leaves no language to translate and hides the matrix.
    getOptions().onApply();
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBeFalsy();
    expect(getRows(creator)).toHaveLength(0);
    expect(getLanguagesQuestion(creator).visible).toBeFalsy();
    expect(model.targetLocale || "").toBe("");
    expect(getTargetDropdown(creator).isEmpty()).toBeTruthy();
    expect(model.targetSurvey).toBeFalsy();
    // The survey keeps the locale it was loaded with - the tab never writes it.
    expect(creator.survey.locale).toBe("de");
  });
});

test("delete language: the source dropdown falls back to the default language", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  model.targetLocale = "fr";
  model.sourceLocale = "de";
  mockConfirmDialog((getOptions) => {
    removeRow(creator, 0);
    getOptions().onApply();
    expect(model.sourceLocale || "").toBe("");
    expect(getSourceDropdown(creator).value).toBe("default");
    expect(model.sourceSurvey.locale).toBeFalsy();
    // The target was another language - it is kept.
    expect(model.targetLocale).toBe("fr");
  });
});

const twoPagesJSON = {
  locale: "de",
  pages: [
    { name: "page1", elements: [{ type: "text", name: "q1", title: { default: "Q1", de: "F1" } }] },
    { name: "page2", elements: [{ type: "text", name: "q2", title: { default: "Q2", de: "F2" } }] }
  ]
};

test("grid view: counts ignore the page scope and delete covers the whole survey", () => {
  const creator = createSideBySideCreator(twoPagesJSON, "grid");
  const model = getModel(creator);
  expect(model.isSideBySideGrid).toBeTruthy();
  model.filteredPage = creator.survey.pages[0];
  // The denominator is the whole survey, never the grid's page scope.
  expect(getRows(creator)[0].progress).toBe("2/2");
  mockConfirmDialog((getOptions) => {
    removeRow(creator, 0);
    getOptions().onApply();
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBeFalsy();
    expect(creator.survey.getQuestionByName("q2").locTitle.getLocaleText("de")).toBeFalsy();
    expect(getRows(creator)).toHaveLength(0);
    expect(getLanguagesQuestion(creator).visible).toBeFalsy();
  });
});
