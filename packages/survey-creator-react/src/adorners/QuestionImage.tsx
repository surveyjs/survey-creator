import {
  QuestionImageAdornerViewModel,
  QuestionAdornerViewModel
} from "survey-creator-core";
import React from "react";
import { attachKey2click, ReactElementFactory, ReactQuestionFactory, SvgIcon } from "survey-react-ui";
import {
  QuestionAdornerComponent,
  QuestionAdornerComponentProps
} from "./Question";
import { Base } from "survey-core";

export class QuestionImageAdornerComponent extends QuestionAdornerComponent {
  constructor(props: QuestionAdornerComponentProps) {
    super(props);
    this.rootRef = React.createRef();
  }
  protected createQuestionViewModel(): QuestionAdornerViewModel {
    return new QuestionImageAdornerViewModel(
      this.props.componentData,
      this.props.question as any,
      null,
      null
    );
  }
  public get imageModel(): QuestionImageAdornerViewModel {
    return this.model as QuestionImageAdornerViewModel;
  }
  componentDidMount() {
    super.componentDidMount();
    this.imageModel.questionRoot = this.rootRef.current;
  }
  protected renderHeader(): JSX.Element {
    return (<React.Fragment>
      <input
        type="file"
        aria-hidden="true"
        tabIndex={-1}
        accept={this.imageModel.acceptedTypes}
        className="svc-choose-file-input"
        style={{
          position: "absolute",
          opacity: 0,
          width: "1px",
          height: "1px",
          overflow: "hidden"
        }}
      />

      {super.renderHeader()}
    </React.Fragment>);
  }
  renderElementPlaceholder(): JSX.Element {
    return (
      <div className="svc-image-question-controls">
        {this.model.allowEdit && !(this.model as QuestionImageAdornerViewModel).isUploading ? attachKey2click(<span
          className="svc-context-button"
          onClick={() => this.imageModel.chooseFile(this.imageModel)}
        >
          <SvgIcon size={24} iconName={"icon-file"}></SvgIcon>
        </span>) : null}
      </div>
    );
  }

  protected getStateElements(): Array<Base> {
    return [this.model, this.imageModel.filePresentationModel];
  }

  protected renderElementContent(): JSX.Element {
    if (this.imageModel.isEmptyImageLink) {
      const fileQuestion = ReactQuestionFactory.Instance.createQuestion("file", {
        creator: this.imageModel.question.survey,
        isDisplayMode: false,
        question: this.imageModel.filePresentationModel
      });
      return fileQuestion;
    } else {
      return (
        <>
          {this.props.element}
          {this.renderElementPlaceholder()}
        </>
      );
    }
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-image-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionImageAdornerComponent, props);
  }
);
