
import { ChangeDetectorRef, Component, Input, ViewContainerRef } from "@angular/core";
import { AngularComponentFactory, BaseAngular, EmbeddedViewContentComponent } from "survey-angular-ui";
import { ImageItemValue, PageModel, PanelModel, Question, QuestionImagePickerModel, QuestionSelectBase, SurveyModel } from "survey-core";
import { CreatorBase, ImageItemValueWrapperViewModel, QuestionAdornerViewModel } from "survey-creator-core";
import { CreatorModelComponent } from "../creator-model.component";

@Component({
  selector: "svc-image-item-value",
  templateUrl: "./image-item-value.component.html",
  styles: [":host { display: none; }"]
})
export class ImageItemValueDesignerComponent extends CreatorModelComponent<ImageItemValueWrapperViewModel> {
  @Input() componentName!: string;
  @Input() componentData!: any;
  public adorner!: ImageItemValueWrapperViewModel;
  private get creator(): CreatorBase {
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
      this.adorner = new ImageItemValueWrapperViewModel(this.creator, this.question, this.item, <any>null, this.viewContainerRef?.element.nativeElement.nextSibling);
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
  get attributes(): any {
    return this.adorner.isDraggable
      ? { "data-sv-drop-target-item-value": this.item.value }
      : null;
  }
  public blockEvent(event: MouseEvent): void {
    event.stopPropagation();
  }

  getNewItemStyle(): any {
    const needStyle = !this.adorner.getIsNewItemSingle();
    return { width: needStyle ? this.question.renderedImageWidth : undefined, height: needStyle ? this.question.renderedImageHeight : undefined };
  }
}

AngularComponentFactory.Instance.registerComponent("svc-image-item-value", ImageItemValueDesignerComponent);
