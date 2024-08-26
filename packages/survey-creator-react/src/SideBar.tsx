import * as React from "react";
import { SidebarPageModel, SidebarModel } from "survey-creator-core";
import { Base, CssClassBuilder, getActionDropdownButtonTarget } from "survey-core";
import { SurveyElementBase, SurveyActionBar, ReactQuestionFactory, ReactElementFactory, Popup } from "survey-react-ui";

interface ISidebarComponentProps {
  model: SidebarModel;
}

export class SidebarComponent extends SurveyElementBase<ISidebarComponentProps, any> {
  private containerRef: React.RefObject<HTMLDivElement>;

  get model(): SidebarModel {
    return this.props.model;
  }

  constructor(props: ISidebarComponentProps) {
    super(props);
    this.containerRef = React.createRef();
  }

  protected getStateElement(): Base {
    return this.model;
  }

  componentDidMount() {
    super.componentDidMount();
    this.model.initResizeManager(this.containerRef.current);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.model.resetResizeManager();
  }
  public canRender(): boolean {
    if (!this.model) return false;
    return super.canRender();
  }

  renderDefaultHeader(): JSX.Element {
    const headerText = !!this.model.headerText ? <div className="svc-side-bar__container-title">{this.model.headerText}</div> : null;
    return (
      <div className="svc-side-bar__container-header">
        <div className="svc-side-bar__container-actions">
          <SurveyActionBar model={(this.model as any).toolbar}></SurveyActionBar>
        </div>
        {headerText}
      </div>);
  }

  renderElement(): JSX.Element {
    const style = { display: !this.model.visible ? "none" : "" };
    const className = "svc-side-bar" + (this.model.flyoutPanelMode ? " svc-flyout-side-bar" : "");
    const items = this.model.pages.map((page) => <SidebarPage page={page} key={page.id} />);
    let sideArea = null;
    if (this.model.sideAreaComponentName) {
      sideArea = ReactElementFactory.Instance.createElement(this.model.sideAreaComponentName, { model: this.model.sideAreaComponentData });
    }

    let headerArea = null;
    if (this.model.headerComponentName) {
      headerArea = ReactElementFactory.Instance.createElement(this.model.headerComponentName, { model: this.model.headerComponentData });
    } else {
      headerArea = this.renderDefaultHeader();
    }

    return (
      <div className={className} style={{ display: !this.model.hasVisiblePages ? "none" : "" }}>
        <div className="svc-side-bar__shadow" onClick={() => this.model.collapseSidebar()}></div>
        <div className="svc-flex-row svc-side-bar__wrapper">
          <div ref={this.containerRef} style={style} className="svc-side-bar__container">
            {headerArea}
            <div className="svc-side-bar__container-content">{items}</div>
          </div>
          {sideArea}
        </div>
      </div>
    );
  }
}

class SidebarPage extends SurveyElementBase<any, any> {
  private get page(): SidebarPageModel {
    return this.props.page;
  }

  protected getStateElement(): Base {
    return this.page;
  }

  renderElement(): JSX.Element {
    if (!this.page.visible) return null;

    const component = ReactElementFactory.Instance.createElement(this.page.componentName, { model: this.page.componentData });

    return component;
  }
}

ReactQuestionFactory.Instance.registerQuestion("svc-side-bar-page", (props) => {
  return React.createElement(SidebarPage, props);
});

export default SidebarComponent;

ReactElementFactory.Instance.registerElement("svc-side-bar", (props) => {
  return React.createElement(SidebarComponent, props);
});

class SideBarPropertyGridHeader extends React.Component<any, any> {
  render(): React.ReactNode {
    const buttonClassName = new CssClassBuilder()
      .append("Button_22233_58736")
      .append("svc-menu-button--pressed", this.props.model.objectSelectionAction.pressed)
      .append("svc-property-grid-button-with-subtitle", !!this.props.model.objectSelectionAction.tooltip)
      .toString();

    const containerClassName = new CssClassBuilder()
      .append("Container_22233_64491")
      .append("svc-property-grid-container-with-subtitle", !!this.props.model.objectSelectionAction.tooltip)
      .toString();

    const tooltip = !!this.props.model.objectSelectionAction.tooltip ? <span className="Text_2_22233_58740">{this.props.model.objectSelectionAction.tooltip}</span> : null;
    return (
      <div className="Header_21220_2028692">
        <div className={containerClassName}>
          <div className="TitleMenuButton_22233_64492" onClick={() => this.props.model.objectSelectionAction.action()}>
            <div className={buttonClassName}>
              <div className="Caption_22233_58737">
                <span className="Text_1_22233_58738">{this.props.model.objectSelectionAction.title}</span>
                {tooltip}
              </div>
            </div>
            <Popup model={this.props.model.objectSelectionAction.popupModel} getTarget={getActionDropdownButtonTarget}></Popup>
          </div>
        </div>
      </div >
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-side-bar-property-grid-header", (props) => {
  return React.createElement(SideBarPropertyGridHeader, props);
});