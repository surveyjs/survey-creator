import { CreatorTester } from "./creator-tester";
import { JournalOp, JournalPlugin } from "../src/plugins/journal";
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
  journal: JournalPlugin;
  presence: PresencePlugin;
  bar: CollabBarPlugin;
  root: HTMLElement;
  cleanup: () => void;
}

function setup(options: ICollabBarOptions = {}, withJournal = true): ISetup {
  const creator = new CreatorTester();
  creator.JSON = initialJSON;
  let journal: JournalPlugin | undefined;
  if (withJournal) {
    journal = new JournalPlugin(creator);
    creator.addPlugin("journal", journal);
  }
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
  return { creator, journal: <JournalPlugin>journal, presence, bar, root, cleanup };
}

const peerEntry = (clientId: string, tab: string): IPresencePeerEntry => ({
  clientId,
  name: `User ${clientId}`,
  color: "#e91e63",
  state: { tab, tabId: tab, sel: null, pgFocus: null, edit: null, cur: null }
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
      { seq: 0, timestamp: Date.now(), op: JournalOp.PropertyChanged, payload: {} },
      { seq: 1, timestamp: Date.now(), op: JournalOp.FullSnapshot, payload: { json: {}, label: "First milestone" } }
    ]);
    barButton(bar, "Show Version History")!.click();
    const panel = document.body.querySelector(".collab-version-panel");
    expect(panel).toBeTruthy();
    expect(panel!.querySelector(".collab-version-current")).toBeTruthy();
    expect(panel!.querySelector(".collab-version-named")!.textContent).toContain("First milestone");
    expect(panel!.querySelector(".collab-version-group")!.textContent).toContain("1 autosaved version");
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

test("collab-bar: save to version history snapshots through the journal by default", async (): Promise<any> => {
  const { journal, bar, cleanup } = setup();
  try {
    await tick();
    // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
    barButton(bar, "Save to Version History…")!.click();
    const modal = document.body.querySelector(".collab-modal");
    expect(modal).toBeTruthy();
    const input = <HTMLInputElement>modal!.querySelector("input.collab-version-name");
    input.value = "Release candidate";
    (<HTMLButtonElement>Array.from(modal!.querySelectorAll("button")).find((b) => b.textContent === "Save")).click();
    expect(document.body.querySelector(".collab-modal")).toBeFalsy();
    const named = journal.records.filter((r) => r.op === JournalOp.FullSnapshot && (<any>r.payload).label === "Release candidate");
    expect(named.length).toBe(1);
  } finally {
    cleanup();
  }
});

test("collab-bar: host-specific elements are hidden without options", async (): Promise<any> => {
  const plain = setup({}, false);
  try {
    await tick();
    expect(barButton(plain.bar, "Invite")).toBeFalsy();
    expect(barButton(plain.bar, "Back to lobby")).toBeFalsy();
    // No journal registered and no onSaveVersion -> the item is hidden.
    // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
    expect(barButton(plain.bar, "Save to Version History…")).toBeFalsy();
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
    // eslint-disable-next-line surveyjs/eslint-plugin-i18n/only-english-or-code
    expect(barButton(full.bar, "Save to Version History…")).toBeTruthy();
    expect(menuText(full.bar)).toContain("Room");
    expect(menuText(full.bar)).toContain("r-1");
    expect(menuText(full.bar)).toContain("Framework");
    expect(menuText(full.bar)).toContain("React");
  } finally {
    full.cleanup();
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
