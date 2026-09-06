// Running a part of one test. The claim under test is the arithmetic a person reads off the step list:
// stopped in front of step 2, asked for step 4, and steps 2 and 3 run - on the model the first run left,
// so what those steps do is done to the state the earlier ones produced. Asked for an earlier step, the
// case starts again from the first one, because a model cannot be un-run.
import { describe, expect, it } from "vitest";
import type { SurveyModel } from "survey-core";
import type { SurveyTestExecutionEvent } from "survey-core/tester";
import { PauseGate } from "../../src/tester/core/delay";
import { defaultHostOptions } from "../../src/tester/core/hostOptions";
import { runSuite } from "../../src/tester/core/runSuite";
import {
  buildSegmentSuite, describeSegment, getSegmentSteps, segmentSignature, shiftIssue,
  translateSegmentEvent, translateSegmentResult,
} from "../../src/tester/core/segmentRun";
import type { StepSegment } from "../../src/tester/core/segmentRun";

const surveyJson = {
  elements: [
    { type: "text", name: "a", title: "A" },
    { type: "text", name: "b", title: "B" },
  ],
};

// Step 3 asserts what step 0 wrote as well as what step 2 wrote: it can only pass on a model that carried
// the first segment's answer forward.
const suite: any = {
  name: "one case, four steps",
  tests: [
    {
      name: "two answers",
      start: { data: { a: "start" } },
      steps: [
        { set: { a: "one" } },
        { expect: { a: { value: "one" } } },
        { set: { b: "two" } },
        { expect: { a: { value: "one" }, b: { value: "two" } } },
      ],
    },
  ],
};

const hostOptions = { ...defaultHostOptions, stepDelayMs: 0, renderSurvey: false, keepLastModel: true };

interface SegmentOutcome {
  ran: Array<number>;
  status: string;
  survey?: SurveyModel;
  events: Array<SurveyTestExecutionEvent>;
}

async function runSegment(from: number, to: number, model?: SurveyModel): Promise<SegmentOutcome> {
  const segment: StepSegment = {
    testIndex: 0, testName: "two answers", from: from, to: to,
    count: getSegmentSteps(suite, 0).length,
  };
  const events: Array<SurveyTestExecutionEvent> = [];
  let survey: SurveyModel | undefined = model;
  const outcome = await runSuite({
    surveyJson: surveyJson,
    suite: buildSegmentSuite(suite, segment),
    testFilter: (_test, testIndex) => testIndex === segment.testIndex,
    createSurvey: !model ? undefined : () => model,
    testOptions: {},
    hostOptions: hostOptions,
    signal: new AbortController().signal,
    pause: new PauseGate(),
    onEvent: event => events.push(translateSegmentEvent(event, from)),
    onSurveyCreated: created => { survey = created; },
    onLog: () => undefined,
    onPausedChanged: () => undefined,
  });
  const result = translateSegmentResult(outcome.result, from);
  const test = result.tests[0];
  return {
    // The positions the steps have in the document, which is what every index this application shows is.
    ran: test.steps.map(step => step.index),
    status: test.status,
    survey: survey,
    events: events,
  };
}

describe("running a part of one test", () => {
  it("carries on where the last run stopped, and runs only what lies between", async() => {
    // Stopped in front of step 2: steps 0 and 1 ran, and nothing else.
    const first = await runSegment(0, 2);
    expect(first.ran).toEqual([0, 1]);
    expect(first.status).toBe("passed");
    expect(first.survey?.getValue("a")).toBe("one");
    expect(first.survey?.getValue("b"), "the second half of the case has run early").toBeUndefined();

    // Asked for the end. Only steps 2 and 3 run, and step 3 asserts what step 0 wrote - so it passes only
    // because this is the same model the first run stopped on.
    const second = await runSegment(2, 4, first.survey);
    expect(second.ran).toEqual([2, 3]);
    expect(second.status).toBe("passed");
    expect(second.survey, "a second model was built for the continuation").toBe(first.survey);
    expect(second.survey?.getValue("b")).toBe("two");

    // The event stream speaks the document's numbering too: nothing downstream has to know a part ran.
    const started = second.events.filter(event => event.type === "stepStarted")
      .map(event => (event as any).stepIndex);
    expect(started).toEqual([2, 3]);
  }, 30000);

  it("starts from the first step when it is asked for an earlier one", async() => {
    const forward = await runSegment(0, 4);
    expect(forward.ran).toEqual([0, 1, 2, 3]);

    // Back to step 2. A model cannot be un-run, so this is a new model and the case replays onto it.
    const back = await runSegment(0, 2);
    expect(back.ran).toEqual([0, 1]);
    expect(back.survey, "the earlier model was continued instead of replaced").not.toBe(forward.survey);
    expect(back.survey?.getValue("b"), "the model kept an answer from a step that has not run").toBeUndefined();
  }, 30000);

  it("applies the start once, to the model that is built for it", async() => {
    // The start writes a="start" and step 0 writes a="one" over it. A continuation that re-applied the
    // start would put "start" back, which is the answer the case has already moved past.
    const first = await runSegment(0, 1);
    expect(first.survey?.getValue("a")).toBe("one");
    const second = await runSegment(1, 2, first.survey);
    expect(second.status, "the start was applied again and undid step 0").toBe("passed");
    expect(second.survey?.getValue("a")).toBe("one");
    expect(buildSegmentSuite(suite, { testIndex: 0, testName: "x", from: 1, to: 2, count: 4 })
      .tests[0].start, "a continuation carries a start").toBeUndefined();
    expect((buildSegmentSuite(suite, { testIndex: 0, testName: "x", from: 0, to: 2, count: 4 })
      .tests[0] as any).start, "the run that builds the model lost the start").toBeTruthy();
  }, 30000);
});

