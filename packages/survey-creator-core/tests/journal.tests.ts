import { ItemValue, QuestionDropdownModel, QuestionTextModel } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { JournalPlugin } from "../src/plugins/journal";
import { IJournalArrayChangedPayload, IJournalElementMovedPayload, IJournalPropertyChangedPayload, JOURNAL_VERSION, JournalOp, JournalSyncError } from "../src/plugins/journal/journal-record";

const initialJSON = {
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "q1" },
        { type: "dropdown", name: "q2", choices: ["item1", "item2", "item3"] }
      ]
    }
  ]
};

function createPair(json: any = initialJSON): { a: CreatorTester, pluginA: JournalPlugin, b: CreatorTester, pluginB: JournalPlugin, sync: () => void, expectInSync: () => void } {
  const a = new CreatorTester();
  a.JSON = json;
  const pluginA = new JournalPlugin(a);
  a.addPlugin("journal", pluginA);
  const b = new CreatorTester();
  b.JSON = json;
  const pluginB = new JournalPlugin(b);
  b.addPlugin("journal", pluginB);
  const sync = (): void => {
    // Round-trip through a string to enforce that records are pure JSON
    pluginB.apply(pluginA.toText());
    pluginA.clear();
  };
  const expectInSync = (): void => {
    expect(b.JSON).toEqual(a.JSON);
  };
  return { a, pluginA, b, pluginB, sync, expectInSync };
}

test("journal: property changes are recorded and applied", (): any => {
  const { a, pluginA, sync, expectInSync } = createPair();
  a.survey.title = "My survey";
  a.survey.getQuestionByName("q1").isRequired = true;
  expect(pluginA.records).toHaveLength(2);
  expect(pluginA.records[0].op).toEqual(JournalOp.PropertyChanged);
  sync();
  expectInSync();
});

test("journal: record envelope", (): any => {
  const { a, pluginA } = createPair();
  a.survey.title = "t1";
  a.survey.getQuestionByName("q1").isRequired = true;
  const records = pluginA.records;
  expect(records[0].v).toEqual(JOURNAL_VERSION);
  expect(records[1].seq).toBeGreaterThan(records[0].seq);
  expect(records[0].timestamp).toBeGreaterThan(0);
});

test("journal: add question from toolbox produces one record", (): any => {
  const { a, pluginA, sync, expectInSync } = createPair();
  a.clickToolboxItem({ type: "text" });
  expect(pluginA.records).toHaveLength(1);
  expect(pluginA.records[0].op).toEqual(JournalOp.ArrayChanged);
  const payload = <IJournalArrayChangedPayload>pluginA.records[0].payload;
  expect(payload.added).toHaveLength(1);
  expect(payload.added[0].item.json.name).toBeTruthy();
  sync();
  expectInSync();
});

test("journal: typing coalescing on by default", (): any => {
  const { a, pluginA, sync, expectInSync } = createPair();
  const q = a.survey.getQuestionByName("q1");
  q.title = "t";
  q.title = "ti";
  q.title = "tit";
  q.title = "titl";
  q.title = "title";
  expect(pluginA.records).toHaveLength(1);
  expect((<IJournalPropertyChangedPayload>pluginA.records[0].payload).value).toEqual("title");
  sync();
  expectInSync();
});

test("journal: coalescing disabled with coalesceInterval 0", (): any => {
  const a = new CreatorTester();
  a.JSON = initialJSON;
  const pluginA = new JournalPlugin(a, { coalesceInterval: 0 });
  a.addPlugin("journal", pluginA);
  const q = a.survey.getQuestionByName("q1");
  q.title = "t";
  q.title = "ti";
  q.title = "tit";
  expect(pluginA.records).toHaveLength(3);
});

test("journal: itemvalue edits use nested locators", (): any => {
  const { a, pluginA, sync, expectInSync } = createPair();
  const q = <QuestionDropdownModel>a.survey.getQuestionByName("q2");
  q.choices.push(new ItemValue("item4"));
  q.choices[0].text = "First";
  q.choices.splice(1, 1);
  const textRecord = pluginA.records[1];
  expect(textRecord.op).toEqual(JournalOp.PropertyChanged);
  const payload = <IJournalPropertyChangedPayload>textRecord.payload;
  expect(payload.target).toEqual("/pages/page1/elements/q2/choices/item1/text");
  sync();
  expectInSync();
});

