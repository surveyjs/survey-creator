import {
  Action, ActionContainer, Base, ListModel, MultiSelectListModel, createDropdownActionModel, property,
  propertyArray,
} from "survey-core";
import type { SurveyModel } from "survey-core";
import type {
  ISurveyTest, ISurveyTestIssue, ISurveyTestsResult, SurveyTestExecutionEvent, SurveyTestFilter,
} from "survey-core/tester";
import type { ConsoleLevel, ConsoleRow } from "../core/consoleLog";
import { describeEvent, formatRowsAsText, isVisibleAtVerbosity } from "../core/consoleLog";
import { PauseGate } from "../core/delay";
import type { DelayGranularity, HostOptions, RunMode } from "../core/hostOptions";
import { applyEvent, createEmptyRun, reconcile, reconcileSegment } from "../core/liveRun";
import type { LiveRun, LiveTest, RunPhase } from "../core/liveRun";
import { describeError, runSuite } from "../core/runSuite";
import {
  buildSegmentSuite, describeSegment, getSegmentSteps, segmentSignature, translateSegmentEvent,
  translateSegmentResult,
} from "../core/segmentRun";
import type { StepSegment } from "../core/segmentRun";
import { getSuiteTests } from "../core/stepInfo";
import { copyToClipboard } from "../core/json";
import { testerText } from "../localization";
import { sameMembers } from "./arrays";
import { buildIssueView } from "./checkView";
import type { IssueView } from "./checkView";
import { TesterConsoleModel } from "./consoleModel";
import { runnerActionBarCss, runnerListCss, runnerMenuCss } from "./runnerCss";
import type {
  ITesterPanelExtras, ITesterRunnerEnvironment, RunnerApi, StartParams, StepCursor, StepRunParams,
} from "./runnerApi";
import { TesterTestRowModel } from "./testRowModel";

// The whole of the Tests tab's list screen, said once and without a framework.
//
// It owns two things that used to be spread over a hook and three components. The run - the abort
// controller, the pause gate, the transcript and the frame that paints it - and the chrome the run is
// watched through: a MultiSelectListModel of test rows, three ActionContainers, and a console. What is
// left for a view is markup.
//
// eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
// Batching (§5 of PROMPT-runner-model.md) is the one rule that had to survive the move, and it matters
// more here than it did in React: a run emits far more events than a browser can usefully repaint, and
// every property write now reaches three subscription mechanisms. So an event mutates a draft and
// nothing else; the frame writes the properties. The order of the console rows is never touched -
// batching is about when they are painted, not about which of them survive.

const MAX_ROWS = 4000;

// One button for what the run does and one for how it is watched, because a person presses the first
// far more often than they change the second. The two words and the two notes moved into the string
// table with everything else the widget says, so this is the order they are offered in and nothing more.
export const RUN_MODES: Array<RunMode> = ["ui", "console"];

// Keyed by the mode, which is a closed set of two: localization.test.ts enumerates RUN_MODES against
// the table rather than grepping for a literal path.
export function getRunModeName(mode: RunMode): string {
  return testerText("runner.modeName." + mode);
}

export function getRunModeNote(mode: RunMode): string {
  return testerText("runner.modeNote." + mode);
}

export function clampDelay(raw: string | number): number {
  const value = Number(raw);
  if (!isFinite(value) || value < 0) return 0;
  return value > 5000 ? 5000 : Math.round(value);
}

// The model an earlier segment left behind, and what it is a model of. The signature is the whole test
// of the answer "may this be continued?": see segmentSignature.
interface HeldModel {
  testName: string;
  testIndex: number;
  survey: SurveyModel;
  at: number;
  signature: string;
}

export class TesterRunnerModel extends Base implements RunnerApi {
  // ---- the run ------------------------------------------------------------------------------------
  @property({ defaultValue: "idle" }) phase!: RunPhase;
  @property({ defaultValue: false }) isPaused!: boolean;
  @property({ defaultValue: 0 }) elapsedMs!: number;
  // Written in the constructor rather than as a decorator default: a default is evaluated when the
  // class is defined, which is before a host can have said which locale it wants.
  @property({ defaultValue: "" }) summaryText!: string;
  // Bumped once per painted frame. It is what a view keys a repaint off when the thing that changed is
  // inside the live tree rather than a property of its own.
  @property({ defaultValue: 0 }) version!: number;

  // ---- the three alert channels the panel shows, and they coexist rather than replace each other:
  // all three are rendered at once when all three have something to say. That is why they are three
  // properties and not a Notifier - Notifier is a fine reusable model, but it holds one message at a
  // time, and forcing three concurrent channels through it would mean inventing a precedence nobody
  // asked for.
  // The run is refused, and the "Fix it in the JSON" Action beside it.
  @property({ defaultValue: "" }) blockedReason!: string;
  // Worth saying before the run without preventing it.
  @property({ defaultValue: "" }) runNotice!: string;
  // What the last transition did - dismissable, so it has dismiss().
  @property({ defaultValue: "" }) transitionNotice!: string;

  // ---- the settings the screen itself owns --------------------------------------------------------
  // The next run's mode, and the run on screen. Two values, still: choosing "Console" must not take the
  // model away from the run that is still being read.
  @property({ defaultValue: "ui" }) mode!: RunMode;
  @property({ defaultValue: "ui" }) activeMode!: RunMode;
  @property({ defaultValue: 0 }) stepDelayMs!: number;
  @property({ defaultValue: "target" }) delayGranularity!: DelayGranularity;
  @property({ defaultValue: false }) logOnLeft!: boolean;
  @property({ defaultValue: true }) highlightTarget!: boolean;
  @property({ defaultValue: true }) renderSurvey!: boolean;
  @property({ defaultValue: false }) canRun!: boolean;
  // Whether the "New test" form is open.
  @property({ defaultValue: false }) naming!: boolean;

