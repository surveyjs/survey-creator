import React from "react";
import { Action, Base } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  attachKey2click
} from "survey-react-ui";
import { TestSurveyTabViewModel } from "survey-creator-core";
import { SurveySimulator } from "./SurveySimulator";
import { SurveyResults } from "../Results";

export class TabPreviewTestSurveyAgainComponent extends SurveyElementBase<any, any> {
  private get model(): Action {
    return this.props.button;
  }
  protected getStateElement(): Base {
    return this.model;
  }

  renderElement(): JSX.Element {
    const buttonClassName = "svc-preview__test-again svc-btn";
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
ReactElementFactory.Instance.registerElement("svc-tab-preview-test-again", (props) => {
  return React.createElement(TabPreviewTestSurveyAgainComponent, props);
});

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

  renderElement(): JSX.Element {
    const tabContentClassName = "svc-creator-tab__content svc-test-tab__content" + (this.model.isPageToolbarVisible ? " svc-creator-tab__content--with-toolbar" : "");
    return (
      <div className={tabContentClassName}>
        <div className="svc-plugin-tab__content">
          <SurveySimulator model={this.model.simulator}></SurveySimulator>
          {!this.model.isRunning ? <TabPreviewTestSurveyAgainComponent button={this.model.testAgainAction} /> : null}
          {!this.model.isRunning ? <SurveyResults survey={this.model.simulator.survey} /> : null}
        </div>
        {this.getBottomToolbar()}
      </div>
    );
  }
  getBottomToolbar(): JSX.Element {
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

ReactElementFactory.Instance.registerElement("svc-tab-test", (props) => {
  return React.createElement(TabPreviewSurveyComponent, props);
});
