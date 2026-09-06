import { Action, ActionContainer, Base, ListModel, property, propertyArray } from "survey-core";
import type { ISurveyTestCheckResult, ISurveyTestStep } from "survey-core/tester";
import type { LiveStatus, LiveTest } from "../core/liveRun";
import { testerText } from "../localization";
import { sameMembers } from "./arrays";
import { buildCheckView, buildIssueView } from "./checkView";
import type { CheckView, IssueView } from "./checkView";
import { runnerActionBarCss, runnerListCss } from "./runnerCss";
import type { ITesterPanelTest, ITesterRowActions, StepCursor } from "./runnerApi";
import { isFailure, tone } from "./statusTone";
import { TesterStepRowModel, describeWhere } from "./stepRowModel";
import type { IStepRowOwner } from "./stepRowModel";

// One row of the test list. What TestRow decided in useState - whether it is open, what the rename box
// holds and why the name was refused - the row now knows, so it survives a render, a reconciliation and
// a rename of the test it is about.
//
// Everything a view draws is readable off this one object, including the things that are decided by
// the run above it: the lock while a run is in flight is written onto the row rather than read from the
// runner. One component, one model - so a row can be drawn by a binding that watches a single object,
// and so that reading this file tells you everything a row can say.

// One array for every row that has not run, rather than a new empty one per update.
const EMPTY_STEPS: Array<ISurveyTestStep> = [];

// Who a row asks to change the selection. It is the list the row is in, because a checkbox is one end
// of a selection and the list is the other - and the row must not have to reach for the runner to
// tick itself: a row component subscribes to the row and to nothing else.
export interface ITestRowOwner {
  toggleSelected(row: TesterTestRowModel): void;
}

// Everything about a row that comes from the run rather than from the document.
export interface TestRowRunState {
  live?: LiveTest;
  elapsedMs: number;
  // Where the last run of a part of this test stopped, when the last one was about this test.
  cursor?: StepCursor;
  locked: boolean;
  canRun: boolean;
  blockedReason?: string;
  // How the run of this row is watched. It is the mode the Run button's own picker holds - there is one
  // choice of mode on the screen and one place to make it - so the row's button only says which mode it
  // will use and never overrides it.
  runModeName: string;
  // This row's Edit was pressed and the run it has to stop first is still unwinding. Only ever true of
  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // one row - the one that was pressed - so the verb that says "Stopping…" is the verb that is waiting.
  editPending?: boolean;
}

export class TesterTestRowModel extends Base implements IStepRowOwner {
  @property({ defaultValue: "" }) name!: string;
  // Position in the suite document, which is what "in the case" addresses.
  @property({ defaultValue: 0 }) index!: number;
  @property({ defaultValue: false }) disabled!: boolean;
  @property({ defaultValue: false }) unnamed!: boolean;
  @property() status!: LiveStatus | undefined;
  @property({ defaultValue: "" }) durationText!: string;
  @property({ defaultValue: false }) expanded!: boolean;
  @property({ defaultValue: true }) selected!: boolean;
  // Written here by the runner, not read from it: see the note at the top of this file.
  @property({ defaultValue: false }) locked!: boolean;
  @property({ defaultValue: false }) editPending!: boolean;
  @property({ defaultValue: "" }) runModeName!: string;
  // The rename box and why it was refused.
  @property({ defaultValue: "" }) nameDraft!: string;
  @property() nameRefusal!: string | undefined;
  @property({ defaultValue: false }) canRename!: boolean;
  @property() editDisabledReason!: string | undefined;
  // "stopped before step 3 of 7", or "".
  @property({ defaultValue: "" }) cursorText!: string;
  @property({ defaultValue: "" }) stepsWhereText!: string;
  @property({ defaultValue: "" }) droppedText!: string;
  @property({ defaultValue: "" }) hintText!: string;
  @property({ defaultValue: 0 }) stepCount!: number;
  @property({ defaultValue: false }) legendVisible!: boolean;
  @propertyArray() failedChecks!: Array<ISurveyTestCheckResult>;
  // Which failing checks have their raw result open. One list rather than a flag per check, because the
  // checks themselves are results the tester built and this is the row's own state about them.
  @propertyArray() openChecks!: Array<string>;

