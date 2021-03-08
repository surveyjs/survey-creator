import React from "react";
import { Base, SurveyModel } from "survey-core";
import {
  ActionBar,
  ReactElementFactory,
  SurveyElementBase,
  Survey,
} from "survey-react-ui";
import {
  CreatorBase,
  TabTranslationPlugin,
  TranslationModel,
  Translation,
  TranslationGroup,
  TranslationItem,
} from "@survey/creator";

export class TabTranslationComponent extends SurveyElementBase<any, any> {
  private model: TranslationModel;

  constructor(props) {
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
      <TranslationcUIComponent
        data={this.model.translation}
      ></TranslationcUIComponent>
    );
  }
}

export class TranslationcUIComponent extends SurveyElementBase<any, any> {
  private model: Translation;

  constructor(props) {
    super(props);
    this.model = this.props.data;
  }

  protected getStateElement(): Base {
    return this.model;
  }
  render(): JSX.Element {
    var root = this.renderRoot(this.model.root);
    return (
      <div className="svc-creator-tab__content">
        <Survey model={this.model.settingsSurvey}></Survey>
        <div className="svc-test-tab__content-actions">
          <ActionBar items={this.model.toolbarItems}></ActionBar>
        </div>
        {root}
      </div>
    );
  }
  private renderRoot(group: TranslationGroup): JSX.Element {
    return null;
  }
}
ReactElementFactory.Instance.registerElement("svc-tab-translation", (props) => {
  return React.createElement(TabTranslationComponent, props);
});
