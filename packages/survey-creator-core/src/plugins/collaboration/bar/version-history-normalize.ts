import { JournalOp } from "../journal/journal-record";
import { splitPointer } from "../journal/journal-locator";
import { ICollabChange } from "./bar-types";

// What the Version History lists, as opposed to what the room log holds.
//
// The log is append-only and replays to the right survey, but read as a
// timeline it repeats itself: the recorder rewrites a record in place (typing
// coalescing, an add turning into a move, an added element's JSON refreshed)
// and the transport ships every rewrite again, so a peer receives one logical
// change several times under one seq. This folds those back into one entry
// per change and merges the runs a person reads as one edit.
//
// It shapes the view only. Nothing is written back to the journal or the log:
// rewriting the log in place would change what a replay produces once another
// client's edit of the same property sits between two sends.

// The author key of this client's own records.
export const SELF_AUTHOR = "self";

// The longest gap between two sends of one rewritten record. The recorder
// re-sends within its coalescing window (a second by default) or keeps the
// timestamp, so a minute is generous; records of other sessions that happen to
// share a seq are minutes to days apart.
const RESEND_WINDOW_MS = 60 * 1000;

export interface IHistoryEntry {
  // The latest content of the change - a re-send replaces it.
  change: ICollabChange;
  // SELF_AUTHOR, "c:<clientId>" for a peer's record, "" when the transport
  // carried no author (one that keeps none in the room log a newcomer is
  // seeded with).
  authorKey: string;
  // Unique and stable for as long as the change is listed; row and group ids
  // derive from it.
  rowKey: string;
}

export function normalizeHistory(changes: ReadonlyArray<ICollabChange>,
  isLocal: (change: ICollabChange) => boolean): Array<IHistoryEntry> {
  return collapseRuns(foldResends(changes || [], isLocal));
}

// One entry per logical record, where it was first seen, with its latest content.
// - A local record is the recorder's own object, rewritten in place: it is
//   listed once and is always current.
// - A peer's record is (sender, seq) - seq counts per connection. That covers
//   the seed log too, once the transport keeps its authors.
// - A seed-log record without a sender (a transport that keeps no author)
//   leaves (seq, identity) to do - and only
//   for sends close together in time: seq restarts with every page load, so
//   the same seq and target recur across sessions. Two clients' records with
//   the same seq and target within that window still fold: the accepted price
//   for not listing every re-send.
function foldResends(changes: ReadonlyArray<ICollabChange>,
  isLocal: (change: ICollabChange) => boolean): Array<IHistoryEntry> {
  const entries: Array<IHistoryEntry> = [];
  const bySlot = new Map<string, IHistoryEntry>();
  const rowKeys = new Set<string>();
  // `index` disambiguates a slot that was already listed once (another session
  // under the same seq, or a slot a live record took over).
  const add = (slot: string, index: number, change: ICollabChange, authorKey: string): void => {
    const rowKey = rowKeys.has(slot) ? slot + "@" + index : slot;
    const created: IHistoryEntry = { change: change, authorKey: authorKey, rowKey: rowKey };
    rowKeys.add(rowKey);
    bySlot.set(slot, created);
    entries.push(created);
  };
  for (let i = 0; i < changes.length; i++) {
    const change = changes[i];
    if (!change || typeof change !== "object") continue;
    const local = isLocal(change);
    // This record's own slot: by reference for a local record, by sender and
    // seq for a peer's; "" for a seed-log record, which has neither.
    const ownSlot = local ? "l:" + change.seq : (!!change.clientId ? "c:" + change.clientId + ":" + change.seq : "");
    const authorKey = local ? SELF_AUTHOR : (!!change.clientId ? "c:" + change.clientId : "");
    const own = !!ownSlot ? bySlot.get(ownSlot) : undefined;
    if (!!own) {
      own.change = change;
      continue;
    }
    const seedSlot = "a:" + change.seq + ":" + identity(change, i);
    const seeded = bySlot.get(seedSlot);
    const isResend = !!seeded && seeded.authorKey === "" && isResendOf(seeded.change, change);
    if (!ownSlot) {
      if (!!seeded && isResend) {
        seeded.change = change;
      } else {
        // The same seq and identity far apart in time: another session's
        // record, listed on its own (re-sends after it fold into it).
        add(seedSlot, i, change, "");
      }
      continue;
    }
    if (!!seeded && isResend && !local) {
      // A peer mid-edit when this client joined, under a transport that keeps
      // no author: the seed log carried the record's earlier sends without a
      // sender. The live re-send takes that entry over instead of listing the
      // change twice.
      bySlot.delete(seedSlot);
      bySlot.set(ownSlot, seeded);
      seeded.change = change;
      seeded.authorKey = authorKey;
      continue;
    }
    add(ownSlot, i, change, authorKey);
  }
  return entries;
}

