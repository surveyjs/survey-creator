import { EventBase } from "survey-core";
import { SurveyCreatorModel } from "survey-creator-core";
import { IPresencePeer, IPresencePeerEntry, IPresenceState } from "./presence-state";
import { PresenceCapture } from "./presence-capture";
import { PresenceOverlay } from "./presence-overlay";
import { TranslationDeleteGuard } from "./translation-guard";
import { ElementLockGuard } from "./element-lock";
import { LogicLockGuard } from "./logic-lock";

export { PresenceCapture } from "./presence-capture";
export { PresenceOverlay } from "./presence-overlay";
export { TranslationDeleteGuard } from "./translation-guard";
export { ElementLockGuard } from "./element-lock";
export { LogicLockGuard } from "./logic-lock";
export * from "./logic-rules";
export * from "./presence-state";

// Tracks the local user's presence (active tab, selected element,
// property-grid focus, mouse cursor) and renders remote participants'
// presence over the creator (selection outlines, property-grid markers,
// cursors).
//
// Like the journal, it has no transport of its own: the outbound side is the
// `onStateChanged` event with the full local state, the inbound side is the
// peer-roster ingress (`setPeers`/`upsertPeer`/`removePeer`/...). User
// identity (name/color) is not part of the state - the transport/server is
// expected to stamp it onto each relayed peer entry.
//
// Not a plugin: it is owned by `CollaborationPlugin` (`../collaboration`),
// which registers once and exposes this whole surface by delegation.
export class PresenceController {
  public capture: PresenceCapture;
  public overlay: PresenceOverlay;
  public onPeersChanged: EventBase<PresenceController, { peers: ReadonlyMap<string, IPresencePeer> }> = new EventBase();
  private peersMap = new Map<string, IPresencePeer>();
  public lockGuard: ElementLockGuard;
  public logicLockGuard: LogicLockGuard;
  private translationGuard: TranslationDeleteGuard;

  constructor(creator: SurveyCreatorModel) {
    // The capture first: the lock guard installs its resolver on it and
    // relies on the capture's selection handlers running before its own.
    this.capture = new PresenceCapture(creator);
    this.lockGuard = new ElementLockGuard(creator, this.capture, () => this.peersMap);
    this.logicLockGuard = new LogicLockGuard(creator, this.capture, () => this.peersMap, this.lockGuard);
    this.overlay = new PresenceOverlay(creator, () => this.peersMap, this.lockGuard);
    this.translationGuard = new TranslationDeleteGuard(creator, () => this.peersMap);
  }
  public dispose(): void {
    this.logicLockGuard.dispose();
    this.lockGuard.dispose();
    this.capture.dispose();
    this.overlay.dispose();
    this.translationGuard.dispose();
  }

  public get onStateChanged(): EventBase<PresenceCapture, { state: IPresenceState }> {
    return this.capture.onStateChanged;
  }
  public getState(): IPresenceState {
    return this.capture.getState();
  }

  // This participant's server-assigned id - the tie-breaker of editing locks.
  public setClientId(clientId: string): void {
    this.lockGuard.localClientId = clientId || "";
    this.refreshAllLocks();
  }
  // Re-derive editing locks after the survey changed under them (a journal
  // apply renames/moves/deletes elements the locators point at).
  public refreshLocks(): void {
    this.logicLockGuard.onApplied();
    this.refreshAllLocks();
  }
  // Designer locks first: rule locks consult them.
  private refreshAllLocks(): void {
    this.lockGuard.refresh();
    this.logicLockGuard.refresh();
  }

  public get peers(): ReadonlyMap<string, IPresencePeer> {
    return this.peersMap;
  }
  // Replace the whole roster (from a `presence-sync`). Filter out self before calling.
  public setPeers(entries: Array<IPresencePeerEntry>): void {
    this.peersMap.clear();
    for (const entry of entries)this.addPeer(entry);
    this.peersChanged();
  }
  // Add or update one peer (from a relayed `presence` message).
  public upsertPeer(entry: IPresencePeerEntry): void {
    if (!this.addPeer(entry)) return;
    this.peersChanged();
  }
  public removePeer(clientId: string): void {
    if (!this.peersMap.delete(clientId)) return;
    this.peersChanged();
  }
  public clearPeers(): void {
    if (this.peersMap.size === 0) return;
    this.peersMap.clear();
    this.peersChanged();
  }
  private addPeer(entry: IPresencePeerEntry): boolean {
    if (!entry || !entry.clientId || !entry.state) return false;
    this.peersMap.set(entry.clientId, {
      clientId: entry.clientId,
      name: entry.name ?? "",
      state: entry.state
    });
    return true;
  }
  private peersChanged(): void {
    // Locks first: the roster handlers and the overlay read them.
    this.refreshAllLocks();
    this.onPeersChanged.fire(this, { peers: this.peersMap });
    this.overlay.refresh();
  }
}
