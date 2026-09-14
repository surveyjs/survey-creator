import {
  QuestionMatrixDynamicModel,
  IAction,
  MatrixDynamicRowModel,
  MatrixDropdownRowModelBase,
  Action,
  property,
  CssClassBuilder,
  PageModel,
  LocalizableString,
  ILocalizableOwner
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
// A localizable string owned by an element of the edited survey is rendered by the creator's
// inplace string editor (see getRendererForString in creator-base): the editor swaps the
// rendered markdown for the source text as soon as it gets the focus, and a string shown in a
// toolbar or in a dropdown is never edited there. This owner keeps the locale and the markdown
// of the original owner and renders the string as a usual one.
class ReadOnlyLocalizableOwner implements ILocalizableOwner {
  constructor(private owner: ILocalizableOwner) { }
  getLocale(): string { return this.owner.getLocale(); }
  getMarkdownHtml(text: string, name: string, item?: any): string { return this.owner.getMarkdownHtml(text, name, item); }
  getProcessedText(text: string): string { return this.owner.getProcessedText(text); }
  getRenderer(): string { return undefined; }
  getRendererContext(locStr: LocalizableString): any { return locStr; }
}
export function createReadOnlyLocString(owner: ILocalizableOwner, useMarkdown: boolean = false): LocalizableString {
  return new LocalizableString(new ReadOnlyLocalizableOwner(owner), useMarkdown);
}
// Page titles support markdown, so a page selector item (the preview and the translation tabs)
// shows its title via a localizable string that takes the markdown of the page - this is what
// applies the survey onTextMarkdown callback to the title. getDisplayText converts the title
// text of the current locale into the text to show, an empty title included.
export function createPageSelectorLocTitle(page: PageModel, getDisplayText: (text: string) => string): LocalizableString {
  const locTitle = createReadOnlyLocString(page, true);
  locTitle.setJson(page.locTitle.getJson());
  locTitle.onGetTextCallback = (text: string): string => getDisplayText(text);
  return locTitle;
}
