import { DomDocumentHelper, DomWindowHelper } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { JournalPlugin } from "../journal";
import { PresencePlugin } from "../presence";
import { IPresencePeer } from "../presence/presence-state";
import { CollabBarStatus, ICollabChange, ICollabParticipant } from "./collab-bar-types";
import { CollabBarView } from "./collab-bar-view";
import "./collab-bar.scss";

export * from "./collab-bar-types";
export * from "./collab-bar-view";

/** Self-heal cadence: catches the creator root being re-created (re-render). */
const MOUNT_TICK_MS = 500;

export interface ICollabBarOptions {
  /** Shown in the "Collaboration" menu "Room" row; the row is hidden when absent. */
  roomId?: string;
  /** Shown in the menu "Framework" row; the row is hidden when absent. */
  framework?: string;
  /**
   * The "Invite" button copies this link to the clipboard; the button is
   * hidden when absent. The host owns the link format (e.g. its lobby URL).
   */
  getInviteLink?: () => string;
  /** The "Back to lobby" menu item action; the item is hidden when absent. */
  onBack?: () => void;
  /**
   * Backs the save-version menu item. Default: snapshot through the creator's
   * registered JournalPlugin; the item is hidden when neither is available.
   */
  onSaveVersion?: (label: string) => void;
  /**
   * A participant chip/row was clicked. Default: follow them to their tab
   * (`creator.activeTab = user.tab`).
   */
  onGoToParticipant?: (user: ICollabParticipant) => void;
  /**
   * Roster source for the avatar strip. Default: the creator's registered
   * PresencePlugin ("presence"), resolved lazily so registration order does
   * not matter. Without one, feed the roster via `setParticipants`.
   */
  presence?: PresencePlugin;
}

/**
 * A background (non-tab) creator plugin that renders the collaboration bar as
 * a full-width strip INSIDE the creator root, above the tabbed menu -- in every
 * UI framework, since it is plain DOM (same approach as `PresenceOverlay`).
 *
 * Data flow: participants come from the PresencePlugin roster automatically;
 * connection status and the room change log are transport state, so the host
 * pushes them in (`setStatus` / `setHistory`). Host-specific concerns (invite
 * link, lobby navigation, labels) are options -- absent option, hidden element.
 *
 * ```ts
 * const bar = new CollabBarPlugin(creator, {
 *   roomId, framework: "React",
 *   getInviteLink: () => `${location.origin}/?room=${encodeURIComponent(roomId)}`,
 *   onBack: () => { location.href = "/"; }
 * });
 * creator.addPlugin("collabBar", bar);
 * // transport: onStatus -> bar.setStatus, onHistoryChanged -> bar.setHistory
 * ```
 */
export class CollabBarPlugin implements ICreatorPlugin {
  public model: any = undefined;
  private view: CollabBarView | undefined;
  private disposed = false;
  private mountedOnce = false;
  private rafPending = false;
  private rafId: any = 0;
  private fallbackTimer: ReturnType<typeof setInterval> | undefined;
  private mutationObserver: MutationObserver | undefined;
  private observedRoot: HTMLElement | undefined;
  private presencePlugin: PresencePlugin | undefined;
  private peersChanged: ((sender: any, options: { peers: ReadonlyMap<string, IPresencePeer> }) => void) | undefined;

  constructor(private creator: SurveyCreatorModel, private options: ICollabBarOptions = {}) {
    if (!DomDocumentHelper.isAvailable()) return;
    this.view = new CollabBarView({
      roomId: options.roomId,
      framework: options.framework,
      getInviteLink: options.getInviteLink,
      onBack: options.onBack,
      onSaveVersion: this.resolveSaveVersion(),
      onGoToParticipant: (user) => this.goToParticipant(user)
    });
    // rootElement appears only after the framework renders the creator: poll
    // fast (rAF) for the first mount, then keep a slow self-heal tick that
    // also catches the root being re-created later.
    this.fallbackTimer = setInterval(this.ensureMounted, MOUNT_TICK_MS);
    this.scheduleRaf();
  }

  public activate(): void { }
  public deactivate(): boolean {
    return true;
  }

