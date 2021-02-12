import React, { CSSProperties } from "react";
//import { ImplementorBase } from "survey-knockout";
import {
  AdaptiveActionBarItemWrapper,
  AdaptiveElement,
  Base,
  IActionBarItem,
  ReactElementFactory,
  SurveyElementBase,
} from "survey-react";

class TabbedMenuComponent extends SurveyElementBase {
  private adaptiveElement = new AdaptiveElement();

  protected getStateElement(): Base {
    return this.adaptiveElement;
  }

  constructor(props) {
    super(props);
    this.adaptiveElement.items = this.props.items.map(
      (item: IActionBarItem) => {
        return new AdaptiveActionBarItemWrapper(this.adaptiveElement, item);
      }
    );
  }

  render(): JSX.Element {
    const items = this.adaptiveElement.items.map((item) =>
      this.renderItem(item)
    );
    return <>{items}</>;
  }
  renderItem(item: AdaptiveActionBarItemWrapper): JSX.Element {
    let css: string = "svc-tabbed-menu-item-container";
    if (item.css) {
      css += " " + item.css;
    }

    const style: CSSProperties = {
      visibility: item.isVisible ? "visible" : "hidden",
    };
    if (item.visible !== undefined && !item.visible) {
      style.display = "none";
    }

    const componentName: string = item.component || "svc-tabbed-menu-item";
    const component = ReactElementFactory.Instance.createElement(
      componentName,
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
}
class TabbedMenuItemComponent extends SurveyElementBase {
  get item(): AdaptiveActionBarItemWrapper {
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
    let titleClassName: string = "svc-text svc-text--normal";
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
