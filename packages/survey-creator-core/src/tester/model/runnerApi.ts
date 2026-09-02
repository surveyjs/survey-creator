import type { SurveyModel } from "survey-core";
import type { ISurveyTestOptions, ISurveyTests, ISurveyTestsResult } from "survey-core/tester";
import type { ConsoleRow } from "../core/consoleLog";
import type { HostOptions } from "../core/hostOptions";
import type { LiveRun } from "../core/liveRun";

// What a run is asked for and what it reports back, said without a framework.
//
// These four shapes used to live in store/useRunner.ts, which is a React hook - so the model layer
// could not name them and every view had to. They moved here whole: useRunner still re-exports them,
// TesterRunnerModel implements RunnerApi, and a host that runs the suite some other way has one
// interface to satisfy rather than a hook to reimplement.

export interface StartParams {
  surveyJson: any;
  suite: ISurveyTests;
  testOptions: ISurveyTestOptions;
  hostOptions: HostOptions;
  // undefined runs every test; a list runs exactly those and leaves the rest out of the run. They are
  // not disabled and they are not reported: a run of one test says one test.
  selectedTestNames?: Array<string>;
}

// Running one test up to a step of it and no further. "to" is the step the run stops in front of, so it
// is the step that runs next and never one that ran: running to step 5 and then to step 3 is the second
// half of the rule, and it starts from the first step because the model cannot be un-run.
export interface StepRunParams {
  surveyJson: any;
  suite: ISurveyTests;
  testOptions: ISurveyTestOptions;
  hostOptions: HostOptions;
  testIndex: number;
  testName: string;
  to: number;
}

// Where the last run of a part of a test stopped, and whether the model that got it there is still held.
// It is the whole of what the step list draws its cursor from.
export interface StepCursor {
  testName: string;
  testIndex: number;
  // The step the next run starts at: every step before it has run. It is a position between steps, so it
  // runs 0..count.
  at: number;
  count: number;
  // The model those steps ran on is being kept, so a run to a later step carries on from here and
  // executes only what lies between. Without it the next run starts from the first step.
  held: boolean;
  // What the last run of this test executed, for the line the panel prints.
  ran?: { from: number, to: number };
  // Why the model was not kept, when it was not.
  dropped?: string;
}

export interface RunnerApi {
  run: LiveRun;
  rows: Array<ConsoleRow>;
  survey?: SurveyModel;
  isRunning: boolean;
  isPaused: boolean;
  result?: ISurveyTestsResult;
  // Absent until a part of a test has been run, and dropped by a run of whole tests: a suite run rebuilds
  // every model it touches, so there is nothing left to continue from.
  cursor?: StepCursor;
  start(params: StartParams): void;
  runSteps(params: StepRunParams): void;
  stop(): void;
  resume(): void;
  clearConsole(): void;
  getTranscript(): string;
}
