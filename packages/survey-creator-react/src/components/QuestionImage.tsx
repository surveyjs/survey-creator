import { QuestionAdornerViewModel, QuestionImageAdornerViewModel, toggleHovered } from "@survey/creator";
import React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";
import { Base, Question, QuestionImageModel, SurveyElement } from "survey-core";
import {
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  SurveyQuestion,
  SvgIcon,
} from "survey-react-ui";

export interface QuestionImageAdornerComponentProps {
  element: JSX.Element;
  question: QuestionImageModel;
  componentData: any;
}

export class QuestionImageAdornerComponent extends SurveyElementBase<
QuestionImageAdornerComponentProps,
  any
> {
  model: QuestionImageAdornerViewModel;
  private rootRef: React.RefObject<HTMLDivElement>;

  constructor(props: QuestionImageAdornerComponentProps) {
    super(props);
    this.model = new QuestionImageAdornerViewModel(
      this.props.componentData,
      this.props.question as any,
      null,
      null
    );
    this.rootRef = React.createRef();
  }

  protected getStateElement(): Base {
    return this.model;
  }

  componentDidMount() {
    super.componentDidMount();
    this.model.questionRoot = this.rootRef.current;
  }

  render(): JSX.Element {
    if (this.model.isDragged) {
      return null;
    }

    return (
      <React.Fragment>
        <div
          ref={this.rootRef}
          className={"svc-question__adorner"}
          onDragOver={(e) => this.model.dragOver(this.model, new ReactDragEvent(e))
          }
          onDragEnd={(e) =>
            this.model.dragEnd(this.model, new ReactDragEvent(e))
          }
          onMouseOut={e => toggleHovered(e.nativeEvent, e.currentTarget)}
          onMouseOver={e => toggleHovered(e.nativeEvent, e.currentTarget)}
        >
          <div
            className={"svc-question__content " + this.model.css()}
            onClick={(e) => this.model.select(this.model, new ReactMouseEvent(e))}
            onDragStart={(e) =>
              this.model.dragStart(this.model, new ReactDragEvent(e))
            }
            // onDrop={(e) => this.model.drop(this.model, new ReactDragEvent(e))}
            draggable={this.model.isDraggable}
          >
            <input type="file" accept="image/*" className="svc-choose-file-input" style={{position: "absolute", opacity: 0, width: "1px", height: "1px", overflow: "hidden"}} />
    
            {this.props.element}

            <div className="svc-image-question-controls">
              <span className="svc-image-question-controls__button svc-image-question-controls__choose-file" onClick={() => this.model.chooseFile(this.model)}>
                <SvgIcon size={24} iconName={'icon-file'}></SvgIcon>
              </span>
            </div>

            <div className="svc-question__content-actions">
              <SurveyActionBar items={this.model.actions}></SurveyActionBar>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-image-question",
  (props: QuestionImageAdornerComponentProps) => {
    return React.createElement(QuestionImageAdornerComponent, props);
  }
);
