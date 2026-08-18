import { Base, CssClassBuilder, propertyArray } from "survey-core";
import { getCollabString } from "../collaboration-strings";
import { describeRecord } from "../journal/journal-describe";
import { JournalOp } from "../journal/journal-record";
import { ICollabChange } from "./bar-types";

import "./version-history.scss";

export type VersionHistoryRowKind = "current" | "named" | "group" | "change" | "base";

export interface IVersionHistoryRow {
  // Stable key for the framework renderers.
  id: string;
  kind: VersionHistoryRowKind;
  title: string;
  // Formatted timestamp; "" when unknown (the seed has no creation time).
  time: string;
  // "group" rows only.
  expanded?: boolean;
  groupKey?: string;
  css: string;
}

type TimelineNode =
  | { type: "named", change: ICollabChange }
  | { type: "group", changes: Array<ICollabChange> };

// A saved (named) version = a FullSnapshot carrying a non-empty label.
export function isNamedVersion(c: ICollabChange): boolean {
  return !!c && c.op === JournalOp.FullSnapshot && !!c.payload &&
    typeof c.payload.label === "string" && c.payload.label !== "";
}

// Partition the room change log (oldest to newest) into named versions and runs
// of "autosaved" edits between them.
export function buildTimeline(changes: ReadonlyArray<ICollabChange>): Array<TimelineNode> {
  const nodes: Array<TimelineNode> = [];
  let group: { type: "group", changes: Array<ICollabChange> } | null = null;
  for (let i = 0; i < changes.length; i++) {
    const c = changes[i];
    if (isNamedVersion(c)) {
      group = null;
      nodes.push({ type: "named", change: c });
    } else {
      if (!group) {
        group = { type: "group", changes: [] };
        nodes.push(group);
      }
      group.changes.push(c);
    }
  }
  return nodes;
}

// Stable key for a group (its first change), so expansion survives a live
// refresh. Keyed by `seq` ONLY: the recorder coalesces rapid edits by rewriting
// the last record in place INCLUDING its timestamp, so a timestamp-based key
// would reset the group's expanded state on every keystroke.
export function versionGroupKey(node: TimelineNode): string {
  if (node.type !== "group" || node.changes.length === 0) return "";
  return String(node.changes[0].seq);
}

// Absolute date + 24h time, e.g. "Jul 10, 19:30".
export function formatVersionTime(ts: number): string {
  if (typeof ts !== "number" || !isFinite(ts)) return "";
  const d = new Date(ts);
  const date = d.toLocaleDateString([], { month: "short", day: "numeric" });
  const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
  return date + ", " + time;
}

function rowCss(kind: VersionHistoryRowKind, expanded?: boolean): string {
  return new CssClassBuilder()
    .append("svc-version-history__row")
    .append("svc-version-history__row--" + kind)
    .append("svc-version-history__row--expanded", expanded === true)
    .toString();
}

// Flatten the timeline into renderable rows, newest first, with the base and
// current markers at the ends. Pure: the caller owns the expansion state, which
// is what lets it survive a rebuild.
export function buildVersionRows(
  changes: ReadonlyArray<ICollabChange>,
  expandedByKey: Map<string, boolean>
): Array<IVersionHistoryRow> {
  const timeline = buildTimeline(changes);
  let newestGroupKey = "";
  for (let i = timeline.length - 1; i >= 0; i--) {
    if (timeline[i].type === "group") {
      newestGroupKey = versionGroupKey(timeline[i]);
      break;
    }
  }
  const rows: Array<IVersionHistoryRow> = [];
  rows.push({
    id: "current",
    kind: "current",
    title: getCollabString("collabVersionCurrent"),
    time: "",
    css: rowCss("current")
  });
  for (let i = timeline.length - 1; i >= 0; i--) {
    const node = timeline[i];
    if (node.type === "named") {
      const label = node.change.payload && node.change.payload.label;
      rows.push({
        id: "named:" + node.change.seq,
        kind: "named",
        title: label ? String(label) : getCollabString("collabVersionSaved"),
        time: formatVersionTime(node.change.timestamp),
        css: rowCss("named")
      });
      continue;
    }
    const key = versionGroupKey(node);
    const expanded = expandedByKey.has(key) ? !!expandedByKey.get(key) : key === newestGroupKey;
    const count = node.changes.length;
    rows.push({
      id: "group:" + key,
      kind: "group",
      title: count === 1
        ? getCollabString("collabVersionAutosavedOne", count)
        : getCollabString("collabVersionAutosaved", count),
      time: "",
      expanded: expanded,
      groupKey: key,
      css: rowCss("group", expanded)
    });
    if (!expanded) continue;
    for (let j = node.changes.length - 1; j >= 0; j--) {
      const change = node.changes[j];
      rows.push({
        id: "change:" + change.seq + ":" + j,
        kind: "change",
        title: describeRecord(change),
        time: formatVersionTime(change.timestamp),
        css: rowCss("change")
      });
    }
  }
  rows.push({
    id: "base",
    kind: "base",
    // The seed state; the transport carries no creation time, so no timestamp.
    title: getCollabString("collabVersionDocumentCreated"),
    time: "",
    css: rowCss("base")
  });
  return rows;
}

// The Version History panel's content model. Rebuilding `rows` is the whole
// live-refresh mechanism - the views re-render off the array-changed
// notification, so there is no manual refresh plumbing.
export class VersionHistoryModel extends Base {
  @propertyArray() rows: Array<IVersionHistoryRow>;

  // Kept OUTSIDE `rows` so expansion survives every rebuild.
  private expandedByKey: Map<string, boolean> = new Map<string, boolean>();
  private changes: ReadonlyArray<ICollabChange> = [];

  constructor() {
    super();
    this.rebuild();
  }

  public getType(): string {
    return "versionhistory";
  }

  public setChanges(changes: ReadonlyArray<ICollabChange>): void {
    this.changes = changes || [];
    this.rebuild();
  }
  public toggleGroup(groupKey: string): void {
    if (!groupKey) return;
    const row = this.rows.filter((r) => r.groupKey === groupKey)[0];
    const current = this.expandedByKey.has(groupKey)
      ? !!this.expandedByKey.get(groupKey)
      : !!row && row.expanded === true;
    this.expandedByKey.set(groupKey, !current);
    this.rebuild();
  }
  public dispose(): void {
    this.expandedByKey.clear();
    super.dispose();
  }

  private rebuild(): void {
    this.rows = buildVersionRows(this.changes, this.expandedByKey);
  }
}
