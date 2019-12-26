import * as Survey from "survey-knockout";

export class UndoRedoManager {
  constructor(private _survey: Survey.Survey) {
    this._survey.onPropertyValueChangedCallback = (
      name: string,
      oldValue: any,
      newValue: any,
      sender: Survey.Base
    ) => {
      if (this._keepSilense) return;

      let transaction = this._preparingTransaction;

      if (!transaction) {
        transaction = new Transaction(name);
        transaction.addAction(new Action(name, oldValue, newValue, sender));
        this.addTransaction(transaction);
        return;
      }

      transaction.addAction(new Action(name, oldValue, newValue, sender));
    };
  }

  private _keepSilense = false;
  private _preparingTransaction: Transaction = null;
  private _transactions: Transaction[] = [];
  private _currentTransactionIndex: number = -1;

  private addTransaction(transaction: Transaction) {
    this._transactions.push(transaction);
    this._currentTransactionIndex++;
  }

  public startTransaction(name: string) {
    if (this._preparingTransaction) return;
    this._preparingTransaction = new Transaction(name);
  }
  public stopTransaction() {
    this.addTransaction(this._preparingTransaction);
    this._preparingTransaction = null;
  }
  public undo() {
    const index = this._currentTransactionIndex;
    const currentTransaction = this._transactions[index];

    if (!currentTransaction) return;

    this._keepSilense = true;
    currentTransaction.rollback();
    this._keepSilense = false;

    this._currentTransactionIndex--;
  }
  public redo() {
    const index = this._currentTransactionIndex;
    const nextTransaction = this._transactions[index + 1];

    if (!nextTransaction) return;

    this._keepSilense = true;
    nextTransaction.apply();
    this._keepSilense = false;

    this._currentTransactionIndex++;
  }
}

export class Transaction {
  constructor(private _name: string) {}

  private _actions: Action[] = [];

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

  addAction(action: Action) {
    this._actions.push(action);
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
}
