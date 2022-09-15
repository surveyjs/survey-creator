import { ChangeDetectorRef, Component, Input, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel, PanelModel, Question, SurveyModel } from "survey-core";
import { CreatorBase, QuestionAdornerViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "./creator-model.component";

@Component({
  selector: "svc-question",
  templateUrl: "./question.component.html",
  styles: [":host { display: none; }"]
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
    return ["model", "componentData"];
  }
  protected getModel(): QuestionAdornerViewModel {
    return this.adorner;
  }
  public selectQuestionType(event: any) {
    event.stopPropagation();
    this.adorner.questionTypeSelectorModel.action(this.adorner.questionTypeSelectorModel, event);
  }
  adornerComponent = "";
}

AngularComponentFactory.Instance.registerComponent("svc-question", QuestionDesignerComponent);

