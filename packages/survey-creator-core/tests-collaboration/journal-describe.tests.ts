import { ItemValue, QuestionDropdownModel } from "survey-core";
import { CreatorTester } from "../tests/creator-tester";
import { describeRecord } from "../src/plugins/collaboration/journal";
import { CollaborationPlugin } from "../src/plugins/collaboration";
import { collaborationStrings } from "../src/plugins/collaboration/collaboration-strings";
import { IJournalArrayChangedPayload, JournalOp } from "../src/plugins/collaboration/journal/journal-record";
// Registers the locale names ("de" -> "Deutsch") the per-locale sentences read.
import "survey-core/survey.i18n";

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

function createRecorder(json: any = initialJSON): { a: CreatorTester, pluginA: CollaborationPlugin } {
  const a = new CreatorTester();
  a.JSON = json;
  const pluginA = new CollaborationPlugin(a, { presence: false, bar: false });
  a.addPlugin("collaboration", pluginA);
  return { a, pluginA };
}

const prop = (target: string, value: any): string =>
  describeRecord({ op: JournalOp.PropertyChanged, payload: { target, value } });

test("describe: a property change names the property, its owner and the new value", (): any => {
  expect(prop("/pages/page1/elements/userName/title", "User Name")).toEqual("Title of \"userName\" changed to \"User Name\"");
  expect(prop("/pages/page1/title", "Intro")).toEqual("Title of \"page1\" changed to \"Intro\"");
  expect(prop("/title", "What should we cover?")).toEqual("Title of the survey changed to \"What should we cover?\"");
  expect(prop("/pages/page1/elements/q2/choices/item1/text", "First")).toEqual("Text of \"item1\" changed to \"First\"");
  expect(prop("/pages/page1/elements/q1/visibleIf", "{q2} = 1")).toEqual("Visible if of \"q1\" changed to \"{q2} = 1\"");
  expect(prop("/pages/page1/elements/q1/maxLength", 25)).toEqual("Maximum character limit of \"q1\" changed to \"25\"");
});

test("describe: booleans turn on and off, empty values are cleared", (): any => {
  expect(prop("/pages/page1/elements/q1/isRequired", true)).toEqual("Required of \"q1\" turned on");
  expect(prop("/pages/page1/elements/q1/isRequired", false)).toEqual("Required of \"q1\" turned off");
  expect(prop("/pages/page1/elements/q1/description", "")).toEqual("Description of \"q1\" cleared");
  expect(prop("/pages/page1/elements/q1/description", null)).toEqual("Description of \"q1\" cleared");
  expect(prop("/pages/page1/elements/q1/description", "  \n ")).toEqual("Description of \"q1\" cleared");
  expect(prop("/description", undefined)).toEqual("Description of the survey cleared");
  expect(prop("/isSinglePage", true)).toMatch(/ of the survey turned on$/);
});

test("describe: a value too complex for a sentence just reads changed", (): any => {
  expect(prop("/pages/page1/elements/q1/maskSettings", { pattern: "999" })).toEqual("Mask settings of \"q1\" changed");
  expect(prop("/pages/page1/elements/q1/maxLength", NaN)).toEqual("Maximum character limit of \"q1\" changed");
  // A whole-dictionary write of a localizable property shows the source text...
  expect(prop("/pages/page1/elements/q1/title", { default: "User Name", de: "Benutzername" }))
    .toEqual("Title of \"q1\" changed to \"User Name\"");
  // ...and without one there is no text to quote.
  expect(prop("/pages/page1/elements/q1/title", { de: "Benutzername" })).toEqual("Title of \"q1\" changed");
});

test("describe: values are never truncated, whitespace runs become one space", (): any => {
  const long = "word ".repeat(80).trim();
  expect(prop("/pages/page1/elements/q1/title", long)).toEqual("Title of \"q1\" changed to \"" + long + "\"");
  expect(prop("/pages/page1/elements/q1/description", "first line\n\n  second line"))
    .toEqual("Description of \"q1\" changed to \"first line second line\"");
});

test("describe: the Translation tab's default column reads like a designer edit", (): any => {
  // The tab commits the default text per locale (".../title/default") so that
  // concurrent edits of other languages converge; the result is the same edit.
  expect(prop("/pages/page1/elements/question2/title/default", "123")).toEqual("Title of \"question2\" changed to \"123\"");
  expect(prop("/title/default", "Survey")).toEqual("Title of the survey changed to \"Survey\"");
  expect(prop("/pages/page1/elements/question2/title/default", "")).toEqual("Title of \"question2\" cleared");

  const { a, pluginA } = createRecorder();
  a.survey.getQuestionByName("q1").locTitle.setLocaleText("default", "123");
  const record = pluginA.records[pluginA.records.length - 1];
  expect(record.payload["target"]).toEqual("/pages/page1/elements/q1/title/default");
  expect(describeRecord(record)).toEqual("Title of \"q1\" changed to \"123\"");
});

