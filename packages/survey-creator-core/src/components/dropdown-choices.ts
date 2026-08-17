import { Action, Base, ComputedUpdater, CssClassBuilder, ItemValue, QuestionSelectBase } from "survey-core";
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
    return count > 0 && this.question.renderedChoices.length > count;
  }
  public get isCollapseView(): boolean {
    return this.host.isCollapsed() && this.needToCollapse;
  }
  public getRenderedItems(): Array<ItemValue> {
    return this.isCollapseView ?
      this.question.renderedChoices.slice(0, this.host.maxVisibleChoices) :
      this.question.renderedChoices;
  }
  public getChoiceCss(): string {
    return new CssClassBuilder()
      .append("svc-question__dropdown-choice")
      .append("svc-question__dropdown-choice--collapsed", this.isCollapseView)
      .toString();
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
