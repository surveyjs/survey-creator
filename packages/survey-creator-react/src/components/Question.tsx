import { QuestionAdornerViewModel, toggleHovered } from "@survey/creator";
import React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import { Base, Question } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  SurveyQuestion,
  attachKey2click
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
      <React.Fragment>
        <div
          data-sv-drop-target-survey-element={this.model.surveyElement.name}
          ref={this.rootRef}
          className={"svc-question__adorner" + this.model.rootCss()}
          onMouseOut={(e) =>
            allowInteractions && toggleHovered(e.nativeEvent, e.currentTarget)
          }
          onMouseOver={(e) =>
            allowInteractions && toggleHovered(e.nativeEvent, e.currentTarget)
          }
        >
          {content}
        </div>
      </React.Fragment>
    );
  }
  protected renderContent(allowInteractions: boolean): JSX.Element {
    var content = this.renderElementContent();
    if (!allowInteractions) return content;
    return attachKey2click(
      <div
        className={"svc-question__content " + this.model.css()}
        onClick={(e) => this.model.select(this.model, new ReactMouseEvent(e))}
      >
        {this.renderContentOnTop()}
        {this.renderDragAria()}
        {content}
        <div className="svc-question__content-actions">
          <SurveyActionBar model={this.model.actionContainer}></SurveyActionBar>
        </div>
      </div>
    );
  }
  protected renderElementContent(): JSX.Element {
    return (
      <>
        {this.props.element}
        {this.renderElementPlaceholder()}
      </>
    );
  }
  protected renderContentOnTop(): JSX.Element {
    return null;
  }
  protected renderDragAria(): JSX.Element {
    if (!this.model.allowDragging) return null;
    return (
      <div className={"svc-question__drag-area"}>
        <div
          className={"svc-question__drag-element"}
          onPointerDown={(event: any) =>
            this.model.startDragSurveyElement(event)
          }
        ></div>
      </div>
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

ReactElementFactory.Instance.registerElement(
  "svc-panel",
  (props: QuestionAdornerComponentProps) => {
    return React.createElement(QuestionAdornerComponent, props);
  }
);