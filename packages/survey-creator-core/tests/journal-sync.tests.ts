import { CreatorTester } from "./creator-tester";
import { JournalPlugin } from "../src/plugins/journal";
import { IJournalRecord, JournalOp } from "../src/plugins/journal/journal-record";

// Replicates the creator-synchronization scenarios of the UndoRedoSyncPlugin
// test suite (feature/undo-redo-sync branch) on top of the JournalPlugin.
// Two creators are wired through a live bridge: every emitted record is
// JSON-stringified and applied on the peer, simulating a websocket transport.
//
// Semantic difference vs the undo-redo-sync branch: the journal plugin does
// NOT maintain a shared collaborative undo stack. Applied remote records
// bypass the receiver's undo-redo, so only the AUTHOR of a change can undo
// it; the undo then propagates to peers as an ordinary inverse record.
// A local entry invalidated by a later remote record - its target was
// deleted/converted, or the value it set was overwritten - is consumed as a
// no-op on undo/redo: the press visibly does nothing (JournalStackGuard).

function wire(from: JournalPlugin, to: JournalPlugin): void {
  const send = (sender: any, options: { record: IJournalRecord }): void => {
    // Round-trip through a string to enforce the wire format is pure JSON.
    to.apply(JSON.stringify([options.record]));
  };
  from.onRecordAdded.add(send);
  from.onRecordChanged.add(send);
}

function makeCreators(json: any = { pages: [{ name: "page1" }] }) {
  const creatorA = new CreatorTester();
  const creatorB = new CreatorTester();
  creatorA.JSON = json;
  creatorB.JSON = json;
  const pluginA = new JournalPlugin(creatorA);
  creatorA.addPlugin("journal", pluginA);
  const pluginB = new JournalPlugin(creatorB);
  creatorB.addPlugin("journal", pluginB);
  wire(pluginA, pluginB);
  wire(pluginB, pluginA);
  return { creatorA, creatorB, pluginA, pluginB };
}

