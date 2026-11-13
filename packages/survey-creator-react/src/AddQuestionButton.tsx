import * as React from "react";
import { Action, Base, IAction, PageModel, SurveyModel } from "survey-core";
import {
  Popup,
  SurveyActionBar,
  ReactElementFactory,
  SurveyPage,
  SvgIcon,
  SurveyElementBase
} from "survey-react-ui";
import { ReactMouseEvent } from "./events";

export class AddQuestionButtonComponent extends SurveyElementBase<{ item: Action }, any> {
  public get model() {
    return this.item.data;
  }
  public get item() {
    return this.props.item;
  }
  protected getStateElement() {
    return this.item;
  }
  protected renderTypeSelector(): React.JSX.Element {
    return <div className={this.item.cssClasses.itemTypeSelector}>{ReactElementFactory.Instance.createElement("sv-action-bar-item-dropdown", { item: this.model.questionTypeSelectorModel })}</div>;
  }
  protected renderElement(): React.JSX.Element {
    return <>
      <div
        className={this.item.getActionBarItemCss()}
        onClick={(e) => {
          e.stopPropagation();
          this.model.addNewQuestion(this.model, new ReactMouseEvent(e));
        }}
        onMouseOver={(e) => this.model.hoverStopper && this.model.hoverStopper(e.nativeEvent, e.currentTarget)}
      >
        <button type="button" className={this.item.getActionBarItemTitleCss() + " svc-surface-btn__title-button"}>
          {this.model.addNewQuestionText}
        </button>
        {this.renderTypeSelector()}
      </div>
    </>;
  }
}

ReactElementFactory.Instance.registerElement("svc-add-new-question-btn", (props) => {
  return React.createElement(AddQuestionButtonComponent, props);
});