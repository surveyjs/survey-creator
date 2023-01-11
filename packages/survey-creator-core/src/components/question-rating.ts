import {
  SurveyElement,
  SurveyTemplateRendererTemplateData,
  Serializer,
  QuestionRatingModel,
  surveyLocalization,
  ItemValue,
  Base
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { getLocString } from "../editorLocalization";
import { getNextValue } from "../utils/utils";

require("./question-rating.scss");

export class QuestionRatingAdornerViewModel extends Base {
  constructor(
    public creator: CreatorBase,
    public surveyElement: SurveyElement,
    public templateData: SurveyTemplateRendererTemplateData
  ) {
    super();
  }

  get element(): QuestionRatingModel {
    return this.surveyElement as QuestionRatingModel;
  }

  public addItem(model: QuestionRatingAdornerViewModel) {
    if (!model.allowAdd) return;
    if (model.element.rateValues.length === 0) {
      model.element.rateMax += model.element.rateStep;
    } else {
      let nextValue = null;
      const values = model.element.rateValues.map(function (item) {
        return item.value;
      });
      const itemText = surveyLocalization.getString("choices_Item");
      nextValue = getNextValue(itemText, values);

      const itemValue = new ItemValue(nextValue);
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
    const property = Serializer.findProperty(model.element.getType(), "rateValues");
    const itemIndex = model.element.rateValues && model.element.rateValues.length - 1;
    const item = (model.element.rateValues && model.element.rateValues[itemIndex]) || null;
    const allowDelete = model.creator.onCollectionItemDeletingCallback(
      model.element,
      property,
      model.element.rateValues,
      item
    );
    if (allowDelete) {
      const question = model.element;
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
    return !this.creator.readOnly &&
      (this.creator.maximumRateValues < 1 ||
        ((this.element.rateValues.length > 0 || this.creator.maximumRateValues > this.element.rateMax) && (this.element.rateValues.length < 1 || this.creator.maximumRateValues > this.element.rateValues.length)));
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
