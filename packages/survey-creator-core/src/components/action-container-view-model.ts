import {
  Base,
  AdaptiveActionContainer,
  Action,
  SurveyElement,
  property,
  IAction,
  ActionContainer,
  ComputedUpdater,
  AnimationBoolean,
  IAnimationConsumer,
  CssClassBuilder
} from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { DesignerStateManager } from "./tabs/designer-state-manager";
import { TabDesignerPlugin } from "./tabs/designer-plugin";
import { isPanelDynamic } from "../survey-elements";
import { cleanHtmlElementAfterAnimation, prepareElementForVerticalAnimation } from "survey-core";

export class SurveyElementActionContainer extends AdaptiveActionContainer {
  private needToShrink(item: Action, shrinkTypeConverterAction: boolean) {
    return (item.innerItem.location == "start" && shrinkTypeConverterAction || item.innerItem.location != "start");
  }
  private setModeForActions(shrinkTypeConverterAction: boolean, exclude: string[] = []): void {
    this.visibleActions.forEach((item) => {
      if (exclude.indexOf(item.id) != -1) {
        item.mode = "removed";
        return;
      }
      if (this.needToShrink(item, shrinkTypeConverterAction)) {
        item.mode = item.canShrink ? "small" : "removed";
        return;
      }
      item.mode = "large";
    });
  }
  private calcItemSize(item: Action, shrinkTypeConverterAction: boolean, exclude: string[] = []) {
    if (exclude.indexOf(item.id) != -1) return 0;
    if (this.needToShrink(item, shrinkTypeConverterAction)) {
      if (!item.canShrink) return 0;
      return item.minDimension;
    }
    return item.maxDimension;
  }

  public fit(dimension: number, dotsItemSize: number) {
    if (dimension <= 0) return;

    this.dotsItem.visible = false;
    const items = this.visibleActions;

    if (dimension >= items.reduce((sum, i) => sum += i.maxDimension, 0)) {
      items.forEach(i => i.mode = "large");
      return;
    }

    if (dimension >= items.reduce((sum, i) => sum += this.calcItemSize(i, false), 0)) {
      this.setModeForActions(false);
      return;
    }

    if (dimension >= items.reduce((sum, i) => sum += this.calcItemSize(i, false, ["convertInputType"]), 0)) {
      this.setModeForActions(false, ["convertInputType"]);
      return;
    }

    if (dimension >= items.reduce((sum, i) => sum += this.calcItemSize(i, true), 0)) {
      this.setModeForActions(true);
      return;
    }

    this.visibleActions.forEach((item) => {
      if (item.id == "convertTo") {
        item.mode = "small";
        return;
      }
      if (item.id == "convertInputType") {
        item.mode = "removed";
        return;
      }
      item.mode = "popup";
    });
    this.dotsItem.visible = true;
    this.hiddenItemsListModel.setItems(items.filter(i => i.mode == "popup").map(i => i.innerItem));
  }
}

export class SurveyElementAdornerBase<T extends SurveyElement = SurveyElement> extends Base {
  public actionContainer: ActionContainer;
  protected expandCollapseAction: IAction;
  protected designerStateManager: DesignerStateManager;
  @property({ defaultValue: true }) allowDragging: boolean;
  @property({ defaultValue: false }) expandCollapseAnimationRunning: boolean;
  public rootElement: HTMLElement;

  protected get dragInsideCollapsedContainer(): boolean {
    return this.collapsed && this.creator.dragDropSurveyElements.insideContainer;
  }

  @property({ defaultValue: true }) allowExpandCollapse: boolean;
  @property({
    onSet: (val, target: SurveyElementAdornerBase<T>) => {
      target.renderedCollapsed = val;
      if (target.designerStateManager && target.surveyElement) {
        target.designerStateManager.getElementState(target.surveyElement).collapsed = val;
      }
      setTimeout(() => {
        target.creator.survey.pages.forEach(p => p.ensureRowsVisibility());
        target.creator.survey.getAllPanels().forEach(p => p.ensureRowsVisibility());
      }, 50);
    }
  }) collapsed: boolean;
  @property() private _renderedCollapsed: boolean;

  @property() isAnimationRunningCollapsed: boolean;

