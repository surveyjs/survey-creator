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
    if (this.model.getItemValueGhostPosition() === topOrBottom)
      return <div className="svc-drag-drop-ghost"></div>;

    return null;
  }

  render(): JSX.Element {
    // if (this.model.question.isDragged) {
    //   return null;
    // }
    this.model.item = this.props.item;
    const isNew = !this.props.question.isItemInList(this.props.item);
    
    const button = isNew ?
      <span className="svc-item-value-controls__button svc-item-value-controls__add" onClick={() => this.model.add(this.model)}>
        <SvgIcon size={16} iconName={'icon-add-item-value'}></SvgIcon>
      </span>
      :
      <> {(this.model.isDraggable ?
        <span className="svc-item-value-controls__button svc-item-value-controls__drag">
          <SvgIcon size={16} iconName={'icon-drag-handler'}></SvgIcon>
        </span> : null)}
        <span className="svc-item-value-controls__button svc-item-value-controls__remove" onClick={() => this.model.remove(this.model)}>
          <SvgIcon size={16} iconName={'icon-remove-item-value'}></SvgIcon>
        </span>
      </>
      ;

    return (
      <div
        className={"svc-item-value-wrapper" + (isNew ? " svc-item-value--new" : "")} key={this.props.element.key}
        draggable={this.model.isDraggable}
        onDragStart={ (e) => this.model.dragStart(this.model, new ReactDragEvent(e)) }
        onDragOver={ (e) => this.model.dragOver(this.model, new ReactDragEvent(e)) }
        onDragEnd={ (e) => this.model.dragEnd(this.model, new ReactDragEvent(e)) }
        onDrop={ (e) => this.model.drop(this.model, new ReactDragEvent(e)) }
      >
        {this.getDragDropGhost("top")}

        <div className="svc-item-value-controls">
          {button}
        </div>

        <div className={"svc-item-value__item"}>
          {this.props.element}
        </div>

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