  // ---- what the list adds up to -------------------------------------------------------------------
  @property({ defaultValue: 0 }) testCount!: number;
  @property({ defaultValue: 0 }) selectedCount!: number;
  @property({ defaultValue: 0 }) unnamedCount!: number;
  @property({ defaultValue: 0 }) checkTotal!: number;
  @property({ defaultValue: 0 }) checkFailed!: number;
  @property({ defaultValue: "" }) mismatchText!: string;
  @propertyArray() suiteIssues!: Array<ISurveyTestIssue>;

  // ---- what a view renders ------------------------------------------------------------------------
  // The list is the thing the Run button acts on, so selection and the list are one model rather than
  // two.
  public readonly tests: MultiSelectListModel<Action>;
  // "Run N tests", the mode picker, Stop, Resume, and the line that says what happened.
  public readonly toolbar: ActionContainer;
  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // All · None · Failing · Copy log · New test.
  public readonly listHead: ActionContainer;
  // The way out of a blocked run, and the way to put a transition notice away.
  public readonly fixJson: Action;
  public readonly dismissNotice: Action;
  public readonly console: TesterConsoleModel;

  // ---- the RunnerApi surface ----------------------------------------------------------------------
  @property() run!: LiveRun;
  @property() rows!: Array<ConsoleRow>;
  @property() survey!: SurveyModel | undefined;
  @property() result!: ISurveyTestsResult | undefined;
  @property() cursor!: StepCursor | undefined;
  public get isRunning(): boolean {
    return this.phase === "running" || this.phase === "canceling";
  }

  // ---- the engine's own state, none of it reactive ------------------------------------------------
  private draft: LiveRun = createEmptyRun();
  private rowsDraft: Array<ConsoleRow> = [];
  private rowId = 0;
  private scheduled = false;
  private frame = 0;
  private truncated = false;
  private controller?: AbortController;
  private pause = new PauseGate();
  private transcript: Array<{ atMs: number, event: any }> = [];
  private verbosity: HostOptions["verbosity"] = "steps";
  private startedAt = 0;
  private held?: HeldModel;
  private gone = false;

  // The engine this model shows. Undefined means the model is the engine. A host that runs the suite
  // some other way - a test with a stubbed runner, a shell with an engine of its own - hands one in,
  // and then the verbs go there and the run state is read back from it in readSource().
  private source?: RunnerApi;
  private environment?: ITesterRunnerEnvironment;
  private rowModels: Array<TesterTestRowModel> = [];
  // The test whose Edit is waiting for a run to unwind. One at a time, by name, because the verb that
  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // reads "Stopping…" has to be the verb that was pressed.
  private editPendingName?: string;
  // "No selection has been applied yet", as a key no real one can equal: "*" is every test and any
  // other value is a join of names. The prototype wrote the NUL as a raw byte, which makes the file
  // binary to grep and to half the tooling that reads it; the escape is the same string.
  private appliedSelection = "\u0000";

  constructor(source?: RunnerApi) {
    super();
    this.source = source;
    this.run = createEmptyRun();
    this.rows = [];
    this.summaryText = testerText("runner.summary.notRunYet");
    this.console = new TesterConsoleModel({
      onClear: () => this.clearConsole(),
      getTranscript: () => this.getTranscript(),
    });
    this.tests = new MultiSelectListModel<Action>({
      items: [],
      allowSelection: true,
      // Not a listbox of options: a row holds a real checkbox, a run button, an expander and a whole
      // step list, so it is a list of rows and it says so.
      listRole: "list",
      listItemRole: "listitem",
      listAriaLabel: testerText("runner.listAriaLabel"),
      // Available and deliberately not wired: a suite large enough to want a search box gets one later
      // by setting one property.
      searchEnabled: false,
      onSelectionChanged: () => this.onSelectionClicked(),
    });
    this.tests.itemComponent = "svt-test-row";
    // Replacing rather than merging: the list draws under names of this application's own, so there is
    // no library rule left to reset. See runnerCss.ts.
    this.tests.setCssClasses(runnerListCss, false);
    this.toolbar = new ActionContainer();
    this.toolbar.setCssClasses(runnerActionBarCss, false);
    this.listHead = new ActionContainer();
    this.listHead.setCssClasses(runnerActionBarCss, false);
    this.fixJson = new Action({
      id: "fix-json", title: testerText("runner.fixJson"), css: "svt-link", enabled: true,
      action: () => this.callExtra(extras => extras.onFixJson),
    });
    this.dismissNotice = new Action({
      id: "dismiss", title: testerText("runner.dismiss"), css: "svt-link", enabled: true,
      action: () => this.callExtra(extras => extras.onDismissNotice),
    });
    this.buildToolbar();
    this.buildListHead();
  }
  public getType(): string { return "svt-runner"; }

  // ---- what the screen tells the model ------------------------------------------------------------

  // Everything the model does not own, pushed in on the render that will show it. A projection that
  // lagged one render behind would draw the suite as it was.
  public refresh(environment: ITesterRunnerEnvironment): void {
    if (this.gone) return;
    this.environment = environment;
    if (!!this.source)this.readSource();
    this.canRun = environment.canRun;
    this.blockedReason = environment.blockedReason || "";
    this.runNotice = environment.canRun ? (environment.runNotice || "") : "";
    this.transitionNotice = environment.extras.notice || "";
    this.editPendingName = environment.extras.editPendingName;
    this.mode = environment.mode;
    this.activeMode = environment.activeMode;
    this.stepDelayMs = environment.hostOptions.stepDelayMs;
    this.delayGranularity = environment.hostOptions.delayGranularity;
    this.console.autoScroll = environment.hostOptions.autoScrollConsole;
    this.highlightTarget = environment.hostOptions.highlightTarget;
    this.renderSurvey = environment.hostOptions.renderSurvey;
    this.setSuite(environment.suite);
    this.setSelectedNames(environment.selected);
    this.applyRun();
  }

