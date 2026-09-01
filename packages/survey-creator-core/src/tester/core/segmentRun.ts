import type {
  ISurveyTestCheckResult, ISurveyTestIssue, ISurveyTestOptions, ISurveyTestResult, ISurveyTests,
  ISurveyTestsResult, ISurveyTestStep, ISurveyTestStepResult, SurveyTestExecutionEvent,
} from "survey-core/tester";
import { getSuiteTests } from "./stepInfo";

// Running a part of one test - "everything before step 5, and no further".
//
// The tester runs a case whole: it has no step filter and no cursor inside it. What it does have is
// everything a host needs to build one out of the run it already offers - a filter that says which test
// runs, a factory that says which model it runs on, and a step list it reads off the suite it is handed.
// A segment is exactly that: the suite document with one test's "steps" replaced by the slice this run
// holds, filtered down to that one test.
//
// Three rules make the result honest, and they are the whole of this module.
//
// 1. The document is what the run reports about. The suite handed to the runner keeps every test in its
//    own position, so testIndex, "tests[2].steps[4]" and the row of the tree mean what they mean in the
//    Tests JSON tab. Only the one test's "steps" array differs, and only for the length of the run.
//
// 2. A continuation applies no start. Steps 0..from-1 already ran on the model being continued and the
//    start state was applied when it was built; applying it again would put the answers back to what they
//    were before the first step. So a segment that begins anywhere but at 0 carries no "start".
//
// 3. What the tester numbers from the slice is numbered back. Its step indices count from the first step
//    of the slice, so every index the events and the result carry is shifted by "from" before this
//    application sees it - the console, the tree, the "in the case" links and the traces inside a check
//    then all speak the document's numbering, and nothing downstream has to know a segment ran.

export interface StepSegment {
  // Where the test sits in the document. The suite is not re-ordered to run a segment, so this is the
  // index the events carry and the index "tests[i]" means.
  testIndex: number;
  testName: string;
  // The first step of the case this run executes.
  from: number;
  // Exclusive: the step the run stops in front of. It is the step that runs next, not one that ran.
  to: number;
  // How many steps the case holds, so "to" can be read as "of how many".
  count: number;
}

// eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
// "steps 3–4", "step 3", "no step". Said everywhere a part-run is reported - the console line, the
// panel's own line - so the two never describe the same run differently.
export function describeSegment(segment: { from: number, to: number }): string {
  const last = segment.to - 1;
  if (segment.to <= segment.from) return "no step";
  if (last === segment.from) return "step " + segment.from;
  return "steps " + segment.from + "–" + last; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
}

export function getSegmentSteps(suite: any, testIndex: number): Array<ISurveyTestStep> {
  const test = getSuiteTests(suite)[testIndex];
  return !!test && Array.isArray(test.steps) ? test.steps : [];
}

// The suite the runner is handed for a segment: the document, with one test holding fewer steps.
export function buildSegmentSuite(suite: any, segment: StepSegment): ISurveyTests {
  const tests = getSuiteTests(suite).map((test, index) => {
    if (index !== segment.testIndex) return test;
    const one: any = { ...(test || {}) };
    one.steps = getSegmentSteps(suite, index).slice(segment.from, segment.to);
    // Rule 2. The start belongs to the model, and a continuation runs on one that already has it.
    if (segment.from > 0) delete one.start;
    return one;
  });
  return { ...(suite || {}), tests: tests } as ISurveyTests;
}

// Rule 3, for the event stream. Everything that carries a step index is shifted; everything else is
// handed on as it arrived - including the event object itself when there is nothing to shift, so a
// segment that begins at the first step costs nothing at all.
export function translateSegmentEvent(event: SurveyTestExecutionEvent, from: number): SurveyTestExecutionEvent {
  if (from <= 0) return event;
  switch(event.type) {
    case "stepStarted":
    case "targetStarted":
    case "targetCompleted":
      return { ...event, stepIndex: event.stepIndex + from };
    case "checkCompleted":
      return { ...event, stepIndex: event.stepIndex + from, result: shiftCheck(event.result, from) };
    case "stepCompleted":
      return { ...event, stepIndex: event.stepIndex + from, result: shiftStep(event.result, from) };
    case "issueAdded":
      return {
        ...event,
        stepIndex: event.stepIndex === undefined ? undefined : event.stepIndex + from,
        issue: shiftIssue(event.issue, from),
      };
    case "testCompleted":
      return { ...event, result: shiftTest(event.result, from) };
    case "runCompleted":
      return { ...event, result: translateSegmentResult(event.result, from) };
    default:
      return event;
  }
}

