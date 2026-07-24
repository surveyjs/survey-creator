import { SurveyModel } from "survey-core";
import { CreatorTester } from "../creator-tester";
import { UndoRedoSyncPlugin, ISyncMessage, ISyncStackSnapshot } from "../../src/collaboration";
import { UndoRedoManager } from "../../src/plugins/undo-redo/undo-redo-manager";

// Each CreatorTester gets its own UndoRedoSyncPlugin attached on first
// access. Tests use `syncOf(creator)` to set `onSerializedChanges`,
// invoke `applySerialized`, or grab the stack snapshot helpers i.e.
// the *plugin* is the entry point for collaborative wire format, not
// `creator.undoRedoManager`.
const syncPluginsByCreator = new WeakMap<CreatorTester, UndoRedoSyncPlugin>();
function syncOf(creator: CreatorTester): UndoRedoSyncPlugin {
  let plugin = syncPluginsByCreator.get(creator);
  if (!plugin) {
    plugin = new UndoRedoSyncPlugin(creator);
    creator.addPlugin("undoredoSync", plugin);
    syncPluginsByCreator.set(creator, plugin);
  }
  return plugin;
}

// Wire two creators' undo/redo through the sync plugin via plain JSON,
// simulating a transport like WebSocket / SignalR. The bridge is
// intentionally trivial: the plugin produces and consumes
// JSON-serializable messages.
function makeCreators() {
  const creatorA = new CreatorTester();
  const creatorB = new CreatorTester();
  const startJSON = { pages: [{ name: "page1" }] };
  creatorA.JSON = startJSON;
  creatorB.JSON = startJSON;

  syncOf(creatorA).onSerializedChanges = (msg: ISyncMessage) => {
    syncOf(creatorB).applySerialized(JSON.parse(JSON.stringify(msg)));
  };
  syncOf(creatorB).onSerializedChanges = (msg: ISyncMessage) => {
    syncOf(creatorA).applySerialized(JSON.parse(JSON.stringify(msg)));
  };
  return { creatorA, creatorB };
}

test("changes propagate from one creator to the other via JSON messages", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.title = "Shared title";
  expect(creatorB.survey.title).toEqual("Shared title");

  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();
  expect(creatorB.survey.getQuestionByName("q1").getType()).toEqual("text");

  creatorA.survey.getQuestionByName("q1").title = "Question one";
  expect(creatorB.survey.getQuestionByName("q1").title).toEqual("Question one");

  creatorA.deleteElement(creatorA.survey.getQuestionByName("q1"));
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();
});

test("changes propagate bidirectionally without echo loops", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.title = "Title from A";
  expect(creatorB.survey.title).toEqual("Title from A");

  creatorB.survey.description = "Description from B";
  expect(creatorA.survey.description).toEqual("Description from B");

  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  creatorB.survey.pages[0].addNewQuestion("checkbox", "q2");
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();
  expect(creatorA.survey.getQuestionByName("q2")).toBeTruthy();

  // Each side keeps the full shared linear stack of all four edits (A's
  // two and B's two), in the order they were applied. Undoing on A walks
  // back through every entry, regardless of who authored it.
  let undoCount = 0;
  while(creatorA.undoRedoManager.canUndo()) {
    creatorA.undo();
    undoCount++;
  }
  expect(undoCount).toEqual(4);
  // Symmetric: B also drained its mirror of the same stack along the way
  // (each A.undo broadcast back to B as {kind:"undo", id}), so B has
  // nothing left to undo either.
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
});

test("undo/redo on one creator is reflected on the other", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.title = "Title v1";
  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();

  creatorA.undo();
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();

  creatorA.undo();
  expect(creatorB.survey.title).toEqual("");

  creatorA.redo();
  expect(creatorB.survey.title).toEqual("Title v1");

  creatorA.redo();
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();
  expect(creatorB.survey.getQuestionByName("q1").getType()).toEqual("text");

  creatorB.survey.pages[0].addNewQuestion("checkbox", "q2");
  expect(creatorA.survey.getQuestionByName("q2")).toBeTruthy();
  creatorB.undo();
  expect(creatorA.survey.getQuestionByName("q2")).toBeFalsy();
});

test("remote-applied changes enter the shared undo stack on B", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.title = "From A";
  creatorA.survey.pages[0].addNewQuestion("text", "q1");

  // Shared stack: the two remote transactions are now undoable on B.
  // (Echo prevention is structural: peer-applied changes do not
  // re-broadcast, so allowing them onto the stack does not loop.)
  expect(creatorB.undoRedoManager.canUndo()).toBeTruthy();

  // Undoing on B walks back from the top of the shared stack (the
  // question add) and mirrors back to A.
  creatorB.undo();
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();
  expect(creatorA.survey.getQuestionByName("q1")).toBeFalsy();

  creatorB.undo();
  expect(creatorB.survey.title).toEqual("");
  expect(creatorA.survey.title).toEqual("");
});

test("undo/redo of nested change inside a matrix column propagates", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("matrixdynamic", "m1");
  const matrixA: any = creatorA.survey.getQuestionByName("m1");
  matrixA.addColumn("col1");
  matrixA.columns[0].cellType = "checkbox";

  const matrixB: any = creatorB.survey.getQuestionByName("m1");
  expect(matrixB.columns[0].cellType).toEqual("checkbox");

  creatorA.undo();
  expect(matrixA.columns[0].cellType).toEqual(matrixB.columns[0].cellType);
  expect(matrixB.columns[0].cellType).not.toEqual("checkbox");

  creatorA.redo();
  expect(matrixB.columns[0].cellType).toEqual("checkbox");
});

test("undo of matrix-column add removes the column on the peer", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("matrixdynamic", "m1");
  const matrixA: any = creatorA.survey.getQuestionByName("m1");
  const beforeCount = matrixA.columns.length;

  matrixA.addColumn("colX");
  const matrixB: any = creatorB.survey.getQuestionByName("m1");
  expect(matrixB.columns.length).toEqual(beforeCount + 1);

  creatorA.undo();
  expect(matrixA.columns.length).toEqual(beforeCount);
  expect(matrixB.columns.length).toEqual(beforeCount);
  expect(matrixB.columns.find((c: any) => c.name === "colX")).toBeFalsy();

  creatorA.redo();
  expect(matrixB.columns.map((c: any) => c.name)).toEqual(matrixA.columns.map((c: any) => c.name));
});

