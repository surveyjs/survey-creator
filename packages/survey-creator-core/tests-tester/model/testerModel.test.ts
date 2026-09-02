// The state machine of prompt 03 section 2, asserted through the one model a host constructs.
//
// Nothing here renders anything, and that is the point twice over: the transitions are the model's and
// not the markup's, and the widget really is drivable headlessly - which is what makes the Creator tab
// of a later prompt an adapter instead of a rewrite.
import { afterEach, describe, expect, it } from "vitest";
import { SurveyTesterModel } from "../../src/tester/model/testerModel";
import { sample as conditional } from "../samples/01-conditional-visibility";
import { formatSuite, TesterHostStub } from "./testerHostStub";

const surveyJson = {
  pages: [{
    name: "page1",
    elements: [{ type: "text", name: "q1" }],
  }],
};

const suite = {
  name: "suite",
  tests: [
    { name: "one", steps: [{ set: { q1: "a" } }] },
    { name: "two", steps: [{ set: { q1: "b" } }, { expect: { q1: { value: "b" } } }] },
  ],
};

function build(over?: { text?: string, surveyJson?: any }): {
  model: SurveyTesterModel, host: TesterHostStub,
} {
  const host = new TesterHostStub(
    over?.surveyJson !== undefined ? over.surveyJson : surveyJson,
    over?.text !== undefined ? over.text : formatSuite(suite),
  );
  return { model: new SurveyTesterModel(host), host };
}

let open: Array<SurveyTesterModel> = [];
function track(model: SurveyTesterModel): SurveyTesterModel {
  open.push(model);
  return model;
}
afterEach(() => {
  open.forEach(model => model.dispose());
  open = [];
});

describe("the three screens", () => {
  it("starts on the runner with the suite reconciled into rows", () => {
    const { model } = build();
    track(model);
    expect(model.screen).toBe("runner");
    expect(model.canRun).toBe(true);
    expect(model.runner.rowModelList.map(row => row.name)).toEqual(["one", "two"]);
  });

  // runner --JSON on a row--> json. The reveal is the entry gesture and the header is a snapshot.
  it("opens the json screen revealed at the test the row was about", () => {
    const { model } = build();
    track(model);
    model.openJson("two");
    expect(model.screen).toBe("json");
    expect(model.activeTestName).toBe("two");
    expect(model.json.revealNonce).toBe(1);
    expect(model.json.revealOffset).toBe(model.json.text.indexOf("{\n      \"name\": \"two\""));
    // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
    expect(model.json.headerText).toBe("two · 2 steps · tests[1]");
  });

  // json --Back--> runner. Nothing happens on the way: the document is already the state.
  it("goes back to the runner from the json screen", () => {
    const { model } = build();
    track(model);
    model.openJson("one");
    model.json.back();
    expect(model.screen).toBe("runner");
  });

  // runner --Edit on a row--> recorder.
  it("opens the recorder from a row", async() => {
    const { model } = build();
    track(model);
    await model.openRecorder("two");
    expect(model.screen).toBe("recorder");
    expect(model.activeTestName).toBe("two");
    expect(model.recorder.isOpen).toBe(true);
    expect(model.recorder.testName).toBe("two");
    // The session opens at the end of the case.
    expect(model.recorder.cursor).toBe(2);
    expect(model.transition).toBe("none");
  });

  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // runner --New test → Create--> recorder, in one press: creating a test is the act of starting to
  // record it.
  it("creates a test through the recorder's editing path and hands over", async() => {
    const { model, host } = build();
    track(model);
    const refusal = model.createTest({ name: "three" });
    expect(refusal).toBe(undefined);
    // The document is the state: the test is in the host's text, written through jsonc-parser, and the
    // rest of the document is untouched.
    expect(JSON.parse(host.text).tests.map((test: any) => test.name)).toEqual(["one", "two", "three"]);
    expect(host.writes.length).toBe(1);
    // The handover is asynchronous only because entering the recorder always is.
    await Promise.resolve();
    await Promise.resolve();
    expect(model.screen).toBe("recorder");
    expect(model.recorder.testName).toBe("three");
    expect(model.recorder.cursor).toBe(0);
  });

  it("refuses a created test whose name is taken, and touches nothing", () => {
    const { model, host } = build();
    track(model);
    expect(model.createTest({ name: "two" })).toBe("The suite already has a test named \"two\".");
    expect(model.createTest({ name: "  " })).toBe(
      "A test must have a name: the session is addressed by it and not by an index.");
    expect(host.writes).toEqual([]);
    expect(model.screen).toBe("runner");
  });

  // recorder --Go to Runner--> runner: flush, close, and keep the test selected so the run button reads
  // "Run 1 test".
  it("leaves the recorder with the test selected and the capture flushed", async() => {
    const { model } = build();
    track(model);
    await model.openRecorder("two");
    const flushes = model.recorder.flushCount;
    model.goToRunnerFromRecorder();
    expect(model.recorder.flushCount).toBe(flushes + 1);
    expect(model.recorder.isOpen).toBe(false);
    expect(model.screen).toBe("runner");
    expect(model.runner.selectedCount).toBe(1);
    expect((model.runner.toolbar.getActionById("run") as any).title).toBe("Run 1 test");
  });
});

