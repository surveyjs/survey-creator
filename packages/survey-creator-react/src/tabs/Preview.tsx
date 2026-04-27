import * as React from "react";
import { Base } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase } from "survey-react-ui";
import { TestSurveyTabViewModel } from "survey-creator-core";
import { SurveySimulator } from "./SurveySimulator";
import { SurveyResults } from "../Results";
import { SurfacePlaceholder } from "../components/SurfacePlaceholder";

export class TabPreviewSurveyComponent extends SurveyElementBase<any, any> {
  constructor(props) {
    super(props);
  }
  private get model(): TestSurveyTabViewModel {
    return this.props.data;
  }
  protected getStateElement(): Base {
    return this.model;
  }
  renderPlaceholder(): React.JSX.Element {
    return <SurfacePlaceholder name={"preview"} placeholderTitleText={this.model.placeholderTitleText} placeholderDescriptionText={this.model.placeholderDescriptionText} />;
  }
  renderSimulator(): React.JSX.Element {
    return (<div className="svc-plugin-tab__content">
      <SurveySimulator model={this.model.simulator}></SurveySimulator>
      {this.model.showResults ? <SurveyResults survey={this.model.simulator.survey} /> : null}
    </div>);
  }

  renderElement(): React.JSX.Element {
    const tabContentClassName = "svc-creator-tab__content svc-test-tab__content" + (this.model.isPageToolbarVisible ? " svc-creator-tab__content--with-toolbar" : "");
    return (
      <div className={tabContentClassName}>
        {this.model.simulator.survey.isEmpty ? this.renderPlaceholder() : this.renderSimulator()}
        {this.getBottomToolbar()}
      </div>
    );
  }
  getBottomToolbar(): React.JSX.Element {
    if (this.model.isPageToolbarVisible) {
      return (
        <div className="svc-test-tab__content-actions">
          <SurveyActionBar model={this.model.pages}></SurveyActionBar>
        </div>
      );
    } else {
      return null;
    }
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-preview", (props) => {
  return React.createElement(TabPreviewSurveyComponent, props);
});
