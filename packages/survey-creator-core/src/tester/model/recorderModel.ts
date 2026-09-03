import {
  Action, ActionContainer, Base, ListModel, createDropdownActionModel, property, propertyArray,
} from "survey-core";
import type { SurveyModel } from "survey-core";
import { getSurveyTestCheckDetails, SurveyTestCheckCommandName } from "survey-core/tester";
import type {
  ISurveyTestCheckResult, ISurveyTestIssue, ISurveyTestOptions, SurveyTestPayloadType,
} from "survey-core/tester";
import type { HostOptions } from "../core/hostOptions";
import { defaultTestOptions } from "../core/hostOptions";
import { parseJson } from "../core/json";
import { formatValue, getSuiteTests } from "../core/stepInfo";
import { getSuiteLevelErrors, validateSuite } from "../core/validate";
import { testerText } from "../localization";
import { RecorderCapture } from "../recorder/capture";
import type { CapturedCommand, IgnoredReason } from "../recorder/capture";
import {
  appendTest, createCommandStep, createExpectStep, deleteStep as deleteStepText, deleteStepsFrom,
  findTestIndex, getTestSteps, insertStep, moveStep as moveStepText, replaceStep, setStepName,
  setTestField as setTestFieldText, setTestOptions as setTestOptionsText,
} from "../recorder/caseEdit";
import { getProvisionalExpected, isValidPayload } from "../recorder/checks";
import { ElementRegistry } from "../recorder/elementRegistry";
import { autoStepName, defaultRecorderOptions } from "../recorder/options";
import type { RecorderOptions } from "../recorder/options";
import { getBlockingIssues, silentRun } from "../recorder/silentRun";
import type { SilentRunOutcome } from "../recorder/silentRun";
import { TesterAdornersModel } from "./adornerModel";
import type { ITesterAdornersOwner } from "./adornerModel";
import { clampZoom, canZoomIn, canZoomOut, zoomBy, ZOOM_DEFAULT } from "./zoom";
import type { ITesterNewTestParams } from "./runnerApi";
import { runnerActionBarCss, runnerMenuCss } from "./runnerCss";
import { TesterStepsModel, TESTER_INLINE_START } from "./stepsSurvey";
import type { ITesterStepsOwner, ITesterTestFields, TesterRowState } from "./stepsSurvey";
import type { ITesterRecorderOptions, ITesterRecorderState } from "./testerHost";

// The recording session, as a model.
//
// This is the prototype's useRecorder hook with React taken out of it: useState is @property, useRef is
// a private field, and the cleanup of an effect is dispose(). Nothing else moved. The session owns three
// things and nothing else - which test is being edited, where the cursor sits, and the model the tester
// built for that position - because everything it records goes straight into the suite document.
//
// The rules of PROMPT-recorder.md section 11 that this file is answerable for, each written where it
// lands:
//
//   1. The recorder never builds a SurveyModel. Every model comes from a silent run of the tester over
//      a one-test suite holding steps.slice(0, cursor) - see replay(). An empty test is a valid test and
//      builds the model (NOTES-tester-contract.md section 11).
//   2. The expected value comes from the tester. addChecks() writes the confirming run's
//      ISurveyTestCheckResult.actual and never a value read off the model - see resolveExpected().
//   3. A step the tester rejected is not written: a case error in the confirming run leaves the document
//      as it was and surfaces the issue instead.
//   4. No consequence is recorded. That is the capture's two-signal rule; what it refused lands in
//      ignoredChanges with the reason, because silence there is indistinguishable from a bug.
//   5. The document is the state. Every mutation is a jsonc-parser edit written out through the host at
//      once; this model holds no step data of its own beyond the cursor and the session options.
//   6. A replay failure is information, not a stop - a check that no longer holds marks its row and
//      raises the notice. A case error in the prefix does stop it, and offers truncation.
//   7. The pinned clock is the tester's: nothing here reads a real date, and the model on screen was
//      built by a run whose "now" is the test's own option.

export type TesterReplayState = "idle" | "replaying" | "failed";
export type TesterStepState = "ok" | "failed" | "errored" | "unrun";

// A change the survey made that the case does not hold, and why. It is shown, greyed, under the grid:
// section 4.3 of PROMPT-recorder.md is the feature's main promise, and a promise nobody can see kept
// reads as a bug.
export interface ITesterIgnoredChange {
  note: string;
  reason: IgnoredReason;
  reasonText: string;
  target?: string;
}

// One check the menu asks the session to record. The menu itself is prompt 05; this is the request it
// makes, declared here because the session is what answers it.
export interface ITesterCheckRequest {
  name: string;
  payloadType: SurveyTestPayloadType;
  // For "values", "variables" and "noValues": the names the picker ticked.
  keys?: Array<string>;
  // A deliberate deviation from what the survey holds now - a narrowed "choices" list. It is confirmed
  // like everything else and reported when it does not hold, so nothing is recorded silently.
  expectedOverride?: any;
}

// What one headless run of the whole case made of it.
export interface ITesterVerifyOutcome {
  status: string;
  passed: number;
  failed: number;
  firstFailure?: { stepIndex: number, text: string };
  issues: Array<ISurveyTestIssue>;
  states: Array<TesterStepState>;
}

export interface ITesterRecorderHost {
  getTestsText(): string;
  setTestsText(text: string): void;
  getSurveyJson(): any;
  // The two option sets a silent run needs. They live above this model - the settings form writes them -
  // and they are read at the moment a run is built, so a change to either reaches the next replay.
  getTestOptions(): ISurveyTestOptions;
  getHostOptions(): HostOptions;
  // The two journeys out of this screen. Both belong to the widget root - a screen change is not a
  // session's to make - and a host that supplies neither simply has a session bar with two fewer
  // buttons, which is the same "what is not given is not rendered" rule the runner's row verbs follow.
  onGoToRunner?(): void;
  onFixJson?(): void;
  // Reveals a node of the suite document in the JSON screen: "tests[0].steps[2]".
  onRevealCase?(path: string): void;
}

// The sentinel a "start" of "the answers the form holds now" is asked for by. It is not a start name:
// the panel that offers it cannot write the data itself, because the model that holds it is this one's.
// Declared beside the panel (model/stepsSurvey.ts) and re-exported here, where it is resolved.
export { TESTER_INLINE_START };

const MAX_UNDO = 50;
// A replay is milliseconds of work and there is nothing to watch it. Beyond this it is worth saying
// that something is happening, and replayState is what a view may spin on; under it, nothing is
// published at all, so a rewind does not flash a spinner on and off.
const REPLAY_INDICATION_MS = 300;
// How many ignored changes the strip keeps. It is a running commentary on a session, not a log.
const MAX_IGNORED = 50;
// The session options the bar's menu offers as one press each. The idle window is a number and is
// asked for in the panel under the step list, where there is a box to type it into.
const TOGGLE_OPTIONS = ["coalesceSets", "mergeAdjacentSets", "autoCheckAfterCommand"];

