import { settings as libSettings } from "survey-core";
import { CreatorTester } from "./creator-tester";
import { editorLocalization } from "../src/editorLocalization";
import { IPresencePeerEntry, IPresenceState, PresencePlugin } from "../src/plugins/presence";

// TranslationDeleteGuard: deleting a locale row in the Translations-tab
// language list is vetoed with a danger dialog while a remote peer claims
// that locale (sticky trLoc, or a live tr focus from an older sender).

const peerEntry = (clientId: string, state: Partial<IPresenceState>): IPresencePeerEntry => ({
  clientId,
  name: `User ${clientId}`,
  color: "#e91e63",
  state: <IPresenceState>{ tab: "designer", sel: null, focus: null, trLoc: null, cur: null, ...state }
});

function createGuardedCreator(): { creator: CreatorTester, plugin: PresencePlugin, translation: any, locales: any } {
  const creator = new CreatorTester({ showTranslationTab: true });
  creator.JSON = {
    pages: [{
      name: "page1",
      elements: [{ type: "text", name: "q1", title: { default: "Question title", de: "Titel", fr: "Titre" } }]
    }]
  };
  // The guard subscribes in the plugin constructor - before the tab (and its
  // language-list settings survey) is activated, like the real clients do.
  const plugin = new PresencePlugin(creator);
  creator.addPlugin("presence", plugin);
  creator.makeNewViewActive("translation");
  const translation = (<any>creator.getPlugin("translation")).model;
  return { creator, plugin, translation, locales: translation.localesQuestion };
}

function localeRowIndex(locales: any, name: string): number {
  const value = Array.isArray(locales.value) ? locales.value : [];
  return value.findIndex((row: any) => row?.name === name);
}

// Stub the dialog host; returns captured showDialog options via a getter.
function stubShowDialog(): { restore: () => void, captured: () => any, count: () => number } {
  const prev = libSettings.showDialog;
  let captured: any = undefined;
  let count = 0;
  libSettings.showDialog = <any>((options: any) => {
    captured = options;
    count++;
    return { footerToolbar: { getActionById: () => (<any>{}) } };
  });
  return {
    restore: () => { libSettings.showDialog = prev; },
    captured: () => captured,
    count: () => count
  };
}

test("translation guard: no peers - the locale row deletes normally", (): any => {
  const { creator, plugin, translation, locales } = createGuardedCreator();
  const dialog = stubShowDialog();
  try {
    locales.removeRow(localeRowIndex(locales, "de"), false);
    expect(dialog.count()).toEqual(0);
    expect(localeRowIndex(locales, "de")).toEqual(-1);
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toEqual("");
    expect(translation.locales.indexOf("de")).toEqual(-1);
  } finally {
    dialog.restore();
    plugin.dispose();
  }
});

test("translation guard: a peer with a sticky claim vetoes the delete; cancel keeps everything", (): any => {
  const { creator, plugin, locales } = createGuardedCreator();
  const dialog = stubShowDialog();
  try {
    plugin.upsertPeer(peerEntry("c1", { tab: "translation", trLoc: "de" }));
    locales.removeRow(localeRowIndex(locales, "de"), false);
    expect(localeRowIndex(locales, "de")).toBeGreaterThanOrEqual(0);
    expect(dialog.count()).toEqual(1);
    dialog.captured().onCancel();
    expect(localeRowIndex(locales, "de")).toBeGreaterThanOrEqual(0);
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toEqual("Titel");
  } finally {
    dialog.restore();
    plugin.dispose();
  }
});

test("translation guard: confirming the danger dialog deletes the locale through the regular pipeline", (): any => {
  const { creator, plugin, locales } = createGuardedCreator();
  const dialog = stubShowDialog();
  try {
    plugin.upsertPeer(peerEntry("c1", { tab: "translation", trLoc: "de" }));
    locales.removeRow(localeRowIndex(locales, "de"), false);
    expect(dialog.count()).toEqual(1);
    dialog.captured().onApply();
    expect(localeRowIndex(locales, "de")).toEqual(-1);
    // The forced path reached deleteLocaleStrings - the strings are gone too.
    expect(creator.survey.getQuestionByName("q1").locTitle.getLocaleText("de")).toEqual("");
    // No second dialog on the forced re-run.
    expect(dialog.count()).toEqual(1);
  } finally {
    dialog.restore();
    plugin.dispose();
  }
});

test("translation guard: a live tr focus from an older sender (no trLoc) still vetoes", (): any => {
  const { plugin, locales } = createGuardedCreator();
  const dialog = stubShowDialog();
  try {
    plugin.upsertPeer(peerEntry("c1", {
      tab: "translation",
      focus: { area: "tr", m: "m1", l: "de", loc: null, p: "title" }
    }));
    locales.removeRow(localeRowIndex(locales, "de"), false);
    expect(dialog.count()).toEqual(1);
    expect(localeRowIndex(locales, "de")).toBeGreaterThanOrEqual(0);
  } finally {
    dialog.restore();
    plugin.dispose();
  }
});

test("translation guard: claims on other locales or stale tabs do not block", (): any => {
  const { plugin, locales } = createGuardedCreator();
  const dialog = stubShowDialog();
  try {
    plugin.upsertPeer(peerEntry("c1", { tab: "translation", trLoc: "fr" }));
    // A defensively stale shape: trLoc without the translation tab.
    plugin.upsertPeer(peerEntry("c2", { tab: "designer", trLoc: "de" }));
    locales.removeRow(localeRowIndex(locales, "de"), false);
    expect(dialog.count()).toEqual(0);
    expect(localeRowIndex(locales, "de")).toEqual(-1);
  } finally {
    dialog.restore();
    plugin.dispose();
  }
});

test("translation guard: the dialog names every claiming peer and the locale", (): any => {
  const { plugin, locales } = createGuardedCreator();
  const dialog = stubShowDialog();
  try {
    plugin.upsertPeer(peerEntry("c1", { tab: "translation", trLoc: "de" }));
    plugin.upsertPeer(peerEntry("c2", { tab: "translation", trLoc: "de" }));
    locales.removeRow(localeRowIndex(locales, "de"), false);
    expect(dialog.count()).toEqual(1);
    // showConfirmDialog layout: content container -> [icon, title container];
    // the title container holds the title and message string viewers.
    const titleContainer = dialog.captured().data.model.elements[1].componentData.model;
    const message = titleContainer.elements[1].componentData.locStr.text;
    expect(message).toContain("User c1, User c2");
    // Whatever display name the UI resolves for the locale (the localized
    // name in a full bundle, the bare code in this test environment).
    expect(message).toContain(editorLocalization.getLocaleName("de"));
  } finally {
    dialog.restore();
    plugin.dispose();
  }
});
