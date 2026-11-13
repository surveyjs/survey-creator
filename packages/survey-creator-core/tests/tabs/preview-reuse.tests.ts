// the Theme tab's property grid needs its custom questions and editors registered
import "../../src/custom-questions/question-file";
import "../../src/custom-questions/question-spin-editor";
import "../../src/custom-questions/question-color";
import "../../src/components/tabs/theme-custom-questions/color-alpha";
import "../../src/property-grid/theme-settings";
import "../../src/property-grid/header-settings";
import { CreatorTester } from "../creator-tester";
import { TabTestPlugin } from "../../src/components/tabs/test-plugin";
import { TabThemePlugin } from "../../src/components/tabs/theme-plugin";
import { TestSurveyTabViewModel } from "../../src/components/tabs/test";
import { TabJsonEditorTextareaPlugin, TextareaJsonEditorModel } from "../../src/components/tabs/json-editor-textarea";
import { ItemValue, QuestionCheckboxModel, SurveyModel } from "survey-core";
import { vi } from "vitest";
import "survey-core/survey.i18n";

const surveyJSON = {
  cookieName: "the-cookie",
  pages: [
    { name: "page1", elements: [{ type: "text", name: "q1", title: "Question 1" }] },
    { name: "page2", elements: [{ type: "checkbox", name: "q2", choices: ["a", "b"] }] }
  ]
};
function createCreator(options: any = {}): CreatorTester {
  const creator = new CreatorTester({ showJSONEditorTab: true, showThemeTab: true, showTranslationTab: true, ...options });
  creator.JSON = JSON.parse(JSON.stringify(surveyJSON));
  return creator;
}
function getPlugin(creator: CreatorTester): TabTestPlugin {
  return <TabTestPlugin>creator.getPlugin("test");
}
// From any tab to a new preview, and the preview's survey.
function openPreview(creator: CreatorTester): SurveyModel {
  if (creator.activeTab === "preview") creator.switchTab("designer");
  creator.switchTab("preview");
  return getPlugin(creator).model.survey;
}
function previewTitle(creator: CreatorTester, name: string = "q1"): string {
  return openPreview(creator).getQuestionByName(name).title;
}
// Every path a change reaches the designer survey by must show in the next preview. Today each activation
// serializes the survey again; these hold any reuse of the preview's JSON to the same rule.
describe("Preview: every change shows in the next preview", () => {
  test("Each change path shows in the next preview", () => {
    const creator = createCreator();
    openPreview(creator);
    const q1 = () => creator.survey.getQuestionByName("q1");

    // external code, the way the property grid and inline editors write too
    q1().title = "direct";
    expect(previewTitle(creator)).toBe("direct");

    // the property grid
    creator.switchTab("designer");
    creator.selectElement(q1());
    creator["designerPropertyGrid"].survey.getQuestionByName("title").value = "from grid";
    expect(previewTitle(creator)).toBe("from grid");

    // the design surface
    creator.switchTab("designer");
    creator.clickToolboxItem({ type: "text", name: "added" });
    expect(openPreview(creator).getQuestionByName("added")).toBeTruthy();
    creator.switchTab("designer");
    creator.deleteElement(creator.survey.getQuestionByName("added"));
    expect(openPreview(creator).getQuestionByName("added")).toBeFalsy();

    // undo / redo
    creator.undo();
    expect(openPreview(creator).getQuestionByName("added")).toBeTruthy();
    creator.redo();
    expect(openPreview(creator).getQuestionByName("added")).toBeFalsy();

    // collaboration applies remote edits with the undo-redo controller ignoring them
    creator.undoRedoController.ignoreChanges = true;
    q1().title = "remote";
    creator.undoRedoController.ignoreChanges = false;
    expect(previewTitle(creator)).toBe("remote");

    // a translation
    q1().locTitle.setLocaleText("de", "Frage 1");
    expect(openPreview(creator).getQuestionByName("q1").locTitle.getLocaleText("de")).toBe("Frage 1");

    // the survey locale
    creator.survey.locale = "fr";
    expect(openPreview(creator).locale).toBe("fr");
    creator.survey.locale = "";

    // an array changed through a mutator
    (<QuestionCheckboxModel>creator.survey.getQuestionByName("q2")).choices.push(new ItemValue("c"));
    expect((<QuestionCheckboxModel>openPreview(creator).getQuestionByName("q2")).choices.map(c => c.value)).toStrictEqual(["a", "b", "c"]);
  });
  test("A new survey from creator.JSON or creator.text shows in the next preview", () => {
    const creator = createCreator();
    openPreview(creator);
    creator.JSON = { elements: [{ type: "text", name: "q1", title: "set JSON" }] };
    expect(previewTitle(creator)).toBe("set JSON");
    creator.text = JSON.stringify({ elements: [{ type: "text", name: "q1", title: "set text" }] });
    expect(previewTitle(creator)).toBe("set text");
  });
  test("The JSON tab: an applied text shows, a text that does not parse keeps the tab", () => {
    const creator = createCreator();
    openPreview(creator);
    creator.switchTab("json");
    const model = <TextareaJsonEditorModel>(<TabJsonEditorTextareaPlugin>creator.getPlugin("json")).model;
    model.text = JSON.stringify({ elements: [{ type: "text", name: "q1", title: "from JSON tab" }] });
    creator.switchTab("preview");
    expect(getPlugin(creator).model.survey.getQuestionByName("q1").title).toBe("from JSON tab");

    creator.switchTab("json");
    const model2 = <TextareaJsonEditorModel>(<TabJsonEditorTextareaPlugin>creator.getPlugin("json")).model;
    model2.text = "{a: ";
    creator.switchTab("preview");
    expect(creator.activeTab).toBe("json");
    model2.text = JSON.stringify({ elements: [{ type: "text", name: "q1", title: "fixed" }] });
    creator.switchTab("preview");
    expect(creator.activeTab).toBe("preview");
    expect(getPlugin(creator).model.survey.getQuestionByName("q1").title).toBe("fixed");
  });
  test("A theme applied in the Theme tab shows in the next preview", () => {
    const creator = createCreator();
    openPreview(creator);
    creator.switchTab("theme");
    creator.applyTheme({ headerView: "advanced", cssVariables: {} });
    expect(openPreview(creator).headerView).toBe("advanced");
  });
  test("pageEditMode and storeSjsVersion change what the preview gets", () => {
    const creator = createCreator();
    expect(openPreview(creator).pages).toHaveLength(2);
    creator.storeSjsVersion = true;
    openPreview(creator);
    expect(getPlugin(creator).model["json"].sjsVersion).toBeTruthy();
    creator.storeSjsVersion = false;
    openPreview(creator);
    expect(getPlugin(creator).model["json"].sjsVersion).toBeUndefined();
    creator.pageEditMode = "single";
    openPreview(creator);
    expect(getPlugin(creator).model["json"].pages).toBeUndefined();
  });
});

