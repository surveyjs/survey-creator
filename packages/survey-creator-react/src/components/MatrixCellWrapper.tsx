import React from "react";
import { QuestionSelectBase, Base, ItemValue, SurveyModel } from "survey-core";
import { MatrixCellWrapperViewModel } from "@survey/creator";
import {
  ReactElementFactory,
  SurveyElementBase,
  SvgIcon
} from "survey-react-ui";

interface MatrixCellAdornerComponentProps {
  element: JSX.Element;
  componentData: any;
  question: QuestionSelectBase;
  cell: any;
}

export class MatrixCellAdornerComponent extends SurveyElementBase<
  MatrixCellAdornerComponentProps,
  any
> {
  model: MatrixCellWrapperViewModel;
  constructor(props: MatrixCellAdornerComponentProps) {
    super(props);
    this.model = new MatrixCellWrapperViewModel(
      this.props.componentData.creator,
      this.props.componentData.element,
      this.props.componentData.question,
      this.props.componentData.row,
      this.props.componentData.column,
    );
  }
  protected getStateElement(): Base {
    return this.model;
  }

  render(): JSX.Element {
    let controls = null;
    if(!!this.model.question) {
      controls = <div className="svc-matrix-cell__question-controls">
        <span className="svc-matrix-cell__question-controls-button" onClick={() => this.model.editQuestion(this.model)}>
          <SvgIcon size={24} iconName={'icon-pencil'}></SvgIcon>
        </span>
      </div>;
    }

    return (
      <div
        className={"svc-matrix-cell"} key={this.props.element.key} onClick={(e: any) => !this.props.question && this.model.selectContext(this.model, e)}
      >
        {this.props.element}

        {controls}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-matrix-cell",
  (props: MatrixCellAdornerComponentProps) => {
    return React.createElement(MatrixCellAdornerComponent, props);
  }
);
