import { ItemValueAdornerViewModel } from "@survey/creator";
import React from "react";
import { Base, ItemValue } from "survey-core";
import {
  ReactElementFactory,
  SurveyElementBase,
  SvgIcon,
} from "survey-react-ui";

interface ItemValueAdornerComponentProps {
  element: JSX.Element;
  componentData: any;
  templateData: any;
}

export class ItemValueAdornerComponent extends SurveyElementBase<
  ItemValueAdornerComponentProps,
  any
> {
  model: ItemValueAdornerViewModel;
  constructor(props: ItemValueAdornerComponentProps) {
    super(props);
    this.model = new ItemValueAdornerViewModel(
      this.props.componentData.creator,
      this.props.componentData.question,
      this.props.componentData.item
    );
  }
  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    // if (this.model.question.isDragged) {
    //   return null;
    // }

    return (
      <div
        className={"svc-item-value__adorner"} key={this.props.element.key}
      >
        <div
          className={"svc-item-value__content "}
        >
          <div className="svc-item-value-controls">
            <span onClick={() => this.model.add(this.model)}>
              <SvgIcon size={24} iconName={'icon-add-item-value'}></SvgIcon>
            </span>
            <span onClick={() => this.model.remove(this.model)}>
              <SvgIcon size={24} iconName={'icon-remove-item-value'}></SvgIcon>
            </span>

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
