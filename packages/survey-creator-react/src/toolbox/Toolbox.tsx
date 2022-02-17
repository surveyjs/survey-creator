import React from "react";
import { CreatorBase } from "survey-creator-core";
import { SurveyCreatorToolboxTool } from "./ToolboxItem";
import { Base, SurveyModel } from "survey-core";
import { attachKey2click, ReactElementFactory, SurveyElementBase, SvgIcon } from "survey-react-ui";

export interface ISurveyCreatorToolboxProps {
  model: CreatorBase;
}

export class Toolbox extends SurveyElementBase<ISurveyCreatorToolboxProps, any> {
  constructor(props: ISurveyCreatorToolboxProps) {
    super(props);
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

  render(): JSX.Element {
    if (!this.toolbox.hasActions) return null;

    return (
      <div className="svc-toolbox">
        <div className="svc-toolbox__container">
          {(this.toolbox.categories.length == 1) ?
            (<div className="svc-toolbox__category">
              {this.renderItems(this.toolbox.visibleActions)}
            </div>)
            : this.renderCategories()
          }
        </div>
      </div>
    );
  }

  renderItems(items: Array<any>) {
    return items.map((item, itemIndex) =>
      <SurveyCreatorToolboxTool item={(item as any)} creator={this.creator} key={"item" + itemIndex} isCompact={false}></SurveyCreatorToolboxTool>
    );
  }
  renderCategories() {
    return this.toolbox.categories.map((category) => {
      const header = this.renderCategoryHeader(category);
      const items = this.renderCategoryContent(category);
      return (
        <div className="svc-toolbox__category" key={category.name}>
          {header}
          {items}
        </div>
      );
    });
  }

  renderCategoryHeader(category: any): JSX.Element {
    const iconName = category.collapsed ? "arrow-down" : "arrow-up";
    const svgIconClassName = "svc-toolbox__category-header__button svc-string-editor__button--" + (category.collapsed ? "expand" : "collapse");
    return attachKey2click(
      <div className="svc-toolbox__category-header" onClick={e => category.toggleState()}>
        <span className="svc-toolbox__category-title">{category.name}</span>
        <div className="svc-toolbox__category-header__controls">
          <SvgIcon className={svgIconClassName} iconName={"icon-" + iconName} size={24}></SvgIcon>
        </div>
      </div>
    );
  }
  protected renderCategoryContent(category: any): Array<any> {
    return !category.collapsed ? this.renderItems(category.items) : [];
  }
}

ReactElementFactory.Instance.registerElement("svc-toolbox", (props) => {
  return React.createElement(Toolbox, props);
});
