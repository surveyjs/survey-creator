// The four promises of this design that no view test can keep, asserted through the properties -
// because a property is all a view ever reads, and there are going to be three of them.
//
// Nothing here renders anything. That is the point: if these pass with React nowhere in the room,
// then the behaviour under test is the model's and not the markup's.
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { findLayerViolations } from "../checkLayers";
import { sample as failingSuite } from "../samples/12-failing-suite";
import { SETUP_SURVEY_ID_PREFIX } from "../../src/tester/core/elementIds";
import { defaultHostOptions, defaultTestOptions } from "../../src/tester/core/hostOptions";

import { SetupModel } from "../../src/tester/model/setupSurvey";
import { TesterRunnerModel } from "../../src/tester/model/runnerModel";
import type { RunnerEnvironment, TestsPanelExtras } from "../../src/tester/model/runnerHost";
import type { TesterTestRowModel } from "../../src/tester/model/testRowModel";

// A screen around the model, with every callback a spy. It is what RunView pushes in on every render.
function environment(over: Partial<RunnerEnvironment> = {}): RunnerEnvironment {
  const extras: TestsPanelExtras = {
    rowActions: {
      onRunOne: () => undefined,
      onRunTo: () => undefined,
      onJson: () => undefined,
    },
  };
  return {
    suite: undefined,
    canRun: true,
    mode: "ui",
    onMode: () => undefined,
    activeMode: "ui",
    hostOptions: defaultHostOptions,
    onHostOptions: () => undefined,
    selected: undefined,
    onSelected: () => undefined,
    onRun: () => undefined,
    onRevealCase: () => undefined,
    onRevealSurvey: () => undefined,
    canToggleLog: true,
    extras: extras,
    ...over,
  };
}

// The frame is stubbed rather than trusted to jsdom, because what these tests measure is *how many* of
// them a run costs. It delivers like the real one - asynchronously, after the task that asked for it -
// so a run really does paint several times while it is in flight; it just also counts.
interface Frames {
  scheduled: number;
  pending: Array<() => void>;
  run(): void;
  restore(): void;
}

function stubFrames(): Frames {
  const realRequest = globalThis.requestAnimationFrame;
  const realCancel = globalThis.cancelAnimationFrame;
  const state: Frames = {
    scheduled: 0,
    pending: [],
    run(): void {
      const due = state.pending.slice();
      state.pending = [];
      due.forEach(callback => callback());
    },
    restore(): void {
      globalThis.requestAnimationFrame = realRequest;
      globalThis.cancelAnimationFrame = realCancel;
    },
  };
  let handle = 0;
  const byHandle = new Map<number, () => void>();
  globalThis.requestAnimationFrame = ((callback: FrameRequestCallback) => {
    handle += 1;
    state.scheduled += 1;
    const id = handle;
    const wrapped = (): void => {
      if (!byHandle.has(id)) return;
      byHandle.delete(id);
      const at = state.pending.indexOf(wrapped);
      if (at > -1) state.pending.splice(at, 1);
      callback(0);
    };
    byHandle.set(id, wrapped);
    state.pending.push(wrapped);
    setTimeout(wrapped, 0);
    return id;
  }) as any;
  globalThis.cancelAnimationFrame = ((id: number) => {
    const wrapped = byHandle.get(id);
    if (!wrapped) return;
    byHandle.delete(id);
    const at = state.pending.indexOf(wrapped);
    if (at > -1) state.pending.splice(at, 1);
  }) as any;
  return state;
}

// Every property write that actually changed something, on the runner and on every row and step of it.
function countChanges(model: TesterRunnerModel): () => number {
  let changes = 0;
  const bump = (): void => { changes += 1; };
  model.onPropertyChanged.add(bump);
  const watched = new Set<any>();
  const watch = (): void => {
    model.rowModelList.forEach(row => {
      if (!watched.has(row)) { watched.add(row); row.onPropertyChanged.add(bump); }
      row.stepRowModels.forEach(step => {
        if (!watched.has(step)) { watched.add(step); step.onPropertyChanged.add(bump); }
      });
    });
  };
  watch();
  // Rows created later are watched too, so nothing escapes the count by being made mid-run.
  model.onPropertyChanged.add(watch);
  return () => changes;
}

describe("the model layer's boundary", () => {
  // Acceptance 1, the half no import restriction can express. .eslintrc.js holds the other half and
  // npm run lint runs it.
  it("names no component but the two row strings, and no framework at all", () => {
    expect(findLayerViolations("src/tester/model")).toEqual([]);
  });
});