describe("Preview: what callers get is theirs", () => {
  test("The preview removing cookieName, or changing its JSON, reaches neither the creator nor the next preview", () => {
    const creator = createCreator();
    openPreview(creator);
    const model = getPlugin(creator).model;
    expect(model["json"].cookieName).toBeUndefined();
    model["json"].pages[0].elements[0].title = "changed by a caller";
    const next = openPreview(creator);
    expect(next.cookieName).toBeFalsy();
    expect(next.getQuestionByName("q1").title).toBe("Question 1");
    expect(creator.JSON.cookieName).toBe("the-cookie");
    expect(creator.JSON.pages[0].elements[0].title).toBe("Question 1");
  });
  test("A setup handler changing options.json changes only its own survey", () => {
    const creator = createCreator();
    creator.onSurveyInstanceSetupHandlers.add((_, options) => {
      if (options.area === "preview-tab") options.json.pages[0].elements[0].title += "+";
    });
    expect(previewTitle(creator)).toBe("Question 1+");
    expect(previewTitle(creator)).toBe("Question 1+");
  });
  test("Every activation raises the survey creation events, as before", () => {
    const creator = createCreator();
    const areas: Array<string> = [];
    let previewCreated = 0;
    creator.onSurveyInstanceCreated.add((_, options) => { if (options.reason === "preview") areas.push(options.area); });
    creator.onPreviewSurveyCreated.add(() => previewCreated++);
    openPreview(creator);
    openPreview(creator);
    expect(areas).toStrictEqual(["preview-tab", "preview-tab"]);
    expect(previewCreated).toBe(2);
  });
});