export class TesterRecorderModel extends Base
  implements ITesterStepsOwner, ITesterAdornersOwner {
  @property({ defaultValue: false }) isOpen!: boolean;
  @property() testName!: string | undefined;
  // A position between steps, 0..steps.length. Everything recorded is inserted at it and it advances
  // past what was inserted.
  @property({ defaultValue: 0 }) cursor!: number;
  // Record against pause. Pausing is how the author reaches a state they do not want in the case; what
  // happens while it is off is reported in the ignored strip with the reason "paused".
  @property({ defaultValue: true }) isRecording!: boolean;
  // The two document reasons, and only those: a survey definition that is not an object, and a suite
  // that does not parse or does not hold together. A replay that stopped is not one of them - it is a
  // fact about this session, and it lives in replayState and in the notice.
  @property({ defaultValue: "" }) blockedReason!: string;
  @property({ defaultValue: "" }) notice!: string;
  @property({ defaultValue: "" }) noticeDetail!: string;
  @property({ defaultValue: "idle" }) replayState!: TesterReplayState;
  // A replay or a confirming run is in flight. It is true from the moment the work is asked for, not
  // from the moment a spinner is worth showing: the form pane, the step list and the adorners are
  // frozen on it, and a freeze that arrived 300 ms late would let a keystroke land on a model that is
  // about to be thrown away. replayState is the *indication* and stays delayed; this is the *fact*.
  @property({ defaultValue: false }) busy!: boolean;
  // The model the tester handed over, and what the form pane renders. It is replaced once, when a new
  // one is ready: the previous one stays on screen for the length of a replay so the pane does not
  // flash (PROMPT-recorder.md section 7).
  @property() liveSurvey!: SurveyModel | undefined;
  // Where the case stood when this session opened. Everything at or after it is what this session
  // recorded, which is the whole of what a "new" mark in the step list means.
  @property({ defaultValue: 0 }) baselineCount!: number;
  // The tail is unverified: a step was inserted in the middle, or a step was deleted, or the document
  // changed underneath. The quiet run behind every write clears it again.
  @property({ defaultValue: false }) stale!: boolean;
  @property({ defaultValue: false }) canUndo!: boolean;
  // The step a blocking issue of the prefix came from, and the offer that follows it: truncateFrom of
  // that index. -1 when the replay holds.
  @property({ defaultValue: -1 }) failedStepIndex!: number;
  @propertyArray() ignoredChanges!: Array<ITesterIgnoredChange>;
  @propertyArray() stepStates!: Array<TesterStepState>;
  @property() verifyOutcome!: ITesterVerifyOutcome | undefined;

  // ---- the screen's own chrome (prompt 05 section 5) ------------------------------------------------
  // The resolved options this session records under, the start in force, and the pinned clock. Always
  // visible, because a case recorded against the wrong "now" is a case that fails in a year and nobody
  // can see why (PROMPT-recorder.md section 2 and rule 9).
  @property({ defaultValue: "" }) statusText!: string;
  // What the form pane's badge says: recording, or paused and recording nothing.
  @property({ defaultValue: "" }) badgeText!: string;
  // What the quiet verify behind the last change has against the case, when it has anything. The State
  // column marks the row; this says the words. There is no button behind it: every change re-runs the
  // whole case headlessly, so what stands here is always about the case as it is now.
  @property({ defaultValue: "" }) failNote!: string;
  // The third alert channel, and the only one with a verb beside it: the tail was left unverified by an
  // insert, a delete or an edit from outside, and Verify is one press away.
  @property({ defaultValue: "" }) staleNotice!: string;
  // How large the form under the header is drawn. It is a way of looking at the model and not a fact
  // about the case: nothing about it is written into the suite, and a replay - which builds a new model
  // on every step - leaves it exactly where it was, because what carries it is this property.
  @property({ defaultValue: ZOOM_DEFAULT }) zoom!: number;

  public options: RecorderOptions = { ...defaultRecorderOptions };

  // The step list, as a survey of its own (model/stepsSurvey.ts), and the adorners the form offers
  // (model/adornerModel.ts). Both are views over what this model holds: the list over the document, the
  // adorners over the elements the model on screen has rendered.
  public readonly steps: TesterStepsModel;
  public readonly adorners: TesterAdornersModel;
  // Record/Pause, Verify, Rewind to start, Discard session, and the options menu.
  public readonly bar: ActionContainer;
  // The two verbs that stand in a banner rather than on the bar: the way out of a blocked session, and
  // the Verify the stale-tail banner offers. Standalone Actions for the same reason the runner's are -
  // they are drawn where the sentence is, not where the toolbar is.
  public readonly fixJson: Action;
  public readonly verifyStale: Action;

  private host: ITesterRecorderHost;
  private capture = new RecorderCapture();
  private registry = new ElementRegistry();
  // The element the form pane rendered into. The model may not reach the DOM, so the one seam is
  // attachTo(): the capture's listener set goes on this node and everything about interpreting what
  // lands on it stays in capture.ts.
  private pane: HTMLElement | undefined = undefined;
  // The last text this model wrote. An edit that equals it is this model's own and is not reconciled
  // against; anything else came from outside the session.
  private pushedText = "";
  // Everything asynchronous runs in one chain, and every replay carries a token: a setCursor that
  // arrives while one is in flight supersedes it, and the superseded run's result is discarded.
  private chain: Promise<void> = Promise.resolve();
  private token = 0;
  private indicateTimer: any = undefined;
  private busyCount = 0;
  private quietQueued = false;
  private undoStack: Array<{ text: string, cursor: number, recorded: Array<boolean> }> = [];
  // Which positions of the case this session wrote, one flag per step, kept in step with every edit.
  // It is what the "new" mark in the step list means, and it has to be per step rather than "everything
  // past the count at open": a step inserted in the middle is new, and the old step it pushed down is
  // not.
  private recorded: Array<boolean> = [];
  // The last step this session wrote, for the coalescing rules of section 4.4.
  private lastRecorded: { index: number, command: string, target: string, at: number } | undefined;
  // What the document said about this test the last time it was read, so that section 7's rule - the
  // cursor survives an outside edit only if the step count and the step at the cursor are unchanged -
  // can be answered without keeping a copy of the case.
  private lastCount = 0;
  private lastAtCursor = "";
  private gone = false;
  // Which session the queued work belongs to. The token above supersedes one replay with the next; this
  // supersedes everything a session queued the moment that session ends, because a run that resolves
  // after close() would otherwise write into a test nobody is editing any more - and open() is awaited,
  // so the window is as wide as a replay.
  private session = 0;

  constructor(host: ITesterRecorderHost) {
    super();
    this.host = host;
    this.ignoredChanges = [];
    this.stepStates = [];
    this.steps = new TesterStepsModel(this);
    this.adorners = new TesterAdornersModel(this);
    this.bar = new ActionContainer();
    this.bar.setCssClasses(runnerActionBarCss, false);
    this.fixJson = new Action({
      id: "fix-json", title: testerText("runner.fixJson"), css: "svt-link", enabled: true,
      action: () => { if (!!this.host.onFixJson)this.host.onFixJson(); },
    });
    this.verifyStale = new Action({
      id: "verify-stale", title: testerText("recorder.bar.verify"), css: "svt-link", enabled: true,
      action: () => { void this.verify(); },
    });
    this.buildBar();
    // One subscription instead of a call at the end of every method that changes one of these: the
    // screen is a projection of the session, and everything below writes the session.
    this.registerFunctionOnPropertiesValueChanged(
      ["isOpen", "cursor", "isRecording", "replayState", "busy", "blockedReason", "notice", "stale",
        "liveSurvey", "baselineCount", "stepStates", "verifyOutcome", "zoom"],
      () => this.refreshScreen(), "svt-recorder-screen");
    this.refreshScreen();
  }
  public getType(): string { return "svt-recorder"; }

  // ---- the session ---------------------------------------------------------------------------------

  // Opening is the whole of arriving on the screen: the prefix is replayed, the model the tester built
  // becomes the one on screen, and the case as it stands is remembered so that "new" means "this
  // session wrote it". The cursor is an argument rather than something a caller writes afterwards,
  // because the replay replays *to* it.
  public async open(testName: string, cursor?: number): Promise<void> {
    if (this.gone) return;
    const session = ++this.session;
    this.capture.flush();
    this.testName = testName;
    this.isOpen = true;
    this.isRecording = true;
    this.clearNotice();
    this.verifyOutcome = undefined;
    this.stale = false;
    this.ignoredChanges = [];
    this.undoStack = [];
    this.canUndo = false;
    this.lastRecorded = undefined;
    this.pushedText = this.host.getTestsText();
    this.updateBlocked();
    const suite = this.getSuite();
    const steps = getTestSteps(suite, findTestIndex(suite, testName));
    this.baselineCount = steps.length;
    // Nothing is new yet: "new" means "this session wrote it", and the session has just begun.
    this.recorded = steps.map(() => false);
    await this.replay(testName, cursor === undefined ? steps.length : cursor);
    if (this.isStale(session)) return;
    // The verdict starts truthful: what the case does now, not what it did when it was last open.
    this.quietVerify();
  }

  // Flushes before it detaches: a value that is still settling when the session closes is recorded, not
  // dropped. Leaving is not the act that loses a half-typed answer.
  public close(): void {
    if (!this.isOpen) return;
    // Everything this session queued is answered for here: a check still confirming itself, a replay
    // still building its model, the quiet run behind the last write. They resolve into a closed session
    // and are discarded there, so leaving the screen ends the session in fact and not only on it.
    this.session += 1;
    this.quietQueued = false;
    this.capture.flush();
    this.capture.detach();
    this.registry.detach();
    this.adorners.detach();
    this.cancelIndication();
    this.isOpen = false;
    this.testName = undefined;
    this.cursor = 0;
    this.baselineCount = 0;
    this.liveSurvey = undefined;
    this.replayState = "idle";
    this.blockedReason = "";
    this.clearNotice();
    this.stepStates = [];
    this.ignoredChanges = [];
    this.verifyOutcome = undefined;
    this.stale = false;
    this.undoStack = [];
    this.canUndo = false;
    this.lastRecorded = undefined;
    this.recorded = [];
  }

  // Settles what a person is half-way through typing. The run-start transition of the widget root is
  // specified as "flush, then close", and this is the flush.
  public flush(): void { this.capture.flush(); }

  // The one DOM seam of the whole model layer. The view hands over the element the form pane rendered
  // into; the capture puts its listener set on it, in the capture phase. A session that was never
  // attached still records every model-driven step - the ported tests drive exactly that.
  public attachTo(pane: HTMLElement | undefined): void {
    this.pane = pane;
    this.capture.setContainer(pane);
  }

  public detach(): void {
    this.pane = undefined;
    this.capture.setContainer(undefined);
  }

  // ---- the document --------------------------------------------------------------------------------

  // Refused before the document is touched: a create that half-happened is worse than one that did not.
  public createTest(params: ITesterNewTestParams): string | undefined {
    const name = (params.name || "").trim();
    if (!name) return testerText("recorder.nameRequired");
    const suite = this.getSuite();
    if (!suite || !Array.isArray(suite.tests)) return testerText("recorder.noSuite");
    if (findTestIndex(suite, name) >= 0) return testerText("recorder.nameTaken", name);
    const test: any = { name: name, steps: [] };
    if (!!params.description) test.description = params.description;
    const options = parseObjectText(params.optionsText);
    if (!!options.error) return testerText("recorder.optionsNotObject", options.error);
    if (!!options.value) test.options = options.value;
    const variables = parseObjectText(params.variablesText);
    if (!!variables.error) return testerText("recorder.variablesNotObject", variables.error);
    if (!!variables.value) test.variables = variables.value;
    if (params.start === TESTER_INLINE_START) {
      // The one value the form cannot write for itself: it is not a start, it is "take the answers the
      // form holds now", and the model that holds them is this one's.
      if (!this.liveSurvey) return testerText("recorder.noModelForStart");
      test.start = { data: JSON.parse(JSON.stringify(this.liveSurvey.data)) };
    } else if (!!params.start) {
      test.start = params.start;
    }
    this.applyText(appendTest(this.host.getTestsText(), test, suite));
    // No session is opened here: the widget root's transition is what opens one, so that creating a
    // test and pressing Edit on a row take the same road.
    return undefined;
  }

  // Called from SurveyTesterModel.updateFromHost: either document may have changed underneath. The
  // session is addressed by name, so a reordering is harmless; a changed step list is not.
  public reconcile(): void {
    // Nothing is asked of the documents while no session is open, and the question is not free: it is
    // a parse and a validation of the whole suite, and a Creator tab will call this on every keystroke
    // in the designer (see promts/creator-tester-notes.md entry 12.2).
    if (this.gone || !this.isOpen || !this.testName) return;
    this.updateBlocked();
    const text = this.host.getTestsText();
    // This model's own write, coming back through the one reconciliation entry point.
    if (text === this.pushedText) return;
    this.pushedText = text;
    // Undoing across an edit somebody else made would discard their work, so the stack ends here.
    this.undoStack = [];
    this.canUndo = false;
    this.lastRecorded = undefined;
    const suite = this.getSuite();
    // A document that does not parse says nothing about which tests exist, so it closes nothing: the
    // same rule the widget root's vanished-test fallback works to, and for the same reason.
    if (!suite || !Array.isArray(suite.tests)) return;
    const index = findTestIndex(suite, this.testName);
    if (index < 0) {
      const name = this.testName;
      this.close();
      this.notice = testerText("recorder.session.testGone", name);
      return;
    }
    const steps = getTestSteps(suite, index);
    const kept = steps.length === this.lastCount && signatureOf(steps[this.cursor]) === this.lastAtCursor;
    // The same rule for what is "new": a case that still matches keeps its marks, and one that does not
    // has no step this session can vouch for any more.
    if (!kept)this.recorded = steps.map(() => false);
    this.stale = true;
    this.verifyOutcome = undefined;
    // The document is what is verified, wherever the edit came from.
    this.quietVerify();
    void this.replay(this.testName, kept ? this.cursor : steps.length,
      testerText(kept ? "recorder.session.documentChanged" : "recorder.session.cursorClamped"));
  }

  // ---- recording -----------------------------------------------------------------------------------

  // What the capture produced, written into the document at the cursor. It is public because the
  // capture is not the only caller a test has: a session with no pane records what the model reports,
  // and a step handed straight to this method is the same step by the time it reaches the document.
  public recordStep(command: CapturedCommand): void {
    const name = this.testName;
    if (this.gone || !name) return;
    const suite = this.getSuite();
    const testIndex = findTestIndex(suite, name);
    if (testIndex < 0) return;
    const steps = getTestSteps(suite, testIndex);
    const at = this.cursor;
    const options = this.options;
    const previousIndex = at - 1;
    const previous: any = previousIndex >= 0 && previousIndex < steps.length ? steps[previousIndex] : undefined;
    const last = this.lastRecorded;
    // Coalescing is only ever applied to a step this session wrote, that is still the step before the
    // cursor, and that was written moments ago. It stops at any other command, at any check and after
    // the idle window, so a deliberate "type, check, type again" survives.
    const recent = !!last && !!previous && last.index === previousIndex &&
      Date.now() - last.at < options.coalesceIdleMs;
    const lastCommand = recent && !!last ? last.command : "";
    const lastTarget = recent && !!last ? last.target : "";
    // "{command}-{target}" - the two things that address the step, in the tester's own vocabulary, so
    // the generated name reads the same in the grid, in the console and in the JSON.
    const stepName = autoStepName(command.command, command.target);

    const mergeInto = (params: any): void => {
      // Coalesced: the step being replaced is the one the previous keystroke wrote, so this write is a
      // continuation of that action and not another one. The snapshot already on the undo stack is from
      // before the first keystroke, which is what one press of Undo has to go back to - pushing another
      // here would make Undo walk "Ann" back to "An".
      this.applyText(replaceStep(this.host.getTestsText(), testIndex, previousIndex,
        { ...previous, ...params }), true);
      this.lastRecorded = {
        index: previousIndex, command: command.command, target: command.target, at: Date.now(),
      };
    };

    // Typing produces one value change per keystroke; collapsing them into the step already there is
    // what keeps the grid readable.
    if (options.coalesceSets && command.command === "set" && lastCommand === "set" &&
      lastTarget === command.target && !!previous.set) {
      mergeInto({ set: { ...previous.set, [command.target]: command.payload } });
      return;
    }
    if ((command.command === "addRow" || command.command === "addPanel") &&
      lastCommand === command.command && lastTarget === command.target && !!previous[command.command]) {
      const count = Number(previous[command.command][command.target]) || 0;
      mergeInto({ [command.command]: { ...previous[command.command], [command.target]: count + 1 } });
      return;
    }
    if (options.mergeAdjacentSets && command.command === "set" && lastCommand === "set" && !!previous.set) {
      mergeInto({ set: { ...previous.set, [command.target]: command.payload } });
      return;
    }

    const step = createCommandStep(command.command, command.target, command.payload, stepName);
    // The mark first: everything from here on projects the screen, and the screen reads the marks.
    const marks = this.recorded.slice();
    this.recorded.splice(at, 0, true);
    this.applyText(insertStep(this.host.getTestsText(), testIndex, at, step), false, marks);
    this.lastRecorded = { index: at, command: command.command, target: command.target, at: Date.now() };
    this.cursor = at + 1;
    this.stepStates = insertState(this.stepStates, at);
    // A step recorded in the middle leaves everything after it unverified.
    if (at < steps.length)this.stale = true;
    if (options.autoCheckAfterCommand && (command.command === "set" || command.command === "clear")) {
      void this.addChecks(command.target, [{ name: "value", payloadType: "value" }]);
    }
  }

  // Rule 2 and rule 3 together. The check is appended with a provisional expectation, the prefix plus
  // that candidate is run headlessly, and what the tester reported as "actual" is what gets written - a
  // check handler may read something else than this widget would (a title with the piping and the
  // locale resolved, the error texts, the choice values), and a case recorded from a slightly different
  // read fails on its first replay for no reason anyone could diagnose.
  public addChecks(target: string, checks: Array<ITesterCheckRequest>): Promise<void> {
    const name = this.testName;
    if (this.gone || !name || !checks.length) return Promise.resolve();
    // A value typed before the adorner was clicked is the earlier step.
    this.capture.flush();
    const session = this.session;
    // Frozen from here, not from inside the queued work: the form pane is inert for the length of the
    // confirming run, so nothing can land on the model while the check about it is being proved.
    this.beginBusy();
    return this.enqueue(async() => {
      try {
        if (this.isStale(session)) return;
        await this.confirmChecks(session, name, target, checks);
      } finally {
        this.endBusy();
      }
    });
  }

  private async confirmChecks(session: number, name: string, target: string,
    checks: Array<ITesterCheckRequest>): Promise<void> {
    {
      const suite = this.getSuite();
      const testIndex = findTestIndex(suite, name);
      if (testIndex < 0) return;
      const steps = getTestSteps(suite, testIndex);
      const at = this.cursor;
      const provisional: { [check: string]: any } = {};
      checks.forEach(check => {
        provisional[check.name] = check.expectedOverride !== undefined
          ? check.expectedOverride
          : check.name === "noValues" && !!check.keys
            ? check.keys.slice()
            : getProvisionalExpected(check.payloadType, check.keys);
      });
      const candidate = createExpectStep(target, provisional);
      const prefix = signatureOf(steps.slice(0, at));
      const outcome = await this.runSilently(suite, testIndex, steps.slice(0, at).concat([candidate]));
      if (this.isStale(session)) return;
      // The run proved the check at one position over one prefix. Everything about the document is
      // re-read after the await, because the await is a window: a step recorded meanwhile, a test
      // reordered in the JSON screen, a document edited outside. If the cursor moved or the prefix is
      // not the prefix that was run, the proof is about a case that no longer exists and the check is
      // not written - a check written into the wrong place is worse than one that has to be pressed
      // again.
      const freshSuite = this.getSuite();
      const freshIndex = findTestIndex(freshSuite, name);
      if (freshIndex < 0) return;
      const freshSteps = getTestSteps(freshSuite, freshIndex);
      if (this.cursor !== at || signatureOf(freshSteps.slice(0, at)) !== prefix) {
        this.setNotice(testerText("recorder.session.nothingRecorded",
          testerText("recorder.session.caseMovedDuringCheck")));
        return;
      }
      const testResult = outcome.testResult;
      const stepResult = !!testResult && testResult.steps.length
        ? testResult.steps[testResult.steps.length - 1] : undefined;
      const stepIssues = !!stepResult ? stepResult.issues.filter(issue => issue.severity === "error") : [];
      if (!stepResult || stepIssues.length > 0) {
        // Rule 3: a step the tester rejected is not written. A recorder that leaves unrunnable steps
        // behind is worse than one that records nothing.
        const issue = stepIssues[0];
        this.setNotice(testerText("recorder.session.nothingRecorded", !!issue
          ? testerText("recorder.session.issueText", issue.code, issue.message)
          : testerText("recorder.session.noCheckResult")), !!issue ? issue.suggestion : undefined);
        return;
      }
      const resolved = resolveExpected(target, checks, stepResult.checks);
      if (!Object.keys(resolved.checks).length) {
        this.setNotice(testerText("recorder.session.nothingRecordedProblems",
          resolved.problems.join(testerText("recorder.problem.join"))));
        return;
      }
      const previousIndex = at - 1;
      const previous: any = previousIndex >= 0 && previousIndex < freshSteps.length
        ? freshSteps[previousIndex] : undefined;
      const last = this.lastRecorded;
      // Checks added one after another, with no command in between, belong in the same "expect": one
      // step, one entry per target, which is the shape the format is for.
      const isCheckStep = !!last && last.index === previousIndex &&
        last.command === SurveyTestCheckCommandName;
      if (!!previous && !!previous.expect && isCheckStep) {
        const merged = {
          ...previous,
          expect: {
            ...previous.expect,
            [target]: { ...(previous.expect[target] || {}), ...resolved.checks },
          },
        };
        this.applyText(replaceStep(this.host.getTestsText(), freshIndex, previousIndex, merged));
        this.lastRecorded = {
          index: previousIndex, command: SurveyTestCheckCommandName, target: target, at: Date.now(),
        };
      } else {
        const step = createExpectStep(target, resolved.checks,
          autoStepName(SurveyTestCheckCommandName, target));
        const marks = this.recorded.slice();
        this.recorded.splice(at, 0, true);
        this.applyText(insertStep(this.host.getTestsText(), freshIndex, at, step), false, marks);
        this.lastRecorded = {
          index: at, command: SurveyTestCheckCommandName, target: target, at: Date.now(),
        };
        this.cursor = at + 1;
        this.stepStates = insertState(this.stepStates, at);
        if (at < freshSteps.length)this.stale = true;
      }
      if (resolved.problems.length) {
        this.setNotice(resolved.problems.join(testerText("recorder.problem.join")));
      } else {
        this.clearNotice();
      }
    }
  }

  // Unticking. The step it touches is the one immediately before the cursor: that is the "expect" the
  // menu is showing, because addChecks writes at the cursor and merges consecutive checks into the step
  // it just wrote. It is not the last step of the case - after a rewind those are different steps, and
  // editing the end of the case from a menu about the middle of it is how an unrelated check disappears.
  // An "expect" with a command after it is a check about an earlier moment and is left alone by the same
  // rule, because such a step is never the one before the cursor.
  public removeChecks(target: string, names: Array<string>): void {
    const name = this.testName;
    if (this.gone || !name || !names.length) return;
    this.capture.flush();
    const suite = this.getSuite();
    const testIndex = findTestIndex(suite, name);
    if (testIndex < 0) return;
    const steps = getTestSteps(suite, testIndex);
    const last = this.cursor - 1;
    if (last < 0 || last >= steps.length) return;
    // And only when this session has not written something else there since. lastRecorded is what says
    // so; where it is unset - a fresh replay - the step before the cursor is taken at its word.
    const written = this.lastRecorded;
    if (!!written && written.index !== last) return;
    const step: any = steps[last];
    if (!step || !step.expect || !step.expect[target]) return;
    const forTarget: any = { ...step.expect[target] };
    names.forEach(check => delete forTarget[check]);
    const expect: any = { ...step.expect };
    if (!Object.keys(forTarget).length) delete expect[target];
    else expect[target] = forTarget;
    if (!Object.keys(expect).length) {
      const marks = this.recorded.slice();
      this.recorded.splice(last, 1);
      this.applyText(deleteStepText(this.host.getTestsText(), testIndex, last), false, marks);
      // "expect" reads the model, it never changes it, so the model on screen is still the right one
      // and no replay is owed. Only the cursor and the per-step states follow the shorter case.
      this.cursor = last;
      this.stepStates = this.stepStates.slice(0, last).concat(this.stepStates.slice(last + 1));
      // A step removed from the middle leaves everything after it unverified until the quiet run lands.
      if (last < steps.length - 1)this.stale = true;
    } else {
      this.applyText(replaceStep(this.host.getTestsText(), testIndex, last, { ...step, expect: expect }));
    }
    // The next check must not merge into a step that is gone or that no longer says what it said.
    this.lastRecorded = undefined;
    this.verifyOutcome = undefined;
  }

  // ---- the cursor and the steps --------------------------------------------------------------------

  public setCursor(index: number): Promise<void> {
    const name = this.testName;
    if (this.gone || !name) return Promise.resolve();
    this.capture.flush();
    return this.replay(name, index);
  }

  public deleteStep(index: number): Promise<void> {
    const name = this.testName;
    if (this.gone || !name) return Promise.resolve();
    this.capture.flush();
    const suite = this.getSuite();
    const testIndex = findTestIndex(suite, name);
    if (testIndex < 0) return Promise.resolve();
    const marks = this.recorded.slice();
    this.recorded.splice(index, 1);
    this.applyText(deleteStepText(this.host.getTestsText(), testIndex, index), false, marks);
    this.stale = true;
    this.verifyOutcome = undefined;
    const at = this.cursor;
    // No notice: the quiet run behind the write re-runs the case, and the state column says the rest.
    return this.replay(name, index < at ? at - 1 : at);
  }

  public moveStep(index: number, delta: number): Promise<void> {
    const name = this.testName;
    if (this.gone || !name) return Promise.resolve();
    this.capture.flush();
    const suite = this.getSuite();
    const testIndex = findTestIndex(suite, name);
    if (testIndex < 0) return Promise.resolve();
    const steps = getTestSteps(suite, testIndex);
    const to = index + delta;
    if (to < 0 || to >= steps.length) return Promise.resolve();
    // The mark travels with the step it is about.
    const marks = this.recorded.slice();
    const moved = this.recorded.splice(index, 1)[0];
    this.recorded.splice(to, 0, moved === true);
    this.applyText(moveStepText(this.host.getTestsText(), testIndex, index, to, steps[index]), false, marks);
    this.stale = true;
    this.verifyOutcome = undefined;
    return this.replay(name, this.cursor);
  }

  public renameStep(index: number, name: string): void {
    const current = this.testName;
    if (this.gone || !current) return;
    const suite = this.getSuite();
    const testIndex = findTestIndex(suite, current);
    if (testIndex < 0) return;
    this.applyText(setStepName(this.host.getTestsText(), testIndex, index, name.trim()));
  }

  // The explicit answer to a replay that stopped, and never an implicit consequence of recording:
  // inserting in the middle keeps the tail (PROMPT-recorder.md section 7).
  public truncateFrom(index: number): Promise<void> {
    const name = this.testName;
    if (this.gone || !name) return Promise.resolve();
    this.capture.flush();
    const suite = this.getSuite();
    const testIndex = findTestIndex(suite, name);
    if (testIndex < 0) return Promise.resolve();
    const steps = getTestSteps(suite, testIndex);
    const marks = this.recorded.slice();
    this.recorded = this.recorded.slice(0, index);
    this.applyText(deleteStepsFrom(this.host.getTestsText(), testIndex, index, steps.length), false, marks);
    this.stale = false;
    this.verifyOutcome = undefined;
    return this.replay(name, index, testerText("recorder.session.truncated", index));
  }

  // One member of the test's own options override. The model on screen was built with the old ones -
  // "now", the locale, the error mode are all baked into it - so the prefix is replayed with the new
  // ones and the quiet run re-runs the whole case with them.
  public setTestOption(option: string, value: any): Promise<void> {
    const current = this.testName;
    if (this.gone || !current) return Promise.resolve();
    this.capture.flush();
    const suite = this.getSuite();
    const testIndex = findTestIndex(suite, current);
    if (testIndex < 0) return Promise.resolve();
    const test: any = getSuiteTests(suite)[testIndex];
    const options: any = { ...(!!test && !!test.options ? test.options : {}) };
    if (value === undefined) delete options[option];
    else options[option] = value;
    this.applyText(setTestOptionsText(this.host.getTestsText(), testIndex,
      Object.keys(options).length ? options : undefined));
    this.stale = true;
    this.verifyOutcome = undefined;
    return this.replay(current, this.cursor);
  }

  // The same road at a different path: "description", "start", "variables". A start or a set of
  // variables changes what the case begins from, so the replay behind it rebuilds the model on screen
  // from that new beginning.
  public setTestField(field: string, value: any): Promise<void> {
    const current = this.testName;
    if (this.gone || !current) return Promise.resolve();
    this.capture.flush();
    const suite = this.getSuite();
    const testIndex = findTestIndex(suite, current);
    if (testIndex < 0) return Promise.resolve();
    let next = value;
    if (field === "start" && value === TESTER_INLINE_START) {
      if (!this.liveSurvey) return Promise.resolve();
      next = { data: JSON.parse(JSON.stringify(this.liveSurvey.data)) };
    }
    this.applyText(setTestFieldText(this.host.getTestsText(), testIndex, field, next));
    this.stale = true;
    this.verifyOutcome = undefined;
    return this.replay(current, this.cursor);
  }

  // One recorder action back: a step, a group of checks, a rename, a delete. The document goes back to
  // what it was and the session is replayed onto it, because the model on screen has to match the case.
  // The editor's own undo belongs to the JSON screen and stays there.
  public undo(): void {
    const name = this.testName;
    const entry = this.undoStack.pop();
    this.canUndo = this.undoStack.length > 0;
    if (!entry) return;
    this.capture.flush();
    this.pushedText = entry.text;
    this.recorded = entry.recorded;
    this.host.setTestsText(entry.text);
    this.lastRecorded = undefined;
    this.verifyOutcome = undefined;
    if (!name) return;
    void this.replay(name, entry.cursor, testerText("recorder.session.undone"));
    this.quietVerify();
  }

  // ---- verifying -----------------------------------------------------------------------------------

  // The whole case, run headlessly: the console-mode run of the runner, made automatic. It takes
  // milliseconds, builds its own model and never touches the one on screen, so there is nothing to hold
  // and no replay to owe - only the state column and the verdict move.
  public verify(): Promise<void> {
    if (this.gone || !this.testName) return Promise.resolve();
    const session = this.session;
    return this.enqueue(async() => { await this.runVerify(session); });
  }

  // Bursts collapse into one run: a second change while one is queued schedules nothing, and the run
  // reads the document at the moment it executes, so the last run always describes the latest case.
  private quietVerify(): void {
    if (this.quietQueued) return;
    this.quietQueued = true;
    const session = this.session;
    void this.enqueue(async() => {
      this.quietQueued = false;
      await this.runVerify(session);
    });
  }

  private async runVerify(session: number): Promise<void> {
    const name = this.testName;
    if (this.isStale(session) || !name) return;
    const suite = this.getSuite();
    const testIndex = findTestIndex(suite, name);
    if (testIndex < 0) return;
    const steps = getTestSteps(suite, testIndex);
    // An empty case is run too. It holds no check, so it has no verdict to show - but it can still
    // error, on a start it names that the suite does not declare or on options the definition refuses,
    // and that is what the state line has to say instead of staying silent.
    const outcome = await this.runSilently(suite, testIndex, steps);
    if (this.isStale(session)) return;
    this.verifyOutcome = computeVerify(outcome, steps.length);
    this.stepStates = this.verifyOutcome.states;
    this.stale = false;
  }

  // ---- the replay ----------------------------------------------------------------------------------

  // Rule 1, and the only place a model is ever created here. Everything about it is the tester's: the
  // start data, the variables, dataMode, the locale, randomSeed, clearInvisibleValues and the pinned
  // "now" are applied by the same code that will apply them when the case runs for real.
  private replay(name: string, position: number, note?: string): Promise<void> {
    const session = this.session;
    // Frozen from the call and not from the start of the queued work: the list, the adorners and the
    // form are about a model that is about to be abandoned, and a press that landed between the call
    // and the work would land on it.
    this.beginBusy();
    return this.enqueue(async() => {
      try {
        if (this.isStale(session)) return;
        await this.replayNow(session, name, position, note);
      } finally {
        this.endBusy();
      }
    });
  }

  private async replayNow(session: number, name: string, position: number, note?: string): Promise<void> {
    {
      const mine = ++this.token;
      const suite = this.getSuite();
      const testIndex = findTestIndex(suite, name);
      if (testIndex < 0) {
        // A document that does not parse says nothing about which tests exist; one that does and has
        // lost this test has ended the session.
        if (!suite || !Array.isArray(suite.tests)) return;
        this.close();
        this.notice = testerText("recorder.session.testGone", name);
        return;
      }
      const steps = getTestSteps(suite, testIndex);
      const at = Math.max(0, Math.min(position, steps.length));
      // The model that is being abandoned stops being recorded onto now; what is on screen stays there
      // until the new one is ready, which is what keeps the pane from flashing. Its adorners go with
      // it: they are about elements of a model nothing will render again.
      this.capture.detach();
      this.registry.detach();
      this.adorners.detach();
      this.beginIndication();
      const outcome = await this.runSilently(suite, testIndex, steps.slice(0, at));
      this.cancelIndication();
      // A later request superseded this one, or the session it belonged to ended while it ran: its
      // result is discarded, model and all.
      if (mine !== this.token || this.isStale(session)) return;
      this.cursor = at;
      this.lastRecorded = undefined;
      this.rememberDocument(steps, at);
      this.stepStates = buildStepStates(outcome, steps.length);
      this.fitRecorded(steps.length);
      this.failedStepIndex = -1;
      if (!!outcome.error) {
        this.replayState = "failed";
        this.setNotice(testerText("recorder.session.replayFailed", outcome.error),
          testerText("recorder.session.replayFailedDetail"));
        return;
      }
      const blocking = getBlockingIssues(outcome);
      if (!outcome.survey || blocking.length > 0) {
        // Rule 6. The model is not in the state the case describes: recording onto it would produce
        // nonsense, so the session holds until the author truncates the case or moves the cursor.
        if (!!outcome.survey)this.liveSurvey = outcome.survey;
        this.replayState = "failed";
        const issue = blocking[0];
        this.failedStepIndex = !!issue && typeof issue.step === "number" ? issue.step : -1;
        this.setNotice(!!issue
          ? testerText("recorder.session.replayStopped", issue.code, issue.message)
          : testerText("recorder.session.replayNoModel"), !!issue ? issue.suggestion : undefined);
        return;
      }
      this.registry.attach(outcome.survey);
      this.capture.attach(outcome.survey, {
        registry: this.registry,
        isRecording: () => this.isCapturing(),
        onCommand: command => this.recordStep(command),
        onIgnored: (note2, reason, target) => this.noteIgnored(note2, reason, target),
      });
      this.capture.setContainer(this.pane);
      // The adorner list is built from the same registry, so an element appears in it when it renders.
      // Nothing in the recording depends on it: rule 10 of PROMPT-recorder.md section 11 says an
      // adorner that cannot be drawn interrupts nothing, and this is on the far side of that line.
      this.adorners.attach(outcome.survey, this.registry);
      // One swap, once the model is ready. The element id prefix it carries was set by the silent run
      // (core/elementIds.ts): the recorder screen is the one place two surveys share a page.
      this.liveSurvey = outcome.survey;
      this.replayState = "idle";
      const failed = failedPrefixSteps(outcome);
      if (!!note) {
        this.setNotice(note);
      } else if (failed.length > 0) {
        // Rule 6 again, the other half: replaying is not verifying. The prefix was applied to the end
        // anyway and the model is in the state it produced.
        this.setNotice(
          testerText("recorder.session.prefixFailed", failed.length, failed[0].index + 1, failed[0].text),
          testerText("recorder.session.prefixFailedDetail"));
      } else {
        this.clearNotice();
      }
    }
  }

  // The freeze, counted: a replay queued behind a confirming run is two things in flight and one fact.
  private beginBusy(): void {
    this.busyCount += 1;
    if (!this.gone && !this.busy)this.busy = true;
  }

  private endBusy(): void {
    this.busyCount = Math.max(0, this.busyCount - 1);
    if (!this.gone && this.busyCount === 0 && this.busy)this.busy = false;
  }

  // The marks, made to fit the case after a replay. A position the case gained without this session
  // writing it is not new; one it lost takes its mark with it.
  private fitRecorded(count: number): void {
    while(this.recorded.length > count)this.recorded.pop();
    while(this.recorded.length < count)this.recorded.push(false);
  }

  private runSilently(suite: any, testIndex: number, steps: Array<any>): Promise<SilentRunOutcome> {
    return silentRun({
      surveyJson: this.host.getSurveyJson(),
      suite: suite,
      test: getSuiteTests(suite)[testIndex],
      steps: steps,
      testOptions: this.host.getTestOptions(),
      attachServerValidation: this.host.getHostOptions().attachServerValidation,
    });
  }

  // Whether the work that asked this is still the work of the session on screen. Disposal counts as a
  // session that ended, so one question answers both.
  private isStale(session: number): boolean {
    return this.gone || this.session !== session;
  }

  private enqueue(work: () => Promise<void>): Promise<void> {
    this.chain = this.chain.then(work, work);
    return this.chain;
  }

  private beginIndication(): void {
    this.cancelIndication();
    this.indicateTimer = setTimeout(() => {
      this.indicateTimer = undefined;
      if (!this.gone)this.replayState = "replaying";
    }, REPLAY_INDICATION_MS);
  }

  private cancelIndication(): void {
    if (this.indicateTimer === undefined) return;
    clearTimeout(this.indicateTimer);
    this.indicateTimer = undefined;
  }

  // ---- state ---------------------------------------------------------------------------------------

  public getState(): ITesterRecorderState {
    return { cursor: this.cursor, options: { ...this.options } };
  }

  // The cursor is not applied here: open() is what a restored session replays the prefix to, so a
  // cursor written before it would be overwritten and one written after it would be a cursor the replay
  // never saw. The widget root hands it to open() instead.
  public setState(state: ITesterRecorderState | undefined): void {
    if (!state) return;
    if (!!state.options)this.setOptions(state.options);
  }

  public setOptions(options: ITesterRecorderOptions | undefined): void {
    if (!options) return;
    this.options = { ...this.options, ...options };
  }

  public dispose(): void {
    if (this.gone) return;
    this.gone = true;
    this.session += 1;
    this.cancelIndication();
    this.capture.detach();
    this.registry.detach();
    this.isOpen = false;
    this.liveSurvey = undefined;
    this.adorners.dispose();
    this.steps.dispose();
    this.bar.dispose();
    this.fixJson.dispose();
    this.verifyStale.dispose();
    super.dispose();
  }

  // ---- the screen: the step list, the adorners, the session bar --------------------------------------

  // ITesterStepsOwner. The list is frozen while a replay is in flight rather than made read-only:
  // `readOnly` stops survey-core evaluating a question's conditions, and every cell of a row but the
  // name is an expression (NOTES-test-tab.md section 7). What a view does with this is `inert`, which
  // the browser enforces - no focus, no pointer, no keystroke - and which changes nothing about the
  // model.
  //
  // It is the synchronous fact and not the delayed indication: a replay that takes five milliseconds
  // still locks the list for those five, because the press it would have taken was about a model that
  // is gone. What is delayed is the spinner (replayState), never the freeze.
  public get stepsLocked(): boolean {
    return !this.isOpen || this.busy || !!this.blockedReason;
  }
  // The form pane's own freeze, the same fact seen from the other pane: inert for the length of a replay
  // or a confirming run, so a keystroke cannot land on the model that is being replaced or proved on.
  public get formLocked(): boolean { return this.busy; }
  public get stepCount(): number {
    const name = this.testName;
    if (!name) return 0;
    const suite = this.getSuite();
    return getTestSteps(suite, findTestIndex(suite, name)).length;
  }
  // The list reports a drag as the pair it moved between; the session moves steps by a delta.
  public moveStepTo(from: number, to: number): void { void this.moveStep(from, to - from); }
  public startFrom(index: number): void { void this.setCursor(index); }
  // The way out, in the title bar of the list of what was recorded. It is the widget root's transition:
  // flush the capture, close the session, and land on the runner with this test selected.
  public goToRunner(): void {
    if (!!this.host.onGoToRunner)this.host.onGoToRunner();
  }
  public get canOpenStepJson(): boolean { return !!this.host.onRevealCase; }
  // The row's way into the document. The position is the row's; which test it belongs to is resolved
  // by name here, because an index is only ever a position in the document being edited.
  public openStepJson(index: number): void {
    const name = this.testName;
    const reveal = this.host.onRevealCase;
    if (!name || !reveal) return;
    const testIndex = findTestIndex(this.getSuite(), name);
    if (testIndex < 0) return;
    reveal("tests[" + testIndex + "].steps[" + index + "]");
  }
  // A recorder option is widget state with a default, so what comes back from its panel is coerced to
  // the type the option holds and never left empty.
  public setRecorderOption(name: string, value: any): void {
    const options: any = { ...this.options };
    options[name] = name === "coalesceIdleMs"
      ? Number(value) || defaultRecorderOptions.coalesceIdleMs
      : value === true;
    this.options = options;
    this.refreshScreen();
  }

  // ITesterAdornersOwner. Adorners are the check affordance, so they are spent for exactly as long as
  // the session cannot answer a press: the confirming run behind a tick takes a few hundred
  // milliseconds, and a second press during it would race it. And they are spent while the session is
  // paused: a check is a recording like any other, and the badge says nothing is being recorded.
  public get adornersBusy(): boolean {
    return !this.isOpen || !this.isRecording || this.busy || this.replayState !== "idle" ||
      !!this.blockedReason;
  }
  // What the trailing "expect" step holds, by target. It is the step immediately before the cursor -
  // the one addChecks writes into and merges into - and never the last step of the case: after a
  // rewind those are different steps, and a menu about the middle of a case must not report the end
  // of it.
  //
  // The whole map at once, because answering it costs a parse of the document and the adorner list
  // asks for every target it holds in one go.
  public tickedTargets(): { [target: string]: Array<string> } {
    const res: { [target: string]: Array<string> } = {};
    const name = this.testName;
    if (!name) return res;
    const suite = this.getSuite();
    const steps = getTestSteps(suite, findTestIndex(suite, name));
    const at = this.cursor - 1;
    const step: any = at >= 0 && at < steps.length ? steps[at] : undefined;
    const expect: any = !!step && !!step.expect && typeof step.expect === "object"
      ? step.expect : undefined;
    if (!expect) return res;
    Object.keys(expect).forEach(target => {
      const checks = expect[target];
      if (!!checks && typeof checks === "object") res[target] = Object.keys(checks);
    });
    return res;
  }

  // Whether this session wrote the step at a position. It is what "new" in the State column means.
  public isRecordedHere(index: number): boolean { return this.recorded[index] === true; }

  public tickedFor(target: string): Array<string> {
    return this.tickedTargets()[target] || [];
  }

  // ---- the zoom ------------------------------------------------------------------------------------

  public get canZoomIn(): boolean { return canZoomIn(this.zoom); }
  public get canZoomOut(): boolean { return canZoomOut(this.zoom); }
  public get isZoomDefault(): boolean { return this.zoom === ZOOM_DEFAULT; }
  public get zoomText(): string { return testerText("recorder.zoom.reading", this.zoom); }
  // The factor a stylesheet multiplies the theme's base units by, the way the designer's own zoom does.
  public get zoomFactor(): number { return this.zoom / 100; }
  public zoomBy(steps: number): void { this.zoom = zoomBy(this.zoom, steps); }
  public setZoom(percent: number): void { this.zoom = clampZoom(percent); }
  public resetZoom(): void { this.zoom = ZOOM_DEFAULT; }

  // ---- the session bar -----------------------------------------------------------------------------

  private buildBar(): void {
    // The same dropdown Action the runner's mode picker is: an Action with a PopupModel over a
    // ListModel, which is the library's own menu - the click-away layer, the positioning and the roles
    // included. The three toggles it holds are the same options the panel under the step list edits;
    // both write through setRecorderOption, so there is one owner of them and two ways to reach it.
    const options = createDropdownActionModel(
      {
        id: "options", title: testerText("recorder.bar.options"),
        tooltip: testerText("recorder.bar.optionsTooltip"),
        css: "svt-recorder__action", innerCss: "svt-button",
      },
      {
        items: TOGGLE_OPTIONS.map(name => ({ id: name, title: testerText("recorder.option." + name) })),
        allowSelection: false,
        searchEnabled: false,
        onSelectionChanged: (item: any) => this.toggleRecorderOption(String(item.id)),
        cssClass: "svt-recorder__popup",
        verticalPosition: "bottom",
        horizontalPosition: "center",
      },
    );
    (options.data as ListModel).setCssClasses(runnerMenuCss, false);
    this.bar.setItems([
      new Action({
        id: "record", title: testerText("recorder.bar.record"), css: "svt-recorder__action",
        innerCss: "svt-button svt-button--primary", enabled: true,
        action: () => { this.isRecording = !this.isRecording; },
      }),
      new Action({
        id: "verify", title: testerText("recorder.bar.verify"),
        tooltip: testerText("recorder.bar.verifyTooltip"),
        css: "svt-recorder__action", innerCss: "svt-button", enabled: true,
        action: () => { void this.verify(); },
      }),
      new Action({
        id: "rewind", title: testerText("recorder.bar.rewind"),
        tooltip: testerText("recorder.bar.rewindTooltip"),
        css: "svt-recorder__action", innerCss: "svt-button", enabled: false,
        action: () => { void this.setCursor(0); },
      }),
      // It only closes the session: what was recorded is the document, and nothing here deletes it.
      new Action({
        id: "discard", title: testerText("recorder.bar.discard"),
        tooltip: testerText("recorder.bar.discardTooltip"),
        css: "svt-recorder__action", innerCss: "svt-button", enabled: true, visible: false,
        action: () => this.goToRunner(),
      }),
      options,
    ]);
  }

  private updateBar(): void {
    const open = this.isOpen;
    const blocked = !!this.blockedReason;
    const record = this.bar.getActionById("record");
    if (!!record) {
      record.title = this.isRecording
        ? testerText("recorder.bar.pause")
        : testerText("recorder.bar.record");
      record.tooltip = this.isRecording
        ? testerText("recorder.bar.pauseTooltip")
        : testerText("recorder.bar.recordTooltip");
      record.enabled = open && !blocked;
    }
    const verify = this.bar.getActionById("verify");
    if (!!verify) verify.enabled = open && !blocked;
    const rewind = this.bar.getActionById("rewind");
    if (!!rewind) rewind.enabled = open && !blocked && this.cursor > 0;
    const discard = this.bar.getActionById("discard");
    if (!!discard) {
      discard.visible = !!this.host.onGoToRunner;
      discard.enabled = open;
    }
    const options = this.bar.getActionById("options");
    if (!!options && options.data instanceof ListModel) {
      (options.data as ListModel).actions.forEach(item => {
        const name = String(item.id);
        item.title = testerText("recorder.bar.optionState",
          testerText("recorder.option." + name), (this.options as any)[name] === true);
      });
    }
    this.fixJson.visible = !!this.host.onFixJson;
  }

  private toggleRecorderOption(name: string): void {
    if (TOGGLE_OPTIONS.indexOf(name) < 0) return;
    this.setRecorderOption(name, (this.options as any)[name] !== true);
  }

  // ---- the projection ------------------------------------------------------------------------------

  // Everything the screen shows, written from what the session holds. It runs on any change to the
  // properties the constructor subscribed to and after every document edit, and it reads the document
  // once for all of it - which is also why it stops at the top when no session is open: a parse and a
  // validation of the whole suite is not free, and there is nothing to project onto.
  private refreshScreen(): void {
    if (this.gone) return;
    this.updateBar();
    const name = this.testName;
    if (!this.isOpen || !name) {
      this.statusText = "";
      this.badgeText = "";
      this.failNote = "";
      this.staleNotice = "";
      return;
    }
    const suite = this.getSuite();
    const testIndex = findTestIndex(suite, name);
    const test: any = testIndex < 0 ? undefined : getSuiteTests(suite)[testIndex];
    const steps = getTestSteps(suite, testIndex);
    this.steps.update({
      steps: steps,
      states: this.rowStates(steps.length),
      cursor: this.cursor,
      recording: this.isCapturing(),
      // The test's own options override - tests[i].options, not the resolved set the run reports.
      testOptions: !!test && !!test.options ? test.options : {},
      testFields: readTestFields(test),
      startNames: readStartNames(suite),
      recorderOptions: this.options,
    });
    this.adorners.update();
    this.statusText = this.describeStatus(suite, test);
    this.badgeText = this.describeBadge();
    this.failNote = this.describeFailNote();
    this.staleNotice = this.stale ? testerText("recorder.bar.staleNotice") : "";
  }

  // What the State column of each row says. What this session captured is "new"; what the last quiet
  // verify found overrides it, and only while that verdict is still about the case as it stands.
  private rowStates(count: number): Array<TesterRowState> {
    const verified = this.verifyOutcome;
    const states: Array<TesterRowState> = [];
    for (let index = 0; index < count; index++) {
      const found = !!verified && !this.stale ? verified.states[index] : undefined;
      states.push(found === "ok" || found === "failed" || found === "errored"
        ? found
        : this.recorded[index] === true ? "new" : "saved");
    }
    return states;
  }

  // The resolved options, the start in force and the pinned clock. The clock is the point of the line:
  // a case recorded against the real date is a case that fails in a year, so the date the tester pins
  // is shown wherever a person can see it (rule 9).
  private describeStatus(suite: any, test: any): string {
    const resolved: any = {
      ...defaultTestOptions,
      ...this.host.getTestOptions(),
      ...(!!suite && !!suite.options ? suite.options : {}),
      ...(!!test && !!test.options ? test.options : {}),
    };
    const optionsText = Object.keys(resolved)
      .filter(key => resolved[key] !== undefined && resolved[key] !== "")
      .map(key => testerText("recorder.bar.statusOption", key, formatValue(resolved[key], 24)))
      .join(testerText("recorder.bar.statusJoin"));
    const start = !!test ? test.start : undefined;
    const startText = typeof start === "string"
      ? testerText("recorder.bar.statusStartNamed", start)
      : !!start && typeof start === "object"
        ? testerText("recorder.bar.statusStartInline")
        : testerText("recorder.bar.statusStartNone");
    return testerText("recorder.bar.status", testerText("recorder.bar.statusOptions", optionsText),
      startText, testerText("recorder.bar.statusClock", String(resolved.now)));
  }

  private describeBadge(): string {
    if (!!this.blockedReason || this.replayState === "failed") {
      return testerText("recorder.bar.badgeBlocked");
    }
    return this.isRecording
      ? testerText("recorder.bar.badgeRecording")
      : testerText("recorder.bar.badgePaused");
  }

  private describeFailNote(): string {
    const verified = this.verifyOutcome;
    if (!verified || this.stale) return "";
    const first = verified.firstFailure;
    if (verified.failed > 0) {
      return testerText("recorder.verdict.checksFail", verified.failed,
        !!first ? testerText("recorder.verdict.atStep", first.stepIndex + 1, first.text) : "");
    }
    if (verified.status === "passed") return "";
    return !!first
      ? testerText("recorder.verdict.errored", first.stepIndex + 1, first.text)
      : testerText("recorder.verdict.doesNotRun", verified.status);
  }

  // ---- the inside ----------------------------------------------------------------------------------

  // Rule 5. Every edit goes out through the host at once - there is no Apply and no staging buffer -
  // and every write re-verifies the whole case quietly, so there is no edit the state column misses.
  private applyText(next: string, coalesced?: boolean, marksBefore?: Array<boolean>): void {
    // The undo stack is the recorder's own, and it holds only what the recorder wrote. A coalesced write
    // adds no entry: it rewrites the step the entry on top already undoes. The marks it stores are the
    // ones from before the edit, handed in by the edits that move them - they move before the write,
    // because the write projects the screen and the screen reads them.
    if (!coalesced || !this.undoStack.length) {
      this.undoStack.push({
        text: this.host.getTestsText(), cursor: this.cursor,
        recorded: !!marksBefore ? marksBefore : this.recorded.slice(),
      });
      if (this.undoStack.length > MAX_UNDO)this.undoStack.shift();
      this.canUndo = true;
    }
    this.pushedText = next;
    this.host.setTestsText(next);
    this.rememberDocument();
    this.quietVerify();
    // The list is a view over the document, and a rename or a moved step changes the document without
    // changing a property of this model - so the projection is asked for here as well.
    this.refreshScreen();
  }

  private getSuite(): any { return parseJson(this.host.getTestsText()).value; }

  // What the document said, so that an edit from outside can be compared against it (section 7).
  private rememberDocument(steps?: Array<any>, at?: number): void {
    const name = this.testName;
    if (!name) return;
    const known = steps !== undefined
      ? steps
      : getTestSteps(this.getSuite(), findTestIndex(this.getSuite(), name));
    const cursor = at !== undefined ? at : this.cursor;
    this.lastCount = known.length;
    this.lastAtCursor = signatureOf(known[cursor]);
  }

  private isCapturing(): boolean {
    return this.isOpen && this.isRecording && !!this.liveSurvey && !this.busy &&
      this.replayState !== "failed" && !this.blockedReason;
  }

  private noteIgnored(note: string, reason: IgnoredReason, target?: string): void {
    if (this.gone) return;
    const entry: ITesterIgnoredChange = {
      note: note,
      reason: reason,
      reasonText: testerText("recorder.reason." + reason),
      target: target,
    };
    const next = this.ignoredChanges.concat([entry]);
    this.ignoredChanges = next.length > MAX_IGNORED ? next.slice(next.length - MAX_IGNORED) : next;
  }

  // The two document reasons and no others. A replay that stopped is a fact about this session, not
  // about the documents, and it lives in replayState.
  private updateBlocked(): void {
    const surveyJson = this.host.getSurveyJson();
    const parsed = parseJson(this.host.getTestsText());
    if (!surveyJson || typeof surveyJson !== "object") {
      this.blockedReason = testerText("tester.blocked.noSurvey");
      return;
    }
    if (parsed.error !== undefined) {
      this.blockedReason = testerText("tester.blocked.testsInvalid", parsed.error);
      return;
    }
    const errors = getSuiteLevelErrors(validateSuite(parsed.value));
    this.blockedReason = errors.length
      ? testerText("tester.blocked.suiteError", errors[0].code, errors[0].message)
      : "";
  }

  private setNotice(text: string, detail?: string): void {
    this.notice = text;
    this.noticeDetail = detail || "";
  }

  private clearNotice(): void {
    this.notice = "";
    this.noticeDetail = "";
    this.failedStepIndex = -1;
  }
}

