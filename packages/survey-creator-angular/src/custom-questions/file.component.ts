import { Component } from "@angular/core";
import { AngularComponentFactory, QuestionAngular } from "survey-angular-ui";
import { QuestionFileEditorModel } from "survey-creator-core";

@Component({
  selector: "svc-file-editor",
  templateUrl: "./file.component.html"
})
export class QuestionFileEditorComponent extends QuestionAngular<QuestionFileEditorModel> {
}

AngularComponentFactory.Instance.registerComponent("fileedit-question", QuestionFileEditorComponent)