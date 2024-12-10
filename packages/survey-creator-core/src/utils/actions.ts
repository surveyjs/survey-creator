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
  updateMatrixRemoveAction(question, actions, row);
  const action = findAction(actions, "remove-row");
  if (!action) return;
  action.iconSize = "auto";
  action.css = "sl-table__action-button sl-table__remove-button";
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
  action.innerCss = "spg-action-button spg-action-button--danger";
  action.title = question.removeRowText;
  action.showTitle = false;
  action.visibleIndex = 10;
  action.action = () => {
    question.removeRowUI(row);
  };
}
export function updateMatixActionsClasses(actions: Array<IAction>) {
  actions.forEach(action => {
    action.innerCss = `${action.innerCss || ""} spg-action-button--muted`;
  });
}

export class MenuButton extends Action {
  @property({ defaultValue: "icon" }) contentType: "icon" | "text-description-vertical";

  public get buttonClassName(): string {
    return new CssClassBuilder()
      .append("svc-menu-action__button")
      .append("svc-menu-action__button--with-subtitle", this.contentType === "text-description-vertical")
      .append("svc-menu-action__button--pressed", this.pressed)
      .append("svc-menu-action__button--selected", !!this.active)
      .toString();
  }
}