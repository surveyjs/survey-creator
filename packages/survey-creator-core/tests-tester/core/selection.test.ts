// "Run this test" from a row of the Tests tab, end to end through this host's own runSuite. The row
// hands the name it carries to the runner as a filter, and what comes back is a run of one test: not
// one passed test beside a row of skipped ones, and not a suite renumbered so that the selected test
// became the first.
import { describe, expect, it } from "vitest";
import type { ISurveyTest, ISurveyTests, SurveyTestExecutionEvent } from "survey-core/tester";
import { defaultHostOptions } from "../../src/tester/core/hostOptions";
import { PauseGate } from "../../src/tester/core/delay";
import { runSuite } from "../../src/tester/core/runSuite";

const surveyJson = {
  elements: [
    { type: "text", name: "q1" },
    { type: "text", name: "q2" },
  ],
};

const suite: ISurveyTests = {
  name: "suite",
  tests: [
    { name: "one", steps: [{ set: { q1: "a" } }, { expect: { q1: { value: "a" } } }] },
    { name: "two", steps: [{ set: { q2: "b" } }, { expect: { q2: { value: "b" } } }] },
    { name: "three", steps: [{ expect: { q1: { empty: true } } }] },
  ],
};

function runOne(selected: Array<string> | undefined) {
  const events: Array<SurveyTestExecutionEvent> = [];
  return runSuite({
    surveyJson: surveyJson,
    suite: suite,
    testFilter: !selected ? undefined : (test: ISurveyTest) => selected.indexOf(test.name) > -1,
    testOptions: {},
    hostOptions: { ...defaultHostOptions, stepDelayMs: 0 },
    signal: new AbortController().signal,
    pause: new PauseGate(),
    onEvent: event => { events.push(event); },
    onSurveyCreated: () => undefined,
    onLog: () => undefined,
    onPausedChanged: () => undefined,
  }).then(outcome => ({ outcome, events }));
}

describe("running one test of a suite", () => {
  it("reports one test, and nothing about the tests it did not run", async() => {
    const { outcome } = await runOne(["two"]);
    expect(outcome.result.tests.map(test => test.name)).toEqual(["two"]);
    expect(outcome.result.summary.total, "the run holds one test").toBe(1);
    expect(outcome.result.summary.passed).toBe(1);
    expect(outcome.result.summary.skipped, "nothing was skipped: the others are not in this run").toBe(0);
    expect(outcome.result.status).toBe("passed");
  });

  it("keeps the original suite index, so the JSON links still address the right node", async() => {
    const { events } = await runOne(["two"]);
    const started = events.filter(event => event.type === "testStarted");
    expect(started.length).toBe(1);
    expect((started[0] as any).testIndex, "the second entry of the suite is still tests[1]").toBe(1);
    const planned = events.filter(event => event.type === "runStarted")[0] as any;
    expect(planned.plannedTestCount).toBe(1);
    expect(planned.plannedTestIndexes).toEqual([1]);
  });

  it("leaves the suite document untouched", async() => {
    const before = JSON.stringify(suite);
    await runOne(["two"]);
    expect(JSON.stringify(suite), "the run never rewrites what the Tests tab holds").toBe(before);
    expect((suite.tests[0] as any).disabled, "an unselected test is not flagged as disabled").toBe(undefined);
  });

  it("runs the whole suite when nothing is selected", async() => {
    const { outcome, events } = await runOne(undefined);
    expect(outcome.result.summary.total).toBe(3);
    const planned = events.filter(event => event.type === "runStarted")[0] as any;
    expect(planned.plannedTestIndexes).toEqual([0, 1, 2]);
  });
});
