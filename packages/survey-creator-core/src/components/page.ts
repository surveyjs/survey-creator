import {
  Base,
  PageModel,
  property,
  propertyArray,
  AdaptiveActionContainer,
  Action,
  SurveyModel
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { IPortableMouseEvent } from "../utils/events";
import { ActionContainerViewModel } from "./action-container-view-model";

import "./page.scss";

export class PageViewModel<
  T extends SurveyModel
> extends ActionContainerViewModel<T> {
  @property({ defaultValue: false }) isGhost: boolean;
  @property({ defaultValue: false }) isSelected: boolean;
  @property({ defaultValue: true }) isPageLive: boolean;
  public onPageSelectedCallback: () => void;
  public questionTypeSelectorModel;
  public actionContainer: AdaptiveActionContainer =
    new AdaptiveActionContainer();
  private _page: PageModel;
  private selectedPropPageFunc: (sender: Base, options: any) => void;

  constructor(creator: CreatorBase<T>, page: PageModel) {
    super(creator, page);
    this.questionTypeSelectorModel = this.creator.getQuestionTypeSelectorModel(
      () => {
        this.addGhostPage();
      }
    );

    this._page = page;
    page["surveyChangedCallback"] = () => {
      this.isPageLive = !!page.survey;
    };
    this.selectedPropPageFunc = (sender: Base, options: any) => {
      if (options.name === "isSelectedInDesigner") {
        this.isSelected = options.newValue;
        if (options.newValue && this.onPageSelectedCallback) {
          this.onPageSelectedCallback();
        }
      }
    };
    this.page.onPropertyChanged.add(this.selectedPropPageFunc);

    if (typeof this.page["_addToSurvey"] === "function") {
      this.isGhost = true;
      this.page["_isGhost"] = true;
      this.page["_addGhostPageViewMobel"] = () => {
        this.addGhostPage();
      };
    } else {
      this.isGhost = false;
      this.actionContainer.setItems(this.getContextActions());
    }

    this.page.onFirstRendering();
    this.page.updateCustomWidgets();
    this.page.setWasShown(true);
  }
  public dispose() {
    super.dispose();
    this.page.onPropertyChanged.remove(this.selectedPropPageFunc);
    this.onPropertyValueChangedCallback = undefined;
  }

  get page(): PageModel {
    return this._page;
  }

  private addGhostPage() {
    if (this.isGhost) {
      this.isGhost = false;
      this.page["_addToSurvey"]();
    }
    this.creator.survey.currentPage = this.page;
  }

  addNewQuestion(model: PageViewModel<T>, event: IPortableMouseEvent) {
    this.creator.addNewQuestionInPage(() => {
      this.addGhostPage();
    });
  }
  select(model: PageViewModel<T>, event: IPortableMouseEvent) {
    if (!model.isGhost) {
      model.creator.selectElement(model.page);
      if (!this.onPageSelectedCallback) {
        this.onPageSelectedCallback();
      }
    }
  }
  get css(): string {
    if (this.isGhost) {
      return "svc-page__content--new";
    }
    return this.creator.isElementSelected(this.page)
      ? "svc-page__content--selected"
      : "";
  }

  protected duplicate() {
    var newElement = this.creator.copyPage(this.page);
    this.creator.selectElement(newElement);
  }

  protected getContextActions(): Array<Action> {
    let items = super.getContextActions();
    this.creator.onElementMenuItemsChanged(this.page, items);
    return items;
  }
}
