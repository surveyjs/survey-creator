
import { SimpleChanges } from "@angular/core";
import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { AngularComponentFactory, SurveyBaseProviders } from "survey-angular-ui";
import { ImageItemValue, QuestionImagePickerModel } from "survey-core";
import { SurveyCreatorModel, ImageItemValueWrapperViewModel } from "survey-creator-core";
import { CreatorModelComponent, compareComponentData } from "../creator-model.component";

@Component({
  selector: "svc-image-item-value",
  templateUrl: "./image-item-value.component.html",
  styles: [":host { display: none; }"],
  providers: SurveyBaseProviders
})
export class ImageItemValueDesignerComponent extends CreatorModelComponent<ImageItemValueWrapperViewModel> {
  @Input() componentName!: string;
  @Input() componentData!: any;
  @ViewChild("container", { read: ElementRef }) container!: ElementRef;
  public adorner!: ImageItemValueWrapperViewModel;
  private get creator(): SurveyCreatorModel {
    return this.componentData.data.creator;
  }
  public get question(): QuestionImagePickerModel {
    return this.componentData.question;
  }
  public get item(): ImageItemValue {
    return this.componentData.model;
  }
  protected createModel(): void {
    if (this.componentData) {
      this.adorner?.dispose();
      this.adorner = new ImageItemValueWrapperViewModel(this.creator, this.question, this.item, <any>null, <any>null);
    }
  }
  protected override shouldUpdateModel(changes: SimpleChanges) {
    return compareComponentData(changes, ["creator", "question", "model"], "componentData");
  }
  protected getModel(): ImageItemValueWrapperViewModel {
    return this.adorner;
  }
  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.adorner?.dispose();
  }

  get showDragDropGhostOnTop(): boolean {
    return this.adorner.ghostPosition === "top";
  }
  get showDragDropGhostOnBottom(): boolean {
    return this.adorner.ghostPosition === "bottom";
  }
  public blockEvent(event: MouseEvent): void {
    event.stopPropagation();
  }

  getNewItemStyle(): any {
    const needStyle = !this.adorner.getIsNewItemSingle();
    return { width: needStyle ? this.question.renderedImageWidth + "px" : undefined, height: needStyle ? this.question.renderedImageHeight + "px" : undefined };
  }
  protected override afterViewInit(): void {
    this.adorner.itemsRoot = this.container.nativeElement;
  }
  preventDragHandler(e: Event) {
    e.preventDefault();
  }
}

AngularComponentFactory.Instance.registerComponent("svc-image-item-value", ImageItemValueDesignerComponent);
