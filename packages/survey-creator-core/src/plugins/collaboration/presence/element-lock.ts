import { DomDocumentHelper } from "survey-core";
import { SurveyCreatorModel, Transaction, UndoRedoArrayAction } from "survey-creator-core";
import { getCollabString } from "../collaboration-strings";
import { resolveLocator } from "../journal/journal-locator";
import { acceptClaims, ILockClaim } from "./lock-order";
import { PresenceCapture } from "./presence-capture";
import { IPresencePeer, PRESENCE_SELECTORS } from "./presence-state";

// The element itself, its owner chain and the adorner slot are walked with a
// depth guard: survey object graphs are shallow, a cycle must not hang.
const MAX_DEPTH = 20;
// SurveyElementAdornerBase.AdornerValueName - the adorner base class is not
// part of the public entry, the property name is the stable contract.
const ADORNER_PROPERTY = "__sjs_creator_adorner";

// Editing locks: while a participant has a question or panel selected on the
// designer, everyone else sees it (with a panel's whole content) read-only -
// they can select it and read its properties, but not change, move, delete,
// copy or convert it, and not drop anything into it.
//
// The lock is announced in presence (`IPresenceState.lock` next to `sel`);
// the server relays it like any other presence field, so every client decides
// on its own, deterministically, from the same roster:
//   - a claim is lockable when `sel` resolves to a question or panel on the
//     designer tab (pages and the survey never lock - an empty-space click
//     selects them);
//   - claims are arbitrated by `acceptClaims` (lock-order.ts); two claims
//     overlap when they are the same element, ancestor or descendant - so two
//     participants who selected the same question within the network latency
//     agree that the smaller clientId holds it;
//   - the local participant claims a FRESH selection only when no remote
//     holder overlaps it (otherwise it is a viewer), keeps a claim it already
//     has only while it wins the ordering above, and claims a viewed element
//     as soon as its holder lets go.
//
// Known gaps, all deliberate for now:
//  - JSON and Translations tabs ignore locks: they edit outside the
//    designer's hooks. (Logic rules have their own lock, `LogicLockGuard`,
//    which also honors these element locks.)
//  - Senders without the `lock` field (older clients) never hold anything, and
//    programmatic changes are not restricted - the relay is still
//    last-write-wins.
//  - A participant who loses a race while typing may commit the last
//    keystrokes when the editor is blurred.
export class ElementLockGuard {
  // This participant's server-assigned id: ties are broken by it. Until the
  // transport provides it, the local claim yields every tie.
  public localClientId = "";
  // Accepted remote holders: element -> peer.
  private holders = new Map<any, IPresencePeer>();
  // The element the local participant claimed last (while capture says lock).
  private claimedElement: any = null;
  // The selection seen by the last refresh and whether it was locked then.
  private trackedSelection: any = null;
  private trackedLocked = false;
  private doc: Document | undefined;

  constructor(private creator: SurveyCreatorModel,
    private capture: PresenceCapture,
    private getPeers: () => ReadonlyMap<string, IPresencePeer>) {
    capture.lockResolver = this.resolveLocalLock;
    creator.onElementAllowOperations.add(this.onElementAllowOperations);
    creator.onPropertyGetReadOnly.add(this.onPropertyGetReadOnly);
    creator.onDragDropAllow.add(this.onDragDropAllow);
    creator.onBeforeUndo.add(this.onBeforeUndo);
    creator.onBeforeRedo.add(this.onBeforeRedo);
    creator.onModified.add(this.onModified);
    // Subscribed after the capture (constructed first), so the selection and
    // its lock are already announced when the holders are re-derived.
    creator.onElementSelected.add(this.refresh);
    creator.onActiveTabChanged.add(this.refresh);
    if (DomDocumentHelper.isAvailable()) {
      this.doc = DomDocumentHelper.getDocument();
      this.doc.addEventListener("focusin", this.onFocusIn, true);
    }
  }

