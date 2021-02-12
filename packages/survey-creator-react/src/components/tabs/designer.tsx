import * as Survey from "survey-react";
import { Base, ReactElementFactory, SurveyElementBase } from "survey-react";
import { CreatorBase } from "@survey/creator";
import React from "react";
import { CreatorSurveyPageComponent } from "../page";
import { SurveyCreatorToolbox } from "../toolbox/toolbox";

export class TabDesignerComponent extends SurveyElementBase {
  constructor(props) {
    super(props);

    const creator: CreatorBase<Survey.Model> = this.props.creator;
    const survey: Survey.Model = this.props.survey;
    const data: any = this.props.survey;
  }

  protected getStateElement(): Base {
    return this.props.creator;
  }

  render(): JSX.Element {
    const creator: CreatorBase<Survey.Model> = this.props.creator;
    const survey: Survey.Model = this.props.survey;
    const className = "svc-tab-designer " + survey.css.root;

    // const surveyPages = survey.pages.map((page, index) => {
    //   return (
    //     <CreatorSurveyPageComponent
    //       survey={survey}
    //       page={page}
    //       creator={creator}
    //     ></CreatorSurveyPageComponent>
    //   );
    //   // this.renderSurveyPage(survey, page, creator);
    // });

    return (
      <>
        <SurveyCreatorToolbox
          categories={creator.toolboxCategories}
          creator={creator}
          items={creator.toolbox.items}
        ></SurveyCreatorToolbox>
        <div className={className}>
          <div className={survey.css.container}>
            <Survey.Survey model={survey} />
          </div>
        </div>
      </>
    );
    /*
        <svc-toolbox
        params="categories: creator.toolboxCategories, creator: creator"
        ></svc-toolbox>
        <div class="svc-tab-designer" data-bind="css: survey.css.root">
            <div data-bind="css: survey.css.container">
                <!-- ko foreach: survey.pages -->
                <svc-page
                params="survey: $parent.survey, page: $data, creator: $parent.creator"
                ></svc-page>
                <!-- /ko -->
                <!-- ko if: showNewPage -->
                <svc-page
                params="survey: survey, creator: creator, page: newPage"
                ></svc-page>
                <!-- /ko -->
            </div>
        </div>
        <svc-page-navigator
        params="items: survey.pages, creator: creator, onSelect: creator.selectElement.bind(creator), selection: function () { return creator.currentPage; }"
        ></svc-page-navigator>
       */
  }
  //   renderSurveyPage(
  //     survey: Survey.ReactSurveyModel,
  //     page: Survey.PageModel,
  //     creator: CreatorBase<Survey.ReactSurveyModel>
  //   ): JSX.Element {
  //     return null;
  //   }
}

ReactElementFactory.Instance.registerElement("svc-tab-designer", (props) => {
  return React.createElement(TabDesignerComponent, props);
});
