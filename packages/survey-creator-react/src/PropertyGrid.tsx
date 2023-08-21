import React from "react";
import { PropertyGridViewModel } from "survey-creator-core";
import { Base, SurveyModel, settings } from "survey-core";
import { Survey, SurveyElementBase, ReactQuestionFactory, SurveyQuestionButtonGroup, ReactElementFactory, SvgIcon, SurveyActionBar } from "survey-react-ui";

interface IPropertyGridComponentProps {
  model: PropertyGridViewModel;
}

export class PropertyGridComponent extends SurveyElementBase<IPropertyGridComponentProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      filterString: this.model.filterString || ""
    };
  }

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

  renderSearchEditor() {
    if (!this.model.searchEnabled) return null;

    const onChange = (e: any) => {
      const { root } = settings.environment;
      if (e.target === root.activeElement) {
        this.model.filterString = e.target.value;
      }
    };
    return (
      <div className="spg-search-editor_container">
        <div className="spg-search-editor_search-icon">
          <SvgIcon iconName="icon-search" size={"auto"}></SvgIcon>
        </div>
        <input type="text" className="spg-search-editor_input"
          aria-label={this.model.filterStringPlaceholder}
          placeholder={this.model.filterStringPlaceholder}
          value={this.state.filterString}
          onChange={onChange}></input>
        <div className="spg-search-editor_toolbar">
          <div className="spg-search-editor-toolbar_result-count">{this.model.searchResultsText}</div>
          <SurveyActionBar model={this.model.searchActionBar}></SurveyActionBar>
        </div>
      </div>);
  }

  renderElement() {
    const rootClassName = this.model.searchEnabled ? "spg-container spg-container_search" : "spg-container";
    return (
      <div className={rootClassName}>
        {this.renderSearchEditor()}
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
