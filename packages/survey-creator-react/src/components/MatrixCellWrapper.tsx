import React from "react";
import { QuestionSelectBase, Base, ItemValue, SurveyModel } from "survey-core";
import { CreatorBase } from "@survey/creator";
import {
  ReactElementFactory,
  SurveyElementBase,
} from "survey-react-ui";

interface MatrixCellAdornerComponentProps {
  element: JSX.Element;
  componentData: any;
  question: QuestionSelectBase;
  cell: any;
}

class MatrixCellWrapperViewModel extends Base { 
  constructor(public creator: CreatorBase<any>, public templateData: any) {
    super();
  }
  get context() {
    return this.templateData;
  }
  public celectContext(model: MatrixCellWrapperViewModel, event: MouseEvent) {
    model.creator.selectElement(model.context);
    event.stopPropagation();
  }
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
      this.props.componentData.element
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
        className={"svc-matrix-cell"} key={this.props.element.key} onClick={(e: any) => this.model.celectContext(this.model, e)}
      >
        {this.props.element}
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
