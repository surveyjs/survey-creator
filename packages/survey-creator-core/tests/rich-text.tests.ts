import { describe, expect, test } from "vitest";
import { ActionContainer, LocalizableString, QuestionCommentModel, QuestionMatrixDropdownModel, Serializer } from "survey-core";
import { Translation } from "../src/components/tabs/translation";
import { PropertyGridEditorCollection } from "../src/property-grid";
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

function withExampleTypes(run: () => void): void {
  const surveyDescription = Serializer.findProperty("survey", "description");
  const pageDescription = Serializer.findProperty("page", "description");
  const questionTitle = Serializer.findProperty("question", "title");
  const questionDescription = Serializer.findProperty("question", "description");
  const choiceText = Serializer.findProperty("itemvalue", "text");
  const previous = [surveyDescription.type, pageDescription.type, questionTitle.type, questionDescription.type, choiceText.type];
  surveyDescription.type = "html";
  pageDescription.type = "html";
  questionTitle.type = "inlinehtml";
  questionDescription.type = "text";
  choiceText.type = "inlinehtml";
  PropertyGridEditorCollection.clearHash();
  try {
    run();
  } finally {
    surveyDescription.type = previous[0];
    pageDescription.type = previous[1];
    questionTitle.type = previous[2];
    questionDescription.type = previous[3];
    choiceText.type = previous[4];
    PropertyGridEditorCollection.clearHash();
  }
}

