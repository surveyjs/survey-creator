import React, { CSSProperties } from "react";

import * as Survey from "survey-react";

import "survey-react/modern.css";
import TabbedMenuComponent from "./TabbedMenuComponent";
import PropertyGridComponent from "./PropertyGridComponent";
import {
  ActionBar,
  Base,
  IActionBarItem,
  Question,
  ReactElementFactory,
  ReactQuestionFactory,
  SurveyElementBase,
  SurveyError,
  SurveyLocStringViewer,
} from "survey-react";
import { CreatorBase, ICreatorOptions } from "@survey/creator";

Survey.StylesManager.applyTheme("modern");

interface ISurveyCreatorComponentProps {
  creator: SurveyCreator;
}

export class SurveyCreatorComponent extends SurveyElementBase<
  ISurveyCreatorComponentProps,
  any
> {
  constructor(props: ISurveyCreatorComponentProps) {
    super(props);
  }
  get creator(): CreatorBase<Survey.Model> {
    return this.props.creator;
  }
  protected getStateElement(): Base {
    return (this.props.creator as any) as Base;
  }

  render() {
    const creator: CreatorBase<Survey.Model> = this.props.creator;
    //AM: width unrecognized by react
    const style = { width: "auto", borderLeft: "1px solid lightgray" };
    return (
      <div className="svc-creator">
        <div className="svc-creator__area svc-flex-column">
          <div className="svc-top-bar">
            <TabbedMenuComponent items={creator.tabs}></TabbedMenuComponent>
            <ActionBar items={creator.toolbarItems}></ActionBar>
          </div>
          <div className="svc-creator__content-wrapper svc-flex-row">
            <div className="svc-creator__content-holder svc-flex-column">
              {this.renderCreatorTabs()}
            </div>
          </div>
        </div>
        <div className="svc-flex-column" style={style}>
          <PropertyGridComponent
            title="Question Properties"
            creator={creator}
            //survey={creator.survey}
          ></PropertyGridComponent>
        </div>
      </div>
    );
  }
  renderCreatorTabs() {
    const creator: CreatorBase<Survey.Model> = this.props.creator;
    var tabs = creator.tabs.map((tab, index) => {
      return this.renderCreatorTab(tab);
    });
    return <>{tabs}</>;
    //return <Survey.Survey model={this.creator.survey} />;
  }
  private unwrap<T>(value: T | (() => T)): T {
    if (typeof value !== "function") {
      return value;
    } else {
      return (value as () => T)();
    }
  }
  renderCreatorTab(tab: IActionBarItem) {
    const creator: CreatorBase<Survey.Model> = this.props.creator;
    let style: CSSProperties = {};
    //if (tab.visible !== undefined && !tab.visible) {
    if (!this.unwrap(tab.active)) {
      style.display = "none";
    }

    const component = ReactElementFactory.Instance.createElement(
      tab.component,
      { creator: creator, survey: creator.survey, data: tab.data }
    );
    return (
      <div key={tab.id} className="svc-creator-tab" style={style}>
        {component}
      </div>
    );
    /*
      <div
        class="svc-creator-tab"
        data-bind="visible: $parent.creator.viewType == id"
      >
        <!-- ko component: { name: template, params: {creator: $parent.creator, survey: $parent.creator.survey, data: data } } -->
        <!-- /ko -->
      </div>
    */
  }
}

class SurveyCreator extends CreatorBase<Survey.Model> {
  constructor(options: ICreatorOptions = {}) {
    super(options);
  }
  protected createSurveyCore(json: any = {}): Survey.Model {
    return new Survey.Model(json);
  }
  //ISurveyCreator
  public createQuestionElement(question: Question): JSX.Element {
    return ReactQuestionFactory.Instance.createQuestion(
      question.isDefaultRendering()
        ? question.getTemplate()
        : question.getComponentName(),
      {
        question: question,
        isDisplayMode: question.isReadOnly,
        creator: this,
      }
    );
  }
  public renderError(
    key: string,
    error: SurveyError,
    cssClasses: any
  ): JSX.Element {
    return (
      <div key={key}>
        <span className={cssClasses.error.icon} aria-hidden="true" />
        <span className={cssClasses.error.item}>
          <SurveyLocStringViewer locStr={error.locText} />
        </span>
      </div>
    );
  }
  public questionTitleLocation(): string {
    return this.survey.questionTitleLocation;
  }
  public questionErrorLocation(): string {
    return this.survey.questionErrorLocation;
  }
}

export function createReactSurveyCreator(json: any) {
  const creator = new SurveyCreator({});
  //creator.JSON = json;
  creator.setSurvey(new Survey.Model(json));
  return creator;
}
