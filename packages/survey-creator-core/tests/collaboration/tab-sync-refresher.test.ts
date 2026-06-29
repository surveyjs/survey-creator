import { SurveyModel } from "survey-core";
import { CreatorTester } from "../creator-tester";
import { UndoRedoSyncPlugin } from "../../src/collaboration/undo-redo-sync-plugin";
import { UndoRedoManager } from "../../src/plugins/undo-redo/undo-redo-manager";
import type { ISyncMessage } from "../../src/collaboration/undo-redo-serializer";

// These lock the Option-A wiring: the plugin's `applySerialized` itself refreshes
// the active Translation/Logic tab snapshot model (via the built-in
// TabSyncRefresher) the consumer just applies the message, nothing else.

function attach(creator: CreatorTester): UndoRedoSyncPlugin {
  const plugin = new UndoRedoSyncPlugin(creator);
  creator.addPlugin("undoredoSync", plugin);
  return plugin;
}

// One-way bridge: A's outbound messages are applied to B.
function bridge(from: UndoRedoSyncPlugin, to: UndoRedoSyncPlugin): void {
  from.onSerializedChanges = (msg: ISyncMessage) => to.applySerialized(JSON.parse(JSON.stringify(msg)));
}

test("applySerialized auto-refreshes the active Translation tab on the peer", () => {
  const startJSON = { pages: [{ name: "page1", elements: [{ type: "text", name: "q1", title: "Q1" }] }] };
  const A = new CreatorTester({ showTranslationTab: true });
  const B = new CreatorTester({ showTranslationTab: true });
  A.JSON = startJSON;
  B.JSON = startJSON;

  // B is viewing the Translation tab; activate its snapshot model.
  B.activeTab = "translation";
  const bModel: any = B.getPlugin("translation", false)?.model;
  expect(bModel).toBeTruthy();
  expect(bModel.getVisibleLocales()).not.toContain("de");

  bridge(attach(A), attach(B));

  // A writes a German title -> message carries "/title/de". B must surface the
  // "de" row in its Translation model WITHOUT any client-side refresh code.
  (A.survey.getQuestionByName("q1") as any).locTitle.setLocaleText("de", "Frage");

  expect((B.survey.getQuestionByName("q1") as any).locTitle.getLocaleText("de")).toEqual("Frage");
  // The plugin refreshed B's Translation model so it now lists "de". (Whether
  // "de" lands as an unchecked row or a selected column depends on whether the
  // env's surveyLocalization knows the locale; the unchecked-row nuance is
  // covered deterministically by translation-enable-locale.test.ts.)
  expect(bModel.getVisibleLocales()).toContain("de");
});

test("applySerialized auto-refreshes the active Logic tab on the peer", () => {
  const startJSON = {
    pages: [{
      name: "page1",
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2", visibleIf: "{q1} = 1" }
      ]
    }]
  };
  const A = new CreatorTester({ showLogicTab: true });
  const B = new CreatorTester({ showLogicTab: true });
  A.JSON = startJSON;
  B.JSON = startJSON;

  // B is viewing the Logic tab (view mode, no rule open).
  B.activeTab = "logic";
  const bModel: any = B.getPlugin("logic", false)?.model;
  expect(bModel).toBeTruthy();
  expect(bModel.items?.[0]?.expression).toBe("{q1} = 1");

  bridge(attach(A), attach(B));

  // A edits the rule expression -> B (in view mode) must auto-rebuild its list.
  (A.survey.getQuestionByName("q2") as any).visibleIf = "{q1} = 2";

  expect((B.survey.getQuestionByName("q2") as any).visibleIf).toBe("{q1} = 2");
  expect(bModel.items?.[0]?.expression).toBe("{q1} = 2");
});

test("a headless creator (no getPlugin) applies messages without a tab refresher", () => {
  // The server passes a duck-typed { undoRedoManager, survey }. applySerialized
  // must mutate the survey and never touch tabs (there are none).
  const survey = new SurveyModel({ pages: [{ name: "page1" }] });
  const plugin = new UndoRedoSyncPlugin({ undoRedoManager: new UndoRedoManager(), survey } as any);

  const msg: ISyncMessage = {
    kind: "transaction",
    id: "t1",
    actions: [{ kind: "property", locator: "/title/default", value: "Hello" }]
  } as ISyncMessage;

  expect(() => plugin.applySerialized(msg)).not.toThrow();
  expect(survey.title).toEqual("Hello");
});
