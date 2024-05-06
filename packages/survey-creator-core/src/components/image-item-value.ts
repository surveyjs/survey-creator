import { CssClassBuilder, ImageItemValue, ItemValue, property, QuestionSelectBase } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { ItemValueWrapperViewModel } from "./item-value";
import { getAcceptedTypesByContentMode } from "../utils/utils";

require("./image-item-value.scss");
export class ImageItemValueWrapperViewModel extends ItemValueWrapperViewModel {
  private isChoosingNewFile = false;
  @property({ defaultValue: false }) isFileDragging: boolean;
  @property({ defaultValue: false }) isUploading;

  constructor(creator: SurveyCreatorModel, public question: QuestionSelectBase, public item: ImageItemValue, public templateData: any, public itemsRoot: HTMLElement) {
    super(creator, question, item);
  }

  getRootCss() {
    return new CssClassBuilder()
      .append("svc-image-item-value-wrapper")
      .append("svc-image-item-value")
      .append("svc-image-item-value--new", this.isNew || this.isUploading)
      .append("svc-image-item-value-wrapper--ghost", this.isDragDropGhost)
      .append("svc-image-item-value--file-dragging", this.isFileDragging)
      .append("svc-image-item-value--single", this.getIsNewItemSingle()).toString();
  }

  public getIsNewItemSingle() {
    return this.isNew && this.question.choices.length === 0;
  }
  public get canRenderControls() {
    return this.getIsNewItemSingle() || !this.question.renderedImageWidth || this.question.renderedImageWidth > 150;
  }

  public get selectFileTitle() {
    return this.creator.getLocString("ed.selectFile");
  }

  public get removeFileTitle() {
    return this.creator.getLocString("ed.removeFile");
  }

  public get addFileTitle() {
    return this.creator.getLocString("ed.selectFile");
  }

  chooseFile(model: ImageItemValueWrapperViewModel) {
    const fileInput = <HTMLInputElement>model.itemsRoot.getElementsByClassName("svc-choose-file-input")[0];
    const context = { element: model.question, item: model.item, elementType: model.question.getType(), propertyName: "imageLink" };
    model.creator.chooseFiles(fileInput, (files: File[]) => {
      model.isUploading = true;
      model.creator.uploadFiles(files, model.question, (status, link) => {
        if (status === "success") {
          model.item.imageLink = link;
        }
        model.isUploading = false;
      }, context);
    }, context);
  }

  public uploadFiles(files) {
    this.isUploading = true;
    const context = { element: this.question, item: undefined, elementType: this.question.getType(), propertyName: "imageLink" };
    this.creator.uploadFiles(files, this.question, (status, link) => {
      if (status === "success") {
        this.creator.createNewItemValue(this.question, this.isChoosingNewFile, (res: ItemValue): void => {
          (<ImageItemValue>res).imageLink = link;
        });
      }
      this.isChoosingNewFile = false;
      this.isUploading = false;
    }, context);
  }

  chooseNewFile(model: ImageItemValueWrapperViewModel) {
    const fileInput = <HTMLInputElement>model.itemsRoot.getElementsByClassName("svc-choose-file-input")[0];
    model.creator.chooseFiles(fileInput, (files: File[]) => {
      this.isChoosingNewFile = true;
      model.uploadFiles(files);
    }, { element: model.question, item: model.item, elementType: model.question.getType(), propertyName: "imageLink" });
  }
  onDragOver = (event: any) => {
    this.isFileDragging = true;
    event.dataTransfer.dropEffect = "copy";
    event.preventDefault();
  }
  onDrop = (event: any) => {
    this.isFileDragging = false;
    event.preventDefault();
    let input = event.dataTransfer;
    if (!input || !input.files || input.files.length < 1) return;
    let files = [];
    for (let i = 0; i < input.files.length; i++) {
      files.push(input.files[i]);
    }
    this.uploadFiles(files);
  }
  onDragLeave = (event: any) => {
    this.isFileDragging = false;
  }
  get acceptedTypes() {
    return getAcceptedTypesByContentMode(this.question.contentMode);
  }
}
