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
// getVisibleItems): the matrix row at index i shows the i-th of these.
export function visibleLogicItems(model: any): Array<any> {
  const items: Array<any> = Array.isArray(model?.items) ? model.items : [];
  return items.filter((item) => item.isNew || item.isSuitable?.(model.questionFilter, model.actionTypeFilter));
}

// The rule the local user has open in the Logic-tab editor, or null (nothing
// open, or a new rule that no peer can see yet).
export function openLogicRule(model: any): any {
  return model?.mode === "edit" && !!model.editableItem && !model.editableItem.isNew ? model.editableItem : null;
}
