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
import { getNextValue, toggleHovered } from "../utils/utils";
import { QuestionAdornerViewModel } from "./question";

import "./question-rating.scss";

export class QuestionRatingAdornerViewModel extends QuestionAdornerViewModel {
  constructor(
    creator: CreatorBase<SurveyModel>,
    surveyElement: SurveyElement,
    templateData: SurveyTemplateRendererTemplateData
  ) {
    super(creator, surveyElement, templateData);
  }

  get question(): QuestionRatingModel {
    return this.surveyElement as QuestionRatingModel;
  }

  public hover(event: MouseEvent, element: HTMLElement) {
    toggleHovered(event, element);
  }
  public addItem(model: QuestionRatingAdornerViewModel) {
    if (model.question.rateValues.length === 0) {
      model.question.rateMax += model.question.rateStep;
    } else {
      var nextValue = null;
      var values = model.question.rateValues.map(function (item) {
        return item.value;
      });
      var itemText = surveyLocalization.getString("choices_Item");
      nextValue = getNextValue(itemText, values);
  
      var itemValue = new ItemValue(nextValue);
      itemValue.locOwner = <any>{
        getLocale: () => {
          if (!!model.question["getLocale"]) return model.question.getLocale();
          return "";
        },
        getMarkdownHtml: (text: string) => {
          return text;
        },
        getProcessedText: (text: string) => {
          return text;
        },
      };
      model.question.rateValues = model.question.rateValues.concat([itemValue]);
    }
  
  }
  public removeItem(model: QuestionRatingAdornerViewModel) {
    const property = Serializer.findProperty(
      model.question.getType(),
      "rateValues"
    );
    const itemIndex = model.question.rateValues && model.question.rateValues.length - 1;
    const item = model.question.rateValues && model.question.rateValues[itemIndex] || null;
    var allowDelete = model.creator.onCollectionItemDeletingCallback(
      model.question,
      property,
      model.question.rateValues,
      item
    );
    if (allowDelete) {
      var question = model.question;
      if (
        question.rateValues.length === 0 &&
        itemIndex === question.rateValues.length - 1
      ) {
        question.rateMax -= question.rateStep;
      } else {
        if (question.rateValues.length === 0) {
          question.rateValues = question.rateValues;
        }
        question.rateValues.splice(itemIndex, 1);
      }
    }
  }
}

