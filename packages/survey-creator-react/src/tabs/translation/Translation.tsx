import * as React from "react";
import { Base } from "survey-core";
import {
  ReactElementFactory,
  SurveyElementBase,
  Survey
} from "survey-react-ui";
import { Translation } from "survey-creator-core";

export class TabTranslationComponent extends SurveyElementBase<any, any> {
  private get model(): Translation {
    return this.props.data || this.props.model;
  }
  protected getStateElement(): Base {
    return this.model;
  }
  renderElement(): JSX.Element {
    if (!this.model) return null;
    return (
      <div className="svc-creator-tab__content svc-translation-tab">
        {this.renderElementContent()}
      </div>
    );
  }
  renderElementContent(): JSX.Element {
    if (this.model.isEmpty) {
      return (
        <div className="st-no-strings">
          <span>{this.model.noStringsText}</span>
        </div>
      );
    } else {
      return (
        <div className="st-content">
          <div className="svc-flex-column st-strings-wrapper">
            <div className="svc-flex-row st-strings-header">
              <Survey model={this.model.stringsHeaderSurvey}></Survey>
            </div>
            <div className="svc-flex-row svc-plugin-tab__content st-strings">
              <Survey model={this.model.stringsSurvey}></Survey>
            </div>
          </div>
        </div>
      );
    }
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-translation", (props) => {
  return React.createElement(TabTranslationComponent, props);
});
