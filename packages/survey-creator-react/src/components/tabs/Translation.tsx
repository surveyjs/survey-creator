import React from "react";
import { Base } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  Survey
} from "survey-react-ui";
import {
  TabTranslationPlugin,
  TranslationModel,
  Translation
} from "@survey/creator";

export class TabTranslationComponent extends SurveyElementBase<any, any> {
  private model: TranslationModel;

  constructor(props: any) {
    super(props);
    const plugin: TabTranslationPlugin = this.props.data;
    this.model = plugin.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    if (!this.model.showTranslation) return null;
    return (
      <TranslationUIComponent
        model={this.model.translation}
      ></TranslationUIComponent>
    );
  }
}

export class TranslationUIComponent extends SurveyElementBase<any, any> {
  constructor(props: any) {
    super(props);
  }
  private get model(): Translation {
    return this.props.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }
  render(): JSX.Element {
    return (
      <div className="svc-creator-tab__content">
        <div className="svc-plugin-tab__content svc-translation-tab__content">
          <Survey model={this.model.settingsSurvey}></Survey>
          <Survey model={this.model.stringsSurvey}></Survey>
        </div>
        <div className="svc-test-tab__content-actions svc-translation-tab__content-actions">
          <SurveyActionBar items={this.model.toolbarItems}></SurveyActionBar>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-translation", (props) => {
  return React.createElement(TabTranslationComponent, props);
});
