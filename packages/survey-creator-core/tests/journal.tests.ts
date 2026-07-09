import { ItemValue, QuestionDropdownModel, QuestionTextModel } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { JournalPlugin } from "../src/plugins/journal";
import { IJournalArrayChangedPayload, IJournalPropertyChangedPayload, JOURNAL_VERSION, JournalOp } from "../src/plugins/journal/journal-record";

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