  // This row's place in the test list. One Action per test: its id is the test name, its data is this
  // model, and its component is the string each framework registers a row renderer under. The Action
  // belongs to the row rather than to the list so that a reconciliation that keeps the row keeps its
  // item too - which is what makes selection survive an edit of the document.
  public readonly action: Action;
  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // Edit · JSON · Delete. A verb the host did not supply is not in the container, so "what is not given
  // is not rendered" is a fact about the container rather than a condition in three templates.
  public readonly verbs: ActionContainer;
  // The steps of the case, all of them, whether they have run or not. Nothing is selected in it, so it
  // is a plain ListModel rather than the multi-select the test list is.
  public readonly steps: ListModel<Action>;

  // The case as the document holds it, and what the run made of it. Neither is reactive on its own: the
  // properties above are what a view reads, and they are written from these.
  private caseSteps: Array<ISurveyTestStep> = EMPTY_STEPS;
  private live?: LiveTest;
  private siblingNames: Array<string> = [];
  private actions?: ITesterRowActions;
  private reveal?: { onCase(path: string): void, onSurvey(jsonPath: string): void };
  private owner?: ITestRowOwner;
  // The positions the case holds, the end-of-case line, and the two of them as one list.
  private positionRows: Array<TesterStepRowModel> = [];
  private endRow?: TesterStepRowModel;
  private stepRows: Array<TesterStepRowModel> = [];
  // The name the document last said, so the box can follow it while it is not being edited.
  private knownName = "";
  // Whether a person has decided about this row. Until they have, a failed row opens itself.
  private expandedTouched = false;
  private suppliedVerbs = "";

  constructor() {
    super();
    this.action = new Action({ component: "svt-test-row", data: this });
    this.verbs = new ActionContainer();
    this.verbs.setCssClasses(runnerActionBarCss, false);
    this.steps = new ListModel<Action>({
      items: [],
      // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
      // A step is not selected by pressing it: the ▶ inside the row is the verb, and the list is a list.
      allowSelection: false,
      searchEnabled: false,
      listRole: "list",
      listItemRole: "listitem",
    });
    this.steps.itemComponent = "svt-step-row";
    this.steps.setCssClasses(runnerListCss, false);
  }
  public getType(): string { return "svt-test-row"; }

  // ---- what the document says -------------------------------------------------------------------

  public setCase(source: {
    name: string,
    index: number,
    disabled: boolean,
    unnamed: boolean,
    steps: Array<ISurveyTestStep>,
    siblingNames: Array<string>,
    actions: ITesterRowActions,
    owner: ITestRowOwner,
    // The two journeys into the JSON editors. They are on the row rather than on the runner because a
    // row component subscribes to one model, and the issue lines it prints carry both of them.
    reveal: { onCase(path: string): void, onSurvey(jsonPath: string): void },
  }): void {
    this.name = source.name;
    this.index = source.index;
    this.disabled = source.disabled;
    this.unnamed = source.unnamed;
    this.caseSteps = source.steps;
    this.siblingNames = source.siblingNames;
    this.actions = source.actions;
    this.owner = source.owner;
    this.reveal = source.reveal;
    this.stepCount = source.steps.length;
    this.canRename = !!source.actions.onRename;
    this.editDisabledReason = !!source.actions.editDisabledReason
      ? source.actions.editDisabledReason(this.toPanelTest())
      : undefined;
    // The box follows the document while it is not being edited: a rename made in the Tests JSON tab, or
    // an undo, has to reach it the same way it reaches the name in the head.
    const current = this.currentName;
    if (this.knownName !== current) {
      this.knownName = current;
      this.nameDraft = current;
      this.nameRefusal = undefined;
    }
    this.updateVerbs();
    this.updateStepRows();
    this.syncAction();
  }

  // The item this row is in the list. "enabled" is false for a test the suite disabled, and "css"
  // carries the tone, so what a failed row looks like is decided here rather than in the markup.
  public syncAction(): void {
    this.action.id = this.name;
    this.action.title = this.displayName;
    this.action.enabled = !this.disabled;
    this.action.css = "svt-test-row-item svt-test-row-item--" + this.toneCss + (this.disabled ? " svt-test-row-item--disabled" : "");
  }

  // ---- what the run says ------------------------------------------------------------------------

