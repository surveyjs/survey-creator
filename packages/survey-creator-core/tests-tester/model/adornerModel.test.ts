// The half of the adorners that is a decision: what exists, what each one is about, and what its menu
// offers. Where a button is drawn is prompt 07's, and nothing here measures, positions or observes
// anything.
//
// The list is built from recorder/elementRegistry.ts, which is fed by the model's own render events -
// so these tests fire those events with real nodes, which is exactly what a renderer does. An element
// that has not rendered has no adorner, and that is the point: an adorner is a place to put a button.
import { afterEach, describe, expect, it } from "vitest";
import { TesterAdornersModel, describeEntry, rendersHeader } from "../../src/tester/model/adornerModel";
import { SurveyTesterModel } from "../../src/tester/model/testerModel";
import { sample as conditional } from "../samples/01-conditional-visibility";
import { sample as matrix } from "../samples/05-dynamic-matrix";
import { sample as panels } from "../samples/06-dynamic-panel";
import { formatSuite, TesterHostStub } from "./testerHostStub";

let open: Array<SurveyTesterModel> = [];
let nodes: Array<HTMLElement> = [];
afterEach(() => {
  open.forEach(model => model.dispose());
  open = [];
  nodes.forEach(node => node.remove());
  nodes = [];
});

async function session(surveyJson: any): Promise<SurveyTesterModel> {
  const host = new TesterHostStub(surveyJson,
    formatSuite({ name: "recorded", tests: [{ name: "walk", steps: [] }] }));
  const model = new SurveyTesterModel(host);
  open.push(model);
  await model.openRecorder("walk");
  expect(model.recorder.liveSurvey, "the session opened without a model").toBeTruthy();
  return model;
}

// A node the registry will keep: it drops what the renderer has replaced, and "replaced" is a node that
// is no longer in the document.
function node(): HTMLElement {
  const element = document.createElement("div");
  document.body.appendChild(element);
  nodes.push(element);
  return element;
}

// What survey-react-ui does after it has drawn an element. The registry subscribes to these four events
// and to nothing else, which is what keeps this layer out of the renderer.
function renderQuestion(model: SurveyTesterModel, question: any): void {
  (model.recorder.liveSurvey as any).onAfterRenderQuestion
    .fire(model.recorder.liveSurvey, { question: question, htmlElement: node() });
}
function renderPanel(model: SurveyTesterModel, panel: any): void {
  (model.recorder.liveSurvey as any).onAfterRenderPanel
    .fire(model.recorder.liveSurvey, { panel: panel, htmlElement: node() });
}
function renderPage(model: SurveyTesterModel, page: any): void {
  (model.recorder.liveSurvey as any).onAfterRenderPage
    .fire(model.recorder.liveSurvey, { page: page, htmlElement: node() });
}
function renderCell(model: SurveyTesterModel, matrixQuestion: any, row: any, cell: any): void {
  (model.recorder.liveSurvey as any).onAfterRenderMatrixCell.fire(model.recorder.liveSurvey, {
    question: matrixQuestion, row: row, cellQuestion: cell, htmlElement: node(),
  });
}

function targets(model: SurveyTesterModel): Array<string> {
  return model.recorder.adorners.adorners.map(adorner => adorner.target);
}

