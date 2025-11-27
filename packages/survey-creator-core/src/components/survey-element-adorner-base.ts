import {
  Base,
  Action,
  SurveyElement,
  property,
  IAction,
  ActionContainer,
  ComputedUpdater,
  AnimationBoolean,
  IAnimationConsumer,
  CssClassBuilder,
  QuestionPanelDynamicModel
} from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { DropIndicatorPosition } from "../drag-drop-enums";
import { cleanHtmlElementAfterAnimation, prepareElementForVerticalAnimation } from "survey-core";
import { SurveyElementActionContainer } from "./action-container-view-model";

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const updateRowsVisibility = debounce((target: SurveyElementAdornerBase) => {
  if (target.creator.rootElement.getAnimations({ subtree: true }).filter((animation => animation.effect.getComputedTiming().activeDuration !== Infinity && (animation.pending || animation.playState !== "finished")))[0]) {
    updateRowsVisibility(target);
  } else {
    target.creator.survey.pages.forEach(p => p.ensureRowsVisibility());
    target.creator.survey.getAllPanels().forEach(p => p.ensureRowsVisibility());
  }
}, 50);

export class SurveyElementAdornerBase<T extends SurveyElement = SurveyElement> extends Base {
  public static AdornerValueName = "__sjs_creator_adorner";
  protected expandCollapseAction: IAction;
  @property({ defaultValue: true }) allowDragging: boolean;
  @property({ defaultValue: false }) expandCollapseAnimationRunning: boolean;
  public rootElement: HTMLElement;

  @property({ defaultValue: null }) dropIndicatorPosition: DropIndicatorPosition;
  @property({ defaultValue: false }) isBeingDragged: boolean;

