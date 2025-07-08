import {
  ArrayChanges,
  Base,
  JsonObjectProperty,
  Serializer,
  SurveyModel
} from "survey-core";
import { EditableObject } from "../../editable-object";

export interface IUndoRedoChange {
  object: any;
  propertyName: string;
  oldValue: any;
  newValue: any;
}

export class UndoRedoManager {
  constructor() { }
  public onPropertyValueChanged(
    name: string,
    oldValue: any,
    newValue: any,
    sender: Base,
    arrayChanges: ArrayChanges
  ) {
    if (EditableObject.isCopyObject(sender)) return;
    if (this.isIgnoring) return;
    if (sender["ignoreUndoRedo"] === true) return;

    let transaction = this._preparingTransaction;
    let action = arrayChanges
      ? new UndoRedoArrayAction(name, sender, arrayChanges)
      : new UndoRedoAction(name, oldValue, newValue, sender);

    if (!transaction) {
      transaction = new Transaction(name);
      transaction.addAction(action);
      this._addTransaction(transaction);
      return;
    }

    transaction.addAction(action);
  }
  public isCorrectProperty(sender: Base, propertyName: string): boolean {
    var prop: JsonObjectProperty = Serializer.getOriginalProperty(sender, propertyName);
    return !!prop && prop.isSerializable;
  }
  public tryMergeTransaction(sender: Base, propertyName: string, newValue: any): boolean {
    if (propertyName === "name") return false; //TODO check on
    const lastTransaction = this._getCurrentTransaction();
    if (!lastTransaction || lastTransaction.actions.length == 0) return false;
    const lastAction = lastTransaction.actions[lastTransaction.actions.length - 1];
    return lastAction.tryMerge(sender, propertyName, newValue);
  }
  private _ignoreChanges = false;
  private _isExecuting = false;
  private _preparingTransaction: Transaction = null;
  private _transactions: Transaction[] = [];
  private _currentTransactionIndex: number = -1;

  public isCopyObject(sender: Base) { }
  private _cutOffTail() {
    if (this._currentTransactionIndex + 1 !== this._transactions.length) {
      this._transactions.length = this._currentTransactionIndex + 1;
    }
  }
  private get isIgnoring(): boolean {
    return this._ignoreChanges || this._isExecuting;
  }
  private _addTransaction(transaction: Transaction) {
    if (transaction.isEmpty()) return;

    this._cutOffTail();
    if (this._transactions[this._currentTransactionIndex] !== transaction) {
      this._transactions.push(transaction);
      this._currentTransactionIndex++;
    }
    this.canUndoRedoCallback();
  }
  private _getCurrentTransaction() {
    const index = this._currentTransactionIndex;
    const currentTransaction = this._transactions[index];
    return currentTransaction;
  }
  private _getNextTransaction() {
    const index = this._currentTransactionIndex;
    const nextTransaction = this._transactions[index + 1];
    return nextTransaction;
  }
  private notifyChangesFinished(transaction: Transaction, isUndo: boolean = false) {
    if (transaction.actions.length > 0) {
      !!this.changesFinishedCallback &&
        this.changesFinishedCallback(transaction.actions, isUndo);
      // this.changesFinishedCallback(transaction.actions[0].getChanges(isUndo));
    }
  }
  canUndoRedoCallback() { }
  private transactionCounter = 0;
  startTransaction(name: string) {
    if (this.isIgnoring) return;
    this.transactionCounter++;
    if (this._preparingTransaction) return;
    this._preparingTransaction = new Transaction(name);
  }
  stopTransaction() {
    if (this.isIgnoring) return;
    if (this.transactionCounter > 0) {
      this.transactionCounter--;
    }
    if (!this._preparingTransaction || this.transactionCounter > 0) return;
    this._addTransaction(this._preparingTransaction);
    if (this.transactionCounter === 0) {
      this.notifyChangesFinished(this._preparingTransaction);
    }
    this._preparingTransaction = null;
  }
  setUndoCallbackForTransaction(callback: () => void) {
    if (!this._preparingTransaction) return;
    this._preparingTransaction.undoCallback = callback;
  }
  public get isProcessingUndoRedo(): boolean {
    return this._isExecuting === true;
  }
  canUndo() {
    return !!this._getCurrentTransaction();
  }
  undo() {
    const currentTransaction = this._getCurrentTransaction();
    if (!this.canUndo()) return;

    this._isExecuting = true;
    currentTransaction.rollback();
    this._isExecuting = false;

    this._currentTransactionIndex--;
    this.canUndoRedoCallback();
    this.notifyChangesFinished(currentTransaction, true);
  }
  canRedo() {
    return !!this._getNextTransaction();
  }
  redo() {
    const nextTransaction = this._getNextTransaction();
    if (!this.canRedo()) return;

    this._isExecuting = true;
    nextTransaction.apply();
    this._isExecuting = false;

    this._currentTransactionIndex++;
    this.canUndoRedoCallback();
    this.notifyChangesFinished(nextTransaction);
  }
  suspend() {
    this._ignoreChanges = true;
  }
  resume() {
    this._ignoreChanges = false;
  }
  public changesFinishedCallback: (changes: UndoRedoAction[], isUndo: boolean) => void;
}

