import { SurveyModel } from "survey-core";
import { SurveyCreatorModel } from "../../src/creator-base";
import { planLogicRefresh, applyLogicRefresh, bindLogicEditEndFlush } from "../../src/collaboration/logic-refresh";
import type { ISyncMessage } from "../../src/collaboration/undo-redo-serializer";

// The non-editing (view-mode) refresh is exercised against the REAL SurveyLogicUI
// model below. The editing/defer/flush transitions, however, require opening the
// real condition editor (`editItem`/`addNewUI`), which is not reliably
// constructible in this headless test env; that real-editor path is covered
// end-to-end by e2e/logic-sync.spec.ts in the collaboration repo. Here we verify
// the defer/flush ORCHESTRATION (`bindLogicEditEndFlush` + the idempotent flush)
// against a faithful lightweight stand-in that mirrors the model contract those
// helpers depend on.

function ruleExpression(model: any): string | undefined {
  return model.items?.[0]?.expression;
}

const editMsg: ISyncMessage = {
  kind: "transaction",
  id: "t1",
  actions: [{ kind: "property", locator: "/pages/0/elements/1/visibleIf", value: "{q1} = 2" }]
} as ISyncMessage;

describe("logic-tab refresh against a real model (view mode)", () => {
  function getLogicModel(creator: SurveyCreatorModel): any {
    creator.activeTab = "logic";
    const plugin: any = creator.getPlugin("logic");
    plugin?.activate?.();
    return plugin.model;
  }

  it("rebuilds the rule list to reflect a synced expression edit", () => {
    const creator = new SurveyCreatorModel({ showLogicTab: true });
    creator.JSON = {
      pages: [{
        name: "page1",
        elements: [
          { type: "text", name: "q1" },
          { type: "text", name: "q2", visibleIf: "{q1} = 1" }
        ]
      }]
    };
    const model = getLogicModel(creator);

    // One rule, the seeded condition.
    expect(model.items).toHaveLength(1);
    expect(ruleExpression(model)).toBe("{q1} = 1");

    // Simulate what applySerialized does: mutate the live survey in place.
    creator.survey.getQuestionByName("q2").visibleIf = "{q1} = 2";
    // The snapshot model is still stale until refreshed.
    expect(ruleExpression(model)).toBe("{q1} = 1");

    // Run the refresh for a not-editing receiver.
    const plan = planLogicRefresh(editMsg, { isEditing: model.mode !== "view" });
    expect(plan).toEqual({ kind: "rebuild" });
    const deferred = applyLogicRefresh(model, plan);

    expect(deferred).toBe(false);
    expect(ruleExpression(model)).toBe("{q1} = 2");
  });
});

// ---------------------------------------------------------------------------
// Defer / flush orchestration against a faithful stand-in model.
// ---------------------------------------------------------------------------

function makeEvent() {
  const handlers: Array<(...args: any[]) => void> = [];
  return {
    add: (h: (...args: any[]) => void) => handlers.push(h),
    remove: (h: (...args: any[]) => void) => {
      const i = handlers.indexOf(h);
      if (i >= 0) handlers.splice(i, 1);
    },
    fire: (sender: any, opts: any) => handlers.slice().forEach(h => h(sender, opts))
  };
}

// Mirrors the slice of SurveyLogicUI that the refresh helpers depend on:
//  - `mode` setter calls onEndEditing() on a new|edit -> view transition;
//  - `update()` rebuilds `items` from the live survey and returns mode to view;
//  - `onLogicItemSaved` fires on save; `onEndEditing()` runs on every edit-end.
// (See bindLogicEditEndFlush's doc comment for why both signals matter.)
class FakeLogicModel {
  public items: Array<{ expression: string }>;
  public onLogicItemSaved = makeEvent();
  private _mode = "view";
  constructor(private survey: SurveyModel) {
    this.items = this.build();
  }
  public get mode(): string { return this._mode; }
  public set mode(val: string) {
    if (this._mode === val) return;
    const old = this._mode;
    this._mode = val;
    if (val === "view" && (old === "edit" || old === "new"))this.onEndEditing();
  }
  public onEndEditing(): void { /* real model tears down here; wrapped by bindLogicEditEndFlush */ }
  public update(): void {
    this.items = this.build();
    this.mode = "view";
  }
  public editItem(_item?: any): void { this.mode = "edit"; }
  public addNewUI(): void { this.mode = "new"; }
  private build(): Array<{ expression: string }> {
    const res: Array<{ expression: string }> = [];
    this.survey.getAllQuestions().forEach((q: any) => {
      if (q.visibleIf) res.push({ expression: q.visibleIf });
    });
    return res;
  }
}

