import * as Survey from "survey-react";
import {
  Base,
  SurveyElementBase,
  SurveyModel,
  SvgIcon,
  Popup,
  PageModel,
  unwrap,
} from "survey-react";
import { CreatorBase, PageNavigatorViewModel } from "@survey/creator";
import React from "react";

interface ISurveyPageNavigatorProps {
  creator: CreatorBase<Survey.Model>;
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
      props.creator.pagesController as any
    );
    const pageItems = this.props.pages.map((page: PageModel) => {
      return this.model.createActionBarItem(page as any);
    });
    this.model.setItems(pageItems);
  }

  protected getStateElement(): Base {
    return this.model as any;
  }

  render(): JSX.Element {
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
            model={this.model.popupModel as any}
            //className="svc-page-navigator__popup"
          ></Popup>
        </div>
        {this.model.items.map((item) => this.renderPageNavigatorItem(item))}
      </div>
    );
  }
  renderPageNavigatorItem(item): JSX.Element {
    let className: string = "svc-page-navigator-item-content";
    if (unwrap(item.active)) {
      className += " svc-page-navigator-item--selected";
    }
    if (unwrap(item.disabled)) {
      className += " svc-page-navigator-item--disabled";
    }
    return (
      <div key={item.id} className="svc-page-navigator-item">
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
