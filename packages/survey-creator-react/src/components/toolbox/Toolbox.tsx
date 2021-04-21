import {
  CreatorBase,
  getLocString,
  IQuestionToolboxItem,
} from "@survey/creator";
import React, { CSSProperties } from "react";
import { ReactDragEvent } from "../../events";
import {
  AdaptiveActionBarItemWrapper,
  AdaptiveElement,
  Base,
  VerticalResponsivityManager,
  SurveyModel,
} from "survey-core";
import { SurveyElementBase, SvgIcon } from "survey-react-ui";

// export class SurveyCreatorToolbox extends ActionBar {
//   constructor(props: any) {
//     super(props);
//   }

//   render(): JSX.Element {
//     return super.render();
//   }
// }

interface ISurveyCreatorToolboxProps {
  categories: Array<any>;
  creator: CreatorBase<SurveyModel>;
  items: Array<IQuestionToolboxItem>;
}

export class SurveyCreatorToolbox extends SurveyElementBase<
  ISurveyCreatorToolboxProps,
  any
> {
  private adaptiveElement = new AdaptiveElement();
  private manager: VerticalResponsivityManager;
  private rootRef: React.RefObject<HTMLDivElement>;
  private updateVisibleItems: any;

  constructor(props: ISurveyCreatorToolboxProps) {
    super(props);

    const sourceItems: Array<IQuestionToolboxItem> = this.props.items;
    this.adaptiveElement.items = sourceItems.map(
      (item: IQuestionToolboxItem, itemIndex: number) => {
        return new AdaptiveActionBarItemWrapper(this.adaptiveElement, item);
      }
    );
    this.rootRef = React.createRef();
  }
  componentDidMount() {
    super.componentDidMount();

    const container = this.rootRef.current;
    this.manager = new VerticalResponsivityManager(
      container,
      this.adaptiveElement,
      40
    );
    this.manager.getItemSizes = () => {
      const widths: number[] = [];
      container
        .querySelectorAll("span.sv-action")
        .forEach((actionContainer) => {
          widths.push((actionContainer as HTMLDivElement).offsetWidth);
        });
      return widths;
    };

    this.updateVisibleItems = setInterval(() => {
      this.manager.process();
    }, 100);
  }
  componentWillUnmount() {
    clearInterval(this.updateVisibleItems);
    super.componentWillUnmount();
  }

  protected getStateElement(): Base {
    return this.adaptiveElement;
  }
  render(): JSX.Element {
    if (!this.hasItems) {
      return null;
    }

    const items = this.renderItems();

    return (
      <div className="svc-toolbox">
        <div className="svc-toolbox__category">{items}</div>
      </div>
    );
    /*
<div class="svc-toolbox">
  <div class="svc-toolbox__category">
    <!-- ko foreach: items -->
    <div
      class="svc-toolbox__tool"
      data-bind="css: $data.css, visible: $data.visible === undefined || $data.visible, style: { visibility : $data.isVisible ? 'visible': 'hidden' }"
    >
      <!-- ko if: $data.needSeparator -->
      <div class="svc-toolbox__category-separator"></div>
      <!-- /ko -->
      <!-- ko component: { name: $data.component || 'svc-toolbox-item', params: { item: $data, creator: $parents[1].creator } } -->
      <!-- /ko -->
    </div>
    <!-- /ko -->
  </div>
</div>
     */
  }

  get hasItems(): boolean {
    return (this.adaptiveElement.items || []).length > 0;
  }

  renderToolboxItem(item: AdaptiveActionBarItemWrapper): JSX.Element {
    const className = "svc-toolbox__tool " + item.css;
    const style: CSSProperties = {
      visibility: item.isVisible ? "visible" : "hidden",
    };
    if (item.visible !== undefined && !item.visible) {
      style.display = "none";
    }
    return (
      <div className={className} style={style} key={item.id}>
        {item.needSeparator ? (
          <div className="svc-toolbox__category-separator"></div>
        ) : null}
        {this.renderToolboxItemCore(item)}
      </div>
    );
    /*
    <div
      class="svc-toolbox__tool"
      data-bind="css: $data.css, visible: $data.visible === undefined || $data.visible, style: { visibility : $data.isVisible ? 'visible': 'hidden' }"
    >
      <!-- ko if: $data.needSeparator -->
      <div class="svc-toolbox__category-separator"></div>
      <!-- /ko -->
      <!-- ko component: { name: $data.component || 'svc-toolbox-item', params: { item: $data, creator: $parents[1].creator } } -->
      <!-- /ko -->
    </div>
    */
  }
  renderToolboxItemCore(item: AdaptiveActionBarItemWrapper): JSX.Element {
    if (!item.visible && item.visible !== undefined) {
      return null;
    }
    //const toolboxItem: any = item.wrappedItem as any;
    const className = "svc-toolbox__item svc-toolbox__item--" + item.iconName;
    //click: click, event: { dragstart: dragstart, dragend: dragend }
    const toolboxItem: IQuestionToolboxItem = item.wrappedItem as any;
    return (
      <div
        className={className}
        tabIndex={0}
        draggable={true}
        title={item.tooltip}
        role="button"
        aria-label={item.tooltip + " " + getLocString("toolbox") + " item"}
        onClick={() => this.props.creator.clickToolboxItem(toolboxItem.json)}
        onDragStart={(e) => {
          var json = this.props.creator.getJSONForNewElement(toolboxItem.json);
          this.props.creator.dragDropHelper.onDragStartToolboxItem(
            new ReactDragEvent(e),
            json
          );
          return true;
        }}
        onDragEnd={() => {
          this.props.creator.dragDropHelper.onDragEnd();
        }}
      >
        <span className="svc-toolbox__item-container">
          <SvgIcon size={24} iconName={item.iconName}></SvgIcon>
        </span>
        <span className="svc-toolbox__item-banner">
          <SvgIcon size={24} iconName={item.iconName}></SvgIcon>
          <span className="svc-toolbox__item-title">{item.title}</span>
        </span>
      </div>
    );
    /*
        const itemComponent = ReactElementFactory.Instance.createElement(
          item.component || "sv-action-bar-item",
          {
            item: item,
            key: "item" + itemIndex,
          }
        );
        return itemComponent;
        */
  }
  renderItems() {
    //const creator: CreatorBase<Survey.Model> = this.props.creator;
    return this.adaptiveElement.items.map(
      (item: AdaptiveActionBarItemWrapper) => this.renderToolboxItem(item)
    );
    /*
    <div class="svc-toolbox__item" tabindex="0" draggable="true" data-bind="attr: { title: item.tooltip, role: 'button', 'aria-label': ariaLabel }, css: 'svc-toolbox__item--' + item.iconName, click: click, event: { dragstart: dragstart, dragend: dragend }">
        <span class="svc-toolbox__item-container"> 
            <sv-svg-icon params="iconName: iconName, size: 24"></sv-svg-icon>
        </span>
        <span class="svc-toolbox__item-banner">
            <sv-svg-icon params="iconName: iconName, size: 24"></sv-svg-icon>
        <span class="svc-toolbox__item-title" data-bind="text: title"></span>
        </span>
    </div>
       */
  }
}
