import * as React from "react";
import { Base, SurveyModel, PageModel } from "survey-core";
import {
  ComponentsContainer,
  ReactElementFactory,
  Scroll,
  SurveyActionBar,
  SurveyElementBase,
  SurveyHeader
} from "survey-react-ui";
import { SurveyCreatorModel, TabDesignerViewModel } from "survey-creator-core";
import { SurveyPageNavigator } from "../PageNavigator";
import { SurfacePlaceholder } from "../components/SurfacePlaceholder";
import "../inline-designer/InlineElementToolbar";
interface ITabDesignerComponentProps {
  data: TabDesignerViewModel;
}

export class TabDesignerComponent extends SurveyElementBase<ITabDesignerComponentProps, any> {
  private get model(): TabDesignerViewModel {
    return this.props.data;
  }
  protected get creator(): SurveyCreatorModel {
    return this.model.creator;
  }

  private inlineRoot: HTMLDivElement;
  private setInlineRoot = (el: HTMLDivElement) => {
    this.inlineRoot = el;
    this.model.setInlineRootElement(el);
  };
  componentDidUpdate(prevProps: any, prevState: any): void {
    super.componentDidUpdate(prevProps, prevState);
    // React reuses this component and its root for a new creator: the ref callback does not run again.
    if (prevProps.data !== this.props.data && !!this.inlineRoot) {
      prevProps.data?.setInlineRootElement(null);
      this.model.setInlineRootElement(this.inlineRoot);
    }
  }
  private denyUpdate = () => {
    this.denyComponentUpdate();
  };

  private allowUpdate = () => {
    this.allowComponentUpdate();
  };

  private addDragDropEvents = () => {
    this.creator.onDragStart.add(this.denyUpdate);
    this.creator.onDragClear.add(this.allowUpdate);
  };

  private clearDragDropEvents = () => {
    this.creator.onDragStart.remove(this.denyUpdate);
    this.creator.onDragClear.remove(this.allowUpdate);
  };

  componentDidMount(): void {
    super.componentDidMount();
    this.addDragDropEvents();
  }

  componentWillUnmount(): void {
    super.componentWillUnmount();
    this.clearDragDropEvents();
    super.componentWillUnmount();
  }

  protected getStateElements(): Array<Base> {
    return [this.model, this.model.survey, this.model.pagesController];
  }

