import {
  ArrayChanges,
  Base,
  JsonObjectProperty,
  Serializer,
  SurveyModel
} from "survey-core";
import { EditableObject } from "../../editable-object";
import {
  ISyncAction,
  ISyncMessage,
  ISyncStackEntry,
  ISyncStackSnapshot,
  ISyncTransactionMessage,
  ISyncUndoMessage,
  ISyncRedoMessage,
  applyAction,
  buildPropertyAction,
  captureInverse,
  serializeAction
} from "./undo-redo-serializer";
export type { ISyncMessage, ISyncAction, ISyncStackSnapshot, ISyncStackEntry } from "./undo-redo-serializer";

// Process-unique prefix + monotonic counter -> stable transaction ids that
// peers use to address shared-stack entries across the wire.
const __syncIdPrefix = Math.random().toString(36).slice(2, 8);
let __syncIdCounter = 0;
function generateTxId(): string {
  __syncIdCounter++;
  return __syncIdPrefix + "-" + __syncIdCounter;
}

// Append a serializeAction result (which may be null, a single action, or
// an action array) onto a flat target list.
function pushSerialized(target: ISyncAction[], result: ISyncAction | ISyncAction[] | null): void {
  if (!result) return;
  if (Array.isArray(result)) {
    for (let i = 0; i < result.length; i++) target.push(result[i]);
  } else {
    target.push(result);
  }
}

// Serialize the forward ("redo") direction of a stack action for export.
// For locally-recorded actions we describe the change using the action's
// stored (oldValue, newValue) rather than the live state, because the
// stack may contain multiple entries against the same property and the
// live `LocalizableString` only remembers the LAST text. RemoteUndoRedo /
// RemoteBulk actions already carry pre-serialized payloads verbatim.
function buildForwardWire(action: any): ISyncAction | ISyncAction[] | null {
  if (action instanceof RemoteUndoRedoAction) return action.forwardAction;
  if (action instanceof RemoteBulkAction) return action.forwardActions;
  if (action instanceof UndoRedoAction) {
    const ch = action.getChanges(false);
    return buildPropertyAction(ch.object, ch.propertyName, ch.newValue);
  }
  // UndoRedoArrayAction's getChanges uses live `_itemsToAdd`/`_deletedItems`
  // arrays which DO reflect the entry's own splice (each array action gets
  // a dedicated UndoRedoArrayAction; there is no shared/aliased state
  // across entries the way LocalizableString aliases scalars).
  return serializeAction(action, false);
}

