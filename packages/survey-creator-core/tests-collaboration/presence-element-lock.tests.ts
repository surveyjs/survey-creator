import { CreatorTester } from "../tests/creator-tester";
import { IPresencePeerEntry, IPresenceState } from "../src/plugins/collaboration/presence";
import { CollaborationPlugin } from "../src/plugins/collaboration";
import { buildLocator } from "../src/plugins/collaboration/journal/journal-locator";
import { PanelAdornerViewModel } from "../src/components/panel";
import { ItemValueWrapperViewModel } from "../src/components/item-value";
import { QuestionAdornerViewModel } from "../src/components/question";
import { Serializer } from "survey-core";

// ElementLockGuard: a question/panel a remote participant holds (selected on
// the designer, `lock: true` in presence) is read-only for everyone else.

const initialJSON = {
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "q1" },
        { type: "dropdown", name: "q2", choices: ["item1", "item2"] },
        { type: "panel", name: "panel1", elements: [{ type: "text", name: "q3" }] }
      ]
    },
    { name: "page2", elements: [{ type: "text", name: "q4" }] }
  ]
};

// A choice with a detail section (nested content) and a matrix with a detail
// panel: their content lives in embedded panels, not in the page.
const nestedJSON = {
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "q1" },
        { type: "checkbox", name: "q5", choices: [{ value: 1, elements: [{ type: "text", name: "q6" }] }, 2] },
        { type: "matrixdynamic", name: "m1", columns: [{ name: "col1" }], detailPanelMode: "underRow", detailElements: [{ type: "text", name: "q7" }] }
      ]
    }
  ]
};

const LOC: { [name: string]: string } = {
  q1: "/pages/page1/elements/q1",
  q2: "/pages/page1/elements/q2",
  panel1: "/pages/page1/elements/panel1",
  q3: "/pages/page1/elements/panel1/elements/q3",
  page1: "/pages/page1",
  q5: "/pages/page1/elements/q5",
  q6: "/pages/page1/elements/q5/choices/1/elements/q6",
  m1: "/pages/page1/elements/m1"
};

function createCreator(localId: string = "b", json: any = initialJSON): { creator: CreatorTester, plugin: CollaborationPlugin } {
  const creator = new CreatorTester();
  creator.JSON = json;
  const plugin = new CollaborationPlugin(creator, { bar: false });
  creator.addPlugin("collaboration", plugin);
  plugin.setClientId(localId);
  return { creator, plugin };
}

const peer = (clientId: string, name: string | null, state: Partial<IPresenceState> = {}): IPresencePeerEntry => ({
  clientId,
  name: `User ${clientId}`,
  state: <IPresenceState>{
    tab: "designer",
    sel: name ? { loc: LOC[name], name } : null,
    lock: !!name,
    focus: null,
    trLoc: null,
    cur: null,
    ...state
  }
});

const q = (creator: CreatorTester, name: string): any => creator.survey.getQuestionByName(name);

test("element lock: a held question is read-only, its neighbours are not", (): any => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(peer("a", "q1"));
    const ops = creator.getElementAllowOperations(q(creator, "q1"));
    expect(ops.allowEdit).toBe(false);
    expect(ops.allowDelete).toBe(false);
    expect(ops.allowCopy).toBe(false);
    expect(ops.allowDrag).toBe(false);
    expect(ops.allowChangeType).toBe(false);
    expect(ops.allowChangeRequired).toBe(false);
    expect(creator.isCanModifyProperty(q(creator, "q1"), "title")).toBe(false);
    // The editor stays rendered (read-only) so viewers still see the holder's
    // edit-focus ring on it.
    expect(creator.isStringInplacelyEditable(q(creator, "q1"), "title")).toBe(true);

    const free = creator.getElementAllowOperations(q(creator, "q2"));
    expect(free.allowEdit).toBeUndefined();
    expect(free.allowDelete).toBe(true);
    expect(creator.isCanModifyProperty(q(creator, "q2"), "title")).toBe(true);
    // The page around the held question cannot be deleted or moved.
    const page = creator.getElementAllowOperations(creator.survey.getPageByName("page1"));
    expect(page.allowDelete).toBe(false);
    expect(creator.getElementAllowOperations(creator.survey.getPageByName("page2")).allowDelete).toBe(true);
    expect(plugin.presence.lockGuard.getLockOwner(q(creator, "q1"))?.name).toEqual("User a");
  } finally {
    plugin.dispose();
  }
});

