import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { PageModel, PanelModel, Question, SurveyModel } from "survey-core";
import { SurveyCreatorModel, QuestionAdornerViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "./creator-model.component";

@Component({
  selector: "svc-question",
  templateUrl: "./question.component.html",
  styles: [":host { display: none; }"]
})
export class QuestionDesignerComponent extends CreatorModelComponent<QuestionAdornerViewModel> {
  @Input() componentName!: string;
  @Input() componentData!: any;
  @ViewChild("container", { read: ElementRef }) container!: ElementRef<HTMLDivElement>
  public adorner!: QuestionAdornerViewModel;
  protected get creator(): SurveyCreatorModel {
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
    return ["model", "creator"];
  }
  protected getModel(): QuestionAdornerViewModel {
    return this.adorner;
  }
  public get placeholderComponent(): string {
    return "";
  }
  public get placeholderComponentData(): any {
    return null;
  }
  public get showPlaceholderComponent(): boolean {
    return false;
  }
  public selectQuestionType(event: any) {
    event.stopPropagation();
    this.adorner.questionTypeSelectorModel?.action(this.adorner.questionTypeSelectorModel, event);
  }
  public addNewQuestion(event: any) {
    event.stopPropagation();
    this.adorner.addNewQuestion();
  }
  public override ngAfterViewChecked(): void {
    super.ngAfterViewChecked();
    if(this.adorner && this.container?.nativeElement) {
      this.adorner.rootElement = this.container.nativeElement;
    }
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.adorner.dispose();
  }
  adornerComponent = "";
}

AngularComponentFactory.Instance.registerComponent("svc-question", QuestionDesignerComponent);

