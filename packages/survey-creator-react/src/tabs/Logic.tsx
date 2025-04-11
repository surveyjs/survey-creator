import { Fragment } from "react";
import * as React from "react";
import { Action, Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, Survey, attachKey2click } from "survey-react-ui";
import { SurveyLogicUI } from "survey-creator-core";
import { SurfacePlaceholder } from "../components/SurfacePlaceholder";

export class TabLogicAddButtonComponent extends SurveyElementBase<any, any> {
  private get model(): Action {
    return this.props.button;
  }
  protected getStateElement(): Base {
    return this.model;
  }

  renderElement(): React.JSX.Element {
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
      <span className="svc-btn__text">
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

  renderElement(): React.JSX.Element {
    var logic = this.model;
    var rootClass = "svc-creator-tab__content svc-logic-tab";
    var content = this.renderViewContent();
    return <div className={rootClass}>{content}</div>;
  }
  private renderViewContent(): React.JSX.Element {
    const logicTabClassName = "svc-plugin-tab__content svc-logic-tab svc-logic-tab__content " + (this.model.hasItems ? "" : "svc-logic-tab--empty");
    const addLogic = !this.model.readOnly ? <TabLogicAddButtonComponent button={this.model.addNewButton} /> : undefined;
    return (
      <Fragment>
        <div className={logicTabClassName}>
          {this.model.hasItems ?
            (<>
              <Survey model={this.model.itemsSurvey}></Survey>
              {addLogic}
            </>)
            : (<div className="svc-logic-tab__content-empty" >
              <SurfacePlaceholder name={"logic"} placeholderTitleText={this.model.placeholderTitleText} placeholderDescriptionText={this.model.placeholderDescriptionText} />
              {addLogic}
            </div>)
          }
        </div>
      </Fragment >
    );
  }
}
ReactElementFactory.Instance.registerElement("svc-tab-logic", (props) => {
  return React.createElement(TabLogicComponent, props);
});