// -------------------------------------------------------------------------------------------------

interface ResolvedChecks {
  checks: { [name: string]: any };
  problems: Array<string>;
}

// Rule 2, in the one function that decides what a check expects. Never a value this widget read off the
// model: always the "actual" the tester reported.
function resolveExpected(target: string, requested: Array<ITesterCheckRequest>,
  results: Array<ISurveyTestCheckResult>): ResolvedChecks {
  const res: ResolvedChecks = { checks: {}, problems: [] };
  requested.forEach(check => {
    const mine = results.filter(result => result.check === check.name && result.target === target);
    if (!mine.length) {
      res.problems.push(testerText("recorder.problem.noResult", check.name));
      return;
    }
    if (check.expectedOverride !== undefined) {
      // A deliberate deviation is written as asked and reported when it does not hold.
      res.checks[check.name] = check.expectedOverride;
      if (mine.some(result => !result.passed)) {
        res.problems.push(testerText("recorder.problem.overrideFails", check.name));
      }
      return;
    }
    if (check.name === "noValues") {
      // The payload is a list of names that must be absent, so a name that turns out to be present is
      // dropped instead of written as a check that is false the moment it is recorded.
      const kept: Array<string> = [];
      mine.forEach(result => {
        const key = getSurveyTestCheckDetails(result.details).key;
        if (!key) return;
        if (result.passed) kept.push(key);
        else res.problems.push(testerText("recorder.problem.presentKey", key));
      });
      if (kept.length) res.checks[check.name] = kept;
      return;
    }
    if (check.payloadType === "nameMap") {
      // One result per key, and each carries the key it is about in its details. The tester declares
      // "key" as a member of its own details, so it is read through the helper rather than re-guarded.
      const map: { [key: string]: any } = {};
      mine.forEach(result => {
        const key = getSurveyTestCheckDetails(result.details).key;
        if (!key) return;
        map[key] = result.actual === undefined ? null : result.actual;
      });
      if (Object.keys(map).length) res.checks[check.name] = map;
      return;
    }
    const actual = mine[0].actual;
    if (!isValidPayload(check.payloadType, actual)) {
      res.problems.push(testerText("recorder.problem.invalidPayload", check.name,
        JSON.stringify(actual) as string));
      return;
    }
    res.checks[check.name] = actual;
  });
  return res;
}

