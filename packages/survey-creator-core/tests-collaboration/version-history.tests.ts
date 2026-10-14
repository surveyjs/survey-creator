import { expect, test } from "vitest";
import { JournalOp } from "../src/plugins/collaboration/journal";
import { ICollabChange } from "../src/plugins/collaboration/bar/bar-types";
import {
  buildTimeline, buildVersionRows, formatVersionTime, isNamedVersion, versionGroupKey, VersionHistoryModel
} from "../src/plugins/collaboration/bar/version-history-model";
import { normalizeHistory } from "../src/plugins/collaboration/bar/version-history-normalize";

const BASE_TS = 1720000000000;
// The separator of "author <dot> time" subtitles.
const DOT = "·"; // eslint-disable-line surveyjs/eslint-plugin-i18n/only-english-or-code

const change = (seq: number, op: JournalOp, payload: any, ts?: number): ICollabChange =>
  ({ seq, timestamp: ts !== undefined ? ts : BASE_TS + seq * 1000, op, payload });

// Each edit targets its own question by default: neighbouring edits of ONE
// title collapse into one row, which is not what most tests here are about.
const edit = (seq: number, name = "q" + seq): ICollabChange =>
  change(seq, JournalOp.PropertyChanged, { target: "/pages/page1/elements/" + name + "/title", value: "v" + seq });

const entries = (changes: Array<ICollabChange>) => normalizeHistory(changes, () => false);
// A group is keyed by its first entry's row key.
const groupKeyOf = (c: ICollabChange): string => entries([c])[0].rowKey;

const named = (seq: number, label: string): ICollabChange =>
  change(seq, JournalOp.FullSnapshot, { json: {}, label });

const titles = (rows: Array<{ title: string }>): Array<string> => rows.map((r) => r.title);
const kinds = (rows: Array<{ kind: string }>): Array<string> => rows.map((r) => r.kind);

test("version-history: an empty log is just the two markers", () => {
  const rows = buildVersionRows([], new Map());
  expect(kinds(rows)).toEqual(["current", "base"]);
  expect(titles(rows)).toEqual(["Current Version", "Document created"]);
});

test("version-history: a named version is a FullSnapshot with a non-empty label", () => {
  expect(isNamedVersion(named(1, "A"))).toBeTruthy();
  expect(isNamedVersion(change(1, JournalOp.FullSnapshot, { json: {}, label: "" }))).toBeFalsy();
  expect(isNamedVersion(change(1, JournalOp.FullSnapshot, { json: {} }))).toBeFalsy();
  expect(isNamedVersion(edit(1))).toBeFalsy();
});

test("version-history: the timeline splits named versions from autosaved runs", () => {
  const nodes = buildTimeline(entries([edit(1), edit(2), named(3, "A"), edit(4)]));
  expect(nodes.map((n) => n.type)).toEqual(["group", "named", "group"]);
  expect(versionGroupKey(nodes[0])).toEqual(groupKeyOf(edit(1)));
  expect(versionGroupKey(nodes[2])).toEqual(groupKeyOf(edit(4)));
});

test("version-history: rows are newest first between the markers", () => {
  const rows = buildVersionRows([edit(1), named(2, "A"), named(3, "B")], new Map());
  // The only group is also the newest one, so it opens by default and its
  // single change is listed under the header.
  expect(titles(rows)).toEqual([
    "Current Version", "B", "A",
    "1 autosaved version", "Title of \"q1\" changed to \"v1\"",
    "Document created"
  ]);
});

test("version-history: only the newest group is expanded by default", () => {
  const rows = buildVersionRows([edit(1), named(2, "A"), edit(3), edit(4)], new Map());
  const groups = rows.filter((r) => r.kind === "group");
  expect(groups.length).toEqual(2);
  // Newest group first in render order.
  expect(groups[0].ariaExpanded).toBeTruthy();
  expect(groups[1].ariaExpanded).toBeFalsy();
  expect(rows.filter((r) => r.kind === "change").length).toEqual(2);
});

