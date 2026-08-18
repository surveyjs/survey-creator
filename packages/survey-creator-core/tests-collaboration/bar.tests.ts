import { expect, test, vi } from "vitest";
import { Action, ListModel, PopupDropdownViewModel } from "survey-core";
import { CreatorTester } from "../tests/creator-tester";
import { JournalOp } from "../src/plugins/collaboration/journal";
import { IPresencePeerEntry } from "../src/plugins/collaboration/presence";
import { CollabParticipantAction, ICollabChange } from "../src/plugins/collaboration/bar";
import { CollaborationPlugin, ICollaborationOptions } from "../src/plugins/collaboration";

const initialJSON = {
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "q1" }
      ]
    }
  ]
};

interface ISetup {
  creator: CreatorTester;
  collab: CollaborationPlugin;
  cleanup: () => void;
}

function setup(options: ICollaborationOptions = {}): ISetup {
  const creator = new CreatorTester();
  creator.JSON = initialJSON;
  // One registration wires the roster into the strip - no ordering to get wrong.
  const collab = new CollaborationPlugin(creator, options);
  creator.addPlugin("collaboration", collab);
  return { creator, collab, cleanup: () => collab.dispose() };
}

const peerEntry = (clientId: string, tab: string): IPresencePeerEntry => ({
  clientId,
  name: `User ${clientId}`,
  color: "#e91e63",
  state: { tab, sel: null, focus: null, cur: null }
});

// A dropdown action's list only materializes once the popup is shown; the view
// model is what makes onVisibilityChanged fire (see question-adorner.tests.ts).
function openList(action: Action): ListModel {
  const popup: any = action.popupModel;
  new PopupDropdownViewModel(popup);
  popup.show();
  return popup.contentComponentData.model;
}

test("collab-bar: the model is published on the creator and released on dispose", () => {
  const { creator, collab, cleanup } = setup();
  expect(creator.collabBar).toBe(collab.bar);
  cleanup();
  expect(creator.collabBar).toBeUndefined();
});

test("collab-bar: the left group holds the Collaboration menu", () => {
  const { collab, cleanup } = setup();
  const ids = collab.bar.actions.actions.map((a) => a.id);
  expect(ids).toEqual(["collabMenu"]);
  const action = collab.bar.actions.getActionById("collabMenu");
  expect(action.title).toEqual("Collaboration");
  cleanup();
});

test("collab-bar: without host options the menu offers only the version history", () => {
  const { collab, cleanup } = setup();
  const list = openList(collab.bar.actions.getActionById("collabMenu"));
  expect(list.actions.map((a) => a.id)).toEqual(["collabHistory"]);
  cleanup();
});

test("collab-bar: host options add info rows and the lobby item", () => {
  const { collab, cleanup } = setup({ roomId: "r-1", framework: "React", onBack: () => { } });
  const list = openList(collab.bar.actions.getActionById("collabMenu"));
  expect(list.actions.map((a) => a.id)).toEqual(["collabHistory", "collabRoom", "collabFramework", "collabBack"]);

  const room = list.getActionById("collabRoom");
  expect(room.title).toEqual("Room: r-1");
  // Informational rows must not be clickable.
  expect(room.isLabel).toBeTruthy();
  expect(room.enabled).toBeFalsy();
  expect(room.needSeparator).toBeTruthy();
  expect(list.getActionById("collabFramework").title).toEqual("Framework: React");
  expect(list.getActionById("collabBack").needSeparator).toBeTruthy();
  cleanup();
});

test("collab-bar: picking a menu item does not rename the Collaboration trigger", () => {
  const { collab, cleanup } = setup();
  const action = collab.bar.actions.getActionById("collabMenu");
  const list = openList(action);
  const item = list.getActionById("collabHistory");
  // The dropdown helper syncs the trigger title to the picked item (selector
  // semantics); a command menu must keep its own caption.
  list.onItemClick(item);
  expect(action.title).toEqual("Collaboration");
  cleanup();
});

test("collab-bar: the status plate shows only while the connection has a problem", () => {
  const { collab, cleanup } = setup();
  collab.setStatus("connecting");
  expect(collab.bar.statusVisible).toBeTruthy();
  expect(collab.bar.statusText).toEqual("Connecting...");
  expect(collab.bar.getStatusCss()).toContain("svc-collab-bar__status--connecting");

  collab.setStatus("closed");
  expect(collab.bar.statusVisible).toBeTruthy();
  expect(collab.bar.statusText).toEqual("Disconnected");

  collab.setStatus("connected");
  expect(collab.bar.statusVisible).toBeFalsy();
  cleanup();
});

test("collab-bar: presence peers become avatar actions", () => {
  const { collab, cleanup } = setup();
  collab.upsertPeer(peerEntry("a", "theme"));

  const actions = collab.bar.participantActions.actions as Array<CollabParticipantAction>;
  expect(actions.length).toEqual(1);
  expect(actions[0].title).toEqual("User a");
  expect(actions[0].initials).toEqual("UA");
  expect(actions[0].component).toEqual("svc-collab-bar-avatar");
  // The tab name is localized through the shared tabs.* keys.
  expect(actions[0].tooltip).toEqual("User a on Themes");
  // A theme color slot, not the raw transport hex.
  expect(actions[0].colorIndex).toBeGreaterThanOrEqual(0);
  expect(actions[0].colorIndex).toBeLessThanOrEqual(9);
  expect(actions[0].getAvatarCss()).toContain("svc-collab-bar__avatar--color-" + actions[0].colorIndex);

  collab.removePeer("a");
  expect(collab.bar.participantActions.actions.length).toEqual(0);
  cleanup();
});

test("collab-bar: a peer with no tab falls back to a plain name tooltip", () => {
  const { collab, cleanup } = setup();
  collab.upsertPeer(peerEntry("a", ""));
  expect(collab.bar.participantActions.actions[0].tooltip).toEqual("User a");
  cleanup();
});

test("collab-bar: clicking a participant follows them to their tab", () => {
  const { creator, collab, cleanup } = setup();
  expect(creator.activeTab).toEqual("designer");
  collab.upsertPeer(peerEntry("a", "test"));
  const action = collab.bar.participantActions.actions[0];
  action.action(action);
  // The creator aliases "test" to "preview".
  expect(creator.activeTab).toEqual("preview");
  cleanup();
});

test("collab-bar: onGoToParticipant overrides the default follow", () => {
  const followed: Array<string> = [];
  const { creator, collab, cleanup } = setup({ onGoToParticipant: (u) => followed.push(u.id) });
  collab.upsertPeer(peerEntry("a", "test"));
  const action = collab.bar.participantActions.actions[0];
  action.action(action);
  expect(followed).toEqual(["a"]);
  expect(creator.activeTab).toEqual("designer");
  cleanup();
});

test("collab-bar: a roster update that changes nothing visible does not rebuild the chips", () => {
  const { collab, cleanup } = setup();
  collab.upsertPeer(peerEntry("a", "test"));
  const first = collab.bar.participantActions.actions[0];

  // Same peer again: nothing the bar renders has changed.
  collab.upsertPeer(peerEntry("a", "test"));
  expect(collab.bar.participantActions.actions[0]).toBe(first);

  // A cursor move is the common case - presence fires on every mouse move.
  const moved = peerEntry("a", "test");
  moved.state.cur = { a: { s: "root" }, x: 0.5, y: 0.5 };
  collab.upsertPeer(moved);
  expect(collab.bar.participantActions.actions[0]).toBe(first);

  // A tab switch IS visible, so the chip is rebuilt.
  collab.upsertPeer(peerEntry("a", "theme"));
  expect(collab.bar.participantActions.actions[0]).not.toBe(first);
  cleanup();
});

test("collab-bar: the overflow trigger appears only with participants", () => {
  const { collab, cleanup } = setup();
  const overflow = collab.bar.toolActions.getActionById("collabParticipants");
  expect(overflow.visible).toBeFalsy();
  collab.upsertPeer(peerEntry("a", "test"));
  expect(overflow.visible).toBeTruthy();
  collab.removePeer("a");
  expect(overflow.visible).toBeFalsy();
  cleanup();
});

test("collab-bar: the roster popup lists every participant as its own instance", () => {
  const { collab, cleanup } = setup();
  collab.upsertPeer(peerEntry("a", "test"));
  collab.upsertPeer(peerEntry("b", "theme"));

  const list = openList(collab.bar.toolActions.getActionById("collabParticipants"));
  const items = list.actions as Array<CollabParticipantAction>;
  expect(items.length).toEqual(2);
  expect(items[0].component).toEqual("svc-collab-bar-avatar");
  expect(items[0].isListItem).toBeTruthy();
  expect(items[0].showTitle).toBeTruthy();
  // The list container rewrites cssClasses/owner on what it is given, so the
  // roster rows must never be the same objects as the strip's chips.
  const chips = collab.bar.participantActions.actions;
  expect(items[0]).not.toBe(chips[0]);
  expect(items[1]).not.toBe(chips[1]);
  cleanup();
});

test("collab-bar: an empty roster popup shows a non-clickable placeholder", () => {
  const { collab, cleanup } = setup();
  const list = openList(collab.bar.toolActions.getActionById("collabParticipants"));
  expect(list.actions.map((a) => a.id)).toEqual(["collabNoParticipants"]);
  expect(list.actions[0].enabled).toBeFalsy();
  cleanup();
});

test("collab-bar: only the first maxVisibleParticipants get a chip, the roster keeps all", () => {
  const { collab, cleanup } = setup();
  for (let i = 0; i < 10; i++) collab.upsertPeer(peerEntry("p" + i, "test"));
  expect(collab.bar.maxVisibleParticipants).toEqual(8);
  expect(collab.bar.participantActions.actions.length).toEqual(8);

  const list = openList(collab.bar.toolActions.getActionById("collabParticipants"));
  expect(list.actions.length).toEqual(10);
  cleanup();
});

test("collab-bar: Invite exists only with a link and flashes a confirmation", () => {
  const bare = setup();
  expect(bare.collab.bar.toolActions.getActionById("collabInvite")).toBeFalsy();
  bare.cleanup();

  const originalClipboard = (navigator as any).clipboard;
  const writeText = vi.fn();
  (navigator as any).clipboard = { writeText };
  vi.useFakeTimers();
  const { collab, cleanup } = setup({ getInviteLink: () => "https://host/?room=r-1" });
  try {
    const action = collab.bar.toolActions.getActionById("collabInvite");
    expect(action.title).toEqual("Invite");
    action.action(action);
    expect(writeText).toHaveBeenCalledWith("https://host/?room=r-1");
    expect(action.title).toEqual("Copied");
    vi.advanceTimersByTime(1500);
    expect(action.title).toEqual("Invite");
  } finally {
    cleanup();
    vi.useRealTimers();
    (navigator as any).clipboard = originalClipboard;
  }
});

const change = (seq: number, op: JournalOp, payload: any): ICollabChange =>
  ({ seq, timestamp: 1720000000000 + seq * 1000, op, payload });

test("collab-bar: the menu opens the version history as a floating panel", () => {
  const { collab, cleanup } = setup();
  collab.setHistory([
    change(1, JournalOp.PropertyChanged, { target: "/pages/page1/elements/q1/title", value: "Hello" }),
    change(2, JournalOp.FullSnapshot, { json: {}, label: "First milestone" })
  ]);

  const list = openList(collab.bar.actions.getActionById("collabMenu"));
  const historyItem = list.getActionById("collabHistory");
  historyItem.action(historyItem);

  // The bar owns the panel outright - the creator has no floating-window host.
  expect(collab.bar.historyPanel).toBeTruthy();
  expect(collab.bar.historyPanel.visible).toBeTruthy();
  expect(collab.bar.historyPanel.titleText).toEqual("Version History");

  const titles = collab.bar.versionHistory.rows.map((r) => r.title);
  expect(titles[0]).toEqual("Current Version");
  expect(titles).toContain("First milestone");
  expect(titles).toContain("1 autosaved version");
  expect(titles).toContain("Property \"title\" changed on \"q1\"");
  expect(titles[titles.length - 1]).toEqual("Document created");
  cleanup();
});

test("collab-bar: history pushed while the panel is open refreshes it", () => {
  const { collab, cleanup } = setup();
  collab.bar.showVersionHistory();
  collab.setHistory([
    change(1, JournalOp.FullSnapshot, { json: {}, label: "A" }),
    change(2, JournalOp.FullSnapshot, { json: {}, label: "B" })
  ]);
  const titles = collab.bar.versionHistory.rows.map((r) => r.title);
  // Newest first.
  expect(titles).toEqual(["Current Version", "B", "A", "Document created"]);
  cleanup();
});

test("collab-bar: disposing releases the presence subscription", () => {
  const { collab, cleanup } = setup();
  collab.upsertPeer(peerEntry("a", "test"));
  expect(collab.bar.participantActions.actions.length).toEqual(1);

  const model = collab.bar;
  cleanup();
  const afterDispose = model.participantActions.actions.length;
  collab.upsertPeer(peerEntry("b", "test"));
  // A roster change after dispose reaches nothing.
  expect(model.participantActions.actions.length).toEqual(afterDispose);
});
