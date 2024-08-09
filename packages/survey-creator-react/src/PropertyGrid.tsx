import * as React from "react";
import { PropertyGridViewModel, SearchManager } from "survey-creator-core";
import { Base, SurveyModel, settings } from "survey-core";
import { Survey, SurveyElementBase, ReactQuestionFactory, SurveyQuestionButtonGroup, ReactElementFactory, SvgIcon, SurveyActionBar } from "survey-react-ui";
import { SearchComponent } from "./Search";

interface IPropertyGridComponentProps {
  model: PropertyGridViewModel;
}

export class PropertyGridComponent extends SurveyElementBase<IPropertyGridComponentProps, any> {

  get model(): PropertyGridViewModel {
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
    const rootClassName = this.model.searchEnabled ? "spg-container spg-container_search" : "spg-container";
    return (
      <div className={rootClassName}>
        <SearchComponent model={this.model.searchManager}></SearchComponent>
        <Survey model={this.model.survey}></Survey>
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