  public applyRun(state: TestRowRunState): void {
    const live = state.live;
    this.live = live;
    this.status = !!live ? live.status : undefined;
    this.locked = state.locked;
    this.editPending = state.editPending === true;
    this.runModeName = state.runModeName;
    this.updateEditAction();
    this.durationText = formatDuration(live, state.elapsedMs);
    // Until a person has decided about this row, a failed one opens itself - and stops doing so the
    // moment they close it.
    if (!this.expandedTouched)this.expanded = isFailure(this.status);
    const failed = !live ? [] : live.steps.reduce<Array<ISurveyTestCheckResult>>(
      (all, step) => all.concat(step.checks.filter(check => !check.passed)), []);
    if (!sameMembers(this.failedChecks, failed))this.failedChecks = failed;

    // The cursor is about this case only while it is still the case it was left in: a step added or taken
    // away moves every position after it, and a mark that survived that would point at the wrong step.
    const count = this.caseSteps.length;
    const cursor = !!state.cursor && state.cursor.count === count ? state.cursor : undefined;
    const at = !!cursor ? cursor.at : undefined;
    const held = !!cursor && cursor.held && at !== undefined;
    const stopped = !!cursor && cursor.at < cursor.count ? cursor : undefined;
    // A verdict on a case that stopped part-way is a verdict on that part, and saying so on the line is
    // the difference between "this test passes" and "the first three steps of it do".
    this.cursorText = !stopped ? "" : testerText("row.cursorText", stopped.at, stopped.count);
    this.stepsWhereText = describeWhere(count, at, held);
    this.droppedText = !cursor || !cursor.dropped
      ? ""
      : testerText("row.droppedText", cursor.dropped);
    // Nothing says "not run yet": the step list says it per step, and it says it about the case rather
    // than about the row.
    this.hintText = !!live && !live.steps.length && !count
      ? (this.status === "skipped"
        ? testerText("row.disabledNoStepRan")
        : testerText("row.noStepRan"))
      : "";

    // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
    // A disabled test is not offered the ▶: the suite says it does not run, and that answer is the same
    // for a part of it as for the whole.
    const offered = !this.disabled;
    this.legendVisible = offered && count > 0;
    const refusal = !state.canRun
      ? (state.blockedReason || testerText("row.documentsDoNotRun"))
      : undefined;
    const liveSteps = !!live ? live.steps : [];
    this.stepRows.forEach(row => row.update({
      step: row.isEnd ? undefined : this.caseSteps[row.index],
      live: row.isEnd ? undefined : liveSteps.find(ran => ran.index === row.index),
      at: at,
      held: held,
      count: count,
      offered: offered,
      locked: state.locked,
      refusal: refusal,
    }));
    this.syncAction();
  }

  // ---- what a view reads off it ------------------------------------------------------------------

  public get toneCss(): string { return tone(this.status); }
  public get isFailure(): boolean { return isFailure(this.status); }
  public get rowCss(): string {
    return "svt-test-row" + (this.isFailure ? " svt-test-row--failed" : "") + (this.disabled ? " svt-test-row--disabled" : "");
  }
  public get displayName(): string { return this.unnamed ? testerText("common.unnamed") : this.name; }
  public get statusTitle(): string { return this.status || testerText("common.notRun"); }
  public get stateText(): string { return this.isFailure ? (this.status as string) : ""; }
  public get disabledNote(): string {
    return this.disabled ? testerText("row.disabledInSuite") : "";
  }
  public get runDisabled(): boolean { return this.locked || this.disabled; }
  public get runTitle(): string {
    return this.disabled
      ? testerText("row.disabledInSuite")
      : testerText("row.runTitle", this.runModeName);
  }
  public get runAriaLabel(): string {
    return testerText("row.runAriaLabel", this.name, this.runModeName);
  }
  public get selectAriaLabel(): string { return testerText("row.selectAriaLabel", this.name); }
  public get toggleAriaLabel(): string {
    return testerText("row.toggleAriaLabel", this.name, this.expanded);
  }
  public get selectDisabled(): boolean { return this.locked || this.disabled; }
  // The expander's tooltip, the rename box's two labels and the head of the step list inside the
  // row. They live here for the same reason the rest of the row's sentences do: a row component
  // subscribes to this model and to nothing else, and nothing it prints is spelled in three
  // renderers.
  public get runMark(): string { return testerText("common.runMark"); }
  public get toggleMark(): string {
    return this.expanded ? testerText("common.expandedMark") : testerText("common.collapsedMark");
  }
  public get toggleTitle(): string {
    return this.expanded ? testerText("row.collapse") : testerText("row.expand");
  }
  public get nameLabel(): string { return testerText("row.nameLabel"); }
  public get namePlaceholder(): string { return testerText("row.namePlaceholder"); }
  public get saveText(): string { return testerText("row.save"); }
  // A name that is what the document already holds is not a rename, and the button says why.
  public get saveTooltip(): string {
    return this.nameDirty ? "" : testerText("row.saveClean");
  }
  public get canSaveName(): boolean { return !this.nameTypedProblem && this.nameDirty; }
  public get stepsHeadText(): string { return testerText("row.stepsHead", this.stepCount); }
  public get stepsEmptyText(): string { return testerText("row.stepsEmpty"); }
  public get legendText(): string { return testerText("row.stepsLegend"); }
  // The issues of the test and of every step of it, in the order the panel prints them. One flat list,
  // already carrying the class each of them draws under, so a view walks it rather than nesting two
  // maps and deciding what a warning looks like.
  public get issueViews(): Array<IssueView> {
    const live = this.live;
    if (!live) return [];
    const views = live.issues.map((issue, at) => buildIssueView(issue, "t" + at));
    live.steps.forEach(step => step.issues.forEach((issue, at) => {
      views.push(buildIssueView(issue, "s" + step.index + "-" + at));
    }));
    return views;
  }

