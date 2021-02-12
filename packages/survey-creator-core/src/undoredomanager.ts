import * as Survey from "survey-knockout";
import { EditableObject } from "./propertyEditors/editableObject";

export interface IUndoRedoChange {
  object: any;
  propertyName: string;
  oldValue: any;
  newValue: any;
}

export class UndoRedoManager {
  public onQuestionNameChangedCallback: (
    obj: Survey.Base,
    oldName: string
  ) => any;
  constructor() {}
  public onPropertyValueChanged(
    name: string,
    oldValue: any,
    newValue: any,
    sender: Survey.Base,
    arrayChanges: Survey.ArrayChanges
  ) {
    if (!this.hasPropertyInSerializer(sender, name)) return;
    if (EditableObject.isCopyObject(sender)) return;
    if (this._ignoreChanges) return;

    let transaction = this._preparingTransaction;
    let action = arrayChanges
      ? new ArrayAction(name, sender, arrayChanges)
      : new Action(name, oldValue, newValue, sender);

    if (!transaction) {
      transaction = new Transaction(name);
      transaction.addAction(action);
      this._addTransaction(transaction);
      return;
    }

    transaction.addAction(action);
  }

  private _ignoreChanges = false;
  private _preparingTransaction: Transaction = null;
  private _transactions: Transaction[] = [];
  private _currentTransactionIndex: number = -1;

  private hasPropertyInSerializer(sender: Survey.Base, propertyName: string) {
    return !!Survey.Serializer.findProperty(sender.getType(), propertyName);
  }
  public isCopyObject(sender: Survey.Base) {}
  private _cutOffTail() {
    if (this._currentTransactionIndex + 1 !== this._transactions.length) {
      this._transactions.length = this._currentTransactionIndex + 1;
    }
  }
  private _addTransaction(transaction: Transaction) {
    if (transaction.isEmpty()) return;

    this._cutOffTail();
    this._transactions.push(transaction);
    this._currentTransactionIndex++;
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
  private notifyChangesFinished(transaction: Transaction) {
    if (transaction.actions.length > 0 && transaction.actions[0]) {
      !!this.changesFinishedCallback &&
        this.changesFinishedCallback(transaction.actions[0].changes);
    }
  }
  canUndoRedoCallback() {}
  private transactionCounter = 0;
  startTransaction(name: string) {
    this.transactionCounter++;
    if (this._preparingTransaction) return;
    this._preparingTransaction = new Transaction(name);
  }
  stopTransaction() {
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
  canUndo() {
    return !!this._getCurrentTransaction();
  }
  undo() {
    const currentTransaction = this._getCurrentTransaction();
    if (!this.canUndo()) return;

    this._ignoreChanges = true;
    currentTransaction.rollback();
    this._ignoreChanges = false;

    this._currentTransactionIndex--;
    this.canUndoRedoCallback();
    this.notifyChangesFinished(currentTransaction);
  }
  canRedo() {
    return !!this._getNextTransaction();
  }
  redo() {
    const nextTransaction = this._getNextTransaction();
    if (!this.canRedo()) return;

    this._ignoreChanges = true;
    nextTransaction.apply();
    this._ignoreChanges = false;

    this._currentTransactionIndex++;
    this.canUndoRedoCallback();
    this.notifyChangesFinished(nextTransaction);
  }
  public changesFinishedCallback: (changes: IUndoRedoChange) => void;
}

export class Transaction {
  constructor(private _name: string) {}

  private _actions: UndoRedoAction[] = [];

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
  }

  addAction(action: any) {
    this._actions.push(action);
  }

  isEmpty() {
    return this._actions.length === 0;
  }

  get actions() {
    return this._actions;
  }
}

export class UndoRedoAction {
  apply() {}
  rollback() {}
  get changes(): IUndoRedoChange {
    return <any>{};
  }
}

export class Action {
  constructor(
    private _propertyName: string,
    private _oldValue: any,
    private _newValue: any,
    private _sender: Survey.Base
  ) {}

  apply() {
    this._sender[this._propertyName] = this._newValue;
  }

  rollback() {
    this._sender[this._propertyName] = this._oldValue;
  }

  get changes(): IUndoRedoChange {
    return {
      object: this._sender,
      propertyName: this._propertyName,
      oldValue: this._oldValue,
      newValue: this._newValue
    };
  }
}

export class ArrayAction {
  private _index: number = 0;
  private _itemsToAdd: any[] = [];
  private _deletedItems: any[] = [];

  constructor(
    private _propertyName: string,
    private _sender: Survey.Base,
    arrayChanges: Survey.ArrayChanges
  ) {
    this._index = arrayChanges.index;
    this._itemsToAdd = arrayChanges.itemsToAdd;
    this._deletedItems = arrayChanges.deletedItems;
  }
  apply() {
    this.rollback();
  }
  rollback() {
    const array = this._sender[this._propertyName];
    const index = this._index;
    const deleteCount = this._itemsToAdd.length;
    const itemsToAdd = [].concat(this._deletedItems);

    this._deletedItems = array.splice.apply(
      array,
      [index, deleteCount].concat(itemsToAdd)
    );
    this._itemsToAdd = [].concat(itemsToAdd);
  }
  get changes(): IUndoRedoChange {
    return {
      object: this._sender,
      propertyName: this._propertyName,
      oldValue: this._deletedItems,
      newValue: this._itemsToAdd
    };
  }
}
