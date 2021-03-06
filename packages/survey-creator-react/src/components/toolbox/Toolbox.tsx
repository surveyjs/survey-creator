import {
  CreatorBase,
  editorLocalization,
  getLocString,
  IQuestionToolboxItem,
  QuestionToolbox
} from "@survey/creator";
import React, { CSSProperties } from "react";
import { ToolboxItemViewModel } from "@survey/creator";
import {
  AdaptiveActionBarItemWrapper,
  AdaptiveElement,
  Base,
  VerticalResponsivityManager,
  SurveyModel
} from "survey-core";
import {
  ReactElementFactory,
  SurveyElementBase,
  SvgIcon
} from "survey-react-ui";
interface ISurveyCreatorToolboxProps {
  toolbox: QuestionToolbox;
  creator: CreatorBase<SurveyModel>;
}

export class SurveyCreatorToolbox extends SurveyElementBase<
  ISurveyCreatorToolboxProps,
  any
> {
  private adaptiveElement = new AdaptiveElement();
  private manager: VerticalResponsivityManager;
  private rootRef: React.RefObject<HTMLDivElement>;

  constructor(props: ISurveyCreatorToolboxProps) {
    super(props);

    this.adaptiveElement.dotsItemPopupModel.horizontalPosition = "right";
    this.adaptiveElement.dotsItemPopupModel.verticalPosition = "top";
    this.adaptiveElement.invisibleItemSelected = this.invisibleItemSelected.bind(
      this
    );
    this.rootRef = React.createRef();
    this.setItems(this.props.toolbox.itemsValue);
  }
  public get creator() {
    return this.props.creator;
  }
  public get toolbox() {
    return this.props.toolbox;
  }
  private setItems(sourceItems: Array<IQuestionToolboxItem>){
    this.adaptiveElement.items = sourceItems.map(
      (item: IQuestionToolboxItem, itemIndex: number) => {
        return new AdaptiveActionBarItemWrapper(this.adaptiveElement, item);
      }
    )
  }
  private invisibleItemSelected(model: AdaptiveActionBarItemWrapper): void {
    this.creator.clickToolboxItem((model.wrappedItem as IQuestionToolboxItem).json);
  }
  componentDidMount() {
    super.componentDidMount();
    const container = this.rootRef.current;
    this.manager = new VerticalResponsivityManager(
      container,
      this.adaptiveElement,
      "div.svc-toolbox__tool",
      40
    );
  }
  componentWillUnmount() {
    this.manager.dispose();
    super.componentWillUnmount();
  }

  protected getStateElements(): Base[] {
    return [this.toolbox, this.adaptiveElement];
  }

  render(): JSX.Element {
    if (!this.hasItems) return null;
    if(this.toolbox.isCompact || this.toolbox.categories.length == 1) {
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
  get hasItems(): boolean {
    return (this.adaptiveElement.items || []).length > 0;
  }
  renderToolboxItem(item: AdaptiveActionBarItemWrapper, isCompact: boolean, useWrapped: boolean): JSX.Element {
    const className = "svc-toolbox__tool " + item.css;
    const style: CSSProperties = {
      visibility: item.isVisible === undefined || item.isVisible ? "visible" : "hidden"
    };
    if (item.visible !== undefined && !item.visible) {
      style.display = "none";
    }
    const itemComponent = ReactElementFactory.Instance.createElement(
      item.component || "svc-toolbox-item",
      {
        item: useWrapped ? item.wrappedItem : item,
        creator: this.creator,
        isCompact: isCompact
      }
    );
    return (
      <div className={className} style={style} key={item.id}>
        {item.needSeparator ? (
          <div className="svc-toolbox__category-separator"></div>
        ) : null}
        {itemComponent}
      </div>
    );
  }
  renderItems() {
    return this.adaptiveElement.items.map(
      (item: AdaptiveActionBarItemWrapper) => this.renderToolboxItem(item, this.toolbox.isCompact, true)
    );
  }
  renderCategories() {
    return this.creator.toolboxCategories.map(category => this.renderToolboxCategory(category));
  }
  renderToolboxCategory(category: any): JSX.Element {
    let header = null;
    if(this.creator.toolboxCategories.length > 1) {
      header = 
      <div className="svc-toolbox__category-header" onClick={e => category.toggleState()}>
        <span className="svc-toolbox__category-title" >{category.name}</span>
        <div className="svc-toolbox__category-header__controls">
          {( category.collapsed ?
            <SvgIcon className="svc-toolbox__category-header__button svc-string-editor__button--expand" size={16} iconName={"icon-expand"}></SvgIcon>
            :
            <SvgIcon className="svc-toolbox__category-header__button svc-string-editor__button--collapse" size={16} iconName={"icon-collapse"}></SvgIcon>
          )}
        </div>
      </div>;
    }
    let items = [];
    if(!category.collapsed) {
      items = category.items.map(item => this.renderToolboxItem(item, false, false));
    }
    return (
      <div className="svc-toolbox__category" key={category.name}>
          {header}
          {items}
      </div>
    );
  }
}