test("journal-sync: changes propagate from one creator to the other via JSON messages", () => {
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

test("journal-sync: changes propagate bidirectionally without echo loops", () => {
  const { creatorA, creatorB, pluginA, pluginB } = makeCreators();

  creatorA.survey.title = "Title from A";
  expect(creatorB.survey.title).toEqual("Title from A");

  creatorB.survey.description = "Description from B";
  expect(creatorA.survey.description).toEqual("Description from B");

  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  creatorB.survey.pages[0].addNewQuestion("checkbox", "q2");
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();
  expect(creatorA.survey.getQuestionByName("q2")).toBeTruthy();
  expect(creatorA.JSON).toEqual(creatorB.JSON);

  // Echo check: each journal holds only the records authored on its own side
  // (two edits each) - applied remote records are never re-recorded.
  expect(pluginA.records).toHaveLength(2);
  expect(pluginB.records).toHaveLength(2);
});

test("journal-sync: undo/redo on the author creator is reflected on the peer", () => {
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

  // The peer can undo its OWN edits and the rollback propagates back.
  creatorB.survey.pages[0].addNewQuestion("checkbox", "q2");
  expect(creatorA.survey.getQuestionByName("q2")).toBeTruthy();
  creatorB.undo();
  expect(creatorA.survey.getQuestionByName("q2")).toBeFalsy();
});

test("journal-sync: remote-applied changes do NOT enter the receiver's undo stack", () => {
  // Undo stacks are strictly local: applied records bypass the receiver's
  // undo-redo pipeline, so only the author of a change can undo it.
  const { creatorA, creatorB } = makeCreators();

  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
  creatorA.survey.title = "From A";
  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
  expect(creatorA.undoRedoManager.canUndo()).toBeTruthy();
});

test("journal-sync: B cannot undo a question add authored by A; B's own add stays undoable", () => {
  const { creatorA, creatorB, pluginB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();

  // Nothing local to undo - the press is a no-op and broadcasts nothing.
  creatorB.undo();
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();
  expect(creatorA.survey.getQuestionByName("q1")).toBeTruthy();
  expect(pluginB.records).toHaveLength(0);

  // B's OWN add is undoable and the rollback reaches A; A's question stays.
  creatorB.survey.pages[0].addNewQuestion("checkbox", "q2");
  expect(creatorA.survey.getQuestionByName("q2")).toBeTruthy();
  creatorB.undo();
  expect(creatorB.survey.getQuestionByName("q2")).toBeFalsy();
  expect(creatorA.survey.getQuestionByName("q2")).toBeFalsy();
  expect(creatorA.survey.getQuestionByName("q1")).toBeTruthy();
  expect(creatorB.survey.getQuestionByName("q1")).toBeTruthy();
});

test("journal-sync: B cannot undo A's property edit; B's own edit of another property can", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.title = "From A";
  expect(creatorB.survey.title).toEqual("From A");

  creatorB.undo();
  expect(creatorB.survey.title).toEqual("From A");
  expect(creatorA.survey.title).toEqual("From A");

  creatorB.survey.description = "By B";
  expect(creatorA.survey.description).toEqual("By B");
  creatorB.undo();
  expect(creatorB.survey.description).toEqual("");
  expect(creatorA.survey.description).toEqual("");
  expect(creatorA.survey.title).toEqual("From A");
});

test("journal-sync: B cannot undo a remote reorder", () => {
  const { creatorA, creatorB } = makeCreators();
  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  creatorA.survey.pages[0].addNewQuestion("text", "q2");
  creatorA.survey.pages[0].addNewQuestion("text", "q3");

  const page = creatorA.survey.pages[0];
  const el = page.elements[0];
  creatorA.startUndoRedoTransaction("drag drop");
  page.elements.splice(0, 1);
  page.elements.splice(2, 0, el);
  creatorA.stopUndoRedoTransaction();
  const names = (p: any) => p.elements.map((e: any) => e.name);
  expect(names(creatorB.survey.pages[0])).toEqual(["q2", "q3", "q1"]);

  // The applied reorder never entered B's stack - undo is a no-op.
  creatorB.undo();
  expect(names(creatorB.survey.pages[0])).toEqual(["q2", "q3", "q1"]);
  expect(names(creatorA.survey.pages[0])).toEqual(["q2", "q3", "q1"]);
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
});

test("journal-sync: B cannot undo a remote question conversion", () => {
  const { creatorA, creatorB } = makeCreators();
  const q1 = creatorA.survey.pages[0].addNewQuestion("text", "q1");
  q1["inputType"] = "date";

  creatorA.selectElement(q1);
  creatorA.convertCurrentQuestion("comment");
  expect(creatorB.survey.getQuestionByName("q1").getType()).toEqual("comment");

  creatorB.undo();
  expect(creatorB.survey.getQuestionByName("q1").getType()).toEqual("comment");
  expect(creatorA.survey.getQuestionByName("q1").getType()).toEqual("comment");
  expect(creatorB.survey.pages[0].elements).toHaveLength(1);
  expect(creatorA.survey.pages[0].elements).toHaveLength(1);
});

test("journal-sync: a typing burst leaves the receiver's undo stack empty", () => {
  const { creatorA, creatorB } = makeCreators();

  const word = "Hello";
  for (let i = 1; i <= word.length; i++) {
    creatorA.survey.title = word.substring(0, i);
  }
  expect(creatorB.survey.title).toEqual("Hello");

  // Coalesced re-sends bypass B's undo-redo entirely - nothing to undo, and
  // nothing to merge into a local typing transaction.
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
  creatorB.undo();
  expect(creatorB.survey.title).toEqual("Hello");
  expect(creatorA.survey.title).toEqual("Hello");
});

test("journal-sync: whole-dictionary translation apply is not undoable on B", () => {
  const { creatorA, creatorB } = makeCreators({
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "Original" }] }]
  });
  const qA: any = creatorA.survey.getQuestionByName("q1");
  const qB: any = creatorB.survey.getQuestionByName("q1");

  // A default-text (source) edit travels as a whole locale dictionary.
  qA.locTitle.setLocaleText("", "Changed");
  expect(qB.title).toEqual("Changed");

  creatorB.undo();
  expect(qB.title).toEqual("Changed");
  expect(qA.title).toEqual("Changed");
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
});

