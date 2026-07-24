/**
 * Shared types of the collaboration bar. Kept import-free so the view and the
 * plugin can both depend on them without cycles.
 */

/** Connection state pushed by the host transport (WebSocket lifecycle). */
export type CollabBarStatus = "connecting" | "connected" | "closed";

/**
 * One entry of the room change log backing "Show Version History". The log is
 * transport state (init log + remote records + local records, in arrival
 * order) -- it is NOT derivable from `JournalPlugin.records`, which holds only
 * this client's local edits. The host pushes it via `CollabBarPlugin.setHistory`.
 * Structurally satisfied by the transport's own record shape.
 */
export interface ICollabChange {
  seq: number;
  timestamp: number;
  /** A `JournalOp` value; a FullSnapshot with a non-empty `payload.label` is a named version. */
  op: number;
  payload?: any;
}

/** A remote participant as rendered in the avatar strip. */
export interface ICollabParticipant {
  id: string;
  name: string;
  color: string;
  /** Creator tab the participant is on ("designer", "theme", ...). */
  tab: string;
}
