import { planLogicRefresh, applyLogicRefresh } from "../../src/collaboration/logic-refresh";
import type { ISyncMessage } from "../../src/collaboration/undo-redo-serializer";

function tx(...actions: any[]): ISyncMessage {
  return { kind: "transaction", id: "t1", actions } as ISyncMessage;
}
function prop(locator: string, value: any = "x"): any {
  return { kind: "property", locator, value };
}
function arr(locator: string, value: any = null): any {
  return { kind: "array", locator, value };
}

describe("planLogicRefresh", () => {
  describe("in view mode (not editing) -> always rebuild", () => {
    it("rebuilds for a logic-expression property edit", () => {
      const plan = planLogicRefresh(tx(prop("/pages/0/elements/1/visibleIf", "{q1} = 1")), { isEditing: false });
      expect(plan).toEqual({ kind: "rebuild" });
    });

    it("rebuilds for an unrelated property edit (correctness over cheapness)", () => {
      const plan = planLogicRefresh(tx(prop("/pages/0/elements/0/title", "hi")), { isEditing: false });
      expect(plan).toEqual({ kind: "rebuild" });
    });

    it("rebuilds for an array insert/delete", () => {
      const plan = planLogicRefresh(tx(arr("/pages/0/elements/1", [{ type: "text", name: "q2" }])), { isEditing: false });
      expect(plan).toEqual({ kind: "rebuild" });
    });

    it("rebuilds for undo/redo (no payload to classify)", () => {
      expect(planLogicRefresh({ kind: "undo", id: "t1" } as ISyncMessage, { isEditing: false })).toEqual({ kind: "rebuild" });
      expect(planLogicRefresh({ kind: "redo", id: "t1" } as ISyncMessage, { isEditing: false })).toEqual({ kind: "rebuild" });
    });
  });

  describe("while editing (mode !== view) -> always defer", () => {
    it("defers a logic-expression property edit", () => {
      const plan = planLogicRefresh(tx(prop("/pages/0/elements/1/visibleIf", "{q1} = 2")), { isEditing: true });
      expect(plan).toEqual({ kind: "defer" });
    });

    it("defers an array insert/delete", () => {
      const plan = planLogicRefresh(tx(arr("/pages/0/elements/1", null)), { isEditing: true });
      expect(plan).toEqual({ kind: "defer" });
    });

    it("defers undo/redo", () => {
      expect(planLogicRefresh({ kind: "undo", id: "t1" } as ISyncMessage, { isEditing: true })).toEqual({ kind: "defer" });
    });
  });
});

describe("applyLogicRefresh", () => {
  it("calls model.update() and reports not-deferred for a rebuild plan", () => {
    const update = vi.fn();
    const deferred = applyLogicRefresh({ update }, { kind: "rebuild" });
    expect(update).toHaveBeenCalledOnce();
    expect(deferred).toBe(false);
  });

  it("does not call model.update() and reports deferred for a defer plan", () => {
    const update = vi.fn();
    const deferred = applyLogicRefresh({ update }, { kind: "defer" });
    expect(update).not.toHaveBeenCalled();
    expect(deferred).toBe(true);
  });
});
