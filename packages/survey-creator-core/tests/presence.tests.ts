import { CreatorTester } from "./creator-tester";
import { getCanvasElement, IPresencePeer, IPresencePeerEntry, IPresenceState, mapOffset, PresenceOverlay, PresencePlugin } from "../src/plugins/presence";

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

function createCreator(): { creator: CreatorTester, plugin: PresencePlugin, states: Array<IPresenceState> } {
  const creator = new CreatorTester();
  creator.JSON = initialJSON;
  const plugin = new PresencePlugin(creator);
  creator.addPlugin("presence", plugin);
  const states: Array<IPresenceState> = [];
  plugin.onStateChanged.add((_, options) => states.push(JSON.parse(JSON.stringify(options.state))));
  return { creator, plugin, states };
}

const peerEntry = (clientId: string, overrides: Partial<IPresencePeerEntry> = {}): IPresencePeerEntry => ({
  clientId,
  name: `User ${clientId}`,
  color: "#e91e63",
  state: { tab: "designer", tabId: "designer", sel: null, pgFocus: null, edit: null, cur: null },
  ...overrides
});

/** Build a designer-like adorner holding N string editors; focus one of them. */
function focusFakeEditor(questionName: string, editorCount = 1, focusIdx = 0): HTMLElement {
  const adorner = document.createElement("div");
  adorner.setAttribute("data-sv-drop-target-survey-element", questionName);
  for (let i = 0; i < editorCount; i++) {
    const editor = document.createElement("span");
    editor.className = "svc-string-editor";
    const input = document.createElement("input");
    editor.appendChild(input);
    adorner.appendChild(editor);
  }
  document.body.appendChild(adorner);
  const input = adorner.querySelectorAll(".svc-string-editor input")[focusIdx];
  input.dispatchEvent(new FocusEvent("focusin", { bubbles: true }));
  return adorner;
}

test("presence: selection is captured with a locator and no user identity", (): any => {
  const { creator, plugin, states } = createCreator();
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  expect(states.length).toBeGreaterThan(0);
  const state = plugin.getState();
  expect(state.sel).toBeTruthy();
  expect(state.sel.loc).toEqual("/pages/page1/elements/q1");
  expect(state.sel.name).toEqual("q1");
  expect(state.sel.kind).toEqual("text");
  expect("name" in state).toBeFalsy();
});

test("presence: selecting the survey after a question", (): any => {
  const { creator, plugin } = createCreator();
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  creator.selectElement(creator.survey);
  const sel = plugin.getState().sel;
  expect(sel.loc).toEqual("");
  expect(sel.kind).toEqual("survey");
});

test("presence: tab change updates tab and resets cursor", (): any => {
  const { creator, plugin } = createCreator();
  creator.makeNewViewActive("test");
  const state = plugin.getState();
  expect(state.tab).toEqual(creator.activeTab);
  expect(state.tab.length).toBeGreaterThan(0);
  expect(state.tab).not.toEqual("designer");
  expect(state.tabId).toEqual(creator.activeTabId);
  expect(state.cur).toBeNull();
});

test("presence: peers roster ingress", (): any => {
  const { plugin } = createCreator();
  let peersChanged = 0;
  plugin.onPeersChanged.add(() => peersChanged++);

  plugin.setPeers([peerEntry("c1"), peerEntry("c2")]);
  expect(plugin.peers.size).toEqual(2);
  expect(peersChanged).toEqual(1);
  expect(plugin.peers.get("c1").name).toEqual("User c1");
  expect(plugin.peers.get("c1").color).toEqual("#e91e63");
  expect(plugin.peers.get("c1").lastSeen).toBeGreaterThan(0);

  plugin.upsertPeer(peerEntry("c3"));
  expect(plugin.peers.size).toEqual(3);
  expect(peersChanged).toEqual(2);

  plugin.removePeer("c2");
  expect(plugin.peers.size).toEqual(2);
  expect(peersChanged).toEqual(3);
  plugin.removePeer("nope");
  expect(peersChanged).toEqual(3);

  plugin.clearPeers();
  expect(plugin.peers.size).toEqual(0);
  expect(peersChanged).toEqual(4);
  plugin.clearPeers();
  expect(peersChanged).toEqual(4);
});

test("presence: invalid peer entries are ignored", (): any => {
  const { plugin } = createCreator();
  plugin.upsertPeer(<any>null);
  plugin.upsertPeer(<any>{ clientId: "", name: "x", color: "", state: {} });
  plugin.upsertPeer(<any>{ clientId: "c1", name: "x", color: "", state: null });
  expect(plugin.peers.size).toEqual(0);
});

test("presence: dropStalePeers removes only silent peers", (): any => {
  const { plugin } = createCreator();
  plugin.setPeers([peerEntry("c1"), peerEntry("c2")]);
  (<any>plugin.peers.get("c1")).lastSeen = Date.now() - 60_000;
  let peersChanged = 0;
  plugin.onPeersChanged.add(() => peersChanged++);
  plugin.dropStalePeers(45_000);
  expect(plugin.peers.size).toEqual(1);
  expect(plugin.peers.has("c2")).toBeTruthy();
  expect(peersChanged).toEqual(1);
  plugin.dropStalePeers(45_000);
  expect(peersChanged).toEqual(1);
});

