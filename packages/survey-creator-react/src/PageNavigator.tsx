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
  componentDidMount() {
    super.componentDidMount();
    if (this.props.pageEditMode !== "bypage") {
      const el = this.containerRef.current as HTMLDivElement;
      this.model.attachToUI(el);
    }
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.model.stopItemsContainerHeightObserver();
    this.model.setScrollableContainer(undefined);
  }
  renderElement(): React.JSX.Element {
    let className = "svc-page-navigator__selector svc-page-navigator__button";
    if (this.model.isPopupOpened)
      className += " svc-page-navigator__button--pressed";
    return (
      <div className="svc-page-navigator" ref={this.containerRef} style={{ display: this.model.visible ? "flex" : "none" }}>
        <div>
          {attachKey2click(<div
            role="button"
            className={className}
            onClick={() => this.model.togglePageSelector()}
            title={this.model.pageSelectorCaption}
          >
            <SvgIcon
              className="svc-page-navigator__button-icon"
              iconName={this.model.icon}
              size={"auto"}
              title={this.model.pageSelectorCaption}
            ></SvgIcon>
          </div>)}
          <Popup
            model={this.model.popupModel}
          //className="svc-page-navigator__popup"
          ></Popup>
        </div>
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
  renderElement(): React.JSX.Element {
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
          role="button"
          className={className}
          onClick={(e) => {
            item.action(item);
            e.stopPropagation();
          }}
        >
          <div className="svc-page-navigator-item__dot" title={item.title}><div className="svc-page-navigator-item__dot-content"></div></div>
          <div className="svc-page-navigator-item__banner">
            <span className="svc-page-navigator-item__text">{item.title}</span>
            <span className="svc-page-navigator-item__dot"><span className="svc-page-navigator-item__dot-content"></span></span>
          </div>
        </div>)}
      </div>
    );
  }
}
