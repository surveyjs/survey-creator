import {
  Action, Base, ComputedUpdater, CssClassBuilder, EventBase, ItemValue,
  QuestionSelectBase, property
} from "survey-core";
import { editorLocalization } from "../../editorLocalization";

export const translationDropdownComponentName = "svc-translation-dropdown-question";

// Implemented by TranslationSideBySide. The choice lists of the two panes share their
// collapse state through the owner (keyed by the question name), so the source and the
// target rows stay aligned for the visual comparison and the scroll sync.
export interface ITranslationDropdownOwner {
  maxVisibleChoices: number;
  isChoicesCollapsed(questionName: string): boolean;
  setChoicesCollapsed(questionName: string, value: boolean): void;
  onChoicesCollapsedChanged: EventBase<Base, any>;
}

// The model behind the flattened choice list rendered under a dropdown/tagbox question in the
// side-by-side panes. Intentionally not a question adorner (QuestionAdornerViewModel): the panes
// have no designer chrome, no selection and no designer choice-editing keyboard semantics.
export class TranslationDropdownViewModel extends Base {
  @property({ defaultValue: true }) private isCollapsed: boolean;
  private visibleCount: number;
  private onCollapsedChanged = (_: Base, options: any): void => {
    if (options.questionName === this.question.name) {
      this.isCollapsed = options.collapsed;
    }
  };

  constructor(private questionValue: QuestionSelectBase, private owner?: ITranslationDropdownOwner) {
    super();
    this.visibleCount = !!this.owner ? this.owner.maxVisibleChoices : 10;
    if (!!this.owner) {
      this.isCollapsed = this.owner.isChoicesCollapsed(this.question.name);
      this.owner.onChoicesCollapsedChanged.add(this.onCollapsedChanged);
    }
  }
  public get question(): QuestionSelectBase {
    return this.questionValue;
  }
  // The dropdown list flattens into radio-like rows, the tagbox one into checkbox-like rows.
  public get itemComponent(): string {
    return this.question.isDescendantOf("dropdown") ? "survey-radiogroup-item" : "survey-checkbox-item";
  }
  public get needToCollapse(): boolean {
    return this.visibleCount > 0 && this.question.renderedChoices.length > this.visibleCount;
  }
  public get isCollapseView(): boolean {
    return this.isCollapsed && this.needToCollapse;
  }
  public getRenderedItems(): Array<ItemValue> {
    return this.isCollapseView ? this.question.renderedChoices.slice(0, this.visibleCount) : this.question.renderedChoices;
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
    const collapsed = !this.isCollapsed;
    if (!!this.owner) {
      this.owner.setChoicesCollapsed(this.question.name, collapsed);
    } else {
      this.isCollapsed = collapsed;
    }
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
  public dispose(): void {
    if (!!this.owner) {
      this.owner.onChoicesCollapsedChanged.remove(this.onCollapsedChanged);
    }
    super.dispose();
  }
}