  protected getAnimatedElement() {
    return null;
  }

  protected getInnerAnimatedElements() {
    return [] as Array<HTMLElement>;
  }

  protected getCollapsingCssClassName() {
    return "svc-question--leave";
  }
  protected getExpandingCssClassName() {
    return "svc-question--enter";
  }

  private hoverTimeout: any;
  @property({ defaultValue: false }) private isHovered: boolean;

  public hover(e: MouseEvent, element: HTMLElement | any) {
    const processedFlagName = "__svc_question_processed";
    if (!e[processedFlagName] && e.type === "mouseover") {
      if (!this.hoverTimeout) {
        this.hoverTimeout = setTimeout(() => {
          this.isHovered = true;
          this.hoverTimeout = undefined;
        }, this.creator.pageHoverDelay);
      }
      e[processedFlagName] = true;
    } else {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = undefined;
      this.isHovered = false;
    }
  }

  private getExpandCollapseAnimationOptions(): IAnimationConsumer {
    const beforeRunAnimation = (el: HTMLElement, animatingClassName: string) => {
      prepareElementForVerticalAnimation(el);
      const innerAnimatedElements = this.getInnerAnimatedElements();
      innerAnimatedElements.forEach((elem: HTMLElement) => {
        prepareElementForVerticalAnimation(elem);
      });
      innerAnimatedElements.forEach((elem: HTMLElement) => {
        elem.classList.add(animatingClassName);
      });
    };
    const afterRunAnimation = (el: HTMLElement, animatingClassName: string) => {
      this.expandCollapseAnimationRunning = false;
      cleanHtmlElementAfterAnimation(el);
      const innerAnimatedElements = this.getInnerAnimatedElements();
      innerAnimatedElements.forEach((elem: HTMLElement) => {
        cleanHtmlElementAfterAnimation(elem);
      });
      innerAnimatedElements.forEach((elem: HTMLElement) => {
        elem.classList.remove(animatingClassName);
      });
    };
    return {
      getRerenderEvent: () => this.onElementRerendered,
      getEnterOptions: () => {
        const className = this.getExpandingCssClassName();
        return {
          cssClass: className,
          onBeforeRunAnimation: (el) => {
            beforeRunAnimation(el, className);
          },
          onAfterRunAnimation: (el) => {
            afterRunAnimation(el, className);
          },
        };
      },
      getLeaveOptions: () => {
        const className = this.getCollapsingCssClassName();
        return {
          cssClass: className,
          onBeforeRunAnimation: (el) => {
            beforeRunAnimation(el, className);
          },
          onAfterRunAnimation: (el) => {
            afterRunAnimation(el, className);
          },
        };
      },
      getAnimatedElement: () => this.getAnimatedElement(),
      isAnimationEnabled: () => this.animationAllowed
    };
  }

  private animationCollapsed = new AnimationBoolean(this.getExpandCollapseAnimationOptions(), (val) => {
    this._renderedCollapsed = !val;
  }, () => !this.renderedCollapsed);
  public set renderedCollapsed(val: boolean) {
    if (this.animationAllowed && val !== this.renderedCollapsed) this.expandCollapseAnimationRunning = true;
    this.animationCollapsed.sync(!val);
  }
  public get renderedCollapsed(): boolean {
    return !!this._renderedCollapsed;
  }

  protected createActionContainer(): ActionContainer {
    const actionContainer = new SurveyElementActionContainer();
    actionContainer.dotsItem.iconSize = 16;
    actionContainer.dotsItem.popupModel.horizontalPosition = "center";
    return actionContainer;
  }
  private dragCollapsedTimer;

  protected get canExpandOnDrag() {
    return this.surveyElement.isPanel || this.surveyElement.isPage || isPanelDynamic(this.surveyElement);
  }
  private draggedIn = false;
  protected dragIn() {
    if (!this.draggedIn) {
      if (this.canExpandOnDrag && this.collapsed) {
        this.draggedIn = true;
        this.dragCollapsedTimer = setTimeout(() => {
          this.expandWithDragIn();
        }, this.creator.expandOnDragTimeOut);
      }
    }
  }
  protected expandWithDragIn() {
    this.collapsed = false;
    this.dragCollapsedTimer = undefined;
  }

