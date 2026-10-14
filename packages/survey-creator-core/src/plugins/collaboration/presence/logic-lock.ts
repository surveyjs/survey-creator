import { SurveyCreatorModel, SurveyLogic, Transaction, UndoRedoArrayAction } from "survey-creator-core";
import { getCollabString } from "../collaboration-strings";
import { ElementLockGuard } from "./element-lock";
import { acceptClaims, ILockClaim } from "./lock-order";
import { LogicLockView } from "./logic-lock-view";
import { logicRuleKey, openLogicRule } from "./logic-rules";
import { PresenceCapture } from "./presence-capture";
import { IPresencePeer } from "./presence-state";

// The Logic-tab matrix action that saves the open rule (SurveyLogicUI).
const SAVE_RULE_ACTION = "saveDetailPanel";

// Editing locks on the Logic tab: while a participant has an existing rule
// open in the editor, everyone else sees that rule read-only - they can open
// it and read it, but not change, save or delete it. In the designer, the
// properties the held rule writes (visibleIf, enableIf, ... on its action
// targets) are read-only as well; the rest of those questions stays editable.
//
// Rules are also read-only when one of their action targets is held in the
// designer by someone else (`ElementLockGuard`) - unless the local user
// already holds the rule: first come, first served, and a designer holder
// cannot touch the rule's properties anyway.
//
// The lock travels in presence (`rule` + `lock`) and is arbitrated exactly
// like the designer one (`acceptClaims`, a rule overlaps only itself). The
// rules behind the keys are resolved from the live survey with a private
// SurveyLogic, so they are known even when the Logic tab was never opened.
//
// A viewer's open rule goes stale while it is locked: the Logic tab defers
// rebuilding its list while the editor is open (JournalTabRefresher), so the
// holder's saved changes do not reach the viewer's editor. When the lock is
// released after remote changes, the viewer's editor is closed instead of
// unlocked - the list rebuilds and the rule can be reopened fresh.
//
// What the local user sees of a lock - the owner's avatar in the rule's row,
// the missing Remove button, the plate in place of Done - is drawn by
// `LogicLockView` with the rule list's own matrix parts.
//
// Known gaps, deliberate: a rule being CREATED is invisible to peers, so it
// neither holds nor is held; the targets it is about to write are not locked.
export class LogicLockGuard {
  // Accepted remote rule holders: rule key -> peer.
  private ruleHolders = new Map<string, IPresencePeer>();
  // What the held rules write: target object -> property name -> holder.
  private targets = new Map<any, Map<string, IPresencePeer>>();
  private rulesCache: Map<string, any> | null = null;
  private rulesLogic: any = null;
  private rulesSurvey: any = null;
  // The Logic-tab model whose events are bound.
  private watchedModel: any = null;
  // The rule open in the local editor, whether it was shown locked, and
  // whether remote records landed while it was open.
  private openKey: string | null = null;
  private openLocked = false;
  private appliedWhileOpen = false;
  private view = new LogicLockView((key) => this.getRuleLockOwner(key));

  constructor(private creator: SurveyCreatorModel,
    private capture: PresenceCapture,
    private getPeers: () => ReadonlyMap<string, IPresencePeer>,
    private elements: ElementLockGuard) {
    capture.ruleLockResolver = this.resolveLocalRule;
    creator.onPropertyGetReadOnly.add(this.onPropertyGetReadOnly);
    creator.onBeforeUndo.add(this.onBeforeUndo);
    creator.onBeforeRedo.add(this.onBeforeRedo);
    creator.onModified.add(this.invalidateRules);
    creator.onSurveyInstanceCreated.add(this.onSurveyInstanceCreated);
    creator.onActiveTabChanged.add(this.refresh);
  }

  public dispose(): void {
    if (this.capture.ruleLockResolver === this.resolveLocalRule)this.capture.ruleLockResolver = undefined;
    this.creator.onPropertyGetReadOnly.remove(this.onPropertyGetReadOnly);
    this.creator.onBeforeUndo.remove(this.onBeforeUndo);
    this.creator.onBeforeRedo.remove(this.onBeforeRedo);
    this.creator.onModified.remove(this.invalidateRules);
    this.creator.onSurveyInstanceCreated.remove(this.onSurveyInstanceCreated);
    this.creator.onActiveTabChanged.remove(this.refresh);
    this.watchModel(null);
    this.view.dispose();
    this.invalidateRules();
    this.ruleHolders.clear();
    this.targets.clear();
  }

  // --- queries -------------------------------------------------------------------

  // The remote participant the rule is locked by (holding it, or holding one
  // of its targets in the designer); null when the local user may edit it.
  public getRuleLockOwner(key: string | null): IPresencePeer | null {
    if (!key) return null;
    const holder = this.ruleHolders.get(key);
    if (holder) return holder;
    if (key === this.currentClaim()) return null;
    return this.targetLockOwner(key);
  }

