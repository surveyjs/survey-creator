import { CreatorTester } from "./creator-tester";
import { JournalOp } from "../src/plugins/journal";
import { IPresencePeerEntry, PresencePlugin } from "../src/plugins/presence";
import { CollabBarPlugin, ICollabBarOptions } from "../src/plugins/collab-bar";

const initialJSON = {
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "q1" }
      ]
    }
  ]
};

const tick = (ms = 50): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

interface ISetup {
  creator: CreatorTester;
  presence: PresencePlugin;
  bar: CollabBarPlugin;
  root: HTMLElement;
  cleanup: () => void;
}

function setup(options: ICollabBarOptions = {}): ISetup {
  const creator = new CreatorTester();
  creator.JSON = initialJSON;
  const presence = new PresencePlugin(creator);
  creator.addPlugin("presence", presence);
  const bar = new CollabBarPlugin(creator, options);
  creator.addPlugin("collabBar", bar);

  const root = document.createElement("div");
  root.className = "svc-creator";
  root.innerHTML = "<div class=\"svc-creator__area\"></div>";
  document.body.appendChild(root);
  creator.setRootElement(root);

  const cleanup = (): void => {
    bar.dispose();
    presence.dispose();
    root.remove();
  };
  return { creator, presence, bar, root, cleanup };
}

const peerEntry = (clientId: string, tab: string): IPresencePeerEntry => ({
  clientId,
  name: `User ${clientId}`,
  color: "#e91e63",
  state: { tab, sel: null, focus: null, cur: null }
});

const barButton = (bar: CollabBarPlugin, label: string): HTMLButtonElement | undefined =>
  Array.from(bar.element!.querySelectorAll("button")).find((b) => b.textContent === label);

const menuText = (bar: CollabBarPlugin): string => bar.element!.textContent ?? "";

test("collab-bar: mounts as the first child of the creator root", async (): Promise<any> => {
  const { bar, root, cleanup } = setup();
  try {
    await tick();
    expect(bar.element).toBeTruthy();
    expect(root.firstChild).toBe(bar.element);
    expect((<HTMLElement>root.firstChild).className).toBe("svc-collab-bar");
  } finally {
    cleanup();
  }
});

test("collab-bar: self-heals when the strip is removed from the root", async (): Promise<any> => {
  const { bar, root, cleanup } = setup();
  try {
    await tick();
    expect(root.firstChild).toBe(bar.element);
    bar.element!.remove();
    await tick();
    expect(root.firstChild).toBe(bar.element);
  } finally {
    cleanup();
  }
});

test("collab-bar: re-mounts into a replaced creator root", async (): Promise<any> => {
  const { creator, bar, root, cleanup } = setup();
  const root2 = document.createElement("div");
  root2.className = "svc-creator";
  document.body.appendChild(root2);
  try {
    await tick();
    expect(root.firstChild).toBe(bar.element);
    root.remove();
    creator.setRootElement(root2);
    // The slow self-heal tick (500ms) catches a replaced root.
    await tick(700);
    expect(root2.firstChild).toBe(bar.element);
  } finally {
    cleanup();
    root2.remove();
  }
});

test("collab-bar: renders presence peers as chips and follows them to their tab", async (): Promise<any> => {
  const { creator, presence, bar, cleanup } = setup();
  try {
    await tick();
    presence.upsertPeer(peerEntry("a", "test"));
    const chip = <HTMLElement>bar.element!.querySelector(".collab-participant-chip");
    expect(chip).toBeTruthy();
    // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
    expect(chip.title).toBe("User a — test");
    expect(creator.activeTab).toBe("designer");
    chip.click();
    // "test" is the legacy alias the creator normalizes to "preview".
    expect(creator.activeTab).toBe("preview");
    // The roster row list follows the same source.
    presence.removePeer("a");
    expect(bar.element!.querySelector(".collab-participant-chip")).toBeFalsy();
  } finally {
    cleanup();
  }
});

test("collab-bar: participant chips are not rebuilt by state-only presence updates", async (): Promise<any> => {
  const { presence, bar, cleanup } = setup();
  try {
    await tick();
    presence.upsertPeer(peerEntry("a", "designer"));
    const chip = <HTMLElement>bar.element!.querySelector(".collab-participant-chip");
    (<any>chip).persistCheck = true;
    // Same id/name/color/tab -> the displayed roster is unchanged, skip rebuild.
    presence.upsertPeer(peerEntry("a", "designer"));
    const after = <HTMLElement>bar.element!.querySelector(".collab-participant-chip");
    expect((<any>after).persistCheck).toBe(true);
  } finally {
    cleanup();
  }
});

