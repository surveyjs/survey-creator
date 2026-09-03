import type { SurveyModel } from "survey-core";
import { SurveyTestRunner } from "survey-core/tester";
import type {
  ISurveyTestIssue, ISurveyTestOptions, ISurveyTestResult, ISurveyTests, ISurveyTestStep,
} from "survey-core/tester";
import { createSurveyWithServerValidation } from "../core/createSurvey";
import { applyElementIdPrefix, TESTED_MODEL_ID_PREFIX } from "../core/elementIds";
import { toRunnerOptions } from "../core/hostOptions";

// The recorder never constructs a SurveyModel. Every model it records on, and every expected value it
// writes, comes out of a run of the tester itself: a one-test suite holding the steps recorded so far.
//
// Two things follow from that and both are the point. The start data, the variables, the locale, the
// seed, clearInvisibleValues and the pinned clock are applied by the same code that will apply them when
// the case runs for real - so the recording cannot be made against a survey the case does not describe.
// And replaying a prefix is not a second implementation of what a step means; it is the implementation.

// A prefix of zero steps is the ordinary state of a new recording, and the tester runs it: an empty
// "steps" array is a valid test that builds the model, applies the options, the variables and the start
// state and hands the model to surveyCreated without emitting a single step event.

export interface SilentRunRequest {
  surveyJson: any;
  // The parsed suite, for its options, variables, starts and stubs: a test may reference a start by
  // name, and the functions and the urls the survey asks about are answered by the suite.
  suite: any;
  test: any;
  steps: Array<ISurveyTestStep>;
  testOptions: ISurveyTestOptions;
  attachServerValidation: boolean;
  signal?: AbortSignal;
}

export interface SilentRunOutcome {
  survey?: SurveyModel;
  testResult?: ISurveyTestResult;
  suiteIssues: Array<ISurveyTestIssue>;
  error?: string;
}

export async function silentRun(request: SilentRunRequest): Promise<SilentRunOutcome> {
  const suite = buildOneTestSuite(request);
  let survey: SurveyModel | undefined = undefined;
  try {
    // Zero delay, no console, no highlight: the pace of this run is nobody's business. A failing check in
    // a replayed prefix is information for the author, never a reason to stop, so stopOnFirstFailure is
    // forced off here and in the test's own options - a test may have set it.
    const runner = new SurveyTestRunner(request.surveyJson, suite,
      toRunnerOptions({ ...request.testOptions, stopOnFirstFailure: false }));
    const result = await runner.run({
      createSurvey: request.attachServerValidation ? createSurveyWithServerValidation : undefined,
      signal: request.signal,
      onEvent: event => {
        // The model of the test, live. context.teardown() detaches the tester's own diagnostics and
        // leaves the model usable with its clock still pinned, which is what lets the recorder go on
        // driving it (NOTES-tester-contract.md section 5).
        // The recorder goes on driving this model after the replay and the form pane renders it, so it
        // needs the prefix as much as a run's does - and the same one, because it stands in the same
        // place. See elementIds.ts.
        if (event.type === "surveyCreated") {
          applyElementIdPrefix(event.survey, TESTED_MODEL_ID_PREFIX);
          survey = event.survey;
        }
      },
    });
    return {
      survey: survey,
      testResult: result.tests.length ? result.tests[0] : undefined,
      suiteIssues: result.issues,
    };
  } catch(error) {
    // run() reports everything as an issue instead of rejecting, so this is a bug in this application.
    return {
      survey: survey,
      suiteIssues: [],
      error: !!error && (error as any).message ? (error as any).message : String(error),
    };
  }
}

function buildOneTestSuite(request: SilentRunRequest): ISurveyTests {
  const suite: any = request.suite && typeof request.suite === "object" ? request.suite : {};
  const test: any = { ...(request.test || {}) };
  delete test.disabled;
  test.options = { ...(test.options || {}), stopOnFirstFailure: false };
  test.steps = request.steps;
  if (typeof test.name !== "string" || !test.name) test.name = "(recording)";
  const res: any = { name: suite.name, tests: [test] };
  if (!!suite.options) res.options = suite.options;
  if (!!suite.variables) res.variables = suite.variables;
  if (!!suite.starts) res.starts = suite.starts;
  // What the survey takes from outside itself travels with the case, exactly like the starts above it:
  // a recording session drives the same model the run will, and a model whose asynchronous functions
  // answer nothing and whose choices never load is a model of a different survey.
  if (!!suite.functions) res.functions = suite.functions;
  if (!!suite.web) res.web = suite.web;
  return res as ISurveyTests;
}

// The issues of a replay that mean "the model is not in the state the case describes". A failing check is
// not one of them: rewinding is usually done because something stopped holding, and the author is the one
// who decides what to do about it.
export function getBlockingIssues(outcome: SilentRunOutcome): Array<ISurveyTestIssue> {
  const res: Array<ISurveyTestIssue> = [];
  outcome.suiteIssues.forEach(issue => { if (issue.severity === "error") res.push(issue); });
  const test = outcome.testResult;
  if (!test) return res;
  test.issues.forEach(issue => { if (issue.severity === "error") res.push(issue); });
  test.steps.forEach(step => {
    step.issues.forEach(issue => { if (issue.severity === "error") res.push(issue); });
  });
  return res;
}