describe("a run through the models", () => {
  let frames: Frames;
  let model: TesterRunnerModel;

  beforeEach(() => {
    frames = stubFrames();
    model = new TesterRunnerModel();
  });
  afterEach(() => {
    model.dispose();
    frames.restore();
  });

  // Acceptance 5. A run emits far more events than a browser can usefully repaint, so the count of
  // property writes has to be bounded by frames and not by events - and it matters more here than it
  // did in React, because every write now reaches three subscription mechanisms.
  it("repaints once per frame, not once per event", async() => {
    model.refresh(environment({ suite: failingSuite.tests }));
    const changes = countChanges(model);
    // One publish per version bump, whether a frame raised it or an immediate flush did. It is the
    // number this rule is about: the frame is the mechanism, the publish is the repaint.
    let publishes = 0;
    model.onPropertyChanged.add((_sender, options) => {
      if (options.name === "version") publishes += 1;
    });

    const done = new Promise<void>(resolve => {
      const watch = (): void => {
        if (model.phase === "done") resolve();
        else setTimeout(watch, 5);
      };
      setTimeout(watch, 5);
    });
    model.start({
      surveyJson: failingSuite.surveyJson,
      suite: failingSuite.tests,
      testOptions: defaultTestOptions,
      hostOptions: { ...defaultHostOptions, stepDelayMs: 0, renderSurvey: false },
    });
    await done;
    frames.run();

    // The run is worth measuring: this suite emits far more than a handful of events, and every one of
    // them went through onEvent.
    const events = model.rows.length;
    expect(events, "the transcript is too short to be a fair measure").toBeGreaterThan(20);
    expect(model.phase).toBe("done");

    // Nothing set a property per event. Every publish was a frame or one of the two immediate flushes
    // a run makes - the line it logs before it starts, and the one after it ends.
    expect(publishes).toBeLessThanOrEqual(frames.scheduled + 2);
    expect(publishes, "a repaint per event").toBeLessThan(events / 2);
    // And the writes themselves are bounded by what a screen is worth, per publish, rather than by the
    // length of the run: three rows and their steps, a couple of dozen properties each.
    const perPublish = 40 * (1 + model.rowModelList.length);
    expect(changes()).toBeLessThanOrEqual(publishes * perPublish);
  }, 60000);

  // Acceptance 7. dispose() is part of the contract: a long-lived Base holding an AbortController, a
  // PauseGate and a scheduled frame must stop all three for whoever owns it.
  it("stops the run it is holding when it is disposed, and writes nothing afterwards", async() => {
    model.refresh(environment({ suite: failingSuite.tests }));
    model.start({
      surveyJson: failingSuite.surveyJson,
      suite: failingSuite.tests,
      testOptions: defaultTestOptions,
      hostOptions: { ...defaultHostOptions, stepDelayMs: 0, renderSurvey: false },
    });
    expect(model.isRunning).toBe(true);

    model.dispose();
    let after = 0;
    model.onPropertyChanged.add(() => { after += 1; });
    const framesAtDispose = frames.scheduled;
    expect(frames.pending, "a frame was left scheduled").toEqual([]);

    // Long enough for whatever the tester still had in flight to unwind into a model nobody watches.
    await new Promise<void>(resolve => setTimeout(resolve, 400));
    frames.run();
    expect(after, "a disposed model kept writing").toBe(0);
    expect(frames.scheduled, "a disposed model scheduled another frame").toBe(framesAtDispose);
  }, 60000);
});

