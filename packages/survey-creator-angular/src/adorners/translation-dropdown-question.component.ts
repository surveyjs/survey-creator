import { Component, Input, TemplateRef } from "@angular/core";
import { CreatorModelComponent } from "../creator-model.component";
import { AngularComponentFactory } from "survey-angular-ui";
import { TranslationDropdownViewModel } from "survey-creator-core";
import { QuestionSelectBase } from "survey-core";

// The flattened choice list of a dropdown/tagbox question in the translation side-by-side
// panes. Chrome-free: no designer adorner and no itemvalue wrappers - the choice texts render
// through the survey's string renderer (editable in the target pane, plain in the source one).
@Component({
  selector: "svc-translation-dropdown-question",
  templateUrl: "./translation-dropdown-question.component.html",
  styles: [":host { display: none; }"]
})
export class TranslationDropdownQuestionComponent extends CreatorModelComponent<TranslationDropdownViewModel> {
  @Input() componentName!: string;
  @Input() componentData!: any;
  @Input() contentTempl!: TemplateRef<any>;
  public adorner!: TranslationDropdownViewModel;

  public get question(): QuestionSelectBase {
    return this.componentData.model;
  }
  protected createModel(): void {
    if (this.componentData) {
      if (!!this.adorner) {
        this.adorner.dispose();
      }
      this.adorner = new TranslationDropdownViewModel(
        this.componentData.model,
        this.componentData.data ? this.componentData.data.translation : undefined
      );
    }
  }
  protected getPropertiesToTrack(): string[] {
    return ["componentData"];
  }
  protected getModel(): TranslationDropdownViewModel {
    return this.adorner;
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    if (!!this.adorner) {
      this.adorner.dispose();
    }
  }
}

AngularComponentFactory.Instance.registerComponent("svc-translation-dropdown-question", TranslationDropdownQuestionComponent);
