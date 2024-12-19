import * as React from "react";
import * as ReactDOM from "react-dom";

import {
  Base,
  Question,
  SurveyError,
  SurveyModel
} from "survey-core";
import {
  NotifierComponent,
  SurveyActionBar,
  ReactElementFactory,
  ReactQuestionFactory,
  SurveyElementBase,
  SurveyLocStringViewer,
  Survey,
  SvgBundleComponent,
  PopupModal
} from "survey-react-ui";
import {
  ICreatorOptions,
  SurveyCreatorModel,
  ITabbedMenuItem,
  assign
} from "survey-creator-core";
import { TabbedMenuComponent } from "./TabbedMenu";

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
  get creator(): SurveyCreatorModel {
    return this.props.creator;
  }
  protected getStateElement(): Base {
    return this.creator;
  }
  get style(): any {
    return this.props.style;
  }

  componentDidUpdate(prevProps: any, prevState: any): void {
    super.componentDidUpdate(prevProps, prevState);
    if (this.creator !== prevProps.creator) {
      if (prevProps.creator) {
        prevProps.creator.unsubscribeRootElement();
      }
      if (this.creator && this.rootNode.current) {
        this.creator.setRootElement(this.rootNode.current);
      }
    }
  }

  componentDidMount() {
    super.componentDidMount();
    this.creator.setRootElement(this.rootNode.current);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.creator.unsubscribeRootElement();
  }
  private rootNode: React.RefObject<HTMLDivElement>;

  renderElement() {
    const creator: SurveyCreatorModel = this.props.creator;
    if (creator.isCreatorDisposed) return null;
    const areaClassName = "svc-full-container svc-creator__area svc-flex-column" + (this.props.creator.haveCommercialLicense ? "" : " svc-creator__area--with-banner");
    const contentWrapperClassName = "svc-creator__content-wrapper svc-flex-row" + (this.props.creator.isMobileView ? " svc-creator__content-wrapper--footer-toolbar" : "");
    const fullContainerClassName = "svc-flex-row svc-full-container" + (" svc-creator__side-bar--" + this.creator.sidebarLocation);
    const creatorStyles = {};
    assign(creatorStyles, this.style, this.props.creator.themeVariables);
    let licenseBanner = null;
    if (!this.props.creator.haveCommercialLicense) {
      const htmlValue = { __html: this.props.creator.licenseText };
      licenseBanner = (
        <div className="svc-creator__banner">
          <span className="svc-creator__non-commercial-text" dangerouslySetInnerHTML={htmlValue}></span>
        </div>
      );
    }
    //AM: width unrecognized by react
    return (
      <div className={this.creator.getRootCss()} ref={this.rootNode} style={creatorStyles}>
        <SvgBundleComponent></SvgBundleComponent>
        <PopupModal></PopupModal>
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
          <NotifierComponent notifier={creator.notifier}></NotifierComponent>
        </div>
      </div>
    );
  }
  renderActiveTab() {
    const creator: SurveyCreatorModel = this.props.creator;
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
    const creator: SurveyCreatorModel = this.props.creator;
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
        role="tabpanel"
        key={tab.id}
        id={"scrollableDiv-" + tab.id}
        aria-labelledby={"tab-" + tab.id}
        className={className}
      >
        {component}
      </div>
    );
  }
  renderSidebar() {
    if (!!this.creator.sidebar) {
      return ReactElementFactory.Instance.createElement("svc-side-bar", { model: this.creator.sidebar });
    } else {
      return null;
    }
  }
}

export class SurveyCreator extends SurveyCreatorModel {
  constructor(options: ICreatorOptions = {}, options2?: ICreatorOptions) {
    super(options, options2);
  }
  public render(target: string | HTMLElement) {
    let node: HTMLElement = target as HTMLElement;
    if (typeof target === "string") {
      node = document.getElementById(target);
    }
    /* eslint-disable react/no-deprecated */
    ReactDOM.unmountComponentAtNode(node);
    ReactDOM.render(
      <React.StrictMode>
        <SurveyCreatorComponent creator={this} />
      </React.StrictMode>,
      node
    );
    /* eslint-enable react/no-deprecated */
  }

  //ISurveyCreator
  public createQuestionElement(question: Question): React.JSX.Element {
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
  ): React.JSX.Element {
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