test("presence: overlay layer lifecycle", (): any => {
  const before = document.body.querySelectorAll(".collab-presence-layer").length;
  const { plugin } = createCreator();
  expect(document.body.querySelectorAll(".collab-presence-layer").length).toEqual(before + 1);
  plugin.dispose();
  expect(document.body.querySelectorAll(".collab-presence-layer").length).toEqual(before);
});

test("presence: remote selection decorates the native ring node", (): any => {
  const { plugin } = createCreator();
  const designer = document.createElement("div");
  designer.id = "scrollableDiv-designer";
  designer.innerHTML =
    "<div data-sv-drop-target-survey-element=\"q1\"><div class=\"svc-question__content\"></div></div>";
  document.body.appendChild(designer);
  const content = <HTMLElement>designer.querySelector(".svc-question__content");
  const selState = (tab: string): any => ({
    tab, tabId: tab, sel: { loc: "/pages/page1/elements/q1", name: "q1", kind: "text", title: "q1" },
    pgFocus: null, edit: null, cur: null
  });
  try {
    plugin.upsertPeer(peerEntry("c1", { state: selState("designer") }));
    (<any>plugin.overlay).render();
    expect(content.getAttribute("data-collab-focus")).toEqual("on");
    expect(content.style.getPropertyValue("--collab-peer-color")).toEqual("#e91e63");

    plugin.upsertPeer(peerEntry("c1", { state: selState("test") }));
    (<any>plugin.overlay).render();
    expect(content.getAttribute("data-collab-focus")).toEqual("away");

    plugin.removePeer("c1");
    (<any>plugin.overlay).render();
    expect(content.hasAttribute("data-collab-focus")).toBeFalsy();
    expect(content.style.getPropertyValue("--collab-peer-color")).toEqual("");
  } finally {
    designer.remove();
    plugin.dispose();
  }
});

test("presence: remote page selection decorates the page content node", (): any => {
  const { plugin } = createCreator();
  const designer = document.createElement("div");
  designer.id = "scrollableDiv-designer";
  // The real designer DOM: the page wrapper reuses the *element* drop-target
  // attribute with the page name; the ring CSS targets .svc-page__content.
  designer.innerHTML =
    "<div data-sv-drop-target-survey-element=\"page1\" data-sv-drop-target-page=\"page1\">" +
    "<div class=\"svc-page__content\" data-sv-drop-target-survey-page=\"page1\"></div></div>";
  document.body.appendChild(designer);
  const content = <HTMLElement>designer.querySelector(".svc-page__content");
  try {
    plugin.upsertPeer(peerEntry("c1", {
      state: {
        tab: "designer", tabId: "designer",
        sel: { loc: "/pages/page1", name: "page1", kind: "page", title: "page1" },
        pgFocus: null, edit: null, cur: null
      }
    }));
    (<any>plugin.overlay).render();
    expect(content.getAttribute("data-collab-focus")).toEqual("on");
    expect(content.style.getPropertyValue("--collab-peer-color")).toEqual("#e91e63");

    plugin.removePeer("c1");
    (<any>plugin.overlay).render();
    expect(content.hasAttribute("data-collab-focus")).toBeFalsy();
  } finally {
    designer.remove();
    plugin.dispose();
  }
});

test("presence: name badge sits under the ring's bottom-right corner and dims when away", (): any => {
  const { plugin } = createCreator();
  const designer = document.createElement("div");
  designer.id = "scrollableDiv-designer";
  designer.innerHTML =
    "<div data-sv-drop-target-survey-element=\"q1\"><div class=\"svc-question__content\"></div></div>";
  document.body.appendChild(designer);
  designer.getBoundingClientRect = () => (<any>{ left: 0, top: 0, width: 800, height: 600 });
  const content = <HTMLElement>designer.querySelector(".svc-question__content");
  content.getBoundingClientRect = () => (<any>{ left: 100, top: 50, width: 300, height: 80 });
  const selState = (tab: string): any => ({
    tab, tabId: tab, sel: { loc: "/pages/page1/elements/q1", name: "q1", kind: "text", title: "q1" },
    pgFocus: null, edit: null, cur: null
  });
  try {
    plugin.upsertPeer(peerEntry("c1", { state: selState("designer") }));
    (<any>plugin.overlay).render();
    const badge = <HTMLElement>document.body.querySelector(".collab-presence-badge");
    expect(badge).toBeTruthy();
    expect(badge.textContent).toEqual("User c1");
    expect(badge.style.display).toEqual("block");
    // Right edge inset 8px from the ring's outer right edge (400 + 2 - 8,
    // via translateX(-100%)); top hangs 4px below the 2px ring (130 + 2 + 4).
    expect(badge.style.left).toEqual("394px");
    expect(badge.style.top).toEqual("136px");
    expect(badge.style.opacity).toEqual("1");

    // The peer walks to another tab: dimmed like the ring.
    plugin.upsertPeer(peerEntry("c1", { state: selState("test") }));
    (<any>plugin.overlay).render();
    expect(badge.style.opacity).toEqual("0.5");

    // The node scrolls out of the designer viewport: the badge hides.
    content.getBoundingClientRect = () => (<any>{ left: 100, top: 900, width: 300, height: 80 });
    (<any>plugin.overlay).render();
    expect(badge.style.display).toEqual("none");

    plugin.removePeer("c1");
    (<any>plugin.overlay).render();
    expect(document.body.querySelector(".collab-presence-badge")).toBeFalsy();
  } finally {
    designer.remove();
    plugin.dispose();
  }
});

