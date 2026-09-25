/* eslint-disable surveyjs/eslint-plugin-i18n/only-english-or-code */
// The whole file is exempted from the ASCII rule: what it pins is what the bar and the badge say,
// character for character, and the tick and the em dash are part of those sentences (see
// promts/creator-tester-notes.md entry 3 and localization/english.ts, which carries the same escape).
// The recorder screen's own chrome: the session bar, the status line, the badge, the three alert
// channels and the zoom. All of it is a projection of the session - there is no state here that the
// session does not already hold - which is what leaves prompt 07 with markup and no decisions.
import { afterEach, describe, expect, it } from "vitest";
import { ListModel } from "survey-core";
import { SurveyTesterModel } from "../../src/tester/model/testerModel";
import { ZOOM_DEFAULT, ZOOM_MAX, ZOOM_MIN } from "../../src/tester/model/zoom";
import { sample as conditional } from "../samples/01-conditional-visibility";
import { formatSuite, TesterHostStub } from "./testerHostStub";

let open: Array<SurveyTesterModel> = [];
afterEach(() => {
  open.forEach(model => model.dispose());
  open = [];
});

function suiteText(steps: Array<any>): string {
  return formatSuite({
    name: "Insurance",
    options: { clearInvisibleValues: "onComplete" },
    starts: [{ name: "declined", data: { hasInsurance: "no" } }],
    tests: [{ name: "walk", start: "declined", steps: steps }],
  });
}

async function session(steps: Array<any> = []): Promise<{ model: SurveyTesterModel, host: TesterHostStub }> {
  const host = new TesterHostStub(conditional.surveyJson, suiteText(steps));
  const model = new SurveyTesterModel(host);
  open.push(model);
  await model.openRecorder("walk");
  expect(model.screen).toBe("recorder");
  return { model: model, host: host };
}

function verbs(model: SurveyTesterModel): Array<string> {
  return model.recorder.bar.actions.map(action => action.id);
}

