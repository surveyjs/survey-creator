import { SurveyModel, IActionBarItem, propertyArray } from "survey-core";
import { ConditionEditor } from "../property-grid/condition-survey";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions } from "../settings";
import { LogicItemEditor } from "./logic-item-editor";
import { getLogicString } from "./logic-types";
import { SurveyLogic } from "./logic";

export class SurveyLogicUI extends SurveyLogic {
  private expressionEditorValue: ConditionEditor;
  private itemEditorValue: LogicItemEditor;
  private itemsSurveyValue: SurveyModel;
  private;
  constructor(
    public survey: SurveyModel,
    public options: ISurveyCreatorOptions = null
  ) {
    super(survey, options);
    if (!this.options) this.options = new EmptySurveyCreatorOptions();
    this.createExpressionPropertyEditor();
    //TODO
    this.itemsSurveyValue = this.options.createSurvey(
      this.getLogicItemSurveyJSON(),
      "logic-items"
    );
    this.updateItemsSurveyData();
    this.setupToolbarItems();
    this.itemEditorValue = new LogicItemEditor(null, this.options);
  }
  /**
   * The list of toolbar items. You may add/remove/replace them.
   * @see IActionBarItem
   */
  @propertyArray() toolbarItems: Array<IActionBarItem>;
  @propertyArray() toolbarEditItems: Array<IActionBarItem>;
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "items") {
      this.updateItemsSurveyData();
    }
  }
  public get expressionEditor(): ConditionEditor {
    return this.expressionEditorValue;
  }
  public get itemEditor(): LogicItemEditor {
    return this.itemEditorValue;
  }
  public get expressionSurvey(): SurveyModel {
    return this.expressionEditor.editSurvey;
  }
  public get itemEditorSurvey(): SurveyModel {
    return this.itemEditor.editSurvey;
  }
  public get itemsSurvey(): SurveyModel {
    return this.itemsSurveyValue;
  }
  protected onStartEditing() {
    super.onStartEditing();
    this.expressionEditor.text = this.editableItem.expression;
    this.itemEditor.editableItem = this.editableItem;
  }
  protected onEndEditing() {
    super.onEndEditing();
    this.expressionEditor.text = "";
    this.itemEditor.editableItem = null;
  }
  protected onEditableItemApply() {
    this.expressionEditor.apply();
    this.editableItem.apply(this.expressionEditor.text);
  }
  protected hasErrorInUI(): boolean {
    return !this.expressionEditor.isReady;
  }
  protected getExpressionText(): string {
    return this.expressionEditor.text;
  }
  protected getLogicItemSurveyJSON(): any {
    var json = {
      elements: [
        {
          type: "matrixdynamic",
          name: "items",
          columns: [
            {
              cellType: "html",
              name: "conditions",
              title: this.getLocString("ed.lg.conditions"),
            },
            {
              cellType: "html",
              name: "actions",
              title: this.getLocString("ed.lg.actions"),
            },
          ],
        },
      ],
    };
    return json;
  }
  private createExpressionPropertyEditor() {
    this.expressionEditorValue = new ConditionEditor(
      this.survey,
      null,
      this.options
    );
    /*
    this.expressionEditor.isEditorShowing = true;
    this.expressionEditor.isWideMode = true;
    this.expressionEditor.object = this.survey;
    this.expressionEditor.options = this.options;
    this.expressionEditor.koSetupText(this.expressionSetupText);
    */
  }
  private updateItemsSurveyData() {
    if (!this.itemsSurvey) return;
    var data = [];
    for (var i = 0; i < this.items.length; i++) {
      data.push({
        conditions: this.items[i].title,
        actions: this.items[i].actionsText,
      });
    }
    this.itemsSurvey.getQuestionByName("items").value = data;
  }
  private setupToolbarItems() {
    this.toolbarItems.push({
      id: "svd-logic-addNew",
      title: this.addNewText,
      tooltip: this.addNewText,
      component: "sv-action-bar-item",
      action: () => {
        this.addNew();
      },
    });
    this.toolbarEditItems.push({
      id: "svd-logic-saveAndBack",
      title: this.getLocString("pe.saveAndBack"),
      tooltip: this.getLocString("pe.saveAndBackTooltip"),
      component: "sv-action-bar-item",
      action: () => {
        if (this.saveEditableItem()) this.mode = "view";
      },
    });
    this.toolbarEditItems.push({
      id: "svd-logic-save",
      title: this.getLocString("pe.save"),
      tooltip: this.getLocString("pe.saveTooltip"),
      component: "sv-action-bar-item",
      action: () => {
        if (this.saveEditableItem()) this.mode = "view";
      },
    });
    this.toolbarEditItems.push({
      id: "svd-logic-back",
      title: this.getLocString("pe.back"),
      tooltip: this.getLocString("pe.backTooltip"),
      component: "sv-action-bar-item",
      action: () => {
        this.mode = "view";
      },
    });
  }
  private get addNewText(): string {
    var lgAddNewItem = getLogicString("addNewItem");
    return !!lgAddNewItem ? lgAddNewItem : this.getLocString("pe.addNew");
  }
  private get addNewActionText(): string {
    return getLogicString("addNewAction");
  }
  private get selectedActionCaption(): string {
    return getLogicString("selectedActionCaption");
  }
  private get expressionSetupText(): string {
    return getLogicString("expressionSetup");
  }
  private get actionsSetupText(): string {
    return getLogicString("actionsSetup");
  }
}
