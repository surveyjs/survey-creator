import { ItemValueWrapperViewModel } from "@survey/creator";
import React from "react";
import { QuestionSelectBase, Base, ItemValue } from "survey-core";
import {
  ReactElementFactory,
  SurveyElementBase,
  SvgIcon,
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

    const button = this.model.isNew ?
      <span onClick={() => this.model.add(this.model)}>
        <SvgIcon size={24} iconName={'icon-add-item-value'}></SvgIcon>
      </span>
      :
      <span onClick={() => this.model.remove(this.model)}>
        <SvgIcon size={24} iconName={'icon-remove-item-value'}></SvgIcon>
      </span>
      ;

    return (
      <div
        className={"svc-item-value__adorner"} key={this.props.element.key}
      >
        <div
          className={"svc-item-value__content "}
        >
          <div className="svc-item-value-controls">
          {button}
          </div>
          {this.props.element}
        </div>
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
