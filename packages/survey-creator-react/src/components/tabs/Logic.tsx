import React, { Fragment } from "react";
import { Base, SurveyModel } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  Survey,
} from "survey-react-ui";
import {
  CreatorBase,
  TabLogicPlugin,
  LogicModel,
  SurveyLogicUI,
} from "@survey/creator";

export class TabLogicComponent extends SurveyElementBase<any, any> {
  private model: LogicModel;

  constructor(props) {
    super(props);
    const plugin: TabLogicPlugin = this.props.data;
    this.model = plugin.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    if (!this.model.logic) return null;
    return <LogicUIComponent data={this.model.logic}></LogicUIComponent>;
  }
}

export class LogicUIComponent extends SurveyElementBase<any, any> {
  private model: SurveyLogicUI;

  constructor(props) {
    super(props);
    this.model = this.props.data;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    var logic = this.model;
    var content =
      logic.mode == "view"
        ? this.renderViewContent()
        : this.renderEditContent();
    return (
      <div className="svc-creator-tab__content">
        <div className="svc-plugin-tab__content">{content}</div>
      </div>
    );
  }
  private renderViewContent(): JSX.Element {
    return (
      <Fragment>
        <div className="svc-test-tab__content-actions">
          <SurveyActionBar items={this.model.toolbarItems}></SurveyActionBar>
        </div>
        <Survey model={this.model.itemsSurvey}></Survey>
      </Fragment>
    );
  }
  private renderEditContent(): JSX.Element {
    return (
      <Fragment>
        <Survey model={this.model.expressionSurvey}></Survey>
        <Survey model={this.model.itemEditorSurvey}></Survey>
        <div className="svc-test-tab__content-actions">
          <SurveyActionBar
            items={this.model.toolbarEditItems}
          ></SurveyActionBar>
        </div>
      </Fragment>
    );
  }
}
ReactElementFactory.Instance.registerElement("svc-tab-logic", (props) => {
  return React.createElement(TabLogicComponent, props);
});
