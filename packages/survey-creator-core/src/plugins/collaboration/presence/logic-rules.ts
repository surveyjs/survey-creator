import { IAnchorRef } from "./presence-state";

// Logic-tab rule identity shared by the presence capture (what the local user
// has open) and the logic lock (what peers have open).
//
// SurveyLogic groups actions into one rule per (owning question, expression)
// pair - see its private getLogicItemHashKey - and every client builds the
// rules from the same survey JSON, so this pair names the same rule on every
// client. A rule is edited locally until "Done", so the key stays stable while
// it is open; saving a changed expression yields a new key, which is fine -
// the editor closes on save.
export function logicRuleKey(item: any): string | null {
  if (!item || typeof item.expression !== "string" || !item.expression) return null;
  const element = item.actions?.[0]?.element;
  const parent = element?.parentQuestion || (element?.isDescendantOf?.("matrixdropdowncolumn") ? element.colOwner : null);
  return `${parent?.name ?? ""}|${item.expression}`;
}

// The rules a Logic-tab model lists, in row order (SurveyLogicUI's private
// getVisibleItems): the matrix row with rowIndex i + 1 shows the i-th of these.
export function visibleLogicItems(model: any): Array<any> {
  const items: Array<any> = Array.isArray(model?.items) ? model.items : [];
  return items.filter((item) => item.isNew || item.isSuitable?.(model.questionFilter, model.actionTypeFilter));
}

// The rule a row of the rules matrix shows, or null. The matrix pages the
// rules: its rows are the current page only, and row.rowIndex is the 1-based
// record index across all pages, never the position on the page.
export function logicItemOfRow(model: any, row: any): any {
  const index = typeof row?.rowIndex === "number" ? row.rowIndex - 1 : -1;
  return index > -1 ? visibleLogicItems(model)[index] || null : null;
}

// The rule the local user has open in the Logic-tab editor, or null (nothing
// open, or a new rule that no peer can see yet).
export function openLogicRule(model: any): any {
  return model?.mode === "edit" && !!model.editableItem && !model.editableItem.isNew ? model.editableItem : null;
}

// --- cursor anchors ------------------------------------------------------------
// The rule editor (a row's detail panel) and a rule being created exist only
// in the local Logic-tab model, so the only place on the tab a cursor means
// the same thing for everyone is the summary row of an existing rule. Rows are
// matched through the rendered table's root elements, which every renderer
// registers (setRootElement) - no renderer-specific markup is involved.

// The summary row a rendered matrix row stands for: data rows only - a detail
// row holds the rule editor, an error row holds no rule.
function summaryRow(rendered: any): any {
  return !!rendered && !rendered.isDetailRow && !rendered.isErrorsRow ? rendered.row : null;
}

// The cursor anchor for a point over `target`: the summary row of an existing
// rule, addressed by its `logicRuleKey`; null anywhere else (the editor, a
// new rule's row, the toolbar, empty space).
export function encodeLogicRuleAnchor(model: any, target: Element): { a: IAnchorRef, el: Element } | null {
  const rendered: Array<any> = model?.matrixItems?.renderedTable?.rows || [];
  const hit = rendered.find((r) => !!r.getRootElement?.()?.contains(target));
  const row = summaryRow(hit);
  if (!row) return null;
  const key = logicRuleKey(logicItemOfRow(model, row));
  return key ? { a: { s: "rule", n: key }, el: hit.getRootElement() } : null;
}

// The local summary row of the rule `key` names; null when the local list
// does not show it (filtered out, on another page, or not received yet).
export function resolveLogicRuleRow(model: any, key: string | undefined): Element | null {
  if (!key) return null;
  const index = visibleLogicItems(model).findIndex((item) => logicRuleKey(item) === key);
  const rows: Array<any> = model.matrixItems?.visibleRows || [];
  const row = index > -1 ? rows.find((r) => r.rowIndex - 1 === index) : null;
  if (!row) return null;
  const rendered: Array<any> = model.matrixItems.renderedTable?.rows || [];
  return rendered.find((r) => summaryRow(r) === row)?.getRootElement?.() || null;
}
