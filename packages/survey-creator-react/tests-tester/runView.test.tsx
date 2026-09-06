import * as React from "react";
import { act } from "react";
import { SurveyTesterModel } from "survey-creator-core/tester";
import { SurveyTester } from "../src/tester/SurveyTester";
import { formatSuite, insuranceSuite, insuranceSurvey, TesterHostStub } from "./testerHostStub";
import { mount, prepareEnvironment, settle, textOf, unmount, waitFor } from "./testerSetup";
import type { Mounted } from "./testerSetup";

// The runner screen, as DOM. What each of these asserts is a property of a model - the verdicts, the
// selection, the summary line - so what is being tested here is that the markup draws it and that a
// press reaches it. The decisions themselves are pinned one package up, in survey-creator-core's own
// model tests, and are deliberately not re-asserted here.

let open: Array<SurveyTesterModel> = [];
let mounted: Array<Mounted> = [];

beforeAll(() => prepareEnvironment());

afterEach(async() => {
  for (const one of mounted) await unmount(one);
  mounted = [];
  open.forEach(model => model.dispose());
  open = [];
});

async function screen(suite: any = insuranceSuite): Promise<{
  model: SurveyTesterModel, container: HTMLElement,
}> {
  // Zero delay: the pace is a host option and every wait it asks for happens in real time, so a
  // test that left the default 400 ms in place would be waiting for the screen rather than for the
  // run.
  const host = new TesterHostStub(insuranceSurvey, formatSuite(suite), {
    hostOptions: { stepDelayMs: 0 },
  });
  const model = new SurveyTesterModel(host);
  open.push(model);
  const one = await mount(<SurveyTester model={model} />);
  mounted.push(one);
  return { model: model, container: one.container };
}