test("journal: delete question and idempotent re-apply", (): any => {
  const { a, pluginA, b, pluginB, sync, expectInSync } = createPair();
  a.deleteElement(<any>a.survey.getQuestionByName("q1"));
  const text = pluginA.toText();
  sync();
  expectInSync();
  // applying the same records once more must not break anything
  const results = pluginB.apply(text);
  results.forEach(r => expect(r.success).toBeTruthy());
  expectInSync();
  expect(b.survey.getQuestionByName("q1")).toBeFalsy();
});

test("journal: reorder elements", (): any => {
  const { a, pluginA, sync, expectInSync } = createPair();
  const page = a.survey.pages[0];
  const q = page.elements[0];
  a.startUndoRedoTransaction("drag drop");
  page.elements.splice(0, 1);
  page.elements.splice(1, 0, q);
  a.stopUndoRedoTransaction();
  expect(pluginA.records).toHaveLength(1);
  expect(pluginA.records[0].op).toEqual(JournalOp.ElementReordered);
  sync();
  expectInSync();
});

test("journal: reorder is applied as a move, receiver keeps the instance and its attributes", (): any => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          { type: "text", name: "q1", title: "Q1 title", isRequired: true, inputType: "email" },
          { type: "text", name: "q2" },
          { type: "text", name: "q3" }
        ]
      }
    ]
  };
  const { a, pluginA, b, sync, expectInSync } = createPair(json);
  const qB: any = b.survey.getQuestionByName("q1");
  const page = a.survey.pages[0];
  const q = page.elements[0];
  a.startUndoRedoTransaction("drag drop");
  page.elements.splice(0, 1);
  page.elements.splice(2, 0, q);
  a.stopUndoRedoTransaction();
  // The move travels as a single reorder record addressing the element by
  // identity - no serialized copy, so the receiver cannot delete/recreate it.
  expect(pluginA.records).toHaveLength(1);
  expect(pluginA.records[0].op).toEqual(JournalOp.ElementReordered);
  const payload: any = pluginA.records[0].payload;
  expect(payload.key).toEqual("q1");
  expect(payload.item).toBeUndefined();
  sync();
  expectInSync();
  // The receiver moved its EXISTING question instance...
  expect(b.survey.pages[0].elements[2]).toBe(qB);
  expect(b.survey.getQuestionByName("q1")).toBe(qB);
  // ...so every attribute survives the move.
  expect(qB.title).toEqual("Q1 title");
  expect(qB.isRequired).toBeTruthy();
  expect(qB.inputType).toEqual("email");
});

test("journal: move question to another page preserves attributes", (): any => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          { type: "text", name: "q1" },
          { type: "dropdown", name: "q2", title: "Pick one", isRequired: true, choices: [{ value: "item1", text: "First" }, "item2"] }
        ]
      },
      { name: "page2", elements: [{ type: "comment", name: "q3" }] }
    ]
  };
  const { a, pluginA, b, sync, expectInSync } = createPair(json);
  const qbBefore = b.survey.getQuestionByName("q2");
  let addedOnB = 0;
  b.onQuestionAdded.add(() => addedOnB++);
  const page1 = a.survey.pages[0];
  const page2 = a.survey.pages[1];
  const q = <QuestionDropdownModel>a.survey.getQuestionByName("q2");
  // An unsynced edit right before the move must not get lost in transit.
  q.placeholder = "Choose...";
  a.startUndoRedoTransaction("drag drop");
  page1.elements.splice(1, 1);
  page2.elements.splice(0, 0, q);
  a.stopUndoRedoTransaction();
  // An edit after the move must resolve by the new location.
  q.description = "Moved to page2";
  // The move itself is a single atomic record, not an add/remove pair.
  expect(pluginA.records).toHaveLength(3);
  expect(pluginA.records[1].op).toEqual(JournalOp.ElementMoved);
  const movePayload = <IJournalElementMovedPayload>pluginA.records[1].payload;
  expect(movePayload.from).toEqual("/pages/page1/elements");
  expect(movePayload.to).toEqual("/pages/page2/elements");
  expect(movePayload.index).toEqual(0);
  expect(movePayload.key).toEqual("q2");
  sync();
  expectInSync();
  expect(b.survey.pages[0].elements.map(e => e.name)).toEqual(["q1"]);
  expect(b.survey.pages[1].elements.map(e => e.name)).toEqual(["q2", "q3"]);
  const qb = <QuestionDropdownModel>b.survey.getQuestionByName("q2");
  // The receiver relocated its EXISTING instance - a move, not delete/create -
  // and, like the sender's drag&drop, did not report it as a question add.
  expect(qb).toBe(qbBefore);
  expect(addedOnB).toEqual(0);
  expect(qb.page.name).toEqual("page2");
  expect(qb.title).toEqual("Pick one");
  expect(qb.isRequired).toBeTruthy();
  expect(qb.placeholder).toEqual("Choose...");
  expect(qb.description).toEqual("Moved to page2");
  expect(qb.choices.map(c => c.value)).toEqual(["item1", "item2"]);
  expect(qb.choices[0].text).toEqual("First");
});

