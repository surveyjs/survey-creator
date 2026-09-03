// The recording session, driven the way the widget drives it and with no markup anywhere: the model is
// opened on a test, the model the tester built is "rendered" by firing the survey's own render events,
// a trusted pointer lands on a question, and what comes out has to be in the suite document.
//
// Everything between - the prefix replay, the element registry, the two-signal attribution, the
// confirming run behind a check, the jsonc write-back - is the code under test. Only the pointer and
// the render events are simulated, and both are simulated the way survey-react-ui would produce them.
import { afterEach, describe, expect, it } from "vitest";
import { SurveyTestCheckFactory, SurveyTestValidator } from "survey-core/tester";
import type { ISurveyTestOptions } from "survey-core/tester";
import { defaultHostOptions, defaultTestOptions } from "../../src/tester/core/hostOptions";
import { parseJson } from "../../src/tester/core/json";
import type { HostOptions } from "../../src/tester/core/hostOptions";
import { TesterRecorderModel } from "../../src/tester/model/recorderModel";
import type { ITesterCheckRequest, ITesterRecorderHost } from "../../src/tester/model/recorderModel";
import { sample as conditional } from "../samples/01-conditional-visibility";
import { sample as triggers } from "../samples/07-triggers-and-calculated-values";

class RecorderHostStub implements ITesterRecorderHost {
  public surveyJson: any;
  public text: string;
  // Every write, in order. The "document is the state" promise is asserted against this.
  public writes: Array<string> = [];

  constructor(surveyJson: any, text: string) {
    this.surveyJson = surveyJson;
    this.text = text;
  }

  public getSurveyJson(): any { return this.surveyJson; }
  public getTestsText(): string { return this.text; }
  public setTestsText(text: string): void {
    this.text = text;
    this.writes.push(text);
  }
  public getTestOptions(): ISurveyTestOptions { return defaultTestOptions; }
  public getHostOptions(): HostOptions { return defaultHostOptions; }
}

// An event a script dispatches is untrusted by definition - dispatchEvent() sets the flag to false -
// and an untrusted event is exactly what the recorder refuses to open a gesture on, so a test that
// dispatched one plainly would prove nothing. The flag is flipped from a listener on the window, in the
// capture phase, which runs before the recorder's own listener on the pane. Same trick, same reason and
// the same words as tests-tester/recorder/capture.test.ts.
const TRUSTED = new WeakSet<Event>();
let trustInstalled = false;

function installTrust(): void {
  if (trustInstalled) return;
  trustInstalled = true;
  ["pointerdown", "keydown", "input", "change", "click"].forEach(type => {
    window.addEventListener(type, event => {
      if (!TRUSTED.has(event)) return;
      const impl = Object.getOwnPropertySymbols(event)[0];
      if (!!impl) (event as any)[impl].isTrusted = true;
    }, true);
  });
}

function fire(node: Element, type: string): void {
  installTrust();
  const event = new Event(type, { bubbles: true });
  TRUSTED.add(event);
  node.dispatchEvent(event);
}

interface Pane {
  container: HTMLElement;
  // The survey's own chrome: a node inside the pane that belongs to no question, which is where the
  // navigation buttons live and the only place a press is read as one.
  chrome: HTMLElement;
  nodes: { [name: string]: HTMLElement };
  cell(matrix: any, rowIndex: number, columnName: string): HTMLElement;
  dispose(): void;
}

function createPane(): Pane {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const chrome = document.createElement("div");
  container.appendChild(chrome);
  const pane: Pane = {
    container: container,
    chrome: chrome,
    nodes: {},
    cell: () => chrome,
    dispose: () => container.remove(),
  };
  return pane;
}

