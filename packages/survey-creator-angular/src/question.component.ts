import { ChangeDetectorRef, Component, Input, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel, Question, SurveyModel } from "survey-core";
import { CreatorBase, QuestionAdornerViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "./creator-model.component";

@Component({
  selector: "svc-question",
  templateUrl: "./question.component.html",
  styles: [":host { display: none; }"]
})
export class QuestionDesignerComponent extends CreatorModelComponent<QuestionAdornerViewModel> {
  @Input() model!: any;
  @Input() componentData!: CreatorBase;
  public adorner!: QuestionAdornerViewModel;
  private get creator() {
    return this.componentData;
  }
  protected createModel(): void {
    if (this.model) {
      this.adorner = new QuestionAdornerViewModel(this.creator, this.model, <any>null);
    }
  }
  protected getPropertiesToTrack(): string[] {
    return ["model", "componentData"];
  }
  protected getModel(): QuestionAdornerViewModel {
    return this.adorner;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-question", QuestionDesignerComponent);

