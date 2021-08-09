import React from "react";
import { Base } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  Survey
} from "survey-react-ui";
import { Translation } from "@survey/creator";

export class TabTranslationComponent extends SurveyElementBase<any, any> {
  private get model(): Translation {
    return this.props.data;
  }
  protected getStateElement(): Base {
    return this.model;
  }
  renderElement(): JSX.Element {
    if (!this.model) return null;
    return (
      <div className="svc-creator-tab__content svc-translation-tab">
        <div className="svc-flex-column svc-creator-tab__content-wrapper">
          <div className="svc-flex-row svc-test-tab__content-actions svc-translation-tab__content-actions">
            <SurveyActionBar model={this.model.toolbar}></SurveyActionBar>
          </div>
          <div className="svc-flex-row svc-plugin-tab__content svc-translation-tab__content">
            <div className="svc-flex-column svc-translation-tab__strings">
              <Survey model={this.model.stringsSurvey}></Survey>
            </div>
          </div>
        </div>
        <div className="svc-flex-column svc-properties-wrapper svc-translation-tab__property-panel">
          <div className="svc-property-panel">
            <div className="svc-property-panel__expander">
              <Survey model={this.model.settingsSurvey}></Survey>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-translation", (props) => {
  return React.createElement(TabTranslationComponent, props);
});