describe("the two asynchronous transitions", () => {
  // Rule 2. Entering the recorder never fails because something was running: it stops it, waits for the
  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // run to unwind, and the Edit verb that was pressed says "Stopping…" while it does.
  it("stops a live run before it opens the session, and says so on the row", async() => {
    const host = new TesterHostStub(conditional.surveyJson, formatSuite(conditional.tests));
    const model = track(new SurveyTesterModel(host));
    const name = (conditional.tests.tests[0] as any).name;
    model.startRun(undefined);
    expect(model.runner.isRunning).toBe(true);

    const pending = model.openRecorder(name);
    expect(model.transition).toBe("stopping");
    expect(model.recorder.isOpen, "the session opened onto a model still being driven").toBe(false);
    const row = model.runner.rowModelList.find(one => one.name === name);
    expect((row as any).editPending).toBe(true);
    // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
    expect(((row as any).verbs.getActionById("edit")).title).toBe("Stopping…");

    await pending;
    expect(model.runner.isRunning).toBe(false);
    expect(model.transition).toBe("none");
    expect(model.screen).toBe("recorder");
    expect(model.recorder.testName).toBe(name);
    const after = model.runner.rowModelList.find(one => one.name === name);
    expect((after as any).editPending).toBe(false);
    expect(((after as any).verbs.getActionById("edit")).title).toBe("Edit");
  }, 60000);

  // Rule 3. One live model, one owner: a run started while a session is open closes the session first,
  // and nothing is lost because what was recorded is already in the document.
  it("closes an open session before a run starts, with the no-loss notice", async() => {
    const { model } = build();
    track(model);
    await model.openRecorder("one");
    const flushes = model.recorder.flushCount;
    model.startRun(["one"]);
    expect(model.recorder.flushCount, "the capture was not flushed before the session closed")
      .toBe(flushes + 1);
    expect(model.recorder.isOpen).toBe(false);
    expect(model.screen).toBe("runner");
    expect(model.notice).toBe("The recording session on \"one\" was closed so this run could drive its" +
      " own model. Everything it recorded is in the Tests JSON: press Edit to carry on.");
    model.stopRun();
  }, 60000);
});

describe("the window a pending Edit holds open", () => {
  // A stop takes as long as the tester needs to unwind, and for the whole of that the session is not
  // yet open. A document edit arriving inside that window must still reach the fallback: opening a
  // session on a test the suite no longer holds would give the recorder a subject that does not exist,
  // and nothing would notice until the host happened to send another updateFromHost.
  it("does not open a session for a test that was deleted while the run was stopping", async() => {
    const { model, host } = build();
    track(model);
    model.startRun(undefined);
    expect(model.runner.isRunning).toBe(true);

    const pending = model.openRecorder("two");
    expect(model.transition).toBe("stopping");

    host.text = formatSuite({ name: "suite", tests: [suite.tests[0]] });
    model.updateFromHost();

    await pending;
    expect(model.recorder.isOpen).toBe(false);
    expect(model.recorder.testName).toBe(undefined);
    expect(model.screen).toBe("runner");
    expect(model.transition).toBe("none");
    expect(model.notice).toBe("The test \"two\" is no longer in the suite, so the screen that was about" +
      " it was closed.");
  }, 60000);

  // The other way that wait ends. TesterRunnerModel.dispose() aborts the run without publishing, so
  // "phase" never reaches "done" and a wait that only listened for it would never settle at all - so
  // this is raced against a timer rather than simply awaited: a regression here is a hang, and a test
  // that hangs costs its whole timeout before it says anything.
  it("settles a pending Edit when the widget is disposed while the run unwinds", async() => {
    const { model } = build();
    model.startRun(undefined);
    expect(model.runner.isRunning).toBe(true);
    const pending = model.openRecorder("two");
    model.dispose();

    const outcome = await Promise.race([
      pending.then(() => "settled"),
      new Promise<string>(resolve => setTimeout(() => resolve("hung"), 2000)),
    ]);
    expect(outcome, "dispose left the wait hanging, and its handler on a disposed runner")
      .toBe("settled");
    expect(model.recorder.isOpen).toBe(false);
    expect(model.screen).toBe("runner");
  });
});

