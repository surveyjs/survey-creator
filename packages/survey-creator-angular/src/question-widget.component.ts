import { Component } from "@angular/core";
import { AngularComponentFactory } from "survey-angular-ui";
import { QuestionAdornerViewModel } from "survey-creator-core";
import { QuestionDesignerComponent } from "./question.component";

@Component({
  selector: "svc-widget-question",
  templateUrl: "./question-widget.component.html",
  styles: [":host { display: none; }"]
})
export class QuestionWidgetDesignerComponent extends QuestionDesignerComponent {
  protected override createModel(): void {
    if (this.componentData) {
      this.adorner = new QuestionAdornerViewModel(this.creator, this.model, <any>null);
    }
  }
}

AngularComponentFactory.Instance.registerComponent("svc-widget-question", QuestionWidgetDesignerComponent);