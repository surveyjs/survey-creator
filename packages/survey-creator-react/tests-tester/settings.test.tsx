import * as React from "react";
import { act } from "react";
import { SurveyTesterModel } from "survey-creator-core/tester";
import { SurveyTester } from "../src/tester/SurveyTester";
import { formatSuite, insuranceSuite, insuranceSurvey, TesterHostStub } from "./testerHostStub";
import { mount, prepareEnvironment, settle, textOf, unmount } from "./testerSetup";
import type { Mounted } from "./testerSetup";

// The settings popup, which is the prototype's Setup tab relocated: the widget has no tab strip, so
// the options live behind a Settings action on the runner's toolbar.
//
// The form is a survey, and a survey is a JSON document: a property the serializer does not know is
// dropped in silence, and a question type that is not registered renders as nothing at all. So it is
// opened, and what it is supposed to be asking about is looked for on the screen.

let open: Array<SurveyTesterModel> = [];
let mounted: Array<Mounted> = [];

beforeAll(() => prepareEnvironment());

afterEach(async() => {
  for (const one of mounted) await unmount(one);
  mounted = [];
  open.forEach(model => model.dispose());
  open = [];
});

describe("the settings popup", () => {
  it("opens over the toolbar and renders both option panels as one survey", async() => {
    const host = new TesterHostStub(insuranceSurvey, formatSuite(insuranceSuite));
    const model = new SurveyTesterModel(host);
    open.push(model);
    const one = await mount(<SurveyTester model={model} />);
    mounted.push(one);

    // Closed to start with, and it is the model that says so.
    expect(model.settings.isOpen).toBe(false);
    await act(async() => { model.settings.open(); });
    await settle();

    const card = one.container.querySelector(".svt-settings") as HTMLElement;
    expect(card).toBeTruthy();
    // It is drawn inside survey-core's popup - the layer, the placement and the click-away are the
    // library's, and the card is the only part of it this bundle draws.
    expect(card.closest(".sv-popup")).toBeTruthy();

    const text = textOf(card);
    expect(text).toContain("Test options");
    expect(text).toContain("Host options");
    // One control per member of ISurveyTestOptions, and one per member of HostOptions.
    ["Locale", "Now", "Random seed", "Clear invisible values", "Check errors mode",
      "Stop on first failure", "Async timeout (ms)"].forEach(title => {
      expect(text).toContain(title);
    });
    ["Step delay (ms)", "Delay granularity", "Pause on a failing check", "Render the survey",
      "Highlight the current target", "Keep the last model on screen", "Console verbosity",
      "Auto-scroll the console"].forEach(title => {
      expect(text).toContain(title);
    });
    // And what the runner is actually handed, which is not quite what is typed: an empty locale is
    // dropped rather than sent as "".
    expect(textOf(card.querySelector(".svt-code") as HTMLElement)).toContain("randomSeed");
  }, 60000);

  it("an answer reaches the widget and changes what the run would do", async() => {
    const host = new TesterHostStub(insuranceSurvey, formatSuite(insuranceSuite));
    const model = new SurveyTesterModel(host);
    open.push(model);
    const one = await mount(<SurveyTester model={model} />);
    mounted.push(one);
    await act(async() => { model.settings.open(); });
    await settle();

    expect(model.runner.renderSurvey).toBe(true);
    const card = one.container.querySelector(".svt-settings") as HTMLElement;
    const boxes = Array.from(card.querySelectorAll("input[type=checkbox]")) as Array<HTMLInputElement>;
    const renderSurvey = boxes.filter(box => box.checked)[0];
    expect(renderSurvey).toBeTruthy();
    await act(async() => { renderSurvey.click(); });
    await settle();

    // The host options are the widget's own state, so the change lands on the runner and the left pane
    // stops drawing a model.
    expect(model.hostOptionsValue.renderSurvey === false || model.runner.renderSurvey === false)
      .toBe(true);
  }, 60000);
});
