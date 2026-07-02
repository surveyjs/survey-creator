import { planTranslationRefresh } from "../../src/collaboration/translation-refresh";
import type { ISyncMessage } from "../../src/collaboration/undo-redo-serializer";

// Registered locale codes ("default" is a reserved token, not in this set, and
// maps to the "" default column).
const LOCALE_CODES = new Set<string>(["en", "de", "fr", "es", "it"]);
// Language list rows: en + de (shown) and it (listed but unchecked).
const VISIBLE = new Set<string>(["en", "de", "it"]);

const CTX = { visible: VISIBLE, localeCodes: LOCALE_CODES };

function tx(...actions: any[]): ISyncMessage {
  return { kind: "transaction", id: "t1", actions } as ISyncMessage;
}
function prop(locator: string, value: any = "x"): any {
  return { kind: "property", locator, value };
}

describe("planTranslationRefresh", () => {
  it("updates (no new locale) for a text edit in a listed locale", () => {
    const plan = planTranslationRefresh(tx(prop("/pages/0/elements/0/title/de")), CTX);
    expect(plan).toEqual({ kind: "update", newLocales: [] });
  });

  it("updates (no new locale) for a default-locale text edit", () => {
    const plan = planTranslationRefresh(tx(prop("/pages/0/elements/0/title/default")), CTX);
    expect(plan).toEqual({ kind: "update", newLocales: [] });
  });

  it("updates (no new locale) for a locale that's listed but unchecked", () => {
    const plan = planTranslationRefresh(tx(prop("/pages/0/elements/0/title/it")), CTX);
    expect(plan).toEqual({ kind: "update", newLocales: [] });
  });

  it("registers a brand-new locale (not in the list)", () => {
    const plan = planTranslationRefresh(tx(prop("/pages/0/elements/0/title/fr")), CTX);
    expect(plan).toEqual({ kind: "update", newLocales: ["fr"] });
  });

  it("registers the new locale once for a mixed message", () => {
    const plan = planTranslationRefresh(
      tx(prop("/pages/0/elements/0/title/de"), prop("/pages/0/elements/1/title/fr")),
      CTX
    );
    expect(plan).toEqual({ kind: "update", newLocales: ["fr"] });
  });

  it("dedupes repeated new locales", () => {
    const plan = planTranslationRefresh(
      tx(prop("/pages/0/elements/0/title/fr"), prop("/pages/0/elements/1/title/fr")),
      CTX
    );
    expect(plan).toEqual({ kind: "update", newLocales: ["fr"] });
  });

  it("rebuilds on an array action (row added/removed)", () => {
    const plan = planTranslationRefresh(
      tx({ kind: "array", locator: "/pages/0/elements/1", value: [{ type: "text", name: "q2" }] }),
      CTX
    );
    expect(plan).toEqual({ kind: "rebuild" });
  });

  it("rebuilds on a non-localizable property change (e.g. a name rename)", () => {
    const plan = planTranslationRefresh(tx(prop("/pages/0/elements/0/name", "renamed")), CTX);
    expect(plan).toEqual({ kind: "rebuild" });
  });

  it("rebuilds if any action in the transaction is structural", () => {
    const plan = planTranslationRefresh(
      tx(prop("/pages/0/elements/0/title/de"), { kind: "array", locator: "/pages/0/elements/2", value: null }),
      CTX
    );
    expect(plan).toEqual({ kind: "rebuild" });
  });

  it("rebuilds for undo/redo messages (no action payload to classify)", () => {
    expect(planTranslationRefresh({ kind: "undo", id: "t1" } as ISyncMessage, CTX)).toEqual({ kind: "rebuild" });
    expect(planTranslationRefresh({ kind: "redo", id: "t1" } as ISyncMessage, CTX)).toEqual({ kind: "rebuild" });
  });
});
