import { expect, test } from "vitest";
import { Serializer, QuestionPanelDynamicModel, PanelModel, PageModel, Question, SurveyModel } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { BeforeShowInplaceDescriptionEditorEvent } from "../src/creator-events-api";
import { QuestionAdornerViewModel } from "../src/components/question";

test("onBeforeShowInplaceDescriptionEditor: show/hide empty description per instance", () => {
  // Make empty descriptions show by default in design mode for these element types
  const props = [
    Serializer.getProperty("text", "description"),
    Serializer.getProperty("panel", "description"),
    Serializer.getProperty("page", "description")
  ];
  const oldValues = props.map(p => p.placeholder);
  props.forEach(p => p.placeholder = "Enter a description");

  const creator = new CreatorTester();
  const handled: Array<string> = [];
  creator.onBeforeShowInplaceDescriptionEditor.add((_, options: BeforeShowInplaceDescriptionEditorEvent) => {
    handled.push(options.element.name);
    // Show the empty description only for the first question, the panel, and the dynamic panel's inner question
    options.show = ["q1", "panel1", "q4"].indexOf(options.element.name) > -1;
  });
  creator.JSON = {
    pages: [{
      name: "page1",
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2" },
        { type: "panel", name: "panel1", elements: [{ type: "text", name: "q3" }] },
        { type: "paneldynamic", name: "dp1", templateElements: [{ type: "text", name: "q4" }] }
      ]
    }]
  };
  const survey = creator.survey;
  const page1 = survey.getPageByName("page1") as PageModel;
  const q1 = survey.getQuestionByName("q1") as Question;
  const q2 = survey.getQuestionByName("q2") as Question;
  const panel1 = survey.getPanelByName("panel1") as PanelModel;
  const q3 = survey.getQuestionByName("q3") as Question;
  const dp1 = survey.getQuestionByName("dp1") as QuestionPanelDynamicModel;
  const q4 = dp1.template.getQuestionByName("q4") as Question;

  expect(q1.hasDescription, "q1: shown by the event").toBe(true);
  expect(q2.hasDescription, "q2: hidden by the event").toBe(false);
  expect(q3.hasDescription, "q3: hidden by the event (no name in list)").toBe(false);
  expect(panel1.hasDescription, "panel1: shown by the event").toBe(true);
  expect(q4.hasDescription, "q4 (dynamic panel template): shown by the event").toBe(true);
  // Page description is controlled by the page adorner placeholder; the event still applies
  expect(page1.hasDescription, "page1: hidden by the event (no name in list)").toBe(false);

  expect(handled.indexOf("q1") > -1, "the event is raised for q1").toBe(true);
  expect(handled.indexOf("q4") > -1, "the event is raised for the dynamic panel template question").toBe(true);

  props.forEach((p, i) => p.placeholder = oldValues[i]);
});

test("onBeforeShowInplaceDescriptionEditor: raised for both empty and non-empty descriptions", () => {
  const creator = new CreatorTester();
  const handled: { [key: string]: { show: boolean } } = {};
  creator.onBeforeShowInplaceDescriptionEditor.add((_, options: BeforeShowInplaceDescriptionEditorEvent) => {
    handled[options.element.name] = { show: options.show };
    if (options.element.name === "q1") options.show = false; // hide a non-empty description
    if (options.element.name === "q2") options.show = true; // show an empty description
  });
  creator.JSON = {
    elements: [
      { type: "text", name: "q1", description: "desc1" },
      { type: "text", name: "q2" }
    ]
  };
  const survey = creator.survey;
  const q1 = survey.getQuestionByName("q1") as Question;
  const q2 = survey.getQuestionByName("q2") as Question;

  expect(q1.hasDescription, "q1: non-empty description hidden by the event").toBe(false);
  expect(q2.hasDescription, "q2: empty description shown by the event").toBe(true);
  expect(!!handled["q1"], "the event is raised for the non-empty description").toBe(true);
  expect(!!handled["q2"], "the event is raised for the empty description").toBe(true);
  expect(handled["q1"].show, "default visibility for a non-empty description is true").toBe(true);
});

