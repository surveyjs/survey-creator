import { Component, Input } from "@angular/core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";
import { Question, SurveyModel } from "survey-core";

@Component({
  selector: "svc-question-editor-content",
  templateUrl: "./question-editor.component.html"
})
export class QuestionEditorComponent extends EmbeddedViewContentComponent {
  @Input() survey!: SurveyModel;
  @Input() style!: any;

  get question(): Question {
    return this.survey.getAllQuestions()[0];
  }
  protected get elementComponentName(): string {
    return this.question.isPanel ? "panel" : "question";
  }
  public get componentName(): string {
    const survey = this.survey;
    if (!!survey) {
      const name = survey.getElementWrapperComponentName(this.question);
      if (!!name) {
        return name;
      }
    }
    return this.elementComponentName;
  }
  public get componentData(): any {
    const survey = this.survey as SurveyModel;
    let data: any;
    if (!!survey) {
      data = survey.getElementWrapperComponentData(this.question);
    }
    return {
      componentName: this.elementComponentName,
      componentData: {
        model: this.question,
        data: data
      }
    };
  }
}

AngularComponentFactory.Instance.registerComponent("svc-question-editor-content", QuestionEditorComponent);