// What survey-react-ui does after it has drawn the form: it tells the model where every element landed.
// The recorder's element registry is fed by those events and by nothing else, so firing them is the
// whole of "the survey was rendered" as far as this model is concerned.
function render(recorder: TesterRecorderModel, pane: Pane): void {
  const survey: any = recorder.liveSurvey;
  expect(survey, "the session opened without a model").toBeTruthy();
  pane.nodes = {};
  survey.getAllQuestions().forEach((question: any) => {
    const node = document.createElement("div");
    node.setAttribute("data-name", question.name);
    pane.container.appendChild(node);
    pane.nodes[question.name] = node;
    survey.onAfterRenderQuestion.fire(survey, { question: question, htmlElement: node });
  });
  pane.cell = (matrix: any, rowIndex: number, columnName: string): HTMLElement => {
    const row = matrix.visibleRows[rowIndex];
    const cellQuestion = row.cells.filter((cell: any) => cell.question.name === columnName)[0].question;
    const node = document.createElement("div");
    pane.container.appendChild(node);
    survey.onAfterRenderMatrixCell.fire(survey, {
      question: matrix, row: row, cellQuestion: cellQuestion, htmlElement: node,
    });
    return node;
  };
}

// One answer, as a person gives it: the pointer lands on the question, the model moves, the input
// event closes the window. The flush is the deliberate end of the settle window, so the test does not
// have to wait 150 ms for one.
function answer(recorder: TesterRecorderModel, pane: Pane, name: string, value: any): void {
  const survey: any = recorder.liveSurvey;
  fire(pane.nodes[name], "pointerdown");
  // Through the question, which is where an input writes: the survey's own auto-advance is one of the
  // things that only happens on that path.
  survey.getQuestionByName(name).value = value;
  fire(pane.nodes[name], "input");
  recorder.flush();
}

// A press of the survey's own chrome: the Next, Complete and Start buttons all live there, and it is
// what tells a press from a movement the survey made by itself.
function press(recorder: TesterRecorderModel, pane: Pane, call: (survey: any) => void): void {
  fire(pane.chrome, "pointerdown");
  call(recorder.liveSurvey as any);
}

// Everything the session has queued: the replays, the confirming runs, and the quiet run behind every
// write. verify() joins the same chain, so awaiting it drains what is in front of it.
function drain(recorder: TesterRecorderModel): Promise<void> {
  return recorder.verify();
}

function payloadTypeOf(name: string): any {
  return SurveyTestCheckFactory.Instance.get(name).payloadType;
}

function check(name: string, keys?: Array<string>): ITesterCheckRequest {
  return { name: name, payloadType: payloadTypeOf(name), keys: keys };
}

function suiteText(suite: any): string {
  return JSON.stringify(suite, null, 2) + "\n";
}

// Read the way the widget reads it, so a commented document is read here too.
function stepsOf(host: RecorderHostStub, at = 0): Array<any> {
  return parseJson(host.text).value.tests[at].steps;
}

// The recorded case, with the generated step names taken off: what is compared against a hand-written
// sample is the case, and the name is metadata the tester never reads.
function unnamed(steps: Array<any>): Array<any> {
  return steps.map(step => {
    const res = { ...step };
    delete res.name;
    return res;
  });
}

let open: Array<TesterRecorderModel> = [];
let panes: Array<Pane> = [];
function track(recorder: TesterRecorderModel): TesterRecorderModel {
  open.push(recorder);
  return recorder;
}
afterEach(() => {
  open.forEach(recorder => recorder.dispose());
  open = [];
  panes.forEach(pane => pane.dispose());
  panes = [];
});

async function start(surveyJson: any, suite: any): Promise<{
  recorder: TesterRecorderModel, host: RecorderHostStub, pane: Pane,
}> {
  const host = new RecorderHostStub(surveyJson, suiteText(suite));
  const recorder = track(new TesterRecorderModel(host));
  const pane = createPane();
  panes.push(pane);
  await recorder.open(suite.tests[0].name);
  recorder.attachTo(pane.container);
  render(recorder, pane);
  return { recorder: recorder, host: host, pane: pane };
}