test("journal: move question into a panel preserves attributes", (): any => {
  const json = {
    pages: [
      {
        name: "page1",
        elements: [
          { type: "text", name: "q1", title: "Move me", isRequired: true },
          { type: "panel", name: "panel1", elements: [{ type: "comment", name: "q3" }] }
        ]
      }
    ]
  };
  const { a, pluginA, b, sync, expectInSync } = createPair(json);
  const qbBefore = b.survey.getQuestionByName("q1");
  let addedOnB = 0;
  b.onQuestionAdded.add(() => addedOnB++);
  const panel: any = a.survey.getPanelByName("panel1");
  const q: any = a.survey.getQuestionByName("q1");
  a.startUndoRedoTransaction("drag drop");
  a.survey.pages[0].elements.splice(0, 1);
  panel.elements.splice(1, 0, q);
  a.stopUndoRedoTransaction();
  expect(pluginA.records).toHaveLength(1);
  expect(pluginA.records[0].op).toEqual(JournalOp.ElementMoved);
  expect((<IJournalElementMovedPayload>pluginA.records[0].payload).to).toEqual("/pages/page1/elements/panel1/elements");
  sync();
  expectInSync();
  expect(b.survey.pages[0].elements.map(e => e.name)).toEqual(["panel1"]);
  const panelB: any = b.survey.getPanelByName("panel1");
  expect(panelB.elements.map(e => e.name)).toEqual(["q3", "q1"]);
  const qb: any = b.survey.getQuestionByName("q1");
  // The receiver relocated its EXISTING instance - a move, not delete/create -
  // and, like the sender's drag&drop, did not report it as a question add.
  expect(qb).toBe(qbBefore);
  expect(addedOnB).toEqual(0);
  expect(qb.parent.name).toEqual("panel1");
  expect(qb.title).toEqual("Move me");
  expect(qb.isRequired).toBeTruthy();
});

test("journal: undo of a cross-page move travels as an array pair and converges", (): any => {
  const json = {
    pages: [
      { name: "page1", elements: [{ type: "text", name: "q1", title: "T1", isRequired: true }] },
      { name: "page2", elements: [{ type: "comment", name: "q2" }] }
    ]
  };
  const { a, pluginA, b, sync, expectInSync } = createPair(json);
  const q = a.survey.getQuestionByName("q1");
  a.startUndoRedoTransaction("drag drop");
  a.survey.pages[0].elements.splice(0, 1);
  a.survey.pages[1].elements.splice(0, 0, q);
  a.stopUndoRedoTransaction();
  sync();
  expectInSync();
  a.undo();
  // The undo notifies the pair in remove-first order; the remove record has
  // already been emitted to live peers by the time the add arrives, so the
  // pair is NOT merged - it converges through the arrayChanged pair path
  // (the add record carries the full serialized element).
  expect(pluginA.records).toHaveLength(2);
  pluginA.records.forEach(r => expect(r.op).toEqual(JournalOp.ArrayChanged));
  sync();
  expectInSync();
  const qb: any = b.survey.getQuestionByName("q1");
  expect(qb.page.name).toEqual("page1");
  expect(qb.title).toEqual("T1");
  expect(qb.isRequired).toBeTruthy();
});

test("journal: element move record re-applies as a no-op", (): any => {
  const json = {
    pages: [
      { name: "page1", elements: [{ type: "text", name: "q1" }] },
      { name: "page2" }
    ]
  };
  const { a, pluginA, b, pluginB, sync, expectInSync } = createPair(json);
  const q = a.survey.getQuestionByName("q1");
  a.startUndoRedoTransaction("drag drop");
  a.survey.pages[0].elements.splice(0, 1);
  a.survey.pages[1].elements.splice(0, 0, q);
  a.stopUndoRedoTransaction();
  const text = pluginA.toText();
  sync();
  expectInSync();
  const results = pluginB.apply(text);
  results.forEach(r => expect(r.success).toBeTruthy());
  expectInSync();
  expect(b.survey.getQuestionByName("q1").page.name).toEqual("page2");
});

