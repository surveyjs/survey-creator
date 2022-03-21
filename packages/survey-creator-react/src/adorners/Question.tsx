import { QuestionAdornerViewModel, toggleHovered } from "survey-creator-core";
import React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import { Base, Question } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  SurveyQuestion,
  attachKey2click,
  SvgIcon,
  Popup
} from "survey-react-ui";

export interface QuestionAdornerComponentProps {
  element: JSX.Element;
  question: Question;
  componentData: any;
}

export class QuestionAdornerComponent extends SurveyElementBase<
  QuestionAdornerComponentProps,
  any
> {
  private modelValue: QuestionAdornerViewModel;
  protected rootRef: React.RefObject<HTMLDivElement>;

  constructor(props: QuestionAdornerComponentProps) {
    super(props);
    this.modelValue = this.createQuestionViewModel();
  }
  protected createQuestionViewModel(): QuestionAdornerViewModel {
    return new QuestionAdornerViewModel(
      this.props.componentData,
      this.props.question,
      null
    );
  }
  public get model(): QuestionAdornerViewModel {
    return this.modelValue;
  }
  protected getStateElement(): Base {
    return this.model;
  }
  protected canRender(): boolean {
    return super.canRender() && !this.model.isDragged;
  }

  renderElement(): JSX.Element {
    const allowInteractions = this.model.surveyElement
      .isInteractiveDesignElement;
    const content = this.renderContent(allowInteractions);
    return (
      <div
        ref={this.rootRef}
        data-sv-drop-target-survey-element={this.model.surveyElement.name || null}
        className={"svc-question__adorner" + this.model.rootCss()}
        onMouseOut={e => allowInteractions && toggleHovered(e.nativeEvent, e.currentTarget)}
        onMouseOver={e => allowInteractions && toggleHovered(e.nativeEvent, e.currentTarget)}
      >
        {content}
      </div>
    );
  }
  protected renderContent(allowInteractions: boolean): JSX.Element {
    var content = this.renderElementContent();
    if (!allowInteractions) return <>{ content }{this.renderFooter()}</>;
    return attachKey2click(
      <div
        className={"svc-question__content " + this.model.css()}
        onClick={(e) => this.model.select(this.model, new ReactMouseEvent(e))}
      >
        {this.renderHeader()}
        {content}
        {this.renderFooter()}
      </div>
    );
  }
  protected renderHeader(): JSX.Element {
    return ReactElementFactory.Instance.createElement("svc-question-header", { model: this.model });
  }
  protected renderFooter(): JSX.Element {
    return ReactElementFactory.Instance.createElement("svc-question-footer", { className: "svc-question__content-actions", model: this.model });
  }
  protected renderElementContent(): JSX.Element {
    return (
      <>
        {this.props.element}
        {this.renderElementPlaceholder()}
      </>
    );
  }
  renderElementPlaceholder(): JSX.Element {
    if (!this.model.isEmptyElement) {
      return null;
    }
    return (
      <div className="svc-panel__placeholder_frame">
        <div className="svc-panel__placeholder">
          {this.model.placeholderText}
        </div>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-question",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionAdornerComponent, props);
  }
);
