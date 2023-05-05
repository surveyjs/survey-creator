import { ChangeDetectorRef, Component, Input, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel, PanelModel, Question, SurveyModel } from "survey-core";
import { CreatorBase, QuestionAdornerViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "./creator-model.component";

@Component({
  selector: "svc-question",
  templateUrl: "./question.component.html",
  encapsulation: ViewEncapsulation.None,
  styles: [":host { display: none; } .svc-question__content--image.svc-question__content--empty  sv-ng-file-question { width: 100% }"]
})
export class QuestionDesignerComponent extends CreatorModelComponent<QuestionAdornerViewModel> {
  @Input() componentName!: string;
  @Input() componentData!: any;
  public adorner!: QuestionAdornerViewModel;
  protected get creator(): CreatorBase {
    return this.componentData.data;
  }
  public get model(): Question | PanelModel {
    return this.componentData.model;
  }
  protected createModel(): void {
    if (this.componentData) {
      this.adorner = new QuestionAdornerViewModel(this.creator, this.model, <any>null);
    }
  }
  protected getPropertiesToTrack(): string[] {
    return ["model", "creator"];
  }
  protected getModel(): QuestionAdornerViewModel {
    return this.adorner;
  }
  public get placeholderComponent(): string {
    return "";
  }
  public get placeholderComponentData(): any {
    return null;
  }
  public get showPlaceholderComponent(): boolean {
    return false;
  }
  public selectQuestionType(event: any) {
    event.stopPropagation();
    this.adorner.questionTypeSelectorModel?.action(this.adorner.questionTypeSelectorModel, event);
  }
  public addNewQuestion(event: any) {
    event.stopPropagation();
    this.adorner.addNewQuestion();
  }
  adornerComponent = "";
}

AngularComponentFactory.Instance.registerComponent("svc-question", QuestionDesignerComponent);