  // The suite document is the source of truth for which rows exist and in what order - but a row that is
  // still in the document keeps its model. A naive rebuild would replace every TesterTestRowModel and lose
  // exactly what this design promises to keep: the expansion, the rename draft and its refusal, an open
  // raw step. So: match by name first, by position for the unnamed, update the survivors in place, and
  // create only what is new.
  public setSuite(suite: any, surveyJson?: any): void {
    if (this.gone || !this.environment) return;
    // The definition every model of this run is built from. The model does not start runs of its own -
    // the screen above it does, through onRun - so nothing here reads it yet; it is taken and kept
    // because "the suite and the survey it is about" is one statement, and a host that hands the model
    // one without the other has said half of it.
    if (surveyJson !== undefined)this.surveyJsonValue = surveyJson;
    const tests = getSuiteTests(suite);
    const actions = this.environment.extras.rowActions;
    const names = tests.map(test => readName(test));
    const pool = this.rowModels.slice();
    const matched: Array<TesterTestRowModel> = [];
    tests.forEach((test, index) => {
      const named = isNamed(test);
      let at = -1;
      if (named) {
        at = pool.findIndex(row => !row.unnamed && row.name === (test as ISurveyTest).name);
      } else {
        // A test with no name has no address but its position, so that is what it is matched by.
        at = pool.findIndex(row => row.unnamed && row.index === index);
        if (at < 0) at = pool.findIndex(row => row.unnamed);
      }
      matched.push(at < 0 ? new TesterTestRowModel() : pool.splice(at, 1)[0]);
    });
    pool.forEach(row => row.dispose());

    const changed = matched.length !== this.rowModels.length ||
      matched.some((row, index) => row !== this.rowModels[index]);
    this.rowModels = matched;
    matched.forEach((row, index) => row.setCase({
      name: names[index],
      index: index,
      disabled: !!tests[index] && (tests[index] as ISurveyTest).disabled === true,
      unnamed: !isNamed(tests[index]),
      // The case as the document holds it. The row lists every step of it, run or not, which is what
      // makes "run to this one" a thing that can be pressed before anything has run at all.
      steps: !!tests[index] && Array.isArray((tests[index] as ISurveyTest).steps)
        ? (tests[index] as ISurveyTest).steps as Array<any>
        : [],
      siblingNames: names,
      actions: actions,
      owner: this,
      reveal: this.reveal,
    }));
    if (changed) {
      this.tests.setItems(matched.map(row => row.action));
      // A rebuilt list has to be told what is selected again: the items it holds are new to it.
      this.appliedSelection = "\u0000";
    }
    this.testCount = matched.length;
    this.unnamedCount = matched.filter(row => row.unnamed).length;
  }

  // What a run produced, laid over the rows by position - and the counts, the summary line and the
  // suite-level issues that go with it.
  public applyRun(): void {
    if (this.gone || !this.environment) return;
    const run = this.run;
    const liveByName: { [name: string]: LiveTest } = {};
    run.tests.forEach(test => { liveByName[test.name] = test; });
    const locked = this.isRunning;
    const modeName = getRunModeName(this.mode);
    let total = 0;
    let failed = 0;
    this.rowModels.forEach(row => {
      const live = liveByName[row.name];
      row.applyRun({
        live: live,
        elapsedMs: run.elapsedMs,
        // One test at a time carries the cursor: the model that was held is one model, and it belongs
        // to the test the last part-run was about.
        cursor: !!this.cursor && this.cursor.testIndex === row.index ? this.cursor : undefined,
        locked: locked,
        canRun: this.canRun,
        blockedReason: this.blockedReason,
        runModeName: modeName,
        editPending: !!this.editPendingName && this.editPendingName === row.name,
      });
      (!!live ? live.steps : []).forEach(step => step.checks.forEach(check => {
        total += 1;
        if (!check.passed) failed += 1;
      }));
    });
    this.checkTotal = total;
    this.checkFailed = failed;
    // Assigned only when the contents differ. A fresh array every time would be a change every time,
    // and refresh() runs on every render: the two would drive each other round for ever.
    if (!sameMembers(this.suiteIssues, run.issues))this.suiteIssues = run.issues.slice();
    this.mismatchText = run.mismatches.join("; ");
    this.summaryText = this.describeRun();
    this.updateToolbar();
  }

  // The suite's own issues - a malformed document, a missing definition - as the lines that draw them.
  public get suiteIssueViews(): Array<IssueView> {
    return this.suiteIssues.map((issue, at) => buildIssueView(issue, String(at)));
  }
  public get checkTotals(): { total: number, failed: number } {
    return { total: this.checkTotal, failed: this.checkFailed };
  }
  public get rowModelList(): Array<TesterTestRowModel> { return this.rowModels; }
  public get hasSuiteIssues(): boolean { return !!this.suiteIssues.length || !!this.mismatchText; }
  public get hasNoTests(): boolean { return !this.rowModels.length; }
  public get canCreateTest(): boolean {
    return !!this.environment && !!this.environment.extras.newTest;
  }
  public get canFixJson(): boolean {
    return !!this.environment && !!this.environment.extras.onFixJson;
  }
  public get canDismissNotice(): boolean {
    return !!this.environment && !!this.environment.extras.onDismissNotice;
  }
  public get canOpenSettings(): boolean {
    return !!this.environment && !!this.environment.extras.onSettings;
  }
  public get canToggleLog(): boolean {
    return !!this.environment && this.environment.canToggleLog;
  }
  // A console run has no model to watch, so the pane it would have filled shows the run itself, and the
  // full log is read in that same place.
  public get consoleOnLeft(): boolean { return this.activeMode === "console" || this.logOnLeft; }
  public get logToggleTitle(): string {
    return this.logOnLeft ? testerText("runner.logToModel") : testerText("runner.logToFull");
  }
  public get checkFootText(): string {
    return testerText("runner.checkFoot", this.checkTotal, this.checkFailed);
  }
  // What the picker used to say at the bottom of its list. A session is addressed by name, so a test
  // without one cannot be recorded into - and it is said where the name can be given.
  public get unnamedNote(): string {
    const count = this.unnamedCount;
    if (!count || !this.environment || !this.environment.extras.rowActions.onRename) return "";
    return testerText("runner.unnamedNote", count);
  }

