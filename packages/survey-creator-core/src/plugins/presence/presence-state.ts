/**
 * Presence state shape + the DOM anchor codec shared by the capture and
 * overlay parts of the presence plugin. The wire envelope (clientId, name,
 * color) is added by the collaboration server; the server treats the state as
 * opaque, so THIS file is the source of truth for what's inside.
 *
 * Every DOM selector presence relies on is centralized here: if the Creator
 * ever renames an attribute, this is the only file to fix.
 */

/**
 * What kind of DOM node a cursor anchor points at:
 *  - "el"     designer question/panel adorner  [data-sv-drop-target-survey-element=n]
 *  - "page"   designer page adorner            [data-sv-drop-target-survey-page=n]
 *  - "pg"     property-grid field              .svc-side-bar [data-name=n]
 *  - "q"      inner-survey question of a tab   #scrollableDiv-{tab} [data-name=n]
 *  - "tabbar" a tab strip item                 #tab-{n}
 *  - "surface" the designer canvas content     #scrollableDiv-{tab} .svc-tab-designer_content
 *  - "root"   the tab's scroll container       #scrollableDiv-{tab}
 */
export type AnchorScope = "el" | "page" | "pg" | "q" | "tabbar" | "surface" | "root";

export interface IAnchorRef {
  s: AnchorScope;
  n?: string;
}

/**
 * The local participant's ephemeral state as captured by `PresenceCapture`.
 * Identity (name/color) is NOT part of the state - the transport layer is
 * expected to attach it to the envelope (the collaboration server stamps
 * `clientId`, `name` and `color` onto every relayed peer entry).
 */
export interface IPresenceState {
  /** creator.activeTab (viewType): designer|test|theme|logic|translation|editor. */
  tab: string;
  /** creator.activeTabId - the key of the #tab-{id} / #scrollableDiv-{id} anchors. */
  tabId: string;
  /** Selected element, or null when nothing is selected. */
  sel: null | {
    /** JournalLocator JSON pointer; "" = the survey itself. */
    loc: string,
    /** element.name - direct DOM anchor; null for non-anchorable objects. */
    name: string | null,
    /** element.getType(). */
    kind: string,
    /** Human-readable label for badges/tooltips. */
    title: string,
  };
  /** Focused property-grid field, or null. */
  pgFocus: null | {
    grid: "main" | "theme",
    /** Question name in the grid survey == property name. */
    prop: string,
    /** Locator of the object the grid shows (null for the theme grid). */
    objLoc: string | null,
  };
  /**
   * Focused inline string editor on the designer surface (question/page/survey
   * title or description, a choice text, a matrix cell, ...), or null.
   * Anchored by the owner node plus the editor's document-order index inside
   * it - see `encodeEditFocus`/`resolveEditFocus`.
   */
  edit: null | {
    /** Owner kind: an element adorner, a page adorner, or the survey header. */
    scope: "el" | "page" | "survey",
    /** Element/page name for el/page scopes; "" for the survey scope. */
    name: string,
    /** Index of the `.svc-string-editor` within the owner (document order). */
    idx: number,
  };
  /** Mouse cursor, or null when the mouse left the creator. */
  cur: null | {
    /** tabId the cursor was captured on. */
    tab: string,
    a: IAnchorRef,
    /** Position inside the anchor's border box, fractions 0..1. */
    x: number,
    y: number,
    /** Sender epoch ms of the last move. Dedupe only - never compare to local clocks. */
    t: number,
  };
  /** Reserved for tab-specific extras. Keep the serialized state small. */
  detail?: Record<string, unknown>;
}

/** A remote participant; `name` and `color` come from the server envelope. */
export interface IPresencePeer {
  clientId: string;
  /** Display name, stamped by the server from the connection URL. */
  name: string;
  /** Server-assigned hex color. */
  color: string;
  state: IPresenceState;
  /** Local receive time (ms) of the last update - used for staleness. */
  lastSeen: number;
}