test("element lock: choices of a held question cannot be edited", (): any => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(peer("a", "q2"));
    const item = q(creator, "q2").choices[0];
    expect(creator.isCanModifyProperty(item, "text")).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("element lock: the lock lifts when the holder deselects or leaves", (): any => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(peer("a", "q1"));
    expect(creator.isCanModifyProperty(q(creator, "q1"), "title")).toBe(false);
    plugin.upsertPeer(peer("a", "q2", { lock: false }));
    expect(creator.isCanModifyProperty(q(creator, "q1"), "title")).toBe(true);
    plugin.upsertPeer(peer("a", "q1"));
    plugin.removePeer("a");
    expect(creator.isCanModifyProperty(q(creator, "q1"), "title")).toBe(true);
  } finally {
    plugin.dispose();
  }
});

test("element lock: only a designer selection of a question or panel locks", (): any => {
  const { creator, plugin } = createCreator();
  try {
    // An older sender: a selection without the lock field holds nothing.
    plugin.upsertPeer(peer("a", "q1", { lock: undefined }));
    expect(creator.isCanModifyProperty(q(creator, "q1"), "title")).toBe(true);
    // A lock flag outside the designer is ignored.
    plugin.upsertPeer(peer("a", "q1", { tab: "logic" }));
    expect(creator.isCanModifyProperty(q(creator, "q1"), "title")).toBe(true);
    // Pages never lock.
    plugin.upsertPeer(peer("a", "page1"));
    expect(creator.isCanModifyProperty(q(creator, "q1"), "title")).toBe(true);
    expect(creator.getElementAllowOperations(creator.survey.getPageByName("page1")).allowDelete).toBe(true);
  } finally {
    plugin.dispose();
  }
});

