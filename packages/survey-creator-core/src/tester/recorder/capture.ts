import type { SurveyModel } from "survey-core";
import { SurveyTestSurveyTargetName } from "survey-core/tester";
import type { ISurveyTestTargetContext } from "survey-core/tester";
import { testerText } from "../localization";
import type { ElementRegistry } from "./elementRegistry";
import { getQuestionTargetName, targetContextOf } from "./targetName";

// What becomes a step, and what does not.
//
// A value change is recorded only when both signals agree:
//
//   1. the model says the change did not come from the survey's own logic - ValueChangedEvent.reason is
//      "trigger" or "expression" for everything the definition computes, and undefined otherwise;
//   2. a trusted user gesture is open on the question that changed.
//
// Neither alone is enough. Rule 1 misses a value cleared by clearInvisibleValues, which reports no reason
// at all; rule 2 misses nothing but lets a trigger through, because a trigger fires inside the gesture
// that caused it. Everything else that changes in the same tick is a consequence, and a consequence is
// reproduced by a replay on its own: recording it would apply it twice.
//
// What is recorded is the **initial** change - the answer as the person entered it, read while the change
// is happening rather than after the survey has settled. See noteModelChange() for why that is the only
// reading that survives a cascade.
//
// Navigation is captured at the model's UI entry points rather than from the events that follow, because
// a press the survey refuses - a Complete that validation blocks - is still a press the case must hold:
// the tester records it and reports completeBlocked. Auto-advance goes through performNext() and
// tryCompleteOrShowPreview(), never through nextPageUIClick(), and the gesture rule below rejects what is
// left of it.
//
// The one thing this file does not decide is where its DOM listeners land. setContainer() is called from
// TesterRecorderModel.attachTo(), which a view hands the element the form pane rendered into: the model
// layer may not reach the DOM, and everything about *interpreting* an event stays here. A session whose
// container has never been set still records every model-driven step, which is what the tests of this
// file drive.

export type CapturedCommandName =
  "set" | "clear" | "setComment" | "nextPage" | "prevPage" | "complete" | "startSurvey" |
  "showPreview" | "cancelPreview" | "addRow" | "removeRow" | "addPanel" | "removePanel";

export interface CapturedCommand {
  command: CapturedCommandName;
  target: string;
  payload: any;
  // What the person did, for the step name and the console.
  description: string;
}

// The reasons of PROMPT-recorder.md section 4.3, as codes rather than as sentences: every
// person-readable word of the widget belongs to its string table (overview section 5), and
// "recorder.reason.<code>" is what the ignored strip prints. "paused" is the prototype's "not
// recording" - the only way the host answers no is the Pause the session bar offers.
export type IgnoredReason = "trigger" | "expression" | "noGesture" | "paused" | "automatic" | "notAddressable";

export interface CaptureHost {
  registry: ElementRegistry;
  onCommand(command: CapturedCommand): void;
  // The note is a plain sentence about what the survey did; the target, when there is one, is named
  // separately so the list can show it in the grammar the case would use.
  onIgnored(note: string, reason: IgnoredReason, target?: string): void;
  isRecording(): boolean;
}

// The window a value change has to arrive in. Any command emission flushes it first, so a value typed
// before a button press is always the earlier step.
const SETTLE_MS = 150;

const DOM_EVENTS = ["pointerdown", "keydown", "input", "change", "click"];
// The first method of each list that the model has. These are the entry points the navigation buttons
// call; the survey's own logic uses the ones below them. What a press of each is called in a sentence is
// "recorder.did.<command>", and "recorder.moved.<command>" is the same movement made by the survey.
const NAVIGATION: Array<{ command: CapturedCommandName, methods: Array<string> }> = [
  { command: "startSurvey", methods: ["start"] },
  { command: "prevPage", methods: ["performPrevious"] },
  { command: "nextPage", methods: ["nextPageUIClick", "performNext"] },
  { command: "showPreview", methods: ["showPreview"] },
  { command: "cancelPreview", methods: ["cancelPreview"] },
  { command: "complete", methods: ["tryComplete"] },
];

interface ValueGesture {
  question: any;
  // A cell only: the row context the registry took from onAfterRenderMatrixCell. A cell whose row the
  // object itself cannot name is addressed through it, and it is read while the row is still live.
  targetContext?: ISurveyTestTargetContext;
  valueBefore: any;
  commentBefore: any;
  // The state of the question at the first change that followed the person's input, before the survey's
  // own logic ran on top of it. See noteModelChange().
  hasUserValue: boolean;
  userValue: any;
  userComment: any;
  userTarget?: string;
  // The input this snapshot belongs to. One snapshot per input, so a cascade cannot overwrite it and a
  // second keystroke replaces it.
  valueEpoch: number;
}

