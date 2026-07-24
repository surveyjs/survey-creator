import { Helpers, Serializer } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { Transaction, UndoRedoAction, UndoRedoArrayAction } from "../undo-redo/undo-redo-manager";

/**
 * Keeps the LOCAL undo/redo stack sane under collaboration.
 *
 * Undo stacks are strictly per-client (only the author of a change can undo
 * it), so a later remote record can invalidate an entry that is still sitting
 * in the local stack. Executing such an entry would corrupt the shared state:
 * undoing a conversion of a question a peer has deleted would resurrect it on
 * every client, and undoing a property change on a dead object makes the
 * recorder fall back to a full snapshot broadcast (it cannot address the
 * target anymore), resetting everyone's history.
 *
 * The guard is the journal's validity predicate for the undo-redo manager
 * (`isTransactionValidCallback`): a transaction is skipped as a no-op - the
 * key press visibly does nothing and the entry is consumed - when
 *   - it references an object destroyed by an applied remote record
 *     (the applier reports them via `markRemoved`), or
 *   - it is a scalar change whose value was overwritten since (last write
 *     wins): undo is valid only while the property still holds the value this
 *     entry has put there, and redo only while it holds the value the entry
 *     had removed.
 *
 * Array actions get only the destroyed-object check: the undo-redo manager
 * compensates disposed senders/items by re-creating them from JSON
 * (`getSenderElement`/`getItemsToAdd`), which legitimately breaks identity in
 * purely local undo chains, so a stricter compare-and-swap on arrays would
 * misfire there.
 */
export class JournalStackGuard {
  private removedObjects: WeakSet<any> = new WeakSet<any>();

  constructor(private creator: SurveyCreatorModel) { }

  /**
   * (Re)register the guard on the creator's current undo-redo manager. Called
   * before every journal apply: the manager is replaced whenever the survey is
   * rebuilt (fullSnapshot), and a fresh manager starts with an empty stack, so
   * lazy re-attachment is sufficient.
   */
  public attach(): void {
    const manager = this.creator.undoRedoManager;
    if (!!manager) {
      manager.isTransactionValidCallback = (transaction: Transaction, isUndo: boolean): boolean => this.isValidTransaction(transaction, isUndo);
    }
  }

  /** Report an object destroyed by an applied remote record (plus its element subtree). */
  public markRemoved(obj: any): void {
    this.markRemovedCore(obj, 0);
  }
  private markRemovedCore(obj: any, depth: number): void {
    if (!obj || typeof obj !== "object" || depth > 10) return;
    this.removedObjects.add(obj);
    // Pages and panels: their element subtree dies with them. Non-element
    // children (item values, matrix columns, validators) are caught at check
    // time by the owner-chain walk instead.
    const children: any = obj.elements;
    if (Array.isArray(children)) {
      for (let i = 0; i < children.length; i++) {
        this.markRemovedCore(children[i], depth + 1);
      }
    }
  }

  public isValidTransaction(transaction: Transaction, isUndo: boolean): boolean {
    // All-or-nothing: a transaction is one user operation; skipping only some
    // of its actions would leave a state no client ever produced.
    const actions = transaction.actions;
    // A transaction may write the same property several times; only the
    // boundary value is observable afterwards. Undo expects to find the LAST
    // write's value, redo the FIRST action's pre-transaction value - the
    // compare-and-swap below runs on that net action only.
    const netActions = new Map<any, Map<string, UndoRedoAction>>();
    for (let i = 0; i < actions.length; i++) {
      const action: any = actions[i];
      if (!action || action instanceof UndoRedoArrayAction) continue;
      const changes = action.getChanges(isUndo);
      let byProperty = netActions.get(changes.object);
      if (!byProperty) {
        byProperty = new Map<string, UndoRedoAction>();
        netActions.set(changes.object, byProperty);
      }
      if (isUndo || !byProperty.has(changes.propertyName)) byProperty.set(changes.propertyName, action);
    }
    for (let i = 0; i < actions.length; i++) {
      const action: any = actions[i];
      if (!action) continue;
      if (action instanceof UndoRedoArrayAction) {
        const arrayChanges = action.getChanges();
        if (this.isRemoved(arrayChanges.object)) return false;
        if (!this.areItemsAlive(arrayChanges.oldValue) || !this.areItemsAlive(arrayChanges.newValue)) return false;
        continue;
      }
      const changes = action.getChanges(isUndo);
      if (this.isRemoved(changes.object)) return false;
      // Scalar compare-and-swap: getChanges(isUndo).oldValue is the value the
      // step about to run expects to find - for undo the value this action
      // has set, for redo the value it had replaced.
      const byProperty = netActions.get(changes.object);
      if (!!byProperty && byProperty.get(changes.propertyName) === action &&
        !this.isCurrentValue(changes.object, changes.propertyName, changes.oldValue)) return false;
    }
    return true;
  }

  private areItemsAlive(items: any): boolean {
    if (!Array.isArray(items)) return true;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (!!item && typeof item === "object" && this.isRemoved(item)) return false;
    }
    return true;
  }

  private isRemoved(obj: any): boolean {
    let current: any = obj;
    for (let guard = 0; !!current && typeof current === "object" && guard < 10; guard++) {
      if (this.removedObjects.has(current)) return true;
      // The links to the owner survive detaching, so children of a removed
      // element (item values, matrix columns, ...) are reachable even after
      // the element was deleted.
      current = current.parent || current.locOwner || current.owner || current.colOwner;
    }
    return false;
  }

  private isCurrentValue(obj: any, propertyName: string, expected: any): boolean {
    const prop = Serializer.getOriginalProperty(obj, propertyName);
    if (!!prop && prop.isLocalizable && !!prop.serializationProperty && !!obj[prop.serializationProperty]) {
      return this.isCurrentLocalizableValue(obj[prop.serializationProperty], obj[propertyName], expected);
    }
    return this.valuesEqual(obj[propertyName], expected);
  }
  private isCurrentLocalizableValue(locStr: any, getterValue: any, expected: any): boolean {
    // The action does not remember WHICH locale it changed, while the plain
    // getter reads only the active one and substitutes calculated fallbacks
    // for empty values (e.g. a question title falls back to the name). An
    // empty expectation is therefore verified against the raw string store,
    // and a non-empty one is accepted when any locale (or the getter) still
    // holds the expected text: an edit of another locale or another property
    // must not invalidate this entry, and a translation-tab edit (non-active
    // locale) must stay undoable.
    if (this.isEmptyValue(expected)) return locStr.isEmpty === true;
    if (this.valuesEqual(getterValue, expected)) return true;
    const locales: Array<string> = typeof locStr.getLocales === "function" ? locStr.getLocales() : [];
    for (let i = 0; i < locales.length; i++) {
      if (this.valuesEqual(locStr.getLocaleText(locales[i]), expected)) return true;
    }
    return false;
  }
  private valuesEqual(a: any, b: any): boolean {
    if (this.isEmptyValue(a) && this.isEmptyValue(b)) return true;
    return Helpers.isTwoValueEquals(a, b);
  }
  private isEmptyValue(value: any): boolean {
    return value === undefined || value === null || value === "";
  }
}