test("undo of page add on A removes the page on B", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.addNewPage("page2");
  expect(creatorB.survey.getPageByName("page2")).toBeTruthy();

  creatorA.undo();
  expect(creatorA.survey.getPageByName("page2")).toBeFalsy();
  expect(creatorB.survey.getPageByName("page2")).toBeFalsy();
  expect(creatorB.survey.pages).toHaveLength(creatorA.survey.pages.length);

  creatorA.redo();
  expect(creatorA.survey.getPageByName("page2")).toBeTruthy();
  expect(creatorB.survey.getPageByName("page2")).toBeTruthy();
});

test("converting a question type and then undoing restores the original on the peer", () => {
  // Question-type conversion produces a transaction with two array actions:
  // delete the old question at index N, insert the new question at index N.
  // On undo, Transaction.rollback() iterates actions in reverse, so the
  // serialized stream must also be reversed; otherwise the peer applies
  // `insert old, delete index N` and the just-restored question is
  // immediately wiped, leaving an empty page.
  const { creatorA, creatorB } = makeCreators();

  const q1 = creatorA.survey.pages[0].addNewQuestion("text", "question1");
  q1["inputType"] = "date";
  expect(creatorB.survey.getQuestionByName("question1").getType()).toEqual("text");
  expect(creatorB.survey.getQuestionByName("question1")["inputType"]).toEqual("date");

  creatorA.selectElement(q1);
  creatorA.convertCurrentQuestion("comment");
  expect(creatorA.survey.getQuestionByName("question1").getType()).toEqual("comment");
  expect(creatorB.survey.getQuestionByName("question1")).toBeTruthy();
  expect(creatorB.survey.getQuestionByName("question1").getType()).toEqual("comment");
  expect(creatorB.survey.pages[0].elements).toHaveLength(1);

  creatorA.undo();
  expect(creatorA.survey.getQuestionByName("question1").getType()).toEqual("text");
  expect(creatorB.survey.pages[0].elements).toHaveLength(1);
  expect(creatorB.survey.getQuestionByName("question1")).toBeTruthy();
  expect(creatorB.survey.getQuestionByName("question1").getType()).toEqual("text");
  expect(creatorB.survey.getQuestionByName("question1")["inputType"]).toEqual("date");

  creatorA.redo();
  expect(creatorB.survey.pages[0].elements).toHaveLength(1);
  expect(creatorB.survey.getQuestionByName("question1").getType()).toEqual("comment");
});

test("shared linear stack: undo on either creator rolls back the globally-last transaction", () => {
  // The undo stack is collaborative: every transaction (from any peer)
  // joins the same ordered list keyed by transaction id. `undo()` always
  // targets the topmost entry regardless of which creator authored it.
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.title = "A1"; // top after this step: A1
  creatorB.survey.description = "B1"; // top after this step: B1

  expect(creatorA.survey.title).toEqual("A1");
  expect(creatorA.survey.description).toEqual("B1");
  expect(creatorB.survey.title).toEqual("A1");
  expect(creatorB.survey.description).toEqual("B1");

  // The newest transaction was B's `description` edit. A.undo() rolls
  // *that* back, not A's own older `title` edit.
  creatorA.undo();
  expect(creatorA.survey.description).toEqual("");
  expect(creatorB.survey.description).toEqual("");
  // A's earlier edit is untouched on both sides.
  expect(creatorA.survey.title).toEqual("A1");
  expect(creatorB.survey.title).toEqual("A1");

  // The new top is A's title edit; B.undo() rolls that back.
  creatorB.undo();
  expect(creatorA.survey.title).toEqual("");
  expect(creatorB.survey.title).toEqual("");

  expect(creatorA.undoRedoManager.canUndo()).toBeFalsy();
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();

  // Redo is symmetric and also globally-ordered: B's edit redo'd from A
  // first (since it was rolled back last), then A's edit redo'd from B.
  creatorA.redo();
  expect(creatorA.survey.title).toEqual("A1");
  expect(creatorB.survey.title).toEqual("A1");
  creatorB.redo();
  expect(creatorA.survey.description).toEqual("B1");
  expect(creatorB.survey.description).toEqual("B1");
});

test("outgoing messages are plain JSON (no class instances, no cycles)", () => {
  const creator = new CreatorTester();
  creator.JSON = { pages: [{ name: "page1" }] };
  const messages: ISyncMessage[] = [];
  syncOf(creator).onSerializedChanges = (msg) => messages.push(msg);

  creator.survey.title = "Hello";
  creator.survey.pages[0].addNewQuestion("text", "q1");

  expect(messages.length).toBeGreaterThan(0);
  for (const msg of messages) {
    // Round-tripping through JSON must not throw and must preserve content.
    const roundTripped = JSON.parse(JSON.stringify(msg));
    expect(roundTripped).toEqual(msg);
  }
});

test("page add/remove propagates between creators", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.addNewPage("page2");
  expect(creatorB.survey.pages).toHaveLength(2);
  expect(creatorB.survey.getPageByName("page2")).toBeTruthy();

  creatorA.survey.getPageByName("page2").addNewQuestion("text", "q_on_p2");
  expect(creatorB.survey.getQuestionByName("q_on_p2")).toBeTruthy();
  expect(creatorB.survey.getQuestionByName("q_on_p2").page.name).toEqual("page2");

  creatorB.survey.addNewPage("page3");
  expect(creatorA.survey.getPageByName("page3")).toBeTruthy();
  expect(creatorA.survey.pages).toHaveLength(3);

  creatorA.survey.removePage(creatorA.survey.getPageByName("page2"));
  expect(creatorB.survey.getPageByName("page2")).toBeFalsy();
  expect(creatorB.survey.getQuestionByName("q_on_p2")).toBeFalsy();
  expect(creatorB.survey.pages).toHaveLength(2);
});

