import { ItemValue, QuestionDropdownModel } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { JournalPlugin, describeRecord } from "../src/plugins/journal";
import { IJournalArrayChangedPayload, JournalOp } from "../src/plugins/journal/journal-record";

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

function createRecorder(json: any = initialJSON): { a: CreatorTester, pluginA: JournalPlugin } {
  const a = new CreatorTester();
  a.JSON = json;
  const pluginA = new JournalPlugin(a);
  a.addPlugin("journal", pluginA);
  return { a, pluginA };
}

test("describe: property changed", (): any => {
  expect(describeRecord({ op: JournalOp.PropertyChanged, payload: { target: "/pages/page1/elements/q1/title", value: "x" } }))
    .toEqual("Property \"title\" changed on \"q1\"");
  expect(describeRecord({ op: JournalOp.PropertyChanged, payload: { target: "/pages/page1/title", value: "x" } }))
    .toEqual("Property \"title\" changed on \"page1\"");
  expect(describeRecord({ op: JournalOp.PropertyChanged, payload: { target: "/title", value: "x" } }))
    .toEqual("Survey property \"title\" changed");
  expect(describeRecord({ op: JournalOp.PropertyChanged, payload: { target: "/pages/page1/elements/q2/choices/item1/text", value: "First" } }))
    .toEqual("Property \"text\" changed on \"item1\"");
});

test("describe: array changed - single add", (): any => {
  expect(describeRecord({
    op: JournalOp.ArrayChanged,
    payload: { target: "/pages/page1/elements", added: [{ index: 2, item: { type: "text", json: { name: "question3" } } }], removed: [] }
  })).toEqual("Question \"question3\" added");
  expect(describeRecord({
    op: JournalOp.ArrayChanged,
    payload: { target: "/pages/page1/elements", added: [{ index: 2, item: { type: "panel", json: { name: "panel1" } } }], removed: [] }
  })).toEqual("Panel \"panel1\" added");
  expect(describeRecord({
    op: JournalOp.ArrayChanged,
    payload: { target: "/pages/page1/elements/q2/choices", added: [{ index: 3, item: { type: "itemvalue", json: { value: "item4" } } }], removed: [] }
  })).toEqual("Choice \"item4\" added");
  expect(describeRecord({
    op: JournalOp.ArrayChanged,
    payload: { target: "/pages", added: [{ index: 1, item: { type: "page", json: { name: "page2" } } }], removed: [] }
  })).toEqual("Page \"page2\" added");
  // No identity on the added item -> noun only.
  expect(describeRecord({
    op: JournalOp.ArrayChanged,
    payload: { target: "/pages/page1/elements", added: [{ index: 0, item: { type: "text", json: {} } }], removed: [] }
  })).toEqual("Question added");
});

test("describe: array changed - single remove", (): any => {
  expect(describeRecord({
    op: JournalOp.ArrayChanged,
    payload: { target: "/pages/page1/elements/q2/choices", added: [], removed: [{ key: "item2" }] }
  })).toEqual("Choice \"item2\" removed");
  expect(describeRecord({
    op: JournalOp.ArrayChanged,
    payload: { target: "/pages/page1/elements", added: [], removed: [{ matchJSON: { type: "text" } }] }
  })).toEqual("Question removed");
});

test("describe: array changed - fullValue or mixed falls back to property text", (): any => {
  expect(describeRecord({
    op: JournalOp.ArrayChanged,
    payload: { target: "/pages/page1/elements/q2/choices", added: [], removed: [], fullValue: ["a", "b"] }
  })).toEqual("Property \"choices\" changed on \"q2\"");
  expect(describeRecord({
    op: JournalOp.ArrayChanged,
    payload: { target: "/pages/page1/elements/q2/choices", added: [{ index: 0, item: "a" }], removed: [{ key: "item1" }] }
  })).toEqual("Property \"choices\" changed on \"q2\"");
});

test("describe: element removed", (): any => {
  expect(describeRecord({ op: JournalOp.ElementRemoved, payload: { target: "/pages/page1/elements/q1" } }))
    .toEqual("Question \"q1\" removed");
  expect(describeRecord({ op: JournalOp.ElementRemoved, payload: { target: "/pages/page2" } }))
    .toEqual("Page \"page2\" removed");
});