test("presence: editor badge anchors to the inflated focus border, not the editor node", (): any => {
  const { plugin } = createCreator();
  const designer = document.createElement("div");
  designer.id = "scrollableDiv-designer";
  designer.innerHTML =
    "<div data-sv-drop-target-survey-element=\"q1\"><div class=\"svc-question__content\">" +
    "<span class=\"svc-string-editor\"><span class=\"svc-string-editor__border svc-string-editor__border--focus\"></span></span>" +
    "</div></div>";
  document.body.appendChild(designer);
  designer.getBoundingClientRect = () => (<any>{ left: 0, top: 0, width: 800, height: 600 });
  const editor = <HTMLElement>designer.querySelector(".svc-string-editor");
  editor.getBoundingClientRect = () => (<any>{ left: 108, top: 54, width: 84, height: 22 });
  const border = <HTMLElement>designer.querySelector(".svc-string-editor__border--focus");
  border.getBoundingClientRect = () => (<any>{ left: 100, top: 50, width: 100, height: 30 });
  try {
    plugin.upsertPeer(peerEntry("c1", {
      state: {
        tab: "designer", tabId: "designer", sel: null, pgFocus: null,
        edit: { scope: "el", name: "q1", idx: 0 }, cur: null
      }
    }));
    (<any>plugin.overlay).render();
    const badge = <HTMLElement>document.body.querySelector(".collab-presence-badge");
    // Offsets are taken from the BORDER rect (right 200, bottom 80), not the
    // editor's: left = 200 + 2 - 8, top = 80 + 2 + 4.
    expect(badge.style.left).toEqual("194px");
    expect(badge.style.top).toEqual("86px");
  } finally {
    designer.remove();
    plugin.dispose();
  }
});

test("presence: remote editor focus decorates the string editor; dispose cleans up", (): any => {
  const { plugin } = createCreator();
  const designer = document.createElement("div");
  designer.id = "scrollableDiv-designer";
  designer.innerHTML =
    "<div class=\"svc-designer-header\"><span class=\"svc-string-editor\"></span></div>" +
    "<div data-sv-drop-target-survey-element=\"q1\"><div class=\"svc-question__content\">" +
    "<span class=\"svc-string-editor\"></span><span class=\"svc-string-editor\"></span></div></div>";
  document.body.appendChild(designer);
  const editors = designer.querySelectorAll("[data-sv-drop-target-survey-element] .svc-string-editor");
  const headerEditor = <HTMLElement>designer.querySelector(".svc-designer-header .svc-string-editor");
  try {
    plugin.upsertPeer(peerEntry("c1", {
      state: {
        tab: "designer", tabId: "designer", sel: null, pgFocus: null,
        edit: { scope: "el", name: "q1", idx: 1 }, cur: null
      }
    }));
    (<any>plugin.overlay).render();
    expect((<HTMLElement>editors[1]).getAttribute("data-collab-focus")).toEqual("on");
    expect((<HTMLElement>editors[0]).hasAttribute("data-collab-focus")).toBeFalsy();

    // Survey-header scope resolves against .svc-designer-header.
    plugin.upsertPeer(peerEntry("c1", {
      state: {
        tab: "designer", tabId: "designer", sel: null, pgFocus: null,
        edit: { scope: "survey", name: "", idx: 0 }, cur: null
      }
    }));
    (<any>plugin.overlay).render();
    expect(headerEditor.getAttribute("data-collab-focus")).toEqual("on");
    expect((<HTMLElement>editors[1]).hasAttribute("data-collab-focus")).toBeFalsy();

    plugin.dispose();
    expect(headerEditor.hasAttribute("data-collab-focus")).toBeFalsy();
  } finally {
    designer.remove();
    plugin.dispose();
  }
});

