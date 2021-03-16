import React, { CSSProperties } from "react";

import TabbedMenuComponent from "./TabbedMenuComponent";
import PropertyGridComponent from "./PropertyGrid";
import {
  Base,
  IActionBarItem,
  Question,
  StylesManager,
  SurveyError,
  unwrap,
  SurveyModel,
  SurveyElement,
} from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  ReactQuestionFactory,
  Model,
  SurveyElementBase,
  SurveyLocStringViewer,
} from "survey-react-ui";
import {
  CreatorBase,
  ICreatorOptions,
  PropertyGridViewModel,
} from "@survey/creator";

StylesManager.applyTheme("modern");

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
  get creator(): CreatorBase<SurveyModel> {
    return this.props.creator;
  }
  protected getStateElement(): Base {
    return this.props.creator;
  }

  render() {
    const creator: CreatorBase<SurveyModel> = this.props.creator;
    //AM: width unrecognized by react
    const style = { width: "auto", borderLeft: "1px solid lightgray" };
    return (
      <div className="svc-creator">
        <div className="svc-creator__area svc-flex-column">
          <div className="svc-top-bar">
            <TabbedMenuComponent items={creator.tabs}></TabbedMenuComponent>
            <SurveyActionBar items={creator.toolbarItems}></SurveyActionBar>
          </div>
          <div className="svc-creator__content-wrapper svc-flex-row">
            <div className="svc-creator__content-holder svc-flex-column">
              {this.renderCreatorTabs()}
            </div>
          </div>
        </div>
        <div className="svc-flex-column" style={style}>
          <PropertyGridComponent
            model={creator.propertyGrid}
            title="Question Properties"
          ></PropertyGridComponent>
        </div>
      </div>
    );
  }
  renderCreatorTabs() {
    const creator: CreatorBase<SurveyModel> = this.props.creator;
    var tabs = creator.tabs.map((tab, index) => {
      return this.renderCreatorTab(tab);
    });
    return <>{tabs}</>;
    //return <Survey.Survey model={this.creator.survey} />;
  }
  renderCreatorTab(tab: IActionBarItem) {
    const creator: CreatorBase<SurveyModel> = this.props.creator;
    let style: CSSProperties = {};
    //if (tab.visible !== undefined && !tab.visible) {
    if (!unwrap(tab.active)) {
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

class DesignTimeSurveyModel extends Model {
  constructor(public creator: SurveyCreator, jsonObj?: any) {
    super(jsonObj);
  }
  public getElementWrapperComponentName(element: SurveyElement): string {
    if (element.isDesignMode) {
      if (element instanceof Question) {
        return "svc-question";
      }
    }
    return super.getElementWrapperComponentName(element);
  }
  public getElementWrapperComponentData(element: SurveyElement): any {
    if (element.isDesignMode) {
      if (element instanceof Question) {
        return this.creator;
      }
    }
    return super.getElementWrapperComponentData(element);
  }
}
class SurveyCreator extends CreatorBase<SurveyModel> {
  constructor(options: ICreatorOptions = {}) {
    super(options);
  }
  protected createSurveyCore(json: any = {}): SurveyModel {
    return new DesignTimeSurveyModel(this, json);
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

export function createReactSurveyCreator(json: any, options: any = null) {
  if (!options) options = {};
  const creator = new SurveyCreator(options);
  creator.JSON = json;
  //creator.setSurvey(new Model(json));
  return creator;
}