  // What the pane on the left is showing, in one line. A failed test leaves its model exactly where
  // the failing check found it, and that is the whole reason the pane stays on screen after the run.
  public get surveyPaneTitle(): string {
    const test = this.currentTest;
    return !!test && !!test.name ? test.name : testerText("runner.paneTitle");
  }
  public get surveyPaneNote(): string {
    if (this.isRunning) return testerText("runner.paneNoteRunning");
    const status = !!this.currentTest ? this.currentTest.status : undefined;
    if (status === "failed" || status === "error") return testerText("runner.paneNoteFailed");
    return testerText("runner.paneNoteLast");
  }
  // Whether the question a command is about to write into should be outlined at all: the Setup tab
  // says so, and a run that has ended points at nothing.
  public get marksTarget(): boolean { return this.highlightTarget && this.isRunning; }
  // Whether the model under test is drawn on the left at all, or the run happens headless.
  public get rendersSurvey(): boolean { return this.renderSurvey; }

  // The model of the test the run is on, and the question it is about to write into. The question has to
  // be marked before the command writes into it, whatever the delay granularity is: at "step" the only
  // wait is the one after stepStarted, which is announced before any target of that step is - so the
  // step's own first target stands in until targetStarted names one.
  public get currentTest(): LiveTest | undefined {
    return this.run.tests.find(test => test.index === this.run.currentTestIndex);
  }
  public get currentTarget(): string | undefined {
    const test = this.currentTest;
    const step = !test ? undefined : test.steps.find(one => one.index === this.run.currentStepIndex);
    return this.run.currentTarget ||
      (!!step && step.status === "running" ? step.targets[0] : undefined);
  }

  // ---- selection ----------------------------------------------------------------------------------

  // Every path that changes the selection ends here, because MultiSelectListModel.selectedItems is a
  // plain field rather than a @property: onItemClick pushes and splices it without raising anything, so
  // a checkbox bound to isItemSelected or a "Run N tests" title counting the selection would go stale
  // after the first click. Views bind to what this writes - the row's own "selected" and the run
  // Action's title - and never to selectedItems.
  public syncSelection(): void {
    let count = 0;
    this.rowModels.forEach(row => {
      const selected = !row.disabled && this.tests.isItemSelected(row.action);
      row.selected = selected;
      if (selected) count += 1;
    });
    this.selectedCount = count;
    const run = this.toolbar.getActionById("run");
    if (!!run) {
      run.title = testerText("runner.run", count);
      run.enabled = this.canRun && !this.isRunning && count > 0;
      run.tooltip = this.blockedReason;
    }
    this.tests.updateState();
  }

  // "All", "None" and "Failing" are three calls that set the selection - they are selection operations
  // and not filters, and the rule that undefined means every test stays where it is by mapping an
  // all-selected list back to undefined at the run boundary.
  public get selectedNames(): Array<string> | undefined {
    const runnable = this.runnableActions;
    const names: Array<string> = [];
    runnable.forEach(action => { if (this.tests.isItemSelected(action)) names.push(action.id); });
    return names.length === runnable.length ? undefined : names;
  }
  public selectAll(): void { this.publishSelection(undefined); }
  public selectNone(): void { this.publishSelection([]); }
  public selectFailing(): void {
    this.publishSelection(this.rowModels.filter(row => row.isFailure).map(row => row.name));
  }
  public get hasFailing(): boolean { return this.rowModels.some(row => row.isFailure); }
  public toggleSelected(row: TesterTestRowModel): void {
    if (row.selectDisabled) return;
    // onItemClick also sets isExpanded = false, because the class was written for dropdowns. In an
    // always-visible list that write is meaningless and nothing here reads it.
    this.tests.onItemClick(row.action);
  }

  public setSelectedNames(names: Array<string> | undefined): void {
    const key = !names ? "*" : names.slice().sort().join("");
    if (key === this.appliedSelection) return;
    this.appliedSelection = key;
    const runnable = this.runnableActions;
    this.tests.setSelectedItems(!names
      ? runnable.slice()
      : runnable.filter(action => names.indexOf(action.id) > -1));
    this.syncSelection();
  }

  private get runnableActions(): Array<Action> {
    return this.rowModels.filter(row => !row.disabled).map(row => row.action);
  }
  private publishSelection(names: Array<string> | undefined): void {
    this.setSelectedNames(names);
    if (!!this.environment)this.environment.onSelected(names);
  }
  private onSelectionClicked(): void {
    this.syncSelection();
    const names = this.selectedNames;
    this.appliedSelection = !names ? "*" : names.slice().sort().join("");
    if (!!this.environment)this.environment.onSelected(names);
  }

  // ---- the verbs the screen offers ----------------------------------------------------------------

