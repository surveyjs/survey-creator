
import { QuestionDropdownModel, SurveyElement, SurveyTemplateRendererTemplateData, property, ItemValue, Action } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { QuestionAdornerViewModel } from "./question";
import { DropdownChoicesViewModel, IDropdownChoicesHost } from "./dropdown-choices";

import "./question-dropdown.scss";

export class QuestionDropdownAdornerViewModel extends QuestionAdornerViewModel implements IDropdownChoicesHost {
  @property({ defaultValue: true }) private isCollapsedValue: boolean;
  @property({ defaultValue: -1 }) private visibleCount: number;
  private choicesModel: DropdownChoicesViewModel;

  constructor(
    creator: SurveyCreatorModel,
    surveyElement: SurveyElement,
    templateData: SurveyTemplateRendererTemplateData,
  ) {
    super(creator, surveyElement, templateData);
    this.visibleCount = creator.maxVisibleChoices;
    this.choicesModel = new DropdownChoicesViewModel(this);
  }

  get question(): QuestionDropdownModel {
    return this.surveyElement as QuestionDropdownModel;
  }

  // IDropdownChoicesHost: the collapsed flag stays a property of the adorner itself, so that the
  // framework views re-render on it - they track the adorner, not the choices model.
  public get maxVisibleChoices(): number {
    return this.visibleCount;
  }
  public isCollapsed(): boolean {
    return this.isCollapsedValue;
  }
  public setCollapsed(value: boolean): void {
    this.isCollapsedValue = value;
  }

  get itemComponent(): string {
    return this.choicesModel.itemComponent;
  }

  get itemInputType(): string {
    return this.choicesModel.itemInputType;
  }

  get needToCollapse(): boolean {
    return this.choicesModel.needToCollapse;
  }

  get isCollapseView(): boolean {
    return this.choicesModel.isCollapseView;
  }

  public leftFocus(): void {
    if (!this.creator.isElementSelected(this.surveyElement) && !this.isCollapsedValue) {
      this.isCollapsedValue = this.needToCollapse;
    }
  }

  public getChoiceCss(): string {
    return this.choicesModel.getChoiceCss();
  }

  public getRenderedItems(): ItemValue[] {
    return this.choicesModel.getRenderedItems();
  }

  public getButtonText(): string {
    return this.choicesModel.getButtonText();
  }

  public switchCollapse = (): void => {
    this.choicesModel.switchCollapse();
  };

  public get collapseAction(): Action {
    return this.choicesModel.collapseAction;
  }

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
  public dispose(): void {
    if (!!this.choicesModel) {
      this.choicesModel.dispose();
    }
    super.dispose();
  }
}
