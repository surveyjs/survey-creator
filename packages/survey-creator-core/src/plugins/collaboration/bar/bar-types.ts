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
  // The sending peer's connection id, stamped by the transport on a peer's
  // record - relayed live or read from the room log. Absent on this client's
  // own records and from a transport that keeps no author. It signs the row
  // with the peer's name and tells a re-send of a record from a new record.
  clientId?: string;
  // The sender's display name, stamped by the transport next to `clientId`.
  // Signs the row of a peer who left before this client joined - presence
  // never named them.
  authorName?: string;
}

// A remote participant as rendered in the avatar strip.
export interface ICollabParticipant {
  id: string;
  name: string;
  // No color: the avatar's theme user-color slot is derived from `id`
  // (presenceColorSlot), like on every other surface that paints the peer.
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
