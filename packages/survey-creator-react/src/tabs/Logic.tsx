import { Fragment } from "react";
import * as React from "react";
import { Action, Base } from "survey-core";
import { ReactElementFactory, SurveyElementBase, Survey, attachKey2click, SurveyActionBar } from "survey-react-ui";
import { SurveyLogicUI } from "survey-creator-core";
import { SurfacePlaceholder } from "../components/SurfacePlaceholder";

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
    const actions = !this.model.readOnly ? <SurveyActionBar model={this.model.contentActionsContainer}></SurveyActionBar> : undefined;
    return (
      <Fragment>
        <div className={logicTabClassName}>
          {this.model.hasItems ?
            (<>
              <Survey model={this.model.itemsSurvey}></Survey>
              {actions}
            </>)
            : (<div className="svc-logic-tab__content-empty" >
              <SurfacePlaceholder name={"logic"} placeholderTitleText={this.model.placeholderTitleText} placeholderDescriptionText={this.model.placeholderDescriptionText} />
              {actions}
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
