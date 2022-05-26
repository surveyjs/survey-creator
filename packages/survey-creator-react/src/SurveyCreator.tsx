import React from "react";
import ReactDOM from "react-dom";

import {
  Base,
  Question,
  SurveyError,
  SurveyModel
} from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  ReactQuestionFactory,
  SurveyElementBase,
  SurveyLocStringViewer,
  Survey
} from "survey-react-ui";
import {
  ICreatorOptions,
  CreatorBase,
  ITabbedMenuItem
} from "survey-creator-core";
import { TabbedMenuComponent } from "./TabbedMenu";
import { NotifierComponent } from "./Notifier";
import { SvgBundleComponent } from "./SvgBundle";

interface ISurveyCreatorComponentProps {
  creator: SurveyCreator;
  style?: any;
}

export class SurveyCreatorComponent extends SurveyElementBase<
  ISurveyCreatorComponentProps,
  any
> {
  constructor(props: ISurveyCreatorComponentProps) {
    super(props);
    this.rootNode = React.createRef();
  }
  get creator(): CreatorBase {
    return this.props.creator;
  }
  protected getStateElement(): Base {
    return this.props.creator;
  }
  get style(): any {
    return this.props.style;
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
    const creator: CreatorBase = this.props.creator;
    if (creator.isCreatorDisposed) return null;
    const creatorClassName = "svc-creator" + (this.props.creator.isMobileView ? " svc-creator--mobile" : "");
    const areaClassName = "svc-full-container svc-creator__area svc-flex-column" + (this.props.creator.haveCommercialLicense ? "" : " svc-creator__area--with-banner");
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
      <div className={creatorClassName} ref={this.rootNode} style={this.style}>
        <SvgBundleComponent></SvgBundleComponent>
        <div className={areaClassName}>
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
    const creator: CreatorBase = this.props.creator;
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
    const creator: CreatorBase = this.props.creator;
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

export class SurveyCreator extends CreatorBase {
  constructor(options: ICreatorOptions = {}, options2?: ICreatorOptions) {
    super(options, options2);
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