export class RecorderCapture {
  private survey?: SurveyModel;
  private host?: CaptureHost;
  private container?: HTMLElement;
  private gesture?: ValueGesture;
  // The last pointer or key event landed outside every registered element: on the survey's own chrome.
  // Only then is a navigation call a button press.
  private chromeGesture = false;
  // Counts the trusted inputs. Everything the model does between two of them is one cascade.
  private inputEpoch = 0;
  private settleTimer: any = undefined;
  private modelHandlers: Array<{ event: any, handler: any }> = [];
  private wrapped: Array<string> = [];
  private domListener = (event: Event): void => this.onDomEvent(event);

  public attach(survey: SurveyModel, host: CaptureHost): void {
    this.detach();
    this.survey = survey;
    this.host = host;
    this.subscribeToModel(survey);
    this.wrapNavigation(survey);
  }

  public setContainer(container: HTMLElement | undefined): void {
    if (this.container === container) return;
    if (!!this.container) {
      DOM_EVENTS.forEach(name => this.container?.removeEventListener(name, this.domListener, true));
    }
    this.container = container;
    if (!!this.container) {
      // Capture phase: the renderer's own handlers must not be able to stop the recorder from seeing that
      // a person touched something.
      DOM_EVENTS.forEach(name => this.container?.addEventListener(name, this.domListener, true));
    }
  }

  public detach(): void {
    this.setContainer(undefined);
    this.cancelSettle();
    this.modelHandlers.forEach(entry => {
      try { entry.event.remove(entry.handler); } catch{ /* a model already torn down */ }
    });
    this.modelHandlers = [];
    const survey: any = this.survey;
    // The wrappers are own properties shadowing the prototype: deleting them restores the model exactly.
    if (!!survey)this.wrapped.forEach(name => { delete survey[name]; });
    this.wrapped = [];
    this.gesture = undefined;
    this.chromeGesture = false;
    this.survey = undefined;
    this.host = undefined;
  }

  // Settles the pending value change now. Called before every command emission, so the value a person
  // typed is always the step before the button they pressed next.
  public flush(): void {
    this.cancelSettle();
    this.settle();
  }

  // -----------------------------------------------------------------------------------------------
  // The gesture
  // -----------------------------------------------------------------------------------------------

  private onDomEvent(event: Event): void {
    // A synthetic event is the application talking to itself. Only a person opens a gesture.
    if (!event.isTrusted || !this.host) return;
    // The recorder's own UI stands over the form - the adorner layer and the check menu it opens. A press
    // there is not a respondent action: it is neither the question the layer is drawn on nor, because it
    // resolves to no element at all, the survey's chrome.
    if (isRecorderUi(event.target)) return;
    this.inputEpoch += 1;
    const entry = this.host.registry.resolve(event.target);
    const isPointerOrKey = event.type === "pointerdown" || event.type === "click" || event.type === "keydown";
    if (isPointerOrKey)this.chromeGesture = !entry;
    if (!!entry && (entry.kind === "question" || entry.kind === "cell")) {
      this.openValueGesture(entry.obj, targetContextOf(entry.matrix, entry.row));
    }
    this.scheduleSettle();
  }

  private openValueGesture(question: any, context?: ISurveyTestTargetContext): void {
    if (!!this.gesture && this.gesture.question === question) return;
    // A gesture that moves to another question settles the previous one first: two questions touched in
    // one breath are two steps, in the order they were touched.
    if (!!this.gesture)this.flush();
    this.gesture = {
      question: question,
      targetContext: context,
      valueBefore: clone(question.value),
      commentBefore: clone(question.comment),
      hasUserValue: false,
      userValue: undefined,
      userComment: undefined,
      valueEpoch: -1,
    };
  }

  // The step is the change the person made, not the state the survey settled into.
  //
  // One answer can set off a cascade: an expression recomputes, a trigger copies, a question is cleared
  // because it became invisible, a matrix rebuilds its rows. Reading the question at the end of all that
  // gives the wrong value when the cascade wrote over the answer, and gives nothing at all when the
  // question object the person touched was replaced along the way - the recorder would hold a detached
  // instance whose value never moved. Both cases end with the person's action missing from the case.
  //
  // So the question is read at the first change that follows each input, while the object is still the
  // live one and before the survey's own logic has run on top of it: that snapshot is the step. A second
  // keystroke is a new input and replaces it; everything the model does in between belongs to the same
  // input and is left alone, because a replay of the recorded change reproduces the whole cascade.
  private noteModelChange(): void {
    const gesture = this.gesture;
    if (!gesture || gesture.valueEpoch === this.inputEpoch) return;
    gesture.valueEpoch = this.inputEpoch;
    gesture.hasUserValue = true;
    gesture.userValue = clone(gesture.question.value);
    gesture.userComment = clone(gesture.question.comment);
    // The target too: a row that is rebuilt or removed later can no longer be found from the question.
    gesture.userTarget = getQuestionTargetName(gesture.question, gesture.targetContext);
  }

