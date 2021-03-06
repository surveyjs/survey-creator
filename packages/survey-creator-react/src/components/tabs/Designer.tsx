import React from "react";
import { Base, SurveyModel, PageModel } from "survey-core";
import {
  ReactElementFactory,
  SurveyElementBase,
  SurveyHeader
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
  data: TabDesignerPlugin<SurveyModel>;
}

export class TabDesignerComponent extends SurveyElementBase<
  ITabDesignerComponentProps,
  any
> {
  constructor(props: ITabDesignerComponentProps) {
    super(props);
  }
  private get model(): TabDesignerViewModel<SurveyModel> {
    return this.props.data.model;
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
          <SurveyCreatorToolbox
            toolbox={creator.toolbox}
            creator={creator}
          ></SurveyCreatorToolbox>
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
            <DesignerSurveyNavigationBlock
              survey={creator.survey}
              location="top"
            />
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
        <PropertyGridComponent model={creator}></PropertyGridComponent>
      </React.Fragment>
    );
  }
}
export class DesignerSurveyNavigationBlock extends SurveyElementBase<any, any> {
  componentDidMount() {
    this.setHandler();
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    this.setHandler();
  }
  private setHandler() {
    if (
      !this.survey ||
      this.survey.onPropertyChanged.hasFunc(this.onPropChangedHandler)
    )
      return;
    this.survey.onPropertyChanged.add(this.onPropChangedHandler);
  }
  private onPropChangedHandler = (sender: any, options: any): any => {
    if (this.isRendering) return;
    const name = options.name;
    if (name !== "showProgressBar" && name !== "progressBarType") return;
    this.setState({
      showProgressBar: this.survey.showProgressBar,
      progressBarType: this.survey.progressBarType
    });
  };
  componentWillUnmount() {
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
  protected canRender(): boolean {
    return this.isTop
      ? this.survey.isShowProgressBarOnTop
      : this.survey.isShowProgressBarOnBottom;
  }
  renderElement(): JSX.Element {
    return ReactElementFactory.Instance.createElement(
      "sv-progress-" + this.survey.progressBarType.toLowerCase(),
      { survey: this.survey, css: this.survey.css, isTop: this.isTop }
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-tab-designer", (props) => {
  return React.createElement(
    TabDesignerComponent,
    props as ITabDesignerComponentProps
  );
});