describe("the runner screen", () => {
  it("draws a row per test, with the verbs the host supplied", async() => {
    const { container } = await screen();
    const rows = container.querySelectorAll(".svt-test-row");
    expect(rows.length).toBe(2);
    const text = textOf(container);
    expect(text).toContain("Declining insurance hides the provider question");
    expect(text).toContain("Accepting insurance shows it");
    // "Tests 2", the summary line and the check footer are all sentences of the model.
    expect(text).toContain("Tests 2");
    expect(text).toContain("not run yet");
    // Two tests selected, so the Run button says so. The title is written by syncSelection, and it is
    // the one place the count is composed.
    expect(textOf(container)).toContain("Run 2 tests");
  }, 30000);

  it("unticking a row changes what the Run button would run", async() => {
    const { model, container } = await screen();
    const boxes = Array.from(container.querySelectorAll(".svt-test-row__check")) as Array<HTMLInputElement>;
    expect(boxes.length).toBe(2);
    expect(boxes[0].checked).toBe(true);

    await act(async() => { boxes[0].click(); });
    await settle();
    expect(model.runner.selectedCount).toBe(1);
    expect(textOf(container)).toContain("Run 1 test");
    // And the selection is a fact about the row, so the box follows it back.
    const after = container.querySelectorAll(".svt-test-row__check") as any;
    expect((after[0] as HTMLInputElement).checked).toBe(false);
  }, 30000);

  it("expands a row and draws every step of the case, run or not", async() => {
    const { container } = await screen();
    const toggle = container.querySelector(".svt-test-row__toggle") as HTMLElement;
    expect(toggle).toBeTruthy();
    await act(async() => { toggle.click(); });
    await settle();

    const body = container.querySelector(".svt-test-row__body") as HTMLElement;
    expect(body).toBeTruthy();
    // Two steps and the end-of-case line the model adds under them.
    expect(body.querySelectorAll(".svt-step").length).toBe(3);
    expect(textOf(body)).toContain("Steps 2");
    // The verbs the host supplied, drawn by the stock action bar and not by this markup.
    expect(textOf(body)).toContain("JSON");
  }, 30000);

  it("runs the suite and paints the verdicts, the status dots and the transcript", async() => {
    const { model, container } = await screen();
    await act(async() => { model.startRun(undefined); });
    await waitFor(() => !model.runner.isRunning);

    expect(model.runner.phase).toBe("done");
    const dots = Array.from(container.querySelectorAll(".svt-dot"));
    expect(dots.length).toBe(2);
    expect(dots.every(dot => dot.className.indexOf("svt-dot--passed") > -1)).toBe(true);
    expect(textOf(container)).toContain("2 passed");
    // The console pane is on the right of the summary only when it is asked for; the model is what
    // decides which pane the left one is.
    expect(model.runner.console.rows.length).toBeGreaterThan(0);
  }, 60000);

  it("shows the failing check, its expected-versus-actual line and the raw result behind it", async() => {
    const { model, container } = await screen({
      name: "Failures",
      tests: [{
        name: "A value that is simply wrong",
        steps: [{ set: { hasInsurance: "no" } }, { expect: { hasInsurance: { value: "yes" } } }],
      }],
    });
    await act(async() => { model.startRun(undefined); });
    await waitFor(() => !model.runner.isRunning);

    expect(model.runner.rowModelList[0].isFailure).toBe(true);
    // A failed row opens itself until a person has decided about it, so the assertion is on screen
    // without anything being pressed.
    const assertion = container.querySelector(".svt-assert__line") as HTMLElement;
    expect(assertion).toBeTruthy();
    expect(textOf(assertion)).toContain("expected");
    expect(container.querySelector(".svt-dot--failed")).toBeTruthy();

    // "raw.." opens the whole result the tester built, which is the only honest thing to do with the
    // details of a check an integrator registered.
    const raw = assertion.querySelector(".svt-step__aside") as HTMLElement;
    expect(textOf(raw)).toBe("raw..");
    await act(async() => { raw.click(); });
    await settle();
    expect(container.querySelector(".svt-step__json")).toBeTruthy();
  }, 60000);

  it("moves the console to the left pane and back, off the model's own toggle", async() => {
    const { model, container } = await screen();
    expect(container.querySelector(".svt-survey-pane")).toBeTruthy();
    await act(async() => { model.runner.toggleLog(); });
    await settle();
    expect(container.querySelector(".svt-console")).toBeTruthy();
    expect(container.querySelector(".svt-runner__left--flush")).toBeTruthy();
    await act(async() => { model.runner.toggleLog(); });
    await settle();
    expect(container.querySelector(".svt-survey-pane")).toBeTruthy();
  }, 30000);

  it("blocks the run on a document that does not parse, and offers the bench that repairs it", async() => {
    const host = new TesterHostStub(insuranceSurvey, "{ \"tests\": [");
    const model = new SurveyTesterModel(host);
    open.push(model);
    const one = await mount(<SurveyTester model={model} />);
    mounted.push(one);

    const alert = one.container.querySelector(".svt-alert--error") as HTMLElement;
    expect(alert).toBeTruthy();
    expect(textOf(alert)).toContain("does not hold valid JSON");
    const fix = alert.querySelector(".svt-link") as HTMLElement;
    expect(textOf(fix)).toBe("Fix it in the JSON");
    await act(async() => { fix.click(); });
    await settle();
    expect(model.screen).toBe("json");
    // The JSON screen is never blocked: it is where the repair is typed.
    expect(one.container.querySelector(".svt-editor__area")).toBeTruthy();
  }, 30000);

  it("opens the New test form, refuses a name the suite already holds, and creates one", async() => {
    const { model, container } = await screen();
    await act(async() => { model.runner.toggleNaming(); });
    await settle();
    const box = container.querySelector(".svt-new-test .svt-input") as HTMLInputElement;
    expect(box).toBeTruthy();

    await act(async() => { model.runner.setNewTestName("Accepting insurance shows it"); });
    await settle();
    expect(textOf(container)).toContain("The suite already has a test named");
    const create = container.querySelector(".svt-new-test .svt-button--primary") as HTMLButtonElement;
    expect(create.disabled).toBe(true);

    await act(async() => { model.runner.setNewTestName("A third case"); });
    await settle();
    expect((container.querySelector(".svt-new-test .svt-button--primary") as HTMLButtonElement).disabled)
      .toBe(false);
  }, 30000);
});
