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
  model: ToolboxToolViewModel;
  parentModel: ActionContainer;
  isCompact: boolean;
}
export interface ISurveyCreatorToolboxToolProps {
  creator: SurveyCreatorModel;
  item: QuestionToolboxItem;
  parentModel: ActionContainer;
  isCompact: boolean;
}

export class SurveyCreatorToolboxTool extends CreatorModelElement<
  ISurveyCreatorToolboxToolProps,
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
      this.model.itemComponent,
      {
        item: item,
        creator: this.creator,
        parentModel: this.creator.toolbox,
        model: this.model,
        isCompact: this.isCompact
      }
    );
    return (
      <div className={item.css} key={item.id}>
        {(item.needSeparator && !this.creator.toolbox.showCategoryTitles) ? (
          <div className="svc-toolbox__category-separator"></div>
        ) : null}
        <div className="svc-toolbox__tool-content sv-action__content"
          onPointerDown={(event: any) => {
            event.persist();
            this.model.onPointerDown(event);
          }}
          onMouseOver={(event: any) => {
            this.model.onMouseOverTool(item, event);
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
  constructor(props) {
    super(props);
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
  public get model() {
    return this.props.model;
  }
  protected getStateElement(): Base {
    return this.model;
  }
  render(): JSX.Element {
    const banner = (this.props.isCompact ?
      <span className="svc-toolbox__item-banner"
        onClick={(event: any) => {
          event.persist();
          this.model.click(event);
        }}>
        <SvgIcon size={24} iconName={this.item.iconName} className="svc-toolbox__item-icon" title={this.item.tooltip}></SvgIcon>
        <span>{this.item.title}</span>
      </span>
      :
      null
    );
    const item = attachKey2click(
      <div
        className={this.item.renderedCss}
        tabIndex={0}
        role="button"
        aria-label={this.item.tooltip}
        onClick={(event: any) => {
          event.persist();
          this.model.click(event);
        }}
      >
        <span className="svc-toolbox__item-container">
          {!!this.item.iconName ? <SvgIcon size={24} iconName={this.item.iconName}></SvgIcon> : null}
        </span>
        {(this.props.isCompact ?
          null
          :
          <span className="svc-toolbox__item-title">{this.item.title}</span>
        )}
      </div>);
    return (
      <>
        {item}
        {banner}
      </>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-toolbox-item", (props) => {
  return createElement(SurveyCreatorToolboxItem, props);
});
