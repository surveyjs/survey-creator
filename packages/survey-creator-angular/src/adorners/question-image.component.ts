import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { AngularComponentFactory, EmbeddedViewContentComponent } from "survey-angular-ui";
import { QuestionImageAdornerViewModel } from "survey-creator-core";
import { QuestionDesignerComponent } from "../question.component";

@Component({
  selector: "svc-image-question",
  templateUrl: "../question.component.html",
  styles: [":host { display: none; }"]
})
export class QuestionImageDesignerComponent extends QuestionDesignerComponent implements AfterViewInit {
  @ViewChild("container", { read: ElementRef }) container!: ElementRef<HTMLDivElement>

  protected override createModel(): void {
    if (this.componentData) {
      this.adorner = new QuestionImageAdornerViewModel(this.creator, this.model, <any>null, this.viewContainerRef?.element.nativeElement.nextSibling);
    }
  }
  public override adornerComponent = "svc-image-question-adorner";
  public override get placeholderComponent(): string {
    return "file-question";
  }
  public override get placeholderComponentData() {
    return { model: (<QuestionImageAdornerViewModel>this.adorner).filePresentationModel };
  }
  public override get showPlaceholderComponent(): boolean {
    return !!this.placeholderComponentData;
  }
  ngAfterViewInit(): void {
    (<QuestionImageAdornerViewModel>this.adorner).questionRoot = this.container.nativeElement;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-image-question", QuestionImageDesignerComponent);

@Component({
  selector: "svc-image-question-adorner",
  templateUrl: "./question-image.component.html",
  styles: [":host { display: none; }"]
})
export class QuestionImageAdornerDesignerComponent extends EmbeddedViewContentComponent {
  @Input() adorner!: QuestionImageAdornerViewModel;
  @Input() question!: any;
}

AngularComponentFactory.Instance.registerComponent("svc-image-question-adorner", QuestionImageAdornerDesignerComponent);