test("matrix add/remove propagates between creators", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("matrixdynamic", "m1");
  const remoteMatrix = creatorB.survey.getQuestionByName("m1");
  expect(remoteMatrix).toBeTruthy();
  expect(remoteMatrix.getType()).toEqual("matrixdynamic");

  creatorA.deleteElement(creatorA.survey.getQuestionByName("m1"));
  expect(creatorB.survey.getQuestionByName("m1")).toBeFalsy();
});

test("matrix column add/remove propagates between creators", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("matrixdynamic", "m1");
  const matrixA: any = creatorA.survey.getQuestionByName("m1");
  const matrixB: any = creatorB.survey.getQuestionByName("m1");
  expect(matrixB).toBeTruthy();

  matrixA.addColumn("col1");
  expect(matrixB.columns).toHaveLength(matrixA.columns.length);
  expect(matrixB.columns[matrixB.columns.length - 1].name).toEqual("col1");

  matrixA.addColumn("col2");
  expect(matrixB.columns.map((c: any) => c.name)).toEqual(matrixA.columns.map((c: any) => c.name));

  // Remove first column on B, removal must propagate to A.
  matrixB.columns.splice(0, 1);
  expect(matrixA.columns.map((c: any) => c.name)).toEqual(matrixB.columns.map((c: any) => c.name));
});

test("changes inside matrix column propagate between creators", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("matrixdynamic", "m1");
  const matrixA: any = creatorA.survey.getQuestionByName("m1");
  const matrixB: any = creatorB.survey.getQuestionByName("m1");

  matrixA.addColumn("col1");
  matrixA.columns[0].title = "Column One";
  expect(matrixB.columns[0].title).toEqual("Column One");

  matrixA.columns[0].cellType = "checkbox";
  expect(matrixB.columns[0].cellType).toEqual("checkbox");

  // Reverse direction.
  matrixB.columns[0].title = "Edited on B";
  expect(matrixA.columns[0].title).toEqual("Edited on B");
});

test("deferred wiring: second creator joins after edits, then syncs", () => {
  // Stage 1: one creator works alone, no peer wired yet.
  const creatorA = new CreatorTester();
  creatorA.JSON = { pages: [{ name: "page1" }] };
  creatorA.survey.title = "Pre-sync title";
  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  creatorA.survey.getQuestionByName("q1").title = "Pre-sync Q1";

  // Stage 2: snapshot A's state to bootstrap B (this is what a real client
  // would receive on join over the wire), then wire the bidirectional pipe.
  const snapshot = JSON.parse(JSON.stringify(creatorA.JSON));
  const creatorB = new CreatorTester();
  creatorB.JSON = snapshot;

  syncOf(creatorA).onSerializedChanges = (msg) =>
    syncOf(creatorB).applySerialized(JSON.parse(JSON.stringify(msg)));
  syncOf(creatorB).onSerializedChanges = (msg) =>
    syncOf(creatorA).applySerialized(JSON.parse(JSON.stringify(msg)));

  // Initial bootstrap state must match.
  expect(creatorB.survey.title).toEqual("Pre-sync title");
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();
  expect(creatorB.survey.getQuestionByName("q1").title).toEqual("Pre-sync Q1");

  // Stage 3: subsequent edits on either side must propagate normally.
  creatorA.survey.title = "Post-sync title";
  expect(creatorB.survey.title).toEqual("Post-sync title");

  creatorB.survey.pages[0].addNewQuestion("checkbox", "q2");
  expect(creatorA.survey.getQuestionByName("q2")).toBeTruthy();

  creatorA.survey.getQuestionByName("q1").title = "Edited after join";
  expect(creatorB.survey.getQuestionByName("q1").title).toEqual("Edited after join");

  creatorA.deleteElement(creatorA.survey.getQuestionByName("q1"));
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();
});

test("nested inserts inside a parent-insert transaction are deduplicated by name", () => {
  // Reproduces the scenario the array-insert dedup branch in
  // applyAction is designed for: a single transaction contains both the
  // parent insert (whose JSON payload already carries the full subtree)
  // and the redundant nested child inserts emitted while the parent was
  // being initialized. Without dedup the children would be applied twice
  // and either duplicate or throw.
  const { creatorB } = makeCreators();

  const message: ISyncMessage = {
    kind: "transaction",
    actions: [
      {
        kind: "array",
        locator: "/pages/1",
        value: [
          {
            __syncType: "page",
            __syncJson: {
              name: "page2",
              elements: [
                { type: "text", name: "nested_q1" },
                { type: "checkbox", name: "nested_q2" }
              ]
            }
          }
        ]
      },
      {
        kind: "array",
        locator: "/pages/1/elements/0",
        value: [
          { __syncType: "text", __syncJson: { name: "nested_q1" } },
          { __syncType: "checkbox", __syncJson: { name: "nested_q2" } }
        ]
      }
    ]
  };

  syncOf(creatorB).applySerialized(JSON.parse(JSON.stringify(message)));

  const page2: any = creatorB.survey.getPageByName("page2");
  expect(page2).toBeTruthy();
  // Each nested question must appear exactly once even though the
  // transaction "describes" them twice.
  expect(page2.elements).toHaveLength(2);
  const names = page2.elements.map((q: any) => q.name);
  expect(names).toEqual(["nested_q1", "nested_q2"]);
  expect(creatorB.survey.getQuestionByName("nested_q1").getType()).toEqual("text");
  expect(creatorB.survey.getQuestionByName("nested_q2").getType()).toEqual("checkbox");
});