  public runSelected(): void {
    if (!this.environment || !this.canRun || this.isRunning || !this.selectedCount) return;
    this.environment.onRun(this.selectedNames);
  }
  public setMode(next: RunMode): void {
    if (this.mode === next) return;
    this.mode = next;
    // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
    // Every row says which mode its own ▶ will use, so the mode is written onto them here rather than
    // read back off the runner by each of them.
    this.rowModels.forEach(row => { row.runModeName = getRunModeName(next); });
    // The picker's choice outlives this screen - it is persisted - so it is handed back up.
    if (!!this.environment)this.environment.onMode(next);
  }
  public setStepDelayMs(next: number): void { this.patchHost({ stepDelayMs: clampDelay(next) }); }
  public setDelayGranularity(next: DelayGranularity): void { this.patchHost({ delayGranularity: next }); }
  public toggleLog(): void { this.logOnLeft = !this.logOnLeft; }
  public toggleNaming(): void { this.naming = !this.naming; }
  public copyLog(): void { copyToClipboard(formatRowsAsText(this.rows)); }
  public dismiss(): void { this.callExtra(extras => extras.onDismissNotice); }
  public revealCase(path: string): void {
    if (!!this.environment)this.environment.onRevealCase(path);
  }
  public revealSurvey(jsonPath: string): void {
    if (!!this.environment)this.environment.onRevealSurvey(jsonPath);
  }
  // Handed to every row, so a row component can print an issue line with its two links without
  // reaching past the one model it subscribes to. It is stable, so a row never has to be told again.
  private readonly reveal = {
    onCase: (path: string): void => this.revealCase(path),
    onSurvey: (jsonPath: string): void => this.revealSurvey(jsonPath),
  };
  public createTest(params: { name: string }): string | undefined {
    const support = !!this.environment ? this.environment.extras.newTest : undefined;
    if (!support) return undefined;
    return support.onCreate(params);
  }

  private patchHost(patch: Partial<HostOptions>): void {
    if (!this.environment) return;
    this.environment.onHostOptions({ ...this.environment.hostOptions, ...patch });
  }
  private callExtra(pick: (extras: ITesterPanelExtras) => (() => void) | undefined): void {
    if (!this.environment) return;
    const handler = pick(this.environment.extras);
    if (!!handler) handler();
  }

  // ---- the chrome ---------------------------------------------------------------------------------

  private buildToolbar(): void {
    // survey-core's own dropdown Action: an Action with a PopupModel over a ListModel of the two
    // modes, which is precisely what RunButton hand-rolled - backdrop, positioning and
    // role="menuitemradio" included. "css" lands on the item wrapper and "innerCss" on the button
    // itself, which is why this application's own class names are on the second of the two.
    const mode = createDropdownActionModel(
      {
        id: "mode", css: "svt-tests__action svt-tests__action--mode", innerCss: "svt-button svt-run-button__mode",
        title: getRunModeName(this.mode),
      },
      {
        items: RUN_MODES.map(id => ({ id: id, title: getRunModeName(id), tooltip: getRunModeNote(id) })),
        allowSelection: true,
        searchEnabled: false,
        selectedItem: { id: this.mode, title: getRunModeName(this.mode) },
        onSelectionChanged: (item: any) => this.setMode(item.id as RunMode),
        // A class of ours on the popup. The library draws the menu - the click-away layer, the
        // positioning, the roles - and this application paints it, the way it painted the menu it
        // hand-rolled: the popup chrome outside a survey root has no theme surface of its own.
        cssClass: "svt-run-button__popup",
        verticalPosition: "bottom",
        horizontalPosition: "center",
      },
    );
    mode.tooltip = testerText("runner.modeTooltip");
    // createDropdownActionModel stamps the library's own menu classes onto the list it builds, so the
    // menu is dressed after the fact. Action.data is that ListModel - dropdown-action.ts sets it.
    (mode.data as ListModel).setCssClasses(runnerMenuCss, false);
    this.toolbar.setItems([
      new Action({
        id: "run", title: testerText("runner.run", 0), css: "svt-tests__action svt-tests__action--run",
        innerCss: "svt-button svt-button--primary", enabled: false,
        action: () => this.runSelected(),
      }),
      mode,
      new Action({
        id: "stop", title: testerText("runner.stop"), css: "svt-tests__action", innerCss: "svt-button",
        enabled: false,
        action: () => this.stop(),
      }),
      new Action({
        id: "resume", title: testerText("runner.resume"), css: "svt-tests__action",
        innerCss: "svt-button svt-button--primary",
        visible: false, enabled: true,
        action: () => this.resume(),
      }),
      // The host options, as the form they are - opened over this bar by the widget root, which owns
      // the popup. See settingsModel.ts.
      new Action({
        id: "settings", title: testerText("runner.settings"), tooltip: testerText("runner.settingsTooltip"),
        css: "svt-tests__action", innerCss: "svt-button", enabled: true, visible: false,
        action: () => this.callExtra(extras => extras.onSettings),
      }),
    ]);
  }

  private buildListHead(): void {
    this.listHead.setItems([
      new Action({ id: "all", title: testerText("runner.all"), css: "svt-tests__link", innerCss: "svt-link", enabled: true, action: () => this.selectAll() }),
      new Action({ id: "none", title: testerText("runner.none"), css: "svt-tests__link", innerCss: "svt-link", enabled: true, action: () => this.selectNone() }),
      new Action({ id: "failing", title: testerText("runner.failing"), css: "svt-tests__link", innerCss: "svt-link", enabled: true, action: () => this.selectFailing() }),
      new Action({ id: "copy-log", title: testerText("runner.copyLog"), css: "svt-tests__link", innerCss: "svt-link", enabled: true, action: () => this.copyLog() }),
      new Action({
        id: "new-test", title: testerText("runner.newTest"), css: "svt-tests__link",
        innerCss: "svt-link svt-link--strong",
        visible: false, enabled: true,
        action: () => this.toggleNaming(),
      }),
    ]);
  }