// Serialize the inverse ("undo") direction of a stack action for export.
// For UndoRedoAction we read the stored `_oldValue` (via getChanges(true)
// which swaps old/new) and build the wire action explicitly so the
// inverse is correct even when later entries have overwritten the live
// property. UndoRedoArrayAction's getChanges() does not honor `isUndo`,
// so we feed serializeAction an adapter that swaps old/new to flip the
// splice.
function buildInverseWire(action: any): ISyncAction | ISyncAction[] | null {
  if (action instanceof RemoteUndoRedoAction) return action.inverseActions;
  if (action instanceof RemoteBulkAction) return action.inverseActions;
  if (action instanceof UndoRedoAction) {
    const ch = action.getChanges(true);
    return buildPropertyAction(ch.object, ch.propertyName, ch.newValue);
  }
  if (action instanceof UndoRedoArrayAction) {
    const ch = action.getChanges();
    const adapter: any = {
      getChanges: () => ({
        object: ch.object,
        propertyName: ch.propertyName,
        oldValue: ch.newValue,
        newValue: ch.oldValue
      }),
      getIndex: () => action.getIndex()
    };
    return serializeAction(adapter, false);
  }
  return serializeAction(action, true);
}

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
    const merged = lastAction.tryMerge(sender, propertyName, newValue);
    if (merged) {
      // The undo stack collapses successive string edits into one action,
      // but peers still need every intermediate value (or at least the
      // latest) to stay in sync. Broadcast the merged change as a
      // standalone serialized property update; it does not affect the
      // local stack.
      this.notifyMergedChange(sender, propertyName, newValue);
    }
    return merged;
  }
  private notifyMergedChange(sender: Base, propertyName: string, newValue: any): void {
    if (!this.onSerializedChanges) return;
    const adapter: any = {
      getChanges: () => ({ object: sender, propertyName, oldValue: undefined, newValue }),
      getIndex: () => -1
    };
    const result = serializeAction(adapter, false);
    if (!result) return;
    const actions = Array.isArray(result) ? result : [result];
    if (actions.length === 0) return;
    // Reuse the id of the transaction the merge folded into so peers know
    // to extend the same shared-stack entry instead of creating a new one.
    const current = this._getCurrentTransaction();
    const id = current && current.id;
    this.onSerializedChanges({ kind: "transaction", id, actions });
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
      if (!transaction.id) transaction.id = generateTxId();
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
  private notifyChangesFinished(transaction: Transaction, phase: "do" | "undo" | "redo" = "do") {
    this.notifySerialized(transaction, phase);
    if (transaction.actions.length > 0) {
      !!this.changesFinishedCallback &&
        this.changesFinishedCallback(transaction.actions, phase === "undo");
      // this.changesFinishedCallback(transaction.actions[0].getChanges(isUndo));
    }
  }

  private notifySerialized(transaction: Transaction, phase: "do" | "undo" | "redo"): void {
    if (!this.onSerializedChanges) return;
    // Undo / redo of a transaction the peer already knows is sent as a
    // tiny {kind, id} message. The peer applies its own rollback / apply
    // against the shared-stack entry keyed by that id; no action payload
    // needs to travel.
    if (phase === "undo") {
      if (transaction.id) {
        this.onSerializedChanges({ kind: "undo", id: transaction.id });
      }
      return;
    }
    if (phase === "redo") {
      if (transaction.id) {
        this.onSerializedChanges({ kind: "redo", id: transaction.id });
      }
      return;
    }
    // Fresh forward edit: ship the full action list under the new id.
    const actions: ISyncAction[] = [];
    const count = transaction.actions.length;
    for (let k = 0; k < count; k++) {
      const msg = serializeAction(transaction.actions[k] as any, false);
      if (!msg) continue;
      if (Array.isArray(msg)) {
        for (let j = 0; j < msg.length; j++) actions.push(msg[j]);
      } else {
        actions.push(msg);
      }
    }
    if (actions.length === 0) return;
    this.onSerializedChanges({ kind: "transaction", id: transaction.id, actions });
  }

  // Apply a serialized message produced by another UndoRedoManager.
  // Branches by message kind:
  //   - "transaction": apply the forward actions, capture per-action
  //     inverses against the live local state, and push a synthetic
  //     Transaction onto the shared linear stack keyed by `message.id`.
  //     If the id matches the current top, append into that entry (this
  //     is how merged successive edits like typing into a title collapse
  //     on the peer just like they do locally).
  //   - "undo": locate the entry by id at the current cursor and roll
  //     it back; the cursor decrements.
  //   - "redo": locate the entry by id just above the cursor and apply
  //     it; the cursor advances.
  // Local broadcast is suppressed throughout: the survey's change
  // observer is detached and `_ignoreChanges` / `_isExecuting` are set,
  // so peer-induced mutations cannot enter the local stack or re-emit.
  // Assumes ordered, lossless delivery (true for the in-process bridge
  // used by tests; real transports must preserve message order).
  public applySerialized(message: ISyncMessage): void {
    if (!message || !this.survey) return;
    const survey: any = this.survey;
    const previousCallback = survey.onPropertyValueChangedCallback;
    const wasIgnoring = this._ignoreChanges;
    const wasExecuting = this._isExecuting;
    survey.onPropertyValueChangedCallback = undefined;
    this._ignoreChanges = true;
    this._isExecuting = true;
    try {
      if (message.kind === "transaction") {
        this.applyRemoteTransaction(message);
      } else if (message.kind === "undo") {
        this.applyRemoteUndo(message);
      } else if (message.kind === "redo") {
        this.applyRemoteRedo(message);
      }
    } finally {
      this._isExecuting = wasExecuting;
      this._ignoreChanges = wasIgnoring;
      survey.onPropertyValueChangedCallback = previousCallback;
    }
  }

  private applyRemoteTransaction(message: ISyncTransactionMessage): void {
    if (!Array.isArray(message.actions) || message.actions.length === 0) return;
    const id = message.id || generateTxId();

    // Merge case: peer is extending the same merged transaction (e.g. a
    // burst of consecutive title edits). Append the new actions into the
    // existing top entry instead of pushing a sibling.
    const top = this._transactions[this._currentTransactionIndex];
    if (!!top && top.id === id) {
      this.applyForwardInto(top, message.actions);
      return;
    }

    // Fresh remote transaction: a new top entry. Any local redo tail is
    // invalidated, just like a fresh local edit would invalidate it.
    this._cutOffTail();
    const tx = new Transaction("remote");
    tx.id = id;
    this.applyForwardInto(tx, message.actions);
    if (tx.isEmpty()) return;
    this._transactions.push(tx);
    this._currentTransactionIndex++;
    this.canUndoRedoCallback();
  }

  // Apply each forward action against the live survey, capturing the
  // inverse beforehand so the synthetic transaction can be rolled back
  // later. Skip actions whose forward is a no-op locally (e.g. an insert
  // dedup'd by name).
  private applyForwardInto(tx: Transaction, actions: ISyncAction[]): void {
    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      const inverses = captureInverse(this.survey, action);
      applyAction(this.survey, action);
      if (inverses.length === 0) continue;
      tx.addAction(new RemoteUndoRedoAction(this.survey, action, inverses));
    }
  }

  private applyRemoteUndo(message: ISyncUndoMessage): void {
    const idx = this._currentTransactionIndex;
    const tx = this._transactions[idx];
    if (!tx || tx.id !== message.id) return;
    tx.rollback();
    this._currentTransactionIndex--;
    this.canUndoRedoCallback();
  }

  private applyRemoteRedo(message: ISyncRedoMessage): void {
    const next = this._transactions[this._currentTransactionIndex + 1];
    if (!next || next.id !== message.id) return;
    next.apply();
    this._currentTransactionIndex++;
    this.canUndoRedoCallback();
  }

  // Snapshot the currently-applied transaction stack so a joining peer
  // can adopt it after bootstrapping from a survey JSON snapshot. Each
  // entry carries both its forward (redo) and inverse (undo) wire-format
  // payloads, pre-computed against the live local state, so the joiner
  // does not need any access to the original Base instances. Any redo
  // tail (entries above the cursor) is dropped: the typical mid-session
  // join only cares about being able to undo what's currently applied.
  public exportStack(): ISyncStackSnapshot {
    const entries: ISyncStackEntry[] = [];
    const count = this._currentTransactionIndex + 1;
    for (let i = 0; i < count; i++) {
      const tx = this._transactions[i];
      if (!tx || !tx.id) continue;
      const forward: ISyncAction[] = [];
      const inverse: ISyncAction[] = [];
      const actions = tx.actions;
      for (let k = 0; k < actions.length; k++) {
        pushSerialized(forward, buildForwardWire(actions[k]));
      }
      // Inverse wire mirrors Transaction.rollback's reverse iteration so
      // applying inverse[] front-to-back on the peer reproduces the
      // exact rollback order.
      for (let k = actions.length - 1; k >= 0; k--) {
        pushSerialized(inverse, buildInverseWire(actions[k]));
      }
      entries.push({ id: tx.id, forward, inverse });
    }
    return { kind: "stack", cursor: entries.length, entries };
  }

  // Adopt a stack snapshot produced by `exportStack()` on another
  // manager. Replaces the local stack wholesale; does NOT mutate the
  // survey (caller is responsible for bootstrapping survey state via
  // `creator.JSON = snapshot` first). After import the local cursor sits
  // at the top of the imported entries, ready for undo of any one of
  // them. Subsequent undo/redo on this manager broadcasts {kind, id}
  // exactly as for natively-authored entries; the host receives those
  // messages and applies them against its matching shared-stack entry.
  public importStack(snapshot: ISyncStackSnapshot): void {
    if (!snapshot || snapshot.kind !== "stack" || !Array.isArray(snapshot.entries)) return;
    this._transactions.length = 0;
    this._currentTransactionIndex = -1;
    for (let i = 0; i < snapshot.entries.length; i++) {
      const e = snapshot.entries[i];
      if (!e || typeof e.id !== "string") continue;
      const tx = new Transaction("imported");
      tx.id = e.id;
      tx.addAction(new RemoteBulkAction(
        this.survey,
        Array.isArray(e.forward) ? e.forward : [],
        Array.isArray(e.inverse) ? e.inverse : []
      ));
      this._transactions.push(tx);
    }
    const cursor = typeof snapshot.cursor === "number" ? snapshot.cursor : this._transactions.length;
    this._currentTransactionIndex = Math.max(-1, Math.min(this._transactions.length, cursor) - 1);
    this.canUndoRedoCallback();
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
    this.notifyChangesFinished(currentTransaction, "undo");
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
    this.notifyChangesFinished(nextTransaction, "redo");
  }
  suspend() {
    this._ignoreChanges = true;
  }
  resume() {
    this._ignoreChanges = false;
  }
  public changesFinishedCallback: (changes: UndoRedoAction[], isUndo: boolean) => void;
  public survey: SurveyModel;
  public onSerializedChanges: (message: ISyncMessage) => void;
}

