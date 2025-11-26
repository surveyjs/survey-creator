import { Base, PageModel, property, SurveyModel, ComputedUpdater, settings, IPage, ActionContainer, propertyArray, IAnimationGroupConsumer, AnimationGroup, prepareElementForVerticalAnimation, cleanHtmlElementAfterAnimation, IAction, activateLazyRenderingChecks, CssClassBuilder } from "survey-core";
import { SurveyCreatorModel } from "../../creator-base";
import { getLocString } from "../../editorLocalization";
import { PagesController } from "../../pages-controller";
import { SurveyHelper } from "../../survey-helper";
import { DragDropSurveyElements } from "../../dragdrop-survey-elements";
import { SurveyElementAdornerBase } from "../survey-element-adorner-base";
import { assign } from "../../utils/utils";
import designTabSurveyThemeJSON from "../../designTabSurveyThemeJSON";
import "./designer.scss";

export const initialSettingsAllowShowEmptyTitleInDesignMode = settings.designMode.showEmptyTitles;

export class TabDesignerViewModel extends Base {
  private minSurfaceScaling = 20;
  private maxSurfaceScaling = 100;
  private stepSurfaceScaling = 10;
  private cssUpdater: ComputedUpdater;
  private pagesControllerValue: PagesController;

  unitDictionary: { [index: string]: number } = {
    "--ctr-surface-base-unit": 8,
    "--lbr-font-unit": 8,
    "--lbr-line-height-unit": 8,
    "--lbr-size-unit": 8,
    "--lbr-spacing-unit": 8,
    "--lbr-corner-radius-unit": 8,
    "--lbr-stroke-unit": 1,
  };

  @property() newPage: PageModel;
  @property({ defaultValue: false }) showNewPage: boolean;
  @property() pageCount: number;
  @property() designerCss: string;
  @property({
    onSet: (val, objectInstance: TabDesignerViewModel, prevVal) => {
      objectInstance.updateSurveyScaleStartDimensions();
    },
  }) showPlaceholder: boolean;
  @property() surfaceScale = 100;
  @property() surfaceCssVariables: { [index: string]: string } = {};
  public scaleCssVariables: { [index: string]: string } = {};
  public creator: SurveyCreatorModel;

  public surfaceToolbar: ActionContainer;

  public get displayPageDropTarget() {
    return this.pagesController.page2Display === this.newPage ? "newGhostPage" : this.pagesController.page2Display.name;
  }

  private createNewPage() {
    if (!this.creator.canAddPage()) {
      return null;
    }
    const newPage: PageModel = this.survey.createNewPage("");
    newPage["ignoreUndoRedo"] = true;
    this.creator.setNewNames(newPage);
    newPage.onFirstRendering();
    newPage.updateCustomWidgets();
    newPage.setWasShown(true);
    newPage.setSurveyImpl(this.survey);
    newPage.updateElementCss(true);
    var checkNewElementHandler = (sender: SurveyModel, options: any) => {
      if (options.name === "elements" && newPage.elements.length > 0) {
        // if (this.survey.pages.indexOf(newPage) > -1) return;
        this.creator.addPage(newPage, true, () => {
          newPage.onPropertyChanged.remove(checkNewElementHandler);
          newPage.showTitle = true;
          newPage.showDescription = true;
          delete newPage["ignoreUndoRedo"];
          return !(this.survey.pages.indexOf(newPage) > -1);
        });
      }
    };
    newPage.num = this.getNewPageNum();
    newPage.onPropertyChanged.add(checkNewElementHandler);
    DragDropSurveyElements.newGhostPage = newPage;
    delete newPage["ignoreUndoRedo"];
    return newPage;
  }
  private getNewPageNum(): number {
    const pages = this.survey.pages;
    const num = pages.length + (this.survey.firstPageIsStartPage ? 0 : 1);
    return num > 0 ? num : 1;
  }
  private get canShowNewPage(): boolean {
    if (!this.survey || this.creator.pageEditMode === "single" || !this.creator.allowModifyPages) return false;
    return true;
    // if (this.creator.pageEditMode === "bypage") return true;
    // const pages: PageModel[] = this.survey.pages;
    // return pages.length === 0 || this.isModifiedPage(pages[pages.length - 1]);
  }
  private isModifiedPage(page: PageModel) {
    return Object.keys(page.toJSON()).filter(key => key !== "name").length > 0;
  }