test("collab-bar: version history panel renders named versions from setHistory", async (): Promise<any> => {
  const { bar, cleanup } = setup();
  try {
    await tick();
    bar.setHistory([
      { seq: 0, timestamp: Date.now(), op: JournalOp.PropertyChanged, payload: { target: "/pages/page1/elements/q1/title", value: "Hello" } },
      { seq: 1, timestamp: Date.now(), op: JournalOp.FullSnapshot, payload: { json: {}, label: "First milestone" } }
    ]);
    barButton(bar, "Show Version History")!.click();
    const panel = document.body.querySelector(".collab-version-panel");
    expect(panel).toBeTruthy();
    expect(panel!.querySelector(".collab-version-current")).toBeTruthy();
    expect(panel!.querySelector(".collab-version-named")!.textContent).toContain("First milestone");
    expect(panel!.querySelector(".collab-version-group")!.textContent).toContain("1 autosaved version");
    // The newest group is expanded by default; its rows describe the action
    // in human-readable form plus the timestamp.
    const autosaved = panel!.querySelector(".collab-version-autosaved");
    expect(autosaved).toBeTruthy();
    // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
    expect(autosaved!.textContent).toContain("Property \"title\" changed on \"q1\"");
    expect(autosaved!.textContent).toMatch(/\d{2}:\d{2}/); // the timestamp line is still there
    expect(panel!.querySelector(".collab-version-base")).toBeTruthy();
    // Live refresh while open.
    bar.setHistory([
      { seq: 0, timestamp: Date.now(), op: JournalOp.FullSnapshot, payload: { json: {}, label: "A" } },
      { seq: 1, timestamp: Date.now(), op: JournalOp.FullSnapshot, payload: { json: {}, label: "B" } }
    ]);
    expect(panel!.querySelectorAll(".collab-version-named").length).toBe(2);
  } finally {
    cleanup();
  }
});

test("collab-bar: windows mount inside the creator root so theme variables cascade", async (): Promise<any> => {
  const { bar, root, cleanup } = setup();
  try {
    await tick();
    bar.setHistory([]);
    barButton(bar, "Show Version History")!.click();
    expect(root.querySelector(".collab-version-panel")).toBeTruthy();
  } finally {
    cleanup();
  }
});

test("collab-bar: host-specific elements are hidden without options", async (): Promise<any> => {
  const plain = setup({});
  try {
    await tick();
    expect(barButton(plain.bar, "Invite")).toBeFalsy();
    expect(barButton(plain.bar, "Back to lobby")).toBeFalsy();
    expect(menuText(plain.bar)).not.toContain("Room");
    expect(menuText(plain.bar)).not.toContain("Framework");
  } finally {
    plain.cleanup();
  }
  const full = setup({
    roomId: "r-1",
    framework: "React",
    getInviteLink: () => "https://example.test/?room=r-1",
    onBack: () => { }
  });
  try {
    await tick();
    expect(barButton(full.bar, "Invite")).toBeTruthy();
    expect(barButton(full.bar, "Back to lobby")).toBeTruthy();
    expect(menuText(full.bar)).toContain("Room");
    expect(menuText(full.bar)).toContain("r-1");
    expect(menuText(full.bar)).toContain("Framework");
    expect(menuText(full.bar)).toContain("React");
  } finally {
    full.cleanup();
  }
});

// jsdom reports all-zero client rects, so the drag offset equals the pointer-down
// coordinates and the resulting left/top equal the pointer delta.
function dragHeader(header: HTMLElement, from: { x: number, y: number }, to: Array<{ x: number, y: number }>): void {
  header.dispatchEvent(new MouseEvent("pointerdown", { clientX: from.x, clientY: from.y, bubbles: true }));
  for (const p of to) {
    header.dispatchEvent(new MouseEvent("pointermove", { clientX: p.x, clientY: p.y, bubbles: true }));
  }
  header.dispatchEvent(new MouseEvent("pointerup", { bubbles: true }));
}

