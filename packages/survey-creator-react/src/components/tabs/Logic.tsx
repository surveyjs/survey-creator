import React from "react";
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
    if (logic.mode == "view") {
      return (
        <div className="svc-creator-tab__content">
          <div className="svc-test-tab__content-actions">
            <SurveyActionBar items={logic.toolbarItems}></SurveyActionBar>
          </div>
          <Survey model={logic.itemsSurvey}></Survey>
        </div>
      );
    }
    return (
      <div className="svc-creator-tab__content">
        <Survey model={logic.expressionSurvey}></Survey>
        <Survey model={logic.itemEditorSurvey}></Survey>
        <div className="svc-test-tab__content-actions">
          <SurveyActionBar items={logic.toolbarEditItems}></SurveyActionBar>
        </div>
      </div>
    );
  }
}
ReactElementFactory.Instance.registerElement("svc-tab-logic", (props) => {
  return React.createElement(TabLogicComponent, props);
});