test("element lock: a held panel locks its content", (): any => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(peer("a", "panel1"));
    expect(creator.isCanModifyProperty(creator.survey.getPanelByName("panel1"), "title")).toBe(false);
    expect(creator.isCanModifyProperty(q(creator, "q3"), "title")).toBe(false);
    expect(creator.getElementAllowOperations(q(creator, "q3")).allowDelete).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("element lock: the local selection claims a free element and views a held one", (): any => {
  const { creator, plugin } = createCreator();
  try {
    creator.selectElement(q(creator, "q2"));
    expect(plugin.getState().lock).toBe(true);
    plugin.upsertPeer(peer("a", "q1"));
    creator.selectElement(q(creator, "q1"));
    expect(plugin.getState().sel?.loc).toEqual(LOC.q1);
    expect(plugin.getState().lock).toBe(false);
    // The holder lets go - the viewer takes the element over.
    plugin.upsertPeer(peer("a", "q2", { lock: false }));
    expect(plugin.getState().lock).toBe(true);
    expect(creator.isCanModifyProperty(q(creator, "q1"), "title")).toBe(true);
    // Pages and the survey are never claimed.
    creator.selectElement(creator.survey.getPageByName("page2"));
    expect(plugin.getState().lock).toBe(false);
    creator.selectElement(creator.survey);
    expect(plugin.getState().lock).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("element lock: a concurrent claim is won by the smaller clientId", (): any => {
  const { creator, plugin } = createCreator("b");
  try {
    creator.selectElement(q(creator, "q1"));
    expect(plugin.getState().lock).toBe(true);
    // "c" claimed concurrently and loses: the local user keeps editing.
    plugin.upsertPeer(peer("c", "q1"));
    expect(plugin.getState().lock).toBe(true);
    expect(creator.isCanModifyProperty(q(creator, "q1"), "title")).toBe(true);
    // "a" claimed concurrently and wins: the local user becomes a viewer.
    plugin.upsertPeer(peer("a", "q1"));
    expect(plugin.getState().lock).toBe(false);
    expect(creator.isCanModifyProperty(q(creator, "q1"), "title")).toBe(false);
    expect(plugin.presence.lockGuard.getLockOwner(q(creator, "q1"))?.clientId).toEqual("a");
  } finally {
    plugin.dispose();
  }
});

test("element lock: without its own clientId the local claim yields every tie", (): any => {
  const { creator, plugin } = createCreator("");
  try {
    creator.selectElement(q(creator, "q1"));
    expect(plugin.getState().lock).toBe(true);
    plugin.upsertPeer(peer("z", "q1"));
    expect(plugin.getState().lock).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("element lock: claims overlapping through a panel exclude each other", (): any => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(peer("a", "panel1"));
    creator.selectElement(q(creator, "q3"));
    expect(plugin.getState().lock).toBe(false);

    plugin.upsertPeer(peer("a", "q3"));
    creator.selectElement(creator.survey.getPanelByName("panel1"));
    expect(plugin.getState().lock).toBe(false);
    // The panel itself is not held, but it cannot be deleted from under q3.
    const ops = creator.getElementAllowOperations(creator.survey.getPanelByName("panel1"));
    expect(ops.allowDelete).toBe(false);
    expect(ops.allowDrag).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("element lock: the property grid of a held question is read-only and comes back", (): any => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(peer("a", "q1"));
    creator.selectElement(q(creator, "q1"));
    expect(creator.propertyGrid.getQuestionByName("title").isReadOnly).toBe(true);
    plugin.removePeer("a");
    expect(creator.propertyGrid.getQuestionByName("title").isReadOnly).toBe(false);
    plugin.upsertPeer(peer("a", "q1"));
    // The local user claimed q1 when "a" left; a later "a" claim is a race
    // that "a" wins by clientId - the grid turns read-only again.
    expect(creator.propertyGrid.getQuestionByName("title").isReadOnly).toBe(true);
  } finally {
    plugin.dispose();
  }
});

test("element lock: dropping into or moving a held element is refused", (): any => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(peer("a", "panel1"));
    const panel = creator.survey.getPanelByName("panel1");
    const drop = (options: any): boolean => {
      const o = { allow: true, ...options };
      creator.onDragDropAllow.fire(creator, o);
      return o.allow;
    };
    expect(drop({ draggedElement: q(creator, "q1"), toElement: panel })).toBe(false);
    expect(drop({ draggedElement: q(creator, "q1"), toElement: q(creator, "q3"), insertAfter: q(creator, "q3") })).toBe(false);
    expect(drop({ draggedElement: panel, toElement: q(creator, "q2"), insertAfter: q(creator, "q2") })).toBe(false);
    // Next to the held panel, on the page: allowed.
    expect(drop({ draggedElement: q(creator, "q1"), toElement: panel, insertAfter: panel })).toBe(true);
  } finally {
    plugin.dispose();
  }
});

test("element lock: a toolbox click never inserts into a held panel", (): any => {
  const { creator, plugin } = createCreator();
  try {
    plugin.upsertPeer(peer("a", "panel1"));
    const panel = creator.survey.getPanelByName("panel1");
    creator.selectElement(q(creator, "q3"));
    creator.clickToolboxItem({ type: "text" });
    expect(panel.elements.length).toEqual(1);
    expect(creator.selectedElement.parent).toBe(creator.survey.getPageByName("page1"));
  } finally {
    plugin.dispose();
  }
});

test("element lock: undo of a step on a held element waits and keeps the entry", (): any => {
  const { creator, plugin } = createCreator();
  const notes: Array<string> = [];
  try {
    q(creator, "q1").title = "Edited";
    creator.selectElement(q(creator, "q2"));
    plugin.upsertPeer(peer("a", "q1"));
    // Subscribed after the edit: the creator reports "Modified" itself.
    creator.onNotify.add((_, o) => notes.push(o.message));
    creator.undo();
    expect(q(creator, "q1").title).toEqual("Edited");
    expect(creator.undoRedoManager.canUndo()).toBe(true);
    expect(notes.length).toEqual(1);
    expect(notes[0]).toContain("User a");

    plugin.removePeer("a");
    creator.undo();
    expect(q(creator, "q1").title).toEqual("q1");
  } finally {
    plugin.dispose();
  }
});

test("element lock: undoing the addition of a held element waits too", (): any => {
  const { creator, plugin } = createCreator();
  try {
    creator.clickToolboxItem({ type: "text" });
    const added = creator.selectedElement;
    creator.selectElement(q(creator, "q2"));
    const entry = peer("a", null);
    entry.state.sel = { loc: buildLocator(added, creator.survey), name: added.name };
    entry.state.lock = true;
    plugin.upsertPeer(entry);
    expect(plugin.presence.lockGuard.isLocked(added)).toBe(true);
    creator.undo();
    expect(creator.survey.getQuestionByName(added.name)).toBe(added);
  } finally {
    plugin.dispose();
  }
});

test("element lock: the caret is refused inside a held element's editor", (): any => {
  const { plugin } = createCreator();
  const adorner = document.createElement("div");
  adorner.setAttribute("data-sv-drop-target-survey-element", "q1");
  const editor = document.createElement("span");
  editor.className = "svc-string-editor";
  const input = document.createElement("input");
  editor.appendChild(input);
  adorner.appendChild(editor);
  document.body.appendChild(adorner);
  try {
    let blurred = 0;
    input.blur = () => { blurred++; };
    input.dispatchEvent(new FocusEvent("focusin", { bubbles: true }));
    expect(blurred).toEqual(0);
    plugin.upsertPeer(peer("a", "q1"));
    input.dispatchEvent(new FocusEvent("focusin", { bubbles: true }));
    expect(blurred).toEqual(1);
  } finally {
    adorner.remove();
    plugin.dispose();
  }
});

test("element lock: a rename by the holder keeps the element locked for viewers", (): any => {
  const holder = createCreator("a");
  const viewer = createCreator("b");
  const send = (_: any, o: any) => viewer.plugin.apply(JSON.stringify([o.record]));
  holder.plugin.onRecordAdded.add(send);
  holder.plugin.onRecordChanged.add(send);
  // jsdom renders no creator root, so the capture never announces its tab -
  // the holder is on the designer by construction.
  holder.plugin.onStateChanged.add((_, o) => viewer.plugin.upsertPeer({
    clientId: "a", name: "User a", state: { ...JSON.parse(JSON.stringify(o.state)), tab: "designer" }
  }));
  try {
    holder.creator.selectElement(q(holder.creator, "q1"));
    expect(viewer.plugin.presence.lockGuard.isLocked(q(viewer.creator, "q1"))).toBe(true);
    q(holder.creator, "q1").name = "q1x";
    expect(q(viewer.creator, "q1x")).toBeTruthy();
    expect(holder.plugin.getState().sel?.loc).toEqual("/pages/page1/elements/q1x");
    expect(viewer.plugin.presence.lockGuard.isLocked(q(viewer.creator, "q1x"))).toBe(true);
  } finally {
    holder.plugin.dispose();
    viewer.plugin.dispose();
  }
});

test("element lock: a tab switch releases the claim", (): any => {
  const { creator, plugin } = createCreator();
  try {
    creator.selectElement(q(creator, "q1"));
    expect(plugin.getState().lock).toBe(true);
    creator.makeNewViewActive("logic");
    expect(plugin.getState().sel).toBeNull();
    expect(plugin.getState().lock).toBe(false);
    creator.makeNewViewActive("designer");
    expect(plugin.getState().lock).toBe(true);
  } finally {
    plugin.dispose();
  }
});

const dropInto = (creator: CreatorTester) => (options: any): boolean => {
  const o = { allow: true, ...options };
  creator.onDragDropAllow.fire(creator, o);
  return o.allow;
};

test("element lock: a held selectbase locks the content of its choice detail sections", (): any => {
  const { creator, plugin } = createCreator("b", nestedJSON);
  try {
    plugin.upsertPeer(peer("a", "q5"));
    const item = q(creator, "q5").choices[0];
    const q6 = q(creator, "q6");
    expect(q6.parent).toBe(item.panel);
    expect(plugin.presence.lockGuard.getLockOwner(q6)?.name).toEqual("User a");
    expect(creator.isCanModifyProperty(q6, "title")).toBe(false);
    expect(creator.getElementAllowOperations(q6).allowDelete).toBe(false);
    // The section itself: no "Add Question" in it.
    expect(creator.getElementAllowOperations(item.panel).allowEdit).toBe(false);
    const drop = dropInto(creator);
    expect(drop({ draggedElement: q(creator, "q1"), toElement: item.panel })).toBe(false);
    expect(drop({ draggedElement: q(creator, "q1"), toElement: q6, insertAfter: q6 })).toBe(false);
    expect(drop({ draggedElement: q6, toElement: q(creator, "q1"), insertAfter: q(creator, "q1") })).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("element lock: the add-question button of an open detail section follows the lock", (): any => {
  const { creator, plugin } = createCreator("b", nestedJSON);
  const item = q(creator, "q5").choices[0];
  const adorner = new PanelAdornerViewModel(creator, item.panel, undefined as any);
  try {
    expect(adorner.showAddQuestionButton).toBe(true);
    plugin.upsertPeer(peer("a", "q5"));
    expect(adorner.showAddQuestionButton).toBe(false);
    plugin.removePeer("a");
    expect(adorner.showAddQuestionButton).toBe(true);
  } finally {
    adorner.dispose();
    plugin.dispose();
  }
});

test("element lock: undo of a step inside a held selectbase's detail section waits", (): any => {
  const { creator, plugin } = createCreator("b", nestedJSON);
  try {
    q(creator, "q6").title = "Edited";
    q(creator, "q5").choices[1].panel.addNewQuestion("text", "q8");
    creator.selectElement(q(creator, "q1"));
    plugin.upsertPeer(peer("a", "q5"));
    creator.undo();
    expect(q(creator, "q8")).toBeTruthy();
    creator.undo();
    expect(q(creator, "q6").title).toEqual("Edited");
  } finally {
    plugin.dispose();
  }
});

test("element lock: the caret is refused inside a nested question of a held selectbase", (): any => {
  const { plugin } = createCreator("b", nestedJSON);
  const adorner = document.createElement("div");
  adorner.setAttribute("data-sv-drop-target-survey-element", "q6");
  const editor = document.createElement("span");
  editor.className = "svc-string-editor";
  const input = document.createElement("input");
  editor.appendChild(input);
  adorner.appendChild(editor);
  document.body.appendChild(adorner);
  try {
    let blurred = 0;
    input.blur = () => { blurred++; };
    plugin.upsertPeer(peer("a", "q5"));
    input.dispatchEvent(new FocusEvent("focusin", { bubbles: true }));
    expect(blurred).toEqual(1);
  } finally {
    adorner.remove();
    plugin.dispose();
  }
});

test("element lock: a held matrix locks the content of its detail panel", (): any => {
  const { creator, plugin } = createCreator("b", nestedJSON);
  try {
    plugin.upsertPeer(peer("a", "m1"));
    const detailPanel = q(creator, "m1").detailPanel;
    const q7 = detailPanel.getQuestionByName("q7");
    expect(creator.isCanModifyProperty(q7, "title")).toBe(false);
    expect(creator.getElementAllowOperations(detailPanel).allowEdit).toBe(false);
  } finally {
    plugin.dispose();
  }
});

test("element lock: a question inside a detail section is claimed and keeps its owner in place", (): any => {
  const holder = createCreator("a", nestedJSON);
  const viewer = createCreator("b", nestedJSON);
  // jsdom renders no creator root: the holder is on the designer by construction.
  holder.plugin.onStateChanged.add((_, o) => viewer.plugin.upsertPeer({
    clientId: "a", name: "User a", state: { ...JSON.parse(JSON.stringify(o.state)), tab: "designer" }
  }));
  try {
    holder.creator.selectElement(q(holder.creator, "q6"));
    expect(holder.plugin.getState().sel?.loc).toEqual(LOC.q6);
    expect(holder.plugin.getState().lock).toBe(true);
    expect(viewer.plugin.presence.lockGuard.isLocked(q(viewer.creator, "q6"))).toBe(true);
    // The owner is not held, but it cannot be deleted, moved or converted
    // from under q6 - and selecting it does not claim it.
    const owner = q(viewer.creator, "q5");
    expect(viewer.creator.isCanModifyProperty(owner, "title")).toBe(true);
    const ops = viewer.creator.getElementAllowOperations(owner);
    expect(ops.allowDelete).toBe(false);
    expect(ops.allowChangeType).toBe(false);
    viewer.creator.selectElement(owner);
    expect(viewer.plugin.getState().lock).toBe(false);
  } finally {
    holder.plugin.dispose();
    viewer.plugin.dispose();
  }
});

test("element lock: choice rows follow the lock when it moves to a newly added question", (): any => {
  const emptyJSON = { pages: [{ name: "page1" }] };
  const holder = createCreator("a", emptyJSON);
  const viewer = createCreator("b", emptyJSON);
  // The transport order: the journal record that adds a question reaches the
  // viewer first, the holder's presence (the new selection) after it - and
  // the viewer renders the new question in between.
  const send = (_: any, o: any) => viewer.plugin.apply(JSON.stringify([o.record]));
  holder.plugin.onRecordAdded.add(send);
  holder.plugin.onRecordChanged.add(send);
  let pending: any = null;
  holder.plugin.onStateChanged.add((_, o) => { pending = { ...JSON.parse(JSON.stringify(o.state)), tab: "designer" }; });
  const deliverPresence = (): void => viewer.plugin.upsertPeer({ clientId: "a", name: "User a", state: pending });
  const radiogroup = holder.creator.toolbox.getItemByName("radiogroup").json;
  const rows: Array<ItemValueWrapperViewModel> = [];
  const renderRow = (question: any, item: any): ItemValueWrapperViewModel => {
    const row = new ItemValueWrapperViewModel(viewer.creator, question, item);
    rows.push(row);
    return row;
  };
  try {
    holder.creator.clickToolboxItem(radiogroup);
    deliverPresence();
    const r1 = q(viewer.creator, holder.creator.selectedElement.name);
    expect(viewer.plugin.presence.lockGuard.isLocked(r1)).toBe(true);
    const r1Row = renderRow(r1, r1.choices[0]);
    expect(r1Row.allowRemove).toBe(false);

    holder.creator.clickToolboxItem(radiogroup);
    const r2 = q(viewer.creator, holder.creator.selectedElement.name);
    expect(r2).not.toBe(r1);
    const r2Row = renderRow(r2, r2.choices[0]);
    const r2NewRow = renderRow(r2, r2.newItem);
    expect(r2Row.allowRemove).toBe(true);
    deliverPresence();

    // The lock itself has moved.
    expect(viewer.plugin.presence.lockGuard.isLocked(r2)).toBe(true);
    expect(viewer.plugin.presence.lockGuard.isLocked(r1)).toBe(false);
    // So have the choice operations rendered before it moved.
    expect(r2Row.allowRemove).toBe(false);
    expect(r2Row.isDraggable).toBe(false);
    expect(r2NewRow.allowAdd).toBe(false);
    expect(r1Row.allowRemove).toBe(true);
    expect(r1Row.isDraggable).toBe(true);
  } finally {
    rows.forEach((row) => row.dispose());
    holder.plugin.dispose();
    viewer.plugin.dispose();
  }
});

test("element lock: a choice whose detail section holds a held element cannot be removed", (): any => {
  const { creator, plugin } = createCreator("b", nestedJSON);
  const q5 = q(creator, "q5");
  const heldRow = new ItemValueWrapperViewModel(creator, q5, q5.choices[0]);
  const freeRow = new ItemValueWrapperViewModel(creator, q5, q5.choices[1]);
  const choices = Serializer.findProperty("checkbox", "choices");
  try {
    expect(heldRow.allowRemove).toBe(true);
    plugin.upsertPeer(peer("a", "q6"));
    expect(heldRow.allowRemove).toBe(false);
    expect(freeRow.allowRemove).toBe(true);
    // The model refuses too: a property grid built before the lock still
    // shows the row's delete button.
    expect(creator.onCollectionItemDeletingCallback(q5, choices, q5.choices, q5.choices[0])).toBe(false);
    expect(creator.onCollectionItemDeletingCallback(q5, choices, q5.choices, q5.choices[1])).toBe(true);
    plugin.removePeer("a");
    expect(heldRow.allowRemove).toBe(true);
  } finally {
    heldRow.dispose();
    freeRow.dispose();
    plugin.dispose();
  }
});

test("element lock: placeholder choices of a held question are hidden until it is released", (): any => {
  const { creator, plugin } = createCreator("b", nestedJSON);
  const q5 = q(creator, "q5");
  // The question's adorner installs the rule for placeholder items.
  const adorner = new QuestionAdornerViewModel(creator, q5, undefined as any);
  const placeholders = [q5.newItem, q5.noneItem, q5.otherItem];
  try {
    placeholders.forEach((item) => expect(q5.visibleChoices).toContain(item));
    plugin.upsertPeer(peer("a", "q5"));
    placeholders.forEach((item) => expect(q5.visibleChoices).not.toContain(item));
    expect(q5.visibleChoices).toContain(q5.choices[0]);
    plugin.removePeer("a");
    placeholders.forEach((item) => expect(q5.visibleChoices).toContain(item));
  } finally {
    adorner.dispose();
    plugin.dispose();
  }
});

test("element lock: deleting a choice of a held question is refused by the model", (): any => {
  const { creator, plugin } = createCreator();
  const q2 = q(creator, "q2");
  const choices = Serializer.findProperty("dropdown", "choices");
  try {
    plugin.upsertPeer(peer("a", "q2"));
    expect(creator.onCollectionItemDeletingCallback(q2, choices, q2.choices, q2.choices[0])).toBe(false);
    plugin.removePeer("a");
    expect(creator.onCollectionItemDeletingCallback(q2, choices, q2.choices, q2.choices[0])).toBe(true);
  } finally {
    plugin.dispose();
  }
});

test("element lock: undo of adding a choice waits while its detail section holds a held element", (): any => {
  const holder = createCreator("a", nestedJSON);
  const viewer = createCreator("b", nestedJSON);
  const toViewer = (_: any, o: any) => viewer.plugin.apply(JSON.stringify([o.record]));
  const toHolder = (_: any, o: any) => holder.plugin.apply(JSON.stringify([o.record]));
  holder.plugin.onRecordAdded.add(toViewer);
  holder.plugin.onRecordChanged.add(toViewer);
  viewer.plugin.onRecordAdded.add(toHolder);
  viewer.plugin.onRecordChanged.add(toHolder);
  holder.plugin.onStateChanged.add((_, o) => viewer.plugin.upsertPeer({
    clientId: "a", name: "User a", state: { ...JSON.parse(JSON.stringify(o.state)), tab: "designer" }
  }));
  try {
    // The viewer adds a choice; the holder fills its detail section and
    // selects what it added there.
    const q5 = q(viewer.creator, "q5");
    const added = viewer.creator.createNewItemValue(q5);
    const holderItem = q(holder.creator, "q5").choices.filter((item: any) => item.value === added.value)[0];
    holderItem.panel.addNewQuestion("text", "q9");
    holder.creator.selectElement(q(holder.creator, "q9"));
    const q9 = q(viewer.creator, "q9");
    expect(q9.parent).toBe(added.panel);
    expect(viewer.plugin.presence.lockGuard.isLocked(q9)).toBe(true);

    viewer.creator.undo();
    expect(q5.choices).toContain(added);
    expect(q(viewer.creator, "q9")).toBe(q9);
    expect(viewer.creator.undoRedoManager.canUndo()).toBe(true);
  } finally {
    holder.plugin.dispose();
    viewer.plugin.dispose();
  }
});

test("element lock: disposing the plugin releases what it locked", (): any => {
  const { creator, plugin } = createCreator("b", nestedJSON);
  const q5 = q(creator, "q5");
  const adorner = new QuestionAdornerViewModel(creator, q5, undefined as any);
  const row = new ItemValueWrapperViewModel(creator, q5, q5.choices[1]);
  let disposed = false;
  try {
    plugin.upsertPeer(peer("a", "q5"));
    expect(adorner.allowEdit).toBe(false);
    expect(row.allowRemove).toBe(false);
    plugin.dispose();
    disposed = true;
    expect(adorner.allowEdit).toBe(true);
    expect(row.allowRemove).toBe(true);
  } finally {
    row.dispose();
    adorner.dispose();
    if (!disposed) plugin.dispose();
  }
});
