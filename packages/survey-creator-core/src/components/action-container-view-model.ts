import {
  Base,
  AdaptiveActionContainer,
  Action,
  SurveyModel,
  SurveyElement,
  property,
  actionModeType,
  IAction,
  ActionContainer,
  ComputedUpdater
} from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { settings } from "../creator-settings";
import { DesignerStateManager } from "./tabs/designer-state-manager";
import { TabDesignerPlugin } from "./tabs/designer-plugin";

export class SurveyElementActionContainer extends AdaptiveActionContainer {
  private needToShrink(item: Action, shrinkStart: boolean, shrinkEnd: boolean) {
    return (item.innerItem.location == "start" && shrinkStart || item.innerItem.location != "start" && shrinkEnd);
  }
  private setModeForActions(shrinkStart: boolean, shrinkEnd: boolean, exclude: string[] = []): void {
    this.visibleActions.forEach((item) => {
      if (exclude.indexOf(item.id) != -1) {
        item.mode = "removed";
        return;
      }
      if (this.needToShrink(item, shrinkStart, shrinkEnd)) {
        item.mode = !item.innerItem.disableShrink && item.innerItem.iconName ? "small" : "removed";
        return;
      }
      item.mode = "large";
    });
  }
  private calcItemSize(item: Action, shrinkStart: boolean, shrinkEnd: boolean, exclude: string[] = []) {
    if (exclude.indexOf(item.id) != -1) return 0;
    if (this.needToShrink(item, shrinkStart, shrinkEnd)) {
      if (item.innerItem.disableShrink || !item.innerItem.iconName) return 0;
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

    // if (dimension >= items.reduce((sum, i) => sum += this.skipInputType(i, i.maxDimension), 0)) {
    //   this.setModeForActions({ "convertInputType": "removed" }, "large");
    //   return;
    // }

    if (dimension >= items.reduce((sum, i) => sum += this.calcItemSize(i, false, true), 0)) {
      this.setModeForActions(false, true);
      return;
    }

    if (dimension >= items.reduce((sum, i) => sum += this.calcItemSize(i, false, true, ["convertInputType"]), 0)) {
      this.setModeForActions(false, true, ["convertInputType"]);
      return;
    }

    if (dimension >= items.reduce((sum, i) => sum += this.calcItemSize(i, true, true), 0)) {
      this.setModeForActions(true, true);
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
  public actionContainer: SurveyElementActionContainer;
  protected expandCollapseAction: IAction;
  protected designerStateManager: DesignerStateManager;
  @property({ defaultValue: true }) allowDragging: boolean;
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
  @property() renderedCollapsed: boolean;

  public dblclick(event) {
    if (this.allowExpandCollapse) this.collapsed = !this.collapsed;
    event.stopPropagation();
  }
  private allowEditOption: boolean;
  private selectedPropPageFunc: (sender: Base, options: any) => void;
  private sidebarFlyoutModeChangedFunc: (sender: Base, options: any) => void;

  constructor(
    public creator: SurveyCreatorModel,
    protected surveyElement: T
  ) {
    super();
    this.designerStateManager = (creator.getPlugin("designer") as TabDesignerPlugin)?.designerStateManager;
    this.designerStateManager?.initForElement(surveyElement);
    this.selectedPropPageFunc = (sender: Base, options: any) => {
      if (options.name === "isSelectedInDesigner") {
        this.onElementSelectedChanged(options.newValue);
      }
    };
    this.sidebarFlyoutModeChangedFunc = (sender: Base, options: any) => {
      if (options.name === "flyoutMode") {
        this.updateActionsProperties();
      }
    };
    this.actionContainer = new SurveyElementActionContainer();
    this.actionContainer.dotsItem.iconSize = 16;
    this.actionContainer.dotsItem.popupModel.horizontalPosition = "center";

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
    this.collapsed = !!surveyElement && (this.designerStateManager?.getElementState(surveyElement).collapsed);
    this.setSurveyElement(surveyElement);
    this.creator.sidebar.onPropertyChanged.add(this.sidebarFlyoutModeChangedFunc);
    this.setShowAddQuestionButton(true);
    this.expandCollapseAction.visible = this.allowExpandCollapse;
  }

  protected detachElement(surveyElement: T): void {
    if (surveyElement) {
      surveyElement.onPropertyChanged.remove(this.selectedPropPageFunc);
    }
  }
  protected attachElement(surveyElement: T): void {
    if (surveyElement) {
      surveyElement.onPropertyChanged.add(this.selectedPropPageFunc);
    }
  }
  protected setSurveyElement(surveyElement: T): void {
    this.detachElement(this.surveyElement);
    this.surveyElement = surveyElement;
    this.attachElement(this.surveyElement);
    if (this.surveyElement) {
      var actions: Array<Action> = [];
      this.buildActions(actions);
      this.creator.onElementMenuItemsChanged(this.surveyElement, actions);
      const prevActions = this.actionContainer.actions;
      prevActions.forEach(action => action.dispose && action.dispose());
      this.actionContainer.setItems(actions);
      this.updateActionsProperties();
    }
  }

  protected checkActionProperties(): void {
    if (this.creator.isElementSelected(this.surveyElement)) {
      this.updateActionsProperties();
    }
  }

  public dispose(): void {
    super.dispose();
    this.detachElement(this.surveyElement);
    if (!this.actionContainer.isDisposed) {
      this.actionContainer.dispose();
    }
    this.creator.sidebar.onPropertyChanged.remove(this.sidebarFlyoutModeChangedFunc);
    this.selectedPropPageFunc = undefined;
    this.sidebarFlyoutModeChangedFunc = undefined;
  }
  protected onElementSelectedChanged(isSelected: boolean): void {
    if (!isSelected) return;
    this.updateActionsProperties();
  }
  protected updateActionsProperties(): void {
    if (this.isDisposed) return;
    this.updateElementAllowOptions(
      this.creator.getElementAllowOperations(this.surveyElement),
      this.isOperationsAllow()
    );
  }
  protected updateElementAllowOptions(options: any, operationsAllow: boolean): void {
    this.allowDragging = operationsAllow && options.allowDragging;
    this.allowExpandCollapse = this.creator.expandCollapseButtonVisibility != "never" && (options.allowExpandCollapse == undefined || !!options.allowExpandCollapse);
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
            this.creator.propertyGrid.getAllQuestions()[0].focus();
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
}
