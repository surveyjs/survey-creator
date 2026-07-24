import { DomDocumentHelper } from "survey-core";
import { JournalOp } from "../journal/journal-record";
import { describeRecord } from "../journal/journal-describe";
import { presenceInitials } from "../presence/presence-state";
import { CollabBarStatus, ICollabChange, ICollabParticipant } from "./collab-bar-types";

/**
 * Pure-DOM view of the collaboration bar: the "Collaboration" menu and the
 * connection plate on the left, participant avatars and the "Invite" button on
 * the right, plus the right-docked Version History panel.
 *
 * All widget styling is inline `cssText`. Colors come from the SJS2 theme
 * variables that `ensureBaseThemeStyles` defines on the creator root (the
 * action tokens live under the `neutral`/`brand` families -- there is no
 * `style-*` family), so the bar follows the active creator theme; the
 * fallbacks mirror the default light theme for the rare out-of-root render.
 * Windows mount into `getRootElement()` (falling back to the document body)
 * for the same reason: the theme variables live on the creator root.
 */
export interface ICollabBarViewOptions {
  /** Shown in the menu "Room" row; the row is hidden when absent. */
  roomId?: string;
  /** Shown in the menu "Framework" row; the row is hidden when absent. */
  framework?: string;
  /** The "Invite" button copies this link; the button is hidden when absent. */
  getInviteLink?: () => string;
  /** The "Back to lobby" menu item; the item is hidden when absent. */
  onBack?: () => void;
  /** A participant chip/row was clicked: follow them to their tab. */
  onGoToParticipant?: (user: ICollabParticipant) => void;
  /**
   * The creator root that carries the theme CSS variables; windows mount
   * there so they follow the active theme. Absent (or not yet rendered) ->
   * the document body.
   */
  getRootElement?: () => HTMLElement | undefined;
}

const doc = (): Document => DomDocumentHelper.getDocument();

/** Avatars beyond this count are reachable only through the overflow popover. */
const MAX_AVATARS = 8;

/** SJS2 theme tokens; fallbacks mirror the default light theme values. */
const C = {
  barBg: "var(--sjs2-color-bg-basic-secondary, #f5f5f5)",
  border: "var(--sjs2-color-border-basic-secondary, #d4d4d4)",
  fg: "var(--sjs2-color-fg-basic-primary, #1c1b20)",
  surfaceBg: "var(--sjs2-color-component-action-neutral-tertiary-surface-default-bg, #ffffff)",
  surfaceFg: "var(--sjs2-color-component-action-neutral-tertiary-surface-default-label, rgba(28,27,32,0.8))",
  primaryBg: "var(--sjs2-color-component-action-brand-primary-default-bg, #19b394)",
  primaryFg: "var(--sjs2-color-component-action-brand-primary-default-label, #ffffff)",
  menuBg: "var(--sjs2-color-bg-basic-primary, #ffffff)",
  // Version-history panel surface + muted (timestamp) foreground.
  sheet: "var(--sjs2-color-utility-sheet, #ffffff)",
  fgTertiary: "var(--sjs2-color-fg-basic-tertiary, rgba(28,27,32,0.4))",
  // Hover wash for transparent (quaternary) actions: menu items, icon buttons.
  hoverBg: "var(--sjs2-color-component-action-neutral-quaternary-hovered-bg, rgba(90,90,90,0.1))"
};

const RADIUS = "var(--sjs2-radius-component-action, 8px)";
const FONT = "600 12px/16px 'Open Sans', system-ui, sans-serif";
const FONT_TEXT = "400 16px/24px 'Open Sans', system-ui, sans-serif";
const FONT_TEXT_STRONG = "600 16px/24px 'Open Sans', system-ui, sans-serif";

/** Above the creator's flyout sidebar (z-index 1000, later in the DOM). */
const POPOVER_Z_INDEX = 1100;

const STATUS_COLORS: Record<CollabBarStatus, string> = {
  connecting: "#b78600",
  connected: "#19b35c",
  closed: "#b00020"
};

const STATUS_LABELS: Record<CollabBarStatus, string> = {
  // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
  connecting: "Connecting…",
  connected: "Connected",
  closed: "Disconnected"
};