test("successive title edits (typing 'Hello') propagate the full final value", () => {
  // Simulates a user typing into the title field one character at a time.
  // The undo/redo manager merges consecutive string edits within a short
  // time window into a single transaction (UndoRedoAction.tryMerge).
  // After the burst of edits the peer must end up with the full final
  // value, and the last outgoing message must carry that full value.
  const creatorA = new CreatorTester();
  const creatorB = new CreatorTester();
  creatorA.JSON = { pages: [{ name: "page1" }] };
  creatorB.JSON = { pages: [{ name: "page1" }] };

  const outgoing: ISyncMessage[] = [];
  syncOf(creatorA).onSerializedChanges = (msg) => {
    outgoing.push(JSON.parse(JSON.stringify(msg)));
    syncOf(creatorB).applySerialized(JSON.parse(JSON.stringify(msg)));
  };
  syncOf(creatorB).onSerializedChanges = (msg) =>
    syncOf(creatorA).applySerialized(JSON.parse(JSON.stringify(msg)));

  const word = "Hello";
  for (let i = 1; i <= word.length; i++) {
    creatorA.survey.title = word.substring(0, i);
  }

  // Final visible state on both sides must be the full word.
  expect(creatorA.survey.title).toEqual("Hello");
  expect(creatorB.survey.title).toEqual("Hello");

  // The very last broadcast must carry the final value, regardless of how
  // many intermediate messages were sent (merging may collapse some of
  // them).
  expect(outgoing.length).toBeGreaterThan(0);
  const last = outgoing[outgoing.length - 1] as any;
  const lastAction = last.actions[last.actions.length - 1];
  expect(lastAction.kind).toEqual("property");
  // The locator ends with the property name (and, since `title` is
  // localizable, a trailing locale segment: "default" for the default
  // locale).
  expect((lastAction as any).locator).toEqual("/title/default");
  expect((lastAction as any).value).toEqual("Hello");
});

test("renaming a text question name propagates to the peer", () => {
  // The `name` property is the identity used by name-based locators in the
  // serializer. A rename must propagate so that follow-up edits addressed
  // by the new name resolve correctly on the peer.
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();

  creatorA.survey.getQuestionByName("q1").name = "q1_renamed";

  // The old name is gone and the new name resolves on both sides.
  expect(creatorA.survey.getQuestionByName("q1")).toBeFalsy();
  expect(creatorA.survey.getQuestionByName("q1_renamed")).toBeTruthy();
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();
  expect(creatorB.survey.getQuestionByName("q1_renamed")).toBeTruthy();

  // Subsequent edits addressed by the new name must still propagate.
  creatorA.survey.getQuestionByName("q1_renamed").title = "Renamed title";
  expect(creatorB.survey.getQuestionByName("q1_renamed").title).toEqual("Renamed title");

  // And edits from B reach A by the new name as well.
  creatorB.survey.getQuestionByName("q1_renamed").title = "Edited on B";
  expect(creatorA.survey.getQuestionByName("q1_renamed").title).toEqual("Edited on B");
});

test("locale change and per-locale text edits propagate between creators", () => {
  // Localizable strings keep one value per locale. When a creator switches
  // its active locale and edits a localizable property, the peer must see
  // both the new active locale and the per-locale text.
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  const qA: any = creatorA.survey.getQuestionByName("q1");
  const qB: any = creatorB.survey.getQuestionByName("q1");

  // Default locale edit on A is visible on B in the same default locale.
  qA.title = "Title in default";
  expect(qB.title).toEqual("Title in default");

  // Switching locale on A must propagate to B so that subsequent reads of
  // localizable properties resolve against the same active locale.
  creatorA.survey.locale = "de";
  expect(creatorB.survey.locale).toEqual("de");

  // Now an edit on A writes the German text; B (also in "de") sees it.
  qA.title = "Titel auf Deutsch";
  expect(qB.title).toEqual("Titel auf Deutsch");

  // The default-locale text must be preserved on both sides.
  expect(qA.locTitle.getLocaleText("")).toEqual("Title in default");
  expect(qB.locTitle.getLocaleText("")).toEqual("Title in default");
  expect(qA.locTitle.getLocaleText("de")).toEqual("Titel auf Deutsch");
  expect(qB.locTitle.getLocaleText("de")).toEqual("Titel auf Deutsch");

  // An edit from B in the active locale propagates back to A.
  qB.title = "Anderer Titel";
  expect(qA.title).toEqual("Anderer Titel");

  // Switching locale back on B propagates and reveals the original default
  // text on both sides.
  creatorB.survey.locale = "";
  expect(creatorA.survey.locale).toEqual("");
  expect(qA.title).toEqual("Title in default");
  expect(qB.title).toEqual("Title in default");

  // Undo on A rolls back the last German edit; both sides agree.
  creatorA.survey.locale = "de";
  expect(qA.title).toEqual("Anderer Titel");
  expect(qB.title).toEqual("Anderer Titel");
  creatorA.undo();
  expect(qA.title).toEqual(qB.title);
  expect(qA.title).not.toEqual("Anderer Titel");
});

test("editing a non-active locale via the translation tab propagates that locale's text", () => {
  // Reproduces the bug observed in the Translation tab: the active locale
  // on A is "es" with title "question2", and the user edits the English
  // text to "question1". The message sent to the peer must carry the
  // English text "question1" (and write it into the "en" slot), NOT the
  // currently-active "es" text "question2".
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  const qA: any = creatorA.survey.getQuestionByName("q1");
  const qB: any = creatorB.survey.getQuestionByName("q1");

  // Make "es" the active locale on A and set the Spanish title.
  creatorA.survey.locale = "es";
  qA.title = "question2";
  expect(qB.locTitle.getLocaleText("es")).toEqual("question2");

  // Capture broadcasts so we can also assert the wire format.
  const outgoing: ISyncMessage[] = [];
  const previous = syncOf(creatorA).onSerializedChanges;
  syncOf(creatorA).onSerializedChanges = (msg) => {
    outgoing.push(JSON.parse(JSON.stringify(msg)));
    previous && previous(msg);
  };

  // Translation-tab edit: write the English text directly while the active
  // locale is still "es". The Spanish value must not be touched.
  qA.locTitle.setLocaleText("en", "question1");

  // Local sanity: A keeps both locales.
  expect(qA.locTitle.getLocaleText("es")).toEqual("question2");
  expect(qA.locTitle.getLocaleText("en")).toEqual("question1");

  // Peer must see the English edit in the English slot, and the Spanish
  // text must remain "question2".
  expect(qB.locTitle.getLocaleText("en")).toEqual("question1");
  expect(qB.locTitle.getLocaleText("es")).toEqual("question2");

  // And the broadcast itself must carry "question1", not the active-locale
  // "question2".
  expect(outgoing.length).toBeGreaterThan(0);
  const last = outgoing[outgoing.length - 1] as any;
  const lastAction: any = last.actions[last.actions.length - 1];
  // The locator must address the `en` slot of the question's `title`,
  // not the active "es" locale.
  expect(lastAction.locator).toEqual("/pages/0/elements/0/title/en");
  // The transmitted value must reflect the edited "en" text. The
  // active-locale text "question2" must NOT be what gets sent.
  const flat = JSON.stringify(lastAction.value);
  expect(flat).toContain("question1");
  expect(lastAction.value).not.toEqual("question2");
});
test("paneldynamic: adding a question to the template propagates to the peer", () => {
  // The template panel of a paneldynamic question has no `parent`/`getOwner`
  // back to its host; it is only reachable through `parentQuestion` and is
  // serialized on the host as `templateElements`. The serializer must
  // transparently rewrite changes on the template panel to the
  // corresponding paneldynamic-level property so the peer receives them.
  const { creatorA, creatorB } = makeCreators();
  creatorA.survey.pages[0].addNewQuestion("paneldynamic", "pd1");
  const pdA: any = creatorA.survey.getQuestionByName("pd1");
  const pdB: any = creatorB.survey.getQuestionByName("pd1");
  expect(pdB).toBeTruthy();

  pdA.template.addNewQuestion("text", "q_in_pd");
  expect(pdB.templateElements).toHaveLength(1);
  expect(pdB.templateElements[0].name).toEqual("q_in_pd");
  expect(pdB.templateElements[0].getType()).toEqual("text");
});

