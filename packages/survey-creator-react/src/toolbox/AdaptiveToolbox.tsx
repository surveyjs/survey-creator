import * as React from "react";
import { VerticalResponsivityManager } from "survey-core";
import { ReactElementFactory } from "survey-react-ui";
import { ISurveyCreatorToolboxProps, Toolbox } from "./Toolbox";
import { SurveyCreatorToolboxTool } from "./ToolboxItem";
import { SearchComponent } from "../components/Search";
import { ScrollComponent } from "../components/Scroll";

export class AdaptiveToolbox extends Toolbox {
  private manager: VerticalResponsivityManager;
  private rootRef: React.RefObject<HTMLDivElement>;

  constructor(props: ISurveyCreatorToolboxProps) {
    super(props);
    this.rootRef = React.createRef();
  }

  componentDidMount() {
    super.componentDidMount();
    const container = this.rootRef.current;
    this.toolbox.setRootElement(container);
    if (!container) return;
    this.manager = new VerticalResponsivityManager(
      this.toolbox.containerElement as HTMLDivElement,
      this.toolbox,
      this.toolbox.itemSelector,
      null,
      undefined,
      (callback) => setTimeout(callback)
    );
  }
  componentWillUnmount() {
    this.manager && (this.manager.dispose());
    this.toolbox.setRootElement(undefined);
    super.componentWillUnmount();
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

  render(): JSX.Element {
    if (!this.toolbox.hasActions) return null;
    const search = this.toolbox.showSearch ? this.renderSearch() : null;
    const placeholder = this.toolbox.showPlaceholder ? <div className="svc-toolbox__placeholder">{this.toolbox.toolboxNoResultsFound}</div> : null;
    return (
      <div ref={this.rootRef} className={this.toolbox.classNames}>
        <div onBlur={(e) => this.toolbox.focusOut(e)} className="svc-toolbox__panel">
          {search}
          {placeholder}
          <ScrollComponent>
            {(this.toolbox.showInSingleCategory) ?
              (<div className="svc-toolbox__category">
                {this.renderItems(this.toolbox.renderedActions, this.toolbox.isCompactRendered)}
              </div>)
              : this.renderCategories()
            }
          </ScrollComponent>
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-adaptive-toolbox", (props) => {
  return React.createElement(AdaptiveToolbox, props);
});
