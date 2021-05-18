import React from "react";
import { Base, SurveyModel } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { CreatorBase, TabDesignerViewModel } from "@survey/creator";
import { CreatorSurveyPageComponent } from "../Page";
import { SurveyCreatorToolbox } from "../toolbox/Toolbox";
import { SurveyPageNavigator } from "../page-navigator/PageNavigator";
import PropertyGridComponent from "../../PropertyGrid";

interface ITabDesignerComponentProps {
  creator: CreatorBase<SurveyModel>;
  survey: SurveyModel;
}

export class TabDesignerComponent extends SurveyElementBase<
  ITabDesignerComponentProps,
  any
> {
  private model: TabDesignerViewModel<SurveyModel>;
  constructor(props: ITabDesignerComponentProps) {
    super(props);
    this.model = new TabDesignerViewModel<SurveyModel>(props.creator);
  }

  protected getStateElement(): Base {
    return this.props.survey;
  }

  render(): JSX.Element {
    return this.renderContent();
    return (
      <ReactDragDropHelperComponent
        creator={this.props.creator}
        renderContent={() => this.renderContent()}
      ></ReactDragDropHelperComponent>
    );
  }
  renderContent(): JSX.Element {
    const creator: CreatorBase<SurveyModel> = this.props.creator;
    const survey: SurveyModel = this.props.survey;
    const className = "svc-tab-designer " + survey.css.root;

    const surveyPages = survey.pages.map((page, index) => {
      return (
        <div className={"svc-page"} data-svc-droppable-element-name={page.name} >
          <CreatorSurveyPageComponent
            key={page.id}
            survey={survey}
            page={page}
            creator={creator}
          ></CreatorSurveyPageComponent>
        </div>
      );
    });

    if (this.model.showNewPage) {
      surveyPages.push(
        <div className={"svc-page"} data-svc-droppable-element-name={"newGhostPage"} >
          <CreatorSurveyPageComponent
            key={this.model.newPage.id}
            survey={survey}
            page={this.model.newPage}
            creator={creator}
          ></CreatorSurveyPageComponent>
        </div>
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
