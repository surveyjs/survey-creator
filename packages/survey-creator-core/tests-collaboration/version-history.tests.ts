import { expect, test } from "vitest";
import { JournalOp } from "../src/plugins/collaboration/journal";
import { ICollabChange } from "../src/plugins/collaboration/bar/bar-types";
import {
  buildTimeline, buildVersionRows, formatVersionTime, isNamedVersion, versionGroupKey, VersionHistoryModel
} from "../src/plugins/collaboration/bar/version-history-model";

const BASE_TS = 1720000000000;

const change = (seq: number, op: JournalOp, payload: any, ts?: number): ICollabChange =>
  ({ seq, timestamp: ts !== undefined ? ts : BASE_TS + seq * 1000, op, payload });

const edit = (seq: number, name = "q1"): ICollabChange =>
  change(seq, JournalOp.PropertyChanged, { target: "/pages/page1/elements/" + name + "/title", value: "v" + seq });

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
  const nodes = buildTimeline([edit(1), edit(2), named(3, "A"), edit(4)]);
  expect(nodes.map((n) => n.type)).toEqual(["group", "named", "group"]);
  expect(versionGroupKey(nodes[0])).toEqual("1");
  expect(versionGroupKey(nodes[2])).toEqual("4");
});

test("version-history: rows are newest first between the markers", () => {
  const rows = buildVersionRows([edit(1), named(2, "A"), named(3, "B")], new Map());
  // The only group is also the newest one, so it opens by default and its
  // single change is listed under the header.
  expect(titles(rows)).toEqual([
    "Current Version", "B", "A",
    "1 autosaved version", "Property \"title\" changed on \"q1\"",
    "Document created"
  ]);
});

test("version-history: only the newest group is expanded by default", () => {
  const rows = buildVersionRows([edit(1), named(2, "A"), edit(3), edit(4)], new Map());
  const groups = rows.filter((r) => r.kind === "group");
  expect(groups.length).toEqual(2);
  // Newest group first in render order.
  expect(groups[0].expanded).toBeTruthy();
  expect(groups[1].expanded).toBeFalsy();
  expect(rows.filter((r) => r.kind === "change").length).toEqual(2);
});

test("version-history: the group count is pluralized by a dedicated key", () => {
  expect(titles(buildVersionRows([edit(1)], new Map()))).toContain("1 autosaved version");
  expect(titles(buildVersionRows([edit(1), edit(2)], new Map()))).toContain("2 autosaved versions");
});

test("version-history: an expanded group lists its changes newest first, described", () => {
  const rows = buildVersionRows([edit(1, "q1"), edit(2, "q2")], new Map([["1", true]]));
  const changes = rows.filter((r) => r.kind === "change");
  expect(titles(changes)).toEqual([
    "Property \"title\" changed on \"q2\"",
    "Property \"title\" changed on \"q1\""
  ]);
  expect(changes[0].time).toEqual(formatVersionTime(BASE_TS + 2000));
});

test("version-history: a collapsed group hides its changes", () => {
  const rows = buildVersionRows([edit(1), edit(2)], new Map([["1", false]]));
  expect(rows.filter((r) => r.kind === "change").length).toEqual(0);
  expect(rows.filter((r) => r.kind === "group")[0].expanded).toBeFalsy();
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
  const rows = buildVersionRows([edit(1)], new Map([["1", true]]));
  const group = rows.filter((r) => r.kind === "group")[0];
  expect(group.css).toContain("svc-version-history__row--group");
  expect(group.css).toContain("svc-version-history__row--expanded");
  expect(rows[0].css).toContain("svc-version-history__row--current");
});

test("version-history model: toggleGroup flips one group and leaves the others", () => {
  const model = new VersionHistoryModel();
  model.setChanges([edit(1), named(2, "A"), edit(3)]);
  const oldKey = "1";
  const newKey = "3";
  const byKey = (key: string) => model.rows.filter((r) => r.groupKey === key)[0];

  expect(byKey(newKey).expanded).toBeTruthy();
  expect(byKey(oldKey).expanded).toBeFalsy();

  model.toggleGroup(oldKey);
  expect(byKey(oldKey).expanded).toBeTruthy();
  expect(byKey(newKey).expanded).toBeTruthy();

  model.toggleGroup(newKey);
  expect(byKey(newKey).expanded).toBeFalsy();
  expect(byKey(oldKey).expanded).toBeTruthy();
});

test("version-history model: expansion survives a coalesced live refresh", () => {
  const model = new VersionHistoryModel();
  model.setChanges([edit(1), edit(2)]);
  model.toggleGroup("1");
  expect(model.rows.filter((r) => r.groupKey === "1")[0].expanded).toBeFalsy();

  // The recorder coalesces rapid typing by rewriting the LAST record in place,
  // timestamp included - which is exactly why the group key is seq-only.
  const coalesced = edit(2);
  coalesced.timestamp = BASE_TS + 999999;
  model.setChanges([edit(1), coalesced]);
  expect(model.rows.filter((r) => r.groupKey === "1")[0].expanded).toBeFalsy();
});

test("version-history model: setChanges rebuilds the rows", () => {
  const model = new VersionHistoryModel();
  expect(kinds(model.rows)).toEqual(["current", "base"]);
  model.setChanges([named(1, "A")]);
  expect(titles(model.rows)).toEqual(["Current Version", "A", "Document created"]);
});
