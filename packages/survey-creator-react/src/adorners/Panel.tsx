import { QuestionAdornerViewModel, toggleHovered } from "survey-creator-core";
import * as React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import { Base, Question } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  SurveyQuestion,
  attachKey2click,
  SvgIcon,
  Popup
} from "survey-react-ui";
import { QuestionAdornerComponent, QuestionAdornerComponentProps } from "./Question";
import { AddQuestionButtonComponent } from "../AddQuestionButton";

export class PanelAdornerComponent extends QuestionAdornerComponent {
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
          {this.model.showAddQuestionButton ? attachKey2click(<div
            className="svc-panel__add-new-question svc-action-button"
            onClick={(e) => {
              e.stopPropagation();
              this.model.addNewQuestion();
            }}
          >
            <SvgIcon
              className={"svc-panel__add-new-question-icon"}
              iconName={"icon-add_24x24"}
              size={"auto"}
            ></SvgIcon>
            <span className="svc-add-new-item-button__text">
              {this.model.addNewQuestionText}
            </span>
          </div>) : null}
        </div>
      </div>
    );
  }
  protected disableTabStop() {
    return true;
  }
  protected renderFooter(): React.JSX.Element {
    return (<React.Fragment>
      {!this.model.isEmptyElement && this.model.element.isPanel && this.model.showAddQuestionButton ? (
        <div className="svc-panel__add-new-question-container">
          <div className="svc-panel__question-type-selector-popup">
            <Popup model={this.model.questionTypeSelectorModel.popupModel}></Popup>
          </div>
          <div className="svc-panel__add-new-question-wrapper">
            <AddQuestionButtonComponent item={{ data: this.model } as any} buttonClass={"svc-action-button"} renderPopup={false} />
          </div>
        </div>) : null}

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
