import { QuestionAdornerViewModel, toggleHovered } from "survey-creator-core";
import * as React from "react";
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

  protected createModel(props: any): void {
    if (this.modelValue) {
      this.modelValue.dispose();
    }
    this.modelValue = this.createQuestionViewModel(props);
  }
  protected createQuestionViewModel(props: any): QuestionAdornerViewModel {
    return new QuestionAdornerViewModel(
      props.componentData,
      props.question,
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
        className={"svc-question__adorner " + this.model.rootCss()}
        onDoubleClick={e => { allowInteractions && this.model.dblclick(e.nativeEvent); e.stopPropagation(); }}
        onMouseOut={e => allowInteractions && this.model.hover(e.nativeEvent, e.currentTarget)}
        onMouseOver={e => allowInteractions && this.model.hover(e.nativeEvent, e.currentTarget)}
      >
        {content}
      </div>
    );
  }
  protected disableTabStop() {
    return true;
  }
  protected renderContent(allowInteractions: boolean): JSX.Element {
    var content = this.renderElementContent();
    //if (!allowInteractions) return <>{content}{this.renderFooter()}</>;
    return attachKey2click(
      <div
        className={this.model.css()}
        onClick={(e) => this.model.select(this.model, new ReactMouseEvent(e))}
      >
        {allowInteractions ? this.renderHeader() : null}
        {content}
        {this.renderFooter()}
      </div>,
      undefined, { disableTabStop: this.disableTabStop() });
  }
  protected renderHeader(): JSX.Element {
    return ReactElementFactory.Instance.createElement("svc-question-header", { model: this.model });
  }
  protected renderFooter(): JSX.Element {
    const allowInteractions = this.model.element
      .isInteractiveDesignElement;
    return allowInteractions ? ReactElementFactory.Instance.createElement("svc-question-footer", { className: "svc-question__content-actions", model: this.model }) : null;
  }
  protected renderCarryForwardBanner(): JSX.Element {
    if (!this.model.isBannerShowing) return null;
    return ReactElementFactory.Instance.createElement("svc-question-banner", this.model.createBannerParams());
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
      <div className="svc-panel__placeholder_frame-wrapper">
        <div className="svc-panel__placeholder_frame">
          <div className="svc-panel__placeholder">
            {this.model.placeholderText}
          </div>
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
