import * as React from "react";
import { Base } from "survey-core";
import {
  ReactElementFactory,
  SurveyElementBase,
  Survey
} from "survey-react-ui";
import { TranslationBase, TranslationSideBySide } from "survey-creator-core";
import { SurfacePlaceholder } from "../../components/SurfacePlaceholder";

export class TabTranslationComponent extends SurveyElementBase<any, any> {
  private get model(): TranslationBase {
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
    }
    if (this.model.isSideBySideForm) {
      return this.renderSideBySideContent(this.model as TranslationSideBySide);
    }
    // The side-by-side grid view reuses the default strings-grid markup.
    return this.renderStringsContent(this.model);
  }
  renderStringsContent(model: TranslationBase): React.JSX.Element {
    return (
      <div className="st-content">
        <div className="svc-flex-column st-strings-wrapper">
          <div className="svc-flex-row st-strings-header">
            <Survey key={model.stringsHeaderSurvey?.elementIdPrefix} model={model.stringsHeaderSurvey}></Survey>
          </div>
          <div className="svc-flex-row svc-plugin-tab__content st-strings">
            <Survey key={model.stringsSurvey?.elementIdPrefix} model={model.stringsSurvey}></Survey>
          </div>
        </div>
      </div>
    );
  }
  renderSideBySideContent(model: TranslationSideBySide): React.JSX.Element {
    // No target language selected: the target pane is not rendered and the source pane takes
    // the whole surface.
    const targetSurvey = model.targetSurvey;
    return (
      <div className={model.sideBySideRootCss}>
        <div key={model.sourceSurvey?.elementIdPrefix} className="st-side-by-side__source"
          ref={(el) => { model.setSourceScrollElement(el); }}>
          <Survey model={model.sourceSurvey}></Survey>
        </div>
        {!!targetSurvey ?
          <div key={targetSurvey.elementIdPrefix} className="st-side-by-side__target"
            ref={(el) => { model.setTargetScrollElement(el); }}>
            <Survey model={targetSurvey}></Survey>
          </div> : null}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-translation", (props) => {
  return React.createElement(TabTranslationComponent, props);
});