describe("the session", () => {
  it("opens on an empty test, on a model the tester built", async() => {
    const { recorder, host } = await start(conditional.surveyJson,
      { name: "recording", tests: [{ name: "recorded", steps: [] }] });
    // Rule 1: an empty "steps" array is a valid test and the tester runs it. Nothing was written to get
    // here, because opening a session is not an edit.
    expect(recorder.isOpen).toBe(true);
    expect(recorder.cursor).toBe(0);
    expect(recorder.liveSurvey).toBeTruthy();
    expect(recorder.replayState).toBe("idle");
    expect(recorder.blockedReason).toBe("");
    expect(host.writes).toEqual([]);
    await drain(recorder);
    expect(recorder.verifyOutcome?.status).toBe("passed");
  });

  it("opens at the end of a case, and rewinds to a position by replaying the prefix", async() => {
    const { recorder } = await start(conditional.surveyJson, {
      name: "recording",
      tests: [{
        name: "recorded",
        steps: [{ set: { hasInsurance: "yes" } }, { set: { insuranceProvider: "Allianz" } }],
      }],
    });
    expect(recorder.cursor).toBe(2);
    expect((recorder.liveSurvey as any).getValue("insuranceProvider")).toBe("Allianz");

    await recorder.setCursor(1);
    expect(recorder.cursor).toBe(1);
    // The model is the one the prefix produced, and the case is untouched by a rewind.
    expect((recorder.liveSurvey as any).getValue("hasInsurance")).toBe("yes");
    expect((recorder.liveSurvey as any).getValue("insuranceProvider")).toBeUndefined();
  });

  it("says so, and records nothing, when a case error stops the prefix", async() => {
    const { recorder, host } = await start(conditional.surveyJson, {
      name: "recording",
      tests: [{ name: "recorded", steps: [{ set: { nosuchquestion: 1 } }] }],
    });
    // Rule 6: a case error is the one thing that does stop a replay - the model is not in the state the
    // case describes, and recording onto it would produce nonsense.
    expect(recorder.replayState).toBe("failed");
    expect(recorder.notice.indexOf("The replay stopped: unknownTarget")).toBe(0);
    expect(recorder.failedStepIndex).toBe(0);
    expect(host.writes).toEqual([]);

    // And the offer that follows it is a truncation, which is an explicit act and never an implicit one.
    await recorder.truncateFrom(0);
    expect(stepsOf(host)).toEqual([]);
    expect(recorder.replayState).toBe("idle");
    expect(recorder.liveSurvey).toBeTruthy();
  });

  it("marks the rows of a prefix that no longer holds, and carries on anyway", async() => {
    const { recorder } = await start(conditional.surveyJson, {
      name: "recording",
      tests: [{
        name: "recorded",
        steps: [{ set: { hasInsurance: "no" } }, { expect: { insuranceProvider: { visible: true } } }],
      }],
    });
    // Replaying is not verifying: the prefix was applied to the end and the model is what it produced.
    expect(recorder.replayState).toBe("idle");
    expect(recorder.liveSurvey).toBeTruthy();
    expect(recorder.stepStates.slice()).toEqual(["ok", "failed"]);
    expect(recorder.notice.indexOf("1 step of the prefix no longer holds")).toBe(0);
  });
});

