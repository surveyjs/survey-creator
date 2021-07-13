import { CreatorBase } from "@survey/creator";
import React, { CSSProperties } from "react";
import {
  Base,
  Action,
  VerticalResponsivityManager,
  SurveyModel
} from "survey-core";
import {
  ReactElementFactory,
  SurveyElementBase,
  SvgIcon
} from "survey-react-ui";
interface ISurveyCreatorToolboxProps {
  creator: CreatorBase<SurveyModel>;
}

export class SurveyCreatorToolbox extends SurveyElementBase<
  ISurveyCreatorToolboxProps,
  any
> {
  private manager: VerticalResponsivityManager;
  private rootRef: React.RefObject<HTMLDivElement>;

  constructor(props: ISurveyCreatorToolboxProps) {
    super(props);

    this.rootRef = React.createRef();
  }
  public get creator() {
    return this.props.creator;
  }
  public get toolbox() {
    return this.creator.toolbox;
  }

  componentDidMount() {
    super.componentDidMount();
    const container = this.rootRef.current;
    this.manager = new VerticalResponsivityManager(
      container,
      this.toolbox,
      "div.svc-toolbox__tool",
      40
    );
  }
  componentWillUnmount() {
    this.manager.dispose();
    super.componentWillUnmount();
  }

  protected getStateElement(): Base {
    return this.toolbox;
  }

  get hasItems(): boolean {
    return this.toolbox.hasItems;
  }

  render(): JSX.Element {
    if (!this.hasItems) return null;
    if (this.toolbox.isCompact || this.toolbox.categories.length == 1) {
      const items = this.renderItems();
      return (
        <div ref={this.rootRef} className={"svc-toolbox" + (this.toolbox.isCompact ? " svc-toolbox--compact" : "")}>
          <div className="svc-toolbox__container"><div className="svc-toolbox__category">{items}</div></div>
        </div>
      );
    } else {
      const categories = this.renderCategories();
      return (
        <div ref={this.rootRef} className={"svc-toolbox"}>
          <div className="svc-toolbox__container">{categories}</div>
        </div>
      );
    }
  }

  renderToolboxItem(item: Action, isCompact: boolean): JSX.Element {
    const className = "svc-toolbox__tool " + item.css;
    const style: CSSProperties = {
      visibility: item.isVisible === undefined || item.isVisible ? "visible" : "hidden"
    };
    if (item.visible !== undefined && !item.visible) {
      style.display = "none";
    }
    const itemComponent = ReactElementFactory.Instance.createElement(
      item.component || "svc-toolbox-item",
      {
        item: item,
        creator: this.creator,
        isCompact: isCompact
      }
    );
    return (
      <div className={className} style={style} key={item.id}>
        {(isCompact && item.needSeparator) ? (
          <div className="svc-toolbox__category-separator"></div>
        ) : null}
        {itemComponent}
      </div>
    );
  }
  renderItems() {
    return this.toolbox.actions.map((item: Action) =>
      this.renderToolboxItem(item, this.toolbox.isCompact)
    );
  }
  renderCategories() {
    return this.toolbox.categories.map((category) =>
      this.renderToolboxCategory(category)
    );
  }
  renderToolboxCategory(category: any): JSX.Element {
    let header = null;
    if (this.toolbox.categories.length > 1) {
      header = 
      <div className="svc-toolbox__category-header" onClick={e => category.toggleState()}>
          <span className="svc-toolbox__category-title">{category.name}</span>
          <div className="svc-toolbox__category-header__controls">
          {( category.collapsed ?
            <SvgIcon className="svc-toolbox__category-header__button svc-string-editor__button--expand" size={16} iconName={"icon-expand"}></SvgIcon>
            :
            <SvgIcon className="svc-toolbox__category-header__button svc-string-editor__button--collapse" size={16} iconName={"icon-collapse"}></SvgIcon>
            )}
          </div>
      </div>;
    }
    let items = [];
    if (!category.collapsed) {
      items = category.items.map((item) => this.renderToolboxItem(item, false));
    }
    return (
      <div className="svc-toolbox__category" key={category.name}>
        {header}
        {items}
      </div>
    );
  }
}
