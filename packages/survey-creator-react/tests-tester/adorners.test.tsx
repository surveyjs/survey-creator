import * as React from "react";
import { act } from "react";
import { SurveyTesterModel } from "survey-creator-core/tester";
import { SurveyTester } from "../src/tester/SurveyTester";
import { formatSuite, TesterHostStub } from "./testerHostStub";
import { mount, prepareEnvironment, settle, textOf, unmount, waitFor } from "./testerSetup";
import type { Mounted } from "./testerSetup";

// The adorners, over a rendered survey.
//
// Which element gets one is a model decision and is asserted one package up, in adornerModel.test.ts.
// What is asserted here is the half that only exists once something has rendered: that the wrapper
// draws the element's own markup with a slot beside it, that an element the grammar cannot address
// gets neither, that a cell's slot is inside the cell, that a page's is drawn only where the page
// draws a header - and that the button opens the stock popup and a tick reaches the session.
//
// Nothing here measures anything. The grep of prompt 07 section 6 is the other half of that promise;
// this is the behavioural one: an adorner is a child of the element it is about, so it is found by
// looking inside that element.

let open: Array<SurveyTesterModel> = [];
let mounted: Array<Mounted> = [];

beforeAll(() => prepareEnvironment());

afterEach(async() => {
  for (const one of mounted) await unmount(one);
  mounted = [];
  open.forEach(model => model.dispose());
  open = [];
});

const surveyJson = {
  pages: [{
    name: "page1",
    title: "About you",
    elements: [
      { type: "radiogroup", name: "colour", title: "Favourite colour", choices: ["red", "green", "blue"] },
      { type: "html", name: "note", html: "<p>Not addressable</p>" },
      {
        type: "panel", name: "bare",
        elements: [{ type: "text", name: "street", title: "Street" }],
      },
      {
        type: "matrixdynamic", name: "contacts", title: "Contacts", rowCount: 1,
        columns: [{ cellType: "text", name: "phone", title: "Phone" }],
      },
    ],
  }],
};

async function session(): Promise<{ model: SurveyTesterModel, container: HTMLElement }> {
  const host = new TesterHostStub(surveyJson, formatSuite({
    name: "Adorned", tests: [{ name: "walk", steps: [] }],
  }), { hostOptions: { stepDelayMs: 0 } });
  const model = new SurveyTesterModel(host);
  open.push(model);
  const one = await mount(<SurveyTester model={model} />);
  mounted.push(one);
  await act(async() => { await model.openRecorder("walk"); });
  await waitFor(() => !model.recorder.busy && !!model.recorder.liveSurvey);
  // The adorner list is built from the model's own render events, which fire after the first paint, so
  // the list grows one repaint behind the survey. That is correct - an element that has not rendered
  // has no adorner - and this is what waiting for it looks like.
  await waitFor(() => model.recorder.adorners.adorners.length > 1);
  return { model: model, container: one.container };
}

function boxOf(container: HTMLElement, name: string): HTMLElement | null {
  return container.querySelector("[data-name=\"" + name + "\"]");
}

