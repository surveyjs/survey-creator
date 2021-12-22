import {
  QuestionMatrixDynamicModel,
  IAction,
  MatrixDynamicRowModel
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
  row: MatrixDynamicRowModel) {
  const action = findAction(actions, "show-detail");
  if (!action) return;
  action.component = "sv-action-bar-item";
  action.iconName = "icon-logic-expand";
  action.innerCss = "sl-table__detail-button";
  action.iconSize = <any>"auto";
  action.action = () => {
    row.showHideDetailPanelClick();
    action.iconName = row.isDetailPanelShowing ? "icon-logic-collapse" : "icon-logic-expand";
  }
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
  action.css = "spg-action-button spg-action-button--danger";
  action.title = question.removeRowText;
  action.showTitle = false;
  action.visibleIndex = 10;
  action.action = () => {
    question.removeRowUI(row);
  };
}
