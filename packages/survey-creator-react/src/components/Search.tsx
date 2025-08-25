import * as React from "react";
import { Base, settings } from "survey-core";
import { SearchManager } from "survey-creator-core";
import { ReactElementFactory, SurveyActionBar, SurveyElementBase, SvgIcon } from "survey-react-ui";

interface ISearchComponentProps {
  model: SearchManager;
}
export class SearchComponent extends SurveyElementBase<ISearchComponentProps, any> {
  protected get model(): SearchManager {
    return this.props.model;
  }
  protected getStateElement(): Base {
    return this.model;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      filterString: this.model.filterString || ""
    };
  }

  renderElement(): React.JSX.Element {
    if (!this.model.isVisible) return null;

    const onChange = (e: any) => {
      const { root } = settings.environment;
      if (e.target === root.activeElement) {
        this.model.filterString = e.target.value;
      }
    };
    return (
      <div className="svc-search">
        <div className="svc-search__search-icon">
          <SvgIcon iconName="icon-search" size={"auto"}></SvgIcon>
        </div>
        <input type="text" className="svc-search__input"
          aria-label={this.model.filterStringPlaceholder}
          placeholder={this.model.filterStringPlaceholder}
          value={this.state.filterString}
          onChange={onChange} tabIndex={this.model.getTabIndex()}></input>
        <div className="svc-search__toolbar">
          <div className="svc-search__toolbar-counter">{(this.model as any).matchCounterText}</div>
          <SurveyActionBar model={this.model.searchActionBar}></SurveyActionBar>
        </div>
      </div>);
  }
}

ReactElementFactory.Instance.registerElement("svc-search", (props) => {
  return React.createElement(
    SearchComponent,
    props as ISearchComponentProps
  );
});