  // Every failing check of this row, as the lines that draw it: the summary, the "why" under it, and
  // the raw result behind "raw..". The target is named only when there is more than one to tell apart.
  public get checkViews(): Array<CheckView> {
    const checks = this.failedChecks;
    return checks.map((check, at) => buildCheckView(check, String(at), checks.length > 1));
  }
  public isCheckOpen(key: string): boolean { return this.openChecks.indexOf(key) > -1; }
  public checkRawToggleText(key: string): string {
    return this.isCheckOpen(key) ? testerText("step.hideRaw") : testerText("step.raw");
  }
  public toggleCheck(key: string): void {
    const at = this.openChecks.indexOf(key);
    if (at > -1)this.openChecks.splice(at, 1);
    else this.openChecks.push(key);
  }
  public get stepRowModels(): Array<TesterStepRowModel> { return this.stepRows; }

  // The flat description of this test the host's verbs are handed. A screen that edits the suite reads
  // the test it is editing, not the model that draws it.
  public toPanelTest(): ITesterPanelTest {
    return {
      name: this.name,
      index: this.index,
      disabled: this.disabled,
      unnamed: this.unnamed,
      steps: this.caseSteps,
      live: this.live,
    };
  }

  // ---- the rename ---------------------------------------------------------------------------------

  public get currentName(): string { return this.unnamed ? "" : this.name; }
  public get nameTrimmed(): string { return this.nameDraft.trim(); }
  // A name is refused while it is typed against its siblings; the commit is still what decides.
  public get nameTypedProblem(): string | undefined {
    const trimmed = this.nameTrimmed;
    if (!trimmed) return testerText("row.nameRequired");
    return this.siblingNames.filter(name => name !== this.name).indexOf(trimmed) > -1
      ? testerText("row.nameTaken", trimmed)
      : undefined;
  }
  public get nameProblem(): string | undefined { return this.nameRefusal || this.nameTypedProblem; }
  public get nameDirty(): boolean { return this.nameTrimmed !== this.currentName; }

  public setNameDraft(text: string): void {
    this.nameDraft = text;
    this.nameRefusal = undefined;
  }
  public resetRename(): void {
    this.nameDraft = this.currentName;
    this.nameRefusal = undefined;
  }
  public commitRename(): void {
    const rename = !!this.actions ? this.actions.onRename : undefined;
    if (!!this.nameTypedProblem || !this.nameDirty || !rename) return;
    const next = this.nameTrimmed;
    const refusal = rename(this.toPanelTest(), next);
    this.nameRefusal = refusal;
    if (!!refusal) return;
    // The row renames itself in place, before the document round-trips back through setSuite: the row a
    // person is working in is then the same object before and after, and its expansion and its draft go
    // with it. This is the whole of the bookkeeping the panel used to do around "open".
    this.name = next;
    this.unnamed = false;
    this.knownName = next;
  }

  // ---- verbs --------------------------------------------------------------------------------------

  public toggleExpanded(): void {
    this.expandedTouched = true;
    this.expanded = !this.expanded;
  }
  public setExpanded(next: boolean): void {
    this.expandedTouched = true;
    this.expanded = next;
  }
  public runOne(): void {
    if (this.runDisabled || !this.actions) return;
    this.actions.onRunOne(this.toPanelTest());
  }
  // IStepRowOwner: the step knows its own position, the row knows which test it is in.
  public runTo(to: number): void {
    if (!this.actions) return;
    this.actions.onRunTo(this.toPanelTest(), to);
  }
  public toggleSelected(): void {
    if (this.selectDisabled || !this.owner) return;
    this.owner.toggleSelected(this);
  }
  public revealCase(path: string): void { if (!!this.reveal)this.reveal.onCase(path); }
  public revealSurvey(jsonPath: string): void { if (!!this.reveal)this.reveal.onSurvey(jsonPath); }

