import * as React from "react";
import { Base } from "survey-core";
import {
  ReactElementFactory,
  SurveyElementBase,
  Survey
} from "survey-react-ui";
import { Translation } from "survey-creator-core";
import { SurfacePlaceholder } from "../../components/SurfacePlaceholder";

export class TabTranslationComponent extends SurveyElementBase<any, any> {
  private get model(): Translation {
    return this.props.data || this.props.model;
  }
  protected getStateElement(): Base {
    return this.model;
  }
  renderElement(): React.JSX.Element {
    if (!this.model) return null;
    return (
      <div className={"svc-creator-tab__content svc-translation-tab" + (this.model.isEmpty ? " svc-translation-tab--empty" : "")}>
        {this.renderElementContent()}
      </div>
    );
  }
  renderElementContent(): React.JSX.Element {
    if (this.model.isEmpty) {
      return <SurfacePlaceholder name={"translation"} placeholderTitleText={this.model.placeholderTitleText} placeholderDescriptionText={this.model.placeholderDescriptionText} />;
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