test("paneldynamic: edits on a templated question propagate to the peer", () => {
  const { creatorA, creatorB } = makeCreators();
  creatorA.survey.pages[0].addNewQuestion("paneldynamic", "pd1");
  const pdA: any = creatorA.survey.getQuestionByName("pd1");
  pdA.template.addNewQuestion("text", "q_in_pd");
  const pdB: any = creatorB.survey.getQuestionByName("pd1");

  pdA.templateElements[0].title = "Nested title";
  expect(pdB.templateElements[0].title).toEqual("Nested title");

  pdA.templateElements[0].isRequired = true;
  expect(pdB.templateElements[0].isRequired).toEqual(true);
});

test("paneldynamic: templateTitle change on the template propagates", () => {
  const { creatorA, creatorB } = makeCreators();
  creatorA.survey.pages[0].addNewQuestion("paneldynamic", "pd1");
  const pdA: any = creatorA.survey.getQuestionByName("pd1");
  const pdB: any = creatorB.survey.getQuestionByName("pd1");
  pdA.template.title = "T title";
  expect(pdB.templateTitle).toEqual("T title");
});

test("paneldynamic: deleting a templated question propagates to the peer", () => {
  const { creatorA, creatorB } = makeCreators();
  creatorA.survey.pages[0].addNewQuestion("paneldynamic", "pd1");
  const pdA: any = creatorA.survey.getQuestionByName("pd1");
  pdA.template.addNewQuestion("text", "q_in_pd");
  const pdB: any = creatorB.survey.getQuestionByName("pd1");
  expect(pdB.templateElements).toHaveLength(1);

  pdA.templateElements[0].delete();
  expect(pdB.templateElements).toHaveLength(0);
});

test("paneldynamic: undo/redo of nested add round-trips on the peer", () => {
  const { creatorA, creatorB } = makeCreators();
  creatorA.survey.pages[0].addNewQuestion("paneldynamic", "pd1");
  const pdA: any = creatorA.survey.getQuestionByName("pd1");
  pdA.template.addNewQuestion("text", "q_in_pd");
  const pdB: any = creatorB.survey.getQuestionByName("pd1");
  expect(pdB.templateElements).toHaveLength(1);

  creatorA.undo();
  expect(pdA.templateElements).toHaveLength(0);
  expect(pdB.templateElements).toHaveLength(0);

  creatorA.redo();
  expect(pdB.templateElements).toHaveLength(1);
  expect(pdB.templateElements[0].name).toEqual("q_in_pd");
});

// ---------------------------------------------------------------------------
// Shared collaborative undo/redo stack
// ---------------------------------------------------------------------------
// The undo stack is a single ordered list of transactions keyed by id and
// mirrored on every peer. Local undo/redo of *any* entry (own or remote)
// is broadcast as a short {kind:"undo"|"redo", id} message; peers locate
// the entry by id and replay/rollback against their own materialized copy.

test("B can undo a transaction authored by A; the rollback reflects on A", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();
  expect(creatorB.undoRedoManager.canUndo()).toBeTruthy();

  creatorB.undo();
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();
  expect(creatorA.survey.getQuestionByName("q1")).toBeFalsy();

  // Redo from A also works: same shared entry, both sides re-apply.
  expect(creatorA.undoRedoManager.canRedo()).toBeTruthy();
  creatorA.redo();
  expect(creatorA.survey.getQuestionByName("q1")).toBeTruthy();
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();
});

test("a fresh local edit after a remote tx invalidates the redo tail on both peers", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.title = "T1"; // shared stack: [T1]
  creatorA.undo(); // []
  expect(creatorA.undoRedoManager.canRedo()).toBeTruthy();
  expect(creatorB.undoRedoManager.canRedo()).toBeTruthy();

  // A new edit (from B) lands on top of the empty applied region and
  // truncates the redo tail on both sides simultaneously.
  creatorB.survey.description = "D1";
  expect(creatorA.undoRedoManager.canRedo()).toBeFalsy();
  expect(creatorB.undoRedoManager.canRedo()).toBeFalsy();
  expect(creatorA.undoRedoManager.canUndo()).toBeTruthy();
  expect(creatorB.undoRedoManager.canUndo()).toBeTruthy();
});