  @property({ defaultValue: true }) needToRenderContent: boolean;
  @property({ defaultValue: true }) allowExpandCollapse: boolean;
  @property({
    onSet: (val, target, prevVal) => {
      target.renderedCollapsed = val;
      if (!val) target.needToRenderContent = true;
      if (target.creator.designerStateManager && target.surveyElement) {
        target.creator.designerStateManager.setElementCollapsed(target.surveyElement, val);
      }
      if (!!val !== !!prevVal) {
        updateRowsVisibility(target);
      }
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
    this.actionContainer.allowResponsiveness();
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
    if (this.animationAllowed && val !== this.renderedCollapsed)this.expandCollapseAnimationRunning = true;
    this.animationCollapsed.sync(!val);
  }
  public get renderedCollapsed(): boolean {
    return !!this._renderedCollapsed;
  }
  protected createTopActionContainer(): ActionContainer {
    const actionContainer = new ActionContainer();
    actionContainer.sizeMode = "small";
    if (this.creator.expandCollapseButtonVisibility != "never") {
      actionContainer.setItems([this.expandCollapseAction]);
      actionContainer.cssClasses = {
        root: "svc-survey-element-top-toolbar sv-action-bar",
        item: "svc-survey-element-top-toolbar__item",
        itemIcon: "svc-survey-element-toolbar-item__icon",
        itemTitle: "svc-survey-element-toolbar-item__title",
        itemTitleWithIcon: "svc-survey-element-toolbar-item__title--with-icon",
      };
    }
    return actionContainer;
  }

  protected createActionContainer(): SurveyElementActionContainer {
    const actionContainer = new SurveyElementActionContainer();
    actionContainer.dotsItem.popupModel.horizontalPosition = "center";
    return actionContainer;
  }
  private dragCollapsedTimer;

  public get canExpandOnDrag() {
    return this.surveyElement.isPanel || this.surveyElement.isPage || this.surveyElement instanceof QuestionPanelDynamicModel;
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
      if (this.allowExpandCollapse)this.collapsed = !this.collapsed;
    }
    event.stopPropagation();
  }
  private allowEditOption: boolean;
  private sidebarFlyoutModeChangedFunc: (sender: Base, options: any) => void = (_, options) => {
    if (options.name === "flyoutMode") {
      this.updateActionsProperties();
    }
  };
  public surveyElement: T;
  get element() {
    return this.surveyElement;
  }
  constructor(
    public creator: SurveyCreatorModel,
    surveyElement: T
  ) {
    super();
    this.expandCollapseAction = this.getExpandCollapseAction();
    this.attachToUI(surveyElement);
  }
  private actionContainerValue: SurveyElementActionContainer;
  protected get isActionContainerCreated(): boolean {
    return !!this.actionContainerValue;
  }
  public get actionContainer(): SurveyElementActionContainer {
    if (!this.actionContainerValue) {
      this.actionContainerValue = this.createActionContainer();
      if (this.surveyElement) {
        this.updateActionsContainer(this.surveyElement);
        this.updateActionsVisibility(false);
      }
    }
    return this.actionContainerValue;
  }
  private topActionContainerValue: ActionContainer;
  public get topActionContainer(): ActionContainer {
    if (!this.topActionContainerValue) {
      this.topActionContainerValue = this.createTopActionContainer();
      if (this.surveyElement) {
        this.updateActionsVisibility(true);
      }
    }
    return this.topActionContainerValue;
  }

  private creatorOnLocaleChanged: (sender: Base, options: any) => void = (_, options) => {
    if (this.surveyElement) {
      this.updateActionsContainer(this.surveyElement);
      this.updateActionsProperties();
    }
  };
  private creatorElementTypeRestrictionChanged: (sender: Base, options: any) => void = (_, options) => {
    this.onElementTypeRestrictionChanged(options.elType);
  };
  protected onElementTypeRestrictionChanged(elType: string): void {
    const el = this.surveyElement;
    if (!el) return;
    const elements = el["elements"] || el["templateElements"];
    if (el.getType() === elType || (Array.isArray(elements) && elements.length > 0)) {
      this.updateActionsProperties();
    }
  }
  public static GetAdorner<V = SurveyElementAdornerBase>(surveyElement: Base): V {
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
      this.collapsed = this.creator.designerStateManager?.getElementCollapsed(this.surveyElement);
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
      if (surveyElement.getPropertyValue("isSelectedInDesigner")) {
        this.actionContainer.allowResponsiveness();
      }
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
      this.creator.onLocaleChanded.add(this.creatorOnLocaleChanged);
      this.creator.onElementTypeRestrictionChanged.add(this.creatorElementTypeRestrictionChanged);
      this.creator.sidebar.onPropertyChanged.add(this.sidebarFlyoutModeChangedFunc);
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
    this.creator.onLocaleChanded.remove(this.creatorOnLocaleChanged);
    this.creator.onElementTypeRestrictionChanged.remove(this.creatorElementTypeRestrictionChanged);
    this.creator.sidebar.onPropertyChanged.remove(this.sidebarFlyoutModeChangedFunc);
  }
  public dispose(): void {
    this.detachFromUI();
    this.disposeActions(this.actionContainerValue);
    this.disposeActions(this.topActionContainerValue);
    super.dispose();
    this.sidebarFlyoutModeChangedFunc = undefined;
    this.animationCollapsed = undefined;
  }
  private disposeActions(container: ActionContainer): void {
    if (!!container && !container.isDisposed) {
      container.dispose();
    }
  }
  protected onElementSelectedChanged(isSelected: boolean): void {
    if (!isSelected) return;
    this.updateActionsProperties();
    this.actionContainer.allowResponsiveness();
  }
  protected getExpandCollapseAction(): IAction {
    const collapseIcon = "icon-collapsepanel-16x16";
    const expandIcon = "icon-expandpanel-16x16";
    return {
      id: "collapse",
      css: "sv-action-bar-item--collapse",
      locTooltipName: new ComputedUpdater<string>(() => this.collapsed ? "ed.expandTooltip" : "ed.collapseTooltip") as any,
      iconName: new ComputedUpdater<string>(() => this.collapsed ? expandIcon : collapseIcon) as any,
      iconSize: "auto",
      action: () => {
        this.collapsed = !this.collapsed;
      }
    };
  }
  protected cleanActionsContainer() {
    const container = this.actionContainerValue;
    if (!container) return;
    const actions = container.actions;
    container.setItems([]);
    actions.forEach(action => action.dispose && action.dispose());
  }
  protected updateActionsContainer(surveyElement: SurveyElement) {
    if (!this.actionContainerValue) return;
    const actions: Array<Action> = [];
    this.buildActions(actions);
    this.creator.onElementMenuItemsChanged(surveyElement, actions);
    this.actionContainerValue.setItems(actions);
  }
  protected updateActionsProperties(): void {
    if (this.isDisposed) return;
    this.updateActionsPropertiesCore();
  }
  protected updateActionsPropertiesCore(): void {
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
      this.updateActionVisibility("settings", settingsVisibility && this.creator.removeSidebar !== true);
    } else {
      this.updateActionVisibility("settings", options.allowShowSettings);
    }
    this.setShowAddQuestionButton(options.allowEdit !== false);
  }
  protected isOperationsAllow(): boolean {
    return !this.creator.readOnly;
  }
  private actionVisibilityCache: { [index: string]: boolean } = {};
  protected updateActionVisibility(id: string, isVisible: boolean) {
    var action = this.actionContainerValue?.getActionById(id) || this.topActionContainerValue?.getActionById(id);
    if (!action) {
      this.actionVisibilityCache[id] = isVisible;
    } else {
      if (action.visible !== isVisible) {
        action.visible = isVisible;
      }
    }
  }
  protected updateActionsVisibility(isTop: boolean): void {
    for (var key in this.actionVisibilityCache) {
      this.updateActionVisibility(key, this.actionVisibilityCache[key]);
    }
  }
  public getActionById(id: string): Action {
    return this.actionContainer.getActionById(id) || this.topActionContainer.getActionById(id);
  }
  protected buildActions(items: Array<Action>) {
    items.push(
      new Action({
        id: "duplicate",
        iconName: "icon-duplicate_16x16",
        css: "svc-action-bar-item--right sv-action--duplicate",
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