test("journal-sync: undo/redo of nested change inside a matrix column propagates", () => {
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

test("journal-sync: undo of matrix-column add removes the column on the peer", () => {
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

test("journal-sync: undo of page add on A removes the page on B", () => {
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

test("journal-sync: converting a question type and then undoing restores the original on the peer", () => {
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

test("journal-sync: outgoing records are plain JSON (no class instances, no cycles)", () => {
  const creator = new CreatorTester();
  creator.JSON = { pages: [{ name: "page1" }] };
  const plugin = new JournalPlugin(creator);
  creator.addPlugin("journal", plugin);
  const records: IJournalRecord[] = [];
  plugin.onRecordAdded.add((sender, options) => records.push(options.record));

  creator.survey.title = "Hello";
  creator.survey.pages[0].addNewQuestion("text", "q1");

  expect(records.length).toBeGreaterThan(0);
  for (const record of records) {
    const roundTripped = JSON.parse(JSON.stringify(record));
    expect(roundTripped).toEqual(record);
  }
});

test("journal-sync: page add/remove propagates between creators", () => {
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

test("journal-sync: matrix add/remove propagates between creators", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("matrixdynamic", "m1");
  const remoteMatrix = creatorB.survey.getQuestionByName("m1");
  expect(remoteMatrix).toBeTruthy();
  expect(remoteMatrix.getType()).toEqual("matrixdynamic");

  creatorA.deleteElement(creatorA.survey.getQuestionByName("m1"));
  expect(creatorB.survey.getQuestionByName("m1")).toBeFalsy();
});

test("journal-sync: matrix column add/remove propagates between creators", () => {
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

test("journal-sync: changes inside matrix column propagate between creators", () => {
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

test("journal-sync: deferred wiring - second creator joins after edits, then syncs", () => {
  // Stage 1: one creator works alone, no peer wired yet.
  const creatorA = new CreatorTester();
  creatorA.JSON = { pages: [{ name: "page1" }] };
  const pluginA = new JournalPlugin(creatorA);
  creatorA.addPlugin("journal", pluginA);
  creatorA.survey.title = "Pre-sync title";
  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  creatorA.survey.getQuestionByName("q1").title = "Pre-sync Q1";

  // Stage 2: bootstrap B from a full snapshot record (what a real client
  // would receive on join over the wire), then wire the bidirectional pipe.
  const creatorB = new CreatorTester();
  creatorB.JSON = {};
  const pluginB = new JournalPlugin(creatorB);
  creatorB.addPlugin("journal", pluginB);
  pluginA.clear();
  pluginB.apply(JSON.stringify([pluginA.snapshot()]));
  pluginA.clear();
  wire(pluginA, pluginB);
  wire(pluginB, pluginA);

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

test("journal-sync: successive title edits (typing 'Hello') propagate the full final value", () => {
  const { creatorA, creatorB, pluginA } = makeCreators();

  const word = "Hello";
  for (let i = 1; i <= word.length; i++) {
    creatorA.survey.title = word.substring(0, i);
  }

  // Final visible state on both sides must be the full word.
  expect(creatorA.survey.title).toEqual("Hello");
  expect(creatorB.survey.title).toEqual("Hello");

  // Coalescing collapses the burst into a single record carrying the full
  // final value.
  expect(pluginA.records).toHaveLength(1);
  expect((<any>pluginA.records[0].payload).value).toEqual("Hello");

  // One undo on the author rolls back the whole word on both sides (the
  // undo-redo manager merged the burst into a single transaction).
  creatorA.undo();
  expect(creatorA.survey.title).toEqual("");
  expect(creatorB.survey.title).toEqual("");
});

test("journal-sync: renaming a text question propagates to the peer", () => {
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

test("journal-sync: locale change and per-locale text edits propagate between creators", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  const qA: any = creatorA.survey.getQuestionByName("q1");
  const qB: any = creatorB.survey.getQuestionByName("q1");

  // Default locale edit on A is visible on B in the same default locale.
  qA.title = "Title in default";
  expect(qB.title).toEqual("Title in default");

  // Switching locale on A must propagate to B.
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

  // Undo on B (the author of the German edit) rolls it back; both sides agree.
  creatorB.undo();
  expect(qA.title).toEqual(qB.title);
  expect(qA.title).not.toEqual("Anderer Titel");

  // Switching locale back on B propagates and reveals the original default
  // text on both sides.
  creatorB.survey.locale = "";
  expect(creatorA.survey.locale).toEqual("");
  expect(qA.title).toEqual("Title in default");
  expect(qB.title).toEqual("Title in default");
});

test("journal-sync: editing a non-active locale via the translation tab propagates that locale's text", () => {
  // The active locale on A is "es" with title "question2", and the user edits
  // the English text to "question1". The record sent to the peer must carry
  // the full locale dictionary, so the "en" slot is written and the "es"
  // text is untouched.
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  const qA: any = creatorA.survey.getQuestionByName("q1");
  const qB: any = creatorB.survey.getQuestionByName("q1");

  creatorA.survey.locale = "es";
  qA.title = "question2";
  expect(qB.locTitle.getLocaleText("es")).toEqual("question2");

  // Translation-tab edit: write the English text directly while the active
  // locale is still "es".
  qA.locTitle.setLocaleText("en", "question1");

  // Local sanity: A keeps both locales.
  expect(qA.locTitle.getLocaleText("es")).toEqual("question2");
  expect(qA.locTitle.getLocaleText("en")).toEqual("question1");

  // Peer must see the English edit in the English slot, and the Spanish
  // text must remain "question2".
  expect(qB.locTitle.getLocaleText("en")).toEqual("question1");
  expect(qB.locTitle.getLocaleText("es")).toEqual("question2");
});

test("journal-sync: paneldynamic - adding a question to the template propagates to the peer", () => {
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

test("journal-sync: paneldynamic - edits on a templated question propagate to the peer", () => {
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

test("journal-sync: paneldynamic - templateTitle change on the template propagates", () => {
  const { creatorA, creatorB } = makeCreators();
  creatorA.survey.pages[0].addNewQuestion("paneldynamic", "pd1");
  const pdA: any = creatorA.survey.getQuestionByName("pd1");
  const pdB: any = creatorB.survey.getQuestionByName("pd1");
  pdA.template.title = "T title";
  expect(pdB.templateTitle).toEqual("T title");
});

test("journal-sync: paneldynamic - deleting a templated question propagates to the peer", () => {
  const { creatorA, creatorB } = makeCreators();
  creatorA.survey.pages[0].addNewQuestion("paneldynamic", "pd1");
  const pdA: any = creatorA.survey.getQuestionByName("pd1");
  pdA.template.addNewQuestion("text", "q_in_pd");
  const pdB: any = creatorB.survey.getQuestionByName("pd1");
  expect(pdB.templateElements).toHaveLength(1);

  pdA.templateElements[0].delete();
  expect(pdB.templateElements).toHaveLength(0);
});

test("journal-sync: paneldynamic - undo/redo of nested add round-trips on the peer", () => {
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

test("journal-sync: cross-page move travels live as one record, the peer keeps its instance", () => {
  const { creatorA, creatorB, pluginA } = makeCreators({
    pages: [
      { name: "page1", elements: [{ type: "text", name: "q1", title: "T1", isRequired: true }] },
      { name: "page2", elements: [{ type: "comment", name: "q2" }] }
    ]
  });
  const qB = creatorB.survey.getQuestionByName("q1");
  let addedOnB = 0;
  creatorB.onQuestionAdded.add(() => addedOnB++);
  const q = creatorA.survey.getQuestionByName("q1");
  creatorA.startUndoRedoTransaction("drag drop");
  creatorA.survey.pages[0].elements.splice(0, 1);
  creatorA.survey.pages[1].elements.splice(1, 0, q);
  creatorA.stopUndoRedoTransaction();
  expect(pluginA.records).toHaveLength(1);
  expect(pluginA.records[0].op).toEqual(JournalOp.ElementMoved);
  expect(creatorB.JSON).toEqual(creatorA.JSON);
  // The peer relocated its existing instance without reporting a question add.
  expect(creatorB.survey.getQuestionByName("q1")).toBe(qB);
  expect(creatorB.survey.getQuestionByName("q1").page.name).toEqual("page2");
  expect((<any>qB).isRequired).toBeTruthy();
  expect(addedOnB).toEqual(0);
});

test("journal-sync: B cannot undo a remote cross-page move; the author can", () => {
  const { creatorA, creatorB } = makeCreators({
    pages: [
      { name: "page1", elements: [{ type: "text", name: "q1", title: "T1" }] },
      { name: "page2", elements: [{ type: "comment", name: "q2" }] }
    ]
  });
  const qA = creatorA.survey.getQuestionByName("q1");
  const qB = creatorB.survey.getQuestionByName("q1");
  creatorA.startUndoRedoTransaction("drag drop");
  creatorA.survey.pages[0].elements.splice(0, 1);
  creatorA.survey.pages[1].elements.splice(0, 0, qA);
  creatorA.stopUndoRedoTransaction();
  expect(creatorB.survey.getQuestionByName("q1").page.name).toEqual("page2");

  // The applied move never entered B's stack - undo is a no-op and B keeps
  // its own instance in place.
  creatorB.undo();
  expect(creatorB.survey.getQuestionByName("q1").page.name).toEqual("page2");
  expect(creatorA.survey.getQuestionByName("q1").page.name).toEqual("page2");
  expect(creatorB.survey.getQuestionByName("q1")).toBe(qB);
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();

  // The AUTHOR undoes the move; it travels to B as the remove-first
  // arrayChanged pair and B converges through it.
  creatorA.undo();
  expect(creatorA.survey.getQuestionByName("q1").page.name).toEqual("page1");
  expect(creatorB.survey.getQuestionByName("q1").page.name).toEqual("page1");
  expect(creatorA.JSON).toEqual(creatorB.JSON);
});

test("journal-sync: dispose detaches the plugin and stops broadcasting", () => {
  const creator = new CreatorTester();
  creator.JSON = { pages: [{ name: "page1" }] };
  const plugin = new JournalPlugin(creator);
  creator.addPlugin("journal", plugin);

  const messages: IJournalRecord[] = [];
  plugin.onRecordAdded.add((sender, options) => messages.push(options.record));
  creator.survey.title = "Hello";
  expect(messages.length).toBeGreaterThan(0);

  const countBefore = messages.length;
  plugin.dispose();
  creator.survey.description = "After dispose";
  expect(messages).toHaveLength(countBefore);
  expect(plugin.records).toHaveLength(countBefore);
});

// ---------------------------------------------------------------------------
// JournalStackGuard: local entries invalidated by later remote records are
// consumed as no-ops on undo/redo - the press visibly does nothing.

test("journal-sync: undo of a type conversion is a no-op after the peer deleted the question", () => {
  // A adds a question, B converts its type, A deletes the question. The
  // conversion entry in B's stack is meaningless now: undo must not resurrect
  // the question anywhere and must broadcast nothing.
  const { creatorA, creatorB, pluginB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  creatorB.selectElement(creatorB.survey.getQuestionByName("q1"));
  creatorB.convertCurrentQuestion("comment");
  expect(creatorA.survey.getQuestionByName("q1").getType()).toEqual("comment");
  expect(creatorB.undoRedoManager.canUndo()).toBeTruthy();

  creatorA.deleteElement(creatorA.survey.getQuestionByName("q1"));
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();

  const recordsBefore = pluginB.records.length;
  creatorB.undo();
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();
  expect(creatorA.survey.getQuestionByName("q1")).toBeFalsy();
  expect(pluginB.records).toHaveLength(recordsBefore);
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
  expect(creatorA.JSON).toEqual(creatorB.JSON);
});

test("journal-sync: undo of a property edit is a no-op after the peer deleted the target", () => {
  // Without the guard this press would fall back to a full-snapshot record
  // (the recorder cannot address the dead target anymore) and reset every
  // peer's survey and history.
  const { creatorA, creatorB, pluginB } = makeCreators();

  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  const qB: any = creatorB.survey.getQuestionByName("q1");
  qB.title = "Edited on B";
  expect(creatorA.survey.getQuestionByName("q1").title).toEqual("Edited on B");
  const recordsBefore = pluginB.records.length;

  creatorA.deleteElement(creatorA.survey.getQuestionByName("q1"));
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();

  creatorB.undo();
  expect(pluginB.records).toHaveLength(recordsBefore);
  expect(pluginB.records.filter(r => r.op === JournalOp.FullSnapshot)).toHaveLength(0);
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
  expect(creatorA.JSON).toEqual(creatorB.JSON);
});

test("journal-sync: undo is a no-op when the peer overwrote the value (last write wins)", () => {
  const { creatorA, creatorB, pluginA } = makeCreators();

  creatorA.survey.description = "Base by A";
  creatorA.survey.title = "Hello1";
  expect(creatorB.survey.title).toEqual("Hello1");

  creatorB.survey.title = "Hello2";
  expect(creatorA.survey.title).toEqual("Hello2");

  // A's title entry expects the value it has put ("Hello1"), but B has
  // overwritten it since - the press consumes the entry and changes nothing.
  const recordsBefore = pluginA.records.length;
  creatorA.undo();
  expect(creatorA.survey.title).toEqual("Hello2");
  expect(creatorB.survey.title).toEqual("Hello2");
  expect(pluginA.records).toHaveLength(recordsBefore);

  // The next press reaches A's previous valid edit.
  creatorA.undo();
  expect(creatorA.survey.description).toEqual("");
  expect(creatorB.survey.description).toEqual("");
  expect(creatorB.survey.title).toEqual("Hello2");
});

test("journal-sync: a peer edit of ANOTHER property does not invalidate the local entry", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.title = "By A";
  creatorB.survey.description = "By B";
  expect(creatorA.survey.description).toEqual("By B");

  creatorA.undo();
  expect(creatorA.survey.title).toEqual("");
  expect(creatorB.survey.title).toEqual("");
  expect(creatorB.survey.description).toEqual("By B");
  expect(creatorA.survey.description).toEqual("By B");
});

test("journal-sync: redo is a no-op when the peer changed the value since the undo", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorA.survey.title = "Hello1";
  creatorA.undo();
  expect(creatorA.survey.title).toEqual("");
  expect(creatorB.survey.title).toEqual("");

  creatorB.survey.title = "By B";
  expect(creatorA.survey.title).toEqual("By B");

  // A's redo expects to find the value its undo has left (empty), but B has
  // written since - the press consumes the redo entry and changes nothing.
  creatorA.redo();
  expect(creatorA.survey.title).toEqual("By B");
  expect(creatorB.survey.title).toEqual("By B");
  expect(creatorA.undoRedoManager.canRedo()).toBeFalsy();
});

test("journal-sync: a dead entry is consumed first, the next press undoes the valid own edit", () => {
  const { creatorA, creatorB } = makeCreators();

  creatorB.survey.description = "Kept";
  creatorA.survey.pages[0].addNewQuestion("text", "q1");
  const qB: any = creatorB.survey.getQuestionByName("q1");
  qB.title = "Doomed";
  expect(creatorA.survey.getQuestionByName("q1").title).toEqual("Doomed");
  creatorA.deleteElement(creatorA.survey.getQuestionByName("q1"));

  // Press 1: consumes the dead entry, visibly does nothing.
  creatorB.undo();
  expect(creatorB.survey.description).toEqual("Kept");
  expect(creatorA.survey.description).toEqual("Kept");
  expect(creatorB.undoRedoManager.canUndo()).toBeTruthy();

  // Press 2: undoes the remaining valid edit on both sides.
  creatorB.undo();
  expect(creatorB.survey.description).toEqual("");
  expect(creatorA.survey.description).toEqual("");
});

test("journal-sync: undo is a no-op after the peer deleted the whole page of the target", () => {
  const { creatorA, creatorB, pluginB } = makeCreators();

  creatorA.survey.addNewPage("page2");
  creatorA.survey.getPageByName("page2").addNewQuestion("text", "q2");
  const qB: any = creatorB.survey.getQuestionByName("q2");
  qB.title = "Edited on B";
  expect(creatorA.survey.getQuestionByName("q2").title).toEqual("Edited on B");

  creatorA.survey.removePage(creatorA.survey.getPageByName("page2"));
  expect(creatorB.survey.getPageByName("page2")).toBeFalsy();

  const recordsBefore = pluginB.records.length;
  creatorB.undo();
  expect(pluginB.records).toHaveLength(recordsBefore);
  expect(creatorB.survey.getPageByName("page2")).toBeFalsy();
  expect(creatorB.undoRedoManager.canUndo()).toBeFalsy();
  expect(creatorA.JSON).toEqual(creatorB.JSON);
});

test("journal-sync: redo is a no-op after the peer deleted the target", () => {
  const { creatorA, creatorB, pluginB } = makeCreators({
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "First" }] }]
  });
  const qB: any = creatorB.survey.getQuestionByName("q1");
  qB.title = "Edited on B";
  creatorB.undo();
  expect(creatorA.survey.getQuestionByName("q1").title).toEqual("First");
  expect(creatorB.undoRedoManager.canRedo()).toBeTruthy();

  creatorA.deleteElement(creatorA.survey.getQuestionByName("q1"));
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();

  const recordsBefore = pluginB.records.length;
  creatorB.redo();
  expect(pluginB.records).toHaveLength(recordsBefore);
  expect(creatorB.survey.getQuestionByName("q1")).toBeFalsy();
  expect(creatorB.undoRedoManager.canRedo()).toBeFalsy();
  expect(creatorA.JSON).toEqual(creatorB.JSON);
});

test("journal-sync: a transaction is consumed whole when any of its values was overwritten", () => {
  const { creatorA, creatorB } = makeCreators({
    pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "T0", description: "D0" }] }]
  });
  const qA: any = creatorA.survey.getQuestionByName("q1");
  const qB: any = creatorB.survey.getQuestionByName("q1");

  creatorB.startUndoRedoTransaction("batch");
  qB.title = "T1";
  qB.description = "D1";
  creatorB.stopUndoRedoTransaction();
  expect(qA.description).toEqual("D1");

  qA.description = "D2";
  expect(qB.description).toEqual("D2");

  // One value of B's transaction was overwritten since - undoing the rest
  // would tear the operation apart, so the whole entry is a no-op.
  creatorB.undo();
  expect(qB.title).toEqual("T1");
  expect(qB.description).toEqual("D2");
  expect(qA.title).toEqual("T1");
  expect(qA.description).toEqual("D2");
});