test("journal: moving a missing element reports JournalSyncError", (): any => {
  const { pluginB } = createPair();
  const record: any = {
    v: JOURNAL_VERSION,
    seq: 1,
    timestamp: new Date().getTime(),
    op: JournalOp.ElementMoved,
    payload: { from: "/pages/page1/elements", to: "/pages/page1/elements", index: 0, key: "missing" }
  };
  const results = pluginB.apply(JSON.stringify([record]));
  expect(results[0].success).toBeFalsy();
  expect(results[0].errorName).toEqual("JournalSyncError");
  expect(() => pluginB.apply([record], { strict: true })).toThrow(JournalSyncError);
});

test("journal: programmatic move without a transaction converges via the array-pair path", (): any => {
  const json = {
    pages: [
      { name: "page1", elements: [{ type: "text", name: "q1", title: "T", isRequired: true }] },
      { name: "page2", elements: [{ type: "comment", name: "q2" }] }
    ]
  };
  const { a, pluginA, b, sync, expectInSync } = createPair(json);
  const q: any = a.survey.getQuestionByName("q1");
  // Two independent single-action changes (no drag&drop transaction): the
  // journal still gets the classic add+remove pair of array records.
  q.page = a.survey.pages[1];
  expect(pluginA.records.length).toBeGreaterThan(1);
  pluginA.records.forEach(r => expect(r.op).toEqual(JournalOp.ArrayChanged));
  sync();
  expectInSync();
  const qb: any = b.survey.getQuestionByName("q1");
  expect(qb.page.name).toEqual("page2");
  expect(qb.title).toEqual("T");
  expect(qb.isRequired).toBeTruthy();
});

test("journal: reorder choices is applied as a move, item instance and text survive", (): any => {
  const { a, pluginA, b, sync, expectInSync } = createPair();
  const qA = <QuestionDropdownModel>a.survey.getQuestionByName("q2");
  qA.choices[0].text = "First";
  sync();
  expectInSync();
  const qB = <QuestionDropdownModel>b.survey.getQuestionByName("q2");
  const itemB = qB.choices[0];
  const item = qA.choices[0];
  a.startUndoRedoTransaction("drag drop");
  qA.choices.splice(0, 1);
  qA.choices.splice(2, 0, item);
  a.stopUndoRedoTransaction();
  expect(pluginA.records).toHaveLength(1);
  expect(pluginA.records[0].op).toEqual(JournalOp.ElementReordered);
  const payload: any = pluginA.records[0].payload;
  expect(payload.target).toEqual("/pages/page1/elements/q2/choices");
  expect(payload.key).toEqual("item1");
  sync();
  expectInSync();
  expect(qB.choices.map(c => c.value)).toEqual(["item2", "item3", "item1"]);
  expect(qB.choices[2]).toBe(itemB);
  expect(qB.choices[2].text).toEqual("First");
});

test("journal: add page", (): any => {
  const { a, sync, expectInSync } = createPair();
  a.survey.addNewPage("page2");
  sync();
  expectInSync();
});

test("journal: convert question", (): any => {
  const { a, pluginA, b, sync, expectInSync } = createPair();
  a.selectQuestionByName("q1");
  a.convertCurrentQuestion("comment");
  expect(pluginA.records[pluginA.records.length - 1].op).toEqual(JournalOp.ElementConverted);
  sync();
  expectInSync();
  expect(b.survey.getQuestionByName("q1").getType()).toEqual("comment");
});

test("journal: convert question subtype keeps the type but must still apply", (): any => {
  const { a, pluginA, b, pluginB, sync, expectInSync } = createPair();
  // Input-subtype conversion (text -> text with inputType "email") goes through
  // question conversion, so the receiver sees the SAME element type and must
  // not treat the record as "already converted".
  a.selectQuestionByName("q1");
  a.convertCurrentQuestion("text", { inputType: "email" });
  expect(pluginA.records[pluginA.records.length - 1].op).toEqual(JournalOp.ElementConverted);
  const text = pluginA.toText();
  sync();
  expectInSync();
  const qb: any = b.survey.getQuestionByName("q1");
  expect(qb.getType()).toEqual("text");
  expect(qb.inputType).toEqual("email");
  // Idempotency still holds: re-applying the identical record is a no-op.
  const results = pluginB.apply(text);
  results.forEach(r => expect(r.success).toBeTruthy());
  expectInSync();
  expect((<any>b.survey.getQuestionByName("q1")).inputType).toEqual("email");
});

test("journal: undo on sender propagates as inverse operation", (): any => {
  const { a, sync, expectInSync } = createPair();
  const q = a.survey.getQuestionByName("q1");
  q.title = "changed title";
  sync();
  expectInSync();
  a.undo();
  sync();
  expectInSync();
});