function computeVerify(outcome: SilentRunOutcome, total: number): ITesterVerifyOutcome {
  const testResult = outcome.testResult;
  let passed = 0;
  let failed = 0;
  let firstFailure: { stepIndex: number, text: string } | undefined = undefined;
  (!!testResult ? testResult.steps : []).forEach(step => {
    step.checks.forEach(check => {
      if (check.passed) {
        passed += 1;
        return;
      }
      failed += 1;
      if (!firstFailure) {
        firstFailure = {
          stepIndex: step.index,
          text: check.message || testerText("recorder.session.checkSubject", check.target, check.check),
        };
      }
    });
    if (!firstFailure && step.status === "error") {
      const issue = step.issues.filter(item => item.severity === "error")[0];
      if (!!issue) {
        firstFailure = {
          stepIndex: step.index,
          text: testerText("recorder.session.issueText", issue.code, issue.message),
        };
      }
    }
  });
  return {
    status: !!testResult ? testResult.status : "error",
    passed: passed,
    failed: failed,
    firstFailure: firstFailure,
    issues: getBlockingIssues(outcome),
    states: buildStepStates(outcome, total),
  };
}

interface StepStatesSource {
  testResult?: { steps: Array<{ index: number, status: string, checks: Array<ISurveyTestCheckResult> }> };
}

