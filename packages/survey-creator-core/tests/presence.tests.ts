import { CreatorTester } from "./creator-tester";
import { IPresencePeerEntry, IPresenceState, PresencePlugin } from "../src/plugins/presence";

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
    expect(plugin.getState().cur).toEqual(expect.objectContaining({ a: { s: "surface" }, x: 0.25, y: 0.25 }));
  } finally {
    root.remove();
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