describe("what a person did, through the model", () => {
  // The acceptance walk of PROMPT-recorder.md section 12, without a line of markup: sample 1's first
  // test, recorded from an empty case, has to come out as the case the sample holds by hand.
  it("records sample 1's first test end to end, and it is the sample's own case", async() => {
    const { recorder, host, pane } = await start(conditional.surveyJson, {
      name: conditional.tests.name,
      options: conditional.tests.options,
      variables: conditional.tests.variables,
      starts: conditional.tests.starts,
      tests: [{ name: "recorded", steps: [] }],
    });

    answer(recorder, pane, "hasInsurance", "no");
    await drain(recorder);
    expect(stepsOf(host)).toEqual([{ name: "set-hasInsurance", set: { hasInsurance: "no" } }]);
    expect(recorder.cursor).toBe(1);

    // Rule 2: what is written is the confirming run's own reading, never a value read off the model.
    await recorder.addChecks("insuranceProvider", [check("visible"), check("required")]);
    press(recorder, pane, survey => survey.tryComplete());
    await drain(recorder);
    await recorder.addChecks("survey", [
      check("state"), check("values", ["hasInsurance"]), check("noValues", ["insuranceProvider"]),
    ]);
    await drain(recorder);

    expect(unnamed(stepsOf(host))).toEqual((conditional.tests.tests[0] as any).steps);
    // Every step carries its "{command}-{target}" name: metadata the tester never reads, and the only
    // thing that keeps a grid of thirty steps legible.
    expect(stepsOf(host).map(step => step.name)).toEqual([
      "set-hasInsurance", "expect-insuranceProvider", "complete-survey", "expect-survey",
    ]);

    // And the case runs green from a clean start, which is the only definition of "recorded" there is.
    expect(recorder.verifyOutcome?.status).toBe("passed");
    expect(recorder.verifyOutcome?.failed).toBe(0);
    expect(recorder.stale).toBe(false);
    // A recorded case is a case anyone could have typed: the validator has nothing to say about it.
    expect(new SurveyTestValidator().validate(JSON.parse(host.text))).toEqual([]);
  }, 30000);

  // Closing the session is not the act that loses a half-typed answer: close() flushes the capture
  // before it detaches, which is what the widget root's "Go to Runner" and its run-start transition
  // both rest on.
  it("records what was half-typed when the session closes", async() => {
    const { recorder, host, pane } = await start(
      { elements: [{ type: "text", name: "who" }] },
      { name: "recording", tests: [{ name: "recorded", steps: [] }] });
    const survey: any = recorder.liveSurvey;
    fire(pane.nodes["who"], "pointerdown");
    survey.getQuestionByName("who").value = "Ann";
    fire(pane.nodes["who"], "input");
    // Deliberately not flushed: the settle window is still open when the session is left.
    recorder.close();
    expect(recorder.isOpen).toBe(false);
    expect(stepsOf(host)).toEqual([{ name: "set-who", set: { who: "Ann" } }]);
  });

  it("collapses the keystrokes of one answer into one step", async() => {
    const { recorder, host, pane } = await start(
      { elements: [{ type: "text", name: "who" }] },
      { name: "recording", tests: [{ name: "recorded", steps: [] }] });
    const survey: any = recorder.liveSurvey;
    fire(pane.nodes["who"], "pointerdown");
    ["A", "An", "Ann"].forEach(text => {
      fire(pane.nodes["who"], "input");
      survey.setValue("who", text);
    });
    recorder.flush();
    await drain(recorder);
    expect(stepsOf(host)).toEqual([{ name: "set-who", set: { who: "Ann" } }]);
  });

  it("coalesces the presses of Add row, and records a removal by its index", async() => {
    const { recorder, host, pane } = await start({
      elements: [{
        type: "matrixdynamic", name: "items", rowCount: 1,
        columns: [{ name: "quantity", cellType: "text" }],
      }],
    }, { name: "recording", tests: [{ name: "recorded", steps: [] }] });
    const items: any = (recorder.liveSurvey as any).getQuestionByName("items");

    for (let i = 0; i < 3; i++) {
      fire(pane.nodes["items"], "pointerdown");
      items.addRow();
    }
    recorder.flush();
    await drain(recorder);
    expect(stepsOf(host)).toEqual([{ name: "addRow-items", addRow: { items: 3 } }]);

    // A cell is addressed through the row the renderer handed over with it.
    const cell = pane.cell(items, 0, "quantity");
    fire(cell, "pointerdown");
    items.visibleRows[0].cells[0].question.value = "2";
    recorder.flush();
    await drain(recorder);
    expect(stepsOf(host)[1]).toEqual({ name: "set-items[0].quantity", set: { "items[0].quantity": "2" } });

    fire(pane.nodes["items"], "pointerdown");
    items.removeRow(1);
    recorder.flush();
    await drain(recorder);
    // The index the model reported, which is what the case addresses a row by. The removal also moves
    // the matrix's own value, and the capture cannot tell that change from an answer - so a "set" of
    // the array is written in front of it. It is the prototype's behaviour, it replays to the same
    // state, and it is entry 17 of promts/creator-tester-notes.md.
    const steps = stepsOf(host);
    expect(steps[steps.length - 1]).toEqual({ name: "removeRow-items", removeRow: { items: 1 } });
    expect(recorder.verifyOutcome?.status).toBe("passed");
  }, 30000);
});

