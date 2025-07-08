import * as React from "react";
import { Action, Base, IAction, PageModel, SurveyModel } from "survey-core";
import {
  attachKey2click,
  Popup,
  SurveyActionBar,
  ReactElementFactory,
  SurveyPage,
  SvgIcon,
  LoadingIndicatorComponent
} from "survey-react-ui";
import { CreatorModelElement } from "../ModelElement";
import {
  SurveyCreatorModel,
  PageAdorner,
  SurveyHelper,
  toggleHovered
} from "survey-creator-core";
import { ReactMouseEvent } from "../events";

interface ICreatorSurveyPageComponentProps {
  creator: SurveyCreatorModel;
  survey: SurveyModel;
  page: PageModel;
  isGhost: boolean;
}
const PageElementContent = React.memo(({ page, survey, creator }: {
  page: PageModel,
  survey: SurveyModel,
  creator: SurveyCreatorModel,
}) => {
  return <SurveyPage page={page} survey={survey} creator={creator} />;
});
PageElementContent.displayName = "PageElementContent";

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
  protected createModel(props: ICreatorSurveyPageComponentProps): void {
    if (this.model) {
      this.model.attachToUI(props.page, this.rootRef.current);
    }
    this.model = this.createPageAdorner(props.creator, props.page);
    this.model.isGhost = this.props.isGhost;
  }
  protected createPageAdorner(creator: SurveyCreatorModel, page: PageModel): PageAdorner {
    return new PageAdorner(creator, page);
  }
  shouldComponentUpdate(nextProps: any, nextState: any): boolean {
    const res = super.shouldComponentUpdate(nextProps, nextState);
    if (this.model) {
      this.model.isGhost = this.props.isGhost;
    }
    return res;
  }
  public componentDidUpdate(prevProps: any, prevState: any): void {
    super.componentDidUpdate(prevProps, prevState);
  }
  protected getUpdatedModelProps(): string[] {
    return ["creator", "page"];
  }
  protected getStateElement(): Base {
    return this.model;
  }
  componentDidMount() {
    super.componentDidMount();
    this.model.attachToUI(this.props.page, this.rootRef.current);
    this.model.isGhost = this.props.isGhost;
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.model.detachFromUI();
  }
  protected canRender(): boolean {
    return super.canRender();
  }
  renderElement(): React.JSX.Element {
    if (!this.props.page) return null;
    return (
      attachKey2click(<div
        ref={this.rootRef}
        id={this.props.page.id}
        data-sv-drop-target-survey-page={this.model.dropTargetName}
        className={"svc-page__content " + this.model.css}
        onClick={(e) => {
          return this.model.select(this.model, new ReactMouseEvent(e));
        }}
        onDoubleClick={e => this.model.dblclick(e.nativeEvent)}
        onMouseLeave={(e) => this.model.hover(e.nativeEvent, e.currentTarget)}
        onMouseOver={(e) => this.model.hover(e.nativeEvent, e.currentTarget)}
      >
        <div className="svc-question__drop-indicator svc-question__drop-indicator--top"></div>
        <div className="svc-question__drop-indicator svc-question__drop-indicator--bottom"></div>
        {this.renderContent()}
        {this.renderPlaceholder()}
        {this.renderHeader()}
        {this.renderFooter()}
      </div>)
    );
  }
  protected renderPlaceholder(): React.JSX.Element {
    if (!this.model.showPlaceholder) return null;
    return (
      <div className="svc-page__placeholder_frame">
        <div className="svc-panel__placeholder_frame">
          <div className="svc-panel__placeholder">{this.model.placeholderText}</div>
        </div>
      </div>
    );
  }
  protected renderContent(): React.JSX.Element {
    if (!this.model.needRenderContent) {
      return <div className={"svc-page__loading-content"}><LoadingIndicatorComponent></LoadingIndicatorComponent></div>;
    }
    return (
      <PageElementContent
        page={this.props.page}
        survey={this.props.survey}
        creator={this.props.creator}
      />
    );
  }
  protected renderHeader(): React.JSX.Element {
    const actions = (<div className="svc-page__content-actions">
      <SurveyActionBar model={this.model.actionContainer}></SurveyActionBar>
      {(this.model.topActionContainer.hasActions ? <SurveyActionBar model={this.model.topActionContainer}></SurveyActionBar> : null)}
    </div>);
    if (this.model.isGhost || !this.model.allowDragging) {
      return actions;
    }
    return (
      <div className={"svc-question__drag-area"}
        onPointerDown={(event: any) => this.model.onPointerDown(event)}
      >
        <SvgIcon className="svc-question__drag-element" size={"auto"} iconName={"icon-drag-area-indicator_24x16"}></SvgIcon>
        {actions}
      </div>
    );
  }
  protected renderFooter(): React.JSX.Element {
    return <SurveyActionBar model={this.model.footerActionsBar}></SurveyActionBar>;
  }
}

ReactElementFactory.Instance.registerElement("svc-page", (props) => {
  return React.createElement(CreatorSurveyPageComponent, props);
});