  protected dragOut() {
    if (this.draggedIn) {
      clearTimeout(this.dragCollapsedTimer);
      this.draggedIn = false;
    }
  }

  public dblclick(event) {
    if (this.allowExpandCollapse) this.collapsed = !this.collapsed;
    event.stopPropagation();
  }
  private allowEditOption: boolean;
  private selectedPropPageFunc: (sender: Base, options: any) => void = (_, options) => {
    if (options.name === "isSelectedInDesigner") {
      this.onElementSelectedChanged(options.newValue);
    }
  };
  private sidebarFlyoutModeChangedFunc: (sender: Base, options: any) => void = (_, options) => {
    if (options.name === "flyoutMode") {
      this.updateActionsProperties();
    }
  };;
  protected surveyElement: T
  constructor(
    public creator: SurveyCreatorModel,
    surveyElement: T
  ) {
    super();
    this.designerStateManager = (creator.getPlugin("designer") as TabDesignerPlugin)?.designerStateManager;
    this.designerStateManager?.initForElement(surveyElement);
    this.actionContainer = this.createActionContainer();

    const collapseIcon = "icon-collapse-detail-light_16x16";
    const expandIcon = "icon-restore_16x16";
    this.expandCollapseAction = {
      id: "collapse",
      css: "sv-action-bar-item--secondary sv-action-bar-item--collapse",
      iconName: new ComputedUpdater<string>(() => this.collapsed ? expandIcon : collapseIcon) as any,
      iconSize: 16,
      action: () => {
        this.collapsed = !this.collapsed;
      }
    };
    this.attachToUI(surveyElement);
  }
  protected updateActionsContainer(surveyElement: SurveyElement, clear: boolean = false) {
    if(clear) {
      this.actionContainer.actions.forEach(action => action.dispose && action.dispose());
    } else {
      const actions: Array<Action> = [];
      this.buildActions(actions);
      this.creator.onElementMenuItemsChanged(surveyElement, actions);
      this.actionContainer.setItems(actions);
    }
  }

  protected detachElement(surveyElement: T): void {
    if (surveyElement) {
      surveyElement.onPropertyChanged.remove(this.selectedPropPageFunc);
      this.updateActionsContainer(surveyElement, true);
    }
  }
  protected attachElement(surveyElement: T): void {
    if (surveyElement) {
      surveyElement.onPropertyChanged.add(this.selectedPropPageFunc);
      this.collapsed = !!surveyElement && (this.designerStateManager?.getElementState(surveyElement).collapsed);
      this.updateActionsContainer(surveyElement);
      this.updateActionsProperties();
    }
  }
  protected setSurveyElement(surveyElement: T): void {
    this.detachElement(this.surveyElement);
    this.surveyElement = surveyElement;
    this.attachElement(this.surveyElement);
  }

