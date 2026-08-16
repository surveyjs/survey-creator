import {
  Action, Base, EventBase, ItemValue, QuestionSelectBase, property
} from "survey-core";
import { DropdownChoicesViewModel, IDropdownChoicesHost } from "../dropdown-choices";

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
// have no designer chrome, no selection and no designer choice-editing keyboard semantics. The
// rendering itself is the shared DropdownChoicesViewModel, as in the designer.
export class TranslationDropdownViewModel extends Base implements IDropdownChoicesHost {
  @property({ defaultValue: true }) private isCollapsedValue: boolean;
  private visibleCount: number;
  private choicesModel: DropdownChoicesViewModel;
  private onCollapsedChanged = (_: Base, options: any): void => {
    if (options.questionName === this.question.name) {
      this.isCollapsedValue = options.collapsed;
    }
  };

  constructor(private questionValue: QuestionSelectBase, private owner?: ITranslationDropdownOwner) {
    super();
    this.visibleCount = !!this.owner ? this.owner.maxVisibleChoices : 10;
    if (!!this.owner) {
      this.isCollapsedValue = this.owner.isChoicesCollapsed(this.question.name);
      this.owner.onChoicesCollapsedChanged.add(this.onCollapsedChanged);
    }
    this.choicesModel = new DropdownChoicesViewModel(this);
  }
  public get question(): QuestionSelectBase {
    return this.questionValue;
  }

  // IDropdownChoicesHost: the owner is the single source of the collapse state, the local
  // property mirrors it so that the framework views re-render - they track this model.
  public get maxVisibleChoices(): number {
    return this.visibleCount;
  }
  public isCollapsed(): boolean {
    return this.isCollapsedValue;
  }
  public setCollapsed(value: boolean): void {
    if (!!this.owner) {
      this.owner.setChoicesCollapsed(this.question.name, value);
    } else {
      this.isCollapsedValue = value;
    }
  }

  public get itemComponent(): string {
    return this.choicesModel.itemComponent;
  }
  public get itemInputType(): string {
    return this.choicesModel.itemInputType;
  }
  public get needToCollapse(): boolean {
    return this.choicesModel.needToCollapse;
  }
  public get isCollapseView(): boolean {
    return this.choicesModel.isCollapseView;
  }
  public getRenderedItems(): Array<ItemValue> {
    return this.choicesModel.getRenderedItems();
  }
  public getChoiceCss(): string {
    return this.choicesModel.getChoiceCss();
  }
  public getButtonText(): string {
    return this.choicesModel.getButtonText();
  }
  public switchCollapse = (): void => {
    this.choicesModel.switchCollapse();
  };
  public get collapseAction(): Action {
    return this.choicesModel.collapseAction;
  }
  public dispose(): void {
    if (!!this.owner) {
      this.owner.onChoicesCollapsedChanged.remove(this.onCollapsedChanged);
    }
    this.choicesModel.dispose();
    super.dispose();
  }
}
