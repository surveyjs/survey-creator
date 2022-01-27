import React from "react";
import ReactDOM from "react-dom";

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
  QuestionRowModel,
  LocalizableString
} from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  ReactQuestionFactory,
  Model,
  SurveyElementBase,
  SurveyLocStringViewer,
  Survey
} from "survey-react-ui";
import {
  ICreatorOptions,
  CreatorBase,
  ITabbedMenuItem,
  getElementWrapperComponentName,
  isStringEditable,
  getElementWrapperComponentData,
  getItemValueWrapperComponentName,
  getItemValueWrapperComponentData
} from "@survey/creator";
import { TabbedMenuComponent } from "./components/TabbedMenu";
import { editableStringRendererName } from "./components/StringEditor";
import { NotifierComponent } from "./components/Notifier";
import { SvgBundleComponent } from "./components/SvgBundle";

interface ISurveyCreatorComponentProps {
  creator: SurveyCreator;
}

export class SurveyCreatorComponent extends SurveyElementBase<
  ISurveyCreatorComponentProps,
  any
> {
  constructor(props: ISurveyCreatorComponentProps) {
    super(props);
    this.rootNode = React.createRef();
  }
  get creator(): CreatorBase<SurveyModel> {
    return this.props.creator;
  }
  protected getStateElement(): Base {
    return this.props.creator;
  }
  componentDidMount() {
    super.componentDidMount();
    this.creator.initKeyboardShortcuts(this.rootNode.current);
    this.creator.initResponsivityManager(this.rootNode.current);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.creator.removeKeyboardShortcuts(this.rootNode.current);
    this.creator.resetResponsivityManager();
  }
  private rootNode: React.RefObject<HTMLDivElement>;

  renderElement() {
    const creator: CreatorBase<SurveyModel> = this.props.creator;
    const creatorClassName = "svc-creator" + (this.props.creator.isMobileView ? " svc-creator--mobile" : "");
    const contentWrapperClassName = "svc-creator__content-wrapper svc-flex-row" + (this.props.creator.isMobileView ? " svc-creator__content-wrapper--footer-toolbar" : "");
    const fullContainerClassName = "svc-flex-row svc-full-container" + (" svc-creator__side-bar--" + this.creator.sidebarLocation);
    let licenseBanner = null;
    if (!this.props.creator.haveCommercialLicense) {
      licenseBanner = (
        <div className="svc-creator__banner">
          <span className="svc-creator__non-commercial-text">
            <a href="https://surveyjs.io/buy">
              {this.props.creator.licenseText}
            </a>
          </span>
        </div>
      );
    }
    //AM: width unrecognized by react
    return (
      <div className={creatorClassName} ref={this.rootNode}>
        <SvgBundleComponent></SvgBundleComponent>
        <div className="svc-full-container svc-creator__area svc-flex-column">
          <div className={fullContainerClassName}>
            <div className="svc-flex-column svc-flex-row__element svc-flex-row__element--growing">
              <div className="svc-top-bar">
                {(creator.showTabs ?
                  <div className="svc-tabbed-menu-wrapper">
                    <TabbedMenuComponent model={creator.tabbedMenu}></TabbedMenuComponent>
                  </div> : null)}
                {(creator.showToolbar ?
                  <div className="svc-toolbar-wrapper">
                    <SurveyActionBar model={creator.toolbar}></SurveyActionBar>
                  </div>
                  : null)}
              </div>
              <div className={contentWrapperClassName}>
                <div className="svc-creator__content-holder svc-flex-column">
                  {this.renderActiveTab()}
                </div>
              </div>
              <div className="svc-footer-bar">
                {(creator.isMobileView ?
                  <div className="svc-toolbar-wrapper">
                    <SurveyActionBar model={creator.footerToolbar}></SurveyActionBar>
                  </div>
                  : null)}
              </div>
            </div>
            {this.renderSidebar()}
          </div>
          {licenseBanner}
          <NotifierComponent
            creator={creator}
            notifier={creator.notifier}
          ></NotifierComponent>
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
    if (tab.visible === false) {
      return null;
    }
    const creator: CreatorBase<SurveyModel> = this.props.creator;
    const component = !!tab.renderTab
      ? tab.renderTab()
      : ReactElementFactory.Instance.createElement(tab.componentContent, {
        creator: creator,
        survey: creator.survey,
        data: tab.data.model
      });
    const className = "svc-creator-tab" + (creator.toolboxLocation == "right" ? " svc-creator__toolbox--right" : "");
    return (
      <div
        key={tab.id}
        id={"scrollableDiv-" + tab.id}
        className={className}
      >
        {component}
      </div>
    );
  }
  renderSidebar() {
    if (!!this.creator.sidebar) {
      const className = this.creator.isMobileView ? "sv-mobile-side-bar" : "";
      return (
        <div className={className}>
          {ReactElementFactory.Instance.createElement("svc-side-bar", { model: this.creator.sidebar })}
        </div>);
    } else {
      return null;
    }
  }
}

export class DesignTimeSurveyModel extends Model {
  constructor(public creator: SurveyCreator, jsonObj?: any) {
    super(jsonObj);
  }
  public isPopupEditorContent = false;

  public getElementWrapperComponentName(element: any, reason?: string): string {
    let componentName = getElementWrapperComponentName(
      element,
      reason,
      this.isPopupEditorContent
    );
    return (
      componentName || super.getElementWrapperComponentName(element, reason)
    );
  }
  public getElementWrapperComponentData(element: any, reason?: string): any {
    const data = getElementWrapperComponentData(element, reason, this.creator);
    return data || super.getElementWrapperComponentData(element);
  }

  public getRowWrapperComponentName(row: QuestionRowModel): string {
    return "svc-row";
  }
  public getRowWrapperComponentData(row: QuestionRowModel): any {
    return {
      creator: this.creator,
      row
    };
  }

  public getItemValueWrapperComponentName(item: ItemValue, question: QuestionSelectBase): string {
    return getItemValueWrapperComponentName(item, question);
  }
  public getItemValueWrapperComponentData(item: ItemValue, question: QuestionSelectBase): any {
    return getItemValueWrapperComponentData(item, question, this.creator);
  }

  public getRendererForString(element: Base, name: string): string {
    if (!this.creator.readOnly && isStringEditable(element, name)) {
      return editableStringRendererName;
    }
    return undefined;
  }

  public getRendererContextForString(element: Base, locStr: LocalizableString) {
    const lStr: any = locStr;
    if (!this.creator.readOnly && isStringEditable(element, locStr.name)) {
      return {
        creator: this.creator,
        element,
        locStr
      };
    }
    return lStr;
  }
}
export class SurveyCreator extends CreatorBase<SurveyModel> {
  constructor(options: ICreatorOptions = {}, options2?: ICreatorOptions) {
    super(options, options2);
  }
  protected createSurveyCore(json: any = {}, reason: string): Model {
    if (reason === "designer" || reason === "modal-question-editor")
      return new DesignTimeSurveyModel(this, json);
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

ReactElementFactory.Instance.registerElement("survey-widget", (props) => {
  return React.createElement(Survey, props);
});
