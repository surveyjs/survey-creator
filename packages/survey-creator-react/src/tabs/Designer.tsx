import * as React from "react";
import { Base, SurveyModel, PageModel } from "survey-core";
import {
  ReactElementFactory,
  Scroll,
  SurveyActionBar,
  SurveyElementBase,
  SurveyHeader
} from "survey-react-ui";
import { SurveyCreatorModel, TabDesignerViewModel } from "survey-creator-core";
import { SurveyPageNavigator } from "../PageNavigator";
import { SurfacePlaceholder } from "../components/SurfacePlaceholder";
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

    return (
      <React.Fragment>
        <div className="svc-flex-column">
          {this.model.isToolboxVisible ? ReactElementFactory.Instance.createElement("svc-toolbox", { model: this.creator }) : null}
        </div>
        <div className={designerTabClassName} onClick={() => this.model.clickDesigner()}>
          <Scroll>
            <div className="svc-tab-designer_content">
              {this.model.showPlaceholder ? this.renderPlaceHolder() : this.renderTabContent()}
            </div>
          </Scroll>
        </div>
      </React.Fragment>
    );
  }

  renderHeader(condition: boolean): React.JSX.Element {
    if (!condition) return null;

    const survey: SurveyModel = this.creator.survey;
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
    const style: any = { ...this.model.surfaceCssVariables };
    style.maxWidth = survey.renderedWidth;

    const tabTools = this.renderTabTools();

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
    page.unRegisterFunctionOnPropertyValueChanged("name");
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