test("undo broadcast carries {kind:\"undo\", id} matching the original transaction id", () => {
  const creatorA = new CreatorTester();
  const creatorB = new CreatorTester();
  creatorA.JSON = { pages: [{ name: "page1" }] };
  creatorB.JSON = { pages: [{ name: "page1" }] };

  const outgoing: ISyncMessage[] = [];
  syncOf(creatorA).onSerializedChanges = (msg) => {
    outgoing.push(JSON.parse(JSON.stringify(msg)));
    syncOf(creatorB).applySerialized(JSON.parse(JSON.stringify(msg)));
  };
  syncOf(creatorB).onSerializedChanges = (msg) => {
    syncOf(creatorA).applySerialized(JSON.parse(JSON.stringify(msg)));
  };

  creatorA.survey.title = "Hello";
  const forward = outgoing[0];
  expect(forward.kind).toEqual("transaction");
  const forwardId = (forward as any).id;
  expect(typeof forwardId).toEqual("string");
  expect(forwardId.length).toBeGreaterThan(0);

  creatorA.undo();

  // The most recent outgoing message must be the undo command keyed by
  // the same id: no replayed payload, just a pointer into the shared
  // stack.
  const undoMsg = outgoing[outgoing.length - 1];
  expect(undoMsg.kind).toEqual("undo");
  expect((undoMsg as any).id).toEqual(forwardId);
  expect((undoMsg as any).actions).toBeUndefined();
});

test("a burst of merged title edits collapses to a single shared-stack entry", () => {
  // Typing into a title fires many property changes that the manager
  // merges into one local transaction. The peer must also collapse them
  // into the same shared-stack entry (matched by id), so one undo on
  // either side rolls back the entire word at once.
  const { creatorA, creatorB } = makeCreators();

  const word = "Hello";
  for (let i = 1; i <= word.length; i++) {
    creatorA.survey.title = word.substring(0, i);
  }
  expect(creatorA.survey.title).toEqual("Hello");
  expect(creatorB.survey.title).toEqual("Hello");

  creatorB.undo();
  expect(creatorA.survey.title).toEqual("");
  expect(creatorB.survey.title).toEqual("");
  expect(creatorA.undoRedoManager.canUndo()).toBeFalsy();
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
});

test("undo of a remote transaction does not re-broadcast a reverse transaction", () => {
  // A remote-undo on B must travel as {kind:"undo", id} *once*. It must
  // not be re-emitted as a fresh transaction back to A (that would echo
  // forever or, worse, look like a new edit on the stack).
  const creatorA = new CreatorTester();
  const creatorB = new CreatorTester();
  creatorA.JSON = { pages: [{ name: "page1" }] };
  creatorB.JSON = { pages: [{ name: "page1" }] };

  const aSent: ISyncMessage[] = [];
  const bSent: ISyncMessage[] = [];
  syncOf(creatorA).onSerializedChanges = (msg) => {
    aSent.push(JSON.parse(JSON.stringify(msg)));
    syncOf(creatorB).applySerialized(JSON.parse(JSON.stringify(msg)));
  };
  syncOf(creatorB).onSerializedChanges = (msg) => {
    bSent.push(JSON.parse(JSON.stringify(msg)));
    syncOf(creatorA).applySerialized(JSON.parse(JSON.stringify(msg)));
  };

  creatorA.survey.title = "X";
  expect(aSent.length).toEqual(1);
  expect(bSent.length).toEqual(0);

  creatorB.undo();
  // Exactly one outbound message from B, of kind "undo".
  expect(bSent.length).toEqual(1);
  expect(bSent[0].kind).toEqual("undo");
  // A applied that undo and did NOT re-broadcast.
  expect(aSent.length).toEqual(1);

  expect(creatorA.survey.title).toEqual("");
  expect(creatorB.survey.title).toEqual("");
});

test("interleaved local + remote edits stay in shared linear order on undo", () => {
  // A does, B does, A does: shared stack is [A1, B1, A2]. Undo from B
  // pops A2 first (top), then B1, then A1.
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.title = "A1";
  creatorB.survey.description = "B1";
  creatorA.survey.pages[0].addNewQuestion("text", "qA2");

  creatorB.undo();
  expect(creatorA.survey.getQuestionByName("qA2")).toBeFalsy();
  expect(creatorB.survey.getQuestionByName("qA2")).toBeFalsy();
  expect(creatorA.survey.title).toEqual("A1");
  expect(creatorB.survey.description).toEqual("B1");

  creatorB.undo();
  expect(creatorA.survey.description).toEqual("");
  expect(creatorB.survey.description).toEqual("");
  expect(creatorA.survey.title).toEqual("A1");

  creatorA.undo();
  expect(creatorA.survey.title).toEqual("");
  expect(creatorB.survey.title).toEqual("");
  expect(creatorA.undoRedoManager.canUndo()).toBeFalsy();
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
});