test("onBeforeShowInplaceDescriptionEditor: show/hide the survey empty description on the design surface", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  const survey = creator.survey;
  // The survey empty description is shown on the design surface by default
  expect(survey.renderedHasDescription, "survey description shown by default").toBe(true);

  const handled: Array<SurveyModel> = [];
  creator.onBeforeShowInplaceDescriptionEditor.add((_, options: BeforeShowInplaceDescriptionEditorEvent) => {
    if (options.element.getType() === "survey") {
      handled.push(options.element as SurveyModel);
      options.show = false;
    }
  });

  expect(survey.renderedHasDescription, "survey description hidden by the event").toBe(false);
  expect(handled[0], "the event is raised with the survey instance").toBe(survey);
});

test("onBeforeShowInplaceDescriptionEditor: show/hide a page empty description on the design surface", () => {
  const creator = new CreatorTester();
  creator.onBeforeShowInplaceDescriptionEditor.add((_, options: BeforeShowInplaceDescriptionEditorEvent) => {
    if (options.element.getType() === "page") {
      options.show = options.element.name === "page2";
    }
  });
  creator.JSON = {
    pages: [
      { name: "page1", elements: [{ type: "text", name: "q1" }] },
      { name: "page2", elements: [{ type: "text", name: "q2" }] }
    ]
  };
  const survey = creator.survey;
  const page1 = survey.getPageByName("page1") as PageModel;
  const page2 = survey.getPageByName("page2") as PageModel;
  expect(page1.hasDescription, "page1: hidden by the event").toBe(false);
  expect(page2.hasDescription, "page2: shown by the event").toBe(true);
  // The design surface renders the page description through _showDescription, which must
  // honor the event too (otherwise the empty page description is always shown).
  expect((page1 as any)._showDescription, "page1: description not rendered on the surface").toBe(false);
  expect((page2 as any)._showDescription, "page2: description rendered on the surface").toBe(true);
});

test("onBeforeShowInplaceDescriptionEditor: page empty description is shown by default on the design surface", () => {
  const creator = new CreatorTester();
  creator.JSON = {
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }]
  };
  const page1 = creator.survey.getPageByName("page1") as PageModel;
  expect((page1 as any)._showDescription, "page1: empty description shown by default").toBe(true);
});

test("onBeforeShowInplaceDescriptionEditor: default visibility is used when the event is not handled", () => {
  const prop = Serializer.getProperty("text", "description");
  const oldValue = prop.placeholder;
  prop.placeholder = "Enter a description";

  const creator = new CreatorTester();
  creator.JSON = {
    elements: [{ type: "text", name: "q1" }]
  };
  const q1 = creator.survey.getQuestionByName("q1") as Question;
  expect(q1.hasDescription, "empty description shown by default in design mode").toBe(true);

  prop.placeholder = oldValue;
});

test("onBeforeShowInplaceDescriptionEditor: the shown empty description is visibly editable for a question and a panel", () => {
  // When the event forces an empty description to show, the in-place editor must render a
  // non-empty placeholder; otherwise it is hidden (svc-string-editor--hidden) and nothing appears.
  const creator = new CreatorTester();
  creator.onBeforeShowInplaceDescriptionEditor.add((_, options: BeforeShowInplaceDescriptionEditorEvent) => {
    options.show = true;
  });
  creator.JSON = {
    elements: [
      { type: "text", name: "q1" },
      { type: "panel", name: "panel1", elements: [{ type: "text", name: "q2" }] }
    ]
  };
  const q1 = creator.survey.getQuestionByName("q1") as Question;
  const panel1 = creator.survey.getPanelByName("panel1") as PanelModel;

  expect(q1.hasDescription, "q1: empty description shown by the event").toBe(true);
  expect(panel1.hasDescription, "panel1: empty description shown by the event").toBe(true);

  const qAdorner = new QuestionAdornerViewModel(creator, q1, <any>{});
  const pAdorner = new QuestionAdornerViewModel(creator, panel1, <any>{});
  // The adorner wires the in-place description editor placeholder so the empty description is visible.
  expect((q1.locDescription as any).placeholder, "q1: description placeholder wired").toBe("pe.descriptionPlaceholder");
  expect((panel1.locDescription as any).placeholder, "panel1: description placeholder wired").toBe("pe.descriptionPlaceholder");

  qAdorner.dispose();
  pAdorner.dispose();
  expect((q1.locDescription as any).placeholder, "q1: placeholder removed on detach").toBe(undefined);
  expect((panel1.locDescription as any).placeholder, "panel1: placeholder removed on detach").toBe(undefined);
});

