import {
  CreatorBase,
  editorLocalization,
  IQuestionToolboxItem
} from "survey-creator-core";
import React, { CSSProperties } from "react";
import { ToolboxToolViewModel } from "survey-creator-core";
import {
  Action,
  Base,
  SurveyModel
} from "survey-core";
import {
  attachKey2click,
  ReactElementFactory,
  SvgIcon
} from "survey-react-ui";
import { CreatorModelElement } from "../ModelElement";

export interface ISurveyCreatorToolboxItemProps {
  item: IQuestionToolboxItem;
  creator: CreatorBase;
  isCompact: boolean;
}

export class SurveyCreatorToolboxTool extends CreatorModelElement<
  ISurveyCreatorToolboxItemProps,
  any
> {
  model: ToolboxToolViewModel;

  constructor(props) {
    super(props);
  }
  protected createModel(): void {
    this.model = new ToolboxToolViewModel(this.item, this.props.creator);
  }
  protected getUpdatedModelProps(): string[] {
    return ["creator", "item"];
  }
  public get item() {
    return this.props.item;
  }
  public get creator() {
    return this.props.creator;
  }
  public get isCompact() {
    return this.props.isCompact;
  }

  protected getStateElement(): Base {
    return (this.item as any);
  }

  render(): JSX.Element {
    const item = ((this.item as any) as Action);
    const className = "svc-toolbox__tool " + (item.css || "") + (item.isVisible ? "" : " sv-action--hidden");
    const itemComponent = ReactElementFactory.Instance.createElement(
      this.item.component || "svc-toolbox-item",
      {
        item: this.item,
        creator: this.creator,
        isCompact: this.isCompact
      }
    );
    return (
      <div className={className} key={item.id}
        onPointerDown={(event: any) => {
          event.persist();
          this.model.onPointerDown(event);
        }}
      >
        <div className="sv-action__content">
          {(item.needSeparator && !this.creator.toolbox.showCategoryTitles) ? (
            <div className="svc-toolbox__category-separator"></div>
          ) : null}
          {itemComponent}
        </div>
      </div>
    );
  }
}

export class SurveyCreatorToolboxItem extends CreatorModelElement<
  ISurveyCreatorToolboxItemProps,
  any
> {
  model: ToolboxToolViewModel;
  constructor(props) {
    super(props);
  }
  protected createModel(): void {
    const toolboxItem: IQuestionToolboxItem = this.props.item;
    this.model = new ToolboxToolViewModel(toolboxItem, this.props.creator);
  }
  protected getUpdatedModelProps(): string[] {
    return ["creator", "item"];
  }
  public get item() {
    return this.props.item;
  }
  public get creator() {
    return this.props.creator;
  }
  protected getStateElement(): Base {
    return this.model;
  }
  render(): JSX.Element {
    return attachKey2click(
      <div
        className={"svc-toolbox__item " + this.item.className}
        tabIndex={0}
        role="button"
        aria-label={this.item.tooltip}
        title={this.item.tooltip}
        onClick={(event: any) => {
          event.persist();
          this.model.click(event);
        }}
      >
        <span className="svc-toolbox__item-container">
          <SvgIcon size={24} iconName={this.item.iconName} title={this.item.tooltip}></SvgIcon>
        </span>
        {(this.props.isCompact ?
          <span className="svc-toolbox__item-banner svc-item__banner">
            <SvgIcon size={24} iconName={this.item.iconName} className="svc-toolbox__item-icon" title={this.item.tooltip}></SvgIcon>
            <span className="svc-toolbox__item-title">{this.item.title}</span>
          </span>
          :
          <span className="svc-toolbox__item-title">{this.item.title}</span>
        )}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-toolbox-item", (props) => {
  return React.createElement(SurveyCreatorToolboxItem, props);
});
