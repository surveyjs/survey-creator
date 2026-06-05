import { Base } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import {
  IUndoRedoAction,
  Transaction,
  UndoRedoManager,
  UndoRedoAction,
  UndoRedoArrayAction
} from "../undo-redo/undo-redo-manager";
import {
  applyAction,
  buildPropertyAction,
  captureInverse,
  serializeAction,
  ISyncAction,
  ISyncMessage,
  ISyncRedoMessage,
  ISyncStackEntry,
  ISyncStackSnapshot,
  ISyncTransactionMessage,
  ISyncUndoMessage
} from "./undo-redo-serializer";
import { RemoteBulkAction, RemoteUndoRedoAction } from "./remote-actions";

// Transport contract: a thin object that delivers JSON-serializable
// messages between peers. The plugin sends through `send` and listens
// through `onMessage`. The same instance can be used to wire a
// WebSocket / SignalR / postMessage bridge or an in-process bus for
// testing.
export interface ISyncTransport {
  send(message: ISyncMessage): void;
  onMessage(handler: (message: ISyncMessage) => void): void;
}

// Process-unique prefix + monotonic counter -> stable transaction ids
// that peers use to address shared-stack entries across the wire.
const __syncIdPrefix = Math.random().toString(36).slice(2, 8);
let __syncIdCounter = 0;
function generateTxId(): string {
  __syncIdCounter++;
  return __syncIdPrefix + "-" + __syncIdCounter;
}

// Append a serializeAction result (which may be null, a single action,
// or an action array) onto a flat target list.
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
  // UndoRedoArrayAction's getChanges uses live `_itemsToAdd` /
  // `_deletedItems` arrays which DO reflect the entry's own splice (each
  // array action gets a dedicated UndoRedoArrayAction; there is no
  // shared/aliased state across entries the way LocalizableString aliases
  // scalars).
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

// Collaborative undo/redo plugin for SurveyCreatorModel.
//
// Wires the creator's UndoRedoManager to a peer through plain JSON
// messages, building a shared, ordered transaction stack that can be
// undone / redone from any participant. The plugin is opt-in: registered
// manually via `creator.addPlugin("undoredoSync", new UndoRedoSyncPlugin(creator))`.
// Without the plugin (or without a configured `onSerializedChanges` /
// `transport`), creator behavior is exactly the same as if the feature
// did not exist.
//
// Two ways to wire outbound / inbound:
//   1. `setTransport(transport)` wraps a transport object that
//      provides `send` and `onMessage`. Most production usage.
//   2. Direct callback access set `plugin.onSerializedChanges` to a
//      function and call `plugin.applySerialized(message)` to feed
//      incoming messages. Useful for tests and ad-hoc bridges.
//
// In addition, `plugin.exportStack()` / `plugin.importStack(snapshot)`
// snapshot and adopt the manager's entire transaction stack used to
// bootstrap a peer that joins mid-session.
export class UndoRedoSyncPlugin implements ICreatorPlugin {
  // Tab-less behavior plugin: `model` is not used by the creator's tab
  // host but the ICreatorPlugin contract requires the field. We expose
  // the bound UndoRedoManager so external code can introspect the
  // underlying state if needed.
  public model: any;

  // Outbound bridge. Set either directly or via `setTransport`. The
  // plugin invokes this for every produced wire message: fresh
  // transactions, merged-into edits, and {kind:"undo"|"redo", id}
  // shorthand.
  public onSerializedChanges: (message: ISyncMessage) => void;

  private manager: UndoRedoManager;

  // Saved hooks for `dispose`.
  private prevTransactionIdGenerator: () => string;
  private prevOnTransactionMerged: (tx: Transaction, sender: Base, propertyName: string, newValue: any) => void;
  private prevOnTransactionFinished: (tx: Transaction, phase: "do" | "undo" | "redo") => void;

  constructor(private creator: SurveyCreatorModel, transport?: ISyncTransport) {
    this.manager = creator.undoRedoManager;
    this.model = this.manager;
    this.attach();
    if (!!transport)this.setTransport(transport);
  }

  public activate(): void { }
  public deactivate(): boolean { return true; }

