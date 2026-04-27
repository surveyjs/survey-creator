import { Action, ActionContainer, ComputedUpdater, IAction, property, Question, SurveyElement } from "survey-core";
import { QuestionAdornerViewModel } from "./question";
import { notShortCircuitAnd } from "src/entries";

export class PanelAdornerViewModel extends QuestionAdornerViewModel {
  protected createAddQuestionActions(): Array<Action> {
    this.questionTypeSelectorModel.css = "svc-panel__question-type-selector";
    this.questionTypeSelectorModel.visible = new ComputedUpdater(() => notShortCircuitAnd(!this.isEmptyElement, !this.isCompact)) as unknown as boolean;
    return [
      new Action({
        id: "add",
        iconName: new ComputedUpdater(() => this.isCompact ? "icon-add_24x24" : "") as unknown as string,
        showTitle: new ComputedUpdater(() => !this.isCompact) as unknown as boolean,
        title: this.creator.getLocString("ed.addNewQuestion"),
        action: () => {
          this.addNewQuestion();
        }
      }),
      this.questionTypeSelectorModel
    ];
  }
  protected createAddQuestionActionContainer(): ActionContainer {
    const container = new ActionContainer();
    container.setActionsAppearance({ style: "brand", mode: "tertiary", size: "small" });
    container.setItems(this.createAddQuestionActions());
    container.containerCss = "svc-panel__add-new-question-container";
    return container;
  }

  private addQuestionActionsContainerValue?:ActionContainer;
  public get addQuestionActionsContainer(): ActionContainer {
    if (!this.addQuestionActionsContainerValue) {
      this.addQuestionActionsContainerValue = this.createAddQuestionActionContainer();
    }
    return this.addQuestionActionsContainerValue;
  }
  @property() private isCompact: boolean = false;
  private resizeObserver: ResizeObserver;
  public attachToUI(element: SurveyElement, rootElement?: HTMLElement): void {
    super.attachToUI(element, rootElement);
    if (!rootElement) return;
    const htmlElement = rootElement.querySelector(".svc-question__content") as HTMLElement;
    if (!htmlElement) return;
    const resizer = this.resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry.contentBoxSize[0].inlineSize <= 176) {
        this.isCompact = true;
      } else {
        this.isCompact = false;
      }
    }
    );
    resizer.observe(htmlElement);
  }
  public detachFromUI(): void {
    super.detachFromUI();
    this.resizeObserver?.disconnect();
  }
}