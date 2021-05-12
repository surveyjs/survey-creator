import { ImageItemValue, QuestionSelectBase, SurveyModel } from "survey-core";
import { CreatorBase } from "../creator-base";
import { ItemValueWrapperViewModel } from "./item-value";

import "./image-item-value.scss";

export class ImageItemValueWrapperViewModel extends ItemValueWrapperViewModel { 
  constructor(creator: CreatorBase<SurveyModel>, public question: QuestionSelectBase, public item: ImageItemValue, public templateData: any, public itemsRoot: HTMLElement) {
    super(creator, question, item);
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
  
  chooseFile(model: ImageItemValueWrapperViewModel) {
    const fileInput = <HTMLInputElement>model.itemsRoot.getElementsByClassName("svc-choose-file-input")[0];
    model.creator.chooseFiles(fileInput, (files: File[]) => {
      model.creator.uploadFiles(files, (_, link) => {
        model.item.imageLink = link;
      });
    });
  }

  chooseNewFile(model: ImageItemValueWrapperViewModel) {
    const fileInput = <HTMLInputElement>model.itemsRoot.getElementsByClassName("svc-choose-file-input")[0];
    model.creator.chooseFiles(fileInput, (files: File[]) => {
      model.creator.uploadFiles(files, (_, link) => {
        const itemValue = <ImageItemValue>model.creator.createNewItemValue(model.question);
        itemValue.imageLink = link;
        model.question.choices.push(itemValue);
        const nextValue = model.creator.getNextItemValue(model.question);
        model.item.value = nextValue;
      });
    });
  }
}