const ICON_CHEVRON =
  "<svg viewBox=\"0 0 16 16\" width=\"16\" height=\"16\" fill=\"none\" aria-hidden=\"true\">" +
  "<path d=\"M4 6l4 4 4-4\" stroke=\"currentColor\" stroke-width=\"1.5\" " +
  "stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>";

const ICON_CLOSE =
  "<svg viewBox=\"0 0 16 16\" width=\"16\" height=\"16\" fill=\"none\" aria-hidden=\"true\">" +
  "<path d=\"M4 4l8 8M12 4l-8 8\" stroke=\"currentColor\" stroke-width=\"1.5\" " +
  "stroke-linecap=\"round\"/></svg>";

const ICON_MINIMIZE =
  "<svg viewBox=\"0 0 16 16\" width=\"16\" height=\"16\" fill=\"none\" aria-hidden=\"true\">" +
  "<path d=\"M3.5 8h9\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>";

// Horizontal drag handle (two rows of dots), a visual affordance in the header.
const ICON_DRAG =
  "<svg viewBox=\"0 0 24 16\" width=\"24\" height=\"16\" fill=\"currentColor\" aria-hidden=\"true\">" +
  "<circle cx=\"7\" cy=\"6\" r=\"1.3\"/><circle cx=\"12\" cy=\"6\" r=\"1.3\"/><circle cx=\"17\" cy=\"6\" r=\"1.3\"/>" +
  "<circle cx=\"7\" cy=\"10\" r=\"1.3\"/><circle cx=\"12\" cy=\"10\" r=\"1.3\"/><circle cx=\"17\" cy=\"10\" r=\"1.3\"/></svg>";

// Radio-like circle marking a saved version / current version.
const ICON_CHECK_CIRCLE =
  "<svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" fill=\"none\" aria-hidden=\"true\">" +
  "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"1.5\"/>" +
  "<circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\"/></svg>";

const ICON_CHEVRON_DOWN =
  "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"none\" aria-hidden=\"true\">" +
  "<path d=\"M7 10l5 5 5-5\" stroke=\"currentColor\" stroke-width=\"1.5\" " +
  "stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>";

const ICON_CHEVRON_RIGHT =
  "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"none\" aria-hidden=\"true\">" +
  "<path d=\"M10 7l5 5-5 5\" stroke=\"currentColor\" stroke-width=\"1.5\" " +
  "stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>";

const ICON_CLOUD_UPLOAD =
  "<svg viewBox=\"0 0 16 16\" width=\"16\" height=\"16\" fill=\"none\" aria-hidden=\"true\">" +
  "<path d=\"M4.3 13c-1.8 0-3.3-1.5-3.3-3.3 0-1.7 1.3-3.1 3-3.3A4 4 0 0 1 12 6.7" +
  "a3.2 3.2 0 0 1-.5 6.3\" stroke=\"currentColor\" stroke-width=\"1.3\" " +
  "stroke-linecap=\"round\" stroke-linejoin=\"round\"/>" +
  "<path d=\"M8 13.5V7m0 0L5.8 9.2M8 7l2.2 2.2\" stroke=\"currentColor\" " +
  "stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>";

export class CollabBarView {
  /** The bar strip; the plugin inserts it into the creator root. */
  public readonly element: HTMLElement;

  // Latest room change log; the history window re-reads it and live-refreshes
  // while open.
  private historyChanges: ReadonlyArray<ICollabChange> = [];
  private refreshHistoryWindow: (() => void) | undefined;
  // Signature of the last rendered participant list, so presence updates that
  // don't change the displayed roster (cursor moves, selection) skip a rebuild.
  private lastParticipantsSig: string | undefined;

  private statusEl: HTMLElement;
  private statusIcon: HTMLElement;
  private statusText: HTMLElement;
  private avatars: HTMLElement;
  private overflowWrap: HTMLElement;
  private overflowMenu: HTMLDivElement;
  // Open windows and popover closers, released on dispose.
  private openWindows = new Set<IWindow>();
  private popoverClosers: Array<() => void> = [];
  private inviteTimer: ReturnType<typeof setTimeout> | undefined;
  private disposed = false;