  constructor(creator: SurveyCreatorModel) {
    super();
    this.creator = creator;
    this.pagesControllerValue = new PagesController(creator);

    this.creator.dragDropChoices.onShortcutCreated = (shortcut: HTMLElement) => {
      const cssVariables = {};
      if (this.creator.dragDropChoices["parentElement"]?.survey["isPopupEditorContent"]) {
        assign(cssVariables, designTabSurveyThemeJSON.cssVariables);
      } else {
        shortcut.classList.add("svc-surface-drag-drop-choices-shortcut");
        assign(cssVariables, this.surfaceCssVariables);
      }
      Object.keys(cssVariables).forEach((key) => {
        shortcut.style.setProperty(key, cssVariables[key]);
      });
    };

    this.initSurfaceToolbar();
    this.initSurvey();
    this.updateSurfaceCssVariables();
  }
  public updateSurfaceCssVariables() {
    const cssVariables = {};
    assign(
      cssVariables,
      designTabSurveyThemeJSON.cssVariables,
      this.creator.creatorTheme?.cssVariables || {},
      this.scaleCssVariables
    );
    this.surfaceCssVariables = cssVariables;
  }

  private initSurfaceToolbar() {
    this.surfaceToolbar = new ActionContainer();

    let defaultActionBarCss = {
      root: "sv-action-bar svc-tab-designer__surface-toolbar",
      defaultSizeMode: "",
      smallSizeMode: "",
      item: "svc-page-navigator__button",
      itemWithTitle: "",
      itemAsIcon: "",
      itemActive: "svc-page-navigator__button--active",
      itemPressed: "",
      itemIcon: "svc-page-navigator__button-icon",
      itemTitleWithIcon: "",
    };
    this.surfaceToolbar.cssClasses = defaultActionBarCss;

    const surfaceToolbarItems: Array<IAction> = [];

    surfaceToolbarItems.push(<IAction>{
      id: "zoomIn",
      locTooltipName: "ed.zoomInTooltip",
      iconName: "icon-zoomin-24x24",
      iconSize: "auto",
      enabled: new ComputedUpdater<boolean>(() => this.surfaceScale < this.maxSurfaceScaling),
      visible: new ComputedUpdater<boolean>(() => this.creator.allowZoom),
      action: () => { this.scaleSurface(this.surfaceScale + this.stepSurfaceScaling); }
    });
    surfaceToolbarItems.push(<IAction>{
      id: "zoom100",
      locTooltipName: "ed.zoom100Tooltip",
      iconName: "icon-actual-size-24x24",
      iconSize: "auto",
      enabled: new ComputedUpdater<boolean>(() => this.surfaceScale !== 100),
      visible: new ComputedUpdater<boolean>(() => this.creator.allowZoom),
      action: () => { this.scaleSurface(100); }
    });
    surfaceToolbarItems.push(<IAction>{
      id: "zoomOut",
      css: "sv-action--zoomOut",
      locTooltipName: "ed.zoomOutTooltip",
      iconName: "icon-zoomout-24x24",
      iconSize: "auto",
      enabled: new ComputedUpdater<boolean>(() => this.surfaceScale > this.minSurfaceScaling),
      visible: new ComputedUpdater<boolean>(() => this.creator.allowZoom),
      action: () => {
        this.scaleSurface(this.surfaceScale - this.stepSurfaceScaling);
        this.forceLazyRendering();
      }
    });

    surfaceToolbarItems.push({
      id: "collapseAll",
      css: "sv-action--collapse-all",
      locTooltipName: "ed.collapseAllTooltip",
      iconName: "icon-collapseall-24x24",
      iconSize: "auto",
      needSeparator: <any>new ComputedUpdater<boolean>(() => this.creator.allowZoom),
      visible: new ComputedUpdater<boolean>(() => this.creator.expandCollapseButtonVisibility != "never"),
      action: () => this.creator.expandCollapseManager.expandCollapseElements("collapse-all", true)
    });
    surfaceToolbarItems.push({
      id: "expandAll",
      css: "sv-sction--expande-all",
      locTooltipName: "ed.expandAllTooltip",
      iconName: "icon-expandall-24x24",
      iconSize: "auto",
      visible: new ComputedUpdater<boolean>(() => this.creator.expandCollapseButtonVisibility != "never"),
      action: () => this.creator.expandCollapseManager.expandCollapseElements("expand-all", false)
    });
    surfaceToolbarItems.push({
      id: "lockQuestions",
      css: "sv-action--lockQuestions",
      locTooltipName: "ed.lockQuestionsTooltip",
      iconName: "icon-questionlock-24x24",
      iconSize: "auto",
      active: this.creator.expandCollapseManager.questionsLocked,
      visible: new ComputedUpdater<boolean>(() => this.creator.expandCollapseButtonVisibility != "never"),
      action: (action) => {
        action.active = !action.active;
        this.creator.expandCollapseManager.lockQuestions(action.active);
      }
    });
    this.surfaceToolbar.setItems(surfaceToolbarItems);
  }
  private forceLazyRendering() {
    this.creator.survey.pages.forEach(page => activateLazyRenderingChecks(this.creator.rootElement?.querySelector(`#${page.id}`)));
  }

