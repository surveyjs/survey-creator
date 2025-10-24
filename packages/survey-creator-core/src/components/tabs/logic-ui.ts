import {
  SurveyModel, Action, Question, MatrixDropdownRowModelBase, MatrixDynamicRowModel,
  PanelModel, QuestionMatrixDynamicModel, property, HashTable, LocalizableString, IDialogOptions
} from "survey-core";
import { settings as libSettings } from "survey-core";
import { ConditionEditor } from "../../property-grid/condition-survey";
import { ISurveyCreatorOptions, EmptySurveyCreatorOptions } from "../../creator-settings";
import { LogicItemEditor } from "./logic-item-editor";
import { getLogicString } from "./logic-types";
import { SurveyLogicAction, SurveyLogicItem } from "./logic-items";
import { SurveyLogic } from "./logic";
import { setSurveyJSONForPropertyGrid } from "../../property-grid/index";
import { QuestionEmbeddedSurveyModel } from "../embedded-survey";
import { updateMatrixLogicRemoveAction, updateMatrixLogicExpandAction } from "../../utils/actions";

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
    if (!this.options)this.options = new EmptySurveyCreatorOptions();
    this.setupToolbarItems();
  }
  public update(
    survey: SurveyModel = null,
    options: ISurveyCreatorOptions = null
  ) {
    super.update(survey, options);
    const newItemsSurveyValue = this.options.createSurvey(this.getLogicItemSurveyJSON(), "logic-items", this, (survey: SurveyModel): void => {
      survey.css = logicCss;
    });
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
      updateMatrixLogicExpandAction(<QuestionMatrixDynamicModel>options.question, options.actions, options.row);
      updateMatrixLogicRemoveAction(<QuestionMatrixDynamicModel>options.question, options.actions, <MatrixDynamicRowModel>options.row);
    });
    this.updateItemsSurveyData();
    this.onReadOnlyChanged();
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
      this.matrixItems["lockResetRenderedTable"] = true;
      this.addNew();
      this.matrixItems["lockResetRenderedTable"] = false;
    }
    const rows = this.matrixItems.visibleRows;
    rows[rows.length - 1].showDetailPanel();
  }
  public toggleExpressionEditorIsFastEntry() {
    this.expressionEditorIsFastEntry = !this.expressionEditorIsFastEntry;
    if (!!this.expressionEditor) {
      this.expressionEditor.setIsFastEntry(this.expressionEditorIsFastEntry);
    }
  }
  public updateEditableItemIsModifiedState(): void {
    if (!!this.editableItem) {
      this.editableItem.isModified = !!this.itemEditor && !!this.expressionEditor && (this.itemEditor.isModified || this.expressionEditor.isModified(this.editableItem.expression));
    }
  }
  private getUnsavedItems(): Array<SurveyLogicItem> {
    const res = [];
    for (var i = 0; i < this.visibleItems.length; i++) {
      const item = this.visibleItems[i];
      const itemUI = this.findLogicItemUI(item);
      if (!itemUI) continue;
      if (item.isNew) {
        if (!itemUI.expressionEditor.isEmpty() || !itemUI.itemEditor.isEmpty()) {
          res.push(item);
        }
      } else {
        if (item.isModified) {
          res.push(item);
        }
      }
    }
    return res;
  }
  private getErroredItem(items: Array<SurveyLogicItem>): SurveyLogicItem {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (this.isErroredItem(item)) return item;
    }
    return null;
  }
  private isErroredItem(item: SurveyLogicItem): boolean {
    const itemUI = this.findLogicItemUI(item);
    if (!itemUI) return false;
    return itemUI.expressionEditor.hasErrors() || itemUI.itemEditor.hasErrors();
  }
  private showErroredItem(item: SurveyLogicItem): void {
    const index = this.visibleItems.indexOf(item);
    const rows = this.matrixItems.visibleRows;
    const row = index > -1 && index < rows.length ? rows[index] : null;
    if (!!row) {
      rows.forEach(r => r.hideDetailPanel());
      this.mode = "view";
      row.showDetailPanel();
      this.hasErrorInUI();
    }
  }
  private saveItem(item: SurveyLogicItem): void {
    if (this.isErroredItem(item)) return;
    !!this.options && this.options.startUndoRedoTransaction();
    this.doItemApply(item);
    !!this.options && this.options.stopUndoRedoTransaction();
  }
  public tryLeaveUI(resultFunc?: (res: boolean) => void): boolean | undefined {
    this.updateEditableItemIsModifiedState();
    const unsavedItems = this.getUnsavedItems();
    if (unsavedItems.length === 0) {
      !!resultFunc && resultFunc(true);
      return true;
    }
    const erroredItem = this.getErroredItem(unsavedItems);
    const onLeavingFunc = () => {
      unsavedItems.forEach(item => this.saveItem(item));
      !!resultFunc && resultFunc(true);
    };
    if (!erroredItem) {
      onLeavingFunc();
      return true;
    }
    const onStayingFunc = () => {
      this.showErroredItem(erroredItem);
      !!resultFunc && resultFunc(false);
    };
    if (this.confirmLeavingOnError(onLeavingFunc, onStayingFunc)) {
      return undefined;
    }
    onStayingFunc();
    return false;
  }
  protected confirmLeavingOnError(onLeaving: () => void, onStaying: () => void): boolean {
    if (!libSettings.showDialog) return false;
    const locStr = new LocalizableString(undefined);
    locStr.text = this.getLocString("ed.lg.uncompletedRule_text");
    const popupModel = libSettings.showDialog(<IDialogOptions>{
      componentName: "sv-string-viewer",
      data: { locStr: locStr, locString: locStr, model: locStr }, //TODO fix in library
      onApply: () => {
        onLeaving();
        return true;
      },
      onCancel: () => {
        onStaying();
        return true;
      },
      cssClass: "svc-creator-popup",
      title: this.getLocString("ed.lg.uncompletedRule_title"),
      displayMode: "popup"
    }, this.options.rootElement);
    const toolbar = popupModel.footerToolbar;
    const applyBtn = toolbar.getActionById("apply");
    const cancelBtn = toolbar.getActionById("cancel");
    cancelBtn.title = this.getLocString("ed.lg.uncompletedRule_cancel");
    applyBtn.title = this.getLocString("ed.lg.uncompletedRule_apply");
    applyBtn.innerCss += " svc-logic-tab__leave-apply-button";
    popupModel.width = "800px";
    return true;
  }
  protected onPropertyValueChanged(name: string, oldValue: any, newValue: any) {
    super.onPropertyValueChanged(name, oldValue, newValue);
    if (name === "items") {
      this.updateItemsSurveyData();
    }
  }
  protected onReadOnlyChanged(): void {
    if (!this.itemsSurvey) return;
    this.itemsSurvey.mode = this.readOnly ? "display" : "edit";
    Object.keys(this.itemUIHash || {}).forEach(id => {
      this.updateEditModeLogicItem(this.itemUIHash[id]);
    });
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
  private updateEditModeLogicItem(item: ILogicItemUI) {
    if (!item) return;

    item.expressionEditor.editSurvey.readOnly = this.readOnly;
    item.itemEditor.editSurvey.readOnly = this.readOnly;
  }
  private getLogicItemUI(item: SurveyLogicItem): ILogicItemUI {
    let res: ILogicItemUI = this.findLogicItemUI(item);
    if (!res) {
      const context = <Question>item.getContext();
      res = { expressionEditor: this.createExpressionPropertyEditor(), itemEditor: new LogicItemEditor(item, this.options) };
      this.updateEditModeLogicItem(res);
      res.expressionEditor.context = context;
      res.itemEditor.context = context;
      res.expressionEditor.text = item.expression;
      res.expressionEditor.onContextChanged = (context: Question): void => {
        res.itemEditor.context = context;
      };
      this.itemUIHash[item.id] = res;
    }
    return res;
  }
  private findLogicItemUI(item: SurveyLogicItem): ILogicItemUI {
    return this.itemUIHash[item.id];
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
  get matrixItems(): QuestionMatrixDynamicModel {
    return this.itemsSurvey.getQuestionByName("items") as QuestionMatrixDynamicModel;
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
    this.updateEditableItemIsModifiedState();
    super.onEndEditing();
    this.expressionEditorValue = null;
    this.itemEditorValue = null;
  }
  protected onEditableItemApply() {
    this.doItemApply(this.editableItem);
    if (!this.editableItem.isSuitable(this.questionFilter, this.actionTypeFilter)) {
      this.questionFilter = "";
      this.actionTypeFilter = "";
    } else {
      this.updateItemsSurveyData();
    }
  }
  private doItemApply(item: SurveyLogicItem): void {
    const itemUI = this.findLogicItemUI(item);
    if (!itemUI) return;
    itemUI.expressionEditor.apply();
    itemUI.itemEditor.apply();
    item.apply(itemUI.expressionEditor.text);
    if (item.actions.length != itemUI.itemEditor.panels.length) {
      itemUI.itemEditor.setEditableItem(item);
    }
    itemUI.itemEditor.resetModified();
    item.isNew = false;
  }
  protected hasErrorInUI(): boolean {
    const creator = (<any>this.survey).creator;
    if (this.expressionEditor.hasErrorInUI()) {
      this.errorText = this.expressionEditor.errorText;
      return true;
    }
    if (this.itemEditor.hasErrors()) {
      this.errorText = getLogicString("actionInvalid");
      !!creator &&
        creator.notify(this.errorText, "error");
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
    const creator = (<any>this.survey).creator;
    const json = (creator && creator.useTableViewInLogicTab) ? this.getTwoColumnsLayout() : this.getOneColumnLayout();
    setSurveyJSONForPropertyGrid(json);
    return json;
  }
  private getTwoColumnsLayout() {
    return {
      elements: [
        {
          type: "matrixdynamic",
          name: "items",
          titleLocation: "hidden",
          detailPanelMode: "underRowSingle",
          allowAddRows: false,
          allowAdaptiveActions: false,
          rowCount: 0,
          columns: [
            {
              cellType: "linkvalue",
              name: "conditions",
              title: this.getLocString("ed.lg.conditions")
            },
            {
              cellType: "linkvalue",
              name: "actions",
              title: this.getLocString("ed.lg.actions")
            }
          ]
        }
      ]
    };
  }
  private getOneColumnLayout() {
    return {
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
              name: "rules",
              showTooltip: true,
              width: "100%"
            }
          ]
        }
      ]
    };
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
    });
    return res;
  }
  private getVisibleItems(): SurveyLogicItem[] {
    return this.items.filter(item => item.isNew || item.isSuitable(this.questionFilter, this.actionTypeFilter));
  }
  private getDataFromItem(item: SurveyLogicItem) {
    const creator = (<any>this.survey).creator;
    if (creator && creator.useTableViewInLogicTab) {
      return {
        conditions: item.expressionText,
        actions: item.actionsText
      };
    } else {
      return { rules: this.getLogicItemDisplayText(item) };
    }
  }
  private getLogicItemDisplayText(item: SurveyLogicItem): string {
    const text = item.getDisplayText();
    if (!this.options) return text;
    return this.options.onLogicGetTitleCallback(item.expression, item.expressionText, text, item);
  }
  private updateItemsSurveyData() {
    if (!this.itemsSurvey) return;
    var data = [];
    this.visibleItems = this.getVisibleItems();
    this.visibleItems.forEach(item => {
      data.push(this.getDataFromItem(item));
    });

    this.matrixItems.onHasDetailPanelCallback = (row) => { return true; };
    this.matrixItems.onCreateDetailPanelCallback = (
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
          this.updateRowIsAdditionalClasses(row.rowIndex - 1, false);
        } else {
          this.mode = "view";
          this.updateRenderedRows();
        }
        this.updateNewActionState();
      };
      panel.addNewQuestion("embeddedsurvey", "conditions");
      panel.addNewQuestion("embeddedsurvey", "actions");

      panel.footerActions.push({
        id: "saveDetailPanel",
        innerCss: "sl-panel__done-button",
        title: this.getLocString("pe.doneEditing"),
        action: () => {
          if (this.saveEditableItem()) {
            row.hideDetailPanel(true);
          }
        }
      });
    };
    this.matrixItems.onCellCreatedCallback = (options: any) => {
      options.cell.question.linkClickCallback = () => {
        if (options.row.isDetailPanelShowing) {
          options.row.hideDetailPanel();
        } else {
          options.row.showDetailPanel();
        }
      };
      options.cell.question.showClear = false;
      options.cell.question.allowClear = false;
    };
    this.matrixItems.value = data;
    this.updateRenderedRows();
  }
  private updateRenderedRows() {
    this.visibleItems.forEach((_, index) => {
      this.updateRowIsAdditionalClasses(index, this.visibleItems[index].isModified || this.visibleItems[index].isNew);
    });
  }
  private updateRowIsAdditionalClasses(index: number, isAdditionalClasses: boolean) {
    if (!!this.matrixItems.renderedTable) {
      const visibleRows = this.matrixItems.renderedTable.rows.filter(row => row.visible);
      visibleRows[index].isAdditionalClasses = isAdditionalClasses;
    }
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
    });
  }
  public get addNewText(): string {
    return getLogicString("addNewItem");
  }

  public get emptyTabPlaceholder(): string {
    return getLogicString("empty_tab");
  }
  public get placeholderTitleText(): string {
    if (this.options.isMobileView)
      return getLogicString("logicPlaceholderTitleMobile");
    return getLogicString("logicPlaceholderTitle");
  }
  public get placeholderDescriptionText(): string {
    if (this.options.isMobileView)
      return getLogicString("logicPlaceholderDescriptionMobile");
    return getLogicString("logicPlaceholderDescription");
  }

}