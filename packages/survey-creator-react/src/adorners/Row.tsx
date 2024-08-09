import { RowViewModel } from "survey-creator-core";
import * as React from "react";
import { Base, QuestionRowModel } from "survey-core";
import { ReactElementFactory } from "survey-react-ui";
import { CreatorModelElement } from "../ModelElement";

interface RowWrapperComponentProps {
  element: JSX.Element;
  componentData: any;
  row: QuestionRowModel;
}

export class RowWrapper extends CreatorModelElement<
  RowWrapperComponentProps,
  any
> {
  model: RowViewModel;
  constructor(props: RowWrapperComponentProps) {
    super(props);
  }
  protected createModel(props: any): void {
    this.model = new RowViewModel(
      props.componentData.creator,
      props.row,
      null
    );
  }
  protected getUpdatedModelProps(): string[] {
    return ["row", "componentData"];
  }
  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    return (
      <div
        key={"svc-row-" + this.props.row.id}
        className={this.model.cssClasses}
      >
        {this.props.element}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-row",
  (props: RowWrapperComponentProps) => {
    return React.createElement(RowWrapper, props);
  }
);