describe("what the survey did by itself", () => {
  // Sample 7. Answering the source question records one step; the value the trigger writes and the
  // calculated value that follows are consequences, and a replay produces both on its own.
  it("records the answer and not the trigger or the calculated value", async() => {
    const { recorder, host, pane } = await start(triggers.surveyJson,
      { name: "recording", tests: [{ name: "recorded", steps: [] }] });

    answer(recorder, pane, "plan", "pro");
    answer(recorder, pane, "seats", 6);
    await drain(recorder);

    expect(stepsOf(host)).toEqual([
      { name: "set-plan", set: { plan: "pro" } },
      { name: "set-seats", set: { seats: 6 } },
    ]);
    expect((recorder.liveSurvey as any).getValue("supportLevel")).toBe("priority");
    const written = JSON.stringify(stepsOf(host));
    expect(written.indexOf("supportLevel")).toBe(-1);
    expect(written.indexOf("total")).toBe(-1);

    // Rule 4, and the half of it a person can see: nothing disappears silently, it is shown with the
    // reason it was not recorded.
    const reasons = recorder.ignoredChanges.map(entry => entry.reason);
    expect(reasons).toContain("trigger");
    expect(reasons).toContain("expression");
    const trigger = recorder.ignoredChanges.filter(entry => entry.reason === "trigger")[0];
    expect(trigger.target).toBe("supportLevel");
    expect(trigger.note).toBe("set to \"priority\" by a trigger");
    expect(trigger.reasonText).toBe("trigger");
  }, 30000);

  it("records the answer and no nextPage when the survey advances by itself", async() => {
    const { recorder, host, pane } = await start({
      goNextPageAutomatic: true,
      pages: [
        { name: "page1", elements: [{ type: "dropdown", name: "who", choices: ["a", "b"] }] },
        { name: "page2", elements: [{ type: "text", name: "later" }] },
      ],
    }, { name: "recording", tests: [{ name: "recorded", steps: [] }] });

    answer(recorder, pane, "who", "a");
    // The advance is on a timer of the library's own; nothing about it is this widget's.
    await new Promise(resolve => setTimeout(resolve, 500));
    await drain(recorder);

    expect((recorder.liveSurvey as any).currentPage.name).toBe("page2");
    // A recorded nextPage would press the button a second time, on a survey that had already moved.
    expect(stepsOf(host)).toEqual([{ name: "set-who", set: { who: "a" } }]);
    expect(recorder.verifyOutcome?.status).toBe("passed");
  }, 30000);

  it("records nothing at all while the session is paused", async() => {
    const { recorder, host, pane } = await start(
      { elements: [{ type: "text", name: "who" }] },
      { name: "recording", tests: [{ name: "recorded", steps: [] }] });
    recorder.isRecording = false;
    answer(recorder, pane, "who", "Ann");
    await drain(recorder);
    expect(host.writes).toEqual([]);
    expect(recorder.ignoredChanges.map(entry => entry.reason)).toContain("paused");
  });
});