  private updateToolbar(): void {
    const locked = this.isRunning;
    this.syncSelection();
    const stop = this.toolbar.getActionById("stop");
    if (!!stop) stop.enabled = locked;
    const resume = this.toolbar.getActionById("resume");
    if (!!resume) resume.visible = this.isPaused;
    const mode = this.toolbar.getActionById("mode");
    if (!!mode) mode.title = getRunModeName(this.mode);
    ["all", "none"].forEach(id => {
      const action = this.listHead.getActionById(id);
      if (!!action) action.enabled = !locked;
    });
    const failing = this.listHead.getActionById("failing");
    if (!!failing) failing.enabled = !locked && this.hasFailing;
    const newTest = this.listHead.getActionById("new-test");
    if (!!newTest) {
      newTest.visible = this.canCreateTest;
      newTest.title = this.naming ? testerText("runner.cancel") : testerText("runner.newTest");
    }
    const settings = this.toolbar.getActionById("settings");
    if (!!settings) settings.visible = this.canOpenSettings;
  }

  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // "3 passed · 2.9s". Anything that is zero is left out: a run says what happened, not what did not.
  private describeRun(): string {
    const run = this.run;
    if (run.phase === "idle") return testerText("runner.summary.notRunYet");
    const seconds = testerText("runner.summary.seconds", run.elapsedMs);
    const summary = run.summary;
    const counts: Array<string> = [];
    if (!!summary) {
      if (summary.passed) counts.push(testerText("runner.summary.passed", summary.passed));
      if (summary.failed) counts.push(testerText("runner.summary.failed", summary.failed));
      if (summary.errored) counts.push(testerText("runner.summary.errored", summary.errored));
      if (summary.skipped) counts.push(testerText("runner.summary.skipped", summary.skipped));
      if (summary.canceled) counts.push(testerText("runner.summary.canceled", summary.canceled));
    } else {
      const done = run.tests.filter(test => test.status !== "running").length;
      counts.push(testerText("runner.summary.progress", done, run.plannedTests));
    }
    if (!counts.length) counts.push(testerText("runner.summary.noTestRan"));
    // A part-run says which part it was: "1 passed" about three steps of a seven-step case is true of
    // the three and of nothing else.
    const cursor = this.cursor;
    const part = !!cursor && !!cursor.ran
      ? testerText("runner.summary.part", describeSegment(cursor.ran), cursor.testName)
      : "";
    const state = this.isPaused
      ? testerText("runner.summary.paused")
      : run.phase === "canceling"
        ? testerText("runner.summary.stopping")
        : run.phase === "running" ? testerText("runner.summary.running") : "";
    return testerText("runner.summary.line",
      counts.join(testerText("runner.summary.join")), part, seconds, state);
  }

  // ---- the run itself -----------------------------------------------------------------------------

  private surveyJsonValue: any = undefined;
  public get surveyJson(): any { return this.surveyJsonValue; }

  public start(params: StartParams): void {
    if (!!this.source) { this.source.start(params); return; }
    if (this.gone || !!this.controller) return;
    const abort = new AbortController();
    this.controller = abort;
    this.pause = new PauseGate();
    this.verbosity = params.hostOptions.verbosity;
    this.startedAt = performance.now();
    this.truncated = false;
    this.draft = createEmptyRun();
    this.draft.phase = "running";
    // A run of whole tests builds a model of its own for every one of them, so whatever a part-run was
    // holding is a model of a state this run is about to leave behind. It goes, and so does the cursor
    // that pointed into it.
    this.held = undefined;
    this.cursor = undefined;
    // Replaced by what runStarted says the moment the run begins: this is only what the panel shows
    // between pressing Run and the first event.
    this.draft.plannedTests = !params.selectedTestNames
      ? getSuiteTests(params.suite).length : params.selectedTestNames.length;
    this.rowsDraft = [];
    this.transcript = [];
    this.result = undefined;
    this.survey = undefined;
    this.isPaused = false;
    const selected = params.selectedTestNames;
    // The checkboxes of this application are keyed by test name, so the filter reads a name. The tester
    // hands it an index as well, and a host whose suite may hold two tests of the same name selects by
    // that instead: a name is warned about when it repeats, so it is not an identity.
    const testFilter: SurveyTestFilter | undefined = !selected
      ? undefined : (test: ISurveyTest) => selected.indexOf(test.name) > -1;
    this.log("info", testerText("runner.log.runRequested",
      !selected ? undefined : selected.length, getSuiteTests(params.suite).length,
      params.hostOptions.stepDelayMs, params.hostOptions.delayGranularity,
      params.hostOptions.attachServerValidation));
    this.flush(true);

    void (async() => {
      try {
        const outcome = await runSuite({
          surveyJson: params.surveyJson,
          // The document itself, unchanged: the selection is execution, not a rewrite of the suite.
          suite: params.suite,
          testFilter: testFilter,
          testOptions: params.testOptions,
          hostOptions: params.hostOptions,
          signal: abort.signal,
          pause: this.pause,
          onEvent: (event, atMs) => this.onEvent(event, atMs),
          onSurveyCreated: model => { if (!this.gone)this.survey = model; },
          onLog: (level, text, detail) => this.log(level, text, detail),
          onPausedChanged: paused => { if (!this.gone)this.isPaused = paused; },
        });
        this.draft.status = outcome.result.status;
        this.draft.summary = outcome.result.summary;
        this.draft.elapsedMs = outcome.elapsedMs;
        // The resolved result is the canonical one. A disagreement with what the events built can only
        // be a bug in this host or in the tester, so it is shown instead of smoothed over.
        const mismatches = reconcile(this.draft, outcome.result);
        this.draft.mismatches = mismatches;
        mismatches.forEach(text => this.log("error", testerText("runner.log.disagree", text)));
        if (!this.gone)this.result = outcome.result;
      } catch(error) {
        // run() does not reject: it reports everything as an issue. Reaching this is a host bug.
        this.log("error", testerText("runner.log.threw", describeError(error)));
      } finally {
        this.draft.phase = "done";
        this.controller = undefined;
        if (!this.gone && !params.hostOptions.keepLastModel)this.survey = undefined;
        if (!this.gone)this.isPaused = false;
        this.flush(true);
      }
    })();
  }

