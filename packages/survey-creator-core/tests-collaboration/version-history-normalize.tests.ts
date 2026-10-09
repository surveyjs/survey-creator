import { expect, test } from "vitest";
import { JournalOp } from "../src/plugins/collaboration/journal";
import { ICollabChange } from "../src/plugins/collaboration/bar/bar-types";
import { normalizeHistory, SELF_AUTHOR } from "../src/plugins/collaboration/bar/version-history-normalize";

const BASE_TS = 1720000000000;
const noLocal = (): boolean => false;

const at = (seq: number, op: JournalOp, payload: any, extra: Partial<ICollabChange>): ICollabChange =>
  ({ seq, timestamp: BASE_TS + seq * 1000, op, payload, ...extra });
const title = (seq: number, value: string, extra: Partial<ICollabChange> = {}, name = "q1"): ICollabChange =>
  at(seq, JournalOp.PropertyChanged, { target: "/pages/page1/elements/" + name + "/title", value }, extra);
const added = (seq: number, name: string, extra: Partial<ICollabChange> = {}): ICollabChange =>
  at(seq, JournalOp.ArrayChanged, { target: "/pages/page1/elements", added: [{ index: 0, item: { type: "text", json: { name } } }], removed: [] }, extra);
const moved = (seq: number, name: string, extra: Partial<ICollabChange> = {}): ICollabChange =>
  at(seq, JournalOp.ElementMoved, { from: "/pages/page1/elements", to: "/pages/page2/elements", index: 0, key: name }, extra);
const elementRemoved = (seq: number, name: string, extra: Partial<ICollabChange> = {}): ICollabChange =>
  at(seq, JournalOp.ElementRemoved, { target: "/pages/page1/elements/" + name }, extra);
const itemRemoved = (seq: number, name: string, extra: Partial<ICollabChange> = {}): ICollabChange =>
  at(seq, JournalOp.ArrayChanged, { target: "/pages/page1/elements", added: [], removed: [{ key: name }] }, extra);
const named = (seq: number, label: string): ICollabChange =>
  at(seq, JournalOp.FullSnapshot, { json: {}, label }, {});

test("normalize: a peer's re-sends of one record are one entry, in place, with the latest content", () => {
  const entries = normalizeHistory([
    title(1, "U", { clientId: "a" }),
    added(1, "q9", { clientId: "b" }),
    title(1, "User", { clientId: "a", timestamp: BASE_TS + 5000 })
  ], noLocal);
  expect(entries.length).toEqual(2);
  expect(entries[0].change.payload.value).toEqual("User");
  expect(entries[0].change.timestamp).toEqual(BASE_TS + 5000);
  expect(entries[0].authorKey).toEqual("c:a");
  expect(entries[1].authorKey).toEqual("c:b");
});

test("normalize: an add a peer turned into a move is one moved entry", () => {
  const entries = normalizeHistory([added(4, "q3", { clientId: "a" }), moved(4, "q3", { clientId: "a" })], noLocal);
  expect(entries.map((e) => e.change.op)).toEqual([JournalOp.ElementMoved]);
});

test("normalize: seed-log re-sends merge by seq and target, wherever they sit", () => {
  const entries = normalizeHistory([title(2, "U"), added(5, "q5"), title(2, "User")], noLocal);
  expect(entries.length).toEqual(2);
  expect(entries[0].change.payload.value).toEqual("User");
  expect(entries[0].authorKey).toEqual("");
});

test("normalize: seed-log records with one seq but different targets stay apart", () => {
  expect(normalizeHistory([title(2, "x", {}, "q1"), added(7, "q7"), title(2, "y", {}, "q2")], noLocal).length).toEqual(3);
});

test("normalize: a seed-log add and the move it became merge", () => {
  const entries = normalizeHistory([added(3, "q3"), title(9, "x", {}, "q7"), moved(3, "q3")], noLocal);
  expect(entries.map((e) => e.change.op)).toEqual([JournalOp.ElementMoved, JournalOp.PropertyChanged]);
});

