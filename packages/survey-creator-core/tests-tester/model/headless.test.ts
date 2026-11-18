// The acceptance of prompt 03 section 9, written as the test it asks to be: the widget working
// headlessly, which is the whole point of the model layer.
//
// One session, no DOM and no framework: load a suite, select two of its tests, run them, read the
// verdicts off the rows, open the json screen revealed at the one that failed, repair the document
// through the screen, and watch the runner's rows reconcile and then agree.
import { afterEach, describe, expect, it } from "vitest";
import { SurveyTesterModel } from "../../src/tester/model/testerModel";
import { sample as conditional } from "../samples/01-conditional-visibility";
import { formatSuite, TesterHostStub } from "./testerHostStub";

// A suite over the sample's own survey: one test that holds, one that holds, and one whose expected
// value is wrong on purpose.
const suite = {
  name: "headless",
  options: { clearInvisibleValues: "onComplete" },
  tests: [
    {
      name: "declines",
      steps: [
        { set: { hasInsurance: "no" } },
        { expect: { insuranceProvider: { visible: false } } },
      ],
    },
    {
      name: "accepts",
      steps: [
        { set: { hasInsurance: "yes" } },
        { expect: { insuranceProvider: { visible: true } } },
      ],
    },
    {
      name: "typed the wrong expectation",
      steps: [
        { set: { hasInsurance: "no" } },
        { expect: { insuranceProvider: { visible: true } } },
      ],
    },
  ],
};

let open: Array<SurveyTesterModel> = [];
afterEach(() => {
  open.forEach(model => model.dispose());
  open = [];
});

// The run's own promise is inside the runner; phase reaching "done" is the widget's observable proxy
// for it, and it is the same signal the recorder transition waits on.
function whenDone(model: SurveyTesterModel): Promise<void> {
  return new Promise<void>(resolve => {
    const tick = (): void => {
      if (model.runner.phase === "done") resolve();
      else setTimeout(tick, 5);
    };
    tick();
  });
}

function verdicts(model: SurveyTesterModel): { [name: string]: string } {
  const res: { [name: string]: string } = {};
  model.runner.rowModelList.forEach(row => { res[row.name] = row.status || "not run"; });
  return res;
}

describe("a scripted session, with no DOM in the room", () => {
  it("runs a selection, reads the verdicts, repairs the document and reconciles", async() => {
    const host = new TesterHostStub(conditional.surveyJson, formatSuite(suite));
    const model = new SurveyTesterModel(host);
    open.push(model);

    // Loaded.
    expect(model.canRun).toBe(true);
    expect(model.runner.rowModelList.map(row => row.name))
      .toEqual(["declines", "accepts", "typed the wrong expectation"]);

    // Two of the three selected, and the run button says what it means.
    model.setSelectedNames(["declines", "typed the wrong expectation"]);
    expect((model.runner.toolbar.getActionById("run") as any).title).toBe("Run 2 tests");

    // Run, headless: no model is rendered and nothing is waited for.
    model.startRun(model.runner.selectedNames);
    await whenDone(model);
    const first = verdicts(model);
    expect(first["declines"]).toBe("passed");
    expect(first["typed the wrong expectation"]).toBe("failed");
    // The test that was not selected is not in the run and has no verdict at all.
    expect(first["accepts"]).toBe("not run");

    // The failing row says why, off the row itself, without reaching for the runner.
    const failing = model.runner.rowModelList[2];
    expect(failing.isFailure).toBe(true);
    expect(failing.checkViews.length).toBe(1);
    expect(failing.checkViews[0].summary).toBe("expected true, got false");

    // The json screen, opened at that test and revealed at its node.
    model.openJson("typed the wrong expectation");
    expect(model.screen).toBe("json");
    expect(model.json.revealNonce).toBe(1);
    expect(model.json.text.substring(model.json.revealOffset)
      .indexOf("\"typed the wrong expectation\"")).toBeGreaterThan(0);

    // Repaired through the screen, which is the only way the widget ever edits: text out to the host,
    // and back in through the one reconciliation entry point.
    // The wrong expectation is the last "visible": true in the document - the second one belongs to
    // the test that is correct.
    expect(model.json.text.split("\"visible\": true").length - 1).toBe(2);
    model.json.setText(replaceLast(model.json.text, "\"visible\": true", "\"visible\": false"));
    expect(host.writes.length).toBe(1);

    // The rows reconciled rather than being rebuilt - the row that failed is the same object, and it
    // still says "failed", because a finished run is not rewritten by an edit of the document.
    expect(model.runner.rowModelList[2]).toBe(failing);
    expect(failing.status).toBe("failed");

    // And the same selection, run again, agrees with the repaired document.
    model.goToRunner();
    model.startRun(model.runner.selectedNames);
    await whenDone(model);
    const second = verdicts(model);
    expect(second["declines"]).toBe("passed");
    expect(second["typed the wrong expectation"]).toBe("passed");
    expect(model.runner.checkTotals.failed).toBe(0);
  }, 60000);
});

