import { CssClassBuilder, ImageItemValue, property, QuestionSelectBase } from "survey-core";
import { CreatorBase } from "../creator-base";
import { ItemValueWrapperViewModel } from "./item-value";

require("./image-item-value.scss");
export class ImageItemValueWrapperViewModel extends ItemValueWrapperViewModel {
  private isChoosingNewFile = false;
  @property({ defaultValue: false }) isFileDragging: boolean;

  constructor(creator: CreatorBase, public question: QuestionSelectBase, public item: ImageItemValue, public templateData: any, public itemsRoot: HTMLElement) {
    super(creator, question, item);
  }

  getRootCss() {
    return new CssClassBuilder()
      .append("svc-image-item-value-wrapper")
      .append("svc-image-item-value")
      .append("svc-image-item-value--new", this.isNew)
      .append("svc-image-item-value-wrapper--ghost", this.isDragDropGhost)
      .append("svc-image-item-value--file-dragging", this.isFileDragging)
      .append("svc-image-item-value--single", this.getIsNewItemSingle()).toString();
  }

  public getIsNewItemSingle() {
    return this.isNew && this.question.choices.length === 0;
  }

  chooseFile(model: ImageItemValueWrapperViewModel) {
    const fileInput = <HTMLInputElement>model.itemsRoot.getElementsByClassName("svc-choose-file-input")[0];
    model.creator.chooseFiles(fileInput, (files: File[]) => {
      model.creator.uploadFiles(files, model.question, (_, link) => {
        model.item.imageLink = link;
      });
    });
  }

  public uploadFiles(files) {
    this.creator.uploadFiles(files, this.question, (_, link) => {
      const itemValue = <ImageItemValue>this.creator.createNewItemValue(this.question);
      itemValue.imageLink = link;
      this.question.choices.push(itemValue);
      if (this.isChoosingNewFile && this.creator) {
        this.creator.onItemValueAddedCallback(this.question, "choices", itemValue, this.question.choices);
        this.isChoosingNewFile = false;
      }
    });
  }

  chooseNewFile(model: ImageItemValueWrapperViewModel) {
    const fileInput = <HTMLInputElement>model.itemsRoot.getElementsByClassName("svc-choose-file-input")[0];
    model.creator.chooseFiles(fileInput, (files: File[]) => {
      this.isChoosingNewFile = true;
      model.uploadFiles(files);
    });
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