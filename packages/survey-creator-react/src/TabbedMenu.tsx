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
import { attachKey2click, ReactElementFactory, SurveyElementBase, SvgIcon } from "survey-react-ui";

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

  renderElement(): React.JSX.Element {
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

  renderElement(): React.JSX.Element {
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
  item: TabbedMenuItem;
}
export class TabbedMenuItemComponent extends SurveyElementBase<
  ITabbedMenuItemComponentProps,
  any
> {
  get item(): TabbedMenuItem {
    return this.props.item;
  }
  protected getStateElement(): Base {
    return this.item;
  }

  render(): React.JSX.Element {
    const item = this.item;
    return (attachKey2click(
      <div
        role="tab"
        id={"tab-" + item.id}
        aria-selected={item.active}
        aria-controls={"scrollableDiv-" + item.id}
        className={item.getRootCss()}
        onClick={() => item.action(item)}
      >
        {item.hasTitle ? <span className={item.getTitleCss()}>{item.title}</span> : null}
        {item.hasIcon ? <SvgIcon iconName={item.iconName} className={item.getIconCss()} size={"auto"} title={item.tooltip || item.title}></SvgIcon> : null}
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