test("version-history: the group count is pluralized by a dedicated key", () => {
  expect(titles(buildVersionRows([edit(1)], new Map()))).toContain("1 autosaved version");
  expect(titles(buildVersionRows([edit(1), edit(2)], new Map()))).toContain("2 autosaved versions");
});

test("version-history: an expanded group lists its changes newest first, described", () => {
  const rows = buildVersionRows([edit(1, "q1"), edit(2, "q2")], new Map([[groupKeyOf(edit(1, "q1")), true]]));
  const changes = rows.filter((r) => r.kind === "change");
  expect(titles(changes)).toEqual([
    "Title of \"q2\" changed to \"v2\"",
    "Title of \"q1\" changed to \"v1\""
  ]);
  expect(changes[0].subtitle).toEqual(formatVersionTime(BASE_TS + 2000));
});

test("version-history: a collapsed group hides its changes", () => {
  const rows = buildVersionRows([edit(1), edit(2)], new Map([[groupKeyOf(edit(1)), false]]));
  expect(rows.filter((r) => r.kind === "change").length).toEqual(0);
  expect(rows.filter((r) => r.kind === "group")[0].ariaExpanded).toBeFalsy();
});

test("version-history: a named version without a label falls back to a generic caption", () => {
  const rows = buildVersionRows([change(1, JournalOp.FullSnapshot, { json: {}, label: "x" })], new Map());
  expect(titles(rows)).toContain("x");
});

test("version-history: row ids are stable across rebuilds", () => {
  const log = [edit(1), named(2, "A")];
  const first = buildVersionRows(log, new Map()).map((r) => r.id);
  const second = buildVersionRows(log, new Map()).map((r) => r.id);
  expect(second).toEqual(first);
});

test("version-history: formatVersionTime degrades on a bad timestamp", () => {
  expect(formatVersionTime(NaN)).toEqual("");
  expect(formatVersionTime(undefined as any)).toEqual("");
  expect(formatVersionTime(BASE_TS).length).toBeGreaterThan(0);
});

test("version-history: css carries the kind and the expanded state", () => {
  const rows = buildVersionRows([edit(1)], new Map([[groupKeyOf(edit(1)), true]]));
  const group = rows.filter((r) => r.kind === "group")[0];
  expect(group.rowCss).toContain("svc-version-history__row--group");
  expect(group.rowCss).toContain("svc-version-history__row--expanded");
  expect(rows[0].rowCss).toContain("svc-version-history__row--current");
});

test("version-history model: toggleGroup flips one group and leaves the others", () => {
  const model = new VersionHistoryModel();
  model.setChanges([edit(1), named(2, "A"), edit(3)]);
  const oldKey = groupKeyOf(edit(1));
  const newKey = groupKeyOf(edit(3));
  const byKey = (key: string) => model.rows.filter((r) => r.groupKey === key)[0];

  expect(byKey(newKey).ariaExpanded).toBeTruthy();
  expect(byKey(oldKey).ariaExpanded).toBeFalsy();

  model.toggleGroup(oldKey);
  expect(byKey(oldKey).ariaExpanded).toBeTruthy();
  expect(byKey(newKey).ariaExpanded).toBeTruthy();

  model.toggleGroup(newKey);
  expect(byKey(newKey).ariaExpanded).toBeFalsy();
  expect(byKey(oldKey).ariaExpanded).toBeTruthy();
});

test("version-history model: expansion survives a coalesced live refresh", () => {
  const model = new VersionHistoryModel();
  model.setChanges([edit(1), edit(2)]);
  model.toggleGroup(groupKeyOf(edit(1)));
  expect(model.rows.filter((r) => r.groupKey === groupKeyOf(edit(1)))[0].ariaExpanded).toBeFalsy();

  // The recorder coalesces rapid typing by rewriting the LAST record in place,
  // timestamp included - which is exactly why the group key is seq-only.
  const coalesced = edit(2);
  coalesced.timestamp = BASE_TS + 999999;
  model.setChanges([edit(1), coalesced]);
  expect(model.rows.filter((r) => r.groupKey === groupKeyOf(edit(1)))[0].ariaExpanded).toBeFalsy();
});

