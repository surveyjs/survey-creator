import {
  Base,
  IAction,
  SurveyModel,
  PageModel,
  unwrap
} from "survey-core";
import {
  SurveyElementBase,
  SvgIcon,
  Popup,
  attachKey2click
} from "survey-react-ui";
import { CreatorBase, getLocString, PageNavigatorViewModel } from "@survey/creator";
import React from "react";

interface ISurveyPageNavigatorProps {
  creator: CreatorBase<SurveyModel>;
  pages: Array<PageModel>;
}

export class SurveyPageNavigator extends SurveyElementBase<
  ISurveyPageNavigatorProps,
  any
> {
  private model: PageNavigatorViewModel<SurveyModel>;
  private containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: ISurveyPageNavigatorProps) {
    super(props);
    this.containerRef = React.createRef();
    this.model = new PageNavigatorViewModel<SurveyModel>(
      props.creator.pagesController
    );
  }

  protected getStateElement(): Base {
    return this.model;
  }
  componentDidMount() {
    super.componentDidMount();
    const el = this.containerRef.current as HTMLDivElement;
    if (!!el) {
      const self = this;
      el.parentElement.parentElement.onscroll = function (this: GlobalEventHandlers, ev: Event) {
        return self.model.onContainerScroll(ev.currentTarget as HTMLDivElement);
      }
    }
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    const el = this.containerRef.current;
    if (!!el) {
      el.parentElement.parentElement.onscroll = undefined;
    }
    this.model.dispose();
  }
  renderElement(): JSX.Element {
    let className = "svc-page-navigator__selector";
    if (this.model.isPopupOpened)
      className += " svc-page-navigator__selector--opened";
    return (
      <div className="svc-page-navigator" ref={this.containerRef} style={{ display: this.model.visible ? "flex" : "none" }}>
        {attachKey2click(<div
          className={className}
          onClick={() => this.model.togglePageSelector()}
          title={this.model.pageSelectorCaption}
        >
          <SvgIcon
            className="svc-page-navigator__navigator-icon"
            iconName={this.model.icon}
            size={22}
          ></SvgIcon>

          <Popup
            model={this.model.popupModel}
          //className="svc-page-navigator__popup"
          ></Popup>
        </div>)}
        {this.model.items.map((item) => (
          <SurveyPageNavigatorItem
            key={item.id}
            item={item}
          ></SurveyPageNavigatorItem>
        ))}
      </div>
    );
  }
}
export class SurveyPageNavigatorItem extends SurveyElementBase<any, any> {
  constructor(props: IAction) {
    super(props);
  }
  protected getStateElement(): Base {
    return this.props.item as Base;
  }
  renderElement(): JSX.Element {
    const item = this.props.item;
    let className: string = "svc-page-navigator-item-content";
    if (unwrap(item.active)) {
      className += " svc-page-navigator-item--selected";
    }
    if (unwrap(item.disabled)) {
      className += " svc-page-navigator-item--disabled";
    }
    return (
      <div className="svc-page-navigator-item">
        {attachKey2click(<div
          className={className}
          onClick={() => item.action(item)}
        >
          <div className="svc-page-navigator-item__dot" title={item.title}></div>
          <div className="svc-page-navigator-item__banner svc-item__banner">
            <span className="svc-text svc-text--small svc-text--bold">{item.title}</span>
            <span className="svc-page-navigator-item__dot"></span>
          </div>
        </div>)}
      </div>
    );
  }
}
