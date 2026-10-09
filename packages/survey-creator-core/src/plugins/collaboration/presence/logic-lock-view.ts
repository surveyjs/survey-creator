import { Action, IAction, QuestionHtmlModel } from "survey-core";
import { getCollabString } from "../collaboration-strings";
import { logicRuleKey, visibleLogicItems } from "./logic-rules";
import { IPresencePeer, presenceAvatarCss, presenceColorSlot, presenceInitials } from "./presence-state";

// The holder chip in a rule's row actions, and the survey-core row action it
// stands in for while the rule is locked.
const HOLDER_CHIP = "collab-rule-holder";
const REMOVE_ROW = "remove-row";
// The plate atop an open rule's detail panel: an html question of the panel.
const LOCK_PLATE = "collabRuleLock";

interface IRowParts {
  chip: Action;
  remove: IAction | null;
}

// Shows Logic-tab rule locks with the rule list's own matrix parts - no DOM of
// its own, nothing measured:
//   - a held rule's row gets the lock owner as an avatar chip among its row
//     actions (survey.onGetMatrixRowActions), the same plain-Action chip the
//     collab-bar strip uses, and loses its Remove button;
//   - an open held rule shows the owner in a plate atop its detail panel -
//     the panel's own first element, an html question, above the condition
//     and action editors (Done, in the footer, is hidden meanwhile).
// Row actions are built once per rendered table, but Actions are reactive:
// `update()` flips their visibility in place, so a lock that arrives after the
// table was rendered never needs a rebuild.
//
// Decides nothing: who owns a rule comes from the LogicLockGuard.
export class LogicLockView {
  private survey: any = null;
  private model: any = null;
  private rows = new Map<any, IRowParts>();

  constructor(private getLockOwner: (key: string | null) => IPresencePeer | null) { }

  // A new rule list survey - the Logic tab recreates it on every update().
  public attach(survey: any, model: any): void {
    this.detach();
    this.survey = survey;
    this.model = model;
    survey?.onGetMatrixRowActions?.add(this.onGetRowActions);
  }

  public dispose(): void {
    this.detach();
  }

  // Re-apply the lock owners to the chips and Remove buttons of the rows the
  // matrix has built actions for.
  public update(): void {
    const rows: Array<any> = this.model?.matrixItems?.visibleRows || [];
    this.rows.forEach((parts, row) => {
      const index = rows.indexOf(row);
      if (index < 0) {
        this.rows.delete(row);
        return;
      }
      this.applyRow(parts, this.ownerAt(index));
    });
  }

  // The plate of an open rule: shows `owner`, or hides when null. An html
  // question renders in every framework without a component of its own; its
  // markup mirrors "svc-collab-row" (avatar marker + title), so it shares the
  // avatar classes with the bar.
  public updateLockPlate(row: any, owner: IPresencePeer | null): void {
    const panel = row?.detailPanel;
    if (!panel) return;
    let plate = <QuestionHtmlModel>panel.getQuestionByName(LOCK_PLATE);
    if (!owner) {
      if (plate) plate.visible = false;
      return;
    }
    if (!plate) {
      plate = <QuestionHtmlModel>panel.addNewQuestion("html", LOCK_PLATE, 0);
      // The markup is final: no {variable} processing of the holder's name.
      plate.ignoreHtmlProgressing = true;
    }
    const name = owner.name || "?";
    const avatarCss = presenceAvatarCss(presenceColorSlot(owner.clientId)) + " svc-collab-rule-lock__avatar";
    plate.html =
      "<div class=\"svc-collab-rule-lock\">" +
      `<span class="${avatarCss}">${escapeHtml(presenceInitials(name))}</span>` +
      `<span class="svc-collab-row__title">${escapeHtml(getCollabString("collabRuleLocked", name))}</span>` +
      "</div>";
    plate.visible = true;
  }

  private detach(): void {
    this.survey?.onGetMatrixRowActions?.remove(this.onGetRowActions);
    this.survey = null;
    this.model = null;
    this.rows.clear();
  }

  private onGetRowActions = (sender: any, options: any): void => {
    if (sender !== this.survey || !options?.row || !Array.isArray(options.actions)) return;
    const actions: Array<IAction> = options.actions;
    const row = options.row;
    const remove = actions.filter((action) => action.id === REMOVE_ROW)[0] || null;
    const chip = new Action({
      id: HOLDER_CHIP,
      location: "end",
      showTitle: true,
      visible: false,
      action: () => row.showDetailPanel()
    });
    // In place of the Remove button; a mobile matrix orders its row actions by
    // visibleIndex, so the chip takes the slot just before Remove's.
    if (remove && typeof remove.visibleIndex === "number") chip.visibleIndex = remove.visibleIndex - 1;
    const removeIndex = remove ? actions.indexOf(remove) : -1;
    if (removeIndex > -1) actions.splice(removeIndex, 0, chip);
    else actions.push(chip);
    const parts: IRowParts = { chip, remove };
    this.rows.set(row, parts);
    const rows: Array<any> = options.question?.visibleRows || [];
    this.applyRow(parts, this.ownerAt(rows.indexOf(row)));
  };

  private ownerAt(index: number): IPresencePeer | null {
    if (index < 0) return null;
    return this.getLockOwner(logicRuleKey(visibleLogicItems(this.model)[index]));
  }

  private applyRow(parts: IRowParts, owner: IPresencePeer | null): void {
    const chip = parts.chip;
    if (owner) {
      const name = owner.name || "?";
      chip.title = presenceInitials(name);
      chip.tooltip = getCollabString("collabRuleLocked", name);
      chip.innerCss = presenceAvatarCss(presenceColorSlot(owner.clientId)) + " svc-collab-rule-holder";
    }
    chip.visible = !!owner;
    if (parts.remove) parts.remove.visible = !owner;
  }
}

// The holder's name comes from the transport (a connection URL parameter):
// it is text, never markup.
function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