// Rule 3, for the resolved result - the canonical one, which is reconciled against the tree and written
// into the transcript. It is shifted by the same code the events are.
export function translateSegmentResult(result: ISurveyTestsResult, from: number): ISurveyTestsResult {
  if (from <= 0) return result;
  return {
    ...result,
    tests: result.tests.map(test => shiftTest(test, from)),
    issues: result.issues.map(issue => shiftIssue(issue, from)),
  };
}

function shiftTest(test: ISurveyTestResult, from: number): ISurveyTestResult {
  return {
    ...test,
    steps: test.steps.map(step => shiftStep(step, from)),
    issues: test.issues.map(issue => shiftIssue(issue, from)),
  };
}

function shiftStep(step: ISurveyTestStepResult, from: number): ISurveyTestStepResult {
  return {
    ...step,
    index: step.index + from,
    checks: step.checks.map(check => shiftCheck(check, from)),
    issues: step.issues.map(issue => shiftIssue(issue, from)),
  };
}

// A check result names the step a trigger fired in and the step a value was cleared in. They are steps of
// this run like any other, so they are shifted too: "fired in step 0" about the fourth step of a case is
// a lie that reads as a UI glitch.
function shiftCheck(check: ISurveyTestCheckResult, from: number): ISurveyTestCheckResult {
  const details = shiftDetails(check.details, from);
  return details === check.details ? check : { ...check, details: details };
}

function shiftDetails(details: any, from: number): any {
  if (!details || typeof details !== "object") return details;
  const res: any = { ...details };
  let touched = false;
  if (Array.isArray(details.triggers)) {
    res.triggers = details.triggers.map((trace: any) => shiftStepIndex(trace, from));
    touched = true;
  }
  if (!!details.blockedBy && typeof details.blockedBy === "object") {
    res.blockedBy = shiftStepIndex(details.blockedBy, from);
    touched = true;
  }
  if (!!details.clearedBy && typeof details.clearedBy === "object") {
    res.clearedBy = shiftStepIndex(details.clearedBy, from);
    touched = true;
  }
  return touched ? res : details;
}

function shiftStepIndex(record: any, from: number): any {
  if (!record || typeof record.stepIndex !== "number") return record;
  return { ...record, stepIndex: record.stepIndex + from };
}

// The node of the case document an issue belongs to. The tester builds it as "tests[i]" plus
// ".steps[j]" for the step that was running, and j counts inside the slice - so the one number in the
// path moves with everything else, and the "in the case" link lands on the step a person is reading.
export function shiftIssue(issue: ISurveyTestIssue, from: number): ISurveyTestIssue {
  if (from <= 0) return issue;
  const res: ISurveyTestIssue = { ...issue };
  if (typeof issue.step === "number") res.step = issue.step + from;
  if (typeof issue.path === "string") res.path = shiftPath(issue.path, from);
  return res;
}

function shiftPath(path: string, from: number): string {
  return path.replace(/\.steps\[(\d+)\]/, (_all, digits) => ".steps[" + (Number(digits) + from) + "]");
}

// What has to still be true for the model an earlier segment left behind to be worth continuing on: the
// same survey, the same resolved options, the same test, and the same steps in front of the cursor. Any
// of them different and the model is a model of something else, so the next run starts from step 0.
export function segmentSignature(request: {
  surveyJson: any,
  suite: any,
  testIndex: number,
  testName: string,
  testOptions: ISurveyTestOptions,
  attachServerValidation: boolean,
  // How many steps have run on it. The steps beyond that have not touched it and may be edited freely.
  at: number,
}): string {
  const suite: any = request.suite || {};
  const test: any = { ...(getSuiteTests(suite)[request.testIndex] || {}) };
  delete test.steps;
  try {
    return JSON.stringify([
      // The stubs are in here for the same reason the survey JSON is: a model whose function answered
      // 1.25 is not a model of a case that now says 3, however unchanged its steps are.
      request.surveyJson, suite.options, suite.variables, suite.starts, suite.functions, suite.web,
      request.testIndex, request.testName, test,
      getSegmentSteps(suite, request.testIndex).slice(0, request.at),
      request.testOptions, request.attachServerValidation,
    ]);
  } catch{
    // A document that cannot be serialised cannot be compared either, so nothing is continued on it.
    return "";
  }
}
