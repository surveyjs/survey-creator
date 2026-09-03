import type { SurveyModel } from "survey-core";
import type {
  ISurveyTestOptions, ISurveyTests, ISurveyTestsResult, ISurveyTestStep,
} from "survey-core/tester";
import type { ConsoleRow } from "../core/consoleLog";
import type { HostOptions, RunMode } from "../core/hostOptions";
import type { LiveRun, LiveTest } from "../core/liveRun";

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

// ---- what the widget root hands the runner ---------------------------------------------------------
//
// These moved here from model/runnerHost.ts, which is gone: prompt 03 folded the host contract into
// ITesterHost (model/testerHost.ts), and one host contract is the point - a screen the widget builds
// for its own runner is wiring, not a second contract for a host to implement. They carry the ITester
// prefix now, which is the rename creator-tester-notes.md entry 8 held for this prompt.

// What "New test" needs that only the widget knows, which is one thing: how to create the test. The
// validation is createTest's own, and the form shows the string it returns rather than re-implementing
// what it checks. Everything else a test carries is asked for on the recorder screen.
export interface ITesterNewTestParams {
  name: string;
  description?: string;
  // "", a name from the suite's starts, or the inline-start marker for the state on screen.
  start?: string;
  optionsText?: string;
  variablesText?: string;
}

// One representation of a test in the whole widget: this row. The checkbox that selects it, the dot
// that says how it ended, the steps it ran and the assertion that failed are the same object, not four
// views of it spread over three panes.
//
// TesterTestRowModel is what actually holds a row. This is the flat description of one that the verbs
// are handed - see TesterTestRowModel.toPanelTest - so that the code which edits the suite reads the
// test it is editing rather than a model with a list and two containers hanging off it.
export interface ITesterPanelTest {
  name: string;
  // Position in the suite document, which is what "in the case" addresses.
  index: number;
  disabled: boolean;
  // A test the suite gave no name. It has no address but its position, so "name" above is a label put
  // there to have something to draw, and the four verbs below say so.
  unnamed?: boolean;
  // The steps the case holds, as the document holds them. The row lists all of them, run or not: what a
  // run produced is laid over this by position and never replaces it.
  steps: Array<ISurveyTestStep>;
  live?: LiveTest;
}

// What the row can do to the test it is about. Every one of them takes the row rather than a name: a
// test with no name has no name to be addressed by, and its position in the document is the only thing
// that identifies it. Everywhere a name exists, it is the name that is resolved against the suite.
export interface ITesterRowActions {
  // The two every row has. Running one test alone goes through the same run engine and the same
  // transcript a suite run takes, and it is watched the way the Run button's picker says: the row
  // never carries a mode of its own, so there is one choice of UI-or-Console on the screen and pressing
  // a row's run button cannot silently disagree with it.
  onRunOne(test: ITesterPanelTest): void;
  // Running a part of it: every step in front of "to", and no further. It is the same engine and the
  // same transcript again - see TesterRunnerModel.runSteps - and the step list in the row's expansion
  // is where it is asked for.
  onRunTo(test: ITesterPanelTest, to: number): void;
  // Where the case is read as JSON: the widget's own JSON screen, which is the journey the row's old
  // "in the case" link made.
  onJson(test: ITesterPanelTest): void;
  // The three that edit the suite. A verb that is not given is not rendered, which is what keeps a row
  // that only reads a test from growing a way to rewrite one - and it is why the rename and the delete
  // could arrive with the recorder's document editing without this shape changing. They are given now;
  // the confirmation a delete deserves is the view's, because a model cannot ask a question.
  onEdit?(test: ITesterPanelTest): void;
  onDelete?(test: ITesterPanelTest): void;
  // A message means "refused, and why". The input keeps the focus and the text.
  onRename?(test: ITesterPanelTest, next: string): string | undefined;
  // Why "Edit" is not offered for this row, when it is not. A test without a name cannot be recorded
  // into, because the session is addressed by name.
  editDisabledReason?(test: ITesterPanelTest): string | undefined;
}

export interface ITesterNewTestSupport {
  onCreate(params: ITesterNewTestParams): string | undefined;
}

// Everything the panel is given beyond the run it is showing. Row actions are not optional - a row
// nothing can be done from is not a row - and the rest is rendered only where it is given.
export interface ITesterPanelExtras {
  rowActions: ITesterRowActions;
  newTest?: ITesterNewTestSupport;
  // The JSON screen is never blocked, so a blocked banner here carries the way to it.
  onFixJson?(): void;
  // The host options, as a form in a popup. Given only where there is a settings model to open.
  onSettings?(): void;
  // What the last transition did - a session closed, a test deleted. One line, dismissable.
  notice?: string;
  onDismissNotice?(): void;
  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // The test whose Edit is waiting for a run to unwind, so that row's verb can say "Stopping…".
  editPendingName?: string;
}

// What the widget root tells the runner about the world the runner does not own: the documents, the
// options the settings form holds, and the two reveal journeys into the JSON. It is pushed in whenever
// any of it changes, because every member of it closes over state that lives above the model.
export interface ITesterRunnerEnvironment {
  suite?: any;
  canRun: boolean;
  blockedReason?: string;
  // Worth saying before the run without preventing it.
  runNotice?: string;
  mode: RunMode;
  onMode(next: RunMode): void;
  activeMode: RunMode;
  hostOptions: HostOptions;
  onHostOptions(next: HostOptions): void;
  // undefined means every test: nothing is disabled in the suite the runner is handed.
  selected?: Array<string>;
  onSelected(next: Array<string> | undefined): void;
  onRun(selection: Array<string> | undefined): void;
  onRevealCase(path: string): void;
  onRevealSurvey(jsonPath: string): void;
  // The full log takes over the left pane. A console run already reads there, so the toggle is left out
  // rather than shown as something that would do nothing.
  canToggleLog: boolean;
  extras: ITesterPanelExtras;
}
