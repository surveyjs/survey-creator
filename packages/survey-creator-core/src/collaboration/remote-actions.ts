import { SurveyModel } from "survey-core";
import { IUndoRedoAction, IUndoRedoChange } from "../plugins/undo-redo/undo-redo-manager";
import { applyAction, ISyncAction } from "./undo-redo-serializer";

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
