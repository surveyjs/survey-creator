import { RowViewModel } from "survey-creator-core";
import React from "react";
import { Base, QuestionRowModel } from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";
import { QuestionAdornerComponentProps } from "./Question";

interface RowWrapperComponentProps {
  element: JSX.Element;
  componentData: any;
  row: QuestionRowModel;
}

export class RowWrapper extends SurveyElementBase<
  RowWrapperComponentProps,
  any
> {
  model: RowViewModel;
  constructor(props: RowWrapperComponentProps) {
    super(props);
    this.model = new RowViewModel(
      this.props.componentData.creator,
      this.props.row,
      null
    );
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
