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

export class PanelAdornerComponent extends QuestionAdornerComponent {
  renderElementPlaceholder(): JSX.Element {
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
              size={24}
            ></SvgIcon>
            <span className="svc-text svc-text--normal svc-text--bold">
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
  protected renderFooter(): JSX.Element {
    return (<React.Fragment>
      {!this.model.isEmptyElement && this.model.element.isPanel && this.model.showAddQuestionButton ? (
        <div className="svc-panel__add-new-question-container">
          <div className="svc-panel__question-type-selector-popup">
            <Popup model={this.model.questionTypeSelectorModel.popupModel}></Popup>
          </div>
          <div className="svc-panel__add-new-question-wrapper">
            {attachKey2click(<div
              className="svc-panel__add-new-question svc-action-button"
              onClick={(e) => {
                e.stopPropagation();
                this.model.addNewQuestion();
              }}
            >
              <SvgIcon
                className={"svc-panel__add-new-question-icon"}
                iconName={"icon-add_24x24"}
                size={24}
              ></SvgIcon>
              <span className="svc-text svc-text--normal svc-text--bold">
                {this.model.addNewQuestionText}
              </span>

            </div>, undefined)}
            {attachKey2click(<button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                this.model.questionTypeSelectorModel.action();
              }}
              className="svc-panel__question-type-selector"
              title={this.model.addNewQuestionText}
            >
              <span className="svc-panel__question-type-selector-icon">
                <SvgIcon
                  iconName={this.model.questionTypeSelectorModel.iconName}
                  size={24}
                ></SvgIcon>
              </span>
            </button>)}
          </div></div>) : null}

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
