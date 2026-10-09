import { CreatorTester } from "../tests/creator-tester";
import { IPresencePeerEntry, IPresenceState, logicRuleKey, presenceColorSlot } from "../src/plugins/collaboration/presence";
import { CollaborationPlugin } from "../src/plugins/collaboration";
import { IJournalRecord } from "../src/plugins/collaboration/journal/journal-record";

// LogicLockGuard: an existing Logic-tab rule a remote participant has open
// (`rule` + `lock: true` in presence) is read-only for everyone else, and so
// are the properties it writes in the designer.

const JSON_WITH_RULES = {
  pages: [{
    name: "page1",
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" },
      { type: "text", name: "q3", enableIf: "{q1} = 2" }
    ]
  }]
};
const RULE1 = "|{q1} = 1"; // q2.visibleIf
const RULE2 = "|{q1} = 2"; // q3.enableIf

function createCreator(localId: string = "b"): { creator: CreatorTester, plugin: CollaborationPlugin } {
  const creator = new CreatorTester();
  creator.JSON = JSON_WITH_RULES;
  const plugin = new CollaborationPlugin(creator, { bar: false });
  creator.addPlugin("collaboration", plugin);
  plugin.setClientId(localId);
  return { creator, plugin };
}

const ruleHolder = (clientId: string, rule: string | null, state: Partial<IPresenceState> = {}): IPresencePeerEntry => ({
  clientId,
  name: `User ${clientId}`,
  state: <IPresenceState>{ tab: "logic", sel: null, rule, lock: !!rule, focus: null, trLoc: null, cur: null, ...state }
});

// The Logic tab sets the edited rule in its detail-panel callback; the lock
// code reads it after the dispatch (a microtask).
const flush = (): Promise<void> => new Promise((resolve) => setTimeout(resolve, 0));

function logicModel(creator: CreatorTester): any {
  return (<any>creator.getPlugin("logic")).model;
}
function rowOf(creator: CreatorTester, rule: string): any {
  const model = logicModel(creator);
  const index = model.items.findIndex((item: any) => logicRuleKey(item) === rule);
  return model.matrixItems.visibleRows[index];
}
async function openRule(creator: CreatorTester, rule: string): Promise<any> {
  creator.makeNewViewActive("logic");
  rowOf(creator, rule).showDetailPanel();
  await flush();
  return logicModel(creator);
}
function editorsReadOnly(model: any): boolean {
  return model.expressionEditor.editSurvey.readOnly && model.itemEditor.editSurvey.readOnly;
}

