import React from "react";
import { Base } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase
} from "survey-react-ui";
import { TestSurveyTabViewModel } from "@survey/creator";
import { SurveySimulator } from "./SurveySimulator";
import { SurveyResults } from "../Results";

export class TabPreviewSurveyComponent extends SurveyElementBase<any, any> {
  private get model(): TestSurveyTabViewModel {
    return this.props.data;
  }
  protected getStateElement(): Base {
    return this.model;
  }

  renderElement(): JSX.Element {
    return (
      <div className="svc-creator-tab__content svc-test-tab__content">
        <div className="svc-plugin-tab__content">
          <SurveySimulator model={this.model.simulator}></SurveySimulator>
          {!this.model.isRunning ? (
            <SurveyResults survey={this.model.simulator.survey} />
          ) : null}
        </div>
        <div className="svc-test-tab__content-actions">
          <SurveyActionBar model={this.model.toolbar}></SurveyActionBar>
          <SurveyActionBar model={this.model.pages}></SurveyActionBar>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-test", (props) => {
  return React.createElement(TabPreviewSurveyComponent, props);
});
