import { ActionContainer, ComputedUpdater, CssClassBuilder, DragTypeOverMeEnum, IAction, IElement, PageModel, property } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { IPortableMouseEvent } from "../utils/events";
import { SurveyElementAdornerBase } from "./action-container-view-model";
import { toggleHovered } from "../utils/utils";
import { getLocString } from "../editorLocalization";
require("./page.scss");
import { SurveyHelper } from "../survey-helper";
import { settings } from "../creator-settings";

export class PageAdorner extends SurveyElementAdornerBase<PageModel> {
  @property({ defaultValue: false }) isSelected: boolean;
  @property({ defaultValue: true }) isPageLive: boolean;
  @property() showPlaceholder: boolean;
  public onPageSelectedCallback: () => void;
  public questionTypeSelectorModel: any;
  @property({ defaultValue: "" }) currentAddQuestionType: string;
  @property({ defaultValue: null }) dragTypeOverMe: DragTypeOverMeEnum;
  private updateDragTypeOverMe() {
    if (!this.isDisposed) {
      this.dragTypeOverMe = this.page?.dragTypeOverMe;
    }
  }
  private updateShowPlaceholder(elements?: Array<IElement>) {
    this.showPlaceholder = !this.isGhost && (elements || this.page.elements).length === 0;
  }

  constructor(creator: SurveyCreatorModel, page: PageModel) {
    super(creator, page);
    this.actionContainer.sizeMode = "small";
    if (this.isGhost) this.expandCollapseAction.visible = false;
    this.expandCollapseAction.needSeparator = true;
    if (this.creator.expandCollapseButtonVisibility != "never") this.actionContainer.addAction(this.expandCollapseAction);
    this.questionTypeSelectorModel = this.creator.getQuestionTypeSelectorModel(
      (type) => {
        this.currentAddQuestionType = type;
        this.addGhostPage();
      }
    );
    this.attachElement(page);
  }

  protected attachElement(surveyElement: PageModel): void {
    super.attachElement(surveyElement);
    this.dragTypeOverMe = null;

    if (!!surveyElement) {
      surveyElement["surveyChangedCallback"] = () => {
        this.isPageLive = !!surveyElement.survey;
      };
      if (this.calcIsGhostPage(surveyElement)) {
        this.updateActionsProperties();
        surveyElement.registerFunctionOnPropertiesValueChanged(
          ["title", "description"],
          () => {
            this.addGhostPage();
            this.updateShowPlaceholder();
          },
          "add_ghost"
        );
        this.patchPageForDragDrop(surveyElement, this.addGhostPage);
      }
      surveyElement.registerFunctionOnPropertiesValueChanged(
        ["dragTypeOverMe"],
        () => {
          this.updateDragTypeOverMe();
        }
      );
      surveyElement.registerFunctionOnPropertiesValueChanged(["elements"], (newValue: Array<IElement>) => {
        this.updateShowPlaceholder(newValue);
      });
      this.updateShowPlaceholder();
      surveyElement.onFirstRendering();
      surveyElement.updateCustomWidgets();
      surveyElement.setWasShown(true);
      this.checkActionProperties();
      this.dragTypeOverMe = surveyElement.dragTypeOverMe;
    }
  }

  protected detachElement(surveyElement: PageModel): void {
    if (!!surveyElement) {
      surveyElement.unRegisterFunctionOnPropertiesValueChanged(["dragTypeOverMe"]);
      surveyElement.unRegisterFunctionOnPropertiesValueChanged(["title", "description"], "add_ghost");
      surveyElement["surveyChangedCallback"] = undefined;
    }
    super.detachElement(surveyElement);
    if (!this.isDisposed) {
      this.dragTypeOverMe = null;
    }
  }

  protected onElementSelectedChanged(isSelected: boolean) {
    super.onElementSelectedChanged(isSelected);
    this.isSelected = isSelected;
    if (isSelected && this.creator.pageEditMode === "bypage") {
      this.setSurveyElement(<PageModel>this.creator.selectedElement);
    }
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
    this.detachElement(this.page);
    super.dispose();
    this.onPropertyValueChangedCallback = undefined;
  }
  protected calcIsGhostPage(page: PageModel) {
    return this.creator.survey.pages.indexOf(page) < 0;
  }
  public get isGhost(): boolean {
    return this.calcIsGhostPage(this.page);
  }
  public get placeholderText(): string {
    if (this.creator.isMobileView)
      return getLocString("ed.pagePlaceHolderMobile");
    return getLocString("ed.pagePlaceHolder");
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
    if (this.isGhost) {
      const addedPage = !!this.creator.addPage(currentPage, selectCurrentPage, () => {
        currentPage.unRegisterFunctionOnPropertiesValueChanged(["title", "description"], "add_ghost");
        currentPage.name = SurveyHelper.getNewPageName(this.creator.survey.pages);
        return true;
      });
      if (addedPage) {
        this.creator.survey.currentPage = currentPage;
      }
    }
    if (selectCurrentPage) {
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
    if (!!this.dragTypeOverMe && this.showPlaceholder) {
      result = "svc-question__content--drag-over-inside";
    } else if (!!this.dragTypeOverMe && this.page.elements.length === 0 && this.creator.survey.pages.length > 0) {
      result = "svc-page--drag-over-empty";
      if (!!this.creator && !this.creator.showAddQuestionButton) {
        result += " svc-page--drag-over-empty-no-add-button";
      }
    }
    if (this.isGhost) {
      return result + " svc-page__content--new";
    }
    if (this.creator.isElementSelected(this.page)) {
      result += " svc-page__content--selected";
    }

    result += (" svc-page__content--collapse-" + this.creator.expandCollapseButtonVisibility);
    if (this.renderedCollapsed) result += (" svc-page__content--collapsed");
    return result.trim();
  }
  public hover(event: MouseEvent, element: HTMLElement | any) {
    toggleHovered(event, element, this.creator.pageHoverDelay);
  }
  public hoverStopper(event: MouseEvent, element: HTMLElement | any) {
    event["__svc_question_processed"] = true;
  }

  protected duplicate(): void {
    var newElement = this.creator.copyPage(this.page);
    this.creator.selectElement(newElement);
  }
  protected delete(): void {
    this.creator.deleteElement(this.page);
  }
  public get addNewQuestionText(): string {
    if (!this.currentAddQuestionType && this.creator)
      return this.creator.getLocString("ed.addNewQuestion");
    return !!this.creator ? this.creator.getAddNewQuestionText(this.currentAddQuestionType) : "";
  }
  private _footerActionsBar: ActionContainer;
  public get footerActionsBar(): ActionContainer {
    if (!this._footerActionsBar) {
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
