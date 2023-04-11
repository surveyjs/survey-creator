import { Component } from "@angular/core";
import { AngularComponentFactory, QuestionAngular } from "survey-angular-ui";
import { QuestionColorModel } from "survey-creator-core";

@Component({
  templateUrl: "color.component.html",
  selector: "svc-color"
})

export class QuestionColorComponent extends QuestionAngular<QuestionColorModel> {

}
AngularComponentFactory.Instance.registerComponent("color-question", QuestionColorComponent)