describe("the session bar", () => {
  it("offers the five verbs, and Record is the one that says what it will do", async() => {
    const { model } = await session();
    const recorder = model.recorder;
    expect(verbs(model)).toEqual(["record", "verify", "rewind", "discard", "options"]);

    // A session opens recording, so the button offers the other half of the pair.
    expect(recorder.isRecording).toBe(true);
    const record: any = recorder.bar.getActionById("record");
    expect(record.title).toBe("Pause");
    expect(recorder.badgeText).toBe("recording — your input becomes steps");
    record.action();
    expect(recorder.isRecording).toBe(false);
    expect(record.title).toBe("Record");
    // Pausing is how the author reaches a state they do not want in the case, so the badge has to say
    // out loud that nothing is being written down.
    expect(recorder.badgeText).toBe("paused — nothing you do is recorded");

    // Rewind is spent at the beginning of the case and offered anywhere else.
    const rewind: any = recorder.bar.getActionById("rewind");
    expect(recorder.cursor).toBe(0);
    expect(rewind.enabled).toBe(false);
    recorder.recordStep({ command: "set", target: "hasInsurance", payload: "yes", description: "" });
    expect(recorder.cursor).toBe(1);
    expect(rewind.enabled).toBe(true);
    await recorder.setCursor(0);
    expect(recorder.cursor).toBe(0);
    expect(rewind.enabled).toBe(false);

    // Discard only closes the session - what was recorded is the document, and the step is still in it.
    const discard: any = recorder.bar.getActionById("discard");
    expect(discard.visible).toBe(true);
    expect(discard.tooltip).toContain("Nothing is deleted");
    discard.action();
    expect(recorder.isOpen).toBe(false);
    expect(model.screen).toBe("runner");
  }, 60000);

  // The status line of PROMPT-recorder.md section 2: the resolved options, the start in force, and the
  // clock. The clock is the point of it - rule 9 - because a case recorded against the real date is a
  // case that fails in a year and nobody can see why.
  it("says what the session records under, including the pinned clock", async() => {
    const { model } = await session();
    const status = model.recorder.statusText;
    expect(status).toContain("today() is 2024-01-01T00:00:00");
    expect(status).toContain("machine-independent");
    expect(status).toContain("start \"declined\"");
    // The suite's own option merges over the root's, and the line reports what the run will resolve to.
    expect(status).toContain("clearInvisibleValues=\"onComplete\"");
    // A test with no start says so rather than saying nothing.
    await model.recorder.setTestField("start", undefined);
    expect(model.recorder.statusText).toContain("no start");
  }, 60000);

  // The three alert channels of the runner, again: the document's refusal with the way out of it beside
  // it, the session's own notice, and the stale tail with Verify one press away.
  it("carries the three alert channels, and Verify is one press from the stale one", async() => {
    const { model, host } = await session([
      { name: "set-hasInsurance", set: { hasInsurance: "yes" } },
      { name: "expect-insuranceProvider", expect: { insuranceProvider: { visible: true } } },
    ]);
    const recorder = model.recorder;
    expect(recorder.blockedReason).toBe("");
    expect(recorder.failNote).toBe("");

    // A step deleted from the middle leaves the tail unverified until the quiet run behind the write
    // lands - and the banner carries the verb that settles it.
    await recorder.deleteStep(0);
    expect(recorder.verifyStale.title).toBe("Verify");
    await recorder.verify();
    // The check no longer holds, and the sentence beside the list says which step and why.
    expect(recorder.staleNotice).toBe("");
    expect(recorder.failNote).toContain("1 check fails");
    expect(recorder.failNote).toContain("step 1");

    // And a document that stops parsing blocks the session, with the way to the bench that repairs it.
    host.setTestsText("{ \"tests\": [");
    model.updateFromHost();
    expect(recorder.blockedReason).toContain("does not hold valid JSON");
    expect(recorder.fixJson.visible).toBe(true);
    recorder.fixJson.action?.();
    expect(model.screen).toBe("json");
  }, 60000);

  // The options menu of section 10. The three toggles it offers are the same options the panel under
  // the step list edits, and both write through the session - so there is one owner of them.
  it("toggles a session option from the bar, and the panel under the list follows", async() => {
    const { model, host } = await session();
    const recorder = model.recorder;
    const options: any = recorder.bar.getActionById("options");
    const list = options.data as ListModel;
    expect(list.actions.map(item => item.id))
      .toEqual(["coalesceSets", "mergeAdjacentSets", "autoCheckAfterCommand"]);
    // Each item says what it is and whether it is on.
    expect(list.actions[0].title).toBe("Coalesce keystrokes ✓");
    expect(list.actions[1].title).toBe("Merge adjacent sets into one step");

    list.onSelectionChanged?.(list.actions[1] as any, "");
    expect(recorder.options.mergeAdjacentSets).toBe(true);
    expect(list.actions[1].title).toBe("Merge adjacent sets into one step ✓");
    // The panel under the step list is the same option seen from the other side.
    expect(recorder.steps.survey.getValue("mergeAdjacentSets")).toBe(true);
    // And back the other way: the panel writes through the session too.
    recorder.steps.survey.setValue("mergeAdjacentSets", false);
    expect(recorder.options.mergeAdjacentSets).toBe(false);
    expect(list.actions[1].title).toBe("Merge adjacent sets into one step");
    // None of it travels with the suite: the tester has no notion of a keystroke.
    expect(host.text.indexOf("mergeAdjacentSets")).toBe(-1);
  }, 60000);

  // The zoom is a way of looking at the model and not a fact about the case: nothing about it is
  // written into the suite, and a replay - which builds a new model - leaves it where it was.
  it("zooms the form and touches nothing else", async() => {
    const { model, host } = await session();
    const recorder = model.recorder;
    expect(recorder.zoom).toBe(ZOOM_DEFAULT);
    expect(recorder.isZoomDefault).toBe(true);
    expect(recorder.zoomText).toBe("100%");
    expect(recorder.zoomFactor).toBe(1);

    recorder.zoomBy(1);
    expect(recorder.zoom).toBe(110);
    expect(recorder.isZoomDefault).toBe(false);
    recorder.zoomBy(-2);
    expect(recorder.zoom).toBe(90);
    recorder.resetZoom();
    expect(recorder.zoom).toBe(ZOOM_DEFAULT);

    // Both ends stop, and the model says so before a button is pressed.
    for (let i = 0; i < 20; i++) recorder.zoomBy(1);
    expect(recorder.zoom).toBe(ZOOM_MAX);
    expect(recorder.canZoomIn).toBe(false);
    for (let i = 0; i < 40; i++) recorder.zoomBy(-1);
    expect(recorder.zoom).toBe(ZOOM_MIN);
    expect(recorder.canZoomOut).toBe(false);

    // A replay builds a new model and leaves the zoom exactly where it was.
    recorder.recordStep({ command: "set", target: "hasInsurance", payload: "yes", description: "" });
    await recorder.setCursor(0);
    expect(recorder.zoom).toBe(ZOOM_MIN);
    // And the case is what it was: the zoom is not an edit.
    expect(host.text.indexOf("zoom")).toBe(-1);
  }, 60000);

  // The screen is a projection: closing the session leaves nothing of it standing.
  it("says nothing at all when no session is open", async() => {
    const { model } = await session();
    model.recorder.close();
    expect(model.recorder.statusText).toBe("");
    expect(model.recorder.badgeText).toBe("");
    expect(model.recorder.failNote).toBe("");
    expect(model.recorder.staleNotice).toBe("");
    expect((model.recorder.bar.getActionById("record") as any).enabled).toBe(false);
  }, 60000);
});