  public dispose(): void {
    this.detach();
    this.onSerializedChanges = undefined;
  }

  // Wire `transport.send` to outbound messages and route every received
  // message through `applySerialized`. Replaces any previous transport
  // or directly-set `onSerializedChanges`.
  public setTransport(transport: ISyncTransport): void {
    this.onSerializedChanges = (message: ISyncMessage) => transport.send(message);
    transport.onMessage((message: ISyncMessage) => this.applySerialized(message));
  }

  // ----- Inbound: apply a peer-authored message -----

  // Apply a serialized message produced by another UndoRedoSyncPlugin /
  // UndoRedoManager. Branches by message kind:
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
  // Local broadcast is suppressed throughout via
  // `manager.withSuppressedBroadcast`, so peer-induced mutations cannot
  // enter the local stack or re-emit. Assumes ordered, lossless delivery
  // (true for the in-process bridge used by tests; real transports must
  // preserve message order).
  public applySerialized(message: ISyncMessage): void {
    if (!message || !this.manager.survey) return;
    this.manager.withSuppressedBroadcast(() => {
      if (message.kind === "transaction") {
        this.applyRemoteTransaction(message);
      } else if (message.kind === "undo") {
        this.applyRemoteUndo(message);
      } else if (message.kind === "redo") {
        this.applyRemoteRedo(message);
      }
    });
  }

  // ----- Outbound: stack export / import for late join -----