test("normalize: a live re-send takes over the seed-log copy of the same record", () => {
  const seeded = title(3, "U");
  const alone = normalizeHistory([seeded], noLocal)[0];
  const entries = normalizeHistory([seeded, added(8, "q8"), title(3, "User", { clientId: "a" })], noLocal);
  expect(entries.length).toEqual(2);
  expect(entries[0].change.payload.value).toEqual("User");
  expect(entries[0].authorKey).toEqual("c:a");
  expect(entries[0].rowKey).toEqual(alone.rowKey);
});

test("normalize: this client's records are its own", () => {
  const mine = title(1, "x");
  expect(normalizeHistory([mine], (c) => c === mine)[0].authorKey).toEqual(SELF_AUTHOR);
});

test("normalize: neighbouring edits of one property by one author collapse into the last", () => {
  const first = normalizeHistory([title(1, "U")], noLocal)[0];
  const entries = normalizeHistory([title(1, "U"), title(2, "Us"), title(3, "User Name")], noLocal);
  expect(entries.length).toEqual(1);
  expect(entries[0].change.payload.value).toEqual("User Name");
  expect(entries[0].change.timestamp).toEqual(BASE_TS + 3000);
  // The run keeps its first keys, so its row and group stay put while typing goes on.
  expect(entries[0].rowKey).toEqual(first.rowKey);
});

test("normalize: another author, another change or a named version breaks the run", () => {
  expect(normalizeHistory([title(1, "A", { clientId: "a" }), title(2, "B", { clientId: "b" })], noLocal).length).toEqual(2);
  expect(normalizeHistory([title(1, "A"), added(2, "q2"), title(3, "B")], noLocal).length).toEqual(3);
  expect(normalizeHistory([title(1, "A"), named(2, "v1"), title(3, "B")], noLocal).length).toEqual(3);
});

test("normalize: a deletion reported twice reads once", () => {
  const a = { clientId: "a" };
  expect(normalizeHistory([elementRemoved(5, "q2", a), itemRemoved(6, "q2", a)], noLocal).map((e) => e.change.op))
    .toEqual([JournalOp.ElementRemoved]);
  expect(normalizeHistory([itemRemoved(5, "q2", a), elementRemoved(6, "q2", a)], noLocal).length).toEqual(1);
  expect(normalizeHistory([elementRemoved(5, "q2", a), itemRemoved(6, "q3", a)], noLocal).length).toEqual(2);
  expect(normalizeHistory([elementRemoved(5, "q2", a), itemRemoved(6, "q2", { clientId: "b" })], noLocal).length).toEqual(2);
});

test("normalize: malformed entries are skipped or kept, never thrown on", () => {
  const entries = normalizeHistory([null as any, { seq: 1, timestamp: BASE_TS, op: JournalOp.PropertyChanged } as any, title(2, "x")], noLocal);
  expect(entries.length).toEqual(2);
  expect(normalizeHistory(undefined as any, noLocal)).toEqual([]);
});

test("normalize: seed-log snapshots under one seq stay apart", () => {
  // seq restarts with every page load, so two sessions' snapshots share seqs;
  // a snapshot is never rewritten, so there is no re-send to fold.
  const entries = normalizeHistory([named(2, "Release 1"), title(9, "x"), named(2, "Release 2")], noLocal);
  expect(entries.map((e) => e.change.payload.label).filter((label) => !!label)).toEqual(["Release 1", "Release 2"]);
});

test("normalize: records that are never rewritten never fold", () => {
  expect(normalizeHistory([elementRemoved(4, "q9"), title(5, "x"), elementRemoved(4, "q9")], noLocal).length).toEqual(3);
});

test("normalize: one seq and target days apart are two sessions, not a re-send", () => {
  const monday = title(3, "Monday");
  const friday: ICollabChange = { ...title(3, "Friday"), timestamp: monday.timestamp + 4 * 24 * 3600 * 1000 };
  expect(normalizeHistory([monday, added(8, "q8"), friday], noLocal).length).toEqual(3);
  // ...and a live record does not take over a seed twin from days ago.
  const live = normalizeHistory([monday, added(8, "q8"), { ...friday, clientId: "a" }], noLocal);
  expect(live.length).toEqual(3);
  expect(live[0].change.payload.value).toEqual("Monday");
  expect(live[2].authorKey).toEqual("c:a");
});