function buildStepStates(outcome: StepStatesSource, total: number): Array<TesterStepState> {
  const states: Array<TesterStepState> = [];
  for (let i = 0; i < total; i++) states.push("unrun");
  if (!outcome.testResult) return states;
  outcome.testResult.steps.forEach(step => {
    if (step.index >= total) return;
    states[step.index] = step.status === "passed" ? "ok"
      : step.status === "failed" ? "failed"
        : step.status === "error" ? "errored" : "unrun";
  });
  return states;
}

function failedPrefixSteps(outcome: StepStatesSource): Array<{ index: number, text: string }> {
  if (!outcome.testResult) return [];
  const res: Array<{ index: number, text: string }> = [];
  outcome.testResult.steps.forEach(step => {
    const failed = step.checks.filter(check => !check.passed)[0];
    if (!failed) return;
    res.push({
      index: step.index,
      text: failed.message || testerText("recorder.session.checkSubject", failed.target, failed.check),
    });
  });
  return res;
}

function insertState(states: Array<TesterStepState>, index: number): Array<TesterStepState> {
  const next = states.slice();
  next.splice(index, 0, "ok");
  return next;
}

// The rest of what the test carries, read straight out of the document: the panel under the step list
// edits these, and the New test form used to ask for them before there was a test to describe.
function readTestFields(test: any): ITesterTestFields {
  if (!test) return {};
  return {
    description: typeof test.description === "string" ? test.description : undefined,
    start: test.start,
    variables: test.variables,
  };
}

// The suite's named starts, offered by name. The one this test can inline is added by the panel: it is
// not a start of the suite's, it is an instruction to take the answers the form holds now.
function readStartNames(suite: any): Array<string> {
  const starts = !!suite && Array.isArray(suite.starts) ? suite.starts : [];
  return starts.filter((start: any) => !!start && typeof start.name === "string")
    .map((start: any) => start.name as string);
}

function parseObjectText(text: string | undefined): { value?: any, error?: string } {
  if (!text || !text.trim()) return {};
  const parsed = parseJson(text);
  if (parsed.error !== undefined) return { error: parsed.error };
  if (!parsed.value || typeof parsed.value !== "object" || Array.isArray(parsed.value)) {
    return { error: testerText("recorder.notAnObject") };
  }
  return { value: parsed.value };
}

// Two steps are the same step when they say the same thing. It is the cursor rule of section 7 and
// nothing else reads it, so a step that cannot be serialised simply never matches.
function signatureOf(step: any): string {
  if (step === undefined) return "";
  try {
    return JSON.stringify(step) || "";
  } catch{
    return "";
  }
}

export type { RecorderOptions };
