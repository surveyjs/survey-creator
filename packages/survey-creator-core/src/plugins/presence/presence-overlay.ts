import { DomDocumentHelper, DomWindowHelper } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { buildLocator, resolveLocator } from "../journal/journal-locator";
import { IPresencePeer, IPresenceState, PRESENCE_SELECTORS, resolveAnchor, resolveEditFocus } from "./presence-state";
import "./presence.scss";

/** Above the creator content; below survey-core popups is acceptable (cosmetic). */
const OVERLAY_Z_INDEX = 1100;
/** A cursor that hasn't moved for this long fades out. */
const CURSOR_IDLE_MS = 30_000;
/** Safety tick for changes no observer catches (animations, scrollIntoView). */
const FALLBACK_TICK_MS = 500;
/** Em dash, the "name - detail" separator in badge tooltips. */
const EM_DASH = String.fromCharCode(0x2014);

interface IRect { left: number, top: number, width: number, height: number }

const intersects = (a: IRect, b: IRect): boolean =>
  a.left < b.left + b.width && a.left + a.width > b.left &&
  a.top < b.top + b.height && a.top + a.height > b.top;

/** Per-peer DOM artifacts, created lazily and repositioned every tick. */
interface IPeerArtifacts {
  badge: HTMLElement;
  cursor: HTMLElement;
  cursorName: HTMLElement;
  /** Receiver-side time of the last observed cursor change (staleness). */
  curChangedAt: number;
  lastCurStamp: number | undefined;
}

/**
 * Renders remote participants.
 *
 * Element focus (selection ring, focused choice row, property-grid field) is
 * drawn NATIVELY: the renderer stamps a `data-collab-focus` attribute plus an
 * inline `--collab-peer-color` CSS variable onto the real creator nodes, and
 * presence.scss draws the same box-shadow ring the built-in selection uses -
 * so it scrolls, clips and layers like the native one. Inline styles and
 * unknown attributes survive framework re-renders; a re-CREATED node loses
 * them, but the MutationObserver tick below re-applies on the next pass.
 *
 * Only the mouse cursors and the tab-strip badges, which cannot be expressed
 * as element decorations, live in a fixed pointer-transparent layer.
 */
export class PresenceOverlay {
  private disposed = false;
  private layer: HTMLElement;
  private artifacts = new Map<string, IPeerArtifacts>();
  /** Nodes currently carrying a decoration -> the applied "mode|color". */
  private decorated = new Map<HTMLElement, string>();
  private rafId: any = 0;
  private scheduled = false;
  private rootPoll: any = 0;
  private fallbackTimer: ReturnType<typeof setInterval>;
  private resizeObserver: ResizeObserver | undefined;
  private mutationObserver: MutationObserver | undefined;
  private doc: Document;

  constructor(private creator: SurveyCreatorModel, private getPeers: () => ReadonlyMap<string, IPresencePeer>) {
    if (!DomDocumentHelper.isAvailable()) return;
    this.doc = DomDocumentHelper.getDocument();
    this.layer = this.doc.createElement("div");
    this.layer.className = "collab-presence-layer";
    this.layer.style.cssText =
      `position:fixed;inset:0;pointer-events:none;z-index:${OVERLAY_Z_INDEX};` +
      "font:11px system-ui,sans-serif;overflow:hidden;";
    DomDocumentHelper.getBody().appendChild(this.layer);

    this.doc.addEventListener("scroll", this.onScroll, true);
    DomWindowHelper.addEventListener("resize", this.onResize);
    this.fallbackTimer = setInterval(() => this.refresh(), FALLBACK_TICK_MS);
    this.rootPoll = this.raf(this.attachObservers);
  }

  /** Mark the overlay dirty - repaints on the next animation frame. */
  public refresh = (): void => {
    if (this.scheduled || this.disposed || !this.layer) return;
    this.scheduled = true;
    this.rafId = this.raf(() => {
      this.scheduled = false;
      if (!this.disposed)this.render();
    });
  };

  public dispose(): void {
    this.disposed = true;
    if (!this.layer) return;
    this.cancelRaf(this.rafId);
    this.cancelRaf(this.rootPoll);
    clearInterval(this.fallbackTimer);
    this.doc.removeEventListener("scroll", this.onScroll, true);
    DomWindowHelper.removeEventListener("resize", this.onResize);
    this.resizeObserver?.disconnect();
    this.mutationObserver?.disconnect();
    this.applyDecorations(new Map());
    this.layer.remove();
  }

  private raf(cb: () => void): any {
    return DomWindowHelper.isAvailable() ? DomWindowHelper.requestAnimationFrame(cb) : setTimeout(cb, 16);
  }
  private cancelRaf(id: any): void {
    if (DomWindowHelper.isAvailable()) DomWindowHelper.getWindow().cancelAnimationFrame(id);
    else clearTimeout(id);
  }

  private onScroll = (): void => this.refresh();
  private onResize = (): void => this.refresh();