test("presence: remote property-grid focus decorates the input area, not the whole row", (): any => {
  const { plugin } = createCreator();
  const sidebar = document.createElement("div");
  sidebar.className = "svc-side-bar";
  sidebar.innerHTML =
    "<div data-name=\"title\"><div class=\"spg-question__title\"></div><div class=\"spg-question__content\"></div></div>";
  document.body.appendChild(sidebar);
  const row = <HTMLElement>sidebar.querySelector("[data-name]");
  const field = <HTMLElement>sidebar.querySelector(".spg-question__content");
  try {
    // The local creator has the survey selected (loc ""), matching objLoc "".
    plugin.upsertPeer(peerEntry("c1", {
      state: {
        tab: "designer", tabId: "designer", sel: null,
        pgFocus: { grid: "main", prop: "title", objLoc: "" }, edit: null, cur: null
      }
    }));
    (<any>plugin.overlay).render();
    expect(field.getAttribute("data-collab-focus")).toEqual("on");
    expect(row.hasAttribute("data-collab-focus")).toBeFalsy();
    plugin.clearPeers();
    (<any>plugin.overlay).render();
    expect(field.hasAttribute("data-collab-focus")).toBeFalsy();
  } finally {
    sidebar.remove();
    plugin.dispose();
  }
});

test("presence: boolean property row rings just the checkbox decorator", (): any => {
  const { plugin } = createCreator();
  const sidebar = document.createElement("div");
  sidebar.className = "svc-side-bar";
  sidebar.innerHTML =
    "<div data-name=\"showTitle\" class=\"spg-question--boolean\"><div class=\"spg-question__content\">" +
    "<span class=\"sd-item__decorator sd-checkbox__decorator\"></span></div></div>";
  document.body.appendChild(sidebar);
  const content = <HTMLElement>sidebar.querySelector(".spg-question__content");
  const decorator = <HTMLElement>sidebar.querySelector(".sd-checkbox__decorator");
  try {
    plugin.upsertPeer(peerEntry("c1", {
      state: {
        tab: "designer", tabId: "designer", sel: null,
        pgFocus: { grid: "main", prop: "showTitle", objLoc: "" }, edit: null, cur: null
      }
    }));
    (<any>plugin.overlay).render();
    expect(decorator.getAttribute("data-collab-focus")).toEqual("on");
    expect(content.hasAttribute("data-collab-focus")).toBeFalsy();
  } finally {
    sidebar.remove();
    plugin.dispose();
  }
});

test("presence: focusing an inline string editor emits edit", (): any => {
  const { creator, plugin } = createCreator();
  const adorner = focusFakeEditor("q2", 2, 1);
  try {
    expect(plugin.getState().edit).toEqual({ scope: "el", name: "q2", idx: 1 });
    // Focus moving to a non-editor node clears it at once.
    const outside = document.createElement("input");
    document.body.appendChild(outside);
    outside.dispatchEvent(new FocusEvent("focusin", { bubbles: true }));
    expect(plugin.getState().edit).toBeNull();
    outside.remove();
    // Tab switch also clears a re-established focus.
    focusFakeEditor("q3").remove();
    expect(plugin.getState().edit).toEqual({ scope: "el", name: "q3", idx: 0 });
    creator.makeNewViewActive("test");
    expect(plugin.getState().edit).toBeNull();
  } finally {
    adorner.remove();
    plugin.dispose();
  }
});

test("presence: edit is cleared after blur with no follow-up focus", async (): Promise<any> => {
  const { plugin } = createCreator();
  const adorner = focusFakeEditor("q2");
  try {
    expect(plugin.getState().edit).toBeTruthy();
    (<HTMLElement>adorner.querySelector("input")).dispatchEvent(new FocusEvent("focusout", { bubbles: true }));
    await new Promise((resolve) => setTimeout(resolve, 350));
    expect(plugin.getState().edit).toBeNull();
  } finally {
    adorner.remove();
    plugin.dispose();
  }
});

