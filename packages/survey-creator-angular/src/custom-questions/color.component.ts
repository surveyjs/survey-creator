import { Component } from "@angular/core";
import { AngularComponentFactory, QuestionAngular } from "survey-angular-ui";
import { QuestionColorModel } from "survey-creator-core";

@Component({
  templateUrl: "color.component.html",
  selector: "svc-color"
})

export class QuestionColorComponent extends QuestionAngular<QuestionColorModel> {
  get swatchArias(): { [index: string]: any } {
    return {
      "aria-required": this.model.a11y_input_ariaRequired,
      "aria-labelledby": this.model.a11y_input_ariaLabelledBy,
      "aria-label": this.model.a11y_input_ariaLabel,
      "aria-invalid": this.model.a11y_input_ariaInvalid,
      "aria-describedby": this.model.a11y_input_ariaDescribedBy,
    };
  }
}
AngularComponentFactory.Instance.registerComponent("color-question", QuestionColorComponent);