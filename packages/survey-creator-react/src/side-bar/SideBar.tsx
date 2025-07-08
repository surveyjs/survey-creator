import * as React from "react";
import { SidebarPageModel, SidebarModel } from "survey-creator-core";
import { Base } from "survey-core";
import { SurveyElementBase, ReactQuestionFactory, ReactElementFactory } from "survey-react-ui";

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

  renderElement(): React.JSX.Element {
    const style = { display: this.model.renderRoot ? "" : "none" };
    const containerStyle = { display: this.model.renderContainer ? "" : "none" };
    const items = this.model.pages.map((page) => <SidebarPage page={page} key={page.id} />);
    const headerArea = ReactElementFactory.Instance.createElement(this.model.header.component, { model: this.model.header.componentModel });
    let sideArea = null;
    if (this.model.sideAreaComponentName) {
      sideArea = ReactElementFactory.Instance.createElement(this.model.sideAreaComponentName, { model: this.model.sideAreaComponentData });
    }

    return (
      <div className={this.model.rootCss} style={style}>
        <div className="svc-side-bar__shadow" onClick={() => this.model.collapseSidebar()} style={containerStyle}></div>
        <div className="svc-flex-row svc-side-bar__wrapper">
          <div className="svc-side-bar__container-wrapper" style={containerStyle}>
            <div ref={this.containerRef} className="svc-side-bar__container">
              {headerArea}
              <div className="svc-side-bar__container-content">{items}</div>
            </div>
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

  renderElement(): React.JSX.Element {
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