// The same session, carried on into the recorder: prompt 04 section 7. A test is created, three steps
// and two checks are recorded into it through model calls, the cursor is rewound and a step is inserted
// in the middle, and the verdict that comes back is the honest one.
//
// Nothing here touches the DOM. The recorder's one DOM seam is attachTo(), which a view calls with the
// element the form pane rendered into; a session that was never attached still records every step the
// model reports, and these are exactly those.
describe("a scripted recording session, with no DOM in the room", () => {
  it("creates a test, records into it, rewinds, inserts and reads the verdict", async() => {
    const host = new TesterHostStub(conditional.surveyJson,
      formatSuite({ name: "recorded", options: { clearInvisibleValues: "onComplete" }, tests: [] }));
    const model = new SurveyTesterModel(host);
    open.push(model);

    // Creating a test is the act of starting to record it: one call, and the widget is on the recorder.
    expect(model.createTest({ name: "accepting insurance" })).toBe(undefined);
    await whenRecorder(model);
    expect(model.screen).toBe("recorder");
    expect(model.recorder.testName).toBe("accepting insurance");
    expect(model.recorder.cursor).toBe(0);
    expect(model.recorder.liveSurvey, "the session opened without a model").toBeTruthy();

    // Three steps and two checks. The steps are what the capture would hand over; the checks go
    // through the confirming run, which is where every expected value comes from.
    const recorder = model.recorder;
    recorder.recordStep({ command: "set", target: "hasInsurance", payload: "yes", description: "" });
    await recorder.addChecks("insuranceProvider", [
      { name: "visible", payloadType: "boolean" }, { name: "empty", payloadType: "boolean" },
    ]);
    recorder.recordStep({
      command: "set", target: "insuranceProvider", payload: "Allianz", description: "",
    });
    recorder.recordStep({ command: "complete", target: "survey", payload: true, description: "" });
    await recorder.verify();
    expect(steps(host).length).toBe(4);
    expect(recorder.verifyOutcome?.status).toBe("passed");

    // Rewind to step 1 and insert there. The tail is not touched, and the case now says something the
    // tail contradicts - which is exactly what the verdict has to say out loud.
    await recorder.setCursor(1);
    expect(recorder.cursor).toBe(1);
    expect((recorder.liveSurvey as any).getValue("hasInsurance")).toBe("yes");
    recorder.recordStep({ command: "set", target: "hasInsurance", payload: "no", description: "" });
    await recorder.verify();
    expect(steps(host).length).toBe(5);
    expect(steps(host)[1]).toEqual({ name: "set-hasInsurance", set: { hasInsurance: "no" } });
    // Honest, and honest about all of it: the provider question is invisible now, so the check that
    // followed no longer holds and the step that fills the question in cannot run at all - which is an
    // errored test and not merely a failed one.
    expect(recorder.verifyOutcome?.status).toBe("error");
    expect(recorder.verifyOutcome?.failed).toBeGreaterThan(0);
    expect(recorder.verifyOutcome?.firstFailure?.stepIndex).toBe(2);
    expect(recorder.stepStates.slice()).toEqual(["ok", "ok", "failed", "errored", "unrun"]);

    // And the way back: the step that was inserted goes, and the case is green again.
    await recorder.deleteStep(1);
    await recorder.verify();
    expect(recorder.verifyOutcome?.status).toBe("passed");
    expect(recorder.verifyOutcome?.failed).toBe(0);
  }, 60000);
});

