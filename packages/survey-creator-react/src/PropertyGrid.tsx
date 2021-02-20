import { PropertyGridViewModel /*, creatorCss*/ } from "@survey/creator";
import React, { Component } from "react";
import { Survey } from "survey-react";

interface IPropertyGridComponentProps {
  model: PropertyGridViewModel;
}
class PropertyGridComponent extends Component<
  IPropertyGridComponentProps,
  any
> {
  constructor(props: IPropertyGridComponentProps) {
    super(props);
  }
  render() {
    const model: PropertyGridViewModel = this.props.model;
    return (
      <div className="svc-property-panel">
        <div className="svc-property-panel__header">
          {this.props.model.title}
        </div>
        <div className="svc-property-panel__expander">
          <Survey model={model.survey}></Survey>
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
