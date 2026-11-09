import { describe, expect, test } from "vitest";
import { ActionContainer, QuestionTextModel, Serializer } from "survey-core";
import { PropertyGridEditorHtml, PropertyGridEditorString, PropertyGridEditorText } from "../src/property-grid";
import { CreatorTester } from "./creator-tester";
import { ICreatorRichTextEditor } from "../src/rich-text";
import { StringEditorViewModelBase } from "../src/components/string-editor";

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

function createModeEditor(): { editor: ICreatorRichTextEditor, sanitized: Array<{ html: string, inline?: boolean }>, attached: string[] } {
  const sanitized: Array<{ html: string, inline?: boolean }> = [];
  const attached: string[] = [];
  const editor: ICreatorRichTextEditor = {
    getStringEditMode: (owner, name, locStr) => {
      if (!locStr || !locStr.useMarkdown) return "none";
      const type = Serializer.findProperty(owner.getType?.(), name)?.type;
      if (type === "html") return "none";
      return type === "text" ? "block" : "inline";
    },
    attachEditor: (_element, options) => {
      attached.push(options.mode);
      return { toolbar: new ActionContainer(), detach: () => { attached.push("detach-" + options.mode); } };
    },
    sanitizeHtml: (html, options) => {
      sanitized.push({ html: html, inline: options?.inline });
      const text = String(html || "").replace(/<[^>]*>/g, "");
      if (!text.trim()) return "";
      if (String(html).indexOf("<") < 0) return html;
      return "SAN:" + html;
    }
  };
  return { editor, sanitized, attached };
}

