// Section 6: the host persists, the widget serializes. getState() is a plain JSON object and
// setState() applies what still resolves - by the same rules the live transitions follow, because a
// restored screen is a screen that was arrived at.
//
// The widget never touches localStorage, and there is nothing here that could: the prototype's
// usePersistentState is what this replaces and it was not ported.
import { afterEach, describe, expect, it } from "vitest";
import { defaultHostOptions } from "../../src/tester/core/hostOptions";
import { SurveyTesterModel } from "../../src/tester/model/testerModel";
import { formatSuite, TesterHostStub } from "./testerHostStub";

const surveyJson = { pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }] };
const suite = {
  name: "suite",
  tests: [
    { name: "one", steps: [{ set: { q1: "a" } }] },
    { name: "two", steps: [{ set: { q1: "b" } }] },
    // Three steps, so that a restored cursor in the middle of a case is a different number from the
    // end of it. A one-step case cannot tell the two apart, and a test built on one would pass whether
    // the cursor was restored or thrown away.
    { name: "long", steps: [{ set: { q1: "a" } }, { set: { q1: "b" } }, { set: { q1: "c" } }] },
  ],
};

let open: Array<SurveyTesterModel> = [];
function build(text?: string): { model: SurveyTesterModel, host: TesterHostStub } {
  const host = new TesterHostStub(surveyJson, text !== undefined ? text : formatSuite(suite));
  const model = new SurveyTesterModel(host);
  open.push(model);
  return { model, host };
}
afterEach(() => {
  open.forEach(model => model.dispose());
  open = [];
});

describe("the round trip", () => {
  it("restores the screen, the selection and the options a person changed", () => {
    const first = build();
    first.model.setSelectedNames(["two"]);
    first.model.settings.survey.setValue("stepDelayMs", "120");
    first.model.settings.survey.setValue("stopOnFirstFailure", true);
    first.model.openJson("two");

    const state = first.model.getState();
    // A plain JSON object: a host persists it as it is.
    expect(JSON.parse(JSON.stringify(state))).toEqual(state);
    expect(state.screen).toBe("json");
    expect(state.activeTestName).toBe("two");
    expect(state.selectedTestNames).toEqual(["two"]);
    // Only what was changed. The rest is the host's defaults and stays the host's.
    expect(state.hostOptions).toEqual({ stepDelayMs: 120 });
    expect(state.testOptions).toEqual({ stopOnFirstFailure: true });

    const second = build();
    second.model.setState(state);
    expect(second.model.screen).toBe("json");
    expect(second.model.activeTestName).toBe("two");
    expect(second.model.runner.selectedCount).toBe(1);
    expect(second.model.hostOptionsValue.stepDelayMs).toBe(120);
    // Untouched members are still the defaults, not the ones the first model happened to hold.
    expect(second.model.hostOptionsValue.verbosity).toBe(defaultHostOptions.verbosity);
    expect(second.model.testOptionsValue.stopOnFirstFailure).toBe(true);
    // And the restored state is itself restorable: what was changed stays marked as changed.
    expect(second.model.getState().hostOptions).toEqual({ stepDelayMs: 120 });
  });

  // A session opens at the end of the case, and a restored one opens where it was left. The cursor
  // therefore travels into open() rather than being written before it - written before, the open would
  // overwrite it; written after, it would be a cursor prompt 04's prefix replay never saw.
  it("restores the recorder screen at the cursor it was left on, not at the end of the case", async() => {
    const first = build();
    await first.model.openRecorder("long");
    expect(first.model.recorder.cursor, "a session opens at the end of the case").toBe(3);
    // Rewound into the middle of the case, which is what prompt 04's setCursor will do.
    first.model.recorder.cursor = 1;

    const state = first.model.getState();
    expect(state.screen).toBe("recorder");
    expect(state.activeTestName).toBe("long");
    expect(state.recorder).toEqual({ cursor: 1, options: {} });

    const second = build();
    second.model.setState(state);
    await Promise.resolve();
    await Promise.resolve();
    expect(second.model.screen).toBe("recorder");
    expect(second.model.recorder.testName).toBe("long");
    expect(second.model.recorder.isOpen).toBe(true);
    expect(second.model.recorder.cursor, "the open overwrote the restored cursor").toBe(1);
  });

  // The case may have been edited between the two sessions, and a cursor past its end is a cursor into
  // nothing. It is clamped rather than refused: the session is still about that test.
  it("clamps a restored cursor to the case as it now stands", async() => {
    const { model } = build();
    model.setState({ screen: "recorder", activeTestName: "two", recorder: { cursor: 9 } });
    await Promise.resolve();
    await Promise.resolve();
    expect(model.recorder.isOpen).toBe(true);
    expect(model.recorder.cursor).toBe(1);
  });

  it("restores the run mode", () => {
    const first = build();
    first.model.runner.setMode("console");
    expect(first.model.getState().mode).toBe("console");
    const second = build();
    second.model.setState(first.model.getState());
    expect(second.model.runMode).toBe("console");
  });
});

describe("what is dropped", () => {
  it("drops a selected test that no longer exists, silently", () => {
    const { model } = build();
    model.setState({ selectedTestNames: ["two", "gone"] });
    expect(model.getState().selectedTestNames).toEqual(["two"]);
    expect(model.notice).toBe("");
  });

  it("falls back to the runner for a recorder screen whose test vanished", () => {
    const { model } = build();
    model.setState({ screen: "recorder", activeTestName: "gone" });
    expect(model.screen).toBe("runner");
    expect(model.recorder.isOpen).toBe(false);
    expect(model.activeTestName).toBe(undefined);
  });

  // The json screen opens regardless: it is about the document, and a document is always there. The
  // name is used for the entry reveal only.
  it("opens a restored json screen even when the name no longer resolves", () => {
    const { model } = build();
    model.setState({ screen: "json", activeTestName: "gone" });
    expect(model.screen).toBe("json");
    expect(model.json.revealNonce).toBe(0);

    const other = build();
    other.model.setState({ screen: "json", activeTestName: "two" });
    expect(other.model.screen).toBe("json");
    expect(other.model.json.revealNonce).toBe(1);
  });

  it("takes an empty state and a missing one without complaint", () => {
    const { model } = build();
    model.setState(undefined);
    model.setState({});
    expect(model.screen).toBe("runner");
    expect(model.getState().selectedTestNames).toBe(undefined);
  });
});

describe("the host's defaults", () => {
  it("are the starting point, and are never written back", () => {
    const host = new TesterHostStub(surveyJson, formatSuite(suite), {
      hostOptions: { stepDelayMs: 25, verbosity: "all" },
      testOptions: { randomSeed: 7 },
      mode: "console",
    });
    const model = new SurveyTesterModel(host);
    open.push(model);
    expect(model.hostOptionsValue.stepDelayMs).toBe(25);
    expect(model.hostOptionsValue.verbosity).toBe("all");
    expect(model.testOptionsValue.randomSeed).toBe(7);
    expect(model.runMode).toBe("console");
    // Nothing was changed, so the state carries no option at all - the defaults stay the host's to
    // change in a later release.
    expect(model.getState().hostOptions).toEqual({});
    expect(model.getState().testOptions).toEqual({});
    expect(host.options?.hostOptions).toEqual({ stepDelayMs: 25, verbosity: "all" });
  });
});
