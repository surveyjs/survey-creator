import { ChangeDetectorRef, Component, Input, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel, Question, SurveyModel } from "survey-core";
import { CreatorBase, QuestionAdornerViewModel } from "survey-creator-core";

@Component({
  selector: "svc-question",
  templateUrl: "./question.component.html",
  styles: [":host { display: none; }"]
})
export class QuestionDesignerComponent extends BaseAngular<Question> {
  @Input() model!: any;
  @Input() componentData!: CreatorBase;
  public adorner?: QuestionAdornerViewModel;
  private get creator() {
    return this.componentData;
  }
  constructor(changeDetectorRef: ChangeDetectorRef, viewContainerRef?: ViewContainerRef) {
    super(changeDetectorRef, viewContainerRef);
    if(this.model) {
      this.adorner = new QuestionAdornerViewModel(this.creator, this.model, <any>null);
    }
  }
  protected override onModelChanged(): void {
    super.onModelChanged();
    this.adorner = new QuestionAdornerViewModel(this.creator, this.model, <any>null);
  }
  protected getModel(): Question {
    return this.model;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-question", QuestionDesignerComponent);

