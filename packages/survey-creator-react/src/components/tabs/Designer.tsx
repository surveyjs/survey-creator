import React from "react";
import { Base, SurveyModel, PageModel } from "survey-core";
import {
  ReactElementFactory,
  SurveyElementBase,
  SurveyHeader
} from "survey-react-ui";
import { CreatorBase, TabDesignerViewModel } from "@survey/creator";
import { CreatorSurveyPageComponent } from "../Page";
import { SurveyPageNavigator } from "../page-navigator/PageNavigator";
import { SurveyNavigation } from "../Navigation";

interface ITabDesignerComponentProps {
  data: TabDesignerViewModel<SurveyModel>;
}

export class TabDesignerComponent extends SurveyElementBase<
  ITabDesignerComponentProps,
  any
> {
  private get model(): TabDesignerViewModel<SurveyModel> {
    return this.props.data;
  }
  protected get creator(): CreatorBase<SurveyModel> {
    return this.model.creator;
  }
  protected getStateElements(): Array<Base> {
    return [this.model, this.model.survey];
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
            <CreatorSurveyPageComponent
              survey={this.creator.survey}
              page={page}
              creator={this.creator}
            ></CreatorSurveyPageComponent>
          </div>
        );
      }
    );

    if (this.model.showNewPage) {
      surveyPages.push(
        <div
          className={"svc-page"}
          data-sv-drop-target-survey-element={"newGhostPage"}
          key={this.model.newPage.id + "-ghost-new-page"}
        >
          <CreatorSurveyPageComponent
            survey={this.creator.survey}
            page={this.model.newPage}
            creator={this.creator}
          ></CreatorSurveyPageComponent>
        </div>
      );
    }
    return surveyPages;
  }
  renderElement(): JSX.Element {
    const survey: SurveyModel = this.creator.survey;
    const designerTabClassName = "svc-tab-designer " + survey.css.root;

    return (
      <React.Fragment>
        <div className="svc-flex-column">
          {this.model.isToolboxVisible ? ReactElementFactory.Instance.createElement("svc-adaptive-toolbox", { model: this.creator }) : null}
        </div>
        <div className={designerTabClassName}>
          <div className={this.model.getDesignerCss()}>
            {!this.creator.allowEditSurveyTitle ? null :
              <div
                onClick={() => this.creator.selectElement(survey)}
              >
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
        </div>
        {this.creator.showPageNavigator ?
          <SurveyPageNavigator
            creator={this.creator}
            pages={this.creator.pagesController.pages}
          ></SurveyPageNavigator>
          : null
        }
      </React.Fragment>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-designer", (props) => {
  return React.createElement(
    TabDesignerComponent,
    props as ITabDesignerComponentProps
  );
});