function makeSurvey(): SurveyModel {
  return new SurveyModel({
    pages: [{
      name: "page1",
      elements: [
        { type: "text", name: "q1" },
        { type: "text", name: "q2", visibleIf: "{q1} = 1" }
      ]
    }]
  });
}

describe("logic-tab defer/flush orchestration", () => {
  it("defers the rebuild while a rule is open, then flushes on return to view", () => {
    const survey = makeSurvey();
    const model = new FakeLogicModel(survey);

    // Open the rule (mode leaves "view").
    model.editItem(model.items[0]);
    expect(model.mode).not.toBe("view");

    // A remote edit arrives and is applied to the live survey...
    survey.getQuestionByName("q2").visibleIf = "{q1} = 2";

    // ...the refresh must DEFER so the open editor is untouched.
    const plan = planLogicRefresh(editMsg, { isEditing: model.mode !== "view" });
    expect(plan).toEqual({ kind: "defer" });
    expect(applyLogicRefresh(model, plan)).toBe(true);
    expect(ruleExpression(model)).toBe("{q1} = 1"); // still stale, not rebuilt

    // On save the deferred rebuild surfaces the synced change.
    model.update();
    expect(ruleExpression(model)).toBe("{q1} = 2");
  });

  // Mirror the TabSyncRefresher's wiring: a pending flag, an idempotent flush,
  // and both edit-end triggers bound to the live model.
  function wireFlush(model: any): { setPending: () => void, isPending: () => boolean } {
    let pending = false;
    const flush = (): void => {
      if (!pending) return;
      pending = false;
      model.update();
    };
    model.onLogicItemSaved.add(flush);
    bindLogicEditEndFlush(model, flush);
    return { setPending: () => { pending = true; }, isPending: () => pending };
  }

  const insertMsg: ISyncMessage = {
    kind: "transaction",
    id: "t2",
    actions: [{ kind: "property", locator: "/pages/0/elements/2/visibleIf", value: "{q1} = 9" }]
  } as ISyncMessage;

  it("CANCEL: a remote rule appears after the user collapses an unsaved new rule", () => {
    const survey = makeSurvey();
    const model = new FakeLogicModel(survey);
    const flush = wireFlush(model);
    expect(model.items).toHaveLength(1); // just the seeded q2 rule

    // User opens a brand new rule.
    model.addNewUI();
    expect(model.mode).toBe("new");

    // A remote new rule is applied to the live survey in place.
    survey.pages[0].addNewQuestion("text", "q3").visibleIf = "{q1} = 9";

    // Refresh must DEFER: the open editor survives, the rule isn't listed yet.
    const plan = planLogicRefresh(insertMsg, { isEditing: model.mode !== "view" });
    expect(plan).toEqual({ kind: "defer" });
    if (applyLogicRefresh(model, plan)) flush.setPending();
    expect(flush.isPending()).toBe(true);
    expect(model.items.some(i => i.expression === "{q1} = 9")).toBe(false);

    // CANCEL: collapsing the panel sets mode -> "view" (no save). The
    // onEndEditing hook flushes the deferred rebuild.
    model.mode = "view";

    expect(flush.isPending()).toBe(false);
    expect(model.items.some(i => i.expression === "{q1} = 9")).toBe(true);
    expect(model.items.some(i => i.expression === "{q1} = 1")).toBe(true);
  });

  it("SAVE: the flush is idempotent across the save double-fire", () => {
    const survey = makeSurvey();
    const model = new FakeLogicModel(survey);
    let updates = 0;
    const origUpdate = model.update.bind(model);
    (model as any).update = (...args: any[]): void => { updates++; origUpdate(...args); };
    const flush = wireFlush(model);

    model.editItem(model.items[0]);
    expect(model.mode).not.toBe("view");

    // A remote edit is applied and deferred.
    survey.getQuestionByName("q2").visibleIf = "{q1} = 2";
    const plan = planLogicRefresh(editMsg, { isEditing: model.mode !== "view" });
    if (applyLogicRefresh(model, plan)) flush.setPending();
    expect(flush.isPending()).toBe(true);

    // Save fires BOTH onLogicItemSaved and (via mode->view) onEndEditing.
    // The flush must run exactly once: the second call is a guarded no-op.
    model.onLogicItemSaved.fire(model, { item: model.items[0] });
    model.mode = "view";

    expect(flush.isPending()).toBe(false);
    expect(updates).toBe(1);
    expect(ruleExpression(model)).toBe("{q1} = 2");
  });
});
