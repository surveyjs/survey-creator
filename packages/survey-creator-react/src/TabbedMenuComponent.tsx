import React from "react";
import { CSSProperties } from "react";
//import { ImplementorBase } from "survey-knockout";
import {
  Base,
  IAction,
  Action,
  ResponsivityManager,
  AdaptiveActionContainer
} from "survey-core";
import { ReactElementFactory, SurveyElementBase } from "survey-react-ui";

interface ITabbedMenuComponentProps {
  items: Array<IAction>;
}

class TabbedMenuComponent extends SurveyElementBase<
  ITabbedMenuComponentProps,
  any
> {
  private adaptiveElement = new AdaptiveActionContainer();
  private manager: ResponsivityManager;
  private rootRef: React.RefObject<HTMLDivElement>;

  protected getStateElement(): Base {
    return this.adaptiveElement;
  }

  constructor(props) {
    super(props);
    this.adaptiveElement.actions = this.props.items.map((item: IAction) => {
      return new Action(item);
    });
    this.rootRef = React.createRef();
    this.adaptiveElement.dotsItemPopupModel.horizontalPosition = "right";
  }

  render(): JSX.Element {
    const items = this.adaptiveElement.actions.map((item) =>
      this.renderItem(item)
    );
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
    /*
    <span
      class="svc-tabbed-menu-item-container"
      data-bind="css: $data.css, style: { visibility : $data.isVisible? 'visible': 'hidden' }, visible: $data.visible === undefined || $data.visible"
    >
      <!-- ko component: {name: $data.component || 'svc-tabbed-menu-item', params: { item: $data } } -->
      <!-- /ko -->
    </span>
     */
  }
  componentDidMount() {
    super.componentDidMount();
    const container: HTMLDivElement = this.rootRef.current;
    this.manager = new ResponsivityManager(
      container,
      this.adaptiveElement,
      "span.svc-tabbed-menu-item-container"
    );
  }
  componentWillUnmount() {
    this.manager.dispose();
    super.componentWillUnmount();
  }
}

interface ITabbedMenuItemComponentProps {
  item: Action;
}
class TabbedMenuItemComponent extends SurveyElementBase<
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
    return (
      <div className={className} onClick={() => item.action(item)}>
        <span className={titleClassName}>{item.title}</span>
      </div>
    );
    /*
<div
  class="svc-tabbed-menu-item"
  data-bind="click: action, css: { 'svc-tabbed-menu-item--selected': active, 'svc-tabbed-menu-item--disabled': disabled }"
>
  <span
    class="svc-text svc-text--normal"
    data-bind="text: title, css: { 'svc-text--bold': active }"
  ></span>
</div>
     */
  }
}

ReactElementFactory.Instance.registerElement(
  "svc-tabbed-menu-item",
  (props) => {
    return React.createElement(TabbedMenuItemComponent, props);
  }
);
export default TabbedMenuComponent;
