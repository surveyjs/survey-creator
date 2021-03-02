import React from "react";
import { Base, SurveyModel } from "survey-core";
import {
  ActionBar,
  ReactElementFactory,
  SurveyElementBase,
} from "survey-react-ui";
import {
  CreatorBase,
  TabTestPlugin,
  TestSurveyTabViewModel,
} from "@survey/creator";
import { SurveySimulator } from "./SurveySimulator";
import { CreatorSurveyResultsComponent } from "../Results";

export class TabPreviewSurveyComponent extends SurveyElementBase<any, any> {
  private model: TestSurveyTabViewModel;

  constructor(props) {
    super(props);
    const plugin: TabTestPlugin = this.props.data;
    this.model = plugin.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    return (
      <div className="svc-creator-tab__content">
        <div className="svc-test-tab__content">
          <SurveySimulator options={this.model.simulator}></SurveySimulator>

          {!this.model.isRunning ? (
            <CreatorSurveyResultsComponent survey={this.model.survey} />
          ) : null}
        </div>
        <div className="svc-test-tab__content-actions">
          <ActionBar items={this.model.actions}></ActionBar>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-test", (props) => {
  return React.createElement(TabPreviewSurveyComponent, props);
});
