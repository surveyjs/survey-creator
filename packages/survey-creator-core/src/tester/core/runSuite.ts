import type { SurveyModel } from "survey-core";
import { SurveyTestRunner } from "survey-core/tester";
import type {
  ISurveyTestOptions, ISurveyTests, ISurveyTestsResult, SurveyTestExecutionEvent, SurveyTestFilter,
  SurveyTestModelFactory,
} from "survey-core/tester";
import { testerText } from "../localization";
import { createSurveyWithServerValidation } from "./createSurvey";
import { applyElementIdPrefix, TESTED_MODEL_ID_PREFIX } from "./elementIds";
import { delay, PauseGate } from "./delay";
import type { ConsoleLevel } from "./consoleLog";
import type { HostOptions } from "./hostOptions";
import { toRunnerOptions } from "./hostOptions";

// The whole contact surface with the tester. Everything a UI needs while a run progresses arrives
// through onEvent; everything this host adds - the pace, the pause, the console - lives here and
// nowhere inside survey-core.

export interface RunSuiteRequest {
  surveyJson: any;
  // The suite exactly as the Tests tab holds it: it is never copied or rewritten to run a subset of its
  // tests. Running a part of one test is the one thing that does rewrite it - a slice of one "steps"
  // array, built by segmentRun.ts, because the tester has no step filter to ask instead.
  suite: ISurveyTests;
  // Which of its entries this run holds. Undefined runs every one of them.
  testFilter?: SurveyTestFilter;
  // The model this run happens on, when the host has one to give: a segment that continues where the
  // last one stopped runs on the model that got the case there. Left out, the host's own choice stands -
  // the demo server-validation factory, or the tester's own creation.
  createSurvey?: SurveyTestModelFactory;
  testOptions: ISurveyTestOptions;
  hostOptions: HostOptions;
  signal: AbortSignal;
  pause: PauseGate;
  onEvent(event: SurveyTestExecutionEvent, atMs: number): void;
  onSurveyCreated(survey: SurveyModel): void;
  onLog(level: ConsoleLevel, text: string, detail?: string): void;
  onPausedChanged(paused: boolean): void;
}

export interface RunSuiteOutcome {
  result: ISurveyTestsResult;
  elapsedMs: number;
}

export async function runSuite(request: RunSuiteRequest): Promise<RunSuiteOutcome> {
  const { hostOptions, signal, pause } = request;
  const startedAt = performance.now();
  const at = (): number => performance.now() - startedAt;

  const observer = async(event: SurveyTestExecutionEvent): Promise<void> => {
    // The observer never throws. A callback that throws or rejects is reported by the runner as an
    // unexpectedError issue of the step, the test or the suite - it would blame the case for a bug of
    // this application, and it would end a run that had nothing wrong with it.
    try {
      request.onEvent(event, at());
      if (event.type === "surveyCreated") {
        // Before the pane is handed the model, because that is what renders it. Whoever built it - the
        // tester's own creation, the demo factory, or the held model of the previous segment - it is the
        // one that is about to be on screen, so it is the one that carries the prefix. See elementIds.ts.
        applyElementIdPrefix(event.survey, TESTED_MODEL_ID_PREFIX);
        request.onSurveyCreated(event.survey);
      }
      if (event.type === "checkCompleted" && !event.result.passed && hostOptions.pauseOnFailure) {
        request.onLog("warn", testerText("run.paused"));
        request.onPausedChanged(true);
        await pause.hold(signal);
        request.onPausedChanged(false);
      }
      const ms = hostOptions.stepDelayMs;
      if (ms > 0 && shouldDelayOn(event, hostOptions)) {
        // The runner waits exactly here: this is the mechanism, and there is no delay option inside
        // the tester to reach for instead.
        await delay(ms, signal);
      }
    } catch(error) {
      request.onLog("error", testerText("run.observerFailed", describeError(error)),
        testerText("run.observerFailedDetail"));
    }
  };

  const runner = new SurveyTestRunner(request.surveyJson, request.suite, toRunnerOptions(request.testOptions));
  const result = await runner.run({
    // Off by default: with no factory the tester uses its own, which is the documented two-step
    // creation. The demo factory is the only way to install an onServerValidateQuestions handler, and
    // a model the caller hands over comes ahead of both - it already carries whatever built it.
    createSurvey: request.createSurvey ||
      (hostOptions.attachServerValidation ? createSurveyWithServerValidation : undefined),
    onEvent: observer,
    signal: signal,
    testFilter: request.testFilter,
  });
  return { result: result, elapsedMs: at() };
}

function shouldDelayOn(event: SurveyTestExecutionEvent, options: HostOptions): boolean {
  switch(event.type) {
    // Always: it is the coarsest granularity and every finer one includes it.
    case "stepStarted": return true;
    case "targetStarted": return options.delayGranularity !== "step";
    case "checkCompleted": return options.delayGranularity === "check";
    default: return false;
  }
}

export function describeError(error: any): string {
  if (!error) return String(error);
  return typeof error.message === "string" ? error.message : String(error);
}
