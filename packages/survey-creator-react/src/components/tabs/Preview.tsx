import React from "react";
import { Base } from "survey-core";
import { SurveyActionBar, ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { TabTestPlugin, TestSurveyTabViewModel } from "@survey/creator";
import { SurveySimulator } from "./SurveySimulator";
import { CreatorSurveyResultsComponent } from "../Results";

export class TabPreviewSurveyComponent extends SurveyElementBase<any, any> {
  private model: TestSurveyTabViewModel;

  constructor(props: any) {
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
          <SurveyActionBar items={this.model.actions}></SurveyActionBar>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-test", (props) => {
  return React.createElement(TabPreviewSurveyComponent, props);
});