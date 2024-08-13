import {
  Base,
  IAction,
  unwrap
} from "survey-core";
import {
  SvgIcon,
  Popup,
  attachKey2click
} from "survey-react-ui";
import { PageNavigatorViewModel, PagesController } from "survey-creator-core";
import * as React from "react";
import { CreatorModelElement } from "./ModelElement";

interface ISurveyPageNavigatorProps {
  pagesController: PagesController;
  pageEditMode: string;
}

export class SurveyPageNavigator extends CreatorModelElement<
  ISurveyPageNavigatorProps,
  any
> {
  private model: PageNavigatorViewModel;
  private containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: ISurveyPageNavigatorProps) {
    super(props);
    this.containerRef = React.createRef();
  }
  protected createModel(props: any): void {
    if (this.model) {
      this.model.dispose();
    }
    this.model = new PageNavigatorViewModel(
      props.pagesController,
      props.pageEditMode
    );
  }
  protected getUpdatedModelProps(): string[] {
    return ["pagesController", "pageEditMode"];
  }
  protected getStateElement(): Base {
    return this.model;
  }
  private get scrollableContainer(): HTMLElement {
    const el = this.containerRef.current as HTMLDivElement;
    if (!!el) {
      const self = this;
      return el.parentElement.parentElement.parentElement;
    }
    return el;
  }
  componentDidMount() {
    super.componentDidMount();
    if (this.props.pageEditMode !== "bypage") {
      const el = this.containerRef.current as HTMLDivElement;
      if (!!el) {
        const self = this;
        el.parentElement.parentElement.parentElement.onscroll = function (this: GlobalEventHandlers, ev: Event) {
          return self.model.onContainerScroll(ev.currentTarget as HTMLDivElement);
        };
        self.model.setItemsContainer(el.parentElement as HTMLDivElement);
        self.model.setScrollableContainer(el.parentElement.parentElement.parentElement as HTMLDivElement);
      }
    }
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    const el = this.containerRef.current;
    if (!!el) {
      el.parentElement.parentElement.parentElement.onscroll = undefined;
    }
    this.model.stopItemsContainerHeightObserver();
    this.model.setScrollableContainer(undefined);
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
            size={24}
            title={this.model.pageSelectorCaption}
          ></SvgIcon>

          <Popup
            model={this.model.popupModel}
          //className="svc-page-navigator__popup"
          ></Popup>
        </div>)}
        <div>
          {this.model.visibleItems.map((item) => (
            <SurveyPageNavigatorItem
              key={item.id}
              item={item}
            ></SurveyPageNavigatorItem>
          ))}
        </div>
      </div>
    );
  }
}
export class SurveyPageNavigatorItem extends CreatorModelElement<any, any> {
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
          onClick={(e) => {
            item.action(item);
            e.stopPropagation();
          }}
        >
          <div className="svc-page-navigator-item__dot" title={item.title}></div>
          <div className="svc-page-navigator-item__banner">
            <span className="svc-text svc-text--small svc-text--bold">{item.title}</span>
            <span className="svc-page-navigator-item__dot"></span>
          </div>
        </div>)}
      </div>
    );
  }
}
