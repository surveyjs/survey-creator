import * as React from "react";
import { PropertyGridViewModel, SearchManager } from "survey-creator-core";
import { Base, SurveyModel, settings } from "survey-core";
import { Survey, SurveyElementBase, ReactQuestionFactory, SurveyQuestionButtonGroup, ReactElementFactory, SvgIcon, SurveyActionBar, Scroll } from "survey-react-ui";
import { SearchComponent } from "../components/Search";

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
    return (
      <div className={this.model.rootCss}>
        <SearchComponent model={this.model.searchManager}></SearchComponent>
        <Survey model={this.model.survey}></Survey>
      </div>
    );
  }
}

export default PropertyGridComponent;

ReactElementFactory.Instance.registerElement("svc-property-grid", (props) => {
  return React.createElement(PropertyGridComponent, props);
});
