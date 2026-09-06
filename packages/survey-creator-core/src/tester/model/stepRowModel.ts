import { Base, property } from "survey-core";
import { SurveyTestCheckCommandName } from "survey-core/tester";
import type { ISurveyTestStep } from "survey-core/tester";
import type { LiveStatus, LiveStep } from "../core/liveRun";
import { formatValue, getStepCommandName, getStepParams, getStepTargets } from "../core/stepInfo";
import { testerText } from "../localization";
import { mark, tone } from "./statusTone";

// One line of the case, and the one place a part of a test is run from.
//
// The list a row holds is the document's: it is read off "tests[i].steps" and it is as long as the case
// is. What a run produced is laid over it by position, so a step that has run says what it did and a
// step that has not says what it will do. There is no second list of "steps that ran" anywhere in this
// application.
//
// eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
// One rule to read the ▶ by, and it is the same rule the runner works to: pressing it on a step runs
// everything in front of that step and stops. The step you press is the step that runs next - never one
// that has just run - which is what makes "run to 5, then run to 3" mean something exact. That rule is
// stated once, here, in runTitle and runDisabled, and no view restates it.

// Who a step asks to run. It is the row the step belongs to: the step knows its own position and
// nothing else about which test it is in.
export interface IStepRowOwner {
  runTo(to: number): void;
}

// Everything about a step that comes from outside it: the case, the run, and where the cursor stands.
export interface StepRowState {
  // The case's step, and what a run made of it. Neither belongs to the line that stands for the end of
  // the case: it is a position, not a step, and it says so by carrying a label instead.
  step?: ISurveyTestStep;
  live?: LiveStep;
  // Where the last part-run of this test stopped, when there was one and it is still about this case.
  at?: number;
  held: boolean;
  count: number;
  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // Whether this row offers a ▶ at all. A disabled test is not offered one: the suite says it does not
  // run, and that answer is the same for a part of it as for the whole.
  offered: boolean;
  locked: boolean;
  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // Why every ▶ of the list is refused, when it is.
  refusal?: string;
}

export class TesterStepRowModel extends Base {
  @property({ defaultValue: 0 }) index!: number;
  // The last line of a list is the end of the case: a position the cursor can stand on like any other,
  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  // and the one ▶ that leaves nothing to run.
  @property({ defaultValue: false }) isEnd!: boolean;
  @property() status!: LiveStatus | undefined;
  @property({ defaultValue: "" }) text!: string;
  @property({ defaultValue: false }) isNext!: boolean;
  @property({ defaultValue: false }) rawOpen!: boolean;
  @property({ defaultValue: false }) canRun!: boolean;
  @property({ defaultValue: true }) runDisabled!: boolean;
  @property() runTitle!: string | undefined;
  // The raw payload of what ran; the step of a case that has not run is read in the JSON.
  @property({ defaultValue: false }) hasRaw!: boolean;

  private liveStep?: LiveStep;
  private owner: IStepRowOwner;

  constructor(owner: IStepRowOwner, index: number, isEnd = false) {
    super();
    this.owner = owner;
    this.index = index;
    this.isEnd = isEnd;
    if (isEnd)this.text = testerText("step.lastStep");
  }
  public getType(): string { return "svt-step-row"; }

  public update(state: StepRowState): void {
    const live = state.live;
    this.liveStep = live;
    this.status = !!live ? live.status : undefined;
    this.hasRaw = !!live;
    if (!this.isEnd) {
      this.text = !!live ? describeLiveStep(live) : describeCaseStep(state.step as ISurveyTestStep);
    }
    const at = state.at;
    const held = state.held && at !== undefined;
    this.isNext = at === this.index;
    this.canRun = state.offered;
    // The one it is stopped in front of has nothing to run to: everything before it has run and the
    // model is standing there.
    const stopped = held && at === this.index;
    this.runDisabled = !state.offered || state.locked || !!state.refusal || stopped;
    this.runTitle = !state.offered
      ? undefined
      : !!state.refusal
        ? state.refusal
        : stopped
          ? (this.isEnd ? testerText("step.wholeCaseHasRun") : testerText("step.alreadyStoppedHere"))
          : this.isEnd
            ? describeRunToEnd(state.count, at, held)
            : describeRunTo(this.index, at, held);
  }

