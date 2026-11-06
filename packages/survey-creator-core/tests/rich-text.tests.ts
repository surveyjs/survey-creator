import { describe, expect, test } from "vitest";
import { ActionContainer, QuestionRadiogroupModel, SurveyModel } from "survey-core";
import { RichText } from "survey-core/rich-text";
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

function enableRich(creator: CreatorTester, getStringEditMode?: ICreatorRichTextEditor["getStringEditMode"]): { attached: Array<any> } {
  const attached: Array<any> = [];
  creator.registerRichTextEditor({
    getStringEditMode: getStringEditMode || ((_owner, _name, locStr) => locStr.allowLineBreaks ? "block" : "inline"),
    attachEditor: (element, options) => {
      const handle = { element: element, options: options, toolbar: new ActionContainer(), detach: (): void => { handle.detached = true; }, detached: false };
      attached.push(handle);
      return handle;
    }
  });
  creator.onHtmlToMarkdown.add((_sender, options) => { options.text = options.html; });
  return { attached };
}

function keyEvent(keyCode: number, target?: HTMLElement): any {
  return {
    keyCode: keyCode,
    target: target,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    preventDefault: (): void => { return; },
    stopImmediatePropagation: (): void => { return; }
  };
}

describe("rich text string editor", () => {
  test("mode is none until an editor and an onHtmlToMarkdown handler are both present", () => {
    const creator = new CreatorTester();
    creator.JSON = surveyJson;
    const title = creator.survey.getQuestionByName("q").locTitle;
    expect(new StringEditorViewModelBase(title, creator).richTextEditMode).toBe("none");
    creator.registerRichTextEditor(fakeEditor());
    expect(new StringEditorViewModelBase(title, creator).richTextEditMode).toBe("none");
  });

  test("resolves inline, block and none, including plain strings, in-place values and the translation surface", () => {
    const creator = new CreatorTester();
    enableRich(creator);
    creator.JSON = {
      elements: [
        { type: "text", name: "q", title: "Plain title", description: "A description" },
        { type: "radiogroup", name: "r", choices: ["A"] }
      ]
    };
    const question = creator.survey.getQuestionByName("q");
    const titleEditor = new StringEditorViewModelBase(question.locTitle, creator);
    expect(question.locTitle.hasHtml).toBeFalsy();
    expect(question.locTitle.allowLineBreaks).toBe(true);
    expect(titleEditor.richTextEditMode).toBe("block");
    expect(new StringEditorViewModelBase(question.locDescription, creator).richTextEditMode).toBe("block");
    expect(creator.survey.locTitle.allowLineBreaks).toBe(false);
    expect(new StringEditorViewModelBase(creator.survey.locTitle, creator).richTextEditMode).toBe("inline");

    creator.inplaceEditChoiceValues = true;
    const choice = (<QuestionRadiogroupModel>creator.survey.getQuestionByName("r")).choices[0];
    expect(new StringEditorViewModelBase(choice.locText, creator).richTextEditMode).toBe("none");
    (creator.survey as any).isTranslationSurface = true;
    expect(new StringEditorViewModelBase(choice.locText, creator).richTextEditMode).toBe("inline");
  });

  test("saves innerHTML through onHtmlToMarkdown, including empty content", () => {
    const creator = new CreatorTester();
    creator.registerRichTextEditor(fakeEditor());
    creator.onHtmlToMarkdown.add((_sender, options) => { options.text = options.html === "<br>" ? "" : "md:" + options.html; });
    creator.JSON = { elements: [{ type: "text", name: "q", title: "Hello" }] };
    const loc = creator.survey.getQuestionByName("q").locTitle;
    const editor = new StringEditorViewModelBase(loc, creator);
    const target = document.createElement("div");
    target.innerHTML = "<strong>a</strong>";
    editor.onBlur({ target: target });
    expect(loc.text).toBe("md:<strong>a</strong>");
    target.innerHTML = "<br>";
    editor.onBlur({ target: target });
    expect(loc.text).toBe("");
  });

  test("allows Ctrl+B/I only in rich mode and still blocks Ctrl+Z", () => {
    const plain = new CreatorTester();
    plain.JSON = surveyJson;
    const plainEditor = new StringEditorViewModelBase(plain.survey.getQuestionByName("q").locTitle, plain);
    let stopped = false;
    const track = (): void => { stopped = true; };
    plainEditor.checkConstraints({ keyCode: 66, ctrlKey: true, stopImmediatePropagation: track, preventDefault: track });
    expect(stopped).toBe(true);

    const creator = new CreatorTester();
    enableRich(creator);
    creator.JSON = surveyJson;
    const editor = new StringEditorViewModelBase(creator.survey.getQuestionByName("q").locTitle, creator);
    stopped = false;
    editor.checkConstraints({ keyCode: 66, ctrlKey: true, stopImmediatePropagation: () => { stopped = true; }, preventDefault: () => { stopped = true; } });
    expect(stopped).toBe(false);
    editor.checkConstraints({ keyCode: 73, metaKey: true, stopImmediatePropagation: () => { stopped = true; }, preventDefault: () => { stopped = true; } });
    expect(stopped).toBe(false);
    editor.checkConstraints({ keyCode: 90, ctrlKey: true, stopImmediatePropagation: () => { stopped = true; }, preventDefault: () => { stopped = true; } });
    expect(stopped).toBe(true);
  });

  test("attaches the toolbar on focus and lets Enter inside a list item stay in the editor", async () => {
    const creator = new CreatorTester();
    const { attached } = enableRich(creator);
    creator.JSON = surveyJson;
    const question = creator.survey.getQuestionByName("q");
    const editor = new StringEditorViewModelBase(question.locDescription, creator);
    const element = document.createElement("div");
    element.innerHTML = "<ul><li>item</li></ul>";
    document.body.appendChild(element);
    editor.getEditorElement = () => element;
    let blurred = false;
    editor.blurEditor = () => { blurred = true; };
    editor.onFocus({ target: element });
    expect(attached[0].options.mode).toBe("block");
    expect(editor.richTextToolbar).toBe(attached[0].toolbar);

    const selection = document.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element.querySelector("li"));
    selection.removeAllRanges();
    selection.addRange(range);
    editor.onKeyDown(keyEvent(13, element));
    expect(blurred).toBe(false);

    selection.removeAllRanges();
    editor.onKeyDown(keyEvent(13, element));
    expect(blurred).toBe(true);

    editor.onBlur({ target: element });
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(attached[0].detached).toBe(true);
    expect(editor.richTextToolbar).toBeFalsy();
    element.remove();
  });
});

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

