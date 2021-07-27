import React from "react";
import { PropertyGridViewModel, CreatorBase } from "@survey/creator";
import { Base, SurveyModel } from "survey-core";
import {
  Survey,
  SurveyElementBase,
  SurveyActionBar,
  ReactQuestionFactory,
  SurveyQuestionButtonGroup,
  ReactElementFactory
} from "survey-react-ui";
interface IPropertyGridComponentProps {
  model: CreatorBase<SurveyModel>;
}
export class PropertyGridComponent extends SurveyElementBase<
  IPropertyGridComponentProps,
  any
> {
  model: PropertyGridViewModel<SurveyModel>;
  constructor(props: IPropertyGridComponentProps) {
    super(props);
    var creator = this.props.model;
    this.model = new PropertyGridViewModel<SurveyModel>(creator);
  }
  protected getStateElement(): Base {
    return this.model;
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.model.dispose();
  }
  public canRender(): boolean {
    if (!this.model || !this.model.visible) return false;
    return super.canRender();
  }
  renderElement() {
    return (
      <div className="svc-flex-column svc-properties-wrapper">
        <div className="svc-property-panel">
          <div className="svc-property-panel__header">
            <div className="svc-property-panel__actions">
            <SurveyActionBar model={this.model.toolbar}></SurveyActionBar>
            </div>
          </div>
          <div className="svc-property-panel__expander">
            <Survey model={this.model.survey}></Survey>
          </div>
        </div>
      </div>
    );
  }
}

ReactQuestionFactory.Instance.registerQuestion("buttongroup", (props) => {
  return React.createElement(SurveyQuestionButtonGroup, props);
});

export default PropertyGridComponent;

ReactElementFactory.Instance.registerElement("svc-property-grid", (props) => {
  return React.createElement(PropertyGridComponent, props);
});
