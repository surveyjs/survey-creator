
import { QuestionDropdownModel, SurveyElement, SurveyTemplateRendererTemplateData, SurveyModel, property, CssClassBuilder, ItemValue } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { QuestionAdornerViewModel } from "./question";
import { editorLocalization } from "../editorLocalization";

import "./question-dropdown.scss";

export class QuestionDropdownAdornerViewModel extends QuestionAdornerViewModel {
  @property({ defaultValue: true }) private isCollapsed: boolean;
  @property({ defaultValue: -1 }) private visibleCount: number;

  constructor(
    creator: SurveyCreatorModel,
    surveyElement: SurveyElement,
    templateData: SurveyTemplateRendererTemplateData,
  ) {
    super(creator, surveyElement, templateData);
    this.visibleCount = creator.maxVisibleChoices;
    this.isCollapsed = this.isCollapsed && this.needToCollapse;
  }

  get question(): QuestionDropdownModel {
    return this.surveyElement as QuestionDropdownModel;
  }

  get itemComponent(): string {
    if (this.surveyElement.isDescendantOf("dropdown")) {
      return "survey-radiogroup-item";
    }
    return "survey-checkbox-item";
  }

  get needToCollapse(): boolean {
    return this.visibleCount > 0 && this.question.visibleChoices.length > this.visibleCount;
  }

  get isCollapseView(): boolean {
    return this.isCollapsed;
  }

  public leftFocus(): void {
    if (!this.creator.isElementSelected(this.surveyElement) && !this.isCollapsed) {
      this.isCollapsed = this.needToCollapse;
    }
  }

  public getChoiceCss(): string {
    return new CssClassBuilder()
      .append("svc-question__dropdown-choice")
      .append("svc-question__dropdown-choice--collapsed", this.isCollapsed && this.needToCollapse)
      .toString();
  }

  public getRenderedItems(): ItemValue[] {
    return this.isCollapsed ?
      this.question.renderedChoices.slice(0, this.visibleCount) :
      this.question.renderedChoices;
  }

  public getButtonText(): string {
    return !this.isCollapsed ?
      editorLocalization.getString("ed.showLessChoices") :
      editorLocalization.getString("ed.showMoreChoices");
  }

  public switchCollapse = (): void => {
    this.isCollapsed = !this.isCollapsed;
  };

  public attachElement(surveyElement: SurveyElement) {
    super.attachElement(surveyElement);
    if (!!surveyElement) {
      surveyElement.registerFunctionOnPropertyValueChanged("isSelectedInDesigner",
        () => {
          this.leftFocus();
        }, "dropdownCollapseChecker");
    }
  }
  public detachElement(surveyElement: SurveyElement): void {
    if (!!surveyElement) {
      surveyElement.unRegisterFunctionOnPropertyValueChanged("isSelectedInDesigner", "dropdownCollapseChecker");
    }
    super.detachElement(surveyElement);
  }

}