import { CreatorTester } from "./creator-tester";
import { ISyncMessage } from "../src/plugins/undo-redo/undo-redo-manager";

// Wire two creators' UndoRedoManagers together through plain JSON, simulating
// a transport like WebSocket / SignalR. The bridge is intentionally trivial:
// the manager itself produces and consumes JSON-serializable messages.
function makeCreators() {
  const creatorA = new CreatorTester();
  const creatorB = new CreatorTester();
  const startJSON = { pages: [{ name: "page1" }] };
  creatorA.JSON = startJSON;
  creatorB.JSON = startJSON;

  creatorA.undoRedoManager.onSerializedChanges = (msg: ISyncMessage) => {
    creatorB.undoRedoManager.applySerialized(JSON.parse(JSON.stringify(msg)));
  };
  creatorB.undoRedoManager.onSerializedChanges = (msg: ISyncMessage) => {
    creatorA.undoRedoManager.applySerialized(JSON.parse(JSON.stringify(msg)));
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

  // Remote-applied messages must not become local undo entries: otherwise
  // each side would re-broadcast and we would see an infinite echo loop.
  // Each creator only has its own two local edits in its undo stack.
  let undoCount = 0;
  while(creatorA.undoRedoManager.canUndo()) {
    creatorA.undo();
    undoCount++;
  }
  expect(undoCount).toEqual(2);
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

test("remote-applied changes on B do not pollute B's undo stack", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.title = "From A";
  creatorA.survey.pages[0].addNewQuestion("text", "q1");

  // B received two remote messages, but neither must enter B's own undo
  // stack: collaborative remote ops are not user actions on B.
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
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

test("each creator owns an independent undo stack", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.title = "A1";
  creatorB.survey.description = "B1";

  expect(creatorA.survey.title).toEqual("A1");
  expect(creatorA.survey.description).toEqual("B1");
  expect(creatorB.survey.title).toEqual("A1");
  expect(creatorB.survey.description).toEqual("B1");

  // A undoes only its own change.
  creatorA.undo();
  expect(creatorA.survey.title).toEqual("");
  expect(creatorB.survey.title).toEqual("");
  // B's edit is still in place on both sides.
  expect(creatorA.survey.description).toEqual("B1");
  expect(creatorB.survey.description).toEqual("B1");

  // B undoes only its own change.
  creatorB.undo();
  expect(creatorA.survey.description).toEqual("");
  expect(creatorB.survey.description).toEqual("");

  expect(creatorA.undoRedoManager.canUndo()).toBeFalsy();
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
});

test("outgoing messages are plain JSON (no class instances, no cycles)", () => {
  const creator = new CreatorTester();
  creator.JSON = { pages: [{ name: "page1" }] };
  const messages: ISyncMessage[] = [];
  creator.undoRedoManager.onSerializedChanges = (msg) => messages.push(msg);

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

  creatorA.undoRedoManager.onSerializedChanges = (msg) =>
    creatorB.undoRedoManager.applySerialized(JSON.parse(JSON.stringify(msg)));
  creatorB.undoRedoManager.onSerializedChanges = (msg) =>
    creatorA.undoRedoManager.applySerialized(JSON.parse(JSON.stringify(msg)));

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
        locator: [],
        propertyName: "pages",
        index: 1,
        deleteCount: 0,
        itemsToAdd: [
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
        locator: [{ prop: "pages", name: "page2" }],
        propertyName: "elements",
        index: 0,
        deleteCount: 0,
        itemsToAdd: [
          { __syncType: "text", __syncJson: { name: "nested_q1" } },
          { __syncType: "checkbox", __syncJson: { name: "nested_q2" } }
        ]
      }
    ]
  };

  creatorB.undoRedoManager.applySerialized(JSON.parse(JSON.stringify(message)));

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
  creatorA.undoRedoManager.onSerializedChanges = (msg) => {
    outgoing.push(JSON.parse(JSON.stringify(msg)));
    creatorB.undoRedoManager.applySerialized(JSON.parse(JSON.stringify(msg)));
  };
  creatorB.undoRedoManager.onSerializedChanges = (msg) =>
    creatorA.undoRedoManager.applySerialized(JSON.parse(JSON.stringify(msg)));

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
  const last = outgoing[outgoing.length - 1];
  const lastAction = last.actions[last.actions.length - 1];
  expect(lastAction.kind).toEqual("property");
  expect((lastAction as any).propertyName).toEqual("title");
  expect((lastAction as any).newValue).toEqual("Hello");
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