// Sends of one record come from one clock, never go back in time and follow
// each other closely.
function isResendOf(earlier: ICollabChange, later: ICollabChange): boolean {
  const gap = later.timestamp - earlier.timestamp;
  return isFinite(gap) && gap >= 0 && gap <= RESEND_WINDOW_MS;
}

// What a record is about, so the sends of one record match while other records
// under the same seq do not. Only what the recorder rewrites in place is ever
// re-sent - a property edit (typing coalescing) and an element add (its JSON
// refreshed, or the add turned into a move, which shares the element's
// identity). Everything else is sent once, so it gets an identity of its own
// (its position in the log) and never folds.
function identity(change: ICollabChange, index: number): string {
  const payload = change.payload || {};
  if (change.op === JournalOp.PropertyChanged) return "p:" + payload.target;
  if (change.op === JournalOp.ElementMoved) return "e:" + payload.key;
  if (change.op === JournalOp.ArrayChanged) {
    const name = addedElementName(payload);
    if (name !== undefined) return "e:" + name;
  }
  return "u:" + index;
}

// The name of the one element an array change adds, or undefined.
function addedElementName(payload: any): string | undefined {
  const added = Array.isArray(payload.added) ? payload.added : [];
  const removed = Array.isArray(payload.removed) ? payload.removed : [];
  if (!!payload.fullValue || added.length !== 1 || removed.length !== 0) return undefined;
  const json = added[0] && added[0].item && added[0].item.json;
  if (!json || typeof json !== "object") return undefined;
  if (json.name === undefined || json.name === null || json.name === "") return undefined;
  return String(json.name);
}

// Merges what a person reads as one edit. Only direct neighbours by one author
// qualify, so anything in between - a named version included - keeps both.
// - Several records of one property (typing with pauses longer than the
//   recorder's coalescing window) -> the last one, under the first one's keys.
// - A deletion reported twice (the element removal plus the array removal)
//   -> the first report.
function collapseRuns(entries: Array<IHistoryEntry>): Array<IHistoryEntry> {
  const res: Array<IHistoryEntry> = [];
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const prev = res[res.length - 1];
    if (!!prev && prev.authorKey === entry.authorKey) {
      if (isSameProperty(prev.change, entry.change)) {
        res[res.length - 1] = { change: entry.change, authorKey: entry.authorKey, rowKey: prev.rowKey };
        continue;
      }
      if (isRemovalPair(prev.change, entry.change) || isRemovalPair(entry.change, prev.change)) continue;
    }
    res.push(entry);
  }
  return res;
}

function isSameProperty(a: ICollabChange, b: ICollabChange): boolean {
  return a.op === JournalOp.PropertyChanged && b.op === JournalOp.PropertyChanged &&
    !!a.payload && !!b.payload && typeof a.payload.target === "string" && a.payload.target === b.payload.target;
}

// `element` removes `.../elements/q2`, `array` removes key "q2" from `.../elements`.
function isRemovalPair(element: ICollabChange, array: ICollabChange): boolean {
  if (element.op !== JournalOp.ElementRemoved || array.op !== JournalOp.ArrayChanged) return false;
  const target = element.payload && element.payload.target;
  const payload = array.payload;
  if (typeof target !== "string" || target === "" || !payload || !!payload.fullValue) return false;
  const added = Array.isArray(payload.added) ? payload.added : [];
  const removed = Array.isArray(payload.removed) ? payload.removed : [];
  if (added.length !== 0 || removed.length !== 1 || !removed[0]) return false;
  const key = removed[0].key;
  if (key === undefined || key === null) return false;
  const split = splitPointer(target);
  return split.container === payload.target && split.key === String(key);
}