  // --- recomputation ---------------------------------------------------------------

  public refresh = (): void => {
    this.capture.refreshLock();
    const before = this.ruleHolders;
    const beforeTargets = this.targets;
    this.ruleHolders = this.computeHolders(this.currentClaim()).holders;
    this.targets = this.computeTargets();
    if (!this.sameHolders(before, this.ruleHolders)) {
      // The designer grid builds read-only editors once: rebuild it when the
      // element it shows gained or lost locked logic properties.
      const selected = this.creator.selectedElement;
      if (!!selected && (beforeTargets.has(selected) || this.targets.has(selected)))this.elements.refreshPropertyGrid();
    }
    this.applyOpenRuleState();
    this.view.update();
  };

  // Remote records were applied: rules may have changed, and an open rule
  // in a viewer's editor is stale from now on.
  public onApplied(): void {
    this.invalidateRules();
    if (this.openKey)this.appliedWhileOpen = true;
  }

  private currentClaim(): string | null {
    const state = this.capture.getState();
    return state.lock && typeof state.rule === "string" ? state.rule : null;
  }

  private resolveLocalRule = (key: string): boolean => {
    if (!this.rules().has(key)) return false;
    // An existing claim is kept while it wins the ordering.
    if (key === this.currentClaim()) return this.computeHolders(key).localAccepted;
    // A fresh one: nobody holds the rule, and none of its targets is held in
    // the designer.
    return !this.computeHolders(null).holders.has(key) && !this.targetLockOwner(key);
  };

  private computeHolders(local: string | null): { holders: Map<string, IPresencePeer>, localAccepted: boolean } {
    const claims: Array<ILockClaim<string>> = [];
    this.getPeers().forEach((peer) => {
      const state: any = peer?.state;
      if (state?.tab !== "logic" || state.lock !== true || typeof state.rule !== "string") return;
      claims.push({ clientId: String(peer.clientId), target: state.rule, peer });
    });
    if (local) claims.push({ clientId: this.elements.localClientId, target: local, peer: null });
    const holders = new Map<string, IPresencePeer>();
    if (claims.length === 0) return { holders, localAccepted: false };
    const rules = this.rules();
    const known = claims.filter((claim) => rules.has(claim.target));
    const result = acceptClaims(known, (a, b) => a === b);
    result.accepted.forEach((claim) => {
      if (claim.peer) holders.set(claim.target, claim.peer);
    });
    return { holders, localAccepted: result.localAccepted };
  }

  private computeTargets(): Map<any, Map<string, IPresencePeer>> {
    const targets = new Map<any, Map<string, IPresencePeer>>();
    if (this.ruleHolders.size === 0) return targets;
    const rules = this.rules();
    this.ruleHolders.forEach((peer, key) => {
      const actions: Array<any> = rules.get(key)?.actions || [];
      actions.forEach((action) => {
        const target = action?.element;
        const propertyName = action?.logicType?.propertyName;
        if (!target || !propertyName) return;
        if (!targets.has(target)) targets.set(target, new Map<string, IPresencePeer>());
        targets.get(target).set(propertyName, peer);
      });
    });
    return targets;
  }

  private targetLockOwner(key: string): IPresencePeer | null {
    const actions: Array<any> = this.rules().get(key)?.actions || [];
    for (let i = 0; i < actions.length; i++) {
      const owner = this.elements.getLockOwner(actions[i]?.element);
      if (owner) return owner;
    }
    return null;
  }

  // Rule key -> rule, built from the live survey on demand and cached until
  // the survey changes.
  private rules(): Map<string, any> {
    if (!this.rulesCache || this.rulesSurvey !== this.creator.survey) {
      this.invalidateRules();
      this.rulesSurvey = this.creator.survey;
      this.rulesCache = new Map<string, any>();
      if (this.rulesSurvey) {
        this.rulesLogic = new SurveyLogic(this.rulesSurvey, <any>this.creator);
        (this.rulesLogic.items || []).forEach((item: any) => {
          const key = logicRuleKey(item);
          if (key)this.rulesCache.set(key, item);
        });
      }
    }
    return this.rulesCache;
  }
  private invalidateRules = (): void => {
    this.rulesLogic?.dispose?.();
    this.rulesLogic = null;
    this.rulesCache = null;
    this.rulesSurvey = null;
  };

  private sameHolders(a: Map<string, IPresencePeer>, b: Map<string, IPresencePeer>): boolean {
    if (a.size !== b.size) return false;
    let same = true;
    a.forEach((peer, key) => {
      if (same && b.get(key)?.clientId !== peer.clientId) same = false;
    });
    return same;
  }

