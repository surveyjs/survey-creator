import { Component } from "@angular/core";
import { AngularComponentFactory, SurveyBaseProviders } from "survey-angular-ui";
import { PanelAdornerViewModel } from "survey-creator-core";
import { QuestionDesignerComponent } from "./question.component";

@Component({
  selector: "svc-panel",
  templateUrl: "./panel.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class PanelDesignerComponent extends QuestionDesignerComponent<PanelAdornerViewModel> {
  protected override createModel(): void {
    if (this.componentData) {
      this.adorner = new PanelAdornerViewModel(this.creator, this.model, <any>null);
    }
  }
}

AngularComponentFactory.Instance.registerComponent("svc-panel", PanelDesignerComponent);
