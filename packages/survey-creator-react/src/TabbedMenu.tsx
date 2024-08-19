import * as React from "react";
import { CSSProperties } from "react";
import { ITabbedMenuItem, TabbedMenuItem, TabbedMenuContainer } from "survey-creator-core";
import {
  Base,
  IAction,
  Action,
  ResponsivityManager,
  AdaptiveActionContainer
} from "survey-core";
import { attachKey2click, ReactElementFactory, SurveyElementBase } from "survey-react-ui";

export interface ITabbedMenuComponentProps {
  model: TabbedMenuContainer;
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

  renderElement(): JSX.Element {
    const items = this.model.renderedActions.map((item) => <TabbedMenuItemWrapper item={item} key={item.id} />);
    return (
      <div ref={this.rootRef} className="svc-tabbed-menu">
        {items}
      </div>
    );
  }

  componentDidMount() {
    super.componentDidMount();
    const container: HTMLDivElement = this.rootRef.current;
    if (!container) return;
    this.manager = new ResponsivityManager(
      container,
      this.model,
      ".svc-tabbed-menu-item-container:not(.sv-dots)>.sv-action__content"
    );
  }
  componentWillUnmount() {
    this.manager && (this.manager.dispose());
    super.componentWillUnmount();
  }
}

class TabbedMenuItemWrapper extends SurveyElementBase<
  any,
  any
> {

  private get item() {
    return this.props.item;
  }

  protected getStateElement(): Base {
    return this.item;
  }

  renderElement(): JSX.Element {
    let css: string = "svc-tabbed-menu-item-container";
    if (this.item.css) {
      css += " " + this.item.css;
    }
    css += (!this.item.isVisible ? " sv-action--hidden" : "");

    const component = ReactElementFactory.Instance.createElement(
      this.item.component || "svc-tabbed-menu-item",
      { item: this.item }
    );

    return (
      <span key={this.item.id} className={css}>
        <div className="sv-action__content">
          {component}
        </div>
      </span>
    );
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

  render(): JSX.Element {
    const item = this.item;
    let className: string = "svc-tabbed-menu-item";
    if (item.active) className += " svc-tabbed-menu-item--selected";
    if (item.enabled !== undefined && !item.enabled)
      className += " svc-tabbed-menu-item--disabled";
    let titleClassName: string =
      "svc-text svc-tabbed-menu-item__text svc-text--normal";
    if (item.active) titleClassName += " svc-text--bold";

    return (attachKey2click(
      <div className={className} onClick={() => item.action(item)}>
        <span className={titleClassName}>{item.title}</span>
      </div>
    )
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
