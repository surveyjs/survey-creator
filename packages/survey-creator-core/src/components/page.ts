import { ActionContainer, ComputedUpdater, DragTypeOverMeEnum, IAction, PageModel, property } from "survey-core";
import { CreatorBase } from "../creator-base";
import { IPortableMouseEvent } from "../utils/events";
import { SurveyElementAdornerBase } from "./action-container-view-model";
import { toggleHovered } from "../utils/utils";
require("./page.scss");
import { SurveyHelper } from "../survey-helper";
import { settings } from "../creator-settings";

export class PageAdorner extends SurveyElementAdornerBase<PageModel> {
  @property({ defaultValue: false }) isSelected: boolean;
  @property({ defaultValue: true }) isPageLive: boolean;
  public onPageSelectedCallback: () => void;
  public questionTypeSelectorModel: any;
  @property({ defaultValue: "" }) currentAddQuestionType: string;
  get dragTypeOverMe(): DragTypeOverMeEnum {
    return this.page?.dragTypeOverMe;
  }
  constructor(creator: CreatorBase, page: PageModel) {
    super(creator, page);
    this.actionContainer.sizeMode = "small";
    this.questionTypeSelectorModel = this.creator.getQuestionTypeSelectorModel(
      (type) => {
        this.currentAddQuestionType = type;
        this.addGhostPage();
      }
    );
    this.attachElement(this.page);
  }

  protected attachElement(surveyElement: PageModel): void {
    super.attachElement(surveyElement);

    if (!!this.page) {
      this.page["surveyChangedCallback"] = () => {
        this.isPageLive = !!this.page.survey;
      };
      if (this.isGhost) {
        this.updateActionsProperties();
        this.page.registerFunctionOnPropertiesValueChanged(
          ["title", "description"],
          () => {
            this.addGhostPage();
          }
        );
        this.patchPageForDragDrop(this.page, this.addGhostPage);
      }
      this.page.onFirstRendering();
      this.page.updateCustomWidgets();
      this.page.setWasShown(true);
      this.checkActionProperties();
    }
  }

  protected onElementSelectedChanged(isSelected: boolean) {
    super.onElementSelectedChanged(isSelected);
    this.isSelected = isSelected;
    if (isSelected && !!this.onPageSelectedCallback) {
      this.onPageSelectedCallback();
    }
  }
  private patchPageForDragDrop(page: PageModel, addGhostPage: () => void) {
    // need for the drag drop see https://github.com/surveyjs/survey-library/blob/871492817561de11f934ebdf50481770300a396a/src/dragdrop/survey-elements.ts#L266
    page["_isGhost"] = true;
    page["_addGhostPageViewModel"] = () => {
      delete page["_isGhost"];
      delete page["_addGhostPageViewModel"];
      addGhostPage();
    };
  }
  public dispose(): void {
    super.dispose();
    if (!!this.page) {
      this.page.unRegisterFunctionOnPropertiesValueChanged([
        "title",
        "description"
      ]);
      this.page["surveyChangedCallback"] = undefined;
    }
    this.onPropertyValueChangedCallback = undefined;
  }
  public get isGhost(): boolean {
    return this.creator.survey.pages.indexOf(this.page) < 0;
  }
  protected isOperationsAllow(): boolean {
    return super.isOperationsAllow() && !this.isGhost && this.creator.pageEditMode !== "single" && this.creator.allowModifyPages;
  }
  protected getPage(): PageModel {
    return this.surveyElement as PageModel;
  }
  get page(): PageModel {
    return this.getPage();
  }

  private addGhostPage = (selectCurrentPage: boolean = true) => {
    const currentPage = this.page;
    if(this.isGhost) {
      if(!!this.creator.addPage(currentPage, selectCurrentPage, () => {
        currentPage.unRegisterFunctionOnPropertiesValueChanged([
          "title",
          "description"
        ]);
        currentPage.name = SurveyHelper.getNewPageName(this.creator.survey.pages);
        this.dragTypeOverMe = null;
        return true;
      })) {
        this.creator.survey.currentPage = currentPage;
      }
    }
    if(selectCurrentPage) {
      this.creator.selectElement(currentPage);
    }
  }

  addNewQuestion(model: PageAdorner, event: IPortableMouseEvent, type?: string) {
    this.creator.addNewQuestionInPage((type) => {
      this.addGhostPage(false);
      this.creator.survey.currentPage = this.page;
    }, null, type || this.currentAddQuestionType || settings.designer.defaultAddQuestionType);
  }
  select(model: PageAdorner, event: IPortableMouseEvent) {
    if (!model.isGhost) {
      if (model.creator.pageEditMode !== "single") {
        model.creator.selectElement(model.page, undefined, false);
        if (!!this.onPageSelectedCallback) {
          this.onPageSelectedCallback();
        }
      }
      else {
        model.creator.selectElement(model.creator.survey, undefined, false);
      }
    }
    event.stopPropagation();
    event.cancelBubble = true;
  }

  get css(): string {
    let result = "";
    if(!!this.dragTypeOverMe && this.page.elements.length === 0 && this.creator.survey.pages.length > 0) {
      result = "svc-page--drag-over-empty";
    }
    if(this.isGhost) {
      return result + " svc-page__content--new";
    }
    if(this.creator.isElementSelected(this.page)) {
      result += " svc-page__content--selected";
    }
    return result;
  }
  public hover(event: MouseEvent, element: HTMLElement | any) {
    toggleHovered(event, element, this.creator.pageHoverDelay);
  }
  public hoverStopper(event: MouseEvent, element: HTMLElement | any) {
    event["__svc_question_processed"] = true;
  }

  protected duplicate() {
    var newElement = this.creator.copyPage(this.page);
    this.creator.selectElement(newElement);
  }
  public get addNewQuestionText(): string {
    if (!this.currentAddQuestionType && this.creator)
      return this.creator.getLocString("ed.addNewQuestion");
    return !!this.creator ? this.creator.getAddNewQuestionText(this.currentAddQuestionType) : "";
  }
  private _footerActionsBar: ActionContainer;
  public get footerActionsBar(): ActionContainer {
    if(!this._footerActionsBar) {
      this._footerActionsBar = new ActionContainer();
      this._footerActionsBar.containerCss = "svc-page__footer";
      this._footerActionsBar.cssClasses = {
        item: "svc-btn",
        itemTitle: "svc-text svc-text--normal svc-text--bold"
      };
      let footerActions: Array<IAction> = [{
        css: "svc-add-new-question-action",
        visible: <boolean><unknown>(new ComputedUpdater<boolean>(() => this.showAddQuestionButton)),
        component: "svc-add-new-question-btn",
        data: this
      }];
      footerActions = this.creator.getUpdatedPageAdornerFooterActions(this, footerActions);
      this.footerActionsBar.setItems(footerActions);
    }
    return this._footerActionsBar;
  }

}
