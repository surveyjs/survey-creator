import { Base, property } from "survey-core";
import type { ISurveyTestIssue, ISurveyTestOptions } from "survey-core/tester";
import { parseJson } from "../core/json";
import type { HostOptions, RunMode } from "../core/hostOptions";
import { defaultHostOptions, defaultTestOptions, toConsoleOptions } from "../core/hostOptions";
import { getSuiteTests } from "../core/stepInfo";
import { getBrokenTestCount, getSuiteLevelErrors, validateSuite } from "../core/validate";
import { testerLocalization, testerText } from "../localization";
import { deleteTest as deleteTestText, setTestName as setTestNameText } from "../recorder/caseEdit";
import { TesterJsonModel } from "./jsonModel";
import { TesterRecorderModel } from "./recorderModel";
import { TesterRunnerModel } from "./runnerModel";
import { TesterSettingsModel } from "./settingsModel";
import type {
  ITesterNewTestParams, ITesterPanelExtras, ITesterPanelTest, ITesterRunnerEnvironment,
} from "./runnerApi";
import type { ITesterHost, ITesterState } from "./testerHost";

// The widget. A host constructs it, a framework component renders it, and the Creator plugin tab will
// wrap it - which is why everything the prototype's App.tsx decided about the Test tab lives here and
// not in a view: the documents it reads, the three screens it is, and the transitions between them.
//
// The three screens are screens and not tabs: no URL, no history, no nested tab strip. One property and
// three child models, and the table of PROMPT-test-tab.md section 1 is the only place a screen changes.
//
// The test is addressed by name everywhere, never by an index. An edit made in the JSON screen that
// reorders the suite must not silently move a screen onto another case; an index is only ever a position
// in the document being edited.
//
// Three standing rules travel with the machine, and each is written where it lands:
//
//   1. The JSON screen is never blocked. It is the bench the document is repaired on, and the other
//      screens' blocked banners carry an action that leads to it.
//   2. Entering the recorder never fails because something was running. It stops the run and waits, and
// eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
//      the Edit verb that was pressed says "Stopping…" while it unwinds.
//   3. One live model, one owner. Starting a run while a session is open closes the session first -
//      what was recorded is already in the document, and the notice says exactly that.

export type TesterScreen = "runner" | "json" | "recorder";
// What the machine is doing between two screens, so a view can render the in-between without owning it.
export type TesterTransition = "none" | "stopping" | "opening";

export class SurveyTesterModel extends Base {
  @property({ defaultValue: "runner" }) screen!: TesterScreen;
  // What the recorder screen is about - a name, never an index. The json screen reads it once, on entry
  // from another screen, to reveal the test's start, and then lets go: see jsonModel.ts.
  @property() activeTestName!: string | undefined;
  @property({ defaultValue: "none" }) transition!: TesterTransition;
  // One line about what the last transition did. It lives here rather than on the runner because a run
  // started from anywhere can close a session, and this is where that is said.
  @property({ defaultValue: "" }) notice!: string;
  @property({ defaultValue: false }) canRun!: boolean;
  @property({ defaultValue: "" }) blockedReason!: string;
  @property({ defaultValue: "" }) brokenNotice!: string;

  public readonly runner: TesterRunnerModel;
  public readonly json: TesterJsonModel;
  public readonly recorder: TesterRecorderModel;
  public readonly settings: TesterSettingsModel;

  // The widget has no survey editor - the host owns the definition (overview section 4) - so the "in the
  // survey" journey of an issue line is handed out rather than made. A host that has an editor wires it;
  // one that has not simply does not, and the link does nothing.
  public onRevealSurveyJson?: (jsonPath: string) => void;

  private host: ITesterHost;
  private testsText = "";
  private suite: any = undefined;
  private parseError = "";
  private issues: Array<ISurveyTestIssue> = [];
  private surveySignature = "";
  private hostOptions: HostOptions;
  private testOptions: ISurveyTestOptions;
  private mode: RunMode = "ui";
  private activeMode: RunMode = "ui";
  private selectedTestNames: Array<string> | undefined = undefined;
  // The name whose Edit is waiting for a run to unwind.
  private editPendingName?: string;
  // Everything currently awaiting whenNotRunning(), so that dispose() can settle it. See there.
  private waiters: Array<() => void> = [];
  private gone = false;

