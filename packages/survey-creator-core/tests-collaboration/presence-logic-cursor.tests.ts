import { CreatorTester } from "../tests/creator-tester";
import { IPresencePeer, IPresenceState, logicRuleKey, PresenceOverlay } from "../src/plugins/collaboration/presence";
import { CollaborationPlugin } from "../src/plugins/collaboration";

// Logic-tab cursors. The rule editor (a row's detail panel) and a rule being
// created live in each participant's own Logic-tab model - two people adding
// a rule each must not see each other's cursor over their own draft - so only
// the rows of existing rules are shared, addressed by the rule, not by DOM.

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
const RULE1 = "|{q1} = 1"; // q2.visibleIf - the first row
const RULE2 = "|{q1} = 2"; // q3.enableIf - the second row

function createCreator(): { creator: CreatorTester, plugin: CollaborationPlugin } {
  const creator = new CreatorTester();
  creator.JSON = JSON_WITH_RULES;
  const plugin = new CollaborationPlugin(creator, { bar: false });
  creator.addPlugin("collaboration", plugin);
  plugin.setClientId("b");
  return { creator, plugin };
}

// The Logic tab sets the edited rule in its detail-panel callback.
const flush = (): Promise<void> => new Promise((resolve) => setTimeout(resolve, 0));

function logicModel(creator: CreatorTester): any {
  return (<any>creator.getPlugin("logic")).model;
}
function rowOf(creator: CreatorTester, rule: string): any {
  const model = logicModel(creator);
  const index = model.items.findIndex((item: any) => logicRuleKey(item) === rule);
  return model.matrixItems.visibleRows[index];
}
function draftRow(creator: CreatorTester): any {
  const model = logicModel(creator);
  return model.matrixItems.visibleRows[model.items.findIndex((item: any) => item.isNew)];
}

const mockRect = (el: Element, left: number, top: number, width: number, height: number): void => {
  (<HTMLElement>el).getBoundingClientRect = () => (<any>{ left, top, width, height });
};

interface IRuleList {
  root: HTMLElement;
  container: HTMLElement;
  toolbar: HTMLElement;
  // The <tr> of a matrix row's summary line / a field of its open rule editor.
  header: (row: any) => HTMLElement;
  editorField: (row: any) => HTMLElement;
}

// Mount the rule list the way a renderer does: one <tr> per rendered row of
// the rules matrix, registered as that row's root element. Below an 800x40
// toolbar the rows stack top-down - summary rows 40px, detail rows (the rule
// editor, whose fields carry the editor's own question names) 200px.
function mountRuleList(creator: CreatorTester): IRuleList {
  const root = document.createElement("div");
  const container = document.createElement("div");
  container.id = `scrollableDiv-${creator.activeTabId}`;
  const toolbar = document.createElement("div");
  const table = document.createElement("table");
  container.appendChild(toolbar);
  container.appendChild(table);
  root.appendChild(container);
  document.body.appendChild(root);
  creator.setRootElement(root);
  mockRect(container, 0, 0, 800, 600);
  mockRect(toolbar, 0, 0, 800, 40);
  const headers = new Map<any, HTMLElement>();
  const details = new Map<any, HTMLElement>();
  let top = 40;
  logicModel(creator).matrixItems.renderedTable.rows.forEach((rendered: any) => {
    if (!rendered.visible) return;
    const tr = document.createElement("tr");
    tr.innerHTML = rendered.isDetailRow
      ? "<td><div data-name=\"conditions\"><div data-name=\"questionName\"></div></div></td>"
      : "<td><span></span></td>";
    table.appendChild(tr);
    rendered.setRootElement(tr);
    const height = rendered.isDetailRow ? 200 : 40;
    mockRect(tr, 0, top, 800, height);
    top += height;
    (rendered.isDetailRow ? details : headers).set(rendered.row, tr);
  });
  return {
    root, container, toolbar,
    header: (row) => headers.get(row),
    editorField: (row) => <HTMLElement>details.get(row).querySelector("[data-name=\"questionName\"]")
  };
}

// Hover `el` at a point given relative to its (mocked) box; waits out the
// capture's mouse throttle.
function hover(el: HTMLElement, dx: number, dy: number): Promise<void> {
  const r = el.getBoundingClientRect();
  el.dispatchEvent(new MouseEvent("mousemove", { bubbles: true, clientX: r.left + dx, clientY: r.top + dy }));
  return new Promise((resolve) => setTimeout(resolve, 70));
}