test("creator joining mid-session inherits the host's undo stack and can undo host transactions", () => {
  // Real-world handshake on join: the host serializes its current survey
  // JSON (to bootstrap the joiner's state) AND its undo stack snapshot
  // (so the joiner can undo/redo anything the host could). After both
  // sides exchange the snapshots and wire the bidirectional bridge,
  // collaborative undo/redo must work for both pre-join and post-join
  // transactions, regardless of which side initiates the undo.

  // ----- Stage 1: host (A) works alone, builds up a stack -----
  const creatorA = new CreatorTester();
  creatorA.JSON = { pages: [{ name: "page1" }] };
  // Attach the sync plugin up-front so transaction ids are assigned
  // (later `exportStack` only ships entries that carry an id).
  syncOf(creatorA);

  creatorA.survey.title = "T1"; // tx 1: scalar
  creatorA.survey.pages[0].addNewQuestion("text", "q1"); // tx 2: array insert
  creatorA.survey.getQuestionByName("q1").title = "Q1 title"; // tx 3: scalar on nested
  expect(creatorA.undoRedoManager.canUndo()).toBeTruthy();

  // ----- Stage 2: joiner (B) bootstraps -----
  // (a) Survey state via JSON snapshot - same path used by `deferred wiring`.
  // (b) Undo stack via exportStack / importStack handshake.
  const jsonSnapshot = JSON.parse(JSON.stringify(creatorA.JSON));
  const stackSnapshot: ISyncStackSnapshot = JSON.parse(JSON.stringify(syncOf(creatorA).exportStack()));
  expect(stackSnapshot.kind).toEqual("stack");
  expect(stackSnapshot.entries).toHaveLength(3);
  expect(stackSnapshot.cursor).toEqual(3);
  // Every entry must carry a stable id and both forward + inverse payloads.
  for (const e of stackSnapshot.entries) {
    expect(typeof e.id).toEqual("string");
    expect(e.id.length).toBeGreaterThan(0);
    expect(Array.isArray(e.forward)).toBe(true);
    expect(Array.isArray(e.inverse)).toBe(true);
    expect(e.forward.length).toBeGreaterThan(0);
    expect(e.inverse.length).toBeGreaterThan(0);
  }

  const creatorB = new CreatorTester();
  creatorB.JSON = jsonSnapshot;
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
  syncOf(creatorB).importStack(stackSnapshot);

  // B now mirrors A's stack: same entry count, cursor at top, no redo.
  expect(creatorB.undoRedoManager.canUndo()).toBeTruthy();
  expect(creatorB.undoRedoManager.canRedo()).toBeFalsy();

  // Wire the bidirectional bridge (live edits + undo/redo broadcasts).
  syncOf(creatorA).onSerializedChanges = (msg) =>
    syncOf(creatorB).applySerialized(JSON.parse(JSON.stringify(msg)));
  syncOf(creatorB).onSerializedChanges = (msg) =>
    syncOf(creatorA).applySerialized(JSON.parse(JSON.stringify(msg)));

  // ----- Stage 3: B undoes a pre-join transaction; A mirrors -----
  // Top of the shared stack is A's nested title edit (tx 3).
  // Note: `question.title` falls back to `name` when empty, so check
  // the raw locale text directly to assert the underlying value.
  creatorB.undo();
  expect(creatorB.survey.getQuestionByName("q1").locTitle.getLocaleText("")).toEqual("");
  expect(creatorA.survey.getQuestionByName("q1").locTitle.getLocaleText("")).toEqual("");

  // ----- Stage 4: B undoes the question add (tx 2) - array action through bulk -----
  creatorB.undo();
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();
  expect(creatorA.survey.getQuestionByName("q1")).toBeFalsy();

  // ----- Stage 5: A redoes from its own side - both come back -----
  expect(creatorA.undoRedoManager.canRedo()).toBeTruthy();
  creatorA.redo();
  expect(creatorA.survey.getQuestionByName("q1")).toBeTruthy();
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();

  creatorA.redo();
  expect(creatorA.survey.getQuestionByName("q1").locTitle.getLocaleText("")).toEqual("Q1 title");
  expect(creatorB.survey.getQuestionByName("q1").locTitle.getLocaleText("")).toEqual("Q1 title");

  // ----- Stage 6: post-join edit from B integrates on top of inherited stack -----
  creatorB.survey.description = "Added after join";
  expect(creatorA.survey.description).toEqual("Added after join");
  // Now both stacks have 4 entries; B undoes its own latest edit.
  creatorB.undo();
  expect(creatorA.survey.description).toEqual("");
  expect(creatorB.survey.description).toEqual("");

  // ----- Stage 7: drain the entire shared stack from A -----
  while(creatorA.undoRedoManager.canUndo()) { creatorA.undo(); }
  expect(creatorA.survey.title).toEqual("");
  expect(creatorB.survey.title).toEqual("");
  expect(creatorA.survey.getQuestionByName("q1")).toBeFalsy();
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();
});

test("importStack drops the host's redo tail (only applied entries are exported)", () => {
  // Edge case: when the host has a redo tail at export time, only the
  // applied prefix is shipped to the joiner. This keeps the export logic
  // simple and matches the typical join flow (a joiner cares about
  // undoing what's currently visible, not about redoing operations the
  // host has already rolled back).
  const creatorA = new CreatorTester();
  creatorA.JSON = { pages: [{ name: "page1" }] };
  // Attach the sync plugin up-front so transaction ids are assigned
  // (later `exportStack` only ships entries that carry an id).
  syncOf(creatorA);
  creatorA.survey.title = "Kept";
  creatorA.survey.description = "Dropped";
  creatorA.undo(); // now description is undone; redo tail = [descriptionEdit]
  expect(creatorA.undoRedoManager.canRedo()).toBeTruthy();

  const snapshot = syncOf(creatorA).exportStack();
  expect(snapshot.entries).toHaveLength(1);
  expect(snapshot.cursor).toEqual(1);

  const creatorB = new CreatorTester();
  creatorB.JSON = JSON.parse(JSON.stringify(creatorA.JSON));
  syncOf(creatorB).importStack(snapshot);

  expect(creatorB.undoRedoManager.canUndo()).toBeTruthy();
  expect(creatorB.undoRedoManager.canRedo()).toBeFalsy();
  creatorB.undo();
  expect(creatorB.survey.title).toEqual("");
});

