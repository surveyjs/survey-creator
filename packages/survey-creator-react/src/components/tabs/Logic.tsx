import React, { Fragment } from "react";
import { Base, SurveyModel } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  Survey
} from "survey-react-ui";
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
    return (
      <Fragment>
        <div className="svc-plugin-tab__content-actions">
          <SurveyActionBar model={this.model.toolbar}></SurveyActionBar>
        </div>
        <div className="svc-plugin-tab__content">
          <Survey model={this.model.itemsSurvey}></Survey>
        </div>
      </Fragment>
    );
  }
}
ReactElementFactory.Instance.registerElement("svc-tab-logic", (props) => {
  return React.createElement(TabLogicComponent, props);
});
