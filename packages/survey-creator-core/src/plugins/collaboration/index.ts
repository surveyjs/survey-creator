import { EventBase } from "survey-core";
import { ICreatorPlugin, SurveyCreatorModel } from "survey-creator-core";
import { JournalController } from "./journal";
import { IJournalApplyOptions } from "./journal/journal-applier";
import { IJournalApplyResult, IJournalOptions, IJournalRecord } from "./journal/journal-record";
import { JournalRecorder } from "./journal/journal-recorder";
import { PresenceController } from "./presence";
import { PresenceCapture } from "./presence/presence-capture";
import { emptyPresenceState, IPresencePeer, IPresencePeerEntry, IPresenceState } from "./presence/presence-state";
import { CollabBarModel } from "./bar/bar-model";
import { CollabBarStatus, ICollabBarOptions, ICollabChange, ICollabParticipant } from "./bar/bar-types";

// Registers the feature's own icons; see svgbundle.ts.
import "./svgbundle";

export * from "./journal";
export * from "./presence";
export * from "./bar";

export interface ICollaborationOptions extends IJournalOptions, ICollabBarOptions {
  // Track and render remote participants (selection rings, cursors, focused
  // fields). Default true. Off gives a headless client: no DOM overlay, no
  // document listeners, no cursor timers - feed the avatar strip via
  // setParticipants instead.
  presence?: boolean;
  // Contribute the collaboration strip above the tabbed menu. Default true.
  // Off makes setStatus/setHistory/setParticipants no-ops.
  bar?: boolean;
}

// Nothing to hand out when presence is off; a shared empty map keeps `peers`
// from allocating on every read.
const NO_PEERS: ReadonlyMap<string, IPresencePeer> = new Map<string, IPresencePeer>();

// The one collaboration plugin: the change journal, remote presence and the
// collaboration strip, registered once.
//
// ```ts
// const collab = new CollaborationPlugin(creator, {
//   roomId, framework: "React",
//   getInviteLink: () => `${location.origin}/?room=${encodeURIComponent(roomId)}`,
//   onBack: () => { location.href = "/"; }
// });
// creator.addPlugin("collaboration", collab);
// collab.onRecordAdded.add((_, o) => socket.send(JSON.stringify(o.record)));
// socket.onmessage = (msg) => collab.apply(msg.data);
// ```
//
// It owns no transport. Outbound is events (`onRecordAdded`, `onStateChanged`),
// inbound is methods (`apply`, `upsertPeer`, `setStatus`, `setHistory`) - so any
// relay, protocol or storage can drive it.
//
// The parts are reachable as `journal` / `presence` / `bar` for anything the
// delegating surface below does not cover. `presence` and `bar` are undefined
// when switched off; the delegating members stay callable and go quiet instead
// of throwing, so a host can disable a part without unwiring its transport.
//
// Two members read oddly on a composite and are kept only for continuity with
// the journal API: `clear()` clears the JOURNAL RECORDS (not the roster - that
// is `clearPeers()`), and `toJSON()` returns the record array, which also means
// `JSON.stringify(collab)` serializes the journal rather than this object.
export class CollaborationPlugin implements ICreatorPlugin {
  // A background plugin never becomes the creator's currentPlugin, so nothing
  // ever reads this - the interface just requires the slot.
  public model: any = undefined;
  public journal: JournalController;
  public presence: PresenceController;
  public bar: CollabBarModel;

  private disposed = false;
  private peersChangedHandler: (sender: any, options: { peers: ReadonlyMap<string, IPresencePeer> }) => void;
  private inertStateChanged: EventBase<PresenceCapture, { state: IPresenceState }>;
  private inertPeersChanged: EventBase<any, { peers: ReadonlyMap<string, IPresencePeer> }>;

  constructor(private creator: SurveyCreatorModel, options: ICollaborationOptions = {}) {
    // Journal FIRST and deliberately: it is the only part whose constructor
    // throws (no undo-redo plugin). Building it before anything else means a
    // throw leaves nothing behind - no overlay layer on the body, no timers,
    // no rAF poll. Do not reorder.
    this.journal = new JournalController(creator, options);

    if (options.presence !== false) {
      this.presence = new PresenceController(creator);
    }
    if (options.bar !== false) {
      this.bar = new CollabBarModel(creator, options);
      // The render slot the framework templates bind to.
      this.creator.collabBar = this.bar;
      if (!!this.presence) {
        // Both instances are in hand, so the roster is wired directly. The old
        // separate plugins had to look each other up by name, which silently
        // produced an empty strip whenever the registration order differed.
        this.peersChangedHandler = (_: any, opts: { peers: ReadonlyMap<string, IPresencePeer> }) => {
          this.bar.setParticipants(peersToParticipants(opts.peers));
        };
        this.presence.onPeersChanged.add(this.peersChangedHandler);
        this.bar.setParticipants(peersToParticipants(this.presence.peers));
      }
    }
  }

