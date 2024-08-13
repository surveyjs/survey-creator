import { getLocString, ItemValueWrapperViewModel } from "survey-creator-core";
import * as React from "react";
import { ReactDragEvent } from "src/events";
import { QuestionSelectBase, Base, ItemValue } from "survey-core";
import {
  attachKey2click,
  ReactElementFactory,
  SvgIcon
} from "survey-react-ui";
import { CreatorModelElement } from "./ModelElement";

interface ItemValueAdornerComponentProps {
  element: JSX.Element;
  componentData: any;
  question: QuestionSelectBase;
  item: ItemValue;
}

export class ItemValueAdornerComponent extends CreatorModelElement<
  ItemValueAdornerComponentProps,
  any
> {
  model: ItemValueWrapperViewModel;
  protected createModel(props: any): void {
    this.model = new ItemValueWrapperViewModel(
      props.componentData.creator,
      props.question,
      props.item
    );
  }
  protected getUpdatedModelProps(): string[] {
    return ["question", "item"];
  }
  protected getStateElement(): Base {
    return this.model;
  }
  private onBlur = (event: any) => {
    this.model.onFocusOut(event.nativeEvent);
  };

  render(): JSX.Element {
    // if (this.model.question.isDragged) {
    //   return null;
    // }
    this.model.item = this.props.item;
    const button = this.model.allowAdd ? (
      attachKey2click(<span
        className="svc-item-value-controls__button svc-item-value-controls__add"
        aria-label={this.model.tooltip}
        onClick={() => {
          this.model.add(this.model);
          this.model.isNew = false;
        }}
      >
        <SvgIcon size={16} iconName={"icon-add_16x16"} title={this.model.tooltip}></SvgIcon>
      </span>)
    ) : (
      <>
        {" "}
        {this.model.isDraggable ? (
          <span
            className="svc-item-value-controls__button svc-item-value-controls__drag"
          >
            <SvgIcon className="svc-item-value-controls__drag-icon" size={24} iconName={"icon-drag-area-indicator"} title={this.model.dragTooltip}></SvgIcon>
          </span>
        ) : null}
        {this.model.allowRemove ? attachKey2click(<span
          className="svc-item-value-controls__button svc-item-value-controls__remove"
          aria-label={this.model.tooltip}
          onClick={() => this.model.remove(this.model)}
        >
          <SvgIcon size={16} iconName={"icon-remove_16x16"} title={this.model.tooltip}></SvgIcon>
        </span>) : null}
      </>
    );

    const itemkey = this.props.element.key + (this.model.allowAdd ? "_new" : "");

    return (
      <div
        className={
          "svc-item-value-wrapper" +
          (this.model.allowAdd ? " svc-item-value--new" : "") +
          (this.model.isDragging ? " svc-item-value--dragging" : "") +
          (this.model.isDragDropGhost ? " svc-item-value--ghost" : "") +
          (this.model.isDragDropMoveDown ? " svc-item-value--movedown" : "") +
          (this.model.isDragDropMoveUp ? " svc-item-value--moveup" : "")
        }
        key={itemkey}
        data-sv-drop-target-item-value={
          this.model.isDraggable ? this.model.item.value : undefined
        }
        onPointerDown={(event: any) => this.model.onPointerDown(event)}
      >
        <div className="svc-item-value__ghost"></div>

        <div className="svc-item-value-controls" onBlur={this.onBlur}>{button}</div>

        <div className={"svc-item-value__item"} onClick={(event) => this.model.select(this.model, event.nativeEvent)}>{this.props.element}</div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-item-value",
  (props: ItemValueAdornerComponentProps) => {
    return React.createElement(ItemValueAdornerComponent, props);
  }
);