  constructor(host: ITesterHost) {
    super();
    this.host = host;
    const options = host.options || {};
    if (options.locale !== undefined)testerLocalization.currentLocale = options.locale;
    this.hostOptions = { ...defaultHostOptions, ...(options.hostOptions || {}) };
    this.testOptions = { ...defaultTestOptions, ...(options.testOptions || {}) };
    this.mode = options.mode || "ui";
    this.activeMode = this.mode;

    this.runner = new TesterRunnerModel();
    this.json = new TesterJsonModel(
      { setTestsText: text => this.setTestsText(text) },
      { onBack: () => this.goToRunner() },
    );
    this.recorder = new TesterRecorderModel({
      getTestsText: () => this.host.getTestsText(),
      setTestsText: text => this.setTestsText(text),
      getSurveyJson: () => this.host.getSurveyJson(),
      // Read at the moment a silent run is built, never captured: a change made in the settings form
      // reaches the next replay of an open session without anything being pushed at it.
      getTestOptions: () => this.testOptions,
      getHostOptions: () => this.hostOptions,
    });
    this.recorder.setOptions(options.recorderOptions);
    this.settings = new TesterSettingsModel({
      onTestOptions: next => this.setTestOptions(next),
      onHostOptions: next => this.setHostOptions(next),
    });
    this.settings.setOptions(this.testOptions, this.hostOptions);
    // One Action, one popup: the button sits on the runner's toolbar because that is the bar it belongs
    // to, and the popup it opens is the settings model's.
    const settingsAction = this.runner.toolbar.getActionById("settings");
    if (!!settingsAction)settingsAction.popupModel = this.settings.popup;

    this.updateFromHost();
  }
  public getType(): string { return "svt-tester"; }

  // ---- the documents -------------------------------------------------------------------------------

  // The one reconciliation entry point. The host calls it when either document changed outside the
  // widget, and the widget calls it on itself after its own setTestsText - so there is one code path and
  // not two.
  public updateFromHost(): void {
    if (this.gone) return;
    this.testsText = this.host.getTestsText();
    const parsed = parseJson(this.testsText);
    this.parseError = parsed.error || "";
    this.suite = parsed.value;
    this.issues = this.parseError !== "" ? [] : validateSuite(this.suite);
    this.updateBlocked();

    // 1. the runner: setSuite reconciles rather than rebuilds, so a row a person is working in survives.
    this.refreshRunner();
    // 2. the json screen: the text, the issue rows, the parse error.
    this.json.update({ text: this.testsText, issues: this.issues, parseError: this.parseError });
    // 3. a test that is gone closes the screen that was addressing it - the recorder's rule only. The
    //    json screen let go of the name at entry, so an edit typed there cannot close the editor it is
    //    being typed in.
    this.checkVanishedTest();
    // 4. the recorder's own reconciliation: clamp the cursor to what still matches.
    this.recorder.reconcile();
    // 5. a survey definition that changed under a live run invalidates the model that run is driving.
    this.checkSurveyChanged();
  }

  public get suiteIssues(): Array<ISurveyTestIssue> { return this.issues; }
  public get testsTextValue(): string { return this.testsText; }
  public get suiteValue(): any { return this.suite; }
  public get hostOptionsValue(): HostOptions { return this.hostOptions; }
  public get testOptionsValue(): ISurveyTestOptions { return this.testOptions; }
  public get runMode(): RunMode { return this.mode; }

  // Every edit the widget makes, out immediately and back in through the one entry point. There is no
  // Apply and no staging buffer anywhere in this widget.
  private setTestsText(text: string): void {
    this.host.setTestsText(text);
    this.updateFromHost();
  }

  private updateBlocked(): void {
    const surveyJson = this.host.getSurveyJson();
    const suiteErrors = this.parseError !== "" ? [] : getSuiteLevelErrors(this.issues);
    this.blockedReason = !surveyJson || typeof surveyJson !== "object"
      ? testerText("tester.blocked.noSurvey")
      : this.parseError !== ""
        ? testerText("tester.blocked.testsInvalid", this.parseError)
        : suiteErrors.length
          ? testerText("tester.blocked.suiteError", suiteErrors[0].code, suiteErrors[0].message)
          : "";
    this.canRun = !this.blockedReason;
    // Not a blocker: the runner reports such a test as errored and carries on with the rest, so the run
    // is allowed and the notice says what to expect.
    const broken = this.parseError !== "" ? 0 : getBrokenTestCount(this.issues);
    this.brokenNotice = broken > 0 ? testerText("tester.brokenNotice", broken) : "";
  }

