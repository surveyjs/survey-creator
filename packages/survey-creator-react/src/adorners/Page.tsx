import { Base, PageModel, SurveyModel } from "survey-core";
import {
  attachKey2click,
  Popup,
  SurveyActionBar,
  ReactElementFactory,
  SurveyElementBase,
  SurveyPage,
  SvgIcon
} from "survey-react-ui";
import {
  CreatorBase,
  PageViewModel,
  SurveyHelper,
  toggleHovered
} from "@survey/creator";
import React from "react";
import { ReactMouseEvent } from "../events";

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
        SurveyHelper.scrollIntoViewIfNeeded(this.rootRef.current);
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
    if (!this.props.page) return null;
    return (
      attachKey2click(<div
        ref={this.rootRef}
        className={"svc-page__content " + this.model.css}
        id={this.props.page.id}
        onClick={(e) => {
          return this.model.select(this.model, new ReactMouseEvent(e));
        }}
        onMouseOut={(e) => this.model.hover(e.nativeEvent, e.currentTarget)}
        onMouseOver={(e) => this.model.hover(e.nativeEvent, e.currentTarget)}
      >
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>)
    );
  }
  protected renderContent(): JSX.Element {
    return (<SurveyPage page={this.props.page} survey={this.props.survey} creator={this.props.creator} css={this.model.css}></SurveyPage>);
  }
  protected renderHeader(): JSX.Element {
    return (<div className="svc-page__content-actions">
      <SurveyActionBar model={this.model.actionContainer}></SurveyActionBar>
    </div>);
  }
  protected renderFooter(): JSX.Element {
    if (!this.model.allowEdit) return null;
    const questionTypeSelectorModel = this.model.questionTypeSelectorModel;
    return attachKey2click(<div
      className="svc-page__add-new-question svc-btn"
      onClick={(e) => {
        e.stopPropagation();
        this.model.addNewQuestion(this.model, new ReactMouseEvent(e));
      }}
      onMouseOver={(e) => this.model.hoverStopper(e.nativeEvent, e.currentTarget)}
    >
      <span className="svc-text svc-text--normal svc-text--bold">
        {this.model.addNewQuestionText}
      </span>

      {attachKey2click(<button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          questionTypeSelectorModel.action();
        }}
        className="svc-page__question-type-selector"
        title={this.model.addNewQuestionText}
      >
        <span className="svc-page__question-type-selector-icon">
          <SvgIcon
            iconName={questionTypeSelectorModel.iconName}
            size={24}
          ></SvgIcon>
        </span>
        <Popup model={questionTypeSelectorModel.popupModel}></Popup>
      </button>)}
    </div>);
  }
}

ReactElementFactory.Instance.registerElement("svc-page", (props) => {
  return React.createElement(CreatorSurveyPageComponent, props);
});
