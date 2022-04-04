import {
  SurveyElement,
  SurveyTemplateRendererTemplateData,
  SurveyTemplateRendererViewModel,
  SurveyModel,
  Base,
  Serializer,
  QuestionRatingModel,
  surveyLocalization,
  ItemValue
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { getLocString } from "../editorLocalization";
import { getNextValue } from "../utils/utils";
import { QuestionAdornerViewModel } from "./question";

import "./question-rating.scss";

export class QuestionRatingAdornerViewModel extends QuestionAdornerViewModel {
  constructor(
    creator: CreatorBase,
    surveyElement: SurveyElement,
    templateData: SurveyTemplateRendererTemplateData
  ) {
    super(creator, surveyElement, templateData);
    let stopEventProcessing = false;
    this.element.onItemValuePropertyChanged.add((sender, options)=>{
      if (!stopEventProcessing && this.element.rateValues.length === 0) {
        stopEventProcessing = true;
        const rateValues = this.element.visibleRateValues;
        var index = rateValues
          .map((item) => item.value)
          .indexOf(options.obj.value);
        rateValues[index][options.name] = options.newValue;
        this.element.rateValues = rateValues;
        stopEventProcessing = false;
      }
      return "";
    });
  }

  get element(): QuestionRatingModel {
    return this.surveyElement as QuestionRatingModel;
  }

  public addItem(model: QuestionRatingAdornerViewModel) {
    if (!model.allowAdd) return;
    if (model.element.rateValues.length === 0) {
      model.element.rateMax += model.element.rateStep;
    } else {
      var nextValue = null;
      var values = model.element.rateValues.map(function (item) {
        return item.value;
      });
      var itemText = surveyLocalization.getString("choices_Item");
      nextValue = getNextValue(itemText, values);

      var itemValue = new ItemValue(nextValue);
      itemValue.locOwner = <any>{
        getLocale: () => {
          if (!!model.element["getLocale"]) return model.element.getLocale();
          return "";
        },
        getMarkdownHtml: (text: string) => {
          return text;
        },
        getProcessedText: (text: string) => {
          return text;
        }
      };
      model.element.rateValues = model.element.rateValues.concat([itemValue]);
    }
  }
  public removeItem(model: QuestionRatingAdornerViewModel) {
    if (!model.allowRemove) return;
    const property = Serializer.findProperty(
      model.element.getType(),
      "rateValues"
    );
    const itemIndex =
      model.element.rateValues && model.element.rateValues.length - 1;
    const item =
      (model.element.rateValues && model.element.rateValues[itemIndex]) ||
      null;
    var allowDelete = model.creator.onCollectionItemDeletingCallback(
      model.element,
      property,
      model.element.rateValues,
      item
    );
    if (allowDelete) {
      var question = model.element;
      if (
        question.rateValues.length === 0 &&
        itemIndex === question.rateValues.length - 1
      ) {
        question.rateMax -= question.rateStep;
      } else {
        if (question.rateValues.length === 0) {
          // eslint-disable-next-line no-self-assign
          question.rateValues = question.rateValues;
        }
        question.rateValues.splice(itemIndex, 1);
      }
    }
  }
  public get allowAdd() {
    return !this.creator.readOnly;
  }
  public get allowRemove() {
    return !this.creator.readOnly;
  }
  get addTooltip() {
    return getLocString("pe.addItem");
  }
  get removeTooltip() {
    return getLocString("pe.removeItem");
  }
}
