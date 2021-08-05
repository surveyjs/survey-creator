import React from "react";
import { CSSProperties } from "react";
import { ITabbedMenuItem, TabbedMenuItem } from "@survey/creator";
import {
  Base,
  IAction,
  Action,
  ResponsivityManager,
  AdaptiveActionContainer
} from "survey-core";
import { attachKey2click, ReactElementFactory, SurveyElementBase } from "survey-react-ui";

export interface ITabbedMenuComponentProps {
  model: AdaptiveActionContainer<TabbedMenuItem, ITabbedMenuItem>;
}

export class TabbedMenuComponent extends SurveyElementBase<
  ITabbedMenuComponentProps,
  any
> {
  private manager: ResponsivityManager;
  private rootRef: React.RefObject<HTMLDivElement>;

  private get model() {
    return this.props.model;
  }

  protected getStateElement(): Base {
    return this.model;
  }

  constructor(props) {
    super(props);
    this.rootRef = React.createRef();
  }

  render(): JSX.Element {
    const items = this.model.actions.map((item) => this.renderItem(item));
    return (
      <div ref={this.rootRef} className="svc-tabbed-menu">
        {items}
      </div>
    );
  }
  renderItem(item: Action): JSX.Element {
    let css: string = "svc-tabbed-menu-item-container";
    if (item.css) {
      css += " " + item.css;
    }

    const style: CSSProperties = {
      visibility: item.isVisible ? "visible" : "hidden"
    };
    if (item.visible !== undefined && !item.visible) {
      style.display = "none";
    }

    const component = ReactElementFactory.Instance.createElement(
      item.component || "svc-tabbed-menu-item",
      { item: item }
    );

    return (
      <span key={item.id} className={css} style={style}>
        {component}
      </span>
    );
  }
  componentDidMount() {
    super.componentDidMount();
    const container: HTMLDivElement = this.rootRef.current;
    this.manager = new ResponsivityManager(
      container,
      this.model,
      "span.svc-tabbed-menu-item-container"
    );
  }
  componentWillUnmount() {
    this.manager.dispose();
    super.componentWillUnmount();
  }
}

export interface ITabbedMenuItemComponentProps {
  item: Action;
}
export class TabbedMenuItemComponent extends SurveyElementBase<
  ITabbedMenuItemComponentProps,
  any
> {
  get item(): Action {
    return this.props.item;
  }
  protected getStateElement(): Base {
    return this.item;
  }

  constructor(props: any) {
    super(props);
  }
  render(): JSX.Element {
    const item = this.item;

    let className: string = "svc-tabbed-menu-item";
    if (item.active) className += " svc-tabbed-menu-item--selected";
    if (item.enabled !== undefined && !item.enabled)
      className += " svc-tabbed-menu-item--disabled";
    let titleClassName: string =
      "svc-text svc-tabbed-menu-item__text svc-text--normal";
    if (item.active) titleClassName += " svc-text--bold";
    return attachKey2click(
      <div className={className} onClick={() => item.action(item)}>
        <span className={titleClassName}>{item.title}</span>
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-tabbed-menu-item",
  (props) => {
    return React.createElement(TabbedMenuItemComponent, props);
  }
);
export default TabbedMenuComponent;