  public dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    this.cancelRaf(this.rafId);
    if (this.fallbackTimer !== undefined) clearInterval(this.fallbackTimer);
    this.mutationObserver?.disconnect();
    if (this.presencePlugin && this.peersChanged) {
      this.presencePlugin.onPeersChanged.remove(this.peersChanged);
    }
    this.view?.dispose();
  }

  /** Connection state (pushed by the host transport). */
  public setStatus(status: CollabBarStatus): void {
    this.view?.setStatus(status);
  }
  /** The room change log backing "Show Version History" (pushed by the host transport). */
  public setHistory(changes: ReadonlyArray<ICollabChange>): void {
    this.view?.setHistory(changes);
  }
  /** Manual roster override for hosts without a PresencePlugin. */
  public setParticipants(users: Array<ICollabParticipant>): void {
    this.view?.setParticipants(users);
  }
  /** The bar strip element (tests / host tweaks); undefined without a DOM. */
  public get element(): HTMLElement | undefined {
    return this.view?.element;
  }

  private resolveSaveVersion(): ((label: string) => void) | undefined {
    if (this.options.onSaveVersion) return this.options.onSaveVersion;
    // No handler and no journal to snapshot into -> the menu item is hidden.
    // Register the bar after JournalPlugin for the default to kick in.
    if (!this.creator.getPlugin<JournalPlugin>("journal", false)) return undefined;
    return (label: string) => this.creator.getPlugin<JournalPlugin>("journal", false)?.snapshot(label);
  }

  private goToParticipant(user: ICollabParticipant): void {
    if (this.options.onGoToParticipant) {
      this.options.onGoToParticipant(user);
      return;
    }
    if (user.tab)this.creator.activeTab = user.tab;
  }

  private raf(cb: () => void): any {
    return DomWindowHelper.isAvailable() ? DomWindowHelper.requestAnimationFrame(cb) : setTimeout(cb, 16);
  }
  private cancelRaf(id: any): void {
    if (DomWindowHelper.isAvailable()) DomWindowHelper.getWindow().cancelAnimationFrame(id);
    else clearTimeout(id);
  }
  private scheduleRaf(): void {
    if (this.rafPending || this.disposed) return;
    this.rafPending = true;
    this.rafId = this.raf(() => {
      this.rafPending = false;
      this.ensureMounted();
    });
  }

  private ensureMounted = (): void => {
    if (this.disposed || !this.view) return;
    this.hookPresence();
    const root = this.creator.rootElement;
    if (!root) {
      // Fast-poll only before the first mount; afterwards the slow tick is
      // enough to catch a root that went away and came back.
      if (!this.mountedOnce)this.scheduleRaf();
      return;
    }
    const el = this.view.element;
    if (el.parentElement !== root || root.firstChild !== el) {
      // First child of div.svc-creator (a flex column) -> above .svc-creator__area.
      root.insertBefore(el, root.firstChild);
    }
    this.mountedOnce = true;
    this.observeRoot(root as HTMLElement);
  };

  /** Watch the current root's direct children to restore the strip instantly. */
  private observeRoot(root: HTMLElement): void {
    if (this.observedRoot === root) return;
    this.mutationObserver?.disconnect();
    this.mutationObserver = undefined;
    this.observedRoot = root;
    if (typeof MutationObserver !== "undefined") {
      // ensureMounted is a cheap no-op while the strip is in place, so the
      // callback needs no throttling; our own insert re-triggers it once.
      this.mutationObserver = new MutationObserver(this.ensureMounted);
      this.mutationObserver.observe(root, { childList: true });
    }
  }

  /** Lazy one-time subscription to the presence roster (order-independent). */
  private hookPresence(): void {
    if (this.presencePlugin) return;
    const presence = this.options.presence ?? this.creator.getPlugin<PresencePlugin>("presence", false);
    if (!presence || !presence.onPeersChanged) return; // keep trying on later ticks
    this.presencePlugin = presence;
    this.peersChanged = (_: any, options: { peers: ReadonlyMap<string, IPresencePeer> }) => {
      this.setParticipants(peersToParticipants(options.peers));
    };
    presence.onPeersChanged.add(this.peersChanged);
    this.setParticipants(peersToParticipants(presence.peers));
  }
}

/** The PresencePlugin roster -> the avatar strip input. */
function peersToParticipants(peers: ReadonlyMap<string, IPresencePeer>): Array<ICollabParticipant> {
  return Array.from(peers.values()).map((peer) => ({
    id: peer.clientId,
    name: peer.name,
    color: peer.color,
    tab: (peer.state && peer.state.tab) || ""
  }));
}
