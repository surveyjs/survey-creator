import React from "react";
import { PropertyGridViewModel } from "@survey/creator";
import { Base, SurveyModel } from "survey-core";
import { Survey, SurveyElementBase, ReactQuestionFactory, SurveyQuestionButtonGroup, ReactElementFactory } from "survey-react-ui";

interface IPropertyGridComponentProps {
  model: PropertyGridViewModel<SurveyModel>;
}

export class PropertyGridComponent extends SurveyElementBase<IPropertyGridComponentProps, any> {

  get model(): PropertyGridViewModel<SurveyModel> {
    return this.props.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  public canRender(): boolean {
    if (!this.model) return false;
    return super.canRender();
  }

  renderElement() {
    return (
      <Survey model={this.model.survey}></Survey>
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
