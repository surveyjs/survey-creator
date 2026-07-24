import { QuestionMatrixDropdownModelBase } from "survey-core";
import { SurveyCreatorModel } from "../../src/creator-base";
import { planTranslationRefresh, applyTranslationRefresh } from "../../src/collaboration/translation-refresh";
import type { ISyncMessage } from "../../src/collaboration/undo-redo-serializer";

// Regression for: "if the second client enables a language that arrived via sync,
// the phrases are not shown as if there are no translations." Reproduced at the
// Translation-model level against a real (headless) creator.

function getTranslationModel(creator: SurveyCreatorModel): any {
  creator.activeTab = "translation";
  const plugin: any = creator.getPlugin("translation");
  plugin?.activate?.();
  return plugin.model;
}

// Find the value the strings-survey holds for a given translation item + locale,
// by scanning the matrix questions' row values.
function cellValue(model: any, locale: string): string | undefined {
  const questions = model.stringsSurvey.getAllQuestions();
  for (const q of questions as QuestionMatrixDropdownModelBase[]) {
    const val = (q as any).value;
    if (!val) continue;
    for (const rowName of Object.keys(val)) {
      const row = val[rowName];
      if (row && typeof row === "object" && locale in row) return row[locale];
    }
  }
  return undefined;
}

describe("enabling a locale that arrived via sync shows its translations", () => {
  it("populates the de column when de is enabled after a synced edit", () => {
    const creator = new SurveyCreatorModel({ showTranslationTab: true });
    creator.JSON = {
      pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "Q1" }] }]
    };

    const model = getTranslationModel(creator);

    // Sanity: de is not listed yet.
    expect(model.getVisibleLocales()).not.toContain("de");

    // Simulate a remote sync writing a German title (what applySerialized does).
    const q: any = creator.survey.getQuestionByName("q1");
    q.locTitle.setLocaleText("de", "Frage");

    // Run the refresh for a "/title/de" property message.
    const msg: ISyncMessage = {
      kind: "transaction",
      id: "t1",
      actions: [{ kind: "property", locator: "/pages/0/elements/0/title/de", value: "Frage" }]
    } as ISyncMessage;
    const plan = planTranslationRefresh(msg, {
      visible: new Set<string>(model.getVisibleLocales()),
      localeCodes: new Set<string>(["de", "fr", "es", "it", "en"])
    });
    applyTranslationRefresh(model, plan);

    // de is now listed but NOT selected (appears in the list, checkbox off).
    expect(model.getVisibleLocales()).toContain("de");
    expect(model.getSelectedLocales()).not.toContain("de");

    // Enable de (tick the checkbox).
    model.setSelectedLocales([...model.getSelectedLocales(), "de"]);
    expect(model.getSelectedLocales()).toContain("de");

    // The de column now shows the synced translation (this is empty without
    // the updateStringsSurveyData() refresh).
    expect(cellValue(model, "de")).toEqual("Frage");
  });
});
