import type { ISurveyTestStep } from "survey-core/tester";
import type { HostOptions, RunMode } from "../core/hostOptions";
import type { LiveTest } from "../core/liveRun";

// Everything the runner model calls out through, and everything the screen around it hands in.
//
// It lives in the model layer because the model is what calls it: the row's Delete verb is an Action on
// TesterTestRowModel.verbs, and the Action's callback has to be able to name what it invokes. The shapes
// themselves are unchanged from the day they were props of TestsPanel - components/TestsPanel.tsx
// re-exports every one of them under the name it had there, so nothing that used them had to move.

// What "New test" needs that only the host knows, which is one thing: how to create the test. The
// validation is createTest's own, and the form shows the string it returns rather than re-implementing
// what it checks. Everything else a test carries is asked for on the recorder screen.
//
// It is declared here rather than in store/useRecorder because the model layer cannot import a React
// hook; useRecorder re-exports it, so there is still exactly one definition of it in the application.
export interface NewTestParams {
  name: string;
  description?: string;
  // "", a name from the suite's starts, or INLINE_START for the state on screen.
  start?: string;
  optionsText?: string;
  variablesText?: string;
}

// One representation of a test in the whole application: this row. The checkbox that selects it, the
// dot that says how it ended, the steps it ran and the assertion that failed are the same object, not
// four views of it spread over three panes.
//
// TesterTestRowModel is what actually holds a row now. This is the flat description of one that the host's
// verbs are still handed - see TesterTestRowModel.toPanelTest - so that a screen which edits the suite reads
// the test it is editing rather than a model with a list and two containers hanging off it.
export interface PanelTest {
  name: string;
  // Position in the suite document, which is what "in the case" addresses.
  index: number;
  disabled: boolean;
  // A test the suite gave no name. It has no address but its position, so "name" above is a label the
  // host put there to have something to draw, and the four verbs below say so.
  unnamed?: boolean;
  // The steps the case holds, as the document holds them. The row lists all of them, run or not: what a
  // run produced is laid over this by position and never replaces it.
  steps: Array<ISurveyTestStep>;
  live?: LiveTest;
}

// What the row can do to the test it is about. Every one of them takes the row rather than a name: a
// test with no name has no name to be addressed by, and its position in the document is the only thing
// that identifies it. Everywhere a name exists, it is the name that is resolved against the suite -
// see rule 3 of the Tests tab.
export interface TestRowActions {
  // The two every row has. Running one test alone goes through the same run engine and the same
  // transcript a suite run takes, and it is watched the way the Run button's picker says: the row
  // never carries a mode of its own, so there is one choice of UI-or-Console on the screen and pressing
  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // a row's ▶ cannot silently disagree with it.
  onRunOne(test: PanelTest): void;
  // Running a part of it: every step in front of "to", and no further. It is the same engine and the
  // same transcript again - see TesterRunnerModel.runSteps - and the step list in the row's expansion
  // is where it is asked for.
  onRunTo(test: PanelTest, to: number): void;
  // Where the case is read as JSON: the Tests tab's own JSON screen, which is the journey the row's old
  // "in the case" link made.
  onJson(test: PanelTest): void;
  // The three that edit the suite. A verb that is not given is not rendered, which is what keeps a row
  // that only reads a test from growing a way to rewrite one.
  onEdit?(test: PanelTest): void;
  onDelete?(test: PanelTest): void;
  // A message means "refused, and why". The input keeps the focus and the text.
  onRename?(test: PanelTest, next: string): string | undefined;
  // Why "Edit" is not offered for this row, when it is not. A test without a name cannot be recorded
  // into, because the session is addressed by name.
  editDisabledReason?(test: PanelTest): string | undefined;
}

export interface NewTestSupport {
  onCreate(params: NewTestParams): string | undefined;
}

// Everything the panel is given beyond the run it is showing. Row actions are not optional - a row
// nothing can be done from is not a row - and the rest is rendered only where it is given.
export interface TestsPanelExtras {
  rowActions: TestRowActions;
  newTest?: NewTestSupport;
  // The JSON screen is never blocked, so a blocked banner here carries the way to it.
  onFixJson?(): void;
  // What the last transition did - a session closed, a test deleted. One line, dismissable.
  notice?: string;
  onDismissNotice?(): void;
}

// What the screen tells the model about the world the model does not own: the documents, the settings
// the Setup tab holds, and the two reveal journeys into the JSON editors. It is pushed in on every
// render, because every member of it closes over state that lives above the model.
export interface RunnerEnvironment {
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
  extras: TestsPanelExtras;
}