test("presence: mouse is tracked only inside the main content block", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  const root = document.createElement("div");
  root.innerHTML =
    "<div class=\"svc-tabbed-menu\"><div id=\"tab-designer\" role=\"tab\"></div></div>" +
    "<div id=\"scrollableDiv-designer\">" +
    "<div class=\"svc-toolbox\"><div class=\"svc-toolbox__item\"></div></div>" +
    "<div class=\"svc-tab-designer\">" +
    "<div data-sv-drop-target-survey-element=\"q1\"></div>" +
    "<div class=\"svc-tab-designer_content\"></div>" +
    "</div></div>" +
    "<div class=\"svc-side-bar\"><div data-name=\"title\"></div></div>";
  document.body.appendChild(root);
  creator.setRootElement(root);
  const adorner = <HTMLElement>root.querySelector("[data-sv-drop-target-survey-element]");
  adorner.getBoundingClientRect = () => (<any>{ left: 0, top: 0, width: 200, height: 100 });
  const move = (el: HTMLElement, clientX: number, clientY: number): Promise<void> => {
    el.dispatchEvent(new MouseEvent("mousemove", { bubbles: true, clientX, clientY }));
    return new Promise((resolve) => setTimeout(resolve, 70));
  };
  try {
    await move(adorner, 50, 25);
    expect(plugin.getState().cur).toEqual(expect.objectContaining({ a: { s: "el", n: "q1" }, x: 0.25, y: 0.25 }));
    // Sidebar / tab strip are outside the main content: the cursor hides, not freezes.
    await move(<HTMLElement>root.querySelector("[data-name]"), 10, 10);
    expect(plugin.getState().cur).toBeNull();
    await move(adorner, 100, 50);
    expect(plugin.getState().cur).toEqual(expect.objectContaining({ x: 0.5, y: 0.5 }));
    await move(<HTMLElement>root.querySelector("#tab-designer"), 10, 10);
    expect(plugin.getState().cur).toBeNull();
    // The toolbox lives inside the tab container but is not main content.
    await move(adorner, 100, 50);
    await move(<HTMLElement>root.querySelector(".svc-toolbox__item"), 10, 10);
    expect(plugin.getState().cur).toBeNull();
    // Empty canvas anchors to the designer's scrolled CONTENT box: the tab
    // container spans the toolbox, and the scroll viewport's rect depends on
    // the peer's window size/scroll - neither lines up between peers.
    // While the content rect is zero (jsdom default), the cursor must hide
    // rather than leave the last position dangling on peers.
    await move(adorner, 60, 30);
    await move(<HTMLElement>root.querySelector(".svc-tab-designer_content"), 200, 50);
    expect(plugin.getState().cur).toBeNull();
    const content = <HTMLElement>root.querySelector(".svc-tab-designer_content");
    content.getBoundingClientRect = () => (<any>{ left: 100, top: 0, width: 400, height: 200 });
    await move(content, 200, 50);
    // Surface cursors carry canvas px offsets besides the legacy fractions;
    // the empty content is its own canvas block here.
    expect(plugin.getState().cur).toEqual(expect.objectContaining(
      { a: { s: "surface" }, x: 0.25, y: 0.25, px: 100, py: 50, w: 400, h: 200 }));
    // Element anchors stay fraction-only.
    await move(adorner, 50, 25);
    expect(plugin.getState().cur.px).toBeUndefined();
  } finally {
    root.remove();
    plugin.dispose();
  }
});

/** Designer-like DOM: tab content > surface > content > canvas block (header + page). */
function buildSurfaceRoot(): HTMLElement {
  const root = document.createElement("div");
  root.innerHTML =
    "<div id=\"scrollableDiv-designer\">" +
    "<div class=\"svc-tab-designer\">" +
    "<div class=\"svc-tab-designer_content\">" +
    "<div class=\"svc-designer-surface sd-container-modern\">" +
    "<div class=\"svc-designer-header\"></div>" +
    "<div data-sv-drop-target-survey-page=\"page1\"></div>" +
    "</div></div></div></div>";
  document.body.appendChild(root);
  return root;
}

const mockRect = (el: Element, left: number, top: number, width: number, height: number): void => {
  (<HTMLElement>el).getBoundingClientRect = () => (<any>{ left, top, width, height });
};

test("presence: getCanvasElement finds the survey block, falls back to the content", (): any => {
  const root = buildSurfaceRoot();
  try {
    const content = root.querySelector(".svc-tab-designer_content");
    const block = root.querySelector(".svc-designer-surface");
    expect(getCanvasElement(content)).toBe(block);
    // Class gone (renamed upstream) - structural fallback via the header.
    block.removeAttribute("class");
    expect(getCanvasElement(content)).toBe(block);
    // No header (showSurveyHeader: false) - the page adorner's parent.
    root.querySelector(".svc-designer-header").remove();
    expect(getCanvasElement(content)).toBe(block);
    // Placeholder-like markup with no recognizable block - the content itself.
    block.remove();
    expect(getCanvasElement(content)).toBe(content);
  } finally {
    root.remove();
  }
});

test("presence: mapOffset - exact px on equal boxes, edge-preserving otherwise", (): any => {
  // Equal boxes: identity, including outside offsets.
  expect(mapOffset(345, 800, 800)).toEqual(345);
  expect(mapOffset(-20, 800, 800)).toEqual(-20);
  // Near edges: px distance from that edge survives the width change.
  expect(mapOffset(20, 800, 500)).toEqual(20);
  expect(mapOffset(770, 800, 500)).toEqual(470);
  // Signed offsets (gutters) keep their distance beyond the box.
  expect(mapOffset(-50, 800, 500)).toEqual(-50);
  expect(mapOffset(840, 800, 500)).toEqual(540);
  // Continuity at the zone borders (E = 120 here) and monotonic middle.
  expect(mapOffset(120, 800, 500)).toEqual(120);
  expect(mapOffset(680, 800, 500)).toEqual(380);
  const mid = mapOffset(400, 800, 500);
  expect(mid).toBeGreaterThan(120);
  expect(mid).toBeLessThan(380);
  // Small boxes: E collapses to half the smaller box, no division by zero.
  expect(mapOffset(30, 60, 400)).toEqual(30);
  expect(mapOffset(50, 60, 400)).toEqual(390);
  expect(Number.isFinite(mapOffset(100, 300, 200))).toBeTruthy();
});

