import * as React from "react";
import { Base, VerticalResponsivityManager } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { SurveyCreatorToolboxTool } from "./ToolboxItem";
import { SearchComponent } from "../components/Search";
import { ScrollComponent } from "../components/Scroll";
import { SurveyCreatorToolboxCategory } from "./ToolboxCategory";
import { SurveyCreatorModel } from "survey-creator-core";
export interface ISurveyCreatorToolboxProps {
  model: SurveyCreatorModel;
}
export class AdaptiveToolbox extends SurveyElementBase<ISurveyCreatorToolboxProps, any> {
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
  public get creator() {
    return this.props.model;
  }
  public get toolbox() {
    return this.creator.toolbox;
  }
  protected getStateElement(): Base {
    return this.toolbox;
  }

  renderItems(items: Array<any>, isCompact = false): Array<JSX.Element> {
    const result = [];
    items.forEach((item, itemIndex) => {
      const tool = <SurveyCreatorToolboxTool item={(item as any)} creator={this.creator} parentModel={this.toolbox} isCompact={isCompact} key={"item" + itemIndex} ></SurveyCreatorToolboxTool>;
      result.push(tool);
    });
    return result;
  }

  renderCategories() {
    return this.toolbox.categories.map((category, index) => {
      return <SurveyCreatorToolboxCategory category={category} toolbox={this.toolbox} key={"category" + index} ></SurveyCreatorToolboxCategory>;
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

ReactElementFactory.Instance.registerElement("svc-toolbox", (props) => {
  return React.createElement(AdaptiveToolbox, props);
});
