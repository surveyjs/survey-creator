import {
  SurveyModel, Action, Question, MatrixDropdownRowModelBase, MatrixDynamicRowModel,
  PanelModel, QuestionMatrixDynamicModel, property, HashTable, LocalizableString, IDialogOptions,
  ActionContainer, QuestionMatrixDropdownRenderedRow
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
    // The rule is found through the row while it is removed: by onMatrixRowRemoved its record has left the matrix.
    let removingRow: MatrixDropdownRowModelBase;
    let removingItem: SurveyLogicItem;
    this.itemsSurvey.onMatrixRowRemoving.add((sender, options) => {
      removingRow = options.row;
      removingItem = this.getItemByRow(options.row);
      options.allow = this.canRemoveItem(removingItem);
    });
    this.itemsSurvey.onMatrixRowRemoved.add((sender, options) => {
      const item = options.row === removingRow ? removingItem : undefined;
      removingRow = undefined;
      removingItem = undefined;
      if (!item) return;
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
    const matrix = this.matrixItems;
    matrix.visibleRowsChangedCallback = () => {
      if (matrix === this.matrixItems) {
        this.onItemsRowsChanged();
      }
    };
    matrix.onRenderedTableResetCallback = () => {
      if (matrix === this.matrixItems) {
        this.onRenderedTableReset();
      }
    };
    matrix.registerFunctionOnPropertyValueChanged("pageIndex", () => {
      if (matrix === this.matrixItems) {
        this.onPageChanged();
      }
    }, "logic-ui");
    this.updateItemsSurveyData();
    this.onReadOnlyChanged();
  }
  @property({
    onSet: (value, target: SurveyLogicUI) => {
      target.updateItemsSurveyData(true);
    }
  }) questionFilter: string;
  @property({
    onSet: (value, target: SurveyLogicUI) => {
      target.updateItemsSurveyData(true);
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
      // The lock keeps the rendered table, so the added row is animated. A paged matrix rebuilds the
      // page's table on an add instead, and a reset asked for while the table is locked is dropped.
      const lockTable = !(this.matrixItems.pageSize > 0);
      if (lockTable) {
        this.matrixItems["lockResetRenderedTable"] = true;
      }
      this.addNew();
      if (lockTable) {
        this.matrixItems["lockResetRenderedTable"] = false;
      }
    }
    const row = this.showItemRow(this.visibleItems[this.visibleItems.length - 1]);
    if (!!row) {
      row.showDetailPanel();
    }
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
    if (this.getItemRecordIndex(item) < 0) return;
    this.matrixItems.visibleRows.forEach(r => r.hideDetailPanel());
    this.mode = "view";
    const row = this.showItemRow(item);
    if (!!row) {
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
      data: { model: locStr },
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
          pageSize: this.getItemsPageSize(),
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
          pageSize: this.getItemsPageSize(),
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
  // Read only here, when the rule list survey is built: 0 is no paging.
  private getItemsPageSize(): number {
    const pageSize = this.options.logicRulesPageSize;
    return pageSize > 0 ? pageSize : 0;
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
  private updateItemsSurveyData(isNewList?: boolean) {
    if (!this.itemsSurvey) return;
    this.isUpdatingItemsSurveyData = true;
    try {
      this.updateItemsSurveyDataCore(isNewList);
    } finally {
      this.isUpdatingItemsSurveyData = false;
    }
  }
  private updateItemsSurveyDataCore(isNewList: boolean) {
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
            this.editItem(this.getItemByRow(row));
          }
          const condQuestion = <QuestionEmbeddedSurveyModel>panel.getQuestionByName("conditions");
          const actionsQuestion = <QuestionEmbeddedSurveyModel>panel.getQuestionByName("actions");
          condQuestion.embeddedSurvey = this.expressionEditor.editSurvey;
          actionsQuestion.embeddedSurvey = this.itemEditorValue.editSurvey;
          this.updateRowIsAdditionalClasses(row, false);
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
    if (isNewList) {
      this.matrixItems.pageIndex = 0;
    }
    this.updateRenderedRows();
  }
  // The matrix pages the rules: its rows and its rendered table hold the current page only, and
  // row.rowIndex is the 1-based record index across all pages - the rule's index in visibleItems + 1.
  private getItemByRow(row: MatrixDropdownRowModelBase): SurveyLogicItem {
    const index = !!row ? row.rowIndex - 1 : -1;
    return index > -1 && index < this.visibleItems.length ? this.visibleItems[index] : undefined;
  }
  private getItemRecordIndex(item: SurveyLogicItem): number {
    return this.visibleItems.indexOf(item);
  }
  // The effective page size is pageSize capped by survey-core's settings.maxPageSize.
  private getRecordPageIndex(recordIndex: number): number {
    let pageSize = this.matrixItems.pageSize;
    const maxPageSize = libSettings.maxPageSize;
    if (maxPageSize > 0 && pageSize > maxPageSize) pageSize = maxPageSize;
    return pageSize > 0 ? Math.floor(recordIndex / pageSize) : 0;
  }
  // Goes to the page that holds the rule and returns the rule's row there.
  private showItemRow(item: SurveyLogicItem): MatrixDropdownRowModelBase {
    const index = this.getItemRecordIndex(item);
    if (index < 0) return null;
    this.matrixItems.pageIndex = this.getRecordPageIndex(index);
    return this.matrixItems.visibleRows.find(row => row.rowIndex - 1 === index) || null;
  }
  private isUpdatingItemsSurveyData: boolean;
  private isPageMoving: boolean;
  // A page move drops the rows of the page it leaves: an open rule closes as a collapsed row does.
  // A page move made while the list is rebuilt (a filter change, a save) leaves the editing alone.
  private onPageChanged(): void {
    this.isPageMoving = true;
    if (this.isUpdatingItemsSurveyData || this.mode === "view") return;
    this.expressionEditorCanShowBuilder = false;
    this.mode = "view";
    this.updateNewActionState();
  }
  // The rows of the page are rebuilt - a page move, a new value - and their rendered table is reset.
  private onItemsRowsChanged(): void {
    this.isPageMoving = false;
    this.updateMarkedRenderedRows();
  }
  // The rendered table is reset without new rows: a row removal under paging. A page move resets it
  // before its rows are rebuilt, onItemsRowsChanged follows.
  private onRenderedTableReset(): void {
    if (!this.isPageMoving) {
      this.updateMarkedRenderedRows();
    }
  }
  private isItemMarked(item: SurveyLogicItem): boolean {
    return !!item && (item.isModified || item.isNew);
  }
  // The renderer builds the rendered table of the current page, and a new table marks no row: it is
  // built here only when a rule on the current page is marked.
  private updateMarkedRenderedRows(): void {
    if (this.isUpdatingItemsSurveyData) return;
    const pageIndex = this.matrixItems.pageIndex;
    const hasMarkedRow = this.visibleItems.some((item, index) => this.isItemMarked(item) && this.getRecordPageIndex(index) === pageIndex);
    if (hasMarkedRow) {
      this.updateRenderedRows();
    }
  }
  private updateRenderedRows() {
    this.matrixItems.renderedTable.rows.forEach(renderedRow => {
      if (!this.isDataRenderedRow(renderedRow)) return;
      renderedRow.isAdditionalClasses = this.isItemMarked(this.getItemByRow(renderedRow.row));
    });
  }
  private updateRowIsAdditionalClasses(row: MatrixDropdownRowModelBase, isAdditionalClasses: boolean) {
    const renderedRow = this.matrixItems.renderedTable.rows.find(r => r.row === row && this.isDataRenderedRow(r));
    if (!!renderedRow) {
      renderedRow.isAdditionalClasses = isAdditionalClasses;
    }
  }
  private isDataRenderedRow(renderedRow: QuestionMatrixDropdownRenderedRow): boolean {
    return !!renderedRow.row && !renderedRow.isDetailRow && !renderedRow.isErrorsRow;
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
  protected createContentActions(): Array<Action> {
    return [this.addNewButton];
  }
  protected createContentActionsContainer(): ActionContainer<Action> {
    const container = new ActionContainer();
    container.containerCss = "svc-logic-tab__content-actions";
    container.cssClasses = {
      item: "sd-action sd-action--border svc-surface-btn",
      itemAppearancePrefix: ""
    };
    container.setItems(this.createContentActions());
    return container;
  }
  private contentActionsContainerValue?: ActionContainer<Action>;
  public get contentActionsContainer(): ActionContainer {
    if (!this.contentActionsContainerValue) {
      this.contentActionsContainerValue = this.createContentActionsContainer();
    }
    return this.contentActionsContainerValue;
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