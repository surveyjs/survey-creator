import { Fragment } from "react";
import * as React from "react";
import { Action, Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, Survey, attachKey2click } from "survey-react-ui";
import { SurveyLogicUI } from "survey-creator-core";

export class TabLogicAddButtonComponent extends SurveyElementBase<any, any> {
  private get model(): Action {
    return this.props.button;
  }
  protected getStateElement(): Base {
    return this.model;
  }

  renderElement(): JSX.Element {
    const buttonClassName = "svc-logic-tab__content-action svc-btn" + ((this.model.enabled !== undefined && !this.model.enabled) ? " svc-logic-tab__content-action--disabled" : "");
    return attachKey2click(<div
      role="button"
      onClick={(e) => {
        e.stopPropagation();
        this.model.action();
      }}
      className={buttonClassName}
      title={this.model.title}
    >
      <span className="svc-text svc-text--normal svc-text--bold">
        {this.model.title}
      </span>
    </div>);
  }
}
ReactElementFactory.Instance.registerElement("svc-tab-logic-add-button", (props) => {
  return React.createElement(TabLogicAddButtonComponent, props);
});

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
    const addLogic = !this.model.readOnly ? <TabLogicAddButtonComponent button={this.model.addNewButton} /> : undefined;
    return (
      <Fragment>
        <div className={logicTabClassName}>
          <Survey model={this.model.itemsSurvey}></Survey>
          {this.model.hasItems ? null : (
            <div className="svc-logic-tab__content-empty" >
              <span className="svc-text">{this.model.emptyTabPlaceholder}</span>
            </div>)}
          {addLogic}
        </div>
      </Fragment>
    );
  }
}
ReactElementFactory.Instance.registerElement("svc-tab-logic", (props) => {
  return React.createElement(TabLogicComponent, props);
});