function keyEvent(keyCode: number, extra: { ctrlKey?: boolean, target: HTMLElement }): any {
  const event = {
    keyCode: keyCode,
    ctrlKey: !!extra.ctrlKey,
    metaKey: false,
    shiftKey: false,
    target: extra.target,
    prevented: false,
    stopped: false,
    preventDefault: () => { event.prevented = true; },
    stopImmediatePropagation: () => { event.stopped = true; }
  };
  return event;
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

  test("string editor mode follows the registered editor when rich strings are enabled", () => {
    const creator = new CreatorTester();
    creator.JSON = {
      elements: [
        { type: "text", name: "q", title: "Tom & Jerry" },
        { type: "radiogroup", name: "colors", choices: ["red"] }
      ]
    };
    const { editor } = createModeEditor();
    creator.registerRichTextEditor(editor);
    creator.survey.onTextMarkdown.add(() => { });
    const question = creator.survey.getQuestionByName("q");
    expect(question.locTitle.hasHtml).toBe(false);

    const title = new StringEditorViewModelBase(question.locTitle, creator);
    expect(title.richTextMode).toBe("block");
    expect(title.editAsText).toBe(false);
    const description = new StringEditorViewModelBase(question.locDescription, creator);
    expect(description.richTextMode).toBe("block");
    const surveyTitle = new StringEditorViewModelBase(creator.survey.locTitle, creator);
    expect(surveyTitle.richTextMode).toBe(Serializer.findProperty("survey", "title").type === "text" ? "block" : "inline");

    creator.inplaceEditChoiceValues = true;
    const choice = creator.survey.getQuestionByName("colors").choices[0];
    const inplace = new StringEditorViewModelBase(choice.locText, creator);
    expect(inplace.richTextMode).toBe("none");

    (creator.survey as any).isTranslationSurface = true;
    const translated = new StringEditorViewModelBase(choice.locText, creator);
    expect(translated.richTextMode).not.toBe("none");

    const plain = new CreatorTester();
    plain.JSON = { elements: [{ type: "text", name: "q", title: "Plain" }] };
    plain.registerRichTextEditor(editor);
    const withoutHandler = new StringEditorViewModelBase(plain.survey.getQuestionByName("q").locTitle, plain);
    expect(withoutHandler.richTextMode).toBe("none");
    expect(withoutHandler.editAsText).toBe(true);
  });

  test("rich string editor saves sanitizeHtml, and an onHtmlToMarkdown handler overrides it", () => {
    const creator = new CreatorTester();
    creator.JSON = { elements: [{ type: "text", name: "q", title: "old" }] };
    const { editor, sanitized } = createModeEditor();
    creator.registerRichTextEditor(editor);
    creator.survey.onTextMarkdown.add(() => { });
    const question = creator.survey.getQuestionByName("q");
    const editorModel = new StringEditorViewModelBase(question.locTitle, creator);
    editorModel.setLocString(question.locTitle);

    editorModel.onBlur({ target: { innerHTML: "<em>word</em>", innerText: "word", textContent: "word" } });
    expect(question.title).toBe("SAN:<em>word</em>");
    expect(sanitized[0]).toEqual({ html: "<em>word</em>", inline: false });

    editorModel.onBlur({ target: { innerHTML: "Tom & Jerry", innerText: "Tom & Jerry", textContent: "Tom & Jerry" } });
    expect(question.title).toBe("Tom & Jerry");

    editorModel.onBlur({ target: { innerHTML: "<br>", innerText: "", textContent: "" } });
    expect(question.locTitle.text).toBe("");

    const surveyTitle = new StringEditorViewModelBase(creator.survey.locTitle, creator);
    surveyTitle.onBlur({ target: { innerHTML: "<em>t</em>", innerText: "t", textContent: "t" } });
    expect(sanitized[sanitized.length - 1].inline).toBe(surveyTitle.richTextMode === "inline");

    creator.onHtmlToMarkdown.add((_sender, options) => {
      options.text = String(options.html).toUpperCase();
    });
    const before = sanitized.length;
    const overridden = new StringEditorViewModelBase(question.locTitle, creator);
    overridden.setLocString(question.locTitle);
    overridden.onBlur({ target: { innerHTML: "<em>word</em>", innerText: "word", textContent: "word" } });
    expect(question.title).toBe("<EM>WORD</EM>");
    expect(sanitized.length).toBe(before);

    const untouched = new CreatorTester();
    untouched.JSON = { elements: [{ type: "text", name: "q", title: "keep" }] };
    const plain = new StringEditorViewModelBase(untouched.survey.getQuestionByName("q").locTitle, untouched);
    plain.onBlur({ target: { innerHTML: "<em>word</em>", innerText: "word", textContent: "word" } });
    expect(untouched.survey.getQuestionByName("q").title).toBe("word");
  });

  test("rich string editor allows Ctrl+B/Ctrl+I, still blocks Ctrl+Z, and Enter commits outside a list item", () => {
    const creator = new CreatorTester();
    creator.JSON = { elements: [{ type: "text", name: "q", title: "Title" }] };
    const { editor, attached } = createModeEditor();
    creator.registerRichTextEditor(editor);
    creator.survey.onTextMarkdown.add(() => { });
    const question = creator.survey.getQuestionByName("q");
    const model = new StringEditorViewModelBase(question.locTitle, creator);
    model.setLocString(question.locTitle);
    const element = document.createElement("div");
    let blurred = false;
    model.blurEditor = () => { blurred = true; };

    const bold = keyEvent(66, { ctrlKey: true, target: element });
    model.onKeyDown(bold);
    expect(bold.prevented).toBe(false);
    const undo = keyEvent(90, { ctrlKey: true, target: element });
    model.onKeyDown(undo);
    expect(undo.prevented).toBe(true);

    const plainCreator = new CreatorTester();
    plainCreator.JSON = { elements: [{ type: "text", name: "q", title: "Title" }] };
    const plain = new StringEditorViewModelBase(plainCreator.survey.getQuestionByName("q").locTitle, plainCreator);
    plain.setLocString(plainCreator.survey.getQuestionByName("q").locTitle);
    const plainBold = keyEvent(66, { ctrlKey: true, target: element });
    plain.onKeyDown(plainBold);
    expect(plainBold.prevented).toBe(true);

    element.innerHTML = "<ul><li>item</li></ul>";
    document.body.appendChild(element);
    const range = document.createRange();
    range.selectNodeContents(element.querySelector("li"));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    const enter = keyEvent(13, { target: element });
    model.onKeyDown(enter);
    model.onKeyDownCapture(enter);
    expect(blurred).toBe(false);

    selection.removeAllRanges();
    const commit = keyEvent(13, { target: element });
    model.onKeyDownCapture(commit);
    expect(blurred).toBe(true);
    expect(commit.stopped).toBe(true);

    model.onFocus({ target: element });
    expect(attached).toContain("block");
    model.onBlur({ target: element, relatedTarget: null });
    expect(attached).toContain("detach-block");
    element.remove();
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

  test("property grid string editors become rich comments, and html editors stay plain", () => {
    const { editor } = createModeEditor();
    const creator = new CreatorTester();
    creator.registerRichTextEditor(editor);
    creator.JSON = { elements: [{ type: "text", name: "q" }] };
    creator.survey.onTextMarkdown.add(() => { });
    const question = creator.survey.getQuestionByName("q");
    const textEditor = new PropertyGridEditorText();
    const stringEditor = new PropertyGridEditorString();
    const htmlEditor = new PropertyGridEditorHtml();

    const title = textEditor.getJSON(question, Serializer.findProperty("question", "title"), creator);
    expect(title.type).toBe("comment");
    expect(title.allowRichText).toBe(true);
    expect(title.acceptCarriageReturn).toBe(true);
    expect(title.textFormat).toBeUndefined();

    const description = textEditor.getJSON(question, Serializer.findProperty("question", "description"), creator);
    expect(description.allowRichText).toBe(true);
    expect(description.acceptCarriageReturn).toBe(true);

    const surveyTitle = stringEditor.getJSON(creator.survey, Serializer.findProperty("survey", "title"), creator);
    expect(surveyTitle.type).toBe("comment");
    expect(surveyTitle.allowRichText).toBe(true);
    expect(surveyTitle.acceptCarriageReturn).toBe(false);
    expect(surveyTitle.rows).toBe(1);
    expect(surveyTitle.allowResize).toBe(false);
    expect(surveyTitle.textFormat).toBeUndefined();

    const required = textEditor.getJSON(question, Serializer.findProperty("question", "requiredErrorText"), creator);
    expect(required.allowRichText).toBeUndefined();
    expect(required.type).toBe("comment");

    const completed = htmlEditor.getJSON(creator.survey, Serializer.findProperty("survey", "completedHtml"), creator);
    expect(completed.allowRichText).toBeUndefined();
    expect(completed.type).toBe("comment");

    const plain = new CreatorTester();
    const plainTitle = textEditor.getJSON(new QuestionTextModel("q"), Serializer.findProperty("question", "title"), plain);
    expect(plainTitle.allowRichText).toBeUndefined();
    expect(plainTitle.type).toBe("comment");
    expect(plainTitle.rows).toBe(2);
  });

  test("allowRichText is listed on a comment only when the property is visible", () => {
    const prop = Serializer.findProperty("comment", "allowRichText");
    const previous = prop.visible;
    try {
      prop.visible = true;
      const creator = new CreatorTester();
      creator.JSON = { elements: [{ type: "comment", name: "c" }] };
      creator.selectElement(creator.survey.getQuestionByName("c"));
      const editorQuestion = creator.propertyGrid.getQuestionByName("allowRichText");
      expect(editorQuestion).toBeTruthy();
      expect(editorQuestion.title).toBe("Enable rich text formatting");

      prop.visible = false;
      const hidden = new CreatorTester();
      hidden.JSON = { elements: [{ type: "comment", name: "c" }] };
      hidden.selectElement(hidden.survey.getQuestionByName("c"));
      expect(hidden.propertyGrid.getQuestionByName("allowRichText")).toBeFalsy();
    } finally {
      prop.visible = previous;
    }
  });
});