// The freeze is a fact and not an indication. A replay or a confirming run locks the form, the list
// and the adorners from the moment it is asked for; the spinner is what waits 300 ms.
describe("the freeze while work is in flight", () => {
  it("locks synchronously on a replay, and unlocks when the replay lands", async() => {
    const { model } = await session([{ name: "set-hasInsurance", set: { hasInsurance: "yes" } }]);
    const recorder = model.recorder;
    expect(recorder.busy).toBe(false);
    const pending = recorder.setCursor(0);
    // Before a single tick has passed: the lock is on, and the indication is not.
    expect(recorder.busy).toBe(true);
    expect(recorder.formLocked).toBe(true);
    expect(recorder.stepsLocked).toBe(true);
    expect(recorder.steps.locked).toBe(true);
    expect(recorder.adornersBusy).toBe(true);
    expect(recorder.replayState).toBe("idle");
    await pending;
    expect(recorder.busy).toBe(false);
    expect(recorder.stepsLocked).toBe(false);
    expect(recorder.adornersBusy).toBe(false);
  }, 60000);

  // The confirming run proves a check at one position over one prefix. If the case moved while it ran,
  // the proof is about a case that no longer exists, and the check is not written into the wrong place.
  it("does not write a check whose case moved while it was being confirmed", async() => {
    const { model, host } = await session([{ name: "set-hasInsurance", set: { hasInsurance: "no" } }]);
    const recorder = model.recorder;
    expect(recorder.cursor).toBe(1);
    // The queue is drained first, so that the next read of the definition is the confirming run's.
    await recorder.verify();
    // A step handed over while the run is in flight - from inside the run's own build, which reads the
    // definition after the prefix was taken and before anything is awaited. The case then has a step
    // the run never saw, and the cursor is past the position the check was proved at.
    const definition = host.getSurveyJson.bind(host);
    let armed = true;
    host.getSurveyJson = () => {
      if (armed) {
        armed = false;
        recorder.recordStep({ command: "set", target: "hasInsurance", payload: "yes", description: "" });
      }
      return definition();
    };
    const pending = recorder.addChecks("insuranceProvider", [{ name: "visible", payloadType: "boolean" }]);
    expect(recorder.busy).toBe(true);
    await pending;
    expect(armed, "the run never read the definition, so nothing raced it").toBe(false);
    expect(recorder.cursor).toBe(2);
    const steps = JSON.parse(host.text).tests[0].steps;
    expect(steps.length, "the check was written into a case that moved under it").toBe(2);
    expect(steps.some((step: any) => !!step.expect)).toBe(false);
    expect(recorder.cursor, "the cursor was moved back to where the check was proved").toBe(2);
    expect(recorder.notice).toContain("changed while the check was being confirmed");
    // Pressed again over the case as it stands, it is written where the cursor is now.
    await recorder.addChecks("insuranceProvider", [{ name: "visible", payloadType: "boolean" }]);
    expect(JSON.parse(host.text).tests[0].steps[2])
      .toEqual({ name: "expect-insuranceProvider", expect: { insuranceProvider: { visible: true } } });
    expect(recorder.cursor).toBe(3);
  }, 60000);

  // Pausing is how the author reaches a state they do not want in the case, and a check is a recording
  // like any other: while the badge says nothing is recorded, the adorners are spent.
  it("spends the adorners while the session is paused", async() => {
    const { model, host } = await session();
    const recorder = model.recorder;
    recorder.isRecording = false;
    expect(recorder.adornersBusy).toBe(true);
    const adorner: any = recorder.adorners.find("survey");
    adorner.setOpen(true);
    expect(adorner.disabled).toBe(true);
    expect(adorner.menu.busy).toBe(true);
    adorner.menu.toggle(adorner.menu.rowModels.filter((row: any) => row.name === "state")[0]);
    await recorder.verify();
    expect(JSON.parse(host.text).tests[0].steps).toEqual([]);
    recorder.isRecording = true;
    expect(recorder.adornersBusy).toBe(false);
  }, 60000);

  // "new" is a mark on the step this session wrote and not on a position: a step inserted in the middle
  // is new, the old step it pushed down is not, and a deletion takes its own mark with it.
  it("marks as new the steps this session wrote, wherever they ended up", async() => {
    const { model } = await session([
      { name: "set-hasInsurance", set: { hasInsurance: "no" } },
      { name: "expect-insuranceProvider", expect: { insuranceProvider: { visible: false } } },
    ]);
    const recorder = model.recorder;
    const marks = (): Array<boolean> =>
      JSON.parse(model.testsTextValue).tests[0].steps.map((_: any, i: number) => recorder.isRecordedHere(i));
    expect(marks()).toEqual([false, false]);

    recorder.recordStep({ command: "complete", target: "survey", payload: true, description: "" });
    expect(marks()).toEqual([false, false, true]);
    // And the list says so, before the quiet run behind the write has anything to say.
    expect(recorder.steps.matrix.value.map((row: any) => row.stateCode)[2]).toBe("new");

    await recorder.setCursor(1);
    recorder.recordStep({ command: "set", target: "hasInsurance", payload: "yes", description: "" });
    expect(marks(), "the old step pushed down by an insert was marked new").toEqual([false, true, false, true]);

    await recorder.deleteStep(0);
    expect(marks(), "a deletion did not take its own mark with it").toEqual([true, false, true]);

    await recorder.moveStep(0, 1);
    expect(marks(), "the mark did not travel with the step it is about").toEqual([false, true, true]);

    recorder.undo();
    await recorder.verify();
    expect(marks(), "undo did not bring the marks back with the document").toEqual([true, false, true]);
  }, 60000);
});
