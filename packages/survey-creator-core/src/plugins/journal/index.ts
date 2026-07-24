import { EventBase } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { ICreatorPlugin } from "../../creator-settings";
import { IJournalApplyResult, IJournalOptions, IJournalRecord } from "./journal-record";
import { JournalRecorder } from "./journal-recorder";
import { IJournalApplyOptions, JournalApplier } from "./journal-applier";
import { JournalTabRefresher } from "./journal-tab-refresher";
import { JournalStackGuard } from "./journal-stack-guard";

export { JournalRecorder } from "./journal-recorder";
export { JournalApplier, IJournalApplyOptions } from "./journal-applier";
export { JournalStackGuard } from "./journal-stack-guard";
export * from "./journal-record";
export * from "./journal-tab-refresher";
export { buildLocator, resolveLocator, serializeValue, deserializeValue } from "./journal-locator";

/**
 * A background (non-tab) creator plugin that records all survey modifications
 * as a serializable action journal and can apply such a journal to synchronize
 * this creator with another one (via a file, websocket, etc.).
 *
 * ```ts
 * const plugin = new JournalPlugin(creator);
 * creator.addPlugin("journal", plugin);
 * plugin.onRecordAdded.add((sender, options) => socket.send(JSON.stringify(options.record)));
 * socket.onmessage = (msg) => plugin.apply(msg.data);
 * ```
 *
 * Undo semantics: stacks are strictly per-client. Applied remote records
 * bypass the receiver's undo-redo entirely, so only the AUTHOR of a change
 * can undo it; a local undo/redo mutates the survey normally, is recorded and
 * travels to peers as ordinary inverse records. Stacks are never synchronized
 * or rebased across clients. A local entry whose context was invalidated by a
 * later remote record - its target was deleted/converted, or the value it set
 * was overwritten (last write wins) - is consumed as a no-op on undo/redo:
 * the key press visibly does nothing (see `JournalStackGuard`).
 *
 * Limitations:
 * - Requires the creator's undo-redo plugin (always registered by the creator
 *   itself): its controller is the source of the `onModified` notifications
 *   the recorder consumes (the applier suspends that controller while remote
 *   records are applied). The constructor throws when the plugin is missing.
 * - Convergence is guaranteed for a single ordered stream of records
 *   (last-write-wins, no conflict resolution for concurrent edits).
 * - Programmatic `creator.JSON = ...` / `creator.changeText()` calls do not fire
 *   `onModified` and are not recorded automatically - call `snapshot()` after them.
 * - A `fullSnapshot` record (JSON tab, bootstrap) rebuilds the survey and
 *   resets the receiver's undo history.
 * - Undo of an ARRAY entry whose array was concurrently reordered by a peer
 *   splices by the stored index (the guard's value check covers scalars only);
 *   whatever a local undo does is itself recorded and broadcast, so clients
 *   converge in every case.
 */
export class JournalPlugin implements ICreatorPlugin {
  public model: any = undefined;
  public recorder: JournalRecorder;
  public applier: JournalApplier;
  public refresher: JournalTabRefresher;
  public guard: JournalStackGuard;

  constructor(private creator: SurveyCreatorModel, options: IJournalOptions = {}) {
    this.recorder = new JournalRecorder(creator, options);
    this.guard = new JournalStackGuard(creator);
    this.applier = new JournalApplier(creator, this.recorder, this.guard);
    this.refresher = new JournalTabRefresher(creator);
    this.guard.attach();
  }
  public activate(): void { }
  public deactivate(): boolean {
    return true;
  }
  public dispose(): void {
    this.recorder.dispose();
    this.refresher.dispose();
  }

  public get records(): Array<IJournalRecord> {
    return this.recorder.records;
  }
  public get isRecording(): boolean {
    return this.recorder.isRecording;
  }
  public get isApplying(): boolean {
    return this.recorder.isApplying;
  }
  public get onRecordAdded(): EventBase<JournalRecorder, { record: IJournalRecord }> {
    return this.recorder.onRecordAdded;
  }
  public get onRecordChanged(): EventBase<JournalRecorder, { record: IJournalRecord }> {
    return this.recorder.onRecordChanged;
  }
  public startRecording(): void {
    this.recorder.startRecording();
  }
  public stopRecording(): void {
    this.recorder.stopRecording();
  }
  public clear(): void {
    this.recorder.clear();
  }
  public toJSON(): Array<IJournalRecord> {
    return this.recorder.toJSON();
  }
  public toText(): string {
    return this.recorder.toText();
  }
  public snapshot(label?: string): IJournalRecord {
    return this.recorder.snapshot(label);
  }
  public apply(input: IJournalRecord | Array<IJournalRecord> | string, options?: IJournalApplyOptions): Array<IJournalApplyResult> {
    const records = this.applier.normalizeInput(input);
    try {
      return this.applier.apply(records, options);
    } finally {
      // The Translation/Logic tabs render private snapshot models that do not
      // react to in-place survey mutations - refresh them (see the refresher).
      this.refresher.refresh(records);
    }
  }
}
