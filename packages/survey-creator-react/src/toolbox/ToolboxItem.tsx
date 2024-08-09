import {
  SurveyCreatorModel,
  editorLocalization,
  IQuestionToolboxItem,
  QuestionToolboxItem
} from "survey-creator-core";
import { CSSProperties, createElement } from "react";
import * as React from "react";
import { ToolboxToolViewModel } from "survey-creator-core";
import {
  Action,
  ActionContainer,
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
  creator: SurveyCreatorModel;
  item: QuestionToolboxItem;
  parentModel: ActionContainer;
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
  protected createModel(props: any): void {
    this.model = new ToolboxToolViewModel(props.item, props.creator, props.parentModel);
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
    const item = this.item;
    const itemComponent = ReactElementFactory.Instance.createElement(
      item.component || "svc-toolbox-item",
      {
        item: item,
        creator: this.creator,
        parentModel: this.creator.toolbox,
        isCompact: this.isCompact
      }
    );
    return (
      <div className={item.css} key={item.id}>
        {(item.needSeparator && !this.creator.toolbox.showCategoryTitles) ? (
          <div className="svc-toolbox__category-separator"></div>
        ) : null}
        <div className="sv-action__content"
          onPointerDown={(event: any) => {
            event.persist();
            this.model.onPointerDown(event);
          }}
          onMouseOver={(event: any) => {
            this.model.onMouseOver(item, event);
          }}
          onMouseLeave={(event: any) => {
            this.model.onMouseLeave(item, event);
          }}
        >
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
  protected createModel(props: any): void {
    const toolboxItem: IQuestionToolboxItem = props.item;
    this.model = new ToolboxToolViewModel(toolboxItem, props.creator, props.parentModel);
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
          {!!this.item.iconName ? <SvgIcon size={24} iconName={this.item.iconName} title={this.item.tooltip}></SvgIcon> : null}
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
  return createElement(SurveyCreatorToolboxItem, props);
});
