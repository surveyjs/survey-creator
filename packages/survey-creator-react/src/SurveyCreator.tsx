import React from "react";
import ReactDOM from "react-dom";
import { CSSProperties } from "react";

import {
  Base,
  Question,
  PanelModel,
  StylesManager,
  SurveyError,
  unwrap,
  SurveyModel,
  SurveyElement,
  ItemValue,
  QuestionSelectBase,
  AdaptiveActionContainer,
  QuestionRowModel
} from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  ReactQuestionFactory,
  Model,
  SurveyElementBase,
  SurveyLocStringViewer
} from "survey-react-ui";
import {
  ICreatorOptions,
  CreatorBase,
  ITabbedMenuItem,
  CreatorToolbarItems,
  getElementWrapperComponentName,
  isStringEditable
} from "@survey/creator";
import TabbedMenuComponent from "./TabbedMenuComponent";
import { editableStringRendererName } from "./components/StringEditor";

StylesManager.applyTheme("modern");

interface ISurveyCreatorToolBarItemsComponentProps {
  toolbar: AdaptiveActionContainer;
}

export class SurveyCreatorToolBarItemsComponent extends SurveyElementBase<
  ISurveyCreatorToolBarItemsComponentProps,
  any
> {
  constructor(props: ISurveyCreatorComponentProps) {
    super(props);
  }
  get toolbar(): AdaptiveActionContainer {
    return this.props.toolbar;
  }
  protected getStateElement(): Base {
    return this.props.toolbar;
  }
  protected renderElement(): JSX.Element {
    return <SurveyActionBar model={this.toolbar}></SurveyActionBar>;
  }
}

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
    let licenseBanner = null;
    if(!this.props.creator.haveCommercialLicense) {
      licenseBanner = 
      <div className="svc-creator__banner">
        <span className="svc-creator__non-commercial-text"><a href="https://surveyjs.io/buy">{this.props.creator.licenseText}</a></span>
      </div>
    }
    //AM: width unrecognized by react
    return (
      <div className="svc-creator">
        <div className="svc-creator__area svc-flex-column">
          <div className="svc-top-bar">
            <TabbedMenuComponent items={creator.tabs}></TabbedMenuComponent>
            <SurveyCreatorToolBarItemsComponent
              toolbar={creator.toolbar}
            ></SurveyCreatorToolBarItemsComponent>
          </div>
          <div className="svc-creator__content-wrapper svc-flex-row">
            <div className="svc-creator__content-holder svc-flex-column">
              {this.renderActiveTab()}
            </div>
          </div>
          {licenseBanner}
        </div>
      </div>
    );
  }
  renderActiveTab() {
    const creator: CreatorBase<SurveyModel> = this.props.creator;
    for (var i = 0; i < creator.tabs.length; i++) {
      if (creator.tabs[i].id === creator.activeTab) {
        return this.renderCreatorTab(creator.tabs[i]);
      }
    }
    return null;
  }
  renderCreatorTab(tab: ITabbedMenuItem) {
    const creator: CreatorBase<SurveyModel> = this.props.creator;
    const component = !!tab.renderTab
      ? tab.renderTab()
      : ReactElementFactory.Instance.createElement(tab.componentContent, {
          creator: creator,
          survey: creator.survey,
          data: tab.data
        });
    return (
      <div key={tab.id} id={"scrollableDiv-" + tab.id} className="svc-creator-tab">
        {component}
      </div>
    );
  }
}

class DesignTimeSurveyModel extends Model {
  constructor(public creator: SurveyCreator, jsonObj?: any) {
    super(jsonObj);
  }

  public get hasLogo(): boolean {
    return true;
  }
  public get isLogoBefore(): boolean {
    return false;
  }
  public get isLogoAfter(): boolean {
    return true;
  }
  public isPopupEditorContent = false;
  public getRowWrapperComponentName(row: QuestionRowModel): string {
    return "svc-row";
  }
  public getRowWrapperComponentData(row: QuestionRowModel): any {
    return {
      creator: this.creator,
      row
    };
  }
  public getElementWrapperComponentName(element: any, reason?: string): string {
    let componentName = getElementWrapperComponentName(element, reason, this.isPopupEditorContent);
    if (!componentName && element instanceof PanelModel) {
      return "svc-question";
    }
    return componentName || super.getElementWrapperComponentName(element, reason);
  }
  public getElementWrapperComponentData(element: any, reason?: string): any {
    if (reason === "logo-image") return this.creator;
    if (
      reason === "cell" ||
      reason === "column-header" ||
      reason === "row-header"
    ) {
      return {
        creator: this.creator,
        element: element,
        question: element.question,
        row: element.row,
        column: element.column
      };
    }
    if (!element["parentQuestionValue"]) {
      if (element instanceof Question) {
        return this.creator;
      }
      if (element instanceof PanelModel) {
        return this.creator;
      }
    }
    return super.getElementWrapperComponentData(element);
  }
  public getItemValueWrapperComponentName(
    item: ItemValue,
    question: QuestionSelectBase
  ): string {
    if (!this.isDesignMode || !!question["parentQuestionValue"] || question.isContentElement) {
      return SurveyModel.TemplateRendererComponentName;
    }
    if (question.getType() === "imagepicker") {
      return "svc-image-item-value";
    }
    return "svc-item-value";
  }
  public getItemValueWrapperComponentData(
    item: ItemValue,
    question: QuestionSelectBase
  ): any {
    if (!!question["parentQuestionValue"] || question.isContentElement) {
      return item;
    }
    return {
      creator: this.creator,
      question
    };
  }
  public getRendererForString(element: Base, name: string): string {
    if (isStringEditable(element, name)) {
      return editableStringRendererName;
    }
    return undefined;
  }
}
export class SurveyCreator extends CreatorBase<SurveyModel> {
  constructor(options: ICreatorOptions = {}, options2?: ICreatorOptions) {
    super(options, options2);
  }
  protected createSurveyCore(json: any = {}, reason: string): Model {
    if (reason === "designer" || reason === "modal-question-editor") return new DesignTimeSurveyModel(this, json);
    return new Model(json);
  }
  public render(target: string | HTMLElement) {
    let node: HTMLElement = target as HTMLElement;
    if (typeof target === "string") {
      node = document.getElementById(target);
    }
    ReactDOM.unmountComponentAtNode(node);
    ReactDOM.render(
      <React.StrictMode>
        <SurveyCreatorComponent creator={this} />
      </React.StrictMode>,
      node
    );
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
        creator: this
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
