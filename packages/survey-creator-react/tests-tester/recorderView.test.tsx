import * as React from "react";
import { act } from "react";
import { SurveyTesterModel } from "survey-creator-core/tester";
import { SurveyTester } from "../src/tester/SurveyTester";
import { formatSuite, insuranceSurvey, TesterHostStub } from "./testerHostStub";
import { mount, prepareEnvironment, settle, textOf, unmount, waitFor } from "./testerSetup";
import type { Mounted } from "./testerSetup";

// The recorder screen, as DOM. The model-level assertions - what a press records, where it lands, what
// the confirming run writes - are pinned in survey-creator-core's own recorder tests and are
// deliberately not repeated here. What is here is the half those cannot see: that the live form is
// rendered and attached to, that the step list is the survey the model built, and that the two locks
// are `inert` on the two panes.

let open: Array<SurveyTesterModel> = [];
let mounted: Array<Mounted> = [];

beforeAll(() => prepareEnvironment());

afterEach(async() => {
  for (const one of mounted) await unmount(one);
  mounted = [];
  open.forEach(model => model.dispose());
  open = [];
});

const suite = {
  name: "Insurance",
  tests: [{ name: "walk", steps: [{ set: { hasInsurance: "no" } }] }],
};

async function session(): Promise<{ model: SurveyTesterModel, container: HTMLElement }> {
  const host = new TesterHostStub(insuranceSurvey, formatSuite(suite), {
    hostOptions: { stepDelayMs: 0 },
  });
  const model = new SurveyTesterModel(host);
  open.push(model);
  const one = await mount(<SurveyTester model={model} />);
  mounted.push(one);
  await act(async() => { await model.openRecorder("walk"); });
  await waitFor(() => !model.recorder.busy && !!model.recorder.liveSurvey);
  expect(model.screen).toBe("recorder");
  return { model: model, container: one.container };
}

