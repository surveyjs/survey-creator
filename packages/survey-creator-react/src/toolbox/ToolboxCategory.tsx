import * as React from "react";
import { Base } from "survey-core";
import { attachKey2click, ReactElementFactory, SurveyElementBase, SvgIcon } from "survey-react-ui";
import { QuestionToolbox, QuestionToolboxCategory } from "survey-creator-core";
import { SurveyCreatorToolboxTool } from "./ToolboxItem";

export interface ISurveyCreatorToolboxCategoryProps {
  category: QuestionToolboxCategory;
  toolbox: QuestionToolbox;
}

export class SurveyCreatorToolboxCategory extends SurveyElementBase<ISurveyCreatorToolboxCategoryProps, any> {

  public get category() {
    return this.props.category;
  }
  public get toolbox() {
    return this.props.toolbox;
  }
  public get class() {
    return "svc-toolbox__category" +
      (this.category.collapsed ? " svc-toolbox__category--collapsed" : "") +
      (this.category.empty ? " svc-toolbox__category--empty" : "");
  }

  protected getStateElement(): Base {
    return (this.category as any);
  }

  render(): React.JSX.Element {
    const header = this.renderCategoryHeader();
    const items = this.renderCategoryContent();
    return (
      <div className={this.class} key={this.category.name}>
        <div className="svc-toolbox__category-header-wrapper">
          {header}
        </div>
        {items}
      </div>
    );
  }

  renderCategoryHeader(): React.JSX.Element {
    let className = "svc-toolbox__category-header";
    if (this.toolbox.canCollapseCategories) {
      className += " svc-toolbox__category-header--collapsed";
    }
    const title = this.renderLocString(this.category.locTitle);
    return attachKey2click(
      <div className={className} onClick={e => this.category.toggleState()}>
        <span className="svc-toolbox__category-title">{title}</span>
        {this.renderButton()}
      </div>
    );
  }

  renderButton(): React.JSX.Element {
    if (!this.toolbox.canCollapseCategories) return null;

    const iconName = this.category.iconName;
    return (<div className="svc-toolbox__category-header__controls">
      <SvgIcon className={this.category.iconClassName} iconName={iconName} size={"auto"}></SvgIcon>
    </div>);
  }

  protected renderCategoryContent(): Array<any> {
    return this.renderItems(this.category.items);
  }

  renderItems(items: Array<any>, isCompact = false) {
    return items.map((item, itemIndex) =>
      <SurveyCreatorToolboxTool item={(item as any)} creator={this.toolbox.creator} parentModel={this.toolbox} isCompact={isCompact} key={"item" + itemIndex} ></SurveyCreatorToolboxTool>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-toolbox-category", (props) => {
  return React.createElement(SurveyCreatorToolboxCategory, props);
});