const htmlSurvey = {
  title: "<strong>Survey</strong>",
  elements: [
    { type: "text", name: "q", title: "<em>Q</em>" },
    { type: "radiogroup", name: "choices", choices: [{ value: "bold", text: "<strong>Bold</strong> choice" }, "Plain choice"] }
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

  test("string editor follows the example property types", () => {
    withExampleTypes(() => {
      const creator = new CreatorTester();
      creator.JSON = {
        title: "Survey",
        description: "<p>About</p>",
        pages: [{
          name: "page1",
          description: "<p>Page</p>",
          elements: [
            { type: "text", name: "q", title: "Title <em>i</em>", description: "Plain <em>text</em>" },
            { type: "radiogroup", name: "colors", choices: [{ value: "red", text: "<strong>Red</strong>" }] }
          ]
        }]
      };
      creator.registerRichTextEditor(createModeEditor().editor);
      const question = creator.survey.getQuestionByName("q");
      const choice = creator.survey.getQuestionByName("colors").choices[0];

      expect(new StringEditorViewModelBase(creator.survey.locTitle, creator).richTextMode).toBe("none");
      expect(new StringEditorViewModelBase(creator.survey.locDescription, creator).richTextMode).toBe("block");
      expect(new StringEditorViewModelBase(creator.survey.pages[0].locDescription, creator).richTextMode).toBe("block");
      const title = new StringEditorViewModelBase(question.locTitle, creator);
      expect(title.richTextMode).toBe("inline");
      expect(title.editAsText).toBe(false);
      expect(new StringEditorViewModelBase(question.locDescription, creator).richTextMode).toBe("none");
      expect(new StringEditorViewModelBase(choice.locText, creator).richTextMode).toBe("inline");

      creator.survey.onTextMarkdown.add(() => { });
      expect(new StringEditorViewModelBase(creator.survey.locTitle, creator).richTextMode).toBe("none");
      creator.inplaceEditChoiceValues = true;
      expect(new StringEditorViewModelBase(choice.locText, creator).richTextMode).toBe("inline");
    });
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

  test("string editor keeps the rich toolbar closed until text is selected", () => {
    const creator = new CreatorTester();
    creator.JSON = { completedHtml: "Hello world" };
    let open = false;
    let notify: (() => void) | undefined;
    const editor: ICreatorRichTextEditor = {
      attachEditor: (_element, options) => {
        notify = options.onState;
        return {
          toolbar: new ActionContainer(),
          get toolbarOpen() { return open; },
          detach: () => { notify = undefined; }
        };
      },
      sanitizeHtml: (html: string) => html
    };
    creator.registerRichTextEditor(editor);
    const model = new StringEditorViewModelBase(creator.survey.locCompletedHtml, creator);
    model.setLocString(creator.survey.locCompletedHtml);
    const element = document.createElement("div");
    element.innerHTML = "Hello world";
    document.body.appendChild(element);
    model.onFocus({ target: element });
    expect(model.richTextToolbar).toBeTruthy();
    expect(model.richTextToolbarOpen).toBe(false);
    expect(model.richTextContentClass).toBe("sd-rich-text sd-rich-text--toolbar-on-selection");

    open = true;
    notify();
    expect(model.richTextToolbarOpen).toBe(true);
    expect(model.richTextContentClass).toBe("sd-rich-text sd-rich-text--toolbar-on-selection sd-rich-text--toolbar-open");

    open = false;
    notify();
    expect(model.richTextToolbarOpen).toBe(false);
    expect(model.richTextContentClass).toBe("sd-rich-text sd-rich-text--toolbar-on-selection");

    model.onBlur({ target: element, relatedTarget: null });
    expect(model.richTextToolbar).toBeUndefined();
    expect(model.richTextToolbarOpen).toBe(false);
    open = true;
    if (notify) notify();
    expect(model.richTextToolbarOpen).toBe(false);
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

  test("property grid uses a richtext question for the example html and inlinehtml properties", () => {
    withExampleTypes(() => {
      const creator = new CreatorTester();
      creator.registerRichTextEditor(createModeEditor().editor);
      creator.JSON = {
        pages: [{ name: "page1", elements: [{ type: "text", name: "q" }, { type: "radiogroup", name: "colors", choices: ["red"] }] }]
      };
      const question = creator.survey.getQuestionByName("q");
      const choice = creator.survey.getQuestionByName("colors").choices[0];
      const json = (obj: any, className: string, name: string) => {
        return PropertyGridEditorCollection.getJSON(obj, Serializer.findProperty(className, name), creator);
      };

      expect(json(creator.survey, "survey", "title").type).toBe("text");

      const surveyDescription = json(creator.survey, "survey", "description");
      expect(surveyDescription.type).toBe("richtext");
      expect(surveyDescription.acceptCarriageReturn).toBe(true);

      const pageDescription = json(creator.survey.pages[0], "page", "description");
      expect(pageDescription.type).toBe("richtext");
      expect(pageDescription.acceptCarriageReturn).toBe(true);

      const questionTitle = json(question, "question", "title");
      expect(questionTitle.type).toBe("richtext");
      expect(questionTitle.acceptCarriageReturn).toBe(false);
      expect(questionTitle.rows).toBe(1);
      expect(questionTitle.allowResize).toBe(false);

      const questionDescription = json(question, "question", "description");
      expect(questionDescription.type).toBe("comment");
      expect(questionDescription.acceptCarriageReturn).toBeUndefined();

      const choiceText = json(choice, "itemvalue", "text");
      expect(choiceText.type).toBe("richtext");
      expect(choiceText.acceptCarriageReturn).toBe(false);

      const plain = new CreatorTester();
      const plainDescription = PropertyGridEditorCollection.getJSON(plain.survey, Serializer.findProperty("survey", "description"), plain);
      expect(plainDescription.type).toBe("comment");
      expect(plainDescription.allowResize).toBe(true);
      expect(plainDescription.autoGrow).toBe(false);
    });
  });

  test("translation cells follow the example property types and store HTML unchanged", () => {
    withExampleTypes(() => {
      const creator = new CreatorTester();
      creator.registerRichTextEditor(createModeEditor().editor);
      creator.JSON = {
        title: "Survey",
        description: "<p>Done</p>",
        pages: [{
          name: "page1",
          description: "<p>Page</p>",
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
              choices: [{ value: "red", text: "<strong>Red</strong>" }]
            }
          ]
        }]
      };
      const translation = new Translation(creator.survey, creator);
      translation.reset();
      const surveyTitle = cellsFor(translation, "survey", "title");
      const surveyDescription = cellsFor(translation, "survey", "description");
      const pageDescription = cellsFor(translation, "page", "description");
      const questionTitle = cellsFor(translation, "text", "title");
      const questionDescription = cellsFor(translation, "text", "description");
      const choice = cellsFor(translation, "choiceitem", "text");

      expect(surveyTitle[0].getType()).toBe("comment");
      expect(surveyTitle[0].acceptCarriageReturn).toBe(false);
      expect(surveyDescription[0].getType()).toBe("richtext");
      expect(surveyDescription[0].acceptCarriageReturn).toBe(true);
      expect(pageDescription[0].getType()).toBe("richtext");
      expect(pageDescription[0].acceptCarriageReturn).toBe(true);
      expect(questionTitle[0].getType()).toBe("richtext");
      expect(questionTitle[0].acceptCarriageReturn).toBe(false);
      expect(questionDescription[0].getType()).toBe("comment");
      expect(questionDescription[0].acceptCarriageReturn).toBe(true);
      expect(choice[0].getType()).toBe("richtext");
      expect(choice[0].acceptCarriageReturn).toBe(false);

      const emptyTitle = questionTitle.filter(cell => !cell.value)[0];
      expect(emptyTitle).toBeTruthy();
      expect(emptyTitle.placeholder.indexOf("<")).toBe(-1);
      expect(emptyTitle.placeholder).toContain("Title");

      const question = creator.survey.getQuestionByName("q");
      const deCell = questionDescription.filter(cell => cell.value === "Beschreibung")[0];
      expect(deCell).toBeTruthy();
      deCell.value = "<em>Hallo</em>";
      expect(question.locDescription.getLocaleText("de")).toBe("<em>Hallo</em>");

      const csv = translation.exportToCSV();
      expect(csv).toContain("<em>Hallo</em>");
      translation.importFromNestedArray(parseCsv(csv));
      expect(creator.survey.getQuestionByName("q").locDescription.getLocaleText("de")).toBe("<em>Hallo</em>");

      translation.readOnly = true;
      translation.reset();
      expect(cellsFor(translation, "text", "title")[0].getType()).toBe("richtext");
      expect(cellsFor(translation, "text", "title")[0].isReadOnly).toBe(true);
    });
  });
});

function cellsFor(translation: Translation, ownerType: string, propertyName: string): QuestionCommentModel[] {
  const found: QuestionCommentModel[] = [];
  translation.stringsSurvey.getAllQuestions().forEach(question => {
    if (!(question instanceof QuestionMatrixDropdownModel)) return;
    question.rows.forEach(row => {
      const item = (<any>row).translationData;
      const type = item && item.context && item.context.getType && item.context.getType();
      const locName = item && item.locString && item.locString.name;
      if (type !== ownerType || locName !== propertyName) return;
      question.visibleRows.forEach(visible => {
        const name = (<any>visible).rowName || (visible as any).value || ((<any>visible).item && (<any>visible).item.value);
        if (name !== row.value) return;
        visible.cells.forEach(cell => {
          if (cell.question instanceof QuestionCommentModel) found.push(cell.question);
        });
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
