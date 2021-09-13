import {
  CreatorBase,
  editorLocalization,
  IQuestionToolboxItem
} from "@survey/creator";
import React, { CSSProperties } from "react";
import { ToolboxItemViewModel } from "@survey/creator";
import {
  Action,
  Base,
  SurveyModel
} from "survey-core";
import {
  attachKey2click,
  ReactElementFactory,
  SurveyElementBase,
  SvgIcon
} from "survey-react-ui";

export interface ISurveyCreatorToolboxItemProps {
    item: IQuestionToolboxItem;
    creator: CreatorBase<SurveyModel>;
    isCompact: boolean;
  }

export class SurveyCreatorToolboxTool extends SurveyElementBase<
    ISurveyCreatorToolboxItemProps,
    any
  > {
  constructor(props) {
    super(props);
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
    const className = "svc-toolbox__tool " + item.css + (item.isVisible ? "" : " sv-action--hidden");
    const itemComponent = ReactElementFactory.Instance.createElement(
      this.item.component || "svc-toolbox-item",
      {
        item: this.item,
        creator: this.creator,
        isCompact: this.isCompact
      }
    );
    return (
      <div className={className} key={item.id}>
        <div className="sv-action__content">
          {(this.isCompact && item.needSeparator) ? (
            <div className="svc-toolbox__category-separator"></div>
          ) : null}
          {itemComponent}
        </div>
      </div>
    );
  }
}

export class SurveyCreatorToolboxItem extends SurveyElementBase<
    ISurveyCreatorToolboxItemProps,
    any
  > {
    model: ToolboxItemViewModel;
    constructor(props) {
      super(props);
      const toolboxItem: IQuestionToolboxItem = this.props.item;
      this.model = new ToolboxItemViewModel(toolboxItem, this.props.creator);
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
      const className =
        "svc-toolbox__item svc-toolbox__item--" + this.item.iconName;
      return attachKey2click(
        <div
          className={className}
          tabIndex={0}
          title={this.item.tooltip}
          role="button"
          aria-label={
            this.item.tooltip +
            " " +
            editorLocalization.getString("toolbox") +
            " item"
          }
          onPointerDown={(event: any) => {
            event.persist();
            this.model.onPointerDown(event);
          }}
          onClick={(event: any) => {
            event.persist();
            this.model.click(event);
          }}
        >
          <span className="svc-toolbox__item-container">
            <SvgIcon size={24} iconName={this.item.iconName}></SvgIcon>
          </span>
          {(this.props.isCompact ?
            <span className="svc-toolbox__item-banner">
              <SvgIcon size={24} iconName={this.item.iconName}></SvgIcon>
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