test("collab-bar: version history panel drags by its header and clamps to the viewport", async (): Promise<any> => {
  const { bar, cleanup } = setup();
  try {
    await tick();
    bar.setHistory([]);
    barButton(bar, "Show Version History")!.click();
    const panel = <HTMLElement>document.body.querySelector(".collab-version-panel");
    const header = <HTMLElement>panel.querySelector(".collab-version-header");
    expect(header).toBeTruthy();

    header.dispatchEvent(new MouseEvent("pointerdown", { clientX: 100, clientY: 20, bubbles: true }));
    header.dispatchEvent(new MouseEvent("pointermove", { clientX: 160, clientY: 100, bubbles: true }));
    // Undocked at the pointer delta.
    expect(panel.style.left).toBe("60px");
    expect(panel.style.top).toBe("80px");
    expect(panel.style.right).toBe("auto");
    expect(panel.style.bottom).toBe("auto");
    // Dragging past the top-left corner clamps to the 12px viewport inset.
    header.dispatchEvent(new MouseEvent("pointermove", { clientX: 0, clientY: 0, bubbles: true }));
    expect(panel.style.left).toBe("12px");
    expect(panel.style.top).toBe("12px");
    header.dispatchEvent(new MouseEvent("pointerup", { bubbles: true }));
    // The gesture ended: further moves must not drag the panel.
    header.dispatchEvent(new MouseEvent("pointermove", { clientX: 300, clientY: 300, bubbles: true }));
    expect(panel.style.left).toBe("12px");
    expect(panel.style.top).toBe("12px");
  } finally {
    cleanup();
  }
});

test("collab-bar: header buttons do not start a drag", async (): Promise<any> => {
  const { bar, cleanup } = setup();
  try {
    await tick();
    bar.setHistory([]);
    barButton(bar, "Show Version History")!.click();
    const panel = <HTMLElement>document.body.querySelector(".collab-version-panel");
    const closeBtn = <HTMLElement>panel.querySelector("button[aria-label='Close']");
    closeBtn.dispatchEvent(new MouseEvent("pointerdown", { clientX: 100, clientY: 20, bubbles: true }));
    closeBtn.dispatchEvent(new MouseEvent("pointermove", { clientX: 160, clientY: 100, bubbles: true }));
    // Still docked: pointer-down on a button is not a drag.
    expect(panel.style.left).toBe("");
    expect(panel.style.right).toBe("12px");
  } finally {
    cleanup();
  }
});

test("collab-bar: dragged panel minimizes to its header and restores floating in place", async (): Promise<any> => {
  const { bar, cleanup } = setup();
  try {
    await tick();
    bar.setHistory([]);
    barButton(bar, "Show Version History")!.click();
    const panel = <HTMLElement>document.body.querySelector(".collab-version-panel");
    const header = <HTMLElement>panel.querySelector(".collab-version-header");
    dragHeader(header, { x: 100, y: 20 }, [{ x: 160, y: 100 }]);
    expect(panel.style.left).toBe("60px");

    const minimizeBtn = <HTMLButtonElement>panel.querySelector("button[aria-label='Minimize']");
    minimizeBtn.click();
    // Floating + minimized: collapsed to the header, still undocked.
    expect(panel.style.height).toBe("auto");
    expect(panel.style.bottom).toBe("auto");
    minimizeBtn.click();
    // Restored floating: keeps left, gets an explicit height fitted to the
    // viewport (jsdom: 768 - 2*12); the top is pulled up to make it fit.
    expect(panel.style.left).toBe("60px");
    expect(panel.style.bottom).toBe("auto");
    expect(panel.style.top).toBe("12px");
    expect(panel.style.height).toBe("744px");
  } finally {
    cleanup();
  }
});

test("collab-bar: dispose removes the strip and any open windows", async (): Promise<any> => {
  const { bar, presence, root, cleanup } = setup();
  try {
    await tick();
    bar.setHistory([]);
    barButton(bar, "Show Version History")!.click();
    expect(document.body.querySelector(".collab-version-panel")).toBeTruthy();
    bar.dispose();
    expect(document.body.querySelector(".collab-version-panel")).toBeFalsy();
    expect(root.querySelector(".svc-collab-bar")).toBeFalsy();
    // Disposed plugin must not resurrect the strip on later ticks.
    await tick(700);
    expect(root.querySelector(".svc-collab-bar")).toBeFalsy();
  } finally {
    presence.dispose();
    root.remove();
    cleanup();
  }
});
