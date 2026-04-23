import {
  SurveyElement,
  SurveyTemplateRendererTemplateData,
  Serializer,
  QuestionRatingModel,
  surveyLocalization,
  settings,
  ItemValue,
  Base,
  CssClassBuilder,
  MatrixDropdownColumn,
  Action,
  ComputedUpdater,
  ActionContainer
} from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { getLocString } from "../editorLocalization";
import { getNextValue, getQuestionFromObj } from "../utils/creator-utils";

import "./question-rating.scss";
import { SurveyElementAdornerBase } from "./survey-element-adorner-base";

export class QuestionRatingAdornerViewModel extends Base {
  constructor(
    public creator: SurveyCreatorModel,
    public surveyElement: SurveyElement,
    public templateData: SurveyTemplateRendererTemplateData
  ) {
    super();
  }

  get element(): QuestionRatingModel {
    return getQuestionFromObj(this.surveyElement) as QuestionRatingModel;
  }

  static useRateValues(element: any): boolean {
    const el = !!element.contentQuestion ? element.contentQuestion : element;
    return !!el.useRateValues && el.useRateValues();
  }

  public addItem(model: QuestionRatingAdornerViewModel) {
    if (!model.allowAdd) return;
    if (!model.enableAdd) return;
    if (!QuestionRatingAdornerViewModel.useRateValues(model.element)) {
      model.element.rateMax += model.element.rateStep;
    } else {
      let nextValue = null;
      const values = model.element.rateValues.map(function (item) {
        return item.value;
      });
      const itemText = model.creator.getChoicesItemBaseTitle();
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
      const rateValues = model.element.rateValues;
      model.creator.onItemValueAddedCallback(model.element, "rateValues", rateValues[rateValues.length - 1], rateValues);
    }
  }
  public removeItem(model: QuestionRatingAdornerViewModel) {
    if (!model.allowRemove) return;
    if (!model.enableRemove) return;
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
        !QuestionRatingAdornerViewModel.useRateValues(model.element) &&
        itemIndex === question.rateValues.length - 1
      ) {
        question.rateMax -= question.rateStep;
      } else {
        if (!QuestionRatingAdornerViewModel.useRateValues(model.element)) {
          // eslint-disable-next-line no-self-assign
          question.rateValues = question.rateValues;
        }
        question.rateValues.splice(itemIndex, 1);
      }
    }
  }

  public static allowAddForElement(element: QuestionRatingModel, maxRateValues: number): boolean {
    if ((maxRateValues < 1 || maxRateValues > settings.ratingMaximumRateValueCount) && !QuestionRatingAdornerViewModel.useRateValues(element)) maxRateValues = settings.ratingMaximumRateValueCount;
    if (element.rateType == "smileys" && (maxRateValues < 1 || maxRateValues > 10)) maxRateValues = 10;
    if (maxRateValues < 1) return true;
    return element.rateCount < maxRateValues;
  }
  public get allowAdd(): boolean {
    return this.canAddOrRemove();
  }
  public get enableAdd(): boolean {
    return this.allowAdd && QuestionRatingAdornerViewModel.allowAddForElement(this.element, this.creator.maxRateValues);
  }
  public static allowRemoveForElement(element: QuestionRatingModel): boolean {
    return element.rateCount > 2;
  }

  private canAddOrRemove() {
    return this.creator.isCanModifyProperty(this.element, "rateValues") &&
      this.creator.isCanModifyProperty(this.element, "rateCount") &&
      (!this.element.autoGenerate || this.creator.isCanModifyProperty(this.element, "rateMax"));
  }
  public get allowRemove(): boolean {
    return this.canAddOrRemove();
  }
  public get enableRemove(): boolean {
    return this.allowRemove && QuestionRatingAdornerViewModel.allowRemoveForElement(this.element);
  }
  protected onFocusAction (event: FocusEvent): void {
    const adorner = this.surveyElement.getPropertyValue(SurveyElementAdornerBase.AdornerValueName);
    if (adorner) {
      adorner.select(adorner, event);
    }
  }

  protected createRateActions() {
    return [
      new Action({
        id: "remove",
        showTitle: false,
        iconName: "icon-remove_16x16",
        appearance: { size: "x-small", style: "alert", mode: "tertiary" },
        iconSize: "auto",
        visible: new ComputedUpdater(() => this.allowRemove) as unknown as boolean,
        enabled: new ComputedUpdater(() => this.enableRemove) as unknown as boolean,
        title: new ComputedUpdater(() => this.removeTooltip) as unknown as string,
        onFocus: (_, event: FocusEvent) => {
          this.onFocusAction(event);
        },
        action: () => {
          this.removeItem(this);
        }
      }),
      new Action({
        id: "add",
        iconName: "icon-add_16x16",
        iconSize: "auto",
        showTitle: false,
        appearance: { size: "x-small", style: "brand", mode: "tertiary" },
        visible: new ComputedUpdater(() => this.allowAdd) as unknown as boolean,
        enabled: new ComputedUpdater(() => this.enableAdd) as unknown as boolean,
        title: new ComputedUpdater(() => this.addTooltip) as unknown as string,
        onFocus: (_, event: FocusEvent) => {
          this.onFocusAction(event);
        },
        action: () => {
          this.addItem(this);
        }
      })
    ];
  }
  protected createRateActiosnContainer(): ActionContainer {
    const container = new ActionContainer();
    container.containerCss = this.controlsClassNames;
    container.setItems(this.createRateActions());
    return container;
  }
  private rateActionsContainerValue?: ActionContainer;
  public get rateActionsContainer() {
    if (!this.rateActionsContainerValue) {
      this.rateActionsContainerValue = this.createRateActiosnContainer();
    }
    return this.rateActionsContainerValue;
  }
  public get hasTopLabel(): boolean {
    return (this.element.rateDescriptionLocation == "top" ||
      this.element.rateDescriptionLocation == "topBottom") &&
      !!this.element.minRateDescription;
  }
  public get controlsClassNames(): string {
    return new CssClassBuilder()
      .append("svc-rating-question-controls")
      .append("svc-item-value-controls")
      .append("svc-rating-question-controls--labels-top", this.hasTopLabel).toString();
  }
  get addTooltip() {
    return getLocString("pe.addItem");
  }
  get removeTooltip() {
    return getLocString("pe.removeItem");
  }
}