test("describe: file content is described, never quoted", (): any => {
  // An uploaded logo or image is stored as a data: URL - often hundreds of KB of base64.
  expect(prop("/logo", "data:image/png;base64,iVBORw0KGgo" + "A".repeat(5000))).toEqual("Survey logo of the survey changed");
  expect(prop("/logo", { default: "data:image/png;base64,AAAA" })).toEqual("Survey logo of the survey changed");
  expect(prop("/pages/page1/elements/image1/imageLink", " DATA:image/svg+xml,<svg/>"))
    .toEqual("Image or video file URL of \"image1\" changed");
  // A link is short and says something: it is quoted.
  expect(prop("/logo", "https://example.com/logo.png")).toEqual("Survey logo of the survey changed to \"https://example.com/logo.png\"");
  expect(prop("/pages/page1/elements/q1/description", "see data: below"))
    .toEqual("Description of \"q1\" changed to \"see data: below\"");
});

test("describe: renames say what the element was called and is called now", (): any => {
  expect(prop("/pages/page1/elements/Question1/name", "userName")).toEqual("Question \"Question1\" renamed to \"userName\"");
  expect(prop("/pages/page1/name", "intro")).toEqual("Page \"page1\" renamed to \"intro\"");
  expect(prop("/pages/page1/elements/q2/choices/item1/value", "yes")).toEqual("Choice \"item1\" renamed to \"yes\"");
  expect(prop("/pages/page1/elements/q2/choices/item1/value", 1)).toEqual("Choice \"item1\" renamed to \"1\"");
  // The recorder could not address the old identity: nothing to rename from.
  expect(prop("/pages/page1/elements/userName/name", "userName")).toEqual("Name of \"userName\" changed to \"userName\"");
  expect(prop("/pages/page1/elements/q1/name", "")).toEqual("Name of \"q1\" cleared");
});

test("describe: a single-locale edit names the language", (): any => {
  expect(prop("/pages/page1/elements/q1/title/de", "Benutzername"))
    .toEqual("Title (Deutsch) of \"q1\" changed to \"Benutzername\"");
  expect(prop("/title/de", "Worum geht es?")).toEqual("Title (Deutsch) of the survey changed to \"Worum geht es?\"");
  expect(prop("/pages/page1/elements/q1/title/de", "")).toEqual("Title (Deutsch) of \"q1\" cleared");
  // A question named "title" is still an owner, not a localizable property.
  expect(prop("/pages/page1/elements/title/description", "x")).toEqual("Description of \"title\" changed to \"x\"");
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
  })).toEqual("Choices of \"q2\" changed");
  expect(describeRecord({
    op: JournalOp.ArrayChanged,
    payload: { target: "/pages/page1/elements/q2/choices", added: [{ index: 0, item: "a" }], removed: [{ key: "item1" }] }
  })).toEqual("Choices of \"q2\" changed");
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
  expect(describeRecord({ op: JournalOp.ArrayChanged, payload: { target: "/pages" } })).toEqual("Pages of the survey changed");
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
  expect(describeRecord(pluginA.records[1])).toEqual("Title of \"q1\" changed to \"Hello\"");

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

  const countBeforeRename = pluginA.records.length;
  a.survey.getQuestionByName("q1").name = "userName";
  const renameLabels = pluginA.records.slice(countBeforeRename).map(r => describeRecord(r));
  expect(renameLabels).toContain("Question \"q1\" renamed to \"userName\"");
});

test("describe: the sentences come from the string dictionary", () => {
  // Whole-sentence frames plus a substituted noun - proves nothing is glued
  // together from hardcoded English at runtime, which is what will let these
  // sentences be translated once localization lands.
  const overrides: { [index: string]: string } = {
    journalPropertySet: "[{1}] izmenilos svoystvo [{0}] na [{2}]",
    journalElementAdded: "{0} [{1}] dobavlen",
    journalNounQuestion: "Vopros",
    journalEdited: "Izmeneno"
  };
  const previous: { [index: string]: string } = {};
  Object.keys(overrides).forEach((key) => {
    previous[key] = collaborationStrings[key];
    collaborationStrings[key] = overrides[key];
  });
  try {
    expect(describeRecord({
      op: JournalOp.PropertyChanged,
      payload: { target: "/pages/page1/elements/q1/title", value: "x" }
    })).toEqual("[q1] izmenilos svoystvo [Title] na [x]");

    expect(describeRecord({
      op: JournalOp.ArrayChanged,
      payload: {
        target: "/pages/page1/elements",
        added: [{ index: 0, item: { type: "text", json: { name: "q9" } } }],
        removed: []
      }
    })).toEqual("Vopros [q9] dobavlen");

    expect(describeRecord({ op: 999, payload: {} })).toEqual("Izmeneno");
    // Untouched keys keep their own text.
    expect(describeRecord({ op: JournalOp.ElementReordered, payload: { target: "/pages" } }))
      .toEqual("Items reordered");
  } finally {
    Object.keys(previous).forEach((key) => collaborationStrings[key] = previous[key]);
  }
});
