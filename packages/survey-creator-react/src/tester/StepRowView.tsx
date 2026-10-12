import * as React from "react";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import type { Base } from "survey-core";
import type { TesterStepRowModel } from "survey-creator-core/tester";

// The second of the two row components. Same rule as the test row: it draws one TesterStepRowModel, it
// subscribes to that model, and every sentence on the line - what the step says, what the run button
// would run, why it is refused - is a property of it.

interface Props {
  item: any;
}

export class StepRowView extends SurveyElementBase<Props, any> {
  public get step(): TesterStepRowModel { return this.props.item.data as TesterStepRowModel; }
  protected getStateElement(): Base { return this.step; }

  protected renderElement(): React.JSX.Element {
    const step = this.step;
    return (
      <div className={step.rowCss} onClick={event => event.stopPropagation()}>
        <span className="svt-step__line">
          <span className="svt-step__num svt-mono">{step.numText}</span>
          <span className="svt-step__mark">{step.markText}</span>
          {/* Where the test row keeps its own run, and for the same reason: the number and the mark are
              what the step is, the verb comes next, and the sentence about it follows. */}
          {step.canRun && (
            <button
              className="svt-step__run"
              disabled={step.runDisabled}
              title={step.runTitle}
              aria-label={step.runAriaLabel}
              onClick={() => step.runTo()}
            >{step.runMark}</button>
          )}
          <span className="svt-step__text">{step.text}</span>
          {/* The raw payload of what ran; the step of a case that has not run is read in the JSON. */}
          {step.hasRaw && (
            <button
              className="svt-link svt-step__aside"
              onClick={() => step.toggleRaw()}
            >{step.rawToggleText}</button>
          )}
        </span>
        {step.rawOpen && step.hasRaw && <pre className="svt-step__json">{step.rawJson}</pre>}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svt-step-row", props =>
  React.createElement(StepRowView, props as any));
