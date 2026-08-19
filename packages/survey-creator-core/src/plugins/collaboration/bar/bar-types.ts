// Shared types of the collaboration bar. Import-free, so the model and the
// collaboration plugin can both depend on them without a cycle.

// Connection state pushed by the host transport (WebSocket lifecycle).
export type CollabBarStatus = "connecting" | "connected" | "closed";

// One entry of the room change log backing "Show Version History". The log is
// transport state (init log + remote records + local records, in arrival
// order) -- it is NOT derivable from the journal's `records`, which hold only
// this client's local edits. The host pushes it via `CollaborationPlugin.setHistory`.
// Structurally satisfied by the transport's own record shape.
export interface ICollabChange {
  seq: number;
  timestamp: number;
  // A `JournalOp` value; a FullSnapshot with a non-empty `payload.label` is a named version.
  op: number;
  payload?: any;
}

// A remote participant as rendered in the avatar strip.
export interface ICollabParticipant {
  id: string;
  name: string;
  // Raw transport color. The avatars do NOT paint with it - they use the
  // theme's user-color slot (see `colorIndex`) so the foreground stays legible
  // and follows the light/dark palette. Kept for the transport and for
  // PresenceOverlay.
  color: string;
  // Theme user-color slot, 1..9 or 0. Omitted -> derived from `id` via
  // presenceColorSlot, which every client computes identically.
  colorIndex?: number;
  // Creator tab the participant is on ("designer", "theme", ...).
  tab: string;
}

export interface ICollabBarOptions {
  // Shown in the "Collaboration" menu "Room" row; the row is hidden when absent.
  roomId?: string;
  // Shown in the menu "Framework" row; the row is hidden when absent.
  framework?: string;
  // The "Invite" button copies this link to the clipboard; the button is
  // hidden when absent. The host owns the link format (e.g. its lobby URL).
  getInviteLink?: () => string;
  // The "Back to lobby" menu item action; the item is hidden when absent.
  onBack?: () => void;
  // A participant chip/row was clicked. Default: follow them to their tab
  // (`creator.activeTab = user.tab`).
  onGoToParticipant?: (user: ICollabParticipant) => void;
}