test("logic lock: the rule key names the owning question and the expression", (): any => {
  const { creator, plugin } = createCreator();
  try {
    creator.makeNewViewActive("logic");
    const keys = logicModel(creator).items.map((item: any) => logicRuleKey(item));
    expect(keys).toEqual([RULE1, RULE2]);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: opening an existing rule announces and claims it; closing releases it", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  try {
    await openRule(creator, RULE1);
    expect(plugin.getState().tab).toEqual("logic");
    expect(plugin.getState().rule).toEqual(RULE1);
    expect(plugin.getState().lock).toBe(true);
    rowOf(creator, RULE1).hideDetailPanel();
    await flush();
    expect(plugin.getState().rule).toBeNull();
    expect(plugin.getState().lock).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: a rule being created is not announced", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  try {
    creator.makeNewViewActive("logic");
    logicModel(creator).addNewUI();
    await flush();
    expect(logicModel(creator).mode).toEqual("new");
    expect(plugin.getState().rule).toBeNull();
    expect(plugin.getState().lock).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: a held rule's properties are read-only in the designer", (): any => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(ruleHolder("a", RULE1));
    const q2 = creator.survey.getQuestionByName("q2");
    expect(creator.isCanModifyProperty(q2, "visibleIf")).toBe(false);
    expect(creator.isCanModifyProperty(q2, "title")).toBe(true);
    expect(creator.isCanModifyProperty(creator.survey.getQuestionByName("q3"), "enableIf")).toBe(true);
    creator.selectElement(q2);
    expect(creator.propertyGrid.getQuestionByName("visibleIf").isReadOnly).toBe(true);
    expect(creator.propertyGrid.getQuestionByName("title").isReadOnly).toBe(false);
    plugin.removePeer("a");
    expect(creator.isCanModifyProperty(q2, "visibleIf")).toBe(true);
    expect(creator.propertyGrid.getQuestionByName("visibleIf").isReadOnly).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: a viewer of a held rule cannot change, save or delete it", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  const notes: Array<string> = [];
  try {
    plugin.upsertPeer(ruleHolder("a", RULE1));
    const model = await openRule(creator, RULE1);
    expect(plugin.getState().rule).toEqual(RULE1);
    expect(plugin.getState().lock).toBe(false);
    expect(editorsReadOnly(model)).toBe(true);
    const done = rowOf(creator, RULE1).detailPanel.getFooterToolbar().getActionById("saveDetailPanel");
    expect(done.visible).toBe(false);

    creator.onNotify.add((_, o) => notes.push(o.message));
    expect(model.saveEditableItem()).toBe(false);
    expect(notes.some((n) => n.indexOf("User a is editing this rule") >= 0)).toBe(true);
    const item = model.editableItem;
    model.removeItem(item);
    expect(model.items.indexOf(item)).toBeGreaterThanOrEqual(0);
    expect(creator.survey.getQuestionByName("q2").visibleIf).toEqual("{q1} = 1");
  } finally {
    plugin.dispose();
  }
});

test("logic lock: the other rules stay editable", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(ruleHolder("a", RULE1));
    const model = await openRule(creator, RULE2);
    expect(plugin.getState().lock).toBe(true);
    expect(editorsReadOnly(model)).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: the viewer takes the rule over when the holder closes it", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(ruleHolder("a", RULE1));
    const model = await openRule(creator, RULE1);
    expect(editorsReadOnly(model)).toBe(true);
    plugin.upsertPeer(ruleHolder("a", null));
    expect(plugin.getState().lock).toBe(true);
    expect(editorsReadOnly(model)).toBe(false);
    expect(rowOf(creator, RULE1).detailPanel.getFooterToolbar().getActionById("saveDetailPanel").visible).toBe(true);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: a stale viewer is closed, not unlocked, when the holder lets go", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  // A peer's change, recorded by a second creator.
  const other = createCreator("a");
  const records: Array<IJournalRecord> = [];
  other.plugin.onRecordAdded.add((_, o) => records.push(JSON.parse(JSON.stringify(o.record))));
  other.creator.survey.getQuestionByName("q3").title = "Changed";
  try {
    plugin.upsertPeer(ruleHolder("a", RULE1));
    const model = await openRule(creator, RULE1);
    plugin.apply(records);
    plugin.upsertPeer(ruleHolder("a", null));
    await flush();
    expect(model.mode).toEqual("view");
    expect(plugin.getState().rule).toBeNull();
  } finally {
    plugin.dispose();
    other.plugin.dispose();
  }
});