  // A run is a model of the definition it was started with. An edit to that definition mid-run leaves
  // the model on screen describing something that no longer exists, so the run stops and says why.
  private checkSurveyChanged(): void {
    const next = signatureOf(this.host.getSurveyJson());
    const changed = this.surveySignature !== "" && this.surveySignature !== next;
    this.surveySignature = next;
    if (!changed || !this.runner.isRunning) return;
    this.runner.stop();
    this.setNotice(testerText("tester.notice.surveyChanged"));
  }

  // ---- the runner's world --------------------------------------------------------------------------

  private refreshRunner(): void {
    if (this.gone) return;
    this.runner.refresh(this.buildEnvironment());
  }

  private buildEnvironment(): ITesterRunnerEnvironment {
    const extras: ITesterPanelExtras = {
      rowActions: {
        onRunOne: test => this.startRun([test.name]),
        onRunTo: (test, to) => this.runStepsTo(this.indexOf(test), test.name, to),
        onJson: test => this.openJson(test.name),
        onEdit: test => { void this.openRecorder(test.name); },
        editDisabledReason: test => !!test.unnamed
          ? testerText("row.editDisabledUnnamed")
          : undefined,
        // The two edits of the suite itself. They arrived with the recorder's caseEdit.ts, which is what
        // keeps a hand-formatted document formatted through them, and the shape they slot into is the
        // one prompt 03 left: a verb that is not given is not rendered.
        onRename: (test, next) => this.renameTest(test, next),
        onDelete: test => this.deleteTest(test),
      },
      newTest: { onCreate: params => this.createTest(params) },
      onFixJson: () => this.openJson(this.activeTestName),
      onSettings: () => this.settings.toggle(),
      notice: this.notice,
      onDismissNotice: () => this.setNotice(""),
      editPendingName: this.editPendingName,
    };
    return {
      suite: this.suite,
      canRun: this.canRun,
      blockedReason: this.blockedReason,
      runNotice: this.brokenNotice,
      mode: this.mode,
      onMode: next => { this.mode = next; },
      activeMode: this.activeMode,
      hostOptions: this.hostOptions,
      onHostOptions: next => this.setHostOptions(next),
      selected: this.selectedTestNames,
      onSelected: next => { this.selectedTestNames = next; },
      // The Run button of this screen is the suite run, and this screen is where it is watched: there is
      // nowhere to be sent, so nothing moves.
      onRun: selection => this.startRun(selection),
      onRevealCase: path => this.revealCase(path),
      onRevealSurvey: jsonPath => { if (!!this.onRevealSurveyJson)this.onRevealSurveyJson(jsonPath); },
      canToggleLog: true,
      extras: extras,
    };
  }

  // Resolved by name, always, so an edit made between the render and the press cannot move the verb onto
  // another case. A test with no name has no name to be resolved by, and then its position is the only
  // address it has.
  private indexOf(test: ITesterPanelTest): number {
    if (!!test.unnamed) return test.index;
    return getSuiteTests(this.suite).findIndex(one => !!one && one.name === test.name);
  }

  private setHostOptions(next: HostOptions): void {
    this.hostOptions = next;
    this.settings.setOptions(this.testOptions, this.hostOptions);
    this.refreshRunner();
  }
  private setTestOptions(next: ISurveyTestOptions): void {
    this.testOptions = next;
    this.settings.setOptions(this.testOptions, this.hostOptions);
  }

  // ---- the runs ------------------------------------------------------------------------------------

  public startRun(selection: Array<string> | undefined): void {
    if (this.gone || !this.canRun || this.runner.isRunning) return;
    this.clearTheWay();
    this.activeMode = this.mode;
    this.runner.start({
      surveyJson: this.host.getSurveyJson(),
      // The document itself: the selection is execution, not a rewrite of the suite.
      suite: this.suite,
      testOptions: this.testOptions,
      // A console run is the same run with nothing to watch: the overrides live for its length only.
      hostOptions: this.mode === "console" ? toConsoleOptions(this.hostOptions) : this.hostOptions,
      selectedTestNames: selection,
    });
    this.refreshRunner();
  }

  public runStepsTo(testIndex: number, testName: string, to: number): void {
    if (this.gone || !this.canRun || testIndex < 0 || this.runner.isRunning) return;
    this.clearTheWay();
    this.activeMode = this.mode;
    this.runner.runSteps({
      surveyJson: this.host.getSurveyJson(),
      suite: this.suite,
      testOptions: this.testOptions,
      hostOptions: this.mode === "console" ? toConsoleOptions(this.hostOptions) : this.hostOptions,
      testIndex: testIndex,
      testName: testName,
      to: to,
    });
    this.refreshRunner();
  }

