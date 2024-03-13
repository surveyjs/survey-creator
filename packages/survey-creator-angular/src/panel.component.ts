import { ChangeDetectorRef, Component, Input, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel, Question, SurveyModel } from "survey-core";
import { SurveyCreatorModel, QuestionAdornerViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "./creator-model.component";
import { QuestionDesignerComponent } from "./question.component";

@Component({
  selector: "svc-panel",
  templateUrl: "./panel.component.html",
  styles: [":host { display: none; }"]
})
export class PanelDesignerComponent extends QuestionDesignerComponent {
}

AngularComponentFactory.Instance.registerComponent("svc-panel", PanelDesignerComponent);
