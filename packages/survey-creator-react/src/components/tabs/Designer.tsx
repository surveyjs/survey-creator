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
import { values } from "lodash";

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

    const style = { width: "auto", borderLeft: "1px solid lightgray" };
    return (
      <React.Fragment>
        <SurveyCreatorToolbox
          categories={creator.toolboxCategories}
          creator={creator}
          items={creator.toolbox.items}
        ></SurveyCreatorToolbox>
        <div className={className}>
          <div className={survey.css.container}>
            <DesignerSurveyNavigationBlock
              survey={creator.survey}
              location="top"
            />{" "}
            {surveyPages}
            <DesignerSurveyNavigationBlock
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
        <div className="svc-flex-column" style={style}>
          <PropertyGridComponent model={creator}></PropertyGridComponent>
        </div>
      </React.Fragment>
    );
  }
}
export class DesignerSurveyNavigationBlock extends React.Component<any, any> {
  constructor(props: ITabDesignerComponentProps) {
    super(props);
    if (this.survey) {
      this.survey.onPropertyChanged.add(this.onPropChangedHandler);
    }
  }
  private onPropChangedHandler = (sender: any, options: any): any => {
    if (options.name !== "showProgressBar") return;
    this.setState((state: any, props: any) => {
      var val = {
        show: this.canShow
      };
      return val;
    });
  };
  componentWillUnmount() {
    super.componentWillUnmount();
    if (this.survey) {
      this.survey.onPropertyChanged.remove(this.onPropChangedHandler);
    }
  }

  protected get survey(): SurveyModel {
    return this.props.survey;
  }
  protected get location(): string {
    return this.props.location;
  }
  protected get isTop(): boolean {
    return this.location == "top";
  }
  protected get canShow(): boolean {
    return this.isTop
      ? this.survey.isShowProgressBarOnTop
      : this.survey.isShowProgressBarOnBottom;
  }
  render(): JSX.Element {
    return this.canShow
      ? ReactElementFactory.Instance.createElement(
          "sv-progress-" + this.survey.progressBarType.toLowerCase(),
          { survey: this.survey, css: this.survey.css, isTop: this.isTop }
        )
      : null;
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
