import { PageModel, property, SurveyModel } from "survey-core";
import { CreatorBase } from "../creator-base";
import { IPortableMouseEvent } from "../utils/events";
import { ActionContainerViewModel } from "./action-container-view-model";
import { toggleHovered } from "../utils/utils";
import "./page.scss";
import { SurveyHelper } from "../survey-helper";

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
    if(this.isGhost) {
      this.updateActionsProperties();
      this.page.registerFunctionOnPropertiesValueChanged(
        ["title", "description"],
        () => {
          this.addGhostPage();
        }
      );
    }
    this.page.onFirstRendering();
    this.page.updateCustomWidgets();
    this.page.setWasShown(true);
    this.checkActionProperties();
  }
  protected onElementSelectedChanged(isSelected: boolean) {
    super.onElementSelectedChanged(isSelected);
    this.isSelected = isSelected;
    if (isSelected && !!this.onPageSelectedCallback) {
      this.onPageSelectedCallback();
    }
  }
  public dispose() {
    super.dispose();
    this.page.unRegisterFunctionOnPropertiesValueChanged([
      "title",
      "description"
    ]);
    this.onPropertyValueChangedCallback = undefined;
  }
  public get isGhost(): boolean {
    return this.creator.survey.pages.indexOf(this.page) < 0;
  }
  protected isOperationsAllow(): boolean {
    return super.isOperationsAllow() && !this.isGhost;
  }
  get page(): PageModel {
    return this._page;
  }

  public addGhostPage() {
    if (this.isGhost) {
      this.page.unRegisterFunctionOnPropertiesValueChanged([
        "title",
        "description"
      ]);
      this.page.name = SurveyHelper.getNewPageName(this.creator.survey.pages);
      this.creator.survey.addPage(this.page);
    }
    this.creator.selectElement(this.page);
    this.updateActionsProperties();
  }

  addNewQuestion(model: PageViewModel<T>, event: IPortableMouseEvent) {
    this.creator.addNewQuestionInPage(() => {
      this.addGhostPage();
    });
  }
  select(model: PageViewModel<T>, event: IPortableMouseEvent) {
    if (!model.isGhost) {
      model.creator.selectElement(model.page, undefined, false);
      if (!!this.onPageSelectedCallback) {
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
  public hover(event: MouseEvent, element: HTMLElement) {
    toggleHovered(event, element);
  }
  protected duplicate() {
    var newElement = this.creator.copyPage(this.page);
    this.creator.selectElement(newElement);
  }
  public get allowEdit() {
    return !this.creator.readOnly;
  }
}