describe("the recorder screen", () => {
  it("draws the session, the live form and the step list the model built", async() => {
    const { model, container } = await session();
    expect(container.querySelector(".svt-recorder")).toBeTruthy();
    // The screen says which test it is about: arriving here is a transition the widget made, not the
    // act of choosing it.
    expect(textOf(container)).toContain("walk");
    expect(textOf(container)).toContain("1 step recorded");

    // The form pane holds the model the tester built, rendered by survey-react-ui - not a reading of
    // it, because the session can record.
    expect(model.recorder.rendersLiveForm).toBe(true);
    const form = container.querySelector(".svt-form") as HTMLElement;
    expect(form).toBeTruthy();
    expect(form.querySelector(".sd-root-modern")).toBeTruthy();
    expect(form.querySelector(".svt-static-form")).toBeNull();
    // The zoom is a factor on the pane and the stylesheet does the arithmetic.
    expect(form.style.getPropertyValue("--svt-zoom")).toBe("1");

    // The step list is a survey of one matrix, so what proves it is drawn is the matrix, not markup of
    // ours.
    const steps = container.querySelector(".svt-steps") as HTMLElement;
    expect(steps).toBeTruthy();
    expect(steps.querySelector(".sd-root-modern")).toBeTruthy();
    // The session bar's five verbs are Actions, drawn by the stock bar.
    ["Pause", "Verify", "Rewind to start", "Discard session"].forEach(verb => {
      expect(textOf(container)).toContain(verb);
    });
  }, 60000);

  it("hands the pane its node on mount and takes it back on unmount", async() => {
    // attachTo()/detach() is the model layer's one DOM seam - the capture behind it is private and
    // stays so - and this is the pair the recording pane owes it. What the capture then makes of what
    // lands on that node is pinned in survey-creator-core's recorder tests; it cannot be driven from
    // here, for the reason testerSetup.ts gives.
    const host = new TesterHostStub(insuranceSurvey, formatSuite(suite), {
      hostOptions: { stepDelayMs: 0 },
    });
    const model = new SurveyTesterModel(host);
    open.push(model);
    const attached: Array<HTMLElement | undefined> = [];
    const recorder: any = model.recorder;
    const attachTo = recorder.attachTo.bind(recorder);
    recorder.attachTo = (node: HTMLElement | undefined): void => {
      attached.push(node);
      attachTo(node);
    };

    const one = await mount(<SurveyTester model={model} />);
    await act(async() => { await model.openRecorder("walk"); });
    await waitFor(() => !model.recorder.busy && !!model.recorder.liveSurvey);

    const form = one.container.querySelector(".svt-form") as HTMLElement;
    expect(attached.length).toBe(1);
    expect(attached[0]).toBe(form);

    await unmount(one);
    // detach() clears it; the last thing the session was handed is nothing.
    expect(attached.length).toBe(1);
    expect(recorder.pane).toBe(undefined);
  }, 60000);

  it("makes the form inert while the session is busy, and never on the spinner", async() => {
    const { model, container } = await session();
    const recorder: any = model.recorder;
    const form = () => container.querySelector(".svt-form") as HTMLElement;
    expect(form().hasAttribute("inert")).toBe(false);

    // replayState is the spinner and is delayed by 300 ms so that a fast rewind does not flash one.
    // Nothing may freeze on it: a freeze that arrived 300 ms late would let a keystroke land on a model
    // that is about to be thrown away.
    await act(async() => { recorder.replayState = "replaying"; });
    await settle();
    expect(model.recorder.formLocked).toBe(false);
    expect(form().hasAttribute("inert")).toBe(false);

    // busy is the synchronous fact, and it is what both panes bind to.
    await act(async() => { recorder.busy = true; });
    await settle();
    expect(model.recorder.formLocked).toBe(true);
    expect(form().hasAttribute("inert")).toBe(true);
    expect(form().className).toContain("svt-form--frozen");
    const steps = container.querySelector(".svt-steps") as HTMLElement;
    expect(model.recorder.stepsLocked).toBe(true);
    expect(steps.hasAttribute("inert")).toBe(true);
    expect(steps.className).toContain("svt-steps--frozen");

    await act(async() => { recorder.busy = false; recorder.replayState = "idle"; });
    await settle();
    expect(form().hasAttribute("inert")).toBe(false);
    expect((container.querySelector(".svt-steps") as HTMLElement).hasAttribute("inert")).toBe(false);
  }, 60000);

  it("reads the form instead of rendering it when the session cannot record", async() => {
    const { model, container } = await session();
    const recorder: any = model.recorder;
    // A replay that stopped is a fact about this session: the real form is not rendered at all, so
    // there is no control on the page to take a keystroke nothing would record.
    await act(async() => { recorder.replayState = "failed"; });
    await settle();

    expect(model.recorder.rendersLiveForm).toBe(false);
    const form = container.querySelector(".svt-form") as HTMLElement;
    expect(form.querySelector(".sd-root-modern")).toBeNull();
    const statics = form.querySelector(".svt-static-form") as HTMLElement;
    expect(statics).toBeTruthy();
    expect(statics.querySelectorAll("input").length).toBe(0);
    expect(textOf(statics)).toContain("Do you have insurance?");
  }, 60000);

  it("carries the blocked banner with the two ways out of it", async() => {
    const { model, container } = await session();
    const host = (model as any).host as TesterHostStub;
    host.setTestsText("{ \"tests\": [");
    await act(async() => { model.updateFromHost(); });
    await settle();

    const note = container.querySelector(".svt-note--bad") as HTMLElement;
    expect(note).toBeTruthy();
    expect(textOf(note)).toContain("does not hold valid JSON");
    const buttons = Array.from(note.querySelectorAll("button"));
    expect(buttons.map(button => button.textContent)).toEqual(["Fix it in the JSON", "Back to tests"]);
    await act(async() => { (buttons[0] as HTMLElement).click(); });
    await settle();
    expect(model.screen).toBe("json");
  }, 60000);
});
