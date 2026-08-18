import { Base, CssClassBuilder, ListModel } from "survey-core";
import { getCollabString } from "../collaboration-strings";
import { describeRecord } from "../journal/journal-describe";
import { JournalOp } from "../journal/journal-record";
import { ICollabChange } from "./bar-types";
import { CollabRowAction } from "./collab-row-action";

import "./version-history.scss";

export type VersionHistoryRowKind = "current" | "named" | "group" | "change" | "base";

// One row of the timeline. `kind` and `groupKey` are the timeline's own
// bookkeeping; everything a renderer needs comes from CollabRowAction, so the
// list is drawn by the shared "svc-collab-row" and needs no view of its own.
export class VersionHistoryRowAction extends CollabRowAction {
  public kind: VersionHistoryRowKind;
  // Set on "group" rows only; "" elsewhere.
  public groupKey: string;
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

interface IVersionRowOptions {
  time?: string;
  expanded?: boolean;
  groupKey?: string;
  onToggle?: (groupKey: string) => void;
}

function createRow(id: string, kind: VersionHistoryRowKind, title: string,
  options: IVersionRowOptions = {}): VersionHistoryRowAction {
  const isGroup = kind === "group";
  const groupKey = options.groupKey || "";
  const onToggle = options.onToggle;
  const row = new VersionHistoryRowAction({
    id: id,
    title: title,
    // Overrides the list's default item renderer for this item only.
    component: "svc-collab-row",
    // The group header is the only interactive row: sv-list draws the <li> and
    // routes its click to `action`. Rows without one are inert.
    action: isGroup && !!onToggle ? () => onToggle(groupKey) : undefined
  });
  row.kind = kind;
  row.groupKey = groupKey;
  row.subtitle = options.time || "";
  row.rowCss = rowCss(kind, options.expanded);
  if (isGroup) {
    // Only the group headers expand, so only they carry aria-expanded.
    row.ariaExpanded = options.expanded === true;
    row.markerIconName = row.ariaExpanded ? "icon-chevrondown-16x16" : "icon-chevronright-16x16";
  }
  return row;
}

// Flatten the timeline into renderable rows, newest first, with the base and
// current markers at the ends. Pure: the caller owns the expansion state, which
// is what lets it survive a rebuild.
export function buildVersionRows(
  changes: ReadonlyArray<ICollabChange>,
  expandedByKey: Map<string, boolean>,
  onToggle?: (groupKey: string) => void
): Array<VersionHistoryRowAction> {
  const timeline = buildTimeline(changes);
  let newestGroupKey = "";
  for (let i = timeline.length - 1; i >= 0; i--) {
    if (timeline[i].type === "group") {
      newestGroupKey = versionGroupKey(timeline[i]);
      break;
    }
  }
  const rows: Array<VersionHistoryRowAction> = [];
  rows.push(createRow("current", "current", getCollabString("collabVersionCurrent")));
  for (let i = timeline.length - 1; i >= 0; i--) {
    const node = timeline[i];
    if (node.type === "named") {
      const label = node.change.payload && node.change.payload.label;
      rows.push(createRow("named:" + node.change.seq, "named",
        label ? String(label) : getCollabString("collabVersionSaved"),
        { time: formatVersionTime(node.change.timestamp) }));
      continue;
    }
    const key = versionGroupKey(node);
    const expanded = expandedByKey.has(key) ? !!expandedByKey.get(key) : key === newestGroupKey;
    const count = node.changes.length;
    rows.push(createRow("group:" + key, "group",
      count === 1
        ? getCollabString("collabVersionAutosavedOne", count)
        : getCollabString("collabVersionAutosaved", count),
      { expanded: expanded, groupKey: key, onToggle: onToggle }));
    if (!expanded) continue;
    for (let j = node.changes.length - 1; j >= 0; j--) {
      const change = node.changes[j];
      rows.push(createRow("change:" + change.seq + ":" + j, "change", describeRecord(change),
        { time: formatVersionTime(change.timestamp) }));
    }
  }
  // The seed state; the transport carries no creation time, so no timestamp.
  rows.push(createRow("base", "base", getCollabString("collabVersionDocumentCreated")));
  return rows;
}

// The Version History panel's content model: a ListModel that the panel hands to
// the stock `sv-list`, so the timeline needs no framework component of its own.
// Rebuilding the items is the whole live-refresh mechanism - the list re-renders
// off its own actions-changed notification.
export class VersionHistoryModel extends Base {
  public list: ListModel;

  // Kept OUTSIDE the rows so expansion survives every rebuild.
  private expandedByKey: Map<string, boolean> = new Map<string, boolean>();
  private changes: ReadonlyArray<ICollabChange> = [];

  constructor() {
    super();
    this.list = new ListModel({
      items: [],
      // A timeline, not a picker: nothing here stays selected, and the rows are
      // announced as a plain list rather than a listbox of options.
      allowSelection: false,
      listRole: "list",
      listItemRole: "listitem"
    });
    // sv-list renders its root from `cssClasses.root` and ignores `containerCss`,
    // so the feature's own class has to be merged into the class map. The setter
    // keeps every other default (see ActionContainer.setCssClasses).
    this.list.cssClasses = { root: "sv-list__container svc-version-history" };
    this.rebuild();
  }

  public getType(): string {
    return "versionhistory";
  }

  public get rows(): Array<VersionHistoryRowAction> {
    return <Array<VersionHistoryRowAction>>this.list.actions;
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
      : !!row && row.ariaExpanded === true;
    this.expandedByKey.set(groupKey, !current);
    this.rebuild();
  }
  public dispose(): void {
    this.expandedByKey.clear();
    this.list.dispose();
    super.dispose();
  }

  private rebuild(): void {
    this.list.setItems(buildVersionRows(this.changes, this.expandedByKey, (key) => this.toggleGroup(key)));
  }
}
