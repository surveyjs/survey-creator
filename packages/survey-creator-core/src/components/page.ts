import { PageModel, property, SurveyModel } from "survey-core";
import { CreatorBase } from "../creator-base";
import { IPortableMouseEvent } from "../utils/events";
import { ActionContainerViewModel } from "./action-container-view-model";

import "./page.scss";

export class PageViewModel<
  T extends SurveyModel
> extends ActionContainerViewModel<T> {
  @property({ defaultValue: false }) isSelected: boolean;
  @property({ defaultValue: true }) isPageLive: boolean;
  public onPageSelectedCallback: () => void;
  public questionTypeSelectorModel;
  private _page: PageModel;

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

    if (typeof this.page["_addToSurvey"] === "function") {
      this.isGhost = true;
      this.page["_isGhost"] = true;
      this.page["_addGhostPageViewMobel"] = () => {
        this.addGhostPage();
      };
    } else {
      this.isGhost = false;
    }

    this.page.onFirstRendering();
    this.page.updateCustomWidgets();
    this.page.setWasShown(true);
  }
  protected onElementSelectedChanged(isSelected: boolean) {
    super.onElementSelectedChanged(isSelected);
    this.isSelected = isSelected;
    if (isSelected && this.onPageSelectedCallback) {
      this.onPageSelectedCallback();
    }
  }
  public dispose() {
    super.dispose();
    this.onPropertyValueChangedCallback = undefined;
  }
  public get isGhost(): boolean {
    return this.getPropertyValue("isGhost", false);
  }
  public set isGhost(val: boolean) {
    this.setPropertyValue("isGhost", val);
    this.updateActionsProperties();
  }
  protected isOperationsAllow(): boolean {
    return super.isOperationsAllow() && !this.isGhost;
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
      model.creator.selectElement(model.page, undefined, false);
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
}