test("describe: element reordered", (): any => {
  expect(describeRecord({ op: JournalOp.ElementReordered, payload: { target: "/pages/page1/elements", indexFrom: 0, indexTo: 1, key: "q1" } }))
    .toEqual("Question \"q1\" reordered");
  expect(describeRecord({ op: JournalOp.ElementReordered, payload: { target: "/pages/page1/elements", indexFrom: 0, indexTo: 1 } }))
    .toEqual("Items reordered");
});

test("describe: element converted", (): any => {
  expect(describeRecord({
    op: JournalOp.ElementConverted,
    payload: { target: "/pages/page1/elements/q1", element: { type: "radiogroup", json: { name: "q1" } }, index: 0 }
  })).toEqual("Question \"q1\" changed to Radio Button Group");
  // Unknown type falls back to the raw type name.
  expect(describeRecord({
    op: JournalOp.ElementConverted,
    payload: { target: "/pages/page1/elements/q1", element: { type: "sometype", json: {} }, index: 0 }
  })).toEqual("Question \"q1\" changed to sometype");
});

test("describe: element moved", (): any => {
  expect(describeRecord({
    op: JournalOp.ElementMoved,
    payload: { from: "/pages/page1/elements", to: "/pages/page2/elements", index: 0, key: "q3" }
  })).toEqual("Question \"q3\" moved to \"page2\"");
  expect(describeRecord({
    op: JournalOp.ElementMoved,
    payload: { from: "/pages/page1/elements", to: "/pages", index: 0, key: "q3" }
  })).toEqual("Page \"q3\" moved");
});

test("describe: full snapshot", (): any => {
  expect(describeRecord({ op: JournalOp.FullSnapshot, payload: { json: {}, label: "Milestone 1" } })).toEqual("Milestone 1");
  expect(describeRecord({ op: JournalOp.FullSnapshot, payload: { json: {} } })).toEqual("Survey edited");
  expect(describeRecord({ op: JournalOp.FullSnapshot })).toEqual("Survey edited");
});

test("describe: never throws on unknown or malformed input", (): any => {
  expect(describeRecord({ op: 99, payload: {} })).toEqual("Edited");
  expect(describeRecord({ op: JournalOp.PropertyChanged })).toEqual("Edited");
  expect(describeRecord({ op: JournalOp.PropertyChanged, payload: { target: 42 } })).toEqual("Edited");
  expect(describeRecord({ op: JournalOp.PropertyChanged, payload: { target: "" } })).toEqual("Edited");
  expect(describeRecord({ op: JournalOp.ArrayChanged, payload: { target: "/pages" } })).toEqual("Survey property \"pages\" changed");
  expect(describeRecord({ op: JournalOp.ArrayChanged, payload: { target: "/pages", added: [{ index: 0 }], removed: [] } })).toEqual("Page added");
  expect(describeRecord({ op: JournalOp.ElementMoved, payload: {} })).toEqual("Item moved");
  expect(describeRecord({ op: JournalOp.ElementRemoved, payload: { target: null } })).toEqual("Edited");
});

test("describe: recorder integration - real records get expected labels", (): any => {
  const { a, pluginA } = createRecorder();

  a.clickToolboxItem({ type: "text" });
  const addPayload = <IJournalArrayChangedPayload>pluginA.records[0].payload;
  const addedName = addPayload.added[0].item.json.name;
  expect(describeRecord(pluginA.records[0])).toEqual(`Question "${addedName}" added`);

  a.survey.getQuestionByName("q1").title = "Hello";
  expect(describeRecord(pluginA.records[1])).toEqual("Property \"title\" changed on \"q1\"");

  const q2 = <QuestionDropdownModel>a.survey.getQuestionByName("q2");
  q2.choices.push(new ItemValue("item4"));
  expect(describeRecord(pluginA.records[2])).toEqual("Choice \"item4\" added");

  a.selectQuestionByName("q1");
  a.convertCurrentQuestion("comment");
  const convertRecord = pluginA.records.filter(r => r.op === JournalOp.ElementConverted)[0];
  expect(describeRecord(convertRecord)).toEqual("Question \"q1\" changed to Long Text");

  const countBefore = pluginA.records.length;
  a.deleteElement(<any>a.survey.getQuestionByName("q2"));
  const deleteLabels = pluginA.records.slice(countBefore).map(r => describeRecord(r));
  expect(deleteLabels).toContain("Question \"q2\" removed");
});
