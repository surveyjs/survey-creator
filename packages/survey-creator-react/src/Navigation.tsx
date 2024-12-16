import { SurveyModel } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";

export class SurveyNavigation extends SurveyElementBase<any, any> {
  componentDidMount() {
    super.componentDidMount();
    this.setHandler();
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    super.componentDidUpdate(prevProps, prevState);
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
    const reactiveProps = [
      "showProgressBar",
      "progressBarType",
      "currentPageValue"
    ];
    if (reactiveProps.indexOf(options.name) < 0) return;
    var val: any = {};
    for (var i = 0; i < reactiveProps.length; i++) {
      var propName = reactiveProps[i];
      val[propName] = this.survey[propName];
    }
    this.setState(val);
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