  // Running one test up to one of its steps. It is the same engine, the same transcript and the same
  // tree as a whole run - what differs is three things, and all three are the feature:
  //
  // The suite handed to the runner holds a slice of one test's steps (segmentRun.ts), because the tester
  // runs a case whole and has no step to stop at.
  //
  // A run that goes further into the same case continues on the model the last one stopped on, so the
  // steps that already ran do not run twice: it is the state on screen that is being carried forward,
  // and re-running them would be a different run producing a different state. Going back is the opposite
  // and for the same reason - a model cannot be un-run, so a run to an earlier step builds a new one and
  // replays from the first step.
  //
  // The model is kept when it stops, not thrown away: it is the answer to "what does the survey look
  // like at step 5", which is the question a person asks by pressing this.
  public runSteps(params: StepRunParams): void {
    if (!!this.source) { this.source.runSteps(params); return; }
    if (this.gone || !!this.controller) return;
    const count = getSegmentSteps(params.suite, params.testIndex).length;
    const to = Math.max(0, Math.min(params.to, count));
    const inputs = {
      surveyJson: params.surveyJson, suite: params.suite, testIndex: params.testIndex,
      testName: params.testName, testOptions: params.testOptions,
      attachServerValidation: params.hostOptions.attachServerValidation,
    };
    const holding = this.held;
    // Continued only when the model is a model of exactly the steps in front of the cursor, of this
    // test, of this survey, under these options. Anything else and it is a model of something else.
    const continued = !!holding && holding.testName === params.testName &&
      holding.testIndex === params.testIndex && holding.at <= to && holding.at <= count &&
      holding.signature === segmentSignature({ ...inputs, at: holding.at });
    const from = continued ? (holding as HeldModel).at : 0;
    if (continued && from === to) return;

    const abort = new AbortController();
    this.controller = abort;
    this.pause = new PauseGate();
    this.verbosity = params.hostOptions.verbosity;
    this.startedAt = performance.now();
    this.truncated = false;
    if (!continued) {
      this.draft = createEmptyRun();
      this.survey = undefined;
      this.held = undefined;
    }
    this.draft.phase = "running";
    this.draft.plannedTests = 1;
    this.draft.mismatches = [];
    this.rowsDraft = [];
    this.transcript = [];
    this.result = undefined;
    this.isPaused = false;

    const segment: StepSegment = {
      testIndex: params.testIndex, testName: params.testName, from: from, to: to, count: count,
    };
    this.log("info", testerText("runner.log.segmentRequested", describeSegment(segment), params.testName,
      continued ? "continued" : from === to ? "empty" : "fresh"));
    this.flush(true);

    void (async() => {
      let model: SurveyModel | undefined = continued ? (holding as HeldModel).survey : undefined;
      try {
        const outcome = await runSuite({
          surveyJson: params.surveyJson,
          suite: buildSegmentSuite(params.suite, segment),
          // By position: the segment suite keeps every test where the document has it, so this is the
          // index the events carry and the index "tests[i]" means in the Tests JSON tab.
          testFilter: (_test, testIndex) => testIndex === segment.testIndex,
          createSurvey: !continued ? undefined : () => (holding as HeldModel).survey,
          testOptions: params.testOptions,
          hostOptions: params.hostOptions,
          signal: abort.signal,
          pause: this.pause,
          onEvent: (event, atMs) => this.onEvent(translateSegmentEvent(event, from), atMs, continued),
          onSurveyCreated: created => {
            model = created;
            if (!this.gone)this.survey = created;
          },
          onLog: (level, text, detail) => this.log(level, text, detail),
          onPausedChanged: paused => { if (!this.gone)this.isPaused = paused; },
        });
        const resolved = translateSegmentResult(outcome.result, from);
        this.draft.status = resolved.status;
        this.draft.summary = resolved.summary;
        this.draft.elapsedMs = outcome.elapsedMs;
        const mismatches = reconcileSegment(this.draft, resolved, segment);
        this.draft.mismatches = mismatches;
        mismatches.forEach(text => this.log("error", testerText("runner.log.disagree", text)));
        if (!this.gone)this.result = resolved;

        // Where the case actually stopped. It is the number of steps the result reports and not the "to"
        // that was asked for: a failing check with stopOnFirstFailure, or an error, ends the run earlier.
        const testResult = resolved.tests[0];
        const ranTo = !!testResult ? from + testResult.steps.length : from;
        // The model is worth continuing on only when every step it ran ended in a verdict. An error or a
        // cancellation stops in the middle of a command, and what the model holds then is nobody's
        // description of anything - so it is dropped and the next run starts from the first step.
        const dropped = !testResult
          ? testerText("runner.dropped.noResult")
          : !model
            ? testerText("runner.dropped.noModel")
            : testResult.status === "error" || testResult.status === "canceled"
              ? testerText("runner.dropped.unfinished", testResult.status)
              : undefined;
        this.held = !!dropped ? undefined : {
          testName: params.testName, testIndex: params.testIndex, survey: model as SurveyModel,
          at: ranTo, signature: segmentSignature({ ...inputs, at: ranTo }),
        };
        if (!!dropped)this.log("warn", testerText("runner.log.modelNotKept", dropped));
        if (!this.gone) {
          this.cursor = {
            testName: params.testName, testIndex: params.testIndex, at: !dropped ? ranTo : 0,
            count: count, held: !dropped, ran: { from: from, to: ranTo }, dropped: dropped,
          };
        }
      } catch(error) {
        // run() does not reject: it reports everything as an issue. Reaching this is a host bug.
        this.log("error", testerText("runner.log.threw", describeError(error)));
        this.held = undefined;
        if (!this.gone)this.cursor = undefined;
      } finally {
        this.draft.phase = "done";
        this.controller = undefined;
        // The model stays on screen whatever keepLastModel says: it is the state the case is stopped in,
        // and looking at it is the reason this run was started.
        if (!this.gone)this.isPaused = false;
        this.flush(true);
      }
    })();
  }

  public stop(): void {
    if (!!this.source) { this.source.stop(); return; }
    if (!this.controller) return;
    this.draft.phase = "canceling";
    this.log("warn", testerText("runner.log.stopPressed"));
    // Both waits of this host end on the signal, so the effect is immediate even mid-pause.
    this.controller.abort();
    this.pause.resume();
    this.flush(true);
  }