test("client joining via the server's exported stack (built from remote actions) inherits full undo/redo", () => {
  // Production topology: the collaboration server keeps an authoritative
  // sync plugin whose stack is built ENTIRELY from RemoteUndoRedoAction
  // wrappers it only ever applies peer messages, it never authors a
  // native transaction itself. A late joiner bootstraps from
  // `server.exportStack()` (shipped alongside the survey schema in the
  // init handshake). This guards the path production uses but the
  // host-side join test does not cover: exporting a stack whose entries
  // are remote actions, then importing it into a fresh client.

  // ----- The headless server: a duck-typed creator, exactly like session-store.ts -----
  const serverSurvey = new SurveyModel({ pages: [{ name: "page1" }] });
  const serverPlugin = new UndoRedoSyncPlugin(
    { undoRedoManager: new UndoRedoManager(), survey: serverSurvey } as any
  );

  // ----- Host A edits; every wire message is applied to the server -----
  const creatorA = new CreatorTester();
  creatorA.JSON = { pages: [{ name: "page1" }] };
  syncOf(creatorA).onSerializedChanges = (msg) =>
    serverPlugin.applySerialized(JSON.parse(JSON.stringify(msg)));

  creatorA.survey.title = "T1"; // tx 1: scalar
  creatorA.survey.pages[0].addNewQuestion("text", "q1"); // tx 2: array insert
  creatorA.survey.getQuestionByName("q1").title = "Q1 title"; // tx 3: nested scalar

  // Server now mirrors A's state; its stack holds 3 remote-action entries.
  expect(serverSurvey.title).toEqual("T1");
  expect(serverSurvey.getQuestionByName("q1").locTitle.getLocaleText("")).toEqual("Q1 title");

  // ----- Joiner C bootstraps from the SERVER snapshot (schema + stack) -----
  const schemaSnapshot = JSON.parse(JSON.stringify(serverSurvey.toJSON()));
  const stackSnapshot: ISyncStackSnapshot = JSON.parse(JSON.stringify(serverPlugin.exportStack()));
  expect(stackSnapshot.entries).toHaveLength(3);
  expect(stackSnapshot.cursor).toEqual(3);
  // Each entry, though sourced from a remote-action stack, must still carry
  // its id and pre-computed forward + inverse payloads.
  for (const e of stackSnapshot.entries) {
    expect(typeof e.id).toEqual("string");
    expect(e.id.length).toBeGreaterThan(0);
    expect(e.forward.length).toBeGreaterThan(0);
    expect(e.inverse.length).toBeGreaterThan(0);
  }

  const creatorC = new CreatorTester();
  creatorC.JSON = schemaSnapshot;
  expect(creatorC.undoRedoManager.canUndo()).toBeFalsy();
  syncOf(creatorC).importStack(stackSnapshot);
  expect(creatorC.undoRedoManager.canUndo()).toBeTruthy();
  expect(creatorC.undoRedoManager.canRedo()).toBeFalsy();

  // ----- C undoes the host's pre-join transactions; the server mirrors -----
  syncOf(creatorC).onSerializedChanges = (msg) =>
    serverPlugin.applySerialized(JSON.parse(JSON.stringify(msg)));

  creatorC.undo(); // undo tx 3 (nested title)
  expect(creatorC.survey.getQuestionByName("q1").locTitle.getLocaleText("")).toEqual("");
  expect(serverSurvey.getQuestionByName("q1").locTitle.getLocaleText("")).toEqual("");

  creatorC.undo(); // undo tx 2 (question add) array action via RemoteBulkAction
  expect(creatorC.survey.getQuestionByName("q1")).toBeFalsy();
  expect(serverSurvey.getQuestionByName("q1")).toBeFalsy();

  // ----- C redoes; both come back in order -----
  creatorC.redo();
  expect(creatorC.survey.getQuestionByName("q1")).toBeTruthy();
  expect(serverSurvey.getQuestionByName("q1")).toBeTruthy();

  creatorC.redo();
  expect(creatorC.survey.getQuestionByName("q1").locTitle.getLocaleText("")).toEqual("Q1 title");
  expect(serverSurvey.getQuestionByName("q1").locTitle.getLocaleText("")).toEqual("Q1 title");
});

test("a session with no history still ships a valid, empty stack snapshot", () => {
  // The init handshake always carries a stack; for a fresh session it is
  // a well-formed empty snapshot, and importing it is a harmless no-op.
  const serverSurvey = new SurveyModel({ pages: [{ name: "page1" }] });
  const serverPlugin = new UndoRedoSyncPlugin(
    { undoRedoManager: new UndoRedoManager(), survey: serverSurvey } as any
  );

  const stackSnapshot = serverPlugin.exportStack();
  expect(stackSnapshot.kind).toEqual("stack");
  expect(stackSnapshot.cursor).toEqual(0);
  expect(stackSnapshot.entries).toHaveLength(0);

  const creatorC = new CreatorTester();
  creatorC.JSON = JSON.parse(JSON.stringify(serverSurvey.toJSON()));
  syncOf(creatorC).importStack(JSON.parse(JSON.stringify(stackSnapshot)));
  expect(creatorC.undoRedoManager.canUndo()).toBeFalsy();
  expect(creatorC.undoRedoManager.canRedo()).toBeFalsy();
});

// ---------------------------------------------------------------------------
// Plugin lifecycle: parity with master when no plugin is registered, and
// detach on dispose.
// ---------------------------------------------------------------------------

test("without UndoRedoSyncPlugin the manager has no sync side-effects", () => {
  // Without the plugin registered the manager must behave exactly like
  // a stand-alone undo/redo stack: no transaction ids assigned, no
  // sync hooks set, and undo/redo work locally.
  const creator = new CreatorTester();
  creator.JSON = { pages: [{ name: "page1" }] };

  expect(creator.undoRedoManager.onTransactionMerged).toBeUndefined();
  expect(creator.undoRedoManager.onTransactionFinished).toBeUndefined();

  creator.survey.title = "Hello";
  creator.survey.pages[0].addNewQuestion("text", "q1");

  // Newly-pushed transactions have empty ids in the no-plugin setup.
  for (const tx of creator.undoRedoManager.transactions) {
    expect(tx.id).toEqual("");
  }

  // Local undo/redo still works.
  expect(creator.undoRedoManager.canUndo()).toBeTruthy();
  creator.undo();
  expect(creator.survey.getQuestionByName("q1")).toBeFalsy();
  creator.redo();
  expect(creator.survey.getQuestionByName("q1")).toBeTruthy();
});

test("UndoRedoSyncPlugin.dispose detaches manager hooks and stops broadcasting", () => {
  const creator = new CreatorTester();
  creator.JSON = { pages: [{ name: "page1" }] };
  const plugin = new UndoRedoSyncPlugin(creator);
  creator.addPlugin("undoredoSync", plugin);

  // While attached: hooks installed, broadcasts emitted.
  expect(creator.undoRedoManager.onTransactionFinished).toBeDefined();
  const messages: ISyncMessage[] = [];
  plugin.onSerializedChanges = (msg) => messages.push(msg);
  creator.survey.title = "Hello";
  expect(messages.length).toBeGreaterThan(0);

  // After dispose: hooks restored, no further broadcasts even if the
  // outbound callback is somehow re-attached (the manager no longer
  // calls it).
  plugin.dispose();
  expect(creator.undoRedoManager.onTransactionFinished).toBeUndefined();
  expect(creator.undoRedoManager.onTransactionMerged).toBeUndefined();

  const messagesAfter: ISyncMessage[] = [];
  plugin.onSerializedChanges = (msg) => messagesAfter.push(msg);
  creator.survey.description = "After dispose";
  expect(messagesAfter).toHaveLength(0);
});