  private scheduleSettle(): void {
    this.cancelSettle();
    this.settleTimer = setTimeout(() => {
      this.settleTimer = undefined;
      this.settle();
    }, SETTLE_MS);
  }

  private cancelSettle(): void {
    if (this.settleTimer === undefined) return;
    clearTimeout(this.settleTimer);
    this.settleTimer = undefined;
  }

  private settle(): void {
    const gesture = this.gesture;
    this.gesture = undefined;
    this.chromeGesture = false;
    if (!gesture || !this.host) return;
    const question = gesture.question;
    // What the person produced, from the snapshot taken while the change was happening. Reading the
    // question here is the fallback for a change no model event announced.
    const valueNow = gesture.hasUserValue ? gesture.userValue : clone(question.value);
    const commentNow = gesture.hasUserValue ? gesture.userComment : clone(question.comment);
    const valueChanged = !isSame(gesture.valueBefore, valueNow);
    const commentChanged = !isSame(gesture.commentBefore, commentNow);
    if (!valueChanged && !commentChanged) return;
    const target = gesture.userTarget || getQuestionTargetName(question, gesture.targetContext);
    if (!target) {
      this.host.onIgnored(testerText("recorder.ignored.unaddressable", describeQuestion(question)),
        "notAddressable");
      return;
    }
    if (valueChanged) {
      // An answer the person removed is a clear, not a set of undefined: "value" is the one payload type
      // that refuses undefined, and clearing is what a respondent actually did.
      if (valueNow === undefined) {
        this.emit({
          command: "clear", target: target, payload: true,
          description: testerText("recorder.did.clear", target),
        });
      } else {
        this.emit({
          command: "set", target: target, payload: valueNow,
          description: testerText("recorder.did.set", target),
        });
      }
    }
    if (commentChanged && typeof commentNow === "string") {
      // The "Other" input of a select question is a comment editor only while storeOthersAsComment holds;
      // the tester warns that the text is an answer and not a comment, and this records what happened.
      this.emit({
        command: "setComment", target: target, payload: commentNow,
        description: testerText("recorder.did.setComment", target),
      });
    }
  }

  private emit(command: CapturedCommand): void {
    if (!this.host) return;
    if (!this.host.isRecording()) {
      this.host.onIgnored(command.description, "paused", command.target);
      return;
    }
    this.host.onCommand(command);
  }

  // -----------------------------------------------------------------------------------------------
  // The model
  // -----------------------------------------------------------------------------------------------

  private subscribeToModel(survey: SurveyModel): void {
    const anySurvey: any = survey;
    this.on(anySurvey.onValueChanged, (_: any, options: any) => {
      // Before anything else: whatever this change is about, the question of the gesture is live right
      // now, and if the person's own answer is what started this it is in the model at this moment.
      this.noteModelChange();
      const reason: string | undefined = options.reason;
      if (reason === "trigger" || reason === "expression") {
        // The authoritative signal for "the survey wrote this, not the person". It is not recorded, and
        // it does not cancel the answer that set it off either: the replay of that answer produces this
        // write again on its own.
        this.host?.onIgnored(reason === "trigger"
          ? testerText("recorder.ignored.byTrigger", format(options.value))
          : testerText("recorder.ignored.byExpression", format(options.value)),
        reason as IgnoredReason, options.name);
        return;
      }
      if (!this.gesture) {
        this.host?.onIgnored(testerText("recorder.ignored.noGesture", format(options.value)),
          "noGesture", options.name);
      }
    });
    // A cell of a matrix and a question of a dynamic panel report their own change here; the survey-level
    // event carries the whole array under the outer question's name. Both are read the same way: the
    // snapshot comes from the question object, so no shape has to be unpacked.
    this.on(anySurvey.onMatrixCellValueChanged, () => this.noteModelChange());
    this.on(anySurvey.onDynamicPanelValueChanged, () => this.noteModelChange());
    this.on(anySurvey.onVariableChanged, (_: any, options: any) => {
      // A calculated value and a variable are never a respondent action; they are shown so that a value
      // moving on its own is visible rather than mysterious.
      this.host?.onIgnored(testerText("recorder.ignored.byVariable", format(options.value)), "expression",
        options.name);
    });
    this.on(anySurvey.onMatrixRowAdded, (_: any, options: any) => {
      this.emitFromQuestion(options.question, "addRow", 1);
    });
    this.on(anySurvey.onMatrixRowRemoved, (_: any, options: any) => {
      this.emitFromQuestion(options.question, "removeRow", options.rowIndex);
    });
    this.on(anySurvey.onDynamicPanelAdded, (_: any, options: any) => {
      this.emitFromQuestion(options.question, "addPanel", 1);
    });
    this.on(anySurvey.onDynamicPanelRemoved, (_: any, options: any) => {
      this.emitFromQuestion(options.question, "removePanel", options.panelIndex);
    });
  }

