import {
  Base,
  AdaptiveActionContainer,
  Action,
  SurveyModel,
  SurveyElement,
  property
} from "survey-core";
import { CreatorBase } from "../creator-base";

export class ActionContainerViewModel<T extends SurveyModel> extends Base {
  public actionContainer: AdaptiveActionContainer;
  @property({ defaultValue: true }) allowDragging: boolean;
  private selectedPropPageFunc: (sender: Base, options: any) => void;

  constructor(
    public creator: CreatorBase<T>,
    public surveyElement: SurveyElement
  ) {
    super();
    this.selectedPropPageFunc = (sender: Base, options: any) => {
      if (options.name === "isSelectedInDesigner") {
        this.onElementSelectedChanged(options.newValue);
      }
    };
    this.surveyElement.onPropertyChanged.add(this.selectedPropPageFunc);
    this.actionContainer = new AdaptiveActionContainer();
    var actions: Array<Action> = [];
    this.buildActions(actions);
    this.creator.onElementMenuItemsChanged(this.surveyElement, actions);
    this.actionContainer.setItems(actions);
  }
  protected checkActionProperties() {
    if (this.creator.isElementSelected(this.surveyElement)) {
      this.updateActionsProperties();
    }
  }

  public dispose() {
    super.dispose();
    this.surveyElement.onPropertyChanged.remove(this.selectedPropPageFunc);
  }
  protected onElementSelectedChanged(isSelected: boolean) {
    if (!isSelected) return;
    this.updateActionsProperties();
  }
  protected updateActionsProperties() {
    this.updateElementAllowOptions(
      this.creator.getElementAllowOperations(this.surveyElement),
      this.isOperationsAllow()
    );
  }
  protected updateElementAllowOptions(options: any, operationsAllow: boolean) {
    this.allowDragging = operationsAllow && options.allowDragging;
    this.updateActionVisibility(
      "delete",
      operationsAllow && options.allowDelete
    );
    this.updateActionVisibility(
      "duplicate",
      operationsAllow && options.allowCopy
    );
  }
  protected isOperationsAllow(): boolean {
    return !this.creator.readOnly;
  }
  protected updateActionVisibility(id: string, isVisible: boolean) {
    var action = this.getActionById(id);
    if (!action) return;
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
        title: this.creator.getLocString("survey.duplicate"),
        visibleIndex: 10,
        action: () => {
          this.duplicate();
        }
      })
    );

    items.push(
      new Action({
        id: "delete",
        needSeparator: items.length > 0,
        title: this.creator.getLocString("pe.delete"),
        visibleIndex: 30,
        action: () => {
          this.creator.deleteElement(this.surveyElement);
        }
      })
    );
  }

  protected duplicate() {}
}
