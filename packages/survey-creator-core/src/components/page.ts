import { Action, ActionContainer, classesToSelector, ComputedUpdater, DragOrClickHelper, DragTypeOverMeEnum, IAction, IElement, PageModel, property, QuestionRowModel, SurveyElement, settings as SurveySettings } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { IPortableMouseEvent } from "../utils/events";
import { SurveyElementAdornerBase } from "./action-container-view-model";
import { getLocString } from "../editorLocalization";
import { SurveyHelper } from "../survey-helper";
import { settings } from "../creator-settings";
import { DragDropSurveyElements } from "../survey-elements";

require("./page.scss");

export class PageAdorner extends SurveyElementAdornerBase<PageModel> {
  @property({ defaultValue: false }) isSelected: boolean;
  @property({ defaultValue: true }) isPageLive: boolean;
  @property() showPlaceholder: boolean;
  public questionTypeSelectorModel: any;
  private dragOrClickHelper: DragOrClickHelper;
  @property({ defaultValue: "" }) currentAddQuestionType: string;
  @property({ defaultValue: null }) dragTypeOverMe: DragTypeOverMeEnum;
  @property({ defaultValue: false }) isDragMe: boolean;
  private updateDragTypeOverMe() {
    if (!this.isDisposed) {
      this.dragTypeOverMe = this.page?.dragTypeOverMe;
    }
  }
  private updateIsDragMe() {
    if (!this.isDisposed) {
      this.isDragMe = this.page?.isDragMe;
    }
  }
  private updateShowPlaceholder(visibleRows?: Array<QuestionRowModel>) {
    this.showPlaceholder = !this.isGhost && (visibleRows || this.page.visibleRows).length === 0;
  }

  constructor(creator: SurveyCreatorModel, page: PageModel) {
    super(creator, page);
    this.questionTypeSelectorModel = this.creator.getQuestionTypeSelectorModel(
      (type) => {
        this.currentAddQuestionType = type;
        this.addGhostPage(false);
        this.creator.survey.currentPage = this.page;
      }
    );
    this.dragOrClickHelper = new DragOrClickHelper(this.startDragSurveyElement);
  }
  protected updateActionVisibility(id: string, isVisible: boolean) {
    super.updateActionVisibility(id, !this.isGhost && isVisible);
  }
  protected updateActionsContainer(surveyElement: SurveyElement): void {
    super.updateActionsContainer(surveyElement);
    if (this.creator.expandCollapseButtonVisibility != "never") this.actionContainer.addAction(this.expandCollapseAction);
  }
  protected get dragInsideCollapsedContainer(): boolean {
    return this.collapsed;
  }
  protected getAllowExpandCollapse(options: any): boolean {
    return !this.isGhost && super.getAllowExpandCollapse(options);
  }
  protected attachElement(surveyElement: PageModel): void {
    super.attachElement(surveyElement);
    this.dragTypeOverMe = null;

    if (!!surveyElement) {
      surveyElement["surveyChangedCallback"] = () => {
        this.isPageLive = !!surveyElement.survey;
      };
      if (this.isGhost) {
        this.addGhostPageSubsribes(surveyElement);
      }
      surveyElement.registerFunctionOnPropertiesValueChanged(
        ["dragTypeOverMe"],
        () => {
          this.updateDragTypeOverMe();
        },
        "dragOver"
      );
      surveyElement.registerFunctionOnPropertiesValueChanged(
        ["isDragMe"],
        () => {
          this.updateIsDragMe();
        },
        "dragOver"
      );
      surveyElement.registerFunctionOnPropertiesValueChanged(["visibleRows"], (newValue: Array<QuestionRowModel>) => {
        this.updateShowPlaceholder(newValue);
      }, "updatePlaceholder");
      this.updateShowPlaceholder();
      surveyElement.onFirstRendering();
      surveyElement.updateCustomWidgets();
      surveyElement.setWasShown(true);
      this.checkActionProperties();
      this.dragTypeOverMe = surveyElement.dragTypeOverMe;
      this.isDragMe = surveyElement.isDragMe;
    }
  }