  constructor(private options: ICollabBarViewOptions = {}) {
    this.element = doc().createElement("div");
    this.element.className = "svc-collab-bar";
    this.element.style.cssText =
      `display:flex;align-items:center;gap:12px;padding:8px 12px 9px;background:${C.barBg};` +
      `border-bottom:1px solid ${C.border};color:${C.fg};font:${FONT};flex:none;` +
      "box-sizing:border-box;";

    // --- Left block -----------------------------------------------------------
    const left = doc().createElement("div");
    left.style.cssText = "flex:1 0 0;min-width:0;display:flex;align-items:center;gap:24px;";

    // "Collaboration" dropdown trigger -> app menu.
    const menuTrigger = doc().createElement("button");
    menuTrigger.type = "button";
    menuTrigger.style.cssText =
      // 32px tall (8px vertical padding) so the trigger fills the bar's content
      // row and top-aligns like the design's `action` component.
      `display:inline-flex;align-items:center;gap:4px;padding:8px 4px 8px 8px;background:${C.surfaceBg};` +
      `color:${C.surfaceFg};border:none;border-radius:${RADIUS};box-shadow:inset 0 0 0 1px ${C.border};` +
      `font:${FONT};cursor:pointer;`;
    menuTrigger.innerHTML = `<span>Collaboration</span><span style="display:inline-flex">${ICON_CHEVRON}</span>`;

    const menu = createPopover("left");
    const closeMenu = (): void => { menu.style.display = "none"; };
    menu.appendChild(menuButton("Show Version History", () => {
      closeMenu();
      this.openHistoryWindow();
    }));
    // Room/framework info rows and the host navigation are optional: each is
    // rendered only when the host supplied the corresponding option.
    const infoRows: Array<HTMLElement> = [];
    if (this.options.roomId) {
      infoRows.push(menuRow("Room", `<code style="background:${C.hoverBg};padding:1px 6px;border-radius:4px">${escapeHtml(this.options.roomId)}</code>`));
    }
    if (this.options.framework) {
      infoRows.push(menuRow("Framework", escapeHtml(this.options.framework)));
    }
    if (infoRows.length > 0) {
      menu.appendChild(menuDivider());
      for (const row of infoRows) menu.appendChild(row);
    }
    const onBack = this.options.onBack;
    if (onBack) {
      menu.appendChild(menuDivider());
      menu.appendChild(menuButton("Back to lobby", () => onBack()));
    }
    const menuWrap = withPopover(menuTrigger, menu, (close) => this.popoverClosers.push(close));

    // Status: cloud icon + text. Only shown while the connection has a problem
    // (connecting / closed); hidden once everything is connected.
    this.statusEl = doc().createElement("div");
    this.statusEl.style.cssText = "display:none;align-items:center;gap:6px;min-width:0;";
    this.statusIcon = doc().createElement("span");
    this.statusIcon.style.cssText = "display:inline-flex;flex:none;";
    this.statusIcon.innerHTML = ICON_CLOUD_UPLOAD;
    this.statusText = doc().createElement("span");
    this.statusText.style.cssText = "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    this.statusEl.append(this.statusIcon, this.statusText);

    left.append(menuWrap, this.statusEl);

    // --- Right block ----------------------------------------------------------
    const right = doc().createElement("div");
    right.style.cssText = "flex:none;display:flex;align-items:center;justify-content:flex-end;gap:24px;";

    const avatarsGroup = doc().createElement("div");
    avatarsGroup.style.cssText = "display:flex;align-items:center;gap:4px;";

    this.avatars = doc().createElement("div");
    this.avatars.style.cssText = "display:flex;align-items:center;";

    // Overflow trigger -> full participant list.
    const overflowTrigger = doc().createElement("button");
    overflowTrigger.type = "button";
    overflowTrigger.setAttribute("aria-label", "Participants");
    overflowTrigger.style.cssText =
      "display:inline-flex;align-items:center;justify-content:center;padding:4px;background:transparent;" +
      `color:${C.fg};border:none;border-radius:${RADIUS};cursor:pointer;`;
    overflowTrigger.innerHTML = ICON_CHEVRON;
    this.overflowMenu = createPopover("right");
    this.overflowWrap = withPopover(overflowTrigger, this.overflowMenu, (close) => this.popoverClosers.push(close));
    // The overflow trigger only makes sense once there are participants to list.
    this.overflowWrap.style.display = "none";

    avatarsGroup.append(this.avatars, this.overflowWrap);
    right.appendChild(avatarsGroup);

    const getInviteLink = this.options.getInviteLink;
    if (getInviteLink) {
      // "Invite" primary button -- copies the host-supplied link. The
      // accessible name spells out the action (and survives the transient
      // "Copied" caption).
      const inviteBtn = doc().createElement("button");
      inviteBtn.type = "button";
      inviteBtn.textContent = "Invite";
      inviteBtn.setAttribute("aria-label", "Copy invite link");
      inviteBtn.style.cssText =
        // Match the design's 32px `action` height, aligned with the menu trigger.
        `padding:8px 12px;background:${C.primaryBg};color:${C.primaryFg};border:none;` +
        `border-radius:${RADIUS};font:${FONT};cursor:pointer;`;
      inviteBtn.addEventListener("click", () => {
        void navigator.clipboard.writeText(getInviteLink());
        inviteBtn.textContent = "Copied";
        clearTimeout(this.inviteTimer);
        this.inviteTimer = setTimeout(() => {
          inviteBtn.textContent = "Invite";
        }, 1500);
      });
      right.appendChild(inviteBtn);
    }

    this.element.append(left, right);
  }

