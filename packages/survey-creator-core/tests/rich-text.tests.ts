import { describe, expect, test } from "vitest";
import { ActionContainer, QuestionRadiogroupModel, Serializer, SurveyModel } from "survey-core";
import { RichText } from "survey-core/rich-text";
import { StringEditorViewModelBase } from "../src/components/string-editor";
import { ICreatorRichTextEditor } from "../src/rich-text-editor";
import { CreatorTester } from "./creator-tester";
import { PropertyGridEditorCollection } from "../src/property-grid";
import "../src/property-grid/matrices";

const richStringAreas = ["designer-tab", "preview-tab", "theme-tab", "translation-tab:source-survey", "translation-tab:target-survey", "matrix-cell-question-popup-editor"];

function fakeEditor(): ICreatorRichTextEditor {
  return {
    sanitizeHtml: (html: string) => html,
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

function enableRich(creator: CreatorTester): { attached: Array<any> } {
  const attached: Array<any> = [];
  creator.registerRichTextEditor({
    sanitizeHtml: (html: string) => html,
    attachEditor: (element, options) => {
      const handle = { element: element, options: options, toolbar: new ActionContainer(), detach: (): void => { handle.detached = true; }, detached: false };
      attached.push(handle);
      return handle;
    }
  });
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

const exampleTypes = ["survey.description", "page.description", "question.title", "itemvalue.text"];

function propertyType(path: string): any {
  const parts = path.split(".");
  return Serializer.findProperty(parts[0], parts[1]);
}

function useExampleTypes(): void {
  propertyType("survey.description").type = "html";
  propertyType("page.description").type = "html";
  propertyType("question.title").type = "inlinehtml";
  propertyType("itemvalue.text").type = "inlinehtml";
  PropertyGridEditorCollection.clearHash();
}

const savedTypes: { [path: string]: string } = {};
exampleTypes.forEach((path) => { savedTypes[path] = propertyType(path).type; });

function restoreExampleTypes(): void {
  exampleTypes.forEach((path) => { propertyType(path).type = savedTypes[path]; });
  PropertyGridEditorCollection.clearHash();
}

describe("rich text string editor", () => {
  test("a plain property stays none when an editor is registered", () => {
    const creator = new CreatorTester();
    creator.JSON = surveyJson;
    const title = creator.survey.getQuestionByName("q").locTitle;
    expect(new StringEditorViewModelBase(title, creator).richTextEditMode).toBe("none");
    creator.registerRichTextEditor(fakeEditor());
    expect(new StringEditorViewModelBase(title, creator).richTextEditMode).toBe("none");
    expect(creator.isRichStringsEnabled()).toBe(true);
  });

  test("resolves block, inline and none from the serializer type, including in-place choice values", () => {
    useExampleTypes();
    const creator = new CreatorTester();
    enableRich(creator);
    creator.JSON = {
      description: "About the survey",
      pages: [{
        name: "page1",
        description: "About the page",
        elements: [
          { type: "text", name: "q", title: "Plain title", description: "A description" },
          { type: "radiogroup", name: "r", choices: ["A"] }
        ]
      }]
    };
    const question = creator.survey.getQuestionByName("q");
    const titleEditor = new StringEditorViewModelBase(question.locTitle, creator);
    expect(question.locTitle.hasHtml).toBeFalsy();
    expect(titleEditor.richTextEditMode).toBe("inline");
    expect(new StringEditorViewModelBase(question.locDescription, creator).richTextEditMode).toBe("none");
    expect(new StringEditorViewModelBase(creator.survey.locTitle, creator).richTextEditMode).toBe("none");
    expect(new StringEditorViewModelBase(creator.survey.locDescription, creator).richTextEditMode).toBe("block");
    expect(new StringEditorViewModelBase(creator.survey.pages[0].locDescription, creator).richTextEditMode).toBe("block");

    const choice = (<QuestionRadiogroupModel>creator.survey.getQuestionByName("r")).choices[0];
    expect(new StringEditorViewModelBase(choice.locText, creator).richTextEditMode).toBe("inline");
    creator.inplaceEditChoiceValues = true;
    expect(new StringEditorViewModelBase(choice.locText, creator).richTextEditMode).toBe("inline");
    restoreExampleTypes();
  });

  test("saves canonical HTML, keeps unformatted text as typed, and lets onHtmlToMarkdown override it", () => {
    useExampleTypes();
    const creator = new CreatorTester();
    creator.registerRichTextEditor(RichText);
    creator.JSON = { elements: [{ type: "text", name: "q", title: "Hello" }] };
    const loc = creator.survey.getQuestionByName("q").locTitle;
    const editor = new StringEditorViewModelBase(loc, creator);
    const target = document.createElement("div");
    target.innerHTML = "<strong>a</strong>";
    editor.onBlur({ target: target });
    expect(loc.text).toBe("<strong>a</strong>");
    target.innerHTML = "Tom &amp; Jerry";
    editor.onBlur({ target: target });
    expect(loc.text).toBe("Tom & Jerry");
    target.innerHTML = "<br>";
    editor.onBlur({ target: target });
    expect(loc.text).toBe("");

    creator.onHtmlToMarkdown.add((_sender, options) => { options.text = "md:" + options.html; });
    const overriding = new StringEditorViewModelBase(loc, creator);
    target.innerHTML = "<em>b</em>";
    overriding.onBlur({ target: target });
    expect(loc.text).toBe("md:<em>b</em>");
    restoreExampleTypes();
  });

  test("allows Ctrl+B/I only in rich mode and still blocks Ctrl+Z", () => {
    const plain = new CreatorTester();
    plain.JSON = surveyJson;
    const plainEditor = new StringEditorViewModelBase(plain.survey.getQuestionByName("q").locTitle, plain);
    let stopped = false;
    const track = (): void => { stopped = true; };
    plainEditor.checkConstraints({ keyCode: 66, ctrlKey: true, stopImmediatePropagation: track, preventDefault: track });
    expect(stopped).toBe(true);

    useExampleTypes();
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
    restoreExampleTypes();
  });

  test("attaches the toolbar on focus and lets Enter inside a list item stay in the editor", async () => {
    useExampleTypes();
    const creator = new CreatorTester();
    const { attached } = enableRich(creator);
    creator.JSON = { description: "About", elements: [{ type: "text", name: "q", title: "Hello" }] };
    const editor = new StringEditorViewModelBase(creator.survey.locDescription, creator);
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
    restoreExampleTypes();
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

  test("rich strings turn on when an editor is registered, and the markdown events do not change that", () => {
    const creator = new CreatorTester();
    const setsText = (_sender: any, options: any): void => { options.text = options.html; };
    const setsHtml = (_sender: any, options: any): void => { options.html = options.text; };

    expect(creator.isRichStringsEnabled()).toBe(false);
    creator.onHtmlToMarkdown.add(setsText);
    creator.onSurveyInstanceCreated.add((_sender, options) => options.survey.onTextMarkdown.add(setsHtml));
    expect(creator.isRichStringsEnabled()).toBe(false);

    creator.registerRichTextEditor(fakeEditor());
    expect(creator.isRichStringsEnabled()).toBe(true);
    creator.onHtmlToMarkdown.remove(setsText);
    expect(creator.isRichStringsEnabled()).toBe(true);
    creator.registerRichTextEditor(undefined);
    expect(creator.isRichStringsEnabled()).toBe(false);
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
  test("html and inlinehtml properties become richtext editors and the others stay plain", () => {
    useExampleTypes();
    const without = new CreatorTester();
    without.JSON = { description: "<p>Done</p>", elements: [{ type: "text", name: "q", title: "Hello", description: "About" }] };
    without.selectElement(without.survey);
    expect(without.propertyGrid.getQuestionByName("description").getType()).toBe("comment");
    expect(without.propertyGrid.getQuestionByName("title").getType()).toBe("text");

    const creator = new CreatorTester();
    creator.registerRichTextEditor(RichText);
    creator.JSON = {
      description: "<p>Done</p>",
      elements: [{ type: "text", name: "q", title: "Hello", description: "About" }]
    };
    creator.selectElement(creator.survey.getQuestionByName("q"));
    const title = creator.propertyGrid.getQuestionByName("title");
    const description = creator.propertyGrid.getQuestionByName("description");
    expect(title.getType()).toBe("richtext");
    expect(title.acceptCarriageReturn).toBe(false);
    expect(title.rows).toBe(1);
    expect(title.allowResize).toBe(false);
    expect(description.getType()).toBe("comment");

    creator.selectElement(creator.survey);
    const surveyTitle = creator.propertyGrid.getQuestionByName("title");
    const surveyDescription = creator.propertyGrid.getQuestionByName("description");
    expect(surveyTitle.getType()).toBe("text");
    expect(surveyDescription.getType()).toBe("richtext");
    expect(surveyDescription.acceptCarriageReturn).toBe(true);
    const completed = creator.propertyGrid.getQuestionByName("completedHtml");
    expect(completed.getType()).toBe("richtext");
    expect(completed.acceptCarriageReturn).toBe(true);
    restoreExampleTypes();
  });

  test("choice text cells are inline rich editors and the value stays plain", () => {
    useExampleTypes();
    const creator = new CreatorTester();
    creator.registerRichTextEditor(RichText);
    creator.JSON = { elements: [{ type: "radiogroup", name: "q", choices: ["Alpha", "Beta"] }] };
    creator.selectElement(creator.survey.getQuestionByName("q"));
    const choices = creator.propertyGrid.getQuestionByName("choices") as any;
    const textColumn = choices.columns.filter((column: any) => column.name === "text")[0];
    const valueColumn = choices.columns.filter((column: any) => column.name === "value")[0];
    expect(textColumn.cellType).toBe("richtext");
    expect(textColumn.templateQuestion.acceptCarriageReturn).toBe(false);
    expect(valueColumn.cellType).toBe("text");
    const textCell = choices.visibleRows[0].cells.filter((cell: any) => cell.column.name === "text")[0].question;
    expect(textCell.getType()).toBe("richtext");
    expect(textCell.acceptCarriageReturn).toBe(false);
    restoreExampleTypes();
  });

  test("translation cells are rich for html and inlinehtml strings and plain otherwise", () => {
    useExampleTypes();
    const creator = new CreatorTester({ showTranslationTab: true });
    creator.registerRichTextEditor(RichText);
    creator.JSON = {
      description: "<p>Survey <em>description</em></p>",
      elements: [{
        type: "text",
        name: "q",
        title: { default: "<strong>Hello</strong>", de: "Hallo" },
        description: "Plain description"
      }]
    };
    creator.activeTab = "translation";
    const stringsSurvey = (creator.getPlugin("translation") as any).model.stringsSurvey;
    const cell = (rowName: string, column: string) => {
      const matrix = stringsSurvey.getAllQuestions().filter((question: any) => {
        return question.getType() === "matrixdropdown" && question.visibleRows.some((row: any) => row.name === rowName);
      })[0];
      return matrix.visibleRows.filter((row: any) => row.name === rowName)[0].cells.filter((item: any) => item.column.name === column)[0].question;
    };
    const titleCell = cell("title", "de");
    expect(titleCell.getType()).toBe("richtext");
    expect(titleCell.acceptCarriageReturn).toBe(false);
    expect(titleCell.placeholder.indexOf("<")).toBe(-1);
    expect(titleCell.placeholder.indexOf("Hello")).toBeGreaterThan(-1);
    const descriptionCells = stringsSurvey.getAllQuestions().filter((question: any) => {
      return question.getType() === "matrixdropdown" && question.visibleRows.some((row: any) => row.name === "description");
    }).map((question: any) => question.visibleRows.filter((row: any) => row.name === "description")[0].cells.filter((item: any) => item.column.name === "de")[0].question);
    const surveyDescription = descriptionCells.filter((question: any) => question.getType() === "richtext")[0];
    const questionDescription = descriptionCells.filter((question: any) => question.getType() === "comment")[0];
    expect(surveyDescription).toBeTruthy();
    expect(surveyDescription.acceptCarriageReturn).toBe(true);
    expect(questionDescription).toBeTruthy();
    restoreExampleTypes();
  });
});
