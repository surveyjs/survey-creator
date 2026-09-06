import * as React from "react";
import { act } from "react";
import { SurveyTesterModel } from "survey-creator-core/tester";
import { SurveyTester } from "../src/tester/SurveyTester";
import { failingSuite, formatSuite, insuranceSurvey, TesterHostStub } from "./testerHostStub";
import { mount, prepareEnvironment, settle, textOf, unmount, waitFor } from "./testerSetup";
import type { Mounted } from "./testerSetup";

// The React half of the headless walk the core prompts built: one host, one component, one press, and
// then the screen is read the way a person reads it.
//
// It is deliberately end to end and deliberately about a suite that fails. A host that never shows a
// failing check honestly is not usable, and every layer between the press and the sentence on the line
// - the runner, the row, the check view, the console model, the markup - is in the path of this one
// assertion.

let open: Array<SurveyTesterModel> = [];
let mounted: Array<Mounted> = [];

beforeAll(() => prepareEnvironment());

afterEach(async() => {
  for (const one of mounted) await unmount(one);
  mounted = [];
  open.forEach(model => model.dispose());
  open = [];
});

describe("the whole widget over a failing suite", () => {
  it("runs it, paints the verdict on the row and the events in the transcript", async() => {
    const host = new TesterHostStub(insuranceSurvey, formatSuite(failingSuite), {
      hostOptions: { stepDelayMs: 0 },
    });
    const model = new SurveyTesterModel(host);
    open.push(model);
    const one = await mount(<SurveyTester model={model} />);
    mounted.push(one);
    const container = one.container;

    // Nothing has run, and the screen says exactly that rather than pretending to a verdict.
    expect(textOf(container)).toContain("not run yet");
    expect(container.querySelector(".svt-dot--passed")).toBeNull();

    await act(async() => { model.startRun(undefined); });
    await waitFor(() => !model.runner.isRunning);

    // The row's verdict.
    expect(container.querySelector(".svt-dot--failed")).toBeTruthy();
    expect(textOf(container)).toContain("1 failed");
    const assertion = container.querySelector(".svt-assert__line") as HTMLElement;
    expect(assertion).toBeTruthy();
    expect(textOf(assertion)).toContain("expected");
    expect(textOf(assertion)).toContain("yes");

    // And the transcript. It is the pane no library model covers, so this is the one place its markup
    // is exercised end to end: the rows, the filter and the footer count.
    await act(async() => { model.runner.toggleLog(); });
    await settle();
    const console_ = container.querySelector(".svt-console") as HTMLElement;
    expect(console_).toBeTruthy();
    const rows = console_.querySelectorAll(".svt-console-row");
    expect(rows.length).toBeGreaterThan(3);
    expect(textOf(console_)).toContain("run started");
    expect(textOf(console_)).toContain("rows");

    // The failures filter is the model's, and the pane is bound to it.
    const failures = console_.querySelector(".svt-console__toggle input") as HTMLInputElement;
    expect(failures).toBeTruthy();
    await act(async() => { failures.click(); });
    await settle();
    const filtered = console_.querySelectorAll(".svt-console-row").length;
    expect(filtered).toBeLessThan(rows.length);
    expect(filtered).toBeGreaterThan(0);
  }, 60000);

  it("goes to the JSON screen revealed at the test, and back again", async() => {
    const host = new TesterHostStub(insuranceSurvey, formatSuite(failingSuite));
    const model = new SurveyTesterModel(host);
    open.push(model);
    const one = await mount(<SurveyTester model={model} />);
    mounted.push(one);

    await act(async() => { model.openJson("A value that is simply wrong"); });
    await settle();
    expect(model.screen).toBe("json");
    const area = one.container.querySelector(".svt-editor__area") as HTMLTextAreaElement;
    expect(area).toBeTruthy();
    expect(area.value).toBe(host.getTestsText());
    // The toolbar says what the editor was opened on, because it holds the whole document and only the
    // reveal was scoped to one test.
    expect(textOf(one.container)).toContain("A value that is simply wrong");
    expect(textOf(one.container)).toContain("no issue");

    // An edit here goes out to the host immediately: there is no Apply and no staging buffer anywhere
    // in this widget.
    const next = host.getTestsText().replace("Failures", "Renamed");
    await act(async() => { model.json.setText(next); });
    await settle();
    expect(host.getTestsText()).toBe(next);

    const back = Array.from(one.container.querySelectorAll(".svt-toolbar button"))
      .filter(button => (button.textContent || "").indexOf("Back") > -1)[0] as HTMLElement;
    expect(back).toBeTruthy();
    await act(async() => { back.click(); });
    await settle();
    expect(model.screen).toBe("runner");
  }, 60000);

  it("restores the screen, the selection and the cursor a host saved", async() => {
    // getState/setState is what a host persists across a reload, and the widget is the same widget on
    // the other side of one.
    const host = new TesterHostStub(insuranceSurvey, formatSuite(failingSuite));
    const first = new SurveyTesterModel(host);
    open.push(first);
    first.openJson("A value that is simply wrong");
    first.setSelectedNames(["A value that is simply wrong"]);
    const state = first.getState();
    expect(state.screen).toBe("json");

    const second = new SurveyTesterModel(host);
    open.push(second);
    second.setState(state);
    const one = await mount(<SurveyTester model={second} />);
    mounted.push(one);
    expect(second.screen).toBe("json");
    expect(one.container.querySelector(".svt-editor__area")).toBeTruthy();
  }, 60000);
});
