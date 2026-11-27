import { Action, Base, ComputedUpdater, toCssClasses, ItemValue, QuestionSelectBase } from "survey-core";
import { editorLocalization } from "../editorLocalization";

// The state a flattened choice list renders from. The designer adorner keeps the collapsed flag in
// its own reactive property; the translation side-by-side panes keep it in the tab model, so the
// source and the target list collapse together. Both hosts expose it through this interface.
export interface IDropdownChoicesHost {
  readonly question: QuestionSelectBase;
  readonly maxVisibleChoices: number;
  isCollapsed(): boolean;
  setCollapsed(value: boolean): void;
}

// A dropdown/tagbox question rendered as a flat list of radio/checkbox rows with a
// "Show more"/"Show less" button - the choices popup never opens in design mode. Shared by the
// designer adorner (question-dropdown.ts) and by the translation side-by-side panes
// (tabs/translation-dropdown.ts): the hosts differ only in where the collapsed flag lives.
export class DropdownChoicesViewModel extends Base {
  constructor(private host: IDropdownChoicesHost) {
    super();
  }
  private get question(): QuestionSelectBase {
    return this.host.question;
  }
  // The dropdown choices flatten into radio-like rows, the tagbox ones into checkbox-like rows.
  public get itemComponent(): string {
    return this.isSingleSelect ? "survey-radiogroup-item" : "survey-checkbox-item";
  }
  public get itemInputType(): string {
    return this.isSingleSelect ? "radio" : "checkbox";
  }
  private get isSingleSelect(): boolean {
    return this.question.isDescendantOf("dropdown");
  }
  public get needToCollapse(): boolean {
    const count = this.host.maxVisibleChoices;
    if (count <= 0) return false;
    // A dropdown keeps None, Other and the new item in its popup, so only the real choices collapse here.
    if (this.isSingleSelect) return this.getPlaceholderItems().length > count;
    return this.question.bodyItems.length > count;
  }
  public get isCollapseView(): boolean {
    return this.host.isCollapsed() && this.needToCollapse;
  }
  public getRenderedItems(): Array<ItemValue> {
    if (this.isSingleSelect) {
      const items = this.getPlaceholderItems();
      return this.isCollapseView ? items.slice(0, this.host.maxVisibleChoices) : items;
    }
    const question = this.question;
    if (!this.isCollapseView) return question.renderedChoices;
    const limit = this.host.maxVisibleChoices;
    return question.headItems.concat(question.bodyItems.slice(0, limit), question.footItems);
  }
  // None, Other and the new item are drawn inside the dropdown popup. The placeholder lists the real choices.
  private getPlaceholderItems(): Array<ItemValue> {
    const question = this.question;
    if (question.hasHeadItems || question.hasFootItems) return question.bodyItems;
    return question.renderedChoices;
  }
  public getChoiceCss(item?: ItemValue): string {
    // Callers that pass the item fade only the cut through the real choices. The others mark every
    // collapsed row and let the stylesheet fade the last ones.
    const fade = item ? this.getCollapsedFadeClass(item) : this.isCollapseView && "svc-question__dropdown-choice--collapsed";
    return toCssClasses("svc-question__dropdown-choice", fade);
  }
  // The fade marks the cut through the real choices. Head and foot rows (None, Other, New) stay opaque.
  private getCollapsedFadeClass(item: ItemValue): string {
    if (!this.isCollapseView) return "";
    const limit = this.host.maxVisibleChoices;
    const body = this.question.bodyItems;
    if (body.length <= limit) return "";
    const index = body.slice(0, limit).indexOf(item);
    if (index < 0) return "";
    const fromEnd = limit - 1 - index;
    if (fromEnd > 2) return "";
    return "svc-question__dropdown-choice--fade-" + (fromEnd + 1);
  }
  public getButtonText(): string {
    return editorLocalization.getString(this.isCollapseView ? "ed.showMoreChoices" : "ed.showLessChoices");
  }
  public switchCollapse = (): void => {
    this.host.setCollapsed(!this.host.isCollapsed());
  };
  private collapseActionValue: Action;
  public get collapseAction(): Action {
    if (!this.collapseActionValue) {
      this.collapseActionValue = new Action({
        id: "collapse",
        innerCss: "svc-question__dropdown-collapse-button",
        title: new ComputedUpdater<string>(() => this.getButtonText()) as unknown as string,
        appearance: { style: "brand", mode: "tertiary", size: "small" },
        action: this.switchCollapse
      });
    }
    return this.collapseActionValue;
  }
}
