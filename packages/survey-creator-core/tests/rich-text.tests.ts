import { describe, expect, test } from "vitest";
import { ActionContainer, LocalizableString, QuestionCommentModel, QuestionMatrixDropdownModel, Serializer } from "survey-core";
import { Translation } from "../src/components/tabs/translation";
import { PropertyGridEditorHtml, PropertyGridEditorInlineHtml, PropertyGridEditorString, PropertyGridEditorText } from "../src/property-grid";
import { CreatorTester } from "./creator-tester";
import { ICreatorRichTextEditor } from "../src/rich-text";
import { StringEditorViewModelBase } from "../src/components/string-editor";

class RichTextQuestionStub extends QuestionCommentModel {
  public getType(): string { return "richtext"; }
}
if (!Serializer.findClass("richtext")) {
  Serializer.addClass("richtext", [], () => new RichTextQuestionStub(""), "comment");
}

const richTextAreas = [
  "designer-tab", "preview-tab", "theme-tab", "translation-tab:source-survey",
  "translation-tab:target-survey", "matrix-cell-question-popup-editor"
];

function createFakeEditor(): ICreatorRichTextEditor {
  return {
    attachEditor: () => ({ toolbar: new ActionContainer(), detach: () => { } }),
    sanitizeHtml: (html: string) => html
  };
}