test("logic lock: a concurrent claim is won by the smaller clientId", async (): Promise<any> => {
  const { creator, plugin } = createCreator("b");
  try {
    const model = await openRule(creator, RULE1);
    expect(plugin.getState().lock).toBe(true);
    plugin.upsertPeer(ruleHolder("c", RULE1));
    expect(plugin.getState().lock).toBe(true);
    expect(editorsReadOnly(model)).toBe(false);
    plugin.upsertPeer(ruleHolder("a", RULE1));
    expect(plugin.getState().lock).toBe(false);
    expect(editorsReadOnly(model)).toBe(true);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: a rule writing a question held in the designer is read-only", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer({
      clientId: "a", name: "User a",      state: <IPresenceState>{ tab: "designer", sel: { loc: "/pages/page1/elements/q2", name: "q2" }, lock: true, focus: null, cur: null }
    });
    const model = await openRule(creator, RULE1);
    expect(plugin.getState().lock).toBe(false);
    expect(editorsReadOnly(model)).toBe(true);
    // A rule that only READS the held question in its condition is free.
    rowOf(creator, RULE1).hideDetailPanel();
    await flush();
    await openRule(creator, RULE2);
    expect(plugin.getState().lock).toBe(true);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: undo of a held rule's property waits", (): any => {
  const { creator, plugin } = createCreator();
  try {
    const q2 = creator.survey.getQuestionByName("q2");
    q2.visibleIf = "{q1} = 5";
    plugin.upsertPeer(ruleHolder("a", "|{q1} = 5"));
    creator.undo();
    expect(q2.visibleIf).toEqual("{q1} = 5");
    plugin.removePeer("a");
    creator.undo();
    expect(q2.visibleIf).toEqual("{q1} = 1");
  } finally {
    plugin.dispose();
  }
});

test("logic lock: a peer's open rule on another tab, or without lock, holds nothing", (): any => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(ruleHolder("a", RULE1, { lock: false }));
    expect(creator.isCanModifyProperty(creator.survey.getQuestionByName("q2"), "visibleIf")).toBe(true);
    plugin.upsertPeer(ruleHolder("a", RULE1, { tab: "designer" }));
    expect(creator.isCanModifyProperty(creator.survey.getQuestionByName("q2"), "visibleIf")).toBe(true);
    plugin.upsertPeer(ruleHolder("a", "|{nope} = 1"));
    expect(creator.isCanModifyProperty(creator.survey.getQuestionByName("q2"), "visibleIf")).toBe(true);
  } finally {
    plugin.dispose();
  }
});

// The rule's row as the matrix renders it, and the actions of its action cells
// (the matrix builds the rendered table lazily - reading it builds it).
function renderedRowOf(creator: CreatorTester, rule: string): any {
  const row = rowOf(creator, rule);
  return logicModel(creator).matrixItems.renderedTable.rows
    .find((r: any) => r.row === row && !r.isDetailRow && !r.isErrorsRow);
}
function rowAction(creator: CreatorTester, rule: string, id: string): any {
  const actions: Array<any> = [];
  renderedRowOf(creator, rule).cells
    .filter((cell: any) => cell.isActionsCell)
    .forEach((cell: any) => actions.push(...cell.item.value.actions));
  return actions.find((action) => action.id === id);
}
const holderChip = (creator: CreatorTester, rule: string): any => rowAction(creator, rule, "collab-rule-holder");
const removeButton = (creator: CreatorTester, rule: string): any => rowAction(creator, rule, "remove-row");