test("version-history model: setChanges rebuilds the rows", () => {
  const model = new VersionHistoryModel();
  expect(kinds(model.rows)).toEqual(["current", "base"]);
  model.setChanges([named(1, "A")]);
  expect(titles(model.rows)).toEqual(["Current Version", "A", "Document created"]);
});

test("version-history: a change row is signed by its author", () => {
  const mine = edit(1);
  const theirs: ICollabChange = { ...edit(2), clientId: "p1" };
  const stranger: ICollabChange = { ...edit(3), clientId: "p9" };
  const seeded = edit(4);
  const rows = buildVersionRows([mine, theirs, stranger, seeded], new Map(), undefined, {
    isLocal: (c) => c === mine,
    nameOf: (id) => id === "p1" ? "Jane Doe" : undefined
  }).filter((r) => r.kind === "change");
  expect(rows.map((r) => r.subtitle)).toEqual([
    formatVersionTime(BASE_TS + 4000),
    formatVersionTime(BASE_TS + 3000),
    "Jane Doe " + DOT + " " + formatVersionTime(BASE_TS + 2000),
    "You " + DOT + " " + formatVersionTime(BASE_TS + 1000)
  ]);
});

test("version-history: a peer's re-send is one row with the latest text", () => {
  const rows = buildVersionRows([
    { ...edit(1, "q1"), clientId: "p1" },
    edit(2, "q2"),
    { ...change(1, JournalOp.PropertyChanged, { target: "/pages/page1/elements/q1/title", value: "final" }), clientId: "p1" }
  ], new Map()).filter((r) => r.kind === "change");
  expect(titles(rows)).toEqual(["Title of \"q2\" changed to \"v2\"", "Title of \"q1\" changed to \"final\""]);
});

test("version-history: the group counts rows, not records", () => {
  // Two seed-log edits of one title in a row read as one.
  expect(titles(buildVersionRows([edit(1, "q1"), edit(2, "q1")], new Map()))).toContain("1 autosaved version");
});

test("version-history: only the group header is a tab stop", () => {
  const rows = buildVersionRows([edit(1), named(2, "A")], new Map());
  rows.forEach((r) => expect(!!r.disableTabStop).toEqual(r.kind !== "group"));
});

test("version-history: a malformed entry does not break the timeline", () => {
  const rows = buildVersionRows([null as any, { seq: 5, timestamp: BASE_TS, op: JournalOp.PropertyChanged } as any, edit(6)], new Map());
  expect(titles(rows.filter((r) => r.kind === "change"))).toEqual(["Title of \"q6\" changed to \"v6\"", "Edited"]);
});

test("version-history model: a name learned later relabels the rows on refresh", () => {
  const model = new VersionHistoryModel();
  model.setChanges([{ ...edit(1), clientId: "p1" }]);
  const names = new Map<string, string>();
  model.setAuthors({ nameOf: (id) => names.get(id) });
  const subtitle = (): string => model.rows.filter((r) => r.kind === "change")[0].subtitle;
  expect(subtitle()).toEqual(formatVersionTime(BASE_TS + 1000));
  names.set("p1", "Jane");
  model.refresh();
  expect(subtitle()).toEqual("Jane " + DOT + " " + formatVersionTime(BASE_TS + 1000));
});

test("version-history: groups whose first records share a seq keep separate keys", () => {
  // seq counts per client and per page load, so the first edit after a named
  // version is often seq 1 again.
  const model = new VersionHistoryModel();
  model.setChanges([{ ...edit(1, "q1"), clientId: "alice" }, named(2, "v1"), { ...edit(1, "q2"), clientId: "bob" }]);
  const groups = () => model.rows.filter((r) => r.kind === "group");
  expect(groups().length).toEqual(2);
  expect(groups()[0].id).not.toEqual(groups()[1].id);
  // The newest opens by default, the older does not; toggling one leaves the other.
  expect(groups().map((g) => !!g.ariaExpanded)).toEqual([true, false]);
  model.toggleGroup(groups()[1].groupKey);
  expect(groups().map((g) => !!g.ariaExpanded)).toEqual([true, true]);
});
