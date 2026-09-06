import { applyEdits, modify } from "jsonc-parser";
import type { FormattingOptions, JSONPath } from "jsonc-parser";
import { SurveyTestCheckCommandName } from "survey-core/tester";
import type { ISurveyTest, ISurveyTestOptions, ISurveyTestStep } from "survey-core/tester";
import { getSuiteTests } from "../core/stepInfo";

// The recorder has no document of its own. Everything it records is written into the Tests JSON buffer at
// once, through jsonc-parser: an author who laid their suite out by hand must not lose it because they
// recorded one step, and reserialising the parsed suite would be one line and would do exactly that.
//
// What survives an edit and what does not is worth being exact about. jsonc-parser rewrites the container
// it edits - the steps array of the one test being recorded into - to the layout below, and touches
// nothing else: the key order of the suite, the other tests, the comments and the whitespace around them
// are the bytes they were.

const FORMATTING: FormattingOptions = { tabSize: 2, insertSpaces: true, eol: "\n" };

function edit(text: string, path: JSONPath, value: any, isArrayInsertion = false): string {
  return applyEdits(text, modify(text, path, value, {
    formattingOptions: FORMATTING,
    isArrayInsertion: isArrayInsertion,
  }));
}

export function findTestIndex(suite: any, testName: string | undefined): number {
  if (!testName) return -1;
  const tests = getSuiteTests(suite);
  for (let i = 0; i < tests.length; i++) {
    if (!!tests[i] && tests[i].name === testName) return i;
  }
  return -1;
}

export function getTestSteps(suite: any, testIndex: number): Array<ISurveyTestStep> {
  const tests = getSuiteTests(suite);
  const test = testIndex >= 0 && testIndex < tests.length ? tests[testIndex] : undefined;
  return !!test && Array.isArray(test.steps) ? test.steps : [];
}

export function insertStep(text: string, testIndex: number, stepIndex: number, step: ISurveyTestStep): string {
  return edit(text, ["tests", testIndex, "steps", stepIndex], step, true);
}

export function replaceStep(text: string, testIndex: number, stepIndex: number, step: ISurveyTestStep): string {
  return edit(text, ["tests", testIndex, "steps", stepIndex], step);
}

export function deleteStep(text: string, testIndex: number, stepIndex: number): string {
  return edit(text, ["tests", testIndex, "steps", stepIndex], undefined);
}

export function deleteStepsFrom(text: string, testIndex: number, stepIndex: number, count: number): string {
  let res = text;
  // Backwards: every removal shifts the indices after it.
  for (let i = count - 1; i >= stepIndex; i--) {
    res = deleteStep(res, testIndex, i);
  }
  return res;
}

export function moveStep(text: string, testIndex: number, from: number, to: number,
  step: ISurveyTestStep): string {
  if (from === to) return text;
  return insertStep(deleteStep(text, testIndex, from), testIndex, to, step);
}

export function setStepName(text: string, testIndex: number, stepIndex: number,
  name: string | undefined): string {
  return edit(text, ["tests", testIndex, "steps", stepIndex, "name"], !!name ? name : undefined);
}

// The test's own options override, written whole: it is a flat object of scalars, so rewriting it is
// rewriting one small container, and "no overrides left" removes the property instead of leaving "{}".
export function setTestOptions(text: string, testIndex: number,
  options: ISurveyTestOptions | undefined): string {
  return edit(text, ["tests", testIndex, "options"], options);
}

export function appendTest(text: string, test: ISurveyTest, suite: any): string {
  return edit(text, ["tests", getSuiteTests(suite).length], test, true);
}

// A recorded command is one step, and a step is exactly one command: "name" is metadata and does not
// count as one (README section 1.1).
export function createCommandStep(command: string, target: string, payload: any,
  name?: string): ISurveyTestStep {
  const step: any = {};
  if (!!name) step.name = name;
  step[command] = { [target]: payload };
  return step as ISurveyTestStep;
}

export function createExpectStep(target: string, checks: { [check: string]: any },
  name?: string): ISurveyTestStep {
  const step: any = {};
  if (!!name) step.name = name;
  // The name of the check command is the tester's, not a word this application spells.
  step[SurveyTestCheckCommandName] = { [target]: checks };
  return step as ISurveyTestStep;
}

// Renaming a test is one edit at tests[i].name and nothing else: the steps, the description, the options
// and every byte around them stay as they were. The name is what a test is addressed by everywhere else
// in this application - the selection, the session, the last run's results - so what has to move with it
// is the caller's question (see the Tests tab) and not something a document edit can answer on its own.
export function setTestName(text: string, testIndex: number, name: string): string {
  return edit(text, ["tests", testIndex, "name"], name);
}

// And deleting one is the same edit with no value. jsonc-parser rewrites the "tests" array it takes the
// element out of and leaves the rest of the suite - the root keys, the starts, the comments, the tests
// around it - the bytes they were.
export function deleteTest(text: string, testIndex: number): string {
  return edit(text, ["tests", testIndex], undefined);
}

// A test carries three things beside its options and its steps: a description, a start, and variable
// overrides. They are siblings of "options" and not members of it - section 4 of the tester README is exact
// about why: options are flat run configuration that merges per key, variables merge per name, and a
// start does not merge at all. One edit at tests[i][field], and undefined takes the field out.
export function setTestField(text: string, testIndex: number, field: string, value: any): string {
  return edit(text, ["tests", testIndex, field], value);
}
