import { describe, expect, test } from "vitest";
import { SurveyModel } from "survey-core";
import { StringEditorViewModelBase } from "../src/components/string-editor";
import { ICreatorRichTextEditor } from "../src/rich-text-editor";
import { CreatorTester } from "./creator-tester";

const richStringAreas = ["designer-tab", "preview-tab", "theme-tab", "translation-tab:source-survey", "translation-tab:target-survey", "matrix-cell-question-popup-editor"];

function fakeEditor(): ICreatorRichTextEditor {
  return {
    getStringEditMode: () => "inline",
    attachEditor: () => ({ toolbar: undefined as any, detach: (): void => { return; } })
  };
}

function markdownHandler(_sender: any, options: any): void {
  const text = options.text || "";
  if (text.indexOf("**") < 0) return;
  options.html = "<strong>" + text.replace(/\*\*/g, "") + "</strong>";
}

function wireSample(creator: CreatorTester, surveys: { [area: string]: SurveyModel }): void {
  creator.onSurveyInstanceCreated.add((_sender, options) => {
    surveys[options.area] = options.survey;
    if (richStringAreas.indexOf(options.area) > -1) {
      options.survey.onTextMarkdown.add(markdownHandler);
    }
  });
}

const surveyJson = {
  title: "Survey **title**",
  elements: [
    { type: "text", name: "q", title: "Hello **world**", description: "Plain description" },
    { type: "text", name: "plain", title: "Plain title" }
  ]
};

describe("rich text registration", () => {
  test("registerRichTextEditor stores and clears the editor", () => {
    const creator = new CreatorTester();
    const editor = fakeEditor();
    expect(creator.richTextEditor).toBeFalsy();
    creator.registerRichTextEditor(editor);
    expect(creator.richTextEditor).toBe(editor);
    creator.registerRichTextEditor(undefined);
    expect(creator.richTextEditor).toBeFalsy();
  });

  test("rich strings are enabled only when an editor is registered and onHtmlToMarkdown sets text", () => {
    const creator = new CreatorTester();
    const setsText = (_sender: any, options: any): void => { options.text = options.html; };
    const leavesText = (): void => { return; };

    expect(creator.isRichStringsEnabled()).toBe(false);

    creator.registerRichTextEditor(fakeEditor());
    expect(creator.isRichStringsEnabled()).toBe(false);

    creator.onHtmlToMarkdown.add(leavesText);
    expect(creator.isRichStringsEnabled()).toBe(false);
    creator.onHtmlToMarkdown.remove(leavesText);

    creator.onHtmlToMarkdown.add(setsText);
    expect(creator.isRichStringsEnabled()).toBe(true);

    creator.registerRichTextEditor(undefined);
    expect(creator.isRichStringsEnabled()).toBe(false);
    creator.registerRichTextEditor(fakeEditor());
    expect(creator.isRichStringsEnabled()).toBe(true);

    creator.onHtmlToMarkdown.remove(setsText);
    expect(creator.isRichStringsEnabled()).toBe(false);

    creator.onHtmlToMarkdown.add((_sender, options) => { options.text = ""; });
    expect(creator.isRichStringsEnabled()).toBe(true);
  });

  test("string editors keep today's html-to-markdown probe", () => {
    const creator = new CreatorTester();
    creator.JSON = surveyJson;
    const loc = creator.survey.getQuestionByName("q").locTitle;
    expect(new StringEditorViewModelBase(loc, creator).editAsText).toBe(true);

    creator.onHtmlToMarkdown.add((_sender, options) => { options.text = options.html; });
    expect(new StringEditorViewModelBase(loc, creator).editAsText).toBe(false);

    creator.registerRichTextEditor(fakeEditor());
    expect(new StringEditorViewModelBase(loc, creator).editAsText).toBe(false);
    expect(creator.isRichStringsEnabled()).toBe(true);
  });
});

describe("rich text rendering", () => {
  test("registering an editor does not render survey strings", () => {
    const creator = new CreatorTester();
    creator.registerRichTextEditor(fakeEditor());
    creator.onHtmlToMarkdown.add((_sender, options) => { options.text = options.html; });
    creator.JSON = surveyJson;
    const question = creator.survey.getQuestionByName("q");
    expect(question.locTitle.hasHtml).toBeFalsy();
    expect(question.locTitle.renderedHtml).toBe("Hello **world**");
    expect(creator.survey.locTitle.renderedHtml).toBe("Survey **title**");
  });

  test("customer handlers format designer, preview, theme and translation surveys, not internal UI surveys", () => {
    const surveys: { [area: string]: SurveyModel } = {};
    const creator = new CreatorTester();
    wireSample(creator, surveys);
    creator.JSON = surveyJson;

    const question = creator.survey.getQuestionByName("q");
    expect(surveys["designer-tab"]).toBeTruthy();
    expect(question.locTitle.renderedHtml).toBe("<strong>Hello world</strong>");
    expect(creator.survey.locTitle.renderedHtml).toBe("<strong>Survey title</strong>");
    expect(creator.survey.getQuestionByName("plain").locTitle.hasHtml).toBeFalsy();
    expect(question.locDescription.renderedHtml).toBe("Plain description");

    creator.activeTab = "preview";
    expect(surveys["preview-tab"].getQuestionByName("q").locTitle.renderedHtml).toBe("<strong>Hello world</strong>");

    creator.createSurvey(surveyJson, "theme");
    expect(surveys["theme-tab"].getQuestionByName("q").locTitle.renderedHtml).toBe("<strong>Hello world</strong>");
    creator.createSurvey(surveyJson, "translation_source");
    creator.createSurvey(surveyJson, "translation_target");
    expect(surveys["translation-tab:source-survey"].getQuestionByName("q").locTitle.renderedHtml).toBe("<strong>Hello world</strong>");
    expect(surveys["translation-tab:target-survey"].getQuestionByName("q").locTitle.renderedHtml).toBe("<strong>Hello world</strong>");

    creator.selectElement(question);
    const propertyGrid = creator.propertyGrid;
    expect(surveys["property-grid"]).toBeTruthy();
    const titleEditor = propertyGrid.getQuestionByName("title");
    titleEditor.title = "Prop **title**";
    expect(titleEditor.locTitle.renderedHtml).toBe("Prop **title**");
    titleEditor.description = "Hint **bold**";
    expect(titleEditor.locDescription.renderedHtml).toContain("spg-bold");
    expect(titleEditor.locDescription.renderedHtml).not.toContain("<strong>");
  });

  test("the translation strings grid is not wired by the sample", () => {
    const surveys: { [area: string]: SurveyModel } = {};
    const creator = new CreatorTester({ showTranslationTab: true });
    wireSample(creator, surveys);
    creator.JSON = surveyJson;
    creator.activeTab = "translation";
    expect(surveys["translation-tab:table"]).toBeTruthy();
    expect(surveys["translation-tab:source-survey"]).toBeFalsy();
    const gridQuestion = surveys["translation-tab:table"].getAllQuestions()[0];
    gridQuestion.title = "Grid **title**";
    expect(gridQuestion.locTitle.renderedHtml).toBe("Grid **title**");
  });
});
