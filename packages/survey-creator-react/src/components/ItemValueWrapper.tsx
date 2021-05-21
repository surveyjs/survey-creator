import { ItemValueWrapperViewModel } from "@survey/creator";
import React from "react";
import { ReactDragEvent } from "src/events";
import { QuestionSelectBase, Base, ItemValue } from "survey-core";
import {
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

  private getDragDropGhost(topOrBottom: string) {
    if (this.model.ghostPosition === topOrBottom)
      return <div className="svc-drag-drop-ghost"></div>;
    return null;
  }

  render(): JSX.Element {
    // if (this.model.question.isDragged) {
    //   return null;
    // }
    this.model.item = this.props.item;
    const isNew = !this.props.question.isItemInList(this.props.item);

    const button = isNew ? (
      <span
        className="svc-item-value-controls__button svc-item-value-controls__add"
        onClick={() => this.model.add(this.model)}
      >
        <SvgIcon size={24} iconName={"icon-add-item-value"}></SvgIcon>
      </span>
    ) : (
      <>
        {" "}
        {this.model.isDraggable ? (
          <span
            className="svc-item-value-controls__button svc-item-value-controls__drag"
            onPointerDown={(event: any) => this.model.startDragItemValue(event)}
          >
            <SvgIcon size={24} iconName={"icon-drag-handler"}></SvgIcon>
          </span>
        ) : null}
        <span
          className="svc-item-value-controls__button svc-item-value-controls__remove"
          onClick={() => this.model.remove(this.model)}
        >
          <SvgIcon size={24} iconName={"icon-remove-item-value"}></SvgIcon>
        </span>
      </>
    );
    return (
      <div
        className={
          "svc-item-value-wrapper" + (isNew ? " svc-item-value--new" : "")
        }
        key={this.props.element.key}
        data-svc-drop-target-element-name={this.model.item.value}
      >
        {this.getDragDropGhost("top")}

        <div className="svc-item-value-controls">{button}</div>

        <div className={"svc-item-value__item"}>{this.props.element}</div>

        {this.getDragDropGhost("bottom")}
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
