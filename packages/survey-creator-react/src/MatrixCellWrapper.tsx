import * as React from "react";
import { QuestionSelectBase, Base, ItemValue, SurveyModel } from "survey-core";
import { MatrixCellWrapperViewModel, toggleHovered } from "survey-creator-core";
import {
  attachKey2click,
  ReactElementFactory,
  SvgIcon
} from "survey-react-ui";
import { CreatorModelElement } from "./ModelElement";

interface MatrixCellAdornerComponentProps {
  element: React.JSX.Element;
  componentData: any;
  question: QuestionSelectBase;
  cell: any;
}

export class MatrixCellAdornerComponent extends CreatorModelElement<
  MatrixCellAdornerComponentProps,
  any
> {
  model: MatrixCellWrapperViewModel;
  protected createModel(props: any): void {
    const data = props.componentData;
    let prevIsSelected = false;
    if (!!this.model) {
      prevIsSelected = this.model.isSelected;
    }
    this.model = new MatrixCellWrapperViewModel(
      data.creator,
      data.element,
      data.question,
      data.row,
      data.column || data.element.cell?.column,
    );
    this.model.isSelected = prevIsSelected;
  }
  protected getUpdatedModelProps(): string[] {
    return ["componentData"];
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    super.componentDidUpdate(prevProps, prevState);
    const data = this.props.componentData;
    this.model.templateData = data.element;
    this.model.row = data.row;
    this.model.column = data.column || data.element?.cell?.column;
    this.model.question = data.question;
  }
  protected getStateElement(): Base {
    return this.model;
  }

  render(): React.JSX.Element {
    let controls = null;
    if (!!this.model.isSupportCellEditor) {
      controls = <div className="svc-matrix-cell__question-controls">
        {attachKey2click(<span className="svc-matrix-cell__question-controls-button svc-context-button" onClick={(event: any) => this.model.editQuestion(this.model, event)}>
          <SvgIcon size={"auto"} iconName={"icon-edit"}></SvgIcon>
        </span>)}
      </div>;
    }

    return (
      <div
        className={"svc-matrix-cell"}
        tabIndex={-1}
        key={this.props.element.key}
        onClick={(e: any) => !this.props.question && this.model.selectContext(this.model, e)}
        onMouseOut={e => this.model.hover(e.nativeEvent, e.currentTarget)}
        onMouseOver={e => this.model.hover(e.nativeEvent, e.currentTarget)}
      >
        <div className={"svc-matrix-cell--selected" + (this.model.isSelected ? " svc-visible" : "")}></div>

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