  private scaleSurface(scaleFactor: number): void {
    if (scaleFactor < this.minSurfaceScaling || scaleFactor > this.maxSurfaceScaling) return;

    this.surfaceScale = scaleFactor;
    if (!this.creator.survey.responsiveStartWidth) {
      this.creator.responsivityManager?.updateSurveyActualWidth();
    }
    this.creator.survey.widthScale = scaleFactor;

    Object.keys(this.unitDictionary).forEach(key => {
      this.scaleCssVariables[key] = (this.unitDictionary[key] * scaleFactor / 100) + "px";
    });
    this.updateSurfaceCssVariables();
  }

  get survey() {
    return this.creator.survey;
  }
  public get pagesController(): PagesController {
    return this.pagesControllerValue;
  }
  public get isToolboxVisible(): boolean {
    return this.creator.showToolbox && (this.creator.toolboxLocation === "right" || this.creator.toolboxLocation === "left");
  }
  public get placeholderText(): string {
    if (this.creator.isMobileView)
      return getLocString("ed.surveyPlaceHolderMobile");
    return getLocString("ed.surveyPlaceHolder");
  }
  public get placeholderTitleText(): string {
    if (this.creator.isMobileView)
      return getLocString("ed.surveyPlaceholderTitleMobile");
    return getLocString("ed.surveyPlaceholderTitle");
  }
  public get placeholderDescriptionText(): string {
    if (this.creator.isMobileView)
      return getLocString("ed.surveyPlaceholderDescriptionMobile");
    return getLocString("ed.surveyPlaceholderDescription");
  }
  public get showSurfaceToolbar(): boolean {
    const hasVisibleItems = this.surfaceToolbar.actions.some((action) => action.visible);
    return this.creator.allowShowSurfaceToolbar && hasVisibleItems;
  }
  public get showSurfaceTools(): boolean {
    return !this.creator.isMobileView && (this.showSurfaceToolbar || (this.creator.showPageNavigator && (this.survey.pageCount > 1 || this.creator.pageEditMode === "bypage")));
  }

  private isUpdatingNewPage: boolean;
  public onDesignerSurveyPropertyChanged(obj: Base, propName: string): void {
    if (!obj || this.isUpdatingNewPage) return;
    this.isUpdatingNewPage = true;
    if (propName === "elements" && obj.isDescendantOf("page")) {
      let updatePageController = false;
      if ((<PageModel>obj).elements.length === 0) {
        updatePageController = this.checkLastPageToDelete();
      }
      this.checkNewPage(updatePageController);
    }
    if (propName === "firstPageIsStartPage") {
      this.checkNewPage(true);
    }
    this.isUpdatingNewPage = false;
  }
  private calculateDesignerCss() {
    return new CssClassBuilder()
      .append("svc-designer-surface")
      .append(this.survey.css.container)
      .append(this.survey.css.container + "--" + this.survey.calculatedWidthMode)
      .toString();
  }
  public initSurvey() {
    if (!this.survey) return;
    this.blockAnimations();
    this.showNewPage = false;
    this.newPage = undefined;
    this.checkNewPage(false);
    this.updatePages();
    this.cssUpdater && this.cssUpdater.dispose();
    this.cssUpdater = new ComputedUpdater<string>(() => {
      return this.calculateDesignerCss();
    });
    this.survey.registerFunctionOnPropertyValueChanged("pages", () => {
      this.checkNewPage(true);
      this.updatePages();
    }, "__designer_tab_model__");
    this.survey.registerFunctionOnPropertiesValueChanged(["widthMode", "calculatedWidthMode"], () => {
      this.updateSurveyScaleStartDimensions();
    }, "__designer_tab_model__");
    this.designerCss = <any>this.cssUpdater;
    this.pagesController.onSurveyChanged();
    this.releaseAnimations();
  }
  private updateSurveyScaleStartDimensions() {
    this.survey.staticStartWidth = undefined;
    this.survey.responsiveStartWidth = undefined;
    setTimeout(() => this.scaleSurface(this.surfaceScale), 1);
  }
  private checkNewPage(updatePageController: boolean) {
    const showPlaceholder = this.survey.getAllQuestions().length === 0 && this.survey.pageCount === 0;
    this.showPlaceholder = showPlaceholder;
    this.pageCount = this.survey.pageCount;
    if (this.showPlaceholder || this.canShowNewPage) {
      const pages = this.survey.pages;
      if (!this.newPage || (pages.length > 0 && this.newPage === pages[pages.length - 1])) {
        this.newPage = this.createNewPage();
        this.showNewPage = !!this.newPage;
      }
      if (this.newPage) {
        this.newPage.showTitle = !showPlaceholder;
        this.newPage.showDescription = !showPlaceholder;
      }
    } else {
      this.showNewPage = false;
      this.newPage = undefined;
    }
    if (updatePageController) {
      if (this.newPage) {
        this.newPage.num = this.getNewPageNum();
        this.newPage.startLoadingFromJson();
        this.newPage.name = SurveyHelper.getNewPageName(this.survey.pages);
        this.newPage.endLoadingFromJson();
      }
      this.pagesController.raisePagesChanged();
    }
  }
  private updatePages() {
    this.pages = this.survey.pages.concat(this.showNewPage ? [this.newPage] : []);
  }
  public dispose(): void {
    super.dispose();
    this.cssUpdater && this.cssUpdater.dispose();
    this.survey.unRegisterFunctionOnPropertyValueChanged("pages", "__designer_tab_model__");
    this.survey.unRegisterFunctionOnPropertiesValueChanged(["widthMode", "calculatedWidthMode"], "__designer_tab_model__");
  }
  private checkLastPageToDelete(): boolean {
    if (this.survey.pageCount === 0 || this.survey.isQuestionDragging) return false;
    const lastPage: PageModel = this.survey.pages[this.survey.pageCount - 1];
    if (lastPage.elements.length > 0 || (<any>lastPage).isConverting) return false;
    if (SurveyHelper.isPagePropertiesAreModified(lastPage)) return false;
    lastPage.delete();
    if (this.survey.pageCount === 0) {
      this.creator.selectElement(this.survey);
    }
    return true;
  }

