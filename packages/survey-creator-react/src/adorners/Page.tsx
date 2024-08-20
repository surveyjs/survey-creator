import { Action, Base, IAction, PageModel, SurveyModel } from "survey-core";
import {
  attachKey2click,
  Popup,
  SurveyActionBar,
  ReactElementFactory,
  SurveyPage,
  SvgIcon,
  SurveyElementBase
} from "survey-react-ui";
import { CreatorModelElement } from "../ModelElement";
import {
  SurveyCreatorModel,
  PageAdorner,
  SurveyHelper,
  toggleHovered
} from "survey-creator-core";
import * as React from "react";
import { ReactMouseEvent } from "../events";

interface ICreatorSurveyPageComponentProps {
  creator: SurveyCreatorModel;
  survey: SurveyModel;
  page: PageModel;
}

export class CreatorSurveyPageComponent extends CreatorModelElement<
  ICreatorSurveyPageComponentProps,
  any
> {
  private model: PageAdorner;
  private rootRef: React.RefObject<HTMLDivElement>;
  constructor(props: ICreatorSurveyPageComponentProps) {
    super(props);
    this.rootRef = React.createRef();
  }
  protected createModel(props: any): void {
    if (this.model) {
      this.model.dispose();
    }
    this.model = new PageAdorner(
      props.creator,
      props.page
    );
  }
  protected getUpdatedModelProps(): string[] {
    return ["creator", "page"];
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
    this.model.onPageSelectedCallback = undefined;
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
        onDoubleClick={e => this.model.dblclick(e.nativeEvent)}
        onMouseLeave={(e) => this.model.hover(e.nativeEvent, e.currentTarget)}
        onMouseOver={(e) => this.model.hover(e.nativeEvent, e.currentTarget)}
      >
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderPlaceholder()}
        {this.renderFooter()}
      </div>)
    );
  }
  protected renderPlaceholder(): JSX.Element {
    if (!this.model.showPlaceholder) return null;
    return (
      <div className="svc-page__placeholder_frame">
        <div className="svc-panel__placeholder_frame">
          <div className="svc-panel__placeholder">{this.model.placeholderText}</div>
        </div>
      </div>
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
    return <SurveyActionBar model={this.model.footerActionsBar}></SurveyActionBar>;
  }
}

ReactElementFactory.Instance.registerElement("svc-page", (props) => {
  return React.createElement(CreatorSurveyPageComponent, props);
});

class AddQuestionButtonComponent extends SurveyElementBase<{ item: Action }, any> {
  public get model() {
    return this.props.item.data;
  }
  protected renderElement(): JSX.Element {
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
            title={this.model.addNewQuestionText}
          ></SvgIcon>
        </span>
        <Popup model={questionTypeSelectorModel.popupModel}></Popup>
      </button>)}
    </div>);
  }
}

ReactElementFactory.Instance.registerElement("svc-add-new-question-btn", (props) => {
  return React.createElement(AddQuestionButtonComponent, props);
});