import { getLocString, ItemValueWrapperViewModel } from "@survey/creator";
import React from "react";
import { ReactDragEvent } from "src/events";
import { QuestionSelectBase, Base, ItemValue } from "survey-core";
import {
  attachKey2click,
  ReactElementFactory,
  SurveyElementBase,
  SvgIcon
} from "survey-react-ui";

interface ItemValueAdornerComponentProps {
  element: JSX.Element;
  componentData: any;
  question: QuestionSelectBase;
  item: ItemValue;
}

export class ItemValueAdornerComponent extends SurveyElementBase<
  ItemValueAdornerComponentProps,
  any
> {
  model: ItemValueWrapperViewModel;
  constructor(props: ItemValueAdornerComponentProps) {
    super(props);
    this.model = new ItemValueWrapperViewModel(
      this.props.componentData.creator,
      this.props.question,
      this.props.item
    );
  }
  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    // if (this.model.question.isDragged) {
    //   return null;
    // }
    this.model.item = this.props.item;
    const button = this.model.allowAdd ? (
      attachKey2click(<span
        className="svc-item-value-controls__button svc-item-value-controls__add"
        title={this.model.tooltip}
        onClick={() => this.model.add(this.model)}
      >
        <SvgIcon size={16} iconName={"icon-add-item-value"}></SvgIcon>
      </span>)
    ) : (
      <>
        {" "}
        {this.model.isDraggable ? (
          <span
            className="svc-item-value-controls__button svc-item-value-controls__drag"
            title={this.model.dragTooltip}
            onPointerDown={(event: any) => this.model.startDragItemValue(event)}
          >
            <SvgIcon size={16} iconName={"icon-drag-handler"}></SvgIcon>
          </span>
        ) : null}
        {this.model.allowRemove ? attachKey2click(<span
          className="svc-item-value-controls__button svc-item-value-controls__remove"
          title={this.model.tooltip}
          onClick={() => this.model.remove(this.model)}
        >
          <SvgIcon size={16} iconName={"icon-remove-item-value"}></SvgIcon>
        </span>) : null}
      </>
    );

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
        key={this.props.element.key}
        data-sv-drop-target-item-value={
          this.model.isDraggable ? this.model.item.value : undefined
        }
      >
        <div className="svc-item-value__ghost"></div>

        <div className="svc-item-value-controls">{button}</div>

        <div className={"svc-item-value__item"} onClick={(event) => this.model.select(this.model, event)}>{this.props.element}</div>
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