describe("the adorners", () => {
  it("wraps an addressable question and leaves the chrome around it exactly as it was", async() => {
    const { container } = await session();
    const colour = boxOf(container, "colour") as HTMLElement;
    expect(colour).toBeTruthy();
    // The question's own markup is untouched inside the adorned box, and the slot is beside it.
    const adorned = colour.closest(".svt-adorned") as HTMLElement;
    expect(adorned).toBeTruthy();
    expect(adorned.className).toContain("svt-adorned--question");
    expect(adorned.querySelector(".svt-adorner-slot")).toBeTruthy();
    expect(adorned.querySelectorAll("input[type=radio]").length).toBe(3);

    // Every wrapper the renderer asks for with a reason other than "cell" is a piece of chrome the
    // recorder has no target for - a column header, the header of a matrix row, the footer of a total
    // row - and none of them is wrapped.
    const headers = Array.from(container.querySelectorAll(".sd-table__cell--header"));
    expect(headers.length).toBeGreaterThan(0);
    headers.forEach(header => expect(header.querySelector(".svt-adorner")).toBeNull());
  }, 60000);

  it("puts a cell's slot inside the cell", async() => {
    const { container } = await session();
    const cell = container.querySelector(".svt-adorned--cell") as HTMLElement;
    expect(cell).toBeTruthy();
    expect(cell.closest("td, .sd-table__cell")).toBeTruthy();
    const slot = cell.querySelector(".svt-adorner-slot") as HTMLElement;
    expect(slot).toBeTruthy();
    expect(slot.className).toContain("svt-adorner-slot--cell");
    // "contacts[0].phone" is the string an author would otherwise have to work out by hand, and the
    // button names it.
    expect((slot.querySelector(".svt-adorner") as HTMLElement).getAttribute("aria-label"))
      .toContain("contacts[0].phone");
  }, 60000);

  it("adorns a page that draws a header and a panel that does not draw one", async() => {
    const { container } = await session();
    // The page has a title, so it renders a header and there is a corner to stand a button in.
    const page = container.querySelector(".svt-adorned--page") as HTMLElement;
    expect(page).toBeTruthy();
    expect(page.querySelector(".svt-adorner-slot--page")).toBeTruthy();
    // The panel draws nothing of itself, so its corner is the corner of the question inside it - two
    // buttons in one place, neither saying which element it is about. It is not adorned.
    expect(container.querySelector(".svt-adorned--panel")).toBeNull();
    // And the question inside it keeps its own button: what a panel draws says nothing about what it
    // holds.
    expect((boxOf(container, "street") as HTMLElement).closest(".svt-adorned")).toBeTruthy();
  }, 60000);

  it("opens the stock popup on a press, and a tick reaches the session", async() => {
    const { model, container } = await session();
    const colour = boxOf(container, "colour") as HTMLElement;
    const button = (colour.closest(".svt-adorned") as HTMLElement)
      .querySelector(".svt-adorner") as HTMLElement;
    expect(button.getAttribute("aria-expanded")).toBe("false");

    await act(async() => { button.click(); });
    await settle();
    expect(model.recorder.adorners.openTarget).toBe("colour");
    // The menu is survey-core's popup over survey-core's list: the card is ours and everything about
    // where it is, when it closes and what a scroll does to it is the library's.
    const menu = container.querySelector(".svt-checks") as HTMLElement;
    expect(menu).toBeTruthy();
    expect(menu.closest(".sv-popup")).toBeTruthy();
    expect(menu.querySelectorAll(".svt-check-row").length).toBeGreaterThan(3);
    // A row says what the check is called and what the model holds for it right now.
    expect(textOf(menu)).toContain("visible");

    const rows = Array.from(menu.querySelectorAll(".svt-check-row")) as Array<HTMLElement>;
    const visible = rows.filter(row => (row.textContent || "").indexOf("visible") === 0)[0];
    expect(visible).toBeTruthy();
    await act(async() => { visible.click(); });
    // The confirming run behind a tick is what writes it, so this waits for the session rather than
    // for the screen.
    await waitFor(() => model.recorder.stepCount > 0);
    expect(model.recorder.tickedFor("colour")).toEqual(["visible"]);
    // And the button counts what the case asserts, so a person sees it without opening the menu.
    await settle();
    const counted = (colour.closest(".svt-adorned") as HTMLElement)
      .querySelector(".svt-adorner") as HTMLElement;
    expect(counted.className).toContain("svt-adorner--counted");
    expect(textOf(counted)).toContain("1");
  }, 60000);

  it("holds the question's own dropdown open while the choices picker is used", async() => {
    // "Show choices" (notes 26): the `choices` row opens a picker of the visible choices, and while it
    // is open the question's own popup is held open beside it - so the person ticks against the list
    // they can see. Which popup that is is the model's answer; holding it open is this bundle's.
    const host = new TesterHostStub({
      elements: [{
        type: "dropdown", name: "colour", title: "Colour", choices: ["red", "green", "blue"],
      }],
    }, formatSuite({ name: "Adorned", tests: [{ name: "walk", steps: [] }] }),
    { hostOptions: { stepDelayMs: 0 } });
    const model = new SurveyTesterModel(host);
    open.push(model);
    const one = await mount(<SurveyTester model={model} />);
    mounted.push(one);
    await act(async() => { await model.openRecorder("walk"); });
    await waitFor(() => !model.recorder.busy && !!model.recorder.liveSurvey);
    await waitFor(() => !!model.recorder.adorners.find("colour"));

    const adorner = model.recorder.adorners.find("colour") as any;
    await act(async() => { model.recorder.adorners.toggle("colour"); });
    await settle();
    const menu = adorner.menu;
    const choices = menu.rowModels.filter((row: any) => row.name === "choices")[0];
    expect(choices).toBeTruthy();
    expect(choices.hasPicker).toBe(true);

    // A dropdown that has rendered has a dropdownListModel, and its popup is what the model names.
    await act(async() => { menu.toggle(choices); });
    await settle();
    expect(menu.pickerKind).toBe("choices");
    const held = menu.choicesPopup;
    expect(held).toBeTruthy();
    expect(held.isVisible).toBe(true);
    // Every choice is ticked to start with: the picker is there to narrow what the check covers.
    expect(menu.pickerItems.length).toBe(3);
    expect(one.container.querySelectorAll(".svt-picker__hit").length).toBe(3);

    // Closing the menu closes the popup it was holding open.
    await act(async() => { model.recorder.adorners.setOpen(undefined); });
    await settle();
    expect(held.isVisible).toBe(false);
  }, 60000);
});
