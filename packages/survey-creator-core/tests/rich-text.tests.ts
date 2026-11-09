import { describe, expect, test } from "vitest";
import { ActionContainer } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { ICreatorRichTextEditor } from "../src/rich-text";

const richTextAreas = [
  "designer-tab", "preview-tab", "theme-tab", "translation-tab:source-survey",
  "translation-tab:target-survey", "matrix-cell-question-popup-editor"
];

function createFakeEditor(): ICreatorRichTextEditor {
  return {
    getStringEditMode: () => "block",
    attachEditor: () => ({ toolbar: new ActionContainer(), detach: () => { } }),
    sanitizeHtml: (html: string) => html
  };
}

// The setup sample: the customer attaches rendering only to the listed areas.
// The marker makes it obvious which surveys received the handler.
function attachSampleHandler(creator: CreatorTester): (sender: any, options: any) => void {
  const handler = (_sender: any, options: any): void => {
    options.html = "RICH:" + options.text;
  };
  creator.onSurveyInstanceCreated.add((_sender, options) => {
    if (richTextAreas.indexOf(options.area) > -1) {
      options.survey.onTextMarkdown.add(handler);
    }
  });
  return handler;
}

const htmlSurvey = {
  title: "<strong>Survey</strong>",
  elements: [
    { type: "text", name: "q", title: "<em>Q</em>" },
    { type: "radiogroup", name: "choices", choices: ["<strong>Bold</strong> choice", "Plain choice"] }
  ]
};

describe("rich text registration", () => {
  test("registerRichTextEditor stores and clears a fake editor", () => {
    const creator = new CreatorTester();
    const editor = createFakeEditor();
    expect(creator.richTextEditor).toBeUndefined();
    expect(creator.isRichStringsEnabled()).toBe(false);
    creator.registerRichTextEditor(editor);
    expect(creator.richTextEditor).toBe(editor);
    creator.registerRichTextEditor(undefined);
    expect(creator.richTextEditor).toBeUndefined();
    expect(creator.isRichStringsEnabled()).toBe(false);
  });

  test("rich strings stay off without an editor, and without a designer onTextMarkdown handler", () => {
    const creator = new CreatorTester();
    attachSampleHandler(creator);
    creator.JSON = htmlSurvey;
    expect(creator.survey.onTextMarkdown.isEmpty).toBe(false);
    expect(creator.isRichStringsEnabled()).toBe(false);

    creator.registerRichTextEditor(createFakeEditor());
    expect(creator.isRichStringsEnabled()).toBe(true);
    creator.survey.onTextMarkdown.clear();
    expect(creator.isRichStringsEnabled()).toBe(false);
  });

  test("an onHtmlToMarkdown handler does not enable or disable rich strings", () => {
    const creator = new CreatorTester();
    creator.registerRichTextEditor(createFakeEditor());
    creator.onHtmlToMarkdown.add((_sender, options) => {
      options.text = options.html;
    });
    creator.JSON = { elements: [{ type: "text", name: "q", title: "Plain" }] };
    expect(creator.survey.onTextMarkdown.isEmpty).toBe(true);
    expect(creator.isRichStringsEnabled()).toBe(false);

    creator.survey.onTextMarkdown.add(() => { });
    expect(creator.isRichStringsEnabled()).toBe(true);
  });

  test("sample wiring renders HTML on designer, preview, theme and popup surveys, and not on internal surveys", () => {
    const creator = new CreatorTester();
    creator.registerRichTextEditor(createFakeEditor());
    attachSampleHandler(creator);
    creator.JSON = htmlSurvey;

    const question = creator.survey.getQuestionByName("q");
    expect(creator.isRichStringsEnabled()).toBe(true);
    expect(creator.survey.locTitle.renderedHtml).toBe("RICH:<strong>Survey</strong>");
    expect(question.locTitle.renderedHtml).toBe("RICH:<em>Q</em>");
    expect(creator.survey.getQuestionByName("choices").choices[0].locText.renderedHtml).toBe("RICH:<strong>Bold</strong> choice");
    expect(creator.survey.getQuestionByName("choices").choices[1].locText.renderedHtml).toBe("RICH:Plain choice");

    const preview = creator.createSurvey(htmlSurvey, "preview");
    expect(preview.locTitle.renderedHtml).toBe("RICH:<strong>Survey</strong>");
    expect(preview.getQuestionByName("q").locTitle.renderedHtml).toBe("RICH:<em>Q</em>");

    const theme = creator.createSurvey(htmlSurvey, "theme");
    expect(theme.locTitle.renderedHtml).toBe("RICH:<strong>Survey</strong>");

    const popup = creator.createSurvey(htmlSurvey, "modal-question-editor");
    expect(popup.getQuestionByName("q").locTitle.renderedHtml).toBe("RICH:<em>Q</em>");

    const translationSource = creator.createSurvey(htmlSurvey, "translation_source");
    expect(translationSource.locTitle.renderedHtml).toBe("RICH:<strong>Survey</strong>");
    const translationTarget = creator.createSurvey(htmlSurvey, "translation_target");
    expect(translationTarget.getQuestionByName("q").locTitle.renderedHtml).toBe("RICH:<em>Q</em>");

    const translationTable = creator.createSurvey(htmlSurvey, "translation_strings");
    expect(translationTable.getQuestionByName("q").locTitle.hasHtml).toBe(false);
    expect(translationTable.getQuestionByName("q").locTitle.renderedHtml).not.toContain("RICH:");

    creator.selectElement(question);
    const propertyGrid = creator.propertyGrid;
    const titleEditor = propertyGrid.getQuestionByName("title");
    expect(titleEditor.value).toBe("<em>Q</em>");
    expect(titleEditor.locTitle.renderedHtml).not.toContain("RICH:");
    expect(propertyGrid.getSurveyMarkdownHtml(titleEditor, "<strong>x</strong>", "title", undefined)).toBeNull();
    expect(propertyGrid.getSurveyMarkdownHtml(titleEditor, "**bold**", "description", undefined)).toContain("spg-bold");
  });

  test("without the sample handler, registering an editor does not render HTML strings", () => {
    const creator = new CreatorTester();
    creator.registerRichTextEditor(createFakeEditor());
    creator.JSON = htmlSurvey;
    expect(creator.isRichStringsEnabled()).toBe(false);
    expect(creator.survey.locTitle.hasHtml).toBe(false);
    expect(creator.survey.getQuestionByName("q").locTitle.hasHtml).toBe(false);
    expect(creator.survey.locTitle.renderedHtml).not.toContain("RICH:");
  });
});
