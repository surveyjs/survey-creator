import { ChangeDetectorRef, Component, Input, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { ItemValue, PageModel, Question, SurveyModel } from "survey-core";
import { CreatorBase, QuestionAdornerViewModel, QuestionDropdownAdornerViewModel, QuestionImageAdornerViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "../creator-model.component";
import { QuestionDesignerComponent } from "../question.component";

@Component({
  selector: "svc-image-question",
  templateUrl: "../question.component.html",
  styles: [":host { display: none; }"]
})
export class QuestionImageDesignerComponent extends QuestionDesignerComponent {
  protected override createModel(): void {
    if (this.componentData) {
      this.adorner = new QuestionImageAdornerViewModel(this.creator, this.model, <any>null, this.viewContainerRef?.element.nativeElement.nextSibling);
    }
  }
  public override adornerComponent = "svc-image-question-adorner";
}

AngularComponentFactory.Instance.registerComponent("svc-image-question", QuestionImageDesignerComponent);

@Component({
  selector: "svc-image-question-adorner",
  templateUrl: "./question-image.component.html",
  styles: [":host { display: none; }"]
})
export class QuestionImageAdornerDesignerComponent extends EmbeddedViewContentComponent {
  @Input() adorner!: any;
  @Input() question!: any;
}

AngularComponentFactory.Instance.registerComponent("svc-image-question-adorner", QuestionImageAdornerDesignerComponent);