  // --- Logic tab ------------------------------------------------------------------------

  private onSurveyInstanceCreated = (_: unknown, options: any): void => {
    if (options?.area !== "logic-tab:condition-list") return;
    this.watchModel(options.model);
    const survey = options.survey;
    // The tab model sets the edited rule in its own detail-panel callback -
    // read the state once the current dispatch is over.
    survey?.onMatrixDetailPanelVisibleChanged?.add((_s: unknown, o: any) => {
      Promise.resolve().then(() => {
        if (o?.visible)this.appliedWhileOpen = false;
        this.refresh();
      });
    });
    this.view.attach(survey, options.model);
  };

  private watchModel(model: any): void {
    if (this.watchedModel === model) return;
    if (this.watchedModel) {
      this.watchedModel.onLogicItemRemoving?.remove(this.onRuleRemoving);
      this.watchedModel.onLogicItemValidation?.remove(this.onRuleValidation);
    }
    this.watchedModel = model;
    this.openKey = null;
    if (model) {
      model.onLogicItemRemoving?.add(this.onRuleRemoving);
      model.onLogicItemValidation?.add(this.onRuleValidation);
    }
  }

  private onRuleRemoving = (_: unknown, options: any): void => {
    const owner = this.getRuleLockOwner(logicRuleKey(options?.item));
    if (!owner || options.allowRemove === false) return;
    options.allowRemove = false;
    this.creator.notify(getCollabString("collabRuleLocked", owner.name || "?"), "info");
  };
  // Saving a held rule fails with the reason shown (SurveyLogic.hasError
  // reports the error as a notification).
  private onRuleValidation = (_: unknown, options: any): void => {
    const owner = this.getRuleLockOwner(logicRuleKey(options?.item));
    if (owner && !options.error) options.error = getCollabString("collabRuleLocked", owner.name || "?");
  };

  // Keep the local editor in line with the lock of the rule it shows.
  private applyOpenRuleState(): void {
    const model = this.watchedModel;
    const item = openLogicRule(model);
    const key = logicRuleKey(item);
    if (!key) {
      this.openKey = null;
      return;
    }
    const owner = this.getRuleLockOwner(key);
    const locked = !!owner;
    this.view.updateLockPlate(this.openRow(model), owner);
    if (key !== this.openKey) {
      this.openKey = key;
      this.openLocked = !locked; // force the first apply below
    }
    if (locked === this.openLocked) return;
    const wasLocked = this.openLocked;
    this.openLocked = locked;
    if (wasLocked && !locked && this.appliedWhileOpen) {
      this.closeOpenRule(model);
      return;
    }
    const readOnly = locked || !!model.readOnly;
    const expressionEditor = model.getExpressionEditor?.(item);
    const itemEditor = model.getLogicItemEditor?.(item);
    if (expressionEditor?.editSurvey) expressionEditor.editSurvey.readOnly = readOnly;
    if (itemEditor?.editSurvey) itemEditor.editSurvey.readOnly = readOnly;
    const action = this.openRow(model)?.detailPanel?.getFooterToolbar?.()?.getActionById?.(SAVE_RULE_ACTION);
    if (action) action.visible = !locked;
  }
  private openRow(model: any): any {
    const rows: Array<any> = model?.matrixItems?.visibleRows || [];
    return rows.find((row) => row.isDetailPanelShowing) || null;
  }
  private closeOpenRule(model: any): void {
    this.openKey = null;
    this.openRow(model)?.hideDetailPanel?.();
  }

  // --- designer + undo ----------------------------------------------------------------------

  private onPropertyGetReadOnly = (_: unknown, options: any): void => {
    if (options.readOnly || this.targets.size === 0) return;
    if (this.targets.get(options.element)?.has(options.propertyName)) options.readOnly = true;
  };

  private onBeforeUndo = (_: unknown, options: any): void => this.guardUndoRedo(options, true);
  private onBeforeRedo = (_: unknown, options: any): void => this.guardUndoRedo(options, false);

  // Like ElementLockGuard: a step writing a held rule's property waits, the
  // entry stays on the stack.
  private guardUndoRedo(options: any, isUndo: boolean): void {
    if (!options.allow || this.targets.size === 0) return;
    const manager: any = this.creator.undoRedoManager;
    const transaction: Transaction = manager?.peekTransaction?.(isUndo);
    const actions: Array<any> = transaction?.actions || [];
    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      if (!action || action instanceof UndoRedoArrayAction) continue;
      const changes = action.getChanges(isUndo);
      const owner = this.targets.get(changes?.object)?.get(changes?.propertyName);
      if (owner) {
        options.allow = false;
        this.creator.notify(getCollabString(isUndo ? "collabUndoLocked" : "collabRedoLocked", owner.name || "?"), "info");
        return;
      }
    }
  }
}
