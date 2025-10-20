import * as React from "react";
import { Base, VerticalResponsivityManager } from "survey-core";
import { ReactElementFactory, SurveyElementBase, Scroll } from "survey-react-ui";
import { SurveyCreatorToolboxTool } from "./ToolboxItem";
import { SearchComponent } from "../components/Search";
import { SurveyCreatorToolboxCategory } from "./ToolboxCategory";
import { SurveyCreatorModel } from "survey-creator-core";
export interface ISurveyCreatorToolboxProps {
  model: SurveyCreatorModel;
}
export class AdaptiveToolbox extends SurveyElementBase<ISurveyCreatorToolboxProps, any> {
  private rootRef: React.RefObject<HTMLDivElement>;

  constructor(props: ISurveyCreatorToolboxProps) {
    super(props);
    this.rootRef = React.createRef();
  }

  componentDidUpdate(prevProps: any, prevState: any): void {
    super.componentDidUpdate(prevProps, prevState);
    const container = this.rootRef.current;
    if (container) {
      this.toolbox.afterRender(container);
    }
  }

  componentDidMount() {
    super.componentDidMount();
    const container = this.rootRef.current;
    if (container) {
      this.toolbox.afterRender(container);
    }
  }
  componentWillUnmount() {
    this.toolbox.beforeDestroy();
    super.componentWillUnmount();
  }
  public get creator() {
    return this.props.model;
  }
  public get toolbox() {
    return this.creator.toolbox;
  }
  protected getStateElement(): Base {
    return this.toolbox;
  }

  renderItems(items: Array<any>, isCompact = false): Array<React.JSX.Element> {
    return items.map((item, itemIndex) => {
      return <SurveyCreatorToolboxTool item={(item as any)} creator={this.creator} parentModel={this.toolbox} isCompact={isCompact} key={item.renderedId} ></SurveyCreatorToolboxTool>;
    });
  }

  renderCategories() {
    return this.toolbox.categories.map((category, index) => {
      return ReactElementFactory.Instance.createElement("svc-toolbox-category", {
        category,
        toolbox: this.toolbox,
        key: "category" + index
      });
    });
  }
  renderSearch() {
    const searchButton = this.toolbox.isCompactRendered ?
      <>
        <SurveyCreatorToolboxTool item={this.toolbox.searchItem as any} creator={this.creator} parentModel={this.toolbox} isCompact={this.toolbox.isCompactRendered} key={"searchitem"} ></SurveyCreatorToolboxTool>
      </> :
      null;
    return (<div className="svc-toolbox__search-container">
      {searchButton}
      <SearchComponent model={this.toolbox.searchManager}></SearchComponent>
      <div className="svc-toolbox__category-separator svc-toolbox__category-separator--search"></div>
    </div>);
  }

  render(): React.JSX.Element {
    const search = this.toolbox.showSearch ? this.renderSearch() : null;
    const placeholder = this.toolbox.showPlaceholder ? <div className="svc-toolbox__placeholder">{this.toolbox.toolboxNoResultsFound}</div> : null;
    return (
      <div ref={this.rootRef} className={this.toolbox.classNames} style={this.toolbox.getRootStyle()}>
        <div onBlur={(e) => this.toolbox.focusOut(e)} className="svc-toolbox__panel">
          {search}
          {placeholder}
          <Scroll>
            {(this.toolbox.showInSingleCategory) ?
              (<div className="svc-toolbox__category">
                {this.renderItems(this.toolbox.renderedActions, this.toolbox.isCompactRendered)}
              </div>)
              : this.renderCategories()
            }
          </Scroll>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-toolbox", (props) => {
  return React.createElement(AdaptiveToolbox, props);
});
