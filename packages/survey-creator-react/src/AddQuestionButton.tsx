import * as React from "react";
import { Action, Base, IAction, PageModel, SurveyModel } from "survey-core";
import {
  attachKey2click,
  Popup,
  SurveyActionBar,
  ReactElementFactory,
  SurveyPage,
  SvgIcon,
  SurveyElementBase
} from "survey-react-ui";
import { ReactMouseEvent } from "./events";

export class AddQuestionButtonComponent extends SurveyElementBase<{ item: Action, buttonClass?: string, renderPopup?: boolean }, any> {
  public get model() {
    return this.props.item.data;
  }
  protected renderTypeSelector(): React.JSX.Element {
    const questionTypeSelectorModel = this.model.questionTypeSelectorModel;
    return attachKey2click(<button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        questionTypeSelectorModel.action();
      }}
      className="svc-element__question-type-selector"
      title={this.model.addNewQuestionText}
      role="button"
    >
      <span className="svc-element__question-type-selector-icon">
        <SvgIcon
          iconName={questionTypeSelectorModel.iconName}
          size={"auto"}
          title={this.model.addNewQuestionText}
        ></SvgIcon>
      </span>
      {this.props.renderPopup === undefined || this.props.renderPopup ?
        <Popup model={questionTypeSelectorModel.popupModel}></Popup>
        : null}
    </button>);
  }
  protected renderElement(): React.JSX.Element {
    const addButtonClass = this.props.buttonClass || "svc-btn";
    return <>
      {attachKey2click(<div
        className={"svc-element__add-new-question " + addButtonClass}
        onClick={(e) => {
          e.stopPropagation();
          this.model.addNewQuestion(this.model, new ReactMouseEvent(e));
        }}
        onMouseOver={(e) => this.model.hoverStopper && this.model.hoverStopper(e.nativeEvent, e.currentTarget)}
      >
        <SvgIcon
          className={"svc-panel__add-new-question-icon"}
          iconName={"icon-add_24x24"}
          size={"auto"}
        ></SvgIcon>
        <span className="svc-add-new-item-button__text">
          {this.model.addNewQuestionText}
        </span>
        {this.props.renderPopup !== false ? this.renderTypeSelector() : null}
      </div>)}
      {this.props.renderPopup === false ? this.renderTypeSelector() : null}
    </>;
  }
}

ReactElementFactory.Instance.registerElement("svc-add-new-question-btn", (props) => {
  return React.createElement(AddQuestionButtonComponent, props);
});