function createModeEditor(): { editor: ICreatorRichTextEditor, sanitized: Array<{ html: string, inline?: boolean }>, attached: string[] } {
  const sanitized: Array<{ html: string, inline?: boolean }> = [];
  const attached: string[] = [];
  const editor: ICreatorRichTextEditor = {
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

  test("rich strings turn on when an editor is registered, and onTextMarkdown does not change that", () => {
    const creator = new CreatorTester();
    attachSampleHandler(creator);
    creator.JSON = htmlSurvey;
    expect(creator.survey.onTextMarkdown.isEmpty).toBe(false);
    expect(creator.isRichStringsEnabled()).toBe(false);

    creator.registerRichTextEditor(createFakeEditor());
    expect(creator.isRichStringsEnabled()).toBe(true);
    creator.survey.onTextMarkdown.clear();
    expect(creator.isRichStringsEnabled()).toBe(true);
  });

  test("an onHtmlToMarkdown handler does not enable or disable rich strings", () => {
    const creator = new CreatorTester();
    creator.registerRichTextEditor(createFakeEditor());
    creator.onHtmlToMarkdown.add((_sender, options) => {
      options.text = options.html;
    });
    creator.JSON = { elements: [{ type: "text", name: "q", title: "Plain" }] };
    expect(creator.isRichStringsEnabled()).toBe(true);

    creator.survey.onTextMarkdown.add(() => { });
    expect(creator.isRichStringsEnabled()).toBe(true);
    creator.survey.onTextMarkdown.clear();
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

  test("string editor enables rich text only for html and inlinehtml properties", () => {
    const creator = new CreatorTester();
    creator.JSON = {
      elements: [
        { type: "text", name: "q", title: "Tom & Jerry" },
        { type: "radiogroup", name: "colors", choices: ["red"] }
      ]
    };
    const { editor } = createModeEditor();
    creator.registerRichTextEditor(editor);
    const question = creator.survey.getQuestionByName("q");
    expect(question.locTitle.hasHtml).toBe(false);

    const title = new StringEditorViewModelBase(question.locTitle, creator);
    expect(title.richTextMode).toBe("none");
    expect(title.editAsText).toBe(true);
    const description = new StringEditorViewModelBase(question.locDescription, creator);
    expect(description.richTextMode).toBe("none");
    const completed = new StringEditorViewModelBase(creator.survey.locCompletedHtml, creator);
    expect(completed.richTextMode).toBe("block");
    expect(completed.editAsText).toBe(false);

    Serializer.addProperty("survey", { name: "promo:inlinehtml" });
    try {
      const inline = new StringEditorViewModelBase(new LocalizableString(creator.survey, false, "promo"), creator);
      expect(inline.richTextMode).toBe("inline");
      expect(inline.editAsText).toBe(false);
    } finally {
      Serializer.removeProperty("survey", "promo");
    }

    creator.survey.onTextMarkdown.add(() => { });
    const stillPlain = new StringEditorViewModelBase(question.locTitle, creator);
    expect(stillPlain.richTextMode).toBe("none");

    const choice = creator.survey.getQuestionByName("colors").choices[0];
    creator.inplaceEditChoiceValues = true;
    expect(new StringEditorViewModelBase(choice.locText, creator).richTextMode).toBe("none");
  });

  test("rich string editor saves sanitizeHtml, and an onHtmlToMarkdown handler overrides it", () => {
    const creator = new CreatorTester();
    creator.JSON = { elements: [{ type: "text", name: "q", title: "old" }] };
    const { editor, sanitized } = createModeEditor();
    creator.registerRichTextEditor(editor);
    const editorModel = new StringEditorViewModelBase(creator.survey.locCompletedHtml, creator);
    editorModel.setLocString(creator.survey.locCompletedHtml);

    editorModel.onBlur({ target: { innerHTML: "<em>word</em>", innerText: "word", textContent: "word" } });
    expect(creator.survey.completedHtml).toBe("SAN:<em>word</em>");
    expect(sanitized[0]).toEqual({ html: "<em>word</em>", inline: false });

    editorModel.onBlur({ target: { innerHTML: "Tom & Jerry", innerText: "Tom & Jerry", textContent: "Tom & Jerry" } });
    expect(creator.survey.completedHtml).toBe("Tom & Jerry");

    editorModel.onBlur({ target: { innerHTML: "<br>", innerText: "", textContent: "" } });
    expect(creator.survey.locCompletedHtml.text).toBe("");

    Serializer.addProperty("survey", { name: "promo:inlinehtml" });
    try {
      const inline = new StringEditorViewModelBase(new LocalizableString(creator.survey, false, "promo"), creator);
      inline.onBlur({ target: { innerHTML: "<em>t</em>", innerText: "t", textContent: "t" } });
      expect(sanitized[sanitized.length - 1].inline).toBe(true);
    } finally {
      Serializer.removeProperty("survey", "promo");
    }

    creator.onHtmlToMarkdown.add((_sender, options) => {
      options.text = String(options.html).toUpperCase();
    });
    const before = sanitized.length;
    const overridden = new StringEditorViewModelBase(creator.survey.locCompletedHtml, creator);
    overridden.setLocString(creator.survey.locCompletedHtml);
    overridden.onBlur({ target: { innerHTML: "<em>word</em>", innerText: "word", textContent: "word" } });
    expect(creator.survey.completedHtml).toBe("<EM>WORD</EM>");
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
    const model = new StringEditorViewModelBase(creator.survey.locCompletedHtml, creator);
    model.setLocString(creator.survey.locCompletedHtml);
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
    expect(creator.isRichStringsEnabled()).toBe(true);
    expect(creator.survey.locTitle.hasHtml).toBe(false);
    expect(creator.survey.getQuestionByName("q").locTitle.hasHtml).toBe(false);
    expect(creator.survey.locTitle.renderedHtml).not.toContain("RICH:");
  });

  test("property grid uses a richtext question only for html and inlinehtml", () => {
    const { editor } = createModeEditor();
    const creator = new CreatorTester();
    creator.registerRichTextEditor(editor);
    creator.JSON = { elements: [{ type: "text", name: "q" }] };
    const question = creator.survey.getQuestionByName("q");
    const textEditor = new PropertyGridEditorText();
    const stringEditor = new PropertyGridEditorString();
    const htmlEditor = new PropertyGridEditorHtml();
    const inlineEditor = new PropertyGridEditorInlineHtml();

    const title = textEditor.getJSON(question, Serializer.findProperty("question", "title"), creator);
    expect(title.type).toBe("comment");
    expect(title.acceptCarriageReturn).toBeUndefined();

    const description = textEditor.getJSON(question, Serializer.findProperty("question", "description"), creator);
    expect(description.type).toBe("comment");
    expect(description.acceptCarriageReturn).toBeUndefined();

    const surveyTitle = stringEditor.getJSON(creator.survey, Serializer.findProperty("survey", "title"), creator);
    expect(surveyTitle.type).toBe("text");

    const completed = htmlEditor.getJSON(creator.survey, Serializer.findProperty("survey", "completedHtml"), creator);
    expect(completed.type).toBe("richtext");
    expect(completed.acceptCarriageReturn).toBe(true);

    Serializer.addProperty("survey", { name: "promo:inlinehtml" });
    try {
      const inline = inlineEditor.getJSON(creator.survey, Serializer.findProperty("survey", "promo"), creator);
      expect(inline.type).toBe("richtext");
      expect(inline.acceptCarriageReturn).toBe(false);
      expect(inline.rows).toBe(1);
      expect(inline.allowResize).toBe(false);
    } finally {
      Serializer.removeProperty("survey", "promo");
    }

    const plain = new CreatorTester();
    const plainHtml = htmlEditor.getJSON(plain.survey, Serializer.findProperty("survey", "completedHtml"), plain);
    expect(plainHtml.type).toBe("comment");
    expect(plainHtml.allowResize).toBe(true);
    expect(plainHtml.autoGrow).toBe(false);
  });

  test("translation cells follow the edit mode, keep plain placeholders, and store HTML unchanged", () => {
    const creator = new CreatorTester();
    creator.registerRichTextEditor(createModeEditor().editor);
    creator.JSON = {
      elements: [
        {
          type: "text",
          name: "q",
          title: { default: "Title <em>i</em>" },
          description: { default: "Desc <strong>d</strong>", de: "Beschreibung" }
        },
        {
          type: "radiogroup",
          name: "colors",
          choices: [{ value: "a", text: "<strong>A</strong>" }]
        }
      ],
      completedHtml: "<p>Done</p>"
    };
    const translation = new Translation(creator.survey, creator);
    translation.reset();
    const title = commentCells(translation, "title");
    const description = commentCells(translation, "description");
    const choice = commentCells(translation, "a");
    const completed = commentCells(translation, "completedHtml");
    expect(title.length).toBeGreaterThan(0);
    expect(title[0].getType()).toBe("comment");
    expect(title[0].acceptCarriageReturn).toBe(true);
    expect(description[0].getType()).toBe("comment");
    expect(description[0].acceptCarriageReturn).toBe(true);
    expect(choice[0].getType()).toBe("comment");
    expect(choice[0].acceptCarriageReturn).toBe(false);
    expect(completed.length).toBeGreaterThan(0);
    expect(completed[0].getType()).toBe("richtext");
    expect(completed[0].acceptCarriageReturn).toBe(true);
    const emptyCompleted = completed.filter(cell => !cell.value)[0];
    expect(emptyCompleted).toBeTruthy();
    expect(emptyCompleted.placeholder.indexOf("<")).toBe(-1);
    expect(emptyCompleted.placeholder).toContain("Done");

    const question = creator.survey.getQuestionByName("q");
    const deCell = description.filter(cell => cell.value === "Beschreibung")[0];
    expect(deCell).toBeTruthy();
    deCell.value = "<em>Hallo</em>";
    expect(question.locDescription.getLocaleText("de")).toBe("<em>Hallo</em>");

    const csv = translation.exportToCSV();
    expect(csv).toContain("<em>Hallo</em>");
    translation.importFromNestedArray(parseCsv(csv));
    expect(creator.survey.getQuestionByName("q").locDescription.getLocaleText("de")).toBe("<em>Hallo</em>");

    translation.readOnly = true;
    translation.reset();
    const readOnlyCompleted = commentCells(translation, "completedHtml")[0];
    expect(readOnlyCompleted.getType()).toBe("richtext");
    expect(readOnlyCompleted.isReadOnly).toBe(true);
  });
});

function commentCells(translation: Translation, rowName: string): QuestionCommentModel[] {
  const found: QuestionCommentModel[] = [];
  translation.stringsSurvey.getAllQuestions().forEach(question => {
    if (!(question instanceof QuestionMatrixDropdownModel)) return;
    question.visibleRows.forEach(row => {
      const name = (<any>row).rowName || (row as any).value || ((<any>row).item && (<any>row).item.value);
      if (name !== rowName) return;
      row.cells.forEach(cell => {
        if (cell.question instanceof QuestionCommentModel) found.push(cell.question);
      });
    });
  });
  return found;
}

function parseCsv(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let quoted = false;
  const text = csv.replace(/^\uFEFF/, "");
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (quoted) {
      if (char === "\"" && text[i + 1] === "\"") {
        value += "\"";
        i++;
      } else if (char === "\"") {
        quoted = false;
      } else {
        value += char;
      }
    } else if (char === "\"") {
      quoted = true;
    } else if (char === ",") {
      row.push(value);
      value = "";
    } else if (char === "\n") {
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
    } else if (char !== "\r") {
      value += char;
    }
  }
  if (value.length > 0 || row.length > 0) {
    row.push(value);
    rows.push(row);
  }
  return rows;
}
