import { PropertyGridModel, PropertyGridViewModel } from "@survey/creator";
import React, { Component } from "react";
import { Base } from "survey-core";
import { Survey, SurveyElementBase } from "survey-react-ui";

interface IPropertyGridComponentProps {
  model: PropertyGridModel;
  title: string;
}
class PropertyGridComponent extends SurveyElementBase<
  IPropertyGridComponentProps,
  any
> {
  model: PropertyGridViewModel;
  constructor(props: IPropertyGridComponentProps) {
    super(props);
    this.model = new PropertyGridViewModel(this.props.model, this.props.title);
  }
  protected getStateElement(): Base {
    return (this.model as any) as Base;
  }
  render() {
    return (
      <div className="svc-property-panel">
        <div className="svc-property-panel__header">{this.model.title}</div>
        <div className="svc-property-panel__expander">
          <Survey model={this.model.survey}></Survey>
        </div>
      </div>
    );
    /* <svc-property-panel
        params="title: 'Question Properties',survey: creator.propertyGrid.koSurvey()"
    ></svc-property-panel> */

    /*
    <div class="svc-property-panel__header" data-bind="text: title"></div>
    <div class="svc-property-panel__expander">
      <!-- ko template: { name: 'survey-content', data: survey  } -->
      <!-- /ko -->
    </div>
     */
  }
}

export default PropertyGridComponent;
