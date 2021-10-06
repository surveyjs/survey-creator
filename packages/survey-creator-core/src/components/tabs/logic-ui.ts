import { SurveyModel, Action, MatrixDropdownRowModelBase, PanelModel, QuestionMatrixDynamicModel, property, HashTable } from "survey-core";
import { ConditionEditor } from "../../property-grid/condition-survey";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions } from "../../settings";
import { LogicItemEditor } from "./logic-item-editor";
import { getLogicString } from "./logic-types";
import { SurveyLogicAction, SurveyLogicItem } from "./logic-items";
import { SurveyLogic } from "./logic";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import { QuestionEmbeddedSurveyModel } from "../embedded-survey";
import { updateMatrixRemoveAction } from "../../utils/actions";

import "./logic-ui.scss";
import { logicCss } from "./logic-theme";

interface ILogicItemUI {
  expressionEditor: ConditionEditor;
  itemEditor: LogicItemEditor;
}

export class SurveyLogicUI extends SurveyLogic {
  private expressionEditorValue: ConditionEditor;
  private itemEditorValue: LogicItemEditor;
  @property() itemsSurveyValue: SurveyModel;
  @property() expressionEditorIsFastEntry: boolean;
  @property() expressionEditorCanShowBuilder: boolean;
  private visibleItems: SurveyLogicItem[];
  private itemUIHash: HashTable<ILogicItemUI> = {};
  public addNewButton: Action;

