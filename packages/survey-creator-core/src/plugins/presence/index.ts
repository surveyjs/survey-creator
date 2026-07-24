import { EventBase } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { IPresencePeer, IPresencePeerEntry, IPresenceState } from "./presence-state";
import { PresenceCapture } from "./presence-capture";
import { PresenceOverlay } from "./presence-overlay";

export { PresenceCapture } from "./presence-capture";
export { PresenceOverlay } from "./presence-overlay";
export * from "./presence-state";

/**
 * A background (non-tab) creator plugin that tracks the local user's presence
 * (active tab, selected element, property-grid focus, mouse cursor) and
 * renders remote participants' presence over the creator (selection outlines,
 * property-grid markers, cursors).
 *
 * Like `JournalPlugin`, it has no transport of its own: the outbound side is
 * the `onStateChanged` event with the full local state, the inbound side is
 * the peer-roster ingress (`setPeers`/`upsertPeer`/`removePeer`/...). User
 * identity (name/color) is not part of the state - the transport/server is
 * expected to stamp it onto each relayed peer entry.
 *
 * ```ts
 * const presence = new PresencePlugin(creator);
 * creator.addPlugin("presence", presence);
 * presence.onStateChanged.add(() => sendThrottled({ type: "presence", state: presence.getState() }));
 * socket.onmessage = (msg) => presence.upsertPeer(msg.peer); // {clientId, name, color, state}
 * ```
 */
export class PresencePlugin implements ICreatorPlugin {
  public model: any = undefined;
  public capture: PresenceCapture;
  public overlay: PresenceOverlay;
  public onPeersChanged: EventBase<PresencePlugin, { peers: ReadonlyMap<string, IPresencePeer> }> = new EventBase();
  private peersMap = new Map<string, IPresencePeer>();

  constructor(creator: SurveyCreatorModel) {
    this.capture = new PresenceCapture(creator);
    this.overlay = new PresenceOverlay(creator, () => this.peersMap);
  }
  public activate(): void { }
  public deactivate(): boolean {
    return true;
  }
  public dispose(): void {
    this.capture.dispose();
    this.overlay.dispose();
  }

  public get onStateChanged(): EventBase<PresenceCapture, { state: IPresenceState }> {
    return this.capture.onStateChanged;
  }
  public getState(): IPresenceState {
    return this.capture.getState();
  }

  public get peers(): ReadonlyMap<string, IPresencePeer> {
    return this.peersMap;
  }
  /** Replace the whole roster (from a `presence-sync`). Filter out self before calling. */
  public setPeers(entries: Array<IPresencePeerEntry>): void {
    this.peersMap.clear();
    for (const entry of entries)this.addPeer(entry);
    this.peersChanged();
  }
  /** Add or update one peer (from a relayed `presence` message). */
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
  /** Drop peers not updated for `olderThanMs` - a staleness backstop for missed leaves. */
  public dropStalePeers(olderThanMs: number): void {
    const cutoff = Date.now() - olderThanMs;
    const stale: Array<string> = [];
    this.peersMap.forEach((peer, id) => {
      if (peer.lastSeen < cutoff) stale.push(id);
    });
    stale.forEach((id) => this.peersMap.delete(id));
    if (stale.length > 0)this.peersChanged();
  }

  private addPeer(entry: IPresencePeerEntry): boolean {
    if (!entry || !entry.clientId || !entry.state) return false;
    this.peersMap.set(entry.clientId, {
      clientId: entry.clientId,
      name: entry.name ?? "",
      color: entry.color ?? "",
      state: entry.state,
      lastSeen: Date.now()
    });
    return true;
  }
  private peersChanged(): void {
    this.onPeersChanged.fire(this, { peers: this.peersMap });
    this.overlay.refresh();
  }
}