  public dispose(): void {
    if (this.capture.lockResolver === this.resolveLocalLock)this.capture.lockResolver = undefined;
    this.creator.onElementAllowOperations.remove(this.onElementAllowOperations);
    this.creator.onPropertyGetReadOnly.remove(this.onPropertyGetReadOnly);
    this.creator.onDragDropAllow.remove(this.onDragDropAllow);
    this.creator.onBeforeUndo.remove(this.onBeforeUndo);
    this.creator.onBeforeRedo.remove(this.onBeforeRedo);
    this.creator.onModified.remove(this.onModified);
    this.creator.onElementSelected.remove(this.refresh);
    this.creator.onActiveTabChanged.remove(this.refresh);
    this.doc?.removeEventListener("focusin", this.onFocusIn, true);
    this.holders.clear();
  }

  // --- queries -------------------------------------------------------------------

  // The remote participant holding `obj` (directly or through an enclosing
  // panel); null when the local user may edit it. Non-element objects (choice
  // items, matrix columns, validators...) follow their owning element.
  public getLockOwner(obj: any): IPresencePeer | null {
    if (this.holders.size === 0) return null;
    let current = this.ownerElement(obj);
    for (let i = 0; !!current && i < MAX_DEPTH; i++) {
      const peer = this.holders.get(current);
      if (peer) return peer;
      current = this.parentOf(current);
    }
    return null;
  }
  public isLocked(obj: any): boolean {
    return !!this.getLockOwner(obj);
  }
  // Whether the remote participant holds their selection as a lock.
  public isHolder(clientId: string): boolean {
    let found = false;
    this.holders.forEach((peer) => {
      if (peer.clientId === clientId) found = true;
    });
    return found;
  }
  // A container (page/panel) with remotely held content: deleting, moving or
  // converting it would take the held element along.
  public hasLockedContent(element: any): boolean {
    let found = false;
    this.holders.forEach((_, held) => {
      if (!found && held !== element && this.isAncestor(element, held)) found = true;
    });
    return found;
  }

  // --- recomputation ---------------------------------------------------------------

  // Re-derive the holders from the roster and the local claim, re-announce
  // the local lock when it changed, and refresh the UI when the set of locked
  // elements changed. Cheap: a handful of locator resolutions.
  public refresh = (): void => {
    this.capture.refreshLock();
    const before = this.holders;
    this.holders = this.computeHolders(this.currentClaim()).holders;
    // The property grid computes read-only editors when it is built: rebuild
    // it when the lock of the element it shows flips (not on a selection
    // change - a new selection builds a fresh grid anyway).
    const selected = this.creator.selectedElement;
    const selectedLocked = this.isLocked(selected);
    if (selected === this.trackedSelection && selectedLocked !== this.trackedLocked)this.refreshPropertyGrid();
    this.trackedSelection = selected;
    this.trackedLocked = selectedLocked;
    if (!this.sameHolders(before, this.holders))this.onLocksChanged();
  };

  private resolveLocalLock = (element: any): boolean => {
    let claim = false;
    if (this.isLockable(element)) {
      claim = element === this.currentClaim()
        // An existing claim is kept while it wins the ordering - it is lost
        // only to a concurrent claim with a smaller clientId.
        ? this.computeHolders(element).localAccepted
        // A fresh one must not overlap anything already held.
        : !this.overlapsAny(element, this.computeHolders(null).holders);
    }
    this.claimedElement = claim ? element : null;
    return claim;
  };

  private currentClaim(): any {
    return this.capture.getState().lock ? this.claimedElement : null;
  }

  // Greedy acceptance in clientId order, with `local` (the local claim, or
  // null) taking part in the ordering. Only remote claims make it into
  // `holders`; `localAccepted` tells whether the local one survived.
  private computeHolders(local: any): { holders: Map<any, IPresencePeer>, localAccepted: boolean } {
    const claims: Array<ILockClaim<any>> = [];
    this.getPeers().forEach((peer) => {
      const state: any = peer?.state;
      if (state?.tab !== "designer" || state.lock !== true || !state.sel) return;
      const element = this.resolveSel(state.sel.loc);
      if (this.isLockable(element)) claims.push({ clientId: String(peer.clientId), target: element, peer });
    });
    if (local) {
      claims.push({ clientId: this.localClientId, target: local, peer: null });
    }
    const result = acceptClaims(claims, (a, b) => this.overlaps(a, b));
    const holders = new Map<any, IPresencePeer>();
    result.accepted.forEach((claim) => {
      if (claim.peer) holders.set(claim.target, claim.peer);
    });
    return { holders, localAccepted: result.localAccepted };
  }

