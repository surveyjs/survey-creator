import {
  Base,
  SurveyModel,
  IActionBarItem,
  propertyArray,
  property,
} from "survey-core";
import { ConditionEditor } from "../property-grid/condition-survey";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions } from "../settings";
import { LogicItemEditor } from "./logic-item-editor";
import { getLogicString } from "./logic-types";
import { SurveyLogicAction } from "./logic-items";
import { SurveyLogic } from "./logic";
import { setSurveyJSONForPropertyGrid } from "../property-grid/index";
import { CreatorBase, ICreatorPlugin } from "../creator-base";
import { editorLocalization } from "../entries";

export class SurveyLogicUI extends SurveyLogic {
  private expressionEditorValue: ConditionEditor;
  private itemEditorValue: LogicItemEditor;
  private itemsSurveyValue: SurveyModel;
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
    this.itemsSurvey.onMatrixCellCreated.add((sender, options) => {
      var q = options.cellQuestion;
      q.ignoreHtmlProgressing = true;
      q.html = q.value;
    });
    this.itemsSurvey.onMatrixRowRemoved.add((sender, options) => {
      this.removeItem(this.items[options.rowIndex]);
    });
    this.itemsSurvey.onGetMatrixRowActions.add((sender, options) => {
      if (this.readOnly) return;
      options.actions.push({
        id: "svd-logic-edit-item",
        title: this.editText,
        component: "sv-action-bar-item",
        action: () => {
          this.editItem(this.items[options.row.rowIndex - 1]);
        },
      });
    });
    this.updateItemsSurveyData();
    this.setupToolbarItems();
    this.itemEditorValue = new LogicItemEditor(null, this.options);
  }
  public dispose() {
    super.dispose();
    this.itemsSurveyValue.dispose();
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
    this.itemEditor.apply();
    this.editableItem.apply(this.expressionEditor.text);
    if (this.editableItem.actions.length != this.itemEditor.panels.length) {
      this.itemEditor.editableItem = this.editableItem;
    }
    this.updateItemsSurveyData();
  }
  protected hasErrorInUI(): boolean {
    if (!this.expressionEditor.isReady) {
      this.errorText = getLogicString("expressionInvalid");
      return true;
    }
    if (this.itemEditor.hasErrors()) {
      this.errorText = getLogicString("actionInvalid");
      return true;
    }
    return false;
  }
  protected getExpressionText(): string {
    return this.expressionEditor.text;
  }
  protected getEditingActions(): Array<SurveyLogicAction> {
    return this.itemEditor.getEditingActions();
  }
  protected getLogicItemSurveyJSON(): any {
    var json = {
      elements: [
        {
          type: "matrixdynamic",
          name: "items",
          titleLocation: "hidden",
          allowAddRows: false,
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
    setSurveyJSONForPropertyGrid(json);
    return json;
  }
  private createExpressionPropertyEditor() {
    this.expressionEditorValue = new ConditionEditor(
      this.survey,
      null,
      this.options
    );
    this.expressionEditor.title = getLogicString("expressionEditorTitle");
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
    var matrix = this.itemsSurvey.getQuestionByName("items");
    matrix.rowCount = 0;
    var data = [];
    for (var i = 0; i < this.items.length; i++) {
      data.push({
        conditions: this.items[i].expressionText,
        actions: this.items[i].actionsText,
      });
    }
    matrix.value = data;
    matrix.rowCount = data.length;
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
        this.saveEditableItemAndBack();
      },
    });
    this.toolbarEditItems.push({
      id: "svd-logic-save",
      title: this.getLocString("pe.save"),
      tooltip: this.getLocString("pe.saveTooltip"),
      component: "sv-action-bar-item",
      action: () => {
        this.saveEditableItem();
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
  public get addNewText(): string {
    var lgAddNewItem = getLogicString("addNewItem");
    return !!lgAddNewItem ? lgAddNewItem : this.getLocString("pe.addNew");
  }
  public get editText(): string {
    return this.getLocString("pe.edit");
  }
}

export class LogicModel extends Base {
  onCreateLogic: (logic: SurveyLogicUI) => void;
  constructor(private creator: CreatorBase<SurveyModel>) {
    super();
  }
  @property() logic: SurveyLogicUI;
  public get showing(): boolean {
    return this.getPropertyValue("showing", false);
  }
  public set showing(val: boolean) {
    this.setPropertyValue("showing", val);
  }
  public activate(): void {
    var logic = new SurveyLogicUI(this.creator.survey, this.creator);
    if (!!this.onCreateLogic) this.onCreateLogic(logic);
    this.logic = logic;
    this.showing = true;
  }
  public deactivate(): boolean {
    this.showing = false;
    this.logic.dispose();
    this.logic = undefined;
    return true;
  }
}

export class TabLogicPlugin implements ICreatorPlugin {
  public model: LogicModel;
  constructor(creator: CreatorBase<SurveyModel>) {
    this.model = new LogicModel(creator);
    creator.tabs.push({
      id: "logic",
      title: editorLocalization.getString("ed.logic"),
      component: "svc-tab-logic",
      data: this,
      action: () => {
        creator.makeNewViewActive("logic");
      },
      active: () => creator.viewType === "logic",
    });
    creator.plugins["logic"] = this;
  }
  public activate(): void {
    this.model.activate();
  }
  public deactivate(): boolean {
    return this.model.deactivate();
  }
}