describe("editing the case", () => {
  it("inserts at the cursor and leaves the tail where it was", async() => {
    const { recorder, host, pane } = await start(
      { elements: [{ type: "text", name: "who" }, { type: "text", name: "note" }] },
      { name: "recording", tests: [{ name: "recorded", steps: [] }] });

    answer(recorder, pane, "who", "Ann");
    await drain(recorder);
    await recorder.addChecks("who", [check("value")]);
    await drain(recorder);
    expect(unnamed(stepsOf(host))).toEqual([
      { set: { who: "Ann" } }, { expect: { who: { value: "Ann" } } },
    ]);

    await recorder.setCursor(0);
    render(recorder, pane);
    expect((recorder.liveSurvey as any).getValue("who")).toBeUndefined();
    answer(recorder, pane, "who", "Bob");
    await drain(recorder);
    // The tail is intact and it now runs second: what was recorded before is not rewritten by an
    // insert, and the quiet run says honestly what the new order does.
    expect(unnamed(stepsOf(host))).toEqual([
      { set: { who: "Bob" } }, { set: { who: "Ann" } }, { expect: { who: { value: "Ann" } } },
    ]);
    expect(recorder.verifyOutcome?.status).toBe("passed");

    // One recorder action back is the step, not a keystroke: the stack holds what this session wrote.
    expect(recorder.canUndo).toBe(true);
    recorder.undo();
    await drain(recorder);
    expect(unnamed(stepsOf(host))).toEqual([
      { set: { who: "Ann" } }, { expect: { who: { value: "Ann" } } },
    ]);
    expect(recorder.notice).toBe("The last recorded change was undone.");
  }, 30000);

  it("deletes, moves and renames a step, and answers honestly afterwards", async() => {
    const { recorder, host } = await start(
      { elements: [{ type: "text", name: "who" }, { type: "text", name: "note" }] },
      {
        name: "recording",
        tests: [{
          name: "recorded",
          steps: [
            { set: { who: "Ann" } },
            { set: { note: "hello" } },
            { expect: { who: { value: "Ann" } } },
          ],
        }],
      });

    await recorder.moveStep(0, 1);
    await drain(recorder);
    expect(unnamed(stepsOf(host))[0]).toEqual({ set: { note: "hello" } });

    recorder.renameStep(0, "the note");
    expect(stepsOf(host)[0].name).toBe("the note");

    // Deleting the step the tail depends on is allowed, and the verdict says what it costs.
    await recorder.deleteStep(1);
    await drain(recorder);
    expect(stepsOf(host).length).toBe(2);
    expect(recorder.verifyOutcome?.status).toBe("failed");
    expect(recorder.verifyOutcome?.firstFailure?.stepIndex).toBe(1);
  }, 30000);

  it("takes a check back out, and takes the step with the last of them", async() => {
    const { recorder, host } = await start(
      { elements: [{ type: "text", name: "who" }] },
      { name: "recording", tests: [{ name: "recorded", steps: [] }] });

    await recorder.addChecks("who", [check("visible"), check("empty")]);
    await drain(recorder);
    expect(unnamed(stepsOf(host))).toEqual([{ expect: { who: { visible: true, empty: true } } }]);

    recorder.removeChecks("who", ["empty"]);
    expect(unnamed(stepsOf(host))).toEqual([{ expect: { who: { visible: true } } }]);
    recorder.removeChecks("who", ["visible"]);
    // An empty "expect" is not a case, it is a syntax error waiting for the next run.
    expect(stepsOf(host)).toEqual([]);
    expect(recorder.cursor).toBe(0);
    await drain(recorder);
  }, 30000);

  // Unticking is about the check the menu is showing, which is the one before the cursor. After a
  // rewind that is not the end of the case, and reaching for the end of the case instead removes a
  // check from a step the menu was never about.
  it("unticks the check at the cursor and leaves the tail of the case alone", async() => {
    const { recorder, host, pane } = await start(
      { elements: [{ type: "text", name: "who" }, { type: "text", name: "note" }] },
      { name: "recording", tests: [{ name: "recorded", steps: [] }] });

    answer(recorder, pane, "who", "Ann");
    await drain(recorder);
    await recorder.addChecks("who", [check("value")]);
    await drain(recorder);
    expect(unnamed(stepsOf(host))).toEqual([
      { set: { who: "Ann" } }, { expect: { who: { value: "Ann" } } },
    ]);

    // Back to the beginning, and a check recorded there: the case now holds two "value" checks on the
    // same target, one at each end.
    await recorder.setCursor(0);
    render(recorder, pane);
    await recorder.addChecks("who", [check("empty")]);
    await drain(recorder);
    expect(unnamed(stepsOf(host))).toEqual([
      { expect: { who: { empty: true } } },
      { set: { who: "Ann" } },
      { expect: { who: { value: "Ann" } } },
    ]);
    expect(recorder.cursor).toBe(1);

    recorder.removeChecks("who", ["empty"]);
    await drain(recorder);
    // The one the menu was about is gone and the trailing check is untouched.
    expect(unnamed(stepsOf(host))).toEqual([
      { set: { who: "Ann" } }, { expect: { who: { value: "Ann" } } },
    ]);
    expect(recorder.cursor).toBe(0);
    expect(recorder.verifyOutcome?.status).toBe("passed");
  }, 30000);

  // The coalescing rule and the undo stack are one promise, not two: if every keystroke of a coalesced
  // answer pushes its own snapshot, Undo walks "Ann" back to "An" and the step the grid shows as one
  // action takes three presses to remove.
  it("undoes a coalesced answer as the one action the grid shows", async() => {
    const { recorder, host, pane } = await start(
      { elements: [{ type: "text", name: "who" }] },
      { name: "recording", tests: [{ name: "recorded", steps: [] }] });
    const survey: any = recorder.liveSurvey;

    ["A", "An", "Ann"].forEach(text => {
      fire(pane.nodes["who"], "pointerdown");
      survey.setValue("who", text);
      fire(pane.nodes["who"], "input");
      recorder.flush();
    });
    await drain(recorder);
    expect(stepsOf(host)).toEqual([{ name: "set-who", set: { who: "Ann" } }]);

    expect(recorder.canUndo).toBe(true);
    recorder.undo();
    await drain(recorder);
    expect(stepsOf(host)).toEqual([]);
    expect(recorder.canUndo).toBe(false);
  }, 30000);

  it("writes nothing when the confirming run rejects the step", async() => {
    const { recorder, host } = await start(
      { elements: [{ type: "text", name: "who" }] },
      { name: "recording", tests: [{ name: "recorded", steps: [] }] });

    // Rule 3. There is no such question, so the run reports unknownTarget and the case is left alone.
    await recorder.addChecks("nosuchquestion", [{ name: "value", payloadType: "value" }]);
    expect(host.writes).toEqual([]);
    expect(recorder.notice.indexOf("Nothing was recorded: unknownTarget")).toBe(0);
  }, 30000);
});

