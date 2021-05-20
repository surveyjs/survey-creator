import {
  Base,
  IActionBarItem,
  PageModel,
  property,
  propertyArray,
  SurveyModel
} from "survey-core";
import { CreatorBase } from "../creator-base";
import { IPortableMouseEvent } from "../utils/events";

import "./page.scss";

export class PageViewModel<T extends SurveyModel> extends Base {
  @property({ defaultValue: false }) isGhost: boolean;
  @propertyArray() actions: Array<IActionBarItem>;
  @property({ defaultValue: false }) isSelected: boolean;
  @property({ defaultValue: true }) isPageLive: boolean;
  public creator: CreatorBase<T>;
  public onPageSelectedCallback: () => void;
  private _page: PageModel;
  private selectedPropPageFunc: (sender: Base, options: any) => void;

  constructor(creator: CreatorBase<T>, page: PageModel) {
    super();
    this.creator = creator;

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
      this.actions = creator.getContextActions(this.page);
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

  addNewQuestionText = "Add a New Question";
  addNewQuestion(model: PageViewModel<T>, event: IPortableMouseEvent) {
    if (this.creator.undoRedoManager) {
      this.creator.undoRedoManager.startTransaction("add new page");
    }
    this.addGhostPage();
    model.creator.clickToolboxItem({ type: "text" });
    if (this.creator.undoRedoManager) {
      this.creator.undoRedoManager.stopTransaction();
    }
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
}
