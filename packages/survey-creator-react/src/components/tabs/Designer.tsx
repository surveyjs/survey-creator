import React from "react";
import { Base, SurveyModel, PageModel } from "survey-core";
import { ReactElementFactory, SurveyElementBase, SurveyHeader } from "survey-react-ui";
import { CreatorBase, TabDesignerViewModel } from "@survey/creator";
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
    return (
      <ReactDragDropHelperComponent
        creator={this.props.data.creator}
        renderContent={() => this.renderContent()}
      ></ReactDragDropHelperComponent>
    );
  }
  renderContent(): JSX.Element {
    const creator: CreatorBase<SurveyModel> = this.model.creator;
    const survey: SurveyModel = creator.survey;
    const designerTabClassName = "svc-tab-designer " + survey.css.root;

    const surveyPages: JSX.Element[] = survey.pages.map((page: PageModel) => {
      return (
        <CreatorSurveyPageComponent
          key={page.id}
          survey={survey}
          page={page}
          creator={creator}
        ></CreatorSurveyPageComponent>
      );
    });

    if (!!this.model.newPage) {
      surveyPages.push(
        <CreatorSurveyPageComponent
          key={this.model.newPage.id}
          survey={survey}
          page={this.model.newPage}
          creator={creator}
        ></CreatorSurveyPageComponent>
      );
    }

    const style = { width: "auto", borderLeft: "1px solid lightgray" };
    return (
      <>
        <SurveyCreatorToolbox
          categories={creator.toolboxCategories}
          creator={creator}
          items={creator.toolbox.items}
        ></SurveyCreatorToolbox>
        <div className={designerTabClassName}>
          <div className={survey.css.container}>
            <SurveyHeader survey={survey}></SurveyHeader>
            {surveyPages}
          </div>
        </div>
        <SurveyPageNavigator
          creator={creator}
          pages={creator.pagesController.pages}
        ></SurveyPageNavigator>
        <div className="svc-flex-column" style={style}>
          <PropertyGridComponent model={creator}></PropertyGridComponent>
        </div>
      </>
    );
  }
}

interface ReactDragDropHelperComponentProps {
  creator: CreatorBase<SurveyModel>;
  renderContent: () => JSX.Element;
}

class ReactDragDropHelperComponent extends SurveyElementBase<
  ReactDragDropHelperComponentProps,
  any
> {
  constructor(props: ReactDragDropHelperComponentProps) {
    super(props);
  }

  protected getStateElement(): Base {
    return this.props.creator.dragDropHelper;
  }

  render(): JSX.Element {
    return this.props.renderContent();
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-designer", (props) => {
  return React.createElement(
    TabDesignerComponent,
    props as ITabDesignerComponentProps
  );
});