  // rootElement appears only after the framework renders the creator.
  private attachObservers = (): void => {
    if (this.disposed) return;
    const root = this.creator.rootElement;
    if (!root) {
      this.rootPoll = this.raf(this.attachObservers);
      return;
    }
    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver(this.refresh);
      this.resizeObserver.observe(root);
    }
    if (typeof MutationObserver !== "undefined") {
      this.mutationObserver = new MutationObserver(this.refresh);
      this.mutationObserver.observe(root, { childList: true, subtree: true, attributes: true });
    }
  };

  // --- layer artifacts (cursors and tab badges only) ---------------------------

  private el(className: string, css: string): HTMLElement {
    const node = this.doc.createElement("div");
    node.className = className;
    node.style.cssText = `position:absolute;display:none;${css}`;
    this.layer.appendChild(node);
    return node;
  }

  private getArtifacts(peer: IPresencePeer): IPeerArtifacts {
    let a = this.artifacts.get(peer.clientId);
    if (a) return a;
    const color = peer.color || "#888";
    a = {
      badge: this.el("collab-presence-badge", `width:10px;height:10px;border-radius:50%;border:2px solid #fff;box-sizing:border-box;background:${color};`),
      cursor: this.el("collab-presence-cursor", "width:0;height:0;"),
      cursorName: this.el("collab-presence-cursor-name", `padding:2px 7px;border-radius:10px;background:${color};color:#fff;white-space:nowrap;`),
      curChangedAt: 0,
      lastCurStamp: undefined
    };
    a.cursor.innerHTML =
      "<svg width=\"16\" height=\"18\" viewBox=\"0 0 16 18\" style=\"display:block\">" +
      "<path d=\"M1 1 L1 14 L4.5 10.8 L7 16.5 L9.3 15.5 L6.8 9.9 L11.5 9.6 Z\" " +
      `fill="${peer.color || "#888"}" stroke="#fff" stroke-width="1"/></svg>`;
    this.artifacts.set(peer.clientId, a);
    return a;
  }

  private dropArtifacts(clientId: string): void {
    const a = this.artifacts.get(clientId);
    if (!a) return;
    for (const node of [a.badge, a.cursor, a.cursorName]) node.remove();
    this.artifacts.delete(clientId);
  }

  private hide(...nodes: Array<HTMLElement>): void {
    nodes.forEach((n) => { n.style.display = "none"; });
  }
  private place(node: HTMLElement, left: number, top: number): void {
    node.style.display = "block";
    node.style.left = `${Math.round(left)}px`;
    node.style.top = `${Math.round(top)}px`;
  }

  // --- anchor resolution helpers -------------------------------------------------

  private designerContainer(): Element | null {
    return this.doc.querySelector(PRESENCE_SELECTORS.tabContent("designer"));
  }

  /** Selection -> the adorner node: direct name anchor, else locator + owner-chain walk. */
  private resolveSelectionNode(sel: NonNullable<IPresenceState["sel"]>, container: Element): Element | null {
    const byName = (name: string): Element | null =>
      container.querySelector(PRESENCE_SELECTORS.element(name)) ??
      container.querySelector(PRESENCE_SELECTORS.page(name));
    if (sel.name) {
      const direct = byName(sel.name);
      if (direct) return direct;
    }
    if (!sel.loc) return null; // "" = the survey itself - nothing to outline
    let obj: any;
    try {
      obj = resolveLocator(sel.loc, this.creator.survey);
    } catch{
      return null;
    }
    // Non-anchorable objects (itemvalue, matrix column, ...): climb to the
    // nearest owner that has an adorner in the designer.
    for (let i = 0; obj && i < 20; i++) {
      if (typeof obj.name === "string" && obj.name) {
        const node = byName(obj.name);
        if (node) return node;
      }
      obj = obj.parent ?? obj.parentQuestion ?? obj.colOwner ?? obj.owner ?? null;
    }
    return null;
  }

  /**
   * The node that carries the native selection ring for an adorner: the page
   * anchor IS its `.svc-page__content`; a question/panel adorner has the
   * `.svc-question__content` as a direct child.
   */
  private ringNode(anchor: Element): Element | null {
    if (anchor.hasAttribute("data-sv-drop-target-survey-page")) return anchor;
    return anchor.querySelector(":scope > .svc-question__content");
  }

  /** Locator of the locally selected object - gate for property-grid decorations. */
  private localSelectionLoc(): string | null {
    if (!this.creator.selectedElement) return null;
    try {
      return buildLocator(this.creator.selectedElement, this.creator.survey);
    } catch{
      return null;
    }
  }

  // --- native decorations (data-collab-focus + --collab-peer-color) -------------

  /** Sync the decorated-node set to `wanted` (node -> "mode|color"). */
  private applyDecorations(wanted: Map<HTMLElement, string>): void {
    const stale: Array<HTMLElement> = [];
    this.decorated.forEach((_, node) => {
      if (!wanted.has(node)) stale.push(node);
    });
    stale.forEach((node) => {
      node.removeAttribute("data-collab-focus");
      node.style.removeProperty("--collab-peer-color");
      this.decorated.delete(node);
    });
    wanted.forEach((value, node) => {
      if (this.decorated.get(node) === value) return;
      const sep = value.indexOf("|");
      node.setAttribute("data-collab-focus", value.substring(0, sep));
      node.style.setProperty("--collab-peer-color", value.substring(sep + 1));
      this.decorated.set(node, value);
    });
  }

  // --- per-tick render -----------------------------------------------------------

  private render(): void {
    const peers = this.getPeers();
    const gone: Array<string> = [];
    this.artifacts.forEach((_, id) => {
      if (!peers.has(id)) gone.push(id);
    });
    gone.forEach((id) => this.dropArtifacts(id));

    const localTab = this.creator.activeTab;
    const localTabId = this.creator.activeTabId;
    const localSelLoc = this.localSelectionLoc();
    const now = Date.now();
    const sidebar = this.doc.querySelector(PRESENCE_SELECTORS.sidebar);
    const sidebarRect = sidebar?.getBoundingClientRect();
    const designer = localTab === "designer" ? this.designerContainer() : null;
    const badgeCountPerTab = new Map<string, number>();
    // Desired decorations this tick; first peer to claim a node wins.
    const wanted = new Map<HTMLElement, string>();

    peers.forEach((peer) => {
      const a = this.getArtifacts(peer);
      const state = peer.state;
      const color = peer.color || "#888";

      // 1) tab badge - stacked per tab, right-to-left from the tab's corner
      const tabNode = state.tabId ? this.doc.querySelector(PRESENCE_SELECTORS.tabItem(state.tabId)) : null;
      const badgeAnchor = tabNode ?? this.doc.querySelector(PRESENCE_SELECTORS.tabbedMenu);
      if (badgeAnchor) {
        const idx = badgeCountPerTab.get(state.tabId) ?? 0;
        badgeCountPerTab.set(state.tabId, idx + 1);
        const r = badgeAnchor.getBoundingClientRect();
        this.place(a.badge, r.right - 12 - idx * 11, r.top + 2);
        a.badge.title = `${peer.name} ${EM_DASH} ${state.tab || "?"}`;
      } else {
        this.hide(a.badge);
      }

      // 2) element focus ring - decorate the real node; independently, a
      // focused inline string editor lights up its native focus border
      // (mirrors what the peer sees locally: selection ring + editor border).
      if (designer) {
        if (state.sel) {
          const anchor = this.resolveSelectionNode(state.sel, designer);
          const target = anchor ? this.ringNode(anchor) : null;
          if (target instanceof HTMLElement && !wanted.has(target)) {
            const mode = state.tab === "designer" ? "on" : "away";
            wanted.set(target, `${mode}|${color}`);
          }
        }
        if (state.edit) {
          const editor = resolveEditFocus(state.edit, designer);
          if (editor instanceof HTMLElement && !wanted.has(editor)) {
            wanted.set(editor, `on|${color}`);
          }
        }
      }

      // 3) property-grid field ring - only when the local grid shows the same content
      if (state.pgFocus && sidebar) {
        const sameContent = state.pgFocus.grid === "theme"
          ? localTab === "theme"
          : state.pgFocus.objLoc !== null && state.pgFocus.objLoc === localSelLoc;
        if (sameContent) {
          const field = sidebar.querySelector(PRESENCE_SELECTORS.dataName(state.pgFocus.prop));
          // The [data-name] node spans the whole row incl. its title; the
          // native focus only outlines the input area, so decorate the
          // question content when present.
          const target = field?.querySelector(PRESENCE_SELECTORS.pgQuestionContent) ?? field;
          if (target instanceof HTMLElement && !wanted.has(target)) {
            wanted.set(target, `on|${color}`);
          }
        }
      }

      // 4) cursor - same tab only (tab strip cursors are global), idle fade
      if (state.cur && state.cur.t !== a.lastCurStamp) {
        a.lastCurStamp = state.cur.t;
        a.curChangedAt = now;
      }
      let cursorShown = false;
      const cur = state.cur;
      if (cur && now - a.curChangedAt < CURSOR_IDLE_MS &&
        (cur.a.s === "tabbar" || cur.tab === localTabId)) {
        const node = resolveAnchor(cur.a, cur.tab, this.doc);
        if (node) {
          const r = node.getBoundingClientRect();
          const container = cur.a.s === "pg" ? sidebarRect
            : cur.a.s === "tabbar" ? undefined
              : this.doc.querySelector(PRESENCE_SELECTORS.tabContent(cur.tab))?.getBoundingClientRect();
          if (container === undefined || (container && intersects(r, container))) {
            const x = r.left + cur.x * r.width;
            const y = r.top + cur.y * r.height;
            this.place(a.cursor, x, y);
            this.place(a.cursorName, x + 12, y + 14);
            a.cursorName.textContent = peer.name;
            cursorShown = true;
          }
        }
      }
      if (!cursorShown)this.hide(a.cursor, a.cursorName);
    });

    this.applyDecorations(wanted);
  }
}