// The acceptance walk of PROMPT-recorder.md section 12, in model terms: sample 1's first test recorded
// from an empty case through the adorner list and the check menus, and the JSON that comes out is the
// sample's own. Nothing here reads a value off the model and writes it as an expectation - every one of
// them is the confirming run's `actual`, which is the whole of rule 2.
describe("the acceptance walk of the recorder, through the models that draw it", () => {
  it("records sample 1's first test and produces the sample's own JSON", async() => {
    const host = new TesterHostStub(conditional.surveyJson,
      formatSuite({ name: "Insurance", options: { clearInvisibleValues: "onComplete" }, tests: [] }));
    const model = new SurveyTesterModel(host);
    open.push(model);

    expect(model.createTest({ name: "Declining insurance skips the provider question" })).toBe(undefined);
    await whenRecorder(model);
    const recorder = model.recorder;
    const survey: any = recorder.liveSurvey;

    // The elements the form drew. The registry is fed by the model's own render events, so this is
    // exactly what a renderer produces - and it is the only reason an adorner exists at all.
    render(model, survey.getQuestionByName("hasInsurance"));
    render(model, survey.getQuestionByName("insuranceProvider"));
    expect(recorder.adorners.adorners.map(one => one.target))
      .toEqual(["survey", "hasInsurance", "insuranceProvider"]);

    // 1. answer hasInsurance: "no". The model takes the answer, and the step is the one the capture
    //    would have reported for it.
    survey.setValue("hasInsurance", "no");
    recorder.recordStep({ command: "set", target: "hasInsurance", payload: "no", description: "" });

    // 2. two checks on the provider question, through its own adorner's menu. It is invisible now, so
    //    the value the row shows and the value the case gets are both the tester's.
    const provider = menuOf(model, "insuranceProvider");
    await tick(model, provider, "visible");
    await tick(model, provider, "required");

    // 3. press Complete.
    survey.tryComplete();
    expect(survey.state).toBe("completed");
    recorder.recordStep({ command: "complete", target: "survey", payload: true, description: "" });

    // 4. the survey's own adorner: state, then the two pickers. Recording the whole data blob is what
    //    the pickers exist to refuse (README section 1.5), so each of them writes the keys it ticked.
    const whole = menuOf(model, "survey");
    await tick(model, whole, "state");
    await pick(model, whole, "values");
    await pick(model, whole, "noValues");

    await recorder.verify();
    expect(recorder.verifyOutcome?.status, "the recorded case does not pass").toBe("passed");
    expect(recorder.verifyOutcome?.failed).toBe(0);

    // And what it wrote is the sample's own first test. The names are the recorder's - every step is
    // named after what it does, and the tester reads none of them - so they come off before the two
    // are compared.
    const recorded = JSON.parse(host.text).tests[0].steps.map((step: any) => {
      const copy = { ...step };
      delete copy.name;
      return copy;
    });
    expect(recorded).toEqual(conditional.tests.tests[0].steps);
  }, 60000);
});

// What survey-react-ui does after it has drawn a question, which is how the registry behind the adorner
// list is fed.
function render(model: SurveyTesterModel, question: any): void {
  const element = document.createElement("div");
  document.body.appendChild(element);
  (model.recorder.liveSurvey as any).onAfterRenderQuestion
    .fire(model.recorder.liveSurvey, { question: question, htmlElement: element });
}

function menuOf(model: SurveyTesterModel, target: string): any {
  const adorner: any = model.recorder.adorners.find(target);
  expect(adorner, "no adorner for \"" + target + "\"").toBeTruthy();
  model.recorder.adorners.toggle(target);
  return adorner.menu;
}

// A press on a row of the menu, and the quiet run behind it settling.
async function tick(model: SurveyTesterModel, menu: any, check: string): Promise<void> {
  menu.update(model.recorder.tickedFor(menu.target), false);
  const row = menu.rowModels.filter((one: any) => one.name === check)[0];
  expect(row, "the menu of \"" + menu.target + "\" offers no \"" + check + "\"").toBeTruthy();
  menu.toggle(row);
  await model.recorder.verify();
}

// A check that is not complete until its keys are chosen: the first press opens the picker, and what it
// starts with is what the check can assert right now.
async function pick(model: SurveyTesterModel, menu: any, check: string): Promise<void> {
  menu.update(model.recorder.tickedFor(menu.target), false);
  const row = menu.rowModels.filter((one: any) => one.name === check)[0];
  expect(row, "the survey menu offers no \"" + check + "\"").toBeTruthy();
  menu.toggle(row);
  expect(menu.pending, "\"" + check + "\" opened no picker").toBe(row);
  menu.addPending();
  await model.recorder.verify();
}

function whenRecorder(model: SurveyTesterModel): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const until = Date.now() + 20000;
    const tick = (): void => {
      if (model.screen === "recorder" && model.recorder.isOpen) resolve();
      else if (Date.now() > until) reject(new Error("recorder"));
      else setTimeout(tick, 5);
    };
    tick();
  });
}

function steps(host: TesterHostStub): Array<any> {
  return JSON.parse(host.text).tests[0].steps;
}

function replaceLast(text: string, find: string, next: string): string {
  const at = text.lastIndexOf(find);
  return at < 0 ? text : text.substring(0, at) + next + text.substring(at + find.length);
}
