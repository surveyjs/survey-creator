import {
    Base,
    ItemValue,
    property,
    QuestionSelectBase,
    SurveyItemValueTemplateData,
    SurveyModel,
  } from "survey-core";
import { CreatorBase } from "../creator-base";
  
  
import "./item-value.scss";

export class ItemValueAdornerViewModel extends Base {
    @property({ defaultValue: false }) isNew: boolean;
    constructor(
      private creator: CreatorBase<SurveyModel>,
      public question: QuestionSelectBase,
      public item: ItemValue
    ) {
      super();
    }
  
    public add(model: ItemValueAdornerViewModel) {
  
    }
    public remove(model: ItemValueAdornerViewModel) {
      var index = model.question.choices.indexOf(model.item);
      model.question.choices.splice(index, 1);
    }
  }