describe("the adorner list", () => {
  it("carries the survey with nothing rendered, and tracks the registry after that", async() => {
    const model = await session(conditional.surveyJson);
    const survey: any = model.recorder.liveSurvey;
    const adorners = model.recorder.adorners;

    // The survey is the one target with no element anywhere, so it is offered before anything has
    // drawn - and it is first in the list, which is where the pane's own corner is.
    expect(targets(model)).toEqual(["survey"]);
    expect(adorners.adorners[0].place).toBe("survey");
    expect(adorners.adorners[0].kind).toBe("survey");

    renderQuestion(model, survey.getQuestionByName("hasInsurance"));
    renderQuestion(model, survey.getQuestionByName("insuranceProvider"));
    expect(targets(model)).toEqual(["survey", "hasInsurance", "insuranceProvider"]);
    expect(adorners.adorners[1].place).toBe("question");
    expect(adorners.adorners[1].kind).toBe("question");
    expect(adorners.adorners[1].ariaLabel).toBe("Checks for hasInsurance");

    // An adorner that is still about the same object is the same adorner: a re-render of the form must
    // not close the menu somebody is reading.
    const kept = adorners.adorners[1];
    adorners.refresh();
    expect(adorners.adorners[1]).toBe(kept);

    // And what the renderer took off the page leaves the list with it.
    nodes.splice(0).forEach(one => one.remove());
    adorners.refresh();
    expect(targets(model)).toEqual(["survey"]);
  }, 60000);

  // The header of a cell's menu is the resolved target, which is the string an author would otherwise
  // have to work out by hand and the single most common reason a hand-written matrix case fails with
  // unknownTarget (PROMPT-recorder.md section 5.6).
  it("resolves the target of a question inside a dynamic panel", async() => {
    const model = await session(panels.surveyJson);
    const survey: any = model.recorder.liveSurvey;
    const contacts: any = survey.getQuestionByName("contacts");
    contacts.addPanel();
    expect(contacts.panelCount).toBe(2);

    const second = contacts.panels[1];
    renderPanel(model, second);
    renderQuestion(model, second.getQuestionByName("phone"));

    expect(targets(model)).toContain("contacts[1].phone");
    const adorner = model.recorder.adorners.find("contacts[1].phone");
    expect(adorner, "the panel's own question got no adorner").toBeTruthy();
    expect((adorner as any).ariaLabel).toBe("Checks for contacts[1].phone");
    // And its menu is a question menu, offered over that very question.
    expect((adorner as any).menu.target).toBe("contacts[1].phone");
    expect((adorner as any).menu.rowModels.map((row: any) => row.name)).toContain("value");
  }, 60000);

  it("resolves the target of a matrix cell from the row the renderer handed over", async() => {
    const model = await session(matrix.surveyJson);
    const survey: any = model.recorder.liveSurvey;
    const items: any = survey.getQuestionByName("items");
    const row = items.visibleRows[0];
    renderCell(model, items, row, row.getQuestionByName("quantity"));

    expect(targets(model)).toContain("items[0].quantity");
    const adorner = model.recorder.adorners.find("items[0].quantity");
    expect((adorner as any).place, "a cell adorner does not stand in a question's corner").toBe("cell");
    expect((adorner as any).kind).toBe("question");

    // A matrix addressed by row name resolves the other way the grammar spells it.
    const ratings: any = survey.getQuestionByName("ratings");
    const rated = ratings.visibleRows[0];
    renderCell(model, ratings, rated, rated.getQuestionByName("score"));
    expect(targets(model)).toContain("ratings.speed.score");
  }, 60000);

  // A page or a panel that draws no header has nowhere to put a button: its corner is the corner of the
  // first question inside it, and two buttons in one corner say which element neither of them is about.
  it("offers a page and a panel only where the renderer draws them a header", async() => {
    const model = await session({
      pages: [{
        name: "page1",
        title: "About you",
        elements: [
          { type: "panel", name: "named", title: "Where you live", elements: [{ type: "text", name: "city" }] },
          { type: "panel", name: "bare", elements: [{ type: "text", name: "street" }] },
          {
            type: "panel", name: "described", description: "Two words about it",
            elements: [{ type: "text", name: "note" }],
          },
        ],
      }],
    });
    const survey: any = model.recorder.liveSurvey;
    renderPage(model, survey.pages[0]);
    ["named", "bare", "described"].forEach(name => renderPanel(model, survey.getPanelByName(name)));
    ["city", "street", "note"].forEach(name => renderQuestion(model, survey.getQuestionByName(name)));

    const listed = targets(model);
    // A title is a header, and so is a description on its own.
    expect(listed).toContain("page1");
    expect(listed).toContain("named");
    expect(listed).toContain("described");
    expect(listed, "a panel with no header was offered an adorner").not.toContain("bare");
    // The questions inside all three are addressed as ever: what a panel draws is a fact about the
    // panel and says nothing about what it holds.
    ["city", "street", "note"].forEach(name => {
      expect(listed, "a question of an unadorned panel lost its own button").toContain(name);
    });
    // The rule, asked in the renderer's own terms so that the two cannot come to disagree.
    expect(rendersHeader(survey.getPanelByName("named"), "panel")).toBe(true);
    expect(rendersHeader(survey.getPanelByName("bare"), "panel")).toBe(false);
    expect(rendersHeader(survey.pages[0], "page")).toBe(true);
    expect(rendersHeader(undefined, "page")).toBe(false);
  }, 60000);

  // At most one menu is open: a second open menu is two answers to "what is being checked".
  it("opens one menu at a time and projects the case onto every adorner", async() => {
    const model = await session(conditional.surveyJson);
    const survey: any = model.recorder.liveSurvey;
    const recorder = model.recorder;
    renderQuestion(model, survey.getQuestionByName("hasInsurance"));
    const adorners = recorder.adorners;

    adorners.toggle("survey");
    expect(adorners.openTarget).toBe("survey");
    expect((adorners.find("survey") as any).isOpen).toBe(true);
    adorners.toggle("hasInsurance");
    expect(adorners.openTarget).toBe("hasInsurance");
    expect((adorners.find("survey") as any).isOpen).toBe(false);
    adorners.toggle("hasInsurance");
    expect(adorners.openTarget).toBe(undefined);

    // What the case asserts reaches the button as a count, so a person can see which elements are
    // already checked without opening a menu.
    await recorder.addChecks("hasInsurance", [{ name: "visible", payloadType: "boolean" }]);
    adorners.update();
    expect((adorners.find("hasInsurance") as any).tickedCount).toBe(1);
    expect((adorners.find("hasInsurance") as any).hasChecks).toBe(true);
    expect((adorners.find("survey") as any).tickedCount).toBe(0);
  }, 60000);

  // An element the grammar cannot address gets no adorner rather than one that would end the case with
  // unknownTarget.
  it("offers nothing for an element a case cannot address", () => {
    expect(describeEntry({ kind: "question", obj: {}, node: node() })).toBe(undefined);
    expect(describeEntry({ kind: "panel", obj: {}, node: node() })).toBe(undefined);
    expect(describeEntry({ kind: "page", obj: {}, node: node() })).toBe(undefined);
    expect(describeEntry({ kind: "cell", obj: {}, node: node() })).toBe(undefined);
  });

  // Detaching is what a replay does before it abandons a model, and what closing the session does. The
  // list is emptied and the registry stops reporting into it.
  it("lets go of everything when the model it was about is abandoned", async() => {
    const model = await session(conditional.surveyJson);
    const survey: any = model.recorder.liveSurvey;
    renderQuestion(model, survey.getQuestionByName("hasInsurance"));
    expect(targets(model).length).toBe(2);
    model.recorder.adorners.detach();
    expect(model.recorder.adorners.adorners.length).toBe(0);
    expect(model.recorder.adorners.openTarget).toBe(undefined);
  }, 60000);

  // The list has no owner beyond the session, so a standalone one is what the whole of it needs.
  it("draws nothing before it is attached", () => {
    const adorners = new TesterAdornersModel({
      liveSurvey: undefined,
      adornersBusy: false,
      tickedTargets: () => ({}),
      addChecks: () => undefined,
      removeChecks: () => undefined,
    });
    try {
      adorners.refresh();
      expect(adorners.adorners.length).toBe(0);
      adorners.setOpen("survey");
      expect(adorners.openTarget).toBe("survey");
    } finally {
      adorners.dispose();
    }
  });
});
