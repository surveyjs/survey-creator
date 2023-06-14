import { QuestionAdornerViewModel, toggleHovered } from "survey-creator-core";
import React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import { Base, Question } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyQuestion,
  attachKey2click,
  SvgIcon,
  Popup
} from "survey-react-ui";
import { CreatorModelElement } from "../ModelElement";

export interface QuestionAdornerComponentProps {
  element: JSX.Element;
  question: Question;
  componentData: any;
}

export class QuestionAdornerComponent extends CreatorModelElement<
  QuestionAdornerComponentProps,
  any
> {
  private modelValue: QuestionAdornerViewModel;
  protected rootRef: React.RefObject<HTMLDivElement>;

  protected createModel(): void {
    this.modelValue = this.createQuestionViewModel();
  }
  protected createQuestionViewModel(): QuestionAdornerViewModel {
    return new QuestionAdornerViewModel(
      this.props.componentData,
      this.props.question,
      null
    );
  }
  protected getUpdatedModelProps(): string[] {
    return ["question", "componentData"];
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
    const allowInteractions = this.model.element
      .isInteractiveDesignElement;
    const content = this.renderContent(allowInteractions);
    return (
      <div
        ref={this.rootRef}
        data-sv-drop-target-survey-element={this.model.element.name || null}
        className={"svc-question__adorner" + this.model.rootCss()}
        onMouseOut={e => allowInteractions && this.model.hover(e.nativeEvent, e.currentTarget)}
        onMouseOver={e => allowInteractions && this.model.hover(e.nativeEvent, e.currentTarget)}
      >
        {content}
      </div>
    );
  }
  protected renderContent(allowInteractions: boolean): JSX.Element {
    var content = this.renderElementContent();
    if (!allowInteractions) return <>{content}{this.renderFooter()}</>;
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
  protected renderCarryForwardBanner(): JSX.Element {
    if (!this.model.isUsingCarryForward) return null;
    return ReactElementFactory.Instance.createElement("svc-question-carryforward", this.model.createCarryForwardParams());
  }
  protected renderElementContent(): JSX.Element {
    return (
      <>
        {this.props.element}
        {this.renderElementPlaceholder()}
        {this.renderCarryForwardBanner()}
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
