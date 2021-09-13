import { CreatorBase, IQuestionToolbox } from "@survey/creator";
import React, { CSSProperties } from "react";
import {
  Base,
  Action,
  VerticalResponsivityManager,
  SurveyModel
} from "survey-core";
import {
  attachKey2click,
  ReactElementFactory,
  SurveyElementBase,
  SvgIcon
} from "survey-react-ui";
import { SurveyCreatorToolboxTool } from "./ToolboxItem";
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
      ".svc-toolbox__tool:not(.sv-dots)>.sv-action__content",
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

  render(): JSX.Element {
    if (!this.toolbox.hasActions) return null;
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

  renderItems() {
    return this.toolbox.renderedActions.map((item: Action, itemIndex) =>
      <SurveyCreatorToolboxTool item={(item as any)} creator={this.creator} isCompact={this.toolbox.isCompact} key={"item" + itemIndex}></SurveyCreatorToolboxTool>
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
        attachKey2click(<div className="svc-toolbox__category-header" onClick={e => category.toggleState()}>
          <span className="svc-toolbox__category-title">{category.name}</span>
          <div className="svc-toolbox__category-header__controls">
            {(category.collapsed ?
              <SvgIcon className="svc-toolbox__category-header__button svc-string-editor__button--expand" size={16} iconName={"icon-expand"}></SvgIcon>
              :
              <SvgIcon className="svc-toolbox__category-header__button svc-string-editor__button--collapse" size={16} iconName={"icon-collapse"}></SvgIcon>
            )}
          </div>
        </div>);
    }
    let items = [];
    if (!category.collapsed) {
      items = category.items.map((item, itemIndex) => <SurveyCreatorToolboxTool item={(item as any)} creator={this.creator} isCompact={false} key={"item" + itemIndex}></SurveyCreatorToolboxTool>);
    }
    return (
      <div className="svc-toolbox__category" key={category.name}>
        {header}
        {items}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-toolbox", (props) => {
  return React.createElement(SurveyCreatorToolbox, props);
});