test("presence: surface px offsets are normalized by the sender's zoom", async (): Promise<any> => {
  const { creator, plugin } = createCreator();
  const root = buildSurfaceRoot();
  creator.setRootElement(root);
  const content = <HTMLElement>root.querySelector(".svc-tab-designer_content");
  mockRect(content, 100, 0, 600, 300);
  mockRect(root.querySelector(".svc-designer-surface"), 150, 10, 500, 280);
  const move = (el: HTMLElement, clientX: number, clientY: number): Promise<void> => {
    el.dispatchEvent(new MouseEvent("mousemove", { bubbles: true, clientX, clientY }));
    return new Promise((resolve) => setTimeout(resolve, 70));
  };
  try {
    await move(content, 250, 60);
    expect(plugin.getState().cur).toEqual(expect.objectContaining(
      { a: { s: "surface" }, px: 100, py: 50, w: 500, h: 280 }));
    creator.survey.widthScale = 150;
    await move(content, 251, 61);
    expect(plugin.getState().cur).toEqual(expect.objectContaining(
      { px: Math.round(101 / 1.5), py: 34, w: Math.round(500 / 1.5), h: Math.round(280 / 1.5) }));
  } finally {
    root.remove();
    plugin.dispose();
  }
});

test("presence: integer px moves are not swallowed by the 3-decimal fraction dedupe", async (): Promise<any> => {
  const { creator, plugin, states } = createCreator();
  const root = buildSurfaceRoot();
  creator.setRootElement(root);
  const content = <HTMLElement>root.querySelector(".svc-tab-designer_content");
  mockRect(content, 100, 0, 3000, 300);
  mockRect(root.querySelector(".svc-designer-surface"), 150, 0, 2900, 300);
  const move = (clientX: number, clientY: number): Promise<void> => {
    content.dispatchEvent(new MouseEvent("mousemove", { bubbles: true, clientX, clientY }));
    return new Promise((resolve) => setTimeout(resolve, 70));
  };
  try {
    await move(1000, 50);
    const before = states.length;
    // Same 3-decimal fractions of the 3000px box, different px - must emit.
    await move(1001, 50);
    expect(states.length).toEqual(before + 1);
    expect(plugin.getState().cur.px).toEqual(851);
  } finally {
    root.remove();
    plugin.dispose();
  }
});

test("presence: overlay maps surface px onto the local canvas, fractions for old senders", (): any => {
  const { creator, plugin } = createCreator();
  const root = buildSurfaceRoot();
  creator.setRootElement(root);
  const container = <HTMLElement>root.querySelector("#scrollableDiv-designer");
  const content = <HTMLElement>root.querySelector(".svc-tab-designer_content");
  mockRect(container, 0, 0, 900, 700);
  // The designer column (between the toolbox and the sidebar) clips/pins
  // offset-mapped cursor points.
  mockRect(root.querySelector(".svc-tab-designer"), 150, 0, 700, 700);
  mockRect(content, 200, 0, 600, 400);
  mockRect(root.querySelector(".svc-designer-surface"), 300, 10, 500, 380);
  const peers = new Map<string, IPresencePeer>();
  const overlay = new PresenceOverlay(creator, () => peers);
  const cur = (extra: any): IPresenceState["cur"] =>
    ({ tab: creator.activeTabId, a: { s: "surface" }, x: 0.5, y: 0.5, t: Date.now(), ...extra });
  const setCur = (c: IPresenceState["cur"]): void => {
    peers.set("c1", <IPresencePeer>{
      clientId: "c1", name: "User c1", color: "#e91e63", lastSeen: Date.now(),
      state: { tab: "designer", tabId: creator.activeTabId, sel: null, pgFocus: null, edit: null, cur: c }
    });
    (<any>overlay).render();
  };
  // Scoped to THIS overlay's layer - earlier tests leave their own layers behind.
  const cursorEl = (): HTMLElement => (<any>overlay).layer.querySelector(".collab-presence-cursor");
  try {
    // px path: sender canvas 800x600, offsets in the near-edge zones map 1:1.
    setCur(cur({ px: 20, py: 30, w: 800, h: 600 }));
    expect(cursorEl().style.left).toEqual("320px");
    expect(cursorEl().style.top).toEqual("40px");
    // Signed gutter offset: 15px left of the canvas block.
    setCur(cur({ px: -15, py: 30, w: 800, h: 600, t: Date.now() + 1 }));
    expect(cursorEl().style.left).toEqual("285px");
    // Old sender without px: legacy fraction of the CONTENT box.
    setCur(cur({ t: Date.now() + 2 }));
    expect(cursorEl().style.left).toEqual("500px");
    expect(cursorEl().style.top).toEqual("200px");
    // A gutter point beyond the local designer column must NOT sit over the
    // toolbox (left of column x=150) - it pins to the column's edge.
    setCur(cur({ px: -160, py: 30, w: 800, h: 600, t: Date.now() + 3 }));
    expect(cursorEl().style.display).toEqual("block");
    expect(cursorEl().style.left).toEqual("152px");
    // Same on the right: never over the sidebar, pinned to the column edge.
    setCur(cur({ px: 2000, py: 30, w: 800, h: 600, t: Date.now() + 4 }));
    expect(cursorEl().style.left).toEqual("848px");
    // A point scrolled far below the visible column hides.
    setCur(cur({ px: 20, py: 3000, w: 800, h: 600, t: Date.now() + 5 }));
    expect(cursorEl().style.display).toEqual("none");
    // Receiver zoom: at widthScale 200 the same normalized offset doubles.
    creator.survey.widthScale = 200;
    setCur(cur({ px: 20, py: 30, w: Math.round(500 / 2), h: 190, t: Date.now() + 6 }));
    expect(cursorEl().style.left).toEqual("340px");
    expect(cursorEl().style.top).toEqual("70px");
  } finally {
    overlay.dispose();
    root.remove();
    plugin.dispose();
  }
});

