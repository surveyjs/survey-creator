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
  protected getStateElement(): Base {
    return this.model;
  }
  renderElement(): JSX.Element {
    const creator: CreatorBase<SurveyModel> = this.model.creator;
    const survey: SurveyModel = creator.survey;
    const designerTabClassName = "svc-tab-designer " + survey.css.root;

    const surveyPages: JSX.Element[] = survey.pages.map((page: PageModel) => {
      return (
        <div
          className={"svc-page"}
          data-svc-drop-target-element-name={page.name}
          key={page.id}
        >
          <CreatorSurveyPageComponent
            survey={survey}
            page={page}
            creator={creator}
          ></CreatorSurveyPageComponent>
        </div>
      );
    });

    if (this.model.showNewPage) {
      surveyPages.push(
        <div
          className={"svc-page"}
          data-svc-drop-target-element-name={"newGhostPage"}
          key={this.model.newPage.id}
        >
          <CreatorSurveyPageComponent
            survey={survey}
            page={this.model.newPage}
            creator={creator}
          ></CreatorSurveyPageComponent>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="svc-flex-column">
          {ReactElementFactory.Instance.createElement('svc-toolbox', { creator: creator })}
        </div>
        <div className={"svc-tab-designer " + creator.survey.css.root}>
          <div className={creator.survey.css.container}>
            <div
              onClick={function () {
                creator.selectElement(creator.survey);
              }}
            >
              <SurveyHeader survey={survey}></SurveyHeader>
            </div>
            <SurveyNavigation
              survey={creator.survey}
              location="top"
            />
            {surveyPages}
            <SurveyNavigation
              survey={creator.survey}
              location="bottom"
              css={creator.survey.css}
            />
          </div>
        </div>
        <SurveyPageNavigator
          creator={creator}
          pages={creator.pagesController.pages}
        ></SurveyPageNavigator>
          {ReactElementFactory.Instance.createElement('svc-property-grid', { model: creator })}
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
