import { SurveyModel } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";

export class SurveyNavigation extends SurveyElementBase<any, any> {
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
  renderElement(): React.JSX.Element {
    return ReactElementFactory.Instance.createElement(
      this.survey.getProgressTypeComponent(),
      { survey: this.survey, css: this.survey.css, isTop: this.isTop }
    );
  }
}