  public dispose(): void {
    this.action.dispose();
    this.steps.dispose();
    this.verbs.dispose();
    this.positionRows.forEach(row => row.dispose());
    if (!!this.endRow)this.endRow.dispose();
    this.positionRows = [];
    this.endRow = undefined;
    this.stepRows = [];
    super.dispose();
  }

  private updateVerbs(): void {
    const actions = this.actions as ITesterRowActions;
    // Rebuilt only when the set of supplied verbs changes: the container holds what the host gave, and
    // what it gave is the same on every render of a screen.
    const supplied = (!!actions.onEdit ? "e" : "") + "j" + (!!actions.onDelete ? "d" : "");
    if (supplied !== this.suppliedVerbs) {
      this.suppliedVerbs = supplied;
      const items: Array<Action> = [];
      if (!!actions.onEdit) {
        items.push(new Action({
          id: "edit", enabled: true,
          title: testerText("row.edit"),
          css: "svt-test-row__verb",
          innerCss: "svt-button",
          action: () => {
            const edit = !!this.actions ? this.actions.onEdit : undefined;
            if (!!edit && !this.editDisabledReason) edit(this.toPanelTest());
          },
        }));
      }
      items.push(new Action({
        id: "json", enabled: true,
        title: testerText("row.json"),
        css: "svt-test-row__verb",
        innerCss: "svt-button",
        action: () => { if (!!this.actions)this.actions.onJson(this.toPanelTest()); },
      }));
      if (!!actions.onDelete) {
        items.push(new Action({
          id: "delete", enabled: true,
          title: testerText("row.delete"),
          css: "svt-test-row__verb",
          innerCss: "svt-button svt-test-row__delete",
          action: () => {
            const remove = !!this.actions ? this.actions.onDelete : undefined;
            if (!!remove) remove(this.toPanelTest());
          },
        }));
      }
      this.verbs.setItems(items);
    }
    this.updateEditAction();
  }

  // Entering the recorder never fails because something was running: it stops it, and the verb that was
  // pressed says so while the stop unwinds. The title is written here rather than read off the widget
  // root because a row component subscribes to the row and to nothing else.
  private updateEditAction(): void {
    const edit = this.verbs.getActionById("edit");
    if (!edit) return;
    edit.title = this.editPending ? testerText("row.editStopping") : testerText("row.edit");
    edit.enabled = !this.editDisabledReason && !this.editPending;
    edit.tooltip = this.editDisabledReason || "";
  }

  // The rows are the document's positions, plus one for the end of the case. They are reconciled rather
  // than rebuilt for the same reason the test rows are: an open raw payload is a decision of the row's,
  // and a rebuild would drop it every time a run wrote a step result.
  private updateStepRows(): void {
    const count = this.caseSteps.length;
    const before = this.stepRows.length;
    // The positions the case holds. A row keeps its index, so nothing moves while the case does not.
    while(this.positionRows.length > count) {
      (this.positionRows.pop() as TesterStepRowModel).dispose();
    }
    while(this.positionRows.length < count) {
      this.positionRows.push(new TesterStepRowModel(this, this.positionRows.length));
    }
    // The end of the case, as a line of the list rather than as a link above it - and only where there
    // is a case to be at the end of.
    if (!count && !!this.endRow) {
      this.endRow.dispose();
      this.endRow = undefined;
    } else if (!!count && (!this.endRow || this.endRow.index !== count)) {
      if (!!this.endRow)this.endRow.dispose();
      this.endRow = new TesterStepRowModel(this, count, true);
    }
    this.stepRows = !this.endRow ? this.positionRows.slice() : this.positionRows.concat([this.endRow]);
    if (this.stepRows.length !== before) {
      this.steps.setItems(this.stepRows.map(row => new Action({
        id: "step-" + row.index + (row.isEnd ? "-end" : ""),
        component: "svt-step-row",
        data: row,
      })));
    }
  }
}

function formatDuration(live: LiveTest | undefined, elapsedMs: number): string {
  if (!live) return "";
  const ms = live.durationMs !== undefined
    ? live.durationMs
    : live.startedMs !== undefined && live.status === "running" ? elapsedMs - live.startedMs : undefined;
  if (ms === undefined) return "";
  return ms >= 1000 ? (ms / 1000).toFixed(1) + "s" : Math.round(ms) + "ms";
}
