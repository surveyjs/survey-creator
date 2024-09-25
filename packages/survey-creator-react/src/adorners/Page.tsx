import * as React from "react";
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
  public componentDidUpdate(prevProps: any, prevState: any): void {
    super.componentDidUpdate(prevProps, prevState);
    if (!!this.rootRef?.current) {
      this.model.rootElement = this.rootRef.current;
    }
  }
  protected getUpdatedModelProps(): string[] {
    return ["creator", "page"];
  }
  protected getStateElement(): Base {
    return this.model;
  }
  componentDidMount() {
    super.componentDidMount();
    if (!!this.rootRef.current) {
      this.model.rootElement = this.rootRef.current;
    }
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