  constructor(
    public survey: SurveyModel,
    public options: ISurveyCreatorOptions = null
  ) {
    super(survey, options);
    if (!this.options) this.options = new EmptySurveyCreatorOptions();
    this.setupToolbarItems();
    this.update();
  }
  public update(
    survey: SurveyModel = null,
    options: ISurveyCreatorOptions = null
  ) {
    super.update(survey, options);
    const newItemsSurveyValue = this.options.createSurvey(
      this.getLogicItemSurveyJSON(),
      "logic-items"
    );
    newItemsSurveyValue.css = logicCss;
    this.itemsSurveyValue = newItemsSurveyValue;
    this.itemsSurvey.onMatrixRowRemoving.add((sender, options) => {
      const item = this.visibleItems[options.rowIndex];
      options.allow = this.canRemoveItem(item);
    });
    this.itemsSurvey.onMatrixRowRemoved.add((sender, options) => {
      const item = this.visibleItems[options.rowIndex];
      const isDeleteEditable = item === this.editableItem;
      this.removeItem(item, false);
      if (isDeleteEditable) {
        this.mode = "view";
        this.updateNewActionState();
      }
      this.expressionEditorCanShowBuilder = !!this.editableItem;
    });
    this.itemsSurvey.onGetMatrixRowActions.add((sender, options) => {
      if (this.readOnly) return;
      updateMatrixRemoveAction(options.question, options.actions, options.row);
    });
    this.updateItemsSurveyData();
  }
  @property({
    onSet: (value, target: SurveyLogicUI) => {
      target.updateItemsSurveyData();
    }
  }) questionFilter: string;
  @property({
    onSet: (value, target: SurveyLogicUI) => {
      target.updateItemsSurveyData();
    }
  }) actionTypeFilter: string;
  public dispose(): void {
    super.dispose();
    for (let key in this.itemUIHash) {
      const itemUI = this.itemUIHash[key];
      itemUI.expressionEditor.dispose();
      itemUI.itemEditor.dispose();
    }
    this.itemUIHash = {};
  }
  public addNewUI() {
    if (this.items.length == 0 || !this.items[this.items.length - 1].isNew) {
      this.addNew();
    }
    const matrix = <QuestionMatrixDynamicModel>this.itemsSurvey.getQuestionByName("items");
    matrix.visibleRows[matrix.visibleRows.length - 1].showDetailPanel();
  }
  public toggleExpressionEditorIsFastEntry() {
    this.expressionEditorIsFastEntry = !this.expressionEditorIsFastEntry;
    if (!!this.expressionEditor) {
      this.expressionEditor.setIsFastEntry(this.expressionEditorIsFastEntry);
    }
  }
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
  public getExpressionEditor(item: SurveyLogicItem): ConditionEditor {
    return this.getLogicItemUI(item).expressionEditor;
  }
  public getLogicItemEditor(item: SurveyLogicItem): LogicItemEditor {
    return this.getLogicItemUI(item).itemEditor;
  }
  private getLogicItemUI(item: SurveyLogicItem): ILogicItemUI {
    let res: ILogicItemUI = this.itemUIHash[item.id];
    if (!res) {
      res = { expressionEditor: this.createExpressionPropertyEditor(), itemEditor: new LogicItemEditor(item, this.options) };
      res.expressionEditor.text = item.expression;
      this.itemUIHash[item.id] = res;
    }
    return res;
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
  public get hasItems(): boolean {
    return this.items.length > 0;
  }
  protected onStartEditing() {
    super.onStartEditing();
    this.expressionEditorValue = this.getExpressionEditor(this.editableItem);
    this.itemEditorValue = this.getLogicItemEditor(this.editableItem);
    this.expressionEditorIsFastEntry = false;
    this.expressionEditor.setIsFastEntry(this.expressionEditorIsFastEntry);
    this.expressionEditorCanShowBuilder = ConditionEditor.canBuildExpression(this.expressionEditor.text);
  }
  protected onEndEditing() {
    if (!!this.editableItem) {
      this.editableItem.isModified = !!this.itemEditor && !!this.expressionEditor && (this.itemEditor.isModified || this.expressionEditor.text !== this.editableItem.expression);
    }
    super.onEndEditing();
    this.expressionEditorValue = null;
    this.itemEditorValue = null;
  }
  protected onEditableItemApply() {
    this.expressionEditor.apply();
    this.itemEditor.apply();
    this.editableItem.apply(this.expressionEditor.text);
    if (this.editableItem.actions.length != this.itemEditor.panels.length) {
      this.itemEditor.setEditableItem(this.editableItem);
    }
    this.editableItem.isNew = false;
    if (!this.editableItem.isSuitable(this.questionFilter, this.actionTypeFilter)) {
      this.questionFilter = "";
      this.actionTypeFilter = "";
    } else {
      this.updateItemsSurveyData();
    }
  }
  protected hasErrorInUI(): boolean {
    if (!this.expressionEditor.isReady) {
      this.errorText = getLogicString("expressionInvalid");
      !!this.survey.creator &&
        this.survey.creator.notify(this.errorText, "error");
      return true;
    }
    if (this.itemEditor.hasErrors()) {
      this.errorText = getLogicString("actionInvalid");
      !!this.survey.creator &&
        this.survey.creator.notify(this.errorText, "error");
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
          detailPanelMode: "underRowSingle",
          allowAddRows: false,
          allowAdaptiveActions: false,
          rowCount: 0,
          showHeader: false,
          columns: [
            {
              cellType: "linkvalue",
              name: "conditions",
              readOnly: true,
              title: this.getLocString("ed.lg.conditions")
            },
            {
              cellType: "linkvalue",
              name: "actions",
              readOnly: true,
              title: this.getLocString("ed.lg.actions")
            }
          ]
        }
      ]
    };
    setSurveyJSONForPropertyGrid(json);
    return json;
  }
  private createExpressionPropertyEditor(): ConditionEditor {
    const res = new ConditionEditor(
      this.survey,
      null,
      this.options
    );
    res.isModal = false;
    res.editSurvey.onValueChanged.add((sender, options) => {
      if (options.name === "textEditor") {
        this.expressionEditorCanShowBuilder = ConditionEditor.canBuildExpression(options.value);
      }
    })
    return res;
  }
  private getVisibleItems(): SurveyLogicItem[] {
    return this.items.filter(item => item.isNew || item.isSuitable(this.questionFilter, this.actionTypeFilter));
  }
  private updateItemsSurveyData() {
    if (!this.itemsSurvey) return;
    const matrix = this.itemsSurvey.getQuestionByName("items");
    var data = [];
    this.visibleItems = this.getVisibleItems();
    for (var i = 0; i < this.visibleItems.length; i++) {
      data.push({
        conditions: this.visibleItems[i].expressionText,
        actions: this.visibleItems[i].actionsText
      });
    }
    matrix.onHasDetailPanelCallback = (row) => { return true; };
    matrix.onCreateDetailPanelCallback = (
      row: MatrixDropdownRowModelBase,
      panel: PanelModel
    ) => {
      row.onDetailPanelShowingChanged = () => {
        this.expressionEditorCanShowBuilder = row.isDetailPanelShowing;
        if (row.isDetailPanelShowing) {
          if (this.mode === "view") {
            const logicItem = this.visibleItems[row.rowIndex - 1];
            this.editItem(logicItem);
          }
          const condQuestion = <QuestionEmbeddedSurveyModel>panel.getQuestionByName("conditions");
          const actionsQuestion = <QuestionEmbeddedSurveyModel>panel.getQuestionByName("actions");
          condQuestion.embeddedSurvey = this.expressionEditor.editSurvey;
          actionsQuestion.embeddedSurvey = this.itemEditorValue.editSurvey;
        } else {
          this.mode = "view";
        }
        this.updateNewActionState();
      };
      panel.addNewQuestion("embeddedsurvey", "conditions");
      panel.addNewQuestion("embeddedsurvey", "actions");

      panel.footerActions.push({
        id: "saveDetailPanel",
        innerCss: "sv-btn sv-matrixdynamic__add-btn",
        title: this.getLocString("pe.doneEditing"),
        action: () => {
          if (this.saveEditableItem()) {
            row.hideDetailPanel(true);
          }
        }
      });
    };
    matrix.value = data;
  }
  private updateNewActionState(): void {
    this.addNewButton.enabled = this.mode !== "new";
  }
  private setupToolbarItems() {
    this.addNewButton = new Action({
      id: "svd-logic-addNew",
      title: this.addNewText,
      tooltip: this.addNewText,
      component: "sv-action-bar-item",
      enabled: true,
      action: () => {
        this.addNewUI();
      }
    })
  }
  public get addNewText(): string {
    var lgAddNewItem = getLogicString("addNewItem");
    return !!lgAddNewItem ? lgAddNewItem : this.getLocString("pe.addNew");
  }

  public get emptyTabPlaceHolder(): string {
    return getLogicString("empty_tab");
  }
}