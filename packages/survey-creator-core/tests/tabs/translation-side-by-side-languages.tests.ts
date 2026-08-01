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
  return getLanguagesQuestion(creator).value;
}
function getRowLink(creator: CreatorTester, index: number): QuestionLinkValueModel {
  return <QuestionLinkValueModel>getLanguagesQuestion(creator).visibleRows[index].cells[0].question;
}
function getRowActions(creator: CreatorTester, index: number): Array<IAction> {
  const matrix = getLanguagesQuestion(creator);
  const row = matrix.visibleRows[index];
  return getModel(creator).settingsSurvey.getUpdatedMatrixRowActions(matrix, row, []);
}
function getDeleteAction(creator: CreatorTester, index: number): IAction {
  return getRowActions(creator, index).filter(action => action.id === "delete-language")[0];
}
function getTargetDropdown(creator: CreatorTester): QuestionDropdownModel {
  return <QuestionDropdownModel>getModel(creator).settingsSurvey.getQuestionByName("targetLocale");
}
function getSourceDropdown(creator: CreatorTester): QuestionDropdownModel {
  return <QuestionDropdownModel>getModel(creator).settingsSurvey.getQuestionByName("sourceLocale");
}
function mockConfirmDialog(run: (getOptions: () => any) => void): void {
  const prevShowDialog = surveySettings.showDialog;
  let confirmOptions: any = undefined;
  surveySettings.showDialog = <any>((options: any) => {
    confirmOptions = options;
    return { footerToolbar: { getActionById: (id: string) => new Action({ id: id }) } };
  });
  try {
    run(() => confirmOptions);
  } finally {
    surveySettings.showDialog = prevShowDialog;
  }
}

test("languages matrix rows: default row first with total only, used locales only, no row for a strings-less target", () => {
  const creator = createSideBySideCreator();
  const rows = getRows(creator);
  expect(rows.map(row => row.name)).toEqual(["", "de"]);
  expect(rows[0].progress).toBe("2 strings");
  expect(rows[1].progress).toBe("1/2");
  // Picking a language without stored strings in the target dropdown adds no row - the row
  // appears only when the first string is stored for it.
  getTargetDropdown(creator).value = "fr";
  expect(getModel(creator).targetLocale).toBe("fr");
  expect(getRows(creator).map(row => row.name)).toEqual(["", "de"]);
});

test("default language row has no delete action, other rows have one", () => {
  const creator = createSideBySideCreator();
  expect(getDeleteAction(creator, 0)).toBeFalsy();
  expect(getDeleteAction(creator, 1)).toBeTruthy();
});

test("a row appears with the first stored string of a new target and disappears when it is cleared", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  model.targetLocale = "fr";
  expect(getRows(creator).map(row => row.name)).toEqual(["", "de"]);
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "Question 2 fr";
  const rows = getRows(creator);
  expect(rows.map(row => row.name)).toEqual(["", "de", "fr"]);
  expect(rows[2].progress).toBe("1/2");
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "";
  expect(getRows(creator).map(row => row.name)).toEqual(["", "de"]);
});

test("clicking a language retargets: model, survey locale, target dropdown and row marking", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  expect(model.targetLocale).toBe("de");
  expect(getRowLink(creator, 0).isSelected).toBeFalsy();
  expect(getRowLink(creator, 1).isSelected).toBeTruthy();
  getRowLink(creator, 0).doLinkClick();
  expect(model.targetLocale || "").toBe("");
  expect(creator.survey.locale || "").toBe("");
  expect(getTargetDropdown(creator).value).toBe("default");
  expect(getRowLink(creator, 0).isSelected).toBeTruthy();
  expect(getRowLink(creator, 1).isSelected).toBeFalsy();
  getRowLink(creator, 1).doLinkClick();
  expect(model.targetLocale).toBe("de");
  expect(creator.survey.locale).toBe("de");
  expect(getTargetDropdown(creator).value).toBe("de");
  expect(model.targetSurvey.locale).toBe("de");
  expect(getRowLink(creator, 1).isSelected).toBeTruthy();
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
  expect(getRows(creator)[1].progress).toBe("1/2");
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "Frage 2";
  expect(getRows(creator)[1].progress).toBe("2/2");
  model.targetSurvey.getQuestionByName("q2").locTitle.text = "";
  expect(getRows(creator)[1].progress).toBe("1/2");
  model.importFromNestedArray([
    ["description", "fr"],
    ["survey.page1.q1.title", "Question 1 fr"]
  ]);
  const rows = getRows(creator);
  expect(rows.map(row => row.name)).toEqual(["", "de", "fr"]);
  expect(rows[2].progress).toBe("1/2");
});

test("delete language: confirm dialog, cancel keeps the locale, apply removes it and retargets to default", () => {
  const creator = createSideBySideCreator();
  const model = getModel(creator);
  mockConfirmDialog((getOptions) => {
    const deleteAction = getDeleteAction(creator, 1);
    expect(deleteAction).toBeTruthy();
    (<Action>deleteAction).action();
    expect(getOptions()).toBeTruthy();
    // Cancel keeps the language and its strings.
    getOptions().onCancel();
    expect(getRows(creator).map(row => row.name)).toEqual(["", "de"]);
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBe("Frage 1");
    // Apply removes the strings and retargets to the default language.
    getOptions().onApply();
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBeFalsy();
    expect(getRows(creator).map(row => row.name)).toEqual([""]);
    expect(model.targetLocale || "").toBe("");
    expect(getTargetDropdown(creator).value).toBe("default");
    expect(creator.survey.locale || "").toBe("");
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
  expect(getRows(creator)[1].progress).toBe("2/2");
  mockConfirmDialog((getOptions) => {
    model.deleteLanguage("de");
    getOptions().onApply();
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toBeFalsy();
    expect(creator.survey.getQuestionByName("q2").locTitle.getLocaleText("de")).toBeFalsy();
    expect(getRows(creator).map(row => row.name)).toEqual([""]);
  });
});