describe("the test list", () => {
  let model: TesterRunnerModel;
  const suite = {
    name: "suite",
    tests: [
      { name: "one", steps: [{ complete: { survey: true } }] },
      { name: "two", steps: [{ complete: { survey: true } }] },
      { name: "three", steps: [{ complete: { survey: true } }] },
    ],
  };

  beforeEach(() => { model = new TesterRunnerModel(); });
  afterEach(() => { model.dispose(); });

  // Acceptance 6. MultiSelectListModel.selectedItems is a plain field, not a @property: onItemClick
  // pushes and splices it without raising anything. So the model closes the gap itself, and this is
  // asserted through the properties a view actually reads.
  it("keeps every row's selected property and the Run title agreeing with selectedItems", () => {
    let published: Array<string> | undefined | "unset" = "unset";
    model.refresh(environment({ suite: suite, onSelected: next => { published = next; } }));
    const rows = model.rowModelList;
    const runTitle = (): string => (model.toolbar.getActionById("run") as any).title;
    const trueSelection = (): Array<string> =>
      rows.filter(row => model.tests.isItemSelected(row.action)).map(row => row.name);
    const claimedSelection = (): Array<string> =>
      rows.filter(row => row.selected).map(row => row.name);

    expect(claimedSelection()).toEqual(["one", "two", "three"]);
    expect(runTitle()).toBe("Run 3 tests");

    // Twice on the same row: out, and back in again.
    model.toggleSelected(rows[1]);
    expect(claimedSelection()).toEqual(trueSelection());
    expect(claimedSelection()).toEqual(["one", "three"]);
    expect(runTitle()).toBe("Run 2 tests");
    expect(published).toEqual(["one", "three"]);

    model.toggleSelected(rows[1]);
    expect(claimedSelection()).toEqual(trueSelection());
    expect(claimedSelection()).toEqual(["one", "two", "three"]);
    expect(runTitle()).toBe("Run 3 tests");
    // Every runnable test selected maps back to "every test" at the run boundary.
    expect(published).toBe(undefined);

    // And a selection set from a verb rather than from a checkbox lands in the same three places.
    (rows[2] as TesterTestRowModel).status = "failed";
    model.selectFailing();
    expect(claimedSelection()).toEqual(trueSelection());
    expect(claimedSelection()).toEqual(["three"]);
    expect(runTitle()).toBe("Run 1 test");
    expect(published).toEqual(["three"]);
  });

  // Acceptance 8. setSuite reconciles, it does not rebuild - so the row a person is working in is the
  // same object before and after the document round-trips, and its expansion goes with it.
  it("keeps the row a rename happened in, still expanded", () => {
    let text = JSON.stringify(suite);
    const env = environment({
      suite: JSON.parse(text),
      extras: {
        rowActions: {
          onRunOne: () => undefined,
          onRunTo: () => undefined,
          onJson: () => undefined,
          onRename: (test, next) => {
            // What RunnerScreen does: one edit at tests[i].name, and the document comes back round.
            const parsed = JSON.parse(text);
            parsed.tests[test.index].name = next;
            text = JSON.stringify(parsed);
            return undefined;
          },
        },
      },
    });
    model.refresh(env);

    const before = model.rowModelList[1];
    before.setExpanded(true);
    before.setNameDraft("two renamed");
    expect(before.nameDirty).toBe(true);
    before.commitRename();
    expect(before.nameRefusal).toBe(undefined);
    // Renamed in place, before the document round-trips: that is what makes the match below find it.
    expect(before.name).toBe("two renamed");

    model.refresh({ ...env, suite: JSON.parse(text) });
    const after = model.rowModelList[1];
    expect(after, "the row was rebuilt, so everything it knew was lost").toBe(before);
    expect(after.expanded, "the row closed under the person working in it").toBe(true);
    expect(after.name).toBe("two renamed");
    expect(model.rowModelList.map(row => row.name)).toEqual(["one", "two renamed", "three"]);
  });

  // A rename is refused before the document is touched, and the box keeps what was typed.
  it("refuses a name a sibling already has, and keeps the draft", () => {
    model.refresh(environment({ suite: suite }));
    const row = model.rowModelList[0];
    row.setNameDraft("three");
    expect(row.nameTypedProblem).toBe("The suite already has a test named \"three\".");
    row.commitRename();
    expect(row.name).toBe("one");
    expect(row.nameDraft).toBe("three");
  });
});

// Acceptance 9. Every SurveyModel this application renders carries an elementIdPrefix from
// src/tester/elementIds.ts, and the Setup tab is a SurveyModel now.
describe("the Setup tab's survey", () => {
  it("carries its element id prefix, and edits the two option objects", () => {
    const seen: Array<any> = [];
    const setup = new SetupModel({
      onTestOptions: next => seen.push(["test", next]),
      onHostOptions: next => seen.push(["host", next]),
    });
    expect(setup.survey.elementIdPrefix).toBe(SETUP_SURVEY_ID_PREFIX);

    setup.setOptions(defaultTestOptions, defaultHostOptions);
    // Pushing the options in is not an edit of them: without that, every render would echo back.
    expect(seen).toEqual([]);
    expect(setup.survey.getValue("stepDelayMs")).toBe(defaultHostOptions.stepDelayMs);
    expect(setup.survey.getValue("asyncTimeout")).toBe(defaultTestOptions.asyncTimeout);

    setup.survey.setValue("renderSurvey", false);
    expect(seen.length).toBe(1);
    expect(seen[0][0]).toBe("host");
    expect(seen[0][1].renderSurvey).toBe(false);

    // A number question hands back what was typed, and "250" is not 250 to the runner.
    setup.survey.setValue("stepDelayMs", "250");
    expect(seen[1][0]).toBe("host");
    expect(seen[1][1].stepDelayMs).toBe(250);

    // An empty locale is dropped rather than sent as "": the resolved set says so.
    expect(setup.resolvedText.indexOf("locale")).toBe(-1);
    setup.dispose();
  });
});
