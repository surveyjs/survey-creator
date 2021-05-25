import React from "react";
import { Base, SurveyModel } from "survey-core";
import {
  ReactElementFactory,
  Survey,
  SurveyElementBase
} from "survey-react-ui";
import {
  CreatorBase,
  TabDesignerViewModel,
  TabDesignerPlugin
} from "@survey/creator";
import { CreatorSurveyPageComponent } from "../Page";
import { SurveyCreatorToolbox } from "../toolbox/Toolbox";
import { SurveyPageNavigator } from "../page-navigator/PageNavigator";
import PropertyGridComponent from "../../PropertyGrid";

interface ITabDesignerComponentProps {
  data: TabDesignerViewModel<SurveyModel>;
}

export class TabDesignerComponent extends SurveyElementBase<
  ITabDesignerComponentProps,
  any
> {
  private model: TabDesignerViewModel<SurveyModel>;
  constructor(props: ITabDesignerComponentProps) {
    super(props);
    this.model = props.data;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    const creator: CreatorBase<SurveyModel> = this.model.creator;
    const survey: SurveyModel = creator.survey;
    const className = "svc-tab-designer " + survey.css.root;

    const surveyPages = survey.pages.map((page, index) => {
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

    if (!!this.model.newPage) {
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

    const style = { width: "auto", borderLeft: "1px solid lightgray" };
    return (
      <React.Fragment>
        <SurveyCreatorToolbox
          categories={creator.toolboxCategories}
          creator={creator}
          items={creator.toolbox.items}
        ></SurveyCreatorToolbox>
        <div className={className}>
          <div className={survey.css.container}>{surveyPages}</div>
        </div>
        <SurveyPageNavigator
          creator={creator}
          pages={creator.pagesController.pages}
        ></SurveyPageNavigator>
        <div className="svc-flex-column" style={style}>
          <PropertyGridComponent model={creator}></PropertyGridComponent>
        </div>
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
