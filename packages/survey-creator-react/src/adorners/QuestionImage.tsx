import {
  QuestionImageAdornerViewModel,
  QuestionAdornerViewModel
} from "survey-creator-core";
import * as React from "react";
import { attachKey2click, LoadingIndicatorComponent, ReactElementFactory, ReactQuestionFactory, SvgIcon } from "survey-react-ui";
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
  protected createQuestionViewModel(props: any): QuestionAdornerViewModel {
    return new QuestionImageAdornerViewModel(
      props.componentData,
      props.question as any,
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
  renderLoadingPlaceholder(): JSX.Element {
    return (<div className="svc-image-question__loading-placeholder">
      <div className="svc-image-question__loading">
        <LoadingIndicatorComponent></LoadingIndicatorComponent>
      </div>
    </div>);
  }
  renderChooseButton(): JSX.Element {
    return (<div className="svc-image-question-controls">
      {this.model.allowEdit ? attachKey2click(<span
        className="svc-context-button"
        onClick={() => this.imageModel.chooseFile(this.imageModel)}
      >
        <SvgIcon size={24} iconName={"icon-file"}></SvgIcon>
      </span>) : null}
    </div>);
  }
  renderElementPlaceholder(): JSX.Element {
    return this.imageModel.isUploading ? this.renderLoadingPlaceholder() : this.renderChooseButton();
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
