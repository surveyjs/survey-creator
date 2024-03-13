
import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { AngularComponentFactory } from "survey-angular-ui";
import { ImageItemValue, QuestionImagePickerModel } from "survey-core";
import { SurveyCreatorModel, ImageItemValueWrapperViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "../creator-model.component";

@Component({
  selector: "svc-image-item-value",
  templateUrl: "./image-item-value.component.html",
  styles: [":host { display: none; }"]
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
      this.adorner = new ImageItemValueWrapperViewModel(this.creator, this.question, this.item, <any>null, <any>null);
    }
  }
  protected getPropertiesToTrack(): string[] {
    return ["creator", "question", "item"];
  }
  protected getModel(): ImageItemValueWrapperViewModel {
    return this.adorner;
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
  public ngAfterViewInit() {
    this.adorner.itemsRoot = this.container.nativeElement;
  }
}

AngularComponentFactory.Instance.registerComponent("svc-image-item-value", ImageItemValueDesignerComponent);