test("logic cursor: a rule's row is shared as that rule, not as a spot of the list", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  creator.makeNewViewActive("logic");
  const list = mountRuleList(creator);
  try {
    await hover(list.header(rowOf(creator, RULE2)), 200, 10);
    expect(plugin.getState().cur).toEqual({ a: { s: "rule", n: RULE2 }, x: 0.25, y: 0.25 });
  } finally {
    list.root.remove();
    plugin.dispose();
  }
});

test("logic cursor: the open rule editor is not shared", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  creator.makeNewViewActive("logic");
  rowOf(creator, RULE1).showDetailPanel();
  await flush();
  const list = mountRuleList(creator);
  try {
    await hover(list.header(rowOf(creator, RULE1)), 100, 20);
    expect(plugin.getState().cur).toEqual({ a: { s: "rule", n: RULE1 }, x: 0.125, y: 0.5 });
    // Hidden, not frozen at the last row the mouse crossed.
    await hover(list.editorField(rowOf(creator, RULE1)), 5, 5);
    expect(plugin.getState().cur).toBeNull();
  } finally {
    list.root.remove();
    plugin.dispose();
  }
});

test("logic cursor: a rule being created is not shared - neither its row nor its editor", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  creator.makeNewViewActive("logic");
  logicModel(creator).addNewUI();
  await flush();
  const list = mountRuleList(creator);
  try {
    await hover(list.header(rowOf(creator, RULE1)), 100, 20);
    expect(plugin.getState().cur).not.toBeNull();
    await hover(list.header(draftRow(creator)), 100, 20);
    expect(plugin.getState().cur).toBeNull();
    await hover(list.header(rowOf(creator, RULE1)), 100, 20);
    await hover(list.editorField(draftRow(creator)), 5, 5);
    expect(plugin.getState().cur).toBeNull();
  } finally {
    list.root.remove();
    plugin.dispose();
  }
});

test("logic cursor: the tab's toolbar and empty space are not shared", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  creator.makeNewViewActive("logic");
  const list = mountRuleList(creator);
  try {
    await hover(list.header(rowOf(creator, RULE1)), 100, 20);
    expect(plugin.getState().cur).not.toBeNull();
    await hover(list.toolbar, 100, 20);
    expect(plugin.getState().cur).toBeNull();
    await hover(list.header(rowOf(creator, RULE1)), 100, 20);
    await hover(list.container, 100, 500);
    expect(plugin.getState().cur).toBeNull();
  } finally {
    list.root.remove();
    plugin.dispose();
  }
});

function renderPeerCursor(overlay: PresenceOverlay, peers: Map<string, IPresencePeer>, cur: IPresenceState["cur"]): HTMLElement {
  peers.set("a", <IPresencePeer>{
    clientId: "a", name: "User a",
    state: { tab: "logic", sel: null, rule: null, lock: false, focus: null, trLoc: null, cur }
  });
  (<any>overlay).render();
  // Scoped to THIS overlay's layer - other overlays leave their own layers behind.
  return (<any>overlay).layer.querySelector(".collab-presence-cursor");
}

test("logic cursor: a peer's cursor lands on the same rule's row whatever the local list has open", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  creator.makeNewViewActive("logic");
  // Locally the first rule is open: its editor pushes the second row down to
  // 40 (toolbar) + 40 (row 1) + 200 (editor) = 280.
  rowOf(creator, RULE1).showDetailPanel();
  await flush();
  const list = mountRuleList(creator);
  const peers = new Map<string, IPresencePeer>();
  const overlay = new PresenceOverlay(creator, () => peers);
  try {
    const cursor = renderPeerCursor(overlay, peers, { a: { s: "rule", n: RULE2 }, x: 0.5, y: 0.5 });
    expect(cursor.style.display).toEqual("block");
    expect(cursor.style.left).toEqual("400px");
    expect(cursor.style.top).toEqual("300px");
  } finally {
    overlay.dispose();
    list.root.remove();
    plugin.dispose();
  }
});

test("logic cursor: a rule the local list does not show hides the peer's cursor", (): any => {
  const { creator, plugin } = createCreator();
  creator.makeNewViewActive("logic");
  const list = mountRuleList(creator);
  const peers = new Map<string, IPresencePeer>();
  const overlay = new PresenceOverlay(creator, () => peers);
  try {
    expect(renderPeerCursor(overlay, peers, { a: { s: "rule", n: RULE2 }, x: 0.5, y: 0.5 }).style.display).toEqual("block");
    expect(renderPeerCursor(overlay, peers, { a: { s: "rule", n: "|{q1} = 99" }, x: 0.5, y: 0.5 }).style.display).toEqual("none");
  } finally {
    overlay.dispose();
    list.root.remove();
    plugin.dispose();
  }
});
