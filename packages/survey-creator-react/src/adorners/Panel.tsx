import { PanelAdornerViewModel } from "survey-creator-core";
import * as React from "react";
import {
  SurveyActionBar,
  ReactElementFactory,
  attachKey2click,
  SvgIcon } from "survey-react-ui";
import { QuestionAdornerComponent, QuestionAdornerComponentProps } from "./Question";

export class PanelAdornerComponent extends QuestionAdornerComponent<PanelAdornerViewModel> {
  renderElementPlaceholder(): React.JSX.Element {
    if (!this.model.isEmptyElement) {
      return null;
    }
    return (
      <div className="svc-panel__placeholder_frame-wrapper">
        <div className="svc-panel__placeholder_frame">
          <div className="svc-panel__placeholder">
            {this.model.placeholderText}
          </div>
          {this.model.showAddQuestionButton ? <SurveyActionBar model={this.model.addQuestionActionsContainer}></SurveyActionBar> : null}
        </div>
      </div>
    );
  }
  protected disableTabStop() {
    return true;
  }
  protected createQuestionViewModel(props: any) {
    return new PanelAdornerViewModel(
      props.componentData,
      props.question,
      null as any
    );
  }

  protected renderFooter(): React.JSX.Element {
    return (<React.Fragment>
      {!this.model.isEmptyElement && this.model.element.isPanel && this.model.showAddQuestionButton ? (
        <SurveyActionBar model={this.model.addQuestionActionsContainer} handleClick={false}></SurveyActionBar>
      ) : null}

      {super.renderFooter()}
    </React.Fragment>);
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-panel",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(PanelAdornerComponent, props);
  }
);
