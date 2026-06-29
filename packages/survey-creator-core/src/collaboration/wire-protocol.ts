// Wire-protocol envelope types shared by the collaboration client and server.
//
// The payload itself (`ISyncMessage`) is the format produced by the
// `UndoRedoSyncPlugin`'s `onSerializedChanges` and consumed by its
// `applySerialized()`; the envelopes below wrap that payload with the
// transport/session metadata (message kind, originator, bootstrap state)
// that the wire layer needs. They are plain JSON shapes, safe to send over
// WebSocket / HTTP.
import type { ISyncMessage, ISyncStackSnapshot } from "./undo-redo-serializer";

// ---------------------------------------------------------------------------
// WebSocket envelopes

/** client -> server: a local transaction to broadcast. */
export interface ISyncEnvelope {
  type: "sync";
  message: ISyncMessage;
}

/**
 * Full session state used to bootstrap a freshly joined client: the current
 * survey schema plus the shared undo/redo stack. `stack` is always present
 * for a session with no history `exportStack()` still yields an empty
 * snapshot (`{ kind: "stack", cursor: 0, entries: [] }`), never null.
 */
export interface ISessionSnapshot {
  schema: any;
  stack: ISyncStackSnapshot;
}

/** server -> client: initial state for a freshly joined client. */
export interface IInitEnvelope extends ISessionSnapshot {
  type: "init";
  clientId: string;
}

/** server -> client: a sync from another peer (server tags it with `from`). */
export interface IRelayEnvelope {
  type: "sync";
  from: string;
  message: ISyncMessage;
}

export type IClientToServer = ISyncEnvelope;
export type IServerToClient = IInitEnvelope | IRelayEnvelope;

// ---------------------------------------------------------------------------
// HTTP

export interface ICreateSessionRequest {
  schema?: any;
}
export interface ICreateSessionResponse {
  sessionId: string;
}