  public activate(): void { }
  public deactivate(): boolean {
    return true;
  }

  public dispose(): void {
    // Hosts dispose explicitly and creator.dispose() disposes every registered
    // plugin again - the second call has to be a no-op.
    if (this.disposed) return;
    this.disposed = true;
    if (!!this.bar) {
      if (!!this.presence && !!this.peersChangedHandler) {
        this.presence.onPeersChanged.remove(this.peersChangedHandler);
      }
      this.peersChangedHandler = undefined;
      if (this.creator.collabBar === this.bar)this.creator.collabBar = undefined;
      this.bar.dispose();
      this.bar = undefined;
    }
    // Note: no clearPeers() here - it would fire onPeersChanged and refresh the
    // overlay on objects being torn down. The transport clears the roster when
    // the connection closes.
    if (!!this.presence) {
      this.presence.dispose();
      this.presence = undefined;
    }
    this.journal.dispose();
  }

  // --- journal ---------------------------------------------------------------

  public get records(): Array<IJournalRecord> {
    return this.journal.records;
  }
  public get isRecording(): boolean {
    return this.journal.isRecording;
  }
  public get isApplying(): boolean {
    return this.journal.isApplying;
  }
  public get onRecordAdded(): EventBase<JournalRecorder, { record: IJournalRecord }> {
    return this.journal.onRecordAdded;
  }
  public get onRecordChanged(): EventBase<JournalRecorder, { record: IJournalRecord }> {
    return this.journal.onRecordChanged;
  }
  public startRecording(): void {
    this.journal.startRecording();
  }
  public stopRecording(): void {
    this.journal.stopRecording();
  }
  // Clears the recorded journal entries, NOT the participant roster.
  public clear(): void {
    this.journal.clear();
  }
  public toJSON(): Array<IJournalRecord> {
    return this.journal.toJSON();
  }
  public toText(): string {
    return this.journal.toText();
  }
  public snapshot(label?: string): IJournalRecord {
    return this.journal.snapshot(label);
  }
  public apply(input: IJournalRecord | Array<IJournalRecord> | string, options?: IJournalApplyOptions): Array<IJournalApplyResult> {
    return this.journal.apply(input, options);
  }

  // --- presence --------------------------------------------------------------
  // Every member stays callable with presence off: a host that disables the
  // part but keeps its transport wired must get silence, not a TypeError.

  public get onStateChanged(): EventBase<PresenceCapture, { state: IPresenceState }> {
    if (!!this.presence) return this.presence.onStateChanged;
    if (!this.inertStateChanged)this.inertStateChanged = new EventBase<PresenceCapture, { state: IPresenceState }>();
    return this.inertStateChanged;
  }
  public get onPeersChanged(): EventBase<any, { peers: ReadonlyMap<string, IPresencePeer> }> {
    if (!!this.presence) return this.presence.onPeersChanged;
    if (!this.inertPeersChanged)this.inertPeersChanged = new EventBase<any, { peers: ReadonlyMap<string, IPresencePeer> }>();
    return this.inertPeersChanged;
  }
  public getState(): IPresenceState {
    return !!this.presence ? this.presence.getState() : emptyPresenceState();
  }
  public get peers(): ReadonlyMap<string, IPresencePeer> {
    return !!this.presence ? this.presence.peers : NO_PEERS;
  }
  public setPeers(entries: Array<IPresencePeerEntry>): void {
    if (!!this.presence)this.presence.setPeers(entries);
  }
  public upsertPeer(entry: IPresencePeerEntry): void {
    if (!!this.presence)this.presence.upsertPeer(entry);
  }
  public removePeer(clientId: string): void {
    if (!!this.presence)this.presence.removePeer(clientId);
  }
  public clearPeers(): void {
    if (!!this.presence)this.presence.clearPeers();
  }

  // --- bar -------------------------------------------------------------------

  // Connection state (pushed by the host transport).
  public setStatus(status: CollabBarStatus): void {
    if (!!this.bar)this.bar.setStatus(status);
  }
  // The room change log backing "Show Version History" (pushed by the host).
  public setHistory(changes: ReadonlyArray<ICollabChange>): void {
    if (!!this.bar)this.bar.setHistory(changes);
  }
  // Manual roster override. Only meaningful with presence off - otherwise the
  // next roster event overwrites whatever is set here.
  public setParticipants(users: Array<ICollabParticipant>): void {
    if (!!this.bar)this.bar.setParticipants(users);
  }
}

// The presence roster -> the avatar strip input. Lives here because this is the
// only place that knows about both halves.
function peersToParticipants(peers: ReadonlyMap<string, IPresencePeer>): Array<ICollabParticipant> {
  return Array.from(peers.values()).map((peer) => ({
    id: peer.clientId,
    name: peer.name,
    color: peer.color,
    tab: (peer.state && peer.state.tab) || ""
  }));
}
