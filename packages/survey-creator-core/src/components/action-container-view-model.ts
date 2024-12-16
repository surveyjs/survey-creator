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
import { isPanelDynamic } from "../survey-elements";
import { cleanHtmlElementAfterAnimation, prepareElementForVerticalAnimation } from "survey-core";
import { listComponentCss } from "./list-theme";

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

  constructor() {
    super();
    this.dotsItem.iconSize = "auto" as any;
    this.dotsItem.popupModel.cssClass += " svc-creator-popup";
    this.hiddenItemsListModel.cssClasses = listComponentCss;
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
  public static AdornerValueName = "__sjs_creator_adorner";
  public actionContainer: ActionContainer;
  protected expandCollapseAction: IAction;
  @property({ defaultValue: true }) allowDragging: boolean;
  @property({ defaultValue: false }) expandCollapseAnimationRunning: boolean;
  public rootElement: HTMLElement;

  protected get dragInsideCollapsedContainer(): boolean {
    return this.collapsed && this.creator.dragDropSurveyElements.insideContainer;
  }
  @property({ defaultValue: true }) needToRenderContent: boolean;
  @property({ defaultValue: true }) allowExpandCollapse: boolean;
  @property({
    onSet: (val, target: SurveyElementAdornerBase<T>) => {
      target.renderedCollapsed = val;
      if (!val) target.needToRenderContent = true;
      if (target.creator.designerStateManager && !target.creator.designerStateManager.isSuspended && target.surveyElement) {
        target.creator.designerStateManager.getElementState(target.surveyElement).collapsed = val;
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

  protected get hoverDelay(): number {
    return this.creator.pageHoverDelay;
  }

  public hover(e: MouseEvent, element: HTMLElement | any) {
    const processedFlagName = "__svc_question_processed";
    if (!e[processedFlagName] && e.type === "mouseover") {
      if (!this.hoverTimeout) {
        this.hoverTimeout = setTimeout(() => {
          this.isHovered = true;
          this.hoverTimeout = undefined;
        }, this.hoverDelay);
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
      if (this.surveyElement) {
        cleanHtmlElementAfterAnimation(el);
        const innerAnimatedElements = this.getInnerAnimatedElements();
        innerAnimatedElements.forEach((elem: HTMLElement) => {
          cleanHtmlElementAfterAnimation(elem);
        });
        innerAnimatedElements.forEach((elem: HTMLElement) => {
          elem.classList.remove(animatingClassName);
        });
      }
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
  protected createActionContainers() {
    this.actionContainer = this.createActionContainer();
  }

  protected createActionContainer(): ActionContainer {
    const actionContainer = new SurveyElementActionContainer();
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

  protected allowExpandCollapseByDblClick(element: any) {
    return true;
  }
  public dblclick(event) {
    if (this.allowExpandCollapseByDblClick(event.target)) {
      if (this.allowExpandCollapse) this.collapsed = !this.collapsed;
    }
    event.stopPropagation();
  }
  private allowEditOption: boolean;
  private sidebarFlyoutModeChangedFunc: (sender: Base, options: any) => void = (_, options) => {
    if (options.name === "flyoutMode") {
      this.updateActionsProperties();
    }
  };
  protected surveyElement: T
  get element() {
    return this.surveyElement;
  }
  constructor(
    public creator: SurveyCreatorModel,
    surveyElement: T
  ) {
    super();
    this.expandCollapseAction = this.getExpandCollapseAction();
    this.createActionContainers();
    this.attachToUI(surveyElement);
  }

  public static GetAdorner<V = SurveyElementAdornerBase>(surveyElement: SurveyElement): V {
    return surveyElement.getPropertyValue(SurveyElementAdornerBase.AdornerValueName) as V;
  }
  public static RestoreStateFor(surveyElement: SurveyElement): void {
    const adorner = SurveyElementAdornerBase.GetAdorner(surveyElement);
    if (!!adorner) {
      adorner.restoreState();
    }
  }

  protected restoreState(): void {
    if (!!this.surveyElement) {
      const state = this.creator.designerStateManager?.getElementState(this.surveyElement);
      this.collapsed = state.collapsed;
    }
    if (!this.surveyElement || this.surveyElement.isInteractiveDesignElement) {
      this.needToRenderContent = !this.collapsed;
    }
  }

  protected detachElement(surveyElement: T): void {
    if (surveyElement) {
      surveyElement.setPropertyValue(SurveyElementAdornerBase.AdornerValueName, null);
      surveyElement.unRegisterFunctionOnPropertyValueChanged("isSelectedInDesigner", "questionSelected");
      this.cleanActionsContainer();
    }
  }
  protected attachElement(surveyElement: T): void {
    if (surveyElement) {
      this.creator?.designerStateManager?.initForElement(surveyElement);
      surveyElement.registerFunctionOnPropertyValueChanged("isSelectedInDesigner",
        (newValue: any) => {
          this.onElementSelectedChanged(newValue);
        }, "questionSelected"
      );
      this.restoreState();
      this.updateActionsContainer(surveyElement);
      this.updateActionsProperties();
      surveyElement.setPropertyValue(SurveyElementAdornerBase.AdornerValueName, this);
    }
  }
  protected setSurveyElement(surveyElement: T): void {
    this.detachOnlyMyElement();
    this.surveyElement = surveyElement;
    this.attachElement(this.surveyElement);
  }

  protected checkActionProperties(): void {
    if (this.creator.isElementSelected(this.surveyElement)) {
      this.updateActionsProperties();
    }
  }
  public attachToUI(surveyElement: T, rootElement?: HTMLElement) {
    if (!!rootElement) {
      this.rootElement = rootElement;
    }
    if (this.surveyElement != surveyElement) {
      this.setSurveyElement(surveyElement);
      this.creator.sidebar.onPropertyChanged.add(this.sidebarFlyoutModeChangedFunc);
      this.creator.expandCollapseManager.add(this);
    }
  }
  private detachOnlyMyElement() {
    if (this.surveyElement && this.surveyElement.getPropertyValue(SurveyElementAdornerBase.AdornerValueName) === this && !this.surveyElement.isDisposed) {
      this.detachElement(this.surveyElement);
    }
  }
  public detachFromUI() {
    this.rootElement = undefined;
    this.detachOnlyMyElement();
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
    this.sidebarFlyoutModeChangedFunc = undefined;
    this.animationCollapsed = undefined;
  }
  protected onElementSelectedChanged(isSelected: boolean): void {
    if (!isSelected) return;
    this.updateActionsProperties();
  }
  protected getExpandCollapseAction(): IAction {
    const collapseIcon = "icon-collapsepanel-16x16";
    const expandIcon = "icon-expandpanel-16x16";
    return {
      id: "collapse",
      css: "sv-action-bar-item--collapse",
      iconName: new ComputedUpdater<string>(() => this.collapsed ? expandIcon : collapseIcon) as any,
      iconSize: "auto",
      action: () => {
        this.collapsed = !this.collapsed;
      }
    };
  }
  protected cleanActionsContainer() {
    const actions = this.actionContainer.actions;
    this.actionContainer.setItems([]);
    actions.forEach(action => action.dispose && action.dispose());
  }
  protected updateActionsContainer(surveyElement: SurveyElement) {
    const actions: Array<Action> = [];
    this.buildActions(actions);
    this.creator.onElementMenuItemsChanged(surveyElement, actions);
    this.actionContainer.setItems(actions);
  }
  protected updateActionsProperties(): void {
    if (this.isDisposed) return;
    this.updateElementAllowOptions(
      this.creator.getElementAllowOperations(this.surveyElement),
      this.isOperationsAllow()
    );
  }
  protected getAllowDragging(options: any): boolean {
    return options.allowDragging;
  }
  protected getAllowExpandCollapse(options: any): boolean {
    return this.creator.expandCollapseButtonVisibility != "never" && (options.allowExpandCollapse == undefined || !!options.allowExpandCollapse);
  }
  protected updateElementAllowOptions(options: any, operationsAllow: boolean): void {
    this.allowDragging = operationsAllow && this.getAllowDragging(options);
    this.allowExpandCollapse = this.getAllowExpandCollapse(options);
    this.allowEditOption = (options.allowEdit == undefined || !!options.allowEdit);
    this.updateActionVisibility("delete", operationsAllow && options.allowDelete);
    this.updateActionVisibility("duplicate", operationsAllow && options.allowCopy);
    this.updateActionVisibility("collapse", this.allowExpandCollapse);
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
    return this.actionContainer.getActionById(id);
  }
  protected buildActions(items: Array<Action>) {
    items.push(
      new Action({
        id: "duplicate",
        iconName: "icon-duplicate_16x16",
        css: "svc-action-bar-item--right",
        title: this.creator.getLocString("survey.duplicate"),
        visibleIndex: 10,
        iconSize: "auto",
        action: () => this.duplicate(),
        onFocus: (isMouse: boolean, event: any) => this.disableActionFocusing(isMouse, event)
      })
    );

    items.push(
      new Action({
        id: "settings",
        iconName: "icon-settings_16x16",
        css: "svc-action-bar-item--right",
        title: this.creator.getLocString("ed.settings"),
        locTooltipName: "ed.settingsTooltip",
        visibleIndex: 20,
        iconSize: "auto",
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
        css: "svc-action-bar-item--right",
        //needSeparator: items.length > 0,
        title: this.creator.getLocString("pe.delete"),
        visibleIndex: 30,
        iconSize: "auto",
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