  public stopRun(): void { this.runner.stop(); }

  // Rule 3. The run builds its own model, and the recorded one must not stay attached to handlers while
  // a second model is driven. close() flushes the capture before it detaches, so the value a person was
  // half-way through typing is recorded - and what was recorded is already in the document, which is
  // what the notice says instead of a confirm nobody would read twice.
  private clearTheWay(): void {
    if (!this.recorder.isOpen) {
      this.setNotice("");
      if (this.screen !== "runner")this.screen = "runner";
      return;
    }
    const name = this.recorder.testName;
    this.recorder.close();
    this.screen = "runner";
    this.setNotice(testerText("tester.notice.sessionClosedForRun", name || ""));
  }

  // ---- the transitions -----------------------------------------------------------------------------

  public goToRunner(): void {
    if (this.screen === "runner") return;
    this.screen = "runner";
    this.refreshRunner();
  }

  // The way out of the recorder: flush, close, and keep the test selected so the run button reads
  // "Run 1 test" and means the one just recorded.
  public goToRunnerFromRecorder(): void {
    const name = this.recorder.testName || this.activeTestName;
    this.recorder.close();
    if (!!name)this.setSelectedNames([name]);
    this.screen = "runner";
    this.refreshRunner();
  }

  // The row's JSON verb, and the "Fix it in the JSON" action of a blocked banner. The name is the entry
  // reveal and nothing more: from here on the screen is about the document.
  public openJson(testName?: string): void {
    this.setNotice("");
    if (testName !== undefined)this.activeTestName = testName;
    this.json.enter(testName, this.suite);
    this.screen = "json";
    this.refreshRunner();
  }

  // An "in the case" link from an issue line: the json screen, revealed at the node the issue names.
  public revealCase(path: string): void {
    this.openJson(undefined);
    this.json.revealPath(path);
  }

  // Rule 2. Entering the recorder stops whatever is running and waits for it: the promise runSuite
  // returns settles after runCompleted and after every model is released, and the runner's phase
  // reaching "done" is this widget's own observable proxy for that.
  public async openRecorder(testName: string, cursor?: number): Promise<void> {
    if (this.gone) return;
    this.setNotice("");
    if (this.runner.isRunning) {
      // The claim on the test starts here and not at the open: a stop takes as long as the tester needs
      // to unwind, and for the whole of that window the session is not yet open. checkVanishedTest reads
      // this name so that a document edit arriving mid-stop is not invisible to the fallback.
      this.editPendingName = testName;
      this.transition = "stopping";
      this.refreshRunner();
      this.runner.stop();
      await this.whenNotRunning();
      this.editPendingName = undefined;
      if (this.gone) return;
      // The fallback may have fired while this was waiting, and the notice it left says why. Resolved
      // again rather than trusted: opening a session on a test the document no longer holds would give
      // the recorder a subject that does not exist.
      if (!this.hasTest(testName)) {
        this.transition = "none";
        this.screen = "runner";
        this.refreshRunner();
        return;
      }
    }
    this.transition = "opening";
    await this.recorder.open(testName, cursor);
    if (this.gone) return;
    this.transition = "none";
    // open() replays the prefix, and a session can end inside that await: a run started over it, the
    // test left the document, another Edit claimed the screen. Whoever ended it has already said so and
    // put the screen where it belongs, so this one only stands down - switching to the recorder here
    // would show a session that is no longer open.
    if (!this.recorder.isOpen || this.recorder.testName !== testName) {
      this.refreshRunner();
      return;
    }
    this.activeTestName = testName;
    this.screen = "recorder";
    this.refreshRunner();
  }

  // Whether the document, as it stands, holds a test of this name. A document that does not parse says
  // nothing about which tests exist, so it answers "yes" - the same rule checkVanishedTest works to, and
  // for the same reason: a mistyped brace must not close a session.
  private hasTest(testName: string): boolean {
    if (this.parseError !== "" || !this.suite || !Array.isArray(this.suite.tests)) return true;
    return getSuiteTests(this.suite).some(test => !!test && test.name === testName);
  }

  // Creating a test is the act of starting to record it, so there is no second button to press. The
  // refusal string is the recorder's own - re-implementing what it validates here would give two answers
  // to one question.
  public createTest(params: ITesterNewTestParams): string | undefined {
    const problem = this.recorder.createTest(params);
    if (!!problem) return problem;
    void this.openRecorder((params.name || "").trim());
    return undefined;
  }