test("logic lock: a held rule shows its holder as an avatar chip in the row actions", (): any => {
  const { creator, plugin } = createCreator();
  try {
    creator.makeNewViewActive("logic");
    plugin.upsertPeer(ruleHolder("a", RULE1));
    const chip = holderChip(creator, RULE1);
    expect(chip).toBeTruthy();
    expect(chip.visible).toBe(true);
    expect(chip.location).toEqual("end");
    expect(chip.title).toEqual("UA");
    expect(chip.tooltip).toEqual("User a is editing this rule.");
    expect(chip.innerCss).toContain("svc-collab-bar__avatar--color-" + presenceColorSlot("a"));
    expect(holderChip(creator, RULE2).visible).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: a viewer of a rule gets no chip", (): any => {
  const { creator, plugin } = createCreator();
  try {
    creator.makeNewViewActive("logic");
    plugin.upsertPeer(ruleHolder("c", RULE1, { lock: false }));
    expect(holderChip(creator, RULE1).visible).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: the chip and the Remove button follow the lock without rebuilding the table", (): any => {
  const { creator, plugin } = createCreator();
  try {
    creator.makeNewViewActive("logic");
    const table = logicModel(creator).matrixItems.renderedTable;
    const chip = holderChip(creator, RULE1);
    const remove = removeButton(creator, RULE1);
    expect(chip.visible).toBe(false);
    expect(remove.visible).toBe(true);

    plugin.upsertPeer(ruleHolder("a", RULE1));
    expect(chip.visible).toBe(true);
    expect(remove.visible).toBe(false);

    plugin.removePeer("a");
    expect(chip.visible).toBe(false);
    expect(remove.visible).toBe(true);
    expect(logicModel(creator).matrixItems.renderedTable).toBe(table);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: a rule held while the list is built gets its Remove button back on release", (): any => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(ruleHolder("a", RULE1));
    creator.makeNewViewActive("logic");
    const remove = removeButton(creator, RULE1);
    expect(remove).toBeTruthy();
    expect(remove.visible).toBe(false);
    plugin.removePeer("a");
    expect(remove.visible).toBe(true);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: clicking the chip opens the rule", (): any => {
  const { creator, plugin } = createCreator();
  try {
    creator.makeNewViewActive("logic");
    plugin.upsertPeer(ruleHolder("a", RULE1));
    holderChip(creator, RULE1).action();
    expect(rowOf(creator, RULE1).isDetailPanelShowing).toBe(true);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: a rule writing a question held in the designer shows that holder", (): any => {
  const { creator, plugin } = createCreator();
  try {
    creator.makeNewViewActive("logic");
    plugin.upsertPeer({
      clientId: "a", name: "User a",      state: <IPresenceState>{ tab: "designer", sel: { loc: "/pages/page1/elements/q2", name: "q2" }, lock: true, focus: null, cur: null }
    });
    expect(holderChip(creator, RULE1).visible).toBe(true);
    expect(holderChip(creator, RULE1).title).toEqual("UA");
    expect(holderChip(creator, RULE2).visible).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: a viewer of a held rule sees who holds it atop the rule editor", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(ruleHolder("a", RULE1));
    await openRule(creator, RULE1);
    const panel = rowOf(creator, RULE1).detailPanel;
    // The detail panel's own first element - above the condition and action editors.
    const plate = panel.elements[0];
    expect(plate.name).toEqual("collabRuleLock");
    expect(plate.getType()).toEqual("html");
    expect(plate.visible).toBe(true);
    expect(plate.html).toContain("User a is editing this rule.");
    expect(plate.html).toContain(">UA<");
    expect(plate.html).toContain("svc-collab-bar__avatar--color-" + presenceColorSlot("a"));
    const footer = panel.getFooterToolbar();
    expect(footer.getActionById("collab-rule-lock")).toBeNull();
    expect(footer.getActionById("saveDetailPanel").visible).toBe(false);

    plugin.upsertPeer(ruleHolder("a", null));
    expect(plate.visible).toBe(false);
    expect(footer.getActionById("saveDetailPanel").visible).toBe(true);
  } finally {
    plugin.dispose();
  }
});

test("logic lock: the holder's name reaches the plate verbatim, not as a survey variable", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer({ ...ruleHolder("a", RULE1), name: "Ann {items}" });
    await openRule(creator, RULE1);
    const plate: any = rowOf(creator, RULE1).detailPanel.getQuestionByName("collabRuleLock");
    expect(plate.locHtml.renderedHtml).toContain("Ann {items} is editing this rule.");
  } finally {
    plugin.dispose();
  }
});

test("logic lock: the holder's name is escaped in the plate", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer({ ...ruleHolder("a", RULE1), name: "<img src=x onerror=alert(1)>" });
    await openRule(creator, RULE1);
    const plate: any = rowOf(creator, RULE1).detailPanel.getQuestionByName("collabRuleLock");
    expect(plate.html).not.toContain("<img");
    expect(plate.html).toContain("&lt;img src=x onerror=alert(1)&gt; is editing this rule.");
  } finally {
    plugin.dispose();
  }
});
