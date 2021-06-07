import React from "react";
import { PropertyGridViewModel, CreatorBase } from "@survey/creator";
import { Base, SurveyModel } from "survey-core";
import {
  Survey,
  SurveyElementBase,
  SurveyActionBar,
  ReactQuestionFactory,
  SurveyQuestionButtonGroup,
} from "survey-react-ui";
interface IPropertyGridComponentProps {
  model: CreatorBase<SurveyModel>;
}
class PropertyGridComponent extends SurveyElementBase<
  IPropertyGridComponentProps,
  any
> {
  model: PropertyGridViewModel;
  constructor(props: IPropertyGridComponentProps) {
    super(props);
    var creator = this.props.model;
    this.model = new PropertyGridViewModel(
      creator.propertyGrid,
      creator.selectionHistoryController
    );
  }
  protected getStateElement(): Base {
    return this.model;
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.model.dispose();
  }
  render() {
    return (
      <div className="svc-property-panel">
        <div className="svc-property-panel__header">
          <div className="svc-property-panel__actions">
            <SurveyActionBar items={this.model.toolbarItems}></SurveyActionBar>
          </div>
          <span className="svc-property-panel__title">{this.model.title}</span>
          
        </div>
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

ReactQuestionFactory.Instance.registerQuestion("buttongroup", (props) => {
  return React.createElement(SurveyQuestionButtonGroup, props);
});

export default PropertyGridComponent;