  // Renaming a test is one edit at tests[i].name, and everything else that holds the name moves with it
  // here and now: a name that is stale in one of the four places is a bug that reads as a UI glitch.
  // Refused before the document is touched - a rename that half-happened is worse than one that did not.
  public renameTest(test: ITesterPanelTest, next: string): string | undefined {
    const wanted = (next || "").trim();
    if (!wanted) return testerText("row.nameRequired");
    const index = this.indexOf(test);
    if (index < 0) return testerText("row.testGone", test.name);
    const clash = getSuiteTests(this.suite)
      .some((other, at) => at !== index && !!other && other.name === wanted);
    if (clash) return testerText("row.nameTaken", wanted);
    // Read before the write: the edit lands through updateFromHost, and the vanished-test fallback
    // closes a session whose test no longer answers to its name before this line is reached again.
    const wasRecorded = this.recorder.isOpen && this.recorder.testName === test.name && !test.unnamed;
    this.setTestsText(setTestNameText(this.host.getTestsText(), index, wanted));
    if (!!this.selectedTestNames) {
      this.setSelectedNames(this.selectedTestNames.map(name => name === test.name ? wanted : name));
    }
    if (this.activeTestName === test.name)this.activeTestName = wanted;
    // The cursor and the prefix replay of an open session are about a case addressed by the old name,
    // so the session ends rather than following silently. What it recorded is in the document.
    if (wasRecorded) {
      if (this.recorder.isOpen)this.recorder.close();
      if (this.screen === "recorder")this.screen = "runner";
      this.setNotice(testerText("tester.notice.renamedSessionClosed", wanted));
    } else {
      // A finished run cannot be rewritten, so the row has no result under its new name. Said out loud:
      // a green dot on a test that has not run under that name would be a lie.
      this.setNotice(testerText("tester.notice.renamed", wanted));
    }
    return undefined;
  }

  // And deleting one is the same edit with no value. There is no confirmation here and there cannot be:
  // asking is a view's business, and a model that opened a dialog would be naming a framework.
  public deleteTest(test: ITesterPanelTest): void {
    const index = this.indexOf(test);
    if (index < 0) return;
    // Read before the write: the vanished-test fallback of updateFromHost closes the session as the
    // edit lands, so afterwards there is nothing left to ask.
    const wasRecorded = this.recorder.isOpen && this.recorder.testName === test.name && !test.unnamed;
    this.setTestsText(deleteTestText(this.host.getTestsText(), index));
    if (!!this.selectedTestNames) {
      this.setSelectedNames(this.selectedTestNames.filter(name => name !== test.name));
    }
    if (this.activeTestName === test.name)this.activeTestName = undefined;
    this.setNotice(testerText("tester.notice.deleted", test.name, wasRecorded));
  }

  public setSelectedNames(names: Array<string> | undefined): void {
    this.selectedTestNames = names;
    this.runner.setSelectedNames(names);
  }

  public setNotice(text: string): void {
    if (this.notice === text) return;
    this.notice = text;
    this.refreshRunner();
  }

  // The vanished-test fallback, and it is the recorder's rule only: the json screen holds no pointer to
  // a test after entry, so renaming or deleting the very test you arrived from never closes the editor.
  // It cannot - that screen is where such a disappearance is being typed.
  //
  // Only asked of a document that parses into a suite: a broken document says nothing about which tests
  // exist, and answering it as "none of them" would close the session on the first mistyped brace.
  // A session that is open is not the only claim on a test. An Edit pressed while a run was in flight
  // holds one for as long as the stop takes to unwind, and a create holds one across its own open - so
  // the claim is "the open session, or the name a transition is on its way to", and both are checked
  // here rather than in three places that would drift.
  private checkVanishedTest(): void {
    if (this.parseError !== "" || !this.suite || !Array.isArray(this.suite.tests)) return;
    const name = this.recorder.isOpen ? this.recorder.testName : this.editPendingName;
    if (!name || getSuiteTests(this.suite).some(test => !!test && test.name === name)) return;
    // Nothing to close when the claim is a pending one: openRecorder resolves the name again after its
    // wait and lands on the runner instead. What is owed either way is the notice that says why.
    if (this.recorder.isOpen)this.recorder.close();
    this.editPendingName = undefined;
    if (this.screen === "recorder")this.screen = "runner";
    this.setNotice(testerText("tester.notice.testGone", name));
  }

