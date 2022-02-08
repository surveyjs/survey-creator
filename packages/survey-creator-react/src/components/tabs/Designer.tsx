import React from "react";
import { Base, SurveyModel, PageModel } from "survey-core";
import {
  ReactElementFactory,
  SurveyElementBase,
  SurveyHeader
} from "survey-react-ui";
import { CreatorBase, TabDesignerViewModel } from "survey-creator-core";
import { SurveyPageNavigator } from "../page-navigator/PageNavigator";
import { SurveyNavigation } from "../Navigation";

interface ITabDesignerComponentProps {
  data: TabDesignerViewModel<SurveyModel>;
}

export class TabDesignerComponent extends SurveyElementBase<ITabDesignerComponentProps, any> {
  private get model(): TabDesignerViewModel<SurveyModel> {
    return this.props.data;
  }
  protected get creator(): CreatorBase<SurveyModel> {
    return this.model.creator;
  }
  protected getStateElements(): Array<Base> {
    return [this.model, this.model.survey];
  }
  private renderNewPage(className: string, key: string = "") {
    return (
      <React.Fragment key={key}>
        <div
          className={className}
          data-sv-drop-target-survey-element={"newGhostPage"}
        >
          {this.renderPage(this.model.newPage)}
        </div>
      </React.Fragment>);
  }
  protected renderPages(): JSX.Element[] {
    const surveyPages: JSX.Element[] = this.creator.survey.pages.map(
      (page: PageModel, index: number) => {
        return (
          <div
            className={"svc-page"}
            data-sv-drop-target-page={page.name}
            data-sv-drop-target-survey-element={page.name}
            key={page.id + "-" + index}
          >
            {this.renderPage(page)}
          </div>
        );
      }
    );

    if (this.model.showNewPage) {
      surveyPages.push(this.renderNewPage("svc-page", this.model.newPage.id + "-ghost-new-page"));
    }
    return surveyPages;
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
          {this.model.showPlaceholder ? this.renderPlaceHolder() : this.renderTabContent()}
        </div>
      </React.Fragment>
    );
  }

  renderPlaceHolder(): JSX.Element {
    return (<React.Fragment>
      <div className="svc-designer__placeholder-container">
        <span className="svc-designer-placeholder-text svc-text svc-text--normal">
          {this.model.placeholderText}
        </span>
        {this.renderNewPage("svc-designer-placeholder-page")}
      </div>
    </React.Fragment>);
  }

  renderTabContent(): JSX.Element {
    const survey: SurveyModel = this.creator.survey;

    return (<React.Fragment>
      <div className={this.model.getDesignerCss()}>
        {!this.creator.allowEditSurveyTitle ? null :
          <div>
            <SurveyHeader survey={survey}></SurveyHeader>
          </div>
        }
        <SurveyNavigation survey={survey} location="top" />
        {this.renderPages()}
        <SurveyNavigation
          survey={survey}
          location="bottom"
          css={survey.css}
        />
      </div>
      {this.creator.showPageNavigator ?
        <div className="svc-tab-designer__page-navigator"><SurveyPageNavigator
          creator={this.creator}
          pages={this.creator.pagesController.pages}
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