describe("rich text property grid", () => {
  test("text properties become rich comment editors and html properties stay plain", () => {
    const creator = new CreatorTester();
    creator.registerRichTextEditor(RichText);
    creator.onHtmlToMarkdown.add(RichText.htmlToMarkdownHandler);
    creator.JSON = {
      completedHtml: "<p>Done</p>",
      elements: [
        { type: "text", name: "q", title: "Hello", description: "About" },
        { type: "comment", name: "c" }
      ]
    };
    creator.selectElement(creator.survey.getQuestionByName("q"));
    const grid = creator.propertyGrid;
    const title = grid.getQuestionByName("title");
    const description = grid.getQuestionByName("description");
    const required = grid.getQuestionByName("requiredErrorText");
    expect(title.textFormat).toBe("markdown");
    expect(title.richTextEditMode).toBe("block");
    expect(title.richTextToolbarVisibility).toBe("onFocus");
    expect(title.richTextConverter).toBeFalsy();
    expect(description.textFormat).toBe("markdown");
    expect(description.richTextEditMode).toBe("block");
    expect(description.richTextConverter).toBeFalsy();
    expect(required.textFormat).toBe("plain");

    creator.selectElement(creator.survey);
    const surveyTitle = creator.propertyGrid.getQuestionByName("title");
    expect(surveyTitle.getType()).toBe("comment");
    expect(surveyTitle.textFormat).toBe("markdown");
    expect(surveyTitle.richTextEditMode).toBe("inline");
    expect(surveyTitle.acceptCarriageReturn).toBe(false);
    const completed = creator.propertyGrid.getQuestionByName("completedHtml");
    expect(completed.getType()).toBe("comment");
    expect(completed.textFormat).toBe("plain");

    creator.selectElement(creator.survey.getQuestionByName("c"));
    const textFormat = creator.propertyGrid.getQuestionByName("textFormat");
    expect(textFormat.visible).toBe(true);
    textFormat.value = "markdown";
    expect(creator.survey.getQuestionByName("c").textFormat).toBe("markdown");
  });
});
