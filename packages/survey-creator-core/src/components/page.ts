import { ActionContainer, classesToSelector, ComputedUpdater, CssClassBuilder, DragOrClickHelper, IAction, PageModel, property, QuestionRowModel, SurveyModel, settings as SurveySettings } from "survey-core";
import { SurveyCreatorModel } from "../creator-base";
import { IPortableMouseEvent } from "../utils/events";
import { SurveyElementActionContainer } from "./action-container-view-model";
import { SurveyElementAdornerBase } from "./survey-element-adorner-base";
import { getLocString } from "../editorLocalization";
import { SurveyHelper } from "../survey-helper";
import { settings } from "../creator-settings";
import { DragDropSurveyElements } from "../dragdrop-survey-elements";
import { DropIndicatorPosition } from "../drag-drop-enums";

import "./page.scss";

export class PageAdorner extends SurveyElementAdornerBase<PageModel> {
  @property({ defaultValue: false }) isSelected: boolean;
  @property({ defaultValue: true }) isPageLive: boolean;
  @property() showPlaceholder: boolean;
  public questionTypeSelectorModel: any;
  private dragOrClickHelper: DragOrClickHelper;
  @property({ defaultValue: "" }) _currentAddQuestionType: string;
  get currentAddQuestionType(): string {
    return this._currentAddQuestionType;
  }
  set currentAddQuestionType(val: string) {
    if (!this.creator || this.creator.rememberLastQuestionType) {
      this._currentAddQuestionType = val;
    }
  }

  @property({ defaultValue: false }) isVisibleInViewPort: boolean;
  @property({ defaultValue: !settings.pageContentLazyRendering }) needRenderContent: boolean;

  protected updateShowPlaceholder(visibleRows?: Array<QuestionRowModel>) {
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
    this.creator.onPropertyChanged.add(this.creatorPropertyChanged);
  }
  public dispose() {
    this.creator.onPropertyChanged.remove(this.creatorPropertyChanged);
    super.dispose();
  }
  protected onElementTypeRestrictionChanged(elType: string): void {
    super.onElementTypeRestrictionChanged(elType);
    if (this.currentAddQuestionType === elType) {
      this.currentAddQuestionType = "";
    }
  }
  protected updateActionVisibility(id: string, isVisible: boolean) {
    super.updateActionVisibility(id, !this.isGhost && isVisible);
  }
  protected getAllowExpandCollapse(options: any): boolean {
    return !this.isGhost && super.getAllowExpandCollapse(options);
  }
  protected attachElement(surveyElement: PageModel): void {
    super.attachElement(surveyElement);
    this.dropIndicatorPosition = null;

    if (!!surveyElement) {
      surveyElement["surveyChangedCallback"] = () => {
        this.isPageLive = !!surveyElement.survey;
      };
      if (this.isGhost) {
        this.addGhostPageSubsribes(surveyElement);
      }
      surveyElement.registerFunctionOnPropertiesValueChanged(["visibleRows"], (newValue: Array<QuestionRowModel>) => {
        this.updateShowPlaceholder(newValue);
      }, "updatePlaceholder");
      this.updateShowPlaceholder();
      surveyElement.onFirstRendering();
      surveyElement.updateCustomWidgets();
      surveyElement.setWasShown(true);
      this.checkActionProperties();
      if (this.creator.pageEditMode !== "single") {
        (<any>surveyElement.locTitle).placeholder = () => { return surveyElement.isStartPage ? "pe.startPageTitlePlaceholder" : "pe.pageTitlePlaceholder"; };
        (<any>surveyElement.locDescription).placeholder = "pe.pageDescriptionPlaceholder";
      }
      this.needRenderContent = this.isGhost || this.creator.pageEditMode !== "standard" || !surveyElement.survey || surveyElement.survey.pages.length <= 5;
    }
  }

  protected detachElement(surveyElement: PageModel): void {
    if (!!surveyElement) {
      delete (<any>surveyElement.locTitle).placeholder;
      delete (<any>surveyElement.locDescription).placeholder;
      surveyElement.unRegisterFunctionOnPropertiesValueChanged(["elements"], "updatePlaceholder");
      surveyElement.unRegisterFunctionOnPropertiesValueChanged(["title", "description"], "add_ghost");
      surveyElement.unRegisterFunctionOnPropertiesValueChanged(["visibleRows"], "updatePlaceholder");
      surveyElement["surveyChangedCallback"] = undefined;
    }
    super.detachElement(surveyElement);
    if (!this.isDisposed) {
      this.dropIndicatorPosition = null;
    }
  }

