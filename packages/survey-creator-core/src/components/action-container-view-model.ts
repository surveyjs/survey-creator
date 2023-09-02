import {
  Base,
  AdaptiveActionContainer,
  Action,
  SurveyModel,
  SurveyElement,
  property
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { settings } from "../creator-settings";

export class SurveyElementAdornerBase<T extends SurveyElement = SurveyElement> extends Base {
  public actionContainer: AdaptiveActionContainer;
  @property({ defaultValue: true }) allowDragging: boolean;
  private allowEditOption: boolean;
  private selectedPropPageFunc: (sender: Base, options: any) => void;
  private sidebarFlyoutModeChangedFunc: (sender: Base, options: any) => void;

  constructor(
    public creator: CreatorBase,
    protected surveyElement: T
  ) {
    super();
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
    this.actionContainer = new AdaptiveActionContainer();
    this.actionContainer.dotsItem.iconSize = 16;
    this.actionContainer.dotsItem.popupModel.horizontalPosition = "center";
    var actions: Array<Action> = [];
    this.buildActions(actions);
    this.setSurveyElement(surveyElement);
    if(this.surveyElement) {
      this.creator.sidebar.onPropertyChanged.add(this.sidebarFlyoutModeChangedFunc);
      this.creator.onElementMenuItemsChanged(this.surveyElement, actions);
      this.actionContainer.setItems(actions);
    }
    this.setShowAddQuestionButton(true);
  }

  protected detachElement(surveyElement: T): void {
    if(surveyElement) {
      surveyElement.onPropertyChanged.remove(this.selectedPropPageFunc);
    }
  }
  protected attachElement(surveyElement: T): void {
    if(surveyElement) {
      surveyElement.onPropertyChanged.add(this.selectedPropPageFunc);
    }
  }
  protected setSurveyElement(surveyElement: T): void {
    this.detachElement(this.surveyElement);
    this.surveyElement = surveyElement;
    this.attachElement(this.surveyElement);
    this.updateActionsProperties();
  }

  protected checkActionProperties(): void {
    if (this.creator.isElementSelected(this.surveyElement)) {
      this.updateActionsProperties();
    }
  }

  public dispose(): void {
    super.dispose();
    this.detachElement(this.surveyElement);
  }
  protected onElementSelectedChanged(isSelected: boolean): void {
    if (!isSelected) return;
    this.updateActionsProperties();
  }
  protected updateActionsProperties(): void {
    if(this.isDisposed) return;
    this.updateElementAllowOptions(
      this.creator.getElementAllowOperations(this.surveyElement),
      this.isOperationsAllow()
    );
  }
  protected updateElementAllowOptions(options: any, operationsAllow: boolean): void {
    this.allowDragging = operationsAllow && options.allowDragging;
    this.allowEditOption = (options.allowEdit == undefined || !!options.allowEdit);
    this.updateActionVisibility("delete", operationsAllow && options.allowDelete);
    this.updateActionVisibility("duplicate", operationsAllow && options.allowCopy);
    const settingsVisibility = (options.allowEdit !== undefined) ? (operationsAllow && options.allowEdit) : this.creator.sidebar.flyoutMode;
    this.updateActionVisibility("settings", settingsVisibility);
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
        css: "sv-action-bar-item--secondary",
        title: this.creator.getLocString("survey.duplicate"),
        visibleIndex: 10,
        iconSize: 16,
        action: () => {
          this.duplicate();
        }
      })
    );

    items.push(
      new Action({
        id: "settings",
        iconName: "icon-settings_16x16",
        css: "sv-action-bar-item--secondary",
        title: this.creator.getLocString("ed.settings"),
        locTooltipName: "ed.settingsTooltip",
        visibleIndex: 20,
        iconSize: 16,
        action: () => {
          this.creator.setShowSidebar(true, true);
          this.creator.propertyGrid.getAllQuestions()[0].focus();
        }
      })
    );

    items.push(
      new Action({
        id: "delete",
        iconName: "icon-delete_16x16",
        css: "sv-action-bar-item--secondary",
        //needSeparator: items.length > 0,
        title: this.creator.getLocString("pe.delete"),
        visibleIndex: 30,
        iconSize: 16,
        action: () => {
          this.delete();
        }
      })
    );
  }
  public get allowEdit(): boolean {
    return !!this.creator && !this.creator.readOnly && this.allowEditOption;
  }
  public get showAddQuestionButton(): boolean {
    return this.getPropertyValue("showAddQuestionButton");
  }
  protected setShowAddQuestionButton(val: boolean): void {
    this.setPropertyValue("showAddQuestionButton", val && this.allowEdit && settings.designer.showAddQuestionButton);
  }
  protected duplicate(): void { }
  protected delete(): void {
    this.creator.deleteElement(this.surveyElement);
  }
}