  // Snapshot the currently-applied transaction stack so a joining peer
  // can adopt it after bootstrapping from a survey JSON snapshot. Each
  // entry carries both its forward (redo) and inverse (undo) wire-format
  // payloads, pre-computed against the live local state, so the joiner
  // does not need any access to the original Base instances. Any redo
  // tail (entries above the cursor) is dropped: the typical mid-session
  // join only cares about being able to undo what's currently applied.
  public exportStack(): ISyncStackSnapshot {
    const transactions = this.manager.transactions;
    const cursor = this.manager.currentTransactionIndex;
    const entries: ISyncStackEntry[] = [];
    const count = cursor + 1;
    for (let i = 0; i < count; i++) {
      const tx = transactions[i];
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
  // plugin. Replaces the local stack wholesale; does NOT mutate the
  // survey (caller is responsible for bootstrapping survey state via
  // `creator.JSON = snapshot` first). After import the local cursor sits
  // at the top of the imported entries, ready for undo of any one of
  // them. Subsequent undo/redo on this manager broadcasts {kind, id}
  // exactly as for natively-authored entries; the host receives those
  // messages and applies them against its matching shared-stack entry.
  public importStack(snapshot: ISyncStackSnapshot): void {
    if (!snapshot || snapshot.kind !== "stack" || !Array.isArray(snapshot.entries)) return;
    const transactions = this.manager.transactions;
    transactions.length = 0;
    this.manager.currentTransactionIndex = -1;
    for (let i = 0; i < snapshot.entries.length; i++) {
      const e = snapshot.entries[i];
      if (!e || typeof e.id !== "string") continue;
      const tx = new Transaction("imported");
      tx.id = e.id;
      tx.addAction(new RemoteBulkAction(
        this.manager.survey,
        Array.isArray(e.forward) ? e.forward : [],
        Array.isArray(e.inverse) ? e.inverse : []
      ));
      transactions.push(tx);
    }
    const cursor = typeof snapshot.cursor === "number" ? snapshot.cursor : transactions.length;
    this.manager.currentTransactionIndex = Math.max(-1, Math.min(transactions.length, cursor) - 1);
    this.manager.canUndoRedoCallback();
  }

  // ----- Internals -----

  private attach(): void {
    this.prevTransactionIdGenerator = this.manager.transactionIdGenerator;
    this.prevOnTransactionMerged = this.manager.onTransactionMerged;
    this.prevOnTransactionFinished = this.manager.onTransactionFinished;

    this.manager.transactionIdGenerator = generateTxId;
    this.manager.onTransactionMerged = (tx, sender, propertyName, newValue) => {
      if (!!this.prevOnTransactionMerged)this.prevOnTransactionMerged(tx, sender, propertyName, newValue);
      this.notifyMergedChange(tx, sender, propertyName, newValue);
    };
    this.manager.onTransactionFinished = (tx, phase) => {
      if (!!this.prevOnTransactionFinished)this.prevOnTransactionFinished(tx, phase);
      this.notifyTransactionFinished(tx, phase);
    };
  }

  private detach(): void {
    if (this.manager.transactionIdGenerator === generateTxId) {
      this.manager.transactionIdGenerator = this.prevTransactionIdGenerator;
    }
    this.manager.onTransactionMerged = this.prevOnTransactionMerged;
    this.manager.onTransactionFinished = this.prevOnTransactionFinished;
  }

  private notifyMergedChange(transaction: Transaction, sender: Base, propertyName: string, newValue: any): void {
    if (!this.onSerializedChanges) return;
    const adapter: any = {
      getChanges: () => ({ object: sender, propertyName, oldValue: undefined, newValue }),
      getIndex: () => -1
    };
    const result = serializeAction(adapter, false);
    if (!result) return;
    const actions = Array.isArray(result) ? result : [result];
    if (actions.length === 0) return;
    // Reuse the id of the transaction the merge folded into so peers
    // know to extend the same shared-stack entry instead of creating a
    // new one.
    const id = transaction && transaction.id;
    this.onSerializedChanges({ kind: "transaction", id, actions });
  }

  private notifyTransactionFinished(transaction: Transaction, phase: "do" | "undo" | "redo"): void {
    if (!this.onSerializedChanges) return;
    // Undo / redo of a transaction the peer already knows is sent as a
    // tiny {kind, id} message. The peer applies its own rollback /
    // apply against the shared-stack entry keyed by that id; no action
    // payload needs to travel.
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

  private applyRemoteTransaction(message: ISyncTransactionMessage): void {
    if (!Array.isArray(message.actions) || message.actions.length === 0) return;
    const id = message.id || generateTxId();

    // Merge case: peer is extending the same merged transaction (e.g.
    // a burst of consecutive title edits). Append the new actions into
    // the existing top entry instead of pushing a sibling.
    const transactions = this.manager.transactions;
    const top = transactions[this.manager.currentTransactionIndex];
    if (!!top && top.id === id) {
      this.applyForwardInto(top, message.actions);
      return;
    }

    // Fresh remote transaction: a new top entry. Any local redo tail
    // is invalidated, just like a fresh local edit would invalidate it.
    this.manager.cutOffTail();
    const tx = new Transaction("remote");
    tx.id = id;
    this.applyForwardInto(tx, message.actions);
    if (tx.isEmpty()) return;
    transactions.push(tx);
    this.manager.currentTransactionIndex = this.manager.currentTransactionIndex + 1;
    this.manager.canUndoRedoCallback();
  }

  // Apply each forward action against the live survey, capturing the
  // inverse beforehand so the synthetic transaction can be rolled back
  // later. Skip actions whose forward is a no-op locally (e.g. an
  // insert dedup'd by name).
  private applyForwardInto(tx: Transaction, actions: ISyncAction[]): void {
    const survey = this.manager.survey;
    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      const inverses = captureInverse(survey, action);
      applyAction(survey, action);
      if (inverses.length === 0) continue;
      tx.addAction(new RemoteUndoRedoAction(survey, action, inverses) as IUndoRedoAction);
    }
  }

  private applyRemoteUndo(message: ISyncUndoMessage): void {
    const idx = this.manager.currentTransactionIndex;
    const tx = this.manager.transactions[idx];
    if (!tx || tx.id !== message.id) return;
    tx.rollback();
    this.manager.currentTransactionIndex = idx - 1;
    this.manager.canUndoRedoCallback();
  }

  private applyRemoteRedo(message: ISyncRedoMessage): void {
    const idx = this.manager.currentTransactionIndex;
    const next = this.manager.transactions[idx + 1];
    if (!next || next.id !== message.id) return;
    next.apply();
    this.manager.currentTransactionIndex = idx + 1;
    this.manager.canUndoRedoCallback();
  }
}
