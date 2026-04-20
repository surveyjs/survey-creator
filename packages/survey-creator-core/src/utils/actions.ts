import {
  QuestionMatrixDynamicModel,
  IAction,
  MatrixDynamicRowModel,
  MatrixDropdownRowModelBase,
  Action,
  property,
  CssClassBuilder
} from "survey-core";

export function findAction(actions: Array<IAction>, id: string): IAction {
  if (!Array.isArray(actions)) return null;
  for (var i = 0; i < actions.length; i++) {
    if (actions[i].id === id) return actions[i];
  }
  return null;
}

export function updateMatrixLogicExpandAction(question: QuestionMatrixDynamicModel,
  actions: Array<IAction>,
  row: MatrixDropdownRowModelBase) {
  const action = findAction(actions, "show-detail");
  if (!action) return;
  action.component = "sv-action-bar-item";
  action.iconName = "icon-logic-expand";
  action.innerCss = "sl-table__action-button sl-table__detail-button";
  action.iconSize = "auto";
  action.showTitle = false;
  action.action = () => {
    row.showHideDetailPanelClick();
  };
  const updateIcon = () => { action.iconName = row.isDetailPanelShowing ? "icon-logic-collapse" : "icon-logic-expand"; };
  question.registerFunctionOnPropertyValueChanged("isRowShowing" + row.id, updateIcon);
  updateIcon();
}

export function updateMatrixLogicRemoveAction(question: QuestionMatrixDynamicModel, actions: Array<IAction>, row: MatrixDynamicRowModel) {
  const action = findAction(actions, "remove-row");
  if (!action) return;
  action.css = "sl-table__action-button sl-table__remove-button";
  action.iconName = "icon-delete";
  action.showTitle = false;
}
export function updateMatrixRemoveAction(
  question: QuestionMatrixDynamicModel,
  actions: Array<IAction>,
  row: MatrixDynamicRowModel
) {
  const action = findAction(actions, "remove-row");
  if (!action) return;
  action.component = "sv-action-bar-item";
  action.iconName = "icon-delete";
  action.iconSize = "auto";
  action.innerCss = "";
  action.title = question.removeRowText;
  action.showTitle = false;
  action.visibleIndex = 10;
  action.action = () => {
    question.removeRowUI(row);
  };
}
export function updateMatixActionsAppearance(actions: Array<IAction>) {
  actions.forEach((action) => {
    action.appearance = { style: "neutral", mode: "quaternary", size: "small" };
  });
  const detailAction = findAction(actions, "show-detail") as Action;
  if (detailAction) {
    detailAction.appearance = { style: "neutral", mode: "quaternary", size: "small" };
  }
  const removeRowAction = findAction(actions, "remove-row") as Action;
  if (removeRowAction) {
    removeRowAction.appearance = { style: "alert", mode: "quaternary", size: "small" };
  }
}