  @propertyArray() _pages: Array<PageModel> = [];

  public get pages(): Array<PageModel> {
    return this._pages;
  }
  public set pages(val: Array<PageModel>) {
    this.pagesAnimation.sync(val);
  }

  private pagesAnimation = new AnimationGroup(this.getPagesAnimationOptions(), (val) => {
    this._pages = val;
    this._pages.forEach(page => delete page["draggedFrom"]);
  }, () => this._pages);

  private getPagesAnimationOptions(): IAnimationGroupConsumer<PageModel> {
    return {
      getEnterOptions: (item, info) => {
        return {
          onBeforeRunAnimation: prepareElementForVerticalAnimation,
          cssClass: "svc-page--enter",
          onAfterRunAnimation: cleanHtmlElementAfterAnimation
        };
      },
      getLeaveOptions: (item, info) => {
        return {
          onBeforeRunAnimation: prepareElementForVerticalAnimation,
          cssClass: "svc-page--leave",
          onAfterRunAnimation: cleanHtmlElementAfterAnimation
        };
      },
      isAnimationEnabled: () => {
        return this.animationAllowed;
      },
      getKey(page) {
        return page.id;
      },
      getAnimatedElement: (item) => SurveyElementAdornerBase.GetAdorner(item)?.rootElement?.parentElement,
      getRerenderEvent: () => this.onElementRerendered,
      onCompareArrays(options) {
        const droppedPage = options.mergedItems.filter(page => page["draggedFrom"] !== undefined)[0];
        if (droppedPage) {
          options.reorderedItems = [];
          options.addedItems = [droppedPage];
          const ghostPage = new PageModel();
          ghostPage.title = droppedPage.title;
          ghostPage.num = droppedPage.num;
          ghostPage["isGhost"] = true;
          ghostPage.setSurveyImpl(droppedPage.survey as SurveyModel);
          options.deletedItems = [ghostPage];
          options.mergedItems.splice(droppedPage["draggedFrom"], 0, ghostPage);
        }
      },
    };
  }

  public clickDesigner() {
    this.creator.selectedElement = this.creator.survey;
  }
  public getRootCss(): string {
    let rootCss = this.survey.css.root;
    if (this.showSurfaceTools) {
      rootCss += " svc-tab-designer--with-surface-tools";
    }
    if (this.showPlaceholder) {
      rootCss += " svc-tab-designer--with-placeholder";
    }
    rootCss += " svc-tab-designer--" + this.creator.pageEditMode + "-mode";
    return rootCss;
  }
}