describe("the numbering a segment reports in", () => {
  it("moves every index of the slice back into the document's", () => {
    const issue = shiftIssue(
      { severity: "error", code: "unknownTarget", message: "no", step: 1, path: "tests[2].steps[1]" }, 3);
    expect(issue.step).toBe(4);
    expect(issue.path).toBe("tests[2].steps[4]");

    const shifted: any = translateSegmentEvent({
      type: "checkCompleted", testIndex: 2, stepIndex: 1,
      result: {
        target: "a", check: "value", expected: 1, actual: 2, passed: false,
        details: { triggers: [{ kind: "trigger", stepIndex: 0, triggerType: "setvalue", expression: "x", jsonPath: "p" }] },
      },
    } as SurveyTestExecutionEvent, 3);
    expect(shifted.stepIndex).toBe(4);
    expect(shifted.result.details.triggers[0].stepIndex, "a trace still names the step of the slice").toBe(3);

    // A segment that begins at the first step has nothing to move, and moves nothing.
    const untouched = { type: "stepStarted", testIndex: 0, stepIndex: 2, step: {} } as SurveyTestExecutionEvent;
    expect(translateSegmentEvent(untouched, 0)).toBe(untouched);
  });

  it("says which part ran in the words the console and the panel both use", () => {
    expect(describeSegment({ from: 3, to: 5 })).toBe("steps 3–4"); // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code
    expect(describeSegment({ from: 3, to: 4 })).toBe("step 3");
    expect(describeSegment({ from: 3, to: 3 })).toBe("no step");
  });
});

describe("the model a segment holds", () => {
  const inputs = {
    surveyJson: surveyJson, suite: suite, testIndex: 0, testName: "two answers",
    testOptions: {}, attachServerValidation: false,
  };

  it("is a model of the steps in front of the cursor, and of nothing else", () => {
    const held = segmentSignature({ ...inputs, at: 2 });
    expect(segmentSignature({ ...inputs, at: 2 })).toBe(held);

    // A step beyond the cursor may be edited freely: it has not touched the model.
    const later: any = JSON.parse(JSON.stringify(suite));
    later.tests[0].steps[3] = { expect: { b: { value: "different" } } };
    expect(segmentSignature({ ...inputs, suite: later, at: 2 })).toBe(held);

    // A step in front of it may not: the model is the model of those steps.
    const earlier: any = JSON.parse(JSON.stringify(suite));
    earlier.tests[0].steps[0] = { set: { a: "something else" } };
    expect(segmentSignature({ ...inputs, suite: earlier, at: 2 })).not.toBe(held);

    // Nor may what the survey takes from outside itself: a model whose function answered 1.25 is not a
    // model of a case that now says something else, however unchanged its steps are.
    const stubbed: any = JSON.parse(JSON.stringify(suite));
    stubbed.functions = { getRate: { async: true, result: 1 } };
    expect(segmentSignature({ ...inputs, suite: stubbed, at: 2 })).not.toBe(held);
    const served: any = JSON.parse(JSON.stringify(suite));
    served.web = { "https://api.example.com/countries": { response: [] } };
    expect(segmentSignature({ ...inputs, suite: served, at: 2 })).not.toBe(held);

    // Nor may what the model was built from and configured with.
    expect(segmentSignature({ ...inputs, at: 2, surveyJson: { elements: [] } })).not.toBe(held);
    expect(segmentSignature({ ...inputs, at: 2, testOptions: { locale: "de" } })).not.toBe(held);
    expect(segmentSignature({ ...inputs, at: 2, attachServerValidation: true })).not.toBe(held);
  });
});
