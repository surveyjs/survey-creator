import {
  Base,
  SurveyModel,
  PageModel,
  unwrap
} from "survey-core";
import {
  SurveyElementBase,
  SvgIcon,
  Popup,
  IActionBarItem
} from "survey-react-ui";
import { CreatorBase, PageNavigatorViewModel } from "@survey/creator";
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
  constructor(props: ISurveyPageNavigatorProps) {
    super(props);
    this.model = new PageNavigatorViewModel<SurveyModel>(
      props.creator.pagesController
    );
  }

  protected getStateElement(): Base {
    return this.model;
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.model.dispose();
  }
  renderElement(): JSX.Element {
    if (!this.model.visible) {
      return null;
    }
    return (
      <div className="svc-page-navigator">
        <div
          className="svc-page-navigator__selector"
          onClick={() => this.model.togglePageSelector()}
          title={"text"}
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
        </div>
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
  constructor(props: IActionBarItem) {
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
        <div
          className={className}
          onClick={() => item.action(item)}
          title={item.title}
        >
          <div className="svc-page-navigator-item__dot"></div>
          <div className="svc-page-navigator-item__banner">
            <span className="svc-text svc-text--normal">{item.title}</span>
            <span className="svc-page-navigator-item__dot"></span>
          </div>
        </div>
      </div>
    );
  }
}