export class Transaction {
  constructor(private _name: string) { }

  // Shared-stack identity for collaborative undo/redo. Assigned by the
  // originator when the transaction enters the local stack (or by the
  // peer's applySerialized when an incoming transaction is materialized).
  public id: string = "";

  private _actions: any[] = [];

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

// Synthetic action used to materialize a remotely-received forward action
// into the local shared-stack entry. Holds the forward action verbatim
// (so a future redo can replay it byte-for-byte) plus the inverses that
// were captured against the live local state at the moment the forward
// was first applied. Apply / rollback go through `applyAction` and reuse
// the existing wire-format apply path; no Base reference is needed and
// the action survives object disposal across delete / re-insert cycles.
export class RemoteUndoRedoAction implements IUndoRedoAction {
  constructor(
    private _survey: SurveyModel,
    private _forward: ISyncAction,
    private _inverses: ISyncAction[]
  ) { }
  apply(): void {
    applyAction(this._survey, this._forward);
  }
  rollback(): void {
    for (let i = this._inverses.length - 1; i >= 0; i--) {
      applyAction(this._survey, this._inverses[i]);
    }
  }
  // Exposed so the stack exporter can re-emit the original forward / its
  // captured inverses without round-tripping them through serializeAction.
  public get forwardAction(): ISyncAction { return this._forward; }
  public get inverseActions(): ISyncAction[] { return this._inverses; }
  getChanges(): IUndoRedoChange {
    return { object: null, propertyName: "", oldValue: null, newValue: null };
  }
  // Required by UndoRedoController.notifySurveyMoveItem which probes any
  // pair of finished actions for a move/convert signature. Remote actions
  // carry no live Base references and never participate in move detection.
  getDeletedElement(_isUndo: boolean): any { return undefined; }
  getInsertedElement(_isUndo: boolean): any { return undefined; }
  getIndex(): number { return -1; }
  tryMerge(): boolean { return false; }
}

// Materializes a whole imported transaction as a single stack entry.
// `apply` replays every forward wire action in order; `rollback` applies
// every inverse wire action in the order chosen by the exporter (which
// already accounts for Transaction.rollback's reverse iteration). The
// joiner uses this whenever it adopts a host's exported stack snapshot.
export class RemoteBulkAction implements IUndoRedoAction {
  constructor(
    private _survey: SurveyModel,
    private _forwards: ISyncAction[],
    private _inverses: ISyncAction[]
  ) { }
  apply(): void {
    for (let i = 0; i < this._forwards.length; i++) {
      applyAction(this._survey, this._forwards[i]);
    }
  }
  rollback(): void {
    for (let i = 0; i < this._inverses.length; i++) {
      applyAction(this._survey, this._inverses[i]);
    }
  }
  public get forwardActions(): ISyncAction[] { return this._forwards; }
  public get inverseActions(): ISyncAction[] { return this._inverses; }
  getChanges(): IUndoRedoChange {
    return { object: null, propertyName: "", oldValue: null, newValue: null };
  }
  getDeletedElement(_isUndo: boolean): any { return undefined; }
  getInsertedElement(_isUndo: boolean): any { return undefined; }
  getIndex(): number { return -1; }
  tryMerge(): boolean { return false; }
}
