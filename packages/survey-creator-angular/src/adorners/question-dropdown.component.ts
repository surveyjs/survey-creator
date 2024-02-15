import { ChangeDetectorRef, Component, Input, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { ItemValue, PageModel, Question, SurveyModel } from "survey-core";
import { SurveyCreatorModel, QuestionAdornerViewModel, QuestionDropdownAdornerViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "../creator-model.component";
import { QuestionDesignerComponent } from "../question.component";

@Component({
  selector: "svc-dropdown-question",
  templateUrl: "../question.component.html",
  styles: [":host { display: none; }"]
})
export class QuestionDropdownDesignerComponent extends QuestionDesignerComponent {
  protected override createModel(): void {
    if (this.componentData) {
      this.adorner = new QuestionDropdownAdornerViewModel(this.creator, this.model, <any>null);
    }
  }
  public override adornerComponent = "svc-dropdown-question-adorner";
}

AngularComponentFactory.Instance.registerComponent("svc-dropdown-question", QuestionDropdownDesignerComponent);

@Component({
  selector: "svc-dropdown-question-adorner",
  templateUrl: "./question-dropdown.component.html",
  styles: [":host { display: none; }"]
})
export class QuestionDropdownAdornerDesignerComponent extends EmbeddedViewContentComponent {
  @Input() adorner!: any;
  @Input() question!: any;
  public getItemValueComponentName(item: ItemValue): string {
    return this.question.getItemValueWrapperComponentName(item) || "sv-ng-selectbase-item";
  }
  public getItemValueComponentData(item: ItemValue): any {
    return {
      componentName: "sv-ng-selectbase-item",
      componentData: {
        question: this.question,
        model: item,
        inputType: "radio",
        data: this.question.getItemValueWrapperComponentData(item)
      }
    };
  }

}

AngularComponentFactory.Instance.registerComponent("svc-dropdown-question-adorner", QuestionDropdownAdornerDesignerComponent);