test("presence: cursors hide under the flyout/mobile sidebar panel, docked does not occlude", (): any => {
  const { creator, plugin } = createCreator();
  const root = buildSurfaceRoot();
  creator.setRootElement(root);
  mockRect(root.querySelector("#scrollableDiv-designer"), 0, 0, 900, 700);
  mockRect(root.querySelector(".svc-tab-designer"), 150, 0, 700, 700);
  mockRect(root.querySelector(".svc-tab-designer_content"), 200, 0, 600, 400);
  mockRect(root.querySelector(".svc-designer-surface"), 300, 10, 500, 380);
  const sidebar = document.createElement("div");
  sidebar.className = "svc-side-bar svc-side-bar--flyout";
  sidebar.innerHTML = "<div class=\"svc-side-bar__container\"></div>";
  root.appendChild(sidebar);
  const panel = <HTMLElement>sidebar.querySelector(".svc-side-bar__container");
  mockRect(panel, 550, 0, 300, 700);
  const peers = new Map<string, IPresencePeer>();
  const overlay = new PresenceOverlay(creator, () => peers);
  let stamp = Date.now();
  const setCur = (extra: any): void => {
    peers.set("c1", <IPresencePeer>{
      clientId: "c1", name: "User c1", color: "#e91e63", lastSeen: Date.now(),
      state: {
        tab: "designer", tabId: creator.activeTabId, sel: null, pgFocus: null, edit: null,
        cur: { tab: creator.activeTabId, a: { s: "surface" }, x: 0.5, y: 0.5, t: ++stamp, ...extra }
      }
    });
    (<any>overlay).render();
  };
  const cursorEl = (): HTMLElement => (<any>overlay).layer.querySelector(".collab-presence-cursor");
  try {
    // Left of the panel (x=320): visible as before.
    setCur({ px: 20, py: 30, w: 800, h: 600 });
    expect(cursorEl().style.display).toEqual("block");
    expect(cursorEl().style.left).toEqual("320px");
    // Inside the designer column but under the flyout panel (x=770): hidden.
    setCur({ px: 770, py: 30, w: 800, h: 600 });
    expect(cursorEl().style.display).toEqual("none");
    // A gutter point pinned to the column edge (848) now lands under the panel.
    setCur({ px: 2000, py: 30, w: 800, h: 600 });
    expect(cursorEl().style.display).toEqual("none");
    // Docked sidebar (no overlaying class): same point shows again.
    sidebar.className = "svc-side-bar";
    setCur({ px: 770, py: 30, w: 800, h: 600 });
    expect(cursorEl().style.display).toEqual("block");
    expect(cursorEl().style.left).toEqual("770px");
    // Mobile mode, panel covers the whole content: everything hides.
    sidebar.className = "svc-side-bar svc-side-bar--mobile";
    mockRect(panel, 0, 0, 900, 700);
    setCur({ px: 20, py: 30, w: 800, h: 600 });
    expect(cursorEl().style.display).toEqual("none");
    // Collapsed flyout renders no container - nothing occludes.
    sidebar.className = "svc-side-bar svc-side-bar--flyout";
    panel.remove();
    setCur({ px: 770, py: 30, w: 800, h: 600 });
    expect(cursorEl().style.display).toEqual("block");
  } finally {
    overlay.dispose();
    root.remove();
    plugin.dispose();
  }
});

test("presence: fraction-anchored cursor points hide under the flyout panel too", (): any => {
  const { creator, plugin } = createCreator();
  const root = buildSurfaceRoot();
  creator.setRootElement(root);
  mockRect(root.querySelector("#scrollableDiv-designer"), 0, 0, 900, 700);
  const anchor = document.createElement("div");
  anchor.setAttribute("data-sv-drop-target-survey-element", "q1");
  root.querySelector(".svc-designer-surface").appendChild(anchor);
  mockRect(anchor, 300, 100, 400, 50);
  const sidebar = document.createElement("div");
  sidebar.className = "svc-side-bar svc-side-bar--flyout";
  sidebar.innerHTML = "<div class=\"svc-side-bar__container\"></div>";
  root.appendChild(sidebar);
  mockRect(sidebar.querySelector(".svc-side-bar__container"), 550, 0, 300, 700);
  const peers = new Map<string, IPresencePeer>();
  const overlay = new PresenceOverlay(creator, () => peers);
  let stamp = Date.now();
  const setCur = (x: number, y: number): void => {
    peers.set("c1", <IPresencePeer>{
      clientId: "c1", name: "User c1", color: "#e91e63", lastSeen: Date.now(),
      state: {
        tab: "designer", tabId: creator.activeTabId, sel: null, pgFocus: null, edit: null,
        cur: { tab: creator.activeTabId, a: { s: "el", n: "q1" }, x, y, t: ++stamp }
      }
    });
    (<any>overlay).render();
  };
  const cursorEl = (): HTMLElement => (<any>overlay).layer.querySelector(".collab-presence-cursor");
  try {
    // Point at x=400 - left of the panel, anchor visible: shown.
    setCur(0.25, 0.5);
    expect(cursorEl().style.display).toEqual("block");
    expect(cursorEl().style.left).toEqual("400px");
    // Point at x=600 - anchor still intersects the tab content, but the
    // point itself is under the panel: hidden.
    setCur(0.75, 0.5);
    expect(cursorEl().style.display).toEqual("none");
  } finally {
    overlay.dispose();
    root.remove();
    plugin.dispose();
  }
});

