import * as React from "react";
import { Base, SurveyModel, PageModel } from "survey-core";
import {
  ReactElementFactory,
  SurveyElementBase,
  SurveyHeader
} from "survey-react-ui";
import { SurveyCreatorModel, TabDesignerViewModel } from "survey-creator-core";
import { SurveyPageNavigator } from "../PageNavigator";
import { SurveyNavigation } from "../Navigation";

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
  }

  private allowUpdate = () => {
    this.allowComponentUpdate();
  }

  private addDragDropEvents = () => {
    this.creator.onDragStart.add(this.denyUpdate);
    this.creator.onDragEnd.add(this.allowUpdate);
  }

  private clearDragDropEvents = () => {
    this.creator.onDragStart.remove(this.denyUpdate);
    this.creator.onDragEnd.remove(this.allowUpdate);
  }

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

  private renderedPagesCache: any = {};
  protected getRenderedPages(): JSX.Element[] {
    if (this.changedStatePropName !== "pages") {
      this.renderedPagesCache = {};
    }
    const renderedPages = [];

    if (this.creator.pageEditMode !== "bypage") {
      const pages = this.creator.survey.pages;

      pages.forEach((page, index) => {
        let cachedPage = this.renderedPagesCache[page.id];
        if (!cachedPage) {
          cachedPage = this.createRenderedPage(page, index);
          this.renderedPagesCache[page.id] = cachedPage;
        }
        renderedPages.push(cachedPage);
      });

      if (this.model.showNewPage) {
        renderedPages.push(this.renderNewPage("svc-page", this.model.newPage.id + "-ghost-new-page"));
      }
    } else {
      const page2Display = this.model.pagesController.page2Display;
      if (!!page2Display) {
        let cachedPage = this.renderedPagesCache[page2Display.id];
        if (!cachedPage) {
          cachedPage = this.createRenderedPage(page2Display, 0, this.model.newPage === page2Display);
          this.renderedPagesCache[page2Display.id] = cachedPage;
        }
        renderedPages.push(cachedPage);
      }
    }

    return renderedPages;
  }
  protected createRenderedPage(page: PageModel, index: number, isGhostPage?: boolean): any {
    return (
      <div
        className={"svc-page"}
        data-sv-drop-target-page={page.name}
        data-sv-drop-target-survey-element={isGhostPage ? "newGhostPage" : page.name}
        key={page.id + "-" + index}
      >
        {this.renderPage(page)}
      </div>
    );
  }
  private renderNewPage(className: string, key: string = "") {
    return (
      <React.Fragment key={key}>
        <div
          className={className}
          data-sv-drop-target-survey-element={"newGhostPage"}
        >
          {!!this.model.newPage ? this.renderPage(this.model.newPage) : null}
        </div>
      </React.Fragment>);
  }
  protected renderPage(pageV: PageModel): JSX.Element {
    return ReactElementFactory.Instance.createElement("svc-page", { survey: this.creator.survey, page: pageV, creator: this.creator });
  }
  renderElement(): JSX.Element {
    const designerTabClassName = "svc-tab-designer " + this.model.getRootCss();

    return (
      <React.Fragment>
        <div className="svc-flex-column">
          {this.model.isToolboxVisible ? ReactElementFactory.Instance.createElement("svc-adaptive-toolbox", { model: this.creator }) : null}
        </div>
        <div className={designerTabClassName} onClick={() => this.model.clickDesigner()}>
          <div className="svc-tab-designer_content">
            {this.model.showPlaceholder ? this.renderPlaceHolder() : this.renderTabContent()}
          </div>
        </div>
      </React.Fragment>
    );
  }

  renderHeader(condition: boolean): JSX.Element {
    if (!condition) return null;

    const survey: SurveyModel = this.creator.survey;
    return (<React.Fragment>
      <div className="svc-designer-header">
        <SurveyHeader survey={survey}></SurveyHeader>
      </div>
    </React.Fragment>);
  }
  renderPlaceHolder(): JSX.Element {
    const surveyHeader = this.renderHeader(this.creator.allowEditSurveyTitle && this.creator.showHeaderInEmptySurvey);

    return (<React.Fragment>
      {surveyHeader}
      <div className="svc-designer__placeholder-container" data-sv-drop-target-survey-element={"newGhostPage"}>
        {this.renderPlaceHolderContent()}
        {this.renderNewPage("svc-designer-placeholder-page")}
      </div>
    </React.Fragment>);
  }
  renderPlaceHolderContent(): JSX.Element {
    return <span className="svc-designer-placeholder-text svc-text svc-text--normal">{this.model.placeholderText}</span>;
  }
  renderTabContent(): JSX.Element {
    const survey: SurveyModel = this.creator.survey;
    const surveyHeader = this.renderHeader(this.creator.allowEditSurveyTitle);
    const style: any = { ...this.creator.designTabSurveyThemeVariables };
    if (!!survey.width) {
      style.maxWidth = survey.renderedWidth;
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
      {this.creator.showPageNavigator ?
        <div className="svc-tab-designer__page-navigator"><SurveyPageNavigator
          pagesController={this.model.pagesController} pageEditMode={this.model.creator.pageEditMode}
        ></SurveyPageNavigator></div>
        : null
      }
    </React.Fragment>);
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-designer", (props) => {
  return React.createElement(
    TabDesignerComponent,
    props as ITabDesignerComponentProps
  );
});
