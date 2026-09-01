import type {
  ISurveyTestCheckResult, ISurveyTestIssue, ISurveyTestOptions, ISurveyTestsResult, ISurveyTestStart,
  SurveyTestExecutionEvent, SurveyTestStatus,
} from "survey-core/tester";
import { getStepCommandName, getStepTargets } from "./stepInfo";

// The tree the Tests tab renders, grown from the lifecycle events so that the presentation is
// immediate, and reconciled with the resolved result when the run ends. The result stays canonical:
// where the two disagree, that is a bug in this host or in the tester and it is shown, not hidden.

export type RunPhase = "idle" | "running" | "paused" | "canceling" | "done";
export type LiveStatus = SurveyTestStatus | "running";

export interface LiveStep {
  index: number;
  name?: string;
  command: string;
  targets: Array<string>;
  currentTarget?: string;
  status: LiveStatus;
  checks: Array<ISurveyTestCheckResult>;
  issues: Array<ISurveyTestIssue>;
}

export interface LiveTest {
  index?: number;
  name: string;
  status: LiveStatus;
  // Wall clock of the host, stamped from the same atMs the console rows carry. The tester reports no
  // duration, so the row of the Tests panel reads it from here rather than from a result field.
  startedMs?: number;
  durationMs?: number;
  steps: Array<LiveStep>;
  issues: Array<ISurveyTestIssue>;
  options?: ISurveyTestOptions;
  variables?: { [name: string]: any };
  start?: ISurveyTestStart;
  startName?: string;
  hasModel?: boolean;
}

export interface LiveRun {
  version: number;
  phase: RunPhase;
  suiteName?: string;
  // Every test of the suite produces a result, a disabled one included: it is reported as skipped.
  plannedTests: number;
  tests: Array<LiveTest>;
  issues: Array<ISurveyTestIssue>;
  summary?: ISurveyTestsResult["summary"];
  status?: SurveyTestStatus;
  currentTestIndex?: number;
  currentStepIndex?: number;
  currentTarget?: string;
  elapsedMs: number;
  // Disagreements between the event stream and the resolved result.
  mismatches: Array<string>;
}

export function createEmptyRun(): LiveRun {
  return { version: 0, phase: "idle", plannedTests: 0, tests: [], issues: [], elapsedMs: 0, mismatches: [] };
}

function findTest(run: LiveRun, testIndex: number | undefined): LiveTest | undefined {
  if (testIndex === undefined) return run.tests[run.tests.length - 1];
  return run.tests.find(test => test.index === testIndex);
}

function findStep(run: LiveRun, testIndex: number | undefined, stepIndex: number): LiveStep | undefined {
  const test = findTest(run, testIndex);
  if (!test) return undefined;
  return test.steps.find(step => step.index === stepIndex);
}

// Mutates the draft in place; the hook clones the root before it hands it to React.
//
// `continued` says that this run is a segment carrying on from where an earlier one stopped, on the model
// that earlier one built (see segmentRun.ts). The events arrive already numbered in the document's
// positions, so only two things about them differ: the test already has a row and must not get a second
// one, and its verdict covers the steps of every segment rather than of this one alone.
export function applyEvent(run: LiveRun, event: SurveyTestExecutionEvent, continued?: boolean): void {
  switch(event.type) {
    case "runStarted": {
      run.suiteName = !!event.tests ? event.tests.name : undefined;
      // The runner says how many results this run is going to produce: with a selection in force that
      // is not the size of the suite, and a host must not have to work it out for itself.
      run.plannedTests = event.plannedTestCount;
      break;
    }
    case "testStarted": {
      // A continuation runs the same test again, from further along. The row it already has holds the
      // steps of the earlier segments, and those steps are the record of what got the model here.
      const existing = !continued ? undefined : findTest(run, event.testIndex);
      if (!!existing) existing.status = "running";
      else {
        run.tests.push({
          index: event.testIndex,
          name: !!event.test && typeof event.test.name === "string" ? event.test.name : "(unnamed)",
          status: "running",
          steps: [],
          issues: [],
        });
      }
      run.currentTestIndex = event.testIndex;
      run.currentStepIndex = undefined;
      run.currentTarget = undefined;
      break;
    }
    case "surveyCreated": {
      const test = findTest(run, event.testIndex);
      if (!!test) test.hasModel = true;
      break;
    }
    case "stepStarted": {
      const test = findTest(run, event.testIndex);
      if (!test) break;
      const command = getStepCommandName(event.step);
      const fresh: LiveStep = {
        index: event.stepIndex,
        name: !!event.step && typeof event.step.name === "string" ? event.step.name : undefined,
        command: command,
        targets: getStepTargets(event.step, command),
        status: "running",
        checks: [],
        issues: [],
      };
      // A step runs once per run, so this is a position the row does not hold yet - except when a
      // segment re-runs one, and then what it produces now replaces what it produced then.
      const at = test.steps.findIndex(step => step.index === event.stepIndex);
      if (at < 0) test.steps.push(fresh);
      else test.steps[at] = fresh;
      run.currentStepIndex = event.stepIndex;
      run.currentTarget = undefined;
      break;
    }
    case "targetStarted": {
      const step = findStep(run, event.testIndex, event.stepIndex);
      if (!!step) step.currentTarget = event.target;
      run.currentTarget = event.target;
      break;
    }
    case "targetCompleted": {
      const step = findStep(run, event.testIndex, event.stepIndex);
      if (!!step) step.currentTarget = undefined;
      run.currentTarget = undefined;
      break;
    }
    case "checkCompleted": {
      const step = findStep(run, event.testIndex, event.stepIndex);
      if (!!step) step.checks.push(event.result);
      break;
    }
    case "issueAdded": {
      if (event.stepIndex !== undefined) {
        const step = findStep(run, event.testIndex, event.stepIndex);
        if (!!step) {
          step.issues.push(event.issue);
          break;
        }
      }
      const test = findTest(run, event.testIndex);
      // An issue of the suite itself carries no test index: a malformed suite, a missing definition.
      if (event.testIndex === undefined && !run.tests.length) run.issues.push(event.issue);
      else if (!!test) test.issues.push(event.issue);
      else run.issues.push(event.issue);
      break;
    }
    case "stepCompleted": {
      const step = findStep(run, event.testIndex, event.stepIndex);
      if (!!step) {
        // The step result is authoritative for what the step produced.
        step.status = event.result.status;
        step.checks = event.result.checks.slice();
        step.issues = event.result.issues.slice();
        step.currentTarget = undefined;
        step.command = event.result.command || step.command;
      }
      run.currentTarget = undefined;
      break;
    }
    case "testCompleted": {
      const test = findTest(run, event.testIndex);
      if (!!test) {
        test.status = !continued ? event.result.status : rollUpStatus(test, event.result.status);
        test.options = event.result.options;
        test.variables = event.result.variables;
        // A continuation carries no start - the model it ran on already had one applied - so the row
        // keeps the one the segment that built the model reported.
        if (!continued || event.result.start !== undefined) test.start = event.result.start;
        if (!continued || event.result.startName !== undefined) test.startName = event.result.startName;
        test.issues = event.result.issues.slice();
      }
      run.currentStepIndex = undefined;
      run.currentTarget = undefined;
      break;
    }
    case "runCompleted": {
      run.status = event.result.status;
      run.summary = event.result.summary;
      run.issues = event.result.issues.slice();
      break;
    }
  }
}

