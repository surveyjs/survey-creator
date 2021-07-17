import React from "react";
import { Base } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase
} from "survey-react-ui";
import { TabTestPlugin, TestSurveyTabViewModel } from "@survey/creator";
import { SurveySimulator } from "./SurveySimulator";
import { CreatorSurveyResultsComponent } from "../Results";
import { TabBaseComponent } from "./TabBase";

export class TabPreviewSurveyComponent extends TabBaseComponent<any, any> {
  private get model(): TestSurveyTabViewModel {
    return this.props.data.model;
  }
  protected getStateModel(): Base {
    return this.model;
  }

  renderElement(): JSX.Element {
    return (
      <div className="svc-creator-tab__content svc-test-tab__content">
        <div className="svc-plugin-tab__content">
          <SurveySimulator options={this.model.simulator}></SurveySimulator>
          {!this.model.isRunning ? (
            <CreatorSurveyResultsComponent survey={this.model.survey} />
          ) : null}
        </div>
        <div className="svc-test-tab__content-actions">
          <SurveyActionBar model={this.model.toolbar}></SurveyActionBar>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-test", (props) => {
  return React.createElement(TabPreviewSurveyComponent, props);
});