describe("the document changing underneath", () => {
  it("keeps the cursor when the steps are what they were, and clamps it when they are not", async() => {
    const { recorder, host } = await start(
      { elements: [{ type: "text", name: "who" }, { type: "text", name: "note" }] },
      {
        name: "recording",
        tests: [{
          name: "recorded",
          steps: [{ set: { who: "Ann" } }, { set: { note: "hello" } }],
        }],
      });
    await recorder.setCursor(1);
    expect(recorder.cursor).toBe(1);

    // An edit elsewhere in the document: the step count and the step at the cursor are what they were,
    // so the session stays where it is.
    const suite = JSON.parse(host.text);
    suite.description = "written in the JSON screen";
    host.text = suiteText(suite);
    recorder.reconcile();
    await drain(recorder);
    expect(recorder.cursor).toBe(1);
    expect(recorder.notice).toBe("The Tests JSON changed outside the Recorder, so the session was" +
      " replayed onto the new document.");

    // And an edit of the steps themselves: the cursor cannot mean what it meant, so it goes to the end.
    const next = JSON.parse(host.text);
    next.tests[0].steps.push({ expect: { who: { value: "Ann" } } });
    host.text = suiteText(next);
    recorder.reconcile();
    await drain(recorder);
    expect(recorder.cursor).toBe(3);
    expect(recorder.notice).toBe("The document changed underneath the session, so the cursor moved to" +
      " the end of the case.");
  }, 30000);

  it("closes the session when its test is renamed or deleted away", async() => {
    const { recorder, host } = await start(
      { elements: [{ type: "text", name: "who" }] },
      { name: "recording", tests: [{ name: "recorded", steps: [] }, { name: "other", steps: [] }] });

    const renamed = JSON.parse(host.text);
    renamed.tests[0].name = "renamed";
    host.text = suiteText(renamed);
    recorder.reconcile();
    // The session is addressed by name, so a rename is a disappearance: the cursor and the prefix are
    // about a case that no longer answers to it.
    expect(recorder.isOpen).toBe(false);
    expect(recorder.notice).toBe("The test \"recorded\" is no longer in the suite, so the session is" +
      " closed.");
  });

  it("closes nothing because the document stopped parsing", async() => {
    const { recorder, host } = await start(
      { elements: [{ type: "text", name: "who" }] },
      { name: "recording", tests: [{ name: "recorded", steps: [] }] });

    host.text = "{ \"tests\": [";
    recorder.reconcile();
    expect(recorder.isOpen).toBe(true);
    // A broken document is a document reason, and it is one of the only two the recorder is blocked by.
    expect(recorder.blockedReason.indexOf("The suite document does not hold valid JSON")).toBe(0);
  });
});