// A test that ran in pieces is as good as the worst piece: a segment that passes cannot undo the failing
// check an earlier one recorded, because the step that failed is still in the row and still says so.
function rollUpStatus(test: LiveTest, reported: SurveyTestStatus): SurveyTestStatus {
  if (reported === "canceled" || reported === "skipped") return reported;
  if (test.steps.some(step => step.status === "error")) return "error";
  if (test.steps.some(step => step.status === "failed")) return "failed";
  return reported;
}

// Rule of the host: the resolved result is the canonical one. A disagreement is reported instead of
// being smoothed over, because it can only mean that this tree is built wrongly.
export function reconcile(run: LiveRun, result: ISurveyTestsResult): Array<string> {
  const problems: Array<string> = [];
  if (run.tests.length !== result.tests.length) {
    problems.push("the event stream produced " + run.tests.length + " test rows, the result holds " +
      result.tests.length);
  }
  result.tests.forEach((testResult, i) => {
    const live = run.tests[i];
    if (!live) return;
    if (live.status !== testResult.status) {
      problems.push("test \"" + testResult.name + "\": the events said " + live.status +
        ", the result says " + testResult.status);
    }
    if (live.steps.length !== testResult.steps.length) {
      problems.push("test \"" + testResult.name + "\": " + live.steps.length + " step rows against " +
        testResult.steps.length + " step results");
    }
  });
  return problems;
}

// The same rule for a segment, which cannot be reconciled by the one above: the tree holds the rows of
// every test that has run since it was built, and the result of a segment holds exactly one - the slice
// this run executed. So the question is asked of that slice alone.
export function reconcileSegment(
  run: LiveRun, result: ISurveyTestsResult, segment: { testIndex: number, testName: string, from: number },
): Array<string> {
  const testResult = result.tests[0];
  if (!testResult || result.tests.length !== 1) {
    return ["the run of a part of \"" + segment.testName + "\" produced " + result.tests.length +
      " test results, and a segment is one test"];
  }
  const live = run.tests.find(test => test.index === segment.testIndex);
  if (!live) return ["the tree holds no row for \"" + segment.testName + "\", which is the test that ran"];
  const problems: Array<string> = [];
  if (live.status !== testResult.status && !isWorse(live.status, testResult.status)) {
    problems.push("test \"" + testResult.name + "\": the events said " + live.status +
      ", the result says " + testResult.status);
  }
  const ran = live.steps.filter(step => step.index >= segment.from);
  if (ran.length !== testResult.steps.length) {
    problems.push("test \"" + testResult.name + "\": " + ran.length + " step rows from step " +
      segment.from + " on, against " + testResult.steps.length + " step results");
  }
  return problems;
}

// The row of a test run in pieces reports the worst of them and the result reports this one, so those two
// disagreeing is the feature rather than a bug to report - but only in that direction.
function isWorse(live: LiveStatus, reported: SurveyTestStatus): boolean {
  const order: Array<string> = ["passed", "skipped", "canceled", "failed", "error"];
  return order.indexOf(live) > order.indexOf(reported);
}