// --- All element types: empty vs non-empty description, show=true vs show=false ---

type DescElementType = "survey" | "page" | "panel" | "question";
const allDescElementTypes: Array<DescElementType> = ["survey", "page", "panel", "question"];

function buildDescCreator(fillDescription: boolean, show?: boolean): CreatorTester {
  const creator = new CreatorTester();
  if (show !== undefined) {
    creator.onBeforeShowInplaceDescriptionEditor.add((_, options: BeforeShowInplaceDescriptionEditorEvent) => {
      options.show = show;
    });
  }
  const d = fillDescription ? "description text" : undefined;
  creator.JSON = {
    title: "Survey",
    description: d,
    pages: [{
      name: "page1", title: "Page 1", description: d,
      elements: [{
        type: "panel", name: "panel1", title: "Panel 1", description: d,
        elements: [{ type: "text", name: "q1", title: "Q1", description: d }]
      }]
    }]
  };
  return creator;
}

// The actual flag the design surface binds to for each element type.
function isDescriptionRendered(creator: CreatorTester, type: DescElementType): boolean {
  const survey = creator.survey;
  switch(type) {
    case "survey": return survey.renderedHasDescription;
    case "page": return (survey.getPageByName("page1") as any)._showDescription;
    case "panel": return (survey.getPanelByName("panel1") as PanelModel).hasDescription;
    case "question": return (survey.getQuestionByName("q1") as Question).hasDescription;
  }
}

test("onBeforeShowInplaceDescriptionEditor: show=true renders the description for every element type, empty or not", () => {
  [true, false].forEach((fill) => {
    const creator = buildDescCreator(fill, true);
    allDescElementTypes.forEach((type) => {
      expect(isDescriptionRendered(creator, type),
        `${type} (${fill ? "non-empty" : "empty"}): shown when show=true`).toBe(true);
    });
  });
});

test("onBeforeShowInplaceDescriptionEditor: show=false hides the description for every element type, empty or not", () => {
  [true, false].forEach((fill) => {
    const creator = buildDescCreator(fill, false);
    allDescElementTypes.forEach((type) => {
      expect(isDescriptionRendered(creator, type),
        `${type} (${fill ? "non-empty" : "empty"}): hidden when show=false`).toBe(false);
    });
  });
});

test("onBeforeShowInplaceDescriptionEditor: default visibility depends on whether the description is empty (no event)", () => {
  // A non-empty description is always rendered.
  const filled = buildDescCreator(true);
  allDescElementTypes.forEach((type) => {
    expect(isDescriptionRendered(filled, type), `${type}: non-empty description is shown by default`).toBe(true);
  });
  // An empty description: questions/panels are hidden, while the page and survey show the empty
  // in-place editor in design mode by default.
  const empty = buildDescCreator(false);
  expect(isDescriptionRendered(empty, "question"), "empty question: hidden by default").toBe(false);
  expect(isDescriptionRendered(empty, "panel"), "empty panel: hidden by default").toBe(false);
  expect(isDescriptionRendered(empty, "page"), "empty page: shown by default in design mode").toBe(true);
  expect(isDescriptionRendered(empty, "survey"), "empty survey: shown by default in design mode").toBe(true);
});