test("presence: pg cursors keep drawing over the flyout panel", (): any => {
  const { creator, plugin } = createCreator();
  const root = buildSurfaceRoot();
  creator.setRootElement(root);
  const sidebar = document.createElement("div");
  sidebar.className = "svc-side-bar svc-side-bar--flyout";
  sidebar.innerHTML =
    "<div class=\"svc-side-bar__container\"><div data-name=\"title\"></div></div>";
  root.appendChild(sidebar);
  mockRect(sidebar.querySelector(".svc-side-bar__container"), 550, 0, 300, 700);
  mockRect(sidebar.querySelector("[data-name='title']"), 600, 100, 200, 30);
  const peers = new Map<string, IPresencePeer>();
  const overlay = new PresenceOverlay(creator, () => peers);
  peers.set("c1", <IPresencePeer>{
    clientId: "c1", name: "User c1", color: "#e91e63", lastSeen: Date.now(),
    state: {
      tab: "designer", tabId: creator.activeTabId, sel: null, pgFocus: null, edit: null,
      cur: { tab: creator.activeTabId, a: { s: "pg", n: "title" }, x: 0.5, y: 0.5, t: Date.now() }
    }
  });
  const cursorEl = (): HTMLElement => (<any>overlay).layer.querySelector(".collab-presence-cursor");
  try {
    (<any>overlay).render();
    // The point (700, 115) is inside the panel, but pg cursors target the
    // panel itself and are exempt from the occlusion test.
    expect(cursorEl().style.display).toEqual("block");
    expect(cursorEl().style.left).toEqual("700px");
  } finally {
    overlay.dispose();
    root.remove();
    plugin.dispose();
  }
});

test("presence: designer name badge hides under the flyout panel, pg badge does not", (): any => {
  const { plugin } = createCreator();
  const designer = document.createElement("div");
  designer.id = "scrollableDiv-designer";
  designer.innerHTML =
    "<div data-sv-drop-target-survey-element=\"q1\"><div class=\"svc-question__content\"></div></div>";
  document.body.appendChild(designer);
  mockRect(designer, 0, 0, 900, 700);
  const content = <HTMLElement>designer.querySelector(".svc-question__content");
  // Ring node placed so the badge anchor point (bottom-right) falls well
  // inside the panel; in jsdom the badge measures 0x0, so the point must be
  // strictly inside for `intersects` to detect it.
  mockRect(content, 400, 100, 300, 50);
  const sidebar = document.createElement("div");
  sidebar.className = "svc-side-bar svc-side-bar--flyout";
  sidebar.innerHTML = "<div class=\"svc-side-bar__container\"></div>";
  document.body.appendChild(sidebar);
  mockRect(sidebar.querySelector(".svc-side-bar__container"), 550, 0, 300, 700);
  const badgeEl = (): HTMLElement => (<any>plugin.overlay).layer.querySelector(".collab-presence-badge");
  try {
    plugin.upsertPeer(peerEntry("c1", {
      state: {
        tab: "designer", tabId: "designer",
        sel: { loc: "/pages/page1/elements/q1", name: "q1", kind: "text", title: "q1" },
        pgFocus: null, edit: null, cur: null
      }
    }));
    (<any>plugin.overlay).render();
    // Ring is decorated natively (correctly covered by the panel), but the
    // badge is a layer artifact and must hide instead of painting on top.
    expect(content.getAttribute("data-collab-focus")).toEqual("on");
    expect(badgeEl().style.display).toEqual("none");
    // Docked sidebar: badge shows.
    sidebar.className = "svc-side-bar";
    (<any>plugin.overlay).render();
    expect(badgeEl().style.display).toEqual("block");
  } finally {
    designer.remove();
    sidebar.remove();
    plugin.dispose();
  }
});

test("presence: dispose stops capturing", (): any => {
  const { creator, plugin, states } = createCreator();
  plugin.dispose();
  const before = states.length;
  creator.selectElement(creator.survey.getQuestionByName("q1"));
  expect(states.length).toEqual(before);
});