  private visibilityObserver: IntersectionObserver;
  public setRootElement(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    this.visibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisibleInViewPort = true;
          if ((!this.element.survey || !(this.element.survey as SurveyModel).isLazyRenderingSuspended) && !this.needRenderContent) {
            setTimeout(() => this.needRenderContent = true, 1);
          }
        } else {
          this.isVisibleInViewPort = false;
        }
      });
    },
    { root: null, });
    this.visibilityObserver.observe(this.rootElement);
  }
  public forceCheckVisibility() {
    if (!!this.visibilityObserver && !!this.rootElement) {
      this.visibilityObserver.unobserve(this.rootElement);
      this.visibilityObserver.observe(this.rootElement);
    }
  }

  public attachToUI(surveyElement: PageModel, rootElement?: HTMLElement) {
    super.attachToUI(surveyElement, rootElement);
    if (!!rootElement) {
      this.setRootElement(rootElement);
    }
  }
  public detachFromUI() {
    this.isVisibleInViewPort = false;
    if (!!this.visibilityObserver) {
      this.visibilityObserver.unobserve(this.rootElement);
      this.visibilityObserver.disconnect();
      this.visibilityObserver = null;
    }
    super.detachFromUI();
    this.needRenderContent = false;
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
      if (val != prevVal) {
        target.updateShowPlaceholder();
        target.updateActionsProperties();
        if (val && target.surveyElement) {
          target.addGhostPageSubsribes(target.surveyElement);
          target.needRenderContent = true;
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

  protected createActionContainer(): SurveyElementActionContainer {
    const container = super.createActionContainer();
    container.alwaysShrink = this.creator.isMobileView;
    container.sizeMode = "small";
    container.cssClasses = this.containerCssClasses();
    container.dotsItem.iconSize = "auto";
    return container;
  }

  protected createTopActionContainer(): ActionContainer {
    const container = super.createTopActionContainer();
    container.cssClasses = { ...this.containerCssClasses() };
    container.cssClasses.root += " svc-page-toolbar--collapse";
    return container;
  }
  private containerCssClasses(): any {
    return {
      root: "svc-page-toolbar sv-action-bar",
      item: "svc-page-toolbar__item",
      itemWithTitle: "svc-page-toolbar__item--with-text",
      itemActive: "svc-page-toolbar__item--active",
      itemPressed: "svc-page-toolbar__item--pressed",
      itemIcon: "svc-page-toolbar-item__icon",
      itemTitle: "svc-page-toolbar-item__title",
      itemTitleWithIcon: "svc-page-toolbar-item__title--with-icon",
    };
  }
  protected allowExpandCollapseByDblClick(element: any) {
    return element.classList.contains("svc-page__content") ||
      element.classList.contains("sd-page") ||
      element.classList.contains("svc-page-toolbar") ||
      element.classList.contains("svc-page__content-actions") ||
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
  };

  addNewQuestion = (model: PageAdorner, event: IPortableMouseEvent, type?: string) => {
    const isGhost = this.isGhost;
    const page = this.page;
    this.creator.addNewQuestionInPage((type) => {
      this.addGhostPage(false);
      this.creator.survey.currentPage = this.page;
    }, null, type || this.currentAddQuestionType || this.creator.defaultAddQuestionType);
  };
  select(model: PageAdorner, event: IPortableMouseEvent) {
    if (!model.isGhost) {
      if (model.creator.pageEditMode !== "single") {
        model.creator.selectElement(model.page, undefined, false);
        this.onPageSelected();
      } else {
        model.creator.selectElement(model.creator.survey, undefined, false);
      }
    }
    event.stopPropagation();
    event.cancelBubble = true;
  }

  get css(): string {
    const isShowAddQuestionButton = !!this.creator && !this.creator.showAddQuestionButton;
    const isGhostEmpty = this.isGhost && this.creator.survey.pages.length > 0;
    const isInsideCollapsed = this.dropIndicatorPosition === DropIndicatorPosition.Inside && this.collapsed;

    let result: string = new CssClassBuilder()
      .append(super.getCss())
      .append("svc-page__content--dragged", this.isBeingDragged)
      .append("svc-question__content--drag-over-top", this.dropIndicatorPosition === DropIndicatorPosition.Top)
      .append("svc-question__content--drag-over-bottom", this.dropIndicatorPosition === DropIndicatorPosition.Bottom)
      .append("svc-page__content--collapsed-drag-over-inside", isInsideCollapsed)
      .append("svc-question__content--drag-over-inside", this.dropIndicatorPosition === DropIndicatorPosition.Inside && this.showPlaceholder)
      .append("svc-page--drag-over-empty", this.dropIndicatorPosition === DropIndicatorPosition.Inside && !!isGhostEmpty)
      .append("svc-page--drag-over-empty-no-add-button", this.dropIndicatorPosition === DropIndicatorPosition.Inside && !!isGhostEmpty && isShowAddQuestionButton)
      .append("svc-page__content--collapse-" + this.creator.expandCollapseButtonVisibility, this.allowExpandCollapse || !!this.page["isGhost"])
      .append("svc-page__content--collapsed", (this.allowExpandCollapse || !!this.page["isGhost"]) && (this.renderedCollapsed || !!this.page["isGhost"]))
      .append("svc-page__content--animation-running", (this.allowExpandCollapse || !!this.page["isGhost"]) && (this.expandCollapseAnimationRunning))
      .append("svc-page__content--new", !!this.isGhost)
      .append("svc-page__content--selected", !this.isGhost && !!this.isSelected)
      .append("svc-page__content--no-header", !this.isGhost && SurveySettings.designMode.showEmptyTitles === false)
      .toString();

    if (isInsideCollapsed) {
      this.dragIn();
    } else {
      this.dragOut();
    }

    return result;
  }

  private creatorPropertyChanged = (sender, options) => {
    if (options.name === "isMobileView" && this.isActionContainerCreated) {
      this.actionContainer.alwaysShrink = options.newValue;
    }
  };
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
    if (cssClasses.pageRow) return [].slice.call(this.rootElement?.querySelectorAll(`:scope .svc-page__footer, :scope .svc-page__placeholder_frame, :scope ${classesToSelector(this.surveyElement.cssRoot)} > .svc-row`));
    return null;
  }
  public onPageSelected() { }
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
    return true;
  };
  get dropTargetName(): string {
    if (!this.isGhost && !!this.page) {
      return this.page.name;
    }
    return null;
  }
}