  public get toneCss(): string { return tone(this.status); }
  public get rowCss(): string {
    return "svt-step svt-step--" + this.toneCss + (this.isNext ? " svt-step--next" : "") +
      (this.isEnd ? " svt-step--end" : "");
  }
  public get numText(): string {
    return (this.isNext ? testerText("marks.next") : "") + (this.isEnd ? "" : String(this.index));
  }
  public get markText(): string { return this.isEnd ? "" : mark(this.status); }
  public get runAriaLabel(): string {
    return this.isEnd
      ? testerText("step.runToEndAriaLabel")
      : testerText("step.runToAriaLabel", this.index);
  }
  public get rawJson(): string {
    return !this.liveStep ? "" : stringifyStep(this.liveStep);
  }
  // What the button behind the raw payload says. It is a statement about this row's own state, so
  // it is a property of the row rather than a condition in three templates.
  public get runMark(): string { return testerText("common.runMark"); }
  public get rawToggleText(): string {
    return this.rawOpen ? testerText("step.hideRaw") : testerText("step.raw");
  }

  public toggleRaw(): void { this.rawOpen = !this.rawOpen; }
  public runTo(): void {
    if (this.runDisabled) return;
    this.owner.runTo(this.index);
  }
}

// eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
// "▸ step 3 of 7 runs next · the model is held". The whole state of a part-run in one line.
export function describeWhere(count: number, at: number | undefined, held: boolean): string {
  if (at === undefined) return "";
  if (at >= count) return testerText("step.whereDone");
  return testerText("step.where", at, count, held);
}

function describeRunTo(index: number, at: number | undefined, held: boolean): string {
  if (index === 0) return testerText("step.buildOnly");
  return testerText("step.stopsBefore", describeRunFrom(index, at, held), index);
}

function describeRunToEnd(count: number, at: number | undefined, held: boolean): string {
  return testerText("step.finishes", describeRunFrom(count, at, held));
}

// eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
// "Runs steps 3–6": what is left between where the case stands and the step being asked for. A model
// that is not held is not carried forward, so then it is the whole of the case in front of that step.
function describeRunFrom(index: number, at: number | undefined, held: boolean): string {
  const start = held && at !== undefined && at < index ? at : 0;
  return start === index - 1
    ? testerText("step.runsOne", start)
    : testerText("step.runsRange", start, index - 1);
}

// "expect ageNow.value = 73": the command, then what it asserted. A step that carries no check is
// described by what it addressed instead.
export function describeLiveStep(step: LiveStep): string {
  const subject = step.checks.length
    ? step.checks.map(check => testerText("step.checkSubject", check.target, check.check,
      check.expected === undefined ? undefined : formatValue(check.expected, 40))).join(", ")
    : step.targets.join(", ") || testerText("common.noTarget");
  return testerText("step.describe", step.command, subject, step.name || "");
}

// The same sentence about a step that has not run, and it is the case that says it rather than a result:
// the checks are the ones written in the document, which is exactly what the step is going to assert.
export function describeCaseStep(step: ISurveyTestStep): string {
  const command = getStepCommandName(step);
  const targets = getStepTargets(step, command);
  const name = !!step && typeof step.name === "string" ? step.name : "";
  const params: any = getStepParams(step, command);
  if (command !== SurveyTestCheckCommandName || !params) {
    return testerText("step.describe", command, targets.join(", ") || testerText("common.noTarget"),
      name);
  }
  const checks: Array<string> = [];
  targets.forEach(target => {
    const map = params[target];
    if (!map || typeof map !== "object") {
      checks.push(target);
      return;
    }
    Object.keys(map).forEach(check => {
      checks.push(testerText("step.checkSubject", target, check, formatValue(map[check], 40)));
    });
  });
  return testerText("step.describe", command, checks.join(", ") || testerText("common.noCheck"), name);
}

export function stringifyStep(step: LiveStep): string {
  try {
    return JSON.stringify({
      command: step.command, targets: step.targets, status: step.status,
      checks: step.checks, issues: step.issues,
    }, null, 2);
  } catch{
    return String(step);
  }
}
