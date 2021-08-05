import {
  QuestionImageAdornerViewModel,
  QuestionAdornerViewModel
} from "@survey/creator";
import React from "react";
import { attachKey2click, ReactElementFactory, SvgIcon } from "survey-react-ui";
import {
  QuestionAdornerComponent,
  QuestionAdornerComponentProps
} from "./Question";

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
  protected renderContentOnTop(): JSX.Element {
    return (
      <input
        type="file"
        tabIndex={-1}
        accept="image/*"
        className="svc-choose-file-input"
        style={{
          position: "absolute",
          opacity: 0,
          width: "1px",
          height: "1px",
          overflow: "hidden"
        }}
      />
    );
  }

  renderElementPlaceholder(): JSX.Element {
    return (
      <div className="svc-image-question-controls">
        {attachKey2click(<span
          className="svc-image-question-controls__button svc-image-question-controls__choose-file"
          onClick={() => this.imageModel.chooseFile(this.imageModel)}
        >
          <SvgIcon size={24} iconName={"icon-file"}></SvgIcon>
        </span>)}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-image-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionImageAdornerComponent, props);
  }
);
