import * as React from "react";
import { List, ReactElementFactory, SurveyActionBar, SurveyElementBase } from "survey-react-ui";
import type { Base } from "survey-core";
import type { CheckView, IssueView, TesterTestRowModel, WhyPart } from "survey-creator-core/tester";
import "./StepRowView";

// One of the components this bundle registers, and half of what it draws at all: the toolbars, the
// lists, the run-mode menu and its popup are survey-core models that survey-react-ui already draws, and
// these two rows are what is left.
//
// sv-list renders the component an item names - list-item.tsx, `this.item.component ||
// this.model.itemComponent` - so an Action carrying component: "svt-test-row" and data: a
// TesterTestRowModel is drawn by whatever is registered under that name. The model hands out the string
// and knows nothing else about it.
//
// It subscribes to the row and to nothing else. Everything it draws - including the lock while a run is
// in flight, and every sentence on the line - is a property of the row, which is what keeps this file
// markup.

interface Props {
  item: any;
}

export class TestRowView extends SurveyElementBase<Props, any> {
  // sv-list hands the item over; the row model is what the Action carries as its data.
  public get row(): TesterTestRowModel { return this.props.item.data as TesterTestRowModel; }
  protected getStateElement(): Base { return this.row; }

  protected renderElement(): React.JSX.Element {
    const row = this.row;
    return (
      // The list item is a checkbox, a run and an expander - not something that is selected by being
      // pressed - so a click inside the row is the row's own and never reaches sv-list's onItemClick.
      <div className={row.rowCss} onClick={event => event.stopPropagation()}>
        {/* The head is a line to read a test off, with the two things that are wanted constantly on it:
            the run, and the way to open the rest. It is still clickable as a convenience, but the
            button is the announced control - one way to expand a row, not two. */}
        <div className="svt-test-row__head" onClick={() => row.toggleExpanded()}>
          <input
            type="checkbox"
            className="svt-test-row__check"
            disabled={row.selectDisabled}
            checked={row.selected}
            onClick={event => event.stopPropagation()}
            onChange={() => row.toggleSelected()}
            aria-label={row.selectAriaLabel}
          />
          <span
            className={"svt-dot svt-dot--" + row.toneCss}
            title={row.statusTitle}
            aria-label={row.statusTitle}
          />
          {/* The one verb that is used far more often than all the others put together, so it is the
              one that is always on the page: no hover to find it, no expansion to reach it. */}
          <button
            className="svt-test-row__run"
            disabled={row.runDisabled}
            title={row.runTitle}
            aria-label={row.runAriaLabel}
            onClick={event => { event.stopPropagation(); row.runOne(); }}
          >{row.runMark}</button>
          <span className="svt-test-row__name">{row.displayName}</span>
          {row.isFailure && <span className="svt-test-row__state">{row.stateText}</span>}
          {/* A verdict on a case that stopped part-way is a verdict on that part, and saying so on the
              line is the difference between "this test passes" and "the first three steps of it do". */}
          {!!row.cursorText && <span className="svt-test-row__note">{row.cursorText}</span>}
          {row.disabled && <span className="svt-test-row__note">{row.disabledNote}</span>}
          <span className="svt-test-row__time svt-mono">{row.durationText}</span>
          <button
            className="svt-test-row__toggle"
            aria-expanded={row.expanded}
            aria-label={row.toggleAriaLabel}
            title={row.toggleTitle}
            onClick={event => { event.stopPropagation(); row.toggleExpanded(); }}
          >{row.toggleMark}</button>
        </div>

        {row.expanded && (
          <div className="svt-test-row__body">
            {/* Everything that is done to the test rather than read off it, one press away rather than
                hidden behind a hover. A verb the host did not supply is not in the container, so there
                is no condition here about which of them to draw. */}
            <div className="svt-test-row__verbs">
              <SurveyActionBar model={row.verbs} handleClick={false} />
            </div>
            {row.canRename && (
              <div className="svt-test-row__namebar">
                <label className="svt-test-row__namefield">
                  <span>{row.nameLabel}</span>
                  <input
                    className="svt-input"
                    value={row.nameDraft}
                    aria-invalid={!!row.nameProblem}
                    placeholder={row.namePlaceholder}
                    onChange={event => row.setNameDraft(event.target.value)}
                    onKeyDown={event => {
                      event.stopPropagation();
                      if (event.key === "Enter") { event.preventDefault(); row.commitRename(); } else if (event.key === "Escape") { event.preventDefault(); row.resetRename(); }
                    }}
                  />
                </label>
                <button
                  className="svt-button svt-button--primary"
                  disabled={!row.canSaveName}
                  title={row.saveTooltip}
                  onClick={() => row.commitRename()}
                >{row.saveText}</button>
              </div>
            )}
            {row.canRename && row.nameDirty && !!row.nameProblem && (
              <p className="svt-test-row__refused">{row.nameProblem}</p>
            )}

            {/* Nothing says "not run yet": the step list below says it per step, and it says it about
                the case rather than about the row. */}
            {!!row.hintText && <p className="svt-test-row__hint">{row.hintText}</p>}
            <StepList row={row} />
            {row.issueViews.map(issue => (
              <IssueLine
                key={issue.key}
                issue={issue}
                onRevealCase={path => row.revealCase(path)}
                onRevealSurvey={path => row.revealSurvey(path)}
              />
            ))}
            {!!row.failedChecks.length && (
              <div className="svt-assert">
                {row.checkViews.map(check => (
                  <CheckLine key={check.key} row={row} check={check} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

// The steps of the case, all of them, whether they have run or not - and the one place a part of a test
// is run from. The list itself is sv-list over the row's own ListModel; each line is the svt-step-row
// component, which StepRowView registers. What is left here is the frame around it, and every sentence
// in that frame is a property of the row.
function StepList(props: { row: TesterTestRowModel }): React.JSX.Element {
  const { row } = props;
  return (
    <div className="svt-step-list">
      <div className="svt-step-list__head">
        <strong>{row.stepsHeadText}</strong>
        <span className="svt-step-list__where">{row.stepsWhereText}</span>
      </div>

      <div className="svt-step-list__steps">
        {!!row.stepCount
          ? <List model={row.steps} />
          : <p className="svt-step-list__empty">{row.stepsEmptyText}</p>}
      </div>

      {!!row.droppedText && <p className="svt-step-list__note">{row.droppedText}</p>}
      {row.legendVisible && <p className="svt-step-list__legend">{row.legendText}</p>}
    </div>
  );
}

// Why a check did not hold, and where in the two documents to look. Every sentence below was composed
// in the model - checkView.ts - so what is left here is a loop over parts. Composing them was five
// components' worth of reading the tester's detail shapes, which is a decision and not markup.
function Parts(props: { parts: Array<WhyPart> }): React.JSX.Element {
  return (
    <>
      {props.parts.map((part, index) => part.kind === "code"
        ? <code className="svt-mono" key={index}>{part.value}</code>
        : <span key={index}>{part.value}</span>)}
    </>
  );
}

export function IssueLine(props: {
  issue: IssueView,
  onRevealCase(path: string): void,
  onRevealSurvey(jsonPath: string): void,
}): React.JSX.Element {
  const { issue } = props;
  return (
    <p className={issue.css}>
      <strong>{issue.severity}: {issue.code}</strong>
      {!!issue.target && <code className="svt-mono">{issue.target}</code>}
      <span>{issue.message}</span>
      {!!issue.suggestion && <em>{issue.suggestion}</em>}
      {!!issue.casePath && (
        <button className="svt-link" onClick={() => props.onRevealCase(issue.casePath as string)}>
          {issue.casePath}
        </button>
      )}
      {!!issue.jsonPath && (
        <button className="svt-link" onClick={() => props.onRevealSurvey(issue.jsonPath as string)}>
          {issue.inSurveyText}
        </button>
      )}
    </p>
  );
}

// One failing check. "raw.." still opens the whole result, which is the only honest thing to do with
// the details of a check an integrator registered.
function CheckLine(props: { row: TesterTestRowModel, check: CheckView }): React.JSX.Element {
  const { row, check } = props;
  const open = row.isCheckOpen(check.key);
  return (
    <div className="svt-assert__row">
      <span className="svt-assert__line">
        {!!check.target && <code className="svt-mono">{check.target}</code>}
        <span>{check.summary}</span>
        <button
          className="svt-link svt-step__aside"
          onClick={() => row.toggleCheck(check.key)}
        >{row.checkRawToggleText(check.key)}</button>
        {!!check.jsonPath && (
          <button
            className="svt-link svt-step__aside"
            onClick={() => row.revealSurvey(check.jsonPath as string)}
          >{check.inSurveyText}</button>
        )}
      </span>
      {(!!check.why.length || !!check.unknownJson) && (
        <div className="svt-why">
          {check.why.map(line => (
            <div key={line.key}>
              <p className="svt-why__line">
                <span className="svt-why__label">{line.label}</span>
                <Parts parts={line.parts} />
                {!!line.jsonPath && (
                  <button
                    className="svt-link"
                    onClick={() => row.revealSurvey(line.jsonPath as string)}
                  >{check.inSurveyText}</button>
                )}
              </p>
              {line.notes.map(note => (
                <p className="svt-why__note" key={note.key}>
                  <Parts parts={note.parts} />
                  {!!note.jsonPath && (
                    <button
                      className="svt-link"
                      onClick={() => row.revealSurvey(note.jsonPath as string)}
                    >{check.inSurveyText}</button>
                  )}
                </p>
              ))}
            </div>
          ))}
          {!!check.unknownJson && <pre className="svt-step__json">{check.unknownJson}</pre>}
        </div>
      )}
      {open && <pre className="svt-step__json">{check.rawJson}</pre>}
    </div>
  );
}

ReactElementFactory.Instance.registerElement("svt-test-row", props =>
  React.createElement(TestRowView, props as any));
