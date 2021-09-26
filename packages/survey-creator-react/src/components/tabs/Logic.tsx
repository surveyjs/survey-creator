import React, { Fragment } from "react";
import { Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, Survey, attachKey2click } from "survey-react-ui";
import { SurveyLogicUI } from "@survey/creator";

export class TabLogicComponent extends SurveyElementBase<any, any> {
  private get model(): SurveyLogicUI {
    return this.props.data;
  }
  protected getStateElement(): Base {
    return this.model;
  }

  renderElement(): JSX.Element {
    var logic = this.model;
    var rootClass = "svc-creator-tab__content";
    var content = this.renderViewContent();
    return <div className={rootClass}>{content}</div>;
  }
  private renderViewContent(): JSX.Element {
    const logicTabClassName = "svc-plugin-tab__content svc-logic-tab__content " + (this.model.hasItems ? "" : "svc-logic-tab__empty");
    return (
      <Fragment>
        <div className={logicTabClassName}>
          <Survey model={this.model.itemsSurvey}></Survey>
          {this.model.hasItems ? null : (
            <div role="button" className="svc-logic-tab__content-empty" >
              <span className="svc-text">{this.model.emptyTabPlaceHolder}</span>
            </div>)}

          {attachKey2click(<div
            onClick={(e) => {
              e.stopPropagation();
              this.model.addNewButton.action();
            }}
            className="svc-logic-tab__content-action"
            title={this.model.addNewButton.title}
          >
            <span className="svc-text svc-text--normal svc-text--bold">
              {this.model.addNewButton.title}
            </span>
          </div>)}

        </div>
      </Fragment>
    );
  }
}
ReactElementFactory.Instance.registerElement("svc-tab-logic", (props) => {
  return React.createElement(TabLogicComponent, props);
});
