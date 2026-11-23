import { AfterViewInit, Component, ElementRef, Input, TemplateRef, ViewChild } from "@angular/core";
import { CreatorModelComponent, compareComponentData } from "../creator-model.component";
import { AngularComponentFactory, EmbeddedViewContentComponent, SurveyBaseProviders } from "survey-angular-ui";
import { SurveyCreatorModel, QuestionRatingAdornerViewModel } from "survey-creator-core";
import { QuestionDesignerComponent } from "../question.component";
import { QuestionRatingModel } from "survey-core";
import { SimpleChanges } from "@angular/core";

@Component({
  selector: "svc-rating-question",
  templateUrl: "../question.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class QuestionRatingDesignerComponent extends QuestionDesignerComponent {
  public override adornerComponent = "";
}

AngularComponentFactory.Instance.registerComponent("svc-rating-question", QuestionRatingDesignerComponent);

@Component({
  selector: "svc-rating-question-content",
  templateUrl: "./question-rating.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class QuestionRatingAdornerDesignerComponent extends CreatorModelComponent<QuestionRatingAdornerViewModel> {
  @Input() componentName!: string;
  @Input() componentData!: any;
  @Input() contentTempl!: TemplateRef<any>;
  public adorner!: QuestionRatingAdornerViewModel;

  protected createModel(): void {
    if (this.componentData) {
      this.adorner = new QuestionRatingAdornerViewModel(this.componentData.data, this.componentData.model, <any>null);
    }
  }
  protected override shouldUpdateModel(changes: SimpleChanges) {
    return compareComponentData(changes, ["model", "data"], "componentData");
  }
  protected getModel(): QuestionRatingAdornerViewModel {
    return this.adorner;
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.adorner.dispose();
  }
}

AngularComponentFactory.Instance.registerComponent("svc-rating-question-content", QuestionRatingAdornerDesignerComponent);

