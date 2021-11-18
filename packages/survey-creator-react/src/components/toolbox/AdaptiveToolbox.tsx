import React from "react";
import { VerticalResponsivityManager } from "survey-core";
import { ReactElementFactory } from "survey-react-ui";
import { SurveyCreatorToolboxTool } from "./ToolboxItem";
import { ISurveyCreatorToolboxProps, Toolbox } from "./Toolbox";

export class AdaptiveToolbox extends Toolbox {
  private manager: VerticalResponsivityManager;
  private rootRef: React.RefObject<HTMLDivElement>;

  constructor(props: ISurveyCreatorToolboxProps) {
    super(props);
    this.rootRef = React.createRef();
  }

  componentDidMount() {
    super.componentDidMount();
    const container = this.rootRef.current;
    if (!container) return;
    this.manager = new VerticalResponsivityManager(
      container,
      this.toolbox,
      ".svc-toolbox__tool:not(.sv-dots)>.sv-action__content",
      40
    );
  }
  componentWillUnmount() {
    this.manager && (this.manager.dispose());
    super.componentWillUnmount();
  }
  render(): JSX.Element {
    if (!this.toolbox.hasActions) return null;

    const className = "svc-toolbox" + (this.toolbox.isCompact ? " svc-toolbox--compact" : "");
    return (
      <div ref={this.rootRef} className={className}>
        <div className="svc-toolbox__container">
          {(this.toolbox.isCompact || this.toolbox.categories.length == 1) ?
            (<div className="svc-toolbox__category">
              {this.renderItems(this.toolbox.renderedActions, this.toolbox.isCompact)}
            </div>)
            : this.renderCategories()
          }
        </div>
      </div>
    );
  }

  renderItems(items: Array<any>, isCompact?: boolean) {
    return items.map((item, itemIndex) =>
      <SurveyCreatorToolboxTool item={(item as any)} creator={this.creator} isCompact={isCompact} key={"item" + itemIndex}></SurveyCreatorToolboxTool>
    );
  }

  protected renderCategoryContent(category: any): Array<any> {
    let items = [];
    if (!category.collapsed) {
      items = this.renderItems(category.items, false);
    }
    return items;
  }
}

ReactElementFactory.Instance.registerElement("svc-adaptive-toolbox", (props) => {
  return React.createElement(AdaptiveToolbox, props);
});