  public resume(): void {
    if (!!this.source) { this.source.resume(); return; }
    this.pause.resume();
    if (!this.gone)this.isPaused = false;
  }

  public clearConsole(): void {
    if (!!this.source) { this.source.clearConsole(); return; }
    this.rowsDraft = [];
    this.truncated = false;
    this.flush(true);
  }

  public getTranscript(): string {
    if (!!this.source) return this.source.getTranscript();
    return JSON.stringify({ events: this.transcript, result: this.result }, null, 2);
  }

  // dispose() is part of the contract, not a courtesy: a long-lived Base holding an AbortController, a
  // PauseGate and a scheduled frame must stop all three for whoever owns it. A model that outlives its
  // view must never keep a run writing into it.
  public dispose(): void {
    if (this.gone) return;
    this.gone = true;
    if (!!this.controller)this.controller.abort();
    this.controller = undefined;
    this.pause.resume();
    if (this.scheduled) {
      cancelAnimationFrame(this.frame);
      this.scheduled = false;
    }
    // The list holds the rows' own Actions, and the row disposes its own - so the list lets go of them
    // before either of the two disposes anything.
    this.tests.setItems([]);
    this.rowModels.forEach(row => row.dispose());
    this.rowModels = [];
    this.console.dispose();
    this.tests.dispose();
    this.toolbar.dispose();
    this.listHead.dispose();
    this.fixJson.dispose();
    this.dismissNotice.dispose();
    super.dispose();
  }

  // ---- batching -----------------------------------------------------------------------------------

  private flush(immediate = false): void {
    if (this.gone) return;
    if (immediate) {
      if (this.scheduled) {
        cancelAnimationFrame(this.frame);
        this.scheduled = false;
      }
      this.publish();
      return;
    }
    if (this.scheduled) return;
    this.scheduled = true;
    this.frame = requestAnimationFrame(() => this.publish());
  }

  // The only place a property is set while a run is in flight. Nothing sets one per event: an event
  // mutates the draft and the queue, and this writes what a frame is worth of them.
  private publish(): void {
    if (this.gone) return;
    this.scheduled = false;
    this.version += 1;
    this.run = { ...this.draft, version: this.version };
    this.rows = this.rowsDraft.slice();
    this.console.setRows(this.rows);
    this.phase = this.draft.phase;
    this.elapsedMs = this.draft.elapsedMs;
    this.applyRun();
  }

  private pushRow(row: Omit<ConsoleRow, "id">): void {
    this.rowId += 1;
    this.rowsDraft.push({ ...row, id: this.rowId });
    if (this.rowsDraft.length > MAX_ROWS) {
      // Said out loud rather than dropped quietly: a truncated transcript that looks complete is worse
      // than a short one that says so.
      this.rowsDraft.splice(0, this.rowsDraft.length - MAX_ROWS);
      if (!this.truncated) {
        this.truncated = true;
        this.rowId += 1;
        this.rowsDraft.unshift({
          id: this.rowId, atMs: 0, level: "warn", source: "host", indent: 0,
          text: testerText("runner.log.truncated", MAX_ROWS),
        });
      }
    }
  }

  private log(level: ConsoleLevel, text: string, detail?: string): void {
    this.pushRow({
      atMs: performance.now() - this.startedAt, level: level, source: "host", indent: 0,
      text: text, detail: detail,
    });
    this.flush();
  }

  private onEvent(event: SurveyTestExecutionEvent, atMs: number, continued?: boolean): void {
    applyEvent(this.draft, event, continued);
    stampTiming(this.draft, event, atMs);
    this.draft.elapsedMs = atMs;
    this.transcript.push({ atMs: atMs, event: sanitizeEvent(event) });
    if (isVisibleAtVerbosity(event, this.verbosity)) {
      const described = describeEvent(event);
      if (!!described) {
        this.pushRow({
          atMs: atMs,
          level: described.level,
          source: "tester",
          indent: described.indent,
          text: described.text,
          detail: described.detail,
          event: event,
          testIndex: (event as any).testIndex,
          stepIndex: (event as any).stepIndex,
        });
      }
    }
    this.flush();
  }

  // The run state of an engine this model does not own, read back onto its own properties so that
  // everything below reads one way whoever is driving.
  private readSource(): void {
    const source = this.source as RunnerApi;
    this.run = source.run;
    this.rows = source.rows;
    this.console.setRows(source.rows);
    this.survey = source.survey;
    this.isPaused = source.isPaused;
    this.result = source.result;
    this.cursor = source.cursor;
    this.phase = source.run.phase;
    this.elapsedMs = source.run.elapsedMs;
  }
  public setSource(source: RunnerApi): void { this.source = source; }
}

function isNamed(test: any): boolean {
  return !!test && typeof test.name === "string" && !!test.name;
}

function readName(test: any): string {
  return isNamed(test) ? test.name : testerText("common.unnamed");
}

// The tester reports no duration, so the host times a test between the two events that frame it. This
// is presentation only: nothing the runner decides depends on it.
function stampTiming(run: LiveRun, event: SurveyTestExecutionEvent, atMs: number): void {
  if (event.type !== "testStarted" && event.type !== "testCompleted") return;
  const test = event.testIndex === undefined
    ? run.tests[run.tests.length - 1]
    : run.tests.find(candidate => candidate.index === event.testIndex);
  if (!test) return;
  if (event.type === "testStarted") test.startedMs = atMs;
  else if (test.startedMs !== undefined) test.durationMs = atMs - test.startedMs;
}

// The surveyCreated event carries a live SurveyModel: it is not JSON and it is circular. The transcript
// names it instead of trying to serialise it.
function sanitizeEvent(event: SurveyTestExecutionEvent): any {
  if (event.type === "surveyCreated") {
    return { type: event.type, testIndex: event.testIndex, test: event.test, survey: "[SurveyModel]" };
  }
  return event;
}