  private overlapsAny(element: any, holders: Map<any, IPresencePeer>): boolean {
    let hit = false;
    holders.forEach((_, held) => {
      if (!hit && this.overlaps(element, held)) hit = true;
    });
    return hit;
  }
  private overlaps(a: any, b: any): boolean {
    return a === b || this.isAncestor(a, b) || this.isAncestor(b, a);
  }
  private isAncestor(ancestor: any, element: any): boolean {
    let current = this.parentOf(element);
    for (let i = 0; !!current && i < MAX_DEPTH; i++) {
      if (current === ancestor) return true;
      current = this.parentOf(current);
    }
    return false;
  }
  private parentOf(element: any): any {
    // Dynamic-panel template content has no `parent` chain up to the
    // question - its template panel reports the owning question instead.
    return element?.parent || element?.parentQuestion || null;
  }
  private isLockable(element: any): boolean {
    return !!element && !element.isDisposed && (element.isQuestion === true || element.isPanel === true);
  }
  private resolveSel(loc: any): any {
    try {
      return resolveLocator(loc, this.creator.survey);
    } catch{
      return null;
    }
  }
  // The question/panel/page an arbitrary survey object belongs to.
  private ownerElement(obj: any): any {
    let current = obj;
    for (let i = 0; !!current && typeof current === "object" && i < MAX_DEPTH; i++) {
      if (current.isQuestion === true || current.isPanel === true || current.isPage === true) return current;
      if (current.isSurvey === true) return null;
      current = current.locOwner || current.colOwner || current.errorOwner || current.owner || null;
    }
    return null;
  }
  private sameHolders(a: Map<any, IPresencePeer>, b: Map<any, IPresencePeer>): boolean {
    if (a.size !== b.size) return false;
    let same = true;
    a.forEach((peer, element) => {
      if (same && b.get(element)?.clientId !== peer.clientId) same = false;
    });
    return same;
  }

  // --- UI refresh ----------------------------------------------------------------------

  private onLocksChanged(): void {
    // Adorners cache the allowed operations (drag handle, delete/duplicate/
    // convert actions, add-question button); recompute every one - locks
    // change on selection, which is rare, and containers depend on content.
    const survey: any = this.creator.survey;
    if (survey) {
      const elements: Array<any> = [].concat(survey.pages || [], survey.getAllPanels?.(false, true) || [], survey.getAllQuestions?.(false, true) || []);
      elements.forEach((element) => this.refreshAdorner(element));
    }
    this.blurLockedEditor();
  }
  private refreshAdorner(element: any): void {
    const adorner: any = element?.getPropertyValue?.(ADORNER_PROPERTY);
    // updateActionsProperties is protected: it is the adorner's own refresh,
    // run on select/locale change - there is no public trigger for one element.
    if (adorner && !adorner.isDisposed && typeof adorner.updateActionsProperties === "function") {
      adorner.updateActionsProperties();
    }
  }
  public refreshPropertyGrid(): void {
    const page: any = this.creator.sidebar?.getPageById?.("propertyGrid");
    page?.componentData?.propertyGridModel?.refresh?.();
  }

  // --- inline editors --------------------------------------------------------------------
  // Held elements keep their string editors, read-only (contentEditable
  // follows isCanModifyProperty, i.e. allowEdit/onPropertyGetReadOnly): an
  // `onAllowInplaceEdit` veto would swap them for plain text, and viewers
  // would lose the ring showing which text the holder is typing in.
  // contentEditable is read at render time and choice adorners compute their
  // permissions once, so a lock arriving after the render would leave the
  // editor live. Refuse the caret instead - independent of re-renders.

  private elementOfNode(node: Element): any {
    const owner = node.closest("[data-sv-drop-target-survey-element]");
    const name = owner?.getAttribute("data-sv-drop-target-survey-element");
    const survey: any = this.creator.survey;
    if (!name || !survey) return null;
    return survey.getQuestionByName?.(name) || survey.getPanelByName?.(name) || null;
  }
  private lockedEditorOf(node: EventTarget | null): HTMLElement | null {
    if (!(node instanceof Element) || this.holders.size === 0) return null;
    const editor = node.closest(PRESENCE_SELECTORS.stringEditor);
    if (!editor) return null;
    return this.isLocked(this.elementOfNode(editor)) ? node as HTMLElement : null;
  }
  private blurLockedEditor(): void {
    this.lockedEditorOf(this.doc?.activeElement ?? null)?.blur();
  }
  private onFocusIn = (ev: FocusEvent): void => {
    this.lockedEditorOf(ev.target)?.blur();
  };