test("journal: records after rename resolve by the new name", (): any => {
  const { a, b, sync, expectInSync } = createPair();
  const q = <QuestionTextModel>a.survey.getQuestionByName("q1");
  q.name = "renamed";
  q.title = "new title";
  sync();
  expectInSync();
  expect(b.survey.getQuestionByName("renamed").title).toEqual("new title");
});

test("journal: JSON editor tab produces a full snapshot", (): any => {
  const { a, pluginA, sync, expectInSync } = createPair();
  const newJSON = { pages: [{ name: "pageA", elements: [{ type: "comment", name: "qA" }] }] };
  a.changeText(JSON.stringify(newJSON), false, true);
  a.setModified({ type: "JSON_EDITOR" });
  expect(pluginA.records).toHaveLength(1);
  expect(pluginA.records[0].op).toEqual(JournalOp.FullSnapshot);
  sync();
  expectInSync();
});

test("journal: applying does not echo into the receiver journal", (): any => {
  const { a, b, pluginB, sync } = createPair();
  a.survey.title = "from A";
  sync();
  expect(pluginB.records).toHaveLength(0);
  // a local edit on B is still recorded
  b.survey.getQuestionByName("q1").isRequired = true;
  expect(pluginB.records).toHaveLength(1);
});

test("journal: translations travel per locale", (): any => {
  const { a, b, pluginA, sync, expectInSync } = createPair();
  const q = a.survey.getQuestionByName("q1");
  q.title = "Hello";
  q.locTitle.setLocaleText("de", "Hallo");
  // Default text is a whole-property record, the German edit is per-locale.
  expect(pluginA.records[0].payload["target"]).toEqual("/pages/page1/elements/q1/title");
  expect(pluginA.records[1].payload["target"]).toEqual("/pages/page1/elements/q1/title/de");
  expect(pluginA.records[1].payload["value"]).toEqual("Hallo");
  sync();
  expectInSync();
  const bTitle = b.survey.getQuestionByName("q1").locTitle;
  expect(bTitle.getLocaleText("")).toEqual("Hello");
  expect(bTitle.getLocaleText("de")).toEqual("Hallo");
});

test("journal: concurrent edits of different locales of the same string converge", (): any => {
  // The classic weakness of whole-dictionary replace: A edits fr, B edits de
  // concurrently. Per-locale targets make the two edits independent, so both
  // survive and the replicas converge.
  const makeOne = () => {
    const c = new CreatorTester();
    c.JSON = { pages: [{ name: "page1", elements: [{ type: "text", name: "q1" }] }] };
    const p = new JournalPlugin(c);
    c.addPlugin("journal", p);
    const q: any = c.survey.getQuestionByName("q1");
    q.locTitle.setLocaleText("", "Your name");
    p.clear();
    return { c, p, q };
  };
  const A = makeOne();
  const B = makeOne();

  A.q.locTitle.setLocaleText("fr", "Votre nom");
  B.q.locTitle.setLocaleText("de", "Wie heissen Sie?");

  const recA = A.p.toText();
  const recB = B.p.toText();
  B.p.apply(recA);
  A.p.apply(recB);

  for (const q of [A.q, B.q]) {
    expect(q.locTitle.getLocaleText("")).toEqual("Your name");
    expect(q.locTitle.getLocaleText("fr")).toEqual("Votre nom");
    expect(q.locTitle.getLocaleText("de")).toEqual("Wie heissen Sie?");
  }
});

test("journal: manual snapshot bootstraps an empty receiver", (): any => {
  const { a, pluginA, b, pluginB } = createPair();
  b.JSON = {};
  a.survey.title = "bootstrap me";
  pluginA.clear();
  pluginA.snapshot();
  pluginB.apply(pluginA.toText());
  expect(b.JSON).toEqual(a.JSON);
});

test("journal: startRecording/stopRecording", (): any => {
  const { a, pluginA } = createPair();
  pluginA.stopRecording();
  a.survey.title = "not recorded";
  expect(pluginA.records).toHaveLength(0);
  pluginA.startRecording();
  a.survey.title = "recorded";
  expect(pluginA.records).toHaveLength(1);
});

test("journal: constructor throws without the undo-redo plugin", (): any => {
  const creator = new CreatorTester();
  creator.JSON = initialJSON;
  // The creator registers the undoredo plugin unconditionally; simulate a
  // hypothetical opt-out to pin the recorder's fail-loudly contract.
  (<any>creator).plugins["undoredo"] = undefined;
  expect(creator.undoRedoController).toBeFalsy();
  expect(() => new JournalPlugin(creator)).toThrow(/undo-redo/);
});