export class Transaction {
  constructor(private _name: string) { }

  private _actions: UndoRedoAction[] = [];

  public undoCallback: () => void = () => {};

  apply() {
    const actions = this._actions;
    for (let index = 0; index < actions.length; index++) {
      const action = actions[index];
      action.apply();
    }
  }

  rollback() {
    const actions = this._actions;
    for (let index = actions.length - 1; index >= 0; index--) {
      const action = actions[index];
      action.rollback();
    }
    this.undoCallback();
  }

  addAction(action: any) {
    this._actions.push(action);
  }

  isEmpty(): boolean {
    return this._actions.length === 0;
  }

  get actions() {
    return this._actions;
  }
}

export interface IUndoRedoAction {
  apply: () => void;
  rollback: () => void;
  getChanges(): IUndoRedoChange;
  tryMerge(sender: Base, propertyName: string, newValue: any): boolean;
}

export class UndoRedoAction implements IUndoRedoAction {
  static maximumMergeTime = 1000;
  private tickCount: number;
  constructor(
    private _propertyName: string,
    private _oldValue: any,
    private _newValue: any,
    private _sender: Base
  ) {
    this.tickCount = new Date().getTime();
  }

  apply(): void {
    this._sender[this._propertyName] = this._newValue;
  }

  rollback(): void {
    this._sender[this._propertyName] = this._oldValue;
  }

  getChanges(isUndo: boolean = false): IUndoRedoChange {
    return {
      object: this._sender,
      propertyName: this._propertyName,
      oldValue: isUndo ? this._newValue : this._oldValue,
      newValue: isUndo ? this._oldValue : this._newValue
    };
  }
  getDeletedElement(isUndo: boolean): any { return undefined; }
  getInsertedElement(isUndo: boolean): any { return undefined; }
  getIndex(): number { return -1; }
  tryMerge(sender: Base, propertyName: string, newValue: any): boolean {
    if (sender !== this._sender || propertyName !== this._propertyName || newValue == this._oldValue) return false;
    const prop = Serializer.getOriginalProperty(sender, propertyName);
    if (!prop || (prop.type !== "string" && prop.type !== "text")) return false;
    if (new Date().getTime() - this.tickCount > UndoRedoAction.maximumMergeTime) return false;
    this._newValue = newValue;
    return true;
  }
}

export class UndoRedoArrayAction implements IUndoRedoAction {
  private survey: SurveyModel;
  private _index: number = 0;
  private _itemsToAdd: any[] = [];
  private _deletedItems: any[] = [];

  constructor(
    private _propertyName: string,
    private _sender: Base,
    arrayChanges: ArrayChanges
  ) {
    this.survey = <SurveyModel>_sender.getSurvey();
    this._index = arrayChanges.index;
    this._itemsToAdd = arrayChanges.itemsToAdd;
    this._deletedItems = arrayChanges.deletedItems;
  }
  apply(): void {
    this.rollback();
  }
  rollback(): void {
    this._sender = this.getSenderElement();
    if (!this._sender) return;
    const array = this._sender[this._propertyName];
    const index = this._index;
    const deleteCount = this._itemsToAdd.length;
    const itemsToAdd = this.getItemsToAdd();

    this._deletedItems = array.splice.apply(
      array,
      [index, deleteCount].concat(itemsToAdd)
    );
    this._itemsToAdd = [].concat(itemsToAdd);
  }
  getChanges(): IUndoRedoChange {
    return {
      object: this._sender,
      propertyName: this._propertyName,
      oldValue: this._deletedItems,
      newValue: this._itemsToAdd
    };
  }
  getDeletedElement(isUndo: boolean): any { return this.getMovedElement(this._deletedItems, this._itemsToAdd, isUndo); }
  getInsertedElement(isUndo: boolean): any { return this.getMovedElement(this._itemsToAdd, this._deletedItems, isUndo); }
  getIndex(): number { return this._index; }
  private getMovedElement(items1: any[], items2: any[], isUndo: boolean) : any {
    const items = isUndo ? items2 : items1;
    if (Array.isArray(items) && items.length === 1) return items[0];
    return undefined;
  }
  tryMerge(sender: Base, propertyName: string, newValue: any): boolean {
    return false;
  }
  private getSenderElement(): Base {
    if (!this._sender.isDisposed || !this.survey) return this._sender;
    const name = this._sender["name"];
    if (this._sender["isPage"] === true) {
      if (this.survey.pages.length === 0) return this.survey.addNewPage();
      return this.survey.getPageByName(name);
    }
    if (this._sender["isPanel"] === true) return this.survey.getPanelByName(name);
    if (this._sender["isQuestion"] === true) return this.survey.getQuestionByName(name);
    return this._sender;
  }
  private getItemsToAdd(): Array<any> {
    const res = [];
    for (let i = 0; i < this._deletedItems.length; i ++) {
      let obj = this._deletedItems[i];
      if (obj.isDisposed && obj.getType) {
        const json = obj.toJSON();
        obj = Serializer.createClass(obj.getType());
        obj.fromJSON(json);
      }
      res.push(obj);
    }
    return res;
  }
}
