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

function replaceLast(text: string, find: string, next: string): string {
  const at = text.lastIndexOf(find);
  return at < 0 ? text : text.substring(0, at) + next + text.substring(at + find.length);
}