describe("the hand-formatted document", () => {
  const untouched = [
    "    {",
    "      \"name\": \"two\",",
    "      \"description\": \"laid out by hand\",",
    "      \"steps\": [ { \"complete\": { \"survey\": true } } ]",
    "    }",
  ].join("\n");
  const commented = [
    "{",
    "  // the suite the whole file is about",
    "  \"name\": \"suite\",",
    "  \"tests\": [",
    "    {",
    "      \"name\": \"one\",",
    "      \"description\": \"the first one\",",
    "      \"steps\": [",
    "        { \"set\": { \"who\": \"Ann\" } }",
    "      ]",
    "    },",
    "    /* the second one is not the one being recorded into */",
    untouched,
    "  ]",
    "}",
    "",
  ].join("\n");

  // What the whole "the document is the state" promise costs, through the model rather than through
  // caseEdit alone: a person who laid their suite out by hand and wrote comments in it must not lose
  // either because they recorded one step.
  it("records into a commented suite and leaves every byte around the edit alone", async() => {
    const host = new RecorderHostStub(
      { elements: [{ type: "text", name: "who" }, { type: "text", name: "note" }] }, commented);
    const recorder = track(new TesterRecorderModel(host));
    const pane = createPane();
    panes.push(pane);
    await recorder.open("one");
    recorder.attachTo(pane.container);
    render(recorder, pane);
    expect(recorder.blockedReason, "a commented suite is a suite").toBe("");
    expect(recorder.cursor).toBe(1);

    answer(recorder, pane, "note", "hello");
    await drain(recorder);

    const text = host.text;
    expect(text.indexOf("// the suite the whole file is about")).toBeGreaterThan(0);
    expect(text.indexOf("/* the second one is not the one being recorded into */")).toBeGreaterThan(0);
    // The other test keeps its one-line steps array and its hand-made layout, because the only
    // container jsonc-parser rewrites is the steps array of the test being recorded into. The key
    // order of that test is the author's too: only its steps moved.
    expect(text.indexOf(untouched)).toBeGreaterThan(0);
    expect(text.indexOf("\"description\"")).toBeGreaterThan(text.indexOf("\"one\""));
    expect(text.indexOf("\"steps\"")).toBeGreaterThan(text.indexOf("\"description\""));
    expect(stepsOf(host)[1]).toEqual({ name: "set-note", set: { note: "hello" } });
  }, 30000);
});

describe("what a closed session must not do", () => {
  // A close() that only flips a flag leaves the work it started running: the confirming run behind a
  // check is a full headless run of the prefix, and it resolves long after the screen was left. What it
  // resolved into used to be written into the document of a test nobody was editing any more.
  it("does not write a check that was still confirming itself when the session closed", async() => {
    const { recorder, host } = await start(
      { elements: [{ type: "text", name: "who" }] },
      { name: "recording", tests: [{ name: "recorded", steps: [] }] });
    const before = host.text;

    const pending = recorder.addChecks("who", [check("visible")]);
    recorder.close();
    await pending;
    // And nothing arrives late either: the queue is drained before the document is read.
    await new Promise(resolve => setTimeout(resolve, 50));

    expect(host.text).toBe(before);
    expect(stepsOf(host)).toEqual([]);
    expect(recorder.isOpen).toBe(false);
  }, 30000);

  // The other half: a replay in flight builds a model, and attaching it to a closed session would put a
  // live survey back on a screen that is not there - and start recording onto it.
  it("does not attach the model of a replay that was in flight when the session closed", async() => {
    const { recorder } = await start(
      { elements: [{ type: "text", name: "who" }] },
      { name: "recording", tests: [{ name: "recorded", steps: [{ set: { who: "Ann" } }] }] });

    const pending = recorder.setCursor(0);
    recorder.close();
    await pending;
    await new Promise(resolve => setTimeout(resolve, 50));

    expect(recorder.liveSurvey).toBe(undefined);
    expect(recorder.isOpen).toBe(false);
    expect(recorder.cursor).toBe(0);
    expect(recorder.replayState).toBe("idle");
  }, 30000);
});

describe("dispose", () => {
  it("leaves the model it was recording on exactly as it found it", async() => {
    const { recorder } = await start(
      { elements: [{ type: "text", name: "who" }] },
      { name: "recording", tests: [{ name: "recorded", steps: [] }] });
    const survey: any = recorder.liveSurvey;
    expect(Object.prototype.hasOwnProperty.call(survey, "tryComplete")).toBe(true);
    recorder.dispose();
    // The wrappers are own properties shadowing the prototype, so detaching restores the model itself.
    expect(Object.prototype.hasOwnProperty.call(survey, "tryComplete")).toBe(false);
    expect(typeof survey.tryComplete).toBe("function");
  });
});
