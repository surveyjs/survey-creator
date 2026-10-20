import { Base, toCssClasses, ListModel } from "survey-core";
import { getCollabString } from "../collaboration-strings";
import { describeRecord } from "../journal/journal-describe";
import { JournalOp } from "../journal/journal-record";
import { ICollabChange } from "./bar-types";
import { CollabRowAction } from "./collab-row-action";
import { IHistoryEntry, normalizeHistory, SELF_AUTHOR } from "./version-history-normalize";

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

// Who made a change. Both halves are optional, so a bare timeline - a host
// without presence, a test - still renders; its rows just carry no author.
export interface IVersionAuthors {
  // True for this client's own records.
  isLocal?: (change: ICollabChange) => boolean;
  // A peer's display name by connection id; undefined while unknown.
  nameOf?: (clientId: string) => string | undefined;
}

type TimelineNode =
  | { type: "named", entry: IHistoryEntry }
  | { type: "group", entries: Array<IHistoryEntry> };

// A saved (named) version = a FullSnapshot carrying a non-empty label.
export function isNamedVersion(c: ICollabChange): boolean {
  return !!c && c.op === JournalOp.FullSnapshot && !!c.payload &&
    typeof c.payload.label === "string" && c.payload.label !== "";
}

// Partition the normalized history (oldest to newest) into named versions and
// runs of "autosaved" edits between them.
export function buildTimeline(entries: ReadonlyArray<IHistoryEntry>): Array<TimelineNode> {
  const nodes: Array<TimelineNode> = [];
  let group: { type: "group", entries: Array<IHistoryEntry> } | null = null;
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (isNamedVersion(entry.change)) {
      group = null;
      nodes.push({ type: "named", entry: entry });
    } else {
      if (!group) {
        group = { type: "group", entries: [] };
        nodes.push(group);
      }
      group.entries.push(entry);
    }
  }
  return nodes;
}

// Stable, unique key for a group (its first entry's row key), so expansion
// survives a live refresh: re-sends and collapsed runs keep the row key while
// their content and timestamp move on. A seq would not do - it counts per
// client and per page load, so two groups often start with the same one.
export function versionGroupKey(node: TimelineNode): string {
  if (node.type !== "group" || node.entries.length === 0) return "";
  return node.entries[0].rowKey;
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
  return toCssClasses(
    "svc-version-history__row",
    "svc-version-history__row--" + kind,
    expanded === true && "svc-version-history__row--expanded"
  );
}

interface IVersionRowOptions {
  time?: string;
  author?: string;
  expanded?: boolean;
  groupKey?: string;
  onToggle?: (groupKey: string) => void;
}

// `Jane Doe <dot> Oct 7, 14:02`; either half alone when the other is unknown.
function subtitleOf(author: string, time: string): string {
  if (!author) return time;
  if (!time) return author;
  return getCollabString("collabVersionAuthorTime", author, time);
}

// The name the transport stamped wins; presence only fills in for a transport
// that stamps the id alone.
function authorOf(entry: IHistoryEntry, authors: IVersionAuthors): string {
  if (entry.authorKey === SELF_AUTHOR) return getCollabString("collabVersionAuthorYou");
  const change = entry.change;
  if (typeof change.authorName === "string" && change.authorName !== "") return change.authorName;
  const clientId = change.clientId;
  if (!clientId || !authors.nameOf) return "";
  return authors.nameOf(clientId) || "";
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
    action: isGroup && !!onToggle ? () => onToggle(groupKey) : undefined,
    // ...and so the only tab stop: an inert row that takes focus promises an
    // action just as a hand cursor does.
    disableTabStop: !isGroup
  });
  row.kind = kind;
  row.groupKey = groupKey;
  row.subtitle = subtitleOf(options.author || "", options.time || "");
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
  onToggle?: (groupKey: string) => void,
  authors: IVersionAuthors = {}
): Array<VersionHistoryRowAction> {
  const isLocal = authors.isLocal || ((): boolean => false);
  const timeline = buildTimeline(normalizeHistory(changes, isLocal));
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
      const change = node.entry.change;
      const label = change.payload && change.payload.label;
      rows.push(createRow("named:" + node.entry.rowKey, "named",
        label ? String(label) : getCollabString("collabVersionSaved"),
        { time: formatVersionTime(change.timestamp), author: authorOf(node.entry, authors) }));
      continue;
    }
    const key = versionGroupKey(node);
    const expanded = expandedByKey.has(key) ? !!expandedByKey.get(key) : key === newestGroupKey;
    const count = node.entries.length;
    rows.push(createRow("group:" + key, "group",
      count === 1
        ? getCollabString("collabVersionAutosavedOne", count)
        : getCollabString("collabVersionAutosaved", count),
      { expanded: expanded, groupKey: key, onToggle: onToggle }));
    if (!expanded) continue;
    for (let j = node.entries.length - 1; j >= 0; j--) {
      const entry = node.entries[j];
      rows.push(createRow("change:" + entry.rowKey, "change", describeRecord(entry.change),
        { time: formatVersionTime(entry.change.timestamp), author: authorOf(entry, authors) }));
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
  private authors: IVersionAuthors = {};

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
  public setAuthors(authors: IVersionAuthors): void {
    this.authors = authors || {};
    this.rebuild();
  }
  // Re-reads the authors: names arrive with presence, which may trail the records.
  public refresh(): void {
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
    this.list.setItems(buildVersionRows(this.changes, this.expandedByKey, (key) => this.toggleGroup(key), this.authors));
  }
}
