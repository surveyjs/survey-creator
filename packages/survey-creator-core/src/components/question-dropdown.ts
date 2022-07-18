
import { QuestionDropdownModel, SurveyElement, SurveyTemplateRendererTemplateData, SurveyModel, property } from "survey-core";
import { CreatorBase } from "../creator-base";
import { QuestionAdornerViewModel } from "./question";

import "./question-dropdown.scss";

export class QuestionDropdownAdornerViewModel extends QuestionAdornerViewModel {
  @property({ defaultValue: true }) isCollapsed: boolean;
  @property({ defaultValue: -1 }) visibleCount: number;

  constructor(
    creator: CreatorBase,
    surveyElement: SurveyElement,
    templateData: SurveyTemplateRendererTemplateData,
  ) {
    super(creator, surveyElement, templateData);
    this.visibleCount = creator.maxVisibleChoices;
    this.isCollapsed = this.isCollapsed && this.visibleCount > 0;
  }

  get question(): QuestionDropdownModel {
    return this.surveyElement as QuestionDropdownModel;
  }

  public getRenderedItems() {
    return this.isCollapsed ?
      this.question.visibleChoices.slice(0, this.visibleCount) :
      this.question.visibleChoices;
  }

  public needToCollapse(): boolean {
    return this.visibleCount > 0 && this.question.visibleChoices.length > this.visibleCount;
  }

  public getButtonText(): string {
    return !this.isCollapsed ? "Show less" : "Show more...";
  }

  public switchCollapse = (): void => {
    this.isCollapsed = !this.isCollapsed;
  }

}