import { CreatorTester } from "../tests/creator-tester";
import { IPresencePeerEntry, IPresenceState, logicRuleKey, presenceColorSlot } from "../src/plugins/collaboration/presence";
import { CollaborationPlugin } from "../src/plugins/collaboration";

// A peer's color is derived on the client from its clientId alone - the relay
// assigns none. Every surface that paints the peer (the collab-bar chip, the
// Logic-tab rule chip, the overlay ring) must land on the same theme slot.

const LEGIBLE_SLOTS = [1, 2, 3, 4, 6, 7, 8, 9];

const JSON_WITH_RULE = {
  pages: [{
    name: "page1",
    elements: [
      { type: "text", name: "q1" },
      { type: "text", name: "q2", visibleIf: "{q1} = 1" }
    ]
  }]
};

function setup(): { creator: CreatorTester, plugin: CollaborationPlugin } {
  const creator = new CreatorTester();
  creator.JSON = JSON_WITH_RULE;
  const plugin = new CollaborationPlugin(creator, {});
  creator.addPlugin("collaboration", plugin);
  plugin.setClientId("z");
  return { creator, plugin };
}

// The mounted creator's theme root carries the user-color tokens; every slot
// gets a distinct value so a test can tell which slot painted a peer.
const slotToken = (slot: number): string => "#00000" + slot;
function mountThemeRoot(): HTMLElement {
  const root = document.createElement("div");
  root.className = "svc-creator sd-theme-root";
  for (let slot = 0; slot < 10; slot++) root.style.setProperty("--sjs2-color-utility-user-bg-color-" + slot, slotToken(slot));
  document.body.appendChild(root);
  return root;
}
function mountDesigner(questionName: string): HTMLElement {
  const designer = document.createElement("div");
  designer.id = "scrollableDiv-designer";
  designer.innerHTML = `<div data-sv-drop-target-survey-element="${questionName}"><div class="svc-question__content"></div></div>`;
  document.body.appendChild(designer);
  return designer;
}
const designerPeer = (clientId: string, questionName: string): IPresencePeerEntry => ({
  clientId,
  name: `User ${clientId}`,
  state: <IPresenceState>{
    tab: "designer", sel: { loc: `/pages/page1/elements/${questionName}`, name: questionName },
    lock: true, focus: null, trLoc: null, cur: null
  }
});

test("presence colors: a client id maps to a legible theme slot, the same every time", (): any => {
  const seen = new Set<number>();
  for (let i = 0; i < 400; i++) {
    const id = "client-" + i + "-" + (i * 7919).toString(36);
    const slot = presenceColorSlot(id);
    expect(LEGIBLE_SLOTS).toContain(slot);
    expect(presenceColorSlot(id)).toEqual(slot);
    seen.add(slot);
  }
  // The hash spreads over the whole legible set.
  expect(seen.size).toEqual(LEGIBLE_SLOTS.length);
});

test("presence colors: the roster keeps no transport color", (): any => {
  const { plugin } = setup();
  try {
    // An older relay still stamps a hex color - the roster drops it.
    plugin.upsertPeer(<any>{ ...designerPeer("a", "q1"), color: "#e91e63", colorIndex: 4 });
    expect(Object.keys(plugin.peers.get("a")).sort()).toEqual(["clientId", "name", "state"]);
  } finally {
    plugin.dispose();
  }
});

test("presence colors: one peer, one color - collab-bar chip, Logic rule chip and overlay ring", (): any => {
  const { creator, plugin } = setup();
  const theme = mountThemeRoot();
  const designer = mountDesigner("q2");
  try {
    // "a" holds q2 in the designer, which also locks the rule writing q2.visibleIf.
    plugin.upsertPeer(designerPeer("a", "q2"));
    const slot = presenceColorSlot("a");

    expect(plugin.bar.participantActions.actions[0].innerCss).toContain("svc-collab-bar__avatar--color-" + slot);

    (<any>plugin.presence.overlay).render();
    const ring = <HTMLElement>designer.querySelector(".svc-question__content");
    expect(ring.style.getPropertyValue("--collab-peer-color")).toEqual(slotToken(slot));

    creator.makeNewViewActive("logic");
    const model: any = (<any>creator.getPlugin("logic")).model;
    const index = model.items.findIndex((item: any) => logicRuleKey(item) === "|{q1} = 1");
    const row = model.matrixItems.visibleRows[index];
    const rendered = model.matrixItems.renderedTable.rows.find((r: any) => r.row === row && !r.isDetailRow && !r.isErrorsRow);
    const actions: Array<any> = [];
    rendered.cells.filter((c: any) => c.isActionsCell).forEach((c: any) => actions.push(...c.item.value.actions));
    const chip = actions.find((a) => a.id === "collab-rule-holder");
    expect(chip.visible).toBe(true);
    expect(chip.innerCss).toContain("svc-collab-bar__avatar--color-" + slot);
  } finally {
    designer.remove();
    theme.remove();
    plugin.dispose();
  }
});

test("presence colors: the overlay follows the theme root, gray without one", (): any => {
  const { plugin } = setup();
  const designer = mountDesigner("q1");
  const ring = <HTMLElement>designer.querySelector(".svc-question__content");
  let theme: HTMLElement | null = null;
  try {
    plugin.upsertPeer(designerPeer("a", "q1"));
    (<any>plugin.presence.overlay).render();
    expect(ring.style.getPropertyValue("--collab-peer-color")).toEqual("#808080");

    // The theme arrives later (the creator mounts after the first tick): the
    // color is read again, not frozen at first sight.
    theme = mountThemeRoot();
    (<any>plugin.presence.overlay).render();
    expect(ring.style.getPropertyValue("--collab-peer-color")).toEqual(slotToken(presenceColorSlot("a")));
  } finally {
    designer.remove();
    theme?.remove();
    plugin.dispose();
  }
});