  // --- creator hooks ----------------------------------------------------------------------

  private onModified = (): void => {
    // A local rename or move changes the locator of the selection (and the
    // ancestry the overlap rules use).
    this.refresh();
  };

  private onElementAllowOperations = (_: unknown, options: any): void => {
    const element = options?.element;
    if (!element) return;
    if (this.isLocked(element)) {
      // Viewing stays: the settings button keeps its default visibility
      // (which allowEdit:false would otherwise hide) - it only opens the grid.
      if (options.allowShowSettings === undefined && options.allowEdit === undefined) {
        options.allowShowSettings = !!this.creator.sidebar?.flyoutMode && this.creator.removeSidebar !== true;
      }
      options.allowEdit = false;
      options.allowDelete = false;
      options.allowCopy = false;
      options.allowDrag = false;
      options.allowDragging = false;
      options.allowChangeType = false;
      options.allowChangeInputType = false;
      options.allowChangeRequired = false;
    } else if (this.hasLockedContent(element)) {
      options.allowDelete = false;
      options.allowDrag = false;
      options.allowDragging = false;
      options.allowChangeType = false;
    }
  };

  private onPropertyGetReadOnly = (_: unknown, options: any): void => {
    if (options.readOnly || this.holders.size === 0) return;
    if (this.isLocked(options.element) || this.isLocked(options.parentElement)) options.readOnly = true;
  };

  private onDragDropAllow = (_: unknown, options: any): void => {
    if (!options.allow || this.holders.size === 0) return;
    const dragged = options.draggedElement;
    if (this.isLocked(dragged) || (!!dragged && this.hasLockedContent(dragged))) {
      options.allow = false;
      return;
    }
    const target = options.toElement;
    const inside = !options.insertBefore && !options.insertAfter;
    const container = inside ? target : target?.parent;
    if (this.isLocked(container)) options.allow = false;
  };

  private onBeforeUndo = (_: unknown, options: any): void => this.guardUndoRedo(options, true);
  private onBeforeRedo = (_: unknown, options: any): void => this.guardUndoRedo(options, false);

  // An undo/redo step touching a held element waits: the press does nothing
  // and the entry stays on the stack (unlike JournalStackGuard's no-op, which
  // consumes it - a lock is temporary, the step becomes valid again).
  private guardUndoRedo(options: any, isUndo: boolean): void {
    if (!options.allow || this.holders.size === 0) return;
    const manager: any = this.creator.undoRedoManager;
    const transaction: Transaction = manager?.peekTransaction?.(isUndo);
    const owner = transaction ? this.transactionLockOwner(transaction, isUndo) : null;
    if (!owner) return;
    options.allow = false;
    const key = isUndo ? "collabUndoLocked" : "collabRedoLocked";
    this.creator.notify(getCollabString(key, owner.name || "?"), "info");
  }
  private transactionLockOwner(transaction: Transaction, isUndo: boolean): IPresencePeer | null {
    const actions: Array<any> = transaction.actions || [];
    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      if (!action) continue;
      const changes = action instanceof UndoRedoArrayAction ? action.getChanges() : action.getChanges(isUndo);
      const owner = this.getLockOwner(changes?.object) ||
        this.itemsLockOwner(changes?.oldValue) || this.itemsLockOwner(changes?.newValue);
      if (owner) return owner;
    }
    return null;
  }
  // Array steps insert/remove elements: a held element (or one containing it)
  // among them is touched even though the array's owner is not. Undo may
  // re-create items from JSON, so a same-named element counts too.
  private itemsLockOwner(items: any): IPresencePeer | null {
    if (!Array.isArray(items)) return null;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (!item || typeof item !== "object") continue;
      const direct = this.getLockOwner(item);
      if (direct) return direct;
      let byName: IPresencePeer | null = null;
      this.holders.forEach((peer, held) => {
        if (!byName && !!item.name && (held.name === item.name || this.isAncestor(item, held))) byName = peer;
      });
      if (byName) return byName;
    }
    return null;
  }
}