  public setStatus(status: CollabBarStatus): void {
    // Surface the status plate only when there's a problem to report.
    this.statusEl.style.display = status === "connected" ? "none" : "flex";
    this.statusIcon.style.color = STATUS_COLORS[status];
    this.statusText.textContent = STATUS_LABELS[status];
  }

  /** Feed the room change log to the "Show Version History" window. */
  public setHistory(changes: ReadonlyArray<ICollabChange>): void {
    this.historyChanges = changes;
    this.refreshHistoryWindow?.();
  }

  /** Render remote participants as colored initial avatars. */
  public setParticipants(users: Array<ICollabParticipant>): void {
    // Presence updates fire on every remote cursor move / selection, but
    // the bar only shows id/name/color/tab. Skip the rebuild when none of
    // those changed (order included: avatars stack by position).
    const sig = users.map((u) => `${u.id}${u.name}${u.color}${u.tab}`).join("");
    if (sig === this.lastParticipantsSig) return;
    this.lastParticipantsSig = sig;

    this.overflowWrap.style.display = users.length > 0 ? "inline-flex" : "none";
    this.avatars.replaceChildren();
    const shown = users.slice(0, MAX_AVATARS);
    shown.forEach((user, i) => {
      const avatar = doc().createElement("span");
      avatar.className = "collab-participant-chip";
      avatar.style.cssText =
        // 28px colored circle (per Figma). The 2px separator ring is an
        // OUTSET box-shadow, not a border, so it doesn't shrink the fill
        // to 24px or grow the layout box.
        "width:28px;height:28px;border-radius:999px;box-sizing:border-box;display:inline-flex;" +
        "align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:600;" +
        `background:${user.color};box-shadow:0 0 0 2px ${C.barBg};margin-right:-3px;` +
        // Later avatars sit on top of earlier ones, matching the design.
        `position:relative;z-index:${i + 1};cursor:pointer;`;
      avatar.textContent = presenceInitials(user.name);
      // The em-dash title format is part of the bar's public contract (tests).
      // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
      avatar.title = `${user.name} — ${user.tab || "?"}`;
      // Click a chip -> follow that participant to their tab.
      avatar.addEventListener("click", () => this.options.onGoToParticipant?.(user));
      this.avatars.appendChild(avatar);
    });
    this.renderOverflowMenu(users);
  }