describe("the vanished-test fallback", () => {
  // The recorder's rule, and only the recorder's.
  it("closes an open session whose test left the suite, with a notice", async() => {
    const { model, host } = build();
    track(model);
    await model.openRecorder("two");
    host.text = formatSuite({ name: "suite", tests: [suite.tests[0]] });
    model.updateFromHost();
    expect(model.recorder.isOpen).toBe(false);
    expect(model.screen).toBe("runner");
    expect(model.notice).toBe("The test \"two\" is no longer in the suite, so the screen that was about" +
      " it was closed.");
  });

  // The json screen holds no pointer to a test after entry, so the test it was opened from can be
  // renamed or deleted from that very screen without the screen closing under the person typing.
  it("leaves the json screen open when the test it was entered from disappears", () => {
    const { model, host } = build();
    track(model);
    model.openJson("two");
    const header = model.json.headerText;

    host.text = formatSuite({ name: "suite", tests: [suite.tests[0], { name: "renamed", steps: [] }] });
    model.updateFromHost();
    expect(model.screen).toBe("json");
    expect(model.notice).toBe("");
    // The header is the entry snapshot and does not repoint either.
    expect(model.json.headerText).toBe(header);

    host.text = formatSuite({ name: "suite", tests: [suite.tests[0]] });
    model.updateFromHost();
    expect(model.screen).toBe("json");
  });

  // A broken document says nothing about which tests exist, so it closes nothing.
  it("does not close a session because the document stopped parsing", async() => {
    const { model, host } = build();
    track(model);
    await model.openRecorder("two");
    host.text = "{ \"tests\": [";
    model.updateFromHost();
    expect(model.recorder.isOpen).toBe(true);
    expect(model.screen).toBe("recorder");
    expect(model.canRun).toBe(false);
  });
});

describe("updateFromHost", () => {
  it("reconciles the rows rather than rebuilding them", () => {
    const { model, host } = build();
    track(model);
    const before = model.runner.rowModelList[1];
    before.setExpanded(true);
    host.text = formatSuite({
      name: "suite",
      tests: [suite.tests[0], suite.tests[1], { name: "three", steps: [] }],
    });
    model.updateFromHost();
    expect(model.runner.rowModelList[1], "the row was rebuilt").toBe(before);
    expect(model.runner.rowModelList[1].expanded).toBe(true);
    expect(model.runner.rowModelList.map(row => row.name)).toEqual(["one", "two", "three"]);
  });

  it("blocks the run on a document that does not parse, and unblocks it again", () => {
    const { model, host } = build();
    track(model);
    host.text = "{ nope";
    model.updateFromHost();
    expect(model.canRun).toBe(false);
    expect(model.blockedReason.indexOf("The suite document does not hold valid JSON")).toBe(0);
    // The json screen is never blocked: it is the bench this is repaired on.
    model.openJson(undefined);
    expect(model.screen).toBe("json");
    expect(model.json.parseError).not.toBe("");
    expect(model.json.text).toBe("{ nope");

    model.json.setText(formatSuite(suite));
    expect(model.canRun).toBe(true);
    expect(model.json.parseError).toBe("");
  });

  // A run is a model of the definition it was started with, so an edit to that definition mid-run
  // leaves the model describing something that no longer exists.
  it("stops a run in flight when the survey definition changes underneath it", () => {
    const host = new TesterHostStub(conditional.surveyJson, formatSuite(conditional.tests));
    const model = track(new SurveyTesterModel(host));
    model.startRun(undefined);
    expect(model.runner.isRunning).toBe(true);
    host.surveyJson = { pages: [{ name: "p", elements: [{ type: "text", name: "other" }] }] };
    model.updateFromHost();
    expect(model.runner.phase === "canceling" || model.runner.phase === "done").toBe(true);
    expect(model.notice.indexOf("The survey definition changed while a run was in flight")).toBe(0);
  }, 60000);

  it("does not stop a run because a suite edit arrived", () => {
    const host = new TesterHostStub(conditional.surveyJson, formatSuite(conditional.tests));
    const model = track(new SurveyTesterModel(host));
    model.startRun(undefined);
    const parsed = JSON.parse(host.text);
    parsed.tests.push({ name: "added later", steps: [] });
    host.text = formatSuite(parsed);
    model.updateFromHost();
    expect(model.runner.isRunning).toBe(true);
    expect(model.notice).toBe("");
    expect(model.runner.rowModelList[model.runner.rowModelList.length - 1].name).toBe("added later");
    model.stopRun();
  }, 60000);
});

describe("dispose", () => {
  it("stops the run it is holding and writes nothing afterwards", () => {
    const host = new TesterHostStub(conditional.surveyJson, formatSuite(conditional.tests));
    const model = new SurveyTesterModel(host);
    model.startRun(undefined);
    expect(model.runner.isRunning).toBe(true);
    model.dispose();
    let after = 0;
    model.onPropertyChanged.add(() => { after += 1; });
    model.updateFromHost();
    expect(after).toBe(0);
  }, 60000);
});