test("onBeforeShowInplaceDescriptionEditor: setting/clearing the description in code updates the rendered visibility", () => {
  // Show the in-place editor only while the description is not empty, for every element type.
  const creator = new CreatorTester();
  creator.onBeforeShowInplaceDescriptionEditor.add((_, options: BeforeShowInplaceDescriptionEditorEvent) => {
    options.show = !!options.element.description;
  });
  creator.JSON = {
    title: "Survey",
    pages: [{
      name: "page1", title: "Page 1",
      elements: [{
        type: "panel", name: "panel1", title: "Panel 1",
        elements: [{ type: "text", name: "q1", title: "Q1" }]
      }]
    }]
  };
  const survey = creator.survey;
  const page1 = survey.getPageByName("page1") as PageModel;
  const panel1 = survey.getPanelByName("panel1") as PanelModel;
  const q1 = survey.getQuestionByName("q1") as Question;

  // Empty descriptions -> hidden everywhere.
  allDescElementTypes.forEach((type) => {
    expect(isDescriptionRendered(creator, type), `${type}: hidden while the description is empty`).toBe(false);
  });

  // Set the description in code -> the design surface must render it.
  survey.description = "S";
  page1.description = "P";
  panel1.description = "PN";
  q1.description = "Q";
  allDescElementTypes.forEach((type) => {
    expect(isDescriptionRendered(creator, type), `${type}: shown after setting the description in code`).toBe(true);
  });

  // Clear the description in code -> the design surface must hide it again.
  survey.description = "";
  page1.description = "";
  panel1.description = "";
  q1.description = "";
  allDescElementTypes.forEach((type) => {
    expect(isDescriptionRendered(creator, type), `${type}: hidden after clearing the description in code`).toBe(false);
  });
});

test("onBeforeShowInplaceDescriptionEditor: panel adorner - the description input appears with the title and disappears without it, Bug#7861", () => {
  const creator = new CreatorTester();
  // Every time the event is raised for panel1, remember the title/description it saw and the decision it made.
  const raisedForPanel: Array<{ title: string, description: string, show: boolean }> = [];
  creator.onBeforeShowInplaceDescriptionEditor.add((_, options: BeforeShowInplaceDescriptionEditorEvent) => {
    const element: any = options.element;
    const hasDescription = !!element.description;
    const hasTitle = !!element.title;
    if (element.isPanel) {
      options.show = hasTitle && hasDescription;
      raisedForPanel.push({ title: element.title, description: element.description, show: options.show });
    }
  });
  creator.JSON = {
    elements: [
      { type: "panel", name: "panel1", elements: [{ type: "text", name: "q1" }] }
    ]
  };
  const panel1 = creator.survey.getPanelByName("panel1") as PanelModel;
  // The design surface renders the panel through its adorner, which wires the in-place description editor.
  const adorner = new QuestionAdornerViewModel(creator, <any>panel1, <any>{});
  expect((panel1.locDescription as any).placeholder, "the in-place description editor is wired").toBe("pe.descriptionPlaceholder");

  // The design surface renders the panel once. hasDescriptionUnderTitle is what the panel header
  // binds to when it decides whether to render the description element.
  expect(panel1.hasDescriptionUnderTitle, "no title, no description: description input hidden").toBe(false);
  raisedForPanel.length = 0;

  // From now on nothing reads the visibility: each change must raise the event by itself, otherwise
  // the UI is never told to re-render the description input.

  // 1. Set the description: the event is raised, but the description input stays hidden, because
  // the panel has no title yet.
  panel1.description = "Panel description";
  expect(raisedForPanel.length, "the event is raised after the description is set").toBe(1);
  expect(raisedForPanel[0], "the event sees the new description and hides it").toStrictEqual(
    { title: "", description: "Panel description", show: false });

  // 2. Set the title: the event is raised again and the description input appears.
  panel1.title = "Panel title";
  expect(raisedForPanel.length, "the event is raised after the title is set").toBe(2);
  expect(raisedForPanel[1], "the event sees the new title and shows the description").toStrictEqual(
    { title: "Panel title", description: "Panel description", show: true });

  // 3. Clear the title: the event is raised again and the description input disappears.
  panel1.title = "";
  expect(raisedForPanel.length, "the event is raised after the title is cleared").toBe(3);
  expect(raisedForPanel[2], "the event sees the cleared title and hides the description").toStrictEqual(
    { title: "", description: "Panel description", show: false });

  // The rendered flag already holds the value the last event produced, no extra event is raised.
  expect(panel1.hasDescriptionUnderTitle, "description input hidden again").toBe(false);
  expect(raisedForPanel.length, "reading the rendered flag raises no further event").toBe(3);

  adorner.dispose();
});