  protected getRenderedPages(): React.JSX.Element[] {
    const renderedPages = [];

    if (this.creator.pageEditMode !== "bypage") {
      const pages = this.model.pages;
      pages.forEach((page) => {
        renderedPages.push(this.createRenderedPage(page, "svc-page", page == this.model.newPage));
      });
    } else {
      const page2Display = this.model.pagesController.page2Display;
      if (!!page2Display) {
        renderedPages.push(this.createRenderedPage(page2Display, "svc-page", this.model.newPage === page2Display));
      }
    }

    return renderedPages;
  }
  protected createRenderedPage(page: PageModel | undefined, className: string, isGhostPage?: boolean): any {
    return <PageWrapperComponent key={page?.id} page={page} isGhost={isGhostPage} creator={this.creator} className={className}></PageWrapperComponent>;
  }
  renderElement(): React.JSX.Element {
    const designerTabClassName = "svc-tab-designer " + this.model.getRootCss();
    const content = (
      <div className="svc-tab-designer_content">
        {this.model.showPlaceholder ? this.renderPlaceHolder() : this.renderTabContent()}
      </div>
    );
    // Inline mode: no toolbox column and no Scroll, the host page scrolls. The element toolbar is a sibling
    // of the surface: the survey theme variables and clickDesigner stay on the surface (ET02).
    if (this.creator.isInlineLayout) {
      const inlineDesigner = this.model.inlineDesigner;
      return (
        <React.Fragment>
          {this.renderInlineSurface(designerTabClassName, content)}
          {!!inlineDesigner ? ReactElementFactory.Instance.createElement("svc-inline-element-toolbar", { model: inlineDesigner, key: "svc-inline-element-toolbar" }) : null}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div className="svc-flex-column">
          {this.model.isToolboxVisible ? ReactElementFactory.Instance.createElement("svc-toolbox", { model: this.creator }) : null}
        </div>
        <div className={designerTabClassName} onClick={() => this.model.clickDesigner()}>
          <Scroll>
            {content}
          </Scroll>
        </div>
      </React.Fragment>
    );
  }
  private renderInlineSurface(designerTabClassName: string, content: React.JSX.Element): React.JSX.Element {
    // Keyed: the standard branch's first child is a div too, and React must not reuse it for the inline root.
    return (
      <div key="svc-inline-surface" ref={this.setInlineRoot} className={designerTabClassName} style={this.model.getRootStyle()} onClick={() => this.model.clickDesigner()}
        onClickCapture={(e) => {
          if (this.model.isInlineInertTarget(e.target as HTMLElement)) {
            e.stopPropagation();
            e.preventDefault();
          }
        }}>
        {content}
      </div>
    );
  }

  renderHeader(condition: boolean): React.JSX.Element {
    if (!condition) return null;

    const survey: SurveyModel = this.creator.survey;
    // Inline mode renders the header the live survey renders: the advanced header is a layout element.
    if (this.creator.isInlineLayout && survey.headerView !== "basic") {
      return (<div className="svc-designer-header">
        <ComponentsContainer survey={survey} container={"header"} needRenderWrapper={false}></ComponentsContainer>
      </div>);
    }
    return (<React.Fragment>
      <div className="svc-designer-header">
        <SurveyHeader survey={survey}></SurveyHeader>
      </div>
    </React.Fragment>);
  }
  renderPlaceHolder(): React.JSX.Element {
    const surveyHeader = this.renderHeader(this.creator.showSurveyHeader && this.creator.showHeaderInEmptySurvey);

    return (<React.Fragment>
      {surveyHeader}
      <div className="svc-designer__placeholder-container" data-sv-drop-target-survey-element={"newGhostPage"}>
        {this.renderPlaceHolderContent()}
        {this.createRenderedPage(this.model.newPage, "svc-designer-placeholder-page", true)}
      </div>
    </React.Fragment>);
  }
  renderPlaceHolderContent(): React.JSX.Element {
    return <SurfacePlaceholder name={"designer"} placeholderTitleText={this.model.placeholderTitleText} placeholderDescriptionText={this.model.placeholderDescriptionText} />;
  }
  renderTabContent(): React.JSX.Element {
    const survey: SurveyModel = this.creator.survey;
    const surveyHeader = this.renderHeader(this.creator.showSurveyHeader);
    const style: any = { ...this.model.getSurfaceCssVariables() };
    style.maxWidth = survey.renderedWidth;

    const tabTools = this.renderTabTools();
    if (this.creator.isInlineLayout) {
      return this.renderInlineTabContent(surveyHeader, style);
    }

    return (<React.Fragment>
      <div className={this.model.designerCss} style={style} >
        {surveyHeader}
        {/* <SurveyNavigation survey={survey} location="top" /> */}
        {this.getRenderedPages()}
        {/* <SurveyNavigation
          survey={survey}
          location="bottom"
          css={survey.css}
        /> */}
      </div>
      {tabTools}
    </React.Fragment>);
  }

  // Inline mode: the page sits in the live survey's body structure (sd-body and its column wrappers),
  // followed by the survey's own navigation bar (SP07).
  renderInlineTabContent(surveyHeader: React.JSX.Element, style: any): React.JSX.Element {
    const survey: SurveyModel = this.creator.survey;
    const bodyStyle: any = {};
    if (!!survey.renderedWidth) bodyStyle.maxWidth = survey.renderedWidth;
    delete style.maxWidth;
    return (
      <div className={this.model.designerCss} style={style} >
        {surveyHeader}
        <div className={survey.bodyContainerCss}>
          <div className="sv-components-column sv-components-column--expandable">
            <div className={survey.bodyCss} style={bodyStyle}>
              <ComponentsContainer survey={survey} container={"contentTop"}></ComponentsContainer>
              {this.getRenderedPages()}
              {this.renderInlineNavigation()}
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderInlineNavigation(): React.JSX.Element {
    const survey: SurveyModel = this.creator.survey;
    // isNavigationButtonsShowing is "none" in design mode, so the layout element is in no container.
    if (!survey.showNavigationButtons || survey.navigationButtonsLocation === "top") return null;
    return (
      <div className="sv-components-column sv-components-container-contentBottom svc-inline-navigation"
        onClickCapture={(e) => {
          e.stopPropagation();
          e.preventDefault();
          this.model.onInlineNavigationClick(e.target as HTMLElement);
        }}>
        <SurveyActionBar model={survey.navigationBar}></SurveyActionBar>
      </div>
    );
  }
  renderTabTools(): React.JSX.Element {
    if (!this.model.showSurfaceTools) return null;

    const pageNavigator = this.creator.showPageNavigator ?
      <div className="svc-tab-designer__page-navigator"><SurveyPageNavigator
        pagesController={this.model.pagesController} pageEditMode={this.model.creator.pageEditMode}
      ></SurveyPageNavigator></div>
      : null;

    const surfaceToolbar = this.model.showSurfaceToolbar ?
      <SurveyActionBar model={this.model.surfaceToolbar} handleClick={false}></SurveyActionBar>
      : null;

    return <div className="svc-tab-designer__tools">
      {pageNavigator}
      {surfaceToolbar}
    </div>;
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-designer", (props) => {
  return React.createElement(
    TabDesignerComponent,
    props as ITabDesignerComponentProps
  );
});

interface IPageWrapperComponentProps {
  page?: PageModel;
  isGhost: boolean;
  creator: SurveyCreatorModel;
  className: string;
}
class PageWrapperComponent extends React.Component<IPageWrapperComponentProps, any> {
  private static ID = 0;
  private id = `PageWrapperCallback_${++PageWrapperComponent.ID}`;
  constructor(props: IPageWrapperComponentProps) {
    super(props);
    this.state = { changed: 0 };
  }
  render() {
    const pageContent = !!this.props.page ? ReactElementFactory.Instance.createElement("svc-page", { survey: this.props.creator.survey, page: this.props.page, creator: this.props.creator, isGhost: this.props.isGhost }) : null;
    return <div
      className={this.props.className}
      data-sv-drop-target-page={this.props.page?.name}
      data-sv-drop-target-survey-element={this.props.isGhost ? "newGhostPage" : this.props.page?.name}
    >
      {pageContent}
    </div>;
  }
  setupCallback(page?: PageModel) {
    if (!page) return;
    page.registerFunctionOnPropertyValueChanged("name", () => {
      this.setState({ changed: !!this.state && this.state.changed ? this.state.changed + 1 : 1 });
    }, this.id);
  }
  clearCallback(page?: PageModel) {
    if (!page) return;
    page.unRegisterFunctionOnPropertyValueChanged("name", this.id);
  }
  componentDidUpdate(prevProps: IPageWrapperComponentProps, prevState: any): void {
    if (prevProps.page !== this.props.page) {
      this.clearCallback(prevProps.page);
      this.setupCallback(this.props.page);
    }
  }
  componentDidMount(): void {
    this.setupCallback(this.props.page);
  }
  componentWillUnmount(): void {
    this.clearCallback(this.props.page);
  }
}