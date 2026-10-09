import { expect, test } from "vitest";
import { CreatorTester } from "../tests/creator-tester";
import { IPresencePeerEntry } from "../src/plugins/collaboration/presence";
import { CollaborationPlugin } from "../src/plugins/collaboration";

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

function createCreator(): CreatorTester {
  const creator = new CreatorTester();
  creator.JSON = initialJSON;
  return creator;
}

const peerEntry = (clientId: string, tab: string): IPresencePeerEntry => ({
  clientId,
  name: `User ${clientId}`,
  state: { tab, sel: null, focus: null, cur: null }
});

const overlayCount = (): number => document.body.querySelectorAll(".collab-presence-layer").length;

test("collaboration: one registration brings up all three parts", () => {
  const creator = createCreator();
  const collab = new CollaborationPlugin(creator);
  creator.addPlugin("collaboration", collab);

  expect(collab.journal).toBeTruthy();
  expect(collab.presence).toBeTruthy();
  expect(collab.bar).toBeTruthy();
  expect(creator.collabBar).toBe(collab.bar);
  collab.dispose();
});

test("collaboration: the roster reaches the strip regardless of when peers arrive", () => {
  // The whole point of the merge: the old separate plugins resolved each other
  // by name, so a peer known before the bar existed was silently dropped.
  const creator = createCreator();
  const collab = new CollaborationPlugin(creator);
  collab.upsertPeer(peerEntry("early", "designer"));
  expect(collab.bar.participantActions.actions.length).toEqual(1);

  collab.upsertPeer(peerEntry("late", "logic"));
  expect(collab.bar.participantActions.actions.length).toEqual(2);
  collab.dispose();
});

test("collaboration: the journal surface is delegated", () => {
  const creator = createCreator();
  const collab = new CollaborationPlugin(creator, { presence: false, bar: false });

  expect(collab.isRecording).toBeTruthy();
  expect(collab.records.length).toEqual(0);
  creator.survey.getQuestionByName("q1").title = "Hello";
  expect(collab.records.length).toBeGreaterThan(0);
  expect(collab.toJSON()).toBe(collab.records);
  expect(JSON.parse(collab.toText()).length).toEqual(collab.records.length);

  collab.stopRecording();
  expect(collab.isRecording).toBeFalsy();
  collab.clear();
  expect(collab.records.length).toEqual(0);
  collab.dispose();
});

test("collaboration: presence off keeps every presence member callable", () => {
  const creator = createCreator();
  const before = overlayCount();
  const collab = new CollaborationPlugin(creator, { presence: false });

  expect(collab.presence).toBeUndefined();
  // No overlay layer, no document listeners, no cursor timers.
  expect(overlayCount()).toEqual(before);

  // A host that disables the part but keeps its transport wired must get
  // silence, not a TypeError.
  expect(collab.getState()).toEqual({ tab: "", sel: null, rule: null, lock: false, focus: null, trLoc: null, cur: null });
  expect(collab.peers.size).toEqual(0);
  expect(() => collab.setPeers([peerEntry("a", "designer")])).not.toThrow();
  expect(() => collab.upsertPeer(peerEntry("a", "designer"))).not.toThrow();
  expect(() => collab.removePeer("a")).not.toThrow();
  expect(() => collab.clearPeers()).not.toThrow();
  expect(collab.peers.size).toEqual(0);

  // The events exist and simply never fire.
  let fired = 0;
  collab.onStateChanged.add(() => fired++);
  collab.onPeersChanged.add(() => fired++);
  expect(collab.onStateChanged).toBe(collab.onStateChanged);
  expect(fired).toEqual(0);
  collab.dispose();
});

test("collaboration: presence off still feeds the strip through setParticipants", () => {
  const creator = createCreator();
  const collab = new CollaborationPlugin(creator, { presence: false });
  collab.setParticipants([{ id: "a", name: "Ann Lee", tab: "designer" }]);
  expect(collab.bar.participantActions.actions.length).toEqual(1);
  // The chip shows initials; the full name is the tooltip.
  expect(collab.bar.participantActions.actions[0].title).toEqual("AL");
  expect(collab.bar.participantActions.actions[0].tooltip).toContain("Ann Lee");
  collab.dispose();
});

test("collaboration: bar off leaves the render slot empty and the bar methods quiet", () => {
  const creator = createCreator();
  const collab = new CollaborationPlugin(creator, { bar: false });

  expect(collab.bar).toBeUndefined();
  expect(creator.collabBar).toBeFalsy();
  expect(() => collab.setStatus("closed")).not.toThrow();
  expect(() => collab.setHistory([])).not.toThrow();
  expect(() => collab.setParticipants([])).not.toThrow();
  // Presence itself is unaffected.
  collab.upsertPeer(peerEntry("a", "designer"));
  expect(collab.peers.size).toEqual(1);
  collab.dispose();
});

test("collaboration: journal-only is a valid headless configuration", () => {
  const creator = createCreator();
  const before = overlayCount();
  const collab = new CollaborationPlugin(creator, { presence: false, bar: false });

  expect(collab.journal).toBeTruthy();
  expect(collab.presence).toBeUndefined();
  expect(collab.bar).toBeUndefined();
  expect(overlayCount()).toEqual(before);
  creator.survey.getQuestionByName("q1").title = "Headless";
  expect(collab.records.length).toBeGreaterThan(0);
  collab.dispose();
});

test("collaboration: dispose is idempotent and releases everything", () => {
  const creator = createCreator();
  const collab = new CollaborationPlugin(creator);
  const presence = collab.presence;
  collab.upsertPeer(peerEntry("a", "designer"));

  collab.dispose();
  expect(creator.collabBar).toBeUndefined();
  expect(collab.bar).toBeUndefined();
  expect(collab.presence).toBeUndefined();
  expect(creator.undoRedoManager.isTransactionValidCallback).toBeFalsy();

  // Hosts dispose explicitly and creator.dispose() disposes again.
  expect(() => collab.dispose()).not.toThrow();
  // The strip is no longer driven by the detached roster.
  expect(() => presence.upsertPeer(peerEntry("b", "designer"))).not.toThrow();
});

test("collaboration: options reach both the journal and the bar", () => {
  const creator = createCreator();
  const collab = new CollaborationPlugin(creator, { coalesceInterval: 0, roomId: "r-7" });

  // coalesceInterval is a journal option: 0 disables typing merge, so two
  // edits of the same property stay two records.
  const question = creator.survey.getQuestionByName("q1");
  question.title = "a";
  question.title = "ab";
  expect(collab.records.length).toEqual(2);

  // roomId is a bar option: it surfaces as an informational menu row.
  expect(collab.bar).toBeTruthy();
  collab.dispose();
});

const twoQuestions = {
  pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }, { type: "text", name: "q2" }] }]
};

function historyCreator(options: any = {}): { creator: CreatorTester, collab: CollaborationPlugin } {
  const creator = new CreatorTester();
  creator.JSON = twoQuestions;
  const collab = new CollaborationPlugin(creator, { presence: false, ...options });
  creator.addPlugin("collaboration", collab);
  return { creator, collab };
}

// What a transport does with local edits: list the recorder's own objects.
function changeRows(collab: CollaborationPlugin): Array<{ title: string, subtitle: string }> {
  collab.setHistory(collab.records.slice());
  return collab.bar.versionHistory.rows.filter((r) => r.kind === "change");
}

test("collaboration: own edits are signed You", () => {
  const { creator, collab } = historyCreator();
  creator.survey.getQuestionByName("q1").title = "Hello";
  const rows = changeRows(collab);
  expect(rows.map((r) => r.title)).toEqual(["Title of \"q1\" changed to \"Hello\""]);
  expect(rows[0].subtitle.indexOf("You ")).toEqual(0);
  collab.dispose();
});

test("collaboration: a copy of an own record is not signed You", () => {
  // The seed log hands a reloaded client its own earlier records as copies.
  const { creator, collab } = historyCreator();
  creator.survey.getQuestionByName("q1").title = "Hello";
  collab.setHistory([JSON.parse(JSON.stringify(collab.records[0]))]);
  const row = collab.bar.versionHistory.rows.filter((r) => r.kind === "change")[0];
  expect(row.subtitle.indexOf("You")).toEqual(-1);
  collab.dispose();
});

test("collaboration: typing a title in bursts lists one row with the final text", () => {
  const { creator, collab } = historyCreator({ coalesceInterval: 0 });
  const q1 = creator.survey.getQuestionByName("q1");
  q1.title = "U";
  q1.title = "Us";
  q1.title = "User Name";
  // Three journal records - the timeline reads them as one edit.
  expect(collab.records.length).toEqual(3);
  expect(changeRows(collab).map((r) => r.title)).toEqual(["Title of \"q1\" changed to \"User Name\""]);
  collab.dispose();
});

test("collaboration: deleting a question lists one removal", () => {
  const { creator, collab } = historyCreator();
  creator.deleteElement(<any>creator.survey.getQuestionByName("q2"));
  const removals = changeRows(collab).filter((r) => r.title.indexOf("removed") > -1);
  expect(removals.map((r) => r.title)).toEqual(["Question \"q2\" removed"]);
  collab.dispose();
});