  // The runner's phase is the proxy: it reaches "done" in the finally of the run, after the tester has
  // unwound and every model it built has been released.
  //
  // Disposing the widget is the other way this ends, and it has to be: TesterRunnerModel.dispose()
  // aborts the run without publishing, so "phase" never reaches "done" and a wait that only listened
  // for it would never settle - leaving a promise hanging and a handler attached to a disposed model
  // for as long as the continuation lived. So every waiter is held here as well, and dispose() settles
  // them; what they resume into is the "if (this.gone) return" that follows every await.
  private whenNotRunning(): Promise<void> {
    if (this.gone || !this.runner.isRunning) return Promise.resolve();
    return new Promise<void>(resolve => {
      const settle = (): void => {
        const at = this.waiters.indexOf(settle);
        if (at > -1)this.waiters.splice(at, 1);
        this.runner.onPropertyChanged.remove(handler);
        resolve();
      };
      const handler = (_sender: any, options: any): void => {
        if (options.name !== "phase") return;
        if (!this.gone && this.runner.isRunning) return;
        settle();
      };
      this.waiters.push(settle);
      this.runner.onPropertyChanged.add(handler);
    });
  }

  // ---- state ---------------------------------------------------------------------------------------

  public getState(): ITesterState {
    return {
      screen: this.screen,
      activeTestName: this.activeTestName,
      selectedTestNames: this.selectedTestNames,
      mode: this.mode,
      hostOptions: this.settings.getChangedHostOptions(),
      testOptions: this.settings.getChangedTestOptions(),
      recorder: this.recorder.getState(),
    };
  }

  // What still resolves is applied and the rest is dropped silently - the same rules the live
  // transitions follow, because a restored screen is a screen that was arrived at.
  public setState(state: ITesterState | undefined): void {
    if (!state || this.gone) return;
    if (!!state.hostOptions || !!state.testOptions) {
      this.hostOptions = { ...this.hostOptions, ...(state.hostOptions || {}) };
      this.testOptions = { ...this.testOptions, ...(state.testOptions || {}) };
      this.settings.setOptions(this.testOptions, this.hostOptions);
      this.settings.markChanged(Object.keys(state.testOptions || {}),
        Object.keys(state.hostOptions || {}));
    }
    if (!!state.mode)this.mode = state.mode;
    // The session options only. The cursor goes in through open() below, because open() is what a
    // restored session replays the prefix to - a cursor written before it would be overwritten by the
    // open, and one written after it would be a cursor the replay never saw.
    this.recorder.setState({ options: state.recorder?.options });

    const names = getSuiteTests(this.suite).map(test => !!test ? test.name : undefined);
    // A selected test that no longer exists is dropped; a selection that ends up empty is still a
    // selection, and undefined still means every test.
    this.selectedTestNames = !state.selectedTestNames
      ? undefined
      : state.selectedTestNames.filter(name => names.indexOf(name) > -1);
    const active = state.activeTestName;
    const resolves = !!active && names.indexOf(active) > -1;
    this.activeTestName = active;

    const screen = state.screen || "runner";
    if (screen === "recorder") {
      // A restored recorder whose test vanished falls back to the runner, which is the live rule.
      if (!resolves) {
        this.screen = "runner";
        this.activeTestName = undefined;
      } else {
        void this.openRecorder(active as string, state.recorder?.cursor);
      }
    } else if (screen === "json") {
      // The json screen opens regardless: it is about the document, and a document is always there. The
      // name is used for the entry reveal only, and skipped when it no longer resolves.
      this.json.enter(resolves ? active : undefined, this.suite);
      this.screen = "json";
    } else {
      this.screen = "runner";
    }
    this.refreshRunner();
  }

  // In reverse creation order. The runner's own dispose contract does the heavy lifting: it aborts the
  // run, releases a held pause and cancels the pending frame.
  public dispose(): void {
    if (this.gone) return;
    this.gone = true;
    // Before the runner goes, because settling reaches for its event list - and after "gone", so what
    // resumes reads a disposed widget and returns instead of carrying on into a transition.
    this.waiters.splice(0).forEach(settle => settle());
    this.settings.dispose();
    this.recorder.dispose();
    this.json.dispose();
    this.runner.dispose();
    super.dispose();
  }
}

function signatureOf(value: any): string {
  try {
    return JSON.stringify(value) || "";
  } catch{
    return "";
  }
}
