import { Base, PageModel, SurveyModel } from "survey-core";
import { SurveyActionBar, SurveyElementBase, SurveyPage } from "survey-react-ui";
import { CreatorBase, PageViewModel, toggleHovered } from "@survey/creator";
import React from "react";
import { ReactDragEvent, ReactMouseEvent } from "../events";

interface ICreatorSurveyPageComponentProps {
  creator: CreatorBase<SurveyModel>;
  survey: SurveyModel;
  page: PageModel;
}

export class CreatorSurveyPageComponent extends SurveyElementBase<
  ICreatorSurveyPageComponentProps,
  any
> {
  private model: PageViewModel<SurveyModel>;
  private rootRef: React.RefObject<HTMLDivElement>;
  private propertyPageFunc: (sender: Base, options: any) => void;
  constructor(props: ICreatorSurveyPageComponentProps) {
    super(props);
    this.model = new PageViewModel<SurveyModel>(
      this.props.creator,
      this.props.page
    );
    this.rootRef = React.createRef();
  }
  protected getStateElement(): Base {
    return this.model;
  }
  componentDidMount() {
    super.componentDidMount();
    this.model.onPageSelectedCallback = () => {
      if (!!this.rootRef.current) {
        this.rootRef.current.scrollIntoView();
      }
    };
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.model.dispose();
  }
  protected canRender(): boolean {
    return (
      !!this.model &&
      this.model.isPageLive &&
      !!this.model.page &&
      !!this.model.page.survey
    );
  }
  renderElement(): JSX.Element {
    return (
      <React.Fragment>
        <div
          ref={this.rootRef}
          className={"svc-page__content " + this.model.css}
          onClick={(e) => {
            return this.model.select(this.model, new ReactMouseEvent(e));
          }}
          onDragOver={(e) =>
            this.model.dragOver(this.model, new ReactDragEvent(e))
          }
          onDrop={(e) => this.model.drop(this.model, new ReactDragEvent(e))}
          onMouseOut={(e) => toggleHovered(e.nativeEvent, e.currentTarget)}
          onMouseOver={(e) => toggleHovered(e.nativeEvent, e.currentTarget)}
        >
          <SurveyPage
            page={this.props.page}
            survey={this.props.survey}
            creator={this.props.creator}
            css={this.model.css}
          ></SurveyPage>
          <div
            className="svc-page__add-new-question"
            onClick={(e) => {
              e.stopPropagation();
              this.model.addNewQuestion(this.model, new ReactMouseEvent(e));
            }}
            data-bind="click: addNewQuestion"
          >
            <span className="svc-text svc-text--normal svc-text--bold">
              {this.model.addNewQuestionText}
            </span>
          </div>
          <div className="svc-page__content-actions">
            <SurveyActionBar items={this.model.actions}></SurveyActionBar>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
