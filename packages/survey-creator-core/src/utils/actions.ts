import {
    QuestionMatrixDynamicModel,
    IAction,
    MatrixDynamicRowModel
  } from "survey-core";

export function findAction(actions: Array<IAction>, id: string): IAction {
    if(!Array.isArray(actions)) return null;
    for(var i = 0; i < actions.length; i ++) {
        if(actions[i].id === id) return actions[i];
    }
    return null;
}  

export function updateMatrixRemoveAction(
    question: QuestionMatrixDynamicModel,
    actions: Array<IAction>,
    row: MatrixDynamicRowModel
  ) {
    const action = findAction(actions, "remove-row");
    if(!action) return;
    action.component = "sv-action-bar-item";
    action.iconName = "icon-delete";
    action.title = question.removeRowText;
    action.showTitle = false;
    action.visibleIndex = 10;
    action.action = () => {
      question.removeRowUI(row);
    };
  }
  