  /** Remove the strip and any open window; drop document-level listeners. */
  public dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    clearTimeout(this.inviteTimer);
    for (const close of this.popoverClosers) close();
    for (const win of Array.from(this.openWindows)) win.close();
    this.element.remove();
  }

  private renderOverflowMenu(users: Array<ICollabParticipant>): void {
    this.overflowMenu.replaceChildren();
    if (users.length === 0) {
      // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
      this.overflowMenu.appendChild(menuRow("Participants", "—"));
      return;
    }
    for (const user of users) {
      const row = doc().createElement("div");
      row.className = "collab-participant-row";
      row.style.cssText = "display:flex;align-items:center;gap:8px;padding:6px 12px;white-space:nowrap;cursor:pointer;";
      row.addEventListener("mouseenter", () => { row.style.background = C.hoverBg; });
      row.addEventListener("mouseleave", () => { row.style.background = "transparent"; });
      const dot = doc().createElement("span");
      dot.style.cssText =
        "width:20px;height:20px;border-radius:999px;flex:none;display:inline-flex;align-items:center;" +
        `justify-content:center;color:#fff;font-size:9px;font-weight:600;background:${user.color};`;
      dot.textContent = presenceInitials(user.name);
      const label = doc().createElement("span");
      label.textContent = user.name;
      row.append(dot, label);
      // Click a participant -> close the list and follow them to their tab.
      row.addEventListener("click", () => {
        this.overflowMenu.style.display = "none";
        this.options.onGoToParticipant?.(user);
      });
      this.overflowMenu.appendChild(row);
    }
  }

  // --- Version History panel (right-docked) -----------------------------------
  private openHistoryWindow(): void {
    // Single instance: re-selecting the menu item while open is a no-op.
    if (this.refreshHistoryWindow) return;
    const panel = this.trackWindow(createPanel("Version History", this.options.getRootElement?.()));
    // Per-group expand/collapse, keyed by the group's first change; survives
    // live re-renders. Absent key -> default (newest group open, rest closed).
    const groupState = new Map<string, boolean>();

    const render = (): void => {
      panel.body.replaceChildren();
      const timeline = buildTimeline(this.historyChanges); // oldest -> newest
      let newestGroupKey: string | null = null;
      for (let i = timeline.length - 1; i >= 0; i--) {
        if (timeline[i].type === "group") {
          newestGroupKey = groupKey(timeline[i]);
          break;
        }
      }

      panel.body.appendChild(currentVersionRow());

      // Newest at the top.
      for (let i = timeline.length - 1; i >= 0; i--) {
        const node = timeline[i];
        if (node.type === "named") {
          panel.body.appendChild(namedVersionRow(node.change));
        } else {
          const key = groupKey(node);
          const expanded = groupState.has(key) ? !!groupState.get(key) : key === newestGroupKey;
          panel.body.appendChild(groupHeaderRow(node.changes.length, expanded, () => {
            groupState.set(key, !expanded);
            render();
          }));
          if (expanded) panel.body.appendChild(autosavedGroupBody(node.changes));
        }
      }

      panel.body.appendChild(documentCreatedRow());
    };
    render();
    // Live-refresh while open; detach on close.
    this.refreshHistoryWindow = render;
    panel.onClose(() => { this.refreshHistoryWindow = undefined; });
  }

  /** Track an open window so dispose() can close it. */
  private trackWindow(win: IWindow): IWindow {
    this.openWindows.add(win);
    win.onClose(() => this.openWindows.delete(win));
    return win;
  }
}

/** Absolute popover panel used by the app menu and the participants list. */
function createPopover(align: "left" | "right"): HTMLDivElement {
  const el = doc().createElement("div");
  el.style.cssText =
    `position:absolute;top:calc(100% + 6px);${align}:0;min-width:180px;background:${C.menuBg};` +
    `color:${C.fg};border:1px solid ${C.border};border-radius:${RADIUS};` +
    `box-shadow:0 8px 24px rgba(0,0,0,.4);padding:4px 0;z-index:${POPOVER_Z_INDEX};display:none;font:` + FONT + ";";
  return el;
}

/**
 * Wraps a trigger + popover in a relative container and wires open/close.
 * Reports its close function through `registerCloser` so the owner can drop
 * the document-level listeners on dispose.
 */
function withPopover(trigger: HTMLElement, popover: HTMLDivElement, registerCloser: (close: () => void) => void): HTMLElement {
  const wrap = doc().createElement("div");
  wrap.style.cssText = "position:relative;display:inline-flex;";
  wrap.append(trigger, popover);

  const onDocMouseDown = (e: MouseEvent): void => {
    if (!wrap.contains(e.target as Node)) close();
  };
  const onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === "Escape") close();
  };
  const close = (): void => {
    popover.style.display = "none";
    doc().removeEventListener("mousedown", onDocMouseDown);
    doc().removeEventListener("keydown", onKeyDown);
  };
  registerCloser(close);

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = popover.style.display === "none";
    if (open) {
      popover.style.display = "block";
      doc().addEventListener("mousedown", onDocMouseDown);
      doc().addEventListener("keydown", onKeyDown);
    } else {
      close();
    }
  });
  return wrap;
}

function menuRow(label: string, valueHtml: string): HTMLDivElement {
  const row = doc().createElement("div");
  row.style.cssText = "display:flex;align-items:center;justify-content:space-between;gap:16px;padding:6px 12px;white-space:nowrap;";
  row.innerHTML = `<span style="opacity:.7">${escapeHtml(label)}</span><span>${valueHtml}</span>`;
  return row;
}

function menuButton(label: string, onClick: () => void): HTMLButtonElement {
  const btn = doc().createElement("button");
  btn.type = "button";
  btn.textContent = label;
  btn.style.cssText =
    "display:block;width:100%;text-align:left;padding:6px 12px;background:transparent;" +
    `color:${C.fg};border:none;font:${FONT};cursor:pointer;`;
  btn.addEventListener("mouseenter", () => {
    btn.style.background = C.hoverBg;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.background = "transparent";
  });
  btn.addEventListener("click", onClick);
  return btn;
}

function menuDivider(): HTMLDivElement {
  const hr = doc().createElement("div");
  hr.style.cssText = `height:1px;margin:4px 0;background:${C.border};`;
  return hr;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

interface IWindow {
  /** Content container to append the window body into. */
  body: HTMLDivElement;
  close(): void;
  /** Register a callback fired once when the window closes (any route). */
  onClose(handler: () => void): void;
}

/**
 * Right-docked floating panel for Version History. Closes on X or Escape; the
 * minimize button collapses it to just the header. No backdrop -- the Creator
 * stays usable alongside it. Mounts into `container` (the themed creator root)
 * when given, else the body; position:fixed keeps the viewport geometry either way.
 */
function createPanel(title: string, container?: HTMLElement): IWindow {
  const panel = doc().createElement("div");
  panel.className = "collab-version-panel";
  panel.style.cssText =
    "position:fixed;top:12px;right:12px;bottom:12px;width:360px;max-width:calc(100vw - 24px);z-index:2000;" +
    `background:${C.sheet};color:${C.fg};border:1px solid ${C.border};border-radius:12px;` +
    "box-shadow:0 6px 20px rgba(17,16,20,0.6);display:flex;flex-direction:column;" +
    `box-sizing:border-box;overflow:hidden;font:${FONT_TEXT};`;

  // Header: title + centered drag affordance + minimize + close.
  const header = doc().createElement("div");
  header.style.cssText =
    "position:relative;display:flex;align-items:center;gap:4px;padding:12px;" +
    `border-bottom:1px solid ${C.border};flex:none;`;
  const titleEl = doc().createElement("div");
  titleEl.textContent = title;
  titleEl.style.cssText = `flex:1 0 0;min-width:0;font:${FONT_TEXT_STRONG};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`;
  const drag = doc().createElement("span");
  drag.setAttribute("aria-hidden", "true");
  drag.style.cssText = `position:absolute;left:50%;top:4px;transform:translateX(-50%);color:${C.fgTertiary};display:inline-flex;`;
  drag.innerHTML = ICON_DRAG;
  const minimizeBtn = ghostIconButton(ICON_MINIMIZE, "Minimize");
  const closeBtn = ghostIconButton(ICON_CLOSE, "Close");
  header.append(titleEl, minimizeBtn, closeBtn, drag);

  const body = doc().createElement("div");
  body.className = "collab-version-body";
  body.style.cssText = "padding:12px;overflow:auto;flex:1 0 0;";

  panel.append(header, body);

  const closeHandlers: Array<() => void> = [];
  let closed = false;
  const close = (): void => {
    if (closed) return;
    closed = true;
    doc().removeEventListener("keydown", onKeyDown);
    panel.remove();
    for (const h of closeHandlers) h();
  };
  const onKeyDown = (e: KeyboardEvent): void => { if (e.key === "Escape") close(); };
  closeBtn.addEventListener("click", close);
  let minimized = false;
  minimizeBtn.addEventListener("click", () => {
    minimized = !minimized;
    body.style.display = minimized ? "none" : "block";
    // Collapse the panel to its header when minimized.
    panel.style.bottom = minimized ? "auto" : "12px";
  });
  doc().addEventListener("keydown", onKeyDown);
  (container ?? DomDocumentHelper.getBody()).appendChild(panel);

  return { body, close, onClose: (h) => closeHandlers.push(h) };
}

function ghostIconButton(svg: string, label: string): HTMLButtonElement {
  const btn = doc().createElement("button");
  btn.type = "button";
  btn.setAttribute("aria-label", label);
  btn.innerHTML = svg;
  btn.style.cssText =
    "display:inline-flex;align-items:center;justify-content:center;padding:6px;background:transparent;" +
    `color:${C.fgTertiary};border:none;border-radius:${RADIUS};cursor:pointer;flex:none;`;
  btn.addEventListener("mouseenter", () => {
    btn.style.background = C.hoverBg;
    btn.style.color = C.fg;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.background = "transparent";
    btn.style.color = C.fgTertiary;
  });
  return btn;
}

type TimelineNode =
  | { type: "named", change: ICollabChange }
  | { type: "group", changes: Array<ICollabChange> };

/** A saved (named) version = a FullSnapshot carrying a non-empty label. */
function isNamedVersion(c: ICollabChange): boolean {
  return c.op === JournalOp.FullSnapshot && !!c.payload && typeof c.payload.label === "string" && c.payload.label !== "";
}

/**
 * Partition the room change log (oldest to newest) into named versions and
 * runs of "autosaved" edits (everything else) between them.
 */
function buildTimeline(changes: ReadonlyArray<ICollabChange>): Array<TimelineNode> {
  const nodes: Array<TimelineNode> = [];
  let group: { type: "group", changes: Array<ICollabChange> } | null = null;
  for (const c of changes) {
    if (isNamedVersion(c)) {
      group = null;
      nodes.push({ type: "named", change: c });
    } else {
      if (!group) {
        group = { type: "group", changes: [] };
        nodes.push(group);
      }
      group.changes.push(c);
    }
  }
  return nodes;
}

/**
 * Stable per-render key for a group (its first change), to preserve expansion.
 * Keyed by `seq` only: the recorder coalesces rapid edits by rewriting the
 * last record (including its timestamp) in place, and a timestamp-based key
 * would reset the group's expanded state on such a live refresh.
 */
function groupKey(node: TimelineNode): string {
  if (node.type !== "group" || node.changes.length === 0) return "";
  return String(node.changes[0].seq);
}

function circleIcon(): HTMLElement {
  const span = doc().createElement("span");
  span.style.cssText = "flex:none;display:inline-flex;width:24px;height:24px;";
  span.innerHTML = ICON_CHECK_CIRCLE;
  return span;
}

/** The highlighted top row representing the live current state. */
function currentVersionRow(): HTMLElement {
  const row = doc().createElement("div");
  row.className = "collab-version-current";
  row.style.cssText =
    "display:flex;align-items:center;gap:8px;padding:8px 8px 8px 12px;margin-bottom:2px;" +
    `background:${C.primaryBg};color:${C.primaryFg};border-radius:${RADIUS};`;
  const title = doc().createElement("div");
  title.textContent = "Current Version";
  title.style.cssText = `flex:1 0 0;min-width:0;font:${FONT_TEXT_STRONG};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`;
  row.append(circleIcon(), title);
  return row;
}

/** A named version or the base "Document created" row (icon + title + time). */
function versionItem(className: string, title: string, time: string): HTMLElement {
  const row = doc().createElement("div");
  row.className = className;
  row.style.cssText = `display:flex;flex-direction:column;gap:6px;padding:8px 8px 8px 12px;border-radius:${RADIUS};cursor:default;`;
  row.addEventListener("mouseenter", () => { row.style.background = C.barBg; });
  row.addEventListener("mouseleave", () => { row.style.background = "transparent"; });

  const line1 = doc().createElement("div");
  line1.style.cssText = "display:flex;align-items:center;gap:12px;";
  const titleEl = doc().createElement("div");
  titleEl.textContent = title;
  titleEl.style.cssText = `flex:1 0 0;min-width:0;font:${FONT_TEXT};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`;
  line1.append(circleIcon(), titleEl);
  row.append(line1);

  if (time) {
    const line2 = doc().createElement("div");
    line2.style.cssText = "display:flex;align-items:center;gap:12px;";
    const spacer = doc().createElement("span");
    spacer.style.cssText = "flex:none;width:24px;";
    const timeEl = doc().createElement("div");
    timeEl.textContent = time;
    timeEl.style.cssText = `flex:1 0 0;min-width:0;font:${FONT_TEXT};color:${C.fgTertiary};`;
    line2.append(spacer, timeEl);
    row.append(line2);
  }
  return row;
}

function namedVersionRow(change: ICollabChange): HTMLElement {
  const label = change.payload && change.payload.label;
  return versionItem("collab-version-named", label ? String(label) : "Saved version", formatVersionTime(change.timestamp));
}

function documentCreatedRow(): HTMLElement {
  // The seed state; the server sends no creation time, so no timestamp here.
  return versionItem("collab-version-base", "Document created", "");
}

/** Collapsible "N autosaved versions" header. */
function groupHeaderRow(count: number, expanded: boolean, onToggle: () => void): HTMLElement {
  const btn = doc().createElement("button");
  btn.type = "button";
  btn.className = "collab-version-group";
  btn.style.cssText =
    "display:flex;align-items:center;gap:8px;width:100%;text-align:left;padding:8px 8px 8px 12px;" +
    `background:transparent;color:${C.fg};border:none;border-radius:${RADIUS};cursor:pointer;font:${FONT};`;
  const chev = doc().createElement("span");
  chev.style.cssText = "flex:none;display:inline-flex;width:24px;height:24px;align-items:center;justify-content:center;";
  chev.innerHTML = expanded ? ICON_CHEVRON_DOWN : ICON_CHEVRON_RIGHT;
  const label = doc().createElement("span");
  label.textContent = `${count} autosaved version${count === 1 ? "" : "s"}`;
  label.style.cssText = "overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
  btn.append(chev, label);
  btn.addEventListener("mouseenter", () => { btn.style.background = C.barBg; });
  btn.addEventListener("mouseleave", () => { btn.style.background = "transparent"; });
  btn.addEventListener("click", onToggle);
  return btn;
}

/**
 * Expanded body of an autosaved group: what happened + when, per change,
 * with a left connector line.
 */
function autosavedGroupBody(changes: Array<ICollabChange>): HTMLElement {
  const wrap = doc().createElement("div");
  wrap.style.cssText = "position:relative;";
  const line = doc().createElement("div");
  line.style.cssText = `position:absolute;left:23px;top:0;bottom:0;width:1px;background:${C.border};`;
  wrap.appendChild(line);
  for (let i = changes.length - 1; i >= 0; i--) { // newest first
    const row = doc().createElement("div");
    row.className = "collab-version-autosaved";
    row.style.cssText = `display:flex;flex-direction:column;gap:6px;padding:8px 8px 8px 48px;border-radius:${RADIUS};cursor:default;position:relative;`;
    row.addEventListener("mouseenter", () => { row.style.background = C.barBg; });
    row.addEventListener("mouseleave", () => { row.style.background = "transparent"; });
    const desc = doc().createElement("div");
    desc.textContent = describeRecord(changes[i]);
    desc.title = desc.textContent;
    desc.style.cssText = `font:${FONT_TEXT};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`;
    const time = doc().createElement("div");
    time.textContent = formatVersionTime(changes[i].timestamp);
    time.style.cssText = `font:${FONT_TEXT};color:${C.fgTertiary};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;`;
    row.append(desc, time);
    wrap.appendChild(row);
  }
  return wrap;
}

/** Absolute date + 24h time, e.g. "Jul 10, 19:30". */
function formatVersionTime(ts: number): string {
  if (typeof ts !== "number" || !isFinite(ts)) return "";
  const d = new Date(ts);
  const date = d.toLocaleDateString([], { month: "short", day: "numeric" });
  const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
  return `${date}, ${time}`;
}