  protected checkActionProperties(): void {
    if (this.creator.isElementSelected(this.surveyElement)) {
      this.updateActionsProperties();
    }
  }
  public attachToUI(surveyElement: T, rootElement?: HTMLElement) {
    if(!!rootElement) {
      this.rootElement = rootElement;
    }
    if(this.surveyElement != surveyElement) {
      this.setSurveyElement(surveyElement);
      this.creator.sidebar.onPropertyChanged.add(this.sidebarFlyoutModeChangedFunc);
      this.creator.expandCollapseManager.add(this);
    }
  }
  public detachFromUI() {
    this.rootElement = undefined;
    this.detachElement(this.surveyElement);
    this.surveyElement = undefined;
    this.creator.sidebar.onPropertyChanged.remove(this.sidebarFlyoutModeChangedFunc);
    this.creator.expandCollapseManager.remove(this);
  }
  public dispose(): void {
    this.detachFromUI();
    if (!this.actionContainer.isDisposed) {
      this.actionContainer.dispose();
    }
    super.dispose();
  }
  protected onElementSelectedChanged(isSelected: boolean): void {
    if (!isSelected) return;
    this.updateActionsProperties();
  }
  protected updateActionsProperties(): void {
    if (this.isDisposed) return;
    this.expandCollapseAction.visible = this.allowExpandCollapse;
    this.updateElementAllowOptions(
      this.creator.getElementAllowOperations(this.surveyElement),
      this.isOperationsAllow()
    );
  }
  protected getAllowExpandCollapse(options: any): boolean {
    return this.creator.expandCollapseButtonVisibility != "never" && (options.allowExpandCollapse == undefined || !!options.allowExpandCollapse);
  }
  protected updateElementAllowOptions(options: any, operationsAllow: boolean): void {
    this.allowDragging = operationsAllow && options.allowDragging;
    this.allowExpandCollapse = this.getAllowExpandCollapse(options);
    this.allowEditOption = (options.allowEdit == undefined || !!options.allowEdit);
    this.updateActionVisibility("delete", operationsAllow && options.allowDelete);
    this.updateActionVisibility("duplicate", operationsAllow && options.allowCopy);
    if (options.allowShowSettings === undefined) {
      const settingsVisibility = (options.allowEdit !== undefined) ? (operationsAllow && options.allowEdit) : this.creator.sidebar.flyoutMode;
      this.updateActionVisibility("settings", settingsVisibility);
    } else {
      this.updateActionVisibility("settings", options.allowShowSettings);
    }
    this.setShowAddQuestionButton(options.allowEdit !== false);
  }
  protected isOperationsAllow(): boolean {
    return !this.creator.readOnly;
  }
  protected updateActionVisibility(id: string, isVisible: boolean) {
    var action = this.getActionById(id);
    if (!action) return;
    if (action.visible == isVisible) return;
    action.visible = isVisible;
  }
  public getActionById(id: string): Action {
    let actions = this.actionContainer.actions;
    for (var i = 0; i < actions.length; i++) {
      if (actions[i].id === id) return actions[i];
    }
    return null;
  }
  protected buildActions(items: Array<Action>) {
    items.push(
      new Action({
        id: "duplicate",
        iconName: "icon-duplicate_16x16",
        css: "svc-action-bar-item--right sv-action-bar-item--secondary",
        title: this.creator.getLocString("survey.duplicate"),
        visibleIndex: 10,
        iconSize: 16,
        action: () => this.duplicate(),
        onFocus: (isMouse: boolean, event: any) => this.disableActionFocusing(isMouse, event)
      })
    );

    items.push(
      new Action({
        id: "settings",
        iconName: "icon-settings_16x16",
        css: "svc-action-bar-item--right sv-action-bar-item--secondary",
        title: this.creator.getLocString("ed.settings"),
        locTooltipName: "ed.settingsTooltip",
        visibleIndex: 20,
        iconSize: 16,
        action: () => {
          this.creator.setShowSidebar(true, true);
          if (!this.creator.isMobileView) {
            this.creator.sidebar.executeOnExpand(() => {
              this.creator.propertyGrid.getAllQuestions()[0].focus();
            });
          }
        }
      })
    );

    items.push(
      new Action({
        id: "delete",
        iconName: "icon-delete_16x16",
        css: "svc-action-bar-item--right sv-action-bar-item--secondary",
        //needSeparator: items.length > 0,
        title: this.creator.getLocString("pe.delete"),
        visibleIndex: 30,
        iconSize: 16,
        action: () => {
          this.delete();
        },
        onFocus: (isMouse: boolean, event: any) => this.disableActionFocusing(isMouse, event)
      })
    );
  }
  isDisableSelecting: boolean;
  protected disableActionFocusing(isMouse: boolean, event: any): void {
    this.isDisableSelecting = isMouse;
  }
  protected canSelectElement(): boolean {
    const res = !this.isDisableSelecting;
    this.isDisableSelecting = false;
    return res;
  }
  public get allowEdit(): boolean {
    return !!this.creator && !this.creator.readOnly && this.allowEditOption;
  }
  public get showAddQuestionButton(): boolean {
    return this.getPropertyValue("showAddQuestionButton");
  }
  protected setShowAddQuestionButton(val: boolean): void {
    this.setPropertyValue("showAddQuestionButton", val && this.allowEdit && !!this.creator && this.creator.showAddQuestionButton);
  }
  protected duplicate(): void { }
  protected delete(): void {
    this.creator.deleteElement(this.surveyElement);
  }
  protected getCss(): string {
    return new CssClassBuilder().append("svc-hovered svc-hovered-ready", this.isHovered).toString();
  }
}