/** What the transport feeds into `PresencePlugin.upsertPeer`/`setPeers`. */
export interface IPresencePeerEntry {
  clientId: string;
  name: string;
  color: string;
  state: IPresenceState;
}

// ---------------------------------------------------------------------------
// Centralized selectors

/** data-sv-drop-target-survey-element values that are drag&drop ghosts, not elements. */
const GHOST_ELEMENT_NAMES = new Set(["sv-drag-drop-ghost-survey-element-name", "newGhostPage"]);

const cssEsc = (s: string): string =>
  typeof CSS !== "undefined" && CSS.escape ? CSS.escape(s) : s.replace(/["\\]/g, "\\$&");

export const PRESENCE_SELECTORS = {
  element: (name: string): string => `[data-sv-drop-target-survey-element="${cssEsc(name)}"]`,
  page: (name: string): string => `[data-sv-drop-target-survey-page="${cssEsc(name)}"]`,
  sidebar: ".svc-side-bar",
  toolbox: ".svc-toolbox",
  designerSurface: ".svc-tab-designer",
  designerSurfaceContent: ".svc-tab-designer_content",
  dataName: (name: string): string => `[data-name="${cssEsc(name)}"]`,
  pgQuestionContent: ".spg-question__content",
  stringEditor: ".svc-string-editor",
  designerHeader: ".svc-designer-header",
  tabItem: (tabId: string): string => `#${cssEsc(`tab-${tabId}`)}`,
  tabContent: (tabId: string): string => `#${cssEsc(`scrollableDiv-${tabId}`)}`,
  tabbedMenu: ".svc-tabbed-menu"
};

// ---------------------------------------------------------------------------
// Anchor codec - encode on the capturing side, resolve on the rendering side.
// Both sides must agree, which is why they live in one file.

/**
 * Encode the most specific stable anchor for a point over `target`.
 * `activeTabId` scopes the "q"/"root" fallbacks to the current tab.
 */
export function encodeAnchor(target: Element, activeTabId: string): { a: IAnchorRef, el: Element } | null {
  const el = target.closest("[data-sv-drop-target-survey-element]");
  if (el) {
    const n = el.getAttribute("data-sv-drop-target-survey-element") ?? "";
    if (n && !GHOST_ELEMENT_NAMES.has(n)) return { a: { s: "el", n }, el };
  }
  const page = target.closest("[data-sv-drop-target-survey-page]");
  if (page) {
    const n = page.getAttribute("data-sv-drop-target-survey-page") ?? "";
    if (n && !GHOST_ELEMENT_NAMES.has(n)) return { a: { s: "page", n }, el: page };
  }
  const named = target.closest("[data-name]");
  if (named) {
    const n = named.getAttribute("data-name") ?? "";
    if (n) {
      if (named.closest(PRESENCE_SELECTORS.sidebar)) return { a: { s: "pg", n }, el: named };
      if (named.closest(PRESENCE_SELECTORS.tabContent(activeTabId))) return { a: { s: "q", n }, el: named };
    }
  }
  const tabItem = target.closest('[id^="tab-"]');
  if (tabItem && (tabItem.getAttribute("role") === "tab" || tabItem.classList.contains("svc-tabbed-menu-item"))) {
    return { a: { s: "tabbar", n: tabItem.id.slice("tab-".length) }, el: tabItem };
  }
  // The designer canvas, not the whole tab container: the container also holds
  // the toolbox, whose width differs between peers (expanded vs compact), so
  // fractions relative to it would not line up. Fractions are taken from the
  // SCROLLED content box, not the visible scroll viewport - the viewport's
  // rect depends on the peer's window size and scroll position, while the
  // content lays out the same survey the same way on every peer.
  const surface = target.closest(PRESENCE_SELECTORS.designerSurface);
  if (surface && surface.closest(PRESENCE_SELECTORS.tabContent(activeTabId))) {
    const content = surface.querySelector(PRESENCE_SELECTORS.designerSurfaceContent);
    return { a: { s: "surface" }, el: content ?? surface };
  }
  const container = target.closest(PRESENCE_SELECTORS.tabContent(activeTabId));
  if (container) return { a: { s: "root" }, el: container };
  return null;
}

/**
 * Encode the focused inline string editor for a node inside one; null when
 * `target` is not inside a designer string editor. The editor is addressed by
 * its owner (the innermost element adorner, a page adorner, or the survey
 * header) plus its document-order index among the owner's editors - the
 * designer DOM is generated from the same survey model on every client, so
 * the index is stable across peers.
 */
export function encodeEditFocus(target: Element): NonNullable<IPresenceState["edit"]> | null {
  const editor = target.closest(PRESENCE_SELECTORS.stringEditor);
  if (!editor) return null;
  let scope: "el" | "page" | "survey" = "el";
  let owner = editor.closest("[data-sv-drop-target-survey-element]");
  let name = owner?.getAttribute("data-sv-drop-target-survey-element") ?? "";
  if (!owner) {
    scope = "page";
    owner = editor.closest("[data-sv-drop-target-survey-page]");
    name = owner?.getAttribute("data-sv-drop-target-survey-page") ?? "";
  }
  if (!owner) {
    scope = "survey";
    owner = editor.closest(PRESENCE_SELECTORS.designerHeader);
    name = "";
  }
  if (!owner) return null;
  if (scope !== "survey" && (!name || GHOST_ELEMENT_NAMES.has(name))) return null;
  const editors = owner.querySelectorAll(PRESENCE_SELECTORS.stringEditor);
  for (let i = 0; i < editors.length; i++) {
    if (editors[i] === editor) return { scope, name, idx: i };
  }
  return null;
}

/** Resolve an edit-focus anchor back to its `.svc-string-editor` node. */
export function resolveEditFocus(edit: NonNullable<IPresenceState["edit"]>, root: ParentNode): Element | null {
  const owner = edit.scope === "el" ? root.querySelector(PRESENCE_SELECTORS.element(edit.name))
    : edit.scope === "page" ? root.querySelector(PRESENCE_SELECTORS.page(edit.name))
      : root.querySelector(PRESENCE_SELECTORS.designerHeader);
  if (!owner) return null;
  const editors = owner.querySelectorAll(PRESENCE_SELECTORS.stringEditor);
  return edit.idx >= 0 && edit.idx < editors.length ? editors[edit.idx] : null;
}

/**
 * Resolve an anchor back to a DOM node; null when it doesn't exist (yet).
 * `root` is the node to search under (normally the document).
 */
export function resolveAnchor(a: IAnchorRef, tabId: string, root: ParentNode): Element | null {
  const scoped = (sel: string): Element | null => {
    const container = root.querySelector(PRESENCE_SELECTORS.tabContent(tabId));
    return container ? container.querySelector(sel) : null;
  };
  switch(a.s) {
    case "el": return a.n ? scoped(PRESENCE_SELECTORS.element(a.n)) : null;
    case "page": return a.n ? scoped(PRESENCE_SELECTORS.page(a.n)) : null;
    case "pg": return a.n
      ? root.querySelector(`${PRESENCE_SELECTORS.sidebar} ${PRESENCE_SELECTORS.dataName(a.n)}`)
      : null;
    case "q": return a.n ? scoped(PRESENCE_SELECTORS.dataName(a.n)) : null;
    case "tabbar": return a.n ? root.querySelector(PRESENCE_SELECTORS.tabItem(a.n)) : null;
    case "surface": return scoped(PRESENCE_SELECTORS.designerSurfaceContent) ?? scoped(PRESENCE_SELECTORS.designerSurface);
    case "root": return root.querySelector(PRESENCE_SELECTORS.tabContent(tabId));
    default: return null;
  }
}

// ---------------------------------------------------------------------------
// Small display helpers

export function presenceInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
