export const JOURNAL_VERSION = 1;

/**
 * A serializable reference to an object inside the edited survey: a path in
 * JSON Pointer syntax (RFC 6901), e.g. `/pages/page1/elements/q2/choices/item1`.
 *
 * Unlike a plain JSON Pointer, array segments hold the element's identity
 * (question/page/panel `name`, item value) instead of its index, so paths
 * remain valid when element order differs between creators. Elements without
 * an identity fall back to a numeric index segment. The empty string
 * addresses the survey itself. Segments are escaped per RFC 6901
 * (`~` - `~0`, `/` - `~1`).
 */
export type JournalLocator = string;

/**
 * A survey-core object serialized into a JSON-able form.
 * The `type` + `json` pair distinguishes it from plain object values
 * (mirrors the `type` discriminator of the survey JSON itself).
 */
export interface ISerializedSurveyObj {
  type: string;
  json: any;
}

/**
 * Journal operation kind. Numeric enum - `op` is serialized as a number
 * (`0`, `1`, ...). The member order is part of the wire format: do not
 * reorder or insert members in the middle, only append, or previously
 * serialized journals will be misread.
 */
export enum JournalOp {
  PropertyChanged = 0,
  ArrayChanged = 1,
  ElementRemoved = 2,
  ElementReordered = 3,
  ElementConverted = 4,
  FullSnapshot = 5,
  ElementMoved = 6
}

/**
 * Thrown (or reported via `IJournalApplyResult.errorName`) when a record
 * cannot be applied because the receiver's survey diverged from the sender's:
 * the element or container the record addresses does not exist here.
 */
export class JournalSyncError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "JournalSyncError";
  }
}

export interface IJournalPropertyChangedPayload {
  /** Path to the changed property, e.g. `/pages/page1/elements/q1/title`. */
  target: JournalLocator;
  value: any;
}

export interface IJournalArrayItemAdded {
  index: number;
  item: ISerializedSurveyObj | any;
}

export interface IJournalArrayItemRemoved {
  key?: string | number;
  matchJSON?: any;
}

export interface IJournalArrayChangedPayload {
  /** Path to the changed array property, e.g. `/pages/page1/elements`. */
  target: JournalLocator;
  added: Array<IJournalArrayItemAdded>;
  removed: Array<IJournalArrayItemRemoved>;
  /**
   * Fallback: the full serialized array. When set, the receiver rebuilds
   * the whole array instead of applying `added`/`removed` deltas.
   */
  fullValue?: Array<any>;
}

export interface IJournalElementRemovedPayload {
  /** Path to the removed element, e.g. `/pages/page1/elements/q1`. */
  target: JournalLocator;
}

export interface IJournalElementReorderedPayload {
  /** Path to the reordered array property, e.g. `/pages/page1/elements`. */
  target: JournalLocator;
  indexFrom: number;
  indexTo: number;
  key?: string | number;
}

export interface IJournalElementConvertedPayload {
  /** Path to the converted element, e.g. `/pages/page1/elements/q1`. */
  target: JournalLocator;
  /** The new element after conversion; `element.type` is the target class. */
  element: ISerializedSurveyObj;
  index: number;
}

export interface IJournalFullSnapshotPayload {
  json: any;
}

export interface IJournalElementMovedPayload {
  /** Path to the source array, e.g. `/pages/page1/elements`. */
  from: JournalLocator;
  /** Path to the destination array, e.g. `/pages/page2/elements`. */
  to: JournalLocator;
  /** The element's index in the destination array. */
  index: number;
  /** Identity (name) of the moved element. */
  key: string | number;
}

export type JournalPayload =
  | IJournalPropertyChangedPayload
  | IJournalArrayChangedPayload
  | IJournalElementRemovedPayload
  | IJournalElementReorderedPayload
  | IJournalElementConvertedPayload
  | IJournalFullSnapshotPayload
  | IJournalElementMovedPayload;

/**
 * A single serializable entry of the creator action journal. Records can be
 * stringified to JSON, transferred (file, websocket) and applied to another
 * creator instance via `JournalPlugin.apply()`.
 */
export interface IJournalRecord {
  v: number;
  seq: number;
  timestamp: number;
  op: JournalOp;
  payload: JournalPayload;
}

export interface IJournalApplyResult {
  seq: number;
  success: boolean;
  error?: string;
  /** The thrown error's class name, e.g. `"JournalSyncError"`. */
  errorName?: string;
}

export interface IJournalOptions {
  /**
   * Consecutive changes of the same string property within this time window (ms)
   * are merged into one record (mirrors undo-redo typing merge). Default is 1000.
   * Set to 0 to record every change as a separate record.
   */
  coalesceInterval?: number;
}