  // A row or a panel is recorded only when the gesture belongs to that very question: the Add and Remove
  // buttons live inside it. Rows created by minRowCount, by a default value or by the growth a set
  // performs belong to no gesture at all.
  private emitFromQuestion(question: any, command: CapturedCommandName, payload: any): void {
    if (!this.host) return;
    const owner = !!this.gesture ? this.gesture.question : undefined;
    const target = getQuestionTargetName(question);
    // The same sentence either way, about the target when there is one and about the question when the
    // grammar cannot address it: "added a row to items", "added a row to \"items\"".
    const said = "recorder.did." + command;
    if (owner !== question || !target) {
      this.host.onIgnored(testerText(said, describeQuestion(question)),
        owner === undefined ? "noGesture" : "automatic", target);
      return;
    }
    if (typeof payload !== "number") return;
    // The value the person typed into a cell comes first: this press is the later step.
    this.flushValueOnly();
    this.emit({
      command: command, target: target, payload: payload, description: testerText(said, target),
    });
  }

  // The value gesture only: the gesture object itself stays, because the click that adds a row is part of
  // the same interaction and the next value change still belongs to this question.
  private flushValueOnly(): void {
    const gesture = this.gesture;
    if (!gesture) return;
    this.settle();
    this.gesture = {
      question: gesture.question,
      targetContext: gesture.targetContext,
      valueBefore: clone(gesture.question.value),
      commentBefore: clone(gesture.question.comment),
      hasUserValue: false,
      userValue: undefined,
      userComment: undefined,
      valueEpoch: -1,
    };
  }

  private wrapNavigation(survey: SurveyModel): void {
    const anySurvey: any = survey;
    NAVIGATION.forEach(entry => {
      const name = entry.methods.filter(method => typeof anySurvey[method] === "function")[0];
      if (!name) return;
      const original = anySurvey[name].bind(survey);
      anySurvey[name] = (...args: Array<any>): any => {
        this.onNavigation(entry.command);
        return original(...args);
      };
      this.wrapped.push(name);
    });
  }

  private onNavigation(command: CapturedCommandName): void {
    if (!this.host) return;
    if (!this.chromeGesture) {
      // The survey moved on by itself: goNextPageAutomatic after the last answer of a page, a
      // completetrigger, an auto-complete. A replay reproduces all three, so recording the press would
      // press the button a second time.
      this.host.onIgnored(testerText("recorder.moved." + command), "automatic");
      return;
    }
    this.flush();
    this.emit({
      command: command, target: SurveyTestSurveyTargetName, payload: true,
      description: testerText("recorder.did." + command),
    });
  }

  private on(event: any, handler: any): void {
    if (!event || typeof event.add !== "function") return;
    event.add(handler);
    this.modelHandlers.push({ event: event, handler: handler });
  }
}

// Marked in the markup rather than recognised by class name, so the rule is one attribute the pane sets
// on the layer it owns: everything inside it is the recorder's UI, at any depth.
function isRecorderUi(node: EventTarget | null): boolean {
  const element: any = node instanceof Element ? node : (node as any)?.parentElement;
  return !!element && typeof element.closest === "function" && !!element.closest("[data-recorder-ui]");
}

function clone(value: any): any {
  if (value === undefined || value === null) return value;
  if (typeof value !== "object") return value;
  try {
    return JSON.parse(JSON.stringify(value));
  } catch{
    return value;
  }
}

function isSame(a: any, b: any): boolean {
  if (a === b) return true;
  if (a === undefined || b === undefined) return false;
  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch{
    return false;
  }
}

function format(value: any): string {
  try {
    const text = JSON.stringify(value);
    return text === undefined
      ? String(value)
      : text.length > 60 ? testerText("common.truncated", text.substring(0, 59)) : text;
  } catch{
    return String(value);
  }
}

function describeQuestion(question: any): string {
  return "\"" + (!!question && question.name ? question.name : "?") + "\"";
}