describe("Preview: handlers and disposal", () => {
  test("update() on the same model does not add handlers", () => {
    const creator = createCreator();
    openPreview(creator);
    const plugin = getPlugin(creator);
    const model: TestSurveyTabViewModel = plugin.model;
    const count = () => (<any>model.onPropertyChanged).callbacks.length;
    const afterActivation = count();
    for (let i = 0; i < 5; i++) plugin.update();
    creator.applyTheme({ cssVariables: {} });
    expect(count()).toBe(afterActivation);
  });
  test("Test Again, update() and leaving the tab dispose the survey they replace or leave", () => {
    const creator = createCreator();
    const first = openPreview(creator);
    const model = getPlugin(creator).model;
    model.testAgain();
    expect(first.isDisposed).toBeTruthy();
    const second = model.survey;
    getPlugin(creator).update();
    expect(second.isDisposed).toBeTruthy();
    const third = model.survey;
    expect(third.isDisposed).toBeFalsy();
    creator.switchTab("designer");
    expect(third.isDisposed).toBeTruthy();
  });
  test("The Test Again action outlives the surveys it was shown in", () => {
    const creator = createCreator();
    openPreview(creator);
    const model = getPlugin(creator).model;
    const testAgain = model.testAgainAction;
    model.survey.doComplete();
    expect(testAgain.visible).toBeTruthy();
    testAgain.action();
    expect(testAgain.isDisposed).toBeFalsy();
    expect(testAgain.visible).toBeFalsy();
    model.survey.doComplete();
    expect(testAgain.visible).toBeTruthy();
    creator.switchTab("designer");
    expect(testAgain.visible).toBeFalsy();
    openPreview(creator).doComplete();
    expect(testAgain.isDisposed).toBeFalsy();
    expect(testAgain.visible).toBeTruthy();
    const container = getPlugin(creator).model.survey.findLayoutElement("complete-customization").data;
    expect(container.actions[0]).toBe(testAgain);
  });
  test("Preview, Theme, Preview: each tab keeps its own survey and rules", () => {
    const creator = createCreator();
    const preview1 = openPreview(creator);
    creator.switchTab("theme");
    const themeModel = (<TabThemePlugin>creator.getPlugin("theme")).model;
    const themeSurvey = themeModel.survey;
    expect(preview1.isDisposed).toBeTruthy();
    expect(themeSurvey.showTimer).toBeFalsy();
    expect(themeSurvey.getQuestionByName("q1").title).toBe("Question 1");
    const preview2 = openPreview(creator);
    expect(themeSurvey.isDisposed).toBeTruthy();
    expect(preview2.isDisposed).toBeFalsy();
    expect(preview2.getQuestionByName("q1").title).toBe("Question 1");
    preview2.doComplete();
    expect(getPlugin(creator).model.testAgainAction.visible).toBeTruthy();
  });
  test("showInvisibleElements still reaches the survey and resets on show", () => {
    const creator = createCreator();
    openPreview(creator);
    const model = getPlugin(creator).model;
    model.showInvisibleElements = true;
    expect(model.survey.showInvisibleElements).toBeTruthy();
    model.testAgain();
    expect(model.showInvisibleElements).toBeFalsy();
    expect(model.survey.showInvisibleElements).toBeFalsy();
  });
  test("An activation does not assign the new survey's showInvisibleElements again", () => {
    // each assignment runs every condition of the survey again, the same value included
    const creator = createCreator();
    const setter = vi.spyOn(SurveyModel.prototype, "showInvisibleElements", "set");
    openPreview(creator);
    expect(setter).not.toHaveBeenCalled();
    setter.mockRestore();
  });
});