  protected detachElement(surveyElement: PageModel): void {
    if (!!surveyElement) {
      surveyElement.unRegisterFunctionOnPropertiesValueChanged(["elements"], "updatePlaceholder");
      surveyElement.unRegisterFunctionOnPropertiesValueChanged(["dragTypeOverMe", "isDragMe"], "dragOver");
      surveyElement.unRegisterFunctionOnPropertiesValueChanged(["title", "description"], "add_ghost");
      surveyElement.unRegisterFunctionOnPropertiesValueChanged(["visibleRows"], "updatePlaceholder");
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
    if (isSelected) {
      this.onPageSelected();
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
  @property({
    onSet(val, target: PageAdorner, prevVal) {
      if(val != prevVal) {
        target.updateShowPlaceholder();
        target.updateActionsProperties();
        if(val && target.surveyElement) {
          target.addGhostPageSubsribes(target.surveyElement);
        }
      }
    },
  }) isGhost: boolean;
  private addGhostPageSubsribes(surveyElement: PageModel) {
    surveyElement.registerFunctionOnPropertiesValueChanged(
      ["title", "description"],
      () => {
        this.addGhostPage();
        this.updateShowPlaceholder();
      },
      "add_ghost"
    );
    this.patchPageForDragDrop(this.surveyElement, this.addGhostPage);
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

  protected createActionContainer(): ActionContainer<Action> {
    const container = new ActionContainer();
    container.sizeMode = "small";
    container.cssClasses = {
      root: "svc-page-toolbar sv-action-bar",
      item: "svc-page-toolbar__item",
      itemWithTitle: "svc-page-toolbar__item--with-text",
      itemActive: "svc-page-toolbar__item--active",
      itemPressed: "svc-page-toolbar__item--pressed",
      itemIcon: "svc-page-toolbar-item__icon",
      itemTitle: "svc-page-toolbar-item__title",
      itemTitleWithIcon: "svc-page-toolbar-item__title--with-icon",
    };
    return container;
  }

  protected allowExpandCollapseByDblClick(element: any) {
    return element.classList.contains("svc-page__content") ||
      element.classList.contains("sd-page") ||
      element.closest(".svc-question__drag-area") && !element.closest(".svc-page__content-actions") ||
      (element.closest(".sd-page__title") || element.closest(".sd-page__description")) && !element.closest(".svc-string-editor");
  }

  protected getExpandCollapseAction(): IAction {
    const action = super.getExpandCollapseAction();
    action.needSeparator = true;
    return action;
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

  addNewQuestion = (model: PageAdorner, event: IPortableMouseEvent, type?: string) => {
    const isGhost = this.isGhost;
    const page = this.page;
    this.creator.addNewQuestionInPage((type) => {
      this.addGhostPage(false);
      this.creator.survey.currentPage = this.page;
    }, null, type || this.currentAddQuestionType || settings.designer.defaultAddQuestionType);
  }
  select(model: PageAdorner, event: IPortableMouseEvent) {
    if (!model.isGhost) {
      if (model.creator.pageEditMode !== "single") {
        model.creator.selectElement(model.page, undefined, false);
        this.onPageSelected();
      }
      else {
        model.creator.selectElement(model.creator.survey, undefined, false);
      }
    }
    event.stopPropagation();
    event.cancelBubble = true;
  }

  get css(): string {
    let result = super.getCss();
    if (this.dragDropHelper.draggedElement && this.dragDropHelper.draggedElement.isPage) {
      if (this.dragTypeOverMe === DragTypeOverMeEnum.Top) {
        result += " svc-question__content--drag-over-top";
      }
      if (this.dragTypeOverMe === DragTypeOverMeEnum.Bottom) {
        result += " svc-question__content--drag-over-bottom";
      }
    } else {
      if (!!this.dragTypeOverMe && this.showPlaceholder) {
        result = "svc-question__content--drag-over-inside";
      } else if (!!this.dragTypeOverMe && this.page.elements.length === 0 && this.creator.survey.pages.length > 0) {
        result = "svc-page--drag-over-empty";
        if (!!this.creator && !this.creator.showAddQuestionButton) {
          result += " svc-page--drag-over-empty-no-add-button";
        }
      }
      if (!!this.dragTypeOverMe && this.collapsed) {
        this.dragIn();
        result += " svc-page__content--collapsed-drag-over-inside";
      } else {
        this.dragOut();
      }
    }
    if (this.allowExpandCollapse || this.page["isGhost"]) {
      result += (" svc-page__content--collapse-" + this.creator.expandCollapseButtonVisibility);
      if (this.renderedCollapsed || this.page["isGhost"]) result += (" svc-page__content--collapsed");
      if (this.expandCollapseAnimationRunning) result += (" svc-page__content--animation-running");
    }
    if (this.isDragMe) {
      result += " svc-page__content--dragged";
    }
    if (this.isGhost) {
      return result + " svc-page__content--new";
    }
    if (this.creator.isElementSelected(this.page)) {
      result += " svc-page__content--selected";
    }
    if (SurveySettings.designMode.showEmptyTitles === false) {
      result += " svc-page__content--no-header";
    }
    return result.trim();
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
        itemTitle: "svc-add-new-item-button__text"
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
  protected getAnimatedElement() {
    const cssClasses = this.surveyElement.cssClasses.page;
    if (cssClasses?.description) {
      return this.rootElement?.querySelector(`:scope ${classesToSelector(cssClasses.description)}`) as HTMLElement;
    }
    return null;
  }

  protected getInnerAnimatedElements() {
    const cssClasses = this.surveyElement.cssClasses;
    if (cssClasses.pageRow) return [].slice.call(this.rootElement?.querySelectorAll(`:scope .svc-page__footer, :scope ${classesToSelector(this.surveyElement.cssRoot)} > .svc-row`));
    return null;
  }
  public onPageSelected() {}
  protected getAllowDragging(options: any): boolean {
    return this.creator.allowDragPages && super.getAllowDragging(options);
  }
  private get dragDropHelper(): DragDropSurveyElements {
    return this.creator.dragDropSurveyElements;
  }
  onPointerDown(pointerDownEvent: PointerEvent) {
    this.dragOrClickHelper.onPointerDown(pointerDownEvent);
  }
  startDragSurveyElement = (event: PointerEvent) => {
    const element = <any>this.surveyElement;
    const isElementSelected = this.creator.selectedElement === element;
    this.dragDropHelper.startDragSurveyElement(event, element, isElementSelected);
    if (this.creator.collapsePagesOnDrag) {
      this.creator.designerStateManager?.suspend();
      this.creator.collapseAllPagesOnDragStart();
    }
    return true;
  }
  get dropTargetName(): string {
    if (!this.isGhost && !!this.page) {
      return this.page.name;
    }
    return null;
  }
}
