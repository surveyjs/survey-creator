import * as React from "react";
import { useLayoutEffect, useRef } from "react";
import { Survey } from "survey-react-ui";
import type { TesterRecorderModel, TesterRunnerModel } from "survey-creator-core/tester";
import { AdornerContext, SurveyAdorner } from "./adorners";
import { useModelUpdates } from "./useModel";

// The two panes a survey is drawn in, and they are one file because they are one decision made twice:
// what a person may do to the model on the screen.
//
// On the runner it is nothing. The model handed over by surveyCreated is live and the tester is driving
// it, so a keystroke from a person would change the state the next check reads. It is a spectator view:
// input is blocked by the stylesheet rather than by putting the model into a read-only mode, which
// would change what the case tests.
//
// On the recorder it is everything. The model is not put into a read-only mode and no pointer events
// are blocked, because a case must describe what a respondent can actually do - and what a person does
// to it is exactly what is being written down. The two moments it is taken away are a replay and the
// confirming run behind a tick: `inert` for the length of those, which the browser enforces - no focus,
// no pointer, no keystroke - and which changes nothing about the model.

// The outline on the question a command is about to write into.
//
// It is DOM work, so it is not in the model layer; it is a routine over a container element rather than
// anything React does, so it is not a component either. The pane owns one, hands it its container and
// the target the model says is current, and calls apply() after every render.
//
// targetStarted is announced before the command touches the target and the host's delay is awaited
// right after it, so the mark lands while the question still holds its old value. targetCompleted
// clears currentTarget the moment the command has written, though, so a mark that followed it exactly
// would be gone at the very instant the new value appears - the run would flicker and never show a
// marked question with what was just put into it. The mark therefore stays on the last announced target
// until the next one is announced, the model is replaced, or the run ends.
const FOCUSABLE = [
  "input:not([type=\"hidden\"]):not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  "[contenteditable=\"true\"]",
  "[tabindex]:not([tabindex=\"-1\"])",
].join(", ");

export class TargetMark {
  private lastTarget?: string;
  private target?: string;
  private question?: HTMLElement;
  private control?: HTMLElement;

  // Called after every render of the pane, with no memo of its own: a question that has only just
  // become visible still gets the mark.
  public apply(container: HTMLElement | null | undefined, currentTarget?: string, active = true): void {
    if (!container) return;
    if (!!currentTarget)this.lastTarget = currentTarget;
    // A finished run keeps neither: the model stays on screen as a record, not as a pointer.
    const target = active ? this.lastTarget : undefined;
    // "items[0].quantity" and "matrix.row1.column1" are addressed through their outermost question. A
    // target that cannot be resolved is not an error: it may be a page, a panel or a cell that is not
    // rendered, and nothing about the run depends on drawing an outline.
    const base = !target ? undefined : target.split(/[[.]/)[0];
    const question = !base
      ? undefined
      : container.querySelector("[data-name=\"" + cssEscape(base) + "\"]") as HTMLElement || undefined;
    const control = !question ? undefined : question.querySelector(FOCUSABLE) as HTMLElement || undefined;
    if (!!this.question && this.question !== question) unmark(this.question);
    if (!!this.control && this.control !== control) unmark(this.control);
    const moved = this.target !== target;
    this.target = target;
    this.question = question;
    this.control = control;
    if (!question) return;
    setMark(question, "svt-target-highlight", "2px");
    // Only when the run moved on: scrolling and taking focus on every render would fight both the
    // reader and the smooth scroll already in flight.
    if (moved) question.scrollIntoView({ block: "nearest", behavior: "smooth" });
    if (!control) return;
    setMark(control, "svt-target-focus", "1px");
    if (!moved || document.activeElement === control) return;
    try {
      // The scroll above already put the question where it should be; focus must not fight it.
      control.focus({ preventScroll: true });
    } catch{
      // A renderer that refuses focus costs a focus ring, nothing else.
    }
  }

  public release(): void {
    if (!!this.question) unmark(this.question);
    if (!!this.control) unmark(this.control);
    this.question = undefined;
    this.control = undefined;
    this.target = undefined;
    this.lastTarget = undefined;
  }
}

// The renderer owns the className of what it renders and rewrites it whole when the value changes -
// which is the one moment this mark has to survive, since the value the command just wrote is what the
// reader is looking at. So the outline is written as an inline style as well: React patches style one
// property at a time and never clears one it did not set itself. The class stays for what the element
// is; the style for what it looks like.
function setMark(node: HTMLElement, name: string, width: string): void {
  node.classList.add(name);
  node.style.outline = width + " solid var(--svt-primary)";
  node.style.outlineOffset = width;
}

function unmark(node: HTMLElement): void {
  node.classList.remove("svt-target-highlight");
  node.classList.remove("svt-target-focus");
  node.style.outline = "";
  node.style.outlineOffset = "";
}

function cssEscape(value: string): string {
  return value.replace(/["\\]/g, "\\$&");
}

// The runner's pane: the model of the running test, watched.
export function SpectatorPane(props: { model: TesterRunnerModel }): React.JSX.Element {
  const { model } = props;
  useModelUpdates(model);
  const host = useRef<HTMLDivElement | null>(null);
  const mark = useRef(new TargetMark());

  // A layout effect, and with no dependency list: the mark is re-resolved after every render of this
  // pane, so a question that has only just become visible still gets it.
  useLayoutEffect(() => {
    mark.current.apply(host.current, model.currentTarget, model.marksTarget);
  });
  useLayoutEffect(() => {
    const held = mark.current;
    return () => held.release();
  }, []);

  if (!model.survey) {
    return (
      <div className="svt-survey-pane svt-survey-pane--empty">
        <p>{model.paneEmptyText}</p>
      </div>
    );
  }

  return (
    <div className="svt-survey-pane">
      <div className="svt-survey-pane__badge">
        <strong>{model.surveyPaneTitle}</strong>
        <span>{model.surveyPaneNoteJoin}{model.surveyPaneNote}</span>
      </div>
      {/* Not aria-hidden: focus moves into this pane on every target, and hiding a branch that holds
          the focused element from assistive technology is both a lie and a browser violation. Input
          stays blocked by pointer-events, which is what keeps a person from corrupting the case. */}
      <div className="svt-spectator" ref={host} role="group" aria-label={model.spectatorAriaLabel}>
        <Survey model={model.survey} />
      </div>
    </div>
  );
}

// The recorder's pane: the same model, used.
//
// Two things happen here that happen nowhere else in this bundle. The DOM node the form rendered into
// is handed to the session - attachTo()/detach() is the model layer's one DOM seam, and the capture
// behind it is private and stays so - and the adorner host is put into context, because the components
// between this pane and an adorner belong to survey-react-ui and the pane cannot hand anything to them.
export function RecordingPane(props: { model: TesterRecorderModel }): React.JSX.Element {
  const { model } = props;
  useModelUpdates(model);
  const host = useRef<HTMLDivElement | null>(null);

  // A layout effect and not a callback ref: the node is the same one for the life of this component,
  // and the session has to have it before anything a person does can land on it.
  useLayoutEffect(() => {
    model.attachTo(host.current || undefined);
    return () => model.detach();
  }, [model]);

  const survey = model.liveSurvey;
  if (!survey) {
    return (
      <div className="svt-form svt-form--empty" ref={host}>
        <p>{model.formEmptyText}</p>
      </div>
    );
  }

  const live = model.rendersLiveForm;
  const frozen = model.formLocked;
  return (
    <div
      className={"svt-form" + (frozen ? " svt-form--frozen" : "")}
      ref={host}
      style={{ ["--svt-zoom" as any]: model.zoomFactor }}
      aria-busy={frozen || undefined}
      // The freeze is the session's own synchronous fact - formLocked - and never the spinner's
      // replayState, which is delayed by 300 ms so that a fast rewind does not flash one. A freeze
      // that arrived 300 ms late would let a keystroke land on a model that is about to be thrown away.
      {...(frozen ? { inert: "" } : {})}
    >
      <div className="svt-survey-pane__badge">
        <span className={model.badgeCss}><span className="svt-pill__dot" />{model.badgeText}</span>
      </div>
      <AdornerContext.Provider value={model.adorners}>
        {/* "survey" is a target like any other and gets the same button and the same menu, but it is
            the one target with no element on the page. It stands in the corner of the pane and stays
            there while the form scrolls under it. */}
        {live && (
          <div className="svt-adorners" data-recorder-ui="">
            <SurveyAdorner model={model.adorners} />
          </div>
        )}
        {live ? <Survey model={survey} /> : <StaticForm model={model} />}
      </AdornerContext.Provider>
    </div>
  );
}

// The form when the session cannot record. Not the survey with its inputs disabled - the survey is not
// rendered at all, and what stands here is a reading of the same model, decided in
// TesterRecorderModel.staticForm. There is no control to type into, so a blocked session cannot take an
// answer that nothing would record. Nothing here depends on a handler deciding to ignore what it was
// given.
function StaticForm(props: { model: TesterRecorderModel }): React.JSX.Element {
  const form = props.model.staticForm;
  return (
    <div className="svt-static-form" aria-label={form.ariaLabel}>
      <p className="svt-static-form__where">{form.whereText}</p>
      {!!form.emptyText && <p className="svt-static-form__empty">{form.emptyText}</p>}
      <ul className="svt-static-form__list">
        {form.fields.map(field => (
          <li key={field.key} className="svt-static-field">
            <span className="svt-static-field__title">{field.title}</span>
            <span className="svt-static-field__value svt-mono">{field.value}</span>
            <span className="svt-static-field__name svt-mono">{field.name}</span>
          </li>
        ))}
      </ul>
      {/* Not a button. A chip that looks like the control that is not there, so the shape of the page
          survives the switch and nothing on it can be pressed. */}
      <span className="svt-static-form__submit" aria-disabled="true">{form.submitText}</span>
    </div>
  );
}
