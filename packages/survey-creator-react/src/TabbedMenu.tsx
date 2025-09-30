import * as React from "react";
import * as ReactDOM from "react-dom";
import { TabbedMenuItem, TabbedMenuContainer } from "survey-creator-core";
import { Base, ResponsivityManager } from "survey-core";
import { attachKey2click, ReactElementFactory, SurveyElementBase, SvgIcon } from "survey-react-ui";

export interface ITabbedMenuComponentProps {
  model: TabbedMenuContainer;
}

export class TabbedMenuComponent extends SurveyElementBase<
  ITabbedMenuComponentProps,
  any
> {
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
    const items = this.model.renderedActions.map((item) => <TabbedMenuItemWrapper item={item} key={item.renderedId} />);
    return (
      <div ref={this.rootRef} className="svc-tabbed-menu" role="tablist" style={this.model.getRootStyle()}>
        {items}
      </div>
    );
  }
  componentDidUpdate(prevProps: any, prevState: any): void {
    super.componentDidUpdate(prevProps, prevState);
    const container: HTMLDivElement = this.rootRef.current;
    if (!container) return;
    this.model.initResponsivityManager(container);
  }
  componentDidMount() {
    super.componentDidMount();
    const container: HTMLDivElement = this.rootRef.current;
    if (!container) return;
    this.model.initResponsivityManager(container);
  }
  componentWillUnmount() {
    this.model.resetResponsivityManager();
    super.componentWillUnmount();
  }
}

class TabbedMenuItemWrapper extends SurveyElementBase<
  any,
  any
> {
  private ref: React.RefObject<HTMLDivElement>;
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = { changed: 0 };
  }

  private get item(): TabbedMenuItem {
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
      <span key={this.item.id} className={css} ref={this.ref}>
        <div className="sv-action__content">
          {component}
        </div>
      </span>
    );
  }
  componentDidMount(): void {
    super.componentDidMount();
    this.item.updateModeCallback = (mode, callback) => {
      const update = () => {
        if (this.item.mode == mode) {
          this.setState({ changed: this.state.changed + 1 });
        } else {
          this.item.mode = mode;
        }
      };
      queueMicrotask(() => {
        if ((ReactDOM as any)["flushSync"]) {
          (ReactDOM as any)["flushSync"](() => {
            update();
          });
        } else {
          update();
        }
        queueMicrotask(() => {
          callback(mode, this.ref.current);
        });
      });
    };
    this.item.afterRender();
  }
  componentWillUnmount(): void {
    super.componentWillUnmount();
    this.item.updateModeCallback = undefined;
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
        onClick={() => item.doAction()}
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
