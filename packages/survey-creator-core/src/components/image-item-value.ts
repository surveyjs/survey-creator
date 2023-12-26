import { CssClassBuilder, ImageItemValue, ItemValue, property, QuestionSelectBase } from "survey-core";
import { CreatorBase } from "../creator-base";
import { ItemValueWrapperViewModel } from "./item-value";
import { getAcceptedTypesByContentMode } from "../utils/utils";

require("./image-item-value.scss");
export class ImageItemValueWrapperViewModel extends ItemValueWrapperViewModel {
  private isChoosingNewFile = false;
  @property({ defaultValue: false }) isFileDragging: boolean;
  @property({ defaultValue: false }) isUploading;

  constructor(creator: CreatorBase, public question: QuestionSelectBase, public item: ImageItemValue, public templateData: any, public itemsRoot: HTMLElement) {
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
    return this.getIsNewItemSingle() || !this.question.renderedImageHeight || this.question.renderedImageHeight > 150;
  }

  chooseFile(model: ImageItemValueWrapperViewModel) {
    const fileInput = <HTMLInputElement>model.itemsRoot.getElementsByClassName("svc-choose-file-input")[0];
    model.creator.chooseFiles(fileInput, (files: File[]) => {
      model.isUploading = true;
      model.creator.uploadFiles(files, model.question, (status, link) => {
        if (status === "success") {
          model.item.imageLink = link;
        }
        model.isUploading = false;
      });
    }, { element: model.question, item: model.item });
  }

  public uploadFiles(files) {
    this.isUploading = true;
    this.creator.uploadFiles(files, this.question, (status, link) => {
      if (status === "success") {
        this.creator.createNewItemValue(this.question, this.isChoosingNewFile, (res: ItemValue): void => {
          (<ImageItemValue>res).imageLink = link;
        });
      }
      this.isChoosingNewFile = false;
      this.isUploading = false;
    });
  }

  chooseNewFile(model: ImageItemValueWrapperViewModel) {
    const fileInput = <HTMLInputElement>model.itemsRoot.getElementsByClassName("svc-choose-file-input")[0];
    model.creator.chooseFiles(fileInput, (files: File[]) => {
      this.isChoosingNewFile = true;
      model.uploadFiles(files);
    }, { element: model.question, item: model.item });
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

// chooseFiles() {
//   editor.chooseFiles(fileInput, (files: File[]) => {
//     var itemText = Survey.surveyLocalization.getString("choices_Item");
//     var nextValue = getNextValue(
//       itemText,
//       (model.choices || []).map(c => c.value)
//     );
//     var itemValue = new (<any>Survey)["ItemValue"](
//       nextValue,
//       undefined,
//       "imageitemvalue"
//     );
//     itemValue.locOwner = <any>{
//       getLocale: () => {
//         if (!!model["getLocale"]) return model.getLocale();
//         return "";
//       },
//       getMarkdownHtml: (text: string) => {
//         return text;
//       },
//       getProcessedText: (text: string) => {
//         return text;
//       }
//     };
//     model.choices = model.choices.concat([itemValue]);
//     itemValue = model.choices[model.choices.length - 1];
//     editor.onQuestionEditorChanged(model);
//     editor.onItemValueAddedCallback(
//       model,
//       "choices",
//       itemValue,
//       model.choices
//     );

//     var property = Survey.Serializer.findProperty(
//       "imageitemvalue",
//       "imageLink"
//     );
//     editor.uploadFiles(files, (_, link) => {
//       var options = {
//         propertyName: property.name,
//         obj: itemValue,
//         value: link,
//         newValue: null,
//         doValidation: false
//       };
//       editor.onValueChangingCallback(options);
//       link = options.newValue === null ? options.value : options.newValue;
//       itemValue["imageLink"] = link;
//       editor.onPropertyValueChanged(property, itemValue, link);
//       editor.onQuestionEditorChanged(model);
//